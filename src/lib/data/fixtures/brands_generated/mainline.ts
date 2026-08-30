import type { BrandDataset } from "../../types";

export const brand_mainlineDataset: BrandDataset = {
  "brand": {
    "id": "brand-mainline",
    "slug": "mainline",
    "name": "MAINLINE",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour MAINLINE",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-mainline-epa",
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
      "id": "series-mainline-ml-series",
      "slug": "mainline-ml-series",
      "name": "ML Series",
      "brandId": "brand-mainline",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ML Series de MAINLINE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mainline-elite",
      "slug": "mainline-elite",
      "name": "Elite",
      "brandId": "brand-mainline",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Elite de MAINLINE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mainline-performance",
      "slug": "mainline-performance",
      "name": "Performance",
      "brandId": "brand-mainline",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Performance de MAINLINE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mainline-classic-plusachiever-plus",
      "slug": "mainline-classic-plusachiever-plus",
      "name": "CLASSIC PLUS/ACHIEVER PLUS",
      "brandId": "brand-mainline",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série CLASSIC PLUS/ACHIEVER PLUS de MAINLINE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mainline-rhpxyc",
      "slug": "mainline-rhpxyc",
      "name": "RHPXYC",
      "brandId": "brand-mainline",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHPXYC de MAINLINE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-mainline-ml06hp230calh-o",
      "slug": "mainline-ml06hp230calh-o",
      "name": "MAINLINE ML06HP230CALH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML06HP230CALH-O",
      "normalizedModelNumber": "ml06hp230calh-o",
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
      "id": "model-mainline-ml09hp230calh-o",
      "slug": "mainline-ml09hp230calh-o",
      "name": "MAINLINE ML09HP230CALH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML09HP230CALH-O",
      "normalizedModelNumber": "ml09hp230calh-o",
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
      "id": "model-mainline-ml12hp230calh-o",
      "slug": "mainline-ml12hp230calh-o",
      "name": "MAINLINE ML12HP230CALH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML12HP230CALH-O",
      "normalizedModelNumber": "ml12hp230calh-o",
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
      "id": "model-mainline-ml09hp230nexh-o",
      "slug": "mainline-ml09hp230nexh-o",
      "name": "MAINLINE ML09HP230NEXH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML09HP230NEXH-O",
      "normalizedModelNumber": "ml09hp230nexh-o",
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
      "id": "model-mainline-ml09hp230nex-o",
      "slug": "mainline-ml09hp230nex-o",
      "name": "MAINLINE ML09HP230NEX-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML09HP230NEX-O",
      "normalizedModelNumber": "ml09hp230nex-o",
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
      "id": "model-mainline-ml18hp230calh-o",
      "slug": "mainline-ml18hp230calh-o",
      "name": "MAINLINE ML18HP230CALH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML18HP230CALH-O",
      "normalizedModelNumber": "ml18hp230calh-o",
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
      "id": "model-mainline-ml06hp230nexh-o",
      "slug": "mainline-ml06hp230nexh-o",
      "name": "MAINLINE ML06HP230NEXH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML06HP230NEXH-O",
      "normalizedModelNumber": "ml06hp230nexh-o",
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
      "id": "model-mainline-ml18hp230mul-o",
      "slug": "mainline-ml18hp230mul-o",
      "name": "MAINLINE ML18HP230MUL - O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML18HP230MUL - O",
      "normalizedModelNumber": "ml18hp230mul - o",
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
      "id": "model-mainline-ml18hp230mulh-o",
      "slug": "mainline-ml18hp230mulh-o",
      "name": "MAINLINE ML18HP230MULH - O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML18HP230MULH - O",
      "normalizedModelNumber": "ml18hp230mulh - o",
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
      "id": "model-mainline-ml27hp230mul-o",
      "slug": "mainline-ml27hp230mul-o",
      "name": "MAINLINE ML27HP230MUL-O*",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML27HP230MUL-O*",
      "normalizedModelNumber": "ml27hp230mul-o*",
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
      "id": "model-mainline-ml12hp230nexh-o",
      "slug": "mainline-ml12hp230nexh-o",
      "name": "MAINLINE ML12HP230NEXH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML12HP230NEXH-O",
      "normalizedModelNumber": "ml12hp230nexh-o",
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
      "id": "model-mainline-ml12hp230nex-o",
      "slug": "mainline-ml12hp230nex-o",
      "name": "MAINLINE ML12HP230NEX-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML12HP230NEX-O",
      "normalizedModelNumber": "ml12hp230nex-o",
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
      "id": "model-mainline-ml48hp230mul-o",
      "slug": "mainline-ml48hp230mul-o",
      "name": "MAINLINE ML48HP230MUL - O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML48HP230MUL - O",
      "normalizedModelNumber": "ml48hp230mul - o",
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
      "id": "model-mainline-ml18hp230nex-o",
      "slug": "mainline-ml18hp230nex-o",
      "name": "MAINLINE ML18HP230NEX-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML18HP230NEX-O",
      "normalizedModelNumber": "ml18hp230nex-o",
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
      "id": "model-mainline-ml36hp230mul-o",
      "slug": "mainline-ml36hp230mul-o",
      "name": "MAINLINE ML36HP230MUL - O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML36HP230MUL - O",
      "normalizedModelNumber": "ml36hp230mul - o",
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
      "id": "model-mainline-ml24hp230nex-o",
      "slug": "mainline-ml24hp230nex-o",
      "name": "MAINLINE ML24HP230NEX-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML24HP230NEX-O",
      "normalizedModelNumber": "ml24hp230nex-o",
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
      "id": "model-mainline-ml12hp115nex-o",
      "slug": "mainline-ml12hp115nex-o",
      "name": "MAINLINE ML12HP115NEX-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML12HP115NEX-O",
      "normalizedModelNumber": "ml12hp115nex-o",
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
      "id": "model-mainline-ml36hp230mulh-o",
      "slug": "mainline-ml36hp230mulh-o",
      "name": "MAINLINE ML36HP230MULH - O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML36HP230MULH - O",
      "normalizedModelNumber": "ml36hp230mulh - o",
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
      "id": "model-mainline-ml27hp230mulh-o",
      "slug": "mainline-ml27hp230mulh-o",
      "name": "MAINLINE ML27HP230MULH-O*",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML27HP230MULH-O*",
      "normalizedModelNumber": "ml27hp230mulh-o*",
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
      "id": "model-mainline-ml48hp230mulh-o",
      "slug": "mainline-ml48hp230mulh-o",
      "name": "MAINLINE ML48HP230MULH-O*",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML48HP230MULH-O*",
      "normalizedModelNumber": "ml48hp230mulh-o*",
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
      "id": "model-mainline-ml15hp230nexh-o",
      "slug": "mainline-ml15hp230nexh-o",
      "name": "MAINLINE ML15HP230NEXH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML15HP230NEXH-O",
      "normalizedModelNumber": "ml15hp230nexh-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 15500,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-mainline-ml24hp230nexh-o",
      "slug": "mainline-ml24hp230nexh-o",
      "name": "MAINLINE ML24HP230NEXH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML24HP230NEXH-O",
      "normalizedModelNumber": "ml24hp230nexh-o",
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
      "id": "model-mainline-ml55hp230mulh-o",
      "slug": "mainline-ml55hp230mulh-o",
      "name": "MAINLINE ML55HP230MULH-O*",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML55HP230MULH-O*",
      "normalizedModelNumber": "ml55hp230mulh-o*",
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
      "id": "model-mainline-ml18hp230nexh-o",
      "slug": "mainline-ml18hp230nexh-o",
      "name": "MAINLINE ML18HP230NEXH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML18HP230NEXH-O",
      "normalizedModelNumber": "ml18hp230nexh-o",
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
      "id": "model-mainline-ml09hp115gen-o",
      "slug": "mainline-ml09hp115gen-o",
      "name": "MAINLINE ML09HP115GEN-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML09HP115GEN-O",
      "normalizedModelNumber": "ml09hp115gen-o",
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
      "id": "model-mainline-ml12hp230gen-o",
      "slug": "mainline-ml12hp230gen-o",
      "name": "MAINLINE ML12HP230GEN-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML12HP230GEN-O",
      "normalizedModelNumber": "ml12hp230gen-o",
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
      "id": "model-mainline-ml36hp230lcmh-o",
      "slug": "mainline-ml36hp230lcmh-o",
      "name": "MAINLINE ML36HP230LCMH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML36HP230LCMH-O",
      "normalizedModelNumber": "ml36hp230lcmh-o",
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
      "id": "model-mainline-ml09hp230gen-o",
      "slug": "mainline-ml09hp230gen-o",
      "name": "MAINLINE ML09HP230GEN-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML09HP230GEN-O",
      "normalizedModelNumber": "ml09hp230gen-o",
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
      "id": "model-mainline-ml24hp230calh-o",
      "slug": "mainline-ml24hp230calh-o",
      "name": "MAINLINE ML24HP230CALH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML24HP230CALH-O",
      "normalizedModelNumber": "ml24hp230calh-o",
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
      "id": "model-mainline-ml30hp230gen-o",
      "slug": "mainline-ml30hp230gen-o",
      "name": "MAINLINE ML30HP230GEN-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML30HP230GEN-O",
      "normalizedModelNumber": "ml30hp230gen-o",
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
      "id": "model-mainline-ml33hp230nexh-o",
      "slug": "mainline-ml33hp230nexh-o",
      "name": "MAINLINE ML33HP230NEXH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML33HP230NEXH-O",
      "normalizedModelNumber": "ml33hp230nexh-o",
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
      "id": "model-mainline-ml36hp230lcm-o",
      "slug": "mainline-ml36hp230lcm-o",
      "name": "MAINLINE ML36HP230LCM-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML36HP230LCM-O",
      "normalizedModelNumber": "ml36hp230lcm-o",
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
      "id": "model-mainline-ml48hp230lcm-o",
      "slug": "mainline-ml48hp230lcm-o",
      "name": "MAINLINE ML48HP230LCM-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML48HP230LCM-O",
      "normalizedModelNumber": "ml48hp230lcm-o",
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
      "id": "model-mainline-ml33hp230calh-o",
      "slug": "mainline-ml33hp230calh-o",
      "name": "MAINLINE ML33HP230CALH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML33HP230CALH-O",
      "normalizedModelNumber": "ml33hp230calh-o",
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
      "id": "model-mainline-ml18hp230lmnth-o",
      "slug": "mainline-ml18hp230lmnth-o",
      "name": "MAINLINE ML18HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML18HP230LMNTH-O",
      "normalizedModelNumber": "ml18hp230lmnth-o",
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
      "id": "model-mainline-ml18hp230gen-o",
      "slug": "mainline-ml18hp230gen-o",
      "name": "MAINLINE ML18HP230GEN-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML18HP230GEN-O",
      "normalizedModelNumber": "ml18hp230gen-o",
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
      "id": "model-mainline-ml09hp230win-o",
      "slug": "mainline-ml09hp230win-o",
      "name": "MAINLINE ML09HP230WIN-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML09HP230WIN-O",
      "normalizedModelNumber": "ml09hp230win-o",
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
      "id": "model-mainline-ml18hp230lmnt-o",
      "slug": "mainline-ml18hp230lmnt-o",
      "name": "MAINLINE ML18HP230LMNT-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML18HP230LMNT-O",
      "normalizedModelNumber": "ml18hp230lmnt-o",
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
      "id": "model-mainline-ml24hp230gen-o",
      "slug": "mainline-ml24hp230gen-o",
      "name": "MAINLINE ML24HP230GEN-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML24HP230GEN-O",
      "normalizedModelNumber": "ml24hp230gen-o",
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
      "id": "model-mainline-ml24hp230lmnth-o",
      "slug": "mainline-ml24hp230lmnth-o",
      "name": "MAINLINE ML24HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML24HP230LMNTH-O",
      "normalizedModelNumber": "ml24hp230lmnth-o",
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
      "id": "model-mainline-ml30hp230lmnt-o",
      "slug": "mainline-ml30hp230lmnt-o",
      "name": "MAINLINE ML30HP230LMNT-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML30HP230LMNT-O",
      "normalizedModelNumber": "ml30hp230lmnt-o",
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
      "id": "model-mainline-ml48hp230lcmh-o",
      "slug": "mainline-ml48hp230lcmh-o",
      "name": "MAINLINE ML48HP230LCMH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML48HP230LCMH-O",
      "normalizedModelNumber": "ml48hp230lcmh-o",
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
      "id": "model-mainline-ml24hp230lmnt-o",
      "slug": "mainline-ml24hp230lmnt-o",
      "name": "MAINLINE ML24HP230LMNT-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML24HP230LMNT-O",
      "normalizedModelNumber": "ml24hp230lmnt-o",
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
      "id": "model-mainline-ml36hp230lmnth-o",
      "slug": "mainline-ml36hp230lmnth-o",
      "name": "MAINLINE ML36HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML36HP230LMNTH-O",
      "normalizedModelNumber": "ml36hp230lmnth-o",
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
      "id": "model-mainline-ml60hp230lcmh-o",
      "slug": "mainline-ml60hp230lcmh-o",
      "name": "MAINLINE ML60HP230LCMH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML60HP230LCMH-O",
      "normalizedModelNumber": "ml60hp230lcmh-o",
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
      "id": "model-mainline-ml33hp230lmnth-o",
      "slug": "mainline-ml33hp230lmnth-o",
      "name": "MAINLINE ML33HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML33HP230LMNTH-O",
      "normalizedModelNumber": "ml33hp230lmnth-o",
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
      "id": "model-mainline-ml60hp230lmnth-o",
      "slug": "mainline-ml60hp230lmnth-o",
      "name": "MAINLINE ML60HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML60HP230LMNTH-O",
      "normalizedModelNumber": "ml60hp230lmnth-o",
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
      "id": "model-mainline-ml48hp230lmnth-o",
      "slug": "mainline-ml48hp230lmnth-o",
      "name": "MAINLINE ML48HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML48HP230LMNTH-O",
      "normalizedModelNumber": "ml48hp230lmnth-o",
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
      "id": "model-mainline-ml30hp230lmnth-o",
      "slug": "mainline-ml30hp230lmnth-o",
      "name": "MAINLINE ML30HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML30HP230LMNTH-O",
      "normalizedModelNumber": "ml30hp230lmnth-o",
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
      "id": "model-mainline-ml24hp230win-o",
      "slug": "mainline-ml24hp230win-o",
      "name": "MAINLINE ML24HP230WIN-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML24HP230WIN-O",
      "normalizedModelNumber": "ml24hp230win-o",
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
      "id": "model-mainline-ml42hp230lmnth-o",
      "slug": "mainline-ml42hp230lmnth-o",
      "name": "MAINLINE ML42HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML42HP230LMNTH-O",
      "normalizedModelNumber": "ml42hp230lmnth-o",
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
      "id": "model-mainline-ml36hp230lmnt-o",
      "slug": "mainline-ml36hp230lmnt-o",
      "name": "MAINLINE ML36HP230LMNT-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML36HP230LMNT-O",
      "normalizedModelNumber": "ml36hp230lmnt-o",
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
      "id": "model-mainline-ml50hp230lmnth-o",
      "slug": "mainline-ml50hp230lmnth-o",
      "name": "MAINLINE ML50HP230LMNTH-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML50HP230LMNTH-O",
      "normalizedModelNumber": "ml50hp230lmnth-o",
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
      "id": "model-mainline-mlp15az18aj2n",
      "slug": "mainline-mlp15az18aj2n",
      "name": "MAINLINE MLP15AZ18AJ2N",
      "seriesId": "series-mainline-elite",
      "brandId": "brand-mainline",
      "modelNumber": "MLP15AZ18AJ2N",
      "normalizedModelNumber": "mlp15az18aj2n",
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
      "id": "model-mainline-mpp15az60aj2n",
      "slug": "mainline-mpp15az60aj2n",
      "name": "MAINLINE MPP15AZ60AJ2N",
      "seriesId": "series-mainline-performance",
      "brandId": "brand-mainline",
      "modelNumber": "MPP15AZ60AJ2N",
      "normalizedModelNumber": "mpp15az60aj2n",
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
      "id": "model-mainline-mlp15az60aj2n",
      "slug": "mainline-mlp15az60aj2n",
      "name": "MAINLINE MLP15AZ60AJ2N",
      "seriesId": "series-mainline-elite",
      "brandId": "brand-mainline",
      "modelNumber": "MLP15AZ60AJ2N",
      "normalizedModelNumber": "mlp15az60aj2n",
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
      "id": "model-mainline-mlp15az30aj2n",
      "slug": "mainline-mlp15az30aj2n",
      "name": "MAINLINE MLP15AZ30AJ2N",
      "seriesId": "series-mainline-elite",
      "brandId": "brand-mainline",
      "modelNumber": "MLP15AZ30AJ2N",
      "normalizedModelNumber": "mlp15az30aj2n",
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
      "id": "model-mainline-mlp15az24aj2n",
      "slug": "mainline-mlp15az24aj2n",
      "name": "MAINLINE MLP15AZ24AJ2N",
      "seriesId": "series-mainline-elite",
      "brandId": "brand-mainline",
      "modelNumber": "MLP15AZ24AJ2N",
      "normalizedModelNumber": "mlp15az24aj2n",
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
      "id": "model-mainline-ml48hp230lmnt-o",
      "slug": "mainline-ml48hp230lmnt-o",
      "name": "MAINLINE ML48HP230LMNT-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML48HP230LMNT-O",
      "normalizedModelNumber": "ml48hp230lmnt-o",
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
      "id": "model-mainline-mlp15az36aj2n",
      "slug": "mainline-mlp15az36aj2n",
      "name": "MAINLINE MLP15AZ36AJ2N",
      "seriesId": "series-mainline-classic-plusachiever-plus",
      "brandId": "brand-mainline",
      "modelNumber": "MLP15AZ36AJ2N",
      "normalizedModelNumber": "mlp15az36aj2n",
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
      "id": "model-mainline-rhpxyc060ajt",
      "slug": "mainline-rhpxyc060ajt",
      "name": "MAINLINE RHPXYC060AJT",
      "seriesId": "series-mainline-rhpxyc",
      "brandId": "brand-mainline",
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
    },
    {
      "id": "model-mainline-rhpxyc024ajt",
      "slug": "mainline-rhpxyc024ajt",
      "name": "MAINLINE RHPXYC024AJT",
      "seriesId": "series-mainline-rhpxyc",
      "brandId": "brand-mainline",
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
      "id": "model-mainline-rhpxyc036ajt",
      "slug": "mainline-rhpxyc036ajt",
      "name": "MAINLINE RHPXYC036AJT",
      "seriesId": "series-mainline-rhpxyc",
      "brandId": "brand-mainline",
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
      "id": "model-mainline-rhpxyc048ajt",
      "slug": "mainline-rhpxyc048ajt",
      "name": "MAINLINE RHPXYC048AJT",
      "seriesId": "series-mainline-rhpxyc",
      "brandId": "brand-mainline",
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
      "id": "model-mainline-ml60hp230lmnt-o",
      "slug": "mainline-ml60hp230lmnt-o",
      "name": "MAINLINE ML60HP230LMNT-O",
      "seriesId": "series-mainline-ml-series",
      "brandId": "brand-mainline",
      "modelNumber": "ML60HP230LMNT-O",
      "normalizedModelNumber": "ml60hp230lmnt-o",
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
      "id": "model-mainline-mpp15az18aj2n",
      "slug": "mainline-mpp15az18aj2n",
      "name": "MAINLINE MPP15AZ18AJ2N",
      "seriesId": "series-mainline-performance",
      "brandId": "brand-mainline",
      "modelNumber": "MPP15AZ18AJ2N",
      "normalizedModelNumber": "mpp15az18aj2n",
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
      "id": "model-mainline-mpp15az24aj2n",
      "slug": "mainline-mpp15az24aj2n",
      "name": "MAINLINE MPP15AZ24AJ2N",
      "seriesId": "series-mainline-performance",
      "brandId": "brand-mainline",
      "modelNumber": "MPP15AZ24AJ2N",
      "normalizedModelNumber": "mpp15az24aj2n",
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
      "id": "model-mainline-mpp15az36aj2n",
      "slug": "mainline-mpp15az36aj2n",
      "name": "MAINLINE MPP15AZ36AJ2N",
      "seriesId": "series-mainline-performance",
      "brandId": "brand-mainline",
      "modelNumber": "MPP15AZ36AJ2N",
      "normalizedModelNumber": "mpp15az36aj2n",
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
      "id": "model-mainline-mpp15az42aj2n",
      "slug": "mainline-mpp15az42aj2n",
      "name": "MAINLINE MPP15AZ42AJ2N",
      "seriesId": "series-mainline-performance",
      "brandId": "brand-mainline",
      "modelNumber": "MPP15AZ42AJ2N",
      "normalizedModelNumber": "mpp15az42aj2n",
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
      "id": "model-mainline-mlp15az48aj2n",
      "slug": "mainline-mlp15az48aj2n",
      "name": "MAINLINE MLP15AZ48AJ2N",
      "seriesId": "series-mainline-elite",
      "brandId": "brand-mainline",
      "modelNumber": "MLP15AZ48AJ2N",
      "normalizedModelNumber": "mlp15az48aj2n",
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
      "id": "model-mainline-mpp15az48aj2n",
      "slug": "mainline-mpp15az48aj2n",
      "name": "MAINLINE MPP15AZ48AJ2N",
      "seriesId": "series-mainline-performance",
      "brandId": "brand-mainline",
      "modelNumber": "MPP15AZ48AJ2N",
      "normalizedModelNumber": "mpp15az48aj2n",
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
      "id": "model-mainline-mlp15az42aj2n",
      "slug": "mainline-mlp15az42aj2n",
      "name": "MAINLINE MLP15AZ42AJ2N",
      "seriesId": "series-mainline-elite",
      "brandId": "brand-mainline",
      "modelNumber": "MLP15AZ42AJ2N",
      "normalizedModelNumber": "mlp15az42aj2n",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-mainline-ml06hp230calh-o",
      "modelNumber": "ML06HP230CALH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml09hp230calh-o",
      "modelNumber": "ML09HP230CALH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml12hp230calh-o",
      "modelNumber": "ML12HP230CALH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml09hp230nexh-o",
      "modelNumber": "ML09HP230NEXH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml09hp230nex-o",
      "modelNumber": "ML09HP230NEX-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml18hp230calh-o",
      "modelNumber": "ML18HP230CALH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml06hp230nexh-o",
      "modelNumber": "ML06HP230NEXH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml18hp230mul-o",
      "modelNumber": "ML18HP230MUL - O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml18hp230mulh-o",
      "modelNumber": "ML18HP230MULH - O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml27hp230mul-o",
      "modelNumber": "ML27HP230MUL-O*",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml12hp230nexh-o",
      "modelNumber": "ML12HP230NEXH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml12hp230nex-o",
      "modelNumber": "ML12HP230NEX-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml48hp230mul-o",
      "modelNumber": "ML48HP230MUL - O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml18hp230nex-o",
      "modelNumber": "ML18HP230NEX-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml36hp230mul-o",
      "modelNumber": "ML36HP230MUL - O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml24hp230nex-o",
      "modelNumber": "ML24HP230NEX-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml12hp115nex-o",
      "modelNumber": "ML12HP115NEX-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml36hp230mulh-o",
      "modelNumber": "ML36HP230MULH - O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml27hp230mulh-o",
      "modelNumber": "ML27HP230MULH-O*",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml48hp230mulh-o",
      "modelNumber": "ML48HP230MULH-O*",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml15hp230nexh-o",
      "modelNumber": "ML15HP230NEXH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml24hp230nexh-o",
      "modelNumber": "ML24HP230NEXH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml55hp230mulh-o",
      "modelNumber": "ML55HP230MULH-O*",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml18hp230nexh-o",
      "modelNumber": "ML18HP230NEXH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml09hp115gen-o",
      "modelNumber": "ML09HP115GEN-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml12hp230gen-o",
      "modelNumber": "ML12HP230GEN-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml36hp230lcmh-o",
      "modelNumber": "ML36HP230LCMH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml09hp230gen-o",
      "modelNumber": "ML09HP230GEN-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml24hp230calh-o",
      "modelNumber": "ML24HP230CALH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml30hp230gen-o",
      "modelNumber": "ML30HP230GEN-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml33hp230nexh-o",
      "modelNumber": "ML33HP230NEXH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml36hp230lcm-o",
      "modelNumber": "ML36HP230LCM-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml48hp230lcm-o",
      "modelNumber": "ML48HP230LCM-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml33hp230calh-o",
      "modelNumber": "ML33HP230CALH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml18hp230lmnth-o",
      "modelNumber": "ML18HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml18hp230gen-o",
      "modelNumber": "ML18HP230GEN-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml09hp230win-o",
      "modelNumber": "ML09HP230WIN-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml18hp230lmnt-o",
      "modelNumber": "ML18HP230LMNT-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml24hp230gen-o",
      "modelNumber": "ML24HP230GEN-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml24hp230lmnth-o",
      "modelNumber": "ML24HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml30hp230lmnt-o",
      "modelNumber": "ML30HP230LMNT-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml48hp230lcmh-o",
      "modelNumber": "ML48HP230LCMH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml24hp230lmnt-o",
      "modelNumber": "ML24HP230LMNT-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml36hp230lmnth-o",
      "modelNumber": "ML36HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml60hp230lcmh-o",
      "modelNumber": "ML60HP230LCMH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml33hp230lmnth-o",
      "modelNumber": "ML33HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml60hp230lmnth-o",
      "modelNumber": "ML60HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml48hp230lmnth-o",
      "modelNumber": "ML48HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml30hp230lmnth-o",
      "modelNumber": "ML30HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml24hp230win-o",
      "modelNumber": "ML24HP230WIN-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml42hp230lmnth-o",
      "modelNumber": "ML42HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml36hp230lmnt-o",
      "modelNumber": "ML36HP230LMNT-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml50hp230lmnth-o",
      "modelNumber": "ML50HP230LMNTH-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-mlp15az18aj2n",
      "modelNumber": "MLP15AZ18AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mpp15az60aj2n",
      "modelNumber": "MPP15AZ60AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mlp15az60aj2n",
      "modelNumber": "MLP15AZ60AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mlp15az30aj2n",
      "modelNumber": "MLP15AZ30AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mlp15az24aj2n",
      "modelNumber": "MLP15AZ24AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-ml48hp230lmnt-o",
      "modelNumber": "ML48HP230LMNT-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-mlp15az36aj2n",
      "modelNumber": "MLP15AZ36AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-rhpxyc060ajt",
      "modelNumber": "RHPXYC060AJT",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-rhpxyc024ajt",
      "modelNumber": "RHPXYC024AJT",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-rhpxyc036ajt",
      "modelNumber": "RHPXYC036AJT",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-rhpxyc048ajt",
      "modelNumber": "RHPXYC048AJT",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-ml60hp230lmnt-o",
      "modelNumber": "ML60HP230LMNT-O",
      "brandId": "brand-mainline",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mainline-mpp15az18aj2n",
      "modelNumber": "MPP15AZ18AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mpp15az24aj2n",
      "modelNumber": "MPP15AZ24AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mpp15az36aj2n",
      "modelNumber": "MPP15AZ36AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mpp15az42aj2n",
      "modelNumber": "MPP15AZ42AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mlp15az48aj2n",
      "modelNumber": "MLP15AZ48AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mpp15az48aj2n",
      "modelNumber": "MPP15AZ48AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mainline-mlp15az42aj2n",
      "modelNumber": "MLP15AZ42AJ2N",
      "brandId": "brand-mainline",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ml06hp230calh-i",
      "modelNumber": "ML06HP230CALH-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp230calh-i",
      "modelNumber": "ML09HP230CALH-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp230calh-i",
      "modelNumber": "ML12HP230CALH-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp230con-i",
      "modelNumber": "ML09HP230CON-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp230nex-i",
      "modelNumber": "ML09HP230NEX-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230calh-i",
      "modelNumber": "ML18HP230CALH-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml06hp230nex-i",
      "modelNumber": "ML06HP230NEX-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47767",
      "modelNumber": "IU-47767",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47769",
      "modelNumber": "IU-47769",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47770",
      "modelNumber": "IU-47770",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47772",
      "modelNumber": "IU-47772",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47825",
      "modelNumber": "IU-47825",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp230con-i",
      "modelNumber": "ML12HP230CON-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47823",
      "modelNumber": "IU-47823",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47858",
      "modelNumber": "IU-47858",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47860",
      "modelNumber": "IU-47860",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230nex-i",
      "modelNumber": "ML18HP230NEX-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp2301wycas-i",
      "modelNumber": "ML09HP2301WYCAS-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47840",
      "modelNumber": "IU-47840",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47842",
      "modelNumber": "IU-47842",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp230nex-i",
      "modelNumber": "ML12HP230NEX-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml16hp230con-i",
      "modelNumber": "ML16HP230CON-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml24hp230nex-i",
      "modelNumber": "ML24HP230NEX-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp115nex-i",
      "modelNumber": "ML12HP115NEX-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47841",
      "modelNumber": "IU-47841",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47824",
      "modelNumber": "IU-47824",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47843",
      "modelNumber": "IU-47843",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47768",
      "modelNumber": "IU-47768",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp2301wycas-i",
      "modelNumber": "ML12HP2301WYCAS-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47828",
      "modelNumber": "IU-47828",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47826",
      "modelNumber": "IU-47826",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47845",
      "modelNumber": "IU-47845",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47863",
      "modelNumber": "IU-47863",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47861",
      "modelNumber": "IU-47861",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml15hp230nex-i",
      "modelNumber": "ML15HP230NEX-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp230stdcas-i",
      "modelNumber": "ML09HP230STDCAS-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230flo-i",
      "modelNumber": "ML18HP230FLO-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47866",
      "modelNumber": "IU-47866",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp2301wycas-i",
      "modelNumber": "ML18HP2301WYCAS-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47864",
      "modelNumber": "IU-47864",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp230stdcas-i",
      "modelNumber": "ML12HP230STDCAS-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml24hp230stdcas-i",
      "modelNumber": "ML24HP230STDCAS-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml06hp2301wycas-i",
      "modelNumber": "ML06HP2301WYCAS-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47844",
      "modelNumber": "IU-47844",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp115gen-i",
      "modelNumber": "ML09HP115GEN-I**",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47865",
      "modelNumber": "IU-47865",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp230lsduc-i",
      "modelNumber": "ML09HP230LSDUC-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml06hp230lsduc-i",
      "modelNumber": "ML06HP230LSDUC-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47859",
      "modelNumber": "IU-47859",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp230gen-i",
      "modelNumber": "ML12HP230GEN-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47862",
      "modelNumber": "IU-47862",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml36hp230stdcas-i",
      "modelNumber": "ML36HP230STDCAS-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp230gen-i",
      "modelNumber": "ML09HP230GEN-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml24hp230flo-i",
      "modelNumber": "ML24HP230FLO-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml24hp230calh-i",
      "modelNumber": "ML24HP230CALH-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47771",
      "modelNumber": "IU-47771",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47827",
      "modelNumber": "IU-47827",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230stdcas-i",
      "modelNumber": "ML18HP230STDCAS-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml09hp230hsduc-i",
      "modelNumber": "ML09HP230HSDUC-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml30hp230gen-i",
      "modelNumber": "ML30HP230GEN-I**",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml33hp230nex-i",
      "modelNumber": "ML33HP230NEX-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp230lsduc-i",
      "modelNumber": "ML12HP230LSDUC-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml12hp230hsduc-i",
      "modelNumber": "ML12HP230HSDUC-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230hsduc-i",
      "modelNumber": "ML18HP230HSDUC-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230lsduc-i",
      "modelNumber": "ML18HP230LSDUC-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml36hp230flo-i",
      "modelNumber": "ML36HP230FLO-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml48hp230flo-i",
      "modelNumber": "ML48HP230FLO-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml24hp230ahu-i",
      "modelNumber": "ML24HP230AHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml33hp230calh-i",
      "modelNumber": "ML33HP230CALH-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230wmahu-i",
      "modelNumber": "ML18HP230WMAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml18hp230gen-i",
      "modelNumber": "ML18HP230GEN-I**",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230lmntahu-i",
      "modelNumber": "ML18HP230LMNTAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml48hp230stdcas-i",
      "modelNumber": "ML48HP230STDCAS-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml18hp230g3ahu-i",
      "modelNumber": "ML18HP230G3AHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230g3ahu-i",
      "modelNumber": "ML24HP230G3AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230lmntahu-i",
      "modelNumber": "ML24HP230LMNTAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml09hp230win-i",
      "modelNumber": "ML09HP230WIN-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml24hp230hsduc-i",
      "modelNumber": "ML24HP230HSDUC-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml24hp230gen-i",
      "modelNumber": "ML24HP230GEN-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml30hp230wmahu-i",
      "modelNumber": "ML30HP230WMAHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml18hp230ahu-i",
      "modelNumber": "ML18HP230AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230g3ahu-i",
      "modelNumber": "ML36HP230G3AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230flo-i",
      "modelNumber": "ML60HP230FLO-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml36hp230hsduc-i",
      "modelNumber": "ML36HP230HSDUC-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml48hp230rs485ahu-i",
      "modelNumber": "ML48HP230RS485AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230g3ahu-i",
      "modelNumber": "ML60HP230G3AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230wmahu-i",
      "modelNumber": "ML24HP230WMAHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230pcahu-i",
      "modelNumber": "ML24HP230PCAHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml48hp230g3ahu-i",
      "modelNumber": "ML48HP230G3AHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230lmntahu-i",
      "modelNumber": "ML36HP230LMNTAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230cc17-i",
      "modelNumber": "ML24HP230CC17-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230rs485ahu-i",
      "modelNumber": "ML36HP230RS485AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml30hp230g3ahu-i",
      "modelNumber": "ML30HP230G3AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml48hp230hsduc-i",
      "modelNumber": "ML48HP230HSDUC-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml30hp230ahu-i",
      "modelNumber": "ML30HP230AHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230win-i",
      "modelNumber": "ML24HP230WIN-I*",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml30hp230lmntahu-i",
      "modelNumber": "ML30HP230LMNTAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml18hp230pcahu-i",
      "modelNumber": "ML18HP230PCAHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230wmahu-i",
      "modelNumber": "ML36HP230WMAHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml42hp230lmntahu-i",
      "modelNumber": "ML42HP230LMNTAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230cc21-i",
      "modelNumber": "ML60HP230CC21-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml48hp230lmntahu-i",
      "modelNumber": "ML48HP230LMNTAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230ahu-i",
      "modelNumber": "ML36HP230AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230lmntahu-i",
      "modelNumber": "ML60HP230LMNTAHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml30hp230pcahu-i",
      "modelNumber": "ML30HP230PCAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml50hp230lmntahu-i",
      "modelNumber": "ML50HP230LMNTAHU-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230cc14-i",
      "modelNumber": "ML24HP230CC14-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230uc17-i",
      "modelNumber": "ML24HP230UC17-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml24hp230uc14-i",
      "modelNumber": "ML24HP230UC14-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mlh2vz2417stann",
      "modelNumber": "MLH2VZ2417STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mph2cz6024stann",
      "modelNumber": "MPH2CZ6024STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mlh2cz6024stann",
      "modelNumber": "MLH2CZ6024STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230cc21-i",
      "modelNumber": "ML36HP230CC21-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mlh2vz3617stann",
      "modelNumber": "MLH2VZ3617STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230uc21-i",
      "modelNumber": "ML60HP230UC21-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230uc21-i",
      "modelNumber": "ML36HP230UC21-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230cc17-i",
      "modelNumber": "ML36HP230CC17-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230uc17-i",
      "modelNumber": "ML36HP230UC17-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230hsduc-i",
      "modelNumber": "ML60HP230HSDUC-I",
      "brandId": "brand-mainline",
      "type": "wall-single"
    },
    {
      "id": "iu-ml36hp230pcahu-i",
      "modelNumber": "ML36HP230PCAHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230uc14-i",
      "modelNumber": "ML36HP230UC14-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml36hp230cc14-i",
      "modelNumber": "ML36HP230CC14-I*",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mlh2cz3617stann",
      "modelNumber": "MLH2CZ3617STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mlh2cz2417stann",
      "modelNumber": "MLH2CZ2417STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230uc24-i",
      "modelNumber": "ML60HP230UC24-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230cc24-i",
      "modelNumber": "ML60HP230CC24-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31371",
      "modelNumber": "IU-31371",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31368",
      "modelNumber": "IU-31368",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31369",
      "modelNumber": "IU-31369",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31370",
      "modelNumber": "IU-31370",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-ml60hp230rs485ahu-i",
      "modelNumber": "ML60HP230RS485AHU-I",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mlh2vz6024stann",
      "modelNumber": "MLH2VZ6024STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mph2cz2417stann",
      "modelNumber": "MPH2CZ2417STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz2417stanm",
      "modelNumber": "TCFZ2417STANM",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mph2cz3617stann",
      "modelNumber": "MPH2CZ3617STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mph2cz4821stann",
      "modelNumber": "MPH2CZ4821STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mlh2vz4821stann",
      "modelNumber": "MLH2VZ4821STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    },
    {
      "id": "iu-mlh2cz4821stann",
      "modelNumber": "MLH2CZ4821STANN",
      "brandId": "brand-mainline",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-mainline-ml06hp230calh-o-ml06hp230calh-i",
      "slug": "mainline-ml06hp230calh-o-ml06hp230calh-i",
      "modelId": "model-mainline-ml06hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml06hp230calh-o",
      "indoorUnitId": "iu-ml06hp230calh-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 35.0,
      "hspf2": 15.6,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml06hp230calh-o-ml06hp230calh-i",
      "slug": "mainline-ml06hp230calh-o-ml06hp230calh-i",
      "modelId": "model-mainline-ml06hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml06hp230calh-o",
      "indoorUnitId": "iu-ml06hp230calh-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 35.0,
      "hspf2": 15.6,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230calh-o-ml09hp230calh-i",
      "slug": "mainline-ml09hp230calh-o-ml09hp230calh-i",
      "modelId": "model-mainline-ml09hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230calh-o",
      "indoorUnitId": "iu-ml09hp230calh-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230calh-o-ml09hp230calh-i",
      "slug": "mainline-ml09hp230calh-o-ml09hp230calh-i",
      "modelId": "model-mainline-ml09hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230calh-o",
      "indoorUnitId": "iu-ml09hp230calh-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230calh-o-ml12hp230calh-i",
      "slug": "mainline-ml12hp230calh-o-ml12hp230calh-i",
      "modelId": "model-mainline-ml12hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230calh-o",
      "indoorUnitId": "iu-ml12hp230calh-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.4,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230calh-o-ml12hp230calh-i",
      "slug": "mainline-ml12hp230calh-o-ml12hp230calh-i",
      "modelId": "model-mainline-ml12hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230calh-o",
      "indoorUnitId": "iu-ml12hp230calh-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.4,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230con-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230con-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230con-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230con-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230nex-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230nex-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230nex-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230nex-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230con-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230con-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230con-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230con-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230calh-o-ml18hp230calh-i",
      "slug": "mainline-ml18hp230calh-o-ml18hp230calh-i",
      "modelId": "model-mainline-ml18hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230calh-o",
      "indoorUnitId": "iu-ml18hp230calh-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 16.2,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230calh-o-ml18hp230calh-i",
      "slug": "mainline-ml18hp230calh-o-ml18hp230calh-i",
      "modelId": "model-mainline-ml18hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230calh-o",
      "indoorUnitId": "iu-ml18hp230calh-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 16.2,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml06hp230nexh-o-ml06hp230nex-i",
      "slug": "mainline-ml06hp230nexh-o-ml06hp230nex-i",
      "modelId": "model-mainline-ml06hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml06hp230nexh-o",
      "indoorUnitId": "iu-ml06hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml06hp230nexh-o-ml06hp230nex-i",
      "slug": "mainline-ml06hp230nexh-o-ml06hp230nex-i",
      "modelId": "model-mainline-ml06hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml06hp230nexh-o",
      "indoorUnitId": "iu-ml06hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230mul-o-iu-47767",
      "slug": "mainline-ml18hp230mul-o-iu-47767",
      "modelId": "model-mainline-ml18hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml18hp230mul-o",
      "indoorUnitId": "iu-iu-47767",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230mul-o-iu-47769",
      "slug": "mainline-ml18hp230mul-o-iu-47769",
      "modelId": "model-mainline-ml18hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml18hp230mul-o",
      "indoorUnitId": "iu-iu-47769",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230mulh-o-iu-47770",
      "slug": "mainline-ml18hp230mulh-o-iu-47770",
      "modelId": "model-mainline-ml18hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230mulh-o",
      "indoorUnitId": "iu-iu-47770",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230mulh-o-iu-47772",
      "slug": "mainline-ml18hp230mulh-o-iu-47772",
      "modelId": "model-mainline-ml18hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230mulh-o",
      "indoorUnitId": "iu-iu-47772",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml27hp230mul-o-iu-47825",
      "slug": "mainline-ml27hp230mul-o-iu-47825",
      "modelId": "model-mainline-ml27hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml27hp230mul-o",
      "indoorUnitId": "iu-iu-47825",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230con-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230con-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230con-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230con-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml27hp230mul-o-iu-47823",
      "slug": "mainline-ml27hp230mul-o-iu-47823",
      "modelId": "model-mainline-ml27hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml27hp230mul-o",
      "indoorUnitId": "iu-iu-47823",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230con-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230con-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230nex-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230nex-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230nex-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230nex-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230con-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230con-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230mul-o-iu-47858",
      "slug": "mainline-ml48hp230mul-o-iu-47858",
      "modelId": "model-mainline-ml48hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml48hp230mul-o",
      "indoorUnitId": "iu-iu-47858",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230mul-o-iu-47860",
      "slug": "mainline-ml48hp230mul-o-iu-47860",
      "modelId": "model-mainline-ml48hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml48hp230mul-o",
      "indoorUnitId": "iu-iu-47860",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230nex-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230nex-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp2301wycas-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp2301wycas-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230mul-o-iu-47840",
      "slug": "mainline-ml36hp230mul-o-iu-47840",
      "modelId": "model-mainline-ml36hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml36hp230mul-o",
      "indoorUnitId": "iu-iu-47840",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230mul-o-iu-47842",
      "slug": "mainline-ml36hp230mul-o-iu-47842",
      "modelId": "model-mainline-ml36hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml36hp230mul-o",
      "indoorUnitId": "iu-iu-47842",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp2301wycas-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp2301wycas-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230nex-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230nex-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230nex-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230nex-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230nex-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230nex-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml16hp230con-i",
      "slug": "mainline-ml18hp230nex-o-ml16hp230con-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml16hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml16hp230con-i",
      "slug": "mainline-ml18hp230nex-o-ml16hp230con-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml16hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230nex-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230nex-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230nex-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230nex-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp115nex-o-ml12hp115nex-i",
      "slug": "mainline-ml12hp115nex-o-ml12hp115nex-i",
      "modelId": "model-mainline-ml12hp115nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp115nex-o",
      "indoorUnitId": "iu-ml12hp115nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp115nex-o-ml12hp115nex-i",
      "slug": "mainline-ml12hp115nex-o-ml12hp115nex-i",
      "modelId": "model-mainline-ml12hp115nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp115nex-o",
      "indoorUnitId": "iu-ml12hp115nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230nex-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230nex-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230mul-o-iu-47841",
      "slug": "mainline-ml36hp230mul-o-iu-47841",
      "modelId": "model-mainline-ml36hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml36hp230mul-o",
      "indoorUnitId": "iu-iu-47841",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230nex-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230nex-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml27hp230mul-o-iu-47824",
      "slug": "mainline-ml27hp230mul-o-iu-47824",
      "modelId": "model-mainline-ml27hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml27hp230mul-o",
      "indoorUnitId": "iu-iu-47824",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230mulh-o-iu-47843",
      "slug": "mainline-ml36hp230mulh-o-iu-47843",
      "modelId": "model-mainline-ml36hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml36hp230mulh-o",
      "indoorUnitId": "iu-iu-47843",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230mul-o-iu-47768",
      "slug": "mainline-ml18hp230mul-o-iu-47768",
      "modelId": "model-mainline-ml18hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml18hp230mul-o",
      "indoorUnitId": "iu-iu-47768",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp2301wycas-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp2301wycas-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp2301wycas-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp2301wycas-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml27hp230mulh-o-iu-47828",
      "slug": "mainline-ml27hp230mulh-o-iu-47828",
      "modelId": "model-mainline-ml27hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml27hp230mulh-o",
      "indoorUnitId": "iu-iu-47828",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml27hp230mulh-o-iu-47826",
      "slug": "mainline-ml27hp230mulh-o-iu-47826",
      "modelId": "model-mainline-ml27hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml27hp230mulh-o",
      "indoorUnitId": "iu-iu-47826",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230mulh-o-iu-47845",
      "slug": "mainline-ml36hp230mulh-o-iu-47845",
      "modelId": "model-mainline-ml36hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml36hp230mulh-o",
      "indoorUnitId": "iu-iu-47845",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230mulh-o-iu-47863",
      "slug": "mainline-ml48hp230mulh-o-iu-47863",
      "modelId": "model-mainline-ml48hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230mulh-o",
      "indoorUnitId": "iu-iu-47863",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230mulh-o-iu-47861",
      "slug": "mainline-ml48hp230mulh-o-iu-47861",
      "modelId": "model-mainline-ml48hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230mulh-o",
      "indoorUnitId": "iu-iu-47861",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml15hp230nexh-o-ml15hp230nex-i",
      "slug": "mainline-ml15hp230nexh-o-ml15hp230nex-i",
      "modelId": "model-mainline-ml15hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml15hp230nexh-o",
      "indoorUnitId": "iu-ml15hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230stdcas-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230stdcas-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230stdcas-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230stdcas-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230flo-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230flo-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230flo-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230flo-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230nex-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230nex-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230nex-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230nex-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml55hp230mulh-o-iu-47866",
      "slug": "mainline-ml55hp230mulh-o-iu-47866",
      "modelId": "model-mainline-ml55hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml55hp230mulh-o",
      "indoorUnitId": "iu-iu-47866",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp2301wycas-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp2301wycas-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp2301wycas-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp2301wycas-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml55hp230mulh-o-iu-47864",
      "slug": "mainline-ml55hp230mulh-o-iu-47864",
      "modelId": "model-mainline-ml55hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml55hp230mulh-o",
      "indoorUnitId": "iu-iu-47864",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230stdcas-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230stdcas-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230stdcas-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230stdcas-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp2301wycas-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp2301wycas-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp2301wycas-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp2301wycas-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp2301wycas-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp2301wycas-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp2301wycas-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp2301wycas-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230stdcas-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230stdcas-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml06hp230nexh-o-ml06hp2301wycas-i",
      "slug": "mainline-ml06hp230nexh-o-ml06hp2301wycas-i",
      "modelId": "model-mainline-ml06hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml06hp230nexh-o",
      "indoorUnitId": "iu-ml06hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml06hp230nexh-o-ml06hp2301wycas-i",
      "slug": "mainline-ml06hp230nexh-o-ml06hp2301wycas-i",
      "modelId": "model-mainline-ml06hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml06hp230nexh-o",
      "indoorUnitId": "iu-ml06hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230stdcas-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230stdcas-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230nex-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230nex-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230nex-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230nex-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230stdcas-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230stdcas-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230stdcas-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230stdcas-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230mulh-o-iu-47844",
      "slug": "mainline-ml36hp230mulh-o-iu-47844",
      "modelId": "model-mainline-ml36hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml36hp230mulh-o",
      "indoorUnitId": "iu-iu-47844",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp115gen-o-ml09hp115gen-i",
      "slug": "mainline-ml09hp115gen-o-ml09hp115gen-i",
      "modelId": "model-mainline-ml09hp115gen-o",
      "outdoorUnitId": "ou-mainline-ml09hp115gen-o",
      "indoorUnitId": "iu-ml09hp115gen-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp115gen-o-ml09hp115gen-i",
      "slug": "mainline-ml09hp115gen-o-ml09hp115gen-i",
      "modelId": "model-mainline-ml09hp115gen-o",
      "outdoorUnitId": "ou-mainline-ml09hp115gen-o",
      "indoorUnitId": "iu-ml09hp115gen-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml55hp230mulh-o-iu-47865",
      "slug": "mainline-ml55hp230mulh-o-iu-47865",
      "modelId": "model-mainline-ml55hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml55hp230mulh-o",
      "indoorUnitId": "iu-iu-47865",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230lsduc-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230lsduc-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml06hp230nexh-o-ml06hp230lsduc-i",
      "slug": "mainline-ml06hp230nexh-o-ml06hp230lsduc-i",
      "modelId": "model-mainline-ml06hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml06hp230nexh-o",
      "indoorUnitId": "iu-ml06hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230lsduc-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230lsduc-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml06hp230nexh-o-ml06hp230lsduc-i",
      "slug": "mainline-ml06hp230nexh-o-ml06hp230lsduc-i",
      "modelId": "model-mainline-ml06hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml06hp230nexh-o",
      "indoorUnitId": "iu-ml06hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230mul-o-iu-47859",
      "slug": "mainline-ml48hp230mul-o-iu-47859",
      "modelId": "model-mainline-ml48hp230mul-o",
      "outdoorUnitId": "ou-mainline-ml48hp230mul-o",
      "indoorUnitId": "iu-iu-47859",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230gen-o-ml12hp230gen-i",
      "slug": "mainline-ml12hp230gen-o-ml12hp230gen-i",
      "modelId": "model-mainline-ml12hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml12hp230gen-o",
      "indoorUnitId": "iu-ml12hp230gen-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230gen-o-ml12hp230gen-i",
      "slug": "mainline-ml12hp230gen-o-ml12hp230gen-i",
      "modelId": "model-mainline-ml12hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml12hp230gen-o",
      "indoorUnitId": "iu-ml12hp230gen-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230mulh-o-iu-47862",
      "slug": "mainline-ml48hp230mulh-o-iu-47862",
      "modelId": "model-mainline-ml48hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230mulh-o",
      "indoorUnitId": "iu-iu-47862",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lcmh-o-ml36hp230stdcas-i",
      "slug": "mainline-ml36hp230lcmh-o-ml36hp230stdcas-i",
      "modelId": "model-mainline-ml36hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lcmh-o",
      "indoorUnitId": "iu-ml36hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230gen-o-ml09hp230gen-i",
      "slug": "mainline-ml09hp230gen-o-ml09hp230gen-i",
      "modelId": "model-mainline-ml09hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml09hp230gen-o",
      "indoorUnitId": "iu-ml09hp230gen-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230gen-o-ml09hp230gen-i",
      "slug": "mainline-ml09hp230gen-o-ml09hp230gen-i",
      "modelId": "model-mainline-ml09hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml09hp230gen-o",
      "indoorUnitId": "iu-ml09hp230gen-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230stdcas-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230stdcas-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230stdcas-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230stdcas-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230flo-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230flo-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230flo-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230flo-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230calh-o-ml24hp230calh-i",
      "slug": "mainline-ml24hp230calh-o-ml24hp230calh-i",
      "modelId": "model-mainline-ml24hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230calh-o",
      "indoorUnitId": "iu-ml24hp230calh-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230mulh-o-iu-47771",
      "slug": "mainline-ml18hp230mulh-o-iu-47771",
      "modelId": "model-mainline-ml18hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230mulh-o",
      "indoorUnitId": "iu-iu-47771",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml27hp230mulh-o-iu-47827",
      "slug": "mainline-ml27hp230mulh-o-iu-47827",
      "modelId": "model-mainline-ml27hp230mulh-o",
      "outdoorUnitId": "ou-mainline-ml27hp230mulh-o",
      "indoorUnitId": "iu-iu-47827",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230calh-o-ml24hp230calh-i",
      "slug": "mainline-ml24hp230calh-o-ml24hp230calh-i",
      "modelId": "model-mainline-ml24hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230calh-o",
      "indoorUnitId": "iu-ml24hp230calh-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230stdcas-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230stdcas-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230stdcas-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230stdcas-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230stdcas-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230stdcas-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230stdcas-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230stdcas-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp2301wycas-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp2301wycas-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp2301wycas-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp2301wycas-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp2301wycas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230hsduc-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230hsduc-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nexh-o-ml09hp230hsduc-i",
      "slug": "mainline-ml09hp230nexh-o-ml09hp230hsduc-i",
      "modelId": "model-mainline-ml09hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nexh-o",
      "indoorUnitId": "iu-ml09hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230flo-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230flo-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230flo-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230flo-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230flo-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230flo-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230flo-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230flo-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230gen-o-ml30hp230gen-i",
      "slug": "mainline-ml30hp230gen-o-ml30hp230gen-i",
      "modelId": "model-mainline-ml30hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml30hp230gen-o",
      "indoorUnitId": "iu-ml30hp230gen-i",
      "minHeatingTempC": -25,
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230gen-o-ml30hp230gen-i",
      "slug": "mainline-ml30hp230gen-o-ml30hp230gen-i",
      "modelId": "model-mainline-ml30hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml30hp230gen-o",
      "indoorUnitId": "iu-ml30hp230gen-i",
      "minHeatingTempC": -25,
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230nexh-o-ml33hp230nex-i",
      "slug": "mainline-ml33hp230nexh-o-ml33hp230nex-i",
      "modelId": "model-mainline-ml33hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml33hp230nexh-o",
      "indoorUnitId": "iu-ml33hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lcm-o-ml36hp230stdcas-i",
      "slug": "mainline-ml36hp230lcm-o-ml36hp230stdcas-i",
      "modelId": "model-mainline-ml36hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lcm-o",
      "indoorUnitId": "iu-ml36hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lcm-o-ml36hp230stdcas-i",
      "slug": "mainline-ml36hp230lcm-o-ml36hp230stdcas-i",
      "modelId": "model-mainline-ml36hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lcm-o",
      "indoorUnitId": "iu-ml36hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230nexh-o-ml33hp230nex-i",
      "slug": "mainline-ml33hp230nexh-o-ml33hp230nex-i",
      "modelId": "model-mainline-ml33hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml33hp230nexh-o",
      "indoorUnitId": "iu-ml33hp230nex-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230lsduc-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230lsduc-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230lsduc-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230lsduc-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230hsduc-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230hsduc-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nexh-o-ml12hp230hsduc-i",
      "slug": "mainline-ml12hp230nexh-o-ml12hp230hsduc-i",
      "modelId": "model-mainline-ml12hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nexh-o",
      "indoorUnitId": "iu-ml12hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230hsduc-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230hsduc-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230stdcas-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230stdcas-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230stdcas-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230stdcas-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230lsduc-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230lsduc-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230lsduc-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230lsduc-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml16hp230con-i",
      "slug": "mainline-ml18hp230nexh-o-ml16hp230con-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml16hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml16hp230con-i",
      "slug": "mainline-ml18hp230nexh-o-ml16hp230con-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml16hp230con-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230hsduc-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230hsduc-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lcmh-o-ml36hp230flo-i",
      "slug": "mainline-ml36hp230lcmh-o-ml36hp230flo-i",
      "modelId": "model-mainline-ml36hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lcmh-o",
      "indoorUnitId": "iu-ml36hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcm-o-ml48hp230flo-i",
      "slug": "mainline-ml48hp230lcm-o-ml48hp230flo-i",
      "modelId": "model-mainline-ml48hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcm-o",
      "indoorUnitId": "iu-ml48hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcm-o-ml48hp230flo-i",
      "slug": "mainline-ml48hp230lcm-o-ml48hp230flo-i",
      "modelId": "model-mainline-ml48hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcm-o",
      "indoorUnitId": "iu-ml48hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230ahu-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230ahu-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230ahu-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230ahu-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230hsduc-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230hsduc-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230hsduc-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230hsduc-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230lsduc-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230lsduc-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230nex-o-ml09hp230lsduc-i",
      "slug": "mainline-ml09hp230nex-o-ml09hp230lsduc-i",
      "modelId": "model-mainline-ml09hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml09hp230nex-o",
      "indoorUnitId": "iu-ml09hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230hsduc-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230hsduc-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230hsduc-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230hsduc-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230calh-o-ml33hp230calh-i",
      "slug": "mainline-ml33hp230calh-o-ml33hp230calh-i",
      "modelId": "model-mainline-ml33hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml33hp230calh-o",
      "indoorUnitId": "iu-ml33hp230calh-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230calh-o-ml33hp230calh-i",
      "slug": "mainline-ml33hp230calh-o-ml33hp230calh-i",
      "modelId": "model-mainline-ml33hp230calh-o",
      "outdoorUnitId": "ou-mainline-ml33hp230calh-o",
      "indoorUnitId": "iu-ml33hp230calh-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml18hp230wmahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml18hp230wmahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml18hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml18hp230wmahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml18hp230wmahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml18hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230gen-o-ml18hp230gen-i",
      "slug": "mainline-ml18hp230gen-o-ml18hp230gen-i",
      "modelId": "model-mainline-ml18hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml18hp230gen-o",
      "indoorUnitId": "iu-ml18hp230gen-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230gen-o-ml18hp230gen-i",
      "slug": "mainline-ml18hp230gen-o-ml18hp230gen-i",
      "modelId": "model-mainline-ml18hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml18hp230gen-o",
      "indoorUnitId": "iu-ml18hp230gen-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml18hp230lmntahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml18hp230lmntahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml18hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml18hp230lmntahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml18hp230lmntahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml18hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcm-o-ml48hp230stdcas-i",
      "slug": "mainline-ml48hp230lcm-o-ml48hp230stdcas-i",
      "modelId": "model-mainline-ml48hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcm-o",
      "indoorUnitId": "iu-ml48hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcm-o-ml48hp230stdcas-i",
      "slug": "mainline-ml48hp230lcm-o-ml48hp230stdcas-i",
      "modelId": "model-mainline-ml48hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcm-o",
      "indoorUnitId": "iu-ml48hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml18hp230g3ahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml18hp230g3ahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml18hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml18hp230g3ahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml18hp230g3ahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml18hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230g3ahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230g3ahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230g3ahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230g3ahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230lmntahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230lmntahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230lmntahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230lmntahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230lsduc-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230lsduc-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml12hp230nex-o-ml12hp230lsduc-i",
      "slug": "mainline-ml12hp230nex-o-ml12hp230lsduc-i",
      "modelId": "model-mainline-ml12hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml12hp230nex-o",
      "indoorUnitId": "iu-ml12hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230win-o-ml09hp230win-i",
      "slug": "mainline-ml09hp230win-o-ml09hp230win-i",
      "modelId": "model-mainline-ml09hp230win-o",
      "outdoorUnitId": "ou-mainline-ml09hp230win-o",
      "indoorUnitId": "iu-ml09hp230win-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml09hp230win-o-ml09hp230win-i",
      "slug": "mainline-ml09hp230win-o-ml09hp230win-i",
      "modelId": "model-mainline-ml09hp230win-o",
      "outdoorUnitId": "ou-mainline-ml09hp230win-o",
      "indoorUnitId": "iu-ml09hp230win-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230hsduc-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230hsduc-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230hsduc-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230hsduc-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230hsduc-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230hsduc-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nex-o-ml24hp230hsduc-i",
      "slug": "mainline-ml24hp230nex-o-ml24hp230hsduc-i",
      "modelId": "model-mainline-ml24hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nex-o",
      "indoorUnitId": "iu-ml24hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnt-o-ml18hp230lmntahu-i",
      "slug": "mainline-ml18hp230lmnt-o-ml18hp230lmntahu-i",
      "modelId": "model-mainline-ml18hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnt-o",
      "indoorUnitId": "iu-ml18hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnt-o-ml18hp230lmntahu-i",
      "slug": "mainline-ml18hp230lmnt-o-ml18hp230lmntahu-i",
      "modelId": "model-mainline-ml18hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnt-o",
      "indoorUnitId": "iu-ml18hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnt-o-ml24hp230lmntahu-i",
      "slug": "mainline-ml18hp230lmnt-o-ml24hp230lmntahu-i",
      "modelId": "model-mainline-ml18hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230ahu-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230ahu-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230gen-o-ml24hp230gen-i",
      "slug": "mainline-ml24hp230gen-o-ml24hp230gen-i",
      "modelId": "model-mainline-ml24hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml24hp230gen-o",
      "indoorUnitId": "iu-ml24hp230gen-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230gen-o-ml24hp230gen-i",
      "slug": "mainline-ml24hp230gen-o-ml24hp230gen-i",
      "modelId": "model-mainline-ml24hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml24hp230gen-o",
      "indoorUnitId": "iu-ml24hp230gen-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230nexh-o-ml24hp230ahu-i",
      "slug": "mainline-ml24hp230nexh-o-ml24hp230ahu-i",
      "modelId": "model-mainline-ml24hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml24hp230nexh-o",
      "indoorUnitId": "iu-ml24hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230g3ahu-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230g3ahu-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230g3ahu-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230g3ahu-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnt-o-ml30hp230wmahu-i",
      "slug": "mainline-ml30hp230lmnt-o-ml30hp230wmahu-i",
      "modelId": "model-mainline-ml30hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnt-o",
      "indoorUnitId": "iu-ml30hp230wmahu-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230ahu-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230ahu-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcmh-o-ml48hp230flo-i",
      "slug": "mainline-ml48hp230lcmh-o-ml48hp230flo-i",
      "modelId": "model-mainline-ml48hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcmh-o",
      "indoorUnitId": "iu-ml48hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcmh-o-ml48hp230flo-i",
      "slug": "mainline-ml48hp230lcmh-o-ml48hp230flo-i",
      "modelId": "model-mainline-ml48hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcmh-o",
      "indoorUnitId": "iu-ml48hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nex-o-ml18hp230ahu-i",
      "slug": "mainline-ml18hp230nex-o-ml18hp230ahu-i",
      "modelId": "model-mainline-ml18hp230nex-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nex-o",
      "indoorUnitId": "iu-ml18hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnt-o-ml18hp230wmahu-i",
      "slug": "mainline-ml18hp230lmnt-o-ml18hp230wmahu-i",
      "modelId": "model-mainline-ml18hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnt-o",
      "indoorUnitId": "iu-ml18hp230wmahu-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230hsduc-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230hsduc-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230hsduc-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230hsduc-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230lmntahu-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230lmntahu-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230lmntahu-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230lmntahu-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230lmntahu-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230lmntahu-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230lmntahu-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230lmntahu-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230lsduc-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230lsduc-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230g3ahu-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230g3ahu-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230lsduc-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230lsduc-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230lsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcmh-o-ml48hp230stdcas-i",
      "slug": "mainline-ml48hp230lcmh-o-ml48hp230stdcas-i",
      "modelId": "model-mainline-ml48hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcmh-o",
      "indoorUnitId": "iu-ml48hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcmh-o-ml48hp230stdcas-i",
      "slug": "mainline-ml48hp230lcmh-o-ml48hp230stdcas-i",
      "modelId": "model-mainline-ml48hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcmh-o",
      "indoorUnitId": "iu-ml48hp230stdcas-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lcmh-o-ml60hp230flo-i",
      "slug": "mainline-ml60hp230lcmh-o-ml60hp230flo-i",
      "modelId": "model-mainline-ml60hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lcmh-o",
      "indoorUnitId": "iu-ml60hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230g3ahu-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230g3ahu-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230ahu-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230ahu-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230nexh-o-ml18hp230ahu-i",
      "slug": "mainline-ml18hp230nexh-o-ml18hp230ahu-i",
      "modelId": "model-mainline-ml18hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml18hp230nexh-o",
      "indoorUnitId": "iu-ml18hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lcmh-o-ml60hp230flo-i",
      "slug": "mainline-ml60hp230lcmh-o-ml60hp230flo-i",
      "modelId": "model-mainline-ml60hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lcmh-o",
      "indoorUnitId": "iu-ml60hp230flo-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lcmh-o-ml36hp230hsduc-i",
      "slug": "mainline-ml36hp230lcmh-o-ml36hp230hsduc-i",
      "modelId": "model-mainline-ml36hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lcmh-o",
      "indoorUnitId": "iu-ml36hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230lmnth-o-ml36hp230g3ahu-i",
      "slug": "mainline-ml33hp230lmnth-o-ml36hp230g3ahu-i",
      "modelId": "model-mainline-ml33hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml33hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcm-o-ml48hp230rs485ahu-i",
      "slug": "mainline-ml48hp230lcm-o-ml48hp230rs485ahu-i",
      "modelId": "model-mainline-ml48hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcm-o",
      "indoorUnitId": "iu-ml48hp230rs485ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230lmnth-o-ml36hp230g3ahu-i",
      "slug": "mainline-ml33hp230lmnth-o-ml36hp230g3ahu-i",
      "modelId": "model-mainline-ml33hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml33hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcm-o-ml48hp230rs485ahu-i",
      "slug": "mainline-ml48hp230lcm-o-ml48hp230rs485ahu-i",
      "modelId": "model-mainline-ml48hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcm-o",
      "indoorUnitId": "iu-ml48hp230rs485ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230g3ahu-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230g3ahu-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml60hp230g3ahu-i",
      "slug": "mainline-ml48hp230lmnth-o-ml60hp230g3ahu-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml60hp230g3ahu-i",
      "slug": "mainline-ml48hp230lmnth-o-ml60hp230g3ahu-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230g3ahu-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230g3ahu-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230wmahu-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230wmahu-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230wmahu-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230wmahu-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230pcahu-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230pcahu-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230pcahu-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230pcahu-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml48hp230g3ahu-i",
      "slug": "mainline-ml48hp230lmnth-o-ml48hp230g3ahu-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml48hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml30hp230wmahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml30hp230wmahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml30hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml48hp230g3ahu-i",
      "slug": "mainline-ml48hp230lmnth-o-ml48hp230g3ahu-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml48hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml30hp230wmahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml30hp230wmahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml30hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230wmahu-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230wmahu-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230wmahu-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230wmahu-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230lmntahu-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230lmntahu-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230lmntahu-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230lmntahu-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230cc17-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230cc17-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230cc17-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230g3ahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230g3ahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lcmh-o-ml36hp230rs485ahu-i",
      "slug": "mainline-ml36hp230lcmh-o-ml36hp230rs485ahu-i",
      "modelId": "model-mainline-ml36hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lcmh-o",
      "indoorUnitId": "iu-ml36hp230rs485ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230cc17-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230cc17-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230cc17-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230cc17-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230cc17-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230cc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lcmh-o-ml36hp230rs485ahu-i",
      "slug": "mainline-ml36hp230lcmh-o-ml36hp230rs485ahu-i",
      "modelId": "model-mainline-ml36hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lcmh-o",
      "indoorUnitId": "iu-ml36hp230rs485ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml30hp230g3ahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml30hp230g3ahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml30hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230cc17-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230cc17-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230cc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml30hp230g3ahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml30hp230g3ahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml30hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230g3ahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230g3ahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230g3ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcm-o-ml48hp230hsduc-i",
      "slug": "mainline-ml48hp230lcm-o-ml48hp230hsduc-i",
      "modelId": "model-mainline-ml48hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcm-o",
      "indoorUnitId": "iu-ml48hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcm-o-ml48hp230hsduc-i",
      "slug": "mainline-ml48hp230lcm-o-ml48hp230hsduc-i",
      "modelId": "model-mainline-ml48hp230lcm-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcm-o",
      "indoorUnitId": "iu-ml48hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230gen-o-ml30hp230ahu-i",
      "slug": "mainline-ml30hp230gen-o-ml30hp230ahu-i",
      "modelId": "model-mainline-ml30hp230gen-o",
      "outdoorUnitId": "ou-mainline-ml30hp230gen-o",
      "indoorUnitId": "iu-ml30hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230win-o-ml24hp230win-i",
      "slug": "mainline-ml24hp230win-o-ml24hp230win-i",
      "modelId": "model-mainline-ml24hp230win-o",
      "outdoorUnitId": "ou-mainline-ml24hp230win-o",
      "indoorUnitId": "iu-ml24hp230win-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230win-o-ml24hp230win-i",
      "slug": "mainline-ml24hp230win-o-ml24hp230win-i",
      "modelId": "model-mainline-ml24hp230win-o",
      "outdoorUnitId": "ou-mainline-ml24hp230win-o",
      "indoorUnitId": "iu-ml24hp230win-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcmh-o-ml48hp230rs485ahu-i",
      "slug": "mainline-ml48hp230lcmh-o-ml48hp230rs485ahu-i",
      "modelId": "model-mainline-ml48hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcmh-o",
      "indoorUnitId": "iu-ml48hp230rs485ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcmh-o-ml48hp230rs485ahu-i",
      "slug": "mainline-ml48hp230lcmh-o-ml48hp230rs485ahu-i",
      "modelId": "model-mainline-ml48hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcmh-o",
      "indoorUnitId": "iu-ml48hp230rs485ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230lmntahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230lmntahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml30hp230lmntahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml30hp230lmntahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml30hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml30hp230lmntahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml30hp230lmntahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml30hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnt-o-ml18hp230pcahu-i",
      "slug": "mainline-ml18hp230lmnt-o-ml18hp230pcahu-i",
      "modelId": "model-mainline-ml18hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnt-o",
      "indoorUnitId": "iu-ml18hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml18hp230pcahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml18hp230pcahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml18hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml18hp230pcahu-i",
      "slug": "mainline-ml18hp230lmnth-o-ml18hp230pcahu-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml18hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnt-o-ml18hp230pcahu-i",
      "slug": "mainline-ml18hp230lmnt-o-ml18hp230pcahu-i",
      "modelId": "model-mainline-ml18hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnt-o",
      "indoorUnitId": "iu-ml18hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230wmahu-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230wmahu-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230lmntahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230lmntahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230wmahu-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230wmahu-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcmh-o-ml48hp230hsduc-i",
      "slug": "mainline-ml48hp230lcmh-o-ml48hp230hsduc-i",
      "modelId": "model-mainline-ml48hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcmh-o",
      "indoorUnitId": "iu-ml48hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml42hp230lmnth-o-ml42hp230lmntahu-i",
      "slug": "mainline-ml42hp230lmnth-o-ml42hp230lmntahu-i",
      "modelId": "model-mainline-ml42hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml42hp230lmnth-o",
      "indoorUnitId": "iu-ml42hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml42hp230lmnth-o-ml42hp230lmntahu-i",
      "slug": "mainline-ml42hp230lmnth-o-ml42hp230lmntahu-i",
      "modelId": "model-mainline-ml42hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml42hp230lmnth-o",
      "indoorUnitId": "iu-ml42hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnt-o-ml36hp230wmahu-i",
      "slug": "mainline-ml36hp230lmnt-o-ml36hp230wmahu-i",
      "modelId": "model-mainline-ml36hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnt-o",
      "indoorUnitId": "iu-ml36hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnt-o-ml36hp230wmahu-i",
      "slug": "mainline-ml36hp230lmnt-o-ml36hp230wmahu-i",
      "modelId": "model-mainline-ml36hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnt-o",
      "indoorUnitId": "iu-ml36hp230wmahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lcmh-o-ml48hp230hsduc-i",
      "slug": "mainline-ml48hp230lcmh-o-ml48hp230hsduc-i",
      "modelId": "model-mainline-ml48hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lcmh-o",
      "indoorUnitId": "iu-ml48hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml60hp230cc21-i",
      "slug": "mainline-ml48hp230lmnth-o-ml60hp230cc21-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230cc21-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml60hp230cc21-i",
      "slug": "mainline-ml48hp230lmnth-o-ml60hp230cc21-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230cc21-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230lmnth-o-ml36hp230lmntahu-i",
      "slug": "mainline-ml33hp230lmnth-o-ml36hp230lmntahu-i",
      "modelId": "model-mainline-ml33hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml33hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml48hp230lmntahu-i",
      "slug": "mainline-ml48hp230lmnth-o-ml48hp230lmntahu-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml48hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml48hp230lmntahu-i",
      "slug": "mainline-ml48hp230lmnth-o-ml48hp230lmntahu-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml48hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230nexh-o-ml36hp230ahu-i",
      "slug": "mainline-ml33hp230nexh-o-ml36hp230ahu-i",
      "modelId": "model-mainline-ml33hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml33hp230nexh-o",
      "indoorUnitId": "iu-ml36hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230lmnth-o-ml36hp230lmntahu-i",
      "slug": "mainline-ml33hp230lmnth-o-ml36hp230lmntahu-i",
      "modelId": "model-mainline-ml33hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml33hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml60hp230lmntahu-i",
      "slug": "mainline-ml48hp230lmnth-o-ml60hp230lmntahu-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml60hp230lmntahu-i",
      "slug": "mainline-ml48hp230lmnth-o-ml60hp230lmntahu-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml33hp230nexh-o-ml36hp230ahu-i",
      "slug": "mainline-ml33hp230nexh-o-ml36hp230ahu-i",
      "modelId": "model-mainline-ml33hp230nexh-o",
      "outdoorUnitId": "ou-mainline-ml33hp230nexh-o",
      "indoorUnitId": "iu-ml36hp230ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml30hp230pcahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml30hp230pcahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml30hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml50hp230lmnth-o-ml50hp230lmntahu-i",
      "slug": "mainline-ml50hp230lmnth-o-ml50hp230lmntahu-i",
      "modelId": "model-mainline-ml50hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml50hp230lmnth-o",
      "indoorUnitId": "iu-ml50hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml30hp230pcahu-i",
      "slug": "mainline-ml30hp230lmnth-o-ml30hp230pcahu-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml30hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml50hp230lmnth-o-ml50hp230lmntahu-i",
      "slug": "mainline-ml50hp230lmnth-o-ml50hp230lmntahu-i",
      "modelId": "model-mainline-ml50hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml50hp230lmnth-o",
      "indoorUnitId": "iu-ml50hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230cc14-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230cc14-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230cc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230cc17-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230cc17-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230cc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230cc14-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230cc14-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230cc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230uc17-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230uc17-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230uc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230uc14-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230uc14-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230uc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnt-o-ml36hp230lmntahu-i",
      "slug": "mainline-ml36hp230lmnt-o-ml36hp230lmntahu-i",
      "modelId": "model-mainline-ml36hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnt-o",
      "indoorUnitId": "iu-ml36hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml18hp230lmnth-o-ml24hp230cc17-i",
      "slug": "mainline-ml18hp230lmnth-o-ml24hp230cc17-i",
      "modelId": "model-mainline-ml18hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml18hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230cc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnt-o-ml36hp230lmntahu-i",
      "slug": "mainline-ml36hp230lmnt-o-ml36hp230lmntahu-i",
      "modelId": "model-mainline-ml36hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnt-o",
      "indoorUnitId": "iu-ml36hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az18aj2n-mlh2vz2417stann",
      "slug": "mainline-mlp15az18aj2n-mlh2vz2417stann",
      "modelId": "model-mainline-mlp15az18aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az18aj2n",
      "indoorUnitId": "iu-mlh2vz2417stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230cc14-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230cc14-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230cc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mpp15az60aj2n-mph2cz6024stann",
      "slug": "mainline-mpp15az60aj2n-mph2cz6024stann",
      "modelId": "model-mainline-mpp15az60aj2n",
      "outdoorUnitId": "ou-mainline-mpp15az60aj2n",
      "indoorUnitId": "iu-mph2cz6024stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az60aj2n-mlh2cz6024stann",
      "slug": "mainline-mlp15az60aj2n-mlh2cz6024stann",
      "modelId": "model-mainline-mlp15az60aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az60aj2n",
      "indoorUnitId": "iu-mlh2cz6024stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230cc14-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230cc14-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230cc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230cc21-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230cc21-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az30aj2n-mlh2vz3617stann",
      "slug": "mainline-mlp15az30aj2n-mlh2vz3617stann",
      "modelId": "model-mainline-mlp15az30aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az30aj2n",
      "indoorUnitId": "iu-mlh2vz3617stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230lmntahu-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230lmntahu-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230cc21-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230cc21-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230cc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230lmntahu-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230lmntahu-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230uc21-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230uc21-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230uc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az24aj2n-mlh2vz2417stann",
      "slug": "mainline-mlp15az24aj2n-mlh2vz2417stann",
      "modelId": "model-mainline-mlp15az24aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az24aj2n",
      "indoorUnitId": "iu-mlh2vz2417stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230cc21-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230cc21-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230cc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230uc17-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230uc17-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230uc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnt-o-ml60hp230lmntahu-i",
      "slug": "mainline-ml48hp230lmnt-o-ml60hp230lmntahu-i",
      "modelId": "model-mainline-ml48hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnt-o",
      "indoorUnitId": "iu-ml60hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230uc21-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230uc21-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230uc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230pcahu-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230pcahu-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230pcahu-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230pcahu-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230cc14-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230cc14-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230cc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230uc14-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230uc14-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230uc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnt-o-ml24hp230uc17-i",
      "slug": "mainline-ml24hp230lmnt-o-ml24hp230uc17-i",
      "modelId": "model-mainline-ml24hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnt-o",
      "indoorUnitId": "iu-ml24hp230uc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230cc14-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230cc14-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230cc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml24hp230lmnth-o-ml24hp230uc14-i",
      "slug": "mainline-ml24hp230lmnth-o-ml24hp230uc14-i",
      "modelId": "model-mainline-ml24hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml24hp230lmnth-o",
      "indoorUnitId": "iu-ml24hp230uc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnt-o-ml48hp230lmntahu-i",
      "slug": "mainline-ml48hp230lmnt-o-ml48hp230lmntahu-i",
      "modelId": "model-mainline-ml48hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnt-o",
      "indoorUnitId": "iu-ml48hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnt-o-ml48hp230lmntahu-i",
      "slug": "mainline-ml48hp230lmnt-o-ml48hp230lmntahu-i",
      "modelId": "model-mainline-ml48hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnt-o",
      "indoorUnitId": "iu-ml48hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnt-o-ml60hp230lmntahu-i",
      "slug": "mainline-ml48hp230lmnt-o-ml60hp230lmntahu-i",
      "modelId": "model-mainline-ml48hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnt-o",
      "indoorUnitId": "iu-ml60hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230cc17-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230cc17-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230cc17-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230cc17-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230uc17-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230uc17-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230uc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230cc21-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230cc21-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lcmh-o-ml60hp230hsduc-i",
      "slug": "mainline-ml60hp230lcmh-o-ml60hp230hsduc-i",
      "modelId": "model-mainline-ml60hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lcmh-o",
      "indoorUnitId": "iu-ml60hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230cc21-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230cc21-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230cc17-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230cc17-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230uc21-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230uc21-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230uc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230cc21-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230cc21-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230cc17-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230cc17-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230uc17-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230uc17-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230uc17-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lcmh-o-ml60hp230hsduc-i",
      "slug": "mainline-ml60hp230lcmh-o-ml60hp230hsduc-i",
      "modelId": "model-mainline-ml60hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lcmh-o",
      "indoorUnitId": "iu-ml60hp230hsduc-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnt-o-ml36hp230pcahu-i",
      "slug": "mainline-ml36hp230lmnt-o-ml36hp230pcahu-i",
      "modelId": "model-mainline-ml36hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnt-o",
      "indoorUnitId": "iu-ml36hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230pcahu-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230pcahu-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnth-o-ml36hp230pcahu-i",
      "slug": "mainline-ml36hp230lmnth-o-ml36hp230pcahu-i",
      "modelId": "model-mainline-ml36hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml36hp230lmnt-o-ml36hp230pcahu-i",
      "slug": "mainline-ml36hp230lmnt-o-ml36hp230pcahu-i",
      "modelId": "model-mainline-ml36hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml36hp230lmnt-o",
      "indoorUnitId": "iu-ml36hp230pcahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230uc14-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230uc14-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230uc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230cc14-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230cc14-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml30hp230lmnth-o-ml36hp230cc14-i",
      "slug": "mainline-ml30hp230lmnth-o-ml36hp230cc14-i",
      "modelId": "model-mainline-ml30hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml30hp230lmnth-o",
      "indoorUnitId": "iu-ml36hp230cc14-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az36aj2n-mlh2cz3617stann",
      "slug": "mainline-mlp15az36aj2n-mlh2cz3617stann",
      "modelId": "model-mainline-mlp15az36aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az36aj2n",
      "indoorUnitId": "iu-mlh2cz3617stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az30aj2n-mlh2cz3617stann",
      "slug": "mainline-mlp15az30aj2n-mlh2cz3617stann",
      "modelId": "model-mainline-mlp15az30aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az30aj2n",
      "indoorUnitId": "iu-mlh2cz3617stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az18aj2n-mlh2cz2417stann",
      "slug": "mainline-mlp15az18aj2n-mlh2cz2417stann",
      "modelId": "model-mainline-mlp15az18aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az18aj2n",
      "indoorUnitId": "iu-mlh2cz2417stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az24aj2n-mlh2cz2417stann",
      "slug": "mainline-mlp15az24aj2n-mlh2cz2417stann",
      "modelId": "model-mainline-mlp15az24aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az24aj2n",
      "indoorUnitId": "iu-mlh2cz2417stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230uc24-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230uc24-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230uc24-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230cc24-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230cc24-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230cc24-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnth-o-ml60hp230cc24-i",
      "slug": "mainline-ml60hp230lmnth-o-ml60hp230cc24-i",
      "modelId": "model-mainline-ml60hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230cc24-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-rhpxyc060ajt-iu-31371",
      "slug": "mainline-rhpxyc060ajt-iu-31371",
      "modelId": "model-mainline-rhpxyc060ajt",
      "outdoorUnitId": "ou-mainline-rhpxyc060ajt",
      "indoorUnitId": "iu-iu-31371",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-rhpxyc024ajt-iu-31368",
      "slug": "mainline-rhpxyc024ajt-iu-31368",
      "modelId": "model-mainline-rhpxyc024ajt",
      "outdoorUnitId": "ou-mainline-rhpxyc024ajt",
      "indoorUnitId": "iu-iu-31368",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-rhpxyc036ajt-iu-31369",
      "slug": "mainline-rhpxyc036ajt-iu-31369",
      "modelId": "model-mainline-rhpxyc036ajt",
      "outdoorUnitId": "ou-mainline-rhpxyc036ajt",
      "indoorUnitId": "iu-iu-31369",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-rhpxyc048ajt-iu-31370",
      "slug": "mainline-rhpxyc048ajt-iu-31370",
      "modelId": "model-mainline-rhpxyc048ajt",
      "outdoorUnitId": "ou-mainline-rhpxyc048ajt",
      "indoorUnitId": "iu-iu-31370",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnth-o-ml60hp230uc21-i",
      "slug": "mainline-ml48hp230lmnth-o-ml60hp230uc21-i",
      "modelId": "model-mainline-ml48hp230lmnth-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnth-o",
      "indoorUnitId": "iu-ml60hp230uc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lcmh-o-ml60hp230rs485ahu-i",
      "slug": "mainline-ml60hp230lcmh-o-ml60hp230rs485ahu-i",
      "modelId": "model-mainline-ml60hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lcmh-o",
      "indoorUnitId": "iu-ml60hp230rs485ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lcmh-o-ml60hp230rs485ahu-i",
      "slug": "mainline-ml60hp230lcmh-o-ml60hp230rs485ahu-i",
      "modelId": "model-mainline-ml60hp230lcmh-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lcmh-o",
      "indoorUnitId": "iu-ml60hp230rs485ahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnt-o-ml60hp230lmntahu-i",
      "slug": "mainline-ml60hp230lmnt-o-ml60hp230lmntahu-i",
      "modelId": "model-mainline-ml60hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnt-o",
      "indoorUnitId": "iu-ml60hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml60hp230lmnt-o-ml60hp230lmntahu-i",
      "slug": "mainline-ml60hp230lmnt-o-ml60hp230lmntahu-i",
      "modelId": "model-mainline-ml60hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml60hp230lmnt-o",
      "indoorUnitId": "iu-ml60hp230lmntahu-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az60aj2n-mlh2vz6024stann",
      "slug": "mainline-mlp15az60aj2n-mlh2vz6024stann",
      "modelId": "model-mainline-mlp15az60aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az60aj2n",
      "indoorUnitId": "iu-mlh2vz6024stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mpp15az18aj2n-mph2cz2417stann",
      "slug": "mainline-mpp15az18aj2n-mph2cz2417stann",
      "modelId": "model-mainline-mpp15az18aj2n",
      "outdoorUnitId": "ou-mainline-mpp15az18aj2n",
      "indoorUnitId": "iu-mph2cz2417stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mpp15az24aj2n-mph2cz2417stann",
      "slug": "mainline-mpp15az24aj2n-mph2cz2417stann",
      "modelId": "model-mainline-mpp15az24aj2n",
      "outdoorUnitId": "ou-mainline-mpp15az24aj2n",
      "indoorUnitId": "iu-mph2cz2417stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mpp15az18aj2n-tcfz2417stanm",
      "slug": "mainline-mpp15az18aj2n-tcfz2417stanm",
      "modelId": "model-mainline-mpp15az18aj2n",
      "outdoorUnitId": "ou-mainline-mpp15az18aj2n",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mpp15az24aj2n-tcfz2417stanm",
      "slug": "mainline-mpp15az24aj2n-tcfz2417stanm",
      "modelId": "model-mainline-mpp15az24aj2n",
      "outdoorUnitId": "ou-mainline-mpp15az24aj2n",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mpp15az36aj2n-mph2cz3617stann",
      "slug": "mainline-mpp15az36aj2n-mph2cz3617stann",
      "modelId": "model-mainline-mpp15az36aj2n",
      "outdoorUnitId": "ou-mainline-mpp15az36aj2n",
      "indoorUnitId": "iu-mph2cz3617stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mpp15az42aj2n-mph2cz4821stann",
      "slug": "mainline-mpp15az42aj2n-mph2cz4821stann",
      "modelId": "model-mainline-mpp15az42aj2n",
      "outdoorUnitId": "ou-mainline-mpp15az42aj2n",
      "indoorUnitId": "iu-mph2cz4821stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az48aj2n-mlh2vz4821stann",
      "slug": "mainline-mlp15az48aj2n-mlh2vz4821stann",
      "modelId": "model-mainline-mlp15az48aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az48aj2n",
      "indoorUnitId": "iu-mlh2vz4821stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mpp15az48aj2n-mph2cz4821stann",
      "slug": "mainline-mpp15az48aj2n-mph2cz4821stann",
      "modelId": "model-mainline-mpp15az48aj2n",
      "outdoorUnitId": "ou-mainline-mpp15az48aj2n",
      "indoorUnitId": "iu-mph2cz4821stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnt-o-ml60hp230cc21-i",
      "slug": "mainline-ml48hp230lmnt-o-ml60hp230cc21-i",
      "modelId": "model-mainline-ml48hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnt-o",
      "indoorUnitId": "iu-ml60hp230cc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az42aj2n-mlh2cz4821stann",
      "slug": "mainline-mlp15az42aj2n-mlh2cz4821stann",
      "modelId": "model-mainline-mlp15az42aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az42aj2n",
      "indoorUnitId": "iu-mlh2cz4821stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnt-o-ml60hp230uc21-i",
      "slug": "mainline-ml48hp230lmnt-o-ml60hp230uc21-i",
      "modelId": "model-mainline-ml48hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnt-o",
      "indoorUnitId": "iu-ml60hp230uc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az48aj2n-mlh2cz4821stann",
      "slug": "mainline-mlp15az48aj2n-mlh2cz4821stann",
      "modelId": "model-mainline-mlp15az48aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az48aj2n",
      "indoorUnitId": "iu-mlh2cz4821stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az42aj2n-mlh2vz4821stann",
      "slug": "mainline-mlp15az42aj2n-mlh2vz4821stann",
      "modelId": "model-mainline-mlp15az42aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az42aj2n",
      "indoorUnitId": "iu-mlh2vz4821stann",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-ml48hp230lmnt-o-ml60hp230cc21-i",
      "slug": "mainline-ml48hp230lmnt-o-ml60hp230cc21-i",
      "modelId": "model-mainline-ml48hp230lmnt-o",
      "outdoorUnitId": "ou-mainline-ml48hp230lmnt-o",
      "indoorUnitId": "iu-ml60hp230cc21-i",
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
          "sourceId": "src-mainline-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mainline-mlp15az36aj2n-mlh2vz3617stann",
      "slug": "mainline-mlp15az36aj2n-mlh2vz3617stann",
      "modelId": "model-mainline-mlp15az36aj2n",
      "outdoorUnitId": "ou-mainline-mlp15az36aj2n",
      "indoorUnitId": "iu-mlh2vz3617stann",
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
          "sourceId": "src-mainline-epa",
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
