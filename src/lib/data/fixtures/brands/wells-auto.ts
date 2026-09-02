import type { BrandDataset } from "../../types";

export const wellsDataset: BrandDataset = {
  brand: {
    id: "wells",
    slug: "wells",
    name: "WELLS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "wells-wsa-series",
      slug: "wells-wsa-series",
      name: "WSA Series",
      brandId: "wells",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wma-series",
      slug: "wells-wma-series",
      name: "WMA Series",
      brandId: "wells",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wmm-series",
      slug: "wells-wmm-series",
      name: "WMM Series",
      brandId: "wells",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-standard",
      slug: "wells-standard",
      name: "Standard",
      brandId: "wells",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-vmc-series",
      slug: "wells-vmc-series",
      name: "VMC Series",
      brandId: "wells",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wua-series",
      slug: "wells-wua-series",
      name: "WUA Series",
      brandId: "wells",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsb-series",
      slug: "wells-wsb-series",
      name: "WSB Series",
      brandId: "wells",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series",
      slug: "wells-wos-series",
      name: "WOS Series",
      brandId: "wells",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wdhp-series",
      slug: "wells-wdhp-series",
      name: "WDHP Series",
      brandId: "wells",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series",
      slug: "wells-wom-series",
      name: "WOM Series",
      brandId: "wells",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "wells-wsa-series-wall-single",
      slug: "wells-wsa-series-wall-single",
      name: "WSA Series",
      seriesId: "wells-wsa-series",
      brandId: "wells",
      modelNumber: "WSA Series",
      normalizedModelNumber: "wsa-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 34800,
      seer2Min: 20,
      seer2Max: 26.4,
      hspf2Min: 9,
      hspf2Max: 12,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wma-series-wall-single",
      slug: "wells-wma-series-wall-single",
      name: "WMA Series",
      seriesId: "wells-wma-series",
      brandId: "wells",
      modelNumber: "WMA Series",
      normalizedModelNumber: "wma-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 14600,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 18.8,
      seer2Max: 22.25,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wmm-series-wall-single",
      slug: "wells-wmm-series-wall-single",
      name: "WMM Series",
      seriesId: "wells-wmm-series",
      brandId: "wells",
      modelNumber: "WMM Series",
      normalizedModelNumber: "wmm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 26400,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 20,
      seer2Max: 21.1,
      hspf2Min: 9.2,
      hspf2Max: 9.5,
      cop5FMin: 1.68,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-standard-wall-single",
      slug: "wells-standard-wall-single",
      name: "Standard",
      seriesId: "wells-standard",
      brandId: "wells",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
      heatingCapacity5FMaxBtu: 39000,
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
      id: "wells-vmc-series-wall-single",
      slug: "wells-vmc-series-wall-single",
      name: "VMC Series",
      seriesId: "wells-vmc-series",
      brandId: "wells",
      modelNumber: "VMC Series",
      normalizedModelNumber: "vmc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 37400,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 21.05,
      seer2Max: 21.2,
      hspf2Min: 9.4,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wua-series-central-ducted",
      slug: "wells-wua-series-central-ducted",
      name: "WUA Series",
      seriesId: "wells-wua-series",
      brandId: "wells",
      modelNumber: "WUA Series",
      normalizedModelNumber: "wua-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 19200,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 17.4,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsb-series-wall-single",
      slug: "wells-wsb-series-wall-single",
      name: "WSB Series",
      seriesId: "wells-wsb-series",
      brandId: "wells",
      modelNumber: "WSB Series",
      normalizedModelNumber: "wsb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 11400,
      seer2Min: 19.5,
      seer2Max: 21.7,
      hspf2Min: 8.7,
      hspf2Max: 9.4,
      cop5FMin: 2,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-central-ducted",
      slug: "wells-wos-series-central-ducted",
      name: "WOS Series",
      seriesId: "wells-wos-series",
      brandId: "wells",
      modelNumber: "WOS Series",
      normalizedModelNumber: "wos-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 16.5,
      seer2Max: 19.7,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wdhp-series-central-ducted",
      slug: "wells-wdhp-series-central-ducted",
      name: "WDHP Series",
      seriesId: "wells-wdhp-series",
      brandId: "wells",
      modelNumber: "WDHP Series",
      normalizedModelNumber: "wdhp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 19700,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 18.3,
      hspf2Min: 8.1,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single",
      slug: "wells-wos-series-wall-single",
      name: "WOS Series",
      seriesId: "wells-wos-series",
      brandId: "wells",
      modelNumber: "WOS Series",
      normalizedModelNumber: "wos-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 29600,
      seer2Min: 17,
      seer2Max: 27.2,
      hspf2Min: 8.5,
      hspf2Max: 14.6,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single",
      slug: "wells-wom-series-wall-single",
      name: "WOM Series",
      seriesId: "wells-wom-series",
      brandId: "wells",
      modelNumber: "WOM Series",
      normalizedModelNumber: "wom-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 23.1,
      hspf2Min: 9,
      hspf2Max: 11.3,
      cop5FMin: 1.9,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "wells-wmma-18hfmo",
      modelNumber: "WMMA-18HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmma-27hfmo",
      modelNumber: "WMMA-27HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmca-18hfmo",
      modelNumber: "WMCA-18HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmca-27hfmo",
      modelNumber: "WMCA-27HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmca-55hfmo",
      modelNumber: "WMCA-55HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmca-36hfmo",
      modelNumber: "WMCA-36HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsa-06hfmo",
      modelNumber: "WSA-06HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsa-09hfmo",
      modelNumber: "WSA-09HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsa-12hfmo",
      modelNumber: "WSA-12HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsa-18hfmo",
      modelNumber: "WSA-18HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsa-24hfmo",
      modelNumber: "WSA-24HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsa-33hfmo",
      modelNumber: "WSA-33HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmca-48hfmo",
      modelNumber: "WMCA-48HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmma-36hfmo",
      modelNumber: "WMMA-36HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmma-48hfmo",
      modelNumber: "WMMA-48HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wmma-55hfmo",
      modelNumber: "WMMA-55HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsb-12hfbo",
      modelNumber: "WSB-12HFBO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsb-12hfmo",
      modelNumber: "WSB-12HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsb-24hfmo",
      modelNumber: "WSB-24HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsb-36hfmo",
      modelNumber: "WSB-36HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsma-36hfmo",
      modelNumber: "WSMA-36HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsma-48hfmo",
      modelNumber: "WSMA-48HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsma-60hfmo",
      modelNumber: "WSMA-60HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-09eco-115",
      modelNumber: "WOS-09ECO/115",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-12eco-115",
      modelNumber: "WOS-12ECO/115",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-12eco-230",
      modelNumber: "WOS-12ECO/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-18eco-230",
      modelNumber: "WOS-18ECO/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-60rh6-230",
      modelNumber: "WOM-60RH6/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wuca-24hfmo",
      modelNumber: "WUCA-24HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wuca-30hfmo",
      modelNumber: "WUCA-30HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wuca-36hfmo",
      modelNumber: "WUCA-36HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wuca-48hfmo",
      modelNumber: "WUCA-48HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wuca-60hfmo",
      modelNumber: "WUCA-60HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wucb-36hfmo",
      modelNumber: "WUCB-36HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsb-09hfbo",
      modelNumber: "WSB-09HFBO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsb-09hfmo",
      modelNumber: "WSB-09HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wsb-18hfmo",
      modelNumber: "WSB-18HFMO",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-18qua-230",
      modelNumber: "WOS-18QUA/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-24qua-230",
      modelNumber: "WOS-24QUA/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-18pre-230",
      modelNumber: "WOS-18PRE/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-24pre-230",
      modelNumber: "WOS-24PRE/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-33pre-230",
      modelNumber: "WOS-33PRE/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wdhp-36rh",
      modelNumber: "WDHP-36RH",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wdhp-60rh",
      modelNumber: "WDHP-60RH",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wdhp-24hh",
      modelNumber: "WDHP-24HH",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wdhp-30hh",
      modelNumber: "WDHP-30HH",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wdhp-36hh",
      modelNumber: "WDHP-36HH",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wdhp-48hh",
      modelNumber: "WDHP-48HH",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wdhp-60hh",
      modelNumber: "WDHP-60HH",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-09eco-230",
      modelNumber: "WOS-09ECO/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-24eco-230",
      modelNumber: "WOS-24ECO/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-09qua-115",
      modelNumber: "WOS-09QUA/115",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-12qua-115",
      modelNumber: "WOS-12QUA/115",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-09qua-230",
      modelNumber: "WOS-09QUA/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-12qua-230",
      modelNumber: "WOS-12QUA/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-06pre-230",
      modelNumber: "WOS-06PRE/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-09pre-230",
      modelNumber: "WOS-09PRE/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wos-12pre-230",
      modelNumber: "WOS-12PRE/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-18rh3-230",
      modelNumber: "WOM-18RH3/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-27rh4-230",
      modelNumber: "WOM-27RH4/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-36rh5-230",
      modelNumber: "WOM-36RH5/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-48rh6-230",
      modelNumber: "WOM-48RH6/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-18hh3-230",
      modelNumber: "WOM-18HH3/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-27hh4-230",
      modelNumber: "WOM-27HH4/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-36hh5-230",
      modelNumber: "WOM-36HH5/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-48hh6-230",
      modelNumber: "WOM-48HH6/230",
      brandId: "wells",
      refrigerant: null as any,
    },
    {
      id: "wells-wom-60hh6-230",
      modelNumber: "WOM-60HH6/230",
      brandId: "wells",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "wells-wsa-series-wall-single-cfg-1",
      slug: "wells-wsa-series-wall-single-cfg-1",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wmma-18hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-2",
      slug: "wells-wsa-series-wall-single-cfg-2",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wmma-27hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-3",
      slug: "wells-wsa-series-wall-single-cfg-3",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wmca-18hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-4",
      slug: "wells-wsa-series-wall-single-cfg-4",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wmca-27hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-5",
      slug: "wells-wsa-series-wall-single-cfg-5",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wmca-55hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-6",
      slug: "wells-wsa-series-wall-single-cfg-6",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wmca-36hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-7",
      slug: "wells-wsa-series-wall-single-cfg-7",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wmca-36hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.2,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-8",
      slug: "wells-wsa-series-wall-single-cfg-8",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wsa-06hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-9",
      slug: "wells-wsa-series-wall-single-cfg-9",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wsa-09hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-10",
      slug: "wells-wsa-series-wall-single-cfg-10",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wsa-12hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-11",
      slug: "wells-wsa-series-wall-single-cfg-11",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wsa-18hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-12",
      slug: "wells-wsa-series-wall-single-cfg-12",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wsa-24hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsa-series-wall-single-cfg-13",
      slug: "wells-wsa-series-wall-single-cfg-13",
      modelId: "wells-wsa-series-wall-single",
      outdoorUnitId: "wells-wsa-33hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wma-series-wall-single-cfg-1",
      slug: "wells-wma-series-wall-single-cfg-1",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmma-18hfmo",
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
      id: "wells-wma-series-wall-single-cfg-2",
      slug: "wells-wma-series-wall-single-cfg-2",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmma-18hfmo",
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
      id: "wells-wma-series-wall-single-cfg-3",
      slug: "wells-wma-series-wall-single-cfg-3",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmma-27hfmo",
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
      id: "wells-wma-series-wall-single-cfg-4",
      slug: "wells-wma-series-wall-single-cfg-4",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmma-27hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wma-series-wall-single-cfg-5",
      slug: "wells-wma-series-wall-single-cfg-5",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmca-18hfmo",
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
      id: "wells-wma-series-wall-single-cfg-6",
      slug: "wells-wma-series-wall-single-cfg-6",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmca-18hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19.75,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wma-series-wall-single-cfg-7",
      slug: "wells-wma-series-wall-single-cfg-7",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmca-27hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wma-series-wall-single-cfg-8",
      slug: "wells-wma-series-wall-single-cfg-8",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmca-27hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19.75,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wma-series-wall-single-cfg-9",
      slug: "wells-wma-series-wall-single-cfg-9",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmca-48hfmo",
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
      id: "wells-wma-series-wall-single-cfg-10",
      slug: "wells-wma-series-wall-single-cfg-10",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmca-55hfmo",
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
      id: "wells-wma-series-wall-single-cfg-11",
      slug: "wells-wma-series-wall-single-cfg-11",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmca-55hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wma-series-wall-single-cfg-12",
      slug: "wells-wma-series-wall-single-cfg-12",
      modelId: "wells-wma-series-wall-single",
      outdoorUnitId: "wells-wmca-36hfmo",
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
      id: "wells-wmm-series-wall-single-cfg-1",
      slug: "wells-wmm-series-wall-single-cfg-1",
      modelId: "wells-wmm-series-wall-single",
      outdoorUnitId: "wells-wmma-36hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wmm-series-wall-single-cfg-2",
      slug: "wells-wmm-series-wall-single-cfg-2",
      modelId: "wells-wmm-series-wall-single",
      outdoorUnitId: "wells-wmma-48hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wmm-series-wall-single-cfg-3",
      slug: "wells-wmm-series-wall-single-cfg-3",
      modelId: "wells-wmm-series-wall-single",
      outdoorUnitId: "wells-wmma-48hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-standard-wall-single-cfg-1",
      slug: "wells-standard-wall-single-cfg-1",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wmma-55hfmo",
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
      id: "wells-standard-wall-single-cfg-2",
      slug: "wells-standard-wall-single-cfg-2",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wmma-55hfmo",
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
      id: "wells-standard-wall-single-cfg-3",
      slug: "wells-standard-wall-single-cfg-3",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wsb-12hfbo",
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
      id: "wells-standard-wall-single-cfg-4",
      slug: "wells-standard-wall-single-cfg-4",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wsb-12hfmo",
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
      id: "wells-standard-wall-single-cfg-5",
      slug: "wells-standard-wall-single-cfg-5",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wsb-24hfmo",
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
      id: "wells-standard-wall-single-cfg-6",
      slug: "wells-standard-wall-single-cfg-6",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wsb-36hfmo",
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
      id: "wells-standard-wall-single-cfg-7",
      slug: "wells-standard-wall-single-cfg-7",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wsma-36hfmo",
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
      id: "wells-standard-wall-single-cfg-8",
      slug: "wells-standard-wall-single-cfg-8",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wsma-48hfmo",
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
      id: "wells-standard-wall-single-cfg-9",
      slug: "wells-standard-wall-single-cfg-9",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wsma-60hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 59000,
      coolingCapacityMaxBtu: 59000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-standard-wall-single-cfg-10",
      slug: "wells-standard-wall-single-cfg-10",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wos-09eco-115",
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
      id: "wells-standard-wall-single-cfg-11",
      slug: "wells-standard-wall-single-cfg-11",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wos-12eco-115",
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
      id: "wells-standard-wall-single-cfg-12",
      slug: "wells-standard-wall-single-cfg-12",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wos-12eco-230",
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
      id: "wells-standard-wall-single-cfg-13",
      slug: "wells-standard-wall-single-cfg-13",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wos-18eco-230",
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
      id: "wells-standard-wall-single-cfg-14",
      slug: "wells-standard-wall-single-cfg-14",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wom-60rh6-230",
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
      id: "wells-standard-wall-single-cfg-15",
      slug: "wells-standard-wall-single-cfg-15",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wom-60rh6-230",
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
      id: "wells-standard-wall-single-cfg-16",
      slug: "wells-standard-wall-single-cfg-16",
      modelId: "wells-standard-wall-single",
      outdoorUnitId: "wells-wom-60rh6-230",
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
      id: "wells-vmc-series-wall-single-cfg-1",
      slug: "wells-vmc-series-wall-single-cfg-1",
      modelId: "wells-vmc-series-wall-single",
      outdoorUnitId: "wells-wmca-48hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-vmc-series-wall-single-cfg-2",
      slug: "wells-vmc-series-wall-single-cfg-2",
      modelId: "wells-vmc-series-wall-single",
      outdoorUnitId: "wells-wmca-48hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.05,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wua-series-central-ducted-cfg-1",
      slug: "wells-wua-series-central-ducted-cfg-1",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-24hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-2",
      slug: "wells-wua-series-central-ducted-cfg-2",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-30hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-3",
      slug: "wells-wua-series-central-ducted-cfg-3",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-36hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-4",
      slug: "wells-wua-series-central-ducted-cfg-4",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-48hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-5",
      slug: "wells-wua-series-central-ducted-cfg-5",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-60hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-6",
      slug: "wells-wua-series-central-ducted-cfg-6",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-36hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-7",
      slug: "wells-wua-series-central-ducted-cfg-7",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-48hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-8",
      slug: "wells-wua-series-central-ducted-cfg-8",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-60hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-9",
      slug: "wells-wua-series-central-ducted-cfg-9",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-30hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-10",
      slug: "wells-wua-series-central-ducted-cfg-10",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wuca-24hfmo",
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
      id: "wells-wua-series-central-ducted-cfg-11",
      slug: "wells-wua-series-central-ducted-cfg-11",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wucb-36hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 16.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wua-series-central-ducted-cfg-12",
      slug: "wells-wua-series-central-ducted-cfg-12",
      modelId: "wells-wua-series-central-ducted",
      outdoorUnitId: "wells-wucb-36hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsb-series-wall-single-cfg-1",
      slug: "wells-wsb-series-wall-single-cfg-1",
      modelId: "wells-wsb-series-wall-single",
      outdoorUnitId: "wells-wsb-09hfbo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsb-series-wall-single-cfg-2",
      slug: "wells-wsb-series-wall-single-cfg-2",
      modelId: "wells-wsb-series-wall-single",
      outdoorUnitId: "wells-wsb-09hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wsb-series-wall-single-cfg-3",
      slug: "wells-wsb-series-wall-single-cfg-3",
      modelId: "wells-wsb-series-wall-single",
      outdoorUnitId: "wells-wsb-18hfmo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-central-ducted-cfg-1",
      slug: "wells-wos-series-central-ducted-cfg-1",
      modelId: "wells-wos-series-central-ducted",
      outdoorUnitId: "wells-wos-18qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-central-ducted-cfg-2",
      slug: "wells-wos-series-central-ducted-cfg-2",
      modelId: "wells-wos-series-central-ducted",
      outdoorUnitId: "wells-wos-24qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-central-ducted-cfg-3",
      slug: "wells-wos-series-central-ducted-cfg-3",
      modelId: "wells-wos-series-central-ducted",
      outdoorUnitId: "wells-wos-18pre-230",
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
      id: "wells-wos-series-central-ducted-cfg-4",
      slug: "wells-wos-series-central-ducted-cfg-4",
      modelId: "wells-wos-series-central-ducted",
      outdoorUnitId: "wells-wos-24pre-230",
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
      id: "wells-wos-series-central-ducted-cfg-5",
      slug: "wells-wos-series-central-ducted-cfg-5",
      modelId: "wells-wos-series-central-ducted",
      outdoorUnitId: "wells-wos-33pre-230",
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
      id: "wells-wdhp-series-central-ducted-cfg-1",
      slug: "wells-wdhp-series-central-ducted-cfg-1",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-36rh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wdhp-series-central-ducted-cfg-2",
      slug: "wells-wdhp-series-central-ducted-cfg-2",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-60rh",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wdhp-series-central-ducted-cfg-3",
      slug: "wells-wdhp-series-central-ducted-cfg-3",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-24hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-4",
      slug: "wells-wdhp-series-central-ducted-cfg-4",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-30hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-5",
      slug: "wells-wdhp-series-central-ducted-cfg-5",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-36hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-6",
      slug: "wells-wdhp-series-central-ducted-cfg-6",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-48hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-7",
      slug: "wells-wdhp-series-central-ducted-cfg-7",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-60hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-8",
      slug: "wells-wdhp-series-central-ducted-cfg-8",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-24hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-9",
      slug: "wells-wdhp-series-central-ducted-cfg-9",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-24hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-10",
      slug: "wells-wdhp-series-central-ducted-cfg-10",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-30hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-11",
      slug: "wells-wdhp-series-central-ducted-cfg-11",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-30hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-12",
      slug: "wells-wdhp-series-central-ducted-cfg-12",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-36hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-13",
      slug: "wells-wdhp-series-central-ducted-cfg-13",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-30hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-14",
      slug: "wells-wdhp-series-central-ducted-cfg-14",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-36hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-15",
      slug: "wells-wdhp-series-central-ducted-cfg-15",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-48hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-16",
      slug: "wells-wdhp-series-central-ducted-cfg-16",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-60hh",
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
      id: "wells-wdhp-series-central-ducted-cfg-17",
      slug: "wells-wdhp-series-central-ducted-cfg-17",
      modelId: "wells-wdhp-series-central-ducted",
      outdoorUnitId: "wells-wdhp-60hh",
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
      id: "wells-wos-series-wall-single-cfg-1",
      slug: "wells-wos-series-wall-single-cfg-1",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09eco-230",
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
      id: "wells-wos-series-wall-single-cfg-2",
      slug: "wells-wos-series-wall-single-cfg-2",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24eco-230",
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
      id: "wells-wos-series-wall-single-cfg-3",
      slug: "wells-wos-series-wall-single-cfg-3",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09qua-115",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-4",
      slug: "wells-wos-series-wall-single-cfg-4",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12qua-115",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.2,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-5",
      slug: "wells-wos-series-wall-single-cfg-5",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-6",
      slug: "wells-wos-series-wall-single-cfg-6",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-7",
      slug: "wells-wos-series-wall-single-cfg-7",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-8",
      slug: "wells-wos-series-wall-single-cfg-8",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-9",
      slug: "wells-wos-series-wall-single-cfg-9",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-06pre-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-10",
      slug: "wells-wos-series-wall-single-cfg-10",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09pre-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-11",
      slug: "wells-wos-series-wall-single-cfg-11",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12pre-230",
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
      id: "wells-wos-series-wall-single-cfg-12",
      slug: "wells-wos-series-wall-single-cfg-12",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18pre-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-13",
      slug: "wells-wos-series-wall-single-cfg-13",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24pre-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-14",
      slug: "wells-wos-series-wall-single-cfg-14",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-33pre-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-15",
      slug: "wells-wos-series-wall-single-cfg-15",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-16",
      slug: "wells-wos-series-wall-single-cfg-16",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-17",
      slug: "wells-wos-series-wall-single-cfg-17",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-18",
      slug: "wells-wos-series-wall-single-cfg-18",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-19",
      slug: "wells-wos-series-wall-single-cfg-19",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.1,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-20",
      slug: "wells-wos-series-wall-single-cfg-20",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-21",
      slug: "wells-wos-series-wall-single-cfg-21",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-22",
      slug: "wells-wos-series-wall-single-cfg-22",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-23",
      slug: "wells-wos-series-wall-single-cfg-23",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-24",
      slug: "wells-wos-series-wall-single-cfg-24",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-25",
      slug: "wells-wos-series-wall-single-cfg-25",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-26",
      slug: "wells-wos-series-wall-single-cfg-26",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-27",
      slug: "wells-wos-series-wall-single-cfg-27",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-28",
      slug: "wells-wos-series-wall-single-cfg-28",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-29",
      slug: "wells-wos-series-wall-single-cfg-29",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 13.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-30",
      slug: "wells-wos-series-wall-single-cfg-30",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-31",
      slug: "wells-wos-series-wall-single-cfg-31",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.8,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-32",
      slug: "wells-wos-series-wall-single-cfg-32",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-33",
      slug: "wells-wos-series-wall-single-cfg-33",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24qua-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-34",
      slug: "wells-wos-series-wall-single-cfg-34",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09pre-230",
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
      id: "wells-wos-series-wall-single-cfg-35",
      slug: "wells-wos-series-wall-single-cfg-35",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12pre-230",
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
      id: "wells-wos-series-wall-single-cfg-36",
      slug: "wells-wos-series-wall-single-cfg-36",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18pre-230",
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
      id: "wells-wos-series-wall-single-cfg-37",
      slug: "wells-wos-series-wall-single-cfg-37",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24pre-230",
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
      id: "wells-wos-series-wall-single-cfg-38",
      slug: "wells-wos-series-wall-single-cfg-38",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-06pre-230",
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
      id: "wells-wos-series-wall-single-cfg-39",
      slug: "wells-wos-series-wall-single-cfg-39",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09pre-230",
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
      id: "wells-wos-series-wall-single-cfg-40",
      slug: "wells-wos-series-wall-single-cfg-40",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12pre-230",
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
      id: "wells-wos-series-wall-single-cfg-41",
      slug: "wells-wos-series-wall-single-cfg-41",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18pre-230",
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
      id: "wells-wos-series-wall-single-cfg-42",
      slug: "wells-wos-series-wall-single-cfg-42",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-06pre-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 21.4,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wos-series-wall-single-cfg-43",
      slug: "wells-wos-series-wall-single-cfg-43",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09pre-230",
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
      id: "wells-wos-series-wall-single-cfg-44",
      slug: "wells-wos-series-wall-single-cfg-44",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12pre-230",
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
      id: "wells-wos-series-wall-single-cfg-45",
      slug: "wells-wos-series-wall-single-cfg-45",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18pre-230",
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
      id: "wells-wos-series-wall-single-cfg-46",
      slug: "wells-wos-series-wall-single-cfg-46",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09pre-230",
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
      id: "wells-wos-series-wall-single-cfg-47",
      slug: "wells-wos-series-wall-single-cfg-47",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12pre-230",
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
      id: "wells-wos-series-wall-single-cfg-48",
      slug: "wells-wos-series-wall-single-cfg-48",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18pre-230",
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
      id: "wells-wos-series-wall-single-cfg-49",
      slug: "wells-wos-series-wall-single-cfg-49",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24pre-230",
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
      id: "wells-wos-series-wall-single-cfg-50",
      slug: "wells-wos-series-wall-single-cfg-50",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-09pre-230",
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
      id: "wells-wos-series-wall-single-cfg-51",
      slug: "wells-wos-series-wall-single-cfg-51",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-12pre-230",
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
      id: "wells-wos-series-wall-single-cfg-52",
      slug: "wells-wos-series-wall-single-cfg-52",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18pre-230",
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
      id: "wells-wos-series-wall-single-cfg-53",
      slug: "wells-wos-series-wall-single-cfg-53",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-18pre-230",
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
      id: "wells-wos-series-wall-single-cfg-54",
      slug: "wells-wos-series-wall-single-cfg-54",
      modelId: "wells-wos-series-wall-single",
      outdoorUnitId: "wells-wos-24pre-230",
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
      id: "wells-wom-series-wall-single-cfg-1",
      slug: "wells-wom-series-wall-single-cfg-1",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-18rh3-230",
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
      id: "wells-wom-series-wall-single-cfg-2",
      slug: "wells-wom-series-wall-single-cfg-2",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-18rh3-230",
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
      id: "wells-wom-series-wall-single-cfg-3",
      slug: "wells-wom-series-wall-single-cfg-3",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-18rh3-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-4",
      slug: "wells-wom-series-wall-single-cfg-4",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-27rh4-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-5",
      slug: "wells-wom-series-wall-single-cfg-5",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-27rh4-230",
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
      id: "wells-wom-series-wall-single-cfg-6",
      slug: "wells-wom-series-wall-single-cfg-6",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-27rh4-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26200,
      coolingCapacityMaxBtu: 26200,
      seer2: 22,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-7",
      slug: "wells-wom-series-wall-single-cfg-7",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-36rh5-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 23.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-8",
      slug: "wells-wom-series-wall-single-cfg-8",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-36rh5-230",
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
      id: "wells-wom-series-wall-single-cfg-9",
      slug: "wells-wom-series-wall-single-cfg-9",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-36rh5-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 21.55,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-10",
      slug: "wells-wom-series-wall-single-cfg-10",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-48rh6-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-11",
      slug: "wells-wom-series-wall-single-cfg-11",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-48rh6-230",
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
      id: "wells-wom-series-wall-single-cfg-12",
      slug: "wells-wom-series-wall-single-cfg-12",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-48rh6-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.85,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-13",
      slug: "wells-wom-series-wall-single-cfg-13",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-18hh3-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-14",
      slug: "wells-wom-series-wall-single-cfg-14",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-18hh3-230",
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
      id: "wells-wom-series-wall-single-cfg-15",
      slug: "wells-wom-series-wall-single-cfg-15",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-18hh3-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-16",
      slug: "wells-wom-series-wall-single-cfg-16",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-27hh4-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-17",
      slug: "wells-wom-series-wall-single-cfg-17",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-27hh4-230",
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
      id: "wells-wom-series-wall-single-cfg-18",
      slug: "wells-wom-series-wall-single-cfg-18",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-27hh4-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-19",
      slug: "wells-wom-series-wall-single-cfg-19",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-36hh5-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-20",
      slug: "wells-wom-series-wall-single-cfg-20",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-36hh5-230",
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
      id: "wells-wom-series-wall-single-cfg-21",
      slug: "wells-wom-series-wall-single-cfg-21",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-36hh5-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-22",
      slug: "wells-wom-series-wall-single-cfg-22",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-48hh6-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-23",
      slug: "wells-wom-series-wall-single-cfg-23",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-48hh6-230",
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
      id: "wells-wom-series-wall-single-cfg-24",
      slug: "wells-wom-series-wall-single-cfg-24",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-48hh6-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-25",
      slug: "wells-wom-series-wall-single-cfg-25",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-60hh6-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "wells-wom-series-wall-single-cfg-26",
      slug: "wells-wom-series-wall-single-cfg-26",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-60hh6-230",
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
      id: "wells-wom-series-wall-single-cfg-27",
      slug: "wells-wom-series-wall-single-cfg-27",
      modelId: "wells-wom-series-wall-single",
      outdoorUnitId: "wells-wom-60hh6-230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "wells-wsa-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-2",
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
      configurationId: "wells-wsa-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-4",
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
      configurationId: "wells-wsa-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsa-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wma-series-wall-single-cfg-1",
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
      configurationId: "wells-wma-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wma-series-wall-single-cfg-3",
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
      configurationId: "wells-wma-series-wall-single-cfg-4",
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
      configurationId: "wells-wma-series-wall-single-cfg-5",
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
      configurationId: "wells-wma-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wma-series-wall-single-cfg-7",
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
      configurationId: "wells-wma-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wma-series-wall-single-cfg-9",
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
      configurationId: "wells-wma-series-wall-single-cfg-10",
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
      configurationId: "wells-wma-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wma-series-wall-single-cfg-12",
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
      configurationId: "wells-wmm-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.68,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wmm-series-wall-single-cfg-2",
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
      configurationId: "wells-wmm-series-wall-single-cfg-3",
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
      configurationId: "wells-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-standard-wall-single-cfg-3",
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
      configurationId: "wells-standard-wall-single-cfg-4",
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
      configurationId: "wells-standard-wall-single-cfg-5",
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
      configurationId: "wells-standard-wall-single-cfg-6",
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
      configurationId: "wells-standard-wall-single-cfg-7",
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
      configurationId: "wells-standard-wall-single-cfg-8",
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
      configurationId: "wells-standard-wall-single-cfg-9",
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
      configurationId: "wells-standard-wall-single-cfg-10",
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
      configurationId: "wells-standard-wall-single-cfg-11",
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
      configurationId: "wells-standard-wall-single-cfg-12",
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
      configurationId: "wells-standard-wall-single-cfg-13",
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
      configurationId: "wells-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-vmc-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-vmc-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wua-series-central-ducted-cfg-1",
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
      configurationId: "wells-wua-series-central-ducted-cfg-2",
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
      configurationId: "wells-wua-series-central-ducted-cfg-3",
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
      configurationId: "wells-wua-series-central-ducted-cfg-4",
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
      configurationId: "wells-wua-series-central-ducted-cfg-5",
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
      configurationId: "wells-wua-series-central-ducted-cfg-6",
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
      configurationId: "wells-wua-series-central-ducted-cfg-7",
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
      configurationId: "wells-wua-series-central-ducted-cfg-8",
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
      configurationId: "wells-wua-series-central-ducted-cfg-9",
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
      configurationId: "wells-wua-series-central-ducted-cfg-10",
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
      configurationId: "wells-wua-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wua-series-central-ducted-cfg-12",
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
      configurationId: "wells-wsb-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsb-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wsb-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-central-ducted-cfg-3",
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
      configurationId: "wells-wos-series-central-ducted-cfg-4",
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
      configurationId: "wells-wos-series-central-ducted-cfg-5",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wdhp-series-central-ducted-cfg-2",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-3",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-4",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-5",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-6",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-7",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-8",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-9",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-10",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-11",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-12",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-13",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-14",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-15",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-16",
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
      configurationId: "wells-wdhp-series-central-ducted-cfg-17",
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
      configurationId: "wells-wos-series-wall-single-cfg-1",
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
      configurationId: "wells-wos-series-wall-single-cfg-2",
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
      configurationId: "wells-wos-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-10",
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
      configurationId: "wells-wos-series-wall-single-cfg-11",
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
      configurationId: "wells-wos-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-13",
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
      configurationId: "wells-wos-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-24",
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
      configurationId: "wells-wos-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-34",
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
      configurationId: "wells-wos-series-wall-single-cfg-35",
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
      configurationId: "wells-wos-series-wall-single-cfg-36",
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
      configurationId: "wells-wos-series-wall-single-cfg-37",
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
      configurationId: "wells-wos-series-wall-single-cfg-38",
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
      configurationId: "wells-wos-series-wall-single-cfg-39",
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
      configurationId: "wells-wos-series-wall-single-cfg-40",
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
      configurationId: "wells-wos-series-wall-single-cfg-41",
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
      configurationId: "wells-wos-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wos-series-wall-single-cfg-43",
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
      configurationId: "wells-wos-series-wall-single-cfg-44",
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
      configurationId: "wells-wos-series-wall-single-cfg-45",
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
      configurationId: "wells-wos-series-wall-single-cfg-46",
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
      configurationId: "wells-wos-series-wall-single-cfg-47",
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
      configurationId: "wells-wos-series-wall-single-cfg-48",
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
      configurationId: "wells-wos-series-wall-single-cfg-49",
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
      configurationId: "wells-wos-series-wall-single-cfg-50",
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
      configurationId: "wells-wos-series-wall-single-cfg-51",
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
      configurationId: "wells-wos-series-wall-single-cfg-52",
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
      configurationId: "wells-wos-series-wall-single-cfg-53",
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
      configurationId: "wells-wos-series-wall-single-cfg-54",
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
      configurationId: "wells-wom-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-2",
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
      configurationId: "wells-wom-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-5",
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
      configurationId: "wells-wom-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-8",
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
      configurationId: "wells-wom-series-wall-single-cfg-9",
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
      configurationId: "wells-wom-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-11",
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
      configurationId: "wells-wom-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-14",
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
      configurationId: "wells-wom-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-17",
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
      configurationId: "wells-wom-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-20",
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
      configurationId: "wells-wom-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-23",
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
      configurationId: "wells-wom-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "wells-wom-series-wall-single-cfg-25",
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
      configurationId: "wells-wom-series-wall-single-cfg-26",
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
      configurationId: "wells-wom-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
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
