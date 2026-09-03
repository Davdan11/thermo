import type { BrandDataset } from "../../types";

export const brand_kadenDataset: BrandDataset = {
  "brand": {
    "id": "brand-kaden",
    "slug": "kaden",
    "name": "Kaden",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Kaden",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-kaden-epa",
      "type": "spec_sheet",
      "title": "ENERGY STAR Open Data",
      "organization": "EPA",
      "url": "https://data.energystar.gov",
      "consultedAt": "2026-08-28",
      "language": "en",
      "confidence": "manufacturer_claim",
      "internalNotes": "Imported from master excel file."
    }
  ],
  "series": [
    {
      "id": "series-kaden-ko-series",
      "slug": "kaden-ko-series",
      "name": "KO Series",
      "brandId": "brand-kaden",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série KO Series de Kaden",
      "imageUrl": "/images/series/kaden-kaden-ko-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kaden-kovh152",
      "slug": "kaden-kovh152",
      "name": "KOVH152",
      "brandId": "brand-kaden",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série KOVH152 de Kaden",
      "imageUrl": "/images/series/kaden-kaden-kovh152.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-kaden-kob-hh-psx09hp-2aama",
      "slug": "kaden-kob-hh-psx09hp-2aama",
      "name": "Kaden KOB-HH-PSX09HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PSX09HP-2AAMA",
      "normalizedModelNumber": "kob-hh-psx09hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-psx06hp-2aama",
      "slug": "kaden-ko-psx06hp-2aama",
      "name": "Kaden KO-PSX06HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PSX06HP-2AAMA",
      "normalizedModelNumber": "ko-psx06hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-psx09hp-2aama",
      "slug": "kaden-kob-psx09hp-2aama",
      "name": "Kaden KOB-PSX09HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PSX09HP-2AAMA",
      "normalizedModelNumber": "kob-psx09hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-psx09hp-2aama",
      "slug": "kaden-ko-psx09hp-2aama",
      "name": "Kaden KO-PSX09HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PSX09HP-2AAMA",
      "normalizedModelNumber": "ko-psx09hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-psx12hp-2aama",
      "slug": "kaden-kob-psx12hp-2aama",
      "name": "Kaden KOB-PSX12HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PSX12HP-2AAMA",
      "normalizedModelNumber": "kob-psx12hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-psx06hp-2aama",
      "slug": "kaden-kob-hh-psx06hp-2aama",
      "name": "Kaden KOB-HH-PSX06HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PSX06HP-2AAMA",
      "normalizedModelNumber": "kob-hh-psx06hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-psx12hp-2aama",
      "slug": "kaden-kob-hh-psx12hp-2aama",
      "name": "Kaden KOB-HH-PSX12HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PSX12HP-2AAMA",
      "normalizedModelNumber": "kob-hh-psx12hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-psx09hp-1aama",
      "slug": "kaden-kob-psx09hp-1aama",
      "name": "Kaden KOB-PSX09HP-1AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PSX09HP-1AAMA",
      "normalizedModelNumber": "kob-psx09hp-1aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-ps218hp-2aama",
      "slug": "kaden-kob-ps218hp-2aama",
      "name": "Kaden KOB-PS218HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PS218HP-2AAMA",
      "normalizedModelNumber": "kob-ps218hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-ps318hp-2aama",
      "slug": "kaden-kob-ps318hp-2aama",
      "name": "Kaden KOB-PS318HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PS318HP-2AAMA",
      "normalizedModelNumber": "kob-ps318hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-ps427hp-2aama",
      "slug": "kaden-kob-ps427hp-2aama",
      "name": "Kaden KOB-PS427HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PS427HP-2AAMA",
      "normalizedModelNumber": "kob-ps427hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-ps327hp-2aama",
      "slug": "kaden-kob-ps327hp-2aama",
      "name": "Kaden KOB-PS327HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PS327HP-2AAMA",
      "normalizedModelNumber": "kob-ps327hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps218hp-2aama",
      "slug": "kaden-kob-hh-ps218hp-2aama",
      "name": "Kaden KOB-HH-PS218HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS218HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps218hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 19000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps318hp-2aama",
      "slug": "kaden-kob-hh-ps318hp-2aama",
      "name": "Kaden KOB-HH-PS318HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS318HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps318hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 19000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-ps327hp-2aama",
      "slug": "kaden-ko-ps327hp-2aama",
      "name": "Kaden KO-PS327HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PS327HP-2AAMA",
      "normalizedModelNumber": "ko-ps327hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-psx12hp-2aama",
      "slug": "kaden-ko-psx12hp-2aama",
      "name": "Kaden KO-PSX12HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PSX12HP-2AAMA",
      "normalizedModelNumber": "ko-psx12hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-ps436hp-2aama",
      "slug": "kaden-kob-ps436hp-2aama",
      "name": "Kaden KOB-PS436HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PS436HP-2AAMA",
      "normalizedModelNumber": "kob-ps436hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-ps536hp-2aama",
      "slug": "kaden-kob-ps536hp-2aama",
      "name": "Kaden KOB-PS536HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PS536HP-2AAMA",
      "normalizedModelNumber": "kob-ps536hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-ps436hp-2aama",
      "slug": "kaden-ko-ps436hp-2aama",
      "name": "Kaden KO-PS436HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PS436HP-2AAMA",
      "normalizedModelNumber": "ko-ps436hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-psx09hp-1aama",
      "slug": "kaden-ko-psx09hp-1aama",
      "name": "Kaden KO-PSX09HP-1AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PSX09HP-1AAMA",
      "normalizedModelNumber": "ko-psx09hp-1aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-psx12hp-1aama",
      "slug": "kaden-ko-psx12hp-1aama",
      "name": "Kaden KO-PSX12HP-1AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PSX12HP-1AAMA",
      "normalizedModelNumber": "ko-psx12hp-1aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-psx18hp-2aama",
      "slug": "kaden-kob-psx18hp-2aama",
      "name": "Kaden KOB-PSX18HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PSX18HP-2AAMA",
      "normalizedModelNumber": "kob-psx18hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-psx18hp-2aama",
      "slug": "kaden-ko-psx18hp-2aama",
      "name": "Kaden KO-PSX18HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PSX18HP-2AAMA",
      "normalizedModelNumber": "ko-psx18hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-psx12hp-1aama",
      "slug": "kaden-kob-psx12hp-1aama",
      "name": "Kaden KOB-PSX12HP-1AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PSX12HP-1AAMA",
      "normalizedModelNumber": "kob-psx12hp-1aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps548hp-2aama",
      "slug": "kaden-kob-hh-ps548hp-2aama",
      "name": "Kaden KOB-HH-PS548HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS548HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps548hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps327hp-2aama",
      "slug": "kaden-kob-hh-ps327hp-2aama",
      "name": "Kaden KOB-HH-PS327HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS327HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps327hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-psx24hp-2aama",
      "slug": "kaden-kob-psx24hp-2aama",
      "name": "Kaden KOB-PSX24HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-PSX24HP-2AAMA",
      "normalizedModelNumber": "kob-psx24hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps648hp-2aama",
      "slug": "kaden-kob-hh-ps648hp-2aama",
      "name": "Kaden KOB-HH-PS648HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS648HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps648hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps536hp-2aama",
      "slug": "kaden-kob-hh-ps536hp-2aama",
      "name": "Kaden KOB-HH-PS536HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS536HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps536hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps436hp-2aama",
      "slug": "kaden-kob-hh-ps436hp-2aama",
      "name": "Kaden KOB-HH-PS436HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS436HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps436hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps427hp-2aama",
      "slug": "kaden-kob-hh-ps427hp-2aama",
      "name": "Kaden KOB-HH-PS427HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS427HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps427hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-ps218hp-2aama",
      "slug": "kaden-ko-ps218hp-2aama",
      "name": "Kaden KO-PS218HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PS218HP-2AAMA",
      "normalizedModelNumber": "ko-ps218hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps655hp-2aama",
      "slug": "kaden-kob-hh-ps655hp-2aama",
      "name": "Kaden KOB-HH-PS655HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS655HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps655hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-ps555hp-2aama",
      "slug": "kaden-kob-hh-ps555hp-2aama",
      "name": "Kaden KOB-HH-PS555HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PS555HP-2AAMA",
      "normalizedModelNumber": "kob-hh-ps555hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-psx24hp-2aama",
      "slug": "kaden-ko-psx24hp-2aama",
      "name": "Kaden KO-PSX24HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-PSX24HP-2AAMA",
      "normalizedModelNumber": "ko-psx24hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-psx18hp-2aama",
      "slug": "kaden-kob-hh-psx18hp-2aama",
      "name": "Kaden KOB-HH-PSX18HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PSX18HP-2AAMA",
      "normalizedModelNumber": "kob-hh-psx18hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-psx24hp-2aama",
      "slug": "kaden-kob-hh-psx24hp-2aama",
      "name": "Kaden KOB-HH-PSX24HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PSX24HP-2AAMA",
      "normalizedModelNumber": "kob-hh-psx24hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-psx33hp-2aama",
      "slug": "kaden-kob-hh-psx33hp-2aama",
      "name": "Kaden KOB-HH-PSX33HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PSX33HP-2AAMA",
      "normalizedModelNumber": "kob-hh-psx33hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-psx36hp-2aama",
      "slug": "kaden-kob-hh-psx36hp-2aama",
      "name": "Kaden KOB-HH-PSX36HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-PSX36HP-2AAMA",
      "normalizedModelNumber": "kob-hh-psx36hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-uux18hp-2aama",
      "slug": "kaden-kob-hh-uux18hp-2aama",
      "name": "Kaden KOB-HH-UUX18HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-UUX18HP-2AAMA",
      "normalizedModelNumber": "kob-hh-uux18hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-uux18hp-2aama",
      "slug": "kaden-kob-uux18hp-2aama",
      "name": "Kaden KOB-UUX18HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-UUX18HP-2AAMA",
      "normalizedModelNumber": "kob-uux18hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-uux24hp-2aama",
      "slug": "kaden-kob-hh-uux24hp-2aama",
      "name": "Kaden KOB-HH-UUX24HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-UUX24HP-2AAMA",
      "normalizedModelNumber": "kob-hh-uux24hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-uux24hp-2aama",
      "slug": "kaden-kob-uux24hp-2aama",
      "name": "Kaden KOB-UUX24HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-UUX24HP-2AAMA",
      "normalizedModelNumber": "kob-uux24hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-uux36hp-2aama",
      "slug": "kaden-kob-hh-uux36hp-2aama",
      "name": "Kaden KOB-HH-UUX36HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-UUX36HP-2AAMA",
      "normalizedModelNumber": "kob-hh-uux36hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-uux60hp-2aama",
      "slug": "kaden-kob-hh-uux60hp-2aama",
      "name": "Kaden KOB-HH-UUX60HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-UUX60HP-2AAMA",
      "normalizedModelNumber": "kob-hh-uux60hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-uux48hp-2aama",
      "slug": "kaden-kob-hh-uux48hp-2aama",
      "name": "Kaden KOB-HH-UUX48HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-UUX48HP-2AAMA",
      "normalizedModelNumber": "kob-hh-uux48hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-hh-uux30hp-2aama",
      "slug": "kaden-kob-hh-uux30hp-2aama",
      "name": "Kaden KOB-HH-UUX30HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-HH-UUX30HP-2AAMA",
      "normalizedModelNumber": "kob-hh-uux30hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-uus24hp-2aama",
      "slug": "kaden-ko-uus24hp-2aama",
      "name": "Kaden KO-UUS24HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-UUS24HP-2AAMA",
      "normalizedModelNumber": "ko-uus24hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-ko-uux24hp-2aama",
      "slug": "kaden-ko-uux24hp-2aama",
      "name": "Kaden KO-UUX24HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KO-UUX24HP-2AAMA",
      "normalizedModelNumber": "ko-uux24hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-uux36hp-2aama",
      "slug": "kaden-kob-uux36hp-2aama",
      "name": "Kaden KOB-UUX36HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-UUX36HP-2AAMA",
      "normalizedModelNumber": "kob-uux36hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-uux48hp-2aama",
      "slug": "kaden-kob-uux48hp-2aama",
      "name": "Kaden KOB-UUX48HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-UUX48HP-2AAMA",
      "normalizedModelNumber": "kob-uux48hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kovh-48bam152l",
      "slug": "kaden-kovh-48bam152l",
      "name": "Kaden KOVH-48BAM152L",
      "seriesId": "series-kaden-kovh152",
      "brandId": "brand-kaden",
      "modelNumber": "KOVH-48BAM152L",
      "normalizedModelNumber": "kovh-48bam152l",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kovh-42bam152l",
      "slug": "kaden-kovh-42bam152l",
      "name": "Kaden KOVH-42BAM152L",
      "seriesId": "series-kaden-kovh152",
      "brandId": "brand-kaden",
      "modelNumber": "KOVH-42BAM152L",
      "normalizedModelNumber": "kovh-42bam152l",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41500,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kob-uux60hp-2aama",
      "slug": "kaden-kob-uux60hp-2aama",
      "name": "Kaden KOB-UUX60HP-2AAMA",
      "seriesId": "series-kaden-ko-series",
      "brandId": "brand-kaden",
      "modelNumber": "KOB-UUX60HP-2AAMA",
      "normalizedModelNumber": "kob-uux60hp-2aama",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kovh-18bam152l",
      "slug": "kaden-kovh-18bam152l",
      "name": "Kaden KOVH-18BAM152L",
      "seriesId": "series-kaden-kovh152",
      "brandId": "brand-kaden",
      "modelNumber": "KOVH-18BAM152L",
      "normalizedModelNumber": "kovh-18bam152l",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kovh-30bam152l",
      "slug": "kaden-kovh-30bam152l",
      "name": "Kaden KOVH-30BAM152L",
      "seriesId": "series-kaden-kovh152",
      "brandId": "brand-kaden",
      "modelNumber": "KOVH-30BAM152L",
      "normalizedModelNumber": "kovh-30bam152l",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kovh-36bam152l",
      "slug": "kaden-kovh-36bam152l",
      "name": "Kaden KOVH-36BAM152L",
      "seriesId": "series-kaden-kovh152",
      "brandId": "brand-kaden",
      "modelNumber": "KOVH-36BAM152L",
      "normalizedModelNumber": "kovh-36bam152l",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35600,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kaden-kovh-24bam152l",
      "slug": "kaden-kovh-24bam152l",
      "name": "Kaden KOVH-24BAM152L",
      "seriesId": "series-kaden-kovh152",
      "brandId": "brand-kaden",
      "modelNumber": "KOVH-24BAM152L",
      "normalizedModelNumber": "kovh-24bam152l",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-kaden-kob-hh-psx09hp-2aama",
      "modelNumber": "KOB-HH-PSX09HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-ko-psx06hp-2aama",
      "modelNumber": "KO-PSX06HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-kob-psx09hp-2aama",
      "modelNumber": "KOB-PSX09HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-ko-psx09hp-2aama",
      "modelNumber": "KO-PSX09HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-kob-psx12hp-2aama",
      "modelNumber": "KOB-PSX12HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-psx06hp-2aama",
      "modelNumber": "KOB-HH-PSX06HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-psx12hp-2aama",
      "modelNumber": "KOB-HH-PSX12HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-psx09hp-1aama",
      "modelNumber": "KOB-PSX09HP-1AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-ps218hp-2aama",
      "modelNumber": "KOB-PS218HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-ps318hp-2aama",
      "modelNumber": "KOB-PS318HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-ps427hp-2aama",
      "modelNumber": "KOB-PS427HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-ps327hp-2aama",
      "modelNumber": "KOB-PS327HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps218hp-2aama",
      "modelNumber": "KOB-HH-PS218HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps318hp-2aama",
      "modelNumber": "KOB-HH-PS318HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-ko-ps327hp-2aama",
      "modelNumber": "KO-PS327HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-ko-psx12hp-2aama",
      "modelNumber": "KO-PSX12HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-kob-ps436hp-2aama",
      "modelNumber": "KOB-PS436HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-ps536hp-2aama",
      "modelNumber": "KOB-PS536HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-ko-ps436hp-2aama",
      "modelNumber": "KO-PS436HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-ko-psx09hp-1aama",
      "modelNumber": "KO-PSX09HP-1AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-ko-psx12hp-1aama",
      "modelNumber": "KO-PSX12HP-1AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-kob-psx18hp-2aama",
      "modelNumber": "KOB-PSX18HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-ko-psx18hp-2aama",
      "modelNumber": "KO-PSX18HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-kob-psx12hp-1aama",
      "modelNumber": "KOB-PSX12HP-1AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps548hp-2aama",
      "modelNumber": "KOB-HH-PS548HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps327hp-2aama",
      "modelNumber": "KOB-HH-PS327HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-psx24hp-2aama",
      "modelNumber": "KOB-PSX24HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps648hp-2aama",
      "modelNumber": "KOB-HH-PS648HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps536hp-2aama",
      "modelNumber": "KOB-HH-PS536HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps436hp-2aama",
      "modelNumber": "KOB-HH-PS436HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps427hp-2aama",
      "modelNumber": "KOB-HH-PS427HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-ko-ps218hp-2aama",
      "modelNumber": "KO-PS218HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-kob-hh-ps655hp-2aama",
      "modelNumber": "KOB-HH-PS655HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-ps555hp-2aama",
      "modelNumber": "KOB-HH-PS555HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-ko-psx24hp-2aama",
      "modelNumber": "KO-PSX24HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-kob-hh-psx18hp-2aama",
      "modelNumber": "KOB-HH-PSX18HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-psx24hp-2aama",
      "modelNumber": "KOB-HH-PSX24HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-psx33hp-2aama",
      "modelNumber": "KOB-HH-PSX33HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-psx36hp-2aama",
      "modelNumber": "KOB-HH-PSX36HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-uux18hp-2aama",
      "modelNumber": "KOB-HH-UUX18HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-uux18hp-2aama",
      "modelNumber": "KOB-UUX18HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-uux24hp-2aama",
      "modelNumber": "KOB-HH-UUX24HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-uux24hp-2aama",
      "modelNumber": "KOB-UUX24HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-uux36hp-2aama",
      "modelNumber": "KOB-HH-UUX36HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-uux60hp-2aama",
      "modelNumber": "KOB-HH-UUX60HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-uux48hp-2aama",
      "modelNumber": "KOB-HH-UUX48HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-hh-uux30hp-2aama",
      "modelNumber": "KOB-HH-UUX30HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-ko-uus24hp-2aama",
      "modelNumber": "KO-UUS24HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-ko-uux24hp-2aama",
      "modelNumber": "KO-UUX24HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kaden-kob-uux36hp-2aama",
      "modelNumber": "KOB-UUX36HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-uux48hp-2aama",
      "modelNumber": "KOB-UUX48HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kovh-48bam152l",
      "modelNumber": "KOVH-48BAM152L",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kovh-42bam152l",
      "modelNumber": "KOVH-42BAM152L",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kob-uux60hp-2aama",
      "modelNumber": "KOB-UUX60HP-2AAMA",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kovh-18bam152l",
      "modelNumber": "KOVH-18BAM152L",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kovh-30bam152l",
      "modelNumber": "KOVH-30BAM152L",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kovh-36bam152l",
      "modelNumber": "KOVH-36BAM152L",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kaden-kovh-24bam152l",
      "modelNumber": "KOVH-24BAM152L",
      "brandId": "brand-kaden",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-kib-psx09wm-2aama",
      "modelNumber": "KIB-PSX09WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx06wm-2aama",
      "modelNumber": "KI-PSX06WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx09wm-2aama",
      "modelNumber": "KI-PSX09WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx12wm-2aama",
      "modelNumber": "KIB-PSX12WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx06wm-2aama",
      "modelNumber": "KIB-PSX06WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx09wm-1aama",
      "modelNumber": "KIB-PSX09WM-1AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46518",
      "modelNumber": "IU-46518",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46519",
      "modelNumber": "IU-46519",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46521",
      "modelNumber": "IU-46521",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46520",
      "modelNumber": "IU-46520",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46487",
      "modelNumber": "IU-46487",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46488",
      "modelNumber": "IU-46488",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46471",
      "modelNumber": "IU-46471",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx12wm-2aama",
      "modelNumber": "KI-PSX12WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46522",
      "modelNumber": "IU-46522",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46523",
      "modelNumber": "IU-46523",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx09cw-2aama",
      "modelNumber": "KIB-PSX09CW-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46472",
      "modelNumber": "IU-46472",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx09wm-1aama",
      "modelNumber": "KI-PSX09WM-1AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx12wm-1aama",
      "modelNumber": "KI-PSX12WM-1AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx18wm-2aama",
      "modelNumber": "KIB-PSX18WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx18wm-2aama",
      "modelNumber": "KI-PSX18WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx12wm-1aama",
      "modelNumber": "KIB-PSX12WM-1AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46493",
      "modelNumber": "IU-46493",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx12cw-2aama",
      "modelNumber": "KIB-PSX12CW-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46489",
      "modelNumber": "IU-46489",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx24wm-2aama",
      "modelNumber": "KIB-PSX24WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46495",
      "modelNumber": "IU-46495",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46492",
      "modelNumber": "IU-46492",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46491",
      "modelNumber": "IU-46491",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46490",
      "modelNumber": "IU-46490",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46470",
      "modelNumber": "IU-46470",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx12ct-2aama",
      "modelNumber": "KI-PSX12CT-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx09ct-2aama",
      "modelNumber": "KIB-PSX09CT-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx09cw-2aama",
      "modelNumber": "KI-PSX09CW-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46496",
      "modelNumber": "IU-46496",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx12ct-2aama",
      "modelNumber": "KIB-PSX12CT-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46494",
      "modelNumber": "IU-46494",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx18cw-2aama",
      "modelNumber": "KIB-PSX18CW-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx12cw-2aama",
      "modelNumber": "KI-PSX12CW-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx06cw-2aama",
      "modelNumber": "KIB-PSX06CW-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx24wm-2aama",
      "modelNumber": "KI-PSX24WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx24ct-2aama",
      "modelNumber": "KIB-PSX24CT-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx18cw-2aama",
      "modelNumber": "KI-PSX18CW-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx24ct-2aama",
      "modelNumber": "KI-PSX24CT-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx09ls-2aama",
      "modelNumber": "KIB-PSX09LS-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx18ct-2aama",
      "modelNumber": "KIB-PSX18CT-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx18ct-2aama",
      "modelNumber": "KI-PSX18CT-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx09hs-2aama",
      "modelNumber": "KIB-PSX09HS-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx12hs-2aama",
      "modelNumber": "KIB-PSX12HS-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-ki-psx09ct-2aama",
      "modelNumber": "KI-PSX09CT-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx12ls-2aama",
      "modelNumber": "KIB-PSX12LS-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx18hs-2aama",
      "modelNumber": "KIB-PSX18HS-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx33wm-2aama",
      "modelNumber": "KIB-PSX33WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx36wm-2aama",
      "modelNumber": "KIB-PSX36WM-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-psx24hs-2aama",
      "modelNumber": "KIB-PSX24HS-2AAMA",
      "brandId": "brand-kaden",
      "type": "wall-single"
    },
    {
      "id": "iu-kib-hh-uux18ah3-2aama",
      "modelNumber": "KIB-HH-UUX18AH3-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-uux18ah-2aama",
      "modelNumber": "KIB-UUX18AH-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-hh-uux24ah3-2aama",
      "modelNumber": "KIB-HH-UUX24AH3-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-uux24ah-2aama",
      "modelNumber": "KIB-UUX24AH-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-hh-uux36ah3-2aama",
      "modelNumber": "KIB-HH-UUX36AH3-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-hh-uux60ah3-2aama",
      "modelNumber": "KIB-HH-UUX60AH3-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-hh-uux48ah3-2aama",
      "modelNumber": "KIB-HH-UUX48AH3-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-hh-uux30ah3-2aama",
      "modelNumber": "KIB-HH-UUX30AH3-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-ki-uus24ahp-2aama",
      "modelNumber": "KI-UUS24AHP-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-ki-uux24ah-2aama",
      "modelNumber": "KI-UUX24AH-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-uux30ah-2aama",
      "modelNumber": "KIB-UUX30AH-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-uux48ah-2aama",
      "modelNumber": "KIB-UUX48AH-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-uux36ah-2aama",
      "modelNumber": "KIB-UUX36AH-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kib-uux60ah-2aama",
      "modelNumber": "KIB-UUX60AH-2AAMA",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah48tcbe",
      "modelNumber": "KMAH48TCBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah60pcbetxv",
      "modelNumber": "KMAH60PCBE+TXV",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah24pbbetxv",
      "modelNumber": "KMAH24PBBE+TXV",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah48pcbe",
      "modelNumber": "KMAH48PCBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah60tcbe",
      "modelNumber": "KMAH60TCBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah60pcbe",
      "modelNumber": "KMAH60PCBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah61tcbe",
      "modelNumber": "KMAH61TCBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kvwh30tbbe",
      "modelNumber": "KVWH30TBBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kvwh36tbbe",
      "modelNumber": "KVWH36TBBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah48pcbetxv",
      "modelNumber": "KMAH48PCBE+TXV",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah36tbbe",
      "modelNumber": "KMAH36TBBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah36pbbetxv",
      "modelNumber": "KMAH36PBBE+TXV",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah24tbbe",
      "modelNumber": "KMAH24TBBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kvwh18tabe",
      "modelNumber": "KVWH18TABE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kvwh24tabe",
      "modelNumber": "KVWH24TABE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah24pbbe",
      "modelNumber": "KMAH24PBBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    },
    {
      "id": "iu-kmah36pbbe",
      "modelNumber": "KMAH36PBBE",
      "brandId": "brand-kaden",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-kaden-kob-hh-psx09hp-2aama-kib-psx09wm-2aama",
      "slug": "kaden-kob-hh-psx09hp-2aama-kib-psx09wm-2aama",
      "modelId": "model-kaden-kob-hh-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.4,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx06hp-2aama-ki-psx06wm-2aama",
      "slug": "kaden-ko-psx06hp-2aama-ki-psx06wm-2aama",
      "modelId": "model-kaden-ko-psx06hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx06hp-2aama",
      "indoorUnitId": "iu-ki-psx06wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 13.6,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx09hp-2aama-kib-psx09wm-2aama",
      "slug": "kaden-kob-psx09hp-2aama-kib-psx09wm-2aama",
      "modelId": "model-kaden-kob-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.8,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx09hp-2aama-ki-psx09wm-2aama",
      "slug": "kaden-ko-psx09hp-2aama-ki-psx09wm-2aama",
      "modelId": "model-kaden-ko-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx09hp-2aama",
      "indoorUnitId": "iu-ki-psx09wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx12hp-2aama-kib-psx12wm-2aama",
      "slug": "kaden-kob-psx12hp-2aama-kib-psx12wm-2aama",
      "modelId": "model-kaden-kob-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx06hp-2aama-kib-psx06wm-2aama",
      "slug": "kaden-kob-hh-psx06hp-2aama-kib-psx06wm-2aama",
      "modelId": "model-kaden-kob-hh-psx06hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx06hp-2aama",
      "indoorUnitId": "iu-kib-psx06wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 14.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx12hp-2aama-kib-psx12wm-2aama",
      "slug": "kaden-kob-hh-psx12hp-2aama-kib-psx12wm-2aama",
      "modelId": "model-kaden-kob-hh-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.4,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx09hp-1aama-kib-psx09wm-1aama",
      "slug": "kaden-kob-psx09hp-1aama-kib-psx09wm-1aama",
      "modelId": "model-kaden-kob-psx09hp-1aama",
      "outdoorUnitId": "ou-kaden-kob-psx09hp-1aama",
      "indoorUnitId": "iu-kib-psx09wm-1aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-ps218hp-2aama-iu-46518",
      "slug": "kaden-kob-ps218hp-2aama-iu-46518",
      "modelId": "model-kaden-kob-ps218hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-ps218hp-2aama",
      "indoorUnitId": "iu-iu-46518",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-ps318hp-2aama-iu-46519",
      "slug": "kaden-kob-ps318hp-2aama-iu-46519",
      "modelId": "model-kaden-kob-ps318hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-ps318hp-2aama",
      "indoorUnitId": "iu-iu-46519",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-ps427hp-2aama-iu-46521",
      "slug": "kaden-kob-ps427hp-2aama-iu-46521",
      "modelId": "model-kaden-kob-ps427hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-ps427hp-2aama",
      "indoorUnitId": "iu-iu-46521",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-ps327hp-2aama-iu-46520",
      "slug": "kaden-kob-ps327hp-2aama-iu-46520",
      "modelId": "model-kaden-kob-ps327hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-ps327hp-2aama",
      "indoorUnitId": "iu-iu-46520",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps218hp-2aama-iu-46487",
      "slug": "kaden-kob-hh-ps218hp-2aama-iu-46487",
      "modelId": "model-kaden-kob-hh-ps218hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps218hp-2aama",
      "indoorUnitId": "iu-iu-46487",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps318hp-2aama-iu-46488",
      "slug": "kaden-kob-hh-ps318hp-2aama-iu-46488",
      "modelId": "model-kaden-kob-hh-ps318hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps318hp-2aama",
      "indoorUnitId": "iu-iu-46488",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-ps327hp-2aama-iu-46471",
      "slug": "kaden-ko-ps327hp-2aama-iu-46471",
      "modelId": "model-kaden-ko-ps327hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-ps327hp-2aama",
      "indoorUnitId": "iu-iu-46471",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx12hp-2aama-ki-psx12wm-2aama",
      "slug": "kaden-ko-psx12hp-2aama-ki-psx12wm-2aama",
      "modelId": "model-kaden-ko-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx12hp-2aama",
      "indoorUnitId": "iu-ki-psx12wm-2aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-ps436hp-2aama-iu-46522",
      "slug": "kaden-kob-ps436hp-2aama-iu-46522",
      "modelId": "model-kaden-kob-ps436hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-ps436hp-2aama",
      "indoorUnitId": "iu-iu-46522",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-ps536hp-2aama-iu-46523",
      "slug": "kaden-kob-ps536hp-2aama-iu-46523",
      "modelId": "model-kaden-kob-ps536hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-ps536hp-2aama",
      "indoorUnitId": "iu-iu-46523",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx09hp-2aama-kib-psx09cw-2aama",
      "slug": "kaden-kob-hh-psx09hp-2aama-kib-psx09cw-2aama",
      "modelId": "model-kaden-kob-hh-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09cw-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-ps436hp-2aama-iu-46472",
      "slug": "kaden-ko-ps436hp-2aama-iu-46472",
      "modelId": "model-kaden-ko-ps436hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-ps436hp-2aama",
      "indoorUnitId": "iu-iu-46472",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.9,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx09hp-1aama-ki-psx09wm-1aama",
      "slug": "kaden-ko-psx09hp-1aama-ki-psx09wm-1aama",
      "modelId": "model-kaden-ko-psx09hp-1aama",
      "outdoorUnitId": "ou-kaden-ko-psx09hp-1aama",
      "indoorUnitId": "iu-ki-psx09wm-1aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx12hp-1aama-ki-psx12wm-1aama",
      "slug": "kaden-ko-psx12hp-1aama-ki-psx12wm-1aama",
      "modelId": "model-kaden-ko-psx12hp-1aama",
      "outdoorUnitId": "ou-kaden-ko-psx12hp-1aama",
      "indoorUnitId": "iu-ki-psx12wm-1aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx18hp-2aama-kib-psx18wm-2aama",
      "slug": "kaden-kob-psx18hp-2aama-kib-psx18wm-2aama",
      "modelId": "model-kaden-kob-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx18hp-2aama",
      "indoorUnitId": "iu-kib-psx18wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx18hp-2aama-ki-psx18wm-2aama",
      "slug": "kaden-ko-psx18hp-2aama-ki-psx18wm-2aama",
      "modelId": "model-kaden-ko-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx18hp-2aama",
      "indoorUnitId": "iu-ki-psx18wm-2aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx12hp-1aama-kib-psx12wm-1aama",
      "slug": "kaden-kob-psx12hp-1aama-kib-psx12wm-1aama",
      "modelId": "model-kaden-kob-psx12hp-1aama",
      "outdoorUnitId": "ou-kaden-kob-psx12hp-1aama",
      "indoorUnitId": "iu-kib-psx12wm-1aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.4,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps548hp-2aama-iu-46493",
      "slug": "kaden-kob-hh-ps548hp-2aama-iu-46493",
      "modelId": "model-kaden-kob-hh-ps548hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps548hp-2aama",
      "indoorUnitId": "iu-iu-46493",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx12hp-2aama-kib-psx12cw-2aama",
      "slug": "kaden-kob-hh-psx12hp-2aama-kib-psx12cw-2aama",
      "modelId": "model-kaden-kob-hh-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12cw-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps327hp-2aama-iu-46489",
      "slug": "kaden-kob-hh-ps327hp-2aama-iu-46489",
      "modelId": "model-kaden-kob-hh-ps327hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps327hp-2aama",
      "indoorUnitId": "iu-iu-46489",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx24hp-2aama-kib-psx24wm-2aama",
      "slug": "kaden-kob-psx24hp-2aama-kib-psx24wm-2aama",
      "modelId": "model-kaden-kob-psx24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx24hp-2aama",
      "indoorUnitId": "iu-kib-psx24wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps648hp-2aama-iu-46495",
      "slug": "kaden-kob-hh-ps648hp-2aama-iu-46495",
      "modelId": "model-kaden-kob-hh-ps648hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps648hp-2aama",
      "indoorUnitId": "iu-iu-46495",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps536hp-2aama-iu-46492",
      "slug": "kaden-kob-hh-ps536hp-2aama-iu-46492",
      "modelId": "model-kaden-kob-hh-ps536hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps536hp-2aama",
      "indoorUnitId": "iu-iu-46492",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps436hp-2aama-iu-46491",
      "slug": "kaden-kob-hh-ps436hp-2aama-iu-46491",
      "modelId": "model-kaden-kob-hh-ps436hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps436hp-2aama",
      "indoorUnitId": "iu-iu-46491",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps427hp-2aama-iu-46490",
      "slug": "kaden-kob-hh-ps427hp-2aama-iu-46490",
      "modelId": "model-kaden-kob-hh-ps427hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps427hp-2aama",
      "indoorUnitId": "iu-iu-46490",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-ps218hp-2aama-iu-46470",
      "slug": "kaden-ko-ps218hp-2aama-iu-46470",
      "modelId": "model-kaden-ko-ps218hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-ps218hp-2aama",
      "indoorUnitId": "iu-iu-46470",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.9,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx12hp-2aama-ki-psx12ct-2aama",
      "slug": "kaden-ko-psx12hp-2aama-ki-psx12ct-2aama",
      "modelId": "model-kaden-ko-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx12hp-2aama",
      "indoorUnitId": "iu-ki-psx12ct-2aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx09hp-2aama-kib-psx09ct-2aama",
      "slug": "kaden-kob-hh-psx09hp-2aama-kib-psx09ct-2aama",
      "modelId": "model-kaden-kob-hh-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.6,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx09hp-2aama-ki-psx09cw-2aama",
      "slug": "kaden-ko-psx09hp-2aama-ki-psx09cw-2aama",
      "modelId": "model-kaden-ko-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx09hp-2aama",
      "indoorUnitId": "iu-ki-psx09cw-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps655hp-2aama-iu-46496",
      "slug": "kaden-kob-hh-ps655hp-2aama-iu-46496",
      "modelId": "model-kaden-kob-hh-ps655hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps655hp-2aama",
      "indoorUnitId": "iu-iu-46496",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx12hp-2aama-kib-psx12ct-2aama",
      "slug": "kaden-kob-hh-psx12hp-2aama-kib-psx12ct-2aama",
      "modelId": "model-kaden-kob-hh-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-ps555hp-2aama-iu-46494",
      "slug": "kaden-kob-hh-ps555hp-2aama-iu-46494",
      "modelId": "model-kaden-kob-hh-ps555hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-ps555hp-2aama",
      "indoorUnitId": "iu-iu-46494",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx18hp-2aama-kib-psx18cw-2aama",
      "slug": "kaden-kob-psx18hp-2aama-kib-psx18cw-2aama",
      "modelId": "model-kaden-kob-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx18hp-2aama",
      "indoorUnitId": "iu-kib-psx18cw-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx12hp-2aama-kib-psx12cw-2aama",
      "slug": "kaden-kob-psx12hp-2aama-kib-psx12cw-2aama",
      "modelId": "model-kaden-kob-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12cw-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx09hp-2aama-kib-psx09cw-2aama",
      "slug": "kaden-kob-psx09hp-2aama-kib-psx09cw-2aama",
      "modelId": "model-kaden-kob-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09cw-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.1,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx12hp-2aama-ki-psx12cw-2aama",
      "slug": "kaden-ko-psx12hp-2aama-ki-psx12cw-2aama",
      "modelId": "model-kaden-ko-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx12hp-2aama",
      "indoorUnitId": "iu-ki-psx12cw-2aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx06hp-2aama-kib-psx06cw-2aama",
      "slug": "kaden-kob-hh-psx06hp-2aama-kib-psx06cw-2aama",
      "modelId": "model-kaden-kob-hh-psx06hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx06hp-2aama",
      "indoorUnitId": "iu-kib-psx06cw-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx24hp-2aama-ki-psx24wm-2aama",
      "slug": "kaden-ko-psx24hp-2aama-ki-psx24wm-2aama",
      "modelId": "model-kaden-ko-psx24hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx24hp-2aama",
      "indoorUnitId": "iu-ki-psx24wm-2aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx24hp-2aama-kib-psx24ct-2aama",
      "slug": "kaden-kob-psx24hp-2aama-kib-psx24ct-2aama",
      "modelId": "model-kaden-kob-psx24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx24hp-2aama",
      "indoorUnitId": "iu-kib-psx24ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx18hp-2aama-ki-psx18cw-2aama",
      "slug": "kaden-ko-psx18hp-2aama-ki-psx18cw-2aama",
      "modelId": "model-kaden-ko-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx18hp-2aama",
      "indoorUnitId": "iu-ki-psx18cw-2aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx09hp-2aama-kib-psx09ct-2aama",
      "slug": "kaden-kob-psx09hp-2aama-kib-psx09ct-2aama",
      "modelId": "model-kaden-kob-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.6,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx24hp-2aama-ki-psx24ct-2aama",
      "slug": "kaden-ko-psx24hp-2aama-ki-psx24ct-2aama",
      "modelId": "model-kaden-ko-psx24hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx24hp-2aama",
      "indoorUnitId": "iu-ki-psx24ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx09hp-2aama-kib-psx09ls-2aama",
      "slug": "kaden-kob-hh-psx09hp-2aama-kib-psx09ls-2aama",
      "modelId": "model-kaden-kob-hh-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09ls-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx18hp-2aama-kib-psx18wm-2aama",
      "slug": "kaden-kob-hh-psx18hp-2aama-kib-psx18wm-2aama",
      "modelId": "model-kaden-kob-hh-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx18hp-2aama",
      "indoorUnitId": "iu-kib-psx18wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx12hp-2aama-kib-psx12ct-2aama",
      "slug": "kaden-kob-psx12hp-2aama-kib-psx12ct-2aama",
      "modelId": "model-kaden-kob-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx24hp-2aama-kib-psx24wm-2aama",
      "slug": "kaden-kob-hh-psx24hp-2aama-kib-psx24wm-2aama",
      "modelId": "model-kaden-kob-hh-psx24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx24hp-2aama",
      "indoorUnitId": "iu-kib-psx24wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx24hp-2aama-kib-psx24ct-2aama",
      "slug": "kaden-kob-hh-psx24hp-2aama-kib-psx24ct-2aama",
      "modelId": "model-kaden-kob-hh-psx24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx24hp-2aama",
      "indoorUnitId": "iu-kib-psx24ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx18hp-2aama-kib-psx18ct-2aama",
      "slug": "kaden-kob-psx18hp-2aama-kib-psx18ct-2aama",
      "modelId": "model-kaden-kob-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx18hp-2aama",
      "indoorUnitId": "iu-kib-psx18ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx18hp-2aama-kib-psx18cw-2aama",
      "slug": "kaden-kob-hh-psx18hp-2aama-kib-psx18cw-2aama",
      "modelId": "model-kaden-kob-hh-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx18hp-2aama",
      "indoorUnitId": "iu-kib-psx18cw-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.6,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx18hp-2aama-ki-psx18ct-2aama",
      "slug": "kaden-ko-psx18hp-2aama-ki-psx18ct-2aama",
      "modelId": "model-kaden-ko-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx18hp-2aama",
      "indoorUnitId": "iu-ki-psx18ct-2aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx09hp-2aama-kib-psx09hs-2aama",
      "slug": "kaden-kob-hh-psx09hp-2aama-kib-psx09hs-2aama",
      "modelId": "model-kaden-kob-hh-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09hs-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx12hp-2aama-kib-psx12hs-2aama",
      "slug": "kaden-kob-hh-psx12hp-2aama-kib-psx12hs-2aama",
      "modelId": "model-kaden-kob-hh-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12hs-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-psx09hp-2aama-ki-psx09ct-2aama",
      "slug": "kaden-ko-psx09hp-2aama-ki-psx09ct-2aama",
      "modelId": "model-kaden-ko-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-psx09hp-2aama",
      "indoorUnitId": "iu-ki-psx09ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx18hp-2aama-kib-psx18ct-2aama",
      "slug": "kaden-kob-hh-psx18hp-2aama-kib-psx18ct-2aama",
      "modelId": "model-kaden-kob-hh-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx18hp-2aama",
      "indoorUnitId": "iu-kib-psx18ct-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx12hp-2aama-kib-psx12ls-2aama",
      "slug": "kaden-kob-hh-psx12hp-2aama-kib-psx12ls-2aama",
      "modelId": "model-kaden-kob-hh-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12ls-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx18hp-2aama-kib-psx18hs-2aama",
      "slug": "kaden-kob-psx18hp-2aama-kib-psx18hs-2aama",
      "modelId": "model-kaden-kob-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx18hp-2aama",
      "indoorUnitId": "iu-kib-psx18hs-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx09hp-2aama-kib-psx09hs-2aama",
      "slug": "kaden-kob-psx09hp-2aama-kib-psx09hs-2aama",
      "modelId": "model-kaden-kob-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09hs-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.7,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx09hp-2aama-kib-psx09ls-2aama",
      "slug": "kaden-kob-psx09hp-2aama-kib-psx09ls-2aama",
      "modelId": "model-kaden-kob-psx09hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx09hp-2aama",
      "indoorUnitId": "iu-kib-psx09ls-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx12hp-2aama-kib-psx12hs-2aama",
      "slug": "kaden-kob-psx12hp-2aama-kib-psx12hs-2aama",
      "modelId": "model-kaden-kob-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12hs-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx33hp-2aama-kib-psx33wm-2aama",
      "slug": "kaden-kob-hh-psx33hp-2aama-kib-psx33wm-2aama",
      "modelId": "model-kaden-kob-hh-psx33hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx33hp-2aama",
      "indoorUnitId": "iu-kib-psx33wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx36hp-2aama-kib-psx36wm-2aama",
      "slug": "kaden-kob-hh-psx36hp-2aama-kib-psx36wm-2aama",
      "modelId": "model-kaden-kob-hh-psx36hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx36hp-2aama",
      "indoorUnitId": "iu-kib-psx36wm-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx12hp-2aama-kib-psx12ls-2aama",
      "slug": "kaden-kob-psx12hp-2aama-kib-psx12ls-2aama",
      "modelId": "model-kaden-kob-psx12hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx12hp-2aama",
      "indoorUnitId": "iu-kib-psx12ls-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx24hp-2aama-kib-psx24hs-2aama",
      "slug": "kaden-kob-hh-psx24hp-2aama-kib-psx24hs-2aama",
      "modelId": "model-kaden-kob-hh-psx24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx24hp-2aama",
      "indoorUnitId": "iu-kib-psx24hs-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux18hp-2aama-kib-hh-uux18ah3-2aama",
      "slug": "kaden-kob-hh-uux18hp-2aama-kib-hh-uux18ah3-2aama",
      "modelId": "model-kaden-kob-hh-uux18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux18hp-2aama",
      "indoorUnitId": "iu-kib-hh-uux18ah3-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux18hp-2aama-kib-uux18ah-2aama",
      "slug": "kaden-kob-hh-uux18hp-2aama-kib-uux18ah-2aama",
      "modelId": "model-kaden-kob-hh-uux18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux18hp-2aama",
      "indoorUnitId": "iu-kib-uux18ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-psx24hp-2aama-kib-psx24hs-2aama",
      "slug": "kaden-kob-psx24hp-2aama-kib-psx24hs-2aama",
      "modelId": "model-kaden-kob-psx24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-psx24hp-2aama",
      "indoorUnitId": "iu-kib-psx24hs-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-uux18hp-2aama-kib-uux18ah-2aama",
      "slug": "kaden-kob-uux18hp-2aama-kib-uux18ah-2aama",
      "modelId": "model-kaden-kob-uux18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-uux18hp-2aama",
      "indoorUnitId": "iu-kib-uux18ah-2aama",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.8,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux24hp-2aama-kib-hh-uux24ah3-2aama",
      "slug": "kaden-kob-hh-uux24hp-2aama-kib-hh-uux24ah3-2aama",
      "modelId": "model-kaden-kob-hh-uux24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux24hp-2aama",
      "indoorUnitId": "iu-kib-hh-uux24ah3-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-psx18hp-2aama-kib-psx18hs-2aama",
      "slug": "kaden-kob-hh-psx18hp-2aama-kib-psx18hs-2aama",
      "modelId": "model-kaden-kob-hh-psx18hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-psx18hp-2aama",
      "indoorUnitId": "iu-kib-psx18hs-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux24hp-2aama-kib-uux24ah-2aama",
      "slug": "kaden-kob-hh-uux24hp-2aama-kib-uux24ah-2aama",
      "modelId": "model-kaden-kob-hh-uux24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux24hp-2aama",
      "indoorUnitId": "iu-kib-uux24ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.3,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-uux24hp-2aama-kib-uux24ah-2aama",
      "slug": "kaden-kob-uux24hp-2aama-kib-uux24ah-2aama",
      "modelId": "model-kaden-kob-uux24hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-uux24hp-2aama",
      "indoorUnitId": "iu-kib-uux24ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.1,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux36hp-2aama-kib-hh-uux36ah3-2aama",
      "slug": "kaden-kob-hh-uux36hp-2aama-kib-hh-uux36ah3-2aama",
      "modelId": "model-kaden-kob-hh-uux36hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux36hp-2aama",
      "indoorUnitId": "iu-kib-hh-uux36ah3-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux60hp-2aama-kib-hh-uux60ah3-2aama",
      "slug": "kaden-kob-hh-uux60hp-2aama-kib-hh-uux60ah3-2aama",
      "modelId": "model-kaden-kob-hh-uux60hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux60hp-2aama",
      "indoorUnitId": "iu-kib-hh-uux60ah3-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux48hp-2aama-kib-hh-uux48ah3-2aama",
      "slug": "kaden-kob-hh-uux48hp-2aama-kib-hh-uux48ah3-2aama",
      "modelId": "model-kaden-kob-hh-uux48hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux48hp-2aama",
      "indoorUnitId": "iu-kib-hh-uux48ah3-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux30hp-2aama-kib-hh-uux30ah3-2aama",
      "slug": "kaden-kob-hh-uux30hp-2aama-kib-hh-uux30ah3-2aama",
      "modelId": "model-kaden-kob-hh-uux30hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux30hp-2aama",
      "indoorUnitId": "iu-kib-hh-uux30ah3-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-uus24hp-2aama-ki-uus24ahp-2aama",
      "slug": "kaden-ko-uus24hp-2aama-ki-uus24ahp-2aama",
      "modelId": "model-kaden-ko-uus24hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-uus24hp-2aama",
      "indoorUnitId": "iu-ki-uus24ahp-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-ko-uux24hp-2aama-ki-uux24ah-2aama",
      "slug": "kaden-ko-uux24hp-2aama-ki-uux24ah-2aama",
      "modelId": "model-kaden-ko-uux24hp-2aama",
      "outdoorUnitId": "ou-kaden-ko-uux24hp-2aama",
      "indoorUnitId": "iu-ki-uux24ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux30hp-2aama-kib-uux30ah-2aama",
      "slug": "kaden-kob-hh-uux30hp-2aama-kib-uux30ah-2aama",
      "modelId": "model-kaden-kob-hh-uux30hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux30hp-2aama",
      "indoorUnitId": "iu-kib-uux30ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux48hp-2aama-kib-uux48ah-2aama",
      "slug": "kaden-kob-hh-uux48hp-2aama-kib-uux48ah-2aama",
      "modelId": "model-kaden-kob-hh-uux48hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux48hp-2aama",
      "indoorUnitId": "iu-kib-uux48ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux36hp-2aama-kib-uux36ah-2aama",
      "slug": "kaden-kob-hh-uux36hp-2aama-kib-uux36ah-2aama",
      "modelId": "model-kaden-kob-hh-uux36hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux36hp-2aama",
      "indoorUnitId": "iu-kib-uux36ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-uux36hp-2aama-kib-uux36ah-2aama",
      "slug": "kaden-kob-uux36hp-2aama-kib-uux36ah-2aama",
      "modelId": "model-kaden-kob-uux36hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-uux36hp-2aama",
      "indoorUnitId": "iu-kib-uux36ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-hh-uux60hp-2aama-kib-uux60ah-2aama",
      "slug": "kaden-kob-hh-uux60hp-2aama-kib-uux60ah-2aama",
      "modelId": "model-kaden-kob-hh-uux60hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-hh-uux60hp-2aama",
      "indoorUnitId": "iu-kib-uux60ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-uux48hp-2aama-kib-uux48ah-2aama",
      "slug": "kaden-kob-uux48hp-2aama-kib-uux48ah-2aama",
      "modelId": "model-kaden-kob-uux48hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-uux48hp-2aama",
      "indoorUnitId": "iu-kib-uux48ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-48bam152l-kmah48tcbe",
      "slug": "kaden-kovh-48bam152l-kmah48tcbe",
      "modelId": "model-kaden-kovh-48bam152l",
      "outdoorUnitId": "ou-kaden-kovh-48bam152l",
      "indoorUnitId": "iu-kmah48tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-42bam152l-kmah60pcbetxv",
      "slug": "kaden-kovh-42bam152l-kmah60pcbetxv",
      "modelId": "model-kaden-kovh-42bam152l",
      "outdoorUnitId": "ou-kaden-kovh-42bam152l",
      "indoorUnitId": "iu-kmah60pcbetxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kob-uux60hp-2aama-kib-uux60ah-2aama",
      "slug": "kaden-kob-uux60hp-2aama-kib-uux60ah-2aama",
      "modelId": "model-kaden-kob-uux60hp-2aama",
      "outdoorUnitId": "ou-kaden-kob-uux60hp-2aama",
      "indoorUnitId": "iu-kib-uux60ah-2aama",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-18bam152l-kmah24pbbetxv",
      "slug": "kaden-kovh-18bam152l-kmah24pbbetxv",
      "modelId": "model-kaden-kovh-18bam152l",
      "outdoorUnitId": "ou-kaden-kovh-18bam152l",
      "indoorUnitId": "iu-kmah24pbbetxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-48bam152l-kmah48pcbe",
      "slug": "kaden-kovh-48bam152l-kmah48pcbe",
      "modelId": "model-kaden-kovh-48bam152l",
      "outdoorUnitId": "ou-kaden-kovh-48bam152l",
      "indoorUnitId": "iu-kmah48pcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-42bam152l-kmah60tcbe",
      "slug": "kaden-kovh-42bam152l-kmah60tcbe",
      "modelId": "model-kaden-kovh-42bam152l",
      "outdoorUnitId": "ou-kaden-kovh-42bam152l",
      "indoorUnitId": "iu-kmah60tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-48bam152l-kmah60tcbe",
      "slug": "kaden-kovh-48bam152l-kmah60tcbe",
      "modelId": "model-kaden-kovh-48bam152l",
      "outdoorUnitId": "ou-kaden-kovh-48bam152l",
      "indoorUnitId": "iu-kmah60tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-48bam152l-kmah60pcbe",
      "slug": "kaden-kovh-48bam152l-kmah60pcbe",
      "modelId": "model-kaden-kovh-48bam152l",
      "outdoorUnitId": "ou-kaden-kovh-48bam152l",
      "indoorUnitId": "iu-kmah60pcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-48bam152l-kmah61tcbe",
      "slug": "kaden-kovh-48bam152l-kmah61tcbe",
      "modelId": "model-kaden-kovh-48bam152l",
      "outdoorUnitId": "ou-kaden-kovh-48bam152l",
      "indoorUnitId": "iu-kmah61tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-30bam152l-kmah60tcbe",
      "slug": "kaden-kovh-30bam152l-kmah60tcbe",
      "modelId": "model-kaden-kovh-30bam152l",
      "outdoorUnitId": "ou-kaden-kovh-30bam152l",
      "indoorUnitId": "iu-kmah60tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-30bam152l-kvwh30tbbe",
      "slug": "kaden-kovh-30bam152l-kvwh30tbbe",
      "modelId": "model-kaden-kovh-30bam152l",
      "outdoorUnitId": "ou-kaden-kovh-30bam152l",
      "indoorUnitId": "iu-kvwh30tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-30bam152l-kvwh36tbbe",
      "slug": "kaden-kovh-30bam152l-kvwh36tbbe",
      "modelId": "model-kaden-kovh-30bam152l",
      "outdoorUnitId": "ou-kaden-kovh-30bam152l",
      "indoorUnitId": "iu-kvwh36tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-36bam152l-kmah48pcbetxv",
      "slug": "kaden-kovh-36bam152l-kmah48pcbetxv",
      "modelId": "model-kaden-kovh-36bam152l",
      "outdoorUnitId": "ou-kaden-kovh-36bam152l",
      "indoorUnitId": "iu-kmah48pcbetxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-36bam152l-kmah48tcbe",
      "slug": "kaden-kovh-36bam152l-kmah48tcbe",
      "modelId": "model-kaden-kovh-36bam152l",
      "outdoorUnitId": "ou-kaden-kovh-36bam152l",
      "indoorUnitId": "iu-kmah48tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-36bam152l-kmah60pcbetxv",
      "slug": "kaden-kovh-36bam152l-kmah60pcbetxv",
      "modelId": "model-kaden-kovh-36bam152l",
      "outdoorUnitId": "ou-kaden-kovh-36bam152l",
      "indoorUnitId": "iu-kmah60pcbetxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-36bam152l-kmah60tcbe",
      "slug": "kaden-kovh-36bam152l-kmah60tcbe",
      "modelId": "model-kaden-kovh-36bam152l",
      "outdoorUnitId": "ou-kaden-kovh-36bam152l",
      "indoorUnitId": "iu-kmah60tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-42bam152l-kmah48pcbetxv",
      "slug": "kaden-kovh-42bam152l-kmah48pcbetxv",
      "modelId": "model-kaden-kovh-42bam152l",
      "outdoorUnitId": "ou-kaden-kovh-42bam152l",
      "indoorUnitId": "iu-kmah48pcbetxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-42bam152l-kmah48tcbe",
      "slug": "kaden-kovh-42bam152l-kmah48tcbe",
      "modelId": "model-kaden-kovh-42bam152l",
      "outdoorUnitId": "ou-kaden-kovh-42bam152l",
      "indoorUnitId": "iu-kmah48tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-30bam152l-kmah36tbbe",
      "slug": "kaden-kovh-30bam152l-kmah36tbbe",
      "modelId": "model-kaden-kovh-30bam152l",
      "outdoorUnitId": "ou-kaden-kovh-30bam152l",
      "indoorUnitId": "iu-kmah36tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-30bam152l-kmah60pcbe",
      "slug": "kaden-kovh-30bam152l-kmah60pcbe",
      "modelId": "model-kaden-kovh-30bam152l",
      "outdoorUnitId": "ou-kaden-kovh-30bam152l",
      "indoorUnitId": "iu-kmah60pcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-30bam152l-kmah48tcbe",
      "slug": "kaden-kovh-30bam152l-kmah48tcbe",
      "modelId": "model-kaden-kovh-30bam152l",
      "outdoorUnitId": "ou-kaden-kovh-30bam152l",
      "indoorUnitId": "iu-kmah48tcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-30bam152l-kmah48pcbe",
      "slug": "kaden-kovh-30bam152l-kmah48pcbe",
      "modelId": "model-kaden-kovh-30bam152l",
      "outdoorUnitId": "ou-kaden-kovh-30bam152l",
      "indoorUnitId": "iu-kmah48pcbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-24bam152l-kvwh36tbbe",
      "slug": "kaden-kovh-24bam152l-kvwh36tbbe",
      "modelId": "model-kaden-kovh-24bam152l",
      "outdoorUnitId": "ou-kaden-kovh-24bam152l",
      "indoorUnitId": "iu-kvwh36tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-30bam152l-kmah36pbbetxv",
      "slug": "kaden-kovh-30bam152l-kmah36pbbetxv",
      "modelId": "model-kaden-kovh-30bam152l",
      "outdoorUnitId": "ou-kaden-kovh-30bam152l",
      "indoorUnitId": "iu-kmah36pbbetxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-24bam152l-kvwh30tbbe",
      "slug": "kaden-kovh-24bam152l-kvwh30tbbe",
      "modelId": "model-kaden-kovh-24bam152l",
      "outdoorUnitId": "ou-kaden-kovh-24bam152l",
      "indoorUnitId": "iu-kvwh30tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-18bam152l-kmah24tbbe",
      "slug": "kaden-kovh-18bam152l-kmah24tbbe",
      "modelId": "model-kaden-kovh-18bam152l",
      "outdoorUnitId": "ou-kaden-kovh-18bam152l",
      "indoorUnitId": "iu-kmah24tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-18bam152l-kmah36pbbetxv",
      "slug": "kaden-kovh-18bam152l-kmah36pbbetxv",
      "modelId": "model-kaden-kovh-18bam152l",
      "outdoorUnitId": "ou-kaden-kovh-18bam152l",
      "indoorUnitId": "iu-kmah36pbbetxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-18bam152l-kmah36tbbe",
      "slug": "kaden-kovh-18bam152l-kmah36tbbe",
      "modelId": "model-kaden-kovh-18bam152l",
      "outdoorUnitId": "ou-kaden-kovh-18bam152l",
      "indoorUnitId": "iu-kmah36tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-18bam152l-kvwh18tabe",
      "slug": "kaden-kovh-18bam152l-kvwh18tabe",
      "modelId": "model-kaden-kovh-18bam152l",
      "outdoorUnitId": "ou-kaden-kovh-18bam152l",
      "indoorUnitId": "iu-kvwh18tabe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-18bam152l-kvwh24tabe",
      "slug": "kaden-kovh-18bam152l-kvwh24tabe",
      "modelId": "model-kaden-kovh-18bam152l",
      "outdoorUnitId": "ou-kaden-kovh-18bam152l",
      "indoorUnitId": "iu-kvwh24tabe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-24bam152l-kmah24pbbe",
      "slug": "kaden-kovh-24bam152l-kmah24pbbe",
      "modelId": "model-kaden-kovh-24bam152l",
      "outdoorUnitId": "ou-kaden-kovh-24bam152l",
      "indoorUnitId": "iu-kmah24pbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-24bam152l-kmah24tbbe",
      "slug": "kaden-kovh-24bam152l-kmah24tbbe",
      "modelId": "model-kaden-kovh-24bam152l",
      "outdoorUnitId": "ou-kaden-kovh-24bam152l",
      "indoorUnitId": "iu-kmah24tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-24bam152l-kmah36pbbe",
      "slug": "kaden-kovh-24bam152l-kmah36pbbe",
      "modelId": "model-kaden-kovh-24bam152l",
      "outdoorUnitId": "ou-kaden-kovh-24bam152l",
      "indoorUnitId": "iu-kmah36pbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kaden-kovh-24bam152l-kmah36tbbe",
      "slug": "kaden-kovh-24bam152l-kmah36tbbe",
      "modelId": "model-kaden-kovh-24bam152l",
      "outdoorUnitId": "ou-kaden-kovh-24bam152l",
      "indoorUnitId": "iu-kmah36tbbe",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-kaden-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "performanceProfiles": [],
  "certifications": [],
  "warranties": [],
  "priceObservations": [],
  "editorial": []
};
