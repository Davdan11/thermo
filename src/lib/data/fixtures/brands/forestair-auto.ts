import type { BrandDataset } from "../../types";

export const forestairDataset: BrandDataset = {
  brand: {
    id: "forestair",
    slug: "forestair",
    name: "FORESTAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "forestair-standard",
      slug: "forestair-standard",
      name: "Standard",
      brandId: "forestair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-pular",
      slug: "forestair-pular",
      name: "Pular",
      brandId: "forestair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-e24-es454",
      slug: "forestair-e24-es454",
      name: "E24-ES454",
      brandId: "forestair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454",
      slug: "forestair-mz24-es454",
      name: "MZ24-ES454",
      brandId: "forestair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454",
      slug: "forestair-sz24-es454",
      name: "SZ24-ES454",
      brandId: "forestair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "forestair-standard-wall-single",
      slug: "forestair-standard-wall-single",
      name: "Standard",
      seriesId: "forestair-standard",
      brandId: "forestair",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5900,
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
      id: "forestair-pular-wall-single",
      slug: "forestair-pular-wall-single",
      name: "Pular",
      seriesId: "forestair-pular",
      brandId: "forestair",
      modelNumber: "Pular",
      normalizedModelNumber: "pular",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 7300,
      heatingCapacity5FMaxBtu: 15500,
      seer2Min: 24,
      seer2Max: 25,
      hspf2Min: 9,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.93,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-e24-es454-wall-single",
      slug: "forestair-e24-es454-wall-single",
      name: "E24-ES454",
      seriesId: "forestair-e24-es454",
      brandId: "forestair",
      modelNumber: "E24-ES454",
      normalizedModelNumber: "e24-es454",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 14000,
      seer2Min: 23,
      seer2Max: 24,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single",
      slug: "forestair-mz24-es454-wall-single",
      name: "MZ24-ES454",
      seriesId: "forestair-mz24-es454",
      brandId: "forestair",
      modelNumber: "MZ24-ES454",
      normalizedModelNumber: "mz24-es454",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 17400,
      heatingCapacity5FMaxBtu: 29400,
      seer2Min: 19.5,
      seer2Max: 24,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single",
      slug: "forestair-sz24-es454-wall-single",
      name: "SZ24-ES454",
      seriesId: "forestair-sz24-es454",
      brandId: "forestair",
      modelNumber: "SZ24-ES454",
      normalizedModelNumber: "sz24-es454",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9500,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 15200,
      seer2Min: 19,
      seer2Max: 23,
      hspf2Min: 8.4,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "forestair-fgh-09es-e23-o",
      modelNumber: "FGH-09ES/E23-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-12es-e23-o",
      modelNumber: "FGH-12ES/E23-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-18es-e23-o",
      modelNumber: "FGH-18ES/E23-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-12es-e-38-o",
      modelNumber: "FGH-12ES/E-38-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-18es-e-38-o",
      modelNumber: "FGH-18ES/E-38-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-18es-mz",
      modelNumber: "FGH-18ES/MZ",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-24es-mz",
      modelNumber: "FGH-24ES/MZ",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-30es-mz",
      modelNumber: "FGH-30ES/MZ",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-36es-mz",
      modelNumber: "FGH-36ES/MZ",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-42es-mz",
      modelNumber: "FGH-42ES/MZ",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h09-a23tl-o-es",
      modelNumber: "FA-H09-A23TL/O-ES",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h12-a23tl-o-es",
      modelNumber: "FA-H12-A23TL/O-ES",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h09-d23tl-o-es",
      modelNumber: "FA-H09-D23TL/O-ES",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h12-d23tl-o-es",
      modelNumber: "FA-H12-D23TL/O-ES",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h18-d23tl-o-es",
      modelNumber: "FA-H18-D23TL/O-ES",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h23-d23tl-o-es",
      modelNumber: "FA-H23-D23TL/O-ES",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fad36w-a-d-u",
      modelNumber: "FAD36W/A-D(U)",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fad60w-a-d-u",
      modelNumber: "FAD60W/A-D(U)",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-18es-e25-o",
      modelNumber: "FGH-18ES/E25-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-12es-e25-o",
      modelNumber: "FGH-12ES/E25-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-09es-e25-o",
      modelNumber: "FGH-09ES/E25-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fgh-24es-e25-o",
      modelNumber: "FGH-24ES/E25-O",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h09-a24tl-o-454",
      modelNumber: "FA-H09-A24TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h12-a24tl-o-454",
      modelNumber: "FA-H12-A24TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h09-d24tl-o-454",
      modelNumber: "FA-H09-D24TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h12-d24tl-o-454",
      modelNumber: "FA-H12-D24TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h18-d24tl-o-454",
      modelNumber: "FA-H18-D24TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-h24-d24tl-o-454",
      modelNumber: "FA-H24-D24TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-m18-d2tl-o-454",
      modelNumber: "FA-M18-D2TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-m27-d3tl-o-454",
      modelNumber: "FA-M27-D3TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-m36-d4tl-o-454",
      modelNumber: "FA-M36-D4TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    },
    {
      id: "forestair-fa-m42-d5tl-o-454",
      modelNumber: "FA-M42-D5TL-O-454",
      brandId: "forestair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "forestair-standard-wall-single-cfg-1",
      slug: "forestair-standard-wall-single-cfg-1",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-09es-e23-o",
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
      id: "forestair-standard-wall-single-cfg-2",
      slug: "forestair-standard-wall-single-cfg-2",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-12es-e23-o",
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
      id: "forestair-standard-wall-single-cfg-3",
      slug: "forestair-standard-wall-single-cfg-3",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-18es-e23-o",
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
      id: "forestair-standard-wall-single-cfg-4",
      slug: "forestair-standard-wall-single-cfg-4",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-12es-e-38-o",
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
      id: "forestair-standard-wall-single-cfg-5",
      slug: "forestair-standard-wall-single-cfg-5",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-18es-e-38-o",
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
      id: "forestair-standard-wall-single-cfg-6",
      slug: "forestair-standard-wall-single-cfg-6",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-18es-mz",
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
      id: "forestair-standard-wall-single-cfg-7",
      slug: "forestair-standard-wall-single-cfg-7",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-24es-mz",
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
      id: "forestair-standard-wall-single-cfg-8",
      slug: "forestair-standard-wall-single-cfg-8",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-30es-mz",
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
      id: "forestair-standard-wall-single-cfg-9",
      slug: "forestair-standard-wall-single-cfg-9",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-36es-mz",
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
      id: "forestair-standard-wall-single-cfg-10",
      slug: "forestair-standard-wall-single-cfg-10",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-42es-mz",
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
      id: "forestair-standard-wall-single-cfg-11",
      slug: "forestair-standard-wall-single-cfg-11",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fa-h09-a23tl-o-es",
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
      id: "forestair-standard-wall-single-cfg-12",
      slug: "forestair-standard-wall-single-cfg-12",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fa-h12-a23tl-o-es",
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
      id: "forestair-standard-wall-single-cfg-13",
      slug: "forestair-standard-wall-single-cfg-13",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fa-h09-d23tl-o-es",
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
      id: "forestair-standard-wall-single-cfg-14",
      slug: "forestair-standard-wall-single-cfg-14",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fa-h12-d23tl-o-es",
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
      id: "forestair-standard-wall-single-cfg-15",
      slug: "forestair-standard-wall-single-cfg-15",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fa-h18-d23tl-o-es",
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
      id: "forestair-standard-wall-single-cfg-16",
      slug: "forestair-standard-wall-single-cfg-16",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fa-h23-d23tl-o-es",
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
      id: "forestair-standard-wall-single-cfg-17",
      slug: "forestair-standard-wall-single-cfg-17",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fad36w-a-d-u",
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
      id: "forestair-standard-wall-single-cfg-18",
      slug: "forestair-standard-wall-single-cfg-18",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fad36w-a-d-u",
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
      id: "forestair-standard-wall-single-cfg-19",
      slug: "forestair-standard-wall-single-cfg-19",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fad60w-a-d-u",
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
      id: "forestair-standard-wall-single-cfg-20",
      slug: "forestair-standard-wall-single-cfg-20",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fad60w-a-d-u",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-standard-wall-single-cfg-21",
      slug: "forestair-standard-wall-single-cfg-21",
      modelId: "forestair-standard-wall-single",
      outdoorUnitId: "forestair-fgh-18es-e25-o",
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
      id: "forestair-pular-wall-single-cfg-1",
      slug: "forestair-pular-wall-single-cfg-1",
      modelId: "forestair-pular-wall-single",
      outdoorUnitId: "forestair-fgh-12es-e25-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-pular-wall-single-cfg-2",
      slug: "forestair-pular-wall-single-cfg-2",
      modelId: "forestair-pular-wall-single",
      outdoorUnitId: "forestair-fgh-09es-e25-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 25,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-pular-wall-single-cfg-3",
      slug: "forestair-pular-wall-single-cfg-3",
      modelId: "forestair-pular-wall-single",
      outdoorUnitId: "forestair-fgh-24es-e25-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-e24-es454-wall-single-cfg-1",
      slug: "forestair-e24-es454-wall-single-cfg-1",
      modelId: "forestair-e24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h09-a24tl-o-454",
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
      id: "forestair-e24-es454-wall-single-cfg-2",
      slug: "forestair-e24-es454-wall-single-cfg-2",
      modelId: "forestair-e24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h12-a24tl-o-454",
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
      id: "forestair-e24-es454-wall-single-cfg-3",
      slug: "forestair-e24-es454-wall-single-cfg-3",
      modelId: "forestair-e24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h09-d24tl-o-454",
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
      id: "forestair-e24-es454-wall-single-cfg-4",
      slug: "forestair-e24-es454-wall-single-cfg-4",
      modelId: "forestair-e24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h12-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-e24-es454-wall-single-cfg-5",
      slug: "forestair-e24-es454-wall-single-cfg-5",
      modelId: "forestair-e24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h18-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-e24-es454-wall-single-cfg-6",
      slug: "forestair-e24-es454-wall-single-cfg-6",
      modelId: "forestair-e24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h24-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single-cfg-1",
      slug: "forestair-mz24-es454-wall-single-cfg-1",
      modelId: "forestair-mz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-m18-d2tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single-cfg-2",
      slug: "forestair-mz24-es454-wall-single-cfg-2",
      modelId: "forestair-mz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-m27-d3tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single-cfg-3",
      slug: "forestair-mz24-es454-wall-single-cfg-3",
      modelId: "forestair-mz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-m36-d4tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 22.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single-cfg-4",
      slug: "forestair-mz24-es454-wall-single-cfg-4",
      modelId: "forestair-mz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-m42-d5tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single-cfg-5",
      slug: "forestair-mz24-es454-wall-single-cfg-5",
      modelId: "forestair-mz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-m18-d2tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single-cfg-6",
      slug: "forestair-mz24-es454-wall-single-cfg-6",
      modelId: "forestair-mz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-m27-d3tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single-cfg-7",
      slug: "forestair-mz24-es454-wall-single-cfg-7",
      modelId: "forestair-mz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-m36-d4tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-mz24-es454-wall-single-cfg-8",
      slug: "forestair-mz24-es454-wall-single-cfg-8",
      modelId: "forestair-mz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-m42-d5tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 19.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-1",
      slug: "forestair-sz24-es454-wall-single-cfg-1",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h09-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9500,
      coolingCapacityMaxBtu: 9500,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-2",
      slug: "forestair-sz24-es454-wall-single-cfg-2",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h12-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-3",
      slug: "forestair-sz24-es454-wall-single-cfg-3",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h18-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-4",
      slug: "forestair-sz24-es454-wall-single-cfg-4",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h24-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-5",
      slug: "forestair-sz24-es454-wall-single-cfg-5",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h09-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9500,
      coolingCapacityMaxBtu: 9500,
      seer2: 19.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-6",
      slug: "forestair-sz24-es454-wall-single-cfg-6",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h12-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11000,
      coolingCapacityMaxBtu: 11000,
      seer2: 19,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-7",
      slug: "forestair-sz24-es454-wall-single-cfg-7",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h18-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-8",
      slug: "forestair-sz24-es454-wall-single-cfg-8",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h24-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-9",
      slug: "forestair-sz24-es454-wall-single-cfg-9",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h18-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "forestair-sz24-es454-wall-single-cfg-10",
      slug: "forestair-sz24-es454-wall-single-cfg-10",
      modelId: "forestair-sz24-es454-wall-single",
      outdoorUnitId: "forestair-fa-h24-d24tl-o-454",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "forestair-standard-wall-single-cfg-1",
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
      configurationId: "forestair-standard-wall-single-cfg-2",
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
      configurationId: "forestair-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-standard-wall-single-cfg-6",
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
      configurationId: "forestair-standard-wall-single-cfg-7",
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
      configurationId: "forestair-standard-wall-single-cfg-8",
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
      configurationId: "forestair-standard-wall-single-cfg-9",
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
      configurationId: "forestair-standard-wall-single-cfg-10",
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
      configurationId: "forestair-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-standard-wall-single-cfg-12",
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
      configurationId: "forestair-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-standard-wall-single-cfg-14",
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
      configurationId: "forestair-standard-wall-single-cfg-15",
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
      configurationId: "forestair-standard-wall-single-cfg-16",
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
      configurationId: "forestair-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-standard-wall-single-cfg-18",
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
      configurationId: "forestair-standard-wall-single-cfg-19",
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
      configurationId: "forestair-standard-wall-single-cfg-20",
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
      configurationId: "forestair-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-pular-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-pular-wall-single-cfg-2",
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
      configurationId: "forestair-pular-wall-single-cfg-3",
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
      configurationId: "forestair-e24-es454-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-e24-es454-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-e24-es454-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-e24-es454-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-e24-es454-wall-single-cfg-5",
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
      configurationId: "forestair-e24-es454-wall-single-cfg-6",
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
      configurationId: "forestair-mz24-es454-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-mz24-es454-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-mz24-es454-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-mz24-es454-wall-single-cfg-4",
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
      configurationId: "forestair-mz24-es454-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-mz24-es454-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-mz24-es454-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-mz24-es454-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-sz24-es454-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-sz24-es454-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-sz24-es454-wall-single-cfg-3",
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
      configurationId: "forestair-sz24-es454-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-sz24-es454-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-sz24-es454-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-sz24-es454-wall-single-cfg-7",
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
      configurationId: "forestair-sz24-es454-wall-single-cfg-8",
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
      configurationId: "forestair-sz24-es454-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "forestair-sz24-es454-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2,
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
