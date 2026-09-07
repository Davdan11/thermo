import type { BrandDataset } from "../../types";

export const brand_continentalDataset: BrandDataset = {
  "brand": {
    "id": "brand-continental",
    "slug": "continental",
    "name": "Continental",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Continental",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-continental-epa",
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
      "id": "series-continental-cdh-series",
      "slug": "continental-cdh-series",
      "name": "CDH Series",
      "brandId": "brand-continental",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CDH Series de Continental",
      "imageUrl": "/images/series/continental-continental-cdh-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-continental-cdha-series",
      "slug": "continental-cdha-series",
      "name": "CDHA series",
      "brandId": "brand-continental",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CDHA series de Continental",
      "imageUrl": "/images/series/continental-continental-cdha-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-continental-f-series",
      "slug": "continental-f-series",
      "name": "F Series",
      "brandId": "brand-continental",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série F Series de Continental",
      "imageUrl": "/images/series/continental-continental-f-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-continental-hyper-heat",
      "slug": "continental-hyper-heat",
      "name": "Hyper Heat",
      "brandId": "brand-continental",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série Hyper Heat de Continental",
      "imageUrl": "/images/series/continental-continental-hyper-heat.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-continental-wse-series",
      "slug": "continental-wse-series",
      "name": "WSE Series",
      "brandId": "brand-continental",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WSE Series de Continental",
      "imageUrl": "/images/series/continental-continental-wse-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-continental-wsc-series",
      "slug": "continental-wsc-series",
      "name": "WSC Series",
      "brandId": "brand-continental",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WSC Series de Continental",
      "imageUrl": "/images/series/continental-continental-wsc-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-continental-cdhas26ba-09-o",
      "slug": "continental-cdhas26ba-09-o",
      "name": "Continental CDHAS26BA-09-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26BA-09-O",
      "normalizedModelNumber": "cdhas26ba-09-o",
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
      "id": "model-continental-cdhas26b-09-o",
      "slug": "continental-cdhas26b-09-o",
      "name": "Continental CDHAS26B-09-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26B-09-O",
      "normalizedModelNumber": "cdhas26b-09-o",
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
      "id": "model-continental-cdhas26b-24-o",
      "slug": "continental-cdhas26b-24-o",
      "name": "Continental CDHAS26B-24-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26B-24-O",
      "normalizedModelNumber": "cdhas26b-24-o",
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
      "id": "model-continental-cdhas26-12-o",
      "slug": "continental-cdhas26-12-o",
      "name": "Continental CDHAS26-12-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26-12-O",
      "normalizedModelNumber": "cdhas26-12-o",
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
      "id": "model-continental-cdhas26ba-12-o",
      "slug": "continental-cdhas26ba-12-o",
      "name": "Continental CDHAS26BA-12-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26BA-12-O",
      "normalizedModelNumber": "cdhas26ba-12-o",
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
      "id": "model-continental-cdhas26b-12-o",
      "slug": "continental-cdhas26b-12-o",
      "name": "Continental CDHAS26B-12-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26B-12-O",
      "normalizedModelNumber": "cdhas26b-12-o",
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
      "id": "model-continental-cdhambb-18-o",
      "slug": "continental-cdhambb-18-o",
      "name": "Continental CDHAMBB-18-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAMBB-18-O",
      "normalizedModelNumber": "cdhambb-18-o",
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
      "id": "model-continental-cdhas22b-18-o",
      "slug": "continental-cdhas22b-18-o",
      "name": "Continental CDHAS22B-18-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22B-18-O",
      "normalizedModelNumber": "cdhas22b-18-o",
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
      "id": "model-continental-cdhas22-18-o",
      "slug": "continental-cdhas22-18-o",
      "name": "Continental CDHAS22-18-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22-18-O",
      "normalizedModelNumber": "cdhas22-18-o",
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
      "id": "model-continental-cdhas22ba-18-o",
      "slug": "continental-cdhas22ba-18-o",
      "name": "Continental CDHAS22BA-18-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22BA-18-O",
      "normalizedModelNumber": "cdhas22ba-18-o",
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
      "id": "model-continental-cdhas22b-24-o",
      "slug": "continental-cdhas22b-24-o",
      "name": "Continental CDHAS22B-24-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22B-24-O",
      "normalizedModelNumber": "cdhas22b-24-o",
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
      "id": "model-continental-cdhas22ba-24-o",
      "slug": "continental-cdhas22ba-24-o",
      "name": "Continental CDHAS22BA-24-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22BA-24-O",
      "normalizedModelNumber": "cdhas22ba-24-o",
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
      "id": "model-continental-cdhas22b-12-o",
      "slug": "continental-cdhas22b-12-o",
      "name": "Continental CDHAS22B-12-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22B-12-O",
      "normalizedModelNumber": "cdhas22b-12-o",
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
      "id": "model-continental-cdhas22ba-12-o",
      "slug": "continental-cdhas22ba-12-o",
      "name": "Continental CDHAS22BA-12-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22BA-12-O",
      "normalizedModelNumber": "cdhas22ba-12-o",
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
      "id": "model-continental-cdhas22-12-o",
      "slug": "continental-cdhas22-12-o",
      "name": "Continental CDHAS22-12-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22-12-O",
      "normalizedModelNumber": "cdhas22-12-o",
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
      "id": "model-continental-cdhambb-27-o",
      "slug": "continental-cdhambb-27-o",
      "name": "Continental CDHAMBB-27-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAMBB-27-O",
      "normalizedModelNumber": "cdhambb-27-o",
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
      "id": "model-continental-cdhamb-27-o",
      "slug": "continental-cdhamb-27-o",
      "name": "Continental CDHAMB-27-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAMB-27-O",
      "normalizedModelNumber": "cdhamb-27-o",
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
      "id": "model-continental-cdhambb-36-o",
      "slug": "continental-cdhambb-36-o",
      "name": "Continental CDHAMBB-36-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAMBB-36-O",
      "normalizedModelNumber": "cdhambb-36-o",
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
      "id": "model-continental-cdhamb-36-o",
      "slug": "continental-cdhamb-36-o",
      "name": "Continental CDHAMB-36-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAMB-36-O",
      "normalizedModelNumber": "cdhamb-36-o",
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
      "id": "model-continental-cdham-28-o",
      "slug": "continental-cdham-28-o",
      "name": "Continental CDHAM-28-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAM-28-O",
      "normalizedModelNumber": "cdham-28-o",
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
      "id": "model-continental-cdhas26-18-o",
      "slug": "continental-cdhas26-18-o",
      "name": "Continental CDHAS26-18-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26-18-O",
      "normalizedModelNumber": "cdhas26-18-o",
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
      "id": "model-continental-cdhas26-24-o",
      "slug": "continental-cdhas26-24-o",
      "name": "Continental CDHAS26-24-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26-24-O",
      "normalizedModelNumber": "cdhas26-24-o",
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
      "id": "model-continental-cdhas26ba-18-o",
      "slug": "continental-cdhas26ba-18-o",
      "name": "Continental CDHAS26BA-18-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26BA-18-O",
      "normalizedModelNumber": "cdhas26ba-18-o",
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
      "id": "model-continental-cdhas26b-18-o",
      "slug": "continental-cdhas26b-18-o",
      "name": "Continental CDHAS26B-18-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26B-18-O",
      "normalizedModelNumber": "cdhas26b-18-o",
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
      "id": "model-continental-ndhamb-36-o",
      "slug": "continental-ndhamb-36-o",
      "name": "Continental NDHAMB-36-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "NDHAMB-36-O",
      "normalizedModelNumber": "ndhamb-36-o",
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
      "id": "model-continental-cdhas26ba-24-o",
      "slug": "continental-cdhas26ba-24-o",
      "name": "Continental CDHAS26BA-24-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26BA-24-O",
      "normalizedModelNumber": "cdhas26ba-24-o",
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
      "id": "model-continental-cdhas22-24-o",
      "slug": "continental-cdhas22-24-o",
      "name": "Continental CDHAS22-24-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS22-24-O",
      "normalizedModelNumber": "cdhas22-24-o",
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
      "id": "model-continental-cdham-36-o",
      "slug": "continental-cdham-36-o",
      "name": "Continental CDHAM-36-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAM-36-O",
      "normalizedModelNumber": "cdham-36-o",
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
      "id": "model-continental-cdhas26b-33-o",
      "slug": "continental-cdhas26b-33-o",
      "name": "Continental CDHAS26B-33-O",
      "seriesId": "series-continental-cdha-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26B-33-O",
      "normalizedModelNumber": "cdhas26b-33-o",
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
      "id": "model-continental-cdhas26ba-33-o",
      "slug": "continental-cdhas26ba-33-o",
      "name": "Continental CDHAS26BA-33-O",
      "seriesId": "series-continental-cdh-series",
      "brandId": "brand-continental",
      "modelNumber": "CDHAS26BA-33-O",
      "normalizedModelNumber": "cdhas26ba-33-o",
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
      "id": "model-continental-wsehv4860ba1-c",
      "slug": "continental-wsehv4860ba1-c",
      "name": "Continental WSEHV4860BA1-C",
      "seriesId": "series-continental-f-series",
      "brandId": "brand-continental",
      "modelNumber": "WSEHV4860BA1-C",
      "normalizedModelNumber": "wsehv4860ba1-c",
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
      "id": "model-continental-wsehv2436ba1-c",
      "slug": "continental-wsehv2436ba1-c",
      "name": "Continental WSEHV2436BA1-C",
      "seriesId": "series-continental-f-series",
      "brandId": "brand-continental",
      "modelNumber": "WSEHV2436BA1-C",
      "normalizedModelNumber": "wsehv2436ba1-c",
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
      "id": "model-continental-wsehv2436ra1-c",
      "slug": "continental-wsehv2436ra1-c",
      "name": "Continental WSEHV2436RA1-C",
      "seriesId": "series-continental-hyper-heat",
      "brandId": "brand-continental",
      "modelNumber": "WSEHV2436RA1-C",
      "normalizedModelNumber": "wsehv2436ra1-c",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 38000,
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
      "id": "model-continental-cs18hv24a36",
      "slug": "continental-cs18hv24a36",
      "name": "Continental CS18HV24A36",
      "seriesId": "series-continental-wse-series",
      "brandId": "brand-continental",
      "modelNumber": "CS18HV24A36",
      "normalizedModelNumber": "cs18hv24a36",
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
      "id": "model-continental-wsehv4860ra1-c",
      "slug": "continental-wsehv4860ra1-c",
      "name": "Continental WSEHV4860RA1-C",
      "seriesId": "series-continental-wse-series",
      "brandId": "brand-continental",
      "modelNumber": "WSEHV4860RA1-C",
      "normalizedModelNumber": "wsehv4860ra1-c",
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
      "id": "model-continental-wschv0024ba1-c",
      "slug": "continental-wschv0024ba1-c",
      "name": "Continental WSCHV0024BA1-C",
      "seriesId": "series-continental-wsc-series",
      "brandId": "brand-continental",
      "modelNumber": "WSCHV0024BA1-C",
      "normalizedModelNumber": "wschv0024ba1-c",
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
      "id": "model-continental-wschv0048ba1-c",
      "slug": "continental-wschv0048ba1-c",
      "name": "Continental WSCHV0048BA1-C",
      "seriesId": "series-continental-wsc-series",
      "brandId": "brand-continental",
      "modelNumber": "WSCHV0048BA1-C",
      "normalizedModelNumber": "wschv0048ba1-c",
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
      "id": "ou-continental-cdhas26ba-09-o",
      "modelNumber": "CDHAS26BA-09-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas26b-09-o",
      "modelNumber": "CDHAS26B-09-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas26b-24-o",
      "modelNumber": "CDHAS26B-24-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas26-12-o",
      "modelNumber": "CDHAS26-12-O",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cdhas26ba-12-o",
      "modelNumber": "CDHAS26BA-12-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas26b-12-o",
      "modelNumber": "CDHAS26B-12-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhambb-18-o",
      "modelNumber": "CDHAMBB-18-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas22b-18-o",
      "modelNumber": "CDHAS22B-18-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas22-18-o",
      "modelNumber": "CDHAS22-18-O",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cdhas22ba-18-o",
      "modelNumber": "CDHAS22BA-18-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas22b-24-o",
      "modelNumber": "CDHAS22B-24-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas22ba-24-o",
      "modelNumber": "CDHAS22BA-24-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas22b-12-o",
      "modelNumber": "CDHAS22B-12-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas22ba-12-o",
      "modelNumber": "CDHAS22BA-12-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas22-12-o",
      "modelNumber": "CDHAS22-12-O",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cdhambb-27-o",
      "modelNumber": "CDHAMBB-27-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhamb-27-o",
      "modelNumber": "CDHAMB-27-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhambb-36-o",
      "modelNumber": "CDHAMBB-36-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhamb-36-o",
      "modelNumber": "CDHAMB-36-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdham-28-o",
      "modelNumber": "CDHAM-28-O",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cdhas26-18-o",
      "modelNumber": "CDHAS26-18-O",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cdhas26-24-o",
      "modelNumber": "CDHAS26-24-O",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cdhas26ba-18-o",
      "modelNumber": "CDHAS26BA-18-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas26b-18-o",
      "modelNumber": "CDHAS26B-18-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-ndhamb-36-o",
      "modelNumber": "NDHAMB-36-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas26ba-24-o",
      "modelNumber": "CDHAS26BA-24-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas22-24-o",
      "modelNumber": "CDHAS22-24-O",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cdham-36-o",
      "modelNumber": "CDHAM-36-O",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cdhas26b-33-o",
      "modelNumber": "CDHAS26B-33-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-cdhas26ba-33-o",
      "modelNumber": "CDHAS26BA-33-O",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-wsehv4860ba1-c",
      "modelNumber": "WSEHV4860BA1-C",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-wsehv2436ba1-c",
      "modelNumber": "WSEHV2436BA1-C",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-wsehv2436ra1-c",
      "modelNumber": "WSEHV2436RA1-C",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-cs18hv24a36",
      "modelNumber": "CS18HV24A36",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-wsehv4860ra1-c",
      "modelNumber": "WSEHV4860RA1-C",
      "brandId": "brand-continental",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-continental-wschv0024ba1-c",
      "modelNumber": "WSCHV0024BA1-C",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-continental-wschv0048ba1-c",
      "modelNumber": "WSCHV0048BA1-C",
      "brandId": "brand-continental",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-cdhas26ba-09-i",
      "modelNumber": "CDHAS26BA-09-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26b-09-i",
      "modelNumber": "CDHAS26B-09-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26b-24-i",
      "modelNumber": "CDHAS26B-24-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26-12-i",
      "modelNumber": "CDHAS26-12-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26ba-12-i",
      "modelNumber": "CDHAS26BA-12-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26bb-12-i",
      "modelNumber": "CDHAS26BB-12-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26b-12-i",
      "modelNumber": "CDHAS26B-12-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43143",
      "modelNumber": "IU-43143",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22b-18-i",
      "modelNumber": "CDHAS22B-18-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22-18-i",
      "modelNumber": "CDHAS22-18-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22bb-18-i",
      "modelNumber": "CDHAS22BB-18-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22b-24-i",
      "modelNumber": "CDHAS22B-24-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22bb-24-i",
      "modelNumber": "CDHAS22BB-24-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22b-12-i",
      "modelNumber": "CDHAS22B-12-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22bb-12-i",
      "modelNumber": "CDHAS22BB-12-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22-12-i",
      "modelNumber": "CDHAS22-12-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43144",
      "modelNumber": "IU-43144",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43141",
      "modelNumber": "IU-43141",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43145",
      "modelNumber": "IU-43145",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43142",
      "modelNumber": "IU-43142",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43139",
      "modelNumber": "IU-43139",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26-18-i",
      "modelNumber": "CDHAS26-18-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26-24-i",
      "modelNumber": "CDHAS26-24-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26bb-18-i",
      "modelNumber": "CDHAS26BB-18-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26b-18-i",
      "modelNumber": "CDHAS26B-18-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26ba-18-i",
      "modelNumber": "CDHAS26BA-18-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43171",
      "modelNumber": "IU-43171",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26ba-24-i",
      "modelNumber": "CDHAS26BA-24-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas22-24-i",
      "modelNumber": "CDHAS22-24-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26bb-24-i",
      "modelNumber": "CDHAS26BB-24-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43140",
      "modelNumber": "IU-43140",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26b-33-i",
      "modelNumber": "CDHAS26B-33-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-cdhas26ba-33-i",
      "modelNumber": "CDHAS26BA-33-I",
      "brandId": "brand-continental",
      "type": "wall-single"
    },
    {
      "id": "iu-wpfx48a-c",
      "modelNumber": "WPFX48A-C",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpfx36a-c",
      "modelNumber": "WPFX36A-C",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpfx60a-c",
      "modelNumber": "WPFX60A-C",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpfx24a-c",
      "modelNumber": "WPFX24A-C",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-hde37936",
      "modelNumber": "H,DE37936",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-cpfx24a",
      "modelNumber": "CPFX24A",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-hde336936",
      "modelNumber": "H,DE33(6,9)36",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-cpfx48a",
      "modelNumber": "CPFX48A",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wecc24aba1",
      "modelNumber": "WECC24ABA1",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc24aba1",
      "modelNumber": "WPCC24ABA1",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-cpfx48a60a",
      "modelNumber": "CPFX48A60A",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc48aba1",
      "modelNumber": "WPCC48ABA1",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc60aba1",
      "modelNumber": "WPCC60ABA1",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-cpfx24a36a",
      "modelNumber": "CPFX24A36A",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wpcc36aba1",
      "modelNumber": "WPCC36ABA1",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wecc24abb1",
      "modelNumber": "WECC24ABB1",
      "brandId": "brand-continental",
      "type": "central-ducted"
    },
    {
      "id": "iu-wecc60abc1",
      "modelNumber": "WECC60ABC1",
      "brandId": "brand-continental",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-continental-cdhas26ba-09-o-cdhas26ba-09-i",
      "slug": "continental-cdhas26ba-09-o-cdhas26ba-09-i",
      "modelId": "model-continental-cdhas26ba-09-o",
      "outdoorUnitId": "ou-continental-cdhas26ba-09-o",
      "indoorUnitId": "iu-cdhas26ba-09-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26b-09-o-cdhas26b-09-i",
      "slug": "continental-cdhas26b-09-o-cdhas26b-09-i",
      "modelId": "model-continental-cdhas26b-09-o",
      "outdoorUnitId": "ou-continental-cdhas26b-09-o",
      "indoorUnitId": "iu-cdhas26b-09-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26b-24-o-cdhas26b-24-i",
      "slug": "continental-cdhas26b-24-o-cdhas26b-24-i",
      "modelId": "model-continental-cdhas26b-24-o",
      "outdoorUnitId": "ou-continental-cdhas26b-24-o",
      "indoorUnitId": "iu-cdhas26b-24-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26-12-o-cdhas26-12-i",
      "slug": "continental-cdhas26-12-o-cdhas26-12-i",
      "modelId": "model-continental-cdhas26-12-o",
      "outdoorUnitId": "ou-continental-cdhas26-12-o",
      "indoorUnitId": "iu-cdhas26-12-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26ba-12-o-cdhas26ba-12-i",
      "slug": "continental-cdhas26ba-12-o-cdhas26ba-12-i",
      "modelId": "model-continental-cdhas26ba-12-o",
      "outdoorUnitId": "ou-continental-cdhas26ba-12-o",
      "indoorUnitId": "iu-cdhas26ba-12-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26ba-12-o-cdhas26bb-12-i",
      "slug": "continental-cdhas26ba-12-o-cdhas26bb-12-i",
      "modelId": "model-continental-cdhas26ba-12-o",
      "outdoorUnitId": "ou-continental-cdhas26ba-12-o",
      "indoorUnitId": "iu-cdhas26bb-12-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26b-12-o-cdhas26b-12-i",
      "slug": "continental-cdhas26b-12-o-cdhas26b-12-i",
      "modelId": "model-continental-cdhas26b-12-o",
      "outdoorUnitId": "ou-continental-cdhas26b-12-o",
      "indoorUnitId": "iu-cdhas26b-12-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhambb-18-o-iu-43143",
      "slug": "continental-cdhambb-18-o-iu-43143",
      "modelId": "model-continental-cdhambb-18-o",
      "outdoorUnitId": "ou-continental-cdhambb-18-o",
      "indoorUnitId": "iu-iu-43143",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22b-18-o-cdhas22b-18-i",
      "slug": "continental-cdhas22b-18-o-cdhas22b-18-i",
      "modelId": "model-continental-cdhas22b-18-o",
      "outdoorUnitId": "ou-continental-cdhas22b-18-o",
      "indoorUnitId": "iu-cdhas22b-18-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22-18-o-cdhas22-18-i",
      "slug": "continental-cdhas22-18-o-cdhas22-18-i",
      "modelId": "model-continental-cdhas22-18-o",
      "outdoorUnitId": "ou-continental-cdhas22-18-o",
      "indoorUnitId": "iu-cdhas22-18-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22ba-18-o-cdhas22bb-18-i",
      "slug": "continental-cdhas22ba-18-o-cdhas22bb-18-i",
      "modelId": "model-continental-cdhas22ba-18-o",
      "outdoorUnitId": "ou-continental-cdhas22ba-18-o",
      "indoorUnitId": "iu-cdhas22bb-18-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22b-24-o-cdhas22b-24-i",
      "slug": "continental-cdhas22b-24-o-cdhas22b-24-i",
      "modelId": "model-continental-cdhas22b-24-o",
      "outdoorUnitId": "ou-continental-cdhas22b-24-o",
      "indoorUnitId": "iu-cdhas22b-24-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22ba-24-o-cdhas22bb-24-i",
      "slug": "continental-cdhas22ba-24-o-cdhas22bb-24-i",
      "modelId": "model-continental-cdhas22ba-24-o",
      "outdoorUnitId": "ou-continental-cdhas22ba-24-o",
      "indoorUnitId": "iu-cdhas22bb-24-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22b-12-o-cdhas22b-12-i",
      "slug": "continental-cdhas22b-12-o-cdhas22b-12-i",
      "modelId": "model-continental-cdhas22b-12-o",
      "outdoorUnitId": "ou-continental-cdhas22b-12-o",
      "indoorUnitId": "iu-cdhas22b-12-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22ba-12-o-cdhas22bb-12-i",
      "slug": "continental-cdhas22ba-12-o-cdhas22bb-12-i",
      "modelId": "model-continental-cdhas22ba-12-o",
      "outdoorUnitId": "ou-continental-cdhas22ba-12-o",
      "indoorUnitId": "iu-cdhas22bb-12-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22-12-o-cdhas22-12-i",
      "slug": "continental-cdhas22-12-o-cdhas22-12-i",
      "modelId": "model-continental-cdhas22-12-o",
      "outdoorUnitId": "ou-continental-cdhas22-12-o",
      "indoorUnitId": "iu-cdhas22-12-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhambb-27-o-iu-43144",
      "slug": "continental-cdhambb-27-o-iu-43144",
      "modelId": "model-continental-cdhambb-27-o",
      "outdoorUnitId": "ou-continental-cdhambb-27-o",
      "indoorUnitId": "iu-iu-43144",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhamb-27-o-iu-43141",
      "slug": "continental-cdhamb-27-o-iu-43141",
      "modelId": "model-continental-cdhamb-27-o",
      "outdoorUnitId": "ou-continental-cdhamb-27-o",
      "indoorUnitId": "iu-iu-43141",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhambb-36-o-iu-43145",
      "slug": "continental-cdhambb-36-o-iu-43145",
      "modelId": "model-continental-cdhambb-36-o",
      "outdoorUnitId": "ou-continental-cdhambb-36-o",
      "indoorUnitId": "iu-iu-43145",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhamb-36-o-iu-43142",
      "slug": "continental-cdhamb-36-o-iu-43142",
      "modelId": "model-continental-cdhamb-36-o",
      "outdoorUnitId": "ou-continental-cdhamb-36-o",
      "indoorUnitId": "iu-iu-43142",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdham-28-o-iu-43139",
      "slug": "continental-cdham-28-o-iu-43139",
      "modelId": "model-continental-cdham-28-o",
      "outdoorUnitId": "ou-continental-cdham-28-o",
      "indoorUnitId": "iu-iu-43139",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26-18-o-cdhas26-18-i",
      "slug": "continental-cdhas26-18-o-cdhas26-18-i",
      "modelId": "model-continental-cdhas26-18-o",
      "outdoorUnitId": "ou-continental-cdhas26-18-o",
      "indoorUnitId": "iu-cdhas26-18-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26-24-o-cdhas26-24-i",
      "slug": "continental-cdhas26-24-o-cdhas26-24-i",
      "modelId": "model-continental-cdhas26-24-o",
      "outdoorUnitId": "ou-continental-cdhas26-24-o",
      "indoorUnitId": "iu-cdhas26-24-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26ba-18-o-cdhas26bb-18-i",
      "slug": "continental-cdhas26ba-18-o-cdhas26bb-18-i",
      "modelId": "model-continental-cdhas26ba-18-o",
      "outdoorUnitId": "ou-continental-cdhas26ba-18-o",
      "indoorUnitId": "iu-cdhas26bb-18-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26b-18-o-cdhas26b-18-i",
      "slug": "continental-cdhas26b-18-o-cdhas26b-18-i",
      "modelId": "model-continental-cdhas26b-18-o",
      "outdoorUnitId": "ou-continental-cdhas26b-18-o",
      "indoorUnitId": "iu-cdhas26b-18-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26ba-18-o-cdhas26ba-18-i",
      "slug": "continental-cdhas26ba-18-o-cdhas26ba-18-i",
      "modelId": "model-continental-cdhas26ba-18-o",
      "outdoorUnitId": "ou-continental-cdhas26ba-18-o",
      "indoorUnitId": "iu-cdhas26ba-18-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-ndhamb-36-o-iu-43171",
      "slug": "continental-ndhamb-36-o-iu-43171",
      "modelId": "model-continental-ndhamb-36-o",
      "outdoorUnitId": "ou-continental-ndhamb-36-o",
      "indoorUnitId": "iu-iu-43171",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.55,
      "sources": [
        {
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26ba-24-o-cdhas26ba-24-i",
      "slug": "continental-cdhas26ba-24-o-cdhas26ba-24-i",
      "modelId": "model-continental-cdhas26ba-24-o",
      "outdoorUnitId": "ou-continental-cdhas26ba-24-o",
      "indoorUnitId": "iu-cdhas26ba-24-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas22-24-o-cdhas22-24-i",
      "slug": "continental-cdhas22-24-o-cdhas22-24-i",
      "modelId": "model-continental-cdhas22-24-o",
      "outdoorUnitId": "ou-continental-cdhas22-24-o",
      "indoorUnitId": "iu-cdhas22-24-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26ba-24-o-cdhas26bb-24-i",
      "slug": "continental-cdhas26ba-24-o-cdhas26bb-24-i",
      "modelId": "model-continental-cdhas26ba-24-o",
      "outdoorUnitId": "ou-continental-cdhas26ba-24-o",
      "indoorUnitId": "iu-cdhas26bb-24-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdham-36-o-iu-43140",
      "slug": "continental-cdham-36-o-iu-43140",
      "modelId": "model-continental-cdham-36-o",
      "outdoorUnitId": "ou-continental-cdham-36-o",
      "indoorUnitId": "iu-iu-43140",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26b-33-o-cdhas26b-33-i",
      "slug": "continental-cdhas26b-33-o-cdhas26b-33-i",
      "modelId": "model-continental-cdhas26b-33-o",
      "outdoorUnitId": "ou-continental-cdhas26b-33-o",
      "indoorUnitId": "iu-cdhas26b-33-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cdhas26ba-33-o-cdhas26ba-33-i",
      "slug": "continental-cdhas26ba-33-o-cdhas26ba-33-i",
      "modelId": "model-continental-cdhas26ba-33-o",
      "outdoorUnitId": "ou-continental-cdhas26ba-33-o",
      "indoorUnitId": "iu-cdhas26ba-33-i",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv4860ba1-c-wpfx48a-c",
      "slug": "continental-wsehv4860ba1-c-wpfx48a-c",
      "modelId": "model-continental-wsehv4860ba1-c",
      "outdoorUnitId": "ou-continental-wsehv4860ba1-c",
      "indoorUnitId": "iu-wpfx48a-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv2436ba1-c-wpfx36a-c",
      "slug": "continental-wsehv2436ba1-c-wpfx36a-c",
      "modelId": "model-continental-wsehv2436ba1-c",
      "outdoorUnitId": "ou-continental-wsehv2436ba1-c",
      "indoorUnitId": "iu-wpfx36a-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv4860ba1-c-wpfx60a-c",
      "slug": "continental-wsehv4860ba1-c-wpfx60a-c",
      "modelId": "model-continental-wsehv4860ba1-c",
      "outdoorUnitId": "ou-continental-wsehv4860ba1-c",
      "indoorUnitId": "iu-wpfx60a-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv2436ba1-c-wpfx24a-c",
      "slug": "continental-wsehv2436ba1-c-wpfx24a-c",
      "modelId": "model-continental-wsehv2436ba1-c",
      "outdoorUnitId": "ou-continental-wsehv2436ba1-c",
      "indoorUnitId": "iu-wpfx24a-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv2436ra1-c-hde37936",
      "slug": "continental-wsehv2436ra1-c-hde37936",
      "modelId": "model-continental-wsehv2436ra1-c",
      "outdoorUnitId": "ou-continental-wsehv2436ra1-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv2436ra1-c-cpfx24a",
      "slug": "continental-wsehv2436ra1-c-cpfx24a",
      "modelId": "model-continental-wsehv2436ra1-c",
      "outdoorUnitId": "ou-continental-wsehv2436ra1-c",
      "indoorUnitId": "iu-cpfx24a",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv2436ra1-c-hde336936",
      "slug": "continental-wsehv2436ra1-c-hde336936",
      "modelId": "model-continental-wsehv2436ra1-c",
      "outdoorUnitId": "ou-continental-wsehv2436ra1-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-cs18hv24a36-cpfx24a",
      "slug": "continental-cs18hv24a36-cpfx24a",
      "modelId": "model-continental-cs18hv24a36",
      "outdoorUnitId": "ou-continental-cs18hv24a36",
      "indoorUnitId": "iu-cpfx24a",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv4860ra1-c-cpfx48a",
      "slug": "continental-wsehv4860ra1-c-cpfx48a",
      "modelId": "model-continental-wsehv4860ra1-c",
      "outdoorUnitId": "ou-continental-wsehv4860ra1-c",
      "indoorUnitId": "iu-cpfx48a",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wschv0024ba1-c-wecc24aba1",
      "slug": "continental-wschv0024ba1-c-wecc24aba1",
      "modelId": "model-continental-wschv0024ba1-c",
      "outdoorUnitId": "ou-continental-wschv0024ba1-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv2436ba1-c-wpcc24aba1",
      "slug": "continental-wsehv2436ba1-c-wpcc24aba1",
      "modelId": "model-continental-wsehv2436ba1-c",
      "outdoorUnitId": "ou-continental-wsehv2436ba1-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv4860ra1-c-cpfx48a60a",
      "slug": "continental-wsehv4860ra1-c-cpfx48a60a",
      "modelId": "model-continental-wsehv4860ra1-c",
      "outdoorUnitId": "ou-continental-wsehv4860ra1-c",
      "indoorUnitId": "iu-cpfx48a60a",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv4860ba1-c-wpcc48aba1",
      "slug": "continental-wsehv4860ba1-c-wpcc48aba1",
      "modelId": "model-continental-wsehv4860ba1-c",
      "outdoorUnitId": "ou-continental-wsehv4860ba1-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv4860ba1-c-wpcc60aba1",
      "slug": "continental-wsehv4860ba1-c-wpcc60aba1",
      "modelId": "model-continental-wsehv4860ba1-c",
      "outdoorUnitId": "ou-continental-wsehv4860ba1-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv2436ra1-c-cpfx24a36a",
      "slug": "continental-wsehv2436ra1-c-cpfx24a36a",
      "modelId": "model-continental-wsehv2436ra1-c",
      "outdoorUnitId": "ou-continental-wsehv2436ra1-c",
      "indoorUnitId": "iu-cpfx24a36a",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wsehv2436ba1-c-wpcc36aba1",
      "slug": "continental-wsehv2436ba1-c-wpcc36aba1",
      "modelId": "model-continental-wsehv2436ba1-c",
      "outdoorUnitId": "ou-continental-wsehv2436ba1-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wschv0024ba1-c-wecc24abb1",
      "slug": "continental-wschv0024ba1-c-wecc24abb1",
      "modelId": "model-continental-wschv0024ba1-c",
      "outdoorUnitId": "ou-continental-wschv0024ba1-c",
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
          "sourceId": "src-continental-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-continental-wschv0048ba1-c-wecc60abc1",
      "slug": "continental-wschv0048ba1-c-wecc60abc1",
      "modelId": "model-continental-wschv0048ba1-c",
      "outdoorUnitId": "ou-continental-wschv0048ba1-c",
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
          "sourceId": "src-continental-epa",
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
