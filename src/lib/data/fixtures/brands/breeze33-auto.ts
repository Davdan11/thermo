import type { BrandDataset } from "../../types";

export const breeze33Dataset: BrandDataset = {
  brand: {
    id: "breeze33",
    slug: "breeze33",
    name: "BREEZE33",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "breeze33-bz33-series",
      slug: "breeze33-bz33-series",
      name: "BZ33 series",
      brandId: "breeze33",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-standard",
      slug: "breeze33-standard",
      name: "Standard",
      brandId: "breeze33",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series",
      slug: "breeze33-hs-series",
      name: "HS series",
      brandId: "breeze33",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "breeze33-bz33-series-wall-single",
      slug: "breeze33-bz33-series-wall-single",
      name: "BZ33 series",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series",
      normalizedModelNumber: "bz33-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 28.1,
      hspf2Min: 8.7,
      hspf2Max: 14.8,
      cop5FMin: 1.7,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-standard-wall-single",
      slug: "breeze33-standard-wall-single",
      name: "Standard",
      seriesId: "breeze33-standard",
      brandId: "breeze33",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7300,
      heatingCapacity5FMaxBtu: 37000,
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
      id: "breeze33-bz33-series-central-ducted",
      slug: "breeze33-bz33-series-central-ducted",
      name: "BZ33 series",
      seriesId: "breeze33-bz33-series",
      brandId: "breeze33",
      modelNumber: "BZ33 series",
      normalizedModelNumber: "bz33-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19.3,
      hspf2Min: 8.1,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single",
      slug: "breeze33-hs-series-wall-single",
      name: "HS series",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS series",
      normalizedModelNumber: "hs-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 9500,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 18,
      seer2Max: 24.2,
      hspf2Min: 8.9,
      hspf2Max: 12.4,
      cop5FMin: 1.75,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-central-ducted",
      slug: "breeze33-hs-series-central-ducted",
      name: "HS-series",
      seriesId: "breeze33-hs-series",
      brandId: "breeze33",
      modelNumber: "HS-series",
      normalizedModelNumber: "hs-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 23000,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 16900,
      seer2Min: 17.6,
      seer2Max: 18.4,
      hspf2Min: 9.3,
      hspf2Max: 9.6,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "breeze33-bz33-hp09out1-g2-c",
      modelNumber: "BZ33-HP09OUT1-G2-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp06out2-g2-p",
      modelNumber: "BZ33-HYP06OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp09out2-g2-p",
      modelNumber: "BZ33-HYP09OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp12out2-g2-p",
      modelNumber: "BZ33-HYP12OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp18out2-g2-p",
      modelNumber: "BZ33-HYP18OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp24out2-g2-p",
      modelNumber: "BZ33-HYP24OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp182z2-g2-p",
      modelNumber: "BZ33-HP182Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp273z2-g2-p",
      modelNumber: "BZ33-HP273Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp364z2-g2-p",
      modelNumber: "BZ33-HP364Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp485z2-g2-p",
      modelNumber: "BZ33-HP485Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp182z2-g2-p",
      modelNumber: "BZ33-HYP182Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp273z2-g2-p",
      modelNumber: "BZ33-HYP273Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp364z2-g2-p",
      modelNumber: "BZ33-HYP364Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp485z2-g2-p",
      modelNumber: "BZ33-HYP485Z2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp36out2-g2-p",
      modelNumber: "BZ33-HYP36OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp48out2-g2-p",
      modelNumber: "BZ33-HYP48OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp33out2-g2-p",
      modelNumber: "BZ33-HYP33OUT2-G2-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp30out2-454-g3-c",
      modelNumber: "BZ33-HP30OUT2-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp09out1-454-g3-c",
      modelNumber: "BZ33-HP09OUT1-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp24out2-454-g3-c",
      modelNumber: "BZ33-HP24OUT2-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp06out2-454-g3-p",
      modelNumber: "BZ33-HYP06OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp09out2-454-g3-p",
      modelNumber: "BZ33-HYP09OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp12out2-454-g3-p",
      modelNumber: "BZ33-HYP12OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp18out2-454-g3-p",
      modelNumber: "BZ33-HYP18OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp24out2-454-g3-p",
      modelNumber: "BZ33-HYP24OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp33out2-454-g3-p",
      modelNumber: "BZ33-HYP33OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp36out2-454-g3-p",
      modelNumber: "BZ33-HYP36OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp48out2-454-g3-p",
      modelNumber: "BZ33-HYP48OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp55out2-454-g3-p",
      modelNumber: "BZ33-HYP55OUT2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp183z2-454-g3-p",
      modelNumber: "BZ33-HP183Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp274z2-454-g3-p",
      modelNumber: "BZ33-HP274Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp365z2-454-g3-p",
      modelNumber: "BZ33-HP365Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp486z2-454-g3-p",
      modelNumber: "BZ33-HP486Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp183z2-454-g3-p",
      modelNumber: "BZ33-HYP183Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp274z2-454-g3-p",
      modelNumber: "BZ33-HYP274Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp365z2-454-g3-p",
      modelNumber: "BZ33-HYP365Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp486z2-454-g3-p",
      modelNumber: "BZ33-HYP486Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hyp556z2-454-g3-p",
      modelNumber: "BZ33-HYP556Z2-454-G3-P",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp18out2-g2-c",
      modelNumber: "BZ33-HP18OUT2-G2-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp36out2-g2-c",
      modelNumber: "BZ33-HP36OUT2-G2-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv48out2-j",
      modelNumber: "BZ33-INV48OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv60out2-j",
      modelNumber: "BZ33-INV60OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp12out1-454-g3-c",
      modelNumber: "BZ33-HP12OUT1-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp18out2-454-g3-c",
      modelNumber: "BZ33-HP18OUT2-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-hp36out2-454-g3-c",
      modelNumber: "BZ33-HP36OUT2-454-G3-C",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv18out2-j",
      modelNumber: "BZ33-INV18OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv24out2-j",
      modelNumber: "BZ33-INV24OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv36out2-j",
      modelNumber: "BZ33-INV36OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv30out2-j",
      modelNumber: "BZ33-INV30OUT2-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv18out2-454-g3-j",
      modelNumber: "BZ33-INV18OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv24out2-454-g3-j",
      modelNumber: "BZ33-INV24OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv30out2-454-g3-j",
      modelNumber: "BZ33-INV30OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv36out2-454-g3-j",
      modelNumber: "BZ33-INV36OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv48out2-454-g3-j",
      modelNumber: "BZ33-INV48OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-bz33-inv60out2-454-g3-j",
      modelNumber: "BZ33-INV60OUT2-454-G3-J",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-hsz9h424zmo",
      modelNumber: "HSZ9H424ZMO",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-hsz12h424zmo",
      modelNumber: "HSZ12H424ZMO",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-hsz18h424zmo",
      modelNumber: "HSZ18H424ZMO",
      brandId: "breeze33",
      refrigerant: null as any,
    },
    {
      id: "breeze33-hsz24h424zmo",
      modelNumber: "HSZ24H424ZMO",
      brandId: "breeze33",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "breeze33-bz33-series-wall-single-cfg-1",
      slug: "breeze33-bz33-series-wall-single-cfg-1",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp09out1-g2-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-2",
      slug: "breeze33-bz33-series-wall-single-cfg-2",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp06out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-3",
      slug: "breeze33-bz33-series-wall-single-cfg-3",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-4",
      slug: "breeze33-bz33-series-wall-single-cfg-4",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-5",
      slug: "breeze33-bz33-series-wall-single-cfg-5",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-6",
      slug: "breeze33-bz33-series-wall-single-cfg-6",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp24out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-7",
      slug: "breeze33-bz33-series-wall-single-cfg-7",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-8",
      slug: "breeze33-bz33-series-wall-single-cfg-8",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-9",
      slug: "breeze33-bz33-series-wall-single-cfg-9",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp24out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-10",
      slug: "breeze33-bz33-series-wall-single-cfg-10",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-11",
      slug: "breeze33-bz33-series-wall-single-cfg-11",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-12",
      slug: "breeze33-bz33-series-wall-single-cfg-12",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-13",
      slug: "breeze33-bz33-series-wall-single-cfg-13",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-14",
      slug: "breeze33-bz33-series-wall-single-cfg-14",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-15",
      slug: "breeze33-bz33-series-wall-single-cfg-15",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp24out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-16",
      slug: "breeze33-bz33-series-wall-single-cfg-16",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-17",
      slug: "breeze33-bz33-series-wall-single-cfg-17",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp182z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.9,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-18",
      slug: "breeze33-bz33-series-wall-single-cfg-18",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp182z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-19",
      slug: "breeze33-bz33-series-wall-single-cfg-19",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp182z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.95,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-20",
      slug: "breeze33-bz33-series-wall-single-cfg-20",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp273z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 24.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-21",
      slug: "breeze33-bz33-series-wall-single-cfg-21",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp273z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-22",
      slug: "breeze33-bz33-series-wall-single-cfg-22",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp273z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.8,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-23",
      slug: "breeze33-bz33-series-wall-single-cfg-23",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp364z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.9,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-24",
      slug: "breeze33-bz33-series-wall-single-cfg-24",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp485z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-25",
      slug: "breeze33-bz33-series-wall-single-cfg-25",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp485z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-26",
      slug: "breeze33-bz33-series-wall-single-cfg-26",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp485z2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.95,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-27",
      slug: "breeze33-bz33-series-wall-single-cfg-27",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-28",
      slug: "breeze33-bz33-series-wall-single-cfg-28",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-29",
      slug: "breeze33-bz33-series-wall-single-cfg-29",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp182z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-30",
      slug: "breeze33-bz33-series-wall-single-cfg-30",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-31",
      slug: "breeze33-bz33-series-wall-single-cfg-31",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-32",
      slug: "breeze33-bz33-series-wall-single-cfg-32",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp273z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-33",
      slug: "breeze33-bz33-series-wall-single-cfg-33",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp364z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-34",
      slug: "breeze33-bz33-series-wall-single-cfg-34",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp364z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-35",
      slug: "breeze33-bz33-series-wall-single-cfg-35",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-36",
      slug: "breeze33-bz33-series-wall-single-cfg-36",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-37",
      slug: "breeze33-bz33-series-wall-single-cfg-37",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp485z2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-38",
      slug: "breeze33-bz33-series-wall-single-cfg-38",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-39",
      slug: "breeze33-bz33-series-wall-single-cfg-39",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-g2-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-40",
      slug: "breeze33-bz33-series-wall-single-cfg-40",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 19.8,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-41",
      slug: "breeze33-bz33-series-wall-single-cfg-41",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp36out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-42",
      slug: "breeze33-bz33-series-wall-single-cfg-42",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp48out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-43",
      slug: "breeze33-bz33-series-wall-single-cfg-43",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp33out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-44",
      slug: "breeze33-bz33-series-wall-single-cfg-44",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp36out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-45",
      slug: "breeze33-bz33-series-wall-single-cfg-45",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp48out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-46",
      slug: "breeze33-bz33-series-wall-single-cfg-46",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp36out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-47",
      slug: "breeze33-bz33-series-wall-single-cfg-47",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp48out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-48",
      slug: "breeze33-bz33-series-wall-single-cfg-48",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp36out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-49",
      slug: "breeze33-bz33-series-wall-single-cfg-49",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp48out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-50",
      slug: "breeze33-bz33-series-wall-single-cfg-50",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp30out2-454-g3-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-51",
      slug: "breeze33-bz33-series-wall-single-cfg-51",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp09out1-454-g3-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-52",
      slug: "breeze33-bz33-series-wall-single-cfg-52",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp24out2-454-g3-c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-53",
      slug: "breeze33-bz33-series-wall-single-cfg-53",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp06out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-54",
      slug: "breeze33-bz33-series-wall-single-cfg-54",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-55",
      slug: "breeze33-bz33-series-wall-single-cfg-55",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-56",
      slug: "breeze33-bz33-series-wall-single-cfg-56",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-57",
      slug: "breeze33-bz33-series-wall-single-cfg-57",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-58",
      slug: "breeze33-bz33-series-wall-single-cfg-58",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp33out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-59",
      slug: "breeze33-bz33-series-wall-single-cfg-59",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-60",
      slug: "breeze33-bz33-series-wall-single-cfg-60",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-61",
      slug: "breeze33-bz33-series-wall-single-cfg-61",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-62",
      slug: "breeze33-bz33-series-wall-single-cfg-62",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-63",
      slug: "breeze33-bz33-series-wall-single-cfg-63",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp36out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36600,
      coolingCapacityMaxBtu: 36600,
      seer2: 21.2,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-64",
      slug: "breeze33-bz33-series-wall-single-cfg-64",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp48out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.2,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-65",
      slug: "breeze33-bz33-series-wall-single-cfg-65",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp06out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-66",
      slug: "breeze33-bz33-series-wall-single-cfg-66",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-67",
      slug: "breeze33-bz33-series-wall-single-cfg-67",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-68",
      slug: "breeze33-bz33-series-wall-single-cfg-68",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-69",
      slug: "breeze33-bz33-series-wall-single-cfg-69",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-70",
      slug: "breeze33-bz33-series-wall-single-cfg-70",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-71",
      slug: "breeze33-bz33-series-wall-single-cfg-71",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-72",
      slug: "breeze33-bz33-series-wall-single-cfg-72",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp36out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-73",
      slug: "breeze33-bz33-series-wall-single-cfg-73",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp48out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-74",
      slug: "breeze33-bz33-series-wall-single-cfg-74",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp55out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-75",
      slug: "breeze33-bz33-series-wall-single-cfg-75",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp09out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-76",
      slug: "breeze33-bz33-series-wall-single-cfg-76",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp12out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-77",
      slug: "breeze33-bz33-series-wall-single-cfg-77",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-78",
      slug: "breeze33-bz33-series-wall-single-cfg-78",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-79",
      slug: "breeze33-bz33-series-wall-single-cfg-79",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-80",
      slug: "breeze33-bz33-series-wall-single-cfg-80",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp36out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: 20,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-81",
      slug: "breeze33-bz33-series-wall-single-cfg-81",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp48out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.5,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-82",
      slug: "breeze33-bz33-series-wall-single-cfg-82",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp55out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-83",
      slug: "breeze33-bz33-series-wall-single-cfg-83",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp183z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-84",
      slug: "breeze33-bz33-series-wall-single-cfg-84",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-85",
      slug: "breeze33-bz33-series-wall-single-cfg-85",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp183z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.55,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-86",
      slug: "breeze33-bz33-series-wall-single-cfg-86",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp274z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 25,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-87",
      slug: "breeze33-bz33-series-wall-single-cfg-87",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp274z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-88",
      slug: "breeze33-bz33-series-wall-single-cfg-88",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp274z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26800,
      coolingCapacityMaxBtu: 26800,
      seer2: 23,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-89",
      slug: "breeze33-bz33-series-wall-single-cfg-89",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp365z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 24,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-90",
      slug: "breeze33-bz33-series-wall-single-cfg-90",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp365z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-91",
      slug: "breeze33-bz33-series-wall-single-cfg-91",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp365z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 22,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-92",
      slug: "breeze33-bz33-series-wall-single-cfg-92",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp486z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 24,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-93",
      slug: "breeze33-bz33-series-wall-single-cfg-93",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp486z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-94",
      slug: "breeze33-bz33-series-wall-single-cfg-94",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hp486z2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 22.2,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-wall-single-cfg-95",
      slug: "breeze33-bz33-series-wall-single-cfg-95",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-96",
      slug: "breeze33-bz33-series-wall-single-cfg-96",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-97",
      slug: "breeze33-bz33-series-wall-single-cfg-97",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp183z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-98",
      slug: "breeze33-bz33-series-wall-single-cfg-98",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-99",
      slug: "breeze33-bz33-series-wall-single-cfg-99",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-100",
      slug: "breeze33-bz33-series-wall-single-cfg-100",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp274z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-101",
      slug: "breeze33-bz33-series-wall-single-cfg-101",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-102",
      slug: "breeze33-bz33-series-wall-single-cfg-102",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-103",
      slug: "breeze33-bz33-series-wall-single-cfg-103",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp365z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-104",
      slug: "breeze33-bz33-series-wall-single-cfg-104",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-105",
      slug: "breeze33-bz33-series-wall-single-cfg-105",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-106",
      slug: "breeze33-bz33-series-wall-single-cfg-106",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp486z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-107",
      slug: "breeze33-bz33-series-wall-single-cfg-107",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp556z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-108",
      slug: "breeze33-bz33-series-wall-single-cfg-108",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp556z2-454-g3-p",
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
      id: "breeze33-bz33-series-wall-single-cfg-109",
      slug: "breeze33-bz33-series-wall-single-cfg-109",
      modelId: "breeze33-bz33-series-wall-single",
      outdoorUnitId: "breeze33-bz33-hyp556z2-454-g3-p",
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
      id: "breeze33-standard-wall-single-cfg-1",
      slug: "breeze33-standard-wall-single-cfg-1",
      modelId: "breeze33-standard-wall-single",
      outdoorUnitId: "breeze33-bz33-hp18out2-g2-c",
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
      id: "breeze33-standard-wall-single-cfg-2",
      slug: "breeze33-standard-wall-single-cfg-2",
      modelId: "breeze33-standard-wall-single",
      outdoorUnitId: "breeze33-bz33-hp36out2-g2-c",
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
      id: "breeze33-standard-wall-single-cfg-3",
      slug: "breeze33-standard-wall-single-cfg-3",
      modelId: "breeze33-standard-wall-single",
      outdoorUnitId: "breeze33-bz33-inv48out2-j",
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
      id: "breeze33-standard-wall-single-cfg-4",
      slug: "breeze33-standard-wall-single-cfg-4",
      modelId: "breeze33-standard-wall-single",
      outdoorUnitId: "breeze33-bz33-inv60out2-j",
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
      id: "breeze33-standard-wall-single-cfg-5",
      slug: "breeze33-standard-wall-single-cfg-5",
      modelId: "breeze33-standard-wall-single",
      outdoorUnitId: "breeze33-bz33-hp12out1-454-g3-c",
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
      id: "breeze33-standard-wall-single-cfg-6",
      slug: "breeze33-standard-wall-single-cfg-6",
      modelId: "breeze33-standard-wall-single",
      outdoorUnitId: "breeze33-bz33-hp18out2-454-g3-c",
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
      id: "breeze33-standard-wall-single-cfg-7",
      slug: "breeze33-standard-wall-single-cfg-7",
      modelId: "breeze33-standard-wall-single",
      outdoorUnitId: "breeze33-bz33-hp36out2-454-g3-c",
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
      id: "breeze33-bz33-series-central-ducted-cfg-1",
      slug: "breeze33-bz33-series-central-ducted-cfg-1",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-hyp18out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.6,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-2",
      slug: "breeze33-bz33-series-central-ducted-cfg-2",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-hyp24out2-g2-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.4,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-3",
      slug: "breeze33-bz33-series-central-ducted-cfg-3",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv18out2-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-4",
      slug: "breeze33-bz33-series-central-ducted-cfg-4",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv24out2-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-5",
      slug: "breeze33-bz33-series-central-ducted-cfg-5",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv24out2-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-6",
      slug: "breeze33-bz33-series-central-ducted-cfg-6",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv36out2-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-7",
      slug: "breeze33-bz33-series-central-ducted-cfg-7",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv36out2-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-8",
      slug: "breeze33-bz33-series-central-ducted-cfg-8",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv18out2-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.3,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-9",
      slug: "breeze33-bz33-series-central-ducted-cfg-9",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv24out2-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-10",
      slug: "breeze33-bz33-series-central-ducted-cfg-10",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv30out2-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-11",
      slug: "breeze33-bz33-series-central-ducted-cfg-11",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv30out2-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-12",
      slug: "breeze33-bz33-series-central-ducted-cfg-12",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv30out2-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-13",
      slug: "breeze33-bz33-series-central-ducted-cfg-13",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv36out2-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-14",
      slug: "breeze33-bz33-series-central-ducted-cfg-14",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv18out2-454-g3-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-15",
      slug: "breeze33-bz33-series-central-ducted-cfg-15",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv24out2-454-g3-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-16",
      slug: "breeze33-bz33-series-central-ducted-cfg-16",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv30out2-454-g3-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.2,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-17",
      slug: "breeze33-bz33-series-central-ducted-cfg-17",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv36out2-454-g3-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-18",
      slug: "breeze33-bz33-series-central-ducted-cfg-18",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv48out2-454-g3-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-19",
      slug: "breeze33-bz33-series-central-ducted-cfg-19",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv60out2-454-g3-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 17.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-20",
      slug: "breeze33-bz33-series-central-ducted-cfg-20",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-hyp18out2-454-g3-p",
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
      id: "breeze33-bz33-series-central-ducted-cfg-21",
      slug: "breeze33-bz33-series-central-ducted-cfg-21",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-hyp24out2-454-g3-p",
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
      id: "breeze33-bz33-series-central-ducted-cfg-22",
      slug: "breeze33-bz33-series-central-ducted-cfg-22",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-hyp36out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-23",
      slug: "breeze33-bz33-series-central-ducted-cfg-23",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-hyp48out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-24",
      slug: "breeze33-bz33-series-central-ducted-cfg-24",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-hyp55out2-454-g3-p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-25",
      slug: "breeze33-bz33-series-central-ducted-cfg-25",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv18out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-26",
      slug: "breeze33-bz33-series-central-ducted-cfg-26",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv24out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-27",
      slug: "breeze33-bz33-series-central-ducted-cfg-27",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv30out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-28",
      slug: "breeze33-bz33-series-central-ducted-cfg-28",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv36out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-29",
      slug: "breeze33-bz33-series-central-ducted-cfg-29",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv48out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-30",
      slug: "breeze33-bz33-series-central-ducted-cfg-30",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv60out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-31",
      slug: "breeze33-bz33-series-central-ducted-cfg-31",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv18out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-32",
      slug: "breeze33-bz33-series-central-ducted-cfg-32",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv18out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-33",
      slug: "breeze33-bz33-series-central-ducted-cfg-33",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv24out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-34",
      slug: "breeze33-bz33-series-central-ducted-cfg-34",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv24out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-35",
      slug: "breeze33-bz33-series-central-ducted-cfg-35",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv30out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-36",
      slug: "breeze33-bz33-series-central-ducted-cfg-36",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv30out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-37",
      slug: "breeze33-bz33-series-central-ducted-cfg-37",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv36out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-38",
      slug: "breeze33-bz33-series-central-ducted-cfg-38",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv36out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-39",
      slug: "breeze33-bz33-series-central-ducted-cfg-39",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv48out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-40",
      slug: "breeze33-bz33-series-central-ducted-cfg-40",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv48out2-454-g3-j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-bz33-series-central-ducted-cfg-41",
      slug: "breeze33-bz33-series-central-ducted-cfg-41",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv60out2-454-g3-j",
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
      id: "breeze33-bz33-series-central-ducted-cfg-42",
      slug: "breeze33-bz33-series-central-ducted-cfg-42",
      modelId: "breeze33-bz33-series-central-ducted",
      outdoorUnitId: "breeze33-bz33-inv60out2-454-g3-j",
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
      id: "breeze33-hs-series-wall-single-cfg-1",
      slug: "breeze33-hs-series-wall-single-cfg-1",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz9h424zmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single-cfg-2",
      slug: "breeze33-hs-series-wall-single-cfg-2",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz9h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-3",
      slug: "breeze33-hs-series-wall-single-cfg-3",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz12h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-4",
      slug: "breeze33-hs-series-wall-single-cfg-4",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz12h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-5",
      slug: "breeze33-hs-series-wall-single-cfg-5",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz12h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-6",
      slug: "breeze33-hs-series-wall-single-cfg-6",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz12h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-7",
      slug: "breeze33-hs-series-wall-single-cfg-7",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-8",
      slug: "breeze33-hs-series-wall-single-cfg-8",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz18h424zmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 19.8,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single-cfg-9",
      slug: "breeze33-hs-series-wall-single-cfg-9",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-10",
      slug: "breeze33-hs-series-wall-single-cfg-10",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz18h424zmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-wall-single-cfg-11",
      slug: "breeze33-hs-series-wall-single-cfg-11",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz18h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-12",
      slug: "breeze33-hs-series-wall-single-cfg-12",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz24h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-13",
      slug: "breeze33-hs-series-wall-single-cfg-13",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz24h424zmo",
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
      id: "breeze33-hs-series-wall-single-cfg-14",
      slug: "breeze33-hs-series-wall-single-cfg-14",
      modelId: "breeze33-hs-series-wall-single",
      outdoorUnitId: "breeze33-hsz24h424zmo",
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
      id: "breeze33-hs-series-central-ducted-cfg-1",
      slug: "breeze33-hs-series-central-ducted-cfg-1",
      modelId: "breeze33-hs-series-central-ducted",
      outdoorUnitId: "breeze33-hsz24h424zmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.4,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "breeze33-hs-series-central-ducted-cfg-2",
      slug: "breeze33-hs-series-central-ducted-cfg-2",
      modelId: "breeze33-hs-series-central-ducted",
      outdoorUnitId: "breeze33-hsz18h424zmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.6,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-2",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-3",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-4",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-5",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-6",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-7",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-8",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-9",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-10",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-11",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-12",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-13",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-14",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-15",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-16",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-18",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-20",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-23",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-24",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-27",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-28",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-29",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-30",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-31",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-32",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-33",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-34",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-35",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-36",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-37",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-38",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-53",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-54",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-55",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-56",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-57",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-58",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-59",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-60",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-61",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-62",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-65",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-66",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-67",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-68",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-70",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-71",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-74",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-75",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-76",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-77",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-78",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-79",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-wall-single-cfg-95",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-96",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-97",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-98",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-99",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-100",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-101",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-102",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-103",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-104",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-105",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-106",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-107",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-108",
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
      configurationId: "breeze33-bz33-series-wall-single-cfg-109",
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
      configurationId: "breeze33-standard-wall-single-cfg-1",
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
      configurationId: "breeze33-standard-wall-single-cfg-2",
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
      configurationId: "breeze33-standard-wall-single-cfg-3",
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
      configurationId: "breeze33-standard-wall-single-cfg-4",
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
      configurationId: "breeze33-standard-wall-single-cfg-5",
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
      configurationId: "breeze33-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-standard-wall-single-cfg-7",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-3",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-4",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-5",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-7",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-9",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-11",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-20",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-21",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-23",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-24",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-25",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-26",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-27",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-28",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-29",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-30",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-31",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-32",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-33",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-34",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-35",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-36",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-37",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-38",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-39",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-bz33-series-central-ducted-cfg-41",
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
      configurationId: "breeze33-bz33-series-central-ducted-cfg-42",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-1",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-2",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-3",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-hs-series-wall-single-cfg-5",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-6",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-7",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-hs-series-wall-single-cfg-9",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.76,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-hs-series-wall-single-cfg-11",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-12",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-13",
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
      configurationId: "breeze33-hs-series-wall-single-cfg-14",
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
      configurationId: "breeze33-hs-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "breeze33-hs-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
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
