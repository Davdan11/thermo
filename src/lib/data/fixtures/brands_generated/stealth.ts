import type { BrandDataset } from "../../types";

export const brand_stealthDataset: BrandDataset = {
  "brand": {
    "id": "brand-stealth",
    "slug": "stealth",
    "name": "STEALTH",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour STEALTH",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-stealth-epa",
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
      "id": "series-stealth-aciq",
      "slug": "stealth-aciq",
      "name": "ACIQ",
      "brandId": "brand-stealth",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACIQ de STEALTH",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stealth-es-series",
      "slug": "stealth-es-series",
      "name": "ES SERIES",
      "brandId": "brand-stealth",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ES SERIES de STEALTH",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stealth-aciq-series",
      "slug": "stealth-aciq-series",
      "name": "ACIQ series",
      "brandId": "brand-stealth",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACIQ series de STEALTH",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-stealth-aciq-09zpl-hp230b",
      "slug": "stealth-aciq-09zpl-hp230b",
      "name": "STEALTH ACIQ-09ZPL-HP230B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-06zpl-hp230b",
      "slug": "stealth-aciq-06zpl-hp230b",
      "name": "STEALTH ACIQ-06ZPL-HP230B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-12zpl-hp230b",
      "slug": "stealth-aciq-12zpl-hp230b",
      "name": "STEALTH ACIQ-12ZPL-HP230B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-es-27z-m3b",
      "slug": "stealth-es-27z-m3b",
      "name": "STEALTH ES-27Z-M3B",
      "seriesId": "series-stealth-es-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-es-36z-m4b",
      "slug": "stealth-es-36z-m4b",
      "name": "STEALTH ES-36Z-M4B",
      "seriesId": "series-stealth-es-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-es-48z-m5b",
      "slug": "stealth-es-48z-m5b",
      "name": "STEALTH ES-48Z-M5B",
      "seriesId": "series-stealth-es-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-27z-hh-m3b",
      "slug": "stealth-aciq-27z-hh-m3b",
      "name": "STEALTH ACIQ-27Z-HH-M3B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-es-18z-m2b",
      "slug": "stealth-es-18z-m2b",
      "name": "STEALTH ES-18Z-M2B",
      "seriesId": "series-stealth-es-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-36z-hh-m4b",
      "slug": "stealth-aciq-36z-hh-m4b",
      "name": "STEALTH ACIQ-36Z-HH-M4B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-55z-hh-m5b",
      "slug": "stealth-aciq-55z-hh-m5b",
      "name": "STEALTH ACIQ-55Z-HH-M5B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-18z-hh-m2b",
      "slug": "stealth-aciq-18z-hh-m2b",
      "name": "STEALTH ACIQ-18Z-HH-M2B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-48z-hh-m5b",
      "slug": "stealth-aciq-48z-hh-m5b",
      "name": "STEALTH ACIQ-48Z-HH-M5B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-18zpl-hp230b",
      "slug": "stealth-aciq-18zpl-hp230b",
      "name": "STEALTH ACIQ-18ZPL-HP230B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-24zpl-hp230b",
      "slug": "stealth-aciq-24zpl-hp230b",
      "name": "STEALTH ACIQ-24ZPL-HP230B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-09z-hp115b",
      "slug": "stealth-aciq-09z-hp115b",
      "name": "STEALTH ACIQ-09Z-HP115B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-36zpl-hp230b",
      "slug": "stealth-aciq-36zpl-hp230b",
      "name": "STEALTH ACIQ-36ZPL-HP230B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-18-hpb",
      "slug": "stealth-aciq-18-hpb",
      "name": "STEALTH ACIQ-18-HPB",
      "seriesId": "series-stealth-aciq-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-24-hpb",
      "slug": "stealth-aciq-24-hpb",
      "name": "STEALTH ACIQ-24-HPB",
      "seriesId": "series-stealth-aciq-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-30-hpb",
      "slug": "stealth-aciq-30-hpb",
      "name": "STEALTH ACIQ-30-HPB",
      "seriesId": "series-stealth-aciq-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-36-hpb",
      "slug": "stealth-aciq-36-hpb",
      "name": "STEALTH ACIQ-36-HPB",
      "seriesId": "series-stealth-aciq-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-12-ehpb",
      "slug": "stealth-aciq-12-ehpb",
      "name": "STEALTH ACIQ-12-EHPB",
      "seriesId": "series-stealth-aciq-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-60zpl-hp230b",
      "slug": "stealth-aciq-60zpl-hp230b",
      "name": "STEALTH ACIQ-60ZPL-HP230B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-48zpl-hp230b",
      "slug": "stealth-aciq-48zpl-hp230b",
      "name": "STEALTH ACIQ-48ZPL-HP230B",
      "seriesId": "series-stealth-aciq",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-24-ehpb",
      "slug": "stealth-aciq-24-ehpb",
      "name": "STEALTH ACIQ-24-EHPB",
      "seriesId": "series-stealth-aciq-series",
      "brandId": "brand-stealth",
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
      "id": "model-stealth-aciq-36-hpc",
      "slug": "stealth-aciq-36-hpc",
      "name": "STEALTH ACIQ-36-HPC",
      "seriesId": "series-stealth-aciq-series",
      "brandId": "brand-stealth",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-stealth-aciq-09zpl-hp230b",
      "modelNumber": "ACIQ-09ZPL-HP230B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-06zpl-hp230b",
      "modelNumber": "ACIQ-06ZPL-HP230B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-12zpl-hp230b",
      "modelNumber": "ACIQ-12ZPL-HP230B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-es-27z-m3b",
      "modelNumber": "ES-27Z-M3B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-es-36z-m4b",
      "modelNumber": "ES-36Z-M4B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-es-48z-m5b",
      "modelNumber": "ES-48Z-M5B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-27z-hh-m3b",
      "modelNumber": "ACIQ-27Z-HH-M3B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-es-18z-m2b",
      "modelNumber": "ES-18Z-M2B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-36z-hh-m4b",
      "modelNumber": "ACIQ-36Z-HH-M4B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-55z-hh-m5b",
      "modelNumber": "ACIQ-55Z-HH-M5B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-18z-hh-m2b",
      "modelNumber": "ACIQ-18Z-HH-M2B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-48z-hh-m5b",
      "modelNumber": "ACIQ-48Z-HH-M5B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-18zpl-hp230b",
      "modelNumber": "ACIQ-18ZPL-HP230B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-24zpl-hp230b",
      "modelNumber": "ACIQ-24ZPL-HP230B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-09z-hp115b",
      "modelNumber": "ACIQ-09Z-HP115B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-36zpl-hp230b",
      "modelNumber": "ACIQ-36ZPL-HP230B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-18-hpb",
      "modelNumber": "ACIQ-18-HPB",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-24-hpb",
      "modelNumber": "ACIQ-24-HPB",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-30-hpb",
      "modelNumber": "ACIQ-30-HPB",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-36-hpb",
      "modelNumber": "ACIQ-36-HPB",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-12-ehpb",
      "modelNumber": "ACIQ-12-EHPB",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-60zpl-hp230b",
      "modelNumber": "ACIQ-60ZPL-HP230B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-48zpl-hp230b",
      "modelNumber": "ACIQ-48ZPL-HP230B",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-24-ehpb",
      "modelNumber": "ACIQ-24-EHPB",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-aciq-36-hpc",
      "modelNumber": "ACIQ-36-HPC",
      "brandId": "brand-stealth",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-aciq-09w-hh-mc",
      "modelNumber": "ACIQ-09W-HH-MC",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hh-mb",
      "modelNumber": "ACIQ-09W-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-06w-hh-mc",
      "modelNumber": "ACIQ-06W-HH-MC",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-mb",
      "modelNumber": "ACIQ-12W-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-mc",
      "modelNumber": "ACIQ-12W-HH-MC",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50897",
      "modelNumber": "IU-50897",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-mc",
      "modelNumber": "ACIQ-12FM-HH-MC",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-0609-hh-m",
      "modelNumber": "SCC-0609-HH-M",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50898",
      "modelNumber": "IU-50898",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-mb",
      "modelNumber": "ACIQ-12FM-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50899",
      "modelNumber": "IU-50899",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-1218-hh-m",
      "modelNumber": "SCC-1218-HH-M",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50884",
      "modelNumber": "IU-50884",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50896",
      "modelNumber": "IU-50896",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cc-hh-mb",
      "modelNumber": "ACIQ-12CC-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50885",
      "modelNumber": "IU-50885",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50893",
      "modelNumber": "IU-50893",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50872",
      "modelNumber": "IU-50872",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50889",
      "modelNumber": "IU-50889",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-mb",
      "modelNumber": "ACIQ-18W-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hh-mc",
      "modelNumber": "ACIQ-24W-HH-MC",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-mc",
      "modelNumber": "ACIQ-18W-HH-MC",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hh-mb",
      "modelNumber": "ACIQ-24W-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hp115b",
      "modelNumber": "ACIQ-09W-HP115B",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24fm-hh-mb",
      "modelNumber": "ACIQ-24FM-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cc-hh-mb",
      "modelNumber": "ACIQ-09CC-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-mb",
      "modelNumber": "ACIQ-18FM-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-mc",
      "modelNumber": "ACIQ-18FM-HH-MC",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cd-hh-mb",
      "modelNumber": "ACIQ-09CD-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18cc-hh-mb",
      "modelNumber": "ACIQ-18CC-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cd-hh-mb",
      "modelNumber": "ACIQ-12CD-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36cc-hh-mb",
      "modelNumber": "ACIQ-36CC-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-wm",
      "modelNumber": "ACIQ-18W-WM",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24cd-hh-mb",
      "modelNumber": "ACIQ-24CD-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-p",
      "modelNumber": "ACIQ-24W-P",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-p",
      "modelNumber": "ACIQ-30W-P",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18cd-hh-mb",
      "modelNumber": "ACIQ-18CD-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18-ahb",
      "modelNumber": "ACIQ-18-AHB",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36w-wm",
      "modelNumber": "ACIQ-36W-WM",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36fm-hh-mb",
      "modelNumber": "ACIQ-36FM-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-wm",
      "modelNumber": "ACIQ-24W-WM",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-12-ahb",
      "modelNumber": "ACIQ-12-AHB",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60fm-hh-mb",
      "modelNumber": "ACIQ-60FM-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48fm-hh-mb",
      "modelNumber": "ACIQ-48FM-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-p",
      "modelNumber": "ACIQ-18W-P",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48cd-hh-mb",
      "modelNumber": "ACIQ-48CD-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24-ahb",
      "modelNumber": "ACIQ-24-AHB",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36w-p",
      "modelNumber": "ACIQ-36W-P",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-wm",
      "modelNumber": "ACIQ-30W-WM",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48cc-hh-mb",
      "modelNumber": "ACIQ-48CC-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36cd-hh-mb",
      "modelNumber": "ACIQ-36CD-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24-acl",
      "modelNumber": "ACIQ-24-ACL",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-ahb",
      "modelNumber": "ACIQ-36-AHB*",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-ahb",
      "modelNumber": "ACIQ-30-AHB",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18-acl",
      "modelNumber": "ACIQ-18-ACL",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-acl-14",
      "modelNumber": "ACIQ-24-ACL-14",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60cd-hh-mb",
      "modelNumber": "ACIQ-60CD-HH-MB",
      "brandId": "brand-stealth",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36-acl",
      "modelNumber": "ACIQ-36-ACL",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-acl",
      "modelNumber": "ACIQ-30-ACL",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl-17",
      "modelNumber": "ACIQ-36-ACL-17",
      "brandId": "brand-stealth",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-stealth-aciq-09zpl-hp230b-aciq-09w-hh-mc",
      "slug": "stealth-aciq-09zpl-hp230b-aciq-09w-hh-mc",
      "modelId": "model-stealth-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-09zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-09zpl-hp230b-aciq-09w-hh-mb",
      "slug": "stealth-aciq-09zpl-hp230b-aciq-09w-hh-mb",
      "modelId": "model-stealth-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-09zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-06zpl-hp230b-aciq-06w-hh-mc",
      "slug": "stealth-aciq-06zpl-hp230b-aciq-06w-hh-mc",
      "modelId": "model-stealth-aciq-06zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-06zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-12zpl-hp230b-aciq-12w-hh-mb",
      "slug": "stealth-aciq-12zpl-hp230b-aciq-12w-hh-mb",
      "modelId": "model-stealth-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-12zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-12zpl-hp230b-aciq-12w-hh-mc",
      "slug": "stealth-aciq-12zpl-hp230b-aciq-12w-hh-mc",
      "modelId": "model-stealth-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-12zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-es-27z-m3b-iu-50897",
      "slug": "stealth-es-27z-m3b-iu-50897",
      "modelId": "model-stealth-es-27z-m3b",
      "outdoorUnitId": "ou-stealth-es-27z-m3b",
      "indoorUnitId": "iu-iu-50897",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-12zpl-hp230b-aciq-12fm-hh-mc",
      "slug": "stealth-aciq-12zpl-hp230b-aciq-12fm-hh-mc",
      "modelId": "model-stealth-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-12zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-09zpl-hp230b-scc-0609-hh-m",
      "slug": "stealth-aciq-09zpl-hp230b-scc-0609-hh-m",
      "modelId": "model-stealth-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-09zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-es-36z-m4b-iu-50898",
      "slug": "stealth-es-36z-m4b-iu-50898",
      "modelId": "model-stealth-es-36z-m4b",
      "outdoorUnitId": "ou-stealth-es-36z-m4b",
      "indoorUnitId": "iu-iu-50898",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-12zpl-hp230b-aciq-12fm-hh-mb",
      "slug": "stealth-aciq-12zpl-hp230b-aciq-12fm-hh-mb",
      "modelId": "model-stealth-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-12zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-es-48z-m5b-iu-50899",
      "slug": "stealth-es-48z-m5b-iu-50899",
      "modelId": "model-stealth-es-48z-m5b",
      "outdoorUnitId": "ou-stealth-es-48z-m5b",
      "indoorUnitId": "iu-iu-50899",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-12zpl-hp230b-scc-1218-hh-m",
      "slug": "stealth-aciq-12zpl-hp230b-scc-1218-hh-m",
      "modelId": "model-stealth-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-12zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-27z-hh-m3b-iu-50884",
      "slug": "stealth-aciq-27z-hh-m3b-iu-50884",
      "modelId": "model-stealth-aciq-27z-hh-m3b",
      "outdoorUnitId": "ou-stealth-aciq-27z-hh-m3b",
      "indoorUnitId": "iu-iu-50884",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-es-18z-m2b-iu-50896",
      "slug": "stealth-es-18z-m2b-iu-50896",
      "modelId": "model-stealth-es-18z-m2b",
      "outdoorUnitId": "ou-stealth-es-18z-m2b",
      "indoorUnitId": "iu-iu-50896",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-12zpl-hp230b-aciq-12cc-hh-mb",
      "slug": "stealth-aciq-12zpl-hp230b-aciq-12cc-hh-mb",
      "modelId": "model-stealth-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-12zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36z-hh-m4b-iu-50885",
      "slug": "stealth-aciq-36z-hh-m4b-iu-50885",
      "modelId": "model-stealth-aciq-36z-hh-m4b",
      "outdoorUnitId": "ou-stealth-aciq-36z-hh-m4b",
      "indoorUnitId": "iu-iu-50885",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-55z-hh-m5b-iu-50893",
      "slug": "stealth-aciq-55z-hh-m5b-iu-50893",
      "modelId": "model-stealth-aciq-55z-hh-m5b",
      "outdoorUnitId": "ou-stealth-aciq-55z-hh-m5b",
      "indoorUnitId": "iu-iu-50893",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-06zpl-hp230b-scc-0609-hh-m",
      "slug": "stealth-aciq-06zpl-hp230b-scc-0609-hh-m",
      "modelId": "model-stealth-aciq-06zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-06zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18z-hh-m2b-iu-50872",
      "slug": "stealth-aciq-18z-hh-m2b-iu-50872",
      "modelId": "model-stealth-aciq-18z-hh-m2b",
      "outdoorUnitId": "ou-stealth-aciq-18z-hh-m2b",
      "indoorUnitId": "iu-iu-50872",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-48z-hh-m5b-iu-50889",
      "slug": "stealth-aciq-48z-hh-m5b-iu-50889",
      "modelId": "model-stealth-aciq-48z-hh-m5b",
      "outdoorUnitId": "ou-stealth-aciq-48z-hh-m5b",
      "indoorUnitId": "iu-iu-50889",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18zpl-hp230b-aciq-18w-hh-mb",
      "slug": "stealth-aciq-18zpl-hp230b-aciq-18w-hh-mb",
      "modelId": "model-stealth-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-18zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24zpl-hp230b-aciq-24w-hh-mc",
      "slug": "stealth-aciq-24zpl-hp230b-aciq-24w-hh-mc",
      "modelId": "model-stealth-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-24zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18zpl-hp230b-aciq-18w-hh-mc",
      "slug": "stealth-aciq-18zpl-hp230b-aciq-18w-hh-mc",
      "modelId": "model-stealth-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-18zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24zpl-hp230b-aciq-24w-hh-mb",
      "slug": "stealth-aciq-24zpl-hp230b-aciq-24w-hh-mb",
      "modelId": "model-stealth-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-24zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-09z-hp115b-aciq-09w-hp115b",
      "slug": "stealth-aciq-09z-hp115b-aciq-09w-hp115b",
      "modelId": "model-stealth-aciq-09z-hp115b",
      "outdoorUnitId": "ou-stealth-aciq-09z-hp115b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24zpl-hp230b-aciq-24fm-hh-mb",
      "slug": "stealth-aciq-24zpl-hp230b-aciq-24fm-hh-mb",
      "modelId": "model-stealth-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-24zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-09zpl-hp230b-aciq-09cc-hh-mb",
      "slug": "stealth-aciq-09zpl-hp230b-aciq-09cc-hh-mb",
      "modelId": "model-stealth-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-09zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18zpl-hp230b-aciq-18fm-hh-mb",
      "slug": "stealth-aciq-18zpl-hp230b-aciq-18fm-hh-mb",
      "modelId": "model-stealth-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-18zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18zpl-hp230b-aciq-18fm-hh-mc",
      "slug": "stealth-aciq-18zpl-hp230b-aciq-18fm-hh-mc",
      "modelId": "model-stealth-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-18zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-09zpl-hp230b-aciq-09cd-hh-mb",
      "slug": "stealth-aciq-09zpl-hp230b-aciq-09cd-hh-mb",
      "modelId": "model-stealth-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-09zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18zpl-hp230b-aciq-18cc-hh-mb",
      "slug": "stealth-aciq-18zpl-hp230b-aciq-18cc-hh-mb",
      "modelId": "model-stealth-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-18zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18zpl-hp230b-scc-1218-hh-m",
      "slug": "stealth-aciq-18zpl-hp230b-scc-1218-hh-m",
      "modelId": "model-stealth-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-18zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-12zpl-hp230b-aciq-12cd-hh-mb",
      "slug": "stealth-aciq-12zpl-hp230b-aciq-12cd-hh-mb",
      "modelId": "model-stealth-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-12zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36zpl-hp230b-aciq-36cc-hh-mb",
      "slug": "stealth-aciq-36zpl-hp230b-aciq-36cc-hh-mb",
      "modelId": "model-stealth-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-36zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18-hpb-aciq-18w-wm",
      "slug": "stealth-aciq-18-hpb-aciq-18w-wm",
      "modelId": "model-stealth-aciq-18-hpb",
      "outdoorUnitId": "ou-stealth-aciq-18-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24zpl-hp230b-aciq-24cd-hh-mb",
      "slug": "stealth-aciq-24zpl-hp230b-aciq-24cd-hh-mb",
      "modelId": "model-stealth-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-24zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24-hpb-aciq-24w-p",
      "slug": "stealth-aciq-24-hpb-aciq-24w-p",
      "modelId": "model-stealth-aciq-24-hpb",
      "outdoorUnitId": "ou-stealth-aciq-24-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-30-hpb-aciq-30w-p",
      "slug": "stealth-aciq-30-hpb-aciq-30w-p",
      "modelId": "model-stealth-aciq-30-hpb",
      "outdoorUnitId": "ou-stealth-aciq-30-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18zpl-hp230b-aciq-18cd-hh-mb",
      "slug": "stealth-aciq-18zpl-hp230b-aciq-18cd-hh-mb",
      "modelId": "model-stealth-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-18zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18-hpb-aciq-18-ahb",
      "slug": "stealth-aciq-18-hpb-aciq-18-ahb",
      "modelId": "model-stealth-aciq-18-hpb",
      "outdoorUnitId": "ou-stealth-aciq-18-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36-hpb-aciq-36w-wm",
      "slug": "stealth-aciq-36-hpb-aciq-36w-wm",
      "modelId": "model-stealth-aciq-36-hpb",
      "outdoorUnitId": "ou-stealth-aciq-36-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36zpl-hp230b-aciq-36fm-hh-mb",
      "slug": "stealth-aciq-36zpl-hp230b-aciq-36fm-hh-mb",
      "modelId": "model-stealth-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-36zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24-hpb-aciq-24w-wm",
      "slug": "stealth-aciq-24-hpb-aciq-24w-wm",
      "modelId": "model-stealth-aciq-24-hpb",
      "outdoorUnitId": "ou-stealth-aciq-24-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-12-ehpb-aciq-12-ahb",
      "slug": "stealth-aciq-12-ehpb-aciq-12-ahb",
      "modelId": "model-stealth-aciq-12-ehpb",
      "outdoorUnitId": "ou-stealth-aciq-12-ehpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-60zpl-hp230b-aciq-60fm-hh-mb",
      "slug": "stealth-aciq-60zpl-hp230b-aciq-60fm-hh-mb",
      "modelId": "model-stealth-aciq-60zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-60zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-48zpl-hp230b-aciq-48fm-hh-mb",
      "slug": "stealth-aciq-48zpl-hp230b-aciq-48fm-hh-mb",
      "modelId": "model-stealth-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-48zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18-hpb-aciq-18w-p",
      "slug": "stealth-aciq-18-hpb-aciq-18w-p",
      "modelId": "model-stealth-aciq-18-hpb",
      "outdoorUnitId": "ou-stealth-aciq-18-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24-ehpb-aciq-24w-wm",
      "slug": "stealth-aciq-24-ehpb-aciq-24w-wm",
      "modelId": "model-stealth-aciq-24-ehpb",
      "outdoorUnitId": "ou-stealth-aciq-24-ehpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-48zpl-hp230b-aciq-48cd-hh-mb",
      "slug": "stealth-aciq-48zpl-hp230b-aciq-48cd-hh-mb",
      "modelId": "model-stealth-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-48zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24-ehpb-aciq-24-ahb",
      "slug": "stealth-aciq-24-ehpb-aciq-24-ahb",
      "modelId": "model-stealth-aciq-24-ehpb",
      "outdoorUnitId": "ou-stealth-aciq-24-ehpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36-hpb-aciq-36w-p",
      "slug": "stealth-aciq-36-hpb-aciq-36w-p",
      "modelId": "model-stealth-aciq-36-hpb",
      "outdoorUnitId": "ou-stealth-aciq-36-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-30-hpb-aciq-30w-wm",
      "slug": "stealth-aciq-30-hpb-aciq-30w-wm",
      "modelId": "model-stealth-aciq-30-hpb",
      "outdoorUnitId": "ou-stealth-aciq-30-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-48zpl-hp230b-aciq-48cc-hh-mb",
      "slug": "stealth-aciq-48zpl-hp230b-aciq-48cc-hh-mb",
      "modelId": "model-stealth-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-48zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36zpl-hp230b-aciq-36cd-hh-mb",
      "slug": "stealth-aciq-36zpl-hp230b-aciq-36cd-hh-mb",
      "modelId": "model-stealth-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-36zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24-hpb-aciq-24-acl",
      "slug": "stealth-aciq-24-hpb-aciq-24-acl",
      "modelId": "model-stealth-aciq-24-hpb",
      "outdoorUnitId": "ou-stealth-aciq-24-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36-hpc-aciq-36-ahb",
      "slug": "stealth-aciq-36-hpc-aciq-36-ahb",
      "modelId": "model-stealth-aciq-36-hpc",
      "outdoorUnitId": "ou-stealth-aciq-36-hpc",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-30-hpb-aciq-30-ahb",
      "slug": "stealth-aciq-30-hpb-aciq-30-ahb",
      "modelId": "model-stealth-aciq-30-hpb",
      "outdoorUnitId": "ou-stealth-aciq-30-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18-hpb-aciq-18-acl",
      "slug": "stealth-aciq-18-hpb-aciq-18-acl",
      "modelId": "model-stealth-aciq-18-hpb",
      "outdoorUnitId": "ou-stealth-aciq-18-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24-hpb-aciq-24-acl-14",
      "slug": "stealth-aciq-24-hpb-aciq-24-acl-14",
      "modelId": "model-stealth-aciq-24-hpb",
      "outdoorUnitId": "ou-stealth-aciq-24-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-18-hpb-aciq-24-acl",
      "slug": "stealth-aciq-18-hpb-aciq-24-acl",
      "modelId": "model-stealth-aciq-18-hpb",
      "outdoorUnitId": "ou-stealth-aciq-18-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-60zpl-hp230b-aciq-60cd-hh-mb",
      "slug": "stealth-aciq-60zpl-hp230b-aciq-60cd-hh-mb",
      "modelId": "model-stealth-aciq-60zpl-hp230b",
      "outdoorUnitId": "ou-stealth-aciq-60zpl-hp230b",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-24-ehpb-aciq-24-acl",
      "slug": "stealth-aciq-24-ehpb-aciq-24-acl",
      "modelId": "model-stealth-aciq-24-ehpb",
      "outdoorUnitId": "ou-stealth-aciq-24-ehpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-30-hpb-aciq-36-acl",
      "slug": "stealth-aciq-30-hpb-aciq-36-acl",
      "modelId": "model-stealth-aciq-30-hpb",
      "outdoorUnitId": "ou-stealth-aciq-30-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-30-hpb-aciq-30-acl",
      "slug": "stealth-aciq-30-hpb-aciq-30-acl",
      "modelId": "model-stealth-aciq-30-hpb",
      "outdoorUnitId": "ou-stealth-aciq-30-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36-hpb-aciq-36-acl-17",
      "slug": "stealth-aciq-36-hpb-aciq-36-acl-17",
      "modelId": "model-stealth-aciq-36-hpb",
      "outdoorUnitId": "ou-stealth-aciq-36-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36-hpc-aciq-36-acl-17",
      "slug": "stealth-aciq-36-hpc-aciq-36-acl-17",
      "modelId": "model-stealth-aciq-36-hpc",
      "outdoorUnitId": "ou-stealth-aciq-36-hpc",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36-hpc-aciq-36-acl",
      "slug": "stealth-aciq-36-hpc-aciq-36-acl",
      "modelId": "model-stealth-aciq-36-hpc",
      "outdoorUnitId": "ou-stealth-aciq-36-hpc",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-30-hpb-aciq-36-acl-17",
      "slug": "stealth-aciq-30-hpb-aciq-36-acl-17",
      "modelId": "model-stealth-aciq-30-hpb",
      "outdoorUnitId": "ou-stealth-aciq-30-hpb",
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
          "sourceId": "src-stealth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-aciq-36-hpb-aciq-36-acl",
      "slug": "stealth-aciq-36-hpb-aciq-36-acl",
      "modelId": "model-stealth-aciq-36-hpb",
      "outdoorUnitId": "ou-stealth-aciq-36-hpb",
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
          "sourceId": "src-stealth-epa",
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
