import type { BrandDataset } from "../../types";

export const brand_haxxairDataset: BrandDataset = {
  "brand": {
    "id": "brand-haxxair",
    "slug": "haxxair",
    "name": "HAXXAIR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour HAXXAIR",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-haxxair-epa",
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
      "id": "series-haxxair-hi-uni",
      "slug": "haxxair-hi-uni",
      "name": "Hi UNI",
      "brandId": "brand-haxxair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi UNI de HAXXAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-haxxair-hi-multi-xtreme",
      "slug": "haxxair-hi-multi-xtreme",
      "name": "Hi MULTI Xtreme",
      "brandId": "brand-haxxair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi MULTI Xtreme de HAXXAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-haxxair-ultra",
      "slug": "haxxair-ultra",
      "name": "Ultra",
      "brandId": "brand-haxxair",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra de HAXXAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-haxxair-hi-ultra-hd",
      "slug": "haxxair-hi-ultra-hd",
      "name": "Hi ULTRA HD",
      "brandId": "brand-haxxair",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi ULTRA HD de HAXXAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-haxxair-ultra-coil",
      "slug": "haxxair-ultra-coil",
      "name": "Ultra-Coil",
      "brandId": "brand-haxxair",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra-Coil de HAXXAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-haxxair-hvhz-09a2u",
      "slug": "haxxair-hvhz-09a2u",
      "name": "HAXXAIR HVHZ-09A2U",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHZ-09A2U",
      "normalizedModelNumber": "hvhz-09a2u",
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
      "id": "model-haxxair-hvhz-12a2u",
      "slug": "haxxair-hvhz-12a2u",
      "name": "HAXXAIR HVHZ-12A2U",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHZ-12A2U",
      "normalizedModelNumber": "hvhz-12a2u",
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
      "id": "model-haxxair-hvhz-15a2u",
      "slug": "haxxair-hvhz-15a2u",
      "name": "HAXXAIR HVHZ-15A2U",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHZ-15A2U",
      "normalizedModelNumber": "hvhz-15a2u",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 15000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-haxxair-hvhz-09v2d",
      "slug": "haxxair-hvhz-09v2d",
      "name": "HAXXAIR HVHZ-09V2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHZ-09V2D",
      "normalizedModelNumber": "hvhz-09v2d",
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
      "id": "model-haxxair-hvhz-12v2d",
      "slug": "haxxair-hvhz-12v2d",
      "name": "HAXXAIR HVHZ-12V2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHZ-12V2D",
      "normalizedModelNumber": "hvhz-12v2d",
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
      "id": "model-haxxair-hvhmz-27v2d",
      "slug": "haxxair-hvhmz-27v2d",
      "name": "HAXXAIR HVHMZ-27V2D",
      "seriesId": "series-haxxair-hi-multi-xtreme",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHMZ-27V2D",
      "normalizedModelNumber": "hvhmz-27v2d",
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
      "id": "model-haxxair-hvh-18t2d",
      "slug": "haxxair-hvh-18t2d",
      "name": "HAXXAIR HVH-18T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVH-18T2D",
      "normalizedModelNumber": "hvh-18t2d",
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
      "id": "model-haxxair-hvhz-24v2d",
      "slug": "haxxair-hvhz-24v2d",
      "name": "HAXXAIR HVHZ-24V2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHZ-24V2D",
      "normalizedModelNumber": "hvhz-24v2d",
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
      "id": "model-haxxair-hvhmz-18v2d",
      "slug": "haxxair-hvhmz-18v2d",
      "name": "HAXXAIR HVHMZ-18V2D",
      "seriesId": "series-haxxair-hi-multi-xtreme",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHMZ-18V2D",
      "normalizedModelNumber": "hvhmz-18v2d",
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
      "id": "model-haxxair-hvhmz-36v2d",
      "slug": "haxxair-hvhmz-36v2d",
      "name": "HAXXAIR HVHMZ-36V2D",
      "seriesId": "series-haxxair-hi-multi-xtreme",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHMZ-36V2D",
      "normalizedModelNumber": "hvhmz-36v2d",
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
      "id": "model-haxxair-hah-09t2d",
      "slug": "haxxair-hah-09t2d",
      "name": "HAXXAIR HAH-09T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HAH-09T2D",
      "normalizedModelNumber": "hah-09t2d",
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
      "id": "model-haxxair-hvh-09t2d",
      "slug": "haxxair-hvh-09t2d",
      "name": "HAXXAIR HVH-09T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVH-09T2D",
      "normalizedModelNumber": "hvh-09t2d",
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
      "id": "model-haxxair-hvhm-24t2d",
      "slug": "haxxair-hvhm-24t2d",
      "name": "HAXXAIR HVHM-24T2D",
      "seriesId": "series-haxxair-hi-multi-xtreme",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHM-24T2D",
      "normalizedModelNumber": "hvhm-24t2d",
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
      "id": "model-haxxair-hvhmz-42v2d",
      "slug": "haxxair-hvhmz-42v2d",
      "name": "HAXXAIR HVHMZ-42V2D",
      "seriesId": "series-haxxair-hi-multi-xtreme",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHMZ-42V2D",
      "normalizedModelNumber": "hvhmz-42v2d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-haxxair-hvhsc-18t2d",
      "slug": "haxxair-hvhsc-18t2d",
      "name": "HAXXAIR HVHSC-18T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHSC-18T2D",
      "normalizedModelNumber": "hvhsc-18t2d",
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
      "id": "model-haxxair-hvhsc-12t2d",
      "slug": "haxxair-hvhsc-12t2d",
      "name": "HAXXAIR HVHSC-12T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHSC-12T2D",
      "normalizedModelNumber": "hvhsc-12t2d",
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
      "id": "model-haxxair-hvhz-18v2d",
      "slug": "haxxair-hvhz-18v2d",
      "name": "HAXXAIR HVHZ-18V2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHZ-18V2D",
      "normalizedModelNumber": "hvhz-18v2d",
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
      "id": "model-haxxair-hvhm-36t2d",
      "slug": "haxxair-hvhm-36t2d",
      "name": "HAXXAIR HVHM-36T2D",
      "seriesId": "series-haxxair-hi-multi-xtreme",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHM-36T2D",
      "normalizedModelNumber": "hvhm-36t2d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-haxxair-hvhm-18t2d",
      "slug": "haxxair-hvhm-18t2d",
      "name": "HAXXAIR HVHM-18T2D",
      "seriesId": "series-haxxair-hi-multi-xtreme",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHM-18T2D",
      "normalizedModelNumber": "hvhm-18t2d",
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
      "id": "model-haxxair-hvh-12t2d",
      "slug": "haxxair-hvh-12t2d",
      "name": "HAXXAIR HVH-12T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVH-12T2D",
      "normalizedModelNumber": "hvh-12t2d",
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
      "id": "model-haxxair-hah-24t2d",
      "slug": "haxxair-hah-24t2d",
      "name": "HAXXAIR HAH-24T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HAH-24T2D",
      "normalizedModelNumber": "hah-24t2d",
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
      "id": "model-haxxair-hvh-24t2d",
      "slug": "haxxair-hvh-24t2d",
      "name": "HAXXAIR HVH-24T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVH-24T2D",
      "normalizedModelNumber": "hvh-24t2d",
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
      "id": "model-haxxair-hvhm-42t2d",
      "slug": "haxxair-hvhm-42t2d",
      "name": "HAXXAIR HVHM-42T2D",
      "seriesId": "series-haxxair-hi-multi-xtreme",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHM-42T2D",
      "normalizedModelNumber": "hvhm-42t2d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-haxxair-hvhdz-24v2d",
      "slug": "haxxair-hvhdz-24v2d",
      "name": "HAXXAIR HVHDZ-24V2D",
      "seriesId": "series-haxxair-ultra",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHDZ-24V2D",
      "normalizedModelNumber": "hvhdz-24v2d",
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
      "id": "model-haxxair-hvhdz-36v2d",
      "slug": "haxxair-hvhdz-36v2d",
      "name": "HAXXAIR HVHDZ-36V2D",
      "seriesId": "series-haxxair-ultra",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHDZ-36V2D",
      "normalizedModelNumber": "hvhdz-36v2d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-haxxair-hvhdz-48v2d",
      "slug": "haxxair-hvhdz-48v2d",
      "name": "HAXXAIR HVHDZ-48V2D",
      "seriesId": "series-haxxair-ultra",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHDZ-48V2D",
      "normalizedModelNumber": "hvhdz-48v2d",
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
      "id": "model-haxxair-hvhdz-60v2d",
      "slug": "haxxair-hvhdz-60v2d",
      "name": "HAXXAIR HVHDZ-60V2D",
      "seriesId": "series-haxxair-ultra",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHDZ-60V2D",
      "normalizedModelNumber": "hvhdz-60v2d",
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
      "id": "model-haxxair-hvhsc-24t2d",
      "slug": "haxxair-hvhsc-24t2d",
      "name": "HAXXAIR HVHSC-24T2D",
      "seriesId": "series-haxxair-hi-uni",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHSC-24T2D",
      "normalizedModelNumber": "hvhsc-24t2d",
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
      "id": "model-haxxair-hvhd-36e2d2",
      "slug": "haxxair-hvhd-36e2d2",
      "name": "HAXXAIR HVHD-36E2D2",
      "seriesId": "series-haxxair-hi-ultra-hd",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHD-36E2D2",
      "normalizedModelNumber": "hvhd-36e2d2",
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
      "id": "model-haxxair-hvhd-48e2d2",
      "slug": "haxxair-hvhd-48e2d2",
      "name": "HAXXAIR HVHD-48E2D2",
      "seriesId": "series-haxxair-hi-ultra-hd",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHD-48E2D2",
      "normalizedModelNumber": "hvhd-48e2d2",
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
      "id": "model-haxxair-hvhd-24e2d2",
      "slug": "haxxair-hvhd-24e2d2",
      "name": "HAXXAIR HVHD-24E2D2",
      "seriesId": "series-haxxair-hi-ultra-hd",
      "brandId": "brand-haxxair",
      "modelNumber": "HVHD-24E2D2",
      "normalizedModelNumber": "hvhd-24e2d2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "ou-haxxair-hvhz-09a2u",
      "modelNumber": "HVHZ-09A2U",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhz-12a2u",
      "modelNumber": "HVHZ-12A2U",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhz-15a2u",
      "modelNumber": "HVHZ-15A2U",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhz-09v2d",
      "modelNumber": "HVHZ-09V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhz-12v2d",
      "modelNumber": "HVHZ-12V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhmz-27v2d",
      "modelNumber": "HVHMZ-27V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvh-18t2d",
      "modelNumber": "HVH-18T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhz-24v2d",
      "modelNumber": "HVHZ-24V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhmz-18v2d",
      "modelNumber": "HVHMZ-18V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhmz-36v2d",
      "modelNumber": "HVHMZ-36V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hah-09t2d",
      "modelNumber": "HAH-09T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvh-09t2d",
      "modelNumber": "HVH-09T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhm-24t2d",
      "modelNumber": "HVHM-24T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhmz-42v2d",
      "modelNumber": "HVHMZ-42V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhsc-18t2d",
      "modelNumber": "HVHSC-18T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhsc-12t2d",
      "modelNumber": "HVHSC-12T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhz-18v2d",
      "modelNumber": "HVHZ-18V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhm-36t2d",
      "modelNumber": "HVHM-36T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhm-18t2d",
      "modelNumber": "HVHM-18T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvh-12t2d",
      "modelNumber": "HVH-12T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hah-24t2d",
      "modelNumber": "HAH-24T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvh-24t2d",
      "modelNumber": "HVH-24T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhm-42t2d",
      "modelNumber": "HVHM-42T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhdz-24v2d",
      "modelNumber": "HVHDZ-24V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhdz-36v2d",
      "modelNumber": "HVHDZ-36V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhdz-48v2d",
      "modelNumber": "HVHDZ-48V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhdz-60v2d",
      "modelNumber": "HVHDZ-60V2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-haxxair-hvhsc-24t2d",
      "modelNumber": "HVHSC-24T2D",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhd-36e2d2",
      "modelNumber": "HVHD-36E2D2",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhd-48e2d2",
      "modelNumber": "HVHD-48E2D2",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-haxxair-hvhd-24e2d2",
      "modelNumber": "HVHD-24E2D2",
      "brandId": "brand-haxxair",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-hahz-09a2u",
      "modelNumber": "HAHZ-09A2U",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahz-12a2u",
      "modelNumber": "HAHZ-12A2U",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahz-15a2u",
      "modelNumber": "HAHZ-15A2U",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahz-09v2d",
      "modelNumber": "HAHZ-09V2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahz-12v2d",
      "modelNumber": "HAHZ-12V2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45479",
      "modelNumber": "IU-45479",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hah-18t2d",
      "modelNumber": "HAH-18T2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahz-24v2d",
      "modelNumber": "HAHZ-24V2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45478",
      "modelNumber": "IU-45478",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45480",
      "modelNumber": "IU-45480",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hvh-09t2d",
      "modelNumber": "HVH-09T2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hah-09t2d",
      "modelNumber": "HAH-09T2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45475",
      "modelNumber": "IU-45475",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45481",
      "modelNumber": "IU-45481",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hah-12t2d",
      "modelNumber": "HAH-12T2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahz-18v2d",
      "modelNumber": "HAHZ-18V2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45476",
      "modelNumber": "IU-45476",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45474",
      "modelNumber": "IU-45474",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hvh-24t2d",
      "modelNumber": "HVH-24T2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahc-18t2d",
      "modelNumber": "HAHC-18T2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahc-12t2d",
      "modelNumber": "HAHC-12T2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hah-24t2d",
      "modelNumber": "HAH-24T2D",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45477",
      "modelNumber": "IU-45477",
      "brandId": "brand-haxxair",
      "type": "wall-single"
    },
    {
      "id": "iu-hahdz-24v2d",
      "modelNumber": "HAHDZ-24V2D",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-hahdz-36v2d",
      "modelNumber": "HAHDZ-36V2D",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-hahdz-48v2d",
      "modelNumber": "HAHDZ-48V2D",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-hahdz-60v2d",
      "modelNumber": "HAHDZ-60V2D",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-hahd-36e2d2",
      "modelNumber": "HAHD-36E2D2",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-hahd-48e2d2",
      "modelNumber": "HAHD-48E2D2",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-hahd-24e2d2",
      "modelNumber": "HAHD-24E2D2",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc49b3j",
      "modelNumber": "DC49B3J",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc37d3j",
      "modelNumber": "DC37D3J",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc61c4j",
      "modelNumber": "DC61C4J",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc31d2j",
      "modelNumber": "DC31D2J",
      "brandId": "brand-haxxair",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-haxxair-hvhz-09a2u-hahz-09a2u",
      "slug": "haxxair-hvhz-09a2u-hahz-09a2u",
      "modelId": "model-haxxair-hvhz-09a2u",
      "outdoorUnitId": "ou-haxxair-hvhz-09a2u",
      "indoorUnitId": "iu-hahz-09a2u",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 32.0,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhz-12a2u-hahz-12a2u",
      "slug": "haxxair-hvhz-12a2u-hahz-12a2u",
      "modelId": "model-haxxair-hvhz-12a2u",
      "outdoorUnitId": "ou-haxxair-hvhz-12a2u",
      "indoorUnitId": "iu-hahz-12a2u",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 30.0,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhz-15a2u-hahz-15a2u",
      "slug": "haxxair-hvhz-15a2u-hahz-15a2u",
      "modelId": "model-haxxair-hvhz-15a2u",
      "outdoorUnitId": "ou-haxxair-hvhz-15a2u",
      "indoorUnitId": "iu-hahz-15a2u",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhz-09v2d-hahz-09v2d",
      "slug": "haxxair-hvhz-09v2d-hahz-09v2d",
      "modelId": "model-haxxair-hvhz-09v2d",
      "outdoorUnitId": "ou-haxxair-hvhz-09v2d",
      "indoorUnitId": "iu-hahz-09v2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhz-12v2d-hahz-12v2d",
      "slug": "haxxair-hvhz-12v2d-hahz-12v2d",
      "modelId": "model-haxxair-hvhz-12v2d",
      "outdoorUnitId": "ou-haxxair-hvhz-12v2d",
      "indoorUnitId": "iu-hahz-12v2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhmz-27v2d-iu-45479",
      "slug": "haxxair-hvhmz-27v2d-iu-45479",
      "modelId": "model-haxxair-hvhmz-27v2d",
      "outdoorUnitId": "ou-haxxair-hvhmz-27v2d",
      "indoorUnitId": "iu-iu-45479",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvh-18t2d-hah-18t2d",
      "slug": "haxxair-hvh-18t2d-hah-18t2d",
      "modelId": "model-haxxair-hvh-18t2d",
      "outdoorUnitId": "ou-haxxair-hvh-18t2d",
      "indoorUnitId": "iu-hah-18t2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhz-24v2d-hahz-24v2d",
      "slug": "haxxair-hvhz-24v2d-hahz-24v2d",
      "modelId": "model-haxxair-hvhz-24v2d",
      "outdoorUnitId": "ou-haxxair-hvhz-24v2d",
      "indoorUnitId": "iu-hahz-24v2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhmz-18v2d-iu-45478",
      "slug": "haxxair-hvhmz-18v2d-iu-45478",
      "modelId": "model-haxxair-hvhmz-18v2d",
      "outdoorUnitId": "ou-haxxair-hvhmz-18v2d",
      "indoorUnitId": "iu-iu-45478",
      "minHeatingTempC": -25,
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhmz-36v2d-iu-45480",
      "slug": "haxxair-hvhmz-36v2d-iu-45480",
      "modelId": "model-haxxair-hvhmz-36v2d",
      "outdoorUnitId": "ou-haxxair-hvhmz-36v2d",
      "indoorUnitId": "iu-iu-45480",
      "minHeatingTempC": -25,
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hah-09t2d-hvh-09t2d",
      "slug": "haxxair-hah-09t2d-hvh-09t2d",
      "modelId": "model-haxxair-hah-09t2d",
      "outdoorUnitId": "ou-haxxair-hah-09t2d",
      "indoorUnitId": "iu-hvh-09t2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvh-09t2d-hah-09t2d",
      "slug": "haxxair-hvh-09t2d-hah-09t2d",
      "modelId": "model-haxxair-hvh-09t2d",
      "outdoorUnitId": "ou-haxxair-hvh-09t2d",
      "indoorUnitId": "iu-hah-09t2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhm-24t2d-iu-45475",
      "slug": "haxxair-hvhm-24t2d-iu-45475",
      "modelId": "model-haxxair-hvhm-24t2d",
      "outdoorUnitId": "ou-haxxair-hvhm-24t2d",
      "indoorUnitId": "iu-iu-45475",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.05,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhmz-42v2d-iu-45481",
      "slug": "haxxair-hvhmz-42v2d-iu-45481",
      "modelId": "model-haxxair-hvhmz-42v2d",
      "outdoorUnitId": "ou-haxxair-hvhmz-42v2d",
      "indoorUnitId": "iu-iu-45481",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhsc-18t2d-hah-18t2d",
      "slug": "haxxair-hvhsc-18t2d-hah-18t2d",
      "modelId": "model-haxxair-hvhsc-18t2d",
      "outdoorUnitId": "ou-haxxair-hvhsc-18t2d",
      "indoorUnitId": "iu-hah-18t2d",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhsc-12t2d-hah-12t2d",
      "slug": "haxxair-hvhsc-12t2d-hah-12t2d",
      "modelId": "model-haxxair-hvhsc-12t2d",
      "outdoorUnitId": "ou-haxxair-hvhsc-12t2d",
      "indoorUnitId": "iu-hah-12t2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhz-18v2d-hahz-18v2d",
      "slug": "haxxair-hvhz-18v2d-hahz-18v2d",
      "modelId": "model-haxxair-hvhz-18v2d",
      "outdoorUnitId": "ou-haxxair-hvhz-18v2d",
      "indoorUnitId": "iu-hahz-18v2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhm-36t2d-iu-45476",
      "slug": "haxxair-hvhm-36t2d-iu-45476",
      "modelId": "model-haxxair-hvhm-36t2d",
      "outdoorUnitId": "ou-haxxair-hvhm-36t2d",
      "indoorUnitId": "iu-iu-45476",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhm-18t2d-iu-45474",
      "slug": "haxxair-hvhm-18t2d-iu-45474",
      "modelId": "model-haxxair-hvhm-18t2d",
      "outdoorUnitId": "ou-haxxair-hvhm-18t2d",
      "indoorUnitId": "iu-iu-45474",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvh-12t2d-hah-12t2d",
      "slug": "haxxair-hvh-12t2d-hah-12t2d",
      "modelId": "model-haxxair-hvh-12t2d",
      "outdoorUnitId": "ou-haxxair-hvh-12t2d",
      "indoorUnitId": "iu-hah-12t2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hah-24t2d-hvh-24t2d",
      "slug": "haxxair-hah-24t2d-hvh-24t2d",
      "modelId": "model-haxxair-hah-24t2d",
      "outdoorUnitId": "ou-haxxair-hah-24t2d",
      "indoorUnitId": "iu-hvh-24t2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhsc-18t2d-hahc-18t2d",
      "slug": "haxxair-hvhsc-18t2d-hahc-18t2d",
      "modelId": "model-haxxair-hvhsc-18t2d",
      "outdoorUnitId": "ou-haxxair-hvhsc-18t2d",
      "indoorUnitId": "iu-hahc-18t2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhsc-12t2d-hahc-12t2d",
      "slug": "haxxair-hvhsc-12t2d-hahc-12t2d",
      "modelId": "model-haxxair-hvhsc-12t2d",
      "outdoorUnitId": "ou-haxxair-hvhsc-12t2d",
      "indoorUnitId": "iu-hahc-12t2d",
      "minHeatingTempC": -25,
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvh-24t2d-hah-24t2d",
      "slug": "haxxair-hvh-24t2d-hah-24t2d",
      "modelId": "model-haxxair-hvh-24t2d",
      "outdoorUnitId": "ou-haxxair-hvh-24t2d",
      "indoorUnitId": "iu-hah-24t2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhm-42t2d-iu-45477",
      "slug": "haxxair-hvhm-42t2d-iu-45477",
      "modelId": "model-haxxair-hvhm-42t2d",
      "outdoorUnitId": "ou-haxxair-hvhm-42t2d",
      "indoorUnitId": "iu-iu-45477",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.95,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhdz-24v2d-hahdz-24v2d",
      "slug": "haxxair-hvhdz-24v2d-hahdz-24v2d",
      "modelId": "model-haxxair-hvhdz-24v2d",
      "outdoorUnitId": "ou-haxxair-hvhdz-24v2d",
      "indoorUnitId": "iu-hahdz-24v2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhdz-36v2d-hahdz-36v2d",
      "slug": "haxxair-hvhdz-36v2d-hahdz-36v2d",
      "modelId": "model-haxxair-hvhdz-36v2d",
      "outdoorUnitId": "ou-haxxair-hvhdz-36v2d",
      "indoorUnitId": "iu-hahdz-36v2d",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhdz-48v2d-hahdz-48v2d",
      "slug": "haxxair-hvhdz-48v2d-hahdz-48v2d",
      "modelId": "model-haxxair-hvhdz-48v2d",
      "outdoorUnitId": "ou-haxxair-hvhdz-48v2d",
      "indoorUnitId": "iu-hahdz-48v2d",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhdz-60v2d-hahdz-60v2d",
      "slug": "haxxair-hvhdz-60v2d-hahdz-60v2d",
      "modelId": "model-haxxair-hvhdz-60v2d",
      "outdoorUnitId": "ou-haxxair-hvhdz-60v2d",
      "indoorUnitId": "iu-hahdz-60v2d",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhsc-24t2d-hah-24t2d",
      "slug": "haxxair-hvhsc-24t2d-hah-24t2d",
      "modelId": "model-haxxair-hvhsc-24t2d",
      "outdoorUnitId": "ou-haxxair-hvhsc-24t2d",
      "indoorUnitId": "iu-hah-24t2d",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhd-36e2d2-hahd-36e2d2",
      "slug": "haxxair-hvhd-36e2d2-hahd-36e2d2",
      "modelId": "model-haxxair-hvhd-36e2d2",
      "outdoorUnitId": "ou-haxxair-hvhd-36e2d2",
      "indoorUnitId": "iu-hahd-36e2d2",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhd-48e2d2-hahd-48e2d2",
      "slug": "haxxair-hvhd-48e2d2-hahd-48e2d2",
      "modelId": "model-haxxair-hvhd-48e2d2",
      "outdoorUnitId": "ou-haxxair-hvhd-48e2d2",
      "indoorUnitId": "iu-hahd-48e2d2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhd-24e2d2-hahd-24e2d2",
      "slug": "haxxair-hvhd-24e2d2-hahd-24e2d2",
      "modelId": "model-haxxair-hvhd-24e2d2",
      "outdoorUnitId": "ou-haxxair-hvhd-24e2d2",
      "indoorUnitId": "iu-hahd-24e2d2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhdz-48v2d-dc49b3j",
      "slug": "haxxair-hvhdz-48v2d-dc49b3j",
      "modelId": "model-haxxair-hvhdz-48v2d",
      "outdoorUnitId": "ou-haxxair-hvhdz-48v2d",
      "indoorUnitId": "iu-dc49b3j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhdz-36v2d-dc37d3j",
      "slug": "haxxair-hvhdz-36v2d-dc37d3j",
      "modelId": "model-haxxair-hvhdz-36v2d",
      "outdoorUnitId": "ou-haxxair-hvhdz-36v2d",
      "indoorUnitId": "iu-dc37d3j",
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
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhdz-60v2d-dc61c4j",
      "slug": "haxxair-hvhdz-60v2d-dc61c4j",
      "modelId": "model-haxxair-hvhdz-60v2d",
      "outdoorUnitId": "ou-haxxair-hvhdz-60v2d",
      "indoorUnitId": "iu-dc61c4j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-haxxair-hvhdz-24v2d-dc31d2j",
      "slug": "haxxair-hvhdz-24v2d-dc31d2j",
      "modelId": "model-haxxair-hvhdz-24v2d",
      "outdoorUnitId": "ou-haxxair-hvhdz-24v2d",
      "indoorUnitId": "iu-dc31d2j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-haxxair-epa",
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
