import type { BrandDataset } from "../../types";

export const geDataset: BrandDataset = {
  brand: {
    id: "ge",
    slug: "ge",
    name: "GE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ge-ns18h-series",
      slug: "ge-ns18h-series",
      name: "NS18H SERIES",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-standard",
      slug: "ge-standard",
      name: "Standard",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series",
      slug: "ge-ns22h-series",
      name: "NS22H SERIES",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series",
      slug: "ge-ns22-series",
      name: "NS22 Series",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-connect",
      slug: "ge-connect",
      name: "Connect",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ge-ns18h-series-central-ducted-24000",
      slug: "ge-ns18h-series-central-ducted-24000",
      name: "NS18H SERIES 24 000 BTU",
      seriesId: "ge-ns18h-series",
      brandId: "ge",
      modelNumber: "NS18H SERIES 24k",
      normalizedModelNumber: "ns18h-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 22600,
      seer2Min: 17.1,
      seer2Max: 19,
      hspf2Min: 7.8,
      hspf2Max: 8.5,
      cop5FMin: 1.85,
      cop5FMax: 2.04,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-standard-central-ducted-48000",
      slug: "ge-standard-central-ducted-48000",
      name: "Standard 48 000 BTU",
      seriesId: "ge-standard",
      brandId: "ge",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 30400,
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
      id: "ge-ns18h-series-central-ducted-36000",
      slug: "ge-ns18h-series-central-ducted-36000",
      name: "NS18H SERIES 36 000 BTU",
      seriesId: "ge-ns18h-series",
      brandId: "ge",
      modelNumber: "NS18H SERIES 36k",
      normalizedModelNumber: "ns18h-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34400,
      heatingCapacity5FMinBtu: 22000,
      heatingCapacity5FMaxBtu: 22200,
      seer2Min: 17.5,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 2.16,
      cop5FMax: 2.18,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-20000",
      slug: "ge-ns18h-series-central-ducted-20000",
      name: "NS18H SERIES 20 000 BTU",
      seriesId: "ge-ns18h-series",
      brandId: "ge",
      modelNumber: "NS18H SERIES 20k",
      normalizedModelNumber: "ns18h-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 17.1,
      seer2Max: 17.1,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.94,
      cop5FMax: 1.94,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000",
      slug: "ge-ns22h-series-central-ducted-36000",
      name: "NS22H SERIES 36 000 BTU",
      seriesId: "ge-ns22h-series",
      brandId: "ge",
      modelNumber: "NS22H SERIES 36k",
      normalizedModelNumber: "ns22h-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 21400,
      heatingCapacity5FMaxBtu: 23000,
      seer2Min: 17.5,
      seer2Max: 20.5,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 2.02,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000",
      slug: "ge-ns22h-series-central-ducted-48000",
      name: "NS22H Series 48 000 BTU",
      seriesId: "ge-ns22h-series",
      brandId: "ge",
      modelNumber: "NS22H Series 48k",
      normalizedModelNumber: "ns22h-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 27200,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 18,
      seer2Max: 19.5,
      hspf2Min: 7.8,
      hspf2Max: 8.5,
      cop5FMin: 1.84,
      cop5FMax: 2.04,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-48000",
      slug: "ge-ns22-series-central-ducted-48000",
      name: "NS22 Series 48 000 BTU",
      seriesId: "ge-ns22-series",
      brandId: "ge",
      modelNumber: "NS22 Series 48k",
      normalizedModelNumber: "ns22-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 8,
      hspf2Max: 8,
      cop5FMin: 1.86,
      cop5FMax: 1.86,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000",
      slug: "ge-ns22h-series-central-ducted-24000",
      name: "NS22H SERIES 24 000 BTU",
      seriesId: "ge-ns22h-series",
      brandId: "ge",
      modelNumber: "NS22H SERIES 24k",
      normalizedModelNumber: "ns22h-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 13900,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 20,
      seer2Max: 22,
      hspf2Min: 8.2,
      hspf2Max: 9.5,
      cop5FMin: 1.88,
      cop5FMax: 2.32,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-60000",
      slug: "ge-ns22h-series-central-ducted-60000",
      name: "NS22H Series 60 000 BTU",
      seriesId: "ge-ns22h-series",
      brandId: "ge",
      modelNumber: "NS22H Series 60k",
      normalizedModelNumber: "ns22h-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 37600,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.2,
      hspf2Max: 8.7,
      cop5FMin: 1.98,
      cop5FMax: 2.12,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-42000",
      slug: "ge-ns22h-series-central-ducted-42000",
      name: "NS22H Series 42 000 BTU",
      seriesId: "ge-ns22h-series",
      brandId: "ge",
      modelNumber: "NS22H Series 42k",
      normalizedModelNumber: "ns22h-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 28200,
      heatingCapacity5FMaxBtu: 28200,
      seer2Min: 18.5,
      seer2Max: 19,
      hspf2Min: 7.8,
      hspf2Max: 7.8,
      cop5FMin: 1.82,
      cop5FMax: 1.84,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-connect-central-ducted-24000",
      slug: "ge-connect-central-ducted-24000",
      name: "Connect 24 000 BTU",
      seriesId: "ge-connect",
      brandId: "ge",
      modelNumber: "Connect 24k",
      normalizedModelNumber: "connect-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 14000,
      seer2Min: 17,
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
      id: "ge-connect-central-ducted-48000",
      slug: "ge-connect-central-ducted-48000",
      name: "Connect 48 000 BTU",
      seriesId: "ge-connect",
      brandId: "ge",
      modelNumber: "Connect 48k",
      normalizedModelNumber: "connect-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 31200,
      heatingCapacity5FMaxBtu: 31200,
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
    }
  ],
  outdoorUnits: [
    {
      id: "ge-ns18h36ma4",
      modelNumber: "NS18H36MA4-**",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns18h60ma4",
      modelNumber: "NS18H60MA4-**",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns22h36ma4-a",
      modelNumber: "NS22H36MA4-**A",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns22h48ma4-a",
      modelNumber: "NS22H48MA4-**A",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns22h60ma4-a",
      modelNumber: "NS22H60MA4-**A",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns22h24ma4-a",
      modelNumber: "NS22H24MA4-**A",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-auh2436zgda",
      modelNumber: "AUH2436ZGDA*",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-auh4860zgda",
      modelNumber: "AUH4860ZGDA*",
      brandId: "ge",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "ge-ncuu24ap4-txv",
      modelNumber: "NCUU24AP4+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu30ap4-txv",
      modelNumber: "NCUU30AP4+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc24at4",
      modelNumber: "NCUC24AT4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc30at4",
      modelNumber: "NCUC30AT4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nchc30at4",
      modelNumber: "NCHC30AT4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu30bp4-txv",
      modelNumber: "NCUU30BP4+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc24bt4",
      modelNumber: "NCUC24BT4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc30bt4",
      modelNumber: "NCUC30BT4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nchc30bt4",
      modelNumber: "NCHC30BT4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu24bp4-txv",
      modelNumber: "NCUU24BP4+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam24e1ta4",
      modelNumber: "NAM24E1TA4-**",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam30e1ta4",
      modelNumber: "NAM30E1TA4-**",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam18v1ta4",
      modelNumber: "NAM18V1TA4-**",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam24v1ta4",
      modelNumber: "NAM24V1TA4-**",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam30v1ta4",
      modelNumber: "NAM30V1TA4-**",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam24v2ta4",
      modelNumber: "NAM24V2TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam30v2ta4",
      modelNumber: "NAM30V2TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam36v2ta4",
      modelNumber: "NAM36V2TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu49cp4-txv",
      modelNumber: "NCUU49CP4+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam36v1ta4",
      modelNumber: "NAM36V1TA4-**",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam42v1ta4",
      modelNumber: "NAM42V1TA4-**",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam18p1ta4",
      modelNumber: "NAM18P1TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu30ap4-tdr-txv",
      modelNumber: "NCUU30AP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu30bp4-tdr-txv",
      modelNumber: "NCUU30BP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu36ap4-tdr-txv",
      modelNumber: "NCUU36AP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu36bp4-tdr-txv",
      modelNumber: "NCUU36BP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu48bp4-tdr-txv",
      modelNumber: "NCUU48BP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nchc30at4-tdr",
      modelNumber: "NCHC30AT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nchc30bt4-tdr",
      modelNumber: "NCHC30BT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nchc36ct4-tdr",
      modelNumber: "NCHC36CT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nchc42ct4-tdr",
      modelNumber: "NCHC42CT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc30at4-tdr",
      modelNumber: "NCUC30AT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc30bt4-tdr",
      modelNumber: "NCUC30BT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc36at4-tdr",
      modelNumber: "NCUC36AT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc36bt4-tdr",
      modelNumber: "NCUC36BT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc48bt4-tdr",
      modelNumber: "NCUC48BT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam36e1at",
      modelNumber: "NAM36E1AT",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam42e1at",
      modelNumber: "NAM42E1AT",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam42v2ta4",
      modelNumber: "NAM42V2TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc48ct4-tdr",
      modelNumber: "NCUC48CT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu48cp4-tdr-txv",
      modelNumber: "NCUU48CP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu60cp4-tdr-txv",
      modelNumber: "NCUU60CP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nchc48ct4-tdr",
      modelNumber: "NCHC48CT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nchc51ct4-tdr",
      modelNumber: "NCHC51CT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc60ct4-tdr",
      modelNumber: "NCUC60CT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc50-60ct4",
      modelNumber: "NCUC50/60CT4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam60v2ta4",
      modelNumber: "NAM60V2TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam48v2ta4",
      modelNumber: "NAM48V2TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu24ap4-tdr-txv",
      modelNumber: "NCUU24AP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuu24bp4-tdr-txv",
      modelNumber: "NCUU24BP4+TDR+TXV",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam24p1ta4",
      modelNumber: "NAM24P1TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam30p1ta4",
      modelNumber: "NAM30P1TA4",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc24at4-tdr",
      modelNumber: "NCUC24AT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc24bt4-tdr",
      modelNumber: "NCUC24BT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam24v2at",
      modelNumber: "NAM24V2AT",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam24e1at",
      modelNumber: "NAM24E1AT",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-nam30e1at",
      modelNumber: "NAM30E1AT",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-ncuc60dt4-tdr",
      modelNumber: "NCUC60DT4+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-c-a-c-d-e-24b34-tdr",
      modelNumber: "C(A,C,D,E)24B34+TDR",
      brandId: "ge",
      type: "central-ducted",
    },
    {
      id: "ge-d-a-c-e-60c44-tdr",
      modelNumber: "D(A,C,E)60C44+TDR",
      brandId: "ge",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-1",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-1",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu24ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-2",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-2",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-3",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-3",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-4",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-4",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-5",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-5",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-6",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-6",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-7",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-7",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-8",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-8",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-9",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-9",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu24ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-10",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-10",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-11",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-11",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-12",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-12",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-13",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-13",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-14",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-14",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30bp4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-15",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-15",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24bt4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-16",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-16",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30bt4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-17",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-17",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30bt4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-18",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-18",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-19",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-19",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-20",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-20",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-21",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-21",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu24ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-22",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-22",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-23",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-23",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-24",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-24",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-25",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-25",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-26",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-26",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu24ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-27",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-27",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30ap4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-28",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-28",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-29",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-29",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-30",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-30",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30at4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-31",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-31",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu24bp4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-32",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-32",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30bp4-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-33",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-33",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24bt4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-34",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-34",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30bt4",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-35",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-35",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30bp4-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-36",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-36",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30bt4",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-37",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-37",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30bt4",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-38",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-38",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu24bp4-txv",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-39",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-39",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24bt4",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-40",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-40",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu24bp4-txv",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-41",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-41",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30bp4-txv",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-42",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-42",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24bt4",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-43",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-43",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30bt4",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-44",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-44",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam24e1ta4",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-45",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-45",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam30e1ta4",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-46",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-46",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam18v1ta4",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-47",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-47",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam24v1ta4",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-48",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-48",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu24bp4-txv",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-49",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-49",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc24bt4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-50",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-50",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuu30bp4-txv",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-51",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-51",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-ncuc30bt4",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-52",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-52",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30bt4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-53",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-53",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nchc30bt4",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-54",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-54",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam30v1ta4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-55",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-55",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam24v2ta4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-56",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-56",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam30v2ta4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-24000-cfg-57",
      slug: "ge-ns18h-series-central-ducted-24000-cfg-57",
      modelId: "ge-ns18h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam36v2ta4",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-standard-central-ducted-48000-cfg-1",
      slug: "ge-standard-central-ducted-48000-cfg-1",
      modelId: "ge-standard-central-ducted-48000",
      outdoorUnitId: "ge-ns18h60ma4",
      indoorUnitId: "ge-ncuu49cp4-txv",
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-36000-cfg-1",
      slug: "ge-ns18h-series-central-ducted-36000-cfg-1",
      modelId: "ge-ns18h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam36v1ta4",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-36000-cfg-2",
      slug: "ge-ns18h-series-central-ducted-36000-cfg-2",
      modelId: "ge-ns18h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam42v1ta4",
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-20000-cfg-1",
      slug: "ge-ns18h-series-central-ducted-20000-cfg-1",
      modelId: "ge-ns18h-series-central-ducted-20000",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: "ge-nam18p1ta4",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-1",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-1",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-2",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-2",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-3",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-3",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-4",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-4",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-5",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-5",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-6",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-6",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-7",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-7",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-8",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-8",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-9",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-9",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-10",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-10",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-11",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-11",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-12",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-12",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-13",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-13",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-14",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-14",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-15",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-15",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-16",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-16",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-17",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-17",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-18",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-18",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-19",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-19",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-20",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-20",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-21",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-21",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-22",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-22",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-23",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-23",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-24",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-24",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-25",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-25",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-26",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-26",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36ap4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-27",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-27",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-28",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-28",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-29",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-29",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-30",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-30",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-31",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-31",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-32",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-32",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-33",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-33",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-34",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-34",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-35",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-35",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-36",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-36",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-37",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-37",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-38",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-38",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-39",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-39",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-40",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-40",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-41",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-41",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-42",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-42",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-43",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-43",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-44",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-44",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-45",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-45",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-46",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-46",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-47",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-47",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-48",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-48",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nam36v1ta4",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-49",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-49",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nam42v1ta4",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-50",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-50",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-51",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-51",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-52",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-52",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-53",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-53",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-54",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-54",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-55",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-55",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-56",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-56",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-57",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-57",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-58",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-58",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-59",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-59",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-60",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-60",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-61",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-61",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-62",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-62",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-63",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-63",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-64",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-64",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-65",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-65",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-66",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-66",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-67",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-67",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-68",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-68",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-69",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-69",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-70",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-70",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-71",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-71",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-72",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-72",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-73",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-73",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-74",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-74",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-75",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-75",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-76",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-76",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-77",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-77",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-78",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-78",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-79",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-79",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-80",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-80",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-81",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-81",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-82",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-82",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-83",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-83",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-84",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-84",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-85",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-85",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-86",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-86",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-87",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-87",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-88",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-88",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-89",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-89",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-90",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-90",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-91",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-91",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-92",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-92",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-93",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-93",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-94",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-94",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-95",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-95",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-96",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-96",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-97",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-97",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-98",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-98",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-99",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-99",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-100",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-100",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-101",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-101",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-102",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-102",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-103",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-103",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-104",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-104",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-105",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-105",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-106",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-106",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36at4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-107",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-107",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-108",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-108",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-109",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-109",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-110",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-110",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-111",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-111",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-112",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-112",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-113",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-113",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-114",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-114",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-115",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-115",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-116",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-116",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-117",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-117",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-118",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-118",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-119",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-119",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-120",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-120",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-121",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-121",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-122",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-122",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-123",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-123",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-124",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-124",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-125",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-125",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-126",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-126",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-127",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-127",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-128",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-128",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-129",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-129",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-130",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-130",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nam36v2ta4",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-131",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-131",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nam36e1at",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-132",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-132",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nam42e1at",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-133",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-133",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nam42v2ta4",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-134",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-134",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-135",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-135",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-136",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-136",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-137",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-137",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-138",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-138",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-139",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-139",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-140",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-140",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-141",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-141",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-142",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-142",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-143",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-143",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-144",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-144",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-145",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-145",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc36ct4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-146",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-146",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-147",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-147",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-148",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-148",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-149",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-149",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-150",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-150",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-151",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-151",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-152",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-152",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-153",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-153",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-154",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-154",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-nchc42ct4-tdr",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-155",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-155",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-156",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-156",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-157",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-157",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-158",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-158",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-159",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-159",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-160",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-160",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-161",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-161",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-162",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-162",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-163",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-163",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-164",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-164",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc36bt4-tdr",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-165",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-165",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-166",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-166",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-167",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-167",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-168",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-168",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-169",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-169",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48bt4-tdr",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-170",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-170",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-171",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-171",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-172",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-172",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-173",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-173",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-174",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-174",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-175",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-175",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-176",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-176",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-177",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-177",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-178",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-178",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuc48ct4-tdr",
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-179",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-179",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-180",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-180",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-181",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-181",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-182",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-182",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-183",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-183",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-184",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-184",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-185",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-185",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-186",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-186",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-187",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-187",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-188",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-188",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu36bp4-tdr-txv",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-189",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-189",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-190",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-190",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-191",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-191",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-192",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-192",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-193",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-193",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48bp4-tdr-txv",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-194",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-194",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-195",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-195",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-196",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-196",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-197",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-197",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-198",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-198",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-199",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-199",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-200",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-200",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-201",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-201",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-36000-cfg-202",
      slug: "ge-ns22h-series-central-ducted-36000-cfg-202",
      modelId: "ge-ns22h-series-central-ducted-36000",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: "ge-ncuu48cp4-tdr-txv",
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-1",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-1",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-2",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-2",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-3",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-3",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-4",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-4",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-5",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-5",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-6",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-6",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-7",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-7",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-8",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-8",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-9",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-9",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-10",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-10",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-11",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-11",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-12",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-12",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-13",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-13",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-14",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-14",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-15",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-15",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-16",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-16",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-17",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-17",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-18",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-18",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-19",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-19",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-20",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-20",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-21",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-21",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-22",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-22",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-23",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-23",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-24",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-24",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-25",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-25",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-26",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-26",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-27",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-27",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: "ge-ncuc50-60ct4",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-28",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-28",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nam60v2ta4",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-29",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-29",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nam48v2ta4",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-30",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-30",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-31",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-31",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-32",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-32",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-33",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-33",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-34",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-34",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-35",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-35",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-36",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-36",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-37",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-37",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-38",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-38",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-39",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-39",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-40",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-40",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc51ct4-tdr",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-41",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-41",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-42",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-42",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-43",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-43",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-44",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-44",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-45",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-45",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-46",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-46",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-47",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-47",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-48",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-48",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-49",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-49",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-50",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-50",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-51",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-51",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-52",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-52",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-53",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-53",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-54",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-54",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-55",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-55",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-56",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-56",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-48000-cfg-57",
      slug: "ge-ns22h-series-central-ducted-48000-cfg-57",
      modelId: "ge-ns22h-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-48000-cfg-1",
      slug: "ge-ns22-series-central-ducted-48000-cfg-1",
      modelId: "ge-ns22-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: "ge-ncuu60cp4-tdr-txv",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-48000-cfg-2",
      slug: "ge-ns22-series-central-ducted-48000-cfg-2",
      modelId: "ge-ns22-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-48000-cfg-3",
      slug: "ge-ns22-series-central-ducted-48000-cfg-3",
      modelId: "ge-ns22-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: "ge-ncuc50-60ct4",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-48000-cfg-4",
      slug: "ge-ns22-series-central-ducted-48000-cfg-4",
      modelId: "ge-ns22-series-central-ducted-48000",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: "ge-ncuc60ct4-tdr",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-1",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-1",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-2",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-2",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-3",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-3",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-4",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-4",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-5",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-5",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-6",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-6",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-7",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-7",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-8",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-8",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-9",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-9",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-10",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-10",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-11",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-11",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-12",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-12",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-13",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-13",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-14",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-14",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-15",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-15",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-16",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-16",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-17",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-17",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-18",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-18",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-19",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-19",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-20",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-20",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-21",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-21",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-22",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-22",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-23",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-23",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-24",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-24",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-25",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-25",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nam24p1ta4",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-26",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-26",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nam30p1ta4",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-27",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-27",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nam24v1ta4",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-28",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-28",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nam30v1ta4",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-29",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-29",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-30",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-30",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-31",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-31",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-32",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-32",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-33",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-33",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-34",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-34",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-35",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-35",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-36",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-36",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-37",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-37",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-38",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-38",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-39",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-39",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-40",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-40",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-41",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-41",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-42",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-42",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-43",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-43",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-44",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-44",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-45",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-45",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-46",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-46",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-47",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-47",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-48",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-48",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-49",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-49",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-50",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-50",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-51",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-51",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-52",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-52",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-53",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-53",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-54",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-54",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-55",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-55",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-56",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-56",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-57",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-57",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-58",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-58",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-59",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-59",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-60",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-60",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-61",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-61",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-62",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-62",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-63",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-63",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-64",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-64",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-65",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-65",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-66",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-66",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-67",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-67",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-68",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-68",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-69",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-69",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-70",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-70",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-71",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-71",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nam30v2ta4",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-72",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-72",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-73",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-73",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-74",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-74",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-75",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-75",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-76",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-76",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-77",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-77",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 22,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-78",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-78",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 22,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-79",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-79",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-80",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-80",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc24bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-81",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-81",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-82",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-82",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-83",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-83",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-84",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-84",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-85",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-85",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-86",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-86",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-87",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-87",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-88",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-88",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-89",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-89",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-90",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-90",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-91",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-91",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-92",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-92",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-93",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-93",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-94",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-94",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 22,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-95",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-95",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 22,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-96",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-96",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-97",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-97",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu24bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-98",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-98",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-99",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-99",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30ap4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-100",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-100",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-101",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-101",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-102",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-102",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-103",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-103",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-104",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-104",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-105",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-105",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-106",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-106",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuu30bp4-tdr-txv",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-107",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-107",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-ncuc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-108",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-108",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nam24v2at",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-109",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-109",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nam24e1at",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-110",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-110",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nam30e1at",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-111",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-111",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-112",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-112",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-113",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-113",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30at4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-114",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-114",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-115",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-115",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-116",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-116",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-117",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-117",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-118",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-118",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-24000-cfg-119",
      slug: "ge-ns22h-series-central-ducted-24000-cfg-119",
      modelId: "ge-ns22h-series-central-ducted-24000",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: "ge-nchc30bt4-tdr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-60000-cfg-1",
      slug: "ge-ns22h-series-central-ducted-60000-cfg-1",
      modelId: "ge-ns22h-series-central-ducted-60000",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: "ge-nam60v2ta4",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-60000-cfg-2",
      slug: "ge-ns22h-series-central-ducted-60000-cfg-2",
      modelId: "ge-ns22h-series-central-ducted-60000",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: "ge-ncuc60dt4-tdr",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-60000-cfg-3",
      slug: "ge-ns22h-series-central-ducted-60000-cfg-3",
      modelId: "ge-ns22h-series-central-ducted-60000",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: "ge-ncuc60dt4-tdr",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-42000-cfg-1",
      slug: "ge-ns22h-series-central-ducted-42000-cfg-1",
      modelId: "ge-ns22h-series-central-ducted-42000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-42000-cfg-2",
      slug: "ge-ns22h-series-central-ducted-42000-cfg-2",
      modelId: "ge-ns22h-series-central-ducted-42000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-42000-cfg-3",
      slug: "ge-ns22h-series-central-ducted-42000-cfg-3",
      modelId: "ge-ns22h-series-central-ducted-42000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-42000-cfg-4",
      slug: "ge-ns22h-series-central-ducted-42000-cfg-4",
      modelId: "ge-ns22h-series-central-ducted-42000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-42000-cfg-5",
      slug: "ge-ns22h-series-central-ducted-42000-cfg-5",
      modelId: "ge-ns22h-series-central-ducted-42000",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: "ge-nchc48ct4-tdr",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-connect-central-ducted-24000-cfg-1",
      slug: "ge-connect-central-ducted-24000-cfg-1",
      modelId: "ge-connect-central-ducted-24000",
      outdoorUnitId: "ge-auh2436zgda",
      indoorUnitId: "ge-c-a-c-d-e-24b34-tdr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-connect-central-ducted-48000-cfg-1",
      slug: "ge-connect-central-ducted-48000-cfg-1",
      modelId: "ge-connect-central-ducted-48000",
      outdoorUnitId: "ge-auh4860zgda",
      indoorUnitId: "ge-d-a-c-e-60c44-tdr",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-44",
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
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-24000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-standard-central-ducted-48000-cfg-1",
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
      configurationId: "ge-ns18h-series-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-36000-cfg-2",
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
      configurationId: "ge-ns18h-series-central-ducted-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-3",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-4",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-11",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-12",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-21",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-22",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-29",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-30",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-38",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-46",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-83",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-84",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-91",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-92",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-101",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-102",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-107",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-109",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-110",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-114",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-118",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-124",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-126",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-127",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-137",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-138",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-139",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-142",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-143",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-144",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-145",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-147",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-149",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-152",
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
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-153",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-154",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-155",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-156",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-157",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-158",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-159",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-160",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-161",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-162",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-163",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-164",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-173",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-174",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-175",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-176",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-190",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-191",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-192",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-194",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-196",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-197",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-198",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-199",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-200",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-201",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-36000-cfg-202",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-48000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22-series-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22-series-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22-series-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22-series-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-102",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-107",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-110",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-114",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-118",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-24000-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-60000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-60000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-connect-central-ducted-24000-cfg-1",
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
      configurationId: "ge-connect-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
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
