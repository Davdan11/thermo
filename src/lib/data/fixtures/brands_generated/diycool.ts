import type { BrandDataset } from "../../types";

export const brand_diycoolDataset: BrandDataset = {
  "brand": {
    "id": "brand-diycool",
    "slug": "diycool",
    "name": "DIYCOOL",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour DIYCOOL",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-diycool-epa",
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
      "id": "series-diycool-aciq",
      "slug": "diycool-aciq",
      "name": "ACIQ",
      "brandId": "brand-diycool",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACIQ de DIYCOOL",
      "imageUrl": "/images/series/diycool-diycool-aciq.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-diycool-es-series",
      "slug": "diycool-es-series",
      "name": "ES SERIES",
      "brandId": "brand-diycool",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ES SERIES de DIYCOOL",
      "imageUrl": "/images/series/diycool-diycool-es-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-diycool-ez-series",
      "slug": "diycool-ez-series",
      "name": "EZ Series",
      "brandId": "brand-diycool",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EZ Series de DIYCOOL",
      "imageUrl": "/images/series/diycool-diycool-ez-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-diycool-extreme-heat",
      "slug": "diycool-extreme-heat",
      "name": "Extreme Heat",
      "brandId": "brand-diycool",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Extreme Heat de DIYCOOL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-diycool-aciq-series",
      "slug": "diycool-aciq-series",
      "name": "ACIQ series",
      "brandId": "brand-diycool",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACIQ series de DIYCOOL",
      "imageUrl": "/images/series/diycool-diycool-aciq-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-diycool-r32-extreme-heat-unitary",
      "slug": "diycool-r32-extreme-heat-unitary",
      "name": "R32 Extreme Heat Unitary",
      "brandId": "brand-diycool",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série R32 Extreme Heat Unitary de DIYCOOL",
      "imageUrl": "/images/series/diycool-diycool-r32-extreme-heat-unitary.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-diycool-extreme-heat-inverter-rooftop",
      "slug": "diycool-extreme-heat-inverter-rooftop",
      "name": "Extreme Heat Inverter Rooftop",
      "brandId": "brand-diycool",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Extreme Heat Inverter Rooftop de DIYCOOL",
      "imageUrl": "/images/series/diycool-diycool-extreme-heat-inverter-rooftop.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-diycool-ultra-heat-unitary-condensing-unit",
      "slug": "diycool-ultra-heat-unitary-condensing-unit",
      "name": "Ultra Heat Unitary Condensing Unit",
      "brandId": "brand-diycool",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra Heat Unitary Condensing Unit de DIYCOOL",
      "imageUrl": "/images/series/diycool-diycool-ultra-heat-unitary-condensing-unit.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-diycool-aciq-09zpl-hp230b",
      "slug": "diycool-aciq-09zpl-hp230b",
      "name": "DIYCOOL ACIQ-09ZPL-HP230B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-06zpl-hp230b",
      "slug": "diycool-aciq-06zpl-hp230b",
      "name": "DIYCOOL ACIQ-06ZPL-HP230B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-12zpl-hp230b",
      "slug": "diycool-aciq-12zpl-hp230b",
      "name": "DIYCOOL ACIQ-12ZPL-HP230B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-es-27z-m3b",
      "slug": "diycool-es-27z-m3b",
      "name": "DIYCOOL ES-27Z-M3B",
      "seriesId": "series-diycool-es-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-es-36z-m4b",
      "slug": "diycool-es-36z-m4b",
      "name": "DIYCOOL ES-36Z-M4B",
      "seriesId": "series-diycool-es-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-18z-m2b",
      "slug": "diycool-ez-18z-m2b",
      "name": "DIYCOOL EZ-18Z-M2B",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-12zpl-hp115b",
      "slug": "diycool-ez-12zpl-hp115b",
      "name": "DIYCOOL EZ-12ZPL-HP115B",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-es-48z-m5b",
      "slug": "diycool-es-48z-m5b",
      "name": "DIYCOOL ES-48Z-M5B",
      "seriesId": "series-diycool-es-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-27z-m3b",
      "slug": "diycool-ez-27z-m3b",
      "name": "DIYCOOL EZ-27Z-M3B",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-36z-m4b",
      "slug": "diycool-ez-36z-m4b",
      "name": "DIYCOOL EZ-36Z-M4B",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-27z-hh-m3b",
      "slug": "diycool-aciq-27z-hh-m3b",
      "name": "DIYCOOL ACIQ-27Z-HH-M3B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-es-18z-m2b",
      "slug": "diycool-es-18z-m2b",
      "name": "DIYCOOL ES-18Z-M2B",
      "seriesId": "series-diycool-es-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-18zpl-hp230",
      "slug": "diycool-ez-18zpl-hp230",
      "name": "DIYCOOL EZ-18ZPL-HP230",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-24zpl-hp230b",
      "slug": "diycool-ez-24zpl-hp230b",
      "name": "DIYCOOL EZ-24ZPL-HP230B",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-18zpl-hp230b",
      "slug": "diycool-ez-18zpl-hp230b",
      "name": "DIYCOOL EZ-18ZPL-HP230B",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-12zpl-hp115",
      "slug": "diycool-ez-12zpl-hp115",
      "name": "DIYCOOL EZ-12ZPL-HP115",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-36z-hh-m4b",
      "slug": "diycool-aciq-36z-hh-m4b",
      "name": "DIYCOOL ACIQ-36Z-HH-M4B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-27z-m3",
      "slug": "diycool-ez-27z-m3",
      "name": "DIYCOOL EZ-27Z-M3",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-18z-hh-m2b",
      "slug": "diycool-aciq-18z-hh-m2b",
      "name": "DIYCOOL ACIQ-18Z-HH-M2B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-55z-hh-m5b",
      "slug": "diycool-aciq-55z-hh-m5b",
      "name": "DIYCOOL ACIQ-55Z-HH-M5B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-48z-m5b",
      "slug": "diycool-ez-48z-m5b",
      "name": "DIYCOOL EZ-48Z-M5B",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-48z-hh-m5b",
      "slug": "diycool-aciq-48z-hh-m5b",
      "name": "DIYCOOL ACIQ-48Z-HH-M5B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-18zpl-hp230b",
      "slug": "diycool-aciq-18zpl-hp230b",
      "name": "DIYCOOL ACIQ-18ZPL-HP230B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-09z-hp115b",
      "slug": "diycool-aciq-09z-hp115b",
      "name": "DIYCOOL ACIQ-09Z-HP115B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-24zpl-hp230b",
      "slug": "diycool-aciq-24zpl-hp230b",
      "name": "DIYCOOL ACIQ-24ZPL-HP230B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-18z-m2",
      "slug": "diycool-ez-18z-m2",
      "name": "DIYCOOL EZ-18Z-M2",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-sc-27z-hh-m4b",
      "slug": "diycool-sc-27z-hh-m4b",
      "name": "DIYCOOL SC-27Z-HH-M4B",
      "seriesId": "series-diycool-extreme-heat",
      "brandId": "brand-diycool",
      "modelNumber": "SC-27Z-HH-M4B",
      "normalizedModelNumber": "sc-27z-hh-m4b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23200,
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
      "id": "model-diycool-ez-48z-m5",
      "slug": "diycool-ez-48z-m5",
      "name": "DIYCOOL EZ-48Z-M5",
      "seriesId": "series-diycool-es-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-24zpl-hp230",
      "slug": "diycool-ez-24zpl-hp230",
      "name": "DIYCOOL EZ-24ZPL-HP230",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-09z-hp115b",
      "slug": "diycool-ez-09z-hp115b",
      "name": "DIYCOOL EZ-09Z-HP115B",
      "seriesId": "series-diycool-es-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-09z-hp115",
      "slug": "diycool-ez-09z-hp115",
      "name": "DIYCOOL EZ-09Z-HP115",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-36zpl-hp230b",
      "slug": "diycool-aciq-36zpl-hp230b",
      "name": "DIYCOOL ACIQ-36ZPL-HP230B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-18-hpb",
      "slug": "diycool-aciq-18-hpb",
      "name": "DIYCOOL ACIQ-18-HPB",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-24-hpb",
      "slug": "diycool-aciq-24-hpb",
      "name": "DIYCOOL ACIQ-24-HPB",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-48-hp32",
      "slug": "diycool-aciq-48-hp32",
      "name": "DIYCOOL ACIQ-48-HP32",
      "seriesId": "series-diycool-r32-extreme-heat-unitary",
      "brandId": "brand-diycool",
      "modelNumber": "ACIQ-48-HP32",
      "normalizedModelNumber": "aciq-48-hp32",
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
      "id": "model-diycool-aciq-60-hp32",
      "slug": "diycool-aciq-60-hp32",
      "name": "DIYCOOL ACIQ-60-HP32",
      "seriesId": "series-diycool-r32-extreme-heat-unitary",
      "brandId": "brand-diycool",
      "modelNumber": "ACIQ-60-HP32",
      "normalizedModelNumber": "aciq-60-hp32",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53000,
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
      "id": "model-diycool-ez-24-hpb",
      "slug": "diycool-ez-24-hpb",
      "name": "DIYCOOL EZ-24-HPB",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-30-hpb",
      "slug": "diycool-aciq-30-hpb",
      "name": "DIYCOOL ACIQ-30-HPB",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-36-hp32",
      "slug": "diycool-aciq-36-hp32",
      "name": "DIYCOOL ACIQ-36-HP32",
      "seriesId": "series-diycool-r32-extreme-heat-unitary",
      "brandId": "brand-diycool",
      "modelNumber": "ACIQ-36-HP32",
      "normalizedModelNumber": "aciq-36-hp32",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
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
      "id": "model-diycool-ez-24-ehpb",
      "slug": "diycool-ez-24-ehpb",
      "name": "DIYCOOL EZ-24-EHPB",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-24-hp32",
      "slug": "diycool-aciq-24-hp32",
      "name": "DIYCOOL ACIQ-24-HP32",
      "seriesId": "series-diycool-r32-extreme-heat-unitary",
      "brandId": "brand-diycool",
      "modelNumber": "ACIQ-24-HP32",
      "normalizedModelNumber": "aciq-24-hp32",
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
      "id": "model-diycool-aciq-phh1748000k000v",
      "slug": "diycool-aciq-phh1748000k000v",
      "name": "DIYCOOL ACIQ-PHH1748000K000V",
      "seriesId": "series-diycool-extreme-heat-inverter-rooftop",
      "brandId": "brand-diycool",
      "modelNumber": "ACIQ-PHH1748000K000V",
      "normalizedModelNumber": "aciq-phh1748000k000v",
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
      "id": "model-diycool-aciq-36-hpb",
      "slug": "diycool-aciq-36-hpb",
      "name": "DIYCOOL ACIQ-36-HPB",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-12-ehpb",
      "slug": "diycool-aciq-12-ehpb",
      "name": "DIYCOOL ACIQ-12-EHPB",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-24-hp",
      "slug": "diycool-ez-24-hp",
      "name": "DIYCOOL EZ-24-HP",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-36-hpb",
      "slug": "diycool-ez-36-hpb",
      "name": "DIYCOOL EZ-36-HPB",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-60zpl-hp230b",
      "slug": "diycool-aciq-60zpl-hp230b",
      "name": "DIYCOOL ACIQ-60ZPL-HP230B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-48zpl-hp230b",
      "slug": "diycool-aciq-48zpl-hp230b",
      "name": "DIYCOOL ACIQ-48ZPL-HP230B",
      "seriesId": "series-diycool-aciq",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-24-ehpb",
      "slug": "diycool-aciq-24-ehpb",
      "name": "DIYCOOL ACIQ-24-EHPB",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-sc-2436-hp",
      "slug": "diycool-sc-2436-hp",
      "name": "DIYCOOL SC-2436-HP",
      "seriesId": "series-diycool-ultra-heat-unitary-condensing-unit",
      "brandId": "brand-diycool",
      "modelNumber": "SC-2436-HP",
      "normalizedModelNumber": "sc-2436-hp",
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
      "id": "model-diycool-sc-4860-hp",
      "slug": "diycool-sc-4860-hp",
      "name": "DIYCOOL SC-4860-HP",
      "seriesId": "series-diycool-ultra-heat-unitary-condensing-unit",
      "brandId": "brand-diycool",
      "modelNumber": "SC-4860-HP",
      "normalizedModelNumber": "sc-4860-hp",
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
      "id": "model-diycool-aciq-phh1760000k000v",
      "slug": "diycool-aciq-phh1760000k000v",
      "name": "DIYCOOL ACIQ-PHH1760000K000V",
      "seriesId": "series-diycool-extreme-heat-inverter-rooftop",
      "brandId": "brand-diycool",
      "modelNumber": "ACIQ-PHH1760000K000V",
      "normalizedModelNumber": "aciq-phh1760000k000v",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 56000,
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
      "id": "model-diycool-ez-48-hpb",
      "slug": "diycool-ez-48-hpb",
      "name": "DIYCOOL EZ-48-HPB",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-36-hpc",
      "slug": "diycool-aciq-36-hpc",
      "name": "DIYCOOL ACIQ-36-HPC",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-36-ehpb",
      "slug": "diycool-ez-36-ehpb",
      "name": "DIYCOOL EZ-36-EHPB",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-60-hpb",
      "slug": "diycool-ez-60-hpb",
      "name": "DIYCOOL EZ-60-HPB",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-48-ehpb",
      "slug": "diycool-ez-48-ehpb",
      "name": "DIYCOOL EZ-48-EHPB",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-36-hp",
      "slug": "diycool-ez-36-hp",
      "name": "DIYCOOL EZ-36-HP",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-48-hpb",
      "slug": "diycool-aciq-48-hpb",
      "name": "DIYCOOL ACIQ-48-HPB",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
      "modelNumber": "ACIQ-48-HPB",
      "normalizedModelNumber": "aciq-48-hpb",
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
      "id": "model-diycool-ez-48-hp",
      "slug": "diycool-ez-48-hp",
      "name": "DIYCOOL EZ-48-HP",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-aciq-60hpb",
      "slug": "diycool-aciq-60hpb",
      "name": "DIYCOOL ACIQ-60HPB",
      "seriesId": "series-diycool-aciq-series",
      "brandId": "brand-diycool",
      "modelNumber": "ACIQ-60HPB",
      "normalizedModelNumber": "aciq-60hpb",
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
      "id": "model-diycool-ez-60-hp",
      "slug": "diycool-ez-60-hp",
      "name": "DIYCOOL EZ-60-HP",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "model-diycool-ez-60-ehpb",
      "slug": "diycool-ez-60-ehpb",
      "name": "DIYCOOL EZ-60-EHPB",
      "seriesId": "series-diycool-ez-series",
      "brandId": "brand-diycool",
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
      "id": "ou-diycool-aciq-09zpl-hp230b",
      "modelNumber": "ACIQ-09ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-06zpl-hp230b",
      "modelNumber": "ACIQ-06ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-12zpl-hp230b",
      "modelNumber": "ACIQ-12ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-es-27z-m3b",
      "modelNumber": "ES-27Z-M3B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-es-36z-m4b",
      "modelNumber": "ES-36Z-M4B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-18z-m2b",
      "modelNumber": "EZ-18Z-M2B",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-ez-12zpl-hp115b",
      "modelNumber": "EZ-12ZPL-HP115B",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-es-48z-m5b",
      "modelNumber": "ES-48Z-M5B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-27z-m3b",
      "modelNumber": "EZ-27Z-M3B",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-ez-36z-m4b",
      "modelNumber": "EZ-36Z-M4B",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-aciq-27z-hh-m3b",
      "modelNumber": "ACIQ-27Z-HH-M3B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-es-18z-m2b",
      "modelNumber": "ES-18Z-M2B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-18zpl-hp230",
      "modelNumber": "EZ-18ZPL-HP230",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-24zpl-hp230b",
      "modelNumber": "EZ-24ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-ez-18zpl-hp230b",
      "modelNumber": "EZ-18ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-ez-12zpl-hp115",
      "modelNumber": "EZ-12ZPL-HP115",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-36z-hh-m4b",
      "modelNumber": "ACIQ-36Z-HH-M4B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-27z-m3",
      "modelNumber": "EZ-27Z-M3",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-18z-hh-m2b",
      "modelNumber": "ACIQ-18Z-HH-M2B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-55z-hh-m5b",
      "modelNumber": "ACIQ-55Z-HH-M5B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-48z-m5b",
      "modelNumber": "EZ-48Z-M5B",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-aciq-48z-hh-m5b",
      "modelNumber": "ACIQ-48Z-HH-M5B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-18zpl-hp230b",
      "modelNumber": "ACIQ-18ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-09z-hp115b",
      "modelNumber": "ACIQ-09Z-HP115B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-24zpl-hp230b",
      "modelNumber": "ACIQ-24ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-18z-m2",
      "modelNumber": "EZ-18Z-M2",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-sc-27z-hh-m4b",
      "modelNumber": "SC-27Z-HH-M4B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-48z-m5",
      "modelNumber": "EZ-48Z-M5",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-24zpl-hp230",
      "modelNumber": "EZ-24ZPL-HP230",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-09z-hp115b",
      "modelNumber": "EZ-09Z-HP115B",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-ez-09z-hp115",
      "modelNumber": "EZ-09Z-HP115",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-36zpl-hp230b",
      "modelNumber": "ACIQ-36ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-18-hpb",
      "modelNumber": "ACIQ-18-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-24-hpb",
      "modelNumber": "ACIQ-24-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-48-hp32",
      "modelNumber": "ACIQ-48-HP32",
      "brandId": "brand-diycool",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-diycool-aciq-60-hp32",
      "modelNumber": "ACIQ-60-HP32",
      "brandId": "brand-diycool",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-diycool-ez-24-hpb",
      "modelNumber": "EZ-24-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-aciq-30-hpb",
      "modelNumber": "ACIQ-30-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-36-hp32",
      "modelNumber": "ACIQ-36-HP32",
      "brandId": "brand-diycool",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-diycool-ez-24-ehpb",
      "modelNumber": "EZ-24-EHPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-aciq-24-hp32",
      "modelNumber": "ACIQ-24-HP32",
      "brandId": "brand-diycool",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-diycool-aciq-phh1748000k000v",
      "modelNumber": "ACIQ-PHH1748000K000V",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-36-hpb",
      "modelNumber": "ACIQ-36-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-12-ehpb",
      "modelNumber": "ACIQ-12-EHPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-24-hp",
      "modelNumber": "EZ-24-HP",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-36-hpb",
      "modelNumber": "EZ-36-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-aciq-60zpl-hp230b",
      "modelNumber": "ACIQ-60ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-48zpl-hp230b",
      "modelNumber": "ACIQ-48ZPL-HP230B",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-24-ehpb",
      "modelNumber": "ACIQ-24-EHPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-sc-2436-hp",
      "modelNumber": "SC-2436-HP",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-sc-4860-hp",
      "modelNumber": "SC-4860-HP",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-phh1760000k000v",
      "modelNumber": "ACIQ-PHH1760000K000V",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-48-hpb",
      "modelNumber": "EZ-48-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-aciq-36-hpc",
      "modelNumber": "ACIQ-36-HPC",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-36-ehpb",
      "modelNumber": "EZ-36-EHPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-ez-60-hpb",
      "modelNumber": "EZ-60-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-ez-48-ehpb",
      "modelNumber": "EZ-48-EHPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-diycool-ez-36-hp",
      "modelNumber": "EZ-36-HP",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-48-hpb",
      "modelNumber": "ACIQ-48-HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-48-hp",
      "modelNumber": "EZ-48-HP",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-aciq-60hpb",
      "modelNumber": "ACIQ-60HPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-60-hp",
      "modelNumber": "EZ-60-HP",
      "brandId": "brand-diycool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-diycool-ez-60-ehpb",
      "modelNumber": "EZ-60-EHPB",
      "brandId": "brand-diycool",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-aciq-09w-hh-mb",
      "modelNumber": "ACIQ-09W-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hh-mc",
      "modelNumber": "ACIQ-09W-HH-MC",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-06w-hh-mc",
      "modelNumber": "ACIQ-06W-HH-MC",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-mb",
      "modelNumber": "ACIQ-12W-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-mc",
      "modelNumber": "ACIQ-12W-HH-MC",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43817",
      "modelNumber": "IU-43817",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-mc",
      "modelNumber": "ACIQ-12FM-HH-MC",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-0609-hh-m",
      "modelNumber": "SCC-0609-HH-M",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43818",
      "modelNumber": "IU-43818",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43825",
      "modelNumber": "IU-43825",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-mb",
      "modelNumber": "ACIQ-12FM-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-12wpl-hp115b",
      "modelNumber": "EZ-12WPL-HP115B",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43819",
      "modelNumber": "IU-43819",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43831",
      "modelNumber": "IU-43831",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43832",
      "modelNumber": "IU-43832",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-1218-hh-m",
      "modelNumber": "SCC-1218-HH-M",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43804",
      "modelNumber": "IU-43804",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43816",
      "modelNumber": "IU-43816",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-18w-m",
      "modelNumber": "EZ-18W-M",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24w-mb",
      "modelNumber": "EZ-24W-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-18w-mb",
      "modelNumber": "EZ-18W-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-12wpl-hp115",
      "modelNumber": "EZ-12WPL-HP115",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cc-hh-mb",
      "modelNumber": "ACIQ-12CC-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43805",
      "modelNumber": "IU-43805",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43830",
      "modelNumber": "IU-43830",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43792",
      "modelNumber": "IU-43792",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43813",
      "modelNumber": "IU-43813",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43834",
      "modelNumber": "IU-43834",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43809",
      "modelNumber": "IU-43809",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-mb",
      "modelNumber": "ACIQ-18W-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-mc",
      "modelNumber": "ACIQ-18W-HH-MC",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hp115b",
      "modelNumber": "ACIQ-09W-HP115B",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hh-mb",
      "modelNumber": "ACIQ-24W-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hh-mc",
      "modelNumber": "ACIQ-24W-HH-MC",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43824",
      "modelNumber": "IU-43824",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43835",
      "modelNumber": "IU-43835",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43833",
      "modelNumber": "IU-43833",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24fm-hh-mb",
      "modelNumber": "ACIQ-24FM-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24w-m",
      "modelNumber": "EZ-24W-M",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cc-hh-mb",
      "modelNumber": "ACIQ-09CC-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-mb",
      "modelNumber": "ACIQ-18FM-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-mc",
      "modelNumber": "ACIQ-18FM-HH-MC",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cd-hh-mb",
      "modelNumber": "ACIQ-09CD-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-09w-hp115b",
      "modelNumber": "EZ-09W-HP115B",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18cc-hh-mb",
      "modelNumber": "ACIQ-18CC-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-09w-hp115",
      "modelNumber": "EZ-09W-HP115",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cd-hh-mb",
      "modelNumber": "ACIQ-12CD-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36cc-hh-mb",
      "modelNumber": "ACIQ-36CC-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-wm",
      "modelNumber": "ACIQ-18W-WM",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24cd-hh-mb",
      "modelNumber": "ACIQ-24CD-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-p",
      "modelNumber": "ACIQ-24W-P",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48-ah32",
      "modelNumber": "ACIQ-48-AH32",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60-ah32",
      "modelNumber": "ACIQ-60-AH32",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24ahb-hh-m",
      "modelNumber": "ACIQ-24AHB-HH-M",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-24-ahb",
      "modelNumber": "EZ-24-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-p",
      "modelNumber": "ACIQ-30W-P",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-ah32",
      "modelNumber": "ACIQ-36-AH32",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18cd-hh-mb",
      "modelNumber": "ACIQ-18CD-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18-ahb",
      "modelNumber": "ACIQ-18-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-ah32",
      "modelNumber": "ACIQ-24-AH32",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-15930",
      "modelNumber": "IU-15930",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18ahb-hh-m",
      "modelNumber": "ACIQ-18AHB-HH-M",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36w-wm",
      "modelNumber": "ACIQ-36W-WM",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36fm-hh-mb",
      "modelNumber": "ACIQ-36FM-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12-ahb",
      "modelNumber": "ACIQ-12-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24w-wm",
      "modelNumber": "ACIQ-24W-WM",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-ahb",
      "modelNumber": "ACIQ-24-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-24-ah",
      "modelNumber": "EZ-24-AH",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-36-ahb",
      "modelNumber": "EZ-36-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60fm-hh-mb",
      "modelNumber": "ACIQ-60FM-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48fm-hh-mb",
      "modelNumber": "ACIQ-48FM-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48cd-hh-mb",
      "modelNumber": "ACIQ-48CD-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-p",
      "modelNumber": "ACIQ-18W-P",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-24-ah",
      "modelNumber": "SC-24-AH",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36w-p",
      "modelNumber": "ACIQ-36W-P",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-48-ah",
      "modelNumber": "SC-48-AH",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-15931",
      "modelNumber": "IU-15931",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-wm",
      "modelNumber": "ACIQ-30W-WM",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48cc-hh-mb",
      "modelNumber": "ACIQ-48CC-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24-acl",
      "modelNumber": "ACIQ-24-ACL",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36cd-hh-mb",
      "modelNumber": "ACIQ-36CD-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-48-ahb",
      "modelNumber": "EZ-48-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-ahb",
      "modelNumber": "ACIQ-36-AHB*",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-ahb",
      "modelNumber": "ACIQ-30-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18-acl",
      "modelNumber": "ACIQ-18-ACL",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-acl-14",
      "modelNumber": "ACIQ-24-ACL-14",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-60-ahb",
      "modelNumber": "EZ-60-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-36-ah",
      "modelNumber": "EZ-36-AH",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-36-ah",
      "modelNumber": "SC-36-AH",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-60-ah",
      "modelNumber": "SC-60-AH",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60cd-hh-mb",
      "modelNumber": "ACIQ-60CD-HH-MB",
      "brandId": "brand-diycool",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48-ahb",
      "modelNumber": "ACIQ-48-AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-48-ah",
      "modelNumber": "EZ-48-AH",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl",
      "modelNumber": "ACIQ-36-ACL",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl-17",
      "modelNumber": "ACIQ-36-ACL-17",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-acl",
      "modelNumber": "ACIQ-30-ACL",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60ahb",
      "modelNumber": "ACIQ-60AHB",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-60-ah",
      "modelNumber": "EZ-60-AH",
      "brandId": "brand-diycool",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-diycool-aciq-09zpl-hp230b-aciq-09w-hh-mb",
      "slug": "diycool-aciq-09zpl-hp230b-aciq-09w-hh-mb",
      "modelId": "model-diycool-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-09zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-09zpl-hp230b-aciq-09w-hh-mc",
      "slug": "diycool-aciq-09zpl-hp230b-aciq-09w-hh-mc",
      "modelId": "model-diycool-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-09zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-06zpl-hp230b-aciq-06w-hh-mc",
      "slug": "diycool-aciq-06zpl-hp230b-aciq-06w-hh-mc",
      "modelId": "model-diycool-aciq-06zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-06zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-12zpl-hp230b-aciq-12w-hh-mb",
      "slug": "diycool-aciq-12zpl-hp230b-aciq-12w-hh-mb",
      "modelId": "model-diycool-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-12zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-12zpl-hp230b-aciq-12w-hh-mc",
      "slug": "diycool-aciq-12zpl-hp230b-aciq-12w-hh-mc",
      "modelId": "model-diycool-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-12zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-es-27z-m3b-iu-43817",
      "slug": "diycool-es-27z-m3b-iu-43817",
      "modelId": "model-diycool-es-27z-m3b",
      "outdoorUnitId": "ou-diycool-es-27z-m3b",
      "indoorUnitId": "iu-iu-43817",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-12zpl-hp230b-aciq-12fm-hh-mc",
      "slug": "diycool-aciq-12zpl-hp230b-aciq-12fm-hh-mc",
      "modelId": "model-diycool-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-12zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-09zpl-hp230b-scc-0609-hh-m",
      "slug": "diycool-aciq-09zpl-hp230b-scc-0609-hh-m",
      "modelId": "model-diycool-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-09zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-es-36z-m4b-iu-43818",
      "slug": "diycool-es-36z-m4b-iu-43818",
      "modelId": "model-diycool-es-36z-m4b",
      "outdoorUnitId": "ou-diycool-es-36z-m4b",
      "indoorUnitId": "iu-iu-43818",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-18z-m2b-iu-43825",
      "slug": "diycool-ez-18z-m2b-iu-43825",
      "modelId": "model-diycool-ez-18z-m2b",
      "outdoorUnitId": "ou-diycool-ez-18z-m2b",
      "indoorUnitId": "iu-iu-43825",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-12zpl-hp230b-aciq-12fm-hh-mb",
      "slug": "diycool-aciq-12zpl-hp230b-aciq-12fm-hh-mb",
      "modelId": "model-diycool-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-12zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-12zpl-hp115b-ez-12wpl-hp115b",
      "slug": "diycool-ez-12zpl-hp115b-ez-12wpl-hp115b",
      "modelId": "model-diycool-ez-12zpl-hp115b",
      "outdoorUnitId": "ou-diycool-ez-12zpl-hp115b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-es-48z-m5b-iu-43819",
      "slug": "diycool-es-48z-m5b-iu-43819",
      "modelId": "model-diycool-es-48z-m5b",
      "outdoorUnitId": "ou-diycool-es-48z-m5b",
      "indoorUnitId": "iu-iu-43819",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-27z-m3b-iu-43831",
      "slug": "diycool-ez-27z-m3b-iu-43831",
      "modelId": "model-diycool-ez-27z-m3b",
      "outdoorUnitId": "ou-diycool-ez-27z-m3b",
      "indoorUnitId": "iu-iu-43831",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-36z-m4b-iu-43832",
      "slug": "diycool-ez-36z-m4b-iu-43832",
      "modelId": "model-diycool-ez-36z-m4b",
      "outdoorUnitId": "ou-diycool-ez-36z-m4b",
      "indoorUnitId": "iu-iu-43832",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-12zpl-hp230b-scc-1218-hh-m",
      "slug": "diycool-aciq-12zpl-hp230b-scc-1218-hh-m",
      "modelId": "model-diycool-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-12zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-27z-hh-m3b-iu-43804",
      "slug": "diycool-aciq-27z-hh-m3b-iu-43804",
      "modelId": "model-diycool-aciq-27z-hh-m3b",
      "outdoorUnitId": "ou-diycool-aciq-27z-hh-m3b",
      "indoorUnitId": "iu-iu-43804",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-es-18z-m2b-iu-43816",
      "slug": "diycool-es-18z-m2b-iu-43816",
      "modelId": "model-diycool-es-18z-m2b",
      "outdoorUnitId": "ou-diycool-es-18z-m2b",
      "indoorUnitId": "iu-iu-43816",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-18zpl-hp230-ez-18w-m",
      "slug": "diycool-ez-18zpl-hp230-ez-18w-m",
      "modelId": "model-diycool-ez-18zpl-hp230",
      "outdoorUnitId": "ou-diycool-ez-18zpl-hp230",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-24zpl-hp230b-ez-24w-mb",
      "slug": "diycool-ez-24zpl-hp230b-ez-24w-mb",
      "modelId": "model-diycool-ez-24zpl-hp230b",
      "outdoorUnitId": "ou-diycool-ez-24zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-18zpl-hp230b-ez-18w-mb",
      "slug": "diycool-ez-18zpl-hp230b-ez-18w-mb",
      "modelId": "model-diycool-ez-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-ez-18zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-12zpl-hp115-ez-12wpl-hp115",
      "slug": "diycool-ez-12zpl-hp115-ez-12wpl-hp115",
      "modelId": "model-diycool-ez-12zpl-hp115",
      "outdoorUnitId": "ou-diycool-ez-12zpl-hp115",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-12zpl-hp230b-aciq-12cc-hh-mb",
      "slug": "diycool-aciq-12zpl-hp230b-aciq-12cc-hh-mb",
      "modelId": "model-diycool-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-12zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36z-hh-m4b-iu-43805",
      "slug": "diycool-aciq-36z-hh-m4b-iu-43805",
      "modelId": "model-diycool-aciq-36z-hh-m4b",
      "outdoorUnitId": "ou-diycool-aciq-36z-hh-m4b",
      "indoorUnitId": "iu-iu-43805",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-27z-m3-iu-43830",
      "slug": "diycool-ez-27z-m3-iu-43830",
      "modelId": "model-diycool-ez-27z-m3",
      "outdoorUnitId": "ou-diycool-ez-27z-m3",
      "indoorUnitId": "iu-iu-43830",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18z-hh-m2b-iu-43792",
      "slug": "diycool-aciq-18z-hh-m2b-iu-43792",
      "modelId": "model-diycool-aciq-18z-hh-m2b",
      "outdoorUnitId": "ou-diycool-aciq-18z-hh-m2b",
      "indoorUnitId": "iu-iu-43792",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-06zpl-hp230b-scc-0609-hh-m",
      "slug": "diycool-aciq-06zpl-hp230b-scc-0609-hh-m",
      "modelId": "model-diycool-aciq-06zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-06zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-55z-hh-m5b-iu-43813",
      "slug": "diycool-aciq-55z-hh-m5b-iu-43813",
      "modelId": "model-diycool-aciq-55z-hh-m5b",
      "outdoorUnitId": "ou-diycool-aciq-55z-hh-m5b",
      "indoorUnitId": "iu-iu-43813",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-48z-m5b-iu-43834",
      "slug": "diycool-ez-48z-m5b-iu-43834",
      "modelId": "model-diycool-ez-48z-m5b",
      "outdoorUnitId": "ou-diycool-ez-48z-m5b",
      "indoorUnitId": "iu-iu-43834",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-48z-hh-m5b-iu-43809",
      "slug": "diycool-aciq-48z-hh-m5b-iu-43809",
      "modelId": "model-diycool-aciq-48z-hh-m5b",
      "outdoorUnitId": "ou-diycool-aciq-48z-hh-m5b",
      "indoorUnitId": "iu-iu-43809",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18zpl-hp230b-aciq-18w-hh-mb",
      "slug": "diycool-aciq-18zpl-hp230b-aciq-18w-hh-mb",
      "modelId": "model-diycool-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-18zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18zpl-hp230b-aciq-18w-hh-mc",
      "slug": "diycool-aciq-18zpl-hp230b-aciq-18w-hh-mc",
      "modelId": "model-diycool-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-18zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-09z-hp115b-aciq-09w-hp115b",
      "slug": "diycool-aciq-09z-hp115b-aciq-09w-hp115b",
      "modelId": "model-diycool-aciq-09z-hp115b",
      "outdoorUnitId": "ou-diycool-aciq-09z-hp115b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24zpl-hp230b-aciq-24w-hh-mb",
      "slug": "diycool-aciq-24zpl-hp230b-aciq-24w-hh-mb",
      "modelId": "model-diycool-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-24zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24zpl-hp230b-aciq-24w-hh-mc",
      "slug": "diycool-aciq-24zpl-hp230b-aciq-24w-hh-mc",
      "modelId": "model-diycool-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-24zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-18z-m2-iu-43824",
      "slug": "diycool-ez-18z-m2-iu-43824",
      "modelId": "model-diycool-ez-18z-m2",
      "outdoorUnitId": "ou-diycool-ez-18z-m2",
      "indoorUnitId": "iu-iu-43824",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-sc-27z-hh-m4b-iu-43835",
      "slug": "diycool-sc-27z-hh-m4b-iu-43835",
      "modelId": "model-diycool-sc-27z-hh-m4b",
      "outdoorUnitId": "ou-diycool-sc-27z-hh-m4b",
      "indoorUnitId": "iu-iu-43835",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-48z-m5-iu-43833",
      "slug": "diycool-ez-48z-m5-iu-43833",
      "modelId": "model-diycool-ez-48z-m5",
      "outdoorUnitId": "ou-diycool-ez-48z-m5",
      "indoorUnitId": "iu-iu-43833",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24zpl-hp230b-aciq-24fm-hh-mb",
      "slug": "diycool-aciq-24zpl-hp230b-aciq-24fm-hh-mb",
      "modelId": "model-diycool-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-24zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-24zpl-hp230-ez-24w-m",
      "slug": "diycool-ez-24zpl-hp230-ez-24w-m",
      "modelId": "model-diycool-ez-24zpl-hp230",
      "outdoorUnitId": "ou-diycool-ez-24zpl-hp230",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-09zpl-hp230b-aciq-09cc-hh-mb",
      "slug": "diycool-aciq-09zpl-hp230b-aciq-09cc-hh-mb",
      "modelId": "model-diycool-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-09zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18zpl-hp230b-aciq-18fm-hh-mb",
      "slug": "diycool-aciq-18zpl-hp230b-aciq-18fm-hh-mb",
      "modelId": "model-diycool-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-18zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18zpl-hp230b-aciq-18fm-hh-mc",
      "slug": "diycool-aciq-18zpl-hp230b-aciq-18fm-hh-mc",
      "modelId": "model-diycool-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-18zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-09zpl-hp230b-aciq-09cd-hh-mb",
      "slug": "diycool-aciq-09zpl-hp230b-aciq-09cd-hh-mb",
      "modelId": "model-diycool-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-09zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-09z-hp115b-ez-09w-hp115b",
      "slug": "diycool-ez-09z-hp115b-ez-09w-hp115b",
      "modelId": "model-diycool-ez-09z-hp115b",
      "outdoorUnitId": "ou-diycool-ez-09z-hp115b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18zpl-hp230b-aciq-18cc-hh-mb",
      "slug": "diycool-aciq-18zpl-hp230b-aciq-18cc-hh-mb",
      "modelId": "model-diycool-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-18zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-09z-hp115-ez-09w-hp115",
      "slug": "diycool-ez-09z-hp115-ez-09w-hp115",
      "modelId": "model-diycool-ez-09z-hp115",
      "outdoorUnitId": "ou-diycool-ez-09z-hp115",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18zpl-hp230b-scc-1218-hh-m",
      "slug": "diycool-aciq-18zpl-hp230b-scc-1218-hh-m",
      "modelId": "model-diycool-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-18zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-12zpl-hp230b-aciq-12cd-hh-mb",
      "slug": "diycool-aciq-12zpl-hp230b-aciq-12cd-hh-mb",
      "modelId": "model-diycool-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-12zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36zpl-hp230b-aciq-36cc-hh-mb",
      "slug": "diycool-aciq-36zpl-hp230b-aciq-36cc-hh-mb",
      "modelId": "model-diycool-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-36zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18-hpb-aciq-18w-wm",
      "slug": "diycool-aciq-18-hpb-aciq-18w-wm",
      "modelId": "model-diycool-aciq-18-hpb",
      "outdoorUnitId": "ou-diycool-aciq-18-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24zpl-hp230b-aciq-24cd-hh-mb",
      "slug": "diycool-aciq-24zpl-hp230b-aciq-24cd-hh-mb",
      "modelId": "model-diycool-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-24zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-hpb-aciq-24w-p",
      "slug": "diycool-aciq-24-hpb-aciq-24w-p",
      "modelId": "model-diycool-aciq-24-hpb",
      "outdoorUnitId": "ou-diycool-aciq-24-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-48-hp32-aciq-48-ah32",
      "slug": "diycool-aciq-48-hp32-aciq-48-ah32",
      "modelId": "model-diycool-aciq-48-hp32",
      "outdoorUnitId": "ou-diycool-aciq-48-hp32",
      "indoorUnitId": "iu-aciq-48-ah32",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-60-hp32-aciq-60-ah32",
      "slug": "diycool-aciq-60-hp32-aciq-60-ah32",
      "modelId": "model-diycool-aciq-60-hp32",
      "outdoorUnitId": "ou-diycool-aciq-60-hp32",
      "indoorUnitId": "iu-aciq-60-ah32",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24zpl-hp230b-aciq-24ahb-hh-m",
      "slug": "diycool-aciq-24zpl-hp230b-aciq-24ahb-hh-m",
      "modelId": "model-diycool-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-24zpl-hp230b",
      "indoorUnitId": "iu-aciq-24ahb-hh-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-24-hpb-ez-24-ahb",
      "slug": "diycool-ez-24-hpb-ez-24-ahb",
      "modelId": "model-diycool-ez-24-hpb",
      "outdoorUnitId": "ou-diycool-ez-24-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-30-hpb-aciq-30w-p",
      "slug": "diycool-aciq-30-hpb-aciq-30w-p",
      "modelId": "model-diycool-aciq-30-hpb",
      "outdoorUnitId": "ou-diycool-aciq-30-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hp32-aciq-36-ah32",
      "slug": "diycool-aciq-36-hp32-aciq-36-ah32",
      "modelId": "model-diycool-aciq-36-hp32",
      "outdoorUnitId": "ou-diycool-aciq-36-hp32",
      "indoorUnitId": "iu-aciq-36-ah32",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-24-ehpb-ez-24-ahb",
      "slug": "diycool-ez-24-ehpb-ez-24-ahb",
      "modelId": "model-diycool-ez-24-ehpb",
      "outdoorUnitId": "ou-diycool-ez-24-ehpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18zpl-hp230b-aciq-18cd-hh-mb",
      "slug": "diycool-aciq-18zpl-hp230b-aciq-18cd-hh-mb",
      "modelId": "model-diycool-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-18zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18-hpb-aciq-18-ahb",
      "slug": "diycool-aciq-18-hpb-aciq-18-ahb",
      "modelId": "model-diycool-aciq-18-hpb",
      "outdoorUnitId": "ou-diycool-aciq-18-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-hp32-aciq-24-ah32",
      "slug": "diycool-aciq-24-hp32-aciq-24-ah32",
      "modelId": "model-diycool-aciq-24-hp32",
      "outdoorUnitId": "ou-diycool-aciq-24-hp32",
      "indoorUnitId": "iu-aciq-24-ah32",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-phh1748000k000v-iu-15930",
      "slug": "diycool-aciq-phh1748000k000v-iu-15930",
      "modelId": "model-diycool-aciq-phh1748000k000v",
      "outdoorUnitId": "ou-diycool-aciq-phh1748000k000v",
      "indoorUnitId": "iu-iu-15930",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18zpl-hp230b-aciq-18ahb-hh-m",
      "slug": "diycool-aciq-18zpl-hp230b-aciq-18ahb-hh-m",
      "modelId": "model-diycool-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-18zpl-hp230b",
      "indoorUnitId": "iu-aciq-18ahb-hh-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hpb-aciq-36w-wm",
      "slug": "diycool-aciq-36-hpb-aciq-36w-wm",
      "modelId": "model-diycool-aciq-36-hpb",
      "outdoorUnitId": "ou-diycool-aciq-36-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36zpl-hp230b-aciq-36fm-hh-mb",
      "slug": "diycool-aciq-36zpl-hp230b-aciq-36fm-hh-mb",
      "modelId": "model-diycool-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-36zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-12-ehpb-aciq-12-ahb",
      "slug": "diycool-aciq-12-ehpb-aciq-12-ahb",
      "modelId": "model-diycool-aciq-12-ehpb",
      "outdoorUnitId": "ou-diycool-aciq-12-ehpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-hpb-aciq-24w-wm",
      "slug": "diycool-aciq-24-hpb-aciq-24w-wm",
      "modelId": "model-diycool-aciq-24-hpb",
      "outdoorUnitId": "ou-diycool-aciq-24-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-hpb-aciq-24-ahb",
      "slug": "diycool-aciq-24-hpb-aciq-24-ahb",
      "modelId": "model-diycool-aciq-24-hpb",
      "outdoorUnitId": "ou-diycool-aciq-24-hpb",
      "indoorUnitId": "iu-aciq-24-ahb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-24-hp-ez-24-ah",
      "slug": "diycool-ez-24-hp-ez-24-ah",
      "modelId": "model-diycool-ez-24-hp",
      "outdoorUnitId": "ou-diycool-ez-24-hp",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-36-hpb-ez-36-ahb",
      "slug": "diycool-ez-36-hpb-ez-36-ahb",
      "modelId": "model-diycool-ez-36-hpb",
      "outdoorUnitId": "ou-diycool-ez-36-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-60zpl-hp230b-aciq-60fm-hh-mb",
      "slug": "diycool-aciq-60zpl-hp230b-aciq-60fm-hh-mb",
      "modelId": "model-diycool-aciq-60zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-60zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-48zpl-hp230b-aciq-48fm-hh-mb",
      "slug": "diycool-aciq-48zpl-hp230b-aciq-48fm-hh-mb",
      "modelId": "model-diycool-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-48zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-48zpl-hp230b-aciq-48cd-hh-mb",
      "slug": "diycool-aciq-48zpl-hp230b-aciq-48cd-hh-mb",
      "modelId": "model-diycool-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-48zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-ehpb-aciq-24-ahb",
      "slug": "diycool-aciq-24-ehpb-aciq-24-ahb",
      "modelId": "model-diycool-aciq-24-ehpb",
      "outdoorUnitId": "ou-diycool-aciq-24-ehpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-ehpb-aciq-24w-wm",
      "slug": "diycool-aciq-24-ehpb-aciq-24w-wm",
      "modelId": "model-diycool-aciq-24-ehpb",
      "outdoorUnitId": "ou-diycool-aciq-24-ehpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18-hpb-aciq-18w-p",
      "slug": "diycool-aciq-18-hpb-aciq-18w-p",
      "modelId": "model-diycool-aciq-18-hpb",
      "outdoorUnitId": "ou-diycool-aciq-18-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-sc-2436-hp-sc-24-ah",
      "slug": "diycool-sc-2436-hp-sc-24-ah",
      "modelId": "model-diycool-sc-2436-hp",
      "outdoorUnitId": "ou-diycool-sc-2436-hp",
      "indoorUnitId": "iu-sc-24-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hpb-aciq-36w-p",
      "slug": "diycool-aciq-36-hpb-aciq-36w-p",
      "modelId": "model-diycool-aciq-36-hpb",
      "outdoorUnitId": "ou-diycool-aciq-36-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-sc-4860-hp-sc-48-ah",
      "slug": "diycool-sc-4860-hp-sc-48-ah",
      "modelId": "model-diycool-sc-4860-hp",
      "outdoorUnitId": "ou-diycool-sc-4860-hp",
      "indoorUnitId": "iu-sc-48-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-phh1760000k000v-iu-15931",
      "slug": "diycool-aciq-phh1760000k000v-iu-15931",
      "modelId": "model-diycool-aciq-phh1760000k000v",
      "outdoorUnitId": "ou-diycool-aciq-phh1760000k000v",
      "indoorUnitId": "iu-iu-15931",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-30-hpb-aciq-30w-wm",
      "slug": "diycool-aciq-30-hpb-aciq-30w-wm",
      "modelId": "model-diycool-aciq-30-hpb",
      "outdoorUnitId": "ou-diycool-aciq-30-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-48zpl-hp230b-aciq-48cc-hh-mb",
      "slug": "diycool-aciq-48zpl-hp230b-aciq-48cc-hh-mb",
      "modelId": "model-diycool-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-48zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-hpb-aciq-24-acl",
      "slug": "diycool-aciq-24-hpb-aciq-24-acl",
      "modelId": "model-diycool-aciq-24-hpb",
      "outdoorUnitId": "ou-diycool-aciq-24-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36zpl-hp230b-aciq-36cd-hh-mb",
      "slug": "diycool-aciq-36zpl-hp230b-aciq-36cd-hh-mb",
      "modelId": "model-diycool-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-36zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-48-hpb-ez-48-ahb",
      "slug": "diycool-ez-48-hpb-ez-48-ahb",
      "modelId": "model-diycool-ez-48-hpb",
      "outdoorUnitId": "ou-diycool-ez-48-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hpc-aciq-36-ahb",
      "slug": "diycool-aciq-36-hpc-aciq-36-ahb",
      "modelId": "model-diycool-aciq-36-hpc",
      "outdoorUnitId": "ou-diycool-aciq-36-hpc",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-36-ehpb-ez-36-ahb",
      "slug": "diycool-ez-36-ehpb-ez-36-ahb",
      "modelId": "model-diycool-ez-36-ehpb",
      "outdoorUnitId": "ou-diycool-ez-36-ehpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-30-hpb-aciq-30-ahb",
      "slug": "diycool-aciq-30-hpb-aciq-30-ahb",
      "modelId": "model-diycool-aciq-30-hpb",
      "outdoorUnitId": "ou-diycool-aciq-30-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18-hpb-aciq-18-acl",
      "slug": "diycool-aciq-18-hpb-aciq-18-acl",
      "modelId": "model-diycool-aciq-18-hpb",
      "outdoorUnitId": "ou-diycool-aciq-18-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-hpb-aciq-24-acl-14",
      "slug": "diycool-aciq-24-hpb-aciq-24-acl-14",
      "modelId": "model-diycool-aciq-24-hpb",
      "outdoorUnitId": "ou-diycool-aciq-24-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-18-hpb-aciq-24-acl",
      "slug": "diycool-aciq-18-hpb-aciq-24-acl",
      "modelId": "model-diycool-aciq-18-hpb",
      "outdoorUnitId": "ou-diycool-aciq-18-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-60-hpb-ez-60-ahb",
      "slug": "diycool-ez-60-hpb-ez-60-ahb",
      "modelId": "model-diycool-ez-60-hpb",
      "outdoorUnitId": "ou-diycool-ez-60-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hpb-aciq-36-ahb",
      "slug": "diycool-aciq-36-hpb-aciq-36-ahb",
      "modelId": "model-diycool-aciq-36-hpb",
      "outdoorUnitId": "ou-diycool-aciq-36-hpb",
      "indoorUnitId": "iu-aciq-36-ahb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-48-ehpb-ez-48-ahb",
      "slug": "diycool-ez-48-ehpb-ez-48-ahb",
      "modelId": "model-diycool-ez-48-ehpb",
      "outdoorUnitId": "ou-diycool-ez-48-ehpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-36-hp-ez-36-ah",
      "slug": "diycool-ez-36-hp-ez-36-ah",
      "modelId": "model-diycool-ez-36-hp",
      "outdoorUnitId": "ou-diycool-ez-36-hp",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-sc-2436-hp-sc-36-ah",
      "slug": "diycool-sc-2436-hp-sc-36-ah",
      "modelId": "model-diycool-sc-2436-hp",
      "outdoorUnitId": "ou-diycool-sc-2436-hp",
      "indoorUnitId": "iu-sc-36-ah",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-sc-4860-hp-sc-60-ah",
      "slug": "diycool-sc-4860-hp-sc-60-ah",
      "modelId": "model-diycool-sc-4860-hp",
      "outdoorUnitId": "ou-diycool-sc-4860-hp",
      "indoorUnitId": "iu-sc-60-ah",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-60zpl-hp230b-aciq-60cd-hh-mb",
      "slug": "diycool-aciq-60zpl-hp230b-aciq-60cd-hh-mb",
      "modelId": "model-diycool-aciq-60zpl-hp230b",
      "outdoorUnitId": "ou-diycool-aciq-60zpl-hp230b",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-24-ehpb-aciq-24-acl",
      "slug": "diycool-aciq-24-ehpb-aciq-24-acl",
      "modelId": "model-diycool-aciq-24-ehpb",
      "outdoorUnitId": "ou-diycool-aciq-24-ehpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-48-hpb-aciq-48-ahb",
      "slug": "diycool-aciq-48-hpb-aciq-48-ahb",
      "modelId": "model-diycool-aciq-48-hpb",
      "outdoorUnitId": "ou-diycool-aciq-48-hpb",
      "indoorUnitId": "iu-aciq-48-ahb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-48-hp-ez-48-ah",
      "slug": "diycool-ez-48-hp-ez-48-ah",
      "modelId": "model-diycool-ez-48-hp",
      "outdoorUnitId": "ou-diycool-ez-48-hp",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-30-hpb-aciq-36-acl",
      "slug": "diycool-aciq-30-hpb-aciq-36-acl",
      "modelId": "model-diycool-aciq-30-hpb",
      "outdoorUnitId": "ou-diycool-aciq-30-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hpb-aciq-36-acl-17",
      "slug": "diycool-aciq-36-hpb-aciq-36-acl-17",
      "modelId": "model-diycool-aciq-36-hpb",
      "outdoorUnitId": "ou-diycool-aciq-36-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-30-hpb-aciq-30-acl",
      "slug": "diycool-aciq-30-hpb-aciq-30-acl",
      "modelId": "model-diycool-aciq-30-hpb",
      "outdoorUnitId": "ou-diycool-aciq-30-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-60hpb-aciq-60ahb",
      "slug": "diycool-aciq-60hpb-aciq-60ahb",
      "modelId": "model-diycool-aciq-60hpb",
      "outdoorUnitId": "ou-diycool-aciq-60hpb",
      "indoorUnitId": "iu-aciq-60ahb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-60-hp-ez-60-ah",
      "slug": "diycool-ez-60-hp-ez-60-ah",
      "modelId": "model-diycool-ez-60-hp",
      "outdoorUnitId": "ou-diycool-ez-60-hp",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-ez-60-ehpb-ez-60-ahb",
      "slug": "diycool-ez-60-ehpb-ez-60-ahb",
      "modelId": "model-diycool-ez-60-ehpb",
      "outdoorUnitId": "ou-diycool-ez-60-ehpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hpb-aciq-36-acl",
      "slug": "diycool-aciq-36-hpb-aciq-36-acl",
      "modelId": "model-diycool-aciq-36-hpb",
      "outdoorUnitId": "ou-diycool-aciq-36-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-30-hpb-aciq-36-acl-17",
      "slug": "diycool-aciq-30-hpb-aciq-36-acl-17",
      "modelId": "model-diycool-aciq-30-hpb",
      "outdoorUnitId": "ou-diycool-aciq-30-hpb",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hpc-aciq-36-acl-17",
      "slug": "diycool-aciq-36-hpc-aciq-36-acl-17",
      "modelId": "model-diycool-aciq-36-hpc",
      "outdoorUnitId": "ou-diycool-aciq-36-hpc",
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
          "sourceId": "src-diycool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-diycool-aciq-36-hpc-aciq-36-acl",
      "slug": "diycool-aciq-36-hpc-aciq-36-acl",
      "modelId": "model-diycool-aciq-36-hpc",
      "outdoorUnitId": "ou-diycool-aciq-36-hpc",
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
          "sourceId": "src-diycool-epa",
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
