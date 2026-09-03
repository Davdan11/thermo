import type { BrandDataset } from "../../types";

export const brand_mitsutomoDataset: BrandDataset = {
  "brand": {
    "id": "brand-mitsutomo",
    "slug": "mitsutomo",
    "name": "Mitsutomo",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Mitsutomo",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-mitsutomo-epa",
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
      "id": "series-mitsutomo-ho-series",
      "slug": "mitsutomo-ho-series",
      "name": "HO Series",
      "brandId": "brand-mitsutomo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HO Series de Mitsutomo",
      "imageUrl": "/images/series/mitsutomo-mitsutomo-ho-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mitsutomo-ru-series",
      "slug": "mitsutomo-ru-series",
      "name": "RU Series",
      "brandId": "brand-mitsutomo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série RU Series de Mitsutomo",
      "imageUrl": "/images/series/mitsutomo-mitsutomo-ru-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mitsutomo-ro-series",
      "slug": "mitsutomo-ro-series",
      "name": "RO Series",
      "brandId": "brand-mitsutomo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série RO Series de Mitsutomo",
      "imageUrl": "/images/series/mitsutomo-mitsutomo-ro-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mitsutomo-b-ru-series",
      "slug": "mitsutomo-b-ru-series",
      "name": "B-RU Series",
      "brandId": "brand-mitsutomo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série B-RU Series de Mitsutomo",
      "imageUrl": "/images/series/mitsutomo-mitsutomo-b-ru-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mitsutomo-s-ro-series",
      "slug": "mitsutomo-s-ro-series",
      "name": "S-RO Series",
      "brandId": "brand-mitsutomo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série S-RO Series de Mitsutomo",
      "imageUrl": "/images/series/mitsutomo-mitsutomo-s-ro-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mitsutomo-uho-series",
      "slug": "mitsutomo-uho-series",
      "name": "UHO Series",
      "brandId": "brand-mitsutomo",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série UHO Series de Mitsutomo",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mitsutomo-rho-series",
      "slug": "mitsutomo-rho-series",
      "name": "RHO Series",
      "brandId": "brand-mitsutomo",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHO Series de Mitsutomo",
      "imageUrl": "/images/series/mitsutomo-mitsutomo-rho-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mitsutomo-hw-series",
      "slug": "mitsutomo-hw-series",
      "name": "HW Series",
      "brandId": "brand-mitsutomo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HW Series de Mitsutomo",
      "imageUrl": "/images/series/mitsutomo-mitsutomo-hw-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-mitsutomo-ho-sz09-la-q",
      "slug": "mitsutomo-ho-sz09-la-q",
      "name": "Mitsutomo HO-SZ09-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ09-LA-Q",
      "normalizedModelNumber": "ho-sz09-la-q",
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
      "id": "model-mitsutomo-ho-sz09-ab-q",
      "slug": "mitsutomo-ho-sz09-ab-q",
      "name": "Mitsutomo HO-SZ09-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ09-AB-Q",
      "normalizedModelNumber": "ho-sz09-ab-q",
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
      "id": "model-mitsutomo-ru-sz09-la-q",
      "slug": "mitsutomo-ru-sz09-la-q",
      "name": "Mitsutomo RU-SZ09-LA-Q",
      "seriesId": "series-mitsutomo-ru-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RU-SZ09-LA-Q",
      "normalizedModelNumber": "ru-sz09-la-q",
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
      "id": "model-mitsutomo-ho-sz06-la-q",
      "slug": "mitsutomo-ho-sz06-la-q",
      "name": "Mitsutomo HO-SZ06-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ06-LA-Q",
      "normalizedModelNumber": "ho-sz06-la-q",
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
      "id": "model-mitsutomo-ho-sz12-la-q",
      "slug": "mitsutomo-ho-sz12-la-q",
      "name": "Mitsutomo HO-SZ12-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ12-LA-Q",
      "normalizedModelNumber": "ho-sz12-la-q",
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
      "id": "model-mitsutomo-ru-sz12-la-q",
      "slug": "mitsutomo-ru-sz12-la-q",
      "name": "Mitsutomo RU-SZ12-LA-Q",
      "seriesId": "series-mitsutomo-ru-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RU-SZ12-LA-Q",
      "normalizedModelNumber": "ru-sz12-la-q",
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
      "id": "model-mitsutomo-ho-sz12-ab-q",
      "slug": "mitsutomo-ho-sz12-ab-q",
      "name": "Mitsutomo HO-SZ12-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ12-AB-Q",
      "normalizedModelNumber": "ho-sz12-ab-q",
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
      "id": "model-mitsutomo-ru-sz18-la-q",
      "slug": "mitsutomo-ru-sz18-la-q",
      "name": "Mitsutomo RU-SZ18-LA-Q",
      "seriesId": "series-mitsutomo-ru-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RU-SZ18-LA-Q",
      "normalizedModelNumber": "ru-sz18-la-q",
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
      "id": "model-mitsutomo-ho-sz06-ab-q",
      "slug": "mitsutomo-ho-sz06-ab-q",
      "name": "Mitsutomo HO-SZ06-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ06-AB-Q",
      "normalizedModelNumber": "ho-sz06-ab-q",
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
      "id": "model-mitsutomo-ru-sz24-la-q",
      "slug": "mitsutomo-ru-sz24-la-q",
      "name": "Mitsutomo RU-SZ24-LA-Q",
      "seriesId": "series-mitsutomo-ru-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RU-SZ24-LA-Q",
      "normalizedModelNumber": "ru-sz24-la-q",
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
      "id": "model-mitsutomo-ro-mp36-la-q",
      "slug": "mitsutomo-ro-mp36-la-q",
      "name": "Mitsutomo RO-MP36-LA-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-MP36-LA-Q",
      "normalizedModelNumber": "ro-mp36-la-q",
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
      "id": "model-mitsutomo-ro-mt18-la-q",
      "slug": "mitsutomo-ro-mt18-la-q",
      "name": "Mitsutomo RO-MT18-LA-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-MT18-LA-Q",
      "normalizedModelNumber": "ro-mt18-la-q",
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
      "id": "model-mitsutomo-ro-mq28-la-q",
      "slug": "mitsutomo-ro-mq28-la-q",
      "name": "Mitsutomo RO-MQ28-LA-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-MQ28-LA-Q",
      "normalizedModelNumber": "ro-mq28-la-q",
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
      "id": "model-mitsutomo-ho-mt28-ab-q",
      "slug": "mitsutomo-ho-mt28-ab-q",
      "name": "Mitsutomo HO-MT28-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MT28-AB-Q",
      "normalizedModelNumber": "ho-mt28-ab-q",
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
      "id": "model-mitsutomo-ho-sz24-la-q",
      "slug": "mitsutomo-ho-sz24-la-q",
      "name": "Mitsutomo HO-SZ24-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ24-LA-Q",
      "normalizedModelNumber": "ho-sz24-la-q",
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
      "id": "model-mitsutomo-ho-sz24-ab-q",
      "slug": "mitsutomo-ho-sz24-ab-q",
      "name": "Mitsutomo HO-SZ24-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ24-AB-Q",
      "normalizedModelNumber": "ho-sz24-ab-q",
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
      "id": "model-mitsutomo-ru-uz30-la-q",
      "slug": "mitsutomo-ru-uz30-la-q",
      "name": "Mitsutomo RU-UZ30-LA-Q",
      "seriesId": "series-mitsutomo-ru-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RU-UZ30-LA-Q",
      "normalizedModelNumber": "ru-uz30-la-q",
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
      "id": "model-mitsutomo-ho-sz18-ab-q",
      "slug": "mitsutomo-ho-sz18-ab-q",
      "name": "Mitsutomo HO-SZ18-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ18-AB-Q",
      "normalizedModelNumber": "ho-sz18-ab-q",
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
      "id": "model-mitsutomo-ho-sz18-la-q",
      "slug": "mitsutomo-ho-sz18-la-q",
      "name": "Mitsutomo HO-SZ18-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ18-LA-Q",
      "normalizedModelNumber": "ho-sz18-la-q",
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
      "id": "model-mitsutomo-ro-sz09-ab-q",
      "slug": "mitsutomo-ro-sz09-ab-q",
      "name": "Mitsutomo RO-SZ09-AB-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-SZ09-AB-Q",
      "normalizedModelNumber": "ro-sz09-ab-q",
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
      "id": "model-mitsutomo-ro-sz09-la-q",
      "slug": "mitsutomo-ro-sz09-la-q",
      "name": "Mitsutomo RO-SZ09-LA-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-SZ09-LA-Q",
      "normalizedModelNumber": "ro-sz09-la-q",
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
      "id": "model-mitsutomo-ro-sz09-ab-j",
      "slug": "mitsutomo-ro-sz09-ab-j",
      "name": "Mitsutomo RO-SZ09-AB-J",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-SZ09-AB-J",
      "normalizedModelNumber": "ro-sz09-ab-j",
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
      "id": "model-mitsutomo-ro-sz09-la-j",
      "slug": "mitsutomo-ro-sz09-la-j",
      "name": "Mitsutomo RO-SZ09-LA-J",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-SZ09-LA-J",
      "normalizedModelNumber": "ro-sz09-la-j",
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
      "id": "model-mitsutomo-ho-mp36-la-q",
      "slug": "mitsutomo-ho-mp36-la-q",
      "name": "Mitsutomo HO-MP36-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MP36-LA-Q",
      "normalizedModelNumber": "ho-mp36-la-q",
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
      "id": "model-mitsutomo-ho-ms60-la-q",
      "slug": "mitsutomo-ho-ms60-la-q",
      "name": "Mitsutomo HO-MS60-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MS60-LA-Q",
      "normalizedModelNumber": "ho-ms60-la-q",
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
      "id": "model-mitsutomo-ro-ms48-la-q",
      "slug": "mitsutomo-ro-ms48-la-q",
      "name": "Mitsutomo RO-MS48-LA-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-MS48-LA-Q",
      "normalizedModelNumber": "ro-ms48-la-q",
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
      "id": "model-mitsutomo-ho-sg36-la-q",
      "slug": "mitsutomo-ho-sg36-la-q",
      "name": "Mitsutomo HO-SG36-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SG36-LA-Q",
      "normalizedModelNumber": "ho-sg36-la-q",
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
      "id": "model-mitsutomo-ho-ms48-la-q",
      "slug": "mitsutomo-ho-ms48-la-q",
      "name": "Mitsutomo HO-MS48-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MS48-LA-Q",
      "normalizedModelNumber": "ho-ms48-la-q",
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
      "id": "model-mitsutomo-ho-mp48-ab-q",
      "slug": "mitsutomo-ho-mp48-ab-q",
      "name": "Mitsutomo HO-MP48-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MP48-AB-Q",
      "normalizedModelNumber": "ho-mp48-ab-q",
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
      "id": "model-mitsutomo-ho-mq28-la-q",
      "slug": "mitsutomo-ho-mq28-la-q",
      "name": "Mitsutomo HO-MQ28-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MQ28-LA-Q",
      "normalizedModelNumber": "ho-mq28-la-q",
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
      "id": "model-mitsutomo-ho-mq36-ac-q",
      "slug": "mitsutomo-ho-mq36-ac-q",
      "name": "Mitsutomo HO-MQ36-AC-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MQ36-AC-Q",
      "normalizedModelNumber": "ho-mq36-ac-q",
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
      "id": "model-mitsutomo-ho-mt18-la-q",
      "slug": "mitsutomo-ho-mt18-la-q",
      "name": "Mitsutomo HO-MT18-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MT18-LA-Q",
      "normalizedModelNumber": "ho-mt18-la-q",
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
      "id": "model-mitsutomo-ro-sz30-ab-q",
      "slug": "mitsutomo-ro-sz30-ab-q",
      "name": "Mitsutomo RO-SZ30-AB-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-SZ30-AB-Q",
      "normalizedModelNumber": "ro-sz30-ab-q",
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
      "id": "model-mitsutomo-ho-mt28-ac-q",
      "slug": "mitsutomo-ho-mt28-ac-q",
      "name": "Mitsutomo HO-MT28-AC-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MT28-AC-Q",
      "normalizedModelNumber": "ho-mt28-ac-q",
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
      "id": "model-mitsutomo-ho-md18-ab-q",
      "slug": "mitsutomo-ho-md18-ab-q",
      "name": "Mitsutomo HO-MD18-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MD18-AB-Q",
      "normalizedModelNumber": "ho-md18-ab-q",
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
      "id": "model-mitsutomo-ro-sz18-la-q",
      "slug": "mitsutomo-ro-sz18-la-q",
      "name": "Mitsutomo RO-SZ18-LA-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-SZ18-LA-Q",
      "normalizedModelNumber": "ro-sz18-la-q",
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
      "id": "model-mitsutomo-ho-sz33-la-q",
      "slug": "mitsutomo-ho-sz33-la-q",
      "name": "Mitsutomo HO-SZ33-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ33-LA-Q",
      "normalizedModelNumber": "ho-sz33-la-q",
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
      "id": "model-mitsutomo-ho-sz36-ab-q",
      "slug": "mitsutomo-ho-sz36-ab-q",
      "name": "Mitsutomo HO-SZ36-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ36-AB-Q",
      "normalizedModelNumber": "ho-sz36-ab-q",
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
      "id": "model-mitsutomo-b-ru-uz36-la-q",
      "slug": "mitsutomo-b-ru-uz36-la-q",
      "name": "Mitsutomo B-RU-UZ36-LA-Q",
      "seriesId": "series-mitsutomo-b-ru-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "B-RU-UZ36-LA-Q",
      "normalizedModelNumber": "b-ru-uz36-la-q",
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
      "id": "model-mitsutomo-ho-mq36-ab-q",
      "slug": "mitsutomo-ho-mq36-ab-q",
      "name": "Mitsutomo HO-MQ36-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MQ36-AB-Q",
      "normalizedModelNumber": "ho-mq36-ab-q",
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
      "id": "model-mitsutomo-ho-mp55-ab-q",
      "slug": "mitsutomo-ho-mp55-ab-q",
      "name": "Mitsutomo HO-MP55-AB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-MP55-AB-Q",
      "normalizedModelNumber": "ho-mp55-ab-q",
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
      "id": "model-mitsutomo-ho-sz36-lc-q",
      "slug": "mitsutomo-ho-sz36-lc-q",
      "name": "Mitsutomo HO-SZ36-LC-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ36-LC-Q",
      "normalizedModelNumber": "ho-sz36-lc-q",
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
      "id": "model-mitsutomo-ru-sg48-la-q",
      "slug": "mitsutomo-ru-sg48-la-q",
      "name": "Mitsutomo RU-SG48-LA-Q",
      "seriesId": "series-mitsutomo-ru-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RU-SG48-LA-Q",
      "normalizedModelNumber": "ru-sg48-la-q",
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
      "id": "model-mitsutomo-ro-sz18-ab-q",
      "slug": "mitsutomo-ro-sz18-ab-q",
      "name": "Mitsutomo RO-SZ18-AB-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-SZ18-AB-Q",
      "normalizedModelNumber": "ro-sz18-ab-q",
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
      "id": "model-mitsutomo-ho-sz36-bb-q",
      "slug": "mitsutomo-ho-sz36-bb-q",
      "name": "Mitsutomo HO-SZ36-BB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ36-BB-Q",
      "normalizedModelNumber": "ho-sz36-bb-q",
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
      "id": "model-mitsutomo-s-ro-sz09-la-q",
      "slug": "mitsutomo-s-ro-sz09-la-q",
      "name": "Mitsutomo S-RO-SZ09-LA-Q",
      "seriesId": "series-mitsutomo-s-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "S-RO-SZ09-LA-Q",
      "normalizedModelNumber": "s-ro-sz09-la-q",
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
      "id": "model-mitsutomo-uho18-nb-la-q",
      "slug": "mitsutomo-uho18-nb-la-q",
      "name": "Mitsutomo UHO18-NB-LA-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO18-NB-LA-Q",
      "normalizedModelNumber": "uho18-nb-la-q",
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
      "id": "model-mitsutomo-rho18-nb-la-q",
      "slug": "mitsutomo-rho18-nb-la-q",
      "name": "Mitsutomo RHO18-NB-LA-Q",
      "seriesId": "series-mitsutomo-rho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RHO18-NB-LA-Q",
      "normalizedModelNumber": "rho18-nb-la-q",
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
      "id": "model-mitsutomo-uho24-nb-la-q",
      "slug": "mitsutomo-uho24-nb-la-q",
      "name": "Mitsutomo UHO24-NB-LA-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO24-NB-LA-Q",
      "normalizedModelNumber": "uho24-nb-la-q",
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
      "id": "model-mitsutomo-ro-sz24-la-q",
      "slug": "mitsutomo-ro-sz24-la-q",
      "name": "Mitsutomo RO-SZ24-LA-Q",
      "seriesId": "series-mitsutomo-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RO-SZ24-LA-Q",
      "normalizedModelNumber": "ro-sz24-la-q",
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
      "id": "model-mitsutomo-ho-sg48-la-q",
      "slug": "mitsutomo-ho-sg48-la-q",
      "name": "Mitsutomo HO-SG48-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SG48-LA-Q",
      "normalizedModelNumber": "ho-sg48-la-q",
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
      "id": "model-mitsutomo-rho24-nb-la-q",
      "slug": "mitsutomo-rho24-nb-la-q",
      "name": "Mitsutomo RHO24-NB-LA-Q",
      "seriesId": "series-mitsutomo-rho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RHO24-NB-LA-Q",
      "normalizedModelNumber": "rho24-nb-la-q",
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
      "id": "model-mitsutomo-uho18-nb-q",
      "slug": "mitsutomo-uho18-nb-q",
      "name": "Mitsutomo UHO18-NB-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO18-NB-Q",
      "normalizedModelNumber": "uho18-nb-q",
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
      "id": "model-mitsutomo-uho36-nb-la-q",
      "slug": "mitsutomo-uho36-nb-la-q",
      "name": "Mitsutomo UHO36-NB-LA-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO36-NB-LA-Q",
      "normalizedModelNumber": "uho36-nb-la-q",
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
      "id": "model-mitsutomo-ho-sg60-la-q",
      "slug": "mitsutomo-ho-sg60-la-q",
      "name": "Mitsutomo HO-SG60-LA-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SG60-LA-Q",
      "normalizedModelNumber": "ho-sg60-la-q",
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
      "id": "model-mitsutomo-uho36-nb-ld-q",
      "slug": "mitsutomo-uho36-nb-ld-q",
      "name": "Mitsutomo UHO36-NB-LD-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO36-NB-LD-Q",
      "normalizedModelNumber": "uho36-nb-ld-q",
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
      "id": "model-mitsutomo-uho48-nb-la-q",
      "slug": "mitsutomo-uho48-nb-la-q",
      "name": "Mitsutomo UHO48-NB-LA-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO48-NB-LA-Q",
      "normalizedModelNumber": "uho48-nb-la-q",
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
      "id": "model-mitsutomo-uho60-nb-la-q",
      "slug": "mitsutomo-uho60-nb-la-q",
      "name": "Mitsutomo UHO60-NB-LA-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO60-NB-LA-Q",
      "normalizedModelNumber": "uho60-nb-la-q",
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
      "id": "model-mitsutomo-uho24-nb-q",
      "slug": "mitsutomo-uho24-nb-q",
      "name": "Mitsutomo UHO24-NB-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO24-NB-Q",
      "normalizedModelNumber": "uho24-nb-q",
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
      "id": "model-mitsutomo-hw-sz60-bb-q",
      "slug": "mitsutomo-hw-sz60-bb-q",
      "name": "Mitsutomo HW-SZ60-BB-Q",
      "seriesId": "series-mitsutomo-hw-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HW-SZ60-BB-Q",
      "normalizedModelNumber": "hw-sz60-bb-q",
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
      "id": "model-mitsutomo-uho30-nb-la-q",
      "slug": "mitsutomo-uho30-nb-la-q",
      "name": "Mitsutomo UHO30-NB-LA-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO30-NB-LA-Q",
      "normalizedModelNumber": "uho30-nb-la-q",
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
      "id": "model-mitsutomo-ho-sz48-bb-q",
      "slug": "mitsutomo-ho-sz48-bb-q",
      "name": "Mitsutomo HO-SZ48-BB-Q",
      "seriesId": "series-mitsutomo-ho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "HO-SZ48-BB-Q",
      "normalizedModelNumber": "ho-sz48-bb-q",
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
      "id": "model-mitsutomo-s-ro-sz24-la-q",
      "slug": "mitsutomo-s-ro-sz24-la-q",
      "name": "Mitsutomo S-RO-SZ24-LA-Q",
      "seriesId": "series-mitsutomo-s-ro-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "S-RO-SZ24-LA-Q",
      "normalizedModelNumber": "s-ro-sz24-la-q",
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
      "id": "model-mitsutomo-uho42-nb-ld-q",
      "slug": "mitsutomo-uho42-nb-ld-q",
      "name": "Mitsutomo UHO42-NB-LD-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO42-NB-LD-Q",
      "normalizedModelNumber": "uho42-nb-ld-q",
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
      "id": "model-mitsutomo-uho33-nb-ld-q",
      "slug": "mitsutomo-uho33-nb-ld-q",
      "name": "Mitsutomo UHO33-NB-LD-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO33-NB-LD-Q",
      "normalizedModelNumber": "uho33-nb-ld-q",
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
      "id": "model-mitsutomo-uho48-nb-ld-q",
      "slug": "mitsutomo-uho48-nb-ld-q",
      "name": "Mitsutomo UHO48-NB-LD-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO48-NB-LD-Q",
      "normalizedModelNumber": "uho48-nb-ld-q",
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
      "id": "model-mitsutomo-uho30-nb-q",
      "slug": "mitsutomo-uho30-nb-q",
      "name": "Mitsutomo UHO30-NB-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO30-NB-Q",
      "normalizedModelNumber": "uho30-nb-q",
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
      "id": "model-mitsutomo-rho36-nb-la-q",
      "slug": "mitsutomo-rho36-nb-la-q",
      "name": "Mitsutomo RHO36-NB-LA-Q",
      "seriesId": "series-mitsutomo-rho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RHO36-NB-LA-Q",
      "normalizedModelNumber": "rho36-nb-la-q",
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
      "id": "model-mitsutomo-rho48-nb-la-q",
      "slug": "mitsutomo-rho48-nb-la-q",
      "name": "Mitsutomo RHO48-NB-LA-Q",
      "seriesId": "series-mitsutomo-rho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RHO48-NB-LA-Q",
      "normalizedModelNumber": "rho48-nb-la-q",
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
      "id": "model-mitsutomo-uho36-nb-q",
      "slug": "mitsutomo-uho36-nb-q",
      "name": "Mitsutomo UHO36-NB-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO36-NB-Q",
      "normalizedModelNumber": "uho36-nb-q",
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
      "id": "model-mitsutomo-uho48-nb-q",
      "slug": "mitsutomo-uho48-nb-q",
      "name": "Mitsutomo UHO48-NB-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO48-NB-Q",
      "normalizedModelNumber": "uho48-nb-q",
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
      "id": "model-mitsutomo-uho60-nb-q",
      "slug": "mitsutomo-uho60-nb-q",
      "name": "Mitsutomo UHO60-NB-Q",
      "seriesId": "series-mitsutomo-uho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "UHO60-NB-Q",
      "normalizedModelNumber": "uho60-nb-q",
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
      "id": "model-mitsutomo-rho60-nb-la-q",
      "slug": "mitsutomo-rho60-nb-la-q",
      "name": "Mitsutomo RHO60-NB-LA-Q",
      "seriesId": "series-mitsutomo-rho-series",
      "brandId": "brand-mitsutomo",
      "modelNumber": "RHO60-NB-LA-Q",
      "normalizedModelNumber": "rho60-nb-la-q",
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
      "id": "ou-mitsutomo-ho-sz09-la-q",
      "modelNumber": "HO-SZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz09-ab-q",
      "modelNumber": "HO-SZ09-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ru-sz09-la-q",
      "modelNumber": "RU-SZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz06-la-q",
      "modelNumber": "HO-SZ06-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz12-la-q",
      "modelNumber": "HO-SZ12-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ru-sz12-la-q",
      "modelNumber": "RU-SZ12-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz12-ab-q",
      "modelNumber": "HO-SZ12-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ru-sz18-la-q",
      "modelNumber": "RU-SZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz06-ab-q",
      "modelNumber": "HO-SZ06-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ru-sz24-la-q",
      "modelNumber": "RU-SZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-mp36-la-q",
      "modelNumber": "RO-MP36-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-mt18-la-q",
      "modelNumber": "RO-MT18-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-mq28-la-q",
      "modelNumber": "RO-MQ28-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-mt28-ab-q",
      "modelNumber": "HO-MT28-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-sz24-la-q",
      "modelNumber": "HO-SZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz24-ab-q",
      "modelNumber": "HO-SZ24-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ru-uz30-la-q",
      "modelNumber": "RU-UZ30-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz18-ab-q",
      "modelNumber": "HO-SZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-sz18-la-q",
      "modelNumber": "HO-SZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-sz09-ab-q",
      "modelNumber": "RO-SZ09-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ro-sz09-la-q",
      "modelNumber": "RO-SZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-sz09-ab-j",
      "modelNumber": "RO-SZ09-AB-J",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ro-sz09-la-j",
      "modelNumber": "RO-SZ09-LA-J",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-mp36-la-q",
      "modelNumber": "HO-MP36-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-ms60-la-q",
      "modelNumber": "HO-MS60-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-ms48-la-q",
      "modelNumber": "RO-MS48-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sg36-la-q",
      "modelNumber": "HO-SG36-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-ms48-la-q",
      "modelNumber": "HO-MS48-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-mp48-ab-q",
      "modelNumber": "HO-MP48-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-mq28-la-q",
      "modelNumber": "HO-MQ28-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-mq36-ac-q",
      "modelNumber": "HO-MQ36-AC-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-mt18-la-q",
      "modelNumber": "HO-MT18-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-sz30-ab-q",
      "modelNumber": "RO-SZ30-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-mt28-ac-q",
      "modelNumber": "HO-MT28-AC-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-md18-ab-q",
      "modelNumber": "HO-MD18-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ro-sz18-la-q",
      "modelNumber": "RO-SZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz33-la-q",
      "modelNumber": "HO-SZ33-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz36-ab-q",
      "modelNumber": "HO-SZ36-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-b-ru-uz36-la-q",
      "modelNumber": "B-RU-UZ36-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-mq36-ab-q",
      "modelNumber": "HO-MQ36-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-mp55-ab-q",
      "modelNumber": "HO-MP55-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-sz36-lc-q",
      "modelNumber": "HO-SZ36-LC-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ru-sg48-la-q",
      "modelNumber": "RU-SG48-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-sz18-ab-q",
      "modelNumber": "RO-SZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-ho-sz36-bb-q",
      "modelNumber": "HO-SZ36-BB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-s-ro-sz09-la-q",
      "modelNumber": "S-RO-SZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho18-nb-la-q",
      "modelNumber": "UHO18-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-rho18-nb-la-q",
      "modelNumber": "RHO18-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho24-nb-la-q",
      "modelNumber": "UHO24-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ro-sz24-la-q",
      "modelNumber": "RO-SZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sg48-la-q",
      "modelNumber": "HO-SG48-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-rho24-nb-la-q",
      "modelNumber": "RHO24-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho18-nb-q",
      "modelNumber": "UHO18-NB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-uho36-nb-la-q",
      "modelNumber": "UHO36-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sg60-la-q",
      "modelNumber": "HO-SG60-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho36-nb-ld-q",
      "modelNumber": "UHO36-NB-LD-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho48-nb-la-q",
      "modelNumber": "UHO48-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho60-nb-la-q",
      "modelNumber": "UHO60-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho24-nb-q",
      "modelNumber": "UHO24-NB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-hw-sz60-bb-q",
      "modelNumber": "HW-SZ60-BB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-uho30-nb-la-q",
      "modelNumber": "UHO30-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-ho-sz48-bb-q",
      "modelNumber": "HO-SZ48-BB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-s-ro-sz24-la-q",
      "modelNumber": "S-RO-SZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho42-nb-ld-q",
      "modelNumber": "UHO42-NB-LD-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho33-nb-ld-q",
      "modelNumber": "UHO33-NB-LD-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho48-nb-ld-q",
      "modelNumber": "UHO48-NB-LD-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho30-nb-q",
      "modelNumber": "UHO30-NB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-rho36-nb-la-q",
      "modelNumber": "RHO36-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-rho48-nb-la-q",
      "modelNumber": "RHO48-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mitsutomo-uho36-nb-q",
      "modelNumber": "UHO36-NB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-uho48-nb-q",
      "modelNumber": "UHO48-NB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-uho60-nb-q",
      "modelNumber": "UHO60-NB-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mitsutomo-rho60-nb-la-q",
      "modelNumber": "RHO60-NB-LA-Q",
      "brandId": "brand-mitsutomo",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-hl-uz09-la-q",
      "modelNumber": "HL-UZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-sz09-ab-q",
      "modelNumber": "HW-SZ09-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-uz09-la-q",
      "modelNumber": "HW-UZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-uz06-la-q",
      "modelNumber": "HW-UZ06-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hl-uz12-la-q",
      "modelNumber": "HL-UZ12-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hl-uz12-ab-q",
      "modelNumber": "HL-UZ12-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-uz12-la-q",
      "modelNumber": "HW-UZ12-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hj-uz09-ab-q",
      "modelNumber": "HJ-UZ09-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hj-uz09-la-q",
      "modelNumber": "HJ-UZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-uz18-la-q",
      "modelNumber": "HW-UZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hl-uz16-la-q",
      "modelNumber": "HL-UZ16-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-sz06-ab-q",
      "modelNumber": "HW-SZ06-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-uz24-la-q",
      "modelNumber": "HW-UZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49578",
      "modelNumber": "IU-49578",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-sz12-ab-q",
      "modelNumber": "HW-SZ12-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hj-uz12-la-q",
      "modelNumber": "HJ-UZ12-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49581",
      "modelNumber": "IU-49581",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hj-uz12-ab-q",
      "modelNumber": "HJ-UZ12-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49579",
      "modelNumber": "IU-49579",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49511",
      "modelNumber": "IU-49511",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz09-la-q",
      "modelNumber": "HC-UZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz12-ab-q",
      "modelNumber": "HC-UZ12-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-sz24-ab-q",
      "modelNumber": "HW-SZ24-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-uz30-la-q",
      "modelNumber": "HW-UZ30-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hf-uz18-la-q",
      "modelNumber": "HF-UZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hj-uz18-la-q",
      "modelNumber": "HJ-UZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz12-la-q",
      "modelNumber": "HC-UZ12-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hj-uz06-la-q",
      "modelNumber": "HJ-UZ06-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hj-uz06-ab-q",
      "modelNumber": "HJ-UZ06-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-sz18-ab-q",
      "modelNumber": "HW-SZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz24-la-q",
      "modelNumber": "HC-UZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-rw-sz09-ab-q",
      "modelNumber": "RW-SZ09-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-rw-sz09-la-q",
      "modelNumber": "RW-SZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-rw-sz09-ab-j",
      "modelNumber": "RW-SZ09-AB-J",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-rw-sz09-la-j",
      "modelNumber": "RW-SZ09-LA-J",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49502",
      "modelNumber": "IU-49502",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49509",
      "modelNumber": "IU-49509",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz09-la-q",
      "modelNumber": "HD-UZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz06-la-q",
      "modelNumber": "HD-UZ06-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49580",
      "modelNumber": "IU-49580",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-ug36-la-q",
      "modelNumber": "HC-UG36-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49508",
      "modelNumber": "IU-49508",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49503",
      "modelNumber": "IU-49503",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hf-uz24-la-q",
      "modelNumber": "HF-UZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49505",
      "modelNumber": "IU-49505",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49507",
      "modelNumber": "IU-49507",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49510",
      "modelNumber": "IU-49510",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-rw-sz30-ac-q",
      "modelNumber": "RW-SZ30-AC-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-rw-sz30-ab-q",
      "modelNumber": "RW-SZ30-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz18-la-q",
      "modelNumber": "HC-UZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz24-ab-q",
      "modelNumber": "HC-UZ24-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hf-uz24-ab-q",
      "modelNumber": "HF-UZ24-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-s-hd-uz09-la-q",
      "modelNumber": "S-HD-UZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hf-uz18-ab-q",
      "modelNumber": "HF-UZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz09-ab-q",
      "modelNumber": "HC-UZ09-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49512",
      "modelNumber": "IU-49512",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49501",
      "modelNumber": "IU-49501",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hl-uz16-ab-q",
      "modelNumber": "HL-UZ16-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz09-ab-q",
      "modelNumber": "HD-UZ09-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-rw-sz18-la-q",
      "modelNumber": "RW-SZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz18-la-q",
      "modelNumber": "HD-UZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-uz33-la-q",
      "modelNumber": "HW-UZ33-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-sz36-ab-q",
      "modelNumber": "HW-SZ36-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49506",
      "modelNumber": "IU-49506",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49504",
      "modelNumber": "IU-49504",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hf-ug36-la-q",
      "modelNumber": "HF-UG36-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-s-hd-uz12-la-q",
      "modelNumber": "S-HD-UZ12-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz12-la-q",
      "modelNumber": "HD-UZ12-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz18-ab-q",
      "modelNumber": "HC-UZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hw-uz36-lc-q",
      "modelNumber": "HW-UZ36-LC-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-s-hd-uz18-la-q",
      "modelNumber": "S-HD-UZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hf-ug48-la-q",
      "modelNumber": "HF-UG48-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hj-uz18-ab-q",
      "modelNumber": "HJ-UZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hv-uz24-la-q",
      "modelNumber": "HV-UZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hd-uz12-ab-q",
      "modelNumber": "HD-UZ12-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-rw-sz18-ab-q",
      "modelNumber": "RW-SZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-uz36-bb-q",
      "modelNumber": "HC-UZ36-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz24-ab-q",
      "modelNumber": "HD-UZ24-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-s-rw-sz09-la-q",
      "modelNumber": "S-RW-SZ09-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz24la-q",
      "modelNumber": "HD-UZ24LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hc-ug48-la-q",
      "modelNumber": "HC-UG48-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-uhm18-bb-la-q",
      "modelNumber": "UHM18-BB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhmx3-18-ab-la-q",
      "modelNumber": "UHMX3-18-AB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhmx3-24-ab-la-q",
      "modelNumber": "UHMX3-24-AB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-rw-sz24-la-q",
      "modelNumber": "RW-SZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hv-uz18-la-q",
      "modelNumber": "HV-UZ18-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hv-uz24-ab-q",
      "modelNumber": "HV-UZ24-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm24-bb-la-q",
      "modelNumber": "UHM24-BB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm18-bb-q",
      "modelNumber": "UHM18-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhmx3-36-bb-la-q",
      "modelNumber": "UHMX3-36-BB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hf-ug60-la-q",
      "modelNumber": "HF-UG60-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz18-ab-q",
      "modelNumber": "HD-UZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-ug36la-q",
      "modelNumber": "HD-UG36LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hv-ug48-la-q",
      "modelNumber": "HV-UG48-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hf-uz36-bb-q",
      "modelNumber": "HF-UZ36-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hv-uz18-ab-q",
      "modelNumber": "HV-UZ18-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hv-uz30-ab-q",
      "modelNumber": "HV-UZ30-AB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhmx3-48-cb-la-q",
      "modelNumber": "UHMX3-48-CB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhmx3-60-cb-la-q",
      "modelNumber": "UHMX3-60-CB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm24-bb-q",
      "modelNumber": "UHM24-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm36-cb-la-q",
      "modelNumber": "UHM36-CB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hf-uz60-bb-q",
      "modelNumber": "HF-UZ60-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-uhmx3-30-bb-la-q",
      "modelNumber": "UHMX3-30-BB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hv-ug36-la-q",
      "modelNumber": "HV-UG36-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hd-ug48la-q",
      "modelNumber": "HD-UG48LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hf-uz48-bb-q",
      "modelNumber": "HF-UZ48-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-s-rw-sz24-la-q",
      "modelNumber": "S-RW-SZ24-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hv-uz30-la-q",
      "modelNumber": "HV-UZ30-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm30-cb-la-q",
      "modelNumber": "UHM30-CB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hc-uz48-bb-q",
      "modelNumber": "HC-UZ48-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-uhm42-db-ldq",
      "modelNumber": "UHM42-DB-LDQ",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm33-cb-la-q",
      "modelNumber": "UHM33-CB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm48-db-la-q",
      "modelNumber": "UHM48-DB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hv-uz36-la-q",
      "modelNumber": "HV-UZ36-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hd-uz36-bb-q",
      "modelNumber": "HD-UZ36-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-uhm48-db-ld-q",
      "modelNumber": "UHM48-DB-LD-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm30-cb-q",
      "modelNumber": "UHM30-CB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-cmp-1824-a-la",
      "modelNumber": "CMP-1824-A-LA",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-cmp-1824-b-la",
      "modelNumber": "CMP-1824-B-LA",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-cmp-3036-c-la",
      "modelNumber": "CMP-3036-C-LA",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm60-db-la-q",
      "modelNumber": "UHM60-DB-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-cmp-4860-c-la",
      "modelNumber": "CMP-4860-C-LA",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-cmp-3036-b-la",
      "modelNumber": "CMP-3036-B-LA",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm36-cb-q",
      "modelNumber": "UHM36-CB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hd-ug60al-q",
      "modelNumber": "HD-UG60AL-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-hd-uz60-bb-q",
      "modelNumber": "HD-UZ60-BB-Q",
      "brandId": "brand-mitsutomo",
      "type": "wall-single"
    },
    {
      "id": "iu-uhm48-cb-q",
      "modelNumber": "UHM48-CB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-uhm60-db-q",
      "modelNumber": "UHM60-DB-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-cmp-3036-a-la",
      "modelNumber": "CMP-3036-A-LA",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-hv-ug60-la-q",
      "modelNumber": "HV-UG60-LA-Q",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    },
    {
      "id": "iu-cmp-4860-d-la",
      "modelNumber": "CMP-4860-D-LA",
      "brandId": "brand-mitsutomo",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-mitsutomo-ho-sz09-la-q-hl-uz09-la-q",
      "slug": "mitsutomo-ho-sz09-la-q-hl-uz09-la-q",
      "modelId": "model-mitsutomo-ho-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-la-q",
      "indoorUnitId": "iu-hl-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-ab-q-hw-sz09-ab-q",
      "slug": "mitsutomo-ho-sz09-ab-q-hw-sz09-ab-q",
      "modelId": "model-mitsutomo-ho-sz09-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-ab-q",
      "indoorUnitId": "iu-hw-sz09-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz09-la-q-hl-uz09-la-q",
      "slug": "mitsutomo-ru-sz09-la-q-hl-uz09-la-q",
      "modelId": "model-mitsutomo-ru-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz09-la-q",
      "indoorUnitId": "iu-hl-uz09-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 13.9,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-la-q-hw-uz09-la-q",
      "slug": "mitsutomo-ho-sz09-la-q-hw-uz09-la-q",
      "modelId": "model-mitsutomo-ho-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-la-q",
      "indoorUnitId": "iu-hw-uz09-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz06-la-q-hw-uz06-la-q",
      "slug": "mitsutomo-ho-sz06-la-q-hw-uz06-la-q",
      "modelId": "model-mitsutomo-ho-sz06-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz06-la-q",
      "indoorUnitId": "iu-hw-uz06-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-la-q-hl-uz12-la-q",
      "slug": "mitsutomo-ho-sz12-la-q-hl-uz12-la-q",
      "modelId": "model-mitsutomo-ho-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-la-q",
      "indoorUnitId": "iu-hl-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz12-la-q-hl-uz12-la-q",
      "slug": "mitsutomo-ru-sz12-la-q-hl-uz12-la-q",
      "modelId": "model-mitsutomo-ru-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz12-la-q",
      "indoorUnitId": "iu-hl-uz12-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz09-la-q-hw-uz09-la-q",
      "slug": "mitsutomo-ru-sz09-la-q-hw-uz09-la-q",
      "modelId": "model-mitsutomo-ru-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz09-la-q",
      "indoorUnitId": "iu-hw-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-ab-q-hl-uz12-ab-q",
      "slug": "mitsutomo-ho-sz12-ab-q-hl-uz12-ab-q",
      "modelId": "model-mitsutomo-ho-sz12-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-ab-q",
      "indoorUnitId": "iu-hl-uz12-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-la-q-hw-uz12-la-q",
      "slug": "mitsutomo-ho-sz12-la-q-hw-uz12-la-q",
      "modelId": "model-mitsutomo-ho-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-la-q",
      "indoorUnitId": "iu-hw-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-ab-q-hj-uz09-ab-q",
      "slug": "mitsutomo-ho-sz09-ab-q-hj-uz09-ab-q",
      "modelId": "model-mitsutomo-ho-sz09-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-ab-q",
      "indoorUnitId": "iu-hj-uz09-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-la-q-hj-uz09-la-q",
      "slug": "mitsutomo-ho-sz09-la-q-hj-uz09-la-q",
      "modelId": "model-mitsutomo-ho-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-la-q",
      "indoorUnitId": "iu-hj-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz18-la-q-hw-uz18-la-q",
      "slug": "mitsutomo-ru-sz18-la-q-hw-uz18-la-q",
      "modelId": "model-mitsutomo-ru-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz18-la-q",
      "indoorUnitId": "iu-hw-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz18-la-q-hl-uz16-la-q",
      "slug": "mitsutomo-ru-sz18-la-q-hl-uz16-la-q",
      "modelId": "model-mitsutomo-ru-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz18-la-q",
      "indoorUnitId": "iu-hl-uz16-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.8,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz06-ab-q-hw-sz06-ab-q",
      "slug": "mitsutomo-ho-sz06-ab-q-hw-sz06-ab-q",
      "modelId": "model-mitsutomo-ho-sz06-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz06-ab-q",
      "indoorUnitId": "iu-hw-sz06-ab-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz24-la-q-hw-uz24-la-q",
      "slug": "mitsutomo-ru-sz24-la-q-hw-uz24-la-q",
      "modelId": "model-mitsutomo-ru-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz24-la-q",
      "indoorUnitId": "iu-hw-uz24-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-mp36-la-q-iu-49578",
      "slug": "mitsutomo-ro-mp36-la-q-iu-49578",
      "modelId": "model-mitsutomo-ro-mp36-la-q",
      "outdoorUnitId": "ou-mitsutomo-ro-mp36-la-q",
      "indoorUnitId": "iu-iu-49578",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz12-la-q-hw-uz12-la-q",
      "slug": "mitsutomo-ru-sz12-la-q-hw-uz12-la-q",
      "modelId": "model-mitsutomo-ru-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz12-la-q",
      "indoorUnitId": "iu-hw-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-ab-q-hw-sz12-ab-q",
      "slug": "mitsutomo-ho-sz12-ab-q-hw-sz12-ab-q",
      "modelId": "model-mitsutomo-ho-sz12-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-ab-q",
      "indoorUnitId": "iu-hw-sz12-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-la-q-hj-uz12-la-q",
      "slug": "mitsutomo-ho-sz12-la-q-hj-uz12-la-q",
      "modelId": "model-mitsutomo-ho-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-la-q",
      "indoorUnitId": "iu-hj-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-mt18-la-q-iu-49581",
      "slug": "mitsutomo-ro-mt18-la-q-iu-49581",
      "modelId": "model-mitsutomo-ro-mt18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ro-mt18-la-q",
      "indoorUnitId": "iu-iu-49581",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-ab-q-hj-uz12-ab-q",
      "slug": "mitsutomo-ho-sz12-ab-q-hj-uz12-ab-q",
      "modelId": "model-mitsutomo-ho-sz12-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-ab-q",
      "indoorUnitId": "iu-hj-uz12-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-mq28-la-q-iu-49579",
      "slug": "mitsutomo-ro-mq28-la-q-iu-49579",
      "modelId": "model-mitsutomo-ro-mq28-la-q",
      "outdoorUnitId": "ou-mitsutomo-ro-mq28-la-q",
      "indoorUnitId": "iu-iu-49579",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mt28-ab-q-iu-49511",
      "slug": "mitsutomo-ho-mt28-ab-q-iu-49511",
      "modelId": "model-mitsutomo-ho-mt28-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mt28-ab-q",
      "indoorUnitId": "iu-iu-49511",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.6,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-la-q-hc-uz09-la-q",
      "slug": "mitsutomo-ho-sz09-la-q-hc-uz09-la-q",
      "modelId": "model-mitsutomo-ho-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-la-q",
      "indoorUnitId": "iu-hc-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-ab-q-hc-uz12-ab-q",
      "slug": "mitsutomo-ho-sz12-ab-q-hc-uz12-ab-q",
      "modelId": "model-mitsutomo-ho-sz12-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-ab-q",
      "indoorUnitId": "iu-hc-uz12-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-la-q-hw-uz24-la-q",
      "slug": "mitsutomo-ho-sz24-la-q-hw-uz24-la-q",
      "modelId": "model-mitsutomo-ho-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-la-q",
      "indoorUnitId": "iu-hw-uz24-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-ab-q-hw-sz24-ab-q",
      "slug": "mitsutomo-ho-sz24-ab-q-hw-sz24-ab-q",
      "modelId": "model-mitsutomo-ho-sz24-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-ab-q",
      "indoorUnitId": "iu-hw-sz24-ab-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-uz30-la-q-hw-uz30-la-q",
      "slug": "mitsutomo-ru-uz30-la-q-hw-uz30-la-q",
      "modelId": "model-mitsutomo-ru-uz30-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-uz30-la-q",
      "indoorUnitId": "iu-hw-uz30-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz18-la-q-hf-uz18-la-q",
      "slug": "mitsutomo-ru-sz18-la-q-hf-uz18-la-q",
      "modelId": "model-mitsutomo-ru-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz18-la-q",
      "indoorUnitId": "iu-hf-uz18-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz18-la-q-hj-uz18-la-q",
      "slug": "mitsutomo-ru-sz18-la-q-hj-uz18-la-q",
      "modelId": "model-mitsutomo-ru-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz18-la-q",
      "indoorUnitId": "iu-hj-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-la-q-hc-uz12-la-q",
      "slug": "mitsutomo-ho-sz12-la-q-hc-uz12-la-q",
      "modelId": "model-mitsutomo-ho-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-la-q",
      "indoorUnitId": "iu-hc-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz09-la-q-hj-uz09-la-q",
      "slug": "mitsutomo-ru-sz09-la-q-hj-uz09-la-q",
      "modelId": "model-mitsutomo-ru-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz09-la-q",
      "indoorUnitId": "iu-hj-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz12-la-q-hj-uz12-la-q",
      "slug": "mitsutomo-ru-sz12-la-q-hj-uz12-la-q",
      "modelId": "model-mitsutomo-ru-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz12-la-q",
      "indoorUnitId": "iu-hj-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz06-la-q-hj-uz06-la-q",
      "slug": "mitsutomo-ho-sz06-la-q-hj-uz06-la-q",
      "modelId": "model-mitsutomo-ho-sz06-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz06-la-q",
      "indoorUnitId": "iu-hj-uz06-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz06-ab-q-hj-uz06-ab-q",
      "slug": "mitsutomo-ho-sz06-ab-q-hj-uz06-ab-q",
      "modelId": "model-mitsutomo-ho-sz06-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz06-ab-q",
      "indoorUnitId": "iu-hj-uz06-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-ab-q-hw-sz18-ab-q",
      "slug": "mitsutomo-ho-sz18-ab-q-hw-sz18-ab-q",
      "modelId": "model-mitsutomo-ho-sz18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-ab-q",
      "indoorUnitId": "iu-hw-sz18-ab-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz24-la-q-hc-uz24-la-q",
      "slug": "mitsutomo-ru-sz24-la-q-hc-uz24-la-q",
      "modelId": "model-mitsutomo-ru-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz24-la-q",
      "indoorUnitId": "iu-hc-uz24-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-la-q-hw-uz18-la-q",
      "slug": "mitsutomo-ho-sz18-la-q-hw-uz18-la-q",
      "modelId": "model-mitsutomo-ho-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-la-q",
      "indoorUnitId": "iu-hw-uz18-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz09-ab-q-rw-sz09-ab-q",
      "slug": "mitsutomo-ro-sz09-ab-q-rw-sz09-ab-q",
      "modelId": "model-mitsutomo-ro-sz09-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ro-sz09-ab-q",
      "indoorUnitId": "iu-rw-sz09-ab-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz09-la-q-hc-uz09-la-q",
      "slug": "mitsutomo-ru-sz09-la-q-hc-uz09-la-q",
      "modelId": "model-mitsutomo-ru-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz09-la-q",
      "indoorUnitId": "iu-hc-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz09-la-q-rw-sz09-la-q",
      "slug": "mitsutomo-ro-sz09-la-q-rw-sz09-la-q",
      "modelId": "model-mitsutomo-ro-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ro-sz09-la-q",
      "indoorUnitId": "iu-rw-sz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz09-ab-j-rw-sz09-ab-j",
      "slug": "mitsutomo-ro-sz09-ab-j-rw-sz09-ab-j",
      "modelId": "model-mitsutomo-ro-sz09-ab-j",
      "outdoorUnitId": "ou-mitsutomo-ro-sz09-ab-j",
      "indoorUnitId": "iu-rw-sz09-ab-j",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz09-la-j-rw-sz09-la-j",
      "slug": "mitsutomo-ro-sz09-la-j-rw-sz09-la-j",
      "modelId": "model-mitsutomo-ro-sz09-la-j",
      "outdoorUnitId": "ou-mitsutomo-ro-sz09-la-j",
      "indoorUnitId": "iu-rw-sz09-la-j",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mp36-la-q-iu-49502",
      "slug": "mitsutomo-ho-mp36-la-q-iu-49502",
      "modelId": "model-mitsutomo-ho-mp36-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mp36-la-q",
      "indoorUnitId": "iu-iu-49502",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-ms60-la-q-iu-49509",
      "slug": "mitsutomo-ho-ms60-la-q-iu-49509",
      "modelId": "model-mitsutomo-ho-ms60-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-ms60-la-q",
      "indoorUnitId": "iu-iu-49509",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-la-q-hd-uz09-la-q",
      "slug": "mitsutomo-ho-sz09-la-q-hd-uz09-la-q",
      "modelId": "model-mitsutomo-ho-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-la-q",
      "indoorUnitId": "iu-hd-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz06-la-q-hd-uz06-la-q",
      "slug": "mitsutomo-ho-sz06-la-q-hd-uz06-la-q",
      "modelId": "model-mitsutomo-ho-sz06-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz06-la-q",
      "indoorUnitId": "iu-hd-uz06-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-ms48-la-q-iu-49580",
      "slug": "mitsutomo-ro-ms48-la-q-iu-49580",
      "modelId": "model-mitsutomo-ro-ms48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ro-ms48-la-q",
      "indoorUnitId": "iu-iu-49580",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg36-la-q-hc-ug36-la-q",
      "slug": "mitsutomo-ho-sg36-la-q-hc-ug36-la-q",
      "modelId": "model-mitsutomo-ho-sg36-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg36-la-q",
      "indoorUnitId": "iu-hc-ug36-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-ms48-la-q-iu-49508",
      "slug": "mitsutomo-ho-ms48-la-q-iu-49508",
      "modelId": "model-mitsutomo-ho-ms48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-ms48-la-q",
      "indoorUnitId": "iu-iu-49508",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mp48-ab-q-iu-49503",
      "slug": "mitsutomo-ho-mp48-ab-q-iu-49503",
      "modelId": "model-mitsutomo-ho-mp48-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mp48-ab-q",
      "indoorUnitId": "iu-iu-49503",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz12-la-q-hc-uz12-la-q",
      "slug": "mitsutomo-ru-sz12-la-q-hc-uz12-la-q",
      "modelId": "model-mitsutomo-ru-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz12-la-q",
      "indoorUnitId": "iu-hc-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz24-la-q-hf-uz24-la-q",
      "slug": "mitsutomo-ru-sz24-la-q-hf-uz24-la-q",
      "modelId": "model-mitsutomo-ru-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz24-la-q",
      "indoorUnitId": "iu-hf-uz24-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mq28-la-q-iu-49505",
      "slug": "mitsutomo-ho-mq28-la-q-iu-49505",
      "modelId": "model-mitsutomo-ho-mq28-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mq28-la-q",
      "indoorUnitId": "iu-iu-49505",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mq36-ac-q-iu-49507",
      "slug": "mitsutomo-ho-mq36-ac-q-iu-49507",
      "modelId": "model-mitsutomo-ho-mq36-ac-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mq36-ac-q",
      "indoorUnitId": "iu-iu-49507",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mt18-la-q-iu-49510",
      "slug": "mitsutomo-ho-mt18-la-q-iu-49510",
      "modelId": "model-mitsutomo-ho-mt18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mt18-la-q",
      "indoorUnitId": "iu-iu-49510",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz30-ab-q-rw-sz30-ac-q",
      "slug": "mitsutomo-ro-sz30-ab-q-rw-sz30-ac-q",
      "modelId": "model-mitsutomo-ro-sz30-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ro-sz30-ab-q",
      "indoorUnitId": "iu-rw-sz30-ac-q",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz30-ab-q-rw-sz30-ab-q",
      "slug": "mitsutomo-ro-sz30-ab-q-rw-sz30-ab-q",
      "modelId": "model-mitsutomo-ro-sz30-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ro-sz30-ab-q",
      "indoorUnitId": "iu-rw-sz30-ab-q",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz18-la-q-hc-uz18-la-q",
      "slug": "mitsutomo-ru-sz18-la-q-hc-uz18-la-q",
      "modelId": "model-mitsutomo-ru-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz18-la-q",
      "indoorUnitId": "iu-hc-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-la-q-hc-uz24-la-q",
      "slug": "mitsutomo-ho-sz24-la-q-hc-uz24-la-q",
      "modelId": "model-mitsutomo-ho-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-la-q",
      "indoorUnitId": "iu-hc-uz24-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-la-q-hj-uz18-la-q",
      "slug": "mitsutomo-ho-sz18-la-q-hj-uz18-la-q",
      "modelId": "model-mitsutomo-ho-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-la-q",
      "indoorUnitId": "iu-hj-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-ab-q-hc-uz24-ab-q",
      "slug": "mitsutomo-ho-sz24-ab-q-hc-uz24-ab-q",
      "modelId": "model-mitsutomo-ho-sz24-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-ab-q",
      "indoorUnitId": "iu-hc-uz24-ab-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-ab-q-hf-uz24-ab-q",
      "slug": "mitsutomo-ho-sz24-ab-q-hf-uz24-ab-q",
      "modelId": "model-mitsutomo-ho-sz24-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-ab-q",
      "indoorUnitId": "iu-hf-uz24-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-la-q-s-hd-uz09-la-q",
      "slug": "mitsutomo-ho-sz09-la-q-s-hd-uz09-la-q",
      "modelId": "model-mitsutomo-ho-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-la-q",
      "indoorUnitId": "iu-s-hd-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-ab-q-hf-uz18-ab-q",
      "slug": "mitsutomo-ho-sz18-ab-q-hf-uz18-ab-q",
      "modelId": "model-mitsutomo-ho-sz18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-ab-q",
      "indoorUnitId": "iu-hf-uz18-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-ab-q-hc-uz09-ab-q",
      "slug": "mitsutomo-ho-sz09-ab-q-hc-uz09-ab-q",
      "modelId": "model-mitsutomo-ho-sz09-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-ab-q",
      "indoorUnitId": "iu-hc-uz09-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mt28-ac-q-iu-49512",
      "slug": "mitsutomo-ho-mt28-ac-q-iu-49512",
      "modelId": "model-mitsutomo-ho-mt28-ac-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mt28-ac-q",
      "indoorUnitId": "iu-iu-49512",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-md18-ab-q-iu-49501",
      "slug": "mitsutomo-ho-md18-ab-q-iu-49501",
      "modelId": "model-mitsutomo-ho-md18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-md18-ab-q",
      "indoorUnitId": "iu-iu-49501",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-la-q-hf-uz18-la-q",
      "slug": "mitsutomo-ho-sz18-la-q-hf-uz18-la-q",
      "modelId": "model-mitsutomo-ho-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-la-q",
      "indoorUnitId": "iu-hf-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-la-q-hf-uz24-la-q",
      "slug": "mitsutomo-ho-sz24-la-q-hf-uz24-la-q",
      "modelId": "model-mitsutomo-ho-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-la-q",
      "indoorUnitId": "iu-hf-uz24-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-ab-q-hl-uz16-ab-q",
      "slug": "mitsutomo-ho-sz18-ab-q-hl-uz16-ab-q",
      "modelId": "model-mitsutomo-ho-sz18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-ab-q",
      "indoorUnitId": "iu-hl-uz16-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz09-ab-q-hd-uz09-ab-q",
      "slug": "mitsutomo-ho-sz09-ab-q-hd-uz09-ab-q",
      "modelId": "model-mitsutomo-ho-sz09-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz09-ab-q",
      "indoorUnitId": "iu-hd-uz09-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz18-la-q-rw-sz18-la-q",
      "slug": "mitsutomo-ro-sz18-la-q-rw-sz18-la-q",
      "modelId": "model-mitsutomo-ro-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ro-sz18-la-q",
      "indoorUnitId": "iu-rw-sz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz18-la-q-hd-uz18-la-q",
      "slug": "mitsutomo-ru-sz18-la-q-hd-uz18-la-q",
      "modelId": "model-mitsutomo-ru-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz18-la-q",
      "indoorUnitId": "iu-hd-uz18-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz33-la-q-hw-uz33-la-q",
      "slug": "mitsutomo-ho-sz33-la-q-hw-uz33-la-q",
      "modelId": "model-mitsutomo-ho-sz33-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz33-la-q",
      "indoorUnitId": "iu-hw-uz33-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz36-ab-q-hw-sz36-ab-q",
      "slug": "mitsutomo-ho-sz36-ab-q-hw-sz36-ab-q",
      "modelId": "model-mitsutomo-ho-sz36-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz36-ab-q",
      "indoorUnitId": "iu-hw-sz36-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-la-q-hl-uz16-la-q",
      "slug": "mitsutomo-ho-sz18-la-q-hl-uz16-la-q",
      "modelId": "model-mitsutomo-ho-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-la-q",
      "indoorUnitId": "iu-hl-uz16-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-b-ru-uz36-la-q-hc-ug36-la-q",
      "slug": "mitsutomo-b-ru-uz36-la-q-hc-ug36-la-q",
      "modelId": "model-mitsutomo-b-ru-uz36-la-q",
      "outdoorUnitId": "ou-mitsutomo-b-ru-uz36-la-q",
      "indoorUnitId": "iu-hc-ug36-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mq36-ab-q-iu-49506",
      "slug": "mitsutomo-ho-mq36-ab-q-iu-49506",
      "modelId": "model-mitsutomo-ho-mq36-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mq36-ab-q",
      "indoorUnitId": "iu-iu-49506",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-mp55-ab-q-iu-49504",
      "slug": "mitsutomo-ho-mp55-ab-q-iu-49504",
      "modelId": "model-mitsutomo-ho-mp55-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-mp55-ab-q",
      "indoorUnitId": "iu-iu-49504",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg36-la-q-hf-ug36-la-q",
      "slug": "mitsutomo-ho-sg36-la-q-hf-ug36-la-q",
      "modelId": "model-mitsutomo-ho-sg36-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg36-la-q",
      "indoorUnitId": "iu-hf-ug36-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-la-q-s-hd-uz12-la-q",
      "slug": "mitsutomo-ho-sz12-la-q-s-hd-uz12-la-q",
      "modelId": "model-mitsutomo-ho-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-la-q",
      "indoorUnitId": "iu-s-hd-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-la-q-hd-uz12-la-q",
      "slug": "mitsutomo-ho-sz12-la-q-hd-uz12-la-q",
      "modelId": "model-mitsutomo-ho-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-la-q",
      "indoorUnitId": "iu-hd-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-ab-q-hc-uz18-ab-q",
      "slug": "mitsutomo-ho-sz18-ab-q-hc-uz18-ab-q",
      "modelId": "model-mitsutomo-ho-sz18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-ab-q",
      "indoorUnitId": "iu-hc-uz18-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-la-q-hc-uz18-la-q",
      "slug": "mitsutomo-ho-sz18-la-q-hc-uz18-la-q",
      "modelId": "model-mitsutomo-ho-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-la-q",
      "indoorUnitId": "iu-hc-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz36-lc-q-hw-uz36-lc-q",
      "slug": "mitsutomo-ho-sz36-lc-q-hw-uz36-lc-q",
      "modelId": "model-mitsutomo-ho-sz36-lc-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz36-lc-q",
      "indoorUnitId": "iu-hw-uz36-lc-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz18-la-q-s-hd-uz18-la-q",
      "slug": "mitsutomo-ru-sz18-la-q-s-hd-uz18-la-q",
      "modelId": "model-mitsutomo-ru-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz18-la-q",
      "indoorUnitId": "iu-s-hd-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sg48-la-q-hf-ug48-la-q",
      "slug": "mitsutomo-ru-sg48-la-q-hf-ug48-la-q",
      "modelId": "model-mitsutomo-ru-sg48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sg48-la-q",
      "indoorUnitId": "iu-hf-ug48-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-ab-q-hj-uz18-ab-q",
      "slug": "mitsutomo-ho-sz18-ab-q-hj-uz18-ab-q",
      "modelId": "model-mitsutomo-ho-sz18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-ab-q",
      "indoorUnitId": "iu-hj-uz18-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz09-la-q-s-hd-uz09-la-q",
      "slug": "mitsutomo-ru-sz09-la-q-s-hd-uz09-la-q",
      "modelId": "model-mitsutomo-ru-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz09-la-q",
      "indoorUnitId": "iu-s-hd-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz24-la-q-hv-uz24-la-q",
      "slug": "mitsutomo-ru-sz24-la-q-hv-uz24-la-q",
      "modelId": "model-mitsutomo-ru-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz24-la-q",
      "indoorUnitId": "iu-hv-uz24-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.7,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz12-la-q-s-hd-uz12-la-q",
      "slug": "mitsutomo-ru-sz12-la-q-s-hd-uz12-la-q",
      "modelId": "model-mitsutomo-ru-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz12-la-q",
      "indoorUnitId": "iu-s-hd-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz12-ab-q-hd-uz12-ab-q",
      "slug": "mitsutomo-ho-sz12-ab-q-hd-uz12-ab-q",
      "modelId": "model-mitsutomo-ho-sz12-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz12-ab-q",
      "indoorUnitId": "iu-hd-uz12-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz18-ab-q-rw-sz18-ab-q",
      "slug": "mitsutomo-ro-sz18-ab-q-rw-sz18-ab-q",
      "modelId": "model-mitsutomo-ro-sz18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ro-sz18-ab-q",
      "indoorUnitId": "iu-rw-sz18-ab-q",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz09-la-q-hd-uz09-la-q",
      "slug": "mitsutomo-ru-sz09-la-q-hd-uz09-la-q",
      "modelId": "model-mitsutomo-ru-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz09-la-q",
      "indoorUnitId": "iu-hd-uz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz36-bb-q-hc-uz36-bb-q",
      "slug": "mitsutomo-ho-sz36-bb-q-hc-uz36-bb-q",
      "modelId": "model-mitsutomo-ho-sz36-bb-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz36-bb-q",
      "indoorUnitId": "iu-hc-uz36-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-ab-q-hd-uz24-ab-q",
      "slug": "mitsutomo-ho-sz24-ab-q-hd-uz24-ab-q",
      "modelId": "model-mitsutomo-ho-sz24-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-ab-q",
      "indoorUnitId": "iu-hd-uz24-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-s-ro-sz09-la-q-s-rw-sz09-la-q",
      "slug": "mitsutomo-s-ro-sz09-la-q-s-rw-sz09-la-q",
      "modelId": "model-mitsutomo-s-ro-sz09-la-q",
      "outdoorUnitId": "ou-mitsutomo-s-ro-sz09-la-q",
      "indoorUnitId": "iu-s-rw-sz09-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz24-la-q-hd-uz24la-q",
      "slug": "mitsutomo-ru-sz24-la-q-hd-uz24la-q",
      "modelId": "model-mitsutomo-ru-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz24-la-q",
      "indoorUnitId": "iu-hd-uz24la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz12-la-q-hd-uz12-la-q",
      "slug": "mitsutomo-ru-sz12-la-q-hd-uz12-la-q",
      "modelId": "model-mitsutomo-ru-sz12-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz12-la-q",
      "indoorUnitId": "iu-hd-uz12-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sg48-la-q-hc-ug48-la-q",
      "slug": "mitsutomo-ru-sg48-la-q-hc-ug48-la-q",
      "modelId": "model-mitsutomo-ru-sg48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sg48-la-q",
      "indoorUnitId": "iu-hc-ug48-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho18-nb-la-q-uhm18-bb-la-q",
      "slug": "mitsutomo-uho18-nb-la-q-uhm18-bb-la-q",
      "modelId": "model-mitsutomo-uho18-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho18-nb-la-q",
      "indoorUnitId": "iu-uhm18-bb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-la-q-hd-uz24la-q",
      "slug": "mitsutomo-ho-sz24-la-q-hd-uz24la-q",
      "modelId": "model-mitsutomo-ho-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-la-q",
      "indoorUnitId": "iu-hd-uz24la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho18-nb-la-q-uhmx3-18-ab-la-q",
      "slug": "mitsutomo-uho18-nb-la-q-uhmx3-18-ab-la-q",
      "modelId": "model-mitsutomo-uho18-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho18-nb-la-q",
      "indoorUnitId": "iu-uhmx3-18-ab-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-rho18-nb-la-q-uhm18-bb-la-q",
      "slug": "mitsutomo-rho18-nb-la-q-uhm18-bb-la-q",
      "modelId": "model-mitsutomo-rho18-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-rho18-nb-la-q",
      "indoorUnitId": "iu-uhm18-bb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-la-q-hv-uz24-la-q",
      "slug": "mitsutomo-ho-sz24-la-q-hv-uz24-la-q",
      "modelId": "model-mitsutomo-ho-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-la-q",
      "indoorUnitId": "iu-hv-uz24-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho24-nb-la-q-uhmx3-24-ab-la-q",
      "slug": "mitsutomo-uho24-nb-la-q-uhmx3-24-ab-la-q",
      "modelId": "model-mitsutomo-uho24-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho24-nb-la-q",
      "indoorUnitId": "iu-uhmx3-24-ab-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz24-la-q-rw-sz24-la-q",
      "slug": "mitsutomo-ro-sz24-la-q-rw-sz24-la-q",
      "modelId": "model-mitsutomo-ro-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-ro-sz24-la-q",
      "indoorUnitId": "iu-rw-sz24-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sz18-la-q-hv-uz18-la-q",
      "slug": "mitsutomo-ru-sz18-la-q-hv-uz18-la-q",
      "modelId": "model-mitsutomo-ru-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sz18-la-q",
      "indoorUnitId": "iu-hv-uz18-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg48-la-q-hf-ug48-la-q",
      "slug": "mitsutomo-ho-sg48-la-q-hf-ug48-la-q",
      "modelId": "model-mitsutomo-ho-sg48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg48-la-q",
      "indoorUnitId": "iu-hf-ug48-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-la-q-s-hd-uz18-la-q",
      "slug": "mitsutomo-ho-sz18-la-q-s-hd-uz18-la-q",
      "modelId": "model-mitsutomo-ho-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-la-q",
      "indoorUnitId": "iu-s-hd-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz24-ab-q-hv-uz24-ab-q",
      "slug": "mitsutomo-ho-sz24-ab-q-hv-uz24-ab-q",
      "modelId": "model-mitsutomo-ho-sz24-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz24-ab-q",
      "indoorUnitId": "iu-hv-uz24-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho24-nb-la-q-uhm24-bb-la-q",
      "slug": "mitsutomo-uho24-nb-la-q-uhm24-bb-la-q",
      "modelId": "model-mitsutomo-uho24-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho24-nb-la-q",
      "indoorUnitId": "iu-uhm24-bb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-rho24-nb-la-q-uhm24-bb-la-q",
      "slug": "mitsutomo-rho24-nb-la-q-uhm24-bb-la-q",
      "modelId": "model-mitsutomo-rho24-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-rho24-nb-la-q",
      "indoorUnitId": "iu-uhm24-bb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-la-q-hv-uz18-la-q",
      "slug": "mitsutomo-ho-sz18-la-q-hv-uz18-la-q",
      "modelId": "model-mitsutomo-ho-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-la-q",
      "indoorUnitId": "iu-hv-uz18-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho18-nb-q-uhm18-bb-q",
      "slug": "mitsutomo-uho18-nb-q-uhm18-bb-q",
      "modelId": "model-mitsutomo-uho18-nb-q",
      "outdoorUnitId": "ou-mitsutomo-uho18-nb-q",
      "indoorUnitId": "iu-uhm18-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho36-nb-la-q-uhmx3-36-bb-la-q",
      "slug": "mitsutomo-uho36-nb-la-q-uhmx3-36-bb-la-q",
      "modelId": "model-mitsutomo-uho36-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho36-nb-la-q",
      "indoorUnitId": "iu-uhmx3-36-bb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-la-q-hd-uz18-la-q",
      "slug": "mitsutomo-ho-sz18-la-q-hd-uz18-la-q",
      "modelId": "model-mitsutomo-ho-sz18-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-la-q",
      "indoorUnitId": "iu-hd-uz18-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg60-la-q-hf-ug60-la-q",
      "slug": "mitsutomo-ho-sg60-la-q-hf-ug60-la-q",
      "modelId": "model-mitsutomo-ho-sg60-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg60-la-q",
      "indoorUnitId": "iu-hf-ug60-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg48-la-q-hc-ug48-la-q",
      "slug": "mitsutomo-ho-sg48-la-q-hc-ug48-la-q",
      "modelId": "model-mitsutomo-ho-sg48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg48-la-q",
      "indoorUnitId": "iu-hc-ug48-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-ab-q-hd-uz18-ab-q",
      "slug": "mitsutomo-ho-sz18-ab-q-hd-uz18-ab-q",
      "modelId": "model-mitsutomo-ho-sz18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-ab-q",
      "indoorUnitId": "iu-hd-uz18-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho36-nb-ld-q-uhmx3-36-bb-la-q",
      "slug": "mitsutomo-uho36-nb-ld-q-uhmx3-36-bb-la-q",
      "modelId": "model-mitsutomo-uho36-nb-ld-q",
      "outdoorUnitId": "ou-mitsutomo-uho36-nb-ld-q",
      "indoorUnitId": "iu-uhmx3-36-bb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg36-la-q-hd-ug36la-q",
      "slug": "mitsutomo-ho-sg36-la-q-hd-ug36la-q",
      "modelId": "model-mitsutomo-ho-sg36-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg36-la-q",
      "indoorUnitId": "iu-hd-ug36la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sg48-la-q-hv-ug48-la-q",
      "slug": "mitsutomo-ru-sg48-la-q-hv-ug48-la-q",
      "modelId": "model-mitsutomo-ru-sg48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sg48-la-q",
      "indoorUnitId": "iu-hv-ug48-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz36-bb-q-hf-uz36-bb-q",
      "slug": "mitsutomo-ho-sz36-bb-q-hf-uz36-bb-q",
      "modelId": "model-mitsutomo-ho-sz36-bb-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz36-bb-q",
      "indoorUnitId": "iu-hf-uz36-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz18-ab-q-hv-uz18-ab-q",
      "slug": "mitsutomo-ho-sz18-ab-q-hv-uz18-ab-q",
      "modelId": "model-mitsutomo-ho-sz18-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz18-ab-q",
      "indoorUnitId": "iu-hv-uz18-ab-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ro-sz30-ab-q-hv-uz30-ab-q",
      "slug": "mitsutomo-ro-sz30-ab-q-hv-uz30-ab-q",
      "modelId": "model-mitsutomo-ro-sz30-ab-q",
      "outdoorUnitId": "ou-mitsutomo-ro-sz30-ab-q",
      "indoorUnitId": "iu-hv-uz30-ab-q",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho48-nb-la-q-uhmx3-48-cb-la-q",
      "slug": "mitsutomo-uho48-nb-la-q-uhmx3-48-cb-la-q",
      "modelId": "model-mitsutomo-uho48-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho48-nb-la-q",
      "indoorUnitId": "iu-uhmx3-48-cb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho60-nb-la-q-uhmx3-60-cb-la-q",
      "slug": "mitsutomo-uho60-nb-la-q-uhmx3-60-cb-la-q",
      "modelId": "model-mitsutomo-uho60-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho60-nb-la-q",
      "indoorUnitId": "iu-uhmx3-60-cb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho24-nb-q-uhm24-bb-q",
      "slug": "mitsutomo-uho24-nb-q-uhm24-bb-q",
      "modelId": "model-mitsutomo-uho24-nb-q",
      "outdoorUnitId": "ou-mitsutomo-uho24-nb-q",
      "indoorUnitId": "iu-uhm24-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho36-nb-la-q-uhm36-cb-la-q",
      "slug": "mitsutomo-uho36-nb-la-q-uhm36-cb-la-q",
      "modelId": "model-mitsutomo-uho36-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho36-nb-la-q",
      "indoorUnitId": "iu-uhm36-cb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-hw-sz60-bb-q-hf-uz60-bb-q",
      "slug": "mitsutomo-hw-sz60-bb-q-hf-uz60-bb-q",
      "modelId": "model-mitsutomo-hw-sz60-bb-q",
      "outdoorUnitId": "ou-mitsutomo-hw-sz60-bb-q",
      "indoorUnitId": "iu-hf-uz60-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho30-nb-la-q-uhmx3-30-bb-la-q",
      "slug": "mitsutomo-uho30-nb-la-q-uhmx3-30-bb-la-q",
      "modelId": "model-mitsutomo-uho30-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho30-nb-la-q",
      "indoorUnitId": "iu-uhmx3-30-bb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg36-la-q-hv-ug36-la-q",
      "slug": "mitsutomo-ho-sg36-la-q-hv-ug36-la-q",
      "modelId": "model-mitsutomo-ho-sg36-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg36-la-q",
      "indoorUnitId": "iu-hv-ug36-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-sg48-la-q-hd-ug48la-q",
      "slug": "mitsutomo-ru-sg48-la-q-hd-ug48la-q",
      "modelId": "model-mitsutomo-ru-sg48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-sg48-la-q",
      "indoorUnitId": "iu-hd-ug48la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg48-la-q-hv-ug48-la-q",
      "slug": "mitsutomo-ho-sg48-la-q-hv-ug48-la-q",
      "modelId": "model-mitsutomo-ho-sg48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg48-la-q",
      "indoorUnitId": "iu-hv-ug48-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz48-bb-q-hf-uz48-bb-q",
      "slug": "mitsutomo-ho-sz48-bb-q-hf-uz48-bb-q",
      "modelId": "model-mitsutomo-ho-sz48-bb-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz48-bb-q",
      "indoorUnitId": "iu-hf-uz48-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-s-ro-sz24-la-q-s-rw-sz24-la-q",
      "slug": "mitsutomo-s-ro-sz24-la-q-s-rw-sz24-la-q",
      "modelId": "model-mitsutomo-s-ro-sz24-la-q",
      "outdoorUnitId": "ou-mitsutomo-s-ro-sz24-la-q",
      "indoorUnitId": "iu-s-rw-sz24-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ru-uz30-la-q-hv-uz30-la-q",
      "slug": "mitsutomo-ru-uz30-la-q-hv-uz30-la-q",
      "modelId": "model-mitsutomo-ru-uz30-la-q",
      "outdoorUnitId": "ou-mitsutomo-ru-uz30-la-q",
      "indoorUnitId": "iu-hv-uz30-la-q",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho30-nb-la-q-uhm30-cb-la-q",
      "slug": "mitsutomo-uho30-nb-la-q-uhm30-cb-la-q",
      "modelId": "model-mitsutomo-uho30-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho30-nb-la-q",
      "indoorUnitId": "iu-uhm30-cb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz48-bb-q-hc-uz48-bb-q",
      "slug": "mitsutomo-ho-sz48-bb-q-hc-uz48-bb-q",
      "modelId": "model-mitsutomo-ho-sz48-bb-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz48-bb-q",
      "indoorUnitId": "iu-hc-uz48-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg48-la-q-hd-ug48la-q",
      "slug": "mitsutomo-ho-sg48-la-q-hd-ug48la-q",
      "modelId": "model-mitsutomo-ho-sg48-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg48-la-q",
      "indoorUnitId": "iu-hd-ug48la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho42-nb-ld-q-uhm42-db-ldq",
      "slug": "mitsutomo-uho42-nb-ld-q-uhm42-db-ldq",
      "modelId": "model-mitsutomo-uho42-nb-ld-q",
      "outdoorUnitId": "ou-mitsutomo-uho42-nb-ld-q",
      "indoorUnitId": "iu-uhm42-db-ldq",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho33-nb-ld-q-uhm33-cb-la-q",
      "slug": "mitsutomo-uho33-nb-ld-q-uhm33-cb-la-q",
      "modelId": "model-mitsutomo-uho33-nb-ld-q",
      "outdoorUnitId": "ou-mitsutomo-uho33-nb-ld-q",
      "indoorUnitId": "iu-uhm33-cb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho48-nb-la-q-uhm48-db-la-q",
      "slug": "mitsutomo-uho48-nb-la-q-uhm48-db-la-q",
      "modelId": "model-mitsutomo-uho48-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho48-nb-la-q",
      "indoorUnitId": "iu-uhm48-db-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz33-la-q-hv-uz36-la-q",
      "slug": "mitsutomo-ho-sz33-la-q-hv-uz36-la-q",
      "modelId": "model-mitsutomo-ho-sz33-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz33-la-q",
      "indoorUnitId": "iu-hv-uz36-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sz36-bb-q-hd-uz36-bb-q",
      "slug": "mitsutomo-ho-sz36-bb-q-hd-uz36-bb-q",
      "modelId": "model-mitsutomo-ho-sz36-bb-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sz36-bb-q",
      "indoorUnitId": "iu-hd-uz36-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho48-nb-ld-q-uhm48-db-ld-q",
      "slug": "mitsutomo-uho48-nb-ld-q-uhm48-db-ld-q",
      "modelId": "model-mitsutomo-uho48-nb-ld-q",
      "outdoorUnitId": "ou-mitsutomo-uho48-nb-ld-q",
      "indoorUnitId": "iu-uhm48-db-ld-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho30-nb-q-uhm30-cb-q",
      "slug": "mitsutomo-uho30-nb-q-uhm30-cb-q",
      "modelId": "model-mitsutomo-uho30-nb-q",
      "outdoorUnitId": "ou-mitsutomo-uho30-nb-q",
      "indoorUnitId": "iu-uhm30-cb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-rho36-nb-la-q-uhm36-cb-la-q",
      "slug": "mitsutomo-rho36-nb-la-q-uhm36-cb-la-q",
      "modelId": "model-mitsutomo-rho36-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-rho36-nb-la-q",
      "indoorUnitId": "iu-uhm36-cb-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho18-nb-la-q-cmp-1824-a-la",
      "slug": "mitsutomo-uho18-nb-la-q-cmp-1824-a-la",
      "modelId": "model-mitsutomo-uho18-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho18-nb-la-q",
      "indoorUnitId": "iu-cmp-1824-a-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho18-nb-la-q-cmp-1824-b-la",
      "slug": "mitsutomo-uho18-nb-la-q-cmp-1824-b-la",
      "modelId": "model-mitsutomo-uho18-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho18-nb-la-q",
      "indoorUnitId": "iu-cmp-1824-b-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho24-nb-la-q-cmp-1824-a-la",
      "slug": "mitsutomo-uho24-nb-la-q-cmp-1824-a-la",
      "modelId": "model-mitsutomo-uho24-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho24-nb-la-q",
      "indoorUnitId": "iu-cmp-1824-a-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-rho24-nb-la-q-cmp-1824-b-la",
      "slug": "mitsutomo-rho24-nb-la-q-cmp-1824-b-la",
      "modelId": "model-mitsutomo-rho24-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-rho24-nb-la-q",
      "indoorUnitId": "iu-cmp-1824-b-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-rho24-nb-la-q-cmp-1824-a-la",
      "slug": "mitsutomo-rho24-nb-la-q-cmp-1824-a-la",
      "modelId": "model-mitsutomo-rho24-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-rho24-nb-la-q",
      "indoorUnitId": "iu-cmp-1824-a-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-rho48-nb-la-q-uhm48-db-la-q",
      "slug": "mitsutomo-rho48-nb-la-q-uhm48-db-la-q",
      "modelId": "model-mitsutomo-rho48-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-rho48-nb-la-q",
      "indoorUnitId": "iu-uhm48-db-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho30-nb-la-q-cmp-3036-c-la",
      "slug": "mitsutomo-uho30-nb-la-q-cmp-3036-c-la",
      "modelId": "model-mitsutomo-uho30-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho30-nb-la-q",
      "indoorUnitId": "iu-cmp-3036-c-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho24-nb-la-q-cmp-1824-b-la",
      "slug": "mitsutomo-uho24-nb-la-q-cmp-1824-b-la",
      "modelId": "model-mitsutomo-uho24-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho24-nb-la-q",
      "indoorUnitId": "iu-cmp-1824-b-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho60-nb-la-q-uhm60-db-la-q",
      "slug": "mitsutomo-uho60-nb-la-q-uhm60-db-la-q",
      "modelId": "model-mitsutomo-uho60-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho60-nb-la-q",
      "indoorUnitId": "iu-uhm60-db-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho60-nb-la-q-cmp-4860-c-la",
      "slug": "mitsutomo-uho60-nb-la-q-cmp-4860-c-la",
      "modelId": "model-mitsutomo-uho60-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho60-nb-la-q",
      "indoorUnitId": "iu-cmp-4860-c-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho30-nb-la-q-cmp-3036-b-la",
      "slug": "mitsutomo-uho30-nb-la-q-cmp-3036-b-la",
      "modelId": "model-mitsutomo-uho30-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho30-nb-la-q",
      "indoorUnitId": "iu-cmp-3036-b-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho36-nb-q-uhm36-cb-q",
      "slug": "mitsutomo-uho36-nb-q-uhm36-cb-q",
      "modelId": "model-mitsutomo-uho36-nb-q",
      "outdoorUnitId": "ou-mitsutomo-uho36-nb-q",
      "indoorUnitId": "iu-uhm36-cb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho36-nb-la-q-cmp-3036-b-la",
      "slug": "mitsutomo-uho36-nb-la-q-cmp-3036-b-la",
      "modelId": "model-mitsutomo-uho36-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho36-nb-la-q",
      "indoorUnitId": "iu-cmp-3036-b-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho36-nb-la-q-cmp-3036-c-la",
      "slug": "mitsutomo-uho36-nb-la-q-cmp-3036-c-la",
      "modelId": "model-mitsutomo-uho36-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho36-nb-la-q",
      "indoorUnitId": "iu-cmp-3036-c-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg60-la-q-hd-ug60al-q",
      "slug": "mitsutomo-ho-sg60-la-q-hd-ug60al-q",
      "modelId": "model-mitsutomo-ho-sg60-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg60-la-q",
      "indoorUnitId": "iu-hd-ug60al-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-hw-sz60-bb-q-hd-uz60-bb-q",
      "slug": "mitsutomo-hw-sz60-bb-q-hd-uz60-bb-q",
      "modelId": "model-mitsutomo-hw-sz60-bb-q",
      "outdoorUnitId": "ou-mitsutomo-hw-sz60-bb-q",
      "indoorUnitId": "iu-hd-uz60-bb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho48-nb-q-uhm48-cb-q",
      "slug": "mitsutomo-uho48-nb-q-uhm48-cb-q",
      "modelId": "model-mitsutomo-uho48-nb-q",
      "outdoorUnitId": "ou-mitsutomo-uho48-nb-q",
      "indoorUnitId": "iu-uhm48-cb-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho60-nb-q-uhm60-db-q",
      "slug": "mitsutomo-uho60-nb-q-uhm60-db-q",
      "modelId": "model-mitsutomo-uho60-nb-q",
      "outdoorUnitId": "ou-mitsutomo-uho60-nb-q",
      "indoorUnitId": "iu-uhm60-db-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho30-nb-la-q-cmp-3036-a-la",
      "slug": "mitsutomo-uho30-nb-la-q-cmp-3036-a-la",
      "modelId": "model-mitsutomo-uho30-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho30-nb-la-q",
      "indoorUnitId": "iu-cmp-3036-a-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho48-nb-la-q-cmp-4860-c-la",
      "slug": "mitsutomo-uho48-nb-la-q-cmp-4860-c-la",
      "modelId": "model-mitsutomo-uho48-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho48-nb-la-q",
      "indoorUnitId": "iu-cmp-4860-c-la",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-rho60-nb-la-q-uhm60-db-la-q",
      "slug": "mitsutomo-rho60-nb-la-q-uhm60-db-la-q",
      "modelId": "model-mitsutomo-rho60-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-rho60-nb-la-q",
      "indoorUnitId": "iu-uhm60-db-la-q",
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
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-ho-sg60-la-q-hv-ug60-la-q",
      "slug": "mitsutomo-ho-sg60-la-q-hv-ug60-la-q",
      "modelId": "model-mitsutomo-ho-sg60-la-q",
      "outdoorUnitId": "ou-mitsutomo-ho-sg60-la-q",
      "indoorUnitId": "iu-hv-ug60-la-q",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-mitsutomo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mitsutomo-uho60-nb-la-q-cmp-4860-d-la",
      "slug": "mitsutomo-uho60-nb-la-q-cmp-4860-d-la",
      "modelId": "model-mitsutomo-uho60-nb-la-q",
      "outdoorUnitId": "ou-mitsutomo-uho60-nb-la-q",
      "indoorUnitId": "iu-cmp-4860-d-la",
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
          "sourceId": "src-mitsutomo-epa",
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
