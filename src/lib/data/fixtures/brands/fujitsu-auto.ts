import type { BrandDataset } from "../../types";

export const fujitsuDataset: BrandDataset = {
  brand: {
    id: "fujitsu",
    slug: "fujitsu",
    name: "FUJITSU",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "fujitsu-h-series",
      slug: "fujitsu-h-series",
      name: "H-Series",
      brandId: "fujitsu",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard",
      slug: "fujitsu-standard",
      name: "Standard",
      brandId: "fujitsu",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series",
      slug: "fujitsu-airstage-h-series",
      name: "AIRSTAGE H series",
      brandId: "fujitsu",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s",
      slug: "fujitsu-j-7s",
      name: "J-7S",
      brandId: "fujitsu",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "fujitsu-h-series-wall-single",
      slug: "fujitsu-h-series-wall-single",
      name: "H-Series",
      seriesId: "fujitsu-h-series",
      brandId: "fujitsu",
      modelNumber: "H-Series",
      normalizedModelNumber: "h-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 6200,
      heatingCapacity5FMaxBtu: 29400,
      seer2Min: 16,
      seer2Max: 33.1,
      hspf2Min: 8.7,
      hspf2Max: 13.4,
      cop5FMin: 1.76,
      cop5FMax: 2.52,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single",
      slug: "fujitsu-standard-wall-single",
      name: "Standard",
      seriesId: "fujitsu-standard",
      brandId: "fujitsu",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5200,
      heatingCapacity5FMaxBtu: 43500,
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
      id: "fujitsu-airstage-h-series-wall-single",
      slug: "fujitsu-airstage-h-series-wall-single",
      name: "AIRSTAGE H series",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H series",
      normalizedModelNumber: "airstage-h-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 46000,
      heatingCapacity5FMinBtu: 6400,
      heatingCapacity5FMaxBtu: 37200,
      seer2Min: 16.4,
      seer2Max: 33.5,
      hspf2Min: 9,
      hspf2Max: 14,
      cop5FMin: 1.9,
      cop5FMax: 2.62,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single",
      slug: "fujitsu-j-7s-wall-single",
      name: "J-7S",
      seriesId: "fujitsu-j-7s",
      brandId: "fujitsu",
      modelNumber: "J-7S",
      normalizedModelNumber: "j-7s",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 17400,
      heatingCapacity5FMaxBtu: 35800,
      seer2Min: 15.4,
      seer2Max: 22.2,
      hspf2Min: 9,
      hspf2Max: 11.3,
      cop5FMin: 1.94,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "fujitsu-aou24rlxfz",
      modelNumber: "AOU24RLXFZ",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlxfz",
      modelNumber: "AOU18RLXFZ",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rlff",
      modelNumber: "AOU9RLFF",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rlff",
      modelNumber: "AOU12RLFF",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou15rlff",
      modelNumber: "AOU15RLFF",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rlffh",
      modelNumber: "AOU9RLFFH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rlffh",
      modelNumber: "AOU12RLFFH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou15rlffh",
      modelNumber: "AOU15RLFFH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlxfzh",
      modelNumber: "AOU18RLXFZH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rlxfzh",
      modelNumber: "AOU24RLXFZH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlxfwh",
      modelNumber: "AOU18RLXFWH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rlxfwh",
      modelNumber: "AOU24RLXFWH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlxfzh",
      modelNumber: "AOU36RLXFZH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou30rlxeh",
      modelNumber: "AOU30RLXEH",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rglx",
      modelNumber: "AOU18RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rglx",
      modelNumber: "AOU24RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug09lzas1",
      modelNumber: "AOUG09LZAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug09lzah1",
      modelNumber: "AOUG09LZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug12lzas1",
      modelNumber: "AOUG12LZAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug12lzah1",
      modelNumber: "AOUG12LZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug15lzas1",
      modelNumber: "AOUG15LZAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug15lzah1",
      modelNumber: "AOUG15LZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug36lmas1",
      modelNumber: "AOUG36LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09lmah1",
      modelNumber: "AOUH09LMAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lmah1",
      modelNumber: "AOUH12LMAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09luas1",
      modelNumber: "AOUH09LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12luas1",
      modelNumber: "AOUH12LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18luas1",
      modelNumber: "AOUH18LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09lpas1",
      modelNumber: "AOUH09LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18lmas1",
      modelNumber: "AOUH18LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24lmas1",
      modelNumber: "AOUH24LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09leas1",
      modelNumber: "AOUH09LEAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09lmas1",
      modelNumber: "AOUH09LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lmas1",
      modelNumber: "AOUH12LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30luah1",
      modelNumber: "AOUH30LUAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lmbh1",
      modelNumber: "AOUH12LMBH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lmbs1",
      modelNumber: "AOUH12LMBS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24luas1",
      modelNumber: "AOUH24LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30luas1",
      modelNumber: "AOUH30LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rls2",
      modelNumber: "AOU9RLS2",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rlfc",
      modelNumber: "AOU9RLFC",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rlfc",
      modelNumber: "AOU12RLFC",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlfc",
      modelNumber: "AOU18RLFC",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rlfw1",
      modelNumber: "AOU9RLFW1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rlfw1",
      modelNumber: "AOU12RLFW1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlb",
      modelNumber: "AOU18RLB",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rlb",
      modelNumber: "AOU24RLB",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rls3h",
      modelNumber: "AOU12RLS3H",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlxfz1",
      modelNumber: "AOU36RLXFZ1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou60rlavm",
      modelNumber: "AOU60RLAVM",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rlavm",
      modelNumber: "AOU48RLAVM",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlavm",
      modelNumber: "AOU36RLAVM",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rls3",
      modelNumber: "AOU9RLS3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou9rls3h",
      modelNumber: "AOU9RLS3H",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou12rls3",
      modelNumber: "AOU12RLS3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou15rls3",
      modelNumber: "AOU15RLS3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou15rls3h",
      modelNumber: "AOU15RLS3H",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou18rlxfw1",
      modelNumber: "AOU18RLXFW1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou24rlxfw1",
      modelNumber: "AOU24RLXFW1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou45rlxfz",
      modelNumber: "AOU45RLXFZ",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rlavs",
      modelNumber: "AOU48RLAVS",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlavs",
      modelNumber: "AOU36RLAVS",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou30rglx",
      modelNumber: "AOU30RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rglx",
      modelNumber: "AOU36RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou42rglx",
      modelNumber: "AOU42RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rglx",
      modelNumber: "AOU48RGLX",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug09lmas1",
      modelNumber: "AOUG09LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug12lmas1",
      modelNumber: "AOUG12LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aoug48lmas1",
      modelNumber: "AOUG48LMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou60rlavm4",
      modelNumber: "AOU60RLAVM4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rlavm4",
      modelNumber: "AOU48RLAVM4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlavm4",
      modelNumber: "AOU36RLAVM4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou48rlavs4",
      modelNumber: "AOU48RLAVS4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aou36rlavs4",
      modelNumber: "AOU36RLAVS4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12lpas1",
      modelNumber: "AOUH12LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18lpas1",
      modelNumber: "AOUH18LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24lpas1",
      modelNumber: "AOUH24LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12leas1",
      modelNumber: "AOUH12LEAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30lpas1",
      modelNumber: "AOUH30LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36lpas1",
      modelNumber: "AOUH36LPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36lmah1",
      modelNumber: "AOUH36LMAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh48lmah1",
      modelNumber: "AOUH48LMAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36luas1",
      modelNumber: "AOUH36LUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aolh09knas1",
      modelNumber: "AOLH09KNAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aolh12knas1",
      modelNumber: "AOLH12KNAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09kmas1",
      modelNumber: "AOUH09KMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12kmas1",
      modelNumber: "AOUH12KMAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09kzah1",
      modelNumber: "AOUH09KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12kzah1",
      modelNumber: "AOUH12KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh15kzah1",
      modelNumber: "AOUH15KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09kpas1",
      modelNumber: "AOUH09KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12kpas1",
      modelNumber: "AOUH12KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30kpas1",
      modelNumber: "AOUH30KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kpas1",
      modelNumber: "AOUH36KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09kuas1",
      modelNumber: "AOUH09KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12kuas1",
      modelNumber: "AOUH12KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kuas1",
      modelNumber: "AOUH18KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kuas1",
      modelNumber: "AOUH24KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh30kuas1",
      modelNumber: "AOUH30KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kuas",
      modelNumber: "AOUH36KUAS",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kuas1",
      modelNumber: "AOUH36KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kpas1",
      modelNumber: "AOUH18KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kpas1",
      modelNumber: "AOUH24KPAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kwas2",
      modelNumber: "AOUH18KWAS2",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kwas3",
      modelNumber: "AOUH24KWAS3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kwas4",
      modelNumber: "AOUH36KWAS4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kwah2",
      modelNumber: "AOUH18KWAH2",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kwah3",
      modelNumber: "AOUH24KWAH3",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh18kzah1",
      modelNumber: "AOUH18KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh24kzah1",
      modelNumber: "AOUH24KZAH1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh45kwas5",
      modelNumber: "AOUH45KWAS5",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh36kwah4",
      modelNumber: "AOUH36KWAH4",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh42kuas1",
      modelNumber: "AOUH42KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh48kuas1",
      modelNumber: "AOUH48KUAS1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh09ktap1",
      modelNumber: "AOUH09KTAP1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh12ktap1",
      modelNumber: "AOUH12KTAP1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouh15ktap1",
      modelNumber: "AOUH15KTAP1",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouk024ssan7",
      modelNumber: "AOUK024SSAN7",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouk036ssan7",
      modelNumber: "AOUK036SSAN7",
      brandId: "fujitsu",
      refrigerant: null as any,
    },
    {
      id: "fujitsu-aouk048ssan7",
      modelNumber: "AOUK048SSAN7",
      brandId: "fujitsu",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "fujitsu-h-series-wall-single-cfg-1",
      slug: "fujitsu-h-series-wall-single-cfg-1",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 18.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-2",
      slug: "fujitsu-h-series-wall-single-cfg-2",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 18.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-3",
      slug: "fujitsu-h-series-wall-single-cfg-3",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou18rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.15,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-4",
      slug: "fujitsu-h-series-wall-single-cfg-4",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou9rlff",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-5",
      slug: "fujitsu-h-series-wall-single-cfg-5",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou12rlff",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-6",
      slug: "fujitsu-h-series-wall-single-cfg-6",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou15rlff",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: 20.3,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-7",
      slug: "fujitsu-h-series-wall-single-cfg-7",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou9rlffh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-8",
      slug: "fujitsu-h-series-wall-single-cfg-8",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou12rlffh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-9",
      slug: "fujitsu-h-series-wall-single-cfg-9",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou15rlffh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: 20.3,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-10",
      slug: "fujitsu-h-series-wall-single-cfg-10",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou18rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-11",
      slug: "fujitsu-h-series-wall-single-cfg-11",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou18rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-12",
      slug: "fujitsu-h-series-wall-single-cfg-12",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-13",
      slug: "fujitsu-h-series-wall-single-cfg-13",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.8,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-14",
      slug: "fujitsu-h-series-wall-single-cfg-14",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou18rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.25,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-15",
      slug: "fujitsu-h-series-wall-single-cfg-15",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 18.9,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-16",
      slug: "fujitsu-h-series-wall-single-cfg-16",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou18rlxfwh",
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
      id: "fujitsu-h-series-wall-single-cfg-17",
      slug: "fujitsu-h-series-wall-single-cfg-17",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rlxfwh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-18",
      slug: "fujitsu-h-series-wall-single-cfg-18",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou36rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-19",
      slug: "fujitsu-h-series-wall-single-cfg-19",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou36rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 18,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-20",
      slug: "fujitsu-h-series-wall-single-cfg-20",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou36rlxfzh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.25,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-21",
      slug: "fujitsu-h-series-wall-single-cfg-21",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou30rlxeh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-22",
      slug: "fujitsu-h-series-wall-single-cfg-22",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou18rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-23",
      slug: "fujitsu-h-series-wall-single-cfg-23",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.8,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-24",
      slug: "fujitsu-h-series-wall-single-cfg-24",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou18rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-25",
      slug: "fujitsu-h-series-wall-single-cfg-25",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rglx",
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
      id: "fujitsu-h-series-wall-single-cfg-26",
      slug: "fujitsu-h-series-wall-single-cfg-26",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug09lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-27",
      slug: "fujitsu-h-series-wall-single-cfg-27",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug09lzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-28",
      slug: "fujitsu-h-series-wall-single-cfg-28",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug12lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-29",
      slug: "fujitsu-h-series-wall-single-cfg-29",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug12lzah1",
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
      id: "fujitsu-h-series-wall-single-cfg-30",
      slug: "fujitsu-h-series-wall-single-cfg-30",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug15lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 25.3,
      hspf2: 12.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-31",
      slug: "fujitsu-h-series-wall-single-cfg-31",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug15lzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 25.3,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-32",
      slug: "fujitsu-h-series-wall-single-cfg-32",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aou24rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.8,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-33",
      slug: "fujitsu-h-series-wall-single-cfg-33",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug36lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.1,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-34",
      slug: "fujitsu-h-series-wall-single-cfg-34",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09lmah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.5,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-35",
      slug: "fujitsu-h-series-wall-single-cfg-35",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12lmah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-36",
      slug: "fujitsu-h-series-wall-single-cfg-36",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.5,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-37",
      slug: "fujitsu-h-series-wall-single-cfg-37",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-38",
      slug: "fujitsu-h-series-wall-single-cfg-38",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-39",
      slug: "fujitsu-h-series-wall-single-cfg-39",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.5,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-40",
      slug: "fujitsu-h-series-wall-single-cfg-40",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-41",
      slug: "fujitsu-h-series-wall-single-cfg-41",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 21.5,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-42",
      slug: "fujitsu-h-series-wall-single-cfg-42",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug09lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-43",
      slug: "fujitsu-h-series-wall-single-cfg-43",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug09lzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-44",
      slug: "fujitsu-h-series-wall-single-cfg-44",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug12lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-45",
      slug: "fujitsu-h-series-wall-single-cfg-45",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug12lzah1",
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
      id: "fujitsu-h-series-wall-single-cfg-46",
      slug: "fujitsu-h-series-wall-single-cfg-46",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug15lzas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 25.3,
      hspf2: 12.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-47",
      slug: "fujitsu-h-series-wall-single-cfg-47",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aoug15lzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 25.3,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-48",
      slug: "fujitsu-h-series-wall-single-cfg-48",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09lpas1",
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
      id: "fujitsu-h-series-wall-single-cfg-49",
      slug: "fujitsu-h-series-wall-single-cfg-49",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-50",
      slug: "fujitsu-h-series-wall-single-cfg-50",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 22.5,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-51",
      slug: "fujitsu-h-series-wall-single-cfg-51",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-52",
      slug: "fujitsu-h-series-wall-single-cfg-52",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09leas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-53",
      slug: "fujitsu-h-series-wall-single-cfg-53",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.5,
      hspf2: 12.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-54",
      slug: "fujitsu-h-series-wall-single-cfg-54",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-55",
      slug: "fujitsu-h-series-wall-single-cfg-55",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30luah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: 18.8,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-56",
      slug: "fujitsu-h-series-wall-single-cfg-56",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12lmbh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-57",
      slug: "fujitsu-h-series-wall-single-cfg-57",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12lmbs1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-58",
      slug: "fujitsu-h-series-wall-single-cfg-58",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-59",
      slug: "fujitsu-h-series-wall-single-cfg-59",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-60",
      slug: "fujitsu-h-series-wall-single-cfg-60",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-61",
      slug: "fujitsu-h-series-wall-single-cfg-61",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-62",
      slug: "fujitsu-h-series-wall-single-cfg-62",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-63",
      slug: "fujitsu-h-series-wall-single-cfg-63",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-64",
      slug: "fujitsu-h-series-wall-single-cfg-64",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-65",
      slug: "fujitsu-h-series-wall-single-cfg-65",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-66",
      slug: "fujitsu-h-series-wall-single-cfg-66",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 18.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-67",
      slug: "fujitsu-h-series-wall-single-cfg-67",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-h-series-wall-single-cfg-68",
      slug: "fujitsu-h-series-wall-single-cfg-68",
      modelId: "fujitsu-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18luas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-1",
      slug: "fujitsu-standard-wall-single-cfg-1",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou9rls2",
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
      id: "fujitsu-standard-wall-single-cfg-2",
      slug: "fujitsu-standard-wall-single-cfg-2",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou9rlfc",
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
      id: "fujitsu-standard-wall-single-cfg-3",
      slug: "fujitsu-standard-wall-single-cfg-3",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou9rlfc",
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
      id: "fujitsu-standard-wall-single-cfg-4",
      slug: "fujitsu-standard-wall-single-cfg-4",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou12rlfc",
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
      id: "fujitsu-standard-wall-single-cfg-5",
      slug: "fujitsu-standard-wall-single-cfg-5",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou12rlfc",
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
      id: "fujitsu-standard-wall-single-cfg-6",
      slug: "fujitsu-standard-wall-single-cfg-6",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou18rlfc",
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
      id: "fujitsu-standard-wall-single-cfg-7",
      slug: "fujitsu-standard-wall-single-cfg-7",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou18rlfc",
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
      id: "fujitsu-standard-wall-single-cfg-8",
      slug: "fujitsu-standard-wall-single-cfg-8",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou9rlfw1",
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
      id: "fujitsu-standard-wall-single-cfg-9",
      slug: "fujitsu-standard-wall-single-cfg-9",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou12rlfw1",
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
      id: "fujitsu-standard-wall-single-cfg-10",
      slug: "fujitsu-standard-wall-single-cfg-10",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou18rlb",
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
      id: "fujitsu-standard-wall-single-cfg-11",
      slug: "fujitsu-standard-wall-single-cfg-11",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou24rlb",
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
      id: "fujitsu-standard-wall-single-cfg-12",
      slug: "fujitsu-standard-wall-single-cfg-12",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou12rls3h",
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
      id: "fujitsu-standard-wall-single-cfg-13",
      slug: "fujitsu-standard-wall-single-cfg-13",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlxfz1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-14",
      slug: "fujitsu-standard-wall-single-cfg-14",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlxfz1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-15",
      slug: "fujitsu-standard-wall-single-cfg-15",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlxfz1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-16",
      slug: "fujitsu-standard-wall-single-cfg-16",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou60rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-17",
      slug: "fujitsu-standard-wall-single-cfg-17",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou60rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-18",
      slug: "fujitsu-standard-wall-single-cfg-18",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou60rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-19",
      slug: "fujitsu-standard-wall-single-cfg-19",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-20",
      slug: "fujitsu-standard-wall-single-cfg-20",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-21",
      slug: "fujitsu-standard-wall-single-cfg-21",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-22",
      slug: "fujitsu-standard-wall-single-cfg-22",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-23",
      slug: "fujitsu-standard-wall-single-cfg-23",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-24",
      slug: "fujitsu-standard-wall-single-cfg-24",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavm",
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
      id: "fujitsu-standard-wall-single-cfg-25",
      slug: "fujitsu-standard-wall-single-cfg-25",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou9rls3",
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
      id: "fujitsu-standard-wall-single-cfg-26",
      slug: "fujitsu-standard-wall-single-cfg-26",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou9rls3h",
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
      id: "fujitsu-standard-wall-single-cfg-27",
      slug: "fujitsu-standard-wall-single-cfg-27",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou12rls3",
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
      id: "fujitsu-standard-wall-single-cfg-28",
      slug: "fujitsu-standard-wall-single-cfg-28",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou12rls3h",
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
      id: "fujitsu-standard-wall-single-cfg-29",
      slug: "fujitsu-standard-wall-single-cfg-29",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou15rls3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-30",
      slug: "fujitsu-standard-wall-single-cfg-30",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou15rls3h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-31",
      slug: "fujitsu-standard-wall-single-cfg-31",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou18rlxfw1",
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
      id: "fujitsu-standard-wall-single-cfg-32",
      slug: "fujitsu-standard-wall-single-cfg-32",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou24rlxfw1",
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
      id: "fujitsu-standard-wall-single-cfg-33",
      slug: "fujitsu-standard-wall-single-cfg-33",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou45rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-34",
      slug: "fujitsu-standard-wall-single-cfg-34",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou45rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-35",
      slug: "fujitsu-standard-wall-single-cfg-35",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou45rlxfz",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-36",
      slug: "fujitsu-standard-wall-single-cfg-36",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavs",
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
      id: "fujitsu-standard-wall-single-cfg-37",
      slug: "fujitsu-standard-wall-single-cfg-37",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavs",
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
      id: "fujitsu-standard-wall-single-cfg-38",
      slug: "fujitsu-standard-wall-single-cfg-38",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavs",
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
      id: "fujitsu-standard-wall-single-cfg-39",
      slug: "fujitsu-standard-wall-single-cfg-39",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavs",
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
      id: "fujitsu-standard-wall-single-cfg-40",
      slug: "fujitsu-standard-wall-single-cfg-40",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavs",
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
      id: "fujitsu-standard-wall-single-cfg-41",
      slug: "fujitsu-standard-wall-single-cfg-41",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavs",
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
      id: "fujitsu-standard-wall-single-cfg-42",
      slug: "fujitsu-standard-wall-single-cfg-42",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou30rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-43",
      slug: "fujitsu-standard-wall-single-cfg-43",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rglx",
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
      id: "fujitsu-standard-wall-single-cfg-44",
      slug: "fujitsu-standard-wall-single-cfg-44",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou12rlfc",
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
      id: "fujitsu-standard-wall-single-cfg-45",
      slug: "fujitsu-standard-wall-single-cfg-45",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou30rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-46",
      slug: "fujitsu-standard-wall-single-cfg-46",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rglx",
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
      id: "fujitsu-standard-wall-single-cfg-47",
      slug: "fujitsu-standard-wall-single-cfg-47",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou42rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-48",
      slug: "fujitsu-standard-wall-single-cfg-48",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rglx",
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
      id: "fujitsu-standard-wall-single-cfg-49",
      slug: "fujitsu-standard-wall-single-cfg-49",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rglx",
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
      id: "fujitsu-standard-wall-single-cfg-50",
      slug: "fujitsu-standard-wall-single-cfg-50",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aoug09lmas1",
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
      id: "fujitsu-standard-wall-single-cfg-51",
      slug: "fujitsu-standard-wall-single-cfg-51",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aoug12lmas1",
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
      id: "fujitsu-standard-wall-single-cfg-52",
      slug: "fujitsu-standard-wall-single-cfg-52",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou30rglx",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-53",
      slug: "fujitsu-standard-wall-single-cfg-53",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aoug48lmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-54",
      slug: "fujitsu-standard-wall-single-cfg-54",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou60rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-55",
      slug: "fujitsu-standard-wall-single-cfg-55",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou60rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-56",
      slug: "fujitsu-standard-wall-single-cfg-56",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-57",
      slug: "fujitsu-standard-wall-single-cfg-57",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-58",
      slug: "fujitsu-standard-wall-single-cfg-58",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-59",
      slug: "fujitsu-standard-wall-single-cfg-59",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-60",
      slug: "fujitsu-standard-wall-single-cfg-60",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavs4",
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
      id: "fujitsu-standard-wall-single-cfg-61",
      slug: "fujitsu-standard-wall-single-cfg-61",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavs4",
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
      id: "fujitsu-standard-wall-single-cfg-62",
      slug: "fujitsu-standard-wall-single-cfg-62",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavs4",
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
      id: "fujitsu-standard-wall-single-cfg-63",
      slug: "fujitsu-standard-wall-single-cfg-63",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavs4",
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
      id: "fujitsu-standard-wall-single-cfg-64",
      slug: "fujitsu-standard-wall-single-cfg-64",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou60rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-65",
      slug: "fujitsu-standard-wall-single-cfg-65",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-66",
      slug: "fujitsu-standard-wall-single-cfg-66",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavm4",
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
      id: "fujitsu-standard-wall-single-cfg-67",
      slug: "fujitsu-standard-wall-single-cfg-67",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou48rlavs4",
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
      id: "fujitsu-standard-wall-single-cfg-68",
      slug: "fujitsu-standard-wall-single-cfg-68",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aou36rlavs4",
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
      id: "fujitsu-standard-wall-single-cfg-69",
      slug: "fujitsu-standard-wall-single-cfg-69",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh12lpas1",
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
      id: "fujitsu-standard-wall-single-cfg-70",
      slug: "fujitsu-standard-wall-single-cfg-70",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh18lpas1",
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
      id: "fujitsu-standard-wall-single-cfg-71",
      slug: "fujitsu-standard-wall-single-cfg-71",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh24lpas1",
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
      id: "fujitsu-standard-wall-single-cfg-72",
      slug: "fujitsu-standard-wall-single-cfg-72",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh12leas1",
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
      id: "fujitsu-standard-wall-single-cfg-73",
      slug: "fujitsu-standard-wall-single-cfg-73",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh30lpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-74",
      slug: "fujitsu-standard-wall-single-cfg-74",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh36lpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-75",
      slug: "fujitsu-standard-wall-single-cfg-75",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh36lmah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-76",
      slug: "fujitsu-standard-wall-single-cfg-76",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh48lmah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-standard-wall-single-cfg-77",
      slug: "fujitsu-standard-wall-single-cfg-77",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh36luas1",
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
      id: "fujitsu-standard-wall-single-cfg-78",
      slug: "fujitsu-standard-wall-single-cfg-78",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh36luas1",
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
      id: "fujitsu-standard-wall-single-cfg-79",
      slug: "fujitsu-standard-wall-single-cfg-79",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aouh36luas1",
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
      id: "fujitsu-standard-wall-single-cfg-80",
      slug: "fujitsu-standard-wall-single-cfg-80",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aolh09knas1",
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
      id: "fujitsu-standard-wall-single-cfg-81",
      slug: "fujitsu-standard-wall-single-cfg-81",
      modelId: "fujitsu-standard-wall-single",
      outdoorUnitId: "fujitsu-aolh12knas1",
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
      id: "fujitsu-airstage-h-series-wall-single-cfg-1",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-1",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09kmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 12.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-2",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-2",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12kmas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27.5,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-3",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-3",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-4",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-4",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 30.5,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-5",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-5",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh15kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 27.5,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-6",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-6",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-7",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-7",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12kpas1",
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
      id: "fujitsu-airstage-h-series-wall-single-cfg-8",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-8",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-9",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-9",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-10",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-10",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.4,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-11",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-11",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-12",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-12",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.9,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-13",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-13",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.4,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-14",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-14",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-15",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-15",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.8,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-16",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-16",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kuas",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-17",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-17",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 26.3,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-18",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-18",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.2,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-19",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-19",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-20",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-20",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.3,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-21",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-21",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-22",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-22",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.6,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-23",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-23",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-24",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-24",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-25",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-25",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-26",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-26",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-27",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-27",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kpas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-28",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-28",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kwas2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-29",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-29",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kwas2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-30",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-30",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kwas3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-31",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-31",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kwas3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-32",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-32",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kwas4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-33",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-33",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kwas4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-34",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-34",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kwah2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-35",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-35",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kwah2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-36",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-36",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kwah3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 23.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-37",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-37",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kwah3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-38",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-38",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kwas2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-39",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-39",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kwas3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-40",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-40",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kwas4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-41",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-41",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kwah2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-42",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-42",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kwah3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 22,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-43",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-43",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.5,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-44",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-44",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kzah1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24,
      hspf2: 11.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-45",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-45",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh45kwas5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-46",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-46",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh45kwas5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-47",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-47",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kwah4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-48",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-48",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kwah4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-49",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-49",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh45kwas5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-50",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-50",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kwah4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-51",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-51",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh42kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 19,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-52",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-52",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh48kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-53",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-53",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh42kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 17.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-54",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-54",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh48kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-55",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-55",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-56",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-56",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 31.5,
      hspf2: 13.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-57",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-57",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh15ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 28.7,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-58",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-58",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh09ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-59",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-59",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 31.5,
      hspf2: 13.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-60",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-60",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh15ktap1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 28.7,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-61",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-61",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh12kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.9,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-62",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-62",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh18kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-63",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-63",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh24kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.7,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-64",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-64",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh30kuas1",
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
      id: "fujitsu-airstage-h-series-wall-single-cfg-65",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-65",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh36kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-wall-single-cfg-66",
      slug: "fujitsu-airstage-h-series-wall-single-cfg-66",
      modelId: "fujitsu-airstage-h-series-wall-single",
      outdoorUnitId: "fujitsu-aouh48kuas1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-1",
      slug: "fujitsu-j-7s-wall-single-cfg-1",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk024ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.2,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-2",
      slug: "fujitsu-j-7s-wall-single-cfg-2",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk024ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-3",
      slug: "fujitsu-j-7s-wall-single-cfg-3",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk036ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-4",
      slug: "fujitsu-j-7s-wall-single-cfg-4",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk036ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-5",
      slug: "fujitsu-j-7s-wall-single-cfg-5",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk048ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-6",
      slug: "fujitsu-j-7s-wall-single-cfg-6",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk048ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 15.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-7",
      slug: "fujitsu-j-7s-wall-single-cfg-7",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk024ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.1,
      hspf2: 10.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-8",
      slug: "fujitsu-j-7s-wall-single-cfg-8",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk036ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.9,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-wall-single-cfg-9",
      slug: "fujitsu-j-7s-wall-single-cfg-9",
      modelId: "fujitsu-j-7s-wall-single",
      outdoorUnitId: "fujitsu-aouk048ssan7",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.8,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-4",
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
      configurationId: "fujitsu-h-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-7",
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
      configurationId: "fujitsu-h-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18700,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.76,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18700,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-h-series-wall-single-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-1",
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
      configurationId: "fujitsu-standard-wall-single-cfg-2",
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
      configurationId: "fujitsu-standard-wall-single-cfg-3",
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
      configurationId: "fujitsu-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-8",
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
      configurationId: "fujitsu-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-10",
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
      configurationId: "fujitsu-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-22",
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
      configurationId: "fujitsu-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-29",
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
      configurationId: "fujitsu-standard-wall-single-cfg-30",
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
      configurationId: "fujitsu-standard-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-44",
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
      configurationId: "fujitsu-standard-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-46",
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
      configurationId: "fujitsu-standard-wall-single-cfg-47",
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
      configurationId: "fujitsu-standard-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-51",
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
      configurationId: "fujitsu-standard-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-70",
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
      configurationId: "fujitsu-standard-wall-single-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-72",
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
      configurationId: "fujitsu-standard-wall-single-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-77",
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
      configurationId: "fujitsu-standard-wall-single-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-standard-wall-single-cfg-81",
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
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-35",
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
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.62,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.62,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 2.05,
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
