import type { BrandDataset } from "../../types";

export const brand_custom_comfortDataset: BrandDataset = {
  "brand": {
    "id": "brand-custom-comfort",
    "slug": "custom-comfort",
    "name": "Custom Comfort",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Custom Comfort",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-custom-comfort-epa",
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
      "id": "series-custom-comfort-cco-series",
      "slug": "custom-comfort-cco-series",
      "name": "CCO Series",
      "brandId": "brand-custom-comfort",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CCO Series de Custom Comfort",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-custom-comfort-coox-series",
      "slug": "custom-comfort-coox-series",
      "name": "COOX Series",
      "brandId": "brand-custom-comfort",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série COOX Series de Custom Comfort",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-custom-comfort-ccox-series",
      "slug": "custom-comfort-ccox-series",
      "name": "CCOX Series",
      "brandId": "brand-custom-comfort",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CCOX Series de Custom Comfort",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-custom-comfort-ccoxhasz09hp",
      "slug": "custom-comfort-ccoxhasz09hp",
      "name": "Custom Comfort CCOXHASZ09HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ09HP",
      "normalizedModelNumber": "ccoxhasz09hp",
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
      "id": "model-custom-comfort-ccoxhbsz09hp",
      "slug": "custom-comfort-ccoxhbsz09hp",
      "name": "Custom Comfort CCOXHBSZ09HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ09HP",
      "normalizedModelNumber": "ccoxhbsz09hp",
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
      "id": "model-custom-comfort-ccoxhasz06hp",
      "slug": "custom-comfort-ccoxhasz06hp",
      "name": "Custom Comfort CCOXHASZ06HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ06HP",
      "normalizedModelNumber": "ccoxhasz06hp",
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
      "id": "model-custom-comfort-ccoesbsz09hp",
      "slug": "custom-comfort-ccoesbsz09hp",
      "name": "Custom Comfort CCOESBSZ09HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOESBSZ09HP",
      "normalizedModelNumber": "ccoesbsz09hp",
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
      "id": "model-custom-comfort-ccoesbsz12hp",
      "slug": "custom-comfort-ccoesbsz12hp",
      "name": "Custom Comfort CCOESBSZ12HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOESBSZ12HP",
      "normalizedModelNumber": "ccoesbsz12hp",
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
      "id": "model-custom-comfort-ccoesbz12hp",
      "slug": "custom-comfort-ccoesbz12hp",
      "name": "Custom Comfort CCOESBZ12HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOESBZ12HP",
      "normalizedModelNumber": "ccoesbz12hp",
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
      "id": "model-custom-comfort-ccoxhbsz06hp",
      "slug": "custom-comfort-ccoxhbsz06hp",
      "name": "Custom Comfort CCOXHBSZ06HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ06HP",
      "normalizedModelNumber": "ccoxhbsz06hp",
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
      "id": "model-custom-comfort-ccoxhasz12hp",
      "slug": "custom-comfort-ccoxhasz12hp",
      "name": "Custom Comfort CCOXHASZ12HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ12HP",
      "normalizedModelNumber": "ccoxhasz12hp",
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
      "id": "model-custom-comfort-ccoxhbsz12hp",
      "slug": "custom-comfort-ccoxhbsz12hp",
      "name": "Custom Comfort CCOXHBSZ12HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ12HP",
      "normalizedModelNumber": "ccoxhbsz12hp",
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
      "id": "model-custom-comfort-ccoesbmz318hp",
      "slug": "custom-comfort-ccoesbmz318hp",
      "name": "Custom Comfort CCOESBMZ318HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOESBMZ318HP",
      "normalizedModelNumber": "ccoesbmz318hp",
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
      "id": "model-custom-comfort-ccoxhbmz318hp",
      "slug": "custom-comfort-ccoxhbmz318hp",
      "name": "Custom Comfort CCOXHBMZ318HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBMZ318HP",
      "normalizedModelNumber": "ccoxhbmz318hp",
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
      "id": "model-custom-comfort-ccoesbmz427hp",
      "slug": "custom-comfort-ccoesbmz427hp",
      "name": "Custom Comfort CCOESBMZ427HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOESBMZ427HP",
      "normalizedModelNumber": "ccoesbmz427hp",
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
      "id": "model-custom-comfort-ccoesbmz536hp",
      "slug": "custom-comfort-ccoesbmz536hp",
      "name": "Custom Comfort CCOESBMZ536HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOESBMZ536HP",
      "normalizedModelNumber": "ccoesbmz536hp",
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
      "id": "model-custom-comfort-ccoesbsz17hp",
      "slug": "custom-comfort-ccoesbsz17hp",
      "name": "Custom Comfort CCOESBSZ17HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOESBSZ17HP",
      "normalizedModelNumber": "ccoesbsz17hp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 16000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-custom-comfort-ccoxhbmz648hp",
      "slug": "custom-comfort-ccoxhbmz648hp",
      "name": "Custom Comfort CCOXHBMZ648HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBMZ648HP",
      "normalizedModelNumber": "ccoxhbmz648hp",
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
      "id": "model-custom-comfort-ccoxhbmz427hp",
      "slug": "custom-comfort-ccoxhbmz427hp",
      "name": "Custom Comfort CCOXHBMZ427HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBMZ427HP",
      "normalizedModelNumber": "ccoxhbmz427hp",
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
      "id": "model-custom-comfort-ccoesbsz24hp",
      "slug": "custom-comfort-ccoesbsz24hp",
      "name": "Custom Comfort CCOESBSZ24HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOESBSZ24HP",
      "normalizedModelNumber": "ccoesbsz24hp",
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
      "id": "model-custom-comfort-ccoxhbmz536hp",
      "slug": "custom-comfort-ccoxhbmz536hp",
      "name": "Custom Comfort CCOXHBMZ536HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBMZ536HP",
      "normalizedModelNumber": "ccoxhbmz536hp",
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
      "id": "model-custom-comfort-ccoxhamz436hp",
      "slug": "custom-comfort-ccoxhamz436hp",
      "name": "Custom Comfort CCOXHAMZ436HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHAMZ436HP",
      "normalizedModelNumber": "ccoxhamz436hp",
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
      "id": "model-custom-comfort-ccoxhbmz655hp",
      "slug": "custom-comfort-ccoxhbmz655hp",
      "name": "Custom Comfort CCOXHBMZ655HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBMZ655HP",
      "normalizedModelNumber": "ccoxhbmz655hp",
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
      "id": "model-custom-comfort-ccoxhamz218hp",
      "slug": "custom-comfort-ccoxhamz218hp",
      "name": "Custom Comfort CCOXHAMZ218HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHAMZ218HP",
      "normalizedModelNumber": "ccoxhamz218hp",
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
      "id": "model-custom-comfort-ccoxhamz555hp",
      "slug": "custom-comfort-ccoxhamz555hp",
      "name": "Custom Comfort CCOXHAMZ555HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHAMZ555HP",
      "normalizedModelNumber": "ccoxhamz555hp",
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
      "id": "model-custom-comfort-ccoxhamz548hp",
      "slug": "custom-comfort-ccoxhamz548hp",
      "name": "Custom Comfort CCOXHAMZ548HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHAMZ548HP",
      "normalizedModelNumber": "ccoxhamz548hp",
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
      "id": "model-custom-comfort-ccoxhamz327hp",
      "slug": "custom-comfort-ccoxhamz327hp",
      "name": "Custom Comfort CCOXHAMZ327HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHAMZ327HP",
      "normalizedModelNumber": "ccoxhamz327hp",
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
      "id": "model-custom-comfort-ccoxhasz24hp",
      "slug": "custom-comfort-ccoxhasz24hp",
      "name": "Custom Comfort CCOXHASZ24HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ24HP",
      "normalizedModelNumber": "ccoxhasz24hp",
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
      "id": "model-custom-comfort-ccoxhasz17hp",
      "slug": "custom-comfort-ccoxhasz17hp",
      "name": "Custom Comfort CCOXHASZ17HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ17HP",
      "normalizedModelNumber": "ccoxhasz17hp",
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
      "id": "model-custom-comfort-ccoxhbsz17hp",
      "slug": "custom-comfort-ccoxhbsz17hp",
      "name": "Custom Comfort CCOXHBSZ17HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ17HP",
      "normalizedModelNumber": "ccoxhbsz17hp",
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
      "id": "model-custom-comfort-ccoxhbsz36chp",
      "slug": "custom-comfort-ccoxhbsz36chp",
      "name": "Custom Comfort CCOXHBSZ36CHP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ36CHP",
      "normalizedModelNumber": "ccoxhbsz36chp",
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
      "id": "model-custom-comfort-ccoxhbsz24hp",
      "slug": "custom-comfort-ccoxhbsz24hp",
      "name": "Custom Comfort CCOXHBSZ24HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ24HP",
      "normalizedModelNumber": "ccoxhbsz24hp",
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
      "id": "model-custom-comfort-ccoxhbsz33hp",
      "slug": "custom-comfort-ccoxhbsz33hp",
      "name": "Custom Comfort CCOXHBSZ33HP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ33HP",
      "normalizedModelNumber": "ccoxhbsz33hp",
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
      "id": "model-custom-comfort-ccoxhasz33hp",
      "slug": "custom-comfort-ccoxhasz33hp",
      "name": "Custom Comfort CCOXHASZ33HP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ33HP",
      "normalizedModelNumber": "ccoxhasz33hp",
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
      "id": "model-custom-comfort-ccoxhasz36chp",
      "slug": "custom-comfort-ccoxhasz36chp",
      "name": "Custom Comfort CCOXHASZ36CHP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ36CHP",
      "normalizedModelNumber": "ccoxhasz36chp",
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
      "id": "model-custom-comfort-ccoxhb24v18hp",
      "slug": "custom-comfort-ccoxhb24v18hp",
      "name": "Custom Comfort CCOXHB24V18HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHB24V18HP",
      "normalizedModelNumber": "ccoxhb24v18hp",
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
      "id": "model-custom-comfort-ccoxhbsz48chp",
      "slug": "custom-comfort-ccoxhbsz48chp",
      "name": "Custom Comfort CCOXHBSZ48CHP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ48CHP",
      "normalizedModelNumber": "ccoxhbsz48chp",
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
      "id": "model-custom-comfort-ccoxhb24v24hp",
      "slug": "custom-comfort-ccoxhb24v24hp",
      "name": "Custom Comfort CCOXHB24V24HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHB24V24HP",
      "normalizedModelNumber": "ccoxhb24v24hp",
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
      "id": "model-custom-comfort-ccoxha24v18hp",
      "slug": "custom-comfort-ccoxha24v18hp",
      "name": "Custom Comfort CCOXHA24V18HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHA24V18HP",
      "normalizedModelNumber": "ccoxha24v18hp",
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
      "id": "model-custom-comfort-ccoxhbsz60chp",
      "slug": "custom-comfort-ccoxhbsz60chp",
      "name": "Custom Comfort CCOXHBSZ60CHP",
      "seriesId": "series-custom-comfort-coox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHBSZ60CHP",
      "normalizedModelNumber": "ccoxhbsz60chp",
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
      "id": "model-custom-comfort-ccoxha24v24hp",
      "slug": "custom-comfort-ccoxha24v24hp",
      "name": "Custom Comfort CCOXHA24V24HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHA24V24HP",
      "normalizedModelNumber": "ccoxha24v24hp",
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
      "id": "model-custom-comfort-ccoxhb24v36hp",
      "slug": "custom-comfort-ccoxhb24v36hp",
      "name": "Custom Comfort CCOXHB24V36HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHB24V36HP",
      "normalizedModelNumber": "ccoxhb24v36hp",
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
      "id": "model-custom-comfort-ccoxhasz60chp",
      "slug": "custom-comfort-ccoxhasz60chp",
      "name": "Custom Comfort CCOXHASZ60CHP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ60CHP",
      "normalizedModelNumber": "ccoxhasz60chp",
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
      "id": "model-custom-comfort-ccoxhasz48chp",
      "slug": "custom-comfort-ccoxhasz48chp",
      "name": "Custom Comfort CCOXHASZ48CHP",
      "seriesId": "series-custom-comfort-cco-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHASZ48CHP",
      "normalizedModelNumber": "ccoxhasz48chp",
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
      "id": "model-custom-comfort-ccoxhb24v30hp",
      "slug": "custom-comfort-ccoxhb24v30hp",
      "name": "Custom Comfort CCOXHB24V30HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHB24V30HP",
      "normalizedModelNumber": "ccoxhb24v30hp",
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
      "id": "model-custom-comfort-ccoxhb24v48hp",
      "slug": "custom-comfort-ccoxhb24v48hp",
      "name": "Custom Comfort CCOXHB24V48HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHB24V48HP",
      "normalizedModelNumber": "ccoxhb24v48hp",
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
      "id": "model-custom-comfort-ccoxha24v30hp",
      "slug": "custom-comfort-ccoxha24v30hp",
      "name": "Custom Comfort CCOXHA24V30HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHA24V30HP",
      "normalizedModelNumber": "ccoxha24v30hp",
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
      "id": "model-custom-comfort-ccoxhb24v60hp",
      "slug": "custom-comfort-ccoxhb24v60hp",
      "name": "Custom Comfort CCOXHB24V60HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHB24V60HP",
      "normalizedModelNumber": "ccoxhb24v60hp",
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
      "id": "model-custom-comfort-ccoxha24v36hp",
      "slug": "custom-comfort-ccoxha24v36hp",
      "name": "Custom Comfort CCOXHA24V36HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHA24V36HP",
      "normalizedModelNumber": "ccoxha24v36hp",
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
      "id": "model-custom-comfort-ccoxha24v48hp",
      "slug": "custom-comfort-ccoxha24v48hp",
      "name": "Custom Comfort CCOXHA24V48HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHA24V48HP",
      "normalizedModelNumber": "ccoxha24v48hp",
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
      "id": "model-custom-comfort-ccoxha24v60hp",
      "slug": "custom-comfort-ccoxha24v60hp",
      "name": "Custom Comfort CCOXHA24V60HP",
      "seriesId": "series-custom-comfort-ccox-series",
      "brandId": "brand-custom-comfort",
      "modelNumber": "CCOXHA24V60HP",
      "normalizedModelNumber": "ccoxha24v60hp",
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
      "id": "ou-custom-comfort-ccoxhasz09hp",
      "modelNumber": "CCOXHASZ09HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz09hp",
      "modelNumber": "CCOXHBSZ09HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhasz06hp",
      "modelNumber": "CCOXHASZ06HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoesbsz09hp",
      "modelNumber": "CCOESBSZ09HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoesbsz12hp",
      "modelNumber": "CCOESBSZ12HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoesbz12hp",
      "modelNumber": "CCOESBZ12HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz06hp",
      "modelNumber": "CCOXHBSZ06HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhasz12hp",
      "modelNumber": "CCOXHASZ12HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz12hp",
      "modelNumber": "CCOXHBSZ12HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoesbmz318hp",
      "modelNumber": "CCOESBMZ318HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbmz318hp",
      "modelNumber": "CCOXHBMZ318HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoesbmz427hp",
      "modelNumber": "CCOESBMZ427HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoesbmz536hp",
      "modelNumber": "CCOESBMZ536HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoesbsz17hp",
      "modelNumber": "CCOESBSZ17HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbmz648hp",
      "modelNumber": "CCOXHBMZ648HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbmz427hp",
      "modelNumber": "CCOXHBMZ427HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoesbsz24hp",
      "modelNumber": "CCOESBSZ24HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbmz536hp",
      "modelNumber": "CCOXHBMZ536HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhamz436hp",
      "modelNumber": "CCOXHAMZ436HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhbmz655hp",
      "modelNumber": "CCOXHBMZ655HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhamz218hp",
      "modelNumber": "CCOXHAMZ218HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhamz555hp",
      "modelNumber": "CCOXHAMZ555HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhamz548hp",
      "modelNumber": "CCOXHAMZ548HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhamz327hp",
      "modelNumber": "CCOXHAMZ327HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhasz24hp",
      "modelNumber": "CCOXHASZ24HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhasz17hp",
      "modelNumber": "CCOXHASZ17HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz17hp",
      "modelNumber": "CCOXHBSZ17HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz36chp",
      "modelNumber": "CCOXHBSZ36CHP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz24hp",
      "modelNumber": "CCOXHBSZ24HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz33hp",
      "modelNumber": "CCOXHBSZ33HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhasz33hp",
      "modelNumber": "CCOXHASZ33HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhasz36chp",
      "modelNumber": "CCOXHASZ36CHP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhb24v18hp",
      "modelNumber": "CCOXHB24V18HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz48chp",
      "modelNumber": "CCOXHBSZ48CHP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhb24v24hp",
      "modelNumber": "CCOXHB24V24HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxha24v18hp",
      "modelNumber": "CCOXHA24V18HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhbsz60chp",
      "modelNumber": "CCOXHBSZ60CHP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxha24v24hp",
      "modelNumber": "CCOXHA24V24HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhb24v36hp",
      "modelNumber": "CCOXHB24V36HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhasz60chp",
      "modelNumber": "CCOXHASZ60CHP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhasz48chp",
      "modelNumber": "CCOXHASZ48CHP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhb24v30hp",
      "modelNumber": "CCOXHB24V30HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxhb24v48hp",
      "modelNumber": "CCOXHB24V48HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxha24v30hp",
      "modelNumber": "CCOXHA24V30HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxhb24v60hp",
      "modelNumber": "CCOXHB24V60HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-custom-comfort-ccoxha24v36hp",
      "modelNumber": "CCOXHA24V36HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxha24v48hp",
      "modelNumber": "CCOXHA24V48HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-custom-comfort-ccoxha24v60hp",
      "modelNumber": "CCOXHA24V60HP",
      "brandId": "brand-custom-comfort",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ccoxhawm09",
      "modelNumber": "CCOXHAWM09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbwm09",
      "modelNumber": "CCOXHBWM09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbfm09",
      "modelNumber": "CCOXHBFM09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhawm06",
      "modelNumber": "CCOXHAWM06",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbwm12",
      "modelNumber": "CCOXHBWM12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbwm06",
      "modelNumber": "CCOXHBWM06",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhawm12",
      "modelNumber": "CCOXHAWM12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43450",
      "modelNumber": "IU-43450",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbfm12",
      "modelNumber": "CCOXHBFM12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43509",
      "modelNumber": "IU-43509",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43451",
      "modelNumber": "IU-43451",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhafm12",
      "modelNumber": "CCOXHAFM12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha1c09",
      "modelNumber": "CCOXHA1C09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb1c09",
      "modelNumber": "CCOXHB1C09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43452",
      "modelNumber": "IU-43452",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbfm18",
      "modelNumber": "CCOXHBFM18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbwm18",
      "modelNumber": "CCOXHBWM18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43512",
      "modelNumber": "IU-43512",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43510",
      "modelNumber": "IU-43510",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbwm24",
      "modelNumber": "CCOXHBWM24",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha1c12",
      "modelNumber": "CCOXHA1C12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb1c12",
      "modelNumber": "CCOXHB1C12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43511",
      "modelNumber": "IU-43511",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb4c09",
      "modelNumber": "CCOXHB4C09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbfc18",
      "modelNumber": "CCOXHBFC18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha4c12",
      "modelNumber": "CCOXHA4C12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43476",
      "modelNumber": "IU-43476",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43513",
      "modelNumber": "IU-43513",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb4c12",
      "modelNumber": "CCOXHB4C12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb1c18",
      "modelNumber": "CCOXHB1C18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43474",
      "modelNumber": "IU-43474",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb4c24",
      "modelNumber": "CCOXHB4C24",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha1c06",
      "modelNumber": "CCOXHA1C06",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb1c06",
      "modelNumber": "CCOXHB1C06",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43478",
      "modelNumber": "IU-43478",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43477",
      "modelNumber": "IU-43477",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43475",
      "modelNumber": "IU-43475",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhawm24",
      "modelNumber": "CCOXHAWM24",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhawm18",
      "modelNumber": "CCOXHAWM18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbsd06",
      "modelNumber": "CCOXHBSD06",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb4c36",
      "modelNumber": "CCOXHB4C36",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbfc24",
      "modelNumber": "CCOXHBFC24",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb4c18",
      "modelNumber": "CCOXHB4C18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha4c09",
      "modelNumber": "CCOXHA4C09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhafc18",
      "modelNumber": "CCOXHAFC18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhafc24",
      "modelNumber": "CCOXHAFC24",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha4c24",
      "modelNumber": "CCOXHA4C24",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbsd09",
      "modelNumber": "CCOXHBSD09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhasd09",
      "modelNumber": "CCOXHASD09",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhafm18",
      "modelNumber": "CCOXHAFM18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha4c18",
      "modelNumber": "CCOXHA4C18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbsd18",
      "modelNumber": "CCOXHBSD18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbfc36",
      "modelNumber": "CCOXHBFC36",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbsd12",
      "modelNumber": "CCOXHBSD12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha1c18",
      "modelNumber": "CCOXHA1C18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbahu24",
      "modelNumber": "CCOXHBAHU24",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhasd12",
      "modelNumber": "CCOXHASD12",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbwm33",
      "modelNumber": "CCOXHBWM33",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhawm33",
      "modelNumber": "CCOXHAWM33",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxha4c36",
      "modelNumber": "CCOXHA4C36",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhasd24",
      "modelNumber": "CCOXHASD24",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbsd24",
      "modelNumber": "CCOXHBSD24",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbah24v18",
      "modelNumber": "CCOXHBAH24V18",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbahu18",
      "modelNumber": "CCOXHBAHU18",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbfc48",
      "modelNumber": "CCOXHBFC48",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhaahu24",
      "modelNumber": "CCOXHAAHU24",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbah24v24",
      "modelNumber": "CCOXHBAH24V24",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhaah24v18",
      "modelNumber": "CCOXHAAH24V18",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbfc60",
      "modelNumber": "CCOXHBFC60",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhb4c48",
      "modelNumber": "CCOXHB4C48",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhasd18",
      "modelNumber": "CCOXHASD18",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbsd36",
      "modelNumber": "CCOXHBSD36",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhaahu18",
      "modelNumber": "CCOXHAAHU18",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhafc36",
      "modelNumber": "CCOXHAFC36",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhaah24v24",
      "modelNumber": "CCOXHAAH24V24",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbah24v36",
      "modelNumber": "CCOXHBAH24V36",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhafc60",
      "modelNumber": "CCOXHAFC60",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbahuc36",
      "modelNumber": "CCOXHBAHUC36",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhafc48",
      "modelNumber": "CCOXHAFC48",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhasd48",
      "modelNumber": "CCOXHASD48",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbahuc48",
      "modelNumber": "CCOXHBAHUC48",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbah24v30",
      "modelNumber": "CCOXHBAH24V30",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxha4c48",
      "modelNumber": "CCOXHA4C48",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbsd48",
      "modelNumber": "CCOXHBSD48",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoacc1824b",
      "modelNumber": "CCOACC1824B",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbahu36",
      "modelNumber": "CCOXHBAHU36",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhasd36",
      "modelNumber": "CCOXHASD36",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbah24v48",
      "modelNumber": "CCOXHBAH24V48",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhaah24v30",
      "modelNumber": "CCOXHAAH24V30",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoacc24a",
      "modelNumber": "CCOACC24A",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccobcc1824a",
      "modelNumber": "CCOBCC1824A",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoehacc24a",
      "modelNumber": "CCOEHACC24A",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccobcc1824b",
      "modelNumber": "CCOBCC1824B",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccobcc3036c",
      "modelNumber": "CCOBCC3036C",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbah24v60",
      "modelNumber": "CCOXHBAH24V60",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhaah24v36",
      "modelNumber": "CCOXHAAH24V36",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccobcc4860c",
      "modelNumber": "CCOBCC4860C",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccobcc3036b",
      "modelNumber": "CCOBCC3036B",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhasd60",
      "modelNumber": "CCOXHASD60",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhbsd60",
      "modelNumber": "CCOXHBSD60",
      "brandId": "brand-custom-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-ccoxhaah24v48",
      "modelNumber": "CCOXHAAH24V48",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhaahuc60",
      "modelNumber": "CCOXHAAHUC60",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoacc3036c",
      "modelNumber": "CCOACC3036C",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoacc3036b",
      "modelNumber": "CCOACC3036B",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoehacc3036b",
      "modelNumber": "CCOEHACC3036B",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhaah24v60",
      "modelNumber": "CCOXHAAH24V60",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccobcc4860d",
      "modelNumber": "CCOBCC4860D",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-ccoxhbahuc60",
      "modelNumber": "CCOXHBAHUC60",
      "brandId": "brand-custom-comfort",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-custom-comfort-ccoxhasz09hp-ccoxhawm09",
      "slug": "custom-comfort-ccoxhasz09hp-ccoxhawm09",
      "modelId": "model-custom-comfort-ccoxhasz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz09hp",
      "indoorUnitId": "iu-ccoxhawm09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz09hp-ccoxhbwm09",
      "slug": "custom-comfort-ccoxhbsz09hp-ccoxhbwm09",
      "modelId": "model-custom-comfort-ccoxhbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz09hp",
      "indoorUnitId": "iu-ccoxhbwm09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz09hp-ccoxhbfm09",
      "slug": "custom-comfort-ccoxhbsz09hp-ccoxhbfm09",
      "modelId": "model-custom-comfort-ccoxhbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz09hp",
      "indoorUnitId": "iu-ccoxhbfm09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz06hp-ccoxhawm06",
      "slug": "custom-comfort-ccoxhasz06hp-ccoxhawm06",
      "modelId": "model-custom-comfort-ccoxhasz06hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz06hp",
      "indoorUnitId": "iu-ccoxhawm06",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz09hp-ccoxhbfm09",
      "slug": "custom-comfort-ccoesbsz09hp-ccoxhbfm09",
      "modelId": "model-custom-comfort-ccoesbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz09hp",
      "indoorUnitId": "iu-ccoxhbfm09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz09hp-ccoxhbwm09",
      "slug": "custom-comfort-ccoesbsz09hp-ccoxhbwm09",
      "modelId": "model-custom-comfort-ccoesbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz09hp",
      "indoorUnitId": "iu-ccoxhbwm09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz12hp-ccoxhbwm12",
      "slug": "custom-comfort-ccoesbsz12hp-ccoxhbwm12",
      "modelId": "model-custom-comfort-ccoesbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz12hp",
      "indoorUnitId": "iu-ccoxhbwm12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbz12hp-ccoxhbwm12",
      "slug": "custom-comfort-ccoesbz12hp-ccoxhbwm12",
      "modelId": "model-custom-comfort-ccoesbz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbz12hp",
      "indoorUnitId": "iu-ccoxhbwm12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz06hp-ccoxhbwm06",
      "slug": "custom-comfort-ccoxhbsz06hp-ccoxhbwm06",
      "modelId": "model-custom-comfort-ccoxhbsz06hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz06hp",
      "indoorUnitId": "iu-ccoxhbwm06",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz12hp-ccoxhawm12",
      "slug": "custom-comfort-ccoxhasz12hp-ccoxhawm12",
      "modelId": "model-custom-comfort-ccoxhasz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz12hp",
      "indoorUnitId": "iu-ccoxhawm12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz12hp-ccoxhbwm12",
      "slug": "custom-comfort-ccoxhbsz12hp-ccoxhbwm12",
      "modelId": "model-custom-comfort-ccoxhbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz12hp",
      "indoorUnitId": "iu-ccoxhbwm12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbmz318hp-iu-43450",
      "slug": "custom-comfort-ccoesbmz318hp-iu-43450",
      "modelId": "model-custom-comfort-ccoesbmz318hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbmz318hp",
      "indoorUnitId": "iu-iu-43450",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz12hp-ccoxhbfm12",
      "slug": "custom-comfort-ccoxhbsz12hp-ccoxhbfm12",
      "modelId": "model-custom-comfort-ccoxhbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz12hp",
      "indoorUnitId": "iu-ccoxhbfm12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbmz318hp-iu-43509",
      "slug": "custom-comfort-ccoxhbmz318hp-iu-43509",
      "modelId": "model-custom-comfort-ccoxhbmz318hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbmz318hp",
      "indoorUnitId": "iu-iu-43509",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbmz427hp-iu-43451",
      "slug": "custom-comfort-ccoesbmz427hp-iu-43451",
      "modelId": "model-custom-comfort-ccoesbmz427hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbmz427hp",
      "indoorUnitId": "iu-iu-43451",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz12hp-ccoxhbfm12",
      "slug": "custom-comfort-ccoesbsz12hp-ccoxhbfm12",
      "modelId": "model-custom-comfort-ccoesbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz12hp",
      "indoorUnitId": "iu-ccoxhbfm12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz12hp-ccoxhafm12",
      "slug": "custom-comfort-ccoxhasz12hp-ccoxhafm12",
      "modelId": "model-custom-comfort-ccoxhasz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz12hp",
      "indoorUnitId": "iu-ccoxhafm12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz09hp-ccoxha1c09",
      "slug": "custom-comfort-ccoxhasz09hp-ccoxha1c09",
      "modelId": "model-custom-comfort-ccoxhasz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz09hp",
      "indoorUnitId": "iu-ccoxha1c09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz09hp-ccoxhb1c09",
      "slug": "custom-comfort-ccoxhbsz09hp-ccoxhb1c09",
      "modelId": "model-custom-comfort-ccoxhbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz09hp",
      "indoorUnitId": "iu-ccoxhb1c09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbmz536hp-iu-43452",
      "slug": "custom-comfort-ccoesbmz536hp-iu-43452",
      "modelId": "model-custom-comfort-ccoesbmz536hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbmz536hp",
      "indoorUnitId": "iu-iu-43452",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz17hp-ccoxhbfm18",
      "slug": "custom-comfort-ccoesbsz17hp-ccoxhbfm18",
      "modelId": "model-custom-comfort-ccoesbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz17hp",
      "indoorUnitId": "iu-ccoxhbfm18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz17hp-ccoxhbwm18",
      "slug": "custom-comfort-ccoesbsz17hp-ccoxhbwm18",
      "modelId": "model-custom-comfort-ccoesbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz17hp",
      "indoorUnitId": "iu-ccoxhbwm18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbmz648hp-iu-43512",
      "slug": "custom-comfort-ccoxhbmz648hp-iu-43512",
      "modelId": "model-custom-comfort-ccoxhbmz648hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbmz648hp",
      "indoorUnitId": "iu-iu-43512",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbmz427hp-iu-43510",
      "slug": "custom-comfort-ccoxhbmz427hp-iu-43510",
      "modelId": "model-custom-comfort-ccoxhbmz427hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbmz427hp",
      "indoorUnitId": "iu-iu-43510",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz24hp-ccoxhbwm24",
      "slug": "custom-comfort-ccoesbsz24hp-ccoxhbwm24",
      "modelId": "model-custom-comfort-ccoesbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz24hp",
      "indoorUnitId": "iu-ccoxhbwm24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz12hp-ccoxha1c12",
      "slug": "custom-comfort-ccoxhasz12hp-ccoxha1c12",
      "modelId": "model-custom-comfort-ccoxhasz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz12hp",
      "indoorUnitId": "iu-ccoxha1c12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz12hp-ccoxhb1c12",
      "slug": "custom-comfort-ccoxhbsz12hp-ccoxhb1c12",
      "modelId": "model-custom-comfort-ccoxhbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz12hp",
      "indoorUnitId": "iu-ccoxhb1c12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbmz536hp-iu-43511",
      "slug": "custom-comfort-ccoxhbmz536hp-iu-43511",
      "modelId": "model-custom-comfort-ccoxhbmz536hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbmz536hp",
      "indoorUnitId": "iu-iu-43511",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz09hp-ccoxhb4c09",
      "slug": "custom-comfort-ccoxhbsz09hp-ccoxhb4c09",
      "modelId": "model-custom-comfort-ccoxhbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz09hp",
      "indoorUnitId": "iu-ccoxhb4c09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz17hp-ccoxhbfc18",
      "slug": "custom-comfort-ccoesbsz17hp-ccoxhbfc18",
      "modelId": "model-custom-comfort-ccoesbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz17hp",
      "indoorUnitId": "iu-ccoxhbfc18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz12hp-ccoxha4c12",
      "slug": "custom-comfort-ccoxhasz12hp-ccoxha4c12",
      "modelId": "model-custom-comfort-ccoxhasz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz12hp",
      "indoorUnitId": "iu-ccoxha4c12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhamz436hp-iu-43476",
      "slug": "custom-comfort-ccoxhamz436hp-iu-43476",
      "modelId": "model-custom-comfort-ccoxhamz436hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhamz436hp",
      "indoorUnitId": "iu-iu-43476",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbmz655hp-iu-43513",
      "slug": "custom-comfort-ccoxhbmz655hp-iu-43513",
      "modelId": "model-custom-comfort-ccoxhbmz655hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbmz655hp",
      "indoorUnitId": "iu-iu-43513",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz12hp-ccoxhb4c12",
      "slug": "custom-comfort-ccoxhbsz12hp-ccoxhb4c12",
      "modelId": "model-custom-comfort-ccoxhbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz12hp",
      "indoorUnitId": "iu-ccoxhb4c12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz17hp-ccoxhb1c18",
      "slug": "custom-comfort-ccoesbsz17hp-ccoxhb1c18",
      "modelId": "model-custom-comfort-ccoesbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz17hp",
      "indoorUnitId": "iu-ccoxhb1c18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz09hp-ccoxhb1c09",
      "slug": "custom-comfort-ccoesbsz09hp-ccoxhb1c09",
      "modelId": "model-custom-comfort-ccoesbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz09hp",
      "indoorUnitId": "iu-ccoxhb1c09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz12hp-ccoxhb1c12",
      "slug": "custom-comfort-ccoesbsz12hp-ccoxhb1c12",
      "modelId": "model-custom-comfort-ccoesbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz12hp",
      "indoorUnitId": "iu-ccoxhb1c12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhamz218hp-iu-43474",
      "slug": "custom-comfort-ccoxhamz218hp-iu-43474",
      "modelId": "model-custom-comfort-ccoxhamz218hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhamz218hp",
      "indoorUnitId": "iu-iu-43474",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz24hp-ccoxhb4c24",
      "slug": "custom-comfort-ccoesbsz24hp-ccoxhb4c24",
      "modelId": "model-custom-comfort-ccoesbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz24hp",
      "indoorUnitId": "iu-ccoxhb4c24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz06hp-ccoxha1c06",
      "slug": "custom-comfort-ccoxhasz06hp-ccoxha1c06",
      "modelId": "model-custom-comfort-ccoxhasz06hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz06hp",
      "indoorUnitId": "iu-ccoxha1c06",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz06hp-ccoxhb1c06",
      "slug": "custom-comfort-ccoxhbsz06hp-ccoxhb1c06",
      "modelId": "model-custom-comfort-ccoxhbsz06hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz06hp",
      "indoorUnitId": "iu-ccoxhb1c06",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhamz555hp-iu-43478",
      "slug": "custom-comfort-ccoxhamz555hp-iu-43478",
      "modelId": "model-custom-comfort-ccoxhamz555hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhamz555hp",
      "indoorUnitId": "iu-iu-43478",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhamz548hp-iu-43477",
      "slug": "custom-comfort-ccoxhamz548hp-iu-43477",
      "modelId": "model-custom-comfort-ccoxhamz548hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhamz548hp",
      "indoorUnitId": "iu-iu-43477",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhamz327hp-iu-43475",
      "slug": "custom-comfort-ccoxhamz327hp-iu-43475",
      "modelId": "model-custom-comfort-ccoxhamz327hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhamz327hp",
      "indoorUnitId": "iu-iu-43475",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz09hp-ccoxhb4c09",
      "slug": "custom-comfort-ccoesbsz09hp-ccoxhb4c09",
      "modelId": "model-custom-comfort-ccoesbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz09hp",
      "indoorUnitId": "iu-ccoxhb4c09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz24hp-ccoxhawm24",
      "slug": "custom-comfort-ccoxhasz24hp-ccoxhawm24",
      "modelId": "model-custom-comfort-ccoxhasz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz24hp",
      "indoorUnitId": "iu-ccoxhawm24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz17hp-ccoxhawm18",
      "slug": "custom-comfort-ccoxhasz17hp-ccoxhawm18",
      "modelId": "model-custom-comfort-ccoxhasz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz17hp",
      "indoorUnitId": "iu-ccoxhawm18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz17hp-ccoxhbwm18",
      "slug": "custom-comfort-ccoxhbsz17hp-ccoxhbwm18",
      "modelId": "model-custom-comfort-ccoxhbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz17hp",
      "indoorUnitId": "iu-ccoxhbwm18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz06hp-ccoxhbsd06",
      "slug": "custom-comfort-ccoxhbsz06hp-ccoxhbsd06",
      "modelId": "model-custom-comfort-ccoxhbsz06hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz06hp",
      "indoorUnitId": "iu-ccoxhbsd06",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz36chp-ccoxhb4c36",
      "slug": "custom-comfort-ccoxhbsz36chp-ccoxhb4c36",
      "modelId": "model-custom-comfort-ccoxhbsz36chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz36chp",
      "indoorUnitId": "iu-ccoxhb4c36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz12hp-ccoxhb4c12",
      "slug": "custom-comfort-ccoesbsz12hp-ccoxhb4c12",
      "modelId": "model-custom-comfort-ccoesbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz12hp",
      "indoorUnitId": "iu-ccoxhb4c12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz24hp-ccoxhbfc24",
      "slug": "custom-comfort-ccoesbsz24hp-ccoxhbfc24",
      "modelId": "model-custom-comfort-ccoesbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz24hp",
      "indoorUnitId": "iu-ccoxhbfc24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz24hp-ccoxhbwm24",
      "slug": "custom-comfort-ccoxhbsz24hp-ccoxhbwm24",
      "modelId": "model-custom-comfort-ccoxhbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz24hp",
      "indoorUnitId": "iu-ccoxhbwm24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz24hp-ccoxhb4c24",
      "slug": "custom-comfort-ccoxhbsz24hp-ccoxhb4c24",
      "modelId": "model-custom-comfort-ccoxhbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz24hp",
      "indoorUnitId": "iu-ccoxhb4c24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz17hp-ccoxhb4c18",
      "slug": "custom-comfort-ccoesbsz17hp-ccoxhb4c18",
      "modelId": "model-custom-comfort-ccoesbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz17hp",
      "indoorUnitId": "iu-ccoxhb4c18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz17hp-ccoxhb1c18",
      "slug": "custom-comfort-ccoxhbsz17hp-ccoxhb1c18",
      "modelId": "model-custom-comfort-ccoxhbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz17hp",
      "indoorUnitId": "iu-ccoxhb1c18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz09hp-ccoxha4c09",
      "slug": "custom-comfort-ccoxhasz09hp-ccoxha4c09",
      "modelId": "model-custom-comfort-ccoxhasz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz09hp",
      "indoorUnitId": "iu-ccoxha4c09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz17hp-ccoxhafc18",
      "slug": "custom-comfort-ccoxhasz17hp-ccoxhafc18",
      "modelId": "model-custom-comfort-ccoxhasz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz17hp",
      "indoorUnitId": "iu-ccoxhafc18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz24hp-ccoxhafc24",
      "slug": "custom-comfort-ccoxhasz24hp-ccoxhafc24",
      "modelId": "model-custom-comfort-ccoxhasz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz24hp",
      "indoorUnitId": "iu-ccoxhafc24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz24hp-ccoxha4c24",
      "slug": "custom-comfort-ccoxhasz24hp-ccoxha4c24",
      "modelId": "model-custom-comfort-ccoxhasz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz24hp",
      "indoorUnitId": "iu-ccoxha4c24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz09hp-ccoxhbsd09",
      "slug": "custom-comfort-ccoxhbsz09hp-ccoxhbsd09",
      "modelId": "model-custom-comfort-ccoxhbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz09hp",
      "indoorUnitId": "iu-ccoxhbsd09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz24hp-ccoxhbfc24",
      "slug": "custom-comfort-ccoxhbsz24hp-ccoxhbfc24",
      "modelId": "model-custom-comfort-ccoxhbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz24hp",
      "indoorUnitId": "iu-ccoxhbfc24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz17hp-ccoxhbfc18",
      "slug": "custom-comfort-ccoxhbsz17hp-ccoxhbfc18",
      "modelId": "model-custom-comfort-ccoxhbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz17hp",
      "indoorUnitId": "iu-ccoxhbfc18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz09hp-ccoxhasd09",
      "slug": "custom-comfort-ccoxhasz09hp-ccoxhasd09",
      "modelId": "model-custom-comfort-ccoxhasz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz09hp",
      "indoorUnitId": "iu-ccoxhasd09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz17hp-ccoxhafm18",
      "slug": "custom-comfort-ccoxhasz17hp-ccoxhafm18",
      "modelId": "model-custom-comfort-ccoxhasz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz17hp",
      "indoorUnitId": "iu-ccoxhafm18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz17hp-ccoxha4c18",
      "slug": "custom-comfort-ccoxhasz17hp-ccoxha4c18",
      "modelId": "model-custom-comfort-ccoxhasz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz17hp",
      "indoorUnitId": "iu-ccoxha4c18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz17hp-ccoxhb4c18",
      "slug": "custom-comfort-ccoxhbsz17hp-ccoxhb4c18",
      "modelId": "model-custom-comfort-ccoxhbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz17hp",
      "indoorUnitId": "iu-ccoxhb4c18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz17hp-ccoxhbsd18",
      "slug": "custom-comfort-ccoesbsz17hp-ccoxhbsd18",
      "modelId": "model-custom-comfort-ccoesbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz17hp",
      "indoorUnitId": "iu-ccoxhbsd18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz36chp-ccoxhbfc36",
      "slug": "custom-comfort-ccoxhbsz36chp-ccoxhbfc36",
      "modelId": "model-custom-comfort-ccoxhbsz36chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz36chp",
      "indoorUnitId": "iu-ccoxhbfc36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz17hp-ccoxhbfm18",
      "slug": "custom-comfort-ccoxhbsz17hp-ccoxhbfm18",
      "modelId": "model-custom-comfort-ccoxhbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz17hp",
      "indoorUnitId": "iu-ccoxhbfm18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz12hp-ccoxhbsd12",
      "slug": "custom-comfort-ccoxhbsz12hp-ccoxhbsd12",
      "modelId": "model-custom-comfort-ccoxhbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz12hp",
      "indoorUnitId": "iu-ccoxhbsd12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz17hp-ccoxha1c18",
      "slug": "custom-comfort-ccoxhasz17hp-ccoxha1c18",
      "modelId": "model-custom-comfort-ccoxhasz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz17hp",
      "indoorUnitId": "iu-ccoxha1c18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz09hp-ccoxhbsd09",
      "slug": "custom-comfort-ccoesbsz09hp-ccoxhbsd09",
      "modelId": "model-custom-comfort-ccoesbsz09hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz09hp",
      "indoorUnitId": "iu-ccoxhbsd09",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz24hp-ccoxhbahu24",
      "slug": "custom-comfort-ccoesbsz24hp-ccoxhbahu24",
      "modelId": "model-custom-comfort-ccoesbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz24hp",
      "indoorUnitId": "iu-ccoxhbahu24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz12hp-ccoxhasd12",
      "slug": "custom-comfort-ccoxhasz12hp-ccoxhasd12",
      "modelId": "model-custom-comfort-ccoxhasz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz12hp",
      "indoorUnitId": "iu-ccoxhasd12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz12hp-ccoxhbsd12",
      "slug": "custom-comfort-ccoesbsz12hp-ccoxhbsd12",
      "modelId": "model-custom-comfort-ccoesbsz12hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz12hp",
      "indoorUnitId": "iu-ccoxhbsd12",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz33hp-ccoxhbwm33",
      "slug": "custom-comfort-ccoxhbsz33hp-ccoxhbwm33",
      "modelId": "model-custom-comfort-ccoxhbsz33hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz33hp",
      "indoorUnitId": "iu-ccoxhbwm33",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz33hp-ccoxhawm33",
      "slug": "custom-comfort-ccoxhasz33hp-ccoxhawm33",
      "modelId": "model-custom-comfort-ccoxhasz33hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz33hp",
      "indoorUnitId": "iu-ccoxhawm33",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz36chp-ccoxha4c36",
      "slug": "custom-comfort-ccoxhasz36chp-ccoxha4c36",
      "modelId": "model-custom-comfort-ccoxhasz36chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz36chp",
      "indoorUnitId": "iu-ccoxha4c36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz24hp-ccoxhasd24",
      "slug": "custom-comfort-ccoxhasz24hp-ccoxhasd24",
      "modelId": "model-custom-comfort-ccoxhasz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz24hp",
      "indoorUnitId": "iu-ccoxhasd24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz24hp-ccoxhbsd24",
      "slug": "custom-comfort-ccoxhbsz24hp-ccoxhbsd24",
      "modelId": "model-custom-comfort-ccoxhbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz24hp",
      "indoorUnitId": "iu-ccoxhbsd24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz24hp-ccoxhbsd24",
      "slug": "custom-comfort-ccoesbsz24hp-ccoxhbsd24",
      "modelId": "model-custom-comfort-ccoesbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz24hp",
      "indoorUnitId": "iu-ccoxhbsd24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v18hp-ccoxhbah24v18",
      "slug": "custom-comfort-ccoxhb24v18hp-ccoxhbah24v18",
      "modelId": "model-custom-comfort-ccoxhb24v18hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v18hp",
      "indoorUnitId": "iu-ccoxhbah24v18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz24hp-ccoxhbahu24",
      "slug": "custom-comfort-ccoxhbsz24hp-ccoxhbahu24",
      "modelId": "model-custom-comfort-ccoxhbsz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz24hp",
      "indoorUnitId": "iu-ccoxhbahu24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoesbsz17hp-ccoxhbahu18",
      "slug": "custom-comfort-ccoesbsz17hp-ccoxhbahu18",
      "modelId": "model-custom-comfort-ccoesbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoesbsz17hp",
      "indoorUnitId": "iu-ccoxhbahu18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz48chp-ccoxhbfc48",
      "slug": "custom-comfort-ccoxhbsz48chp-ccoxhbfc48",
      "modelId": "model-custom-comfort-ccoxhbsz48chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz48chp",
      "indoorUnitId": "iu-ccoxhbfc48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz17hp-ccoxhbsd18",
      "slug": "custom-comfort-ccoxhbsz17hp-ccoxhbsd18",
      "modelId": "model-custom-comfort-ccoxhbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz17hp",
      "indoorUnitId": "iu-ccoxhbsd18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz24hp-ccoxhaahu24",
      "slug": "custom-comfort-ccoxhasz24hp-ccoxhaahu24",
      "modelId": "model-custom-comfort-ccoxhasz24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz24hp",
      "indoorUnitId": "iu-ccoxhaahu24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v24hp-ccoxhbah24v24",
      "slug": "custom-comfort-ccoxhb24v24hp-ccoxhbah24v24",
      "modelId": "model-custom-comfort-ccoxhb24v24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v24hp",
      "indoorUnitId": "iu-ccoxhbah24v24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v18hp-ccoxhaah24v18",
      "slug": "custom-comfort-ccoxha24v18hp-ccoxhaah24v18",
      "modelId": "model-custom-comfort-ccoxha24v18hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v18hp",
      "indoorUnitId": "iu-ccoxhaah24v18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz60chp-ccoxhbfc60",
      "slug": "custom-comfort-ccoxhbsz60chp-ccoxhbfc60",
      "modelId": "model-custom-comfort-ccoxhbsz60chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz60chp",
      "indoorUnitId": "iu-ccoxhbfc60",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz48chp-ccoxhb4c48",
      "slug": "custom-comfort-ccoxhbsz48chp-ccoxhb4c48",
      "modelId": "model-custom-comfort-ccoxhbsz48chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz48chp",
      "indoorUnitId": "iu-ccoxhb4c48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz17hp-ccoxhbahu18",
      "slug": "custom-comfort-ccoxhbsz17hp-ccoxhbahu18",
      "modelId": "model-custom-comfort-ccoxhbsz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz17hp",
      "indoorUnitId": "iu-ccoxhbahu18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz17hp-ccoxhasd18",
      "slug": "custom-comfort-ccoxhasz17hp-ccoxhasd18",
      "modelId": "model-custom-comfort-ccoxhasz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz17hp",
      "indoorUnitId": "iu-ccoxhasd18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz36chp-ccoxhbsd36",
      "slug": "custom-comfort-ccoxhbsz36chp-ccoxhbsd36",
      "modelId": "model-custom-comfort-ccoxhbsz36chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz36chp",
      "indoorUnitId": "iu-ccoxhbsd36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz17hp-ccoxhaahu18",
      "slug": "custom-comfort-ccoxhasz17hp-ccoxhaahu18",
      "modelId": "model-custom-comfort-ccoxhasz17hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz17hp",
      "indoorUnitId": "iu-ccoxhaahu18",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz36chp-ccoxhafc36",
      "slug": "custom-comfort-ccoxhasz36chp-ccoxhafc36",
      "modelId": "model-custom-comfort-ccoxhasz36chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz36chp",
      "indoorUnitId": "iu-ccoxhafc36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v24hp-ccoxhaah24v24",
      "slug": "custom-comfort-ccoxha24v24hp-ccoxhaah24v24",
      "modelId": "model-custom-comfort-ccoxha24v24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v24hp",
      "indoorUnitId": "iu-ccoxhaah24v24",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v36hp-ccoxhbah24v36",
      "slug": "custom-comfort-ccoxhb24v36hp-ccoxhbah24v36",
      "modelId": "model-custom-comfort-ccoxhb24v36hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v36hp",
      "indoorUnitId": "iu-ccoxhbah24v36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz60chp-ccoxhafc60",
      "slug": "custom-comfort-ccoxhasz60chp-ccoxhafc60",
      "modelId": "model-custom-comfort-ccoxhasz60chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz60chp",
      "indoorUnitId": "iu-ccoxhafc60",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz36chp-ccoxhbahuc36",
      "slug": "custom-comfort-ccoxhbsz36chp-ccoxhbahuc36",
      "modelId": "model-custom-comfort-ccoxhbsz36chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz36chp",
      "indoorUnitId": "iu-ccoxhbahuc36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz48chp-ccoxhafc48",
      "slug": "custom-comfort-ccoxhasz48chp-ccoxhafc48",
      "modelId": "model-custom-comfort-ccoxhasz48chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz48chp",
      "indoorUnitId": "iu-ccoxhafc48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz48chp-ccoxhasd48",
      "slug": "custom-comfort-ccoxhasz48chp-ccoxhasd48",
      "modelId": "model-custom-comfort-ccoxhasz48chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz48chp",
      "indoorUnitId": "iu-ccoxhasd48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz48chp-ccoxhbahuc48",
      "slug": "custom-comfort-ccoxhbsz48chp-ccoxhbahuc48",
      "modelId": "model-custom-comfort-ccoxhbsz48chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz48chp",
      "indoorUnitId": "iu-ccoxhbahuc48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v30hp-ccoxhbah24v30",
      "slug": "custom-comfort-ccoxhb24v30hp-ccoxhbah24v30",
      "modelId": "model-custom-comfort-ccoxhb24v30hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v30hp",
      "indoorUnitId": "iu-ccoxhbah24v30",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz48chp-ccoxha4c48",
      "slug": "custom-comfort-ccoxhasz48chp-ccoxha4c48",
      "modelId": "model-custom-comfort-ccoxhasz48chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz48chp",
      "indoorUnitId": "iu-ccoxha4c48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz48chp-ccoxhbsd48",
      "slug": "custom-comfort-ccoxhbsz48chp-ccoxhbsd48",
      "modelId": "model-custom-comfort-ccoxhbsz48chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz48chp",
      "indoorUnitId": "iu-ccoxhbsd48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v24hp-ccoacc1824b",
      "slug": "custom-comfort-ccoxha24v24hp-ccoacc1824b",
      "modelId": "model-custom-comfort-ccoxha24v24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v24hp",
      "indoorUnitId": "iu-ccoacc1824b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz33hp-ccoxhbahu36",
      "slug": "custom-comfort-ccoxhbsz33hp-ccoxhbahu36",
      "modelId": "model-custom-comfort-ccoxhbsz33hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz33hp",
      "indoorUnitId": "iu-ccoxhbahu36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz36chp-ccoxhasd36",
      "slug": "custom-comfort-ccoxhasz36chp-ccoxhasd36",
      "modelId": "model-custom-comfort-ccoxhasz36chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz36chp",
      "indoorUnitId": "iu-ccoxhasd36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v48hp-ccoxhbah24v48",
      "slug": "custom-comfort-ccoxhb24v48hp-ccoxhbah24v48",
      "modelId": "model-custom-comfort-ccoxhb24v48hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v48hp",
      "indoorUnitId": "iu-ccoxhbah24v48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v30hp-ccoxhaah24v30",
      "slug": "custom-comfort-ccoxha24v30hp-ccoxhaah24v30",
      "modelId": "model-custom-comfort-ccoxha24v30hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v30hp",
      "indoorUnitId": "iu-ccoxhaah24v30",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v24hp-ccoacc24a",
      "slug": "custom-comfort-ccoxha24v24hp-ccoacc24a",
      "modelId": "model-custom-comfort-ccoxha24v24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v24hp",
      "indoorUnitId": "iu-ccoacc24a",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v18hp-ccoacc1824b",
      "slug": "custom-comfort-ccoxha24v18hp-ccoacc1824b",
      "modelId": "model-custom-comfort-ccoxha24v18hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v18hp",
      "indoorUnitId": "iu-ccoacc1824b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v18hp-ccobcc1824a",
      "slug": "custom-comfort-ccoxhb24v18hp-ccobcc1824a",
      "modelId": "model-custom-comfort-ccoxhb24v18hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v18hp",
      "indoorUnitId": "iu-ccobcc1824a",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v24hp-ccoehacc24a",
      "slug": "custom-comfort-ccoxha24v24hp-ccoehacc24a",
      "modelId": "model-custom-comfort-ccoxha24v24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v24hp",
      "indoorUnitId": "iu-ccoehacc24a",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v18hp-ccobcc1824b",
      "slug": "custom-comfort-ccoxhb24v18hp-ccobcc1824b",
      "modelId": "model-custom-comfort-ccoxhb24v18hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v18hp",
      "indoorUnitId": "iu-ccobcc1824b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v24hp-ccobcc1824a",
      "slug": "custom-comfort-ccoxhb24v24hp-ccobcc1824a",
      "modelId": "model-custom-comfort-ccoxhb24v24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v24hp",
      "indoorUnitId": "iu-ccobcc1824a",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v30hp-ccobcc3036c",
      "slug": "custom-comfort-ccoxhb24v30hp-ccobcc3036c",
      "modelId": "model-custom-comfort-ccoxhb24v30hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v30hp",
      "indoorUnitId": "iu-ccobcc3036c",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v60hp-ccoxhbah24v60",
      "slug": "custom-comfort-ccoxhb24v60hp-ccoxhbah24v60",
      "modelId": "model-custom-comfort-ccoxhb24v60hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v60hp",
      "indoorUnitId": "iu-ccoxhbah24v60",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v36hp-ccoxhaah24v36",
      "slug": "custom-comfort-ccoxha24v36hp-ccoxhaah24v36",
      "modelId": "model-custom-comfort-ccoxha24v36hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v36hp",
      "indoorUnitId": "iu-ccoxhaah24v36",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v24hp-ccobcc1824b",
      "slug": "custom-comfort-ccoxhb24v24hp-ccobcc1824b",
      "modelId": "model-custom-comfort-ccoxhb24v24hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v24hp",
      "indoorUnitId": "iu-ccobcc1824b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v60hp-ccobcc4860c",
      "slug": "custom-comfort-ccoxhb24v60hp-ccobcc4860c",
      "modelId": "model-custom-comfort-ccoxhb24v60hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v60hp",
      "indoorUnitId": "iu-ccobcc4860c",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v30hp-ccobcc3036b",
      "slug": "custom-comfort-ccoxhb24v30hp-ccobcc3036b",
      "modelId": "model-custom-comfort-ccoxhb24v30hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v30hp",
      "indoorUnitId": "iu-ccobcc3036b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz60chp-ccoxhasd60",
      "slug": "custom-comfort-ccoxhasz60chp-ccoxhasd60",
      "modelId": "model-custom-comfort-ccoxhasz60chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz60chp",
      "indoorUnitId": "iu-ccoxhasd60",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v36hp-ccobcc3036c",
      "slug": "custom-comfort-ccoxhb24v36hp-ccobcc3036c",
      "modelId": "model-custom-comfort-ccoxhb24v36hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v36hp",
      "indoorUnitId": "iu-ccobcc3036c",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz60chp-ccoxhbsd60",
      "slug": "custom-comfort-ccoxhbsz60chp-ccoxhbsd60",
      "modelId": "model-custom-comfort-ccoxhbsz60chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz60chp",
      "indoorUnitId": "iu-ccoxhbsd60",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v36hp-ccobcc3036b",
      "slug": "custom-comfort-ccoxhb24v36hp-ccobcc3036b",
      "modelId": "model-custom-comfort-ccoxhb24v36hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v36hp",
      "indoorUnitId": "iu-ccobcc3036b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v48hp-ccoxhaah24v48",
      "slug": "custom-comfort-ccoxha24v48hp-ccoxhaah24v48",
      "modelId": "model-custom-comfort-ccoxha24v48hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v48hp",
      "indoorUnitId": "iu-ccoxhaah24v48",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhasz60chp-ccoxhaahuc60",
      "slug": "custom-comfort-ccoxhasz60chp-ccoxhaahuc60",
      "modelId": "model-custom-comfort-ccoxhasz60chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhasz60chp",
      "indoorUnitId": "iu-ccoxhaahuc60",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v30hp-ccoacc3036c",
      "slug": "custom-comfort-ccoxha24v30hp-ccoacc3036c",
      "modelId": "model-custom-comfort-ccoxha24v30hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v30hp",
      "indoorUnitId": "iu-ccoacc3036c",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v36hp-ccoacc3036b",
      "slug": "custom-comfort-ccoxha24v36hp-ccoacc3036b",
      "modelId": "model-custom-comfort-ccoxha24v36hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v36hp",
      "indoorUnitId": "iu-ccoacc3036b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v36hp-ccoehacc3036b",
      "slug": "custom-comfort-ccoxha24v36hp-ccoehacc3036b",
      "modelId": "model-custom-comfort-ccoxha24v36hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v36hp",
      "indoorUnitId": "iu-ccoehacc3036b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v60hp-ccoxhaah24v60",
      "slug": "custom-comfort-ccoxha24v60hp-ccoxhaah24v60",
      "modelId": "model-custom-comfort-ccoxha24v60hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v60hp",
      "indoorUnitId": "iu-ccoxhaah24v60",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v30hp-ccoehacc3036b",
      "slug": "custom-comfort-ccoxha24v30hp-ccoehacc3036b",
      "modelId": "model-custom-comfort-ccoxha24v30hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v30hp",
      "indoorUnitId": "iu-ccoehacc3036b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v30hp-ccoacc3036b",
      "slug": "custom-comfort-ccoxha24v30hp-ccoacc3036b",
      "modelId": "model-custom-comfort-ccoxha24v30hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v30hp",
      "indoorUnitId": "iu-ccoacc3036b",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxha24v36hp-ccoacc3036c",
      "slug": "custom-comfort-ccoxha24v36hp-ccoacc3036c",
      "modelId": "model-custom-comfort-ccoxha24v36hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxha24v36hp",
      "indoorUnitId": "iu-ccoacc3036c",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v48hp-ccobcc4860c",
      "slug": "custom-comfort-ccoxhb24v48hp-ccobcc4860c",
      "modelId": "model-custom-comfort-ccoxhb24v48hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v48hp",
      "indoorUnitId": "iu-ccobcc4860c",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhb24v60hp-ccobcc4860d",
      "slug": "custom-comfort-ccoxhb24v60hp-ccobcc4860d",
      "modelId": "model-custom-comfort-ccoxhb24v60hp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhb24v60hp",
      "indoorUnitId": "iu-ccobcc4860d",
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
          "sourceId": "src-custom-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-custom-comfort-ccoxhbsz60chp-ccoxhbahuc60",
      "slug": "custom-comfort-ccoxhbsz60chp-ccoxhbahuc60",
      "modelId": "model-custom-comfort-ccoxhbsz60chp",
      "outdoorUnitId": "ou-custom-comfort-ccoxhbsz60chp",
      "indoorUnitId": "iu-ccoxhbahuc60",
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
          "sourceId": "src-custom-comfort-epa",
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
