import type { BrandDataset } from "../../types";

export const auroraDataset: BrandDataset = {
  brand: {
    id: "aurora",
    slug: "aurora",
    name: "AURORA",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "aurora-standard",
      slug: "aurora-standard",
      name: "Standard",
      brandId: "aurora",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "aurora-standard-wall-single",
      slug: "aurora-standard-wall-single",
      name: "Standard",
      seriesId: "aurora-standard",
      brandId: "aurora",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 42000,
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
      id: "aurora-au-a09hr-1a-o",
      modelNumber: "AU-A09HR-1A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-a18hr-2a-o",
      modelNumber: "AU-A18HR-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-a09hr-1b-o",
      modelNumber: "AU-A09HR-1B-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-a12hr-1b-o",
      modelNumber: "AU-A12HR-1B-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-a09hr-2b-o",
      modelNumber: "AU-A09HR-2B-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-a12hr-2b-o",
      modelNumber: "AU-A12HR-2B-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-a18hr-2b-o",
      modelNumber: "AU-A18HR-2B-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-a24hr-2b-o",
      modelNumber: "AU-A24HR-2B-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-a36hr-2b-o",
      modelNumber: "AU-A36HR-2B-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-mu18-2a-u",
      modelNumber: "AU-MU18-2A-U",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-mu27-2a-u",
      modelNumber: "AU-MU27-2A-U",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-mu36-2a-u",
      modelNumber: "AU-MU36-2A-U",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-mu48-2a-u",
      modelNumber: "AU-MU48-2A-U",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-cx06hr-2a-o",
      modelNumber: "AU-CX06HR-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-cx09hr-2a-o",
      modelNumber: "AU-CX09HR-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-cx12hr-2a-o",
      modelNumber: "AU-CX12HR-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-cx18hr-2a-o",
      modelNumber: "AU-CX18HR-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-cx24hr-2a-o",
      modelNumber: "AU-CX24HR-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-lcu60-2a-o",
      modelNumber: "AU-LCU60-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-lxu18-2a-o",
      modelNumber: "AU-LXU18-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-lxu24-2a-o",
      modelNumber: "AU-LXU24-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-lxu30-2a-o",
      modelNumber: "AU-LXU30-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-lxu36-2a-o",
      modelNumber: "AU-LXU36-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-lxu48-2a-o",
      modelNumber: "AU-LXU48-2A-O",
      brandId: "aurora",
      refrigerant: null as any,
    },
    {
      id: "aurora-au-lxu60-2a-oi",
      modelNumber: "AU-LXU60-2A-OI",
      brandId: "aurora",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "aurora-standard-wall-single-cfg-1",
      slug: "aurora-standard-wall-single-cfg-1",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a09hr-1a-o",
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
      id: "aurora-standard-wall-single-cfg-2",
      slug: "aurora-standard-wall-single-cfg-2",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a18hr-2a-o",
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
      id: "aurora-standard-wall-single-cfg-3",
      slug: "aurora-standard-wall-single-cfg-3",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a09hr-1b-o",
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
      id: "aurora-standard-wall-single-cfg-4",
      slug: "aurora-standard-wall-single-cfg-4",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a12hr-1b-o",
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
      id: "aurora-standard-wall-single-cfg-5",
      slug: "aurora-standard-wall-single-cfg-5",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a09hr-2b-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 10000,
      coolingCapacityMaxBtu: 10000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-6",
      slug: "aurora-standard-wall-single-cfg-6",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a12hr-2b-o",
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
      id: "aurora-standard-wall-single-cfg-7",
      slug: "aurora-standard-wall-single-cfg-7",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a18hr-2b-o",
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
      id: "aurora-standard-wall-single-cfg-8",
      slug: "aurora-standard-wall-single-cfg-8",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a24hr-2b-o",
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
      id: "aurora-standard-wall-single-cfg-9",
      slug: "aurora-standard-wall-single-cfg-9",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-a36hr-2b-o",
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
      id: "aurora-standard-wall-single-cfg-10",
      slug: "aurora-standard-wall-single-cfg-10",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu18-2a-u",
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
      id: "aurora-standard-wall-single-cfg-11",
      slug: "aurora-standard-wall-single-cfg-11",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu18-2a-u",
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
      id: "aurora-standard-wall-single-cfg-12",
      slug: "aurora-standard-wall-single-cfg-12",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu18-2a-u",
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
      id: "aurora-standard-wall-single-cfg-13",
      slug: "aurora-standard-wall-single-cfg-13",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu27-2a-u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-14",
      slug: "aurora-standard-wall-single-cfg-14",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu27-2a-u",
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
      id: "aurora-standard-wall-single-cfg-15",
      slug: "aurora-standard-wall-single-cfg-15",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu27-2a-u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-16",
      slug: "aurora-standard-wall-single-cfg-16",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu36-2a-u",
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
      id: "aurora-standard-wall-single-cfg-17",
      slug: "aurora-standard-wall-single-cfg-17",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu48-2a-u",
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
      id: "aurora-standard-wall-single-cfg-18",
      slug: "aurora-standard-wall-single-cfg-18",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu48-2a-u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 49000,
      coolingCapacityMaxBtu: 49000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-19",
      slug: "aurora-standard-wall-single-cfg-19",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-mu48-2a-u",
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
      id: "aurora-standard-wall-single-cfg-20",
      slug: "aurora-standard-wall-single-cfg-20",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-cx06hr-2a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-21",
      slug: "aurora-standard-wall-single-cfg-21",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-cx09hr-2a-o",
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
      id: "aurora-standard-wall-single-cfg-22",
      slug: "aurora-standard-wall-single-cfg-22",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-cx12hr-2a-o",
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
      id: "aurora-standard-wall-single-cfg-23",
      slug: "aurora-standard-wall-single-cfg-23",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-cx18hr-2a-o",
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
      id: "aurora-standard-wall-single-cfg-24",
      slug: "aurora-standard-wall-single-cfg-24",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-cx24hr-2a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-25",
      slug: "aurora-standard-wall-single-cfg-25",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lcu60-2a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-26",
      slug: "aurora-standard-wall-single-cfg-26",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lxu18-2a-o",
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
      id: "aurora-standard-wall-single-cfg-27",
      slug: "aurora-standard-wall-single-cfg-27",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lxu24-2a-o",
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
      id: "aurora-standard-wall-single-cfg-28",
      slug: "aurora-standard-wall-single-cfg-28",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lxu30-2a-o",
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
      id: "aurora-standard-wall-single-cfg-29",
      slug: "aurora-standard-wall-single-cfg-29",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lxu36-2a-o",
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
      id: "aurora-standard-wall-single-cfg-30",
      slug: "aurora-standard-wall-single-cfg-30",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lxu48-2a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-31",
      slug: "aurora-standard-wall-single-cfg-31",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lxu60-2a-oi",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-32",
      slug: "aurora-standard-wall-single-cfg-32",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lxu36-2a-o",
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
      id: "aurora-standard-wall-single-cfg-33",
      slug: "aurora-standard-wall-single-cfg-33",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-lxu48-2a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aurora-standard-wall-single-cfg-34",
      slug: "aurora-standard-wall-single-cfg-34",
      modelId: "aurora-standard-wall-single",
      outdoorUnitId: "aurora-au-cx12hr-2a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "aurora-standard-wall-single-cfg-1",
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
      configurationId: "aurora-standard-wall-single-cfg-2",
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
      configurationId: "aurora-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-4",
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
      configurationId: "aurora-standard-wall-single-cfg-5",
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
      configurationId: "aurora-standard-wall-single-cfg-6",
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
      configurationId: "aurora-standard-wall-single-cfg-7",
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
      configurationId: "aurora-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-9",
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
      configurationId: "aurora-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-12",
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
      configurationId: "aurora-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-14",
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
      configurationId: "aurora-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-16",
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
      configurationId: "aurora-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-20",
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
      configurationId: "aurora-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-22",
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
      configurationId: "aurora-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aurora-standard-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
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
