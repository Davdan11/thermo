import type { BrandDataset } from "../../types";

export const brand_1hvacDataset: BrandDataset = {
  "brand": {
    "id": "brand-1hvac",
    "slug": "1hvac",
    "name": "1HVAC",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour 1HVAC",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-1hvac-epa",
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
      "id": "series-1hvac-aciq",
      "slug": "1hvac-aciq",
      "name": "ACIQ",
      "brandId": "brand-1hvac",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACIQ de 1HVAC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-1hvac-aciq-series",
      "slug": "1hvac-aciq-series",
      "name": "ACIQ Series",
      "brandId": "brand-1hvac",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACIQ Series de 1HVAC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-1hvac-es-series",
      "slug": "1hvac-es-series",
      "name": "ES Series",
      "brandId": "brand-1hvac",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ES Series de 1HVAC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-1hvac-ez-series",
      "slug": "1hvac-ez-series",
      "name": "EZ Series",
      "brandId": "brand-1hvac",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EZ Series de 1HVAC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-1hvac-extreme-heat",
      "slug": "1hvac-extreme-heat",
      "name": "Extreme Heat",
      "brandId": "brand-1hvac",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Extreme Heat de 1HVAC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-1hvac-r32-extreme-heat-unitary",
      "slug": "1hvac-r32-extreme-heat-unitary",
      "name": "R32 Extreme Heat Unitary",
      "brandId": "brand-1hvac",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série R32 Extreme Heat Unitary de 1HVAC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-1hvac-extreme-heat-inverter-rooftop",
      "slug": "1hvac-extreme-heat-inverter-rooftop",
      "name": "Extreme Heat Inverter Rooftop",
      "brandId": "brand-1hvac",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Extreme Heat Inverter Rooftop de 1HVAC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-1hvac-ultra-heat-unitary-condensing-unit",
      "slug": "1hvac-ultra-heat-unitary-condensing-unit",
      "name": "Ultra Heat Unitary Condensing Unit",
      "brandId": "brand-1hvac",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra Heat Unitary Condensing Unit de 1HVAC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-1hvac-aciq-09zpl-hp230b",
      "slug": "1hvac-aciq-09zpl-hp230b",
      "name": "1HVAC ACIQ-09ZPL-HP230B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-09zpl-hp230c",
      "slug": "1hvac-aciq-09zpl-hp230c",
      "name": "1HVAC ACIQ-09ZPL-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-09ZPL-HP230C",
      "normalizedModelNumber": "aciq-09zpl-hp230c",
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
      "id": "model-1hvac-aciq-06zpl-hp230b",
      "slug": "1hvac-aciq-06zpl-hp230b",
      "name": "1HVAC ACIQ-06ZPL-HP230B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-06zpl-hp230c",
      "slug": "1hvac-aciq-06zpl-hp230c",
      "name": "1HVAC ACIQ-06ZPL-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-06ZPL-HP230C",
      "normalizedModelNumber": "aciq-06zpl-hp230c",
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
      "id": "model-1hvac-aciq-12zpl-hp230b",
      "slug": "1hvac-aciq-12zpl-hp230b",
      "name": "1HVAC ACIQ-12ZPL-HP230B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-12zpl-hp230c",
      "slug": "1hvac-aciq-12zpl-hp230c",
      "name": "1HVAC ACIQ-12ZPL-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-12ZPL-HP230C",
      "normalizedModelNumber": "aciq-12zpl-hp230c",
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
      "id": "model-1hvac-es-18z-m3c",
      "slug": "1hvac-es-18z-m3c",
      "name": "1HVAC ES-18Z-M3C",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ES-18Z-M3C",
      "normalizedModelNumber": "es-18z-m3c",
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
      "id": "model-1hvac-aciq-18z-hh-m3c",
      "slug": "1hvac-aciq-18z-hh-m3c",
      "name": "1HVAC ACIQ-18Z-HH-M3C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-18Z-HH-M3C",
      "normalizedModelNumber": "aciq-18z-hh-m3c",
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
      "id": "model-1hvac-es-27z-m4c",
      "slug": "1hvac-es-27z-m4c",
      "name": "1HVAC ES-27Z-M4C",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ES-27Z-M4C",
      "normalizedModelNumber": "es-27z-m4c",
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
      "id": "model-1hvac-es-27z-m3b",
      "slug": "1hvac-es-27z-m3b",
      "name": "1HVAC ES-27Z-M3B",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-09zs-hp230c",
      "slug": "1hvac-aciq-09zs-hp230c",
      "name": "1HVAC ACIQ-09ZS-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-09ZS-HP230C",
      "normalizedModelNumber": "aciq-09zs-hp230c",
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
      "id": "model-1hvac-aciq-09zs-hp115c",
      "slug": "1hvac-aciq-09zs-hp115c",
      "name": "1HVAC ACIQ-09ZS-HP115C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-09ZS-HP115C",
      "normalizedModelNumber": "aciq-09zs-hp115c",
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
      "id": "model-1hvac-es-36z-m5c",
      "slug": "1hvac-es-36z-m5c",
      "name": "1HVAC ES-36Z-M5C",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ES-36Z-M5C",
      "normalizedModelNumber": "es-36z-m5c",
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
      "id": "model-1hvac-es-48z-m6c",
      "slug": "1hvac-es-48z-m6c",
      "name": "1HVAC ES-48Z-M6C",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ES-48Z-M6C",
      "normalizedModelNumber": "es-48z-m6c",
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
      "id": "model-1hvac-aciq-18zs-hp230c",
      "slug": "1hvac-aciq-18zs-hp230c",
      "name": "1HVAC ACIQ-18ZS-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-18ZS-HP230C",
      "normalizedModelNumber": "aciq-18zs-hp230c",
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
      "id": "model-1hvac-ez-18z-m2b",
      "slug": "1hvac-ez-18z-m2b",
      "name": "1HVAC EZ-18Z-M2B",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-es-36z-m4b",
      "slug": "1hvac-es-36z-m4b",
      "name": "1HVAC ES-36Z-M4B",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-12zpl-hp115b",
      "slug": "1hvac-ez-12zpl-hp115b",
      "name": "1HVAC EZ-12ZPL-HP115B",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-24zs-hp230c",
      "slug": "1hvac-aciq-24zs-hp230c",
      "name": "1HVAC ACIQ-24ZS-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-24ZS-HP230C",
      "normalizedModelNumber": "aciq-24zs-hp230c",
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
      "id": "model-1hvac-es-48z-m5b",
      "slug": "1hvac-es-48z-m5b",
      "name": "1HVAC ES-48Z-M5B",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-12zs-hp115c",
      "slug": "1hvac-aciq-12zs-hp115c",
      "name": "1HVAC ACIQ-12ZS-HP115C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-12ZS-HP115C",
      "normalizedModelNumber": "aciq-12zs-hp115c",
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
      "id": "model-1hvac-aciq-12zs-hp230c",
      "slug": "1hvac-aciq-12zs-hp230c",
      "name": "1HVAC ACIQ-12ZS-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-12ZS-HP230C",
      "normalizedModelNumber": "aciq-12zs-hp230c",
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
      "id": "model-1hvac-aciq-27z-hh-m3b",
      "slug": "1hvac-aciq-27z-hh-m3b",
      "name": "1HVAC ACIQ-27Z-HH-M3B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-27z-hh-m4c",
      "slug": "1hvac-aciq-27z-hh-m4c",
      "name": "1HVAC ACIQ-27Z-HH-M4C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-27Z-HH-M4C",
      "normalizedModelNumber": "aciq-27z-hh-m4c",
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
      "id": "model-1hvac-aciq-48z-hh-m6c",
      "slug": "1hvac-aciq-48z-hh-m6c",
      "name": "1HVAC ACIQ-48Z-HH-M6C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-48Z-HH-M6C",
      "normalizedModelNumber": "aciq-48z-hh-m6c",
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
      "id": "model-1hvac-aciq-36z-hh-m5c",
      "slug": "1hvac-aciq-36z-hh-m5c",
      "name": "1HVAC ACIQ-36Z-HH-M5C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-36Z-HH-M5C",
      "normalizedModelNumber": "aciq-36z-hh-m5c",
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
      "id": "model-1hvac-ez-36z-m4b",
      "slug": "1hvac-ez-36z-m4b",
      "name": "1HVAC EZ-36Z-M4B",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-27z-m3b",
      "slug": "1hvac-ez-27z-m3b",
      "name": "1HVAC EZ-27Z-M3B",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-es-18z-m2b",
      "slug": "1hvac-es-18z-m2b",
      "name": "1HVAC ES-18Z-M2B",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-18zpl-hp230",
      "slug": "1hvac-ez-18zpl-hp230",
      "name": "1HVAC EZ-18ZPL-HP230",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-24zpl-hp230b",
      "slug": "1hvac-ez-24zpl-hp230b",
      "name": "1HVAC EZ-24ZPL-HP230B",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-18zpl-hp230b",
      "slug": "1hvac-ez-18zpl-hp230b",
      "name": "1HVAC EZ-18ZPL-HP230B",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-12zpl-hp115",
      "slug": "1hvac-ez-12zpl-hp115",
      "name": "1HVAC EZ-12ZPL-HP115",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-55z-hh-m6c",
      "slug": "1hvac-aciq-55z-hh-m6c",
      "name": "1HVAC ACIQ-55Z-HH-M6C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-55Z-HH-M6C",
      "normalizedModelNumber": "aciq-55z-hh-m6c",
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
      "id": "model-1hvac-aciq-36z-hh-m4b",
      "slug": "1hvac-aciq-36z-hh-m4b",
      "name": "1HVAC ACIQ-36Z-HH-M4B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-27z-m3",
      "slug": "1hvac-ez-27z-m3",
      "name": "1HVAC EZ-27Z-M3",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-55z-hh-m5b",
      "slug": "1hvac-aciq-55z-hh-m5b",
      "name": "1HVAC ACIQ-55Z-HH-M5B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-18z-hh-m2b",
      "slug": "1hvac-aciq-18z-hh-m2b",
      "name": "1HVAC ACIQ-18Z-HH-M2B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-48z-hh-m5b",
      "slug": "1hvac-aciq-48z-hh-m5b",
      "name": "1HVAC ACIQ-48Z-HH-M5B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-48z-m5b",
      "slug": "1hvac-ez-48z-m5b",
      "name": "1HVAC EZ-48Z-M5B",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-24zpl-hp230b",
      "slug": "1hvac-aciq-24zpl-hp230b",
      "name": "1HVAC ACIQ-24ZPL-HP230B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-18zpl-hp230b",
      "slug": "1hvac-aciq-18zpl-hp230b",
      "name": "1HVAC ACIQ-18ZPL-HP230B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-09z-hp115c",
      "slug": "1hvac-aciq-09z-hp115c",
      "name": "1HVAC ACIQ-09Z-HP115C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-09Z-HP115C",
      "normalizedModelNumber": "aciq-09z-hp115c",
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
      "id": "model-1hvac-aciq-09z-hp115b",
      "slug": "1hvac-aciq-09z-hp115b",
      "name": "1HVAC ACIQ-09Z-HP115B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-18zpl-hp230c",
      "slug": "1hvac-aciq-18zpl-hp230c",
      "name": "1HVAC ACIQ-18ZPL-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-18ZPL-HP230C",
      "normalizedModelNumber": "aciq-18zpl-hp230c",
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
      "id": "model-1hvac-ez-18z-m2",
      "slug": "1hvac-ez-18z-m2",
      "name": "1HVAC EZ-18Z-M2",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-09z-hp230c",
      "slug": "1hvac-aciq-09z-hp230c",
      "name": "1HVAC ACIQ-09Z-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-09Z-HP230C",
      "normalizedModelNumber": "aciq-09z-hp230c",
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
      "id": "model-1hvac-aciq-36zpl-hp230c",
      "slug": "1hvac-aciq-36zpl-hp230c",
      "name": "1HVAC ACIQ-36ZPL-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-36ZPL-HP230C",
      "normalizedModelNumber": "aciq-36zpl-hp230c",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36600,
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
      "id": "model-1hvac-aciq-12-ehpd",
      "slug": "1hvac-aciq-12-ehpd",
      "name": "1HVAC ACIQ-12-EHPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-12-EHPD",
      "normalizedModelNumber": "aciq-12-ehpd",
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
      "id": "model-1hvac-aciq-24zpl-hp230c",
      "slug": "1hvac-aciq-24zpl-hp230c",
      "name": "1HVAC ACIQ-24ZPL-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-24ZPL-HP230C",
      "normalizedModelNumber": "aciq-24zpl-hp230c",
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
      "id": "model-1hvac-sc-42z-hh-m5b",
      "slug": "1hvac-sc-42z-hh-m5b",
      "name": "1HVAC SC-42Z-HH-M5B",
      "seriesId": "series-1hvac-extreme-heat",
      "brandId": "brand-1hvac",
      "modelNumber": "SC-42Z-HH-M5B",
      "normalizedModelNumber": "sc-42z-hh-m5b",
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
      "id": "model-1hvac-sc-27z-hh-m4b",
      "slug": "1hvac-sc-27z-hh-m4b",
      "name": "1HVAC SC-27Z-HH-M4B",
      "seriesId": "series-1hvac-extreme-heat",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-sc-30z-hh-m4b",
      "slug": "1hvac-sc-30z-hh-m4b",
      "name": "1HVAC SC-30Z-HH-M4B",
      "seriesId": "series-1hvac-extreme-heat",
      "brandId": "brand-1hvac",
      "modelNumber": "SC-30Z-HH-M4B",
      "normalizedModelNumber": "sc-30z-hh-m4b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
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
      "id": "model-1hvac-ez-48z-m5",
      "slug": "1hvac-ez-48z-m5",
      "name": "1HVAC EZ-48Z-M5",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-24zpl-hp230",
      "slug": "1hvac-ez-24zpl-hp230",
      "name": "1HVAC EZ-24ZPL-HP230",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-09z-hp115b",
      "slug": "1hvac-ez-09z-hp115b",
      "name": "1HVAC EZ-09Z-HP115B",
      "seriesId": "series-1hvac-es-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-30z-hp230c",
      "slug": "1hvac-aciq-30z-hp230c",
      "name": "1HVAC ACIQ-30Z-HP230C",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-30Z-HP230C",
      "normalizedModelNumber": "aciq-30z-hp230c",
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
      "id": "model-1hvac-ez-09z-hp115",
      "slug": "1hvac-ez-09z-hp115",
      "name": "1HVAC EZ-09Z-HP115",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-36zpl-hp230b",
      "slug": "1hvac-aciq-36zpl-hp230b",
      "name": "1HVAC ACIQ-36ZPL-HP230B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-18-hpb",
      "slug": "1hvac-aciq-18-hpb",
      "name": "1HVAC ACIQ-18-HPB",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-18-hpd",
      "slug": "1hvac-aciq-18-hpd",
      "name": "1HVAC ACIQ-18-HPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-18-HPD",
      "normalizedModelNumber": "aciq-18-hpd",
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
      "id": "model-1hvac-aciq-48-hp32",
      "slug": "1hvac-aciq-48-hp32",
      "name": "1HVAC ACIQ-48-HP32",
      "seriesId": "series-1hvac-r32-extreme-heat-unitary",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-24-hpb",
      "slug": "1hvac-aciq-24-hpb",
      "name": "1HVAC ACIQ-24-HPB",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-18-ehpd",
      "slug": "1hvac-aciq-18-ehpd",
      "name": "1HVAC ACIQ-18-EHPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-18-EHPD",
      "normalizedModelNumber": "aciq-18-ehpd",
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
      "id": "model-1hvac-aciq-24z-hp230c",
      "slug": "1hvac-aciq-24z-hp230c",
      "name": "1HVAC ACIQ-24Z-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-24Z-HP230C",
      "normalizedModelNumber": "aciq-24z-hp230c",
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
      "id": "model-1hvac-aciq-24-hpd",
      "slug": "1hvac-aciq-24-hpd",
      "name": "1HVAC ACIQ-24-HPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-24-HPD",
      "normalizedModelNumber": "aciq-24-hpd",
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
      "id": "model-1hvac-aciq-48zpl-hp230c",
      "slug": "1hvac-aciq-48zpl-hp230c",
      "name": "1HVAC ACIQ-48ZPL-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-48ZPL-HP230C",
      "normalizedModelNumber": "aciq-48zpl-hp230c",
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
      "id": "model-1hvac-aciq-60-hp32",
      "slug": "1hvac-aciq-60-hp32",
      "name": "1HVAC ACIQ-60-HP32",
      "seriesId": "series-1hvac-r32-extreme-heat-unitary",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-24-hpb",
      "slug": "1hvac-ez-24-hpb",
      "name": "1HVAC EZ-24-HPB",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-30-hpb",
      "slug": "1hvac-aciq-30-hpb",
      "name": "1HVAC ACIQ-30-HPB",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-36-hp32",
      "slug": "1hvac-aciq-36-hp32",
      "name": "1HVAC ACIQ-36-HP32",
      "seriesId": "series-1hvac-r32-extreme-heat-unitary",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-24-ehpb",
      "slug": "1hvac-ez-24-ehpb",
      "name": "1HVAC EZ-24-EHPB",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-24-ehpd",
      "slug": "1hvac-aciq-24-ehpd",
      "name": "1HVAC ACIQ-24-EHPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-24-EHPD",
      "normalizedModelNumber": "aciq-24-ehpd",
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
      "id": "model-1hvac-aciq-36-hpd",
      "slug": "1hvac-aciq-36-hpd",
      "name": "1HVAC ACIQ-36-HPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-36-HPD",
      "normalizedModelNumber": "aciq-36-hpd",
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
      "id": "model-1hvac-aciq-60zpl-hp230c",
      "slug": "1hvac-aciq-60zpl-hp230c",
      "name": "1HVAC ACIQ-60ZPL-HP230C",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-60ZPL-HP230C",
      "normalizedModelNumber": "aciq-60zpl-hp230c",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54000,
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
      "id": "model-1hvac-aciq-24-hp32",
      "slug": "1hvac-aciq-24-hp32",
      "name": "1HVAC ACIQ-24-HP32",
      "seriesId": "series-1hvac-r32-extreme-heat-unitary",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-phh1748000k000v",
      "slug": "1hvac-aciq-phh1748000k000v",
      "name": "1HVAC ACIQ-PHH1748000K000V",
      "seriesId": "series-1hvac-extreme-heat-inverter-rooftop",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-36-hpb",
      "slug": "1hvac-aciq-36-hpb",
      "name": "1HVAC ACIQ-36-HPB",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-48-hpd",
      "slug": "1hvac-aciq-48-hpd",
      "name": "1HVAC ACIQ-48-HPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-48-HPD",
      "normalizedModelNumber": "aciq-48-hpd",
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
      "id": "model-1hvac-aciq-30-hpd",
      "slug": "1hvac-aciq-30-hpd",
      "name": "1HVAC ACIQ-30-HPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-30-HPD",
      "normalizedModelNumber": "aciq-30-hpd",
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
      "id": "model-1hvac-aciq-60-hpd",
      "slug": "1hvac-aciq-60-hpd",
      "name": "1HVAC ACIQ-60-HPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-60-HPD",
      "normalizedModelNumber": "aciq-60-hpd",
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
      "id": "model-1hvac-aciq-12-ehpb",
      "slug": "1hvac-aciq-12-ehpb",
      "name": "1HVAC ACIQ-12-EHPB",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-24-hp",
      "slug": "1hvac-ez-24-hp",
      "name": "1HVAC EZ-24-HP",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-36-hpb",
      "slug": "1hvac-ez-36-hpb",
      "name": "1HVAC EZ-36-HPB",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-60zpl-hp230b",
      "slug": "1hvac-aciq-60zpl-hp230b",
      "name": "1HVAC ACIQ-60ZPL-HP230B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-24-ehpb",
      "slug": "1hvac-aciq-24-ehpb",
      "name": "1HVAC ACIQ-24-EHPB",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-48zpl-hp230b",
      "slug": "1hvac-aciq-48zpl-hp230b",
      "name": "1HVAC ACIQ-48ZPL-HP230B",
      "seriesId": "series-1hvac-aciq",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-sc-2436-hp",
      "slug": "1hvac-sc-2436-hp",
      "name": "1HVAC SC-2436-HP",
      "seriesId": "series-1hvac-ultra-heat-unitary-condensing-unit",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-sc-4860-hp",
      "slug": "1hvac-sc-4860-hp",
      "name": "1HVAC SC-4860-HP",
      "seriesId": "series-1hvac-ultra-heat-unitary-condensing-unit",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-phh1760000k000v",
      "slug": "1hvac-aciq-phh1760000k000v",
      "name": "1HVAC ACIQ-PHH1760000K000V",
      "seriesId": "series-1hvac-extreme-heat-inverter-rooftop",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-36-ehpd",
      "slug": "1hvac-aciq-36-ehpd",
      "name": "1HVAC ACIQ-36-EHPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-36-EHPD",
      "normalizedModelNumber": "aciq-36-ehpd",
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
      "id": "model-1hvac-aciq-42-hpd",
      "slug": "1hvac-aciq-42-hpd",
      "name": "1HVAC ACIQ-42-HPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-42-HPD",
      "normalizedModelNumber": "aciq-42-hpd",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
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
      "id": "model-1hvac-ez-48-hpb",
      "slug": "1hvac-ez-48-hpb",
      "name": "1HVAC EZ-48-HPB",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-36-hpc",
      "slug": "1hvac-aciq-36-hpc",
      "name": "1HVAC ACIQ-36-HPC",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-36-ehpb",
      "slug": "1hvac-ez-36-ehpb",
      "name": "1HVAC EZ-36-EHPB",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-48-ehpd",
      "slug": "1hvac-aciq-48-ehpd",
      "name": "1HVAC ACIQ-48-EHPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-48-EHPD",
      "normalizedModelNumber": "aciq-48-ehpd",
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
      "id": "model-1hvac-ez-48-ehpb",
      "slug": "1hvac-ez-48-ehpb",
      "name": "1HVAC EZ-48-EHPB",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-60-hpb",
      "slug": "1hvac-ez-60-hpb",
      "name": "1HVAC EZ-60-HPB",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-36-hp",
      "slug": "1hvac-ez-36-hp",
      "name": "1HVAC EZ-36-HP",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-48-hp",
      "slug": "1hvac-ez-48-hp",
      "name": "1HVAC EZ-48-HP",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-48-hpb",
      "slug": "1hvac-aciq-48-hpb",
      "name": "1HVAC ACIQ-48-HPB",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-60hpb",
      "slug": "1hvac-aciq-60hpb",
      "name": "1HVAC ACIQ-60HPB",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-ez-60-hp",
      "slug": "1hvac-ez-60-hp",
      "name": "1HVAC EZ-60-HP",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "model-1hvac-aciq-60-ehpd",
      "slug": "1hvac-aciq-60-ehpd",
      "name": "1HVAC ACIQ-60-EHPD",
      "seriesId": "series-1hvac-aciq-series",
      "brandId": "brand-1hvac",
      "modelNumber": "ACIQ-60-EHPD",
      "normalizedModelNumber": "aciq-60-ehpd",
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
      "id": "model-1hvac-ez-60-ehpb",
      "slug": "1hvac-ez-60-ehpb",
      "name": "1HVAC EZ-60-EHPB",
      "seriesId": "series-1hvac-ez-series",
      "brandId": "brand-1hvac",
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
      "id": "ou-1hvac-aciq-09zpl-hp230b",
      "modelNumber": "ACIQ-09ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-09zpl-hp230c",
      "modelNumber": "ACIQ-09ZPL-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-06zpl-hp230b",
      "modelNumber": "ACIQ-06ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-06zpl-hp230c",
      "modelNumber": "ACIQ-06ZPL-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-12zpl-hp230b",
      "modelNumber": "ACIQ-12ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-12zpl-hp230c",
      "modelNumber": "ACIQ-12ZPL-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-es-18z-m3c",
      "modelNumber": "ES-18Z-M3C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-18z-hh-m3c",
      "modelNumber": "ACIQ-18Z-HH-M3C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-es-27z-m4c",
      "modelNumber": "ES-27Z-M4C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-es-27z-m3b",
      "modelNumber": "ES-27Z-M3B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-09zs-hp230c",
      "modelNumber": "ACIQ-09ZS-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-09zs-hp115c",
      "modelNumber": "ACIQ-09ZS-HP115C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-es-36z-m5c",
      "modelNumber": "ES-36Z-M5C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-es-48z-m6c",
      "modelNumber": "ES-48Z-M6C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-18zs-hp230c",
      "modelNumber": "ACIQ-18ZS-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-18z-m2b",
      "modelNumber": "EZ-18Z-M2B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-es-36z-m4b",
      "modelNumber": "ES-36Z-M4B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-12zpl-hp115b",
      "modelNumber": "EZ-12ZPL-HP115B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-24zs-hp230c",
      "modelNumber": "ACIQ-24ZS-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-es-48z-m5b",
      "modelNumber": "ES-48Z-M5B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-12zs-hp115c",
      "modelNumber": "ACIQ-12ZS-HP115C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-12zs-hp230c",
      "modelNumber": "ACIQ-12ZS-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-27z-hh-m3b",
      "modelNumber": "ACIQ-27Z-HH-M3B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-27z-hh-m4c",
      "modelNumber": "ACIQ-27Z-HH-M4C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-48z-hh-m6c",
      "modelNumber": "ACIQ-48Z-HH-M6C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-36z-hh-m5c",
      "modelNumber": "ACIQ-36Z-HH-M5C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-36z-m4b",
      "modelNumber": "EZ-36Z-M4B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-27z-m3b",
      "modelNumber": "EZ-27Z-M3B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-es-18z-m2b",
      "modelNumber": "ES-18Z-M2B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-18zpl-hp230",
      "modelNumber": "EZ-18ZPL-HP230",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-24zpl-hp230b",
      "modelNumber": "EZ-24ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-18zpl-hp230b",
      "modelNumber": "EZ-18ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-12zpl-hp115",
      "modelNumber": "EZ-12ZPL-HP115",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-55z-hh-m6c",
      "modelNumber": "ACIQ-55Z-HH-M6C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-36z-hh-m4b",
      "modelNumber": "ACIQ-36Z-HH-M4B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-27z-m3",
      "modelNumber": "EZ-27Z-M3",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-55z-hh-m5b",
      "modelNumber": "ACIQ-55Z-HH-M5B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-18z-hh-m2b",
      "modelNumber": "ACIQ-18Z-HH-M2B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-48z-hh-m5b",
      "modelNumber": "ACIQ-48Z-HH-M5B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-48z-m5b",
      "modelNumber": "EZ-48Z-M5B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-24zpl-hp230b",
      "modelNumber": "ACIQ-24ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-18zpl-hp230b",
      "modelNumber": "ACIQ-18ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-09z-hp115c",
      "modelNumber": "ACIQ-09Z-HP115C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-09z-hp115b",
      "modelNumber": "ACIQ-09Z-HP115B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-18zpl-hp230c",
      "modelNumber": "ACIQ-18ZPL-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-18z-m2",
      "modelNumber": "EZ-18Z-M2",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-09z-hp230c",
      "modelNumber": "ACIQ-09Z-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-36zpl-hp230c",
      "modelNumber": "ACIQ-36ZPL-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-12-ehpd",
      "modelNumber": "ACIQ-12-EHPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-24zpl-hp230c",
      "modelNumber": "ACIQ-24ZPL-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-sc-42z-hh-m5b",
      "modelNumber": "SC-42Z-HH-M5B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-sc-27z-hh-m4b",
      "modelNumber": "SC-27Z-HH-M4B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-sc-30z-hh-m4b",
      "modelNumber": "SC-30Z-HH-M4B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-48z-m5",
      "modelNumber": "EZ-48Z-M5",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-24zpl-hp230",
      "modelNumber": "EZ-24ZPL-HP230",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-09z-hp115b",
      "modelNumber": "EZ-09Z-HP115B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-30z-hp230c",
      "modelNumber": "ACIQ-30Z-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-09z-hp115",
      "modelNumber": "EZ-09Z-HP115",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-36zpl-hp230b",
      "modelNumber": "ACIQ-36ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-18-hpb",
      "modelNumber": "ACIQ-18-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-18-hpd",
      "modelNumber": "ACIQ-18-HPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-48-hp32",
      "modelNumber": "ACIQ-48-HP32",
      "brandId": "brand-1hvac",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-1hvac-aciq-24-hpb",
      "modelNumber": "ACIQ-24-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-18-ehpd",
      "modelNumber": "ACIQ-18-EHPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-24z-hp230c",
      "modelNumber": "ACIQ-24Z-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-24-hpd",
      "modelNumber": "ACIQ-24-HPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-48zpl-hp230c",
      "modelNumber": "ACIQ-48ZPL-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-60-hp32",
      "modelNumber": "ACIQ-60-HP32",
      "brandId": "brand-1hvac",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-1hvac-ez-24-hpb",
      "modelNumber": "EZ-24-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-30-hpb",
      "modelNumber": "ACIQ-30-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-36-hp32",
      "modelNumber": "ACIQ-36-HP32",
      "brandId": "brand-1hvac",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-1hvac-ez-24-ehpb",
      "modelNumber": "EZ-24-EHPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-24-ehpd",
      "modelNumber": "ACIQ-24-EHPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-36-hpd",
      "modelNumber": "ACIQ-36-HPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-60zpl-hp230c",
      "modelNumber": "ACIQ-60ZPL-HP230C",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-24-hp32",
      "modelNumber": "ACIQ-24-HP32",
      "brandId": "brand-1hvac",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-1hvac-aciq-phh1748000k000v",
      "modelNumber": "ACIQ-PHH1748000K000V",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-36-hpb",
      "modelNumber": "ACIQ-36-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-48-hpd",
      "modelNumber": "ACIQ-48-HPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-30-hpd",
      "modelNumber": "ACIQ-30-HPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-60-hpd",
      "modelNumber": "ACIQ-60-HPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-12-ehpb",
      "modelNumber": "ACIQ-12-EHPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-24-hp",
      "modelNumber": "EZ-24-HP",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-36-hpb",
      "modelNumber": "EZ-36-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-60zpl-hp230b",
      "modelNumber": "ACIQ-60ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-24-ehpb",
      "modelNumber": "ACIQ-24-EHPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-48zpl-hp230b",
      "modelNumber": "ACIQ-48ZPL-HP230B",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-sc-2436-hp",
      "modelNumber": "SC-2436-HP",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-sc-4860-hp",
      "modelNumber": "SC-4860-HP",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-phh1760000k000v",
      "modelNumber": "ACIQ-PHH1760000K000V",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-36-ehpd",
      "modelNumber": "ACIQ-36-EHPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-42-hpd",
      "modelNumber": "ACIQ-42-HPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-48-hpb",
      "modelNumber": "EZ-48-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-36-hpc",
      "modelNumber": "ACIQ-36-HPC",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-36-ehpb",
      "modelNumber": "EZ-36-EHPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-aciq-48-ehpd",
      "modelNumber": "ACIQ-48-EHPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-48-ehpb",
      "modelNumber": "EZ-48-EHPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-60-hpb",
      "modelNumber": "EZ-60-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-36-hp",
      "modelNumber": "EZ-36-HP",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-48-hp",
      "modelNumber": "EZ-48-HP",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-48-hpb",
      "modelNumber": "ACIQ-48-HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-60hpb",
      "modelNumber": "ACIQ-60HPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-ez-60-hp",
      "modelNumber": "EZ-60-HP",
      "brandId": "brand-1hvac",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-1hvac-aciq-60-ehpd",
      "modelNumber": "ACIQ-60-EHPD",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-1hvac-ez-60-ehpb",
      "modelNumber": "EZ-60-EHPB",
      "brandId": "brand-1hvac",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-aciq-09w-hh-mc",
      "modelNumber": "ACIQ-09W-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hh-mb",
      "modelNumber": "ACIQ-09W-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hh-md",
      "modelNumber": "ACIQ-09W-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09fm-hh-md",
      "modelNumber": "ACIQ-09FM-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-06w-hh-mc",
      "modelNumber": "ACIQ-06W-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-06w-hh-md",
      "modelNumber": "ACIQ-06W-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-mb",
      "modelNumber": "ACIQ-12W-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-mc",
      "modelNumber": "ACIQ-12W-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12w-hh-md",
      "modelNumber": "ACIQ-12W-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40134",
      "modelNumber": "IU-40134",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40084",
      "modelNumber": "IU-40084",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-md",
      "modelNumber": "ACIQ-12FM-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40136",
      "modelNumber": "IU-40136",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40135",
      "modelNumber": "IU-40135",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09ws-hp230c",
      "modelNumber": "ACIQ-09WS-HP230C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09ws-hp115c",
      "modelNumber": "ACIQ-09WS-HP115C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-mc",
      "modelNumber": "ACIQ-12FM-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40138",
      "modelNumber": "IU-40138",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40140",
      "modelNumber": "IU-40140",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-0609-hh-mb",
      "modelNumber": "SCC-0609-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-0609-hh-m",
      "modelNumber": "SCC-0609-HH-M",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18ws-hp230c",
      "modelNumber": "ACIQ-18WS-HP230C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40146",
      "modelNumber": "IU-40146",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40137",
      "modelNumber": "IU-40137",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12fm-hh-mb",
      "modelNumber": "ACIQ-12FM-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-12wpl-hp115b",
      "modelNumber": "EZ-12WPL-HP115B",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24ws-hp230c",
      "modelNumber": "ACIQ-24WS-HP230C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40139",
      "modelNumber": "IU-40139",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12ws-hp115c",
      "modelNumber": "ACIQ-12WS-HP115C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12ws-hp230c",
      "modelNumber": "ACIQ-12WS-HP230C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40108",
      "modelNumber": "IU-40108",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-1218-hh-m",
      "modelNumber": "SCC-1218-HH-M",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40109",
      "modelNumber": "IU-40109",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40120",
      "modelNumber": "IU-40120",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40112",
      "modelNumber": "IU-40112",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40153",
      "modelNumber": "IU-40153",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40152",
      "modelNumber": "IU-40152",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40133",
      "modelNumber": "IU-40133",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-18w-m",
      "modelNumber": "EZ-18W-M",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24w-mb",
      "modelNumber": "EZ-24W-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cc-hh-mc",
      "modelNumber": "ACIQ-09CC-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-18w-mb",
      "modelNumber": "EZ-18W-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-12wpl-hp115",
      "modelNumber": "EZ-12WPL-HP115",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cc-hh-mb",
      "modelNumber": "ACIQ-12CC-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40128",
      "modelNumber": "IU-40128",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40111",
      "modelNumber": "IU-40111",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cc-hh-mc",
      "modelNumber": "ACIQ-12CC-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40151",
      "modelNumber": "IU-40151",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40127",
      "modelNumber": "IU-40127",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40083",
      "modelNumber": "IU-40083",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40119",
      "modelNumber": "IU-40119",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40155",
      "modelNumber": "IU-40155",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hh-mc",
      "modelNumber": "ACIQ-24W-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hh-mb",
      "modelNumber": "ACIQ-24W-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-mb",
      "modelNumber": "ACIQ-18W-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-mc",
      "modelNumber": "ACIQ-18W-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hp115c",
      "modelNumber": "ACIQ-09W-HP115C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hp115b",
      "modelNumber": "ACIQ-09W-HP115B",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-hh-md",
      "modelNumber": "ACIQ-18W-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40145",
      "modelNumber": "IU-40145",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09w-hp230c",
      "modelNumber": "ACIQ-09W-HP230C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36cc-hh-mc",
      "modelNumber": "ACIQ-36CC-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12-ahd",
      "modelNumber": "ACIQ-12-AHD",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24w-hh-md",
      "modelNumber": "ACIQ-24W-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40158",
      "modelNumber": "IU-40158",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40156",
      "modelNumber": "IU-40156",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40157",
      "modelNumber": "IU-40157",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24cc-hh-mc",
      "modelNumber": "ACIQ-24CC-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-scc-1218-hh-mb",
      "modelNumber": "SCC-1218-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24fm-hh-mb",
      "modelNumber": "ACIQ-24FM-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cc-hh-mb",
      "modelNumber": "ACIQ-09CC-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cd-hh-mc",
      "modelNumber": "ACIQ-09CD-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-mb",
      "modelNumber": "ACIQ-18FM-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40154",
      "modelNumber": "IU-40154",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-24w-m",
      "modelNumber": "EZ-24W-M",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-md",
      "modelNumber": "ACIQ-18FM-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24fm-hh-md",
      "modelNumber": "ACIQ-24FM-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-09w-hp115b",
      "modelNumber": "EZ-09W-HP115B",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18fm-hh-mc",
      "modelNumber": "ACIQ-18FM-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-09cd-hh-mb",
      "modelNumber": "ACIQ-09CD-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18cc-hh-mb",
      "modelNumber": "ACIQ-18CC-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cd-hh-mc",
      "modelNumber": "ACIQ-12CD-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18cc-hh-mc",
      "modelNumber": "ACIQ-18CC-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36fm-hh-md",
      "modelNumber": "ACIQ-36FM-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-30w-hp230c",
      "modelNumber": "ACIQ-30W-HP230C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-09w-hp115",
      "modelNumber": "EZ-09W-HP115",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-12cd-hh-mb",
      "modelNumber": "ACIQ-12CD-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36cc-hh-mb",
      "modelNumber": "ACIQ-36CC-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18w-wm",
      "modelNumber": "ACIQ-18W-WM",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18w-wmb",
      "modelNumber": "ACIQ-18W-WMB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24cd-hh-mb",
      "modelNumber": "ACIQ-24CD-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18-pah",
      "modelNumber": "ACIQ-18-PAH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18-ahd",
      "modelNumber": "ACIQ-18-AHD",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48-ah32",
      "modelNumber": "ACIQ-48-AH32",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24w-p",
      "modelNumber": "ACIQ-24W-P",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24cd-hh-mc",
      "modelNumber": "ACIQ-24CD-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24w-hp230c",
      "modelNumber": "ACIQ-24W-HP230C",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24-pah",
      "modelNumber": "ACIQ-24-PAH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48fm-hh-md",
      "modelNumber": "ACIQ-48FM-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-60-ah32",
      "modelNumber": "ACIQ-60-AH32",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24ahb-hh-m",
      "modelNumber": "ACIQ-24AHB-HH-M",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-24-ahb",
      "modelNumber": "EZ-24-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18cd-hh-mc",
      "modelNumber": "ACIQ-18CD-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24-ahd",
      "modelNumber": "ACIQ-24-AHD",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-p",
      "modelNumber": "ACIQ-30W-P",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-ah32",
      "modelNumber": "ACIQ-36-AH32",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-pah",
      "modelNumber": "ACIQ-36-PAH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18-ahb",
      "modelNumber": "ACIQ-18-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60fm-hh-md",
      "modelNumber": "ACIQ-60FM-HH-MD",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18cd-hh-mb",
      "modelNumber": "ACIQ-18CD-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-24-ah32",
      "modelNumber": "ACIQ-24-AH32",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-99",
      "modelNumber": "IU-99",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36cd-hh-mc",
      "modelNumber": "ACIQ-36CD-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-18ahb-hh-m",
      "modelNumber": "ACIQ-18AHB-HH-M",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36fm-hh-mb",
      "modelNumber": "ACIQ-36FM-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-36w-wm",
      "modelNumber": "ACIQ-36W-WM",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24w-wm",
      "modelNumber": "ACIQ-24W-WM",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24w-wmb",
      "modelNumber": "ACIQ-24W-WMB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24w-pb",
      "modelNumber": "ACIQ-24W-PB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48-pah",
      "modelNumber": "ACIQ-48-PAH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-wmb",
      "modelNumber": "ACIQ-30W-WMB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60-pah",
      "modelNumber": "ACIQ-60-PAH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-12-ahb",
      "modelNumber": "ACIQ-12-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-24-ah",
      "modelNumber": "EZ-24-AH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-ahd",
      "modelNumber": "ACIQ-36-AHD",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-36-ahb",
      "modelNumber": "EZ-36-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-ahb",
      "modelNumber": "ACIQ-24-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60fm-hh-mb",
      "modelNumber": "ACIQ-60FM-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-30-pah",
      "modelNumber": "ACIQ-30-PAH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36w-p",
      "modelNumber": "ACIQ-36W-P",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18w-p",
      "modelNumber": "ACIQ-18W-P",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48cd-hh-mb",
      "modelNumber": "ACIQ-48CD-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48fm-hh-mb",
      "modelNumber": "ACIQ-48FM-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-sc-24-ah",
      "modelNumber": "SC-24-AH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-48-ah",
      "modelNumber": "SC-48-AH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-100",
      "modelNumber": "IU-100",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-wm",
      "modelNumber": "ACIQ-30W-WM",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36w-wmb",
      "modelNumber": "ACIQ-36W-WMB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-ahd",
      "modelNumber": "ACIQ-30-AHD",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18w-pb",
      "modelNumber": "ACIQ-18W-PB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48cc-hh-mb",
      "modelNumber": "ACIQ-48CC-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48cd-hh-mc",
      "modelNumber": "ACIQ-48CD-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48cc-hh-mc",
      "modelNumber": "ACIQ-48CC-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-42-ahd",
      "modelNumber": "ACIQ-42-AHD",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-48-ahb",
      "modelNumber": "EZ-48-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36cd-hh-mb",
      "modelNumber": "ACIQ-36CD-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48-ahd",
      "modelNumber": "ACIQ-48-AHD",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-acl",
      "modelNumber": "ACIQ-24-ACL",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30w-pb",
      "modelNumber": "ACIQ-30W-PB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-ahb",
      "modelNumber": "ACIQ-36-AHB*",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-ahb",
      "modelNumber": "ACIQ-30-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-18-acl",
      "modelNumber": "ACIQ-18-ACL",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-acl-14-b",
      "modelNumber": "ACIQ-24-ACL-14-B",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-acl-b",
      "modelNumber": "ACIQ-24-ACL-B",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-acl-14",
      "modelNumber": "ACIQ-24-ACL-14",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48-acl-b",
      "modelNumber": "ACIQ-48-ACL-B",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60-ahd",
      "modelNumber": "ACIQ-60-AHD",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl-17-b",
      "modelNumber": "ACIQ-36-ACL-17-B",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-60-ahb",
      "modelNumber": "EZ-60-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl-b",
      "modelNumber": "ACIQ-36-ACL-B",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-36-ah",
      "modelNumber": "SC-36-AH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-36-ah",
      "modelNumber": "EZ-36-AH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-60-ah",
      "modelNumber": "SC-60-AH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60cd-hh-mb",
      "modelNumber": "ACIQ-60CD-HH-MB",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-60cd-hh-mc",
      "modelNumber": "ACIQ-60CD-HH-MC",
      "brandId": "brand-1hvac",
      "type": "wall-single"
    },
    {
      "id": "iu-ez-48-ah",
      "modelNumber": "EZ-48-AH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-48-ahb",
      "modelNumber": "ACIQ-48-AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl",
      "modelNumber": "ACIQ-36-ACL",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-30-acl",
      "modelNumber": "ACIQ-30-ACL",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl-17",
      "modelNumber": "ACIQ-36-ACL-17",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36w-pb",
      "modelNumber": "ACIQ-36W-PB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-acl-14-b",
      "modelNumber": "ACIQ-36-ACL-14-B",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60ahb",
      "modelNumber": "ACIQ-60AHB",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-ez-60-ah",
      "modelNumber": "EZ-60-AH",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60-acl-b",
      "modelNumber": "ACIQ-60-ACL-B",
      "brandId": "brand-1hvac",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-1hvac-aciq-09zpl-hp230b-aciq-09w-hh-mc",
      "slug": "1hvac-aciq-09zpl-hp230b-aciq-09w-hh-mc",
      "modelId": "model-1hvac-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230b-aciq-09w-hh-mb",
      "slug": "1hvac-aciq-09zpl-hp230b-aciq-09w-hh-mb",
      "modelId": "model-1hvac-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230c-aciq-09w-hh-md",
      "slug": "1hvac-aciq-09zpl-hp230c-aciq-09w-hh-md",
      "modelId": "model-1hvac-aciq-09zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230c",
      "indoorUnitId": "iu-aciq-09w-hh-md",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230c-aciq-09fm-hh-md",
      "slug": "1hvac-aciq-09zpl-hp230c-aciq-09fm-hh-md",
      "modelId": "model-1hvac-aciq-09zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230c",
      "indoorUnitId": "iu-aciq-09fm-hh-md",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.2,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-06zpl-hp230b-aciq-06w-hh-mc",
      "slug": "1hvac-aciq-06zpl-hp230b-aciq-06w-hh-mc",
      "modelId": "model-1hvac-aciq-06zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-06zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-06zpl-hp230c-aciq-06w-hh-md",
      "slug": "1hvac-aciq-06zpl-hp230c-aciq-06w-hh-md",
      "modelId": "model-1hvac-aciq-06zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-06zpl-hp230c",
      "indoorUnitId": "iu-aciq-06w-hh-md",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230b-aciq-12w-hh-mb",
      "slug": "1hvac-aciq-12zpl-hp230b-aciq-12w-hh-mb",
      "modelId": "model-1hvac-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230b-aciq-12w-hh-mc",
      "slug": "1hvac-aciq-12zpl-hp230b-aciq-12w-hh-mc",
      "modelId": "model-1hvac-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230c-aciq-12w-hh-md",
      "slug": "1hvac-aciq-12zpl-hp230c-aciq-12w-hh-md",
      "modelId": "model-1hvac-aciq-12zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230c",
      "indoorUnitId": "iu-aciq-12w-hh-md",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-es-18z-m3c-iu-40134",
      "slug": "1hvac-es-18z-m3c-iu-40134",
      "modelId": "model-1hvac-es-18z-m3c",
      "outdoorUnitId": "ou-1hvac-es-18z-m3c",
      "indoorUnitId": "iu-iu-40134",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18z-hh-m3c-iu-40084",
      "slug": "1hvac-aciq-18z-hh-m3c-iu-40084",
      "modelId": "model-1hvac-aciq-18z-hh-m3c",
      "outdoorUnitId": "ou-1hvac-aciq-18z-hh-m3c",
      "indoorUnitId": "iu-iu-40084",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230c-aciq-12fm-hh-md",
      "slug": "1hvac-aciq-12zpl-hp230c-aciq-12fm-hh-md",
      "modelId": "model-1hvac-aciq-12zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230c",
      "indoorUnitId": "iu-aciq-12fm-hh-md",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-es-27z-m4c-iu-40136",
      "slug": "1hvac-es-27z-m4c-iu-40136",
      "modelId": "model-1hvac-es-27z-m4c",
      "outdoorUnitId": "ou-1hvac-es-27z-m4c",
      "indoorUnitId": "iu-iu-40136",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-es-27z-m3b-iu-40135",
      "slug": "1hvac-es-27z-m3b-iu-40135",
      "modelId": "model-1hvac-es-27z-m3b",
      "outdoorUnitId": "ou-1hvac-es-27z-m3b",
      "indoorUnitId": "iu-iu-40135",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zs-hp230c-aciq-09ws-hp230c",
      "slug": "1hvac-aciq-09zs-hp230c-aciq-09ws-hp230c",
      "modelId": "model-1hvac-aciq-09zs-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-09zs-hp230c",
      "indoorUnitId": "iu-aciq-09ws-hp230c",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zs-hp115c-aciq-09ws-hp115c",
      "slug": "1hvac-aciq-09zs-hp115c-aciq-09ws-hp115c",
      "modelId": "model-1hvac-aciq-09zs-hp115c",
      "outdoorUnitId": "ou-1hvac-aciq-09zs-hp115c",
      "indoorUnitId": "iu-aciq-09ws-hp115c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230b-aciq-12fm-hh-mc",
      "slug": "1hvac-aciq-12zpl-hp230b-aciq-12fm-hh-mc",
      "modelId": "model-1hvac-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-es-36z-m5c-iu-40138",
      "slug": "1hvac-es-36z-m5c-iu-40138",
      "modelId": "model-1hvac-es-36z-m5c",
      "outdoorUnitId": "ou-1hvac-es-36z-m5c",
      "indoorUnitId": "iu-iu-40138",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-es-48z-m6c-iu-40140",
      "slug": "1hvac-es-48z-m6c-iu-40140",
      "modelId": "model-1hvac-es-48z-m6c",
      "outdoorUnitId": "ou-1hvac-es-48z-m6c",
      "indoorUnitId": "iu-iu-40140",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230c-scc-0609-hh-mb",
      "slug": "1hvac-aciq-09zpl-hp230c-scc-0609-hh-mb",
      "modelId": "model-1hvac-aciq-09zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230c",
      "indoorUnitId": "iu-scc-0609-hh-mb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230b-scc-0609-hh-m",
      "slug": "1hvac-aciq-09zpl-hp230b-scc-0609-hh-m",
      "modelId": "model-1hvac-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zs-hp230c-aciq-18ws-hp230c",
      "slug": "1hvac-aciq-18zs-hp230c-aciq-18ws-hp230c",
      "modelId": "model-1hvac-aciq-18zs-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-18zs-hp230c",
      "indoorUnitId": "iu-aciq-18ws-hp230c",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-18z-m2b-iu-40146",
      "slug": "1hvac-ez-18z-m2b-iu-40146",
      "modelId": "model-1hvac-ez-18z-m2b",
      "outdoorUnitId": "ou-1hvac-ez-18z-m2b",
      "indoorUnitId": "iu-iu-40146",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-es-36z-m4b-iu-40137",
      "slug": "1hvac-es-36z-m4b-iu-40137",
      "modelId": "model-1hvac-es-36z-m4b",
      "outdoorUnitId": "ou-1hvac-es-36z-m4b",
      "indoorUnitId": "iu-iu-40137",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230b-aciq-12fm-hh-mb",
      "slug": "1hvac-aciq-12zpl-hp230b-aciq-12fm-hh-mb",
      "modelId": "model-1hvac-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-12zpl-hp115b-ez-12wpl-hp115b",
      "slug": "1hvac-ez-12zpl-hp115b-ez-12wpl-hp115b",
      "modelId": "model-1hvac-ez-12zpl-hp115b",
      "outdoorUnitId": "ou-1hvac-ez-12zpl-hp115b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zs-hp230c-aciq-24ws-hp230c",
      "slug": "1hvac-aciq-24zs-hp230c-aciq-24ws-hp230c",
      "modelId": "model-1hvac-aciq-24zs-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-24zs-hp230c",
      "indoorUnitId": "iu-aciq-24ws-hp230c",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-es-48z-m5b-iu-40139",
      "slug": "1hvac-es-48z-m5b-iu-40139",
      "modelId": "model-1hvac-es-48z-m5b",
      "outdoorUnitId": "ou-1hvac-es-48z-m5b",
      "indoorUnitId": "iu-iu-40139",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zs-hp115c-aciq-12ws-hp115c",
      "slug": "1hvac-aciq-12zs-hp115c-aciq-12ws-hp115c",
      "modelId": "model-1hvac-aciq-12zs-hp115c",
      "outdoorUnitId": "ou-1hvac-aciq-12zs-hp115c",
      "indoorUnitId": "iu-aciq-12ws-hp115c",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zs-hp230c-aciq-12ws-hp230c",
      "slug": "1hvac-aciq-12zs-hp230c-aciq-12ws-hp230c",
      "modelId": "model-1hvac-aciq-12zs-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-12zs-hp230c",
      "indoorUnitId": "iu-aciq-12ws-hp230c",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-27z-hh-m3b-iu-40108",
      "slug": "1hvac-aciq-27z-hh-m3b-iu-40108",
      "modelId": "model-1hvac-aciq-27z-hh-m3b",
      "outdoorUnitId": "ou-1hvac-aciq-27z-hh-m3b",
      "indoorUnitId": "iu-iu-40108",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230b-scc-1218-hh-m",
      "slug": "1hvac-aciq-12zpl-hp230b-scc-1218-hh-m",
      "modelId": "model-1hvac-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-27z-hh-m4c-iu-40109",
      "slug": "1hvac-aciq-27z-hh-m4c-iu-40109",
      "modelId": "model-1hvac-aciq-27z-hh-m4c",
      "outdoorUnitId": "ou-1hvac-aciq-27z-hh-m4c",
      "indoorUnitId": "iu-iu-40109",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48z-hh-m6c-iu-40120",
      "slug": "1hvac-aciq-48z-hh-m6c-iu-40120",
      "modelId": "model-1hvac-aciq-48z-hh-m6c",
      "outdoorUnitId": "ou-1hvac-aciq-48z-hh-m6c",
      "indoorUnitId": "iu-iu-40120",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36z-hh-m5c-iu-40112",
      "slug": "1hvac-aciq-36z-hh-m5c-iu-40112",
      "modelId": "model-1hvac-aciq-36z-hh-m5c",
      "outdoorUnitId": "ou-1hvac-aciq-36z-hh-m5c",
      "indoorUnitId": "iu-iu-40112",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-36z-m4b-iu-40153",
      "slug": "1hvac-ez-36z-m4b-iu-40153",
      "modelId": "model-1hvac-ez-36z-m4b",
      "outdoorUnitId": "ou-1hvac-ez-36z-m4b",
      "indoorUnitId": "iu-iu-40153",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-27z-m3b-iu-40152",
      "slug": "1hvac-ez-27z-m3b-iu-40152",
      "modelId": "model-1hvac-ez-27z-m3b",
      "outdoorUnitId": "ou-1hvac-ez-27z-m3b",
      "indoorUnitId": "iu-iu-40152",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-es-18z-m2b-iu-40133",
      "slug": "1hvac-es-18z-m2b-iu-40133",
      "modelId": "model-1hvac-es-18z-m2b",
      "outdoorUnitId": "ou-1hvac-es-18z-m2b",
      "indoorUnitId": "iu-iu-40133",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-18zpl-hp230-ez-18w-m",
      "slug": "1hvac-ez-18zpl-hp230-ez-18w-m",
      "modelId": "model-1hvac-ez-18zpl-hp230",
      "outdoorUnitId": "ou-1hvac-ez-18zpl-hp230",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-24zpl-hp230b-ez-24w-mb",
      "slug": "1hvac-ez-24zpl-hp230b-ez-24w-mb",
      "modelId": "model-1hvac-ez-24zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-ez-24zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230c-aciq-09cc-hh-mc",
      "slug": "1hvac-aciq-09zpl-hp230c-aciq-09cc-hh-mc",
      "modelId": "model-1hvac-aciq-09zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230c",
      "indoorUnitId": "iu-aciq-09cc-hh-mc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-18zpl-hp230b-ez-18w-mb",
      "slug": "1hvac-ez-18zpl-hp230b-ez-18w-mb",
      "modelId": "model-1hvac-ez-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-ez-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-12zpl-hp115-ez-12wpl-hp115",
      "slug": "1hvac-ez-12zpl-hp115-ez-12wpl-hp115",
      "modelId": "model-1hvac-ez-12zpl-hp115",
      "outdoorUnitId": "ou-1hvac-ez-12zpl-hp115",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230b-aciq-12cc-hh-mb",
      "slug": "1hvac-aciq-12zpl-hp230b-aciq-12cc-hh-mb",
      "modelId": "model-1hvac-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-55z-hh-m6c-iu-40128",
      "slug": "1hvac-aciq-55z-hh-m6c-iu-40128",
      "modelId": "model-1hvac-aciq-55z-hh-m6c",
      "outdoorUnitId": "ou-1hvac-aciq-55z-hh-m6c",
      "indoorUnitId": "iu-iu-40128",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36z-hh-m4b-iu-40111",
      "slug": "1hvac-aciq-36z-hh-m4b-iu-40111",
      "modelId": "model-1hvac-aciq-36z-hh-m4b",
      "outdoorUnitId": "ou-1hvac-aciq-36z-hh-m4b",
      "indoorUnitId": "iu-iu-40111",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230c-aciq-12cc-hh-mc",
      "slug": "1hvac-aciq-12zpl-hp230c-aciq-12cc-hh-mc",
      "modelId": "model-1hvac-aciq-12zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230c",
      "indoorUnitId": "iu-aciq-12cc-hh-mc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-27z-m3-iu-40151",
      "slug": "1hvac-ez-27z-m3-iu-40151",
      "modelId": "model-1hvac-ez-27z-m3",
      "outdoorUnitId": "ou-1hvac-ez-27z-m3",
      "indoorUnitId": "iu-iu-40151",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-06zpl-hp230b-scc-0609-hh-m",
      "slug": "1hvac-aciq-06zpl-hp230b-scc-0609-hh-m",
      "modelId": "model-1hvac-aciq-06zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-06zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-06zpl-hp230c-scc-0609-hh-mb",
      "slug": "1hvac-aciq-06zpl-hp230c-scc-0609-hh-mb",
      "modelId": "model-1hvac-aciq-06zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-06zpl-hp230c",
      "indoorUnitId": "iu-scc-0609-hh-mb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-55z-hh-m5b-iu-40127",
      "slug": "1hvac-aciq-55z-hh-m5b-iu-40127",
      "modelId": "model-1hvac-aciq-55z-hh-m5b",
      "outdoorUnitId": "ou-1hvac-aciq-55z-hh-m5b",
      "indoorUnitId": "iu-iu-40127",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18z-hh-m2b-iu-40083",
      "slug": "1hvac-aciq-18z-hh-m2b-iu-40083",
      "modelId": "model-1hvac-aciq-18z-hh-m2b",
      "outdoorUnitId": "ou-1hvac-aciq-18z-hh-m2b",
      "indoorUnitId": "iu-iu-40083",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48z-hh-m5b-iu-40119",
      "slug": "1hvac-aciq-48z-hh-m5b-iu-40119",
      "modelId": "model-1hvac-aciq-48z-hh-m5b",
      "outdoorUnitId": "ou-1hvac-aciq-48z-hh-m5b",
      "indoorUnitId": "iu-iu-40119",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-48z-m5b-iu-40155",
      "slug": "1hvac-ez-48z-m5b-iu-40155",
      "modelId": "model-1hvac-ez-48z-m5b",
      "outdoorUnitId": "ou-1hvac-ez-48z-m5b",
      "indoorUnitId": "iu-iu-40155",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230b-aciq-24w-hh-mc",
      "slug": "1hvac-aciq-24zpl-hp230b-aciq-24w-hh-mc",
      "modelId": "model-1hvac-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230b-aciq-24w-hh-mb",
      "slug": "1hvac-aciq-24zpl-hp230b-aciq-24w-hh-mb",
      "modelId": "model-1hvac-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230b-aciq-18w-hh-mb",
      "slug": "1hvac-aciq-18zpl-hp230b-aciq-18w-hh-mb",
      "modelId": "model-1hvac-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230b-aciq-18w-hh-mc",
      "slug": "1hvac-aciq-18zpl-hp230b-aciq-18w-hh-mc",
      "modelId": "model-1hvac-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09z-hp115c-aciq-09w-hp115c",
      "slug": "1hvac-aciq-09z-hp115c-aciq-09w-hp115c",
      "modelId": "model-1hvac-aciq-09z-hp115c",
      "outdoorUnitId": "ou-1hvac-aciq-09z-hp115c",
      "indoorUnitId": "iu-aciq-09w-hp115c",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09z-hp115b-aciq-09w-hp115b",
      "slug": "1hvac-aciq-09z-hp115b-aciq-09w-hp115b",
      "modelId": "model-1hvac-aciq-09z-hp115b",
      "outdoorUnitId": "ou-1hvac-aciq-09z-hp115b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230c-aciq-18w-hh-md",
      "slug": "1hvac-aciq-18zpl-hp230c-aciq-18w-hh-md",
      "modelId": "model-1hvac-aciq-18zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230c",
      "indoorUnitId": "iu-aciq-18w-hh-md",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-18z-m2-iu-40145",
      "slug": "1hvac-ez-18z-m2-iu-40145",
      "modelId": "model-1hvac-ez-18z-m2",
      "outdoorUnitId": "ou-1hvac-ez-18z-m2",
      "indoorUnitId": "iu-iu-40145",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09z-hp230c-aciq-09w-hp230c",
      "slug": "1hvac-aciq-09z-hp230c-aciq-09w-hp230c",
      "modelId": "model-1hvac-aciq-09z-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-09z-hp230c",
      "indoorUnitId": "iu-aciq-09w-hp230c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36zpl-hp230c-aciq-36cc-hh-mc",
      "slug": "1hvac-aciq-36zpl-hp230c-aciq-36cc-hh-mc",
      "modelId": "model-1hvac-aciq-36zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-36zpl-hp230c",
      "indoorUnitId": "iu-aciq-36cc-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12-ehpd-aciq-12-ahd",
      "slug": "1hvac-aciq-12-ehpd-aciq-12-ahd",
      "modelId": "model-1hvac-aciq-12-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-12-ehpd",
      "indoorUnitId": "iu-aciq-12-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230c-aciq-24w-hh-md",
      "slug": "1hvac-aciq-24zpl-hp230c-aciq-24w-hh-md",
      "modelId": "model-1hvac-aciq-24zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230c",
      "indoorUnitId": "iu-aciq-24w-hh-md",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-sc-42z-hh-m5b-iu-40158",
      "slug": "1hvac-sc-42z-hh-m5b-iu-40158",
      "modelId": "model-1hvac-sc-42z-hh-m5b",
      "outdoorUnitId": "ou-1hvac-sc-42z-hh-m5b",
      "indoorUnitId": "iu-iu-40158",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-sc-27z-hh-m4b-iu-40156",
      "slug": "1hvac-sc-27z-hh-m4b-iu-40156",
      "modelId": "model-1hvac-sc-27z-hh-m4b",
      "outdoorUnitId": "ou-1hvac-sc-27z-hh-m4b",
      "indoorUnitId": "iu-iu-40156",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-sc-30z-hh-m4b-iu-40157",
      "slug": "1hvac-sc-30z-hh-m4b-iu-40157",
      "modelId": "model-1hvac-sc-30z-hh-m4b",
      "outdoorUnitId": "ou-1hvac-sc-30z-hh-m4b",
      "indoorUnitId": "iu-iu-40157",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230c-aciq-24cc-hh-mc",
      "slug": "1hvac-aciq-24zpl-hp230c-aciq-24cc-hh-mc",
      "modelId": "model-1hvac-aciq-24zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230c",
      "indoorUnitId": "iu-aciq-24cc-hh-mc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230c-scc-1218-hh-mb",
      "slug": "1hvac-aciq-18zpl-hp230c-scc-1218-hh-mb",
      "modelId": "model-1hvac-aciq-18zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230c",
      "indoorUnitId": "iu-scc-1218-hh-mb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230b-aciq-24fm-hh-mb",
      "slug": "1hvac-aciq-24zpl-hp230b-aciq-24fm-hh-mb",
      "modelId": "model-1hvac-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230b-aciq-09cc-hh-mb",
      "slug": "1hvac-aciq-09zpl-hp230b-aciq-09cc-hh-mb",
      "modelId": "model-1hvac-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230c-aciq-09cd-hh-mc",
      "slug": "1hvac-aciq-09zpl-hp230c-aciq-09cd-hh-mc",
      "modelId": "model-1hvac-aciq-09zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230c",
      "indoorUnitId": "iu-aciq-09cd-hh-mc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230b-aciq-18fm-hh-mb",
      "slug": "1hvac-aciq-18zpl-hp230b-aciq-18fm-hh-mb",
      "modelId": "model-1hvac-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-48z-m5-iu-40154",
      "slug": "1hvac-ez-48z-m5-iu-40154",
      "modelId": "model-1hvac-ez-48z-m5",
      "outdoorUnitId": "ou-1hvac-ez-48z-m5",
      "indoorUnitId": "iu-iu-40154",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-24zpl-hp230-ez-24w-m",
      "slug": "1hvac-ez-24zpl-hp230-ez-24w-m",
      "modelId": "model-1hvac-ez-24zpl-hp230",
      "outdoorUnitId": "ou-1hvac-ez-24zpl-hp230",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230c-aciq-18fm-hh-md",
      "slug": "1hvac-aciq-18zpl-hp230c-aciq-18fm-hh-md",
      "modelId": "model-1hvac-aciq-18zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230c",
      "indoorUnitId": "iu-aciq-18fm-hh-md",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.4,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230c-aciq-24fm-hh-md",
      "slug": "1hvac-aciq-24zpl-hp230c-aciq-24fm-hh-md",
      "modelId": "model-1hvac-aciq-24zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230c",
      "indoorUnitId": "iu-aciq-24fm-hh-md",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.4,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-09z-hp115b-ez-09w-hp115b",
      "slug": "1hvac-ez-09z-hp115b-ez-09w-hp115b",
      "modelId": "model-1hvac-ez-09z-hp115b",
      "outdoorUnitId": "ou-1hvac-ez-09z-hp115b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230b-aciq-18fm-hh-mc",
      "slug": "1hvac-aciq-18zpl-hp230b-aciq-18fm-hh-mc",
      "modelId": "model-1hvac-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-09zpl-hp230b-aciq-09cd-hh-mb",
      "slug": "1hvac-aciq-09zpl-hp230b-aciq-09cd-hh-mb",
      "modelId": "model-1hvac-aciq-09zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-09zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230b-aciq-18cc-hh-mb",
      "slug": "1hvac-aciq-18zpl-hp230b-aciq-18cc-hh-mb",
      "modelId": "model-1hvac-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230c-aciq-12cd-hh-mc",
      "slug": "1hvac-aciq-12zpl-hp230c-aciq-12cd-hh-mc",
      "modelId": "model-1hvac-aciq-12zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230c",
      "indoorUnitId": "iu-aciq-12cd-hh-mc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230c-aciq-18cc-hh-mc",
      "slug": "1hvac-aciq-18zpl-hp230c-aciq-18cc-hh-mc",
      "modelId": "model-1hvac-aciq-18zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230c",
      "indoorUnitId": "iu-aciq-18cc-hh-mc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36zpl-hp230c-aciq-36fm-hh-md",
      "slug": "1hvac-aciq-36zpl-hp230c-aciq-36fm-hh-md",
      "modelId": "model-1hvac-aciq-36zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-36zpl-hp230c",
      "indoorUnitId": "iu-aciq-36fm-hh-md",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30z-hp230c-aciq-30w-hp230c",
      "slug": "1hvac-aciq-30z-hp230c-aciq-30w-hp230c",
      "modelId": "model-1hvac-aciq-30z-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-30z-hp230c",
      "indoorUnitId": "iu-aciq-30w-hp230c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-09z-hp115-ez-09w-hp115",
      "slug": "1hvac-ez-09z-hp115-ez-09w-hp115",
      "modelId": "model-1hvac-ez-09z-hp115",
      "outdoorUnitId": "ou-1hvac-ez-09z-hp115",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230b-scc-1218-hh-m",
      "slug": "1hvac-aciq-18zpl-hp230b-scc-1218-hh-m",
      "modelId": "model-1hvac-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12zpl-hp230b-aciq-12cd-hh-mb",
      "slug": "1hvac-aciq-12zpl-hp230b-aciq-12cd-hh-mb",
      "modelId": "model-1hvac-aciq-12zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-12zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36zpl-hp230b-aciq-36cc-hh-mb",
      "slug": "1hvac-aciq-36zpl-hp230b-aciq-36cc-hh-mb",
      "modelId": "model-1hvac-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-36zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpb-aciq-18w-wm",
      "slug": "1hvac-aciq-18-hpb-aciq-18w-wm",
      "modelId": "model-1hvac-aciq-18-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpd-aciq-18w-wmb",
      "slug": "1hvac-aciq-18-hpd-aciq-18w-wmb",
      "modelId": "model-1hvac-aciq-18-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpd",
      "indoorUnitId": "iu-aciq-18w-wmb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230b-aciq-24cd-hh-mb",
      "slug": "1hvac-aciq-24zpl-hp230b-aciq-24cd-hh-mb",
      "modelId": "model-1hvac-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpd-aciq-18-pah",
      "slug": "1hvac-aciq-18-hpd-aciq-18-pah",
      "modelId": "model-1hvac-aciq-18-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpd",
      "indoorUnitId": "iu-aciq-18-pah",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpd-aciq-18-ahd",
      "slug": "1hvac-aciq-18-hpd-aciq-18-ahd",
      "modelId": "model-1hvac-aciq-18-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpd",
      "indoorUnitId": "iu-aciq-18-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48-hp32-aciq-48-ah32",
      "slug": "1hvac-aciq-48-hp32-aciq-48-ah32",
      "modelId": "model-1hvac-aciq-48-hp32",
      "outdoorUnitId": "ou-1hvac-aciq-48-hp32",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpb-aciq-24w-p",
      "slug": "1hvac-aciq-24-hpb-aciq-24w-p",
      "modelId": "model-1hvac-aciq-24-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230c-aciq-24cd-hh-mc",
      "slug": "1hvac-aciq-24zpl-hp230c-aciq-24cd-hh-mc",
      "modelId": "model-1hvac-aciq-24zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230c",
      "indoorUnitId": "iu-aciq-24cd-hh-mc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-ehpd-aciq-18-ahd",
      "slug": "1hvac-aciq-18-ehpd-aciq-18-ahd",
      "modelId": "model-1hvac-aciq-18-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-18-ehpd",
      "indoorUnitId": "iu-aciq-18-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24z-hp230c-aciq-24w-hp230c",
      "slug": "1hvac-aciq-24z-hp230c-aciq-24w-hp230c",
      "modelId": "model-1hvac-aciq-24z-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-24z-hp230c",
      "indoorUnitId": "iu-aciq-24w-hp230c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.7,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpd-aciq-24-pah",
      "slug": "1hvac-aciq-24-hpd-aciq-24-pah",
      "modelId": "model-1hvac-aciq-24-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpd",
      "indoorUnitId": "iu-aciq-24-pah",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48zpl-hp230c-aciq-48fm-hh-md",
      "slug": "1hvac-aciq-48zpl-hp230c-aciq-48fm-hh-md",
      "modelId": "model-1hvac-aciq-48zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-48zpl-hp230c",
      "indoorUnitId": "iu-aciq-48fm-hh-md",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60-hp32-aciq-60-ah32",
      "slug": "1hvac-aciq-60-hp32-aciq-60-ah32",
      "modelId": "model-1hvac-aciq-60-hp32",
      "outdoorUnitId": "ou-1hvac-aciq-60-hp32",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24zpl-hp230b-aciq-24ahb-hh-m",
      "slug": "1hvac-aciq-24zpl-hp230b-aciq-24ahb-hh-m",
      "modelId": "model-1hvac-aciq-24zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-24zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-24-hpb-ez-24-ahb",
      "slug": "1hvac-ez-24-hpb-ez-24-ahb",
      "modelId": "model-1hvac-ez-24-hpb",
      "outdoorUnitId": "ou-1hvac-ez-24-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230c-aciq-18cd-hh-mc",
      "slug": "1hvac-aciq-18zpl-hp230c-aciq-18cd-hh-mc",
      "modelId": "model-1hvac-aciq-18zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230c",
      "indoorUnitId": "iu-aciq-18cd-hh-mc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpd-aciq-24-ahd",
      "slug": "1hvac-aciq-24-hpd-aciq-24-ahd",
      "modelId": "model-1hvac-aciq-24-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpd",
      "indoorUnitId": "iu-aciq-24-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpb-aciq-30w-p",
      "slug": "1hvac-aciq-30-hpb-aciq-30w-p",
      "modelId": "model-1hvac-aciq-30-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hp32-aciq-36-ah32",
      "slug": "1hvac-aciq-36-hp32-aciq-36-ah32",
      "modelId": "model-1hvac-aciq-36-hp32",
      "outdoorUnitId": "ou-1hvac-aciq-36-hp32",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-24-ehpb-ez-24-ahb",
      "slug": "1hvac-ez-24-ehpb-ez-24-ahb",
      "modelId": "model-1hvac-ez-24-ehpb",
      "outdoorUnitId": "ou-1hvac-ez-24-ehpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-ehpd-aciq-24-ahd",
      "slug": "1hvac-aciq-24-ehpd-aciq-24-ahd",
      "modelId": "model-1hvac-aciq-24-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-ehpd",
      "indoorUnitId": "iu-aciq-24-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpd-aciq-36-pah",
      "slug": "1hvac-aciq-36-hpd-aciq-36-pah",
      "modelId": "model-1hvac-aciq-36-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpd",
      "indoorUnitId": "iu-aciq-36-pah",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpb-aciq-18-ahb",
      "slug": "1hvac-aciq-18-hpb-aciq-18-ahb",
      "modelId": "model-1hvac-aciq-18-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60zpl-hp230c-aciq-60fm-hh-md",
      "slug": "1hvac-aciq-60zpl-hp230c-aciq-60fm-hh-md",
      "modelId": "model-1hvac-aciq-60zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-60zpl-hp230c",
      "indoorUnitId": "iu-aciq-60fm-hh-md",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230b-aciq-18cd-hh-mb",
      "slug": "1hvac-aciq-18zpl-hp230b-aciq-18cd-hh-mb",
      "modelId": "model-1hvac-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hp32-aciq-24-ah32",
      "slug": "1hvac-aciq-24-hp32-aciq-24-ah32",
      "modelId": "model-1hvac-aciq-24-hp32",
      "outdoorUnitId": "ou-1hvac-aciq-24-hp32",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-phh1748000k000v-iu-99",
      "slug": "1hvac-aciq-phh1748000k000v-iu-99",
      "modelId": "model-1hvac-aciq-phh1748000k000v",
      "outdoorUnitId": "ou-1hvac-aciq-phh1748000k000v",
      "indoorUnitId": "iu-iu-99",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36zpl-hp230c-aciq-36cd-hh-mc",
      "slug": "1hvac-aciq-36zpl-hp230c-aciq-36cd-hh-mc",
      "modelId": "model-1hvac-aciq-36zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-36zpl-hp230c",
      "indoorUnitId": "iu-aciq-36cd-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.7,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18zpl-hp230b-aciq-18ahb-hh-m",
      "slug": "1hvac-aciq-18zpl-hp230b-aciq-18ahb-hh-m",
      "modelId": "model-1hvac-aciq-18zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-18zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36zpl-hp230b-aciq-36fm-hh-mb",
      "slug": "1hvac-aciq-36zpl-hp230b-aciq-36fm-hh-mb",
      "modelId": "model-1hvac-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-36zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpb-aciq-36w-wm",
      "slug": "1hvac-aciq-36-hpb-aciq-36w-wm",
      "modelId": "model-1hvac-aciq-36-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpb-aciq-24w-wm",
      "slug": "1hvac-aciq-24-hpb-aciq-24w-wm",
      "modelId": "model-1hvac-aciq-24-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpd-aciq-24w-wmb",
      "slug": "1hvac-aciq-24-hpd-aciq-24w-wmb",
      "modelId": "model-1hvac-aciq-24-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpd",
      "indoorUnitId": "iu-aciq-24w-wmb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpd-aciq-24w-pb",
      "slug": "1hvac-aciq-24-hpd-aciq-24w-pb",
      "modelId": "model-1hvac-aciq-24-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpd",
      "indoorUnitId": "iu-aciq-24w-pb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48-hpd-aciq-48-pah",
      "slug": "1hvac-aciq-48-hpd-aciq-48-pah",
      "modelId": "model-1hvac-aciq-48-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-48-hpd",
      "indoorUnitId": "iu-aciq-48-pah",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpd-aciq-30w-wmb",
      "slug": "1hvac-aciq-30-hpd-aciq-30w-wmb",
      "modelId": "model-1hvac-aciq-30-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpd",
      "indoorUnitId": "iu-aciq-30w-wmb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60-hpd-aciq-60-pah",
      "slug": "1hvac-aciq-60-hpd-aciq-60-pah",
      "modelId": "model-1hvac-aciq-60-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-60-hpd",
      "indoorUnitId": "iu-aciq-60-pah",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-12-ehpb-aciq-12-ahb",
      "slug": "1hvac-aciq-12-ehpb-aciq-12-ahb",
      "modelId": "model-1hvac-aciq-12-ehpb",
      "outdoorUnitId": "ou-1hvac-aciq-12-ehpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-24-hp-ez-24-ah",
      "slug": "1hvac-ez-24-hp-ez-24-ah",
      "modelId": "model-1hvac-ez-24-hp",
      "outdoorUnitId": "ou-1hvac-ez-24-hp",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-ehpd-aciq-24w-wmb",
      "slug": "1hvac-aciq-24-ehpd-aciq-24w-wmb",
      "modelId": "model-1hvac-aciq-24-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-ehpd",
      "indoorUnitId": "iu-aciq-24w-wmb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpd-aciq-36-ahd",
      "slug": "1hvac-aciq-36-hpd-aciq-36-ahd",
      "modelId": "model-1hvac-aciq-36-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpd",
      "indoorUnitId": "iu-aciq-36-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-36-hpb-ez-36-ahb",
      "slug": "1hvac-ez-36-hpb-ez-36-ahb",
      "modelId": "model-1hvac-ez-36-hpb",
      "outdoorUnitId": "ou-1hvac-ez-36-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpb-aciq-24-ahb",
      "slug": "1hvac-aciq-24-hpb-aciq-24-ahb",
      "modelId": "model-1hvac-aciq-24-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60zpl-hp230b-aciq-60fm-hh-mb",
      "slug": "1hvac-aciq-60zpl-hp230b-aciq-60fm-hh-mb",
      "modelId": "model-1hvac-aciq-60zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-60zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpd-aciq-30-pah",
      "slug": "1hvac-aciq-30-hpd-aciq-30-pah",
      "modelId": "model-1hvac-aciq-30-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpd",
      "indoorUnitId": "iu-aciq-30-pah",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpb-aciq-36w-p",
      "slug": "1hvac-aciq-36-hpb-aciq-36w-p",
      "modelId": "model-1hvac-aciq-36-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpb-aciq-18w-p",
      "slug": "1hvac-aciq-18-hpb-aciq-18w-p",
      "modelId": "model-1hvac-aciq-18-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-ehpb-aciq-24w-wm",
      "slug": "1hvac-aciq-24-ehpb-aciq-24w-wm",
      "modelId": "model-1hvac-aciq-24-ehpb",
      "outdoorUnitId": "ou-1hvac-aciq-24-ehpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48zpl-hp230b-aciq-48cd-hh-mb",
      "slug": "1hvac-aciq-48zpl-hp230b-aciq-48cd-hh-mb",
      "modelId": "model-1hvac-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-48zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48zpl-hp230b-aciq-48fm-hh-mb",
      "slug": "1hvac-aciq-48zpl-hp230b-aciq-48fm-hh-mb",
      "modelId": "model-1hvac-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-48zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-sc-2436-hp-sc-24-ah",
      "slug": "1hvac-sc-2436-hp-sc-24-ah",
      "modelId": "model-1hvac-sc-2436-hp",
      "outdoorUnitId": "ou-1hvac-sc-2436-hp",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-sc-4860-hp-sc-48-ah",
      "slug": "1hvac-sc-4860-hp-sc-48-ah",
      "modelId": "model-1hvac-sc-4860-hp",
      "outdoorUnitId": "ou-1hvac-sc-4860-hp",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-phh1760000k000v-iu-100",
      "slug": "1hvac-aciq-phh1760000k000v-iu-100",
      "modelId": "model-1hvac-aciq-phh1760000k000v",
      "outdoorUnitId": "ou-1hvac-aciq-phh1760000k000v",
      "indoorUnitId": "iu-iu-100",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-ehpb-aciq-24-ahb",
      "slug": "1hvac-aciq-24-ehpb-aciq-24-ahb",
      "modelId": "model-1hvac-aciq-24-ehpb",
      "outdoorUnitId": "ou-1hvac-aciq-24-ehpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpb-aciq-30w-wm",
      "slug": "1hvac-aciq-30-hpb-aciq-30w-wm",
      "modelId": "model-1hvac-aciq-30-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpd-aciq-36w-wmb",
      "slug": "1hvac-aciq-36-hpd-aciq-36w-wmb",
      "modelId": "model-1hvac-aciq-36-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpd",
      "indoorUnitId": "iu-aciq-36w-wmb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpd-aciq-30-ahd",
      "slug": "1hvac-aciq-30-hpd-aciq-30-ahd",
      "modelId": "model-1hvac-aciq-30-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpd",
      "indoorUnitId": "iu-aciq-30-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpd-aciq-18w-pb",
      "slug": "1hvac-aciq-18-hpd-aciq-18w-pb",
      "modelId": "model-1hvac-aciq-18-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpd",
      "indoorUnitId": "iu-aciq-18w-pb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-ehpd-aciq-18w-pb",
      "slug": "1hvac-aciq-18-ehpd-aciq-18w-pb",
      "modelId": "model-1hvac-aciq-18-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-18-ehpd",
      "indoorUnitId": "iu-aciq-18w-pb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48zpl-hp230b-aciq-48cc-hh-mb",
      "slug": "1hvac-aciq-48zpl-hp230b-aciq-48cc-hh-mb",
      "modelId": "model-1hvac-aciq-48zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-48zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48zpl-hp230c-aciq-48cd-hh-mc",
      "slug": "1hvac-aciq-48zpl-hp230c-aciq-48cd-hh-mc",
      "modelId": "model-1hvac-aciq-48zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-48zpl-hp230c",
      "indoorUnitId": "iu-aciq-48cd-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48zpl-hp230c-aciq-48cc-hh-mc",
      "slug": "1hvac-aciq-48zpl-hp230c-aciq-48cc-hh-mc",
      "modelId": "model-1hvac-aciq-48zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-48zpl-hp230c",
      "indoorUnitId": "iu-aciq-48cc-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-ehpd-aciq-36w-wmb",
      "slug": "1hvac-aciq-36-ehpd-aciq-36w-wmb",
      "modelId": "model-1hvac-aciq-36-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-ehpd",
      "indoorUnitId": "iu-aciq-36w-wmb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-42-hpd-aciq-42-ahd",
      "slug": "1hvac-aciq-42-hpd-aciq-42-ahd",
      "modelId": "model-1hvac-aciq-42-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-42-hpd",
      "indoorUnitId": "iu-aciq-42-ahd",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-48-hpb-ez-48-ahb",
      "slug": "1hvac-ez-48-hpb-ez-48-ahb",
      "modelId": "model-1hvac-ez-48-hpb",
      "outdoorUnitId": "ou-1hvac-ez-48-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36zpl-hp230b-aciq-36cd-hh-mb",
      "slug": "1hvac-aciq-36zpl-hp230b-aciq-36cd-hh-mb",
      "modelId": "model-1hvac-aciq-36zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-36zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48-hpd-aciq-48-ahd",
      "slug": "1hvac-aciq-48-hpd-aciq-48-ahd",
      "modelId": "model-1hvac-aciq-48-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-48-hpd",
      "indoorUnitId": "iu-aciq-48-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpb-aciq-24-acl",
      "slug": "1hvac-aciq-24-hpb-aciq-24-acl",
      "modelId": "model-1hvac-aciq-24-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpd-aciq-30w-pb",
      "slug": "1hvac-aciq-30-hpd-aciq-30w-pb",
      "modelId": "model-1hvac-aciq-30-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpd",
      "indoorUnitId": "iu-aciq-30w-pb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpc-aciq-36-ahb",
      "slug": "1hvac-aciq-36-hpc-aciq-36-ahb",
      "modelId": "model-1hvac-aciq-36-hpc",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-36-ehpb-ez-36-ahb",
      "slug": "1hvac-ez-36-ehpb-ez-36-ahb",
      "modelId": "model-1hvac-ez-36-ehpb",
      "outdoorUnitId": "ou-1hvac-ez-36-ehpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpb-aciq-30-ahb",
      "slug": "1hvac-aciq-30-hpb-aciq-30-ahb",
      "modelId": "model-1hvac-aciq-30-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpb-aciq-18-acl",
      "slug": "1hvac-aciq-18-hpb-aciq-18-acl",
      "modelId": "model-1hvac-aciq-18-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpd-aciq-24-acl-14-b",
      "slug": "1hvac-aciq-18-hpd-aciq-24-acl-14-b",
      "modelId": "model-1hvac-aciq-18-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpd",
      "indoorUnitId": "iu-aciq-24-acl-14-b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpb-aciq-24-acl",
      "slug": "1hvac-aciq-18-hpb-aciq-24-acl",
      "modelId": "model-1hvac-aciq-18-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-ehpd-aciq-36-ahd",
      "slug": "1hvac-aciq-36-ehpd-aciq-36-ahd",
      "modelId": "model-1hvac-aciq-36-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-ehpd",
      "indoorUnitId": "iu-aciq-36-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-18-hpd-aciq-24-acl-b",
      "slug": "1hvac-aciq-18-hpd-aciq-24-acl-b",
      "modelId": "model-1hvac-aciq-18-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-18-hpd",
      "indoorUnitId": "iu-aciq-24-acl-b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpb-aciq-24-acl-14",
      "slug": "1hvac-aciq-24-hpb-aciq-24-acl-14",
      "modelId": "model-1hvac-aciq-24-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpd-aciq-24-acl-b",
      "slug": "1hvac-aciq-24-hpd-aciq-24-acl-b",
      "modelId": "model-1hvac-aciq-24-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpd",
      "indoorUnitId": "iu-aciq-24-acl-b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-hpd-aciq-24-acl-14-b",
      "slug": "1hvac-aciq-24-hpd-aciq-24-acl-14-b",
      "modelId": "model-1hvac-aciq-24-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-hpd",
      "indoorUnitId": "iu-aciq-24-acl-14-b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60-hpd-aciq-48-acl-b",
      "slug": "1hvac-aciq-60-hpd-aciq-48-acl-b",
      "modelId": "model-1hvac-aciq-60-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-60-hpd",
      "indoorUnitId": "iu-aciq-48-acl-b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60-hpd-aciq-60-ahd",
      "slug": "1hvac-aciq-60-hpd-aciq-60-ahd",
      "modelId": "model-1hvac-aciq-60-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-60-hpd",
      "indoorUnitId": "iu-aciq-60-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-ehpd-aciq-24w-pb",
      "slug": "1hvac-aciq-24-ehpd-aciq-24w-pb",
      "modelId": "model-1hvac-aciq-24-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-ehpd",
      "indoorUnitId": "iu-aciq-24w-pb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48-ehpd-aciq-48-ahd",
      "slug": "1hvac-aciq-48-ehpd-aciq-48-ahd",
      "modelId": "model-1hvac-aciq-48-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-48-ehpd",
      "indoorUnitId": "iu-aciq-48-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-ehpd-aciq-24-acl-14-b",
      "slug": "1hvac-aciq-24-ehpd-aciq-24-acl-14-b",
      "modelId": "model-1hvac-aciq-24-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-ehpd",
      "indoorUnitId": "iu-aciq-24-acl-14-b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpd-aciq-36-acl-17-b",
      "slug": "1hvac-aciq-30-hpd-aciq-36-acl-17-b",
      "modelId": "model-1hvac-aciq-30-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpd",
      "indoorUnitId": "iu-aciq-36-acl-17-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-48-ehpb-ez-48-ahb",
      "slug": "1hvac-ez-48-ehpb-ez-48-ahb",
      "modelId": "model-1hvac-ez-48-ehpb",
      "outdoorUnitId": "ou-1hvac-ez-48-ehpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-60-hpb-ez-60-ahb",
      "slug": "1hvac-ez-60-hpb-ez-60-ahb",
      "modelId": "model-1hvac-ez-60-hpb",
      "outdoorUnitId": "ou-1hvac-ez-60-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-ehpd-aciq-24-acl-b",
      "slug": "1hvac-aciq-24-ehpd-aciq-24-acl-b",
      "modelId": "model-1hvac-aciq-24-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-24-ehpd",
      "indoorUnitId": "iu-aciq-24-acl-b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpb-aciq-36-ahb",
      "slug": "1hvac-aciq-36-hpb-aciq-36-ahb",
      "modelId": "model-1hvac-aciq-36-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpd-aciq-36-acl-b",
      "slug": "1hvac-aciq-30-hpd-aciq-36-acl-b",
      "modelId": "model-1hvac-aciq-30-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpd",
      "indoorUnitId": "iu-aciq-36-acl-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-sc-2436-hp-sc-36-ah",
      "slug": "1hvac-sc-2436-hp-sc-36-ah",
      "modelId": "model-1hvac-sc-2436-hp",
      "outdoorUnitId": "ou-1hvac-sc-2436-hp",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-36-hp-ez-36-ah",
      "slug": "1hvac-ez-36-hp-ez-36-ah",
      "modelId": "model-1hvac-ez-36-hp",
      "outdoorUnitId": "ou-1hvac-ez-36-hp",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-sc-4860-hp-sc-60-ah",
      "slug": "1hvac-sc-4860-hp-sc-60-ah",
      "modelId": "model-1hvac-sc-4860-hp",
      "outdoorUnitId": "ou-1hvac-sc-4860-hp",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpd-aciq-36-acl-17-b",
      "slug": "1hvac-aciq-36-hpd-aciq-36-acl-17-b",
      "modelId": "model-1hvac-aciq-36-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpd",
      "indoorUnitId": "iu-aciq-36-acl-17-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpd-aciq-36-acl-b",
      "slug": "1hvac-aciq-36-hpd-aciq-36-acl-b",
      "modelId": "model-1hvac-aciq-36-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpd",
      "indoorUnitId": "iu-aciq-36-acl-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60zpl-hp230b-aciq-60cd-hh-mb",
      "slug": "1hvac-aciq-60zpl-hp230b-aciq-60cd-hh-mb",
      "modelId": "model-1hvac-aciq-60zpl-hp230b",
      "outdoorUnitId": "ou-1hvac-aciq-60zpl-hp230b",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60zpl-hp230c-aciq-60cd-hh-mc",
      "slug": "1hvac-aciq-60zpl-hp230c-aciq-60cd-hh-mc",
      "modelId": "model-1hvac-aciq-60zpl-hp230c",
      "outdoorUnitId": "ou-1hvac-aciq-60zpl-hp230c",
      "indoorUnitId": "iu-aciq-60cd-hh-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-24-ehpb-aciq-24-acl",
      "slug": "1hvac-aciq-24-ehpb-aciq-24-acl",
      "modelId": "model-1hvac-aciq-24-ehpb",
      "outdoorUnitId": "ou-1hvac-aciq-24-ehpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-48-hp-ez-48-ah",
      "slug": "1hvac-ez-48-hp-ez-48-ah",
      "modelId": "model-1hvac-ez-48-hp",
      "outdoorUnitId": "ou-1hvac-ez-48-hp",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48-hpb-aciq-48-ahb",
      "slug": "1hvac-aciq-48-hpb-aciq-48-ahb",
      "modelId": "model-1hvac-aciq-48-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-48-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpb-aciq-36-acl",
      "slug": "1hvac-aciq-30-hpb-aciq-36-acl",
      "modelId": "model-1hvac-aciq-30-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpb-aciq-30-acl",
      "slug": "1hvac-aciq-30-hpb-aciq-30-acl",
      "modelId": "model-1hvac-aciq-30-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpb-aciq-36-acl-17",
      "slug": "1hvac-aciq-36-hpb-aciq-36-acl-17",
      "modelId": "model-1hvac-aciq-36-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-ehpd-aciq-36w-pb",
      "slug": "1hvac-aciq-36-ehpd-aciq-36w-pb",
      "modelId": "model-1hvac-aciq-36-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-ehpd",
      "indoorUnitId": "iu-aciq-36w-pb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpd-aciq-36w-pb",
      "slug": "1hvac-aciq-36-hpd-aciq-36w-pb",
      "modelId": "model-1hvac-aciq-36-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpd",
      "indoorUnitId": "iu-aciq-36w-pb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpd-aciq-36-acl-14-b",
      "slug": "1hvac-aciq-30-hpd-aciq-36-acl-14-b",
      "modelId": "model-1hvac-aciq-30-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpd",
      "indoorUnitId": "iu-aciq-36-acl-14-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60hpb-aciq-60ahb",
      "slug": "1hvac-aciq-60hpb-aciq-60ahb",
      "modelId": "model-1hvac-aciq-60hpb",
      "outdoorUnitId": "ou-1hvac-aciq-60hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-60-hp-ez-60-ah",
      "slug": "1hvac-ez-60-hp-ez-60-ah",
      "modelId": "model-1hvac-ez-60-hp",
      "outdoorUnitId": "ou-1hvac-ez-60-hp",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-30-hpb-aciq-36-acl-17",
      "slug": "1hvac-aciq-30-hpb-aciq-36-acl-17",
      "modelId": "model-1hvac-aciq-30-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-30-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60-hpd-aciq-60-acl-b",
      "slug": "1hvac-aciq-60-hpd-aciq-60-acl-b",
      "modelId": "model-1hvac-aciq-60-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-60-hpd",
      "indoorUnitId": "iu-aciq-60-acl-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-60-ehpd-aciq-60-ahd",
      "slug": "1hvac-aciq-60-ehpd-aciq-60-ahd",
      "modelId": "model-1hvac-aciq-60-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-60-ehpd",
      "indoorUnitId": "iu-aciq-60-ahd",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48-hpd-aciq-48-acl-b",
      "slug": "1hvac-aciq-48-hpd-aciq-48-acl-b",
      "modelId": "model-1hvac-aciq-48-hpd",
      "outdoorUnitId": "ou-1hvac-aciq-48-hpd",
      "indoorUnitId": "iu-aciq-48-acl-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-48-ehpd-aciq-48-acl-b",
      "slug": "1hvac-aciq-48-ehpd-aciq-48-acl-b",
      "modelId": "model-1hvac-aciq-48-ehpd",
      "outdoorUnitId": "ou-1hvac-aciq-48-ehpd",
      "indoorUnitId": "iu-aciq-48-acl-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpc-aciq-36-acl-17",
      "slug": "1hvac-aciq-36-hpc-aciq-36-acl-17",
      "modelId": "model-1hvac-aciq-36-hpc",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpb-aciq-36-acl",
      "slug": "1hvac-aciq-36-hpb-aciq-36-acl",
      "modelId": "model-1hvac-aciq-36-hpb",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpb",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-aciq-36-hpc-aciq-36-acl",
      "slug": "1hvac-aciq-36-hpc-aciq-36-acl",
      "modelId": "model-1hvac-aciq-36-hpc",
      "outdoorUnitId": "ou-1hvac-aciq-36-hpc",
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
          "sourceId": "src-1hvac-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-1hvac-ez-60-ehpb-ez-60-ahb",
      "slug": "1hvac-ez-60-ehpb-ez-60-ahb",
      "modelId": "model-1hvac-ez-60-ehpb",
      "outdoorUnitId": "ou-1hvac-ez-60-ehpb",
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
          "sourceId": "src-1hvac-epa",
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
