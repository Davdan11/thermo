import type { BrandDataset } from "../../types";

export const willisDataset: BrandDataset = {
  brand: {
    id: "willis",
    slug: "willis",
    name: "WILLIS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "willis-standard",
      slug: "willis-standard",
      name: "Standard",
      brandId: "willis",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-flexx-high-efficiency-series",
      slug: "willis-flexx-high-efficiency-series",
      name: "FLEXX High-efficiency Series",
      brandId: "willis",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-heatfinity",
      slug: "willis-heatfinity",
      name: "Heatfinity",
      brandId: "willis",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-charmo",
      slug: "willis-charmo",
      name: "Charmo",
      brandId: "willis",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multiheat",
      slug: "willis-multiheat",
      name: "MultiHeat",
      brandId: "willis",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-flexx-r32",
      slug: "willis-flexx-r32",
      name: "FLEXX R32",
      brandId: "willis",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat",
      slug: "willis-multi-heat",
      name: "MULTI HEAT",
      brandId: "willis",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-centurion",
      slug: "willis-centurion",
      name: "CENTURION",
      brandId: "willis",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-ultima",
      slug: "willis-ultima",
      name: "ULTIMA",
      brandId: "willis",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "willis-standard-wall-single",
      slug: "willis-standard-wall-single",
      name: "Standard",
      seriesId: "willis-standard",
      brandId: "willis",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6000,
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
      id: "willis-flexx-high-efficiency-series-central-ducted",
      slug: "willis-flexx-high-efficiency-series-central-ducted",
      name: "FLEXX High-efficiency Series",
      seriesId: "willis-flexx-high-efficiency-series",
      brandId: "willis",
      modelNumber: "FLEXX High-efficiency Series",
      normalizedModelNumber: "flexx-high-efficiency-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 16,
      seer2Max: 16,
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
      id: "willis-heatfinity-wall-single",
      slug: "willis-heatfinity-wall-single",
      name: "Heatfinity",
      seriesId: "willis-heatfinity",
      brandId: "willis",
      modelNumber: "Heatfinity",
      normalizedModelNumber: "heatfinity",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 8800,
      heatingCapacity5FMaxBtu: 21800,
      seer2Min: 23,
      seer2Max: 26,
      hspf2Min: 8.5,
      hspf2Max: 10.4,
      cop5FMin: 1.8,
      cop5FMax: 1.95,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-charmo-wall-single",
      slug: "willis-charmo-wall-single",
      name: "Charmo",
      seriesId: "willis-charmo",
      brandId: "willis",
      modelNumber: "Charmo",
      normalizedModelNumber: "charmo",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 19200,
      seer2Min: 17.5,
      seer2Max: 20,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.75,
      cop5FMax: 1.85,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multiheat-wall-single",
      slug: "willis-multiheat-wall-single",
      name: "MultiHeat",
      seriesId: "willis-multiheat",
      brandId: "willis",
      modelNumber: "MultiHeat",
      normalizedModelNumber: "multiheat",
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
      id: "willis-flexx-r32-central-ducted",
      slug: "willis-flexx-r32-central-ducted",
      name: "FLEXX R32",
      seriesId: "willis-flexx-r32",
      brandId: "willis",
      modelNumber: "FLEXX R32",
      normalizedModelNumber: "flexx-r32",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 20600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 10,
      hspf2Max: 10.5,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single",
      slug: "willis-multi-heat-wall-single",
      name: "MULTI HEAT",
      seriesId: "willis-multi-heat",
      brandId: "willis",
      modelNumber: "MULTI HEAT",
      normalizedModelNumber: "multi-heat",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 18,
      seer2Max: 21,
      hspf2Min: 8.1,
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
      id: "willis-centurion-wall-single",
      slug: "willis-centurion-wall-single",
      name: "CENTURION",
      seriesId: "willis-centurion",
      brandId: "willis",
      modelNumber: "CENTURION",
      normalizedModelNumber: "centurion",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-ultima-wall-single",
      slug: "willis-ultima-wall-single",
      name: "ULTIMA",
      seriesId: "willis-ultima",
      brandId: "willis",
      modelNumber: "ULTIMA",
      normalizedModelNumber: "ultima",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 8900,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 27,
      seer2Max: 30,
      hspf2Min: 10,
      hspf2Max: 11.2,
      cop5FMin: 1.8,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "willis-wuho09kw25s",
      modelNumber: "WUHO09KW25S",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-wuho12kw22s",
      modelNumber: "WUHO12KW22S",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-wuho24kw20s",
      modelNumber: "WUHO24KW20S",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-wsm09mh20s-o",
      modelNumber: "WSM09MH20S/O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-wsm24mh20s-o",
      modelNumber: "WSM24MH20S/O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-chw09kch20s2-o",
      modelNumber: "CHW09KCH20S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-chw18kch18s2-o",
      modelNumber: "CHW18KCH18S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw24kch25s2-o",
      modelNumber: "PUHW24KCH25S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw09kch26s2-o",
      modelNumber: "PUHW09KCH26S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-chw24kch18s2-o",
      modelNumber: "CHW24KCH18S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-chw09kr32-o",
      modelNumber: "CHW09KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw30kr32-o",
      modelNumber: "PUHW30KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-flex24-36kuh",
      modelNumber: "FLEX24/36KUH",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-flex48-60kuh",
      modelNumber: "FLEX48/60KUH",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw18kch23s2-o",
      modelNumber: "PUHW18KCH23S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw12kch24s2-o",
      modelNumber: "PUHW12KCH24S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw09kr32-o",
      modelNumber: "PUHW09KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw12kr32-o",
      modelNumber: "PUHW12KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw18kr32-o",
      modelNumber: "PUHW18KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw24kr32-o",
      modelNumber: "PUHW24KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-chw12kch18s2-o",
      modelNumber: "CHW12KCH18S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-chw12kr32-o",
      modelNumber: "CHW12KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-chw18kr32-o",
      modelNumber: "CHW18KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-chw24kr32-o",
      modelNumber: "CHW24KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw36kch21s2-o",
      modelNumber: "MZUHW36KCH21S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw42kch21s2-o",
      modelNumber: "MZUHW42KCH21S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw18kch21s2-o",
      modelNumber: "MZUHW18KCH21S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw24kch21s2-o",
      modelNumber: "MZUHW24KCH21S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw30kch21s2-o",
      modelNumber: "MZUHW30KCH21S2-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-flex24kuhr32",
      modelNumber: "FLEX24KUHR32",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-flex36kuhr32",
      modelNumber: "FLEX36KUHR32",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-flex48kuhr32",
      modelNumber: "FLEX48KUHR32",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-flex60kuhr32",
      modelNumber: "FLEX60KUHR32",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw18kr32-o",
      modelNumber: "MZUHW18KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw24kr32-o",
      modelNumber: "MZUHW24KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw30kr32-o",
      modelNumber: "MZUHW30KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw36kr32-o",
      modelNumber: "MZUHW36KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-mzuhw42kr32-o",
      modelNumber: "MZUHW42KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-puhw36kr32-o",
      modelNumber: "PUHW36KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-auhw09kr32-o",
      modelNumber: "AUHW09KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-auhw12kr32-o",
      modelNumber: "AUHW12KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-auhw18kr32-o",
      modelNumber: "AUHW18KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    },
    {
      id: "willis-auhw24kr32-o",
      modelNumber: "AUHW24KR32-O",
      brandId: "willis",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "willis-standard-wall-single-cfg-1",
      slug: "willis-standard-wall-single-cfg-1",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-wuho09kw25s",
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
      id: "willis-standard-wall-single-cfg-2",
      slug: "willis-standard-wall-single-cfg-2",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-wuho12kw22s",
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
      id: "willis-standard-wall-single-cfg-3",
      slug: "willis-standard-wall-single-cfg-3",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-wuho24kw20s",
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
      id: "willis-standard-wall-single-cfg-4",
      slug: "willis-standard-wall-single-cfg-4",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-wsm09mh20s-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9800,
      coolingCapacityMaxBtu: 9800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-standard-wall-single-cfg-5",
      slug: "willis-standard-wall-single-cfg-5",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-wsm24mh20s-o",
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
      id: "willis-standard-wall-single-cfg-6",
      slug: "willis-standard-wall-single-cfg-6",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-chw09kch20s2-o",
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
      id: "willis-standard-wall-single-cfg-7",
      slug: "willis-standard-wall-single-cfg-7",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-chw18kch18s2-o",
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
      id: "willis-standard-wall-single-cfg-8",
      slug: "willis-standard-wall-single-cfg-8",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-puhw24kch25s2-o",
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
      id: "willis-standard-wall-single-cfg-9",
      slug: "willis-standard-wall-single-cfg-9",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-puhw09kch26s2-o",
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
      id: "willis-standard-wall-single-cfg-10",
      slug: "willis-standard-wall-single-cfg-10",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-chw24kch18s2-o",
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
      id: "willis-standard-wall-single-cfg-11",
      slug: "willis-standard-wall-single-cfg-11",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-chw09kr32-o",
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
      id: "willis-standard-wall-single-cfg-12",
      slug: "willis-standard-wall-single-cfg-12",
      modelId: "willis-standard-wall-single",
      outdoorUnitId: "willis-puhw30kr32-o",
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
      id: "willis-flexx-high-efficiency-series-central-ducted-cfg-1",
      slug: "willis-flexx-high-efficiency-series-central-ducted-cfg-1",
      modelId: "willis-flexx-high-efficiency-series-central-ducted",
      outdoorUnitId: "willis-flex24-36kuh",
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
      id: "willis-flexx-high-efficiency-series-central-ducted-cfg-2",
      slug: "willis-flexx-high-efficiency-series-central-ducted-cfg-2",
      modelId: "willis-flexx-high-efficiency-series-central-ducted",
      outdoorUnitId: "willis-flex24-36kuh",
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
      id: "willis-flexx-high-efficiency-series-central-ducted-cfg-3",
      slug: "willis-flexx-high-efficiency-series-central-ducted-cfg-3",
      modelId: "willis-flexx-high-efficiency-series-central-ducted",
      outdoorUnitId: "willis-flex24-36kuh",
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
      id: "willis-flexx-high-efficiency-series-central-ducted-cfg-4",
      slug: "willis-flexx-high-efficiency-series-central-ducted-cfg-4",
      modelId: "willis-flexx-high-efficiency-series-central-ducted",
      outdoorUnitId: "willis-flex48-60kuh",
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
      id: "willis-flexx-high-efficiency-series-central-ducted-cfg-5",
      slug: "willis-flexx-high-efficiency-series-central-ducted-cfg-5",
      modelId: "willis-flexx-high-efficiency-series-central-ducted",
      outdoorUnitId: "willis-flex48-60kuh",
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
      id: "willis-flexx-high-efficiency-series-central-ducted-cfg-6",
      slug: "willis-flexx-high-efficiency-series-central-ducted-cfg-6",
      modelId: "willis-flexx-high-efficiency-series-central-ducted",
      outdoorUnitId: "willis-flex48-60kuh",
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
      id: "willis-heatfinity-wall-single-cfg-1",
      slug: "willis-heatfinity-wall-single-cfg-1",
      modelId: "willis-heatfinity-wall-single",
      outdoorUnitId: "willis-puhw18kch23s2-o",
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
      id: "willis-heatfinity-wall-single-cfg-2",
      slug: "willis-heatfinity-wall-single-cfg-2",
      modelId: "willis-heatfinity-wall-single",
      outdoorUnitId: "willis-puhw12kch24s2-o",
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
      id: "willis-heatfinity-wall-single-cfg-3",
      slug: "willis-heatfinity-wall-single-cfg-3",
      modelId: "willis-heatfinity-wall-single",
      outdoorUnitId: "willis-puhw09kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 26,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-heatfinity-wall-single-cfg-4",
      slug: "willis-heatfinity-wall-single-cfg-4",
      modelId: "willis-heatfinity-wall-single",
      outdoorUnitId: "willis-puhw12kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-heatfinity-wall-single-cfg-5",
      slug: "willis-heatfinity-wall-single-cfg-5",
      modelId: "willis-heatfinity-wall-single",
      outdoorUnitId: "willis-puhw18kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-heatfinity-wall-single-cfg-6",
      slug: "willis-heatfinity-wall-single-cfg-6",
      modelId: "willis-heatfinity-wall-single",
      outdoorUnitId: "willis-puhw24kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 26,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-charmo-wall-single-cfg-1",
      slug: "willis-charmo-wall-single-cfg-1",
      modelId: "willis-charmo-wall-single",
      outdoorUnitId: "willis-chw12kch18s2-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-charmo-wall-single-cfg-2",
      slug: "willis-charmo-wall-single-cfg-2",
      modelId: "willis-charmo-wall-single",
      outdoorUnitId: "willis-chw12kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-charmo-wall-single-cfg-3",
      slug: "willis-charmo-wall-single-cfg-3",
      modelId: "willis-charmo-wall-single",
      outdoorUnitId: "willis-chw18kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-charmo-wall-single-cfg-4",
      slug: "willis-charmo-wall-single-cfg-4",
      modelId: "willis-charmo-wall-single",
      outdoorUnitId: "willis-chw24kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multiheat-wall-single-cfg-1",
      slug: "willis-multiheat-wall-single-cfg-1",
      modelId: "willis-multiheat-wall-single",
      outdoorUnitId: "willis-mzuhw36kch21s2-o",
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
      id: "willis-multiheat-wall-single-cfg-2",
      slug: "willis-multiheat-wall-single-cfg-2",
      modelId: "willis-multiheat-wall-single",
      outdoorUnitId: "willis-mzuhw42kch21s2-o",
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
      id: "willis-multiheat-wall-single-cfg-3",
      slug: "willis-multiheat-wall-single-cfg-3",
      modelId: "willis-multiheat-wall-single",
      outdoorUnitId: "willis-mzuhw18kch21s2-o",
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
      id: "willis-multiheat-wall-single-cfg-4",
      slug: "willis-multiheat-wall-single-cfg-4",
      modelId: "willis-multiheat-wall-single",
      outdoorUnitId: "willis-mzuhw24kch21s2-o",
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
      id: "willis-multiheat-wall-single-cfg-5",
      slug: "willis-multiheat-wall-single-cfg-5",
      modelId: "willis-multiheat-wall-single",
      outdoorUnitId: "willis-mzuhw30kch21s2-o",
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
      id: "willis-flexx-r32-central-ducted-cfg-1",
      slug: "willis-flexx-r32-central-ducted-cfg-1",
      modelId: "willis-flexx-r32-central-ducted",
      outdoorUnitId: "willis-flex24kuhr32",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-flexx-r32-central-ducted-cfg-2",
      slug: "willis-flexx-r32-central-ducted-cfg-2",
      modelId: "willis-flexx-r32-central-ducted",
      outdoorUnitId: "willis-flex36kuhr32",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-flexx-r32-central-ducted-cfg-3",
      slug: "willis-flexx-r32-central-ducted-cfg-3",
      modelId: "willis-flexx-r32-central-ducted",
      outdoorUnitId: "willis-flex36kuhr32",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-flexx-r32-central-ducted-cfg-4",
      slug: "willis-flexx-r32-central-ducted-cfg-4",
      modelId: "willis-flexx-r32-central-ducted",
      outdoorUnitId: "willis-flex48kuhr32",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-flexx-r32-central-ducted-cfg-5",
      slug: "willis-flexx-r32-central-ducted-cfg-5",
      modelId: "willis-flexx-r32-central-ducted",
      outdoorUnitId: "willis-flex60kuhr32",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-flexx-r32-central-ducted-cfg-6",
      slug: "willis-flexx-r32-central-ducted-cfg-6",
      modelId: "willis-flexx-r32-central-ducted",
      outdoorUnitId: "willis-flex60kuhr32",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 18.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-1",
      slug: "willis-multi-heat-wall-single-cfg-1",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw18kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-2",
      slug: "willis-multi-heat-wall-single-cfg-2",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw24kr32-o",
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
      id: "willis-multi-heat-wall-single-cfg-3",
      slug: "willis-multi-heat-wall-single-cfg-3",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw30kr32-o",
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
      id: "willis-multi-heat-wall-single-cfg-4",
      slug: "willis-multi-heat-wall-single-cfg-4",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw36kr32-o",
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
      id: "willis-multi-heat-wall-single-cfg-5",
      slug: "willis-multi-heat-wall-single-cfg-5",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw42kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-6",
      slug: "willis-multi-heat-wall-single-cfg-6",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw18kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-7",
      slug: "willis-multi-heat-wall-single-cfg-7",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw18kr32-o",
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
      id: "willis-multi-heat-wall-single-cfg-8",
      slug: "willis-multi-heat-wall-single-cfg-8",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw24kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-9",
      slug: "willis-multi-heat-wall-single-cfg-9",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw30kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-10",
      slug: "willis-multi-heat-wall-single-cfg-10",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw36kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-11",
      slug: "willis-multi-heat-wall-single-cfg-11",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw42kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-12",
      slug: "willis-multi-heat-wall-single-cfg-12",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw24kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-13",
      slug: "willis-multi-heat-wall-single-cfg-13",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw30kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-14",
      slug: "willis-multi-heat-wall-single-cfg-14",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw36kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-multi-heat-wall-single-cfg-15",
      slug: "willis-multi-heat-wall-single-cfg-15",
      modelId: "willis-multi-heat-wall-single",
      outdoorUnitId: "willis-mzuhw42kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-centurion-wall-single-cfg-1",
      slug: "willis-centurion-wall-single-cfg-1",
      modelId: "willis-centurion-wall-single",
      outdoorUnitId: "willis-puhw36kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-ultima-wall-single-cfg-1",
      slug: "willis-ultima-wall-single-cfg-1",
      modelId: "willis-ultima-wall-single",
      outdoorUnitId: "willis-auhw09kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 30,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-ultima-wall-single-cfg-2",
      slug: "willis-ultima-wall-single-cfg-2",
      modelId: "willis-ultima-wall-single",
      outdoorUnitId: "willis-auhw12kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-ultima-wall-single-cfg-3",
      slug: "willis-ultima-wall-single-cfg-3",
      modelId: "willis-ultima-wall-single",
      outdoorUnitId: "willis-auhw18kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 27.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "willis-ultima-wall-single-cfg-4",
      slug: "willis-ultima-wall-single-cfg-4",
      modelId: "willis-ultima-wall-single",
      outdoorUnitId: "willis-auhw24kr32-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 27,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "willis-standard-wall-single-cfg-1",
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
      configurationId: "willis-standard-wall-single-cfg-2",
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
      configurationId: "willis-standard-wall-single-cfg-3",
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
      configurationId: "willis-standard-wall-single-cfg-4",
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
      configurationId: "willis-standard-wall-single-cfg-5",
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
      configurationId: "willis-standard-wall-single-cfg-6",
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
      configurationId: "willis-standard-wall-single-cfg-7",
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
      configurationId: "willis-standard-wall-single-cfg-8",
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
      configurationId: "willis-standard-wall-single-cfg-9",
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
      configurationId: "willis-standard-wall-single-cfg-10",
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
      configurationId: "willis-standard-wall-single-cfg-11",
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
      configurationId: "willis-standard-wall-single-cfg-12",
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
      configurationId: "willis-flexx-high-efficiency-series-central-ducted-cfg-1",
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
      configurationId: "willis-flexx-high-efficiency-series-central-ducted-cfg-2",
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
      configurationId: "willis-flexx-high-efficiency-series-central-ducted-cfg-3",
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
      configurationId: "willis-flexx-high-efficiency-series-central-ducted-cfg-4",
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
      configurationId: "willis-flexx-high-efficiency-series-central-ducted-cfg-5",
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
      configurationId: "willis-flexx-high-efficiency-series-central-ducted-cfg-6",
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
      configurationId: "willis-heatfinity-wall-single-cfg-1",
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
      configurationId: "willis-heatfinity-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-heatfinity-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-heatfinity-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-heatfinity-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-heatfinity-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-charmo-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-charmo-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-charmo-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-charmo-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multiheat-wall-single-cfg-1",
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
      configurationId: "willis-multiheat-wall-single-cfg-2",
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
      configurationId: "willis-multiheat-wall-single-cfg-3",
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
      configurationId: "willis-multiheat-wall-single-cfg-4",
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
      configurationId: "willis-multiheat-wall-single-cfg-5",
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
      configurationId: "willis-flexx-r32-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-flexx-r32-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-flexx-r32-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-flexx-r32-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-flexx-r32-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-flexx-r32-central-ducted-cfg-6",
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
      configurationId: "willis-multi-heat-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-2",
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
      configurationId: "willis-multi-heat-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.07,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-10",
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
      configurationId: "willis-multi-heat-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-multi-heat-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-centurion-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-ultima-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-ultima-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "willis-ultima-wall-single-cfg-3",
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
      configurationId: "willis-ultima-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
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
