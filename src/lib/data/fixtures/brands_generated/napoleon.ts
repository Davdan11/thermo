import type { BrandDataset } from "../../types";

export const brand_napoleonDataset: BrandDataset = {
  "brand": {
    "id": "brand-napoleon",
    "slug": "napoleon",
    "name": "Napoleon",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Napoleon",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-napoleon-epa",
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
      "id": "series-napoleon-ndh-series",
      "slug": "napoleon-ndh-series",
      "name": "NDH series",
      "brandId": "brand-napoleon",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NDH series de Napoleon",
      "imageUrl": "/images/series/napoleon-napoleon-ndh-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-napoleon-ndha-series",
      "slug": "napoleon-ndha-series",
      "name": "NDHA Series",
      "brandId": "brand-napoleon",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NDHA Series de Napoleon",
      "imageUrl": "/images/series/napoleon-napoleon-ndha-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-napoleon-nh-series",
      "slug": "napoleon-nh-series",
      "name": "NH series",
      "brandId": "brand-napoleon",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série NH series de Napoleon",
      "imageUrl": "/images/series/napoleon-napoleon-nh-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-napoleon-f-series",
      "slug": "napoleon-f-series",
      "name": "F Series",
      "brandId": "brand-napoleon",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série F Series de Napoleon",
      "imageUrl": "/images/series/napoleon-napoleon-f-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-napoleon-wse-series",
      "slug": "napoleon-wse-series",
      "name": "WSE Series",
      "brandId": "brand-napoleon",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WSE Series de Napoleon",
      "imageUrl": "/images/series/napoleon-napoleon-wse-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-napoleon-hyper-heat",
      "slug": "napoleon-hyper-heat",
      "name": "Hyper Heat",
      "brandId": "brand-napoleon",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série Hyper Heat de Napoleon",
      "imageUrl": "/images/series/napoleon-napoleon-hyper-heat.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-napoleon-wsc-series",
      "slug": "napoleon-wsc-series",
      "name": "WSC Series",
      "brandId": "brand-napoleon",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WSC Series de Napoleon",
      "imageUrl": "/images/series/napoleon-napoleon-wsc-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-napoleon-ndhas26-09-o",
      "slug": "napoleon-ndhas26-09-o",
      "name": "Napoleon NDHAS26-09-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26-09-O",
      "normalizedModelNumber": "ndhas26-09-o",
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
      "id": "model-napoleon-ndhas26ba-09-o",
      "slug": "napoleon-ndhas26ba-09-o",
      "name": "Napoleon NDHAS26BA-09-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26BA-09-O",
      "normalizedModelNumber": "ndhas26ba-09-o",
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
      "id": "model-napoleon-ndhas26ba-06-o",
      "slug": "napoleon-ndhas26ba-06-o",
      "name": "Napoleon NDHAS26BA-06-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26BA-06-O",
      "normalizedModelNumber": "ndhas26ba-06-o",
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
      "id": "model-napoleon-ndhas26-12-o",
      "slug": "napoleon-ndhas26-12-o",
      "name": "Napoleon NDHAS26-12-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26-12-O",
      "normalizedModelNumber": "ndhas26-12-o",
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
      "id": "model-napoleon-ndhas26ba-12-o",
      "slug": "napoleon-ndhas26ba-12-o",
      "name": "Napoleon NDHAS26BA-12-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26BA-12-O",
      "normalizedModelNumber": "ndhas26ba-12-o",
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
      "id": "model-napoleon-ndhambb-18-o",
      "slug": "napoleon-ndhambb-18-o",
      "name": "Napoleon NDHAMBB-18-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAMBB-18-O",
      "normalizedModelNumber": "ndhambb-18-o",
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
      "id": "model-napoleon-ndhas22ba-12-o",
      "slug": "napoleon-ndhas22ba-12-o",
      "name": "Napoleon NDHAS22BA-12-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS22BA-12-O",
      "normalizedModelNumber": "ndhas22ba-12-o",
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
      "id": "model-napoleon-ndhas22ba-18-o",
      "slug": "napoleon-ndhas22ba-18-o",
      "name": "Napoleon NDHAS22BA-18-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS22BA-18-O",
      "normalizedModelNumber": "ndhas22ba-18-o",
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
      "id": "model-napoleon-ndhas22-18-o",
      "slug": "napoleon-ndhas22-18-o",
      "name": "Napoleon NDHAS22-18-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS22-18-O",
      "normalizedModelNumber": "ndhas22-18-o",
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
      "id": "model-napoleon-ndhas22ba-24-o",
      "slug": "napoleon-ndhas22ba-24-o",
      "name": "Napoleon NDHAS22BA-24-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS22BA-24-O",
      "normalizedModelNumber": "ndhas22ba-24-o",
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
      "id": "model-napoleon-ndhas22-12-o",
      "slug": "napoleon-ndhas22-12-o",
      "name": "Napoleon NDHAS22-12-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS22-12-O",
      "normalizedModelNumber": "ndhas22-12-o",
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
      "id": "model-napoleon-ndhambb-27-o",
      "slug": "napoleon-ndhambb-27-o",
      "name": "Napoleon NDHAMBB-27-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAMBB-27-O",
      "normalizedModelNumber": "ndhambb-27-o",
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
      "id": "model-napoleon-ndhambb-36-o",
      "slug": "napoleon-ndhambb-36-o",
      "name": "Napoleon NDHAMBB-36-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAMBB-36-O",
      "normalizedModelNumber": "ndhambb-36-o",
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
      "id": "model-napoleon-ndhambb-48-o",
      "slug": "napoleon-ndhambb-48-o",
      "name": "Napoleon NDHAMBB-48-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAMBB-48-O",
      "normalizedModelNumber": "ndhambb-48-o",
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
      "id": "model-napoleon-ndham-28-o",
      "slug": "napoleon-ndham-28-o",
      "name": "Napoleon NDHAM-28-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAM-28-O",
      "normalizedModelNumber": "ndham-28-o",
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
      "id": "model-napoleon-ndhas26-18-o",
      "slug": "napoleon-ndhas26-18-o",
      "name": "Napoleon NDHAS26-18-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26-18-O",
      "normalizedModelNumber": "ndhas26-18-o",
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
      "id": "model-napoleon-ndhas26-24-o",
      "slug": "napoleon-ndhas26-24-o",
      "name": "Napoleon NDHAS26-24-O",
      "seriesId": "series-napoleon-ndha-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26-24-O",
      "normalizedModelNumber": "ndhas26-24-o",
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
      "id": "model-napoleon-ndhas26ba-18-o",
      "slug": "napoleon-ndhas26ba-18-o",
      "name": "Napoleon NDHAS26BA-18-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26BA-18-O",
      "normalizedModelNumber": "ndhas26ba-18-o",
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
      "id": "model-napoleon-ndhas26ba-24-o",
      "slug": "napoleon-ndhas26ba-24-o",
      "name": "Napoleon NDHAS26BA-24-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26BA-24-O",
      "normalizedModelNumber": "ndhas26ba-24-o",
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
      "id": "model-napoleon-ndhas22-24-o",
      "slug": "napoleon-ndhas22-24-o",
      "name": "Napoleon NDHAS22-24-O",
      "seriesId": "series-napoleon-ndha-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS22-24-O",
      "normalizedModelNumber": "ndhas22-24-o",
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
      "id": "model-napoleon-ndham-36-o",
      "slug": "napoleon-ndham-36-o",
      "name": "Napoleon NDHAM-36-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAM-36-O",
      "normalizedModelNumber": "ndham-36-o",
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
      "id": "model-napoleon-ndhas26ba-33-o",
      "slug": "napoleon-ndhas26ba-33-o",
      "name": "Napoleon NDHAS26BA-33-O",
      "seriesId": "series-napoleon-ndh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NDHAS26BA-33-O",
      "normalizedModelNumber": "ndhas26ba-33-o",
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
      "id": "model-napoleon-nh25-18h-o",
      "slug": "napoleon-nh25-18h-o",
      "name": "Napoleon NH25-18H-O",
      "seriesId": "series-napoleon-nh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NH25-18H-O",
      "normalizedModelNumber": "nh25-18h-o",
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
      "id": "model-napoleon-wsehv4860ba1-n",
      "slug": "napoleon-wsehv4860ba1-n",
      "name": "Napoleon WSEHV4860BA1-N",
      "seriesId": "series-napoleon-f-series",
      "brandId": "brand-napoleon",
      "modelNumber": "WSEHV4860BA1-N",
      "normalizedModelNumber": "wsehv4860ba1-n",
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
      "id": "model-napoleon-nh25-24h-o",
      "slug": "napoleon-nh25-24h-o",
      "name": "Napoleon NH25-24H-O",
      "seriesId": "series-napoleon-nh-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NH25-24H-O",
      "normalizedModelNumber": "nh25-24h-o",
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
      "id": "model-napoleon-wsehv2436ba1-n",
      "slug": "napoleon-wsehv2436ba1-n",
      "name": "Napoleon WSEHV2436BA1-N",
      "seriesId": "series-napoleon-f-series",
      "brandId": "brand-napoleon",
      "modelNumber": "WSEHV2436BA1-N",
      "normalizedModelNumber": "wsehv2436ba1-n",
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
      "id": "model-napoleon-wsehv4860ra1-n",
      "slug": "napoleon-wsehv4860ra1-n",
      "name": "Napoleon WSEHV4860RA1-N",
      "seriesId": "series-napoleon-wse-series",
      "brandId": "brand-napoleon",
      "modelNumber": "WSEHV4860RA1-N",
      "normalizedModelNumber": "wsehv4860ra1-n",
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
      "id": "model-napoleon-wsehv2436ra1-n",
      "slug": "napoleon-wsehv2436ra1-n",
      "name": "Napoleon WSEHV2436RA1-N",
      "seriesId": "series-napoleon-wse-series",
      "brandId": "brand-napoleon",
      "modelNumber": "WSEHV2436RA1-N",
      "normalizedModelNumber": "wsehv2436ra1-n",
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
      "id": "model-napoleon-ns18hv24a36",
      "slug": "napoleon-ns18hv24a36",
      "name": "Napoleon NS18HV24A36",
      "seriesId": "series-napoleon-wse-series",
      "brandId": "brand-napoleon",
      "modelNumber": "NS18HV24A36",
      "normalizedModelNumber": "ns18hv24a36",
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
      "id": "model-napoleon-wschv0024ba1-n",
      "slug": "napoleon-wschv0024ba1-n",
      "name": "Napoleon WSCHV0024BA1-N",
      "seriesId": "series-napoleon-wsc-series",
      "brandId": "brand-napoleon",
      "modelNumber": "WSCHV0024BA1-N",
      "normalizedModelNumber": "wschv0024ba1-n",
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
      "id": "model-napoleon-wsehv2436ba1-c",
      "slug": "napoleon-wsehv2436ba1-c",
      "name": "Napoleon WSEHV2436BA1-C",
      "seriesId": "series-napoleon-f-series",
      "brandId": "brand-napoleon",
      "modelNumber": "WSEHV2436BA1-C",
      "normalizedModelNumber": "wsehv2436ba1-c",
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
      "id": "model-napoleon-wschv0048ba1-n",
      "slug": "napoleon-wschv0048ba1-n",
      "name": "Napoleon WSCHV0048BA1-N",
      "seriesId": "series-napoleon-wsc-series",
      "brandId": "brand-napoleon",
      "modelNumber": "WSCHV0048BA1-N",
      "normalizedModelNumber": "wschv0048ba1-n",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-napoleon-ndhas26-09-o",
      "modelNumber": "NDHAS26-09-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndhas26ba-09-o",
      "modelNumber": "NDHAS26BA-09-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhas26ba-06-o",
      "modelNumber": "NDHAS26BA-06-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhas26-12-o",
      "modelNumber": "NDHAS26-12-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndhas26ba-12-o",
      "modelNumber": "NDHAS26BA-12-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhambb-18-o",
      "modelNumber": "NDHAMBB-18-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhas22ba-12-o",
      "modelNumber": "NDHAS22BA-12-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhas22ba-18-o",
      "modelNumber": "NDHAS22BA-18-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhas22-18-o",
      "modelNumber": "NDHAS22-18-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndhas22ba-24-o",
      "modelNumber": "NDHAS22BA-24-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhas22-12-o",
      "modelNumber": "NDHAS22-12-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndhambb-27-o",
      "modelNumber": "NDHAMBB-27-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhambb-36-o",
      "modelNumber": "NDHAMBB-36-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhambb-48-o",
      "modelNumber": "NDHAMBB-48-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndham-28-o",
      "modelNumber": "NDHAM-28-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndhas26-18-o",
      "modelNumber": "NDHAS26-18-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndhas26-24-o",
      "modelNumber": "NDHAS26-24-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndhas26ba-18-o",
      "modelNumber": "NDHAS26BA-18-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhas26ba-24-o",
      "modelNumber": "NDHAS26BA-24-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-ndhas22-24-o",
      "modelNumber": "NDHAS22-24-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndham-36-o",
      "modelNumber": "NDHAM-36-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ndhas26ba-33-o",
      "modelNumber": "NDHAS26BA-33-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-nh25-18h-o",
      "modelNumber": "NH25-18H-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-wsehv4860ba1-n",
      "modelNumber": "WSEHV4860BA1-N",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-nh25-24h-o",
      "modelNumber": "NH25-24H-O",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-wsehv2436ba1-n",
      "modelNumber": "WSEHV2436BA1-N",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-wsehv4860ra1-n",
      "modelNumber": "WSEHV4860RA1-N",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-wsehv2436ra1-n",
      "modelNumber": "WSEHV2436RA1-N",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-ns18hv24a36",
      "modelNumber": "NS18HV24A36",
      "brandId": "brand-napoleon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-napoleon-wschv0024ba1-n",
      "modelNumber": "WSCHV0024BA1-N",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-wsehv2436ba1-c",
      "modelNumber": "WSEHV2436BA1-C",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-napoleon-wschv0048ba1-n",
      "modelNumber": "WSCHV0048BA1-N",
      "brandId": "brand-napoleon",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ndhas26-09-i",
      "modelNumber": "NDHAS26-09-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26bb-09-i",
      "modelNumber": "NDHAS26BB-09-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhascbb-09",
      "modelNumber": "NDHASCBB-09",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26bb-06-i",
      "modelNumber": "NDHAS26BB-06-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26-12-i",
      "modelNumber": "NDHAS26-12-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26bb-12-i",
      "modelNumber": "NDHAS26BB-12-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49805",
      "modelNumber": "IU-49805",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhascbb-12",
      "modelNumber": "NDHASCBB-12",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas22bb-18-i",
      "modelNumber": "NDHAS22BB-18-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas22-18-i",
      "modelNumber": "NDHAS22-18-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhascbb-18",
      "modelNumber": "NDHASCBB-18",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas22bb-24-i",
      "modelNumber": "NDHAS22BB-24-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas22-12-i",
      "modelNumber": "NDHAS22-12-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas22bb-12-i",
      "modelNumber": "NDHAS22BB-12-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49806",
      "modelNumber": "IU-49806",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49807",
      "modelNumber": "IU-49807",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49808",
      "modelNumber": "IU-49808",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas4cbb-12",
      "modelNumber": "NDHAS4CBB-12",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49803",
      "modelNumber": "IU-49803",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas4cbb-24",
      "modelNumber": "NDHAS4CBB-24",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26-18-i",
      "modelNumber": "NDHAS26-18-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26-24-i",
      "modelNumber": "NDHAS26-24-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26bb-18-i",
      "modelNumber": "NDHAS26BB-18-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26bb-24-i",
      "modelNumber": "NDHAS26BB-24-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas22-24-i",
      "modelNumber": "NDHAS22-24-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas4cbb-18",
      "modelNumber": "NDHAS4CBB-18",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhashdbb-09",
      "modelNumber": "NDHASHDBB-09",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhashdbb-12",
      "modelNumber": "NDHASHDBB-12",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhashdbb-18",
      "modelNumber": "NDHASHDBB-18",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49804",
      "modelNumber": "IU-49804",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-ndhas26bb-33-i",
      "modelNumber": "NDHAS26BB-33-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-nh25-18f-i",
      "modelNumber": "NH25-18F-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-wpfx48a-n",
      "modelNumber": "WPFX48A-N",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ndhashdbb-24",
      "modelNumber": "NDHASHDBB-24",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-nh25-24f-i",
      "modelNumber": "NH25-24F-I",
      "brandId": "brand-napoleon",
      "type": "wall-single"
    },
    {
      "id": "iu-wpfx60a-n",
      "modelNumber": "WPFX60A-N",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpfx36a-n",
      "modelNumber": "WPFX36A-N",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpfx24a-n",
      "modelNumber": "WPFX24A-N",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-npfx48a",
      "modelNumber": "NPFX48A",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-npfx24a",
      "modelNumber": "NPFX24A",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-hde336936",
      "modelNumber": "H,DE33(6,9)36",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-hde37936",
      "modelNumber": "H,DE37936",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wecc24aba1",
      "modelNumber": "WECC24ABA1",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wecc24abb1",
      "modelNumber": "WECC24ABB1",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-npfx24a36a",
      "modelNumber": "NPFX24A36A",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc48aba1-n",
      "modelNumber": "WPCC48ABA1-N",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc60aba1-n",
      "modelNumber": "WPCC60ABA1-N",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc24aba1-n",
      "modelNumber": "WPCC24ABA1-N",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-npfx48a60a",
      "modelNumber": "NPFX48A60A",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc48aba1",
      "modelNumber": "WPCC48ABA1",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc36aba1-n",
      "modelNumber": "WPCC36ABA1-N",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc60aba1",
      "modelNumber": "WPCC60ABA1",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc36aba1",
      "modelNumber": "WPCC36ABA1",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc24aba1",
      "modelNumber": "WPCC24ABA1",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    },
    {
      "id": "iu-wecc60abc1",
      "modelNumber": "WECC60ABC1",
      "brandId": "brand-napoleon",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-napoleon-ndhas26-09-o-ndhas26-09-i",
      "slug": "napoleon-ndhas26-09-o-ndhas26-09-i",
      "modelId": "model-napoleon-ndhas26-09-o",
      "outdoorUnitId": "ou-napoleon-ndhas26-09-o",
      "indoorUnitId": "iu-ndhas26-09-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-09-o-ndhas26bb-09-i",
      "slug": "napoleon-ndhas26ba-09-o-ndhas26bb-09-i",
      "modelId": "model-napoleon-ndhas26ba-09-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-09-o",
      "indoorUnitId": "iu-ndhas26bb-09-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-09-o-ndhascbb-09",
      "slug": "napoleon-ndhas26ba-09-o-ndhascbb-09",
      "modelId": "model-napoleon-ndhas26ba-09-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-09-o",
      "indoorUnitId": "iu-ndhascbb-09",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-06-o-ndhas26bb-06-i",
      "slug": "napoleon-ndhas26ba-06-o-ndhas26bb-06-i",
      "modelId": "model-napoleon-ndhas26ba-06-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-06-o",
      "indoorUnitId": "iu-ndhas26bb-06-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26-12-o-ndhas26-12-i",
      "slug": "napoleon-ndhas26-12-o-ndhas26-12-i",
      "modelId": "model-napoleon-ndhas26-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas26-12-o",
      "indoorUnitId": "iu-ndhas26-12-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-12-o-ndhas26bb-12-i",
      "slug": "napoleon-ndhas26ba-12-o-ndhas26bb-12-i",
      "modelId": "model-napoleon-ndhas26ba-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-12-o",
      "indoorUnitId": "iu-ndhas26bb-12-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhambb-18-o-iu-49805",
      "slug": "napoleon-ndhambb-18-o-iu-49805",
      "modelId": "model-napoleon-ndhambb-18-o",
      "outdoorUnitId": "ou-napoleon-ndhambb-18-o",
      "indoorUnitId": "iu-iu-49805",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-12-o-ndhascbb-12",
      "slug": "napoleon-ndhas26ba-12-o-ndhascbb-12",
      "modelId": "model-napoleon-ndhas26ba-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-12-o",
      "indoorUnitId": "iu-ndhascbb-12",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-12-o-ndhascbb-12",
      "slug": "napoleon-ndhas22ba-12-o-ndhascbb-12",
      "modelId": "model-napoleon-ndhas22ba-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-12-o",
      "indoorUnitId": "iu-ndhascbb-12",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-18-o-ndhas22bb-18-i",
      "slug": "napoleon-ndhas22ba-18-o-ndhas22bb-18-i",
      "modelId": "model-napoleon-ndhas22ba-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-18-o",
      "indoorUnitId": "iu-ndhas22bb-18-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22-18-o-ndhas22-18-i",
      "slug": "napoleon-ndhas22-18-o-ndhas22-18-i",
      "modelId": "model-napoleon-ndhas22-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas22-18-o",
      "indoorUnitId": "iu-ndhas22-18-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-18-o-ndhascbb-18",
      "slug": "napoleon-ndhas22ba-18-o-ndhascbb-18",
      "modelId": "model-napoleon-ndhas22ba-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-18-o",
      "indoorUnitId": "iu-ndhascbb-18",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-24-o-ndhas22bb-24-i",
      "slug": "napoleon-ndhas22ba-24-o-ndhas22bb-24-i",
      "modelId": "model-napoleon-ndhas22ba-24-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-24-o",
      "indoorUnitId": "iu-ndhas22bb-24-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22-12-o-ndhas22-12-i",
      "slug": "napoleon-ndhas22-12-o-ndhas22-12-i",
      "modelId": "model-napoleon-ndhas22-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas22-12-o",
      "indoorUnitId": "iu-ndhas22-12-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-12-o-ndhas22bb-12-i",
      "slug": "napoleon-ndhas22ba-12-o-ndhas22bb-12-i",
      "modelId": "model-napoleon-ndhas22ba-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-12-o",
      "indoorUnitId": "iu-ndhas22bb-12-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhambb-27-o-iu-49806",
      "slug": "napoleon-ndhambb-27-o-iu-49806",
      "modelId": "model-napoleon-ndhambb-27-o",
      "outdoorUnitId": "ou-napoleon-ndhambb-27-o",
      "indoorUnitId": "iu-iu-49806",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhambb-36-o-iu-49807",
      "slug": "napoleon-ndhambb-36-o-iu-49807",
      "modelId": "model-napoleon-ndhambb-36-o",
      "outdoorUnitId": "ou-napoleon-ndhambb-36-o",
      "indoorUnitId": "iu-iu-49807",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhambb-48-o-iu-49808",
      "slug": "napoleon-ndhambb-48-o-iu-49808",
      "modelId": "model-napoleon-ndhambb-48-o",
      "outdoorUnitId": "ou-napoleon-ndhambb-48-o",
      "indoorUnitId": "iu-iu-49808",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-09-o-ndhas4cbb-12",
      "slug": "napoleon-ndhas26ba-09-o-ndhas4cbb-12",
      "modelId": "model-napoleon-ndhas26ba-09-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-09-o",
      "indoorUnitId": "iu-ndhas4cbb-12",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndham-28-o-iu-49803",
      "slug": "napoleon-ndham-28-o-iu-49803",
      "modelId": "model-napoleon-ndham-28-o",
      "outdoorUnitId": "ou-napoleon-ndham-28-o",
      "indoorUnitId": "iu-iu-49803",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-12-o-ndhas4cbb-12",
      "slug": "napoleon-ndhas26ba-12-o-ndhas4cbb-12",
      "modelId": "model-napoleon-ndhas26ba-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-12-o",
      "indoorUnitId": "iu-ndhas4cbb-12",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-24-o-ndhas4cbb-24",
      "slug": "napoleon-ndhas22ba-24-o-ndhas4cbb-24",
      "modelId": "model-napoleon-ndhas22ba-24-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-24-o",
      "indoorUnitId": "iu-ndhas4cbb-24",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26-18-o-ndhas26-18-i",
      "slug": "napoleon-ndhas26-18-o-ndhas26-18-i",
      "modelId": "model-napoleon-ndhas26-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas26-18-o",
      "indoorUnitId": "iu-ndhas26-18-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26-24-o-ndhas26-24-i",
      "slug": "napoleon-ndhas26-24-o-ndhas26-24-i",
      "modelId": "model-napoleon-ndhas26-24-o",
      "outdoorUnitId": "ou-napoleon-ndhas26-24-o",
      "indoorUnitId": "iu-ndhas26-24-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-18-o-ndhas26bb-18-i",
      "slug": "napoleon-ndhas26ba-18-o-ndhas26bb-18-i",
      "modelId": "model-napoleon-ndhas26ba-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-18-o",
      "indoorUnitId": "iu-ndhas26bb-18-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-12-o-ndhas4cbb-12",
      "slug": "napoleon-ndhas22ba-12-o-ndhas4cbb-12",
      "modelId": "model-napoleon-ndhas22ba-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-12-o",
      "indoorUnitId": "iu-ndhas4cbb-12",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-24-o-ndhas26bb-24-i",
      "slug": "napoleon-ndhas26ba-24-o-ndhas26bb-24-i",
      "modelId": "model-napoleon-ndhas26ba-24-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-24-o",
      "indoorUnitId": "iu-ndhas26bb-24-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22-24-o-ndhas22-24-i",
      "slug": "napoleon-ndhas22-24-o-ndhas22-24-i",
      "modelId": "model-napoleon-ndhas22-24-o",
      "outdoorUnitId": "ou-napoleon-ndhas22-24-o",
      "indoorUnitId": "iu-ndhas22-24-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-18-o-ndhas4cbb-18",
      "slug": "napoleon-ndhas22ba-18-o-ndhas4cbb-18",
      "modelId": "model-napoleon-ndhas22ba-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-18-o",
      "indoorUnitId": "iu-ndhas4cbb-18",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-09-o-ndhashdbb-09",
      "slug": "napoleon-ndhas26ba-09-o-ndhashdbb-09",
      "modelId": "model-napoleon-ndhas26ba-09-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-09-o",
      "indoorUnitId": "iu-ndhashdbb-09",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-12-o-ndhashdbb-12",
      "slug": "napoleon-ndhas26ba-12-o-ndhashdbb-12",
      "modelId": "model-napoleon-ndhas26ba-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-12-o",
      "indoorUnitId": "iu-ndhashdbb-12",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-18-o-ndhashdbb-18",
      "slug": "napoleon-ndhas22ba-18-o-ndhashdbb-18",
      "modelId": "model-napoleon-ndhas22ba-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-18-o",
      "indoorUnitId": "iu-ndhashdbb-18",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-18-o-ndhascbb-18",
      "slug": "napoleon-ndhas26ba-18-o-ndhascbb-18",
      "modelId": "model-napoleon-ndhas26ba-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-18-o",
      "indoorUnitId": "iu-ndhascbb-18",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndham-36-o-iu-49804",
      "slug": "napoleon-ndham-36-o-iu-49804",
      "modelId": "model-napoleon-ndham-36-o",
      "outdoorUnitId": "ou-napoleon-ndham-36-o",
      "indoorUnitId": "iu-iu-49804",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-18-o-ndhas4cbb-18",
      "slug": "napoleon-ndhas26ba-18-o-ndhas4cbb-18",
      "modelId": "model-napoleon-ndhas26ba-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-18-o",
      "indoorUnitId": "iu-ndhas4cbb-18",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-12-o-ndhashdbb-12",
      "slug": "napoleon-ndhas22ba-12-o-ndhashdbb-12",
      "modelId": "model-napoleon-ndhas22ba-12-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-12-o",
      "indoorUnitId": "iu-ndhashdbb-12",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-33-o-ndhas26bb-33-i",
      "slug": "napoleon-ndhas26ba-33-o-ndhas26bb-33-i",
      "modelId": "model-napoleon-ndhas26ba-33-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-33-o",
      "indoorUnitId": "iu-ndhas26bb-33-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-nh25-18h-o-nh25-18f-i",
      "slug": "napoleon-nh25-18h-o-nh25-18f-i",
      "modelId": "model-napoleon-nh25-18h-o",
      "outdoorUnitId": "ou-napoleon-nh25-18h-o",
      "indoorUnitId": "iu-nh25-18f-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv4860ba1-n-wpfx48a-n",
      "slug": "napoleon-wsehv4860ba1-n-wpfx48a-n",
      "modelId": "model-napoleon-wsehv4860ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv4860ba1-n",
      "indoorUnitId": "iu-wpfx48a-n",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-24-o-ndhashdbb-24",
      "slug": "napoleon-ndhas26ba-24-o-ndhashdbb-24",
      "modelId": "model-napoleon-ndhas26ba-24-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-24-o",
      "indoorUnitId": "iu-ndhashdbb-24",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas22ba-24-o-ndhashdbb-24",
      "slug": "napoleon-ndhas22ba-24-o-ndhashdbb-24",
      "modelId": "model-napoleon-ndhas22ba-24-o",
      "outdoorUnitId": "ou-napoleon-ndhas22ba-24-o",
      "indoorUnitId": "iu-ndhashdbb-24",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-nh25-24h-o-nh25-24f-i",
      "slug": "napoleon-nh25-24h-o-nh25-24f-i",
      "modelId": "model-napoleon-nh25-24h-o",
      "outdoorUnitId": "ou-napoleon-nh25-24h-o",
      "indoorUnitId": "iu-nh25-24f-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-nh25-18h-o-nh25-24f-i",
      "slug": "napoleon-nh25-18h-o-nh25-24f-i",
      "modelId": "model-napoleon-nh25-18h-o",
      "outdoorUnitId": "ou-napoleon-nh25-18h-o",
      "indoorUnitId": "iu-nh25-24f-i",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv4860ba1-n-wpfx60a-n",
      "slug": "napoleon-wsehv4860ba1-n-wpfx60a-n",
      "modelId": "model-napoleon-wsehv4860ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv4860ba1-n",
      "indoorUnitId": "iu-wpfx60a-n",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ba1-n-wpfx36a-n",
      "slug": "napoleon-wsehv2436ba1-n-wpfx36a-n",
      "modelId": "model-napoleon-wsehv2436ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ba1-n",
      "indoorUnitId": "iu-wpfx36a-n",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ndhas26ba-18-o-ndhashdbb-18",
      "slug": "napoleon-ndhas26ba-18-o-ndhashdbb-18",
      "modelId": "model-napoleon-ndhas26ba-18-o",
      "outdoorUnitId": "ou-napoleon-ndhas26ba-18-o",
      "indoorUnitId": "iu-ndhashdbb-18",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ba1-n-wpfx24a-n",
      "slug": "napoleon-wsehv2436ba1-n-wpfx24a-n",
      "modelId": "model-napoleon-wsehv2436ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ba1-n",
      "indoorUnitId": "iu-wpfx24a-n",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv4860ra1-n-npfx48a",
      "slug": "napoleon-wsehv4860ra1-n-npfx48a",
      "modelId": "model-napoleon-wsehv4860ra1-n",
      "outdoorUnitId": "ou-napoleon-wsehv4860ra1-n",
      "indoorUnitId": "iu-npfx48a",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ra1-n-npfx24a",
      "slug": "napoleon-wsehv2436ra1-n-npfx24a",
      "modelId": "model-napoleon-wsehv2436ra1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ra1-n",
      "indoorUnitId": "iu-npfx24a",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-ns18hv24a36-npfx24a",
      "slug": "napoleon-ns18hv24a36-npfx24a",
      "modelId": "model-napoleon-ns18hv24a36",
      "outdoorUnitId": "ou-napoleon-ns18hv24a36",
      "indoorUnitId": "iu-npfx24a",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ra1-n-hde336936",
      "slug": "napoleon-wsehv2436ra1-n-hde336936",
      "modelId": "model-napoleon-wsehv2436ra1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ra1-n",
      "indoorUnitId": "iu-hde336936",
      "minHeatingTempC": -15,
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ra1-n-hde37936",
      "slug": "napoleon-wsehv2436ra1-n-hde37936",
      "modelId": "model-napoleon-wsehv2436ra1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ra1-n",
      "indoorUnitId": "iu-hde37936",
      "minHeatingTempC": -15,
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wschv0024ba1-n-wecc24aba1",
      "slug": "napoleon-wschv0024ba1-n-wecc24aba1",
      "modelId": "model-napoleon-wschv0024ba1-n",
      "outdoorUnitId": "ou-napoleon-wschv0024ba1-n",
      "indoorUnitId": "iu-wecc24aba1",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wschv0024ba1-n-wecc24abb1",
      "slug": "napoleon-wschv0024ba1-n-wecc24abb1",
      "modelId": "model-napoleon-wschv0024ba1-n",
      "outdoorUnitId": "ou-napoleon-wschv0024ba1-n",
      "indoorUnitId": "iu-wecc24abb1",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ra1-n-npfx24a36a",
      "slug": "napoleon-wsehv2436ra1-n-npfx24a36a",
      "modelId": "model-napoleon-wsehv2436ra1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ra1-n",
      "indoorUnitId": "iu-npfx24a36a",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv4860ba1-n-wpcc48aba1-n",
      "slug": "napoleon-wsehv4860ba1-n-wpcc48aba1-n",
      "modelId": "model-napoleon-wsehv4860ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv4860ba1-n",
      "indoorUnitId": "iu-wpcc48aba1-n",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv4860ba1-n-wpcc60aba1-n",
      "slug": "napoleon-wsehv4860ba1-n-wpcc60aba1-n",
      "modelId": "model-napoleon-wsehv4860ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv4860ba1-n",
      "indoorUnitId": "iu-wpcc60aba1-n",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ba1-n-wpcc24aba1-n",
      "slug": "napoleon-wsehv2436ba1-n-wpcc24aba1-n",
      "modelId": "model-napoleon-wsehv2436ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ba1-n",
      "indoorUnitId": "iu-wpcc24aba1-n",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv4860ra1-n-npfx48a60a",
      "slug": "napoleon-wsehv4860ra1-n-npfx48a60a",
      "modelId": "model-napoleon-wsehv4860ra1-n",
      "outdoorUnitId": "ou-napoleon-wsehv4860ra1-n",
      "indoorUnitId": "iu-npfx48a60a",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv4860ba1-n-wpcc48aba1",
      "slug": "napoleon-wsehv4860ba1-n-wpcc48aba1",
      "modelId": "model-napoleon-wsehv4860ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv4860ba1-n",
      "indoorUnitId": "iu-wpcc48aba1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ba1-n-wpcc36aba1-n",
      "slug": "napoleon-wsehv2436ba1-n-wpcc36aba1-n",
      "modelId": "model-napoleon-wsehv2436ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ba1-n",
      "indoorUnitId": "iu-wpcc36aba1-n",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv4860ba1-n-wpcc60aba1",
      "slug": "napoleon-wsehv4860ba1-n-wpcc60aba1",
      "modelId": "model-napoleon-wsehv4860ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv4860ba1-n",
      "indoorUnitId": "iu-wpcc60aba1",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ba1-c-wpcc36aba1",
      "slug": "napoleon-wsehv2436ba1-c-wpcc36aba1",
      "modelId": "model-napoleon-wsehv2436ba1-c",
      "outdoorUnitId": "ou-napoleon-wsehv2436ba1-c",
      "indoorUnitId": "iu-wpcc36aba1",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ba1-n-wpcc24aba1",
      "slug": "napoleon-wsehv2436ba1-n-wpcc24aba1",
      "modelId": "model-napoleon-wsehv2436ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ba1-n",
      "indoorUnitId": "iu-wpcc24aba1",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ba1-c-wpcc24aba1",
      "slug": "napoleon-wsehv2436ba1-c-wpcc24aba1",
      "modelId": "model-napoleon-wsehv2436ba1-c",
      "outdoorUnitId": "ou-napoleon-wsehv2436ba1-c",
      "indoorUnitId": "iu-wpcc24aba1",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wsehv2436ba1-n-wpcc36aba1",
      "slug": "napoleon-wsehv2436ba1-n-wpcc36aba1",
      "modelId": "model-napoleon-wsehv2436ba1-n",
      "outdoorUnitId": "ou-napoleon-wsehv2436ba1-n",
      "indoorUnitId": "iu-wpcc36aba1",
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
          "sourceId": "src-napoleon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-napoleon-wschv0048ba1-n-wecc60abc1",
      "slug": "napoleon-wschv0048ba1-n-wecc60abc1",
      "modelId": "model-napoleon-wschv0048ba1-n",
      "outdoorUnitId": "ou-napoleon-wschv0048ba1-n",
      "indoorUnitId": "iu-wecc60abc1",
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
          "sourceId": "src-napoleon-epa",
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
