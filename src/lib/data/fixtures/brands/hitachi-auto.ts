import type { BrandDataset } from "../../types";

export const hitachiDataset: BrandDataset = {
  brand: {
    id: "hitachi",
    slug: "hitachi",
    name: "HITACHI",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "hitachi-standard",
      slug: "hitachi-standard",
      name: "Standard",
      brandId: "hitachi",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni",
      slug: "hitachi-hi-uni",
      name: "Hi UNI",
      brandId: "hitachi",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700",
      slug: "hitachi-aircore700",
      name: "airCore700",
      brandId: "hitachi",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "hitachi-standard-wall-single",
      slug: "hitachi-standard-wall-single",
      name: "Standard",
      seriesId: "hitachi-standard",
      brandId: "hitachi",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6500,
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
    },
    {
      id: "hitachi-hi-uni-wall-single",
      slug: "hitachi-hi-uni-wall-single",
      name: "Hi UNI",
      seriesId: "hitachi-hi-uni",
      brandId: "hitachi",
      modelNumber: "Hi UNI",
      normalizedModelNumber: "hi-uni",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 5500,
      heatingCapacity5FMaxBtu: 19600,
      seer2Min: 18,
      seer2Max: 22,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 1.88,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single",
      slug: "hitachi-aircore700-wall-single",
      name: "airCore700",
      seriesId: "hitachi-aircore700",
      brandId: "hitachi",
      modelNumber: "airCore700",
      normalizedModelNumber: "aircore700",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 41000,
      seer2Min: 16,
      seer2Max: 25,
      hspf2Min: 9,
      hspf2Max: 12.2,
      cop5FMin: 2,
      cop5FMax: 2.6,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "hitachi-hvahp060b21s",
      modelNumber: "HVAHP060B21S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp036b21s",
      modelNumber: "HVAHP036B21S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp048b21s",
      modelNumber: "HVAHP048B21S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-sh18whlae",
      modelNumber: "RAC-SH18WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-sh24whlae",
      modelNumber: "RAC-SH24WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-s18u2hlae",
      modelNumber: "RAM-S18U2HLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-s36u4hlae",
      modelNumber: "RAM-S36U4HLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-s42u5hlae",
      modelNumber: "RAM-S42U5HLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-s24u3hlae",
      modelNumber: "RAM-S24U3HLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-4-0pnnbdh1",
      modelNumber: "RAS-4.0PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-sh09whlae",
      modelNumber: "RAC-SH09WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-sh12whlae",
      modelNumber: "RAC-SH12WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ph09whlae",
      modelNumber: "RAC-PH09WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ph12whlae",
      modelNumber: "RAC-PH12WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ph24whlae",
      modelNumber: "RAC-PH24WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ph18whlae",
      modelNumber: "RAC-PH18WHLAE",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj09whaa",
      modelNumber: "RAC-DJ09WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj12whaa",
      modelNumber: "RAC-DJ12WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj18whaa",
      modelNumber: "RAC-DJ18WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj24whaa",
      modelNumber: "RAC-DJ24WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj09whaa",
      modelNumber: "RAC-GJ09WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj12whaa",
      modelNumber: "RAC-GJ12WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj18whaa",
      modelNumber: "RAC-GJ18WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj24whaa",
      modelNumber: "RAC-GJ24WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-g42n5haa",
      modelNumber: "RAM-G42N5HAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-xj09whaa",
      modelNumber: "RAC-XJ09WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-xj12whaa",
      modelNumber: "RAC-XJ12WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-xj18whaa",
      modelNumber: "RAC-XJ18WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-xj24whaa",
      modelNumber: "RAC-XJ24WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-g18n2haa",
      modelNumber: "RAM-G18N2HAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-g24n3haa",
      modelNumber: "RAM-G24N3HAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ram-g36n4haa",
      modelNumber: "RAM-G36N4HAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-dj36whaa",
      modelNumber: "RAC-DJ36WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-gj15whaa",
      modelNumber: "RAC-GJ15WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-rac-ej12whaa",
      modelNumber: "RAC-EJ12WHAA",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp036c23s",
      modelNumber: "HVAHP036C23S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp048c23s",
      modelNumber: "HVAHP048C23S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-hvahp060c23s",
      modelNumber: "HVAHP060C23S*",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-1-0pnnbdh1",
      modelNumber: "RAS-1.0PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-1-5pnnbdh1",
      modelNumber: "RAS-1.5PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-2-0pnnbdh1",
      modelNumber: "RAS-2.0PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-ras-3-0pnnbdh1",
      modelNumber: "RAS-3.0PNNBDH1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-18bufasdq1",
      modelNumber: "PAS-18BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-24bufasdq1",
      modelNumber: "PAS-24BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-30bufasdq1",
      modelNumber: "PAS-30BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-36bufasdq1",
      modelNumber: "PAS-36BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-48bufasdq1",
      modelNumber: "PAS-48BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-09bufasdq1",
      modelNumber: "PAS-09BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-12bufasdq1",
      modelNumber: "PAS-12BUFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-18blfasdq1",
      modelNumber: "PAS-18BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-24blfasdq1",
      modelNumber: "PAS-24BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-30blfasdq1",
      modelNumber: "PAS-30BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-36blfasdq1",
      modelNumber: "PAS-36BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    },
    {
      id: "hitachi-pas-12blfasdq1",
      modelNumber: "PAS-12BLFASDQ1",
      brandId: "hitachi",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "hitachi-standard-wall-single-cfg-1",
      slug: "hitachi-standard-wall-single-cfg-1",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp060b21s",
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
      id: "hitachi-standard-wall-single-cfg-2",
      slug: "hitachi-standard-wall-single-cfg-2",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp036b21s",
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
      id: "hitachi-standard-wall-single-cfg-3",
      slug: "hitachi-standard-wall-single-cfg-3",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp048b21s",
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
      id: "hitachi-standard-wall-single-cfg-4",
      slug: "hitachi-standard-wall-single-cfg-4",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp036b21s",
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
      id: "hitachi-standard-wall-single-cfg-5",
      slug: "hitachi-standard-wall-single-cfg-5",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp048b21s",
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
      id: "hitachi-standard-wall-single-cfg-6",
      slug: "hitachi-standard-wall-single-cfg-6",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp060b21s",
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
      id: "hitachi-standard-wall-single-cfg-7",
      slug: "hitachi-standard-wall-single-cfg-7",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp036b21s",
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
      id: "hitachi-standard-wall-single-cfg-8",
      slug: "hitachi-standard-wall-single-cfg-8",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp048b21s",
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
      id: "hitachi-standard-wall-single-cfg-9",
      slug: "hitachi-standard-wall-single-cfg-9",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp060b21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-cfg-10",
      slug: "hitachi-standard-wall-single-cfg-10",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-sh18whlae",
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
      id: "hitachi-standard-wall-single-cfg-11",
      slug: "hitachi-standard-wall-single-cfg-11",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-sh24whlae",
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
      id: "hitachi-standard-wall-single-cfg-12",
      slug: "hitachi-standard-wall-single-cfg-12",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-s18u2hlae",
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
      id: "hitachi-standard-wall-single-cfg-13",
      slug: "hitachi-standard-wall-single-cfg-13",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-s36u4hlae",
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
      id: "hitachi-standard-wall-single-cfg-14",
      slug: "hitachi-standard-wall-single-cfg-14",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-s42u5hlae",
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
      id: "hitachi-standard-wall-single-cfg-15",
      slug: "hitachi-standard-wall-single-cfg-15",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-s24u3hlae",
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
      id: "hitachi-standard-wall-single-cfg-16",
      slug: "hitachi-standard-wall-single-cfg-16",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-s18u2hlae",
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
      id: "hitachi-standard-wall-single-cfg-17",
      slug: "hitachi-standard-wall-single-cfg-17",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-s24u3hlae",
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
      id: "hitachi-standard-wall-single-cfg-18",
      slug: "hitachi-standard-wall-single-cfg-18",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-s36u4hlae",
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
      id: "hitachi-standard-wall-single-cfg-19",
      slug: "hitachi-standard-wall-single-cfg-19",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-s42u5hlae",
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
      id: "hitachi-standard-wall-single-cfg-20",
      slug: "hitachi-standard-wall-single-cfg-20",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ras-4-0pnnbdh1",
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
      id: "hitachi-standard-wall-single-cfg-21",
      slug: "hitachi-standard-wall-single-cfg-21",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ras-4-0pnnbdh1",
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
      id: "hitachi-standard-wall-single-cfg-22",
      slug: "hitachi-standard-wall-single-cfg-22",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-sh09whlae",
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
      id: "hitachi-standard-wall-single-cfg-23",
      slug: "hitachi-standard-wall-single-cfg-23",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-sh12whlae",
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
      id: "hitachi-standard-wall-single-cfg-24",
      slug: "hitachi-standard-wall-single-cfg-24",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-ph09whlae",
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
      id: "hitachi-standard-wall-single-cfg-25",
      slug: "hitachi-standard-wall-single-cfg-25",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-ph12whlae",
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
      id: "hitachi-standard-wall-single-cfg-26",
      slug: "hitachi-standard-wall-single-cfg-26",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-ph24whlae",
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
      id: "hitachi-standard-wall-single-cfg-27",
      slug: "hitachi-standard-wall-single-cfg-27",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-ph18whlae",
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
      id: "hitachi-standard-wall-single-cfg-28",
      slug: "hitachi-standard-wall-single-cfg-28",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ras-4-0pnnbdh1",
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
      id: "hitachi-standard-wall-single-cfg-29",
      slug: "hitachi-standard-wall-single-cfg-29",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj09whaa",
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
      id: "hitachi-standard-wall-single-cfg-30",
      slug: "hitachi-standard-wall-single-cfg-30",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj12whaa",
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
      id: "hitachi-standard-wall-single-cfg-31",
      slug: "hitachi-standard-wall-single-cfg-31",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj18whaa",
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
      id: "hitachi-standard-wall-single-cfg-32",
      slug: "hitachi-standard-wall-single-cfg-32",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj24whaa",
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
      id: "hitachi-standard-wall-single-cfg-33",
      slug: "hitachi-standard-wall-single-cfg-33",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-gj09whaa",
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
      id: "hitachi-standard-wall-single-cfg-34",
      slug: "hitachi-standard-wall-single-cfg-34",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-gj12whaa",
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
      id: "hitachi-standard-wall-single-cfg-35",
      slug: "hitachi-standard-wall-single-cfg-35",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-gj18whaa",
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
      id: "hitachi-standard-wall-single-cfg-36",
      slug: "hitachi-standard-wall-single-cfg-36",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-gj24whaa",
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
      id: "hitachi-standard-wall-single-cfg-37",
      slug: "hitachi-standard-wall-single-cfg-37",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g42n5haa",
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
      id: "hitachi-standard-wall-single-cfg-38",
      slug: "hitachi-standard-wall-single-cfg-38",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g42n5haa",
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
      id: "hitachi-standard-wall-single-cfg-39",
      slug: "hitachi-standard-wall-single-cfg-39",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-xj09whaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9500,
      coolingCapacityMaxBtu: 9500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-cfg-40",
      slug: "hitachi-standard-wall-single-cfg-40",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-xj12whaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12500,
      coolingCapacityMaxBtu: 12500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-cfg-41",
      slug: "hitachi-standard-wall-single-cfg-41",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-xj18whaa",
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
      id: "hitachi-standard-wall-single-cfg-42",
      slug: "hitachi-standard-wall-single-cfg-42",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-xj24whaa",
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
      id: "hitachi-standard-wall-single-cfg-43",
      slug: "hitachi-standard-wall-single-cfg-43",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g18n2haa",
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
      id: "hitachi-standard-wall-single-cfg-44",
      slug: "hitachi-standard-wall-single-cfg-44",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g24n3haa",
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
      id: "hitachi-standard-wall-single-cfg-45",
      slug: "hitachi-standard-wall-single-cfg-45",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g36n4haa",
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
      id: "hitachi-standard-wall-single-cfg-46",
      slug: "hitachi-standard-wall-single-cfg-46",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g18n2haa",
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
      id: "hitachi-standard-wall-single-cfg-47",
      slug: "hitachi-standard-wall-single-cfg-47",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g24n3haa",
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
      id: "hitachi-standard-wall-single-cfg-48",
      slug: "hitachi-standard-wall-single-cfg-48",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g36n4haa",
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
      id: "hitachi-standard-wall-single-cfg-49",
      slug: "hitachi-standard-wall-single-cfg-49",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj36whaa",
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
      id: "hitachi-standard-wall-single-cfg-50",
      slug: "hitachi-standard-wall-single-cfg-50",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-gj15whaa",
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
      id: "hitachi-standard-wall-single-cfg-51",
      slug: "hitachi-standard-wall-single-cfg-51",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj09whaa",
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
      id: "hitachi-standard-wall-single-cfg-52",
      slug: "hitachi-standard-wall-single-cfg-52",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj12whaa",
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
      id: "hitachi-standard-wall-single-cfg-53",
      slug: "hitachi-standard-wall-single-cfg-53",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj18whaa",
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
      id: "hitachi-standard-wall-single-cfg-54",
      slug: "hitachi-standard-wall-single-cfg-54",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-dj24whaa",
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
      id: "hitachi-standard-wall-single-cfg-55",
      slug: "hitachi-standard-wall-single-cfg-55",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-rac-ej12whaa",
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
      id: "hitachi-standard-wall-single-cfg-56",
      slug: "hitachi-standard-wall-single-cfg-56",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp036c23s",
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
      id: "hitachi-standard-wall-single-cfg-57",
      slug: "hitachi-standard-wall-single-cfg-57",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp048c23s",
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
      id: "hitachi-standard-wall-single-cfg-58",
      slug: "hitachi-standard-wall-single-cfg-58",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp060c23s",
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
      id: "hitachi-standard-wall-single-cfg-59",
      slug: "hitachi-standard-wall-single-cfg-59",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp036c23s",
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
      id: "hitachi-standard-wall-single-cfg-60",
      slug: "hitachi-standard-wall-single-cfg-60",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp048c23s",
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
      id: "hitachi-standard-wall-single-cfg-61",
      slug: "hitachi-standard-wall-single-cfg-61",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp060c23s",
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
      id: "hitachi-standard-wall-single-cfg-62",
      slug: "hitachi-standard-wall-single-cfg-62",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp036c23s",
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
      id: "hitachi-standard-wall-single-cfg-63",
      slug: "hitachi-standard-wall-single-cfg-63",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp048c23s",
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
      id: "hitachi-standard-wall-single-cfg-64",
      slug: "hitachi-standard-wall-single-cfg-64",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-hvahp060c23s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57500,
      coolingCapacityMaxBtu: 57500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-standard-wall-single-cfg-65",
      slug: "hitachi-standard-wall-single-cfg-65",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g42n5haa",
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
      id: "hitachi-standard-wall-single-cfg-66",
      slug: "hitachi-standard-wall-single-cfg-66",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g18n2haa",
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
      id: "hitachi-standard-wall-single-cfg-67",
      slug: "hitachi-standard-wall-single-cfg-67",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g24n3haa",
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
      id: "hitachi-standard-wall-single-cfg-68",
      slug: "hitachi-standard-wall-single-cfg-68",
      modelId: "hitachi-standard-wall-single",
      outdoorUnitId: "hitachi-ram-g36n4haa",
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
      id: "hitachi-hi-uni-wall-single-cfg-1",
      slug: "hitachi-hi-uni-wall-single-cfg-1",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-1-0pnnbdh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-cfg-2",
      slug: "hitachi-hi-uni-wall-single-cfg-2",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-1-0pnnbdh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-cfg-3",
      slug: "hitachi-hi-uni-wall-single-cfg-3",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-1-5pnnbdh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-cfg-4",
      slug: "hitachi-hi-uni-wall-single-cfg-4",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-1-5pnnbdh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-cfg-5",
      slug: "hitachi-hi-uni-wall-single-cfg-5",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-2-0pnnbdh1",
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
      id: "hitachi-hi-uni-wall-single-cfg-6",
      slug: "hitachi-hi-uni-wall-single-cfg-6",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-2-0pnnbdh1",
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
      id: "hitachi-hi-uni-wall-single-cfg-7",
      slug: "hitachi-hi-uni-wall-single-cfg-7",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-3-0pnnbdh1",
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
      id: "hitachi-hi-uni-wall-single-cfg-8",
      slug: "hitachi-hi-uni-wall-single-cfg-8",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-3-0pnnbdh1",
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
      id: "hitachi-hi-uni-wall-single-cfg-9",
      slug: "hitachi-hi-uni-wall-single-cfg-9",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-1-0pnnbdh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-cfg-10",
      slug: "hitachi-hi-uni-wall-single-cfg-10",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-1-5pnnbdh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-cfg-11",
      slug: "hitachi-hi-uni-wall-single-cfg-11",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-2-0pnnbdh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-hi-uni-wall-single-cfg-12",
      slug: "hitachi-hi-uni-wall-single-cfg-12",
      modelId: "hitachi-hi-uni-wall-single",
      outdoorUnitId: "hitachi-ras-3-0pnnbdh1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.5,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-1",
      slug: "hitachi-aircore700-wall-single-cfg-1",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-2",
      slug: "hitachi-aircore700-wall-single-cfg-2",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-3",
      slug: "hitachi-aircore700-wall-single-cfg-3",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19.6,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-4",
      slug: "hitachi-aircore700-wall-single-cfg-4",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-36bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.6,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-5",
      slug: "hitachi-aircore700-wall-single-cfg-5",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-48bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-6",
      slug: "hitachi-aircore700-wall-single-cfg-6",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-7",
      slug: "hitachi-aircore700-wall-single-cfg-7",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-8",
      slug: "hitachi-aircore700-wall-single-cfg-8",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-9",
      slug: "hitachi-aircore700-wall-single-cfg-9",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-36bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-10",
      slug: "hitachi-aircore700-wall-single-cfg-10",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-48bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-11",
      slug: "hitachi-aircore700-wall-single-cfg-11",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-12",
      slug: "hitachi-aircore700-wall-single-cfg-12",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-13",
      slug: "hitachi-aircore700-wall-single-cfg-13",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-14",
      slug: "hitachi-aircore700-wall-single-cfg-14",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-36bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-15",
      slug: "hitachi-aircore700-wall-single-cfg-15",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-48bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18.5,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-16",
      slug: "hitachi-aircore700-wall-single-cfg-16",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-17",
      slug: "hitachi-aircore700-wall-single-cfg-17",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-18",
      slug: "hitachi-aircore700-wall-single-cfg-18",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-48bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-19",
      slug: "hitachi-aircore700-wall-single-cfg-19",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 16,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-20",
      slug: "hitachi-aircore700-wall-single-cfg-20",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-36bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.6,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-21",
      slug: "hitachi-aircore700-wall-single-cfg-21",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-09bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-22",
      slug: "hitachi-aircore700-wall-single-cfg-22",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-09bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-23",
      slug: "hitachi-aircore700-wall-single-cfg-23",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-09bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-24",
      slug: "hitachi-aircore700-wall-single-cfg-24",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-12bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-25",
      slug: "hitachi-aircore700-wall-single-cfg-25",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-12bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-26",
      slug: "hitachi-aircore700-wall-single-cfg-26",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-12bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 16.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-27",
      slug: "hitachi-aircore700-wall-single-cfg-27",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-18blfasdq1",
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
      id: "hitachi-aircore700-wall-single-cfg-28",
      slug: "hitachi-aircore700-wall-single-cfg-28",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-24blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-29",
      slug: "hitachi-aircore700-wall-single-cfg-29",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-18blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-30",
      slug: "hitachi-aircore700-wall-single-cfg-30",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-24blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-31",
      slug: "hitachi-aircore700-wall-single-cfg-31",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-30blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.3,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-32",
      slug: "hitachi-aircore700-wall-single-cfg-32",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-36blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-33",
      slug: "hitachi-aircore700-wall-single-cfg-33",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-36blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.5,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-34",
      slug: "hitachi-aircore700-wall-single-cfg-34",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-30blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-35",
      slug: "hitachi-aircore700-wall-single-cfg-35",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-12blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-36",
      slug: "hitachi-aircore700-wall-single-cfg-36",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-12blfasdq1",
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
      id: "hitachi-aircore700-wall-single-cfg-37",
      slug: "hitachi-aircore700-wall-single-cfg-37",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-09bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-38",
      slug: "hitachi-aircore700-wall-single-cfg-38",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-12bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-39",
      slug: "hitachi-aircore700-wall-single-cfg-39",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-18bufasdq1",
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
      id: "hitachi-aircore700-wall-single-cfg-40",
      slug: "hitachi-aircore700-wall-single-cfg-40",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-24bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-41",
      slug: "hitachi-aircore700-wall-single-cfg-41",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-30bufasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-42",
      slug: "hitachi-aircore700-wall-single-cfg-42",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-18blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-43",
      slug: "hitachi-aircore700-wall-single-cfg-43",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-24blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-44",
      slug: "hitachi-aircore700-wall-single-cfg-44",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-36blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "hitachi-aircore700-wall-single-cfg-45",
      slug: "hitachi-aircore700-wall-single-cfg-45",
      modelId: "hitachi-aircore700-wall-single",
      outdoorUnitId: "hitachi-pas-30blfasdq1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "hitachi-standard-wall-single-cfg-1",
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
      configurationId: "hitachi-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-3",
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
      configurationId: "hitachi-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-5",
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
      configurationId: "hitachi-standard-wall-single-cfg-6",
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
      configurationId: "hitachi-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-8",
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
      configurationId: "hitachi-standard-wall-single-cfg-9",
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
      configurationId: "hitachi-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-14",
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
      configurationId: "hitachi-standard-wall-single-cfg-15",
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
      configurationId: "hitachi-standard-wall-single-cfg-16",
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
      configurationId: "hitachi-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-19",
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
      configurationId: "hitachi-standard-wall-single-cfg-20",
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
      configurationId: "hitachi-standard-wall-single-cfg-21",
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
      configurationId: "hitachi-standard-wall-single-cfg-22",
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
      configurationId: "hitachi-standard-wall-single-cfg-23",
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
      configurationId: "hitachi-standard-wall-single-cfg-24",
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
      configurationId: "hitachi-standard-wall-single-cfg-25",
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
      configurationId: "hitachi-standard-wall-single-cfg-26",
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
      configurationId: "hitachi-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-28",
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
      configurationId: "hitachi-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-32",
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
      configurationId: "hitachi-standard-wall-single-cfg-33",
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
      configurationId: "hitachi-standard-wall-single-cfg-34",
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
      configurationId: "hitachi-standard-wall-single-cfg-35",
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
      configurationId: "hitachi-standard-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-37",
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
      configurationId: "hitachi-standard-wall-single-cfg-38",
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
      configurationId: "hitachi-standard-wall-single-cfg-39",
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
      configurationId: "hitachi-standard-wall-single-cfg-40",
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
      configurationId: "hitachi-standard-wall-single-cfg-41",
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
      configurationId: "hitachi-standard-wall-single-cfg-42",
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
      configurationId: "hitachi-standard-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-44",
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
      configurationId: "hitachi-standard-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-47",
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
      configurationId: "hitachi-standard-wall-single-cfg-48",
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
      configurationId: "hitachi-standard-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-54",
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
      configurationId: "hitachi-standard-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-57",
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
      configurationId: "hitachi-standard-wall-single-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-60",
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
      configurationId: "hitachi-standard-wall-single-cfg-61",
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
      configurationId: "hitachi-standard-wall-single-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-63",
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
      configurationId: "hitachi-standard-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-standard-wall-single-cfg-67",
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
      configurationId: "hitachi-standard-wall-single-cfg-68",
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
      configurationId: "hitachi-hi-uni-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-7",
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
      configurationId: "hitachi-hi-uni-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5500,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-hi-uni-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12500,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-39",
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
      configurationId: "hitachi-aircore700-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-43",
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
      configurationId: "hitachi-aircore700-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "hitachi-aircore700-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 2.1,
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
