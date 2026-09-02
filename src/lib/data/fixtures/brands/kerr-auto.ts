import type { BrandDataset } from "../../types";

export const kerrDataset: BrandDataset = {
  brand: {
    id: "kerr",
    slug: "kerr",
    name: "KERR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "kerr-standard",
      slug: "kerr-standard",
      name: "Standard",
      brandId: "kerr",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series",
      slug: "kerr-a-series",
      name: "A-series",
      brandId: "kerr",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kcd-series",
      slug: "kerr-a-kcd-series",
      name: "A-KCD series",
      brandId: "kerr",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series",
      slug: "kerr-a-khp-series",
      name: "A-KHP Series",
      brandId: "kerr",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-ksp-series",
      slug: "kerr-a-ksp-series",
      name: "A-KSP Series",
      brandId: "kerr",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kzp-series",
      slug: "kerr-a-kzp-series",
      name: "A-KZP Series",
      brandId: "kerr",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series",
      slug: "kerr-kxp-series",
      name: "KXP Series",
      brandId: "kerr",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kmh-series",
      slug: "kerr-a-kmh-series",
      name: "A-KMH Series",
      brandId: "kerr",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "kerr-standard-wall-single",
      slug: "kerr-standard-wall-single",
      name: "Standard",
      seriesId: "kerr-standard",
      brandId: "kerr",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 29600,
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
      id: "kerr-a-series-wall-single",
      slug: "kerr-a-series-wall-single",
      name: "A-series",
      seriesId: "kerr-a-series",
      brandId: "kerr",
      modelNumber: "A-series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 18,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 13.8,
      cop5FMin: 1.59,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kcd-series-central-ducted",
      slug: "kerr-a-kcd-series-central-ducted",
      name: "A-KCD series",
      seriesId: "kerr-a-kcd-series",
      brandId: "kerr",
      modelNumber: "A-KCD series",
      normalizedModelNumber: "a-kcd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 16700,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 16.5,
      hspf2Min: 9.4,
      hspf2Max: 10,
      cop5FMin: 1.85,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted",
      slug: "kerr-a-series-central-ducted",
      name: "A Series",
      seriesId: "kerr-a-series",
      brandId: "kerr",
      modelNumber: "A Series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-central-ducted",
      slug: "kerr-a-khp-series-central-ducted",
      name: "A-KHP Series",
      seriesId: "kerr-a-khp-series",
      brandId: "kerr",
      modelNumber: "A-KHP Series",
      normalizedModelNumber: "a-khp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 16.5,
      seer2Max: 18.7,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-ksp-series-wall-single",
      slug: "kerr-a-ksp-series-wall-single",
      name: "A-KSP Series",
      seriesId: "kerr-a-ksp-series",
      brandId: "kerr",
      modelNumber: "A-KSP Series",
      normalizedModelNumber: "a-ksp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 17100,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 9.7,
      cop5FMin: 2.01,
      cop5FMax: 2.15,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single",
      slug: "kerr-a-khp-series-wall-single",
      name: "A-KHP Series",
      seriesId: "kerr-a-khp-series",
      brandId: "kerr",
      modelNumber: "A-KHP Series",
      normalizedModelNumber: "a-khp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 27.4,
      hspf2Min: 9.5,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kzp-series-wall-single",
      slug: "kerr-a-kzp-series-wall-single",
      name: "A-KZP Series",
      seriesId: "kerr-a-kzp-series",
      brandId: "kerr",
      modelNumber: "A-KZP Series",
      normalizedModelNumber: "a-kzp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 19300,
      seer2Min: 25.6,
      seer2Max: 35,
      hspf2Min: 12.7,
      hspf2Max: 16.2,
      cop5FMin: 2,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted",
      slug: "kerr-kxp-series-central-ducted",
      name: "KXP Series",
      seriesId: "kerr-kxp-series",
      brandId: "kerr",
      modelNumber: "KXP Series",
      normalizedModelNumber: "kxp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 15200,
      heatingCapacity5FMaxBtu: 34400,
      seer2Min: 15.2,
      seer2Max: 16.1,
      hspf2Min: 8.8,
      hspf2Max: 9.6,
      cop5FMin: 1.8,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kmh-series-wall-single",
      slug: "kerr-a-kmh-series-wall-single",
      name: "A-KMH Series",
      seriesId: "kerr-a-kmh-series",
      brandId: "kerr",
      modelNumber: "A-KMH Series",
      normalizedModelNumber: "a-kmh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19.4,
      seer2Max: 22.4,
      hspf2Min: 10,
      hspf2Max: 10.9,
      cop5FMin: 1.9,
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
      id: "kerr-a-kmh09su-1",
      modelNumber: "A-KMH09SU-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh12su-1",
      modelNumber: "A-KMH12SU-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh28tu-1",
      modelNumber: "A-KMH28TU-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh36qu-1",
      modelNumber: "A-KMH36QU-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh48pu-1",
      modelNumber: "A-KMH48PU-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-ksp09sa-0",
      modelNumber: "A-KSP09SA-0",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-ksp12sa-0",
      modelNumber: "A-KSP12SA-0",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-ksp12sa-1",
      modelNumber: "A-KSP12SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-ksp18sa-1",
      modelNumber: "A-KSP18SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh24su-1",
      modelNumber: "A-KMH24SU-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh18su-1a",
      modelNumber: "A-KMH18SU-1A",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-vmh24su-1a",
      modelNumber: "A-VMH24SU-1A",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh24su-1a",
      modelNumber: "A-KMH24SU-1A",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh18su-1",
      modelNumber: "A-KMH18SU-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh06sv-1",
      modelNumber: "A-KMH06SV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh09sv-1",
      modelNumber: "A-KMH09SV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh12sv-1",
      modelNumber: "A-KMH12SV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh18sv-1",
      modelNumber: "A-KMH18SV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh24sv-1",
      modelNumber: "A-KMH24SV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh18dv-1",
      modelNumber: "A-KMH18DV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh28tv-1",
      modelNumber: "A-KMH28TV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh36qv-1",
      modelNumber: "A-KMH36QV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh48pv-1",
      modelNumber: "A-KMH48PV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh55pv-1",
      modelNumber: "A-KMH55PV-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp06sa-1",
      modelNumber: "A-KHP06SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp09sa-1",
      modelNumber: "A-KHP09SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp12sa-1",
      modelNumber: "A-KHP12SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp18sa-1",
      modelNumber: "A-KHP18SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp24sa-1",
      modelNumber: "A-KHP24SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kcd24sa-1",
      modelNumber: "A-KCD24SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kcd60sa-1",
      modelNumber: "A-KCD60SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kcd30sa-1",
      modelNumber: "A-KCD30SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kcd36sa-1",
      modelNumber: "A-KCD36SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kcd48sa-1",
      modelNumber: "A-KCD48SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kcd18sa-1",
      modelNumber: "A-KCD18SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp18sa-1",
      modelNumber: "A-KXP18SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp24sa-1",
      modelNumber: "A-KXP24SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp30sa-1",
      modelNumber: "A-KXP30SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp36sa-1",
      modelNumber: "A-KXP36SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp48sa-1",
      modelNumber: "A-KXP48SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp60sa-1",
      modelNumber: "A-KXP60SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp33sa-1",
      modelNumber: "A-KHP33SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-ksp09sa-1",
      modelNumber: "A-KSP09SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-ksp24sa-1",
      modelNumber: "A-KSP24SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp183a-1",
      modelNumber: "A-KHP183A-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp284a-1",
      modelNumber: "A-KHP284A-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp365a-1",
      modelNumber: "A-KHP365A-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp486a-1",
      modelNumber: "A-KHP486A-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-khp556a-1",
      modelNumber: "A-KHP556A-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kzp06sa-1",
      modelNumber: "A-KZP06SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kzpo9sa-1",
      modelNumber: "A-KZPO9SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kzp12sa-1",
      modelNumber: "A-KZP12SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kzp18sa-1",
      modelNumber: "A-KZP18SA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp18ta-1",
      modelNumber: "A-KXP18TA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp24ta-1",
      modelNumber: "A-KXP24TA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp30ta-1",
      modelNumber: "A-KXP30TA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp36ta-1",
      modelNumber: "A-KXP36TA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kxp48ta-1",
      modelNumber: "A-KXP48TA-1",
      brandId: "kerr",
      refrigerant: null as any,
    },
    {
      id: "kerr-a-kmh36qv-1a",
      modelNumber: "A-KMH36QV-1A",
      brandId: "kerr",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "kerr-standard-wall-single-cfg-1",
      slug: "kerr-standard-wall-single-cfg-1",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh09su-1",
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
      id: "kerr-standard-wall-single-cfg-2",
      slug: "kerr-standard-wall-single-cfg-2",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh12su-1",
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
      id: "kerr-standard-wall-single-cfg-3",
      slug: "kerr-standard-wall-single-cfg-3",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh28tu-1",
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
      id: "kerr-standard-wall-single-cfg-4",
      slug: "kerr-standard-wall-single-cfg-4",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh36qu-1",
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
      id: "kerr-standard-wall-single-cfg-5",
      slug: "kerr-standard-wall-single-cfg-5",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh36qu-1",
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
      id: "kerr-standard-wall-single-cfg-6",
      slug: "kerr-standard-wall-single-cfg-6",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh09su-1",
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
      id: "kerr-standard-wall-single-cfg-7",
      slug: "kerr-standard-wall-single-cfg-7",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh12su-1",
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
      id: "kerr-standard-wall-single-cfg-8",
      slug: "kerr-standard-wall-single-cfg-8",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh48pu-1",
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
      id: "kerr-standard-wall-single-cfg-9",
      slug: "kerr-standard-wall-single-cfg-9",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-kmh12su-1",
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
      id: "kerr-standard-wall-single-cfg-10",
      slug: "kerr-standard-wall-single-cfg-10",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-ksp09sa-0",
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
      id: "kerr-standard-wall-single-cfg-11",
      slug: "kerr-standard-wall-single-cfg-11",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-ksp12sa-0",
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
      id: "kerr-standard-wall-single-cfg-12",
      slug: "kerr-standard-wall-single-cfg-12",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-ksp12sa-1",
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
      id: "kerr-standard-wall-single-cfg-13",
      slug: "kerr-standard-wall-single-cfg-13",
      modelId: "kerr-standard-wall-single",
      outdoorUnitId: "kerr-a-ksp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-1",
      slug: "kerr-a-series-wall-single-cfg-1",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24su-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-2",
      slug: "kerr-a-series-wall-single-cfg-2",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-3",
      slug: "kerr-a-series-wall-single-cfg-3",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-vmh24su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-4",
      slug: "kerr-a-series-wall-single-cfg-4",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-5",
      slug: "kerr-a-series-wall-single-cfg-5",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-6",
      slug: "kerr-a-series-wall-single-cfg-6",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-7",
      slug: "kerr-a-series-wall-single-cfg-7",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-8",
      slug: "kerr-a-series-wall-single-cfg-8",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-9",
      slug: "kerr-a-series-wall-single-cfg-9",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-10",
      slug: "kerr-a-series-wall-single-cfg-10",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-11",
      slug: "kerr-a-series-wall-single-cfg-11",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-12",
      slug: "kerr-a-series-wall-single-cfg-12",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24su-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-13",
      slug: "kerr-a-series-wall-single-cfg-13",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18su-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-14",
      slug: "kerr-a-series-wall-single-cfg-14",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24su-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-15",
      slug: "kerr-a-series-wall-single-cfg-15",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh06sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 26.5,
      hspf2: 13.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-16",
      slug: "kerr-a-series-wall-single-cfg-16",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh09sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-17",
      slug: "kerr-a-series-wall-single-cfg-17",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh12sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-18",
      slug: "kerr-a-series-wall-single-cfg-18",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-19",
      slug: "kerr-a-series-wall-single-cfg-19",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-20",
      slug: "kerr-a-series-wall-single-cfg-20",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-21",
      slug: "kerr-a-series-wall-single-cfg-21",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18dv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-22",
      slug: "kerr-a-series-wall-single-cfg-22",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18dv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-23",
      slug: "kerr-a-series-wall-single-cfg-23",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18dv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-24",
      slug: "kerr-a-series-wall-single-cfg-24",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh28tv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 23,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-25",
      slug: "kerr-a-series-wall-single-cfg-25",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh28tv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-26",
      slug: "kerr-a-series-wall-single-cfg-26",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh28tv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.5,
      hspf2: 10.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-27",
      slug: "kerr-a-series-wall-single-cfg-27",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh36qv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-28",
      slug: "kerr-a-series-wall-single-cfg-28",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh36qv-1",
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
      id: "kerr-a-series-wall-single-cfg-29",
      slug: "kerr-a-series-wall-single-cfg-29",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh48pv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.8,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-30",
      slug: "kerr-a-series-wall-single-cfg-30",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh48pv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-31",
      slug: "kerr-a-series-wall-single-cfg-31",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh48pv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.35,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-32",
      slug: "kerr-a-series-wall-single-cfg-32",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh36qv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.6,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-33",
      slug: "kerr-a-series-wall-single-cfg-33",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh09sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-34",
      slug: "kerr-a-series-wall-single-cfg-34",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh12sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-35",
      slug: "kerr-a-series-wall-single-cfg-35",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-36",
      slug: "kerr-a-series-wall-single-cfg-36",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-37",
      slug: "kerr-a-series-wall-single-cfg-37",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18su-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-38",
      slug: "kerr-a-series-wall-single-cfg-38",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24su-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-39",
      slug: "kerr-a-series-wall-single-cfg-39",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-40",
      slug: "kerr-a-series-wall-single-cfg-40",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-41",
      slug: "kerr-a-series-wall-single-cfg-41",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh09sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-42",
      slug: "kerr-a-series-wall-single-cfg-42",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-43",
      slug: "kerr-a-series-wall-single-cfg-43",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh12sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-44",
      slug: "kerr-a-series-wall-single-cfg-44",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh24sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-45",
      slug: "kerr-a-series-wall-single-cfg-45",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-46",
      slug: "kerr-a-series-wall-single-cfg-46",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh18sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-47",
      slug: "kerr-a-series-wall-single-cfg-47",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh09sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-48",
      slug: "kerr-a-series-wall-single-cfg-48",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh12sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-49",
      slug: "kerr-a-series-wall-single-cfg-49",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh12sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-50",
      slug: "kerr-a-series-wall-single-cfg-50",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh12sv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.2,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-51",
      slug: "kerr-a-series-wall-single-cfg-51",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh55pv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-52",
      slug: "kerr-a-series-wall-single-cfg-52",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh55pv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-53",
      slug: "kerr-a-series-wall-single-cfg-53",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-kmh55pv-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-54",
      slug: "kerr-a-series-wall-single-cfg-54",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp06sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-55",
      slug: "kerr-a-series-wall-single-cfg-55",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp06sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-56",
      slug: "kerr-a-series-wall-single-cfg-56",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-57",
      slug: "kerr-a-series-wall-single-cfg-57",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-58",
      slug: "kerr-a-series-wall-single-cfg-58",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-59",
      slug: "kerr-a-series-wall-single-cfg-59",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-60",
      slug: "kerr-a-series-wall-single-cfg-60",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.2,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-61",
      slug: "kerr-a-series-wall-single-cfg-61",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-62",
      slug: "kerr-a-series-wall-single-cfg-62",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-63",
      slug: "kerr-a-series-wall-single-cfg-63",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp12sa-1",
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
      id: "kerr-a-series-wall-single-cfg-64",
      slug: "kerr-a-series-wall-single-cfg-64",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp12sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-65",
      slug: "kerr-a-series-wall-single-cfg-65",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp12sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-66",
      slug: "kerr-a-series-wall-single-cfg-66",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp12sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-67",
      slug: "kerr-a-series-wall-single-cfg-67",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-68",
      slug: "kerr-a-series-wall-single-cfg-68",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-69",
      slug: "kerr-a-series-wall-single-cfg-69",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-70",
      slug: "kerr-a-series-wall-single-cfg-70",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-71",
      slug: "kerr-a-series-wall-single-cfg-71",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.4,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-72",
      slug: "kerr-a-series-wall-single-cfg-72",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-73",
      slug: "kerr-a-series-wall-single-cfg-73",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.4,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-wall-single-cfg-74",
      slug: "kerr-a-series-wall-single-cfg-74",
      modelId: "kerr-a-series-wall-single",
      outdoorUnitId: "kerr-a-khp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kcd-series-central-ducted-cfg-1",
      slug: "kerr-a-kcd-series-central-ducted-cfg-1",
      modelId: "kerr-a-kcd-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kcd-series-central-ducted-cfg-2",
      slug: "kerr-a-kcd-series-central-ducted-cfg-2",
      modelId: "kerr-a-kcd-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd60sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kcd-series-central-ducted-cfg-3",
      slug: "kerr-a-kcd-series-central-ducted-cfg-3",
      modelId: "kerr-a-kcd-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kcd-series-central-ducted-cfg-4",
      slug: "kerr-a-kcd-series-central-ducted-cfg-4",
      modelId: "kerr-a-kcd-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kcd-series-central-ducted-cfg-5",
      slug: "kerr-a-kcd-series-central-ducted-cfg-5",
      modelId: "kerr-a-kcd-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kcd-series-central-ducted-cfg-6",
      slug: "kerr-a-kcd-series-central-ducted-cfg-6",
      modelId: "kerr-a-kcd-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd60sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-1",
      slug: "kerr-a-series-central-ducted-cfg-1",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-2",
      slug: "kerr-a-series-central-ducted-cfg-2",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-3",
      slug: "kerr-a-series-central-ducted-cfg-3",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-4",
      slug: "kerr-a-series-central-ducted-cfg-4",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-5",
      slug: "kerr-a-series-central-ducted-cfg-5",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-6",
      slug: "kerr-a-series-central-ducted-cfg-6",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-7",
      slug: "kerr-a-series-central-ducted-cfg-7",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-8",
      slug: "kerr-a-series-central-ducted-cfg-8",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-9",
      slug: "kerr-a-series-central-ducted-cfg-9",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-10",
      slug: "kerr-a-series-central-ducted-cfg-10",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-11",
      slug: "kerr-a-series-central-ducted-cfg-11",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-12",
      slug: "kerr-a-series-central-ducted-cfg-12",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd60sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-13",
      slug: "kerr-a-series-central-ducted-cfg-13",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-14",
      slug: "kerr-a-series-central-ducted-cfg-14",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-15",
      slug: "kerr-a-series-central-ducted-cfg-15",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-16",
      slug: "kerr-a-series-central-ducted-cfg-16",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kcd48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-17",
      slug: "kerr-a-series-central-ducted-cfg-17",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-18",
      slug: "kerr-a-series-central-ducted-cfg-18",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-19",
      slug: "kerr-a-series-central-ducted-cfg-19",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-20",
      slug: "kerr-a-series-central-ducted-cfg-20",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-21",
      slug: "kerr-a-series-central-ducted-cfg-21",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-22",
      slug: "kerr-a-series-central-ducted-cfg-22",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp60sa-1",
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
      id: "kerr-a-series-central-ducted-cfg-23",
      slug: "kerr-a-series-central-ducted-cfg-23",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-24",
      slug: "kerr-a-series-central-ducted-cfg-24",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-25",
      slug: "kerr-a-series-central-ducted-cfg-25",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp24sa-1",
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
      id: "kerr-a-series-central-ducted-cfg-26",
      slug: "kerr-a-series-central-ducted-cfg-26",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp24sa-1",
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
      id: "kerr-a-series-central-ducted-cfg-27",
      slug: "kerr-a-series-central-ducted-cfg-27",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.3,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-28",
      slug: "kerr-a-series-central-ducted-cfg-28",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-29",
      slug: "kerr-a-series-central-ducted-cfg-29",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp30sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-30",
      slug: "kerr-a-series-central-ducted-cfg-30",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-31",
      slug: "kerr-a-series-central-ducted-cfg-31",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp36sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-32",
      slug: "kerr-a-series-central-ducted-cfg-32",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-33",
      slug: "kerr-a-series-central-ducted-cfg-33",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp48sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-34",
      slug: "kerr-a-series-central-ducted-cfg-34",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp60sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-series-central-ducted-cfg-35",
      slug: "kerr-a-series-central-ducted-cfg-35",
      modelId: "kerr-a-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp60sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-central-ducted-cfg-1",
      slug: "kerr-a-khp-series-central-ducted-cfg-1",
      modelId: "kerr-a-khp-series-central-ducted",
      outdoorUnitId: "kerr-a-khp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-central-ducted-cfg-2",
      slug: "kerr-a-khp-series-central-ducted-cfg-2",
      modelId: "kerr-a-khp-series-central-ducted",
      outdoorUnitId: "kerr-a-khp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-central-ducted-cfg-3",
      slug: "kerr-a-khp-series-central-ducted-cfg-3",
      modelId: "kerr-a-khp-series-central-ducted",
      outdoorUnitId: "kerr-a-khp33sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-ksp-series-wall-single-cfg-1",
      slug: "kerr-a-ksp-series-wall-single-cfg-1",
      modelId: "kerr-a-ksp-series-wall-single",
      outdoorUnitId: "kerr-a-ksp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-ksp-series-wall-single-cfg-2",
      slug: "kerr-a-ksp-series-wall-single-cfg-2",
      modelId: "kerr-a-ksp-series-wall-single",
      outdoorUnitId: "kerr-a-ksp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-1",
      slug: "kerr-a-khp-series-wall-single-cfg-1",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp06sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.5,
      hspf2: 14.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-2",
      slug: "kerr-a-khp-series-wall-single-cfg-2",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp09sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-3",
      slug: "kerr-a-khp-series-wall-single-cfg-3",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp12sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-4",
      slug: "kerr-a-khp-series-wall-single-cfg-4",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-5",
      slug: "kerr-a-khp-series-wall-single-cfg-5",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp24sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-6",
      slug: "kerr-a-khp-series-wall-single-cfg-6",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp33sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-7",
      slug: "kerr-a-khp-series-wall-single-cfg-7",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp183a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 25,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-8",
      slug: "kerr-a-khp-series-wall-single-cfg-8",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp183a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-9",
      slug: "kerr-a-khp-series-wall-single-cfg-9",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp183a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-10",
      slug: "kerr-a-khp-series-wall-single-cfg-10",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp284a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-11",
      slug: "kerr-a-khp-series-wall-single-cfg-11",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp284a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-12",
      slug: "kerr-a-khp-series-wall-single-cfg-12",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp284a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-13",
      slug: "kerr-a-khp-series-wall-single-cfg-13",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp365a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-14",
      slug: "kerr-a-khp-series-wall-single-cfg-14",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp365a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-15",
      slug: "kerr-a-khp-series-wall-single-cfg-15",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp365a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.2,
      hspf2: 10.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-16",
      slug: "kerr-a-khp-series-wall-single-cfg-16",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp486a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-17",
      slug: "kerr-a-khp-series-wall-single-cfg-17",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp486a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-18",
      slug: "kerr-a-khp-series-wall-single-cfg-18",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp486a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 21.7,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-19",
      slug: "kerr-a-khp-series-wall-single-cfg-19",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp556a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 22.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-20",
      slug: "kerr-a-khp-series-wall-single-cfg-20",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp556a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 20,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-khp-series-wall-single-cfg-21",
      slug: "kerr-a-khp-series-wall-single-cfg-21",
      modelId: "kerr-a-khp-series-wall-single",
      outdoorUnitId: "kerr-a-khp556a-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 21.1,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kzp-series-wall-single-cfg-1",
      slug: "kerr-a-kzp-series-wall-single-cfg-1",
      modelId: "kerr-a-kzp-series-wall-single",
      outdoorUnitId: "kerr-a-kzp06sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 35,
      hspf2: 15.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kzp-series-wall-single-cfg-2",
      slug: "kerr-a-kzp-series-wall-single-cfg-2",
      modelId: "kerr-a-kzp-series-wall-single",
      outdoorUnitId: "kerr-a-kzpo9sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kzp-series-wall-single-cfg-3",
      slug: "kerr-a-kzp-series-wall-single-cfg-3",
      modelId: "kerr-a-kzp-series-wall-single",
      outdoorUnitId: "kerr-a-kzp12sa-1",
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
      id: "kerr-a-kzp-series-wall-single-cfg-4",
      slug: "kerr-a-kzp-series-wall-single-cfg-4",
      modelId: "kerr-a-kzp-series-wall-single",
      outdoorUnitId: "kerr-a-kzp18sa-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.6,
      hspf2: 16.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted-cfg-1",
      slug: "kerr-kxp-series-central-ducted-cfg-1",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp18ta-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted-cfg-2",
      slug: "kerr-kxp-series-central-ducted-cfg-2",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp18ta-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted-cfg-3",
      slug: "kerr-kxp-series-central-ducted-cfg-3",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp24ta-1",
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
      id: "kerr-kxp-series-central-ducted-cfg-4",
      slug: "kerr-kxp-series-central-ducted-cfg-4",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp24ta-1",
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
      id: "kerr-kxp-series-central-ducted-cfg-5",
      slug: "kerr-kxp-series-central-ducted-cfg-5",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp30ta-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.3,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted-cfg-6",
      slug: "kerr-kxp-series-central-ducted-cfg-6",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp30ta-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted-cfg-7",
      slug: "kerr-kxp-series-central-ducted-cfg-7",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp30ta-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted-cfg-8",
      slug: "kerr-kxp-series-central-ducted-cfg-8",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp36ta-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted-cfg-9",
      slug: "kerr-kxp-series-central-ducted-cfg-9",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp36ta-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-kxp-series-central-ducted-cfg-10",
      slug: "kerr-kxp-series-central-ducted-cfg-10",
      modelId: "kerr-kxp-series-central-ducted",
      outdoorUnitId: "kerr-a-kxp48ta-1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kmh-series-wall-single-cfg-1",
      slug: "kerr-a-kmh-series-wall-single-cfg-1",
      modelId: "kerr-a-kmh-series-wall-single",
      outdoorUnitId: "kerr-a-kmh36qv-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.4,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kmh-series-wall-single-cfg-2",
      slug: "kerr-a-kmh-series-wall-single-cfg-2",
      modelId: "kerr-a-kmh-series-wall-single",
      outdoorUnitId: "kerr-a-kmh36qv-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kerr-a-kmh-series-wall-single-cfg-3",
      slug: "kerr-a-kmh-series-wall-single-cfg-3",
      modelId: "kerr-a-kmh-series-wall-single",
      outdoorUnitId: "kerr-a-kmh36qv-1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.9,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "kerr-standard-wall-single-cfg-1",
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
      configurationId: "kerr-standard-wall-single-cfg-2",
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
      configurationId: "kerr-standard-wall-single-cfg-3",
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
      configurationId: "kerr-standard-wall-single-cfg-4",
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
      configurationId: "kerr-standard-wall-single-cfg-5",
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
      configurationId: "kerr-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-standard-wall-single-cfg-8",
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
      configurationId: "kerr-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-standard-wall-single-cfg-10",
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
      configurationId: "kerr-standard-wall-single-cfg-11",
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
      configurationId: "kerr-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-standard-wall-single-cfg-13",
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
      configurationId: "kerr-a-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-7",
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
      configurationId: "kerr-a-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-17",
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
      configurationId: "kerr-a-series-wall-single-cfg-18",
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
      configurationId: "kerr-a-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-25",
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
      configurationId: "kerr-a-series-wall-single-cfg-26",
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
      configurationId: "kerr-a-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 1.59,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-37",
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
      configurationId: "kerr-a-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-41",
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
      configurationId: "kerr-a-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-45",
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
      configurationId: "kerr-a-series-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9900,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-wall-single-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kcd-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kcd-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kcd-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kcd-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kcd-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kcd-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-6",
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
      configurationId: "kerr-a-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-9",
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
      configurationId: "kerr-a-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-14",
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
      configurationId: "kerr-a-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-17",
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
      configurationId: "kerr-a-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-27",
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
      configurationId: "kerr-a-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-ksp-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-ksp-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.01,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-khp-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kzp-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kzp-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kzp-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kzp-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19300,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-kxp-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kmh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kmh-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kerr-a-kmh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.95,
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
