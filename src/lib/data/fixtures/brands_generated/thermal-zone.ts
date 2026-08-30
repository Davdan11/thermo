import type { BrandDataset } from "../../types";

export const brand_thermal_zoneDataset: BrandDataset = {
  "brand": {
    "id": "brand-thermal-zone",
    "slug": "thermal-zone",
    "name": "Thermal Zone",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Thermal Zone",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-thermal-zone-epa",
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
      "id": "series-thermal-zone-tzid-series",
      "slug": "thermal-zone-tzid-series",
      "name": "TZID Series",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série TZID Series de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermal-zone-tz-series-tzid-series",
      "slug": "thermal-zone-tz-series-tzid-series",
      "name": "TZ Series | TZID Series",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TZ Series | TZID Series de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermal-zone-tzp-series",
      "slug": "thermal-zone-tzp-series",
      "name": "TZP Series",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TZP Series de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermal-zone-tz-series",
      "slug": "thermal-zone-tz-series",
      "name": "TZ Series",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série TZ Series de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermal-zone-series",
      "slug": "thermal-zone-series",
      "name": "Series",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Series de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermal-zone-performance",
      "slug": "thermal-zone-performance",
      "name": "Performance",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Performance de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermal-zone-value",
      "slug": "thermal-zone-value",
      "name": "Value",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Value de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermal-zone-classic-plusachiever-plus",
      "slug": "thermal-zone-classic-plusachiever-plus",
      "name": "CLASSIC PLUS/ACHIEVER PLUS",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CLASSIC PLUS/ACHIEVER PLUS de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermal-zone-rhpxyc",
      "slug": "thermal-zone-rhpxyc",
      "name": "RHPXYC",
      "brandId": "brand-thermal-zone",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHPXYC de Thermal Zone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-thermal-zone-tzid18h520zcs",
      "slug": "thermal-zone-tzid18h520zcs",
      "name": "Thermal Zone TZID18H520ZCS",
      "seriesId": "series-thermal-zone-tzid-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZID18H520ZCS",
      "normalizedModelNumber": "tzid18h520zcs",
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
      "id": "model-thermal-zone-tzid24h520zcs",
      "slug": "thermal-zone-tzid24h520zcs",
      "name": "Thermal Zone TZID24H520ZCS",
      "seriesId": "series-thermal-zone-tz-series-tzid-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZID24H520ZCS",
      "normalizedModelNumber": "tzid24h520zcs",
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
      "id": "model-thermal-zone-tzplv182pa",
      "slug": "thermal-zone-tzplv182pa",
      "name": "Thermal Zone TZPLV182PA",
      "seriesId": "series-thermal-zone-tzp-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLV182PA",
      "normalizedModelNumber": "tzplv182pa",
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
      "id": "model-thermal-zone-tzplv242pa",
      "slug": "thermal-zone-tzplv242pa",
      "name": "Thermal Zone TZPLV242PA",
      "seriesId": "series-thermal-zone-tzp-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLV242PA",
      "normalizedModelNumber": "tzplv242pa",
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
      "id": "model-thermal-zone-tzid30h520zcs",
      "slug": "thermal-zone-tzid30h520zcs",
      "name": "Thermal Zone TZID30H520ZCS",
      "seriesId": "series-thermal-zone-tz-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZID30H520ZCS",
      "normalizedModelNumber": "tzid30h520zcs",
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
      "id": "model-thermal-zone-tzplv242aa",
      "slug": "thermal-zone-tzplv242aa",
      "name": "Thermal Zone TZPLV242AA",
      "seriesId": "series-thermal-zone-tzp-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLV242AA",
      "normalizedModelNumber": "tzplv242aa",
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
      "id": "model-thermal-zone-tzid48h520zcs",
      "slug": "thermal-zone-tzid48h520zcs",
      "name": "Thermal Zone TZID48H520ZCS",
      "seriesId": "series-thermal-zone-tz-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZID48H520ZCS",
      "normalizedModelNumber": "tzid48h520zcs",
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
      "id": "model-thermal-zone-tzid60h520zcs",
      "slug": "thermal-zone-tzid60h520zcs",
      "name": "Thermal Zone TZID60H520ZCS",
      "seriesId": "series-thermal-zone-tz-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZID60H520ZCS",
      "normalizedModelNumber": "tzid60h520zcs",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 51000,
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
      "id": "model-thermal-zone-tzplv302pa",
      "slug": "thermal-zone-tzplv302pa",
      "name": "Thermal Zone TZPLV302PA",
      "seriesId": "series-thermal-zone-tzp-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLV302PA",
      "normalizedModelNumber": "tzplv302pa",
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
      "id": "model-thermal-zone-tzid36h520zcs",
      "slug": "thermal-zone-tzid36h520zcs",
      "name": "Thermal Zone TZID36H520ZCS",
      "seriesId": "series-thermal-zone-tzid-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZID36H520ZCS",
      "normalizedModelNumber": "tzid36h520zcs",
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
      "id": "model-thermal-zone-tzp15az60aj2n",
      "slug": "thermal-zone-tzp15az60aj2n",
      "name": "Thermal Zone TZP15AZ60AJ2N",
      "seriesId": "series-thermal-zone-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZP15AZ60AJ2N",
      "normalizedModelNumber": "tzp15az60aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57000,
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
      "id": "model-thermal-zone-tzplad1518ajn",
      "slug": "thermal-zone-tzplad1518ajn",
      "name": "Thermal Zone TZPLAD1518AJN",
      "seriesId": "series-thermal-zone-performance",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLAD1518AJN",
      "normalizedModelNumber": "tzplad1518ajn",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17100,
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
      "id": "model-thermal-zone-tzplv362pa",
      "slug": "thermal-zone-tzplv362pa",
      "name": "Thermal Zone TZPLV362PA",
      "seriesId": "series-thermal-zone-tzp-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLV362PA",
      "normalizedModelNumber": "tzplv362pa",
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
      "id": "model-thermal-zone-tzplad1560ajn",
      "slug": "thermal-zone-tzplad1560ajn",
      "name": "Thermal Zone TZPLAD1560AJN",
      "seriesId": "series-thermal-zone-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLAD1560AJN",
      "normalizedModelNumber": "tzplad1560ajn",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57000,
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
      "id": "model-thermal-zone-tzplad1530ajn",
      "slug": "thermal-zone-tzplad1530ajn",
      "name": "Thermal Zone TZPLAD1530AJN",
      "seriesId": "series-thermal-zone-performance",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLAD1530AJN",
      "normalizedModelNumber": "tzplad1530ajn",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
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
      "id": "model-thermal-zone-tzplad1524ajn",
      "slug": "thermal-zone-tzplad1524ajn",
      "name": "Thermal Zone TZPLAD1524AJN",
      "seriesId": "series-thermal-zone-performance",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLAD1524AJN",
      "normalizedModelNumber": "tzplad1524ajn",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-thermal-zone-tzplv482pa",
      "slug": "thermal-zone-tzplv482pa",
      "name": "Thermal Zone TZPLV482PA",
      "seriesId": "series-thermal-zone-tzp-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLV482PA",
      "normalizedModelNumber": "tzplv482pa",
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
      "id": "model-thermal-zone-tzplv602pa",
      "slug": "thermal-zone-tzplv602pa",
      "name": "Thermal Zone TZPLV602PA",
      "seriesId": "series-thermal-zone-tzp-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLV602PA",
      "normalizedModelNumber": "tzplv602pa",
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
      "id": "model-thermal-zone-tzp15az36aj2n",
      "slug": "thermal-zone-tzp15az36aj2n",
      "name": "Thermal Zone TZP15AZ36AJ2N",
      "seriesId": "series-thermal-zone-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZP15AZ36AJ2N",
      "normalizedModelNumber": "tzp15az36aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "model-thermal-zone-tzp15az30aj2n",
      "slug": "thermal-zone-tzp15az30aj2n",
      "name": "Thermal Zone TZP15AZ30AJ2N",
      "seriesId": "series-thermal-zone-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZP15AZ30AJ2N",
      "normalizedModelNumber": "tzp15az30aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
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
      "id": "model-thermal-zone-tzp15az24aj2n",
      "slug": "thermal-zone-tzp15az24aj2n",
      "name": "Thermal Zone TZP15AZ24AJ2N",
      "seriesId": "series-thermal-zone-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZP15AZ24AJ2N",
      "normalizedModelNumber": "tzp15az24aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-thermal-zone-tzp15az18aj2n",
      "slug": "thermal-zone-tzp15az18aj2n",
      "name": "Thermal Zone TZP15AZ18AJ2N",
      "seriesId": "series-thermal-zone-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZP15AZ18AJ2N",
      "normalizedModelNumber": "tzp15az18aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17100,
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
      "id": "model-thermal-zone-tzp15az42aj2n",
      "slug": "thermal-zone-tzp15az42aj2n",
      "name": "Thermal Zone TZP15AZ42AJ2N",
      "seriesId": "series-thermal-zone-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZP15AZ42AJ2N",
      "normalizedModelNumber": "tzp15az42aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 40000,
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
      "id": "model-thermal-zone-tzplad1548ajn",
      "slug": "thermal-zone-tzplad1548ajn",
      "name": "Thermal Zone TZPLAD1548AJN",
      "seriesId": "series-thermal-zone-classic-plusachiever-plus",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLAD1548AJN",
      "normalizedModelNumber": "tzplad1548ajn",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45500,
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
      "id": "model-thermal-zone-tzplad1536ajn",
      "slug": "thermal-zone-tzplad1536ajn",
      "name": "Thermal Zone TZPLAD1536AJN",
      "seriesId": "series-thermal-zone-classic-plusachiever-plus",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZPLAD1536AJN",
      "normalizedModelNumber": "tzplad1536ajn",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "model-thermal-zone-tzp15az48aj2n",
      "slug": "thermal-zone-tzp15az48aj2n",
      "name": "Thermal Zone TZP15AZ48AJ2N",
      "seriesId": "series-thermal-zone-series",
      "brandId": "brand-thermal-zone",
      "modelNumber": "TZP15AZ48AJ2N",
      "normalizedModelNumber": "tzp15az48aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45500,
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
      "id": "model-thermal-zone-rhpxyc024ajt",
      "slug": "thermal-zone-rhpxyc024ajt",
      "name": "Thermal Zone RHPXYC024AJT",
      "seriesId": "series-thermal-zone-rhpxyc",
      "brandId": "brand-thermal-zone",
      "modelNumber": "RHPXYC024AJT",
      "normalizedModelNumber": "rhpxyc024ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-thermal-zone-rhpxyc036ajt",
      "slug": "thermal-zone-rhpxyc036ajt",
      "name": "Thermal Zone RHPXYC036AJT",
      "seriesId": "series-thermal-zone-rhpxyc",
      "brandId": "brand-thermal-zone",
      "modelNumber": "RHPXYC036AJT",
      "normalizedModelNumber": "rhpxyc036ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "model-thermal-zone-rhpxyc048ajt",
      "slug": "thermal-zone-rhpxyc048ajt",
      "name": "Thermal Zone RHPXYC048AJT",
      "seriesId": "series-thermal-zone-rhpxyc",
      "brandId": "brand-thermal-zone",
      "modelNumber": "RHPXYC048AJT",
      "normalizedModelNumber": "rhpxyc048ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45500,
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
      "id": "model-thermal-zone-rhpxyc060ajt",
      "slug": "thermal-zone-rhpxyc060ajt",
      "name": "Thermal Zone RHPXYC060AJT",
      "seriesId": "series-thermal-zone-rhpxyc",
      "brandId": "brand-thermal-zone",
      "modelNumber": "RHPXYC060AJT",
      "normalizedModelNumber": "rhpxyc060ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57000,
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
      "id": "ou-thermal-zone-tzid18h520zcs",
      "modelNumber": "TZID18H520ZCS",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-tzid24h520zcs",
      "modelNumber": "TZID24H520ZCS",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-tzplv182pa",
      "modelNumber": "TZPLV182PA",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplv242pa",
      "modelNumber": "TZPLV242PA",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzid30h520zcs",
      "modelNumber": "TZID30H520ZCS",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-tzplv242aa",
      "modelNumber": "TZPLV242AA",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzid48h520zcs",
      "modelNumber": "TZID48H520ZCS",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-tzid60h520zcs",
      "modelNumber": "TZID60H520ZCS",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-tzplv302pa",
      "modelNumber": "TZPLV302PA",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzid36h520zcs",
      "modelNumber": "TZID36H520ZCS",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-tzp15az60aj2n",
      "modelNumber": "TZP15AZ60AJ2N",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplad1518ajn",
      "modelNumber": "TZPLAD1518AJN",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplv362pa",
      "modelNumber": "TZPLV362PA",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplad1560ajn",
      "modelNumber": "TZPLAD1560AJN",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplad1530ajn",
      "modelNumber": "TZPLAD1530AJN",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplad1524ajn",
      "modelNumber": "TZPLAD1524AJN",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplv482pa",
      "modelNumber": "TZPLV482PA",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplv602pa",
      "modelNumber": "TZPLV602PA",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzp15az36aj2n",
      "modelNumber": "TZP15AZ36AJ2N",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzp15az30aj2n",
      "modelNumber": "TZP15AZ30AJ2N",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzp15az24aj2n",
      "modelNumber": "TZP15AZ24AJ2N",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzp15az18aj2n",
      "modelNumber": "TZP15AZ18AJ2N",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzp15az42aj2n",
      "modelNumber": "TZP15AZ42AJ2N",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplad1548ajn",
      "modelNumber": "TZPLAD1548AJN",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzplad1536ajn",
      "modelNumber": "TZPLAD1536AJN",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-tzp15az48aj2n",
      "modelNumber": "TZP15AZ48AJ2N",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-thermal-zone-rhpxyc024ajt",
      "modelNumber": "RHPXYC024AJT",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-rhpxyc036ajt",
      "modelNumber": "RHPXYC036AJT",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-rhpxyc048ajt",
      "modelNumber": "RHPXYC048AJT",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermal-zone-rhpxyc060ajt",
      "modelNumber": "RHPXYC060AJT",
      "brandId": "brand-thermal-zone",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-tzid18h520zam",
      "modelNumber": "TZID18H520ZAM",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid24h520zacb",
      "modelNumber": "TZID24H520ZACB",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid24h520zam",
      "modelNumber": "TZID24H520ZAM",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhvle1817ja",
      "modelNumber": "TZHVLE1817JA",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhvle2417ja",
      "modelNumber": "TZHVLE2417JA",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid36h520zacc",
      "modelNumber": "TZID36H520ZACC",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid24h520zacc",
      "modelNumber": "TZID24H520ZACC",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac-24hwdn1-mn0",
      "modelNumber": "MAC-24HWDN1-MN0",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhvle3021ja",
      "modelNumber": "TZHVLE3021JA",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid36h520zam",
      "modelNumber": "TZID36H520ZAM",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvbm-24a18t3n1",
      "modelNumber": "MVBM-24A18T3N1*",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhdltst6024nan",
      "modelNumber": "TZHDLTST6024*NAN",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid48h520zam",
      "modelNumber": "TZID48H520ZAM",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhdlvst2417nan",
      "modelNumber": "TZHDLVST2417*NAN",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhvle3621ja",
      "modelNumber": "TZHVLE3621JA",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhdlvst3617nan",
      "modelNumber": "TZHDLVST3617*NAN",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhvle4821ja",
      "modelNumber": "TZHVLE4821JA",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac-36hwdn1-mn0",
      "modelNumber": "MAC-36HWDN1-MN0",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvb-36b23t4n1",
      "modelNumber": "MVB-36B23T4N1",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid36h520zacb",
      "modelNumber": "TZID36H520ZACB",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhvle6024ja",
      "modelNumber": "TZHVLE6024JA",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhdltst3617nan",
      "modelNumber": "TZHDLTST3617*NAN",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid60h520zam",
      "modelNumber": "TZID60H520ZAM",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzid60h520zacc",
      "modelNumber": "TZID60H520ZACC",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3617stanm",
      "modelNumber": "TCFZ3617STANM",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhdltst2417nan",
      "modelNumber": "TZHDLTST2417*NAN",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz2417stanm",
      "modelNumber": "TCFZ2417STANM",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhdltst4821nan",
      "modelNumber": "TZHDLTST4821*NAN",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhdlvst6024nan",
      "modelNumber": "TZHDLVST6024*NAN",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-tzhdlvst4821nan",
      "modelNumber": "TZHDLVST4821*NAN",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac-60hwdn1-mn0",
      "modelNumber": "MAC-60HWDN1-MN0",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-36471",
      "modelNumber": "IU-36471",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-36472",
      "modelNumber": "IU-36472",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-36473",
      "modelNumber": "IU-36473",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-36474",
      "modelNumber": "IU-36474",
      "brandId": "brand-thermal-zone",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-thermal-zone-tzid18h520zcs-tzid18h520zam",
      "slug": "thermal-zone-tzid18h520zcs-tzid18h520zam",
      "modelId": "model-thermal-zone-tzid18h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid18h520zcs",
      "indoorUnitId": "iu-tzid18h520zam",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid24h520zcs-tzid24h520zacb",
      "slug": "thermal-zone-tzid24h520zcs-tzid24h520zacb",
      "modelId": "model-thermal-zone-tzid24h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid24h520zcs",
      "indoorUnitId": "iu-tzid24h520zacb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid24h520zcs-tzid24h520zam",
      "slug": "thermal-zone-tzid24h520zcs-tzid24h520zam",
      "modelId": "model-thermal-zone-tzid24h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid24h520zcs",
      "indoorUnitId": "iu-tzid24h520zam",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv182pa-tzhvle1817ja",
      "slug": "thermal-zone-tzplv182pa-tzhvle1817ja",
      "modelId": "model-thermal-zone-tzplv182pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv182pa",
      "indoorUnitId": "iu-tzhvle1817ja",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid18h520zcs-tzid24h520zacb",
      "slug": "thermal-zone-tzid18h520zcs-tzid24h520zacb",
      "modelId": "model-thermal-zone-tzid18h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid18h520zcs",
      "indoorUnitId": "iu-tzid24h520zacb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.7,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv242pa-tzhvle2417ja",
      "slug": "thermal-zone-tzplv242pa-tzhvle2417ja",
      "modelId": "model-thermal-zone-tzplv242pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv242pa",
      "indoorUnitId": "iu-tzhvle2417ja",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid30h520zcs-tzid36h520zacc",
      "slug": "thermal-zone-tzid30h520zcs-tzid36h520zacc",
      "modelId": "model-thermal-zone-tzid30h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid30h520zcs",
      "indoorUnitId": "iu-tzid36h520zacc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv242aa-tzhvle2417ja",
      "slug": "thermal-zone-tzplv242aa-tzhvle2417ja",
      "modelId": "model-thermal-zone-tzplv242aa",
      "outdoorUnitId": "ou-thermal-zone-tzplv242aa",
      "indoorUnitId": "iu-tzhvle2417ja",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid48h520zcs-tzid24h520zacc",
      "slug": "thermal-zone-tzid48h520zcs-tzid24h520zacc",
      "modelId": "model-thermal-zone-tzid48h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid48h520zcs",
      "indoorUnitId": "iu-tzid24h520zacc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv242pa-mac-24hwdn1-mn0",
      "slug": "thermal-zone-tzplv242pa-mac-24hwdn1-mn0",
      "modelId": "model-thermal-zone-tzplv242pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv242pa",
      "indoorUnitId": "iu-mac-24hwdn1-mn0",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid60h520zcs-tzid24h520zacc",
      "slug": "thermal-zone-tzid60h520zcs-tzid24h520zacc",
      "modelId": "model-thermal-zone-tzid60h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid60h520zcs",
      "indoorUnitId": "iu-tzid24h520zacc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv302pa-tzhvle3021ja",
      "slug": "thermal-zone-tzplv302pa-tzhvle3021ja",
      "modelId": "model-thermal-zone-tzplv302pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv302pa",
      "indoorUnitId": "iu-tzhvle3021ja",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid36h520zcs-tzid36h520zam",
      "slug": "thermal-zone-tzid36h520zcs-tzid36h520zam",
      "modelId": "model-thermal-zone-tzid36h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid36h520zcs",
      "indoorUnitId": "iu-tzid36h520zam",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv182pa-mac-24hwdn1-mn0",
      "slug": "thermal-zone-tzplv182pa-mac-24hwdn1-mn0",
      "modelId": "model-thermal-zone-tzplv182pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv182pa",
      "indoorUnitId": "iu-mac-24hwdn1-mn0",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv242pa-mvbm-24a18t3n1",
      "slug": "thermal-zone-tzplv242pa-mvbm-24a18t3n1",
      "modelId": "model-thermal-zone-tzplv242pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv242pa",
      "indoorUnitId": "iu-mvbm-24a18t3n1",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az60aj2n-tzhdltst6024nan",
      "slug": "thermal-zone-tzp15az60aj2n-tzhdltst6024nan",
      "modelId": "model-thermal-zone-tzp15az60aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az60aj2n",
      "indoorUnitId": "iu-tzhdltst6024nan",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid48h520zcs-tzid48h520zam",
      "slug": "thermal-zone-tzid48h520zcs-tzid48h520zam",
      "modelId": "model-thermal-zone-tzid48h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid48h520zcs",
      "indoorUnitId": "iu-tzid48h520zam",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1518ajn-tzhdlvst2417nan",
      "slug": "thermal-zone-tzplad1518ajn-tzhdlvst2417nan",
      "modelId": "model-thermal-zone-tzplad1518ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1518ajn",
      "indoorUnitId": "iu-tzhdlvst2417nan",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv362pa-tzhvle3621ja",
      "slug": "thermal-zone-tzplv362pa-tzhvle3621ja",
      "modelId": "model-thermal-zone-tzplv362pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv362pa",
      "indoorUnitId": "iu-tzhvle3621ja",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1560ajn-tzhdltst6024nan",
      "slug": "thermal-zone-tzplad1560ajn-tzhdltst6024nan",
      "modelId": "model-thermal-zone-tzplad1560ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1560ajn",
      "indoorUnitId": "iu-tzhdltst6024nan",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1530ajn-tzhdlvst3617nan",
      "slug": "thermal-zone-tzplad1530ajn-tzhdlvst3617nan",
      "modelId": "model-thermal-zone-tzplad1530ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1530ajn",
      "indoorUnitId": "iu-tzhdlvst3617nan",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1524ajn-tzhdlvst2417nan",
      "slug": "thermal-zone-tzplad1524ajn-tzhdlvst2417nan",
      "modelId": "model-thermal-zone-tzplad1524ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1524ajn",
      "indoorUnitId": "iu-tzhdlvst2417nan",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid36h520zcs-tzid36h520zacc",
      "slug": "thermal-zone-tzid36h520zcs-tzid36h520zacc",
      "modelId": "model-thermal-zone-tzid36h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid36h520zcs",
      "indoorUnitId": "iu-tzid36h520zacc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.7,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv482pa-tzhvle4821ja",
      "slug": "thermal-zone-tzplv482pa-tzhvle4821ja",
      "modelId": "model-thermal-zone-tzplv482pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv482pa",
      "indoorUnitId": "iu-tzhvle4821ja",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv302pa-mac-36hwdn1-mn0",
      "slug": "thermal-zone-tzplv302pa-mac-36hwdn1-mn0",
      "modelId": "model-thermal-zone-tzplv302pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv302pa",
      "indoorUnitId": "iu-mac-36hwdn1-mn0",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv362pa-mvb-36b23t4n1",
      "slug": "thermal-zone-tzplv362pa-mvb-36b23t4n1",
      "modelId": "model-thermal-zone-tzplv362pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv362pa",
      "indoorUnitId": "iu-mvb-36b23t4n1",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid36h520zcs-tzid36h520zacb",
      "slug": "thermal-zone-tzid36h520zcs-tzid36h520zacb",
      "modelId": "model-thermal-zone-tzid36h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid36h520zcs",
      "indoorUnitId": "iu-tzid36h520zacb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv602pa-tzhvle6024ja",
      "slug": "thermal-zone-tzplv602pa-tzhvle6024ja",
      "modelId": "model-thermal-zone-tzplv602pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv602pa",
      "indoorUnitId": "iu-tzhvle6024ja",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az36aj2n-tzhdltst3617nan",
      "slug": "thermal-zone-tzp15az36aj2n-tzhdltst3617nan",
      "modelId": "model-thermal-zone-tzp15az36aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az36aj2n",
      "indoorUnitId": "iu-tzhdltst3617nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid60h520zcs-tzid60h520zam",
      "slug": "thermal-zone-tzid60h520zcs-tzid60h520zam",
      "modelId": "model-thermal-zone-tzid60h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid60h520zcs",
      "indoorUnitId": "iu-tzid60h520zam",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzid48h520zcs-tzid60h520zacc",
      "slug": "thermal-zone-tzid48h520zcs-tzid60h520zacc",
      "modelId": "model-thermal-zone-tzid48h520zcs",
      "outdoorUnitId": "ou-thermal-zone-tzid48h520zcs",
      "indoorUnitId": "iu-tzid60h520zacc",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az30aj2n-tzhdltst3617nan",
      "slug": "thermal-zone-tzp15az30aj2n-tzhdltst3617nan",
      "modelId": "model-thermal-zone-tzp15az30aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az30aj2n",
      "indoorUnitId": "iu-tzhdltst3617nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az30aj2n-tcfz3617stanm",
      "slug": "thermal-zone-tzp15az30aj2n-tcfz3617stanm",
      "modelId": "model-thermal-zone-tzp15az30aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az30aj2n",
      "indoorUnitId": "iu-tcfz3617stanm",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az24aj2n-tzhdltst2417nan",
      "slug": "thermal-zone-tzp15az24aj2n-tzhdltst2417nan",
      "modelId": "model-thermal-zone-tzp15az24aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az24aj2n",
      "indoorUnitId": "iu-tzhdltst2417nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az24aj2n-tcfz2417stanm",
      "slug": "thermal-zone-tzp15az24aj2n-tcfz2417stanm",
      "modelId": "model-thermal-zone-tzp15az24aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az24aj2n",
      "indoorUnitId": "iu-tcfz2417stanm",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az18aj2n-tzhdltst2417nan",
      "slug": "thermal-zone-tzp15az18aj2n-tzhdltst2417nan",
      "modelId": "model-thermal-zone-tzp15az18aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az18aj2n",
      "indoorUnitId": "iu-tzhdltst2417nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az18aj2n-tcfz2417stanm",
      "slug": "thermal-zone-tzp15az18aj2n-tcfz2417stanm",
      "modelId": "model-thermal-zone-tzp15az18aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az18aj2n",
      "indoorUnitId": "iu-tcfz2417stanm",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az42aj2n-tzhdltst4821nan",
      "slug": "thermal-zone-tzp15az42aj2n-tzhdltst4821nan",
      "modelId": "model-thermal-zone-tzp15az42aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az42aj2n",
      "indoorUnitId": "iu-tzhdltst4821nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1560ajn-tzhdlvst6024nan",
      "slug": "thermal-zone-tzplad1560ajn-tzhdlvst6024nan",
      "modelId": "model-thermal-zone-tzplad1560ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1560ajn",
      "indoorUnitId": "iu-tzhdlvst6024nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1548ajn-tzhdltst4821nan",
      "slug": "thermal-zone-tzplad1548ajn-tzhdltst4821nan",
      "modelId": "model-thermal-zone-tzplad1548ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1548ajn",
      "indoorUnitId": "iu-tzhdltst4821nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1548ajn-tzhdlvst4821nan",
      "slug": "thermal-zone-tzplad1548ajn-tzhdlvst4821nan",
      "modelId": "model-thermal-zone-tzplad1548ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1548ajn",
      "indoorUnitId": "iu-tzhdlvst4821nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1536ajn-tzhdltst3617nan",
      "slug": "thermal-zone-tzplad1536ajn-tzhdltst3617nan",
      "modelId": "model-thermal-zone-tzplad1536ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1536ajn",
      "indoorUnitId": "iu-tzhdltst3617nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzp15az48aj2n-tzhdltst4821nan",
      "slug": "thermal-zone-tzp15az48aj2n-tzhdltst4821nan",
      "modelId": "model-thermal-zone-tzp15az48aj2n",
      "outdoorUnitId": "ou-thermal-zone-tzp15az48aj2n",
      "indoorUnitId": "iu-tzhdltst4821nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1524ajn-tzhdltst2417nan",
      "slug": "thermal-zone-tzplad1524ajn-tzhdltst2417nan",
      "modelId": "model-thermal-zone-tzplad1524ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1524ajn",
      "indoorUnitId": "iu-tzhdltst2417nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1530ajn-tzhdltst3617nan",
      "slug": "thermal-zone-tzplad1530ajn-tzhdltst3617nan",
      "modelId": "model-thermal-zone-tzplad1530ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1530ajn",
      "indoorUnitId": "iu-tzhdltst3617nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1518ajn-tzhdltst2417nan",
      "slug": "thermal-zone-tzplad1518ajn-tzhdltst2417nan",
      "modelId": "model-thermal-zone-tzplad1518ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1518ajn",
      "indoorUnitId": "iu-tzhdltst2417nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplad1536ajn-tzhdlvst3617nan",
      "slug": "thermal-zone-tzplad1536ajn-tzhdlvst3617nan",
      "modelId": "model-thermal-zone-tzplad1536ajn",
      "outdoorUnitId": "ou-thermal-zone-tzplad1536ajn",
      "indoorUnitId": "iu-tzhdlvst3617nan",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv362pa-mac-36hwdn1-mn0",
      "slug": "thermal-zone-tzplv362pa-mac-36hwdn1-mn0",
      "modelId": "model-thermal-zone-tzplv362pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv362pa",
      "indoorUnitId": "iu-mac-36hwdn1-mn0",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-tzplv482pa-mac-60hwdn1-mn0",
      "slug": "thermal-zone-tzplv482pa-mac-60hwdn1-mn0",
      "modelId": "model-thermal-zone-tzplv482pa",
      "outdoorUnitId": "ou-thermal-zone-tzplv482pa",
      "indoorUnitId": "iu-mac-60hwdn1-mn0",
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
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-rhpxyc024ajt-iu-36471",
      "slug": "thermal-zone-rhpxyc024ajt-iu-36471",
      "modelId": "model-thermal-zone-rhpxyc024ajt",
      "outdoorUnitId": "ou-thermal-zone-rhpxyc024ajt",
      "indoorUnitId": "iu-iu-36471",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-rhpxyc036ajt-iu-36472",
      "slug": "thermal-zone-rhpxyc036ajt-iu-36472",
      "modelId": "model-thermal-zone-rhpxyc036ajt",
      "outdoorUnitId": "ou-thermal-zone-rhpxyc036ajt",
      "indoorUnitId": "iu-iu-36472",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-rhpxyc048ajt-iu-36473",
      "slug": "thermal-zone-rhpxyc048ajt-iu-36473",
      "modelId": "model-thermal-zone-rhpxyc048ajt",
      "outdoorUnitId": "ou-thermal-zone-rhpxyc048ajt",
      "indoorUnitId": "iu-iu-36473",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermal-zone-rhpxyc060ajt-iu-36474",
      "slug": "thermal-zone-rhpxyc060ajt-iu-36474",
      "modelId": "model-thermal-zone-rhpxyc060ajt",
      "outdoorUnitId": "ou-thermal-zone-rhpxyc060ajt",
      "indoorUnitId": "iu-iu-36474",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-thermal-zone-epa",
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
