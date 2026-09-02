import type { BrandDataset } from "../../types";

export const runtruDataset: BrandDataset = {
  brand: {
    id: "runtru",
    slug: "runtru",
    name: "RUNTRU",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "runtru-standard",
      slug: "runtru-standard",
      name: "Standard",
      brandId: "runtru",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-n-series",
      slug: "runtru-n-series",
      name: "N-Series",
      brandId: "runtru",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5",
      slug: "runtru-e4hl5",
      name: "E4HL5",
      brandId: "runtru",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-23u-series",
      slug: "runtru-23u-series",
      name: "23U Series",
      brandId: "runtru",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-a5hl5",
      slug: "runtru-a5hl5",
      name: "A5HL5",
      brandId: "runtru",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "runtru-standard-wall-single",
      slug: "runtru-standard-wall-single",
      name: "Standard",
      seriesId: "runtru-standard",
      brandId: "runtru",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5400,
      heatingCapacity5FMaxBtu: 46000,
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
      id: "runtru-standard-central-ducted",
      slug: "runtru-standard-central-ducted",
      name: "Standard",
      seriesId: "runtru-standard",
      brandId: "runtru",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-n-series-wall-single",
      slug: "runtru-n-series-wall-single",
      name: "N-Series",
      seriesId: "runtru-n-series",
      brandId: "runtru",
      modelNumber: "N-Series",
      normalizedModelNumber: "n-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 35600,
      seer2Min: 19,
      seer2Max: 19,
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
      id: "runtru-e4hl5-central-ducted",
      slug: "runtru-e4hl5-central-ducted",
      name: "E4HL5",
      seriesId: "runtru-e4hl5",
      brandId: "runtru",
      modelNumber: "E4HL5",
      normalizedModelNumber: "e4hl5",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 47500,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 8.1,
      hspf2Max: 8.5,
      cop5FMin: 1.75,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-23u-series-wall-single",
      slug: "runtru-23u-series-wall-single",
      name: "23U Series",
      seriesId: "runtru-23u-series",
      brandId: "runtru",
      modelNumber: "23U Series",
      normalizedModelNumber: "23u-series",
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
      id: "runtru-a5hl5-central-ducted",
      slug: "runtru-a5hl5-central-ducted",
      name: "A5HL5",
      seriesId: "runtru-a5hl5",
      brandId: "runtru",
      modelNumber: "A5HL5",
      normalizedModelNumber: "a5hl5",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 46000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "runtru-m4ths1809a11n",
      modelNumber: "M4THS1809A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4ths1812a11n",
      modelNumber: "M4THS1812A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4tls1809a11n",
      modelNumber: "M4TLS1809A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4tls1824a11n",
      modelNumber: "M4TLS1824A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4ths1818a11n",
      modelNumber: "M4THS1818A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4ths1824a11n",
      modelNumber: "M4THS1824A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4ths2309a11n",
      modelNumber: "M4THS2309A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4ths2312a11n",
      modelNumber: "M4THS2312A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-e4hl5042a1000a",
      modelNumber: "E4HL5042A1000A",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-e4hl5048a1000a",
      modelNumber: "E4HL5048A1000A",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4tvs1709a11na",
      modelNumber: "M4TVS1709A11NA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4tvs1712a11na",
      modelNumber: "M4TVS1712A11NA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4tvs1718a11na",
      modelNumber: "M4TVS1718A11NA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4tvs1724a11na",
      modelNumber: "M4TVS1724A11NA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths1909a11naa",
      modelNumber: "M5THS1909A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths1912a11naa",
      modelNumber: "M5THS1912A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths1918a11naa",
      modelNumber: "M5THS1918A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths1924a11naa",
      modelNumber: "M5THS1924A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths1936a11naa",
      modelNumber: "M5THS1936A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-a5hl5060a1",
      modelNumber: "A5HL5060A1",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4ths2324a11n",
      modelNumber: "M4THS2324A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4ths2318a11n",
      modelNumber: "M4THS2318A11N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4thm1918a12n",
      modelNumber: "M4THM1918A12N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4thm1924a13n",
      modelNumber: "M4THM1924A13N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4thm1930a14n",
      modelNumber: "M4THM1930A14N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4thm1936a14n",
      modelNumber: "M4THM1936A14N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m4thm1942a15n",
      modelNumber: "M4THM1942A15N**",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-e4hl5018a1000a",
      modelNumber: "E4HL5018A1000A",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-e4hl5024a1000a",
      modelNumber: "E4HL5024A1000A",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-e4hl5030a1000a",
      modelNumber: "E4HL5030A1000A",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-e4hl5036a1000a",
      modelNumber: "E4HL5036A1000A",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-e4hl5060a1000a",
      modelNumber: "E4HL5060A1000A",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths2309a11naa",
      modelNumber: "M5THS2309A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths2312a11naa",
      modelNumber: "M5THS2312A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths2318a11naa",
      modelNumber: "M5THS2318A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-m5ths2324a11naa",
      modelNumber: "M5THS2324A11NAA",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-a5hl5024a1",
      modelNumber: "A5HL5024A1",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-a5hl5036a1",
      modelNumber: "A5HL5036A1",
      brandId: "runtru",
      refrigerant: null as any,
    },
    {
      id: "runtru-a5hl5048a1",
      modelNumber: "A5HL5048A1",
      brandId: "runtru",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "runtru-standard-wall-single-cfg-1",
      slug: "runtru-standard-wall-single-cfg-1",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4ths1809a11n",
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
      id: "runtru-standard-wall-single-cfg-2",
      slug: "runtru-standard-wall-single-cfg-2",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4ths1812a11n",
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
      id: "runtru-standard-wall-single-cfg-3",
      slug: "runtru-standard-wall-single-cfg-3",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4tls1809a11n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9200,
      coolingCapacityMaxBtu: 9200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-standard-wall-single-cfg-4",
      slug: "runtru-standard-wall-single-cfg-4",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4tls1824a11n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-standard-wall-single-cfg-5",
      slug: "runtru-standard-wall-single-cfg-5",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4ths1818a11n",
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
      id: "runtru-standard-wall-single-cfg-6",
      slug: "runtru-standard-wall-single-cfg-6",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4ths1824a11n",
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
      id: "runtru-standard-wall-single-cfg-7",
      slug: "runtru-standard-wall-single-cfg-7",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4ths2309a11n",
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
      id: "runtru-standard-wall-single-cfg-8",
      slug: "runtru-standard-wall-single-cfg-8",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4ths2312a11n",
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
      id: "runtru-standard-wall-single-cfg-9",
      slug: "runtru-standard-wall-single-cfg-9",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-e4hl5042a1000a",
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
      id: "runtru-standard-wall-single-cfg-10",
      slug: "runtru-standard-wall-single-cfg-10",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-e4hl5048a1000a",
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
      id: "runtru-standard-wall-single-cfg-11",
      slug: "runtru-standard-wall-single-cfg-11",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4tvs1709a11na",
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
      id: "runtru-standard-wall-single-cfg-12",
      slug: "runtru-standard-wall-single-cfg-12",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4tvs1712a11na",
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
      id: "runtru-standard-wall-single-cfg-13",
      slug: "runtru-standard-wall-single-cfg-13",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4tvs1718a11na",
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
      id: "runtru-standard-wall-single-cfg-14",
      slug: "runtru-standard-wall-single-cfg-14",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m4tvs1724a11na",
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
      id: "runtru-standard-wall-single-cfg-15",
      slug: "runtru-standard-wall-single-cfg-15",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-e4hl5042a1000a",
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
      id: "runtru-standard-wall-single-cfg-16",
      slug: "runtru-standard-wall-single-cfg-16",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-e4hl5048a1000a",
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
      id: "runtru-standard-wall-single-cfg-17",
      slug: "runtru-standard-wall-single-cfg-17",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-e4hl5042a1000a",
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
      id: "runtru-standard-wall-single-cfg-18",
      slug: "runtru-standard-wall-single-cfg-18",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-e4hl5042a1000a",
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
      id: "runtru-standard-wall-single-cfg-19",
      slug: "runtru-standard-wall-single-cfg-19",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-e4hl5048a1000a",
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
      id: "runtru-standard-wall-single-cfg-20",
      slug: "runtru-standard-wall-single-cfg-20",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m5ths1909a11naa",
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
      id: "runtru-standard-wall-single-cfg-21",
      slug: "runtru-standard-wall-single-cfg-21",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m5ths1912a11naa",
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
      id: "runtru-standard-wall-single-cfg-22",
      slug: "runtru-standard-wall-single-cfg-22",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m5ths1918a11naa",
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
      id: "runtru-standard-wall-single-cfg-23",
      slug: "runtru-standard-wall-single-cfg-23",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m5ths1924a11naa",
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
      id: "runtru-standard-wall-single-cfg-24",
      slug: "runtru-standard-wall-single-cfg-24",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-m5ths1936a11naa",
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
      id: "runtru-standard-wall-single-cfg-25",
      slug: "runtru-standard-wall-single-cfg-25",
      modelId: "runtru-standard-wall-single",
      outdoorUnitId: "runtru-a5hl5060a1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-standard-central-ducted-cfg-1",
      slug: "runtru-standard-central-ducted-cfg-1",
      modelId: "runtru-standard-central-ducted",
      outdoorUnitId: "runtru-m4ths2324a11n",
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
      id: "runtru-standard-central-ducted-cfg-2",
      slug: "runtru-standard-central-ducted-cfg-2",
      modelId: "runtru-standard-central-ducted",
      outdoorUnitId: "runtru-m4ths2318a11n",
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
      id: "runtru-standard-central-ducted-cfg-3",
      slug: "runtru-standard-central-ducted-cfg-3",
      modelId: "runtru-standard-central-ducted",
      outdoorUnitId: "runtru-e4hl5042a1000a",
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
      id: "runtru-n-series-wall-single-cfg-1",
      slug: "runtru-n-series-wall-single-cfg-1",
      modelId: "runtru-n-series-wall-single",
      outdoorUnitId: "runtru-m4thm1918a12n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-n-series-wall-single-cfg-2",
      slug: "runtru-n-series-wall-single-cfg-2",
      modelId: "runtru-n-series-wall-single",
      outdoorUnitId: "runtru-m4thm1924a13n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-n-series-wall-single-cfg-3",
      slug: "runtru-n-series-wall-single-cfg-3",
      modelId: "runtru-n-series-wall-single",
      outdoorUnitId: "runtru-m4thm1930a14n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-n-series-wall-single-cfg-4",
      slug: "runtru-n-series-wall-single-cfg-4",
      modelId: "runtru-n-series-wall-single",
      outdoorUnitId: "runtru-m4thm1936a14n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-n-series-wall-single-cfg-5",
      slug: "runtru-n-series-wall-single-cfg-5",
      modelId: "runtru-n-series-wall-single",
      outdoorUnitId: "runtru-m4thm1942a15n",
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
      id: "runtru-e4hl5-central-ducted-cfg-1",
      slug: "runtru-e4hl5-central-ducted-cfg-1",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5018a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-2",
      slug: "runtru-e4hl5-central-ducted-cfg-2",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-3",
      slug: "runtru-e4hl5-central-ducted-cfg-3",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5030a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-4",
      slug: "runtru-e4hl5-central-ducted-cfg-4",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-5",
      slug: "runtru-e4hl5-central-ducted-cfg-5",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5060a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-6",
      slug: "runtru-e4hl5-central-ducted-cfg-6",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-7",
      slug: "runtru-e4hl5-central-ducted-cfg-7",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5060a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-8",
      slug: "runtru-e4hl5-central-ducted-cfg-8",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-9",
      slug: "runtru-e4hl5-central-ducted-cfg-9",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-10",
      slug: "runtru-e4hl5-central-ducted-cfg-10",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5030a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-11",
      slug: "runtru-e4hl5-central-ducted-cfg-11",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-12",
      slug: "runtru-e4hl5-central-ducted-cfg-12",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-13",
      slug: "runtru-e4hl5-central-ducted-cfg-13",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5060a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-14",
      slug: "runtru-e4hl5-central-ducted-cfg-14",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5060a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-15",
      slug: "runtru-e4hl5-central-ducted-cfg-15",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5018a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-16",
      slug: "runtru-e4hl5-central-ducted-cfg-16",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5018a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-17",
      slug: "runtru-e4hl5-central-ducted-cfg-17",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5018a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-18",
      slug: "runtru-e4hl5-central-ducted-cfg-18",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5018a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-19",
      slug: "runtru-e4hl5-central-ducted-cfg-19",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-20",
      slug: "runtru-e4hl5-central-ducted-cfg-20",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-21",
      slug: "runtru-e4hl5-central-ducted-cfg-21",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-22",
      slug: "runtru-e4hl5-central-ducted-cfg-22",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-23",
      slug: "runtru-e4hl5-central-ducted-cfg-23",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-24",
      slug: "runtru-e4hl5-central-ducted-cfg-24",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5030a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-25",
      slug: "runtru-e4hl5-central-ducted-cfg-25",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5030a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-26",
      slug: "runtru-e4hl5-central-ducted-cfg-26",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5030a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-27",
      slug: "runtru-e4hl5-central-ducted-cfg-27",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-28",
      slug: "runtru-e4hl5-central-ducted-cfg-28",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-29",
      slug: "runtru-e4hl5-central-ducted-cfg-29",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-30",
      slug: "runtru-e4hl5-central-ducted-cfg-30",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-31",
      slug: "runtru-e4hl5-central-ducted-cfg-31",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-32",
      slug: "runtru-e4hl5-central-ducted-cfg-32",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-33",
      slug: "runtru-e4hl5-central-ducted-cfg-33",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-34",
      slug: "runtru-e4hl5-central-ducted-cfg-34",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-35",
      slug: "runtru-e4hl5-central-ducted-cfg-35",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-36",
      slug: "runtru-e4hl5-central-ducted-cfg-36",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5030a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-37",
      slug: "runtru-e4hl5-central-ducted-cfg-37",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-38",
      slug: "runtru-e4hl5-central-ducted-cfg-38",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5060a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-39",
      slug: "runtru-e4hl5-central-ducted-cfg-39",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5060a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-40",
      slug: "runtru-e4hl5-central-ducted-cfg-40",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5060a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-41",
      slug: "runtru-e4hl5-central-ducted-cfg-41",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5018a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-42",
      slug: "runtru-e4hl5-central-ducted-cfg-42",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5024a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-43",
      slug: "runtru-e4hl5-central-ducted-cfg-43",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5030a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-e4hl5-central-ducted-cfg-44",
      slug: "runtru-e4hl5-central-ducted-cfg-44",
      modelId: "runtru-e4hl5-central-ducted",
      outdoorUnitId: "runtru-e4hl5036a1000a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-23u-series-wall-single-cfg-1",
      slug: "runtru-23u-series-wall-single-cfg-1",
      modelId: "runtru-23u-series-wall-single",
      outdoorUnitId: "runtru-m5ths2309a11naa",
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
      id: "runtru-23u-series-wall-single-cfg-2",
      slug: "runtru-23u-series-wall-single-cfg-2",
      modelId: "runtru-23u-series-wall-single",
      outdoorUnitId: "runtru-m5ths2312a11naa",
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
      id: "runtru-23u-series-wall-single-cfg-3",
      slug: "runtru-23u-series-wall-single-cfg-3",
      modelId: "runtru-23u-series-wall-single",
      outdoorUnitId: "runtru-m5ths2318a11naa",
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
      id: "runtru-23u-series-wall-single-cfg-4",
      slug: "runtru-23u-series-wall-single-cfg-4",
      modelId: "runtru-23u-series-wall-single",
      outdoorUnitId: "runtru-m5ths2324a11naa",
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
      id: "runtru-a5hl5-central-ducted-cfg-1",
      slug: "runtru-a5hl5-central-ducted-cfg-1",
      modelId: "runtru-a5hl5-central-ducted",
      outdoorUnitId: "runtru-a5hl5024a1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-a5hl5-central-ducted-cfg-2",
      slug: "runtru-a5hl5-central-ducted-cfg-2",
      modelId: "runtru-a5hl5-central-ducted",
      outdoorUnitId: "runtru-a5hl5036a1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "runtru-a5hl5-central-ducted-cfg-3",
      slug: "runtru-a5hl5-central-ducted-cfg-3",
      modelId: "runtru-a5hl5-central-ducted",
      outdoorUnitId: "runtru-a5hl5048a1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "runtru-standard-wall-single-cfg-1",
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
      configurationId: "runtru-standard-wall-single-cfg-2",
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
      configurationId: "runtru-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-4",
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
      configurationId: "runtru-standard-wall-single-cfg-5",
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
      configurationId: "runtru-standard-wall-single-cfg-6",
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
      configurationId: "runtru-standard-wall-single-cfg-7",
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
      configurationId: "runtru-standard-wall-single-cfg-8",
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
      configurationId: "runtru-standard-wall-single-cfg-9",
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
      configurationId: "runtru-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-13",
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
      configurationId: "runtru-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-18",
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
      configurationId: "runtru-standard-wall-single-cfg-19",
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
      configurationId: "runtru-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-22",
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
      configurationId: "runtru-standard-wall-single-cfg-23",
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
      configurationId: "runtru-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-standard-central-ducted-cfg-2",
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
      configurationId: "runtru-standard-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-n-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-n-series-wall-single-cfg-2",
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
      configurationId: "runtru-n-series-wall-single-cfg-3",
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
      configurationId: "runtru-n-series-wall-single-cfg-4",
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
      configurationId: "runtru-n-series-wall-single-cfg-5",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-9",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-11",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-12",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-19",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-20",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-21",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-22",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-23",
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
      configurationId: "runtru-e4hl5-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-e4hl5-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-23u-series-wall-single-cfg-1",
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
      configurationId: "runtru-23u-series-wall-single-cfg-2",
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
      configurationId: "runtru-23u-series-wall-single-cfg-3",
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
      configurationId: "runtru-23u-series-wall-single-cfg-4",
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
      configurationId: "runtru-a5hl5-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-a5hl5-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "runtru-a5hl5-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.75,
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
