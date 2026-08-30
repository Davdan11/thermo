import type { BrandDataset } from "../../types";

export const brand_infinitylivingDataset: BrandDataset = {
  "brand": {
    "id": "brand-infinityliving",
    "slug": "infinityliving",
    "name": "InfinityLiving",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour InfinityLiving",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-infinityliving-epa",
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
      "id": "series-infinityliving-ez-series",
      "slug": "infinityliving-ez-series",
      "name": "EZ Series",
      "brandId": "brand-infinityliving",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EZ Series de InfinityLiving",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-infinityliving-es-series",
      "slug": "infinityliving-es-series",
      "name": "ES SERIES",
      "brandId": "brand-infinityliving",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ES SERIES de InfinityLiving",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-infinityliving-ez-18z-m2b",
      "slug": "infinityliving-ez-18z-m2b",
      "name": "InfinityLiving EZ-18Z-M2B",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-18Z-M2B",
      "normalizedModelNumber": "ez-18z-m2b",
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
      "id": "model-infinityliving-ez-12zpl-hp115b",
      "slug": "infinityliving-ez-12zpl-hp115b",
      "name": "InfinityLiving EZ-12ZPL-HP115B",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-12ZPL-HP115B",
      "normalizedModelNumber": "ez-12zpl-hp115b",
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
      "id": "model-infinityliving-ez-27z-m3b",
      "slug": "infinityliving-ez-27z-m3b",
      "name": "InfinityLiving EZ-27Z-M3B",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-27Z-M3B",
      "normalizedModelNumber": "ez-27z-m3b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 26000,
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
      "id": "model-infinityliving-ez-36z-m4b",
      "slug": "infinityliving-ez-36z-m4b",
      "name": "InfinityLiving EZ-36Z-M4B",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-36Z-M4B",
      "normalizedModelNumber": "ez-36z-m4b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
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
      "id": "model-infinityliving-ez-18zpl-hp230",
      "slug": "infinityliving-ez-18zpl-hp230",
      "name": "InfinityLiving EZ-18ZPL-HP230",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-18ZPL-HP230",
      "normalizedModelNumber": "ez-18zpl-hp230",
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
      "id": "model-infinityliving-ez-24zpl-hp230b",
      "slug": "infinityliving-ez-24zpl-hp230b",
      "name": "InfinityLiving EZ-24ZPL-HP230B",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-24ZPL-HP230B",
      "normalizedModelNumber": "ez-24zpl-hp230b",
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
      "id": "model-infinityliving-ez-18zpl-hp230b",
      "slug": "infinityliving-ez-18zpl-hp230b",
      "name": "InfinityLiving EZ-18ZPL-HP230B",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-18ZPL-HP230B",
      "normalizedModelNumber": "ez-18zpl-hp230b",
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
      "id": "model-infinityliving-ez-12zpl-hp115",
      "slug": "infinityliving-ez-12zpl-hp115",
      "name": "InfinityLiving EZ-12ZPL-HP115",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-12ZPL-HP115",
      "normalizedModelNumber": "ez-12zpl-hp115",
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
      "id": "model-infinityliving-ez-27z-m3",
      "slug": "infinityliving-ez-27z-m3",
      "name": "InfinityLiving EZ-27Z-M3",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-27Z-M3",
      "normalizedModelNumber": "ez-27z-m3",
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
      "id": "model-infinityliving-ez-48z-m5b",
      "slug": "infinityliving-ez-48z-m5b",
      "name": "InfinityLiving EZ-48Z-M5B",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-48Z-M5B",
      "normalizedModelNumber": "ez-48z-m5b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 43000,
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
      "id": "model-infinityliving-ez-18z-m2",
      "slug": "infinityliving-ez-18z-m2",
      "name": "InfinityLiving EZ-18Z-M2",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-18Z-M2",
      "normalizedModelNumber": "ez-18z-m2",
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
      "id": "model-infinityliving-ez-48z-m5",
      "slug": "infinityliving-ez-48z-m5",
      "name": "InfinityLiving EZ-48Z-M5",
      "seriesId": "series-infinityliving-es-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-48Z-M5",
      "normalizedModelNumber": "ez-48z-m5",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
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
      "id": "model-infinityliving-ez-24zpl-hp230",
      "slug": "infinityliving-ez-24zpl-hp230",
      "name": "InfinityLiving EZ-24ZPL-HP230",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-24ZPL-HP230",
      "normalizedModelNumber": "ez-24zpl-hp230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
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
      "id": "model-infinityliving-ez-09z-hp115b",
      "slug": "infinityliving-ez-09z-hp115b",
      "name": "InfinityLiving EZ-09Z-HP115B",
      "seriesId": "series-infinityliving-es-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-09Z-HP115B",
      "normalizedModelNumber": "ez-09z-hp115b",
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
      "id": "model-infinityliving-ez-09z-hp115",
      "slug": "infinityliving-ez-09z-hp115",
      "name": "InfinityLiving EZ-09Z-HP115",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-09Z-HP115",
      "normalizedModelNumber": "ez-09z-hp115",
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
      "id": "model-infinityliving-ez-24-hpb",
      "slug": "infinityliving-ez-24-hpb",
      "name": "InfinityLiving EZ-24-HPB",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-24-HPB",
      "normalizedModelNumber": "ez-24-hpb",
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
    },
    {
      "id": "model-infinityliving-ez-24-ehpb",
      "slug": "infinityliving-ez-24-ehpb",
      "name": "InfinityLiving EZ-24-EHPB",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-24-EHPB",
      "normalizedModelNumber": "ez-24-ehpb",
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
      "id": "model-infinityliving-ez-24-hp",
      "slug": "infinityliving-ez-24-hp",
      "name": "InfinityLiving EZ-24-HP",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-24-HP",
      "normalizedModelNumber": "ez-24-hp",
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
      "id": "model-infinityliving-ez-36-hpb",
      "slug": "infinityliving-ez-36-hpb",
      "name": "InfinityLiving EZ-36-HPB",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-36-HPB",
      "normalizedModelNumber": "ez-36-hpb",
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
      "id": "model-infinityliving-ez-48-hpb",
      "slug": "infinityliving-ez-48-hpb",
      "name": "InfinityLiving EZ-48-HPB",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-48-HPB",
      "normalizedModelNumber": "ez-48-hpb",
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
      "id": "model-infinityliving-ez-36-ehpb",
      "slug": "infinityliving-ez-36-ehpb",
      "name": "InfinityLiving EZ-36-EHPB",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-36-EHPB",
      "normalizedModelNumber": "ez-36-ehpb",
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
      "id": "model-infinityliving-ez-36-hp",
      "slug": "infinityliving-ez-36-hp",
      "name": "InfinityLiving EZ-36-HP",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-36-HP",
      "normalizedModelNumber": "ez-36-hp",
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
      "id": "model-infinityliving-ez-48-ehpb",
      "slug": "infinityliving-ez-48-ehpb",
      "name": "InfinityLiving EZ-48-EHPB",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-48-EHPB",
      "normalizedModelNumber": "ez-48-ehpb",
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
      "id": "model-infinityliving-ez-60-hpb",
      "slug": "infinityliving-ez-60-hpb",
      "name": "InfinityLiving EZ-60-HPB",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-60-HPB",
      "normalizedModelNumber": "ez-60-hpb",
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
      "id": "model-infinityliving-ez-48-hp",
      "slug": "infinityliving-ez-48-hp",
      "name": "InfinityLiving EZ-48-HP",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-48-HP",
      "normalizedModelNumber": "ez-48-hp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
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
      "id": "model-infinityliving-ez-60-hp",
      "slug": "infinityliving-ez-60-hp",
      "name": "InfinityLiving EZ-60-HP",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-60-HP",
      "normalizedModelNumber": "ez-60-hp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55000,
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
      "id": "model-infinityliving-ez-60-ehpb",
      "slug": "infinityliving-ez-60-ehpb",
      "name": "InfinityLiving EZ-60-EHPB",
      "seriesId": "series-infinityliving-ez-series",
      "brandId": "brand-infinityliving",
      "modelNumber": "EZ-60-EHPB",
      "normalizedModelNumber": "ez-60-ehpb",
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
      "id": "ou-infinityliving-ez-18z-m2b",
      "modelNumber": "EZ-18Z-M2B",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-12zpl-hp115b",
      "modelNumber": "EZ-12ZPL-HP115B",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-27z-m3b",
      "modelNumber": "EZ-27Z-M3B",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-36z-m4b",
      "modelNumber": "EZ-36Z-M4B",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-18zpl-hp230",
      "modelNumber": "EZ-18ZPL-HP230",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-24zpl-hp230b",
      "modelNumber": "EZ-24ZPL-HP230B",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-18zpl-hp230b",
      "modelNumber": "EZ-18ZPL-HP230B",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-12zpl-hp115",
      "modelNumber": "EZ-12ZPL-HP115",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-27z-m3",
      "modelNumber": "EZ-27Z-M3",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-48z-m5b",
      "modelNumber": "EZ-48Z-M5B",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-18z-m2",
      "modelNumber": "EZ-18Z-M2",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-48z-m5",
      "modelNumber": "EZ-48Z-M5",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-24zpl-hp230",
      "modelNumber": "EZ-24ZPL-HP230",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-09z-hp115b",
      "modelNumber": "EZ-09Z-HP115B",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-09z-hp115",
      "modelNumber": "EZ-09Z-HP115",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-24-hpb",
      "modelNumber": "EZ-24-HPB",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-24-ehpb",
      "modelNumber": "EZ-24-EHPB",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-24-hp",
      "modelNumber": "EZ-24-HP",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-36-hpb",
      "modelNumber": "EZ-36-HPB",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-48-hpb",
      "modelNumber": "EZ-48-HPB",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-36-ehpb",
      "modelNumber": "EZ-36-EHPB",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-36-hp",
      "modelNumber": "EZ-36-HP",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-48-ehpb",
      "modelNumber": "EZ-48-EHPB",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-60-hpb",
      "modelNumber": "EZ-60-HPB",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-infinityliving-ez-48-hp",
      "modelNumber": "EZ-48-HP",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-60-hp",
      "modelNumber": "EZ-60-HP",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-infinityliving-ez-60-ehpb",
      "modelNumber": "EZ-60-EHPB",
      "brandId": "brand-infinityliving",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-46117",
      "modelNumber": "IU-46117",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-12wpl-hp115b",
      "modelNumber": "EZ-12WPL-HP115B",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46123",
      "modelNumber": "IU-46123",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46124",
      "modelNumber": "IU-46124",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-18w-m",
      "modelNumber": "EZ-18W-M",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24w-mb",
      "modelNumber": "EZ-24W-MB",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-18w-mb",
      "modelNumber": "EZ-18W-MB",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-12wpl-hp115",
      "modelNumber": "EZ-12WPL-HP115",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46122",
      "modelNumber": "IU-46122",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46126",
      "modelNumber": "IU-46126",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46116",
      "modelNumber": "IU-46116",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46125",
      "modelNumber": "IU-46125",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24w-m",
      "modelNumber": "EZ-24W-M",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-09w-hp115b",
      "modelNumber": "EZ-09W-HP115B",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-09w-hp115",
      "modelNumber": "EZ-09W-HP115",
      "brandId": "brand-infinityliving",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24-ahb",
      "modelNumber": "EZ-24-AHB",
      "brandId": "brand-infinityliving",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-24-ah",
      "modelNumber": "EZ-24-AH",
      "brandId": "brand-infinityliving",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-36-ahb",
      "modelNumber": "EZ-36-AHB",
      "brandId": "brand-infinityliving",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-48-ahb",
      "modelNumber": "EZ-48-AHB",
      "brandId": "brand-infinityliving",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-36-ah",
      "modelNumber": "EZ-36-AH",
      "brandId": "brand-infinityliving",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-60-ahb",
      "modelNumber": "EZ-60-AHB",
      "brandId": "brand-infinityliving",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-48-ah",
      "modelNumber": "EZ-48-AH",
      "brandId": "brand-infinityliving",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-60-ah",
      "modelNumber": "EZ-60-AH",
      "brandId": "brand-infinityliving",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-infinityliving-ez-18z-m2b-iu-46117",
      "slug": "infinityliving-ez-18z-m2b-iu-46117",
      "modelId": "model-infinityliving-ez-18z-m2b",
      "outdoorUnitId": "ou-infinityliving-ez-18z-m2b",
      "indoorUnitId": "iu-iu-46117",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.9,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-12zpl-hp115b-ez-12wpl-hp115b",
      "slug": "infinityliving-ez-12zpl-hp115b-ez-12wpl-hp115b",
      "modelId": "model-infinityliving-ez-12zpl-hp115b",
      "outdoorUnitId": "ou-infinityliving-ez-12zpl-hp115b",
      "indoorUnitId": "iu-ez-12wpl-hp115b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-27z-m3b-iu-46123",
      "slug": "infinityliving-ez-27z-m3b-iu-46123",
      "modelId": "model-infinityliving-ez-27z-m3b",
      "outdoorUnitId": "ou-infinityliving-ez-27z-m3b",
      "indoorUnitId": "iu-iu-46123",
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
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-36z-m4b-iu-46124",
      "slug": "infinityliving-ez-36z-m4b-iu-46124",
      "modelId": "model-infinityliving-ez-36z-m4b",
      "outdoorUnitId": "ou-infinityliving-ez-36z-m4b",
      "indoorUnitId": "iu-iu-46124",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-18zpl-hp230-ez-18w-m",
      "slug": "infinityliving-ez-18zpl-hp230-ez-18w-m",
      "modelId": "model-infinityliving-ez-18zpl-hp230",
      "outdoorUnitId": "ou-infinityliving-ez-18zpl-hp230",
      "indoorUnitId": "iu-ez-18w-m",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-24zpl-hp230b-ez-24w-mb",
      "slug": "infinityliving-ez-24zpl-hp230b-ez-24w-mb",
      "modelId": "model-infinityliving-ez-24zpl-hp230b",
      "outdoorUnitId": "ou-infinityliving-ez-24zpl-hp230b",
      "indoorUnitId": "iu-ez-24w-mb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-18zpl-hp230b-ez-18w-mb",
      "slug": "infinityliving-ez-18zpl-hp230b-ez-18w-mb",
      "modelId": "model-infinityliving-ez-18zpl-hp230b",
      "outdoorUnitId": "ou-infinityliving-ez-18zpl-hp230b",
      "indoorUnitId": "iu-ez-18w-mb",
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
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-12zpl-hp115-ez-12wpl-hp115",
      "slug": "infinityliving-ez-12zpl-hp115-ez-12wpl-hp115",
      "modelId": "model-infinityliving-ez-12zpl-hp115",
      "outdoorUnitId": "ou-infinityliving-ez-12zpl-hp115",
      "indoorUnitId": "iu-ez-12wpl-hp115",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-27z-m3-iu-46122",
      "slug": "infinityliving-ez-27z-m3-iu-46122",
      "modelId": "model-infinityliving-ez-27z-m3",
      "outdoorUnitId": "ou-infinityliving-ez-27z-m3",
      "indoorUnitId": "iu-iu-46122",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-48z-m5b-iu-46126",
      "slug": "infinityliving-ez-48z-m5b-iu-46126",
      "modelId": "model-infinityliving-ez-48z-m5b",
      "outdoorUnitId": "ou-infinityliving-ez-48z-m5b",
      "indoorUnitId": "iu-iu-46126",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-18z-m2-iu-46116",
      "slug": "infinityliving-ez-18z-m2-iu-46116",
      "modelId": "model-infinityliving-ez-18z-m2",
      "outdoorUnitId": "ou-infinityliving-ez-18z-m2",
      "indoorUnitId": "iu-iu-46116",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-48z-m5-iu-46125",
      "slug": "infinityliving-ez-48z-m5-iu-46125",
      "modelId": "model-infinityliving-ez-48z-m5",
      "outdoorUnitId": "ou-infinityliving-ez-48z-m5",
      "indoorUnitId": "iu-iu-46125",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-24zpl-hp230-ez-24w-m",
      "slug": "infinityliving-ez-24zpl-hp230-ez-24w-m",
      "modelId": "model-infinityliving-ez-24zpl-hp230",
      "outdoorUnitId": "ou-infinityliving-ez-24zpl-hp230",
      "indoorUnitId": "iu-ez-24w-m",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-09z-hp115b-ez-09w-hp115b",
      "slug": "infinityliving-ez-09z-hp115b-ez-09w-hp115b",
      "modelId": "model-infinityliving-ez-09z-hp115b",
      "outdoorUnitId": "ou-infinityliving-ez-09z-hp115b",
      "indoorUnitId": "iu-ez-09w-hp115b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-09z-hp115-ez-09w-hp115",
      "slug": "infinityliving-ez-09z-hp115-ez-09w-hp115",
      "modelId": "model-infinityliving-ez-09z-hp115",
      "outdoorUnitId": "ou-infinityliving-ez-09z-hp115",
      "indoorUnitId": "iu-ez-09w-hp115",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-24-hpb-ez-24-ahb",
      "slug": "infinityliving-ez-24-hpb-ez-24-ahb",
      "modelId": "model-infinityliving-ez-24-hpb",
      "outdoorUnitId": "ou-infinityliving-ez-24-hpb",
      "indoorUnitId": "iu-ez-24-ahb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-24-ehpb-ez-24-ahb",
      "slug": "infinityliving-ez-24-ehpb-ez-24-ahb",
      "modelId": "model-infinityliving-ez-24-ehpb",
      "outdoorUnitId": "ou-infinityliving-ez-24-ehpb",
      "indoorUnitId": "iu-ez-24-ahb",
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
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-24-hp-ez-24-ah",
      "slug": "infinityliving-ez-24-hp-ez-24-ah",
      "modelId": "model-infinityliving-ez-24-hp",
      "outdoorUnitId": "ou-infinityliving-ez-24-hp",
      "indoorUnitId": "iu-ez-24-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-36-hpb-ez-36-ahb",
      "slug": "infinityliving-ez-36-hpb-ez-36-ahb",
      "modelId": "model-infinityliving-ez-36-hpb",
      "outdoorUnitId": "ou-infinityliving-ez-36-hpb",
      "indoorUnitId": "iu-ez-36-ahb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-48-hpb-ez-48-ahb",
      "slug": "infinityliving-ez-48-hpb-ez-48-ahb",
      "modelId": "model-infinityliving-ez-48-hpb",
      "outdoorUnitId": "ou-infinityliving-ez-48-hpb",
      "indoorUnitId": "iu-ez-48-ahb",
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
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-36-ehpb-ez-36-ahb",
      "slug": "infinityliving-ez-36-ehpb-ez-36-ahb",
      "modelId": "model-infinityliving-ez-36-ehpb",
      "outdoorUnitId": "ou-infinityliving-ez-36-ehpb",
      "indoorUnitId": "iu-ez-36-ahb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-36-hp-ez-36-ah",
      "slug": "infinityliving-ez-36-hp-ez-36-ah",
      "modelId": "model-infinityliving-ez-36-hp",
      "outdoorUnitId": "ou-infinityliving-ez-36-hp",
      "indoorUnitId": "iu-ez-36-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-48-ehpb-ez-48-ahb",
      "slug": "infinityliving-ez-48-ehpb-ez-48-ahb",
      "modelId": "model-infinityliving-ez-48-ehpb",
      "outdoorUnitId": "ou-infinityliving-ez-48-ehpb",
      "indoorUnitId": "iu-ez-48-ahb",
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
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-60-hpb-ez-60-ahb",
      "slug": "infinityliving-ez-60-hpb-ez-60-ahb",
      "modelId": "model-infinityliving-ez-60-hpb",
      "outdoorUnitId": "ou-infinityliving-ez-60-hpb",
      "indoorUnitId": "iu-ez-60-ahb",
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
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-48-hp-ez-48-ah",
      "slug": "infinityliving-ez-48-hp-ez-48-ah",
      "modelId": "model-infinityliving-ez-48-hp",
      "outdoorUnitId": "ou-infinityliving-ez-48-hp",
      "indoorUnitId": "iu-ez-48-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-60-hp-ez-60-ah",
      "slug": "infinityliving-ez-60-hp-ez-60-ah",
      "modelId": "model-infinityliving-ez-60-hp",
      "outdoorUnitId": "ou-infinityliving-ez-60-hp",
      "indoorUnitId": "iu-ez-60-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-infinityliving-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-infinityliving-ez-60-ehpb-ez-60-ahb",
      "slug": "infinityliving-ez-60-ehpb-ez-60-ahb",
      "modelId": "model-infinityliving-ez-60-ehpb",
      "outdoorUnitId": "ou-infinityliving-ez-60-ehpb",
      "indoorUnitId": "iu-ez-60-ahb",
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
          "sourceId": "src-infinityliving-epa",
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
