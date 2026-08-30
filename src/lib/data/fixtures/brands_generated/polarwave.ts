import type { BrandDataset } from "../../types";

export const brand_polarwaveDataset: BrandDataset = {
  "brand": {
    "id": "brand-polarwave",
    "slug": "polarwave",
    "name": "PolarWave",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour PolarWave",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-polarwave-epa",
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
      "id": "series-polarwave-aciq",
      "slug": "polarwave-aciq",
      "name": "ACIQ",
      "brandId": "brand-polarwave",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACIQ de PolarWave",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-polarwave-es-series",
      "slug": "polarwave-es-series",
      "name": "ES SERIES",
      "brandId": "brand-polarwave",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ES SERIES de PolarWave",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-polarwave-ez-series",
      "slug": "polarwave-ez-series",
      "name": "EZ Series",
      "brandId": "brand-polarwave",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EZ Series de PolarWave",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-polarwave-aciq-series",
      "slug": "polarwave-aciq-series",
      "name": "ACIQ series",
      "brandId": "brand-polarwave",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACIQ series de PolarWave",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-polarwave-aciq-09zpl-hp230b",
      "slug": "polarwave-aciq-09zpl-hp230b",
      "name": "PolarWave ACIQ-09ZPL-HP230B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-09ZPL-HP230B",
      "normalizedModelNumber": "aciq-09zpl-hp230b",
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
      "id": "model-polarwave-aciq-06zpl-hp230b",
      "slug": "polarwave-aciq-06zpl-hp230b",
      "name": "PolarWave ACIQ-06ZPL-HP230B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-06ZPL-HP230B",
      "normalizedModelNumber": "aciq-06zpl-hp230b",
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
      "id": "model-polarwave-aciq-12zpl-hp230b",
      "slug": "polarwave-aciq-12zpl-hp230b",
      "name": "PolarWave ACIQ-12ZPL-HP230B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-12ZPL-HP230B",
      "normalizedModelNumber": "aciq-12zpl-hp230b",
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
      "id": "model-polarwave-es-27z-m3b",
      "slug": "polarwave-es-27z-m3b",
      "name": "PolarWave ES-27Z-M3B",
      "seriesId": "series-polarwave-es-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ES-27Z-M3B",
      "normalizedModelNumber": "es-27z-m3b",
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
      "id": "model-polarwave-ez-18z-m2b",
      "slug": "polarwave-ez-18z-m2b",
      "name": "PolarWave EZ-18Z-M2B",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-es-36z-m4b",
      "slug": "polarwave-es-36z-m4b",
      "name": "PolarWave ES-36Z-M4B",
      "seriesId": "series-polarwave-es-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ES-36Z-M4B",
      "normalizedModelNumber": "es-36z-m4b",
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
      "id": "model-polarwave-ez-12zpl-hp115b",
      "slug": "polarwave-ez-12zpl-hp115b",
      "name": "PolarWave EZ-12ZPL-HP115B",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-es-48z-m5b",
      "slug": "polarwave-es-48z-m5b",
      "name": "PolarWave ES-48Z-M5B",
      "seriesId": "series-polarwave-es-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ES-48Z-M5B",
      "normalizedModelNumber": "es-48z-m5b",
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
      "id": "model-polarwave-aciq-27z-hh-m3b",
      "slug": "polarwave-aciq-27z-hh-m3b",
      "name": "PolarWave ACIQ-27Z-HH-M3B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-27Z-HH-M3B",
      "normalizedModelNumber": "aciq-27z-hh-m3b",
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
      "id": "model-polarwave-ez-36z-m4b",
      "slug": "polarwave-ez-36z-m4b",
      "name": "PolarWave EZ-36Z-M4B",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-27z-m3b",
      "slug": "polarwave-ez-27z-m3b",
      "name": "PolarWave EZ-27Z-M3B",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-es-18z-m2b",
      "slug": "polarwave-es-18z-m2b",
      "name": "PolarWave ES-18Z-M2B",
      "seriesId": "series-polarwave-es-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ES-18Z-M2B",
      "normalizedModelNumber": "es-18z-m2b",
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
      "id": "model-polarwave-ez-18zpl-hp230",
      "slug": "polarwave-ez-18zpl-hp230",
      "name": "PolarWave EZ-18ZPL-HP230",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-24zpl-hp230b",
      "slug": "polarwave-ez-24zpl-hp230b",
      "name": "PolarWave EZ-24ZPL-HP230B",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-18zpl-hp230b",
      "slug": "polarwave-ez-18zpl-hp230b",
      "name": "PolarWave EZ-18ZPL-HP230B",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-12zpl-hp115",
      "slug": "polarwave-ez-12zpl-hp115",
      "name": "PolarWave EZ-12ZPL-HP115",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-aciq-36z-hh-m4b",
      "slug": "polarwave-aciq-36z-hh-m4b",
      "name": "PolarWave ACIQ-36Z-HH-M4B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-36Z-HH-M4B",
      "normalizedModelNumber": "aciq-36z-hh-m4b",
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
      "id": "model-polarwave-aciq-18z-hh-m2b",
      "slug": "polarwave-aciq-18z-hh-m2b",
      "name": "PolarWave ACIQ-18Z-HH-M2B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-18Z-HH-M2B",
      "normalizedModelNumber": "aciq-18z-hh-m2b",
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
      "id": "model-polarwave-ez-27z-m3",
      "slug": "polarwave-ez-27z-m3",
      "name": "PolarWave EZ-27Z-M3",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-aciq-55z-hh-m5b",
      "slug": "polarwave-aciq-55z-hh-m5b",
      "name": "PolarWave ACIQ-55Z-HH-M5B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-55Z-HH-M5B",
      "normalizedModelNumber": "aciq-55z-hh-m5b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55000,
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
      "id": "model-polarwave-ez-48z-m5b",
      "slug": "polarwave-ez-48z-m5b",
      "name": "PolarWave EZ-48Z-M5B",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-aciq-48z-hh-m5b",
      "slug": "polarwave-aciq-48z-hh-m5b",
      "name": "PolarWave ACIQ-48Z-HH-M5B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-48Z-HH-M5B",
      "normalizedModelNumber": "aciq-48z-hh-m5b",
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
      "id": "model-polarwave-aciq-18zpl-hp230b",
      "slug": "polarwave-aciq-18zpl-hp230b",
      "name": "PolarWave ACIQ-18ZPL-HP230B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-18ZPL-HP230B",
      "normalizedModelNumber": "aciq-18zpl-hp230b",
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
      "id": "model-polarwave-aciq-24zpl-hp230b",
      "slug": "polarwave-aciq-24zpl-hp230b",
      "name": "PolarWave ACIQ-24ZPL-HP230B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-24ZPL-HP230B",
      "normalizedModelNumber": "aciq-24zpl-hp230b",
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
      "id": "model-polarwave-aciq-09z-hp115b",
      "slug": "polarwave-aciq-09z-hp115b",
      "name": "PolarWave ACIQ-09Z-HP115B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-09Z-HP115B",
      "normalizedModelNumber": "aciq-09z-hp115b",
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
      "id": "model-polarwave-ez-18z-m2",
      "slug": "polarwave-ez-18z-m2",
      "name": "PolarWave EZ-18Z-M2",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-24zpl-hp230",
      "slug": "polarwave-ez-24zpl-hp230",
      "name": "PolarWave EZ-24ZPL-HP230",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-48z-m5",
      "slug": "polarwave-ez-48z-m5",
      "name": "PolarWave EZ-48Z-M5",
      "seriesId": "series-polarwave-es-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-09z-hp115b",
      "slug": "polarwave-ez-09z-hp115b",
      "name": "PolarWave EZ-09Z-HP115B",
      "seriesId": "series-polarwave-es-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-09z-hp115",
      "slug": "polarwave-ez-09z-hp115",
      "name": "PolarWave EZ-09Z-HP115",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-aciq-36zpl-hp230b",
      "slug": "polarwave-aciq-36zpl-hp230b",
      "name": "PolarWave ACIQ-36ZPL-HP230B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-36ZPL-HP230B",
      "normalizedModelNumber": "aciq-36zpl-hp230b",
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
      "id": "model-polarwave-aciq-18-hpb",
      "slug": "polarwave-aciq-18-hpb",
      "name": "PolarWave ACIQ-18-HPB",
      "seriesId": "series-polarwave-aciq-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-18-HPB",
      "normalizedModelNumber": "aciq-18-hpb",
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
      "id": "model-polarwave-aciq-24-hpb",
      "slug": "polarwave-aciq-24-hpb",
      "name": "PolarWave ACIQ-24-HPB",
      "seriesId": "series-polarwave-aciq-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-24-HPB",
      "normalizedModelNumber": "aciq-24-hpb",
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
      "id": "model-polarwave-ez-24-hpb",
      "slug": "polarwave-ez-24-hpb",
      "name": "PolarWave EZ-24-HPB",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-aciq-30-hpb",
      "slug": "polarwave-aciq-30-hpb",
      "name": "PolarWave ACIQ-30-HPB",
      "seriesId": "series-polarwave-aciq-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-30-HPB",
      "normalizedModelNumber": "aciq-30-hpb",
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
      "id": "model-polarwave-ez-24-ehpb",
      "slug": "polarwave-ez-24-ehpb",
      "name": "PolarWave EZ-24-EHPB",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-aciq-36-hpb",
      "slug": "polarwave-aciq-36-hpb",
      "name": "PolarWave ACIQ-36-HPB",
      "seriesId": "series-polarwave-aciq-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-36-HPB",
      "normalizedModelNumber": "aciq-36-hpb",
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
      "id": "model-polarwave-aciq-12-ehpb",
      "slug": "polarwave-aciq-12-ehpb",
      "name": "PolarWave ACIQ-12-EHPB",
      "seriesId": "series-polarwave-aciq-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-12-EHPB",
      "normalizedModelNumber": "aciq-12-ehpb",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
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
      "id": "model-polarwave-ez-36-hpb",
      "slug": "polarwave-ez-36-hpb",
      "name": "PolarWave EZ-36-HPB",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-24-hp",
      "slug": "polarwave-ez-24-hp",
      "name": "PolarWave EZ-24-HP",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-aciq-60zpl-hp230b",
      "slug": "polarwave-aciq-60zpl-hp230b",
      "name": "PolarWave ACIQ-60ZPL-HP230B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-60ZPL-HP230B",
      "normalizedModelNumber": "aciq-60zpl-hp230b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55000,
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
      "id": "model-polarwave-aciq-24-ehpb",
      "slug": "polarwave-aciq-24-ehpb",
      "name": "PolarWave ACIQ-24-EHPB",
      "seriesId": "series-polarwave-aciq-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-24-EHPB",
      "normalizedModelNumber": "aciq-24-ehpb",
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
      "id": "model-polarwave-aciq-48zpl-hp230b",
      "slug": "polarwave-aciq-48zpl-hp230b",
      "name": "PolarWave ACIQ-48ZPL-HP230B",
      "seriesId": "series-polarwave-aciq",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-48ZPL-HP230B",
      "normalizedModelNumber": "aciq-48zpl-hp230b",
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
      "id": "model-polarwave-ez-48-hpb",
      "slug": "polarwave-ez-48-hpb",
      "name": "PolarWave EZ-48-HPB",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-aciq-36-hpc",
      "slug": "polarwave-aciq-36-hpc",
      "name": "PolarWave ACIQ-36-HPC",
      "seriesId": "series-polarwave-aciq-series",
      "brandId": "brand-polarwave",
      "modelNumber": "ACIQ-36-HPC",
      "normalizedModelNumber": "aciq-36-hpc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-polarwave-ez-36-ehpb",
      "slug": "polarwave-ez-36-ehpb",
      "name": "PolarWave EZ-36-EHPB",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-36-hp",
      "slug": "polarwave-ez-36-hp",
      "name": "PolarWave EZ-36-HP",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-48-ehpb",
      "slug": "polarwave-ez-48-ehpb",
      "name": "PolarWave EZ-48-EHPB",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-60-hpb",
      "slug": "polarwave-ez-60-hpb",
      "name": "PolarWave EZ-60-HPB",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-48-hp",
      "slug": "polarwave-ez-48-hp",
      "name": "PolarWave EZ-48-HP",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-60-hp",
      "slug": "polarwave-ez-60-hp",
      "name": "PolarWave EZ-60-HP",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "model-polarwave-ez-60-ehpb",
      "slug": "polarwave-ez-60-ehpb",
      "name": "PolarWave EZ-60-EHPB",
      "seriesId": "series-polarwave-ez-series",
      "brandId": "brand-polarwave",
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
      "id": "ou-polarwave-aciq-09zpl-hp230b",
      "modelNumber": "ACIQ-09ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-06zpl-hp230b",
      "modelNumber": "ACIQ-06ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-12zpl-hp230b",
      "modelNumber": "ACIQ-12ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-es-27z-m3b",
      "modelNumber": "ES-27Z-M3B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-18z-m2b",
      "modelNumber": "EZ-18Z-M2B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-es-36z-m4b",
      "modelNumber": "ES-36Z-M4B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-12zpl-hp115b",
      "modelNumber": "EZ-12ZPL-HP115B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-es-48z-m5b",
      "modelNumber": "ES-48Z-M5B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-27z-hh-m3b",
      "modelNumber": "ACIQ-27Z-HH-M3B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-36z-m4b",
      "modelNumber": "EZ-36Z-M4B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-ez-27z-m3b",
      "modelNumber": "EZ-27Z-M3B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-es-18z-m2b",
      "modelNumber": "ES-18Z-M2B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-18zpl-hp230",
      "modelNumber": "EZ-18ZPL-HP230",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-24zpl-hp230b",
      "modelNumber": "EZ-24ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-ez-18zpl-hp230b",
      "modelNumber": "EZ-18ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-ez-12zpl-hp115",
      "modelNumber": "EZ-12ZPL-HP115",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-36z-hh-m4b",
      "modelNumber": "ACIQ-36Z-HH-M4B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-18z-hh-m2b",
      "modelNumber": "ACIQ-18Z-HH-M2B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-27z-m3",
      "modelNumber": "EZ-27Z-M3",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-55z-hh-m5b",
      "modelNumber": "ACIQ-55Z-HH-M5B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-48z-m5b",
      "modelNumber": "EZ-48Z-M5B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-aciq-48z-hh-m5b",
      "modelNumber": "ACIQ-48Z-HH-M5B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-18zpl-hp230b",
      "modelNumber": "ACIQ-18ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-24zpl-hp230b",
      "modelNumber": "ACIQ-24ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-09z-hp115b",
      "modelNumber": "ACIQ-09Z-HP115B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-18z-m2",
      "modelNumber": "EZ-18Z-M2",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-24zpl-hp230",
      "modelNumber": "EZ-24ZPL-HP230",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-48z-m5",
      "modelNumber": "EZ-48Z-M5",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-09z-hp115b",
      "modelNumber": "EZ-09Z-HP115B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-ez-09z-hp115",
      "modelNumber": "EZ-09Z-HP115",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-36zpl-hp230b",
      "modelNumber": "ACIQ-36ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-18-hpb",
      "modelNumber": "ACIQ-18-HPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-24-hpb",
      "modelNumber": "ACIQ-24-HPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-24-hpb",
      "modelNumber": "EZ-24-HPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-aciq-30-hpb",
      "modelNumber": "ACIQ-30-HPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-24-ehpb",
      "modelNumber": "EZ-24-EHPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-aciq-36-hpb",
      "modelNumber": "ACIQ-36-HPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-12-ehpb",
      "modelNumber": "ACIQ-12-EHPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-36-hpb",
      "modelNumber": "EZ-36-HPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-ez-24-hp",
      "modelNumber": "EZ-24-HP",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-60zpl-hp230b",
      "modelNumber": "ACIQ-60ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-24-ehpb",
      "modelNumber": "ACIQ-24-EHPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-aciq-48zpl-hp230b",
      "modelNumber": "ACIQ-48ZPL-HP230B",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-48-hpb",
      "modelNumber": "EZ-48-HPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-aciq-36-hpc",
      "modelNumber": "ACIQ-36-HPC",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-36-ehpb",
      "modelNumber": "EZ-36-EHPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-ez-36-hp",
      "modelNumber": "EZ-36-HP",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-48-ehpb",
      "modelNumber": "EZ-48-EHPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-ez-60-hpb",
      "modelNumber": "EZ-60-HPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-polarwave-ez-48-hp",
      "modelNumber": "EZ-48-HP",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-60-hp",
      "modelNumber": "EZ-60-HP",
      "brandId": "brand-polarwave",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-polarwave-ez-60-ehpb",
      "modelNumber": "EZ-60-EHPB",
      "brandId": "brand-polarwave",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-aciq-09w-hh-mb",
      "modelNumber": "ACIQ-09W-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hh-mc",
      "modelNumber": "ACIQ-09W-HH-MC",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-06w-hh-mc",
      "modelNumber": "ACIQ-06W-HH-MC",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-mc",
      "modelNumber": "ACIQ-12W-HH-MC",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-mb",
      "modelNumber": "ACIQ-12W-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50270",
      "modelNumber": "IU-50270",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-mc",
      "modelNumber": "ACIQ-12FM-HH-MC",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-0609-hh-m",
      "modelNumber": "SCC-0609-HH-M",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50278",
      "modelNumber": "IU-50278",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50271",
      "modelNumber": "IU-50271",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-mb",
      "modelNumber": "ACIQ-12FM-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-12wpl-hp115b",
      "modelNumber": "EZ-12WPL-HP115B",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50272",
      "modelNumber": "IU-50272",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50257",
      "modelNumber": "IU-50257",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-1218-hh-m",
      "modelNumber": "SCC-1218-HH-M",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50285",
      "modelNumber": "IU-50285",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50284",
      "modelNumber": "IU-50284",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50269",
      "modelNumber": "IU-50269",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-18w-m",
      "modelNumber": "EZ-18W-M",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24w-mb",
      "modelNumber": "EZ-24W-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-18w-mb",
      "modelNumber": "EZ-18W-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-12wpl-hp115",
      "modelNumber": "EZ-12WPL-HP115",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cc-hh-mb",
      "modelNumber": "ACIQ-12CC-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50258",
      "modelNumber": "IU-50258",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50245",
      "modelNumber": "IU-50245",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50283",
      "modelNumber": "IU-50283",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50266",
      "modelNumber": "IU-50266",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50287",
      "modelNumber": "IU-50287",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50262",
      "modelNumber": "IU-50262",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-mb",
      "modelNumber": "ACIQ-18W-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-mc",
      "modelNumber": "ACIQ-18W-HH-MC",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hh-mb",
      "modelNumber": "ACIQ-24W-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hp115b",
      "modelNumber": "ACIQ-09W-HP115B",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hh-mc",
      "modelNumber": "ACIQ-24W-HH-MC",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50277",
      "modelNumber": "IU-50277",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24w-m",
      "modelNumber": "EZ-24W-M",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50286",
      "modelNumber": "IU-50286",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-mb",
      "modelNumber": "ACIQ-18FM-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cc-hh-mb",
      "modelNumber": "ACIQ-09CC-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24fm-hh-mb",
      "modelNumber": "ACIQ-24FM-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-mc",
      "modelNumber": "ACIQ-18FM-HH-MC",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-09w-hp115b",
      "modelNumber": "EZ-09W-HP115B",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cd-hh-mb",
      "modelNumber": "ACIQ-09CD-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18cc-hh-mb",
      "modelNumber": "ACIQ-18CC-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-09w-hp115",
      "modelNumber": "EZ-09W-HP115",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cd-hh-mb",
      "modelNumber": "ACIQ-12CD-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36cc-hh-mb",
      "modelNumber": "ACIQ-36CC-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-wm",
      "modelNumber": "ACIQ-18W-WM",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24cd-hh-mb",
      "modelNumber": "ACIQ-24CD-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-p",
      "modelNumber": "ACIQ-24W-P",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-24-ahb",
      "modelNumber": "EZ-24-AHB",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-p",
      "modelNumber": "ACIQ-30W-P",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18cd-hh-mb",
      "modelNumber": "ACIQ-18CD-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18-ahb",
      "modelNumber": "ACIQ-18-AHB",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36w-wm",
      "modelNumber": "ACIQ-36W-WM",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36fm-hh-mb",
      "modelNumber": "ACIQ-36FM-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12-ahb",
      "modelNumber": "ACIQ-12-AHB",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24w-wm",
      "modelNumber": "ACIQ-24W-WM",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-36-ahb",
      "modelNumber": "EZ-36-AHB",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-24-ah",
      "modelNumber": "EZ-24-AH",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60fm-hh-mb",
      "modelNumber": "ACIQ-60FM-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36w-p",
      "modelNumber": "ACIQ-36W-P",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-ahb",
      "modelNumber": "ACIQ-24-AHB",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18w-p",
      "modelNumber": "ACIQ-18W-P",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48fm-hh-mb",
      "modelNumber": "ACIQ-48FM-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48cd-hh-mb",
      "modelNumber": "ACIQ-48CD-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-30w-wm",
      "modelNumber": "ACIQ-30W-WM",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48cc-hh-mb",
      "modelNumber": "ACIQ-48CC-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36cd-hh-mb",
      "modelNumber": "ACIQ-36CD-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-48-ahb",
      "modelNumber": "EZ-48-AHB",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-acl",
      "modelNumber": "ACIQ-24-ACL",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-ahb",
      "modelNumber": "ACIQ-36-AHB*",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-ahb",
      "modelNumber": "ACIQ-30-AHB",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-acl-14",
      "modelNumber": "ACIQ-24-ACL-14",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18-acl",
      "modelNumber": "ACIQ-18-ACL",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-36-ah",
      "modelNumber": "EZ-36-AH",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-60-ahb",
      "modelNumber": "EZ-60-AHB",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60cd-hh-mb",
      "modelNumber": "ACIQ-60CD-HH-MB",
      "brandId": "brand-polarwave",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-48-ah",
      "modelNumber": "EZ-48-AH",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-acl",
      "modelNumber": "ACIQ-30-ACL",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl-17",
      "modelNumber": "ACIQ-36-ACL-17",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl",
      "modelNumber": "ACIQ-36-ACL",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-60-ah",
      "modelNumber": "EZ-60-AH",
      "brandId": "brand-polarwave",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-polarwave-aciq-09zpl-hp230b-aciq-09w-hh-mb",
      "slug": "polarwave-aciq-09zpl-hp230b-aciq-09w-hh-mb",
      "modelId": "model-polarwave-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-09zpl-hp230b",
      "indoorUnitId": "iu-aciq-09w-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-09zpl-hp230b-aciq-09w-hh-mc",
      "slug": "polarwave-aciq-09zpl-hp230b-aciq-09w-hh-mc",
      "modelId": "model-polarwave-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-09zpl-hp230b",
      "indoorUnitId": "iu-aciq-09w-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-06zpl-hp230b-aciq-06w-hh-mc",
      "slug": "polarwave-aciq-06zpl-hp230b-aciq-06w-hh-mc",
      "modelId": "model-polarwave-aciq-06zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-06zpl-hp230b",
      "indoorUnitId": "iu-aciq-06w-hh-mc",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-12zpl-hp230b-aciq-12w-hh-mc",
      "slug": "polarwave-aciq-12zpl-hp230b-aciq-12w-hh-mc",
      "modelId": "model-polarwave-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-12zpl-hp230b",
      "indoorUnitId": "iu-aciq-12w-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-12zpl-hp230b-aciq-12w-hh-mb",
      "slug": "polarwave-aciq-12zpl-hp230b-aciq-12w-hh-mb",
      "modelId": "model-polarwave-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-12zpl-hp230b",
      "indoorUnitId": "iu-aciq-12w-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-es-27z-m3b-iu-50270",
      "slug": "polarwave-es-27z-m3b-iu-50270",
      "modelId": "model-polarwave-es-27z-m3b",
      "outdoorUnitId": "ou-polarwave-es-27z-m3b",
      "indoorUnitId": "iu-iu-50270",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-12zpl-hp230b-aciq-12fm-hh-mc",
      "slug": "polarwave-aciq-12zpl-hp230b-aciq-12fm-hh-mc",
      "modelId": "model-polarwave-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-12zpl-hp230b",
      "indoorUnitId": "iu-aciq-12fm-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-09zpl-hp230b-scc-0609-hh-m",
      "slug": "polarwave-aciq-09zpl-hp230b-scc-0609-hh-m",
      "modelId": "model-polarwave-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-09zpl-hp230b",
      "indoorUnitId": "iu-scc-0609-hh-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.4,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-18z-m2b-iu-50278",
      "slug": "polarwave-ez-18z-m2b-iu-50278",
      "modelId": "model-polarwave-ez-18z-m2b",
      "outdoorUnitId": "ou-polarwave-ez-18z-m2b",
      "indoorUnitId": "iu-iu-50278",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-es-36z-m4b-iu-50271",
      "slug": "polarwave-es-36z-m4b-iu-50271",
      "modelId": "model-polarwave-es-36z-m4b",
      "outdoorUnitId": "ou-polarwave-es-36z-m4b",
      "indoorUnitId": "iu-iu-50271",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-12zpl-hp230b-aciq-12fm-hh-mb",
      "slug": "polarwave-aciq-12zpl-hp230b-aciq-12fm-hh-mb",
      "modelId": "model-polarwave-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-12zpl-hp230b",
      "indoorUnitId": "iu-aciq-12fm-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-12zpl-hp115b-ez-12wpl-hp115b",
      "slug": "polarwave-ez-12zpl-hp115b-ez-12wpl-hp115b",
      "modelId": "model-polarwave-ez-12zpl-hp115b",
      "outdoorUnitId": "ou-polarwave-ez-12zpl-hp115b",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-es-48z-m5b-iu-50272",
      "slug": "polarwave-es-48z-m5b-iu-50272",
      "modelId": "model-polarwave-es-48z-m5b",
      "outdoorUnitId": "ou-polarwave-es-48z-m5b",
      "indoorUnitId": "iu-iu-50272",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-27z-hh-m3b-iu-50257",
      "slug": "polarwave-aciq-27z-hh-m3b-iu-50257",
      "modelId": "model-polarwave-aciq-27z-hh-m3b",
      "outdoorUnitId": "ou-polarwave-aciq-27z-hh-m3b",
      "indoorUnitId": "iu-iu-50257",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-12zpl-hp230b-scc-1218-hh-m",
      "slug": "polarwave-aciq-12zpl-hp230b-scc-1218-hh-m",
      "modelId": "model-polarwave-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-12zpl-hp230b",
      "indoorUnitId": "iu-scc-1218-hh-m",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-36z-m4b-iu-50285",
      "slug": "polarwave-ez-36z-m4b-iu-50285",
      "modelId": "model-polarwave-ez-36z-m4b",
      "outdoorUnitId": "ou-polarwave-ez-36z-m4b",
      "indoorUnitId": "iu-iu-50285",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-27z-m3b-iu-50284",
      "slug": "polarwave-ez-27z-m3b-iu-50284",
      "modelId": "model-polarwave-ez-27z-m3b",
      "outdoorUnitId": "ou-polarwave-ez-27z-m3b",
      "indoorUnitId": "iu-iu-50284",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-es-18z-m2b-iu-50269",
      "slug": "polarwave-es-18z-m2b-iu-50269",
      "modelId": "model-polarwave-es-18z-m2b",
      "outdoorUnitId": "ou-polarwave-es-18z-m2b",
      "indoorUnitId": "iu-iu-50269",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-18zpl-hp230-ez-18w-m",
      "slug": "polarwave-ez-18zpl-hp230-ez-18w-m",
      "modelId": "model-polarwave-ez-18zpl-hp230",
      "outdoorUnitId": "ou-polarwave-ez-18zpl-hp230",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-24zpl-hp230b-ez-24w-mb",
      "slug": "polarwave-ez-24zpl-hp230b-ez-24w-mb",
      "modelId": "model-polarwave-ez-24zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-ez-24zpl-hp230b",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-18zpl-hp230b-ez-18w-mb",
      "slug": "polarwave-ez-18zpl-hp230b-ez-18w-mb",
      "modelId": "model-polarwave-ez-18zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-ez-18zpl-hp230b",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-12zpl-hp115-ez-12wpl-hp115",
      "slug": "polarwave-ez-12zpl-hp115-ez-12wpl-hp115",
      "modelId": "model-polarwave-ez-12zpl-hp115",
      "outdoorUnitId": "ou-polarwave-ez-12zpl-hp115",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-12zpl-hp230b-aciq-12cc-hh-mb",
      "slug": "polarwave-aciq-12zpl-hp230b-aciq-12cc-hh-mb",
      "modelId": "model-polarwave-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-12zpl-hp230b",
      "indoorUnitId": "iu-aciq-12cc-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36z-hh-m4b-iu-50258",
      "slug": "polarwave-aciq-36z-hh-m4b-iu-50258",
      "modelId": "model-polarwave-aciq-36z-hh-m4b",
      "outdoorUnitId": "ou-polarwave-aciq-36z-hh-m4b",
      "indoorUnitId": "iu-iu-50258",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-06zpl-hp230b-scc-0609-hh-m",
      "slug": "polarwave-aciq-06zpl-hp230b-scc-0609-hh-m",
      "modelId": "model-polarwave-aciq-06zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-06zpl-hp230b",
      "indoorUnitId": "iu-scc-0609-hh-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18z-hh-m2b-iu-50245",
      "slug": "polarwave-aciq-18z-hh-m2b-iu-50245",
      "modelId": "model-polarwave-aciq-18z-hh-m2b",
      "outdoorUnitId": "ou-polarwave-aciq-18z-hh-m2b",
      "indoorUnitId": "iu-iu-50245",
      "minHeatingTempC": -25,
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-27z-m3-iu-50283",
      "slug": "polarwave-ez-27z-m3-iu-50283",
      "modelId": "model-polarwave-ez-27z-m3",
      "outdoorUnitId": "ou-polarwave-ez-27z-m3",
      "indoorUnitId": "iu-iu-50283",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-55z-hh-m5b-iu-50266",
      "slug": "polarwave-aciq-55z-hh-m5b-iu-50266",
      "modelId": "model-polarwave-aciq-55z-hh-m5b",
      "outdoorUnitId": "ou-polarwave-aciq-55z-hh-m5b",
      "indoorUnitId": "iu-iu-50266",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-48z-m5b-iu-50287",
      "slug": "polarwave-ez-48z-m5b-iu-50287",
      "modelId": "model-polarwave-ez-48z-m5b",
      "outdoorUnitId": "ou-polarwave-ez-48z-m5b",
      "indoorUnitId": "iu-iu-50287",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-48z-hh-m5b-iu-50262",
      "slug": "polarwave-aciq-48z-hh-m5b-iu-50262",
      "modelId": "model-polarwave-aciq-48z-hh-m5b",
      "outdoorUnitId": "ou-polarwave-aciq-48z-hh-m5b",
      "indoorUnitId": "iu-iu-50262",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18zpl-hp230b-aciq-18w-hh-mb",
      "slug": "polarwave-aciq-18zpl-hp230b-aciq-18w-hh-mb",
      "modelId": "model-polarwave-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-18zpl-hp230b",
      "indoorUnitId": "iu-aciq-18w-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18zpl-hp230b-aciq-18w-hh-mc",
      "slug": "polarwave-aciq-18zpl-hp230b-aciq-18w-hh-mc",
      "modelId": "model-polarwave-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-18zpl-hp230b",
      "indoorUnitId": "iu-aciq-18w-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24zpl-hp230b-aciq-24w-hh-mb",
      "slug": "polarwave-aciq-24zpl-hp230b-aciq-24w-hh-mb",
      "modelId": "model-polarwave-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-24zpl-hp230b",
      "indoorUnitId": "iu-aciq-24w-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-09z-hp115b-aciq-09w-hp115b",
      "slug": "polarwave-aciq-09z-hp115b-aciq-09w-hp115b",
      "modelId": "model-polarwave-aciq-09z-hp115b",
      "outdoorUnitId": "ou-polarwave-aciq-09z-hp115b",
      "indoorUnitId": "iu-aciq-09w-hp115b",
      "minHeatingTempC": -15,
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24zpl-hp230b-aciq-24w-hh-mc",
      "slug": "polarwave-aciq-24zpl-hp230b-aciq-24w-hh-mc",
      "modelId": "model-polarwave-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-24zpl-hp230b",
      "indoorUnitId": "iu-aciq-24w-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-18z-m2-iu-50277",
      "slug": "polarwave-ez-18z-m2-iu-50277",
      "modelId": "model-polarwave-ez-18z-m2",
      "outdoorUnitId": "ou-polarwave-ez-18z-m2",
      "indoorUnitId": "iu-iu-50277",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-24zpl-hp230-ez-24w-m",
      "slug": "polarwave-ez-24zpl-hp230-ez-24w-m",
      "modelId": "model-polarwave-ez-24zpl-hp230",
      "outdoorUnitId": "ou-polarwave-ez-24zpl-hp230",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-48z-m5-iu-50286",
      "slug": "polarwave-ez-48z-m5-iu-50286",
      "modelId": "model-polarwave-ez-48z-m5",
      "outdoorUnitId": "ou-polarwave-ez-48z-m5",
      "indoorUnitId": "iu-iu-50286",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18zpl-hp230b-aciq-18fm-hh-mb",
      "slug": "polarwave-aciq-18zpl-hp230b-aciq-18fm-hh-mb",
      "modelId": "model-polarwave-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-18zpl-hp230b",
      "indoorUnitId": "iu-aciq-18fm-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-09zpl-hp230b-aciq-09cc-hh-mb",
      "slug": "polarwave-aciq-09zpl-hp230b-aciq-09cc-hh-mb",
      "modelId": "model-polarwave-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-09zpl-hp230b",
      "indoorUnitId": "iu-aciq-09cc-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24zpl-hp230b-aciq-24fm-hh-mb",
      "slug": "polarwave-aciq-24zpl-hp230b-aciq-24fm-hh-mb",
      "modelId": "model-polarwave-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-24zpl-hp230b",
      "indoorUnitId": "iu-aciq-24fm-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18zpl-hp230b-aciq-18fm-hh-mc",
      "slug": "polarwave-aciq-18zpl-hp230b-aciq-18fm-hh-mc",
      "modelId": "model-polarwave-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-18zpl-hp230b",
      "indoorUnitId": "iu-aciq-18fm-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-09z-hp115b-ez-09w-hp115b",
      "slug": "polarwave-ez-09z-hp115b-ez-09w-hp115b",
      "modelId": "model-polarwave-ez-09z-hp115b",
      "outdoorUnitId": "ou-polarwave-ez-09z-hp115b",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-09zpl-hp230b-aciq-09cd-hh-mb",
      "slug": "polarwave-aciq-09zpl-hp230b-aciq-09cd-hh-mb",
      "modelId": "model-polarwave-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-09zpl-hp230b",
      "indoorUnitId": "iu-aciq-09cd-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18zpl-hp230b-aciq-18cc-hh-mb",
      "slug": "polarwave-aciq-18zpl-hp230b-aciq-18cc-hh-mb",
      "modelId": "model-polarwave-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-18zpl-hp230b",
      "indoorUnitId": "iu-aciq-18cc-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-09z-hp115-ez-09w-hp115",
      "slug": "polarwave-ez-09z-hp115-ez-09w-hp115",
      "modelId": "model-polarwave-ez-09z-hp115",
      "outdoorUnitId": "ou-polarwave-ez-09z-hp115",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18zpl-hp230b-scc-1218-hh-m",
      "slug": "polarwave-aciq-18zpl-hp230b-scc-1218-hh-m",
      "modelId": "model-polarwave-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-18zpl-hp230b",
      "indoorUnitId": "iu-scc-1218-hh-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-12zpl-hp230b-aciq-12cd-hh-mb",
      "slug": "polarwave-aciq-12zpl-hp230b-aciq-12cd-hh-mb",
      "modelId": "model-polarwave-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-12zpl-hp230b",
      "indoorUnitId": "iu-aciq-12cd-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36zpl-hp230b-aciq-36cc-hh-mb",
      "slug": "polarwave-aciq-36zpl-hp230b-aciq-36cc-hh-mb",
      "modelId": "model-polarwave-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-36zpl-hp230b",
      "indoorUnitId": "iu-aciq-36cc-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18-hpb-aciq-18w-wm",
      "slug": "polarwave-aciq-18-hpb-aciq-18w-wm",
      "modelId": "model-polarwave-aciq-18-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-18-hpb",
      "indoorUnitId": "iu-aciq-18w-wm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.3,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24zpl-hp230b-aciq-24cd-hh-mb",
      "slug": "polarwave-aciq-24zpl-hp230b-aciq-24cd-hh-mb",
      "modelId": "model-polarwave-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-24zpl-hp230b",
      "indoorUnitId": "iu-aciq-24cd-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24-hpb-aciq-24w-p",
      "slug": "polarwave-aciq-24-hpb-aciq-24w-p",
      "modelId": "model-polarwave-aciq-24-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-24-hpb",
      "indoorUnitId": "iu-aciq-24w-p",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-24-hpb-ez-24-ahb",
      "slug": "polarwave-ez-24-hpb-ez-24-ahb",
      "modelId": "model-polarwave-ez-24-hpb",
      "outdoorUnitId": "ou-polarwave-ez-24-hpb",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-30-hpb-aciq-30w-p",
      "slug": "polarwave-aciq-30-hpb-aciq-30w-p",
      "modelId": "model-polarwave-aciq-30-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-30-hpb",
      "indoorUnitId": "iu-aciq-30w-p",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-24-ehpb-ez-24-ahb",
      "slug": "polarwave-ez-24-ehpb-ez-24-ahb",
      "modelId": "model-polarwave-ez-24-ehpb",
      "outdoorUnitId": "ou-polarwave-ez-24-ehpb",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18zpl-hp230b-aciq-18cd-hh-mb",
      "slug": "polarwave-aciq-18zpl-hp230b-aciq-18cd-hh-mb",
      "modelId": "model-polarwave-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-18zpl-hp230b",
      "indoorUnitId": "iu-aciq-18cd-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18-hpb-aciq-18-ahb",
      "slug": "polarwave-aciq-18-hpb-aciq-18-ahb",
      "modelId": "model-polarwave-aciq-18-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-18-hpb",
      "indoorUnitId": "iu-aciq-18-ahb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36-hpb-aciq-36w-wm",
      "slug": "polarwave-aciq-36-hpb-aciq-36w-wm",
      "modelId": "model-polarwave-aciq-36-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-36-hpb",
      "indoorUnitId": "iu-aciq-36w-wm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36zpl-hp230b-aciq-36fm-hh-mb",
      "slug": "polarwave-aciq-36zpl-hp230b-aciq-36fm-hh-mb",
      "modelId": "model-polarwave-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-36zpl-hp230b",
      "indoorUnitId": "iu-aciq-36fm-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-12-ehpb-aciq-12-ahb",
      "slug": "polarwave-aciq-12-ehpb-aciq-12-ahb",
      "modelId": "model-polarwave-aciq-12-ehpb",
      "outdoorUnitId": "ou-polarwave-aciq-12-ehpb",
      "indoorUnitId": "iu-aciq-12-ahb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24-hpb-aciq-24w-wm",
      "slug": "polarwave-aciq-24-hpb-aciq-24w-wm",
      "modelId": "model-polarwave-aciq-24-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-24-hpb",
      "indoorUnitId": "iu-aciq-24w-wm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-36-hpb-ez-36-ahb",
      "slug": "polarwave-ez-36-hpb-ez-36-ahb",
      "modelId": "model-polarwave-ez-36-hpb",
      "outdoorUnitId": "ou-polarwave-ez-36-hpb",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-24-hp-ez-24-ah",
      "slug": "polarwave-ez-24-hp-ez-24-ah",
      "modelId": "model-polarwave-ez-24-hp",
      "outdoorUnitId": "ou-polarwave-ez-24-hp",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-60zpl-hp230b-aciq-60fm-hh-mb",
      "slug": "polarwave-aciq-60zpl-hp230b-aciq-60fm-hh-mb",
      "modelId": "model-polarwave-aciq-60zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-60zpl-hp230b",
      "indoorUnitId": "iu-aciq-60fm-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36-hpb-aciq-36w-p",
      "slug": "polarwave-aciq-36-hpb-aciq-36w-p",
      "modelId": "model-polarwave-aciq-36-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-36-hpb",
      "indoorUnitId": "iu-aciq-36w-p",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24-ehpb-aciq-24-ahb",
      "slug": "polarwave-aciq-24-ehpb-aciq-24-ahb",
      "modelId": "model-polarwave-aciq-24-ehpb",
      "outdoorUnitId": "ou-polarwave-aciq-24-ehpb",
      "indoorUnitId": "iu-aciq-24-ahb",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18-hpb-aciq-18w-p",
      "slug": "polarwave-aciq-18-hpb-aciq-18w-p",
      "modelId": "model-polarwave-aciq-18-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-18-hpb",
      "indoorUnitId": "iu-aciq-18w-p",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24-ehpb-aciq-24w-wm",
      "slug": "polarwave-aciq-24-ehpb-aciq-24w-wm",
      "modelId": "model-polarwave-aciq-24-ehpb",
      "outdoorUnitId": "ou-polarwave-aciq-24-ehpb",
      "indoorUnitId": "iu-aciq-24w-wm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-48zpl-hp230b-aciq-48fm-hh-mb",
      "slug": "polarwave-aciq-48zpl-hp230b-aciq-48fm-hh-mb",
      "modelId": "model-polarwave-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-48zpl-hp230b",
      "indoorUnitId": "iu-aciq-48fm-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-48zpl-hp230b-aciq-48cd-hh-mb",
      "slug": "polarwave-aciq-48zpl-hp230b-aciq-48cd-hh-mb",
      "modelId": "model-polarwave-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-48zpl-hp230b",
      "indoorUnitId": "iu-aciq-48cd-hh-mb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-30-hpb-aciq-30w-wm",
      "slug": "polarwave-aciq-30-hpb-aciq-30w-wm",
      "modelId": "model-polarwave-aciq-30-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-30-hpb",
      "indoorUnitId": "iu-aciq-30w-wm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.9,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-48zpl-hp230b-aciq-48cc-hh-mb",
      "slug": "polarwave-aciq-48zpl-hp230b-aciq-48cc-hh-mb",
      "modelId": "model-polarwave-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-48zpl-hp230b",
      "indoorUnitId": "iu-aciq-48cc-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36zpl-hp230b-aciq-36cd-hh-mb",
      "slug": "polarwave-aciq-36zpl-hp230b-aciq-36cd-hh-mb",
      "modelId": "model-polarwave-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-36zpl-hp230b",
      "indoorUnitId": "iu-aciq-36cd-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-48-hpb-ez-48-ahb",
      "slug": "polarwave-ez-48-hpb-ez-48-ahb",
      "modelId": "model-polarwave-ez-48-hpb",
      "outdoorUnitId": "ou-polarwave-ez-48-hpb",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24-hpb-aciq-24-acl",
      "slug": "polarwave-aciq-24-hpb-aciq-24-acl",
      "modelId": "model-polarwave-aciq-24-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-24-hpb",
      "indoorUnitId": "iu-aciq-24-acl",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36-hpc-aciq-36-ahb",
      "slug": "polarwave-aciq-36-hpc-aciq-36-ahb",
      "modelId": "model-polarwave-aciq-36-hpc",
      "outdoorUnitId": "ou-polarwave-aciq-36-hpc",
      "indoorUnitId": "iu-aciq-36-ahb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-30-hpb-aciq-30-ahb",
      "slug": "polarwave-aciq-30-hpb-aciq-30-ahb",
      "modelId": "model-polarwave-aciq-30-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-30-hpb",
      "indoorUnitId": "iu-aciq-30-ahb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-36-ehpb-ez-36-ahb",
      "slug": "polarwave-ez-36-ehpb-ez-36-ahb",
      "modelId": "model-polarwave-ez-36-ehpb",
      "outdoorUnitId": "ou-polarwave-ez-36-ehpb",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24-hpb-aciq-24-acl-14",
      "slug": "polarwave-aciq-24-hpb-aciq-24-acl-14",
      "modelId": "model-polarwave-aciq-24-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-24-hpb",
      "indoorUnitId": "iu-aciq-24-acl-14",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18-hpb-aciq-18-acl",
      "slug": "polarwave-aciq-18-hpb-aciq-18-acl",
      "modelId": "model-polarwave-aciq-18-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-18-hpb",
      "indoorUnitId": "iu-aciq-18-acl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-18-hpb-aciq-24-acl",
      "slug": "polarwave-aciq-18-hpb-aciq-24-acl",
      "modelId": "model-polarwave-aciq-18-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-18-hpb",
      "indoorUnitId": "iu-aciq-24-acl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-36-hp-ez-36-ah",
      "slug": "polarwave-ez-36-hp-ez-36-ah",
      "modelId": "model-polarwave-ez-36-hp",
      "outdoorUnitId": "ou-polarwave-ez-36-hp",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-48-ehpb-ez-48-ahb",
      "slug": "polarwave-ez-48-ehpb-ez-48-ahb",
      "modelId": "model-polarwave-ez-48-ehpb",
      "outdoorUnitId": "ou-polarwave-ez-48-ehpb",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-60-hpb-ez-60-ahb",
      "slug": "polarwave-ez-60-hpb-ez-60-ahb",
      "modelId": "model-polarwave-ez-60-hpb",
      "outdoorUnitId": "ou-polarwave-ez-60-hpb",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-60zpl-hp230b-aciq-60cd-hh-mb",
      "slug": "polarwave-aciq-60zpl-hp230b-aciq-60cd-hh-mb",
      "modelId": "model-polarwave-aciq-60zpl-hp230b",
      "outdoorUnitId": "ou-polarwave-aciq-60zpl-hp230b",
      "indoorUnitId": "iu-aciq-60cd-hh-mb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-24-ehpb-aciq-24-acl",
      "slug": "polarwave-aciq-24-ehpb-aciq-24-acl",
      "modelId": "model-polarwave-aciq-24-ehpb",
      "outdoorUnitId": "ou-polarwave-aciq-24-ehpb",
      "indoorUnitId": "iu-aciq-24-acl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.7,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-48-hp-ez-48-ah",
      "slug": "polarwave-ez-48-hp-ez-48-ah",
      "modelId": "model-polarwave-ez-48-hp",
      "outdoorUnitId": "ou-polarwave-ez-48-hp",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-30-hpb-aciq-30-acl",
      "slug": "polarwave-aciq-30-hpb-aciq-30-acl",
      "modelId": "model-polarwave-aciq-30-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-30-hpb",
      "indoorUnitId": "iu-aciq-30-acl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36-hpb-aciq-36-acl-17",
      "slug": "polarwave-aciq-36-hpb-aciq-36-acl-17",
      "modelId": "model-polarwave-aciq-36-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-36-hpb",
      "indoorUnitId": "iu-aciq-36-acl-17",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-30-hpb-aciq-36-acl",
      "slug": "polarwave-aciq-30-hpb-aciq-36-acl",
      "modelId": "model-polarwave-aciq-30-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-30-hpb",
      "indoorUnitId": "iu-aciq-36-acl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-60-hp-ez-60-ah",
      "slug": "polarwave-ez-60-hp-ez-60-ah",
      "modelId": "model-polarwave-ez-60-hp",
      "outdoorUnitId": "ou-polarwave-ez-60-hp",
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
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36-hpc-aciq-36-acl",
      "slug": "polarwave-aciq-36-hpc-aciq-36-acl",
      "modelId": "model-polarwave-aciq-36-hpc",
      "outdoorUnitId": "ou-polarwave-aciq-36-hpc",
      "indoorUnitId": "iu-aciq-36-acl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36-hpc-aciq-36-acl-17",
      "slug": "polarwave-aciq-36-hpc-aciq-36-acl-17",
      "modelId": "model-polarwave-aciq-36-hpc",
      "outdoorUnitId": "ou-polarwave-aciq-36-hpc",
      "indoorUnitId": "iu-aciq-36-acl-17",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-30-hpb-aciq-36-acl-17",
      "slug": "polarwave-aciq-30-hpb-aciq-36-acl-17",
      "modelId": "model-polarwave-aciq-30-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-30-hpb",
      "indoorUnitId": "iu-aciq-36-acl-17",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-aciq-36-hpb-aciq-36-acl",
      "slug": "polarwave-aciq-36-hpb-aciq-36-acl",
      "modelId": "model-polarwave-aciq-36-hpb",
      "outdoorUnitId": "ou-polarwave-aciq-36-hpb",
      "indoorUnitId": "iu-aciq-36-acl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-polarwave-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-polarwave-ez-60-ehpb-ez-60-ahb",
      "slug": "polarwave-ez-60-ehpb-ez-60-ahb",
      "modelId": "model-polarwave-ez-60-ehpb",
      "outdoorUnitId": "ou-polarwave-ez-60-ehpb",
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
          "sourceId": "src-polarwave-epa",
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
