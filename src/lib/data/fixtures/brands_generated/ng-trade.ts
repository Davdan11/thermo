import type { BrandDataset } from "../../types";

export const brand_ng_tradeDataset: BrandDataset = {
  "brand": {
    "id": "brand-ng-trade",
    "slug": "ng-trade",
    "name": "NG Trade",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour NG Trade",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ng-trade-epa",
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
      "id": "series-ng-trade-omeg-series",
      "slug": "ng-trade-omeg-series",
      "name": "OMEG series",
      "brandId": "brand-ng-trade",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série OMEG series de NG Trade",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ng-trade-oms-series",
      "slug": "ng-trade-oms-series",
      "name": "OMS Series",
      "brandId": "brand-ng-trade",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série OMS Series de NG Trade",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ng-trade-mob-series",
      "slug": "ng-trade-mob-series",
      "name": "MOB series",
      "brandId": "brand-ng-trade",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série MOB series de NG Trade",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ng-trade-obm-series",
      "slug": "ng-trade-obm-series",
      "name": "OBM Series",
      "brandId": "brand-ng-trade",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série OBM Series de NG Trade",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ng-trade-obmh-series",
      "slug": "ng-trade-obmh-series",
      "name": "OBMH series",
      "brandId": "brand-ng-trade",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série OBMH series de NG Trade",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ng-trade-mobmh-series",
      "slug": "ng-trade-mobmh-series",
      "name": "MOBMH series",
      "brandId": "brand-ng-trade",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MOBMH series de NG Trade",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ng-trade-ezc-series",
      "slug": "ng-trade-ezc-series",
      "name": "EZC Series",
      "brandId": "brand-ng-trade",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série EZC Series de NG Trade",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ng-trade-omega091e",
      "slug": "ng-trade-omega091e",
      "name": "NG Trade OMEGA091E",
      "seriesId": "series-ng-trade-omeg-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMEGA091E",
      "normalizedModelNumber": "omega091e",
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
      "id": "model-ng-trade-omstar091e",
      "slug": "ng-trade-omstar091e",
      "name": "NG Trade OMSTAR091E",
      "seriesId": "series-ng-trade-oms-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMSTAR091E",
      "normalizedModelNumber": "omstar091e",
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
      "id": "model-ng-trade-omega181e",
      "slug": "ng-trade-omega181e",
      "name": "NG Trade OMEGA181E",
      "seriesId": "series-ng-trade-omeg-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMEGA181E",
      "normalizedModelNumber": "omega181e",
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
      "id": "model-ng-trade-omstar181e",
      "slug": "ng-trade-omstar181e",
      "name": "NG Trade OMSTAR181E",
      "seriesId": "series-ng-trade-oms-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMSTAR181E",
      "normalizedModelNumber": "omstar181e",
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
      "id": "model-ng-trade-mobmh270c",
      "slug": "ng-trade-mobmh270c",
      "name": "NG Trade MOBMH270C",
      "seriesId": "series-ng-trade-mob-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "MOBMH270C",
      "normalizedModelNumber": "mobmh270c",
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
      "id": "model-ng-trade-omstar241e",
      "slug": "ng-trade-omstar241e",
      "name": "NG Trade OMSTAR241E",
      "seriesId": "series-ng-trade-oms-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMSTAR241E",
      "normalizedModelNumber": "omstar241e",
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
      "id": "model-ng-trade-omstar120e",
      "slug": "ng-trade-omstar120e",
      "name": "NG Trade OMSTAR120E",
      "seriesId": "series-ng-trade-oms-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMSTAR120E",
      "normalizedModelNumber": "omstar120e",
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
      "id": "model-ng-trade-omstar121e",
      "slug": "ng-trade-omstar121e",
      "name": "NG Trade OMSTAR121E",
      "seriesId": "series-ng-trade-oms-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMSTAR121E",
      "normalizedModelNumber": "omstar121e",
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
      "id": "model-ng-trade-omega121e",
      "slug": "ng-trade-omega121e",
      "name": "NG Trade OMEGA121E",
      "seriesId": "series-ng-trade-omeg-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMEGA121E",
      "normalizedModelNumber": "omega121e",
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
      "id": "model-ng-trade-mobmh360d",
      "slug": "ng-trade-mobmh360d",
      "name": "NG Trade MOBMH360D",
      "seriesId": "series-ng-trade-mob-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "MOBMH360D",
      "normalizedModelNumber": "mobmh360d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-ng-trade-mobmh180d",
      "slug": "ng-trade-mobmh180d",
      "name": "NG Trade MOBMH180D",
      "seriesId": "series-ng-trade-mob-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "MOBMH180D",
      "normalizedModelNumber": "mobmh180d",
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
      "id": "model-ng-trade-mobmh270d",
      "slug": "ng-trade-mobmh270d",
      "name": "NG Trade MOBMH270D",
      "seriesId": "series-ng-trade-mob-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "MOBMH270D",
      "normalizedModelNumber": "mobmh270d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 26600,
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
      "id": "model-ng-trade-omega120e",
      "slug": "ng-trade-omega120e",
      "name": "NG Trade OMEGA120E",
      "seriesId": "series-ng-trade-omeg-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMEGA120E",
      "normalizedModelNumber": "omega120e",
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
      "id": "model-ng-trade-obmh301b",
      "slug": "ng-trade-obmh301b",
      "name": "NG Trade OBMH301B",
      "seriesId": "series-ng-trade-obm-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OBMH301B",
      "normalizedModelNumber": "obmh301b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
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
      "id": "model-ng-trade-obmh091b",
      "slug": "ng-trade-obmh091b",
      "name": "NG Trade OBMH091B",
      "seriesId": "series-ng-trade-obm-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OBMH091B",
      "normalizedModelNumber": "obmh091b",
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
      "id": "model-ng-trade-obmh090b",
      "slug": "ng-trade-obmh090b",
      "name": "NG Trade OBMH090B",
      "seriesId": "series-ng-trade-obm-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OBMH090B",
      "normalizedModelNumber": "obmh090b",
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
      "id": "model-ng-trade-obmh090a",
      "slug": "ng-trade-obmh090a",
      "name": "NG Trade OBMH090A",
      "seriesId": "series-ng-trade-obmh-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OBMH090A",
      "normalizedModelNumber": "obmh090a",
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
      "id": "model-ng-trade-mobmh480d",
      "slug": "ng-trade-mobmh480d",
      "name": "NG Trade MOBMH480D",
      "seriesId": "series-ng-trade-mob-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "MOBMH480D",
      "normalizedModelNumber": "mobmh480d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
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
      "id": "model-ng-trade-mobmh180c",
      "slug": "ng-trade-mobmh180c",
      "name": "NG Trade MOBMH180C",
      "seriesId": "series-ng-trade-mobmh-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "MOBMH180C",
      "normalizedModelNumber": "mobmh180c",
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
      "id": "model-ng-trade-omega241e",
      "slug": "ng-trade-omega241e",
      "name": "NG Trade OMEGA241E",
      "seriesId": "series-ng-trade-omeg-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OMEGA241E",
      "normalizedModelNumber": "omega241e",
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
      "id": "model-ng-trade-obmh181b",
      "slug": "ng-trade-obmh181b",
      "name": "NG Trade OBMH181B",
      "seriesId": "series-ng-trade-obm-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OBMH181B",
      "normalizedModelNumber": "obmh181b",
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
      "id": "model-ng-trade-ezceno18k",
      "slug": "ng-trade-ezceno18k",
      "name": "NG Trade EZCENO18K",
      "seriesId": "series-ng-trade-ezc-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "EZCENO18K",
      "normalizedModelNumber": "ezceno18k",
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
      "id": "model-ng-trade-obmh241b",
      "slug": "ng-trade-obmh241b",
      "name": "NG Trade OBMH241B",
      "seriesId": "series-ng-trade-obm-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "OBMH241B",
      "normalizedModelNumber": "obmh241b",
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
      "id": "model-ng-trade-ezceno24k",
      "slug": "ng-trade-ezceno24k",
      "name": "NG Trade EZCENO24K",
      "seriesId": "series-ng-trade-ezc-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "EZCENO24K",
      "normalizedModelNumber": "ezceno24k",
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
      "id": "model-ng-trade-ezceno36k",
      "slug": "ng-trade-ezceno36k",
      "name": "NG Trade EZCENO36K",
      "seriesId": "series-ng-trade-ezc-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "EZCENO36K",
      "normalizedModelNumber": "ezceno36k",
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
      "id": "model-ng-trade-ezceno48k",
      "slug": "ng-trade-ezceno48k",
      "name": "NG Trade EZCENO48K",
      "seriesId": "series-ng-trade-ezc-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "EZCENO48K",
      "normalizedModelNumber": "ezceno48k",
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
      "id": "model-ng-trade-ezceno60k",
      "slug": "ng-trade-ezceno60k",
      "name": "NG Trade EZCENO60K",
      "seriesId": "series-ng-trade-ezc-series",
      "brandId": "brand-ng-trade",
      "modelNumber": "EZCENO60K",
      "normalizedModelNumber": "ezceno60k",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-ng-trade-omega091e",
      "modelNumber": "OMEGA091E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ng-trade-omstar091e",
      "modelNumber": "OMSTAR091E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-omega181e",
      "modelNumber": "OMEGA181E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ng-trade-omstar181e",
      "modelNumber": "OMSTAR181E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-mobmh270c",
      "modelNumber": "MOBMH270C",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ng-trade-omstar241e",
      "modelNumber": "OMSTAR241E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-omstar120e",
      "modelNumber": "OMSTAR120E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-omstar121e",
      "modelNumber": "OMSTAR121E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-omega121e",
      "modelNumber": "OMEGA121E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ng-trade-mobmh360d",
      "modelNumber": "MOBMH360D",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-mobmh180d",
      "modelNumber": "MOBMH180D",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-mobmh270d",
      "modelNumber": "MOBMH270D",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-omega120e",
      "modelNumber": "OMEGA120E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ng-trade-obmh301b",
      "modelNumber": "OBMH301B",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-obmh091b",
      "modelNumber": "OBMH091B",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-obmh090b",
      "modelNumber": "OBMH090B",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-obmh090a",
      "modelNumber": "OBMH090A",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ng-trade-mobmh480d",
      "modelNumber": "MOBMH480D",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-mobmh180c",
      "modelNumber": "MOBMH180C",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ng-trade-omega241e",
      "modelNumber": "OMEGA241E",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ng-trade-obmh181b",
      "modelNumber": "OBMH181B",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-ezceno18k",
      "modelNumber": "EZCENO18K",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-obmh241b",
      "modelNumber": "OBMH241B",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-ezceno24k",
      "modelNumber": "EZCENO24K",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-ezceno36k",
      "modelNumber": "EZCENO36K",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-ezceno48k",
      "modelNumber": "EZCENO48K",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ng-trade-ezceno60k",
      "modelNumber": "EZCENO60K",
      "brandId": "brand-ng-trade",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-imega091e",
      "modelNumber": "IMEGA091E",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imstar091e",
      "modelNumber": "IMSTAR091E",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imega181e",
      "modelNumber": "IMEGA181E*",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imstar181e",
      "modelNumber": "IMSTAR181E",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49687",
      "modelNumber": "IU-49687",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imstar241e",
      "modelNumber": "IMSTAR241E",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imstar120e",
      "modelNumber": "IMSTAR120E",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imstar121e",
      "modelNumber": "IMSTAR121E",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imega121e",
      "modelNumber": "IMEGA121E",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49689",
      "modelNumber": "IU-49689",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49686",
      "modelNumber": "IU-49686",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49688",
      "modelNumber": "IU-49688",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imega120e",
      "modelNumber": "IMEGA120E",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-ibmh301b",
      "modelNumber": "IBMH301B",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-ibmh091b",
      "modelNumber": "IBMH091B",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-ibmh090b",
      "modelNumber": "IBMH090B",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-ibmh090a",
      "modelNumber": "IBMH090A",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49690",
      "modelNumber": "IU-49690",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49685",
      "modelNumber": "IU-49685",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-imega241e",
      "modelNumber": "IMEGA241E*",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-ibmh181b",
      "modelNumber": "IBMH181B",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-ezceni18k",
      "modelNumber": "EZCENI18K",
      "brandId": "brand-ng-trade",
      "type": "central-ducted"
    },
    {
      "id": "iu-ibmh241b",
      "modelNumber": "IBMH241B",
      "brandId": "brand-ng-trade",
      "type": "wall-single"
    },
    {
      "id": "iu-ezceni24k",
      "modelNumber": "EZCENI24K",
      "brandId": "brand-ng-trade",
      "type": "central-ducted"
    },
    {
      "id": "iu-ezceni36k",
      "modelNumber": "EZCENI36K",
      "brandId": "brand-ng-trade",
      "type": "central-ducted"
    },
    {
      "id": "iu-ezceni48k",
      "modelNumber": "EZCENI48K",
      "brandId": "brand-ng-trade",
      "type": "central-ducted"
    },
    {
      "id": "iu-ezceni60k",
      "modelNumber": "EZCENI60K",
      "brandId": "brand-ng-trade",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-ng-trade-omega091e-imega091e",
      "slug": "ng-trade-omega091e-imega091e",
      "modelId": "model-ng-trade-omega091e",
      "outdoorUnitId": "ou-ng-trade-omega091e",
      "indoorUnitId": "iu-imega091e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omstar091e-imstar091e",
      "slug": "ng-trade-omstar091e-imstar091e",
      "modelId": "model-ng-trade-omstar091e",
      "outdoorUnitId": "ou-ng-trade-omstar091e",
      "indoorUnitId": "iu-imstar091e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omega181e-imega181e",
      "slug": "ng-trade-omega181e-imega181e",
      "modelId": "model-ng-trade-omega181e",
      "outdoorUnitId": "ou-ng-trade-omega181e",
      "indoorUnitId": "iu-imega181e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omstar181e-imstar181e",
      "slug": "ng-trade-omstar181e-imstar181e",
      "modelId": "model-ng-trade-omstar181e",
      "outdoorUnitId": "ou-ng-trade-omstar181e",
      "indoorUnitId": "iu-imstar181e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-mobmh270c-iu-49687",
      "slug": "ng-trade-mobmh270c-iu-49687",
      "modelId": "model-ng-trade-mobmh270c",
      "outdoorUnitId": "ou-ng-trade-mobmh270c",
      "indoorUnitId": "iu-iu-49687",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omstar241e-imstar241e",
      "slug": "ng-trade-omstar241e-imstar241e",
      "modelId": "model-ng-trade-omstar241e",
      "outdoorUnitId": "ou-ng-trade-omstar241e",
      "indoorUnitId": "iu-imstar241e",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omstar120e-imstar120e",
      "slug": "ng-trade-omstar120e-imstar120e",
      "modelId": "model-ng-trade-omstar120e",
      "outdoorUnitId": "ou-ng-trade-omstar120e",
      "indoorUnitId": "iu-imstar120e",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.2,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omstar121e-imstar121e",
      "slug": "ng-trade-omstar121e-imstar121e",
      "modelId": "model-ng-trade-omstar121e",
      "outdoorUnitId": "ou-ng-trade-omstar121e",
      "indoorUnitId": "iu-imstar121e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omega121e-imega121e",
      "slug": "ng-trade-omega121e-imega121e",
      "modelId": "model-ng-trade-omega121e",
      "outdoorUnitId": "ou-ng-trade-omega121e",
      "indoorUnitId": "iu-imega121e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-mobmh360d-iu-49689",
      "slug": "ng-trade-mobmh360d-iu-49689",
      "modelId": "model-ng-trade-mobmh360d",
      "outdoorUnitId": "ou-ng-trade-mobmh360d",
      "indoorUnitId": "iu-iu-49689",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-mobmh180d-iu-49686",
      "slug": "ng-trade-mobmh180d-iu-49686",
      "modelId": "model-ng-trade-mobmh180d",
      "outdoorUnitId": "ou-ng-trade-mobmh180d",
      "indoorUnitId": "iu-iu-49686",
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
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-mobmh270d-iu-49688",
      "slug": "ng-trade-mobmh270d-iu-49688",
      "modelId": "model-ng-trade-mobmh270d",
      "outdoorUnitId": "ou-ng-trade-mobmh270d",
      "indoorUnitId": "iu-iu-49688",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omega120e-imega120e",
      "slug": "ng-trade-omega120e-imega120e",
      "modelId": "model-ng-trade-omega120e",
      "outdoorUnitId": "ou-ng-trade-omega120e",
      "indoorUnitId": "iu-imega120e",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-obmh301b-ibmh301b",
      "slug": "ng-trade-obmh301b-ibmh301b",
      "modelId": "model-ng-trade-obmh301b",
      "outdoorUnitId": "ou-ng-trade-obmh301b",
      "indoorUnitId": "iu-ibmh301b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-obmh091b-ibmh091b",
      "slug": "ng-trade-obmh091b-ibmh091b",
      "modelId": "model-ng-trade-obmh091b",
      "outdoorUnitId": "ou-ng-trade-obmh091b",
      "indoorUnitId": "iu-ibmh091b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.6,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-obmh090b-ibmh090b",
      "slug": "ng-trade-obmh090b-ibmh090b",
      "modelId": "model-ng-trade-obmh090b",
      "outdoorUnitId": "ou-ng-trade-obmh090b",
      "indoorUnitId": "iu-ibmh090b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-obmh090a-ibmh090a",
      "slug": "ng-trade-obmh090a-ibmh090a",
      "modelId": "model-ng-trade-obmh090a",
      "outdoorUnitId": "ou-ng-trade-obmh090a",
      "indoorUnitId": "iu-ibmh090a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-mobmh480d-iu-49690",
      "slug": "ng-trade-mobmh480d-iu-49690",
      "modelId": "model-ng-trade-mobmh480d",
      "outdoorUnitId": "ou-ng-trade-mobmh480d",
      "indoorUnitId": "iu-iu-49690",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-mobmh180c-iu-49685",
      "slug": "ng-trade-mobmh180c-iu-49685",
      "modelId": "model-ng-trade-mobmh180c",
      "outdoorUnitId": "ou-ng-trade-mobmh180c",
      "indoorUnitId": "iu-iu-49685",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-omega241e-imega241e",
      "slug": "ng-trade-omega241e-imega241e",
      "modelId": "model-ng-trade-omega241e",
      "outdoorUnitId": "ou-ng-trade-omega241e",
      "indoorUnitId": "iu-imega241e",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-obmh181b-ibmh181b",
      "slug": "ng-trade-obmh181b-ibmh181b",
      "modelId": "model-ng-trade-obmh181b",
      "outdoorUnitId": "ou-ng-trade-obmh181b",
      "indoorUnitId": "iu-ibmh181b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-ezceno18k-ezceni18k",
      "slug": "ng-trade-ezceno18k-ezceni18k",
      "modelId": "model-ng-trade-ezceno18k",
      "outdoorUnitId": "ou-ng-trade-ezceno18k",
      "indoorUnitId": "iu-ezceni18k",
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
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-obmh241b-ibmh241b",
      "slug": "ng-trade-obmh241b-ibmh241b",
      "modelId": "model-ng-trade-obmh241b",
      "outdoorUnitId": "ou-ng-trade-obmh241b",
      "indoorUnitId": "iu-ibmh241b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-ezceno24k-ezceni24k",
      "slug": "ng-trade-ezceno24k-ezceni24k",
      "modelId": "model-ng-trade-ezceno24k",
      "outdoorUnitId": "ou-ng-trade-ezceno24k",
      "indoorUnitId": "iu-ezceni24k",
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
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-ezceno36k-ezceni36k",
      "slug": "ng-trade-ezceno36k-ezceni36k",
      "modelId": "model-ng-trade-ezceno36k",
      "outdoorUnitId": "ou-ng-trade-ezceno36k",
      "indoorUnitId": "iu-ezceni36k",
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
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-ezceno48k-ezceni48k",
      "slug": "ng-trade-ezceno48k-ezceni48k",
      "modelId": "model-ng-trade-ezceno48k",
      "outdoorUnitId": "ou-ng-trade-ezceno48k",
      "indoorUnitId": "iu-ezceni48k",
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
          "sourceId": "src-ng-trade-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ng-trade-ezceno60k-ezceni60k",
      "slug": "ng-trade-ezceno60k-ezceni60k",
      "modelId": "model-ng-trade-ezceno60k",
      "outdoorUnitId": "ou-ng-trade-ezceno60k",
      "indoorUnitId": "iu-ezceni60k",
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
          "sourceId": "src-ng-trade-epa",
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
