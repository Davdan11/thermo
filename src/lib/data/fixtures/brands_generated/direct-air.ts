import type { BrandDataset } from "../../types";

export const brand_direct_airDataset: BrandDataset = {
  "brand": {
    "id": "brand-direct-air",
    "slug": "direct-air",
    "name": "DIRECT AIR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour DIRECT AIR",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-direct-air-epa",
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
      "id": "series-direct-air-dirm-series",
      "slug": "direct-air-dirm-series",
      "name": "DIRM series",
      "brandId": "brand-direct-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DIRM series de DIRECT AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-direct-air-hiultra",
      "slug": "direct-air-hiultra",
      "name": "HiULTRA",
      "brandId": "brand-direct-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HiULTRA de DIRECT AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-direct-air-dir-series",
      "slug": "direct-air-dir-series",
      "name": "DIR Series",
      "brandId": "brand-direct-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DIR Series de DIRECT AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-direct-air-dirm4-series",
      "slug": "direct-air-dirm4-series",
      "name": "DIRM4 Series",
      "brandId": "brand-direct-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DIRM4 Series de DIRECT AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-direct-air-mo-series",
      "slug": "direct-air-mo-series",
      "name": "MO series",
      "brandId": "brand-direct-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MO series de DIRECT AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-direct-air-dirm-series-dirm4-series",
      "slug": "direct-air-dirm-series-dirm4-series",
      "name": "DIRM Series | DIRM4 Series",
      "brandId": "brand-direct-air",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DIRM Series | DIRM4 Series de DIRECT AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-direct-air-dirm-09hxpro28-1z",
      "slug": "direct-air-dirm-09hxpro28-1z",
      "name": "DIRECT AIR DIRM-09HXPRO28-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-09HXPRO28-1Z",
      "normalizedModelNumber": "dirm-09hxpro28-1z",
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
      "id": "model-direct-air-dir-09hp28-tqo",
      "slug": "direct-air-dir-09hp28-tqo",
      "name": "DIRECT AIR DIR-09HP28-TQO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIR-09HP28-TQO",
      "normalizedModelNumber": "dir-09hp28-tqo",
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
      "id": "model-direct-air-dirm4-09hxpro28-1z",
      "slug": "direct-air-dirm4-09hxpro28-1z",
      "name": "DIRECT AIR DIRM4-09HXPRO28-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-09HXPRO28-1Z",
      "normalizedModelNumber": "dirm4-09hxpro28-1z",
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
      "id": "model-direct-air-dirm-06hxpro28-1z",
      "slug": "direct-air-dirm-06hxpro28-1z",
      "name": "DIRECT AIR DIRM-06HXPRO28-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-06HXPRO28-1Z",
      "normalizedModelNumber": "dirm-06hxpro28-1z",
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
      "id": "model-direct-air-dirm4-09da25-1z",
      "slug": "direct-air-dirm4-09da25-1z",
      "name": "DIRECT AIR DIRM4-09DA25-1Z",
      "seriesId": "series-direct-air-dirm4-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-09DA25-1Z",
      "normalizedModelNumber": "dirm4-09da25-1z",
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
      "id": "model-direct-air-dirm-12hxpro28-1z",
      "slug": "direct-air-dirm-12hxpro28-1z",
      "name": "DIRECT AIR DIRM-12HXPRO28-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-12HXPRO28-1Z",
      "normalizedModelNumber": "dirm-12hxpro28-1z",
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
      "id": "model-direct-air-dirm-09da25-1z",
      "slug": "direct-air-dirm-09da25-1z",
      "name": "DIRECT AIR DIRM-09DA25-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-09DA25-1Z",
      "normalizedModelNumber": "dirm-09da25-1z",
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
      "id": "model-direct-air-dirm4-12da25-1z",
      "slug": "direct-air-dirm4-12da25-1z",
      "name": "DIRECT AIR DIRM4-12DA25-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-12DA25-1Z",
      "normalizedModelNumber": "dirm4-12da25-1z",
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
      "id": "model-direct-air-dirm4-06hxpro28-1z",
      "slug": "direct-air-dirm4-06hxpro28-1z",
      "name": "DIRECT AIR DIRM4-06HXPRO28-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-06HXPRO28-1Z",
      "normalizedModelNumber": "dirm4-06hxpro28-1z",
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
      "id": "model-direct-air-dirm4-12hxpro28-1z",
      "slug": "direct-air-dirm4-12hxpro28-1z",
      "name": "DIRECT AIR DIRM4-12HXPRO28-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-12HXPRO28-1Z",
      "normalizedModelNumber": "dirm4-12hxpro28-1z",
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
      "id": "model-direct-air-dirm4-18da25-3z",
      "slug": "direct-air-dirm4-18da25-3z",
      "name": "DIRECT AIR DIRM4-18DA25-3Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-18DA25-3Z",
      "normalizedModelNumber": "dirm4-18da25-3z",
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
      "id": "model-direct-air-dirm4-18da25-2z",
      "slug": "direct-air-dirm4-18da25-2z",
      "name": "DIRECT AIR DIRM4-18DA25-2Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-18DA25-2Z",
      "normalizedModelNumber": "dirm4-18da25-2z",
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
      "id": "model-direct-air-dirh4-09hp25-dko",
      "slug": "direct-air-dirh4-09hp25-dko",
      "name": "DIRECT AIR DIRH4-09HP25-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH4-09HP25-DKO",
      "normalizedModelNumber": "dirh4-09hp25-dko",
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
      "id": "model-direct-air-dirm4-18hxpro28-2z",
      "slug": "direct-air-dirm4-18hxpro28-2z",
      "name": "DIRECT AIR DIRM4-18HXPRO28-2Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-18HXPRO28-2Z",
      "normalizedModelNumber": "dirm4-18hxpro28-2z",
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
      "id": "model-direct-air-dirm4-18hxpro28-3z",
      "slug": "direct-air-dirm4-18hxpro28-3z",
      "name": "DIRECT AIR DIRM4-18HXPRO28-3Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-18HXPRO28-3Z",
      "normalizedModelNumber": "dirm4-18hxpro28-3z",
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
      "id": "model-direct-air-dirm4-27da25-4z",
      "slug": "direct-air-dirm4-27da25-4z",
      "name": "DIRECT AIR DIRM4-27DA25-4Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-27DA25-4Z",
      "normalizedModelNumber": "dirm4-27da25-4z",
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
      "id": "model-direct-air-dirm4-27da25-3z",
      "slug": "direct-air-dirm4-27da25-3z",
      "name": "DIRECT AIR DIRM4-27DA25-3Z*",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-27DA25-3Z*",
      "normalizedModelNumber": "dirm4-27da25-3z*",
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
      "id": "model-direct-air-dirm-27da25-3z",
      "slug": "direct-air-dirm-27da25-3z",
      "name": "DIRECT AIR DIRM-27DA25-3Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-27DA25-3Z",
      "normalizedModelNumber": "dirm-27da25-3z",
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
      "id": "model-direct-air-dirm-12da25-1z",
      "slug": "direct-air-dirm-12da25-1z",
      "name": "DIRECT AIR DIRM-12DA25-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-12DA25-1Z",
      "normalizedModelNumber": "dirm-12da25-1z",
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
      "id": "model-direct-air-dirm4-36da25-5z",
      "slug": "direct-air-dirm4-36da25-5z",
      "name": "DIRECT AIR DIRM4-36DA25-5Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-36DA25-5Z",
      "normalizedModelNumber": "dirm4-36da25-5z",
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
      "id": "model-direct-air-dirm4-36da25-4z",
      "slug": "direct-air-dirm4-36da25-4z",
      "name": "DIRECT AIR DIRM4-36DA25-4Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-36DA25-4Z",
      "normalizedModelNumber": "dirm4-36da25-4z",
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
      "id": "model-direct-air-dirm4-48da25-6z",
      "slug": "direct-air-dirm4-48da25-6z",
      "name": "DIRECT AIR DIRM4-48DA25-6Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-48DA25-6Z",
      "normalizedModelNumber": "dirm4-48da25-6z",
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
      "id": "model-direct-air-dirm4-48da25-5z",
      "slug": "direct-air-dirm4-48da25-5z",
      "name": "DIRECT AIR DIRM4-48DA25-5Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-48DA25-5Z",
      "normalizedModelNumber": "dirm4-48da25-5z",
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
      "id": "model-direct-air-dirm-36da25-4z",
      "slug": "direct-air-dirm-36da25-4z",
      "name": "DIRECT AIR DIRM-36DA25-4Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-36DA25-4Z",
      "normalizedModelNumber": "dirm-36da25-4z",
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
      "id": "model-direct-air-dirm4-18da25-1z",
      "slug": "direct-air-dirm4-18da25-1z",
      "name": "DIRECT AIR DIRM4-18DA25-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-18DA25-1Z",
      "normalizedModelNumber": "dirm4-18da25-1z",
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
      "id": "model-direct-air-dirm-18da25-1z",
      "slug": "direct-air-dirm-18da25-1z",
      "name": "DIRECT AIR DIRM-18DA25-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-18DA25-1Z",
      "normalizedModelNumber": "dirm-18da25-1z",
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
      "id": "model-direct-air-dir-12hp28-tqo",
      "slug": "direct-air-dir-12hp28-tqo",
      "name": "DIRECT AIR DIR-12HP28-TQO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIR-12HP28-TQO",
      "normalizedModelNumber": "dir-12hp28-tqo",
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
      "id": "model-direct-air-dirm-48da25-5z",
      "slug": "direct-air-dirm-48da25-5z",
      "name": "DIRECT AIR DIRM-48DA25-5Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-48DA25-5Z",
      "normalizedModelNumber": "dirm-48da25-5z",
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
      "id": "model-direct-air-dirm4-48hxpro28-6z",
      "slug": "direct-air-dirm4-48hxpro28-6z",
      "name": "DIRECT AIR DIRM4-48HXPRO28-6Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-48HXPRO28-6Z",
      "normalizedModelNumber": "dirm4-48hxpro28-6z",
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
      "id": "model-direct-air-dirm4-36hxpro28-4z",
      "slug": "direct-air-dirm4-36hxpro28-4z",
      "name": "DIRECT AIR DIRM4-36HXPRO28-4Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-36HXPRO28-4Z",
      "normalizedModelNumber": "dirm4-36hxpro28-4z",
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
      "id": "model-direct-air-dirm4-28hxpro28-4z",
      "slug": "direct-air-dirm4-28hxpro28-4z",
      "name": "DIRECT AIR DIRM4-28HXPRO28-4Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-28HXPRO28-4Z",
      "normalizedModelNumber": "dirm4-28hxpro28-4z",
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
      "id": "model-direct-air-dirm4-28hxpro28-3z",
      "slug": "direct-air-dirm4-28hxpro28-3z",
      "name": "DIRECT AIR DIRM4-28HXPRO28-3Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-28HXPRO28-3Z",
      "normalizedModelNumber": "dirm4-28hxpro28-3z",
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
      "id": "model-direct-air-dirm4-48hxpro28-5z",
      "slug": "direct-air-dirm4-48hxpro28-5z",
      "name": "DIRECT AIR DIRM4-48HXPRO28-5Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-48HXPRO28-5Z",
      "normalizedModelNumber": "dirm4-48hxpro28-5z",
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
      "id": "model-direct-air-dirm-28hxpro28-3z",
      "slug": "direct-air-dirm-28hxpro28-3z",
      "name": "DIRECT AIR DIRM-28HXPRO28-3Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-28HXPRO28-3Z",
      "normalizedModelNumber": "dirm-28hxpro28-3z",
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
      "id": "model-direct-air-dirm4-24da25-1z",
      "slug": "direct-air-dirm4-24da25-1z",
      "name": "DIRECT AIR DIRM4-24DA25-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-24DA25-1Z",
      "normalizedModelNumber": "dirm4-24da25-1z",
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
      "id": "model-direct-air-dirh4-12hp25-dko",
      "slug": "direct-air-dirh4-12hp25-dko",
      "name": "DIRECT AIR DIRH4-12HP25-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH4-12HP25-DKO",
      "normalizedModelNumber": "dirh4-12hp25-dko",
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
      "id": "model-direct-air-dirm4-36hxpro28-5z",
      "slug": "direct-air-dirm4-36hxpro28-5z",
      "name": "DIRECT AIR DIRM4-36HXPRO28-5Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-36HXPRO28-5Z",
      "normalizedModelNumber": "dirm4-36hxpro28-5z",
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
      "id": "model-direct-air-dirm-18da25-2z",
      "slug": "direct-air-dirm-18da25-2z",
      "name": "DIRECT AIR DIRM-18DA25-2Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-18DA25-2Z",
      "normalizedModelNumber": "dirm-18da25-2z",
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
      "id": "model-direct-air-dirh-18hp23-dko",
      "slug": "direct-air-dirh-18hp23-dko",
      "name": "DIRECT AIR DIRH-18HP23-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH-18HP23-DKO",
      "normalizedModelNumber": "dirh-18hp23-dko",
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
      "id": "model-direct-air-dir-18hp23dko-es",
      "slug": "direct-air-dir-18hp23dko-es",
      "name": "DIRECT AIR DIR-18HP23DKO-ES",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIR-18HP23DKO-ES",
      "normalizedModelNumber": "dir-18hp23dko-es",
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
      "id": "model-direct-air-dirh4-24hp25-dko",
      "slug": "direct-air-dirh4-24hp25-dko",
      "name": "DIRECT AIR DIRH4-24HP25-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH4-24HP25-DKO",
      "normalizedModelNumber": "dirh4-24hp25-dko",
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
      "id": "model-direct-air-dirh3-09hp21-dko",
      "slug": "direct-air-dirh3-09hp21-dko",
      "name": "DIRECT AIR DIRH3-09HP21-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH3-09HP21-DKO",
      "normalizedModelNumber": "dirh3-09hp21-dko",
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
      "id": "model-direct-air-dirm-36hxpro28-4z",
      "slug": "direct-air-dirm-36hxpro28-4z",
      "name": "DIRECT AIR DIRM-36HXPRO28-4Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-36HXPRO28-4Z",
      "normalizedModelNumber": "dirm-36hxpro28-4z",
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
      "id": "model-direct-air-dirm4-60hxpro28-6z",
      "slug": "direct-air-dirm4-60hxpro28-6z",
      "name": "DIRECT AIR DIRM4-60HXPRO28-6Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-60HXPRO28-6Z",
      "normalizedModelNumber": "dirm4-60hxpro28-6z",
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
      "id": "model-direct-air-dirh-09hp23-dko",
      "slug": "direct-air-dirh-09hp23-dko",
      "name": "DIRECT AIR DIRH-09HP23-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH-09HP23-DKO",
      "normalizedModelNumber": "dirh-09hp23-dko",
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
      "id": "model-direct-air-dirm-24da25-1z",
      "slug": "direct-air-dirm-24da25-1z",
      "name": "DIRECT AIR DIRM-24DA25-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-24DA25-1Z",
      "normalizedModelNumber": "dirm-24da25-1z",
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
      "id": "model-direct-air-dir-09hp20dko-es",
      "slug": "direct-air-dir-09hp20dko-es",
      "name": "DIRECT AIR DIR-09HP20DKO-ES",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIR-09HP20DKO-ES",
      "normalizedModelNumber": "dir-09hp20dko-es",
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
      "id": "model-direct-air-dir-09hp22dko-es",
      "slug": "direct-air-dir-09hp22dko-es",
      "name": "DIRECT AIR DIR-09HP22DKO-ES",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIR-09HP22DKO-ES",
      "normalizedModelNumber": "dir-09hp22dko-es",
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
      "id": "model-direct-air-dirm-18hxpro28-2z",
      "slug": "direct-air-dirm-18hxpro28-2z",
      "name": "DIRECT AIR DIRM-18HXPRO28-2Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-18HXPRO28-2Z",
      "normalizedModelNumber": "dirm-18hxpro28-2z",
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
      "id": "model-direct-air-dirm-48hxpro28-5z",
      "slug": "direct-air-dirm-48hxpro28-5z",
      "name": "DIRECT AIR DIRM-48HXPRO28-5Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-48HXPRO28-5Z",
      "normalizedModelNumber": "dirm-48hxpro28-5z",
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
      "id": "model-direct-air-dirm-24hxpro28-1z",
      "slug": "direct-air-dirm-24hxpro28-1z",
      "name": "DIRECT AIR DIRM-24HXPRO28-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-24HXPRO28-1Z",
      "normalizedModelNumber": "dirm-24hxpro28-1z",
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
      "id": "model-direct-air-dirm-18hxpro28-1z",
      "slug": "direct-air-dirm-18hxpro28-1z",
      "name": "DIRECT AIR DIRM-18HXPRO28-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-18HXPRO28-1Z",
      "normalizedModelNumber": "dirm-18hxpro28-1z",
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
      "id": "model-direct-air-dirm4-18hxpro28-1z",
      "slug": "direct-air-dirm4-18hxpro28-1z",
      "name": "DIRECT AIR DIRM4-18HXPRO28-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-18HXPRO28-1Z",
      "normalizedModelNumber": "dirm4-18hxpro28-1z",
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
      "id": "model-direct-air-dirm4-36lchx-1z",
      "slug": "direct-air-dirm4-36lchx-1z",
      "name": "DIRECT AIR DIRM4-36LCHX-1Z",
      "seriesId": "series-direct-air-dirm4-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-36LCHX-1Z",
      "normalizedModelNumber": "dirm4-36lchx-1z",
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
      "id": "model-direct-air-dirh-12hp23-dko",
      "slug": "direct-air-dirh-12hp23-dko",
      "name": "DIRECT AIR DIRH-12HP23-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH-12HP23-DKO",
      "normalizedModelNumber": "dirh-12hp23-dko",
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
      "id": "model-direct-air-dirh4-18hp25-dko",
      "slug": "direct-air-dirh4-18hp25-dko",
      "name": "DIRECT AIR DIRH4-18HP25-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH4-18HP25-DKO",
      "normalizedModelNumber": "dirh4-18hp25-dko",
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
      "id": "model-direct-air-dirm4-24hxpro28-1z",
      "slug": "direct-air-dirm4-24hxpro28-1z",
      "name": "DIRECT AIR DIRM4-24HXPRO28-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-24HXPRO28-1Z",
      "normalizedModelNumber": "dirm4-24hxpro28-1z",
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
      "id": "model-direct-air-dirh-24hp23-dko",
      "slug": "direct-air-dirh-24hp23-dko",
      "name": "DIRECT AIR DIRH-24HP23-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH-24HP23-DKO",
      "normalizedModelNumber": "dirh-24hp23-dko",
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
      "id": "model-direct-air-dir-24hp21dko-es",
      "slug": "direct-air-dir-24hp21dko-es",
      "name": "DIRECT AIR DIR-24HP21DKO-ES",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIR-24HP21DKO-ES",
      "normalizedModelNumber": "dir-24hp21dko-es",
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
      "id": "model-direct-air-dirm4-30da25-1z",
      "slug": "direct-air-dirm4-30da25-1z",
      "name": "DIRECT AIR DIRM4-30DA25-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-30DA25-1Z",
      "normalizedModelNumber": "dirm4-30da25-1z",
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
      "id": "model-direct-air-mox430-17hfn1-mt0w",
      "slug": "direct-air-mox430-17hfn1-mt0w",
      "name": "DIRECT AIR MOX430-17HFN1-MT0W",
      "seriesId": "series-direct-air-mo-series",
      "brandId": "brand-direct-air",
      "modelNumber": "MOX430-17HFN1-MT0W",
      "normalizedModelNumber": "mox430-17hfn1-mt0w",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-direct-air-dirh3-18hp21-dko",
      "slug": "direct-air-dirh3-18hp21-dko",
      "name": "DIRECT AIR DIRH3-18HP21-DKO",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH3-18HP21-DKO",
      "normalizedModelNumber": "dirh3-18hp21-dko",
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
      "id": "model-direct-air-dirm4-36lcda25-1z",
      "slug": "direct-air-dirm4-36lcda25-1z",
      "name": "DIRECT AIR DIRM4-36LCDA25-1Z",
      "seriesId": "series-direct-air-dirm4-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-36LCDA25-1Z",
      "normalizedModelNumber": "dirm4-36lcda25-1z",
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
      "id": "model-direct-air-dirm-30da25-1z",
      "slug": "direct-air-dirm-30da25-1z",
      "name": "DIRECT AIR DIRM-30DA25-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-30DA25-1Z",
      "normalizedModelNumber": "dirm-30da25-1z",
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
      "id": "model-direct-air-dirm4-48lcda25-1z",
      "slug": "direct-air-dirm4-48lcda25-1z",
      "name": "DIRECT AIR DIRM4-48LCDA25-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-48LCDA25-1Z",
      "normalizedModelNumber": "dirm4-48lcda25-1z",
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
      "id": "model-direct-air-dirm4-18magicpro20-ou",
      "slug": "direct-air-dirm4-18magicpro20-ou",
      "name": "DIRECT AIR DIRM4-18MAGICPRO20-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-18MAGICPRO20-OU",
      "normalizedModelNumber": "dirm4-18magicpro20-ou",
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
      "id": "model-direct-air-mod30-24hfn1-mu0w",
      "slug": "direct-air-mod30-24hfn1-mu0w",
      "name": "DIRECT AIR MOD30-24HFN1-MU0W",
      "seriesId": "series-direct-air-mo-series",
      "brandId": "brand-direct-air",
      "modelNumber": "MOD30-24HFN1-MU0W",
      "normalizedModelNumber": "mod30-24hfn1-mu0w",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 21600,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-direct-air-dirm-48lcda25-1z",
      "slug": "direct-air-dirm-48lcda25-1z",
      "name": "DIRECT AIR DIRM-48LCDA25-1Z",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-48LCDA25-1Z",
      "normalizedModelNumber": "dirm-48lcda25-1z",
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
      "id": "model-direct-air-dirm4-18cs19-ou",
      "slug": "direct-air-dirm4-18cs19-ou",
      "name": "DIRECT AIR DIRM4-18CS19-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-18CS19-OU",
      "normalizedModelNumber": "dirm4-18cs19-ou",
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
      "id": "model-direct-air-dirh-09hp23-dko-115",
      "slug": "direct-air-dirh-09hp23-dko-115",
      "name": "DIRECT AIR DIRH-09HP23-DKO-115",
      "seriesId": "series-direct-air-hiultra",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRH-09HP23-DKO-115",
      "normalizedModelNumber": "dirh-09hp23-dko-115",
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
      "id": "model-direct-air-dirm4-48lchx-1z",
      "slug": "direct-air-dirm4-48lchx-1z",
      "name": "DIRECT AIR DIRM4-48LCHX-1Z",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-48LCHX-1Z",
      "normalizedModelNumber": "dirm4-48lchx-1z",
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
      "id": "model-direct-air-dirm4-24magicpro20-ou",
      "slug": "direct-air-dirm4-24magicpro20-ou",
      "name": "DIRECT AIR DIRM4-24MAGICPRO20-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-24MAGICPRO20-OU",
      "normalizedModelNumber": "dirm4-24magicpro20-ou",
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
      "id": "model-direct-air-dirm4-24cs19-ou",
      "slug": "direct-air-dirm4-24cs19-ou",
      "name": "DIRECT AIR DIRM4-24CS19-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-24CS19-OU",
      "normalizedModelNumber": "dirm4-24cs19-ou",
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
      "id": "model-direct-air-dirm-18magicpro20-ou",
      "slug": "direct-air-dirm-18magicpro20-ou",
      "name": "DIRECT AIR DIRM-18MAGICPRO20-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-18MAGICPRO20-OU",
      "normalizedModelNumber": "dirm-18magicpro20-ou",
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
      "id": "model-direct-air-dirm-24magicpro20-ou",
      "slug": "direct-air-dirm-24magicpro20-ou",
      "name": "DIRECT AIR DIRM-24MAGICPRO20-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-24MAGICPRO20-OU",
      "normalizedModelNumber": "dirm-24magicpro20-ou",
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
      "id": "model-direct-air-dirm4-36magicpro20-ou",
      "slug": "direct-air-dirm4-36magicpro20-ou",
      "name": "DIRECT AIR DIRM4-36MAGICPRO20-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-36MAGICPRO20-OU",
      "normalizedModelNumber": "dirm4-36magicpro20-ou",
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
      "id": "model-direct-air-dirm-24cs19-ou",
      "slug": "direct-air-dirm-24cs19-ou",
      "name": "DIRECT AIR DIRM-24CS19-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-24CS19-OU",
      "normalizedModelNumber": "dirm-24cs19-ou",
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
      "id": "model-direct-air-dirm4-30magicpro20-ou",
      "slug": "direct-air-dirm4-30magicpro20-ou",
      "name": "DIRECT AIR DIRM4-30MAGICPRO20-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-30MAGICPRO20-OU",
      "normalizedModelNumber": "dirm4-30magicpro20-ou",
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
      "id": "model-direct-air-dirm4-48magicpro20-ou",
      "slug": "direct-air-dirm4-48magicpro20-ou",
      "name": "DIRECT AIR DIRM4-48MAGICPRO20-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-48MAGICPRO20-OU",
      "normalizedModelNumber": "dirm4-48magicpro20-ou",
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
      "id": "model-direct-air-dirm-36magicpro20-ou1f",
      "slug": "direct-air-dirm-36magicpro20-ou1f",
      "name": "DIRECT AIR DIRM-36MAGICPRO20-OU1F",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-36MAGICPRO20-OU1F",
      "normalizedModelNumber": "dirm-36magicpro20-ou1f",
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
      "id": "model-direct-air-dirm4-30cs19-ou",
      "slug": "direct-air-dirm4-30cs19-ou",
      "name": "DIRECT AIR DIRM4-30CS19-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-30CS19-OU",
      "normalizedModelNumber": "dirm4-30cs19-ou",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 29000,
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
      "id": "model-direct-air-dirm-30magicpro20-ou",
      "slug": "direct-air-dirm-30magicpro20-ou",
      "name": "DIRECT AIR DIRM-30MAGICPRO20-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-30MAGICPRO20-OU",
      "normalizedModelNumber": "dirm-30magicpro20-ou",
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
      "id": "model-direct-air-dirm4-36cs19-ou",
      "slug": "direct-air-dirm4-36cs19-ou",
      "name": "DIRECT AIR DIRM4-36CS19-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-36CS19-OU",
      "normalizedModelNumber": "dirm4-36cs19-ou",
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
      "id": "model-direct-air-dirm4-60magicpro20-ou",
      "slug": "direct-air-dirm4-60magicpro20-ou",
      "name": "DIRECT AIR DIRM4-60MAGICPRO20-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-60MAGICPRO20-OU",
      "normalizedModelNumber": "dirm4-60magicpro20-ou",
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
      "id": "model-direct-air-dirm4-48cs19-ou",
      "slug": "direct-air-dirm4-48cs19-ou",
      "name": "DIRECT AIR DIRM4-48CS19-OU",
      "seriesId": "series-direct-air-dir-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-48CS19-OU",
      "normalizedModelNumber": "dirm4-48cs19-ou",
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
      "id": "model-direct-air-dirm-36magicpro20-ou",
      "slug": "direct-air-dirm-36magicpro20-ou",
      "name": "DIRECT AIR DIRM-36MAGICPRO20-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-36MAGICPRO20-OU",
      "normalizedModelNumber": "dirm-36magicpro20-ou",
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
      "id": "model-direct-air-dirm-48magicpro20-ou",
      "slug": "direct-air-dirm-48magicpro20-ou",
      "name": "DIRECT AIR DIRM-48MAGICPRO20-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-48MAGICPRO20-OU",
      "normalizedModelNumber": "dirm-48magicpro20-ou",
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
      "id": "model-direct-air-dirm4-60cs19-ou",
      "slug": "direct-air-dirm4-60cs19-ou",
      "name": "DIRECT AIR DIRM4-60CS19-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM4-60CS19-OU",
      "normalizedModelNumber": "dirm4-60cs19-ou",
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
      "id": "model-direct-air-dirm-60magicpro20-ou",
      "slug": "direct-air-dirm-60magicpro20-ou",
      "name": "DIRECT AIR DIRM-60MAGICPRO20-OU",
      "seriesId": "series-direct-air-dirm-series",
      "brandId": "brand-direct-air",
      "modelNumber": "DIRM-60MAGICPRO20-OU",
      "normalizedModelNumber": "dirm-60magicpro20-ou",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-direct-air-dirm-09hxpro28-1z",
      "modelNumber": "DIRM-09HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dir-09hp28-tqo",
      "modelNumber": "DIR-09HP28-TQO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-09hxpro28-1z",
      "modelNumber": "DIRM4-09HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-06hxpro28-1z",
      "modelNumber": "DIRM-06HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-09da25-1z",
      "modelNumber": "DIRM4-09DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-12hxpro28-1z",
      "modelNumber": "DIRM-12HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-09da25-1z",
      "modelNumber": "DIRM-09DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-12da25-1z",
      "modelNumber": "DIRM4-12DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-06hxpro28-1z",
      "modelNumber": "DIRM4-06HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-12hxpro28-1z",
      "modelNumber": "DIRM4-12HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-18da25-3z",
      "modelNumber": "DIRM4-18DA25-3Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-18da25-2z",
      "modelNumber": "DIRM4-18DA25-2Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirh4-09hp25-dko",
      "modelNumber": "DIRH4-09HP25-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-18hxpro28-2z",
      "modelNumber": "DIRM4-18HXPRO28-2Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-18hxpro28-3z",
      "modelNumber": "DIRM4-18HXPRO28-3Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-27da25-4z",
      "modelNumber": "DIRM4-27DA25-4Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-27da25-3z",
      "modelNumber": "DIRM4-27DA25-3Z*",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-27da25-3z",
      "modelNumber": "DIRM-27DA25-3Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-12da25-1z",
      "modelNumber": "DIRM-12DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-36da25-5z",
      "modelNumber": "DIRM4-36DA25-5Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-36da25-4z",
      "modelNumber": "DIRM4-36DA25-4Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-48da25-6z",
      "modelNumber": "DIRM4-48DA25-6Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-48da25-5z",
      "modelNumber": "DIRM4-48DA25-5Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-36da25-4z",
      "modelNumber": "DIRM-36DA25-4Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-18da25-1z",
      "modelNumber": "DIRM4-18DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-18da25-1z",
      "modelNumber": "DIRM-18DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dir-12hp28-tqo",
      "modelNumber": "DIR-12HP28-TQO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-48da25-5z",
      "modelNumber": "DIRM-48DA25-5Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-48hxpro28-6z",
      "modelNumber": "DIRM4-48HXPRO28-6Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-36hxpro28-4z",
      "modelNumber": "DIRM4-36HXPRO28-4Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-28hxpro28-4z",
      "modelNumber": "DIRM4-28HXPRO28-4Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-28hxpro28-3z",
      "modelNumber": "DIRM4-28HXPRO28-3Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-48hxpro28-5z",
      "modelNumber": "DIRM4-48HXPRO28-5Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-28hxpro28-3z",
      "modelNumber": "DIRM-28HXPRO28-3Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-24da25-1z",
      "modelNumber": "DIRM4-24DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirh4-12hp25-dko",
      "modelNumber": "DIRH4-12HP25-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-36hxpro28-5z",
      "modelNumber": "DIRM4-36HXPRO28-5Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-18da25-2z",
      "modelNumber": "DIRM-18DA25-2Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirh-18hp23-dko",
      "modelNumber": "DIRH-18HP23-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dir-18hp23dko-es",
      "modelNumber": "DIR-18HP23DKO-ES",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirh4-24hp25-dko",
      "modelNumber": "DIRH4-24HP25-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirh3-09hp21-dko",
      "modelNumber": "DIRH3-09HP21-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-direct-air-dirm-36hxpro28-4z",
      "modelNumber": "DIRM-36HXPRO28-4Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-60hxpro28-6z",
      "modelNumber": "DIRM4-60HXPRO28-6Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirh-09hp23-dko",
      "modelNumber": "DIRH-09HP23-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-24da25-1z",
      "modelNumber": "DIRM-24DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dir-09hp20dko-es",
      "modelNumber": "DIR-09HP20DKO-ES",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dir-09hp22dko-es",
      "modelNumber": "DIR-09HP22DKO-ES",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-18hxpro28-2z",
      "modelNumber": "DIRM-18HXPRO28-2Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-48hxpro28-5z",
      "modelNumber": "DIRM-48HXPRO28-5Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-24hxpro28-1z",
      "modelNumber": "DIRM-24HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-18hxpro28-1z",
      "modelNumber": "DIRM-18HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-18hxpro28-1z",
      "modelNumber": "DIRM4-18HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-36lchx-1z",
      "modelNumber": "DIRM4-36LCHX-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirh-12hp23-dko",
      "modelNumber": "DIRH-12HP23-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirh4-18hp25-dko",
      "modelNumber": "DIRH4-18HP25-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-24hxpro28-1z",
      "modelNumber": "DIRM4-24HXPRO28-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirh-24hp23-dko",
      "modelNumber": "DIRH-24HP23-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dir-24hp21dko-es",
      "modelNumber": "DIR-24HP21DKO-ES",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-30da25-1z",
      "modelNumber": "DIRM4-30DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-mox430-17hfn1-mt0w",
      "modelNumber": "MOX430-17HFN1-MT0W",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirh3-18hp21-dko",
      "modelNumber": "DIRH3-18HP21-DKO",
      "brandId": "brand-direct-air",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-direct-air-dirm4-36lcda25-1z",
      "modelNumber": "DIRM4-36LCDA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-30da25-1z",
      "modelNumber": "DIRM-30DA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-48lcda25-1z",
      "modelNumber": "DIRM4-48LCDA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-18magicpro20-ou",
      "modelNumber": "DIRM4-18MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-mod30-24hfn1-mu0w",
      "modelNumber": "MOD30-24HFN1-MU0W",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-48lcda25-1z",
      "modelNumber": "DIRM-48LCDA25-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-18cs19-ou",
      "modelNumber": "DIRM4-18CS19-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirh-09hp23-dko-115",
      "modelNumber": "DIRH-09HP23-DKO-115",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-48lchx-1z",
      "modelNumber": "DIRM4-48LCHX-1Z",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-24magicpro20-ou",
      "modelNumber": "DIRM4-24MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-24cs19-ou",
      "modelNumber": "DIRM4-24CS19-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-18magicpro20-ou",
      "modelNumber": "DIRM-18MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-24magicpro20-ou",
      "modelNumber": "DIRM-24MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-36magicpro20-ou",
      "modelNumber": "DIRM4-36MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-24cs19-ou",
      "modelNumber": "DIRM-24CS19-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-30magicpro20-ou",
      "modelNumber": "DIRM4-30MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-48magicpro20-ou",
      "modelNumber": "DIRM4-48MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-36magicpro20-ou1f",
      "modelNumber": "DIRM-36MAGICPRO20-OU1F",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-30cs19-ou",
      "modelNumber": "DIRM4-30CS19-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-30magicpro20-ou",
      "modelNumber": "DIRM-30MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-36cs19-ou",
      "modelNumber": "DIRM4-36CS19-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-60magicpro20-ou",
      "modelNumber": "DIRM4-60MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm4-48cs19-ou",
      "modelNumber": "DIRM4-48CS19-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-36magicpro20-ou",
      "modelNumber": "DIRM-36MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm-48magicpro20-ou",
      "modelNumber": "DIRM-48MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-direct-air-dirm4-60cs19-ou",
      "modelNumber": "DIRM4-60CS19-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-direct-air-dirm-60magicpro20-ou",
      "modelNumber": "DIRM-60MAGICPRO20-OU",
      "brandId": "brand-direct-air",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dirm-09hp-wm",
      "modelNumber": "DIRM-09HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dir-09hp28-tqi",
      "modelNumber": "DIR-09HP28-TQI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-09hp-wm",
      "modelNumber": "DIRM4-09HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-09hp-co",
      "modelNumber": "DIRM4-09HP-CO",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-06hp-wm",
      "modelNumber": "DIRM-06HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-12hp-wm",
      "modelNumber": "DIRM-12HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-12hp-wm",
      "modelNumber": "DIRM4-12HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-06hp-wm",
      "modelNumber": "DIRM4-06HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43732",
      "modelNumber": "IU-43732",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43731",
      "modelNumber": "IU-43731",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-12hp-co",
      "modelNumber": "DIRM4-12HP-CO",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh4-09hp25-dki",
      "modelNumber": "DIRH4-09HP25-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43737",
      "modelNumber": "IU-43737",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43738",
      "modelNumber": "IU-43738",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43749",
      "modelNumber": "IU-43749",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43748",
      "modelNumber": "IU-43748",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43702",
      "modelNumber": "IU-43702",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43754",
      "modelNumber": "IU-43754",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43753",
      "modelNumber": "IU-43753",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43762",
      "modelNumber": "IU-43762",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43761",
      "modelNumber": "IU-43761",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43705",
      "modelNumber": "IU-43705",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-12hp-co",
      "modelNumber": "DIRM-12HP-CO",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-18hp-wm",
      "modelNumber": "DIRM4-18HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-18hp-wm",
      "modelNumber": "DIRM-18HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dir-12hp28-tqi",
      "modelNumber": "DIR-12HP28-TQI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43707",
      "modelNumber": "IU-43707",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43764",
      "modelNumber": "IU-43764",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43755",
      "modelNumber": "IU-43755",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43751",
      "modelNumber": "IU-43751",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43747",
      "modelNumber": "IU-43747",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43750",
      "modelNumber": "IU-43750",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43763",
      "modelNumber": "IU-43763",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43703",
      "modelNumber": "IU-43703",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-24hp-wm",
      "modelNumber": "DIRM4-24HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-18hp-cf",
      "modelNumber": "DIRM-18HP-CF",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh4-12hp25-dki",
      "modelNumber": "DIRH4-12HP25-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43756",
      "modelNumber": "IU-43756",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43687",
      "modelNumber": "IU-43687",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-12hp-ca",
      "modelNumber": "DIRM-12HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-09hp-ca",
      "modelNumber": "DIRM4-09HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh-18hp23-dki",
      "modelNumber": "DIRH-18HP23-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dir-18hp23dki-es",
      "modelNumber": "DIR-18HP23DKI-ES",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh4-24hp25-dki",
      "modelNumber": "DIRH4-24HP25-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh3-09hp21-dki",
      "modelNumber": "DIRH3-09HP21-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-18hp-cf",
      "modelNumber": "DIRM4-18HP-CF",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43706",
      "modelNumber": "IU-43706",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-12hp-ca",
      "modelNumber": "DIRM4-12HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43771",
      "modelNumber": "IU-43771",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh-09hp23-dki",
      "modelNumber": "DIRH-09HP23-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-24hp-wm",
      "modelNumber": "DIRM-24HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-24hp-ca",
      "modelNumber": "DIRM4-24HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dir-09hp20dki-es",
      "modelNumber": "DIR-09HP20DKI-ES",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dir-09hp22dki-es",
      "modelNumber": "DIR-09HP22DKI-ES",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43693",
      "modelNumber": "IU-43693",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43708",
      "modelNumber": "IU-43708",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-24hp-ca",
      "modelNumber": "DIRM-24HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-36hp-ca",
      "modelNumber": "DIRM4-36HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-24hp-cf",
      "modelNumber": "DIRM-24HP-CF",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-24hp-cf",
      "modelNumber": "DIRM4-24HP-CF",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh-12hp23-dki",
      "modelNumber": "DIRH-12HP23-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh4-18hp25-dki",
      "modelNumber": "DIRH4-18HP25-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-18hp-ca",
      "modelNumber": "DIRM4-18HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-09hp-ca",
      "modelNumber": "DIRM-09HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh-24hp23-dki",
      "modelNumber": "DIRH-24HP23-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-18hp-ca",
      "modelNumber": "DIRM-18HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dir-24hp21dki-es",
      "modelNumber": "DIR-24HP21DKI-ES",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-09hp-du",
      "modelNumber": "DIRM4-09HP-DU",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-30hp-wm",
      "modelNumber": "DIRM4-30HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-mueu-18hrfn1-mc",
      "modelNumber": "MUEU-18HRFN1-M(C)",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-09hp-duv",
      "modelNumber": "DIRM-09HP-DUV",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-09hp-duh",
      "modelNumber": "DIRM-09HP-DUH",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-12hp-du",
      "modelNumber": "DIRM4-12HP-DU",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-18hp-du",
      "modelNumber": "DIRM4-18HP-DU",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-36hp-cf",
      "modelNumber": "DIRM4-36HP-CF",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-cca3u-18hrfn1-mc",
      "modelNumber": "CCA3U-18HRFN1-M(C)",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh3-18hp21-dki",
      "modelNumber": "DIRH3-18HP21-DKI",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-18hp-duh",
      "modelNumber": "DIRM-18HP-DUH",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-30hp-wm",
      "modelNumber": "DIRM-30HP-WM",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-18hp-duv",
      "modelNumber": "DIRM-18HP-DUV",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-48hp-cf",
      "modelNumber": "DIRM4-48HP-CF",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-12hp-duv",
      "modelNumber": "DIRM-12HP-DUV",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-12hp-duh",
      "modelNumber": "DIRM-12HP-DUH",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-cs11m-18hrfn1-mt0w",
      "modelNumber": "CS11M-18HRFN1-MT0W",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-24hp-du",
      "modelNumber": "DIRM-24HP-DU",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-48hp-ca",
      "modelNumber": "DIRM4-48HP-CA",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-24hp-du",
      "modelNumber": "DIRM4-24HP-DU",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-18magicpro20-ah",
      "modelNumber": "DIRM4-18MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-cs11m-23hrfn1-mt0w",
      "modelNumber": "CS11M-23HRFN1-MT0W",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-48hp-cf",
      "modelNumber": "DIRM-48HP-CF",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirh-09hp23-dki-115",
      "modelNumber": "DIRH-09HP23-DKI-115",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-24magicpro20-ah",
      "modelNumber": "DIRM4-24MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-18magicpro20-ah",
      "modelNumber": "DIRM-18MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-mtiu-18hwfn1-m",
      "modelNumber": "MTIU-18HWFN1-M",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-2417magicp20-ccoil",
      "modelNumber": "DIRM4-2417MAGICP20-CCOIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-36hp-du",
      "modelNumber": "DIRM4-36HP-DU",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm-24magicpro20-ah",
      "modelNumber": "DIRM-24MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-36magicpro20-ah",
      "modelNumber": "DIRM4-36MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-48hp-du",
      "modelNumber": "DIRM4-48HP-DU",
      "brandId": "brand-direct-air",
      "type": "wall-single"
    },
    {
      "id": "iu-dirm4-30magicpro20-ah",
      "modelNumber": "DIRM4-30MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-24magicpro20-coil",
      "modelNumber": "DIRM-24MAGICPRO20-COIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-48magicpro20-ah",
      "modelNumber": "DIRM4-48MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-24magicpro20-145-coil",
      "modelNumber": "DIRM-24MAGICPRO20-145-COIL*",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-36magicpro20-ah",
      "modelNumber": "DIRM-36MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-3617magicp20-ccoil",
      "modelNumber": "DIRM4-3617MAGICP20-CCOIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-3621magicp20-ccoil",
      "modelNumber": "DIRM4-3621MAGICP20-CCOIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-30magicpro20-ah",
      "modelNumber": "DIRM-30MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-2414magicp20-ccoil",
      "modelNumber": "DIRM4-2414MAGICP20-CCOIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-4821magicp20-ccoil",
      "modelNumber": "DIRM4-4821MAGICP20-CCOIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-6021magicp20-ccoil",
      "modelNumber": "DIRM4-6021MAGICP20-CCOIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-60magicpro20-ah",
      "modelNumber": "DIRM4-60MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-48magicpro20-ah",
      "modelNumber": "DIRM-48MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-6024magicp20-ccoil",
      "modelNumber": "DIRM4-6024MAGICP20-CCOIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-36magicpro20-coil",
      "modelNumber": "DIRM-36MAGICPRO20-COIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-36magicpro20-175-coil",
      "modelNumber": "DIRM-36MAGICPRO20-175-COIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-60magicpro20-ah",
      "modelNumber": "DIRM-60MAGICPRO20-AH",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm4-3614magicp20-ccoil",
      "modelNumber": "DIRM4-3614MAGICP20-CCOIL",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-dirm-60magicpro20-coil",
      "modelNumber": "DIRM-60MAGICPRO20-COIL**",
      "brandId": "brand-direct-air",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-direct-air-dirm-09hxpro28-1z-dirm-09hp-wm",
      "slug": "direct-air-dirm-09hxpro28-1z-dirm-09hp-wm",
      "modelId": "model-direct-air-dirm-09hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-09hxpro28-1z",
      "indoorUnitId": "iu-dirm-09hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dir-09hp28-tqo-dir-09hp28-tqi",
      "slug": "direct-air-dir-09hp28-tqo-dir-09hp28-tqi",
      "modelId": "model-direct-air-dir-09hp28-tqo",
      "outdoorUnitId": "ou-direct-air-dir-09hp28-tqo",
      "indoorUnitId": "iu-dir-09hp28-tqi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-09hxpro28-1z-dirm4-09hp-wm",
      "slug": "direct-air-dirm4-09hxpro28-1z-dirm4-09hp-wm",
      "modelId": "model-direct-air-dirm4-09hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-09hxpro28-1z",
      "indoorUnitId": "iu-dirm4-09hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-09hxpro28-1z-dirm4-09hp-co",
      "slug": "direct-air-dirm4-09hxpro28-1z-dirm4-09hp-co",
      "modelId": "model-direct-air-dirm4-09hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-09hxpro28-1z",
      "indoorUnitId": "iu-dirm4-09hp-co",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-06hxpro28-1z-dirm-06hp-wm",
      "slug": "direct-air-dirm-06hxpro28-1z-dirm-06hp-wm",
      "modelId": "model-direct-air-dirm-06hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-06hxpro28-1z",
      "indoorUnitId": "iu-dirm-06hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-09da25-1z-dirm4-09hp-co",
      "slug": "direct-air-dirm4-09da25-1z-dirm4-09hp-co",
      "modelId": "model-direct-air-dirm4-09da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-09da25-1z",
      "indoorUnitId": "iu-dirm4-09hp-co",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-09da25-1z-dirm4-09hp-wm",
      "slug": "direct-air-dirm4-09da25-1z-dirm4-09hp-wm",
      "modelId": "model-direct-air-dirm4-09da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-09da25-1z",
      "indoorUnitId": "iu-dirm4-09hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12hxpro28-1z-dirm-12hp-wm",
      "slug": "direct-air-dirm-12hxpro28-1z-dirm-12hp-wm",
      "modelId": "model-direct-air-dirm-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12hxpro28-1z",
      "indoorUnitId": "iu-dirm-12hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-09da25-1z-dirm-09hp-wm",
      "slug": "direct-air-dirm-09da25-1z-dirm-09hp-wm",
      "modelId": "model-direct-air-dirm-09da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-09da25-1z",
      "indoorUnitId": "iu-dirm-09hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-12da25-1z-dirm4-12hp-wm",
      "slug": "direct-air-dirm4-12da25-1z-dirm4-12hp-wm",
      "modelId": "model-direct-air-dirm4-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-12da25-1z",
      "indoorUnitId": "iu-dirm4-12hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-06hxpro28-1z-dirm4-06hp-wm",
      "slug": "direct-air-dirm4-06hxpro28-1z-dirm4-06hp-wm",
      "modelId": "model-direct-air-dirm4-06hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-06hxpro28-1z",
      "indoorUnitId": "iu-dirm4-06hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-12hxpro28-1z-dirm4-12hp-wm",
      "slug": "direct-air-dirm4-12hxpro28-1z-dirm4-12hp-wm",
      "modelId": "model-direct-air-dirm4-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-12hxpro28-1z",
      "indoorUnitId": "iu-dirm4-12hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18da25-3z-iu-43732",
      "slug": "direct-air-dirm4-18da25-3z-iu-43732",
      "modelId": "model-direct-air-dirm4-18da25-3z",
      "outdoorUnitId": "ou-direct-air-dirm4-18da25-3z",
      "indoorUnitId": "iu-iu-43732",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18da25-2z-iu-43731",
      "slug": "direct-air-dirm4-18da25-2z-iu-43731",
      "modelId": "model-direct-air-dirm4-18da25-2z",
      "outdoorUnitId": "ou-direct-air-dirm4-18da25-2z",
      "indoorUnitId": "iu-iu-43731",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-12hxpro28-1z-dirm4-12hp-co",
      "slug": "direct-air-dirm4-12hxpro28-1z-dirm4-12hp-co",
      "modelId": "model-direct-air-dirm4-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-12hxpro28-1z",
      "indoorUnitId": "iu-dirm4-12hp-co",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh4-09hp25-dko-dirh4-09hp25-dki",
      "slug": "direct-air-dirh4-09hp25-dko-dirh4-09hp25-dki",
      "modelId": "model-direct-air-dirh4-09hp25-dko",
      "outdoorUnitId": "ou-direct-air-dirh4-09hp25-dko",
      "indoorUnitId": "iu-dirh4-09hp25-dki",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18hxpro28-2z-iu-43737",
      "slug": "direct-air-dirm4-18hxpro28-2z-iu-43737",
      "modelId": "model-direct-air-dirm4-18hxpro28-2z",
      "outdoorUnitId": "ou-direct-air-dirm4-18hxpro28-2z",
      "indoorUnitId": "iu-iu-43737",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18hxpro28-3z-iu-43738",
      "slug": "direct-air-dirm4-18hxpro28-3z-iu-43738",
      "modelId": "model-direct-air-dirm4-18hxpro28-3z",
      "outdoorUnitId": "ou-direct-air-dirm4-18hxpro28-3z",
      "indoorUnitId": "iu-iu-43738",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-27da25-4z-iu-43749",
      "slug": "direct-air-dirm4-27da25-4z-iu-43749",
      "modelId": "model-direct-air-dirm4-27da25-4z",
      "outdoorUnitId": "ou-direct-air-dirm4-27da25-4z",
      "indoorUnitId": "iu-iu-43749",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-27da25-3z-iu-43748",
      "slug": "direct-air-dirm4-27da25-3z-iu-43748",
      "modelId": "model-direct-air-dirm4-27da25-3z",
      "outdoorUnitId": "ou-direct-air-dirm4-27da25-3z",
      "indoorUnitId": "iu-iu-43748",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-12da25-1z-dirm4-12hp-co",
      "slug": "direct-air-dirm4-12da25-1z-dirm4-12hp-co",
      "modelId": "model-direct-air-dirm4-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-12da25-1z",
      "indoorUnitId": "iu-dirm4-12hp-co",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-27da25-3z-iu-43702",
      "slug": "direct-air-dirm-27da25-3z-iu-43702",
      "modelId": "model-direct-air-dirm-27da25-3z",
      "outdoorUnitId": "ou-direct-air-dirm-27da25-3z",
      "indoorUnitId": "iu-iu-43702",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12da25-1z-dirm-12hp-wm",
      "slug": "direct-air-dirm-12da25-1z-dirm-12hp-wm",
      "modelId": "model-direct-air-dirm-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12da25-1z",
      "indoorUnitId": "iu-dirm-12hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36da25-5z-iu-43754",
      "slug": "direct-air-dirm4-36da25-5z-iu-43754",
      "modelId": "model-direct-air-dirm4-36da25-5z",
      "outdoorUnitId": "ou-direct-air-dirm4-36da25-5z",
      "indoorUnitId": "iu-iu-43754",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36da25-4z-iu-43753",
      "slug": "direct-air-dirm4-36da25-4z-iu-43753",
      "modelId": "model-direct-air-dirm4-36da25-4z",
      "outdoorUnitId": "ou-direct-air-dirm4-36da25-4z",
      "indoorUnitId": "iu-iu-43753",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48da25-6z-iu-43762",
      "slug": "direct-air-dirm4-48da25-6z-iu-43762",
      "modelId": "model-direct-air-dirm4-48da25-6z",
      "outdoorUnitId": "ou-direct-air-dirm4-48da25-6z",
      "indoorUnitId": "iu-iu-43762",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48da25-5z-iu-43761",
      "slug": "direct-air-dirm4-48da25-5z-iu-43761",
      "modelId": "model-direct-air-dirm4-48da25-5z",
      "outdoorUnitId": "ou-direct-air-dirm4-48da25-5z",
      "indoorUnitId": "iu-iu-43761",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-36da25-4z-iu-43705",
      "slug": "direct-air-dirm-36da25-4z-iu-43705",
      "modelId": "model-direct-air-dirm-36da25-4z",
      "outdoorUnitId": "ou-direct-air-dirm-36da25-4z",
      "indoorUnitId": "iu-iu-43705",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12hxpro28-1z-dirm-12hp-co",
      "slug": "direct-air-dirm-12hxpro28-1z-dirm-12hp-co",
      "modelId": "model-direct-air-dirm-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12hxpro28-1z",
      "indoorUnitId": "iu-dirm-12hp-co",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18da25-1z-dirm4-18hp-wm",
      "slug": "direct-air-dirm4-18da25-1z-dirm4-18hp-wm",
      "modelId": "model-direct-air-dirm4-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-18da25-1z",
      "indoorUnitId": "iu-dirm4-18hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18da25-1z-dirm-18hp-wm",
      "slug": "direct-air-dirm-18da25-1z-dirm-18hp-wm",
      "modelId": "model-direct-air-dirm-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18da25-1z",
      "indoorUnitId": "iu-dirm-18hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dir-12hp28-tqo-dir-12hp28-tqi",
      "slug": "direct-air-dir-12hp28-tqo-dir-12hp28-tqi",
      "modelId": "model-direct-air-dir-12hp28-tqo",
      "outdoorUnitId": "ou-direct-air-dir-12hp28-tqo",
      "indoorUnitId": "iu-dir-12hp28-tqi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-48da25-5z-iu-43707",
      "slug": "direct-air-dirm-48da25-5z-iu-43707",
      "modelId": "model-direct-air-dirm-48da25-5z",
      "outdoorUnitId": "ou-direct-air-dirm-48da25-5z",
      "indoorUnitId": "iu-iu-43707",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48hxpro28-6z-iu-43764",
      "slug": "direct-air-dirm4-48hxpro28-6z-iu-43764",
      "modelId": "model-direct-air-dirm4-48hxpro28-6z",
      "outdoorUnitId": "ou-direct-air-dirm4-48hxpro28-6z",
      "indoorUnitId": "iu-iu-43764",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36hxpro28-4z-iu-43755",
      "slug": "direct-air-dirm4-36hxpro28-4z-iu-43755",
      "modelId": "model-direct-air-dirm4-36hxpro28-4z",
      "outdoorUnitId": "ou-direct-air-dirm4-36hxpro28-4z",
      "indoorUnitId": "iu-iu-43755",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-28hxpro28-4z-iu-43751",
      "slug": "direct-air-dirm4-28hxpro28-4z-iu-43751",
      "modelId": "model-direct-air-dirm4-28hxpro28-4z",
      "outdoorUnitId": "ou-direct-air-dirm4-28hxpro28-4z",
      "indoorUnitId": "iu-iu-43751",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-27da25-3z-iu-43747",
      "slug": "direct-air-dirm4-27da25-3z-iu-43747",
      "modelId": "model-direct-air-dirm4-27da25-3z",
      "outdoorUnitId": "ou-direct-air-dirm4-27da25-3z",
      "indoorUnitId": "iu-iu-43747",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-28hxpro28-3z-iu-43750",
      "slug": "direct-air-dirm4-28hxpro28-3z-iu-43750",
      "modelId": "model-direct-air-dirm4-28hxpro28-3z",
      "outdoorUnitId": "ou-direct-air-dirm4-28hxpro28-3z",
      "indoorUnitId": "iu-iu-43750",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48hxpro28-5z-iu-43763",
      "slug": "direct-air-dirm4-48hxpro28-5z-iu-43763",
      "modelId": "model-direct-air-dirm4-48hxpro28-5z",
      "outdoorUnitId": "ou-direct-air-dirm4-48hxpro28-5z",
      "indoorUnitId": "iu-iu-43763",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-28hxpro28-3z-iu-43703",
      "slug": "direct-air-dirm-28hxpro28-3z-iu-43703",
      "modelId": "model-direct-air-dirm-28hxpro28-3z",
      "outdoorUnitId": "ou-direct-air-dirm-28hxpro28-3z",
      "indoorUnitId": "iu-iu-43703",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24da25-1z-dirm4-24hp-wm",
      "slug": "direct-air-dirm4-24da25-1z-dirm4-24hp-wm",
      "modelId": "model-direct-air-dirm4-24da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-24da25-1z",
      "indoorUnitId": "iu-dirm4-24hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18da25-1z-dirm-18hp-cf",
      "slug": "direct-air-dirm-18da25-1z-dirm-18hp-cf",
      "modelId": "model-direct-air-dirm-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18da25-1z",
      "indoorUnitId": "iu-dirm-18hp-cf",
      "minHeatingTempC": -15,
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh4-12hp25-dko-dirh4-12hp25-dki",
      "slug": "direct-air-dirh4-12hp25-dko-dirh4-12hp25-dki",
      "modelId": "model-direct-air-dirh4-12hp25-dko",
      "outdoorUnitId": "ou-direct-air-dirh4-12hp25-dko",
      "indoorUnitId": "iu-dirh4-12hp25-dki",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36hxpro28-5z-iu-43756",
      "slug": "direct-air-dirm4-36hxpro28-5z-iu-43756",
      "modelId": "model-direct-air-dirm4-36hxpro28-5z",
      "outdoorUnitId": "ou-direct-air-dirm4-36hxpro28-5z",
      "indoorUnitId": "iu-iu-43756",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18da25-2z-iu-43687",
      "slug": "direct-air-dirm-18da25-2z-iu-43687",
      "modelId": "model-direct-air-dirm-18da25-2z",
      "outdoorUnitId": "ou-direct-air-dirm-18da25-2z",
      "indoorUnitId": "iu-iu-43687",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12da25-1z-dirm-12hp-co",
      "slug": "direct-air-dirm-12da25-1z-dirm-12hp-co",
      "modelId": "model-direct-air-dirm-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12da25-1z",
      "indoorUnitId": "iu-dirm-12hp-co",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12da25-1z-dirm-12hp-ca",
      "slug": "direct-air-dirm-12da25-1z-dirm-12hp-ca",
      "modelId": "model-direct-air-dirm-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12da25-1z",
      "indoorUnitId": "iu-dirm-12hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-09hxpro28-1z-dirm4-09hp-ca",
      "slug": "direct-air-dirm4-09hxpro28-1z-dirm4-09hp-ca",
      "modelId": "model-direct-air-dirm4-09hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-09hxpro28-1z",
      "indoorUnitId": "iu-dirm4-09hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh-18hp23-dko-dirh-18hp23-dki",
      "slug": "direct-air-dirh-18hp23-dko-dirh-18hp23-dki",
      "modelId": "model-direct-air-dirh-18hp23-dko",
      "outdoorUnitId": "ou-direct-air-dirh-18hp23-dko",
      "indoorUnitId": "iu-dirh-18hp23-dki",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dir-18hp23dko-es-dir-18hp23dki-es",
      "slug": "direct-air-dir-18hp23dko-es-dir-18hp23dki-es",
      "modelId": "model-direct-air-dir-18hp23dko-es",
      "outdoorUnitId": "ou-direct-air-dir-18hp23dko-es",
      "indoorUnitId": "iu-dir-18hp23dki-es",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh4-24hp25-dko-dirh4-24hp25-dki",
      "slug": "direct-air-dirh4-24hp25-dko-dirh4-24hp25-dki",
      "modelId": "model-direct-air-dirh4-24hp25-dko",
      "outdoorUnitId": "ou-direct-air-dirh4-24hp25-dko",
      "indoorUnitId": "iu-dirh4-24hp25-dki",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh3-09hp21-dko-dirh3-09hp21-dki",
      "slug": "direct-air-dirh3-09hp21-dko-dirh3-09hp21-dki",
      "modelId": "model-direct-air-dirh3-09hp21-dko",
      "outdoorUnitId": "ou-direct-air-dirh3-09hp21-dko",
      "indoorUnitId": "iu-dirh3-09hp21-dki",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12hxpro28-1z-dirm-12hp-ca",
      "slug": "direct-air-dirm-12hxpro28-1z-dirm-12hp-ca",
      "modelId": "model-direct-air-dirm-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12hxpro28-1z",
      "indoorUnitId": "iu-dirm-12hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18da25-1z-dirm4-18hp-cf",
      "slug": "direct-air-dirm4-18da25-1z-dirm4-18hp-cf",
      "modelId": "model-direct-air-dirm4-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-18da25-1z",
      "indoorUnitId": "iu-dirm4-18hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-36hxpro28-4z-iu-43706",
      "slug": "direct-air-dirm-36hxpro28-4z-iu-43706",
      "modelId": "model-direct-air-dirm-36hxpro28-4z",
      "outdoorUnitId": "ou-direct-air-dirm-36hxpro28-4z",
      "indoorUnitId": "iu-iu-43706",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-12hxpro28-1z-dirm4-12hp-ca",
      "slug": "direct-air-dirm4-12hxpro28-1z-dirm4-12hp-ca",
      "modelId": "model-direct-air-dirm4-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-12hxpro28-1z",
      "indoorUnitId": "iu-dirm4-12hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-60hxpro28-6z-iu-43771",
      "slug": "direct-air-dirm4-60hxpro28-6z-iu-43771",
      "modelId": "model-direct-air-dirm4-60hxpro28-6z",
      "outdoorUnitId": "ou-direct-air-dirm4-60hxpro28-6z",
      "indoorUnitId": "iu-iu-43771",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh-09hp23-dko-dirh-09hp23-dki",
      "slug": "direct-air-dirh-09hp23-dko-dirh-09hp23-dki",
      "modelId": "model-direct-air-dirh-09hp23-dko",
      "outdoorUnitId": "ou-direct-air-dirh-09hp23-dko",
      "indoorUnitId": "iu-dirh-09hp23-dki",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24da25-1z-dirm-24hp-wm",
      "slug": "direct-air-dirm-24da25-1z-dirm-24hp-wm",
      "modelId": "model-direct-air-dirm-24da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-24da25-1z",
      "indoorUnitId": "iu-dirm-24hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24da25-1z-dirm4-24hp-ca",
      "slug": "direct-air-dirm4-24da25-1z-dirm4-24hp-ca",
      "modelId": "model-direct-air-dirm4-24da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-24da25-1z",
      "indoorUnitId": "iu-dirm4-24hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dir-09hp20dko-es-dir-09hp20dki-es",
      "slug": "direct-air-dir-09hp20dko-es-dir-09hp20dki-es",
      "modelId": "model-direct-air-dir-09hp20dko-es",
      "outdoorUnitId": "ou-direct-air-dir-09hp20dko-es",
      "indoorUnitId": "iu-dir-09hp20dki-es",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dir-09hp22dko-es-dir-09hp22dki-es",
      "slug": "direct-air-dir-09hp22dko-es-dir-09hp22dki-es",
      "modelId": "model-direct-air-dir-09hp22dko-es",
      "outdoorUnitId": "ou-direct-air-dir-09hp22dko-es",
      "indoorUnitId": "iu-dir-09hp22dki-es",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18hxpro28-2z-iu-43693",
      "slug": "direct-air-dirm-18hxpro28-2z-iu-43693",
      "modelId": "model-direct-air-dirm-18hxpro28-2z",
      "outdoorUnitId": "ou-direct-air-dirm-18hxpro28-2z",
      "indoorUnitId": "iu-iu-43693",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-48hxpro28-5z-iu-43708",
      "slug": "direct-air-dirm-48hxpro28-5z-iu-43708",
      "modelId": "model-direct-air-dirm-48hxpro28-5z",
      "outdoorUnitId": "ou-direct-air-dirm-48hxpro28-5z",
      "indoorUnitId": "iu-iu-43708",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-09da25-1z-dirm4-09hp-ca",
      "slug": "direct-air-dirm4-09da25-1z-dirm4-09hp-ca",
      "modelId": "model-direct-air-dirm4-09da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-09da25-1z",
      "indoorUnitId": "iu-dirm4-09hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24da25-1z-dirm-24hp-ca",
      "slug": "direct-air-dirm-24da25-1z-dirm-24hp-ca",
      "modelId": "model-direct-air-dirm-24da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-24da25-1z",
      "indoorUnitId": "iu-dirm-24hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24hxpro28-1z-dirm-24hp-wm",
      "slug": "direct-air-dirm-24hxpro28-1z-dirm-24hp-wm",
      "modelId": "model-direct-air-dirm-24hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-24hxpro28-1z",
      "indoorUnitId": "iu-dirm-24hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18hxpro28-1z-dirm-18hp-wm",
      "slug": "direct-air-dirm-18hxpro28-1z-dirm-18hp-wm",
      "modelId": "model-direct-air-dirm-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18hxpro28-1z",
      "indoorUnitId": "iu-dirm-18hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18hxpro28-1z-dirm4-18hp-wm",
      "slug": "direct-air-dirm4-18hxpro28-1z-dirm4-18hp-wm",
      "modelId": "model-direct-air-dirm4-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-18hxpro28-1z",
      "indoorUnitId": "iu-dirm4-18hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36lchx-1z-dirm4-36hp-ca",
      "slug": "direct-air-dirm4-36lchx-1z-dirm4-36hp-ca",
      "modelId": "model-direct-air-dirm4-36lchx-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-36lchx-1z",
      "indoorUnitId": "iu-dirm4-36hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24da25-1z-dirm-24hp-cf",
      "slug": "direct-air-dirm-24da25-1z-dirm-24hp-cf",
      "modelId": "model-direct-air-dirm-24da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-24da25-1z",
      "indoorUnitId": "iu-dirm-24hp-cf",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-12da25-1z-dirm4-12hp-ca",
      "slug": "direct-air-dirm4-12da25-1z-dirm4-12hp-ca",
      "modelId": "model-direct-air-dirm4-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-12da25-1z",
      "indoorUnitId": "iu-dirm4-12hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24da25-1z-dirm4-24hp-cf",
      "slug": "direct-air-dirm4-24da25-1z-dirm4-24hp-cf",
      "modelId": "model-direct-air-dirm4-24da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-24da25-1z",
      "indoorUnitId": "iu-dirm4-24hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh-12hp23-dko-dirh-12hp23-dki",
      "slug": "direct-air-dirh-12hp23-dko-dirh-12hp23-dki",
      "modelId": "model-direct-air-dirh-12hp23-dko",
      "outdoorUnitId": "ou-direct-air-dirh-12hp23-dko",
      "indoorUnitId": "iu-dirh-12hp23-dki",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh4-18hp25-dko-dirh4-18hp25-dki",
      "slug": "direct-air-dirh4-18hp25-dko-dirh4-18hp25-dki",
      "modelId": "model-direct-air-dirh4-18hp25-dko",
      "outdoorUnitId": "ou-direct-air-dirh4-18hp25-dko",
      "indoorUnitId": "iu-dirh4-18hp25-dki",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24hxpro28-1z-dirm4-24hp-wm",
      "slug": "direct-air-dirm4-24hxpro28-1z-dirm4-24hp-wm",
      "modelId": "model-direct-air-dirm4-24hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-24hxpro28-1z",
      "indoorUnitId": "iu-dirm4-24hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18da25-1z-dirm4-18hp-ca",
      "slug": "direct-air-dirm4-18da25-1z-dirm4-18hp-ca",
      "modelId": "model-direct-air-dirm4-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-18da25-1z",
      "indoorUnitId": "iu-dirm4-18hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24hxpro28-1z-dirm4-24hp-ca",
      "slug": "direct-air-dirm4-24hxpro28-1z-dirm4-24hp-ca",
      "modelId": "model-direct-air-dirm4-24hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-24hxpro28-1z",
      "indoorUnitId": "iu-dirm4-24hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-09hxpro28-1z-dirm-09hp-ca",
      "slug": "direct-air-dirm-09hxpro28-1z-dirm-09hp-ca",
      "modelId": "model-direct-air-dirm-09hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-09hxpro28-1z",
      "indoorUnitId": "iu-dirm-09hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh-24hp23-dko-dirh-24hp23-dki",
      "slug": "direct-air-dirh-24hp23-dko-dirh-24hp23-dki",
      "modelId": "model-direct-air-dirh-24hp23-dko",
      "outdoorUnitId": "ou-direct-air-dirh-24hp23-dko",
      "indoorUnitId": "iu-dirh-24hp23-dki",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24hxpro28-1z-dirm-24hp-ca",
      "slug": "direct-air-dirm-24hxpro28-1z-dirm-24hp-ca",
      "modelId": "model-direct-air-dirm-24hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-24hxpro28-1z",
      "indoorUnitId": "iu-dirm-24hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18da25-1z-dirm-18hp-ca",
      "slug": "direct-air-dirm-18da25-1z-dirm-18hp-ca",
      "modelId": "model-direct-air-dirm-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18da25-1z",
      "indoorUnitId": "iu-dirm-18hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dir-24hp21dko-es-dir-24hp21dki-es",
      "slug": "direct-air-dir-24hp21dko-es-dir-24hp21dki-es",
      "modelId": "model-direct-air-dir-24hp21dko-es",
      "outdoorUnitId": "ou-direct-air-dir-24hp21dko-es",
      "indoorUnitId": "iu-dir-24hp21dki-es",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18hxpro28-1z-dirm-18hp-cf",
      "slug": "direct-air-dirm-18hxpro28-1z-dirm-18hp-cf",
      "modelId": "model-direct-air-dirm-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18hxpro28-1z",
      "indoorUnitId": "iu-dirm-18hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-09hxpro28-1z-dirm4-09hp-du",
      "slug": "direct-air-dirm4-09hxpro28-1z-dirm4-09hp-du",
      "modelId": "model-direct-air-dirm4-09hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-09hxpro28-1z",
      "indoorUnitId": "iu-dirm4-09hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24hxpro28-1z-dirm-24hp-cf",
      "slug": "direct-air-dirm-24hxpro28-1z-dirm-24hp-cf",
      "modelId": "model-direct-air-dirm-24hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-24hxpro28-1z",
      "indoorUnitId": "iu-dirm-24hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30da25-1z-dirm4-30hp-wm",
      "slug": "direct-air-dirm4-30da25-1z-dirm4-30hp-wm",
      "modelId": "model-direct-air-dirm4-30da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-30da25-1z",
      "indoorUnitId": "iu-dirm4-30hp-wm",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-mox430-17hfn1-mt0w-mueu-18hrfn1-mc",
      "slug": "direct-air-mox430-17hfn1-mt0w-mueu-18hrfn1-mc",
      "modelId": "model-direct-air-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-direct-air-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-mueu-18hrfn1-mc",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18hxpro28-1z-dirm4-18hp-cf",
      "slug": "direct-air-dirm4-18hxpro28-1z-dirm4-18hp-cf",
      "modelId": "model-direct-air-dirm4-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-18hxpro28-1z",
      "indoorUnitId": "iu-dirm4-18hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24hxpro28-1z-dirm4-24hp-cf",
      "slug": "direct-air-dirm4-24hxpro28-1z-dirm4-24hp-cf",
      "modelId": "model-direct-air-dirm4-24hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-24hxpro28-1z",
      "indoorUnitId": "iu-dirm4-24hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-09hxpro28-1z-dirm-09hp-duv",
      "slug": "direct-air-dirm-09hxpro28-1z-dirm-09hp-duv",
      "modelId": "model-direct-air-dirm-09hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-09hxpro28-1z",
      "indoorUnitId": "iu-dirm-09hp-duv",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-09hxpro28-1z-dirm-09hp-duh",
      "slug": "direct-air-dirm-09hxpro28-1z-dirm-09hp-duh",
      "modelId": "model-direct-air-dirm-09hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-09hxpro28-1z",
      "indoorUnitId": "iu-dirm-09hp-duh",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18hxpro28-1z-dirm4-18hp-ca",
      "slug": "direct-air-dirm4-18hxpro28-1z-dirm4-18hp-ca",
      "modelId": "model-direct-air-dirm4-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-18hxpro28-1z",
      "indoorUnitId": "iu-dirm4-18hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-12hxpro28-1z-dirm4-12hp-du",
      "slug": "direct-air-dirm4-12hxpro28-1z-dirm4-12hp-du",
      "modelId": "model-direct-air-dirm4-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-12hxpro28-1z",
      "indoorUnitId": "iu-dirm4-12hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18da25-1z-dirm4-18hp-du",
      "slug": "direct-air-dirm4-18da25-1z-dirm4-18hp-du",
      "modelId": "model-direct-air-dirm4-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-18da25-1z",
      "indoorUnitId": "iu-dirm4-18hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36lchx-1z-dirm4-36hp-cf",
      "slug": "direct-air-dirm4-36lchx-1z-dirm4-36hp-cf",
      "modelId": "model-direct-air-dirm4-36lchx-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-36lchx-1z",
      "indoorUnitId": "iu-dirm4-36hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-mox430-17hfn1-mt0w-cca3u-18hrfn1-mc",
      "slug": "direct-air-mox430-17hfn1-mt0w-cca3u-18hrfn1-mc",
      "modelId": "model-direct-air-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-direct-air-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-cca3u-18hrfn1-mc",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh3-18hp21-dko-dirh3-18hp21-dki",
      "slug": "direct-air-dirh3-18hp21-dko-dirh3-18hp21-dki",
      "modelId": "model-direct-air-dirh3-18hp21-dko",
      "outdoorUnitId": "ou-direct-air-dirh3-18hp21-dko",
      "indoorUnitId": "iu-dirh3-18hp21-dki",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-09da25-1z-dirm-09hp-ca",
      "slug": "direct-air-dirm-09da25-1z-dirm-09hp-ca",
      "modelId": "model-direct-air-dirm-09da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-09da25-1z",
      "indoorUnitId": "iu-dirm-09hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36lcda25-1z-dirm4-36hp-ca",
      "slug": "direct-air-dirm4-36lcda25-1z-dirm4-36hp-ca",
      "modelId": "model-direct-air-dirm4-36lcda25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-36lcda25-1z",
      "indoorUnitId": "iu-dirm4-36hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18da25-1z-dirm-18hp-duh",
      "slug": "direct-air-dirm-18da25-1z-dirm-18hp-duh",
      "modelId": "model-direct-air-dirm-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18da25-1z",
      "indoorUnitId": "iu-dirm-18hp-duh",
      "minHeatingTempC": -15,
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18hxpro28-1z-dirm-18hp-ca",
      "slug": "direct-air-dirm-18hxpro28-1z-dirm-18hp-ca",
      "modelId": "model-direct-air-dirm-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18hxpro28-1z",
      "indoorUnitId": "iu-dirm-18hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-30da25-1z-dirm-30hp-wm",
      "slug": "direct-air-dirm-30da25-1z-dirm-30hp-wm",
      "modelId": "model-direct-air-dirm-30da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-30da25-1z",
      "indoorUnitId": "iu-dirm-30hp-wm",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18da25-1z-dirm-18hp-duv",
      "slug": "direct-air-dirm-18da25-1z-dirm-18hp-duv",
      "modelId": "model-direct-air-dirm-18da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18da25-1z",
      "indoorUnitId": "iu-dirm-18hp-duv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48lcda25-1z-dirm4-48hp-cf",
      "slug": "direct-air-dirm4-48lcda25-1z-dirm4-48hp-cf",
      "modelId": "model-direct-air-dirm4-48lcda25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-48lcda25-1z",
      "indoorUnitId": "iu-dirm4-48hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-09da25-1z-dirm4-09hp-du",
      "slug": "direct-air-dirm4-09da25-1z-dirm4-09hp-du",
      "modelId": "model-direct-air-dirm4-09da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-09da25-1z",
      "indoorUnitId": "iu-dirm4-09hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12hxpro28-1z-dirm-12hp-duv",
      "slug": "direct-air-dirm-12hxpro28-1z-dirm-12hp-duv",
      "modelId": "model-direct-air-dirm-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12hxpro28-1z",
      "indoorUnitId": "iu-dirm-12hp-duv",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-12da25-1z-dirm4-12hp-du",
      "slug": "direct-air-dirm4-12da25-1z-dirm4-12hp-du",
      "modelId": "model-direct-air-dirm4-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-12da25-1z",
      "indoorUnitId": "iu-dirm4-12hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12hxpro28-1z-dirm-12hp-duh",
      "slug": "direct-air-dirm-12hxpro28-1z-dirm-12hp-duh",
      "modelId": "model-direct-air-dirm-12hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12hxpro28-1z",
      "indoorUnitId": "iu-dirm-12hp-duh",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-mox430-17hfn1-mt0w-cs11m-18hrfn1-mt0w",
      "slug": "direct-air-mox430-17hfn1-mt0w-cs11m-18hrfn1-mt0w",
      "modelId": "model-direct-air-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-direct-air-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-cs11m-18hrfn1-mt0w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-09da25-1z-dirm-09hp-duh",
      "slug": "direct-air-dirm-09da25-1z-dirm-09hp-duh",
      "modelId": "model-direct-air-dirm-09da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-09da25-1z",
      "indoorUnitId": "iu-dirm-09hp-duh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-09da25-1z-dirm-09hp-duv",
      "slug": "direct-air-dirm-09da25-1z-dirm-09hp-duv",
      "modelId": "model-direct-air-dirm-09da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-09da25-1z",
      "indoorUnitId": "iu-dirm-09hp-duv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24hxpro28-1z-dirm-24hp-du",
      "slug": "direct-air-dirm-24hxpro28-1z-dirm-24hp-du",
      "modelId": "model-direct-air-dirm-24hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-24hxpro28-1z",
      "indoorUnitId": "iu-dirm-24hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12da25-1z-dirm-12hp-duh",
      "slug": "direct-air-dirm-12da25-1z-dirm-12hp-duh",
      "modelId": "model-direct-air-dirm-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12da25-1z",
      "indoorUnitId": "iu-dirm-12hp-duh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48lcda25-1z-dirm4-48hp-ca",
      "slug": "direct-air-dirm4-48lcda25-1z-dirm4-48hp-ca",
      "modelId": "model-direct-air-dirm4-48lcda25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-48lcda25-1z",
      "indoorUnitId": "iu-dirm4-48hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24hxpro28-1z-dirm4-24hp-du",
      "slug": "direct-air-dirm4-24hxpro28-1z-dirm4-24hp-du",
      "modelId": "model-direct-air-dirm4-24hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-24hxpro28-1z",
      "indoorUnitId": "iu-dirm4-24hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18magicpro20-ou-dirm4-18magicpro20-ah",
      "slug": "direct-air-dirm4-18magicpro20-ou-dirm4-18magicpro20-ah",
      "modelId": "model-direct-air-dirm4-18magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-18magicpro20-ou",
      "indoorUnitId": "iu-dirm4-18magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24da25-1z-dirm4-24hp-du",
      "slug": "direct-air-dirm4-24da25-1z-dirm4-24hp-du",
      "modelId": "model-direct-air-dirm4-24da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-24da25-1z",
      "indoorUnitId": "iu-dirm4-24hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24da25-1z-dirm-24hp-du",
      "slug": "direct-air-dirm-24da25-1z-dirm-24hp-du",
      "modelId": "model-direct-air-dirm-24da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-24da25-1z",
      "indoorUnitId": "iu-dirm-24hp-du",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-12da25-1z-dirm-12hp-duv",
      "slug": "direct-air-dirm-12da25-1z-dirm-12hp-duv",
      "modelId": "model-direct-air-dirm-12da25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-12da25-1z",
      "indoorUnitId": "iu-dirm-12hp-duv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-mod30-24hfn1-mu0w-cs11m-23hrfn1-mt0w",
      "slug": "direct-air-mod30-24hfn1-mu0w-cs11m-23hrfn1-mt0w",
      "modelId": "model-direct-air-mod30-24hfn1-mu0w",
      "outdoorUnitId": "ou-direct-air-mod30-24hfn1-mu0w",
      "indoorUnitId": "iu-cs11m-23hrfn1-mt0w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-48lcda25-1z-dirm-48hp-cf",
      "slug": "direct-air-dirm-48lcda25-1z-dirm-48hp-cf",
      "modelId": "model-direct-air-dirm-48lcda25-1z",
      "outdoorUnitId": "ou-direct-air-dirm-48lcda25-1z",
      "indoorUnitId": "iu-dirm-48hp-cf",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18cs19-ou-dirm4-18magicpro20-ah",
      "slug": "direct-air-dirm4-18cs19-ou-dirm4-18magicpro20-ah",
      "modelId": "model-direct-air-dirm4-18cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-18cs19-ou",
      "indoorUnitId": "iu-dirm4-18magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirh-09hp23-dko-115-dirh-09hp23-dki-115",
      "slug": "direct-air-dirh-09hp23-dko-115-dirh-09hp23-dki-115",
      "modelId": "model-direct-air-dirh-09hp23-dko-115",
      "outdoorUnitId": "ou-direct-air-dirh-09hp23-dko-115",
      "indoorUnitId": "iu-dirh-09hp23-dki-115",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48lchx-1z-dirm4-48hp-cf",
      "slug": "direct-air-dirm4-48lchx-1z-dirm4-48hp-cf",
      "modelId": "model-direct-air-dirm4-48lchx-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-48lchx-1z",
      "indoorUnitId": "iu-dirm4-48hp-cf",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18hxpro28-1z-dirm4-18hp-du",
      "slug": "direct-air-dirm4-18hxpro28-1z-dirm4-18hp-du",
      "modelId": "model-direct-air-dirm4-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-18hxpro28-1z",
      "indoorUnitId": "iu-dirm4-18hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24magicpro20-ou-dirm4-24magicpro20-ah",
      "slug": "direct-air-dirm4-24magicpro20-ou-dirm4-24magicpro20-ah",
      "modelId": "model-direct-air-dirm4-24magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-24magicpro20-ou",
      "indoorUnitId": "iu-dirm4-24magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24cs19-ou-dirm4-24magicpro20-ah",
      "slug": "direct-air-dirm4-24cs19-ou-dirm4-24magicpro20-ah",
      "modelId": "model-direct-air-dirm4-24cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-24cs19-ou",
      "indoorUnitId": "iu-dirm4-24magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18magicpro20-ou-dirm-18magicpro20-ah",
      "slug": "direct-air-dirm-18magicpro20-ou-dirm-18magicpro20-ah",
      "modelId": "model-direct-air-dirm-18magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-18magicpro20-ou",
      "indoorUnitId": "iu-dirm-18magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18hxpro28-1z-dirm-18hp-duh",
      "slug": "direct-air-dirm-18hxpro28-1z-dirm-18hp-duh",
      "modelId": "model-direct-air-dirm-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18hxpro28-1z",
      "indoorUnitId": "iu-dirm-18hp-duh",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18hxpro28-1z-dirm-18hp-duv",
      "slug": "direct-air-dirm-18hxpro28-1z-dirm-18hp-duv",
      "modelId": "model-direct-air-dirm-18hxpro28-1z",
      "outdoorUnitId": "ou-direct-air-dirm-18hxpro28-1z",
      "indoorUnitId": "iu-dirm-18hp-duv",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-mox430-17hfn1-mt0w-mtiu-18hwfn1-m",
      "slug": "direct-air-mox430-17hfn1-mt0w-mtiu-18hwfn1-m",
      "modelId": "model-direct-air-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-direct-air-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-mtiu-18hwfn1-m",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48lchx-1z-dirm4-48hp-ca",
      "slug": "direct-air-dirm4-48lchx-1z-dirm4-48hp-ca",
      "modelId": "model-direct-air-dirm4-48lchx-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-48lchx-1z",
      "indoorUnitId": "iu-dirm4-48hp-ca",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24magicpro20-ou-dirm4-2417magicp20-ccoil",
      "slug": "direct-air-dirm4-24magicpro20-ou-dirm4-2417magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-24magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-24magicpro20-ou",
      "indoorUnitId": "iu-dirm4-2417magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24cs19-ou-dirm4-2417magicp20-ccoil",
      "slug": "direct-air-dirm4-24cs19-ou-dirm4-2417magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-24cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-24cs19-ou",
      "indoorUnitId": "iu-dirm4-2417magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36lchx-1z-dirm4-36hp-du",
      "slug": "direct-air-dirm4-36lchx-1z-dirm4-36hp-du",
      "modelId": "model-direct-air-dirm4-36lchx-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-36lchx-1z",
      "indoorUnitId": "iu-dirm4-36hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24magicpro20-ou-dirm-24magicpro20-ah",
      "slug": "direct-air-dirm-24magicpro20-ou-dirm-24magicpro20-ah",
      "modelId": "model-direct-air-dirm-24magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-24magicpro20-ou",
      "indoorUnitId": "iu-dirm-24magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36magicpro20-ou-dirm4-36magicpro20-ah",
      "slug": "direct-air-dirm4-36magicpro20-ou-dirm4-36magicpro20-ah",
      "modelId": "model-direct-air-dirm4-36magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-36magicpro20-ou",
      "indoorUnitId": "iu-dirm4-36magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48lcda25-1z-dirm4-48hp-du",
      "slug": "direct-air-dirm4-48lcda25-1z-dirm4-48hp-du",
      "modelId": "model-direct-air-dirm4-48lcda25-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-48lcda25-1z",
      "indoorUnitId": "iu-dirm4-48hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24cs19-ou-dirm-24magicpro20-ah",
      "slug": "direct-air-dirm-24cs19-ou-dirm-24magicpro20-ah",
      "modelId": "model-direct-air-dirm-24cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm-24cs19-ou",
      "indoorUnitId": "iu-dirm-24magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30magicpro20-ou-dirm4-30magicpro20-ah",
      "slug": "direct-air-dirm4-30magicpro20-ou-dirm4-30magicpro20-ah",
      "modelId": "model-direct-air-dirm4-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-30magicpro20-ou",
      "indoorUnitId": "iu-dirm4-30magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48lchx-1z-dirm4-48hp-du",
      "slug": "direct-air-dirm4-48lchx-1z-dirm4-48hp-du",
      "modelId": "model-direct-air-dirm4-48lchx-1z",
      "outdoorUnitId": "ou-direct-air-dirm4-48lchx-1z",
      "indoorUnitId": "iu-dirm4-48hp-du",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24magicpro20-ou-dirm-24magicpro20-coil",
      "slug": "direct-air-dirm-24magicpro20-ou-dirm-24magicpro20-coil",
      "modelId": "model-direct-air-dirm-24magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-24magicpro20-ou",
      "indoorUnitId": "iu-dirm-24magicpro20-coil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48magicpro20-ou-dirm4-48magicpro20-ah",
      "slug": "direct-air-dirm4-48magicpro20-ou-dirm4-48magicpro20-ah",
      "modelId": "model-direct-air-dirm4-48magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-48magicpro20-ou",
      "indoorUnitId": "iu-dirm4-48magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18cs19-ou-dirm4-2417magicp20-ccoil",
      "slug": "direct-air-dirm4-18cs19-ou-dirm4-2417magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-18cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-18cs19-ou",
      "indoorUnitId": "iu-dirm4-2417magicp20-ccoil",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24magicpro20-ou-dirm-24magicpro20-145-coil",
      "slug": "direct-air-dirm-24magicpro20-ou-dirm-24magicpro20-145-coil",
      "modelId": "model-direct-air-dirm-24magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-24magicpro20-ou",
      "indoorUnitId": "iu-dirm-24magicpro20-145-coil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-36magicpro20-ou1f-dirm-36magicpro20-ah",
      "slug": "direct-air-dirm-36magicpro20-ou1f-dirm-36magicpro20-ah",
      "modelId": "model-direct-air-dirm-36magicpro20-ou1f",
      "outdoorUnitId": "ou-direct-air-dirm-36magicpro20-ou1f",
      "indoorUnitId": "iu-dirm-36magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18magicpro20-ou-dirm4-2417magicp20-ccoil",
      "slug": "direct-air-dirm4-18magicpro20-ou-dirm4-2417magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-18magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-18magicpro20-ou",
      "indoorUnitId": "iu-dirm4-2417magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36magicpro20-ou-dirm4-3617magicp20-ccoil",
      "slug": "direct-air-dirm4-36magicpro20-ou-dirm4-3617magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-36magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-36magicpro20-ou",
      "indoorUnitId": "iu-dirm4-3617magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30cs19-ou-dirm4-3621magicp20-ccoil",
      "slug": "direct-air-dirm4-30cs19-ou-dirm4-3621magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-30cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-30cs19-ou",
      "indoorUnitId": "iu-dirm4-3621magicp20-ccoil",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-30magicpro20-ou-dirm-30magicpro20-ah",
      "slug": "direct-air-dirm-30magicpro20-ou-dirm-30magicpro20-ah",
      "modelId": "model-direct-air-dirm-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-30magicpro20-ou",
      "indoorUnitId": "iu-dirm-30magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-24magicpro20-ou-dirm-24magicpro20-145-coil",
      "slug": "direct-air-dirm-24magicpro20-ou-dirm-24magicpro20-145-coil",
      "modelId": "model-direct-air-dirm-24magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-24magicpro20-ou",
      "indoorUnitId": "iu-dirm-24magicpro20-145-coil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-18magicpro20-ou-dirm-24magicpro20-coil",
      "slug": "direct-air-dirm-18magicpro20-ou-dirm-24magicpro20-coil",
      "modelId": "model-direct-air-dirm-18magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-18magicpro20-ou",
      "indoorUnitId": "iu-dirm-24magicpro20-coil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-18magicpro20-ou-dirm4-2414magicp20-ccoil",
      "slug": "direct-air-dirm4-18magicpro20-ou-dirm4-2414magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-18magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-18magicpro20-ou",
      "indoorUnitId": "iu-dirm4-2414magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36cs19-ou-dirm4-36magicpro20-ah",
      "slug": "direct-air-dirm4-36cs19-ou-dirm4-36magicpro20-ah",
      "modelId": "model-direct-air-dirm4-36cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-36cs19-ou",
      "indoorUnitId": "iu-dirm4-36magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24magicpro20-ou-dirm4-2414magicp20-ccoil",
      "slug": "direct-air-dirm4-24magicpro20-ou-dirm4-2414magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-24magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-24magicpro20-ou",
      "indoorUnitId": "iu-dirm4-2414magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36magicpro20-ou-dirm4-3621magicp20-ccoil",
      "slug": "direct-air-dirm4-36magicpro20-ou-dirm4-3621magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-36magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-36magicpro20-ou",
      "indoorUnitId": "iu-dirm4-3621magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30magicpro20-ou-dirm4-3617magicp20-ccoil",
      "slug": "direct-air-dirm4-30magicpro20-ou-dirm4-3617magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-30magicpro20-ou",
      "indoorUnitId": "iu-dirm4-3617magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30magicpro20-ou-dirm4-4821magicp20-ccoil",
      "slug": "direct-air-dirm4-30magicpro20-ou-dirm4-4821magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-30magicpro20-ou",
      "indoorUnitId": "iu-dirm4-4821magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30magicpro20-ou-dirm4-3621magicp20-ccoil",
      "slug": "direct-air-dirm4-30magicpro20-ou-dirm4-3621magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-30magicpro20-ou",
      "indoorUnitId": "iu-dirm4-3621magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-60magicpro20-ou-dirm4-6021magicp20-ccoil",
      "slug": "direct-air-dirm4-60magicpro20-ou-dirm4-6021magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-60magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-60magicpro20-ou",
      "indoorUnitId": "iu-dirm4-6021magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48cs19-ou-dirm4-48magicpro20-ah",
      "slug": "direct-air-dirm4-48cs19-ou-dirm4-48magicpro20-ah",
      "modelId": "model-direct-air-dirm4-48cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-48cs19-ou",
      "indoorUnitId": "iu-dirm4-48magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-24cs19-ou-dirm4-2414magicp20-ccoil",
      "slug": "direct-air-dirm4-24cs19-ou-dirm4-2414magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-24cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-24cs19-ou",
      "indoorUnitId": "iu-dirm4-2414magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-60magicpro20-ou-dirm4-60magicpro20-ah",
      "slug": "direct-air-dirm4-60magicpro20-ou-dirm4-60magicpro20-ah",
      "modelId": "model-direct-air-dirm4-60magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-60magicpro20-ou",
      "indoorUnitId": "iu-dirm4-60magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-36magicpro20-ou-dirm-36magicpro20-ah",
      "slug": "direct-air-dirm-36magicpro20-ou-dirm-36magicpro20-ah",
      "modelId": "model-direct-air-dirm-36magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-36magicpro20-ou",
      "indoorUnitId": "iu-dirm-36magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48cs19-ou-dirm4-6021magicp20-ccoil",
      "slug": "direct-air-dirm4-48cs19-ou-dirm4-6021magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-48cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-48cs19-ou",
      "indoorUnitId": "iu-dirm4-6021magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.9,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30magicpro20-ou-dirm4-3621magicp20-ccoil",
      "slug": "direct-air-dirm4-30magicpro20-ou-dirm4-3621magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-30magicpro20-ou",
      "indoorUnitId": "iu-dirm4-3621magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30magicpro20-ou-dirm4-3617magicp20-ccoil",
      "slug": "direct-air-dirm4-30magicpro20-ou-dirm4-3617magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-30magicpro20-ou",
      "indoorUnitId": "iu-dirm4-3617magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36magicpro20-ou-dirm4-4821magicp20-ccoil",
      "slug": "direct-air-dirm4-36magicpro20-ou-dirm4-4821magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-36magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-36magicpro20-ou",
      "indoorUnitId": "iu-dirm4-4821magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36magicpro20-ou-dirm4-3621magicp20-ccoil",
      "slug": "direct-air-dirm4-36magicpro20-ou-dirm4-3621magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-36magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-36magicpro20-ou",
      "indoorUnitId": "iu-dirm4-3621magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-48magicpro20-ou-dirm-48magicpro20-ah",
      "slug": "direct-air-dirm-48magicpro20-ou-dirm-48magicpro20-ah",
      "modelId": "model-direct-air-dirm-48magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-48magicpro20-ou",
      "indoorUnitId": "iu-dirm-48magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-60magicpro20-ou-dirm4-6024magicp20-ccoil",
      "slug": "direct-air-dirm4-60magicpro20-ou-dirm4-6024magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-60magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-60magicpro20-ou",
      "indoorUnitId": "iu-dirm4-6024magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-48magicpro20-ou-dirm4-6021magicp20-ccoil",
      "slug": "direct-air-dirm4-48magicpro20-ou-dirm4-6021magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-48magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-48magicpro20-ou",
      "indoorUnitId": "iu-dirm4-6021magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-30magicpro20-ou-dirm-36magicpro20-coil",
      "slug": "direct-air-dirm-30magicpro20-ou-dirm-36magicpro20-coil",
      "modelId": "model-direct-air-dirm-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-30magicpro20-ou",
      "indoorUnitId": "iu-dirm-36magicpro20-coil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-36magicpro20-ou-dirm-36magicpro20-175-coil",
      "slug": "direct-air-dirm-36magicpro20-ou-dirm-36magicpro20-175-coil",
      "modelId": "model-direct-air-dirm-36magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-36magicpro20-ou",
      "indoorUnitId": "iu-dirm-36magicpro20-175-coil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-60cs19-ou-dirm4-6021magicp20-ccoil",
      "slug": "direct-air-dirm4-60cs19-ou-dirm4-6021magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-60cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-60cs19-ou",
      "indoorUnitId": "iu-dirm4-6021magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-36cs19-ou-dirm4-3617magicp20-ccoil",
      "slug": "direct-air-dirm4-36cs19-ou-dirm4-3617magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-36cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-36cs19-ou",
      "indoorUnitId": "iu-dirm4-3617magicp20-ccoil",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-60magicpro20-ou-dirm-60magicpro20-ah",
      "slug": "direct-air-dirm-60magicpro20-ou-dirm-60magicpro20-ah",
      "modelId": "model-direct-air-dirm-60magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-60magicpro20-ou",
      "indoorUnitId": "iu-dirm-60magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-30magicpro20-ou-dirm4-3614magicp20-ccoil",
      "slug": "direct-air-dirm4-30magicpro20-ou-dirm4-3614magicp20-ccoil",
      "modelId": "model-direct-air-dirm4-30magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-30magicpro20-ou",
      "indoorUnitId": "iu-dirm4-3614magicp20-ccoil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm4-60cs19-ou-dirm4-60magicpro20-ah",
      "slug": "direct-air-dirm4-60cs19-ou-dirm4-60magicpro20-ah",
      "modelId": "model-direct-air-dirm4-60cs19-ou",
      "outdoorUnitId": "ou-direct-air-dirm4-60cs19-ou",
      "indoorUnitId": "iu-dirm4-60magicpro20-ah",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-36magicpro20-ou1f-dirm-36magicpro20-coil",
      "slug": "direct-air-dirm-36magicpro20-ou1f-dirm-36magicpro20-coil",
      "modelId": "model-direct-air-dirm-36magicpro20-ou1f",
      "outdoorUnitId": "ou-direct-air-dirm-36magicpro20-ou1f",
      "indoorUnitId": "iu-dirm-36magicpro20-coil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-36magicpro20-ou1f-dirm-36magicpro20-175-coil",
      "slug": "direct-air-dirm-36magicpro20-ou1f-dirm-36magicpro20-175-coil",
      "modelId": "model-direct-air-dirm-36magicpro20-ou1f",
      "outdoorUnitId": "ou-direct-air-dirm-36magicpro20-ou1f",
      "indoorUnitId": "iu-dirm-36magicpro20-175-coil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-36magicpro20-ou-dirm-36magicpro20-coil",
      "slug": "direct-air-dirm-36magicpro20-ou-dirm-36magicpro20-coil",
      "modelId": "model-direct-air-dirm-36magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-36magicpro20-ou",
      "indoorUnitId": "iu-dirm-36magicpro20-coil",
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
          "sourceId": "src-direct-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-direct-air-dirm-60magicpro20-ou-dirm-60magicpro20-coil",
      "slug": "direct-air-dirm-60magicpro20-ou-dirm-60magicpro20-coil",
      "modelId": "model-direct-air-dirm-60magicpro20-ou",
      "outdoorUnitId": "ou-direct-air-dirm-60magicpro20-ou",
      "indoorUnitId": "iu-dirm-60magicpro20-coil",
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
          "sourceId": "src-direct-air-epa",
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
