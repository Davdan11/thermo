import type { BrandDataset } from "../../types";

export const acdDataset: BrandDataset = {
  brand: {
    id: "acd",
    slug: "acd",
    name: "ACD",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "acd-standard",
      slug: "acd-standard",
      name: "Standard",
      brandId: "acd",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-lomo-38seer",
      slug: "acd-lomo-38seer",
      name: "LOMO 38SEER",
      brandId: "acd",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-ultra-heat-free-match",
      slug: "acd-ultra-heat-free-match",
      name: "Ultra heat free match",
      brandId: "acd",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx",
      slug: "acd-flexx",
      name: "Flexx",
      brandId: "acd",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-free-match",
      slug: "acd-free-match",
      name: "Free Match",
      brandId: "acd",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-pular",
      slug: "acd-pular",
      name: "Pular",
      brandId: "acd",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-new-multi-zone-odu",
      slug: "acd-new-multi-zone-odu",
      name: "New Multi-zone ODU",
      brandId: "acd",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "acd-standard-wall-single",
      slug: "acd-standard-wall-single",
      name: "Standard",
      seriesId: "acd-standard",
      brandId: "acd",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5600,
      heatingCapacity5FMaxBtu: 29000,
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
      id: "acd-lomo-38seer-wall-single",
      slug: "acd-lomo-38seer-wall-single",
      name: "LOMO 38SEER",
      seriesId: "acd-lomo-38seer",
      brandId: "acd",
      modelNumber: "LOMO 38SEER",
      normalizedModelNumber: "lomo-38seer",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 15500,
      seer2Min: 21.5,
      seer2Max: 27,
      hspf2Min: 8.5,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 1.91,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-ultra-heat-free-match-wall-single",
      slug: "acd-ultra-heat-free-match-wall-single",
      name: "Ultra heat free match",
      seriesId: "acd-ultra-heat-free-match",
      brandId: "acd",
      modelNumber: "Ultra heat free match",
      normalizedModelNumber: "ultra-heat-free-match",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 16,
      seer2Max: 20,
      hspf2Min: 8.6,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 1.82,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted",
      slug: "acd-flexx-central-ducted",
      name: "Flexx",
      seriesId: "acd-flexx",
      brandId: "acd",
      modelNumber: "Flexx",
      normalizedModelNumber: "flexx",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 36000,
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
    },
    {
      id: "acd-free-match-wall-single",
      slug: "acd-free-match-wall-single",
      name: "Free Match",
      seriesId: "acd-free-match",
      brandId: "acd",
      modelNumber: "Free Match",
      normalizedModelNumber: "free-match",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 14700,
      heatingCapacity5FMaxBtu: 35600,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.82,
      cop5FMax: 2.22,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-pular-wall-single",
      slug: "acd-pular-wall-single",
      name: "Pular",
      seriesId: "acd-pular",
      brandId: "acd",
      modelNumber: "Pular",
      normalizedModelNumber: "pular",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 10800,
      seer2Min: 23,
      seer2Max: 24,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-new-multi-zone-odu-wall-single",
      slug: "acd-new-multi-zone-odu-wall-single",
      name: "New Multi-zone ODU",
      seriesId: "acd-new-multi-zone-odu",
      brandId: "acd",
      modelNumber: "New Multi-zone ODU",
      normalizedModelNumber: "new-multi-zone-odu",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2.22,
      cop5FMax: 2.22,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "acd-ocd09kch23s-o",
      modelNumber: "OCD09KCH23S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-ocd12kch22s-o",
      modelNumber: "OCD12KCH22S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-ocd18kch20s-o",
      modelNumber: "OCD18KCH20S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-ocd24kch20s-o",
      modelNumber: "OCD24KCH20S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-uhd09kch38s-o",
      modelNumber: "UHD09KCH38S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd18kch22s-o",
      modelNumber: "MPD18KCH22S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd24kch21s-o",
      modelNumber: "MPD24KCH21S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd30kch21s-o",
      modelNumber: "MPD30KCH21S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd36kch21s-o",
      modelNumber: "MPD36KCH21S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd42kch21s-o",
      modelNumber: "MPD42KCH21S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-ocd15kch20s-o",
      modelNumber: "OCD15KCH20S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-chd09kch19s-o",
      modelNumber: "CHD09KCH19S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-chd12kch17s-o",
      modelNumber: "CHD12KCH17S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-chd18kch17s-o",
      modelNumber: "CHD18KCH17S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-chd24kch18s-o",
      modelNumber: "CHD24KCH18S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-pud09kch25s-o",
      modelNumber: "PUD09KCH25S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-pud24kch24s-o",
      modelNumber: "PUD24KCH24S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-pud30kch20s-o",
      modelNumber: "PUD30KCH20S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-pud36kch20s-o",
      modelNumber: "PUD36KCH20S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-uhd12kch31s-o",
      modelNumber: "UHD12KCH31S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-uhd18kch25s-o",
      modelNumber: "UHD18KCH25S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-uhd24kch22s-o",
      modelNumber: "UHD24KCH22S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-uhd09kch38sb-o",
      modelNumber: "UHD09KCH38SB-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mud18kch23s-o",
      modelNumber: "MUD18KCH23S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mud24kch23s-o",
      modelNumber: "MUD24KCH23S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mud36kch23s-o",
      modelNumber: "MUD36KCH23S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mud42kch23s-o",
      modelNumber: "MUD42KCH23S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-fxd-acd36",
      modelNumber: "FXD-ACD36",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-fxd-acd60",
      modelNumber: "FXD-ACD60",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd18kch21sb-o",
      modelNumber: "MPD18KCH21SB-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd24kch21sb-o",
      modelNumber: "MPD24KCH21SB-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd30kch21sb-o",
      modelNumber: "MPD30KCH21SB-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd36kch21sb-o",
      modelNumber: "MPD36KCH21SB-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-mpd42kch21sb-o",
      modelNumber: "MPD42KCH21SB-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-pud12kch24s-o",
      modelNumber: "PUD12KCH24S-O",
      brandId: "acd",
      refrigerant: null as any,
    },
    {
      id: "acd-pud18kch23s-o",
      modelNumber: "PUD18KCH23S-O",
      brandId: "acd",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "acd-standard-wall-single-cfg-1",
      slug: "acd-standard-wall-single-cfg-1",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-ocd09kch23s-o",
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
      id: "acd-standard-wall-single-cfg-2",
      slug: "acd-standard-wall-single-cfg-2",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-ocd12kch22s-o",
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
      id: "acd-standard-wall-single-cfg-3",
      slug: "acd-standard-wall-single-cfg-3",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-ocd18kch20s-o",
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
      id: "acd-standard-wall-single-cfg-4",
      slug: "acd-standard-wall-single-cfg-4",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-ocd24kch20s-o",
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
      id: "acd-standard-wall-single-cfg-5",
      slug: "acd-standard-wall-single-cfg-5",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-uhd09kch38s-o",
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
      id: "acd-standard-wall-single-cfg-6",
      slug: "acd-standard-wall-single-cfg-6",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-mpd18kch22s-o",
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
      id: "acd-standard-wall-single-cfg-7",
      slug: "acd-standard-wall-single-cfg-7",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-mpd24kch21s-o",
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
      id: "acd-standard-wall-single-cfg-8",
      slug: "acd-standard-wall-single-cfg-8",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-mpd30kch21s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-standard-wall-single-cfg-9",
      slug: "acd-standard-wall-single-cfg-9",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-mpd36kch21s-o",
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
      id: "acd-standard-wall-single-cfg-10",
      slug: "acd-standard-wall-single-cfg-10",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-mpd42kch21s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39000,
      coolingCapacityMaxBtu: 39000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-standard-wall-single-cfg-11",
      slug: "acd-standard-wall-single-cfg-11",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-ocd15kch20s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-standard-wall-single-cfg-12",
      slug: "acd-standard-wall-single-cfg-12",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-chd09kch19s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-standard-wall-single-cfg-13",
      slug: "acd-standard-wall-single-cfg-13",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-chd12kch17s-o",
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
      id: "acd-standard-wall-single-cfg-14",
      slug: "acd-standard-wall-single-cfg-14",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-chd18kch17s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17600,
      coolingCapacityMaxBtu: 17600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-standard-wall-single-cfg-15",
      slug: "acd-standard-wall-single-cfg-15",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-chd24kch18s-o",
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
      id: "acd-standard-wall-single-cfg-16",
      slug: "acd-standard-wall-single-cfg-16",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-pud09kch25s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-standard-wall-single-cfg-17",
      slug: "acd-standard-wall-single-cfg-17",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-pud24kch24s-o",
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
      id: "acd-standard-wall-single-cfg-18",
      slug: "acd-standard-wall-single-cfg-18",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-pud30kch20s-o",
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
      id: "acd-standard-wall-single-cfg-19",
      slug: "acd-standard-wall-single-cfg-19",
      modelId: "acd-standard-wall-single",
      outdoorUnitId: "acd-pud36kch20s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-lomo-38seer-wall-single-cfg-1",
      slug: "acd-lomo-38seer-wall-single-cfg-1",
      modelId: "acd-lomo-38seer-wall-single",
      outdoorUnitId: "acd-uhd12kch31s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-lomo-38seer-wall-single-cfg-2",
      slug: "acd-lomo-38seer-wall-single-cfg-2",
      modelId: "acd-lomo-38seer-wall-single",
      outdoorUnitId: "acd-uhd18kch25s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-lomo-38seer-wall-single-cfg-3",
      slug: "acd-lomo-38seer-wall-single-cfg-3",
      modelId: "acd-lomo-38seer-wall-single",
      outdoorUnitId: "acd-uhd24kch22s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-lomo-38seer-wall-single-cfg-4",
      slug: "acd-lomo-38seer-wall-single-cfg-4",
      modelId: "acd-lomo-38seer-wall-single",
      outdoorUnitId: "acd-uhd09kch38sb-o",
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
      id: "acd-lomo-38seer-wall-single-cfg-5",
      slug: "acd-lomo-38seer-wall-single-cfg-5",
      modelId: "acd-lomo-38seer-wall-single",
      outdoorUnitId: "acd-uhd09kch38sb-o",
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
      id: "acd-lomo-38seer-wall-single-cfg-6",
      slug: "acd-lomo-38seer-wall-single-cfg-6",
      modelId: "acd-lomo-38seer-wall-single",
      outdoorUnitId: "acd-uhd12kch31s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-lomo-38seer-wall-single-cfg-7",
      slug: "acd-lomo-38seer-wall-single-cfg-7",
      modelId: "acd-lomo-38seer-wall-single",
      outdoorUnitId: "acd-uhd18kch25s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-lomo-38seer-wall-single-cfg-8",
      slug: "acd-lomo-38seer-wall-single-cfg-8",
      modelId: "acd-lomo-38seer-wall-single",
      outdoorUnitId: "acd-uhd24kch22s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-ultra-heat-free-match-wall-single-cfg-1",
      slug: "acd-ultra-heat-free-match-wall-single-cfg-1",
      modelId: "acd-ultra-heat-free-match-wall-single",
      outdoorUnitId: "acd-mud18kch23s-o",
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
      id: "acd-ultra-heat-free-match-wall-single-cfg-2",
      slug: "acd-ultra-heat-free-match-wall-single-cfg-2",
      modelId: "acd-ultra-heat-free-match-wall-single",
      outdoorUnitId: "acd-mud24kch23s-o",
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
      id: "acd-ultra-heat-free-match-wall-single-cfg-3",
      slug: "acd-ultra-heat-free-match-wall-single-cfg-3",
      modelId: "acd-ultra-heat-free-match-wall-single",
      outdoorUnitId: "acd-mud36kch23s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-ultra-heat-free-match-wall-single-cfg-4",
      slug: "acd-ultra-heat-free-match-wall-single-cfg-4",
      modelId: "acd-ultra-heat-free-match-wall-single",
      outdoorUnitId: "acd-mud42kch23s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-1",
      slug: "acd-flexx-central-ducted-cfg-1",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-2",
      slug: "acd-flexx-central-ducted-cfg-2",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-3",
      slug: "acd-flexx-central-ducted-cfg-3",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-4",
      slug: "acd-flexx-central-ducted-cfg-4",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd60",
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
      id: "acd-flexx-central-ducted-cfg-5",
      slug: "acd-flexx-central-ducted-cfg-5",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-6",
      slug: "acd-flexx-central-ducted-cfg-6",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-7",
      slug: "acd-flexx-central-ducted-cfg-7",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-8",
      slug: "acd-flexx-central-ducted-cfg-8",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-9",
      slug: "acd-flexx-central-ducted-cfg-9",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-10",
      slug: "acd-flexx-central-ducted-cfg-10",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-11",
      slug: "acd-flexx-central-ducted-cfg-11",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-12",
      slug: "acd-flexx-central-ducted-cfg-12",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd60",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-flexx-central-ducted-cfg-13",
      slug: "acd-flexx-central-ducted-cfg-13",
      modelId: "acd-flexx-central-ducted",
      outdoorUnitId: "acd-fxd-acd36",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-free-match-wall-single-cfg-1",
      slug: "acd-free-match-wall-single-cfg-1",
      modelId: "acd-free-match-wall-single",
      outdoorUnitId: "acd-mpd18kch21sb-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-free-match-wall-single-cfg-2",
      slug: "acd-free-match-wall-single-cfg-2",
      modelId: "acd-free-match-wall-single",
      outdoorUnitId: "acd-mpd24kch21sb-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-free-match-wall-single-cfg-3",
      slug: "acd-free-match-wall-single-cfg-3",
      modelId: "acd-free-match-wall-single",
      outdoorUnitId: "acd-mpd30kch21sb-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-free-match-wall-single-cfg-4",
      slug: "acd-free-match-wall-single-cfg-4",
      modelId: "acd-free-match-wall-single",
      outdoorUnitId: "acd-mpd36kch21sb-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-free-match-wall-single-cfg-5",
      slug: "acd-free-match-wall-single-cfg-5",
      modelId: "acd-free-match-wall-single",
      outdoorUnitId: "acd-mpd42kch21sb-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-pular-wall-single-cfg-1",
      slug: "acd-pular-wall-single-cfg-1",
      modelId: "acd-pular-wall-single",
      outdoorUnitId: "acd-pud12kch24s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-pular-wall-single-cfg-2",
      slug: "acd-pular-wall-single-cfg-2",
      modelId: "acd-pular-wall-single",
      outdoorUnitId: "acd-pud18kch23s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-pular-wall-single-cfg-3",
      slug: "acd-pular-wall-single-cfg-3",
      modelId: "acd-pular-wall-single",
      outdoorUnitId: "acd-pud18kch23s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "acd-new-multi-zone-odu-wall-single-cfg-1",
      slug: "acd-new-multi-zone-odu-wall-single-cfg-1",
      modelId: "acd-new-multi-zone-odu-wall-single",
      outdoorUnitId: "acd-pud24kch24s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "acd-standard-wall-single-cfg-1",
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
      configurationId: "acd-standard-wall-single-cfg-2",
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
      configurationId: "acd-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-8",
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
      configurationId: "acd-standard-wall-single-cfg-9",
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
      configurationId: "acd-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-12",
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
      configurationId: "acd-standard-wall-single-cfg-13",
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
      configurationId: "acd-standard-wall-single-cfg-14",
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
      configurationId: "acd-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-16",
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
      configurationId: "acd-standard-wall-single-cfg-17",
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
      configurationId: "acd-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-standard-wall-single-cfg-19",
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
      configurationId: "acd-lomo-38seer-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-lomo-38seer-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-lomo-38seer-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-lomo-38seer-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-lomo-38seer-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-lomo-38seer-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-lomo-38seer-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-lomo-38seer-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-ultra-heat-free-match-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-ultra-heat-free-match-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-ultra-heat-free-match-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-ultra-heat-free-match-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-flexx-central-ducted-cfg-1",
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
      configurationId: "acd-flexx-central-ducted-cfg-2",
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
      configurationId: "acd-flexx-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-flexx-central-ducted-cfg-4",
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
      configurationId: "acd-flexx-central-ducted-cfg-5",
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
      configurationId: "acd-flexx-central-ducted-cfg-6",
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
      configurationId: "acd-flexx-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-flexx-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-flexx-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-flexx-central-ducted-cfg-10",
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
      configurationId: "acd-flexx-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-flexx-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-flexx-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-free-match-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-free-match-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-free-match-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-free-match-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-free-match-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-pular-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-pular-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-pular-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "acd-new-multi-zone-odu-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.22,
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
