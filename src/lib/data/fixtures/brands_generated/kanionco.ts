import type { BrandDataset } from "../../types";

export const brand_kanioncoDataset: BrandDataset = {
  "brand": {
    "id": "brand-kanionco",
    "slug": "kanionco",
    "name": "KANIONco",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour KANIONco",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-kanionco-epa",
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
      "id": "series-kanionco-kwsm-series",
      "slug": "kanionco-kwsm-series",
      "name": "KWSM series",
      "brandId": "brand-kanionco",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série KWSM series de KANIONco",
      "imageUrl": "/images/series/kanionco-kanionco-kwsm-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kanionco-super-heated",
      "slug": "kanionco-super-heated",
      "name": "super heated",
      "brandId": "brand-kanionco",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série super heated de KANIONco",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kanionco-rex-series",
      "slug": "kanionco-rex-series",
      "name": "REX SERIES",
      "brandId": "brand-kanionco",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série REX SERIES de KANIONco",
      "imageUrl": "/images/series/kanionco-kanionco-rex-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kanionco-lcac-premium-series",
      "slug": "kanionco-lcac-premium-series",
      "name": "LCAC | PREMIUM SERIES",
      "brandId": "brand-kanionco",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LCAC | PREMIUM SERIES de KANIONco",
      "imageUrl": "/images/series/kanionco-kanionco-lcac-premium-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kanionco-k-series",
      "slug": "kanionco-k-series",
      "name": "K series",
      "brandId": "brand-kanionco",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série K series de KANIONco",
      "imageUrl": "/images/series/kanionco-kanionco-k-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kanionco-premium-series",
      "slug": "kanionco-premium-series",
      "name": "PREMIUM SERIES",
      "brandId": "brand-kanionco",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série PREMIUM SERIES de KANIONco",
      "imageUrl": "/images/series/kanionco-kanionco-premium-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kanionco-kd-series",
      "slug": "kanionco-kd-series",
      "name": "KD series",
      "brandId": "brand-kanionco",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série KD series de KANIONco",
      "imageUrl": "/images/series/kanionco-kanionco-kd-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-kanionco-kwsm-09ir410ahs281odu",
      "slug": "kanionco-kwsm-09ir410ahs281odu",
      "name": "KANIONco KWSM-09IR410AHS28.1ODU",
      "seriesId": "series-kanionco-kwsm-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR410AHS28.1ODU",
      "normalizedModelNumber": "kwsm-09ir410ahs28.1odu",
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
      "id": "model-kanionco-kwsmo-18ir454bhs27r",
      "slug": "kanionco-kwsmo-18ir454bhs27r",
      "name": "KANIONco KWSMO-18IR454BHS27R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-18IR454BHS27R",
      "normalizedModelNumber": "kwsmo-18ir454bhs27r",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 20000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kanionco-kwsmo-27ir454bhs265r",
      "slug": "kanionco-kwsmo-27ir454bhs265r",
      "name": "KANIONco KWSMO-27IR454BHS26.5R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-27IR454BHS26.5R",
      "normalizedModelNumber": "kwsmo-27ir454bhs26.5r",
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
      "id": "model-kanionco-kwsm-06ir410ahs265odu",
      "slug": "kanionco-kwsm-06ir410ahs265odu",
      "name": "KANIONco KWSM-06IR410AHS26.5ODU",
      "seriesId": "series-kanionco-kwsm-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-06IR410AHS26.5ODU",
      "normalizedModelNumber": "kwsm-06ir410ahs26.5odu",
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
      "id": "model-kanionco-kwsm-12ir410ahs255odu",
      "slug": "kanionco-kwsm-12ir410ahs255odu",
      "name": "KANIONco KWSM-12IR410AHS25.5ODU",
      "seriesId": "series-kanionco-kwsm-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-12IR410AHS25.5ODU",
      "normalizedModelNumber": "kwsm-12ir410ahs25.5odu",
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
      "id": "model-kanionco-kwsm-12ir454bhs25r",
      "slug": "kanionco-kwsm-12ir454bhs25r",
      "name": "KANIONco KWSM-12IR454BHS25R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-12IR454BHS25R",
      "normalizedModelNumber": "kwsm-12ir454bhs25r",
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
      "id": "model-kanionco-kwsm-09ir454bhs25r",
      "slug": "kanionco-kwsm-09ir454bhs25r",
      "name": "KANIONco KWSM-09IR454BHS25R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR454BHS25R",
      "normalizedModelNumber": "kwsm-09ir454bhs25r",
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
      "id": "model-kanionco-kwsmo-36ir454bhs25r",
      "slug": "kanionco-kwsmo-36ir454bhs25r",
      "name": "KANIONco KWSMO-36IR454BHS25R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-36IR454BHS25R",
      "normalizedModelNumber": "kwsmo-36ir454bhs25r",
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
      "id": "model-kanionco-kwsmo-48ir454bhs24r",
      "slug": "kanionco-kwsmo-48ir454bhs24r",
      "name": "KANIONco KWSMO-48IR454BHS24R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-48IR454BHS24R",
      "normalizedModelNumber": "kwsmo-48ir454bhs24r",
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
      "id": "model-kanionco-kwsm-12ir454bhs24r",
      "slug": "kanionco-kwsm-12ir454bhs24r",
      "name": "KANIONco KWSM-12IR454BHS24R",
      "seriesId": "series-kanionco-rex-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-12IR454BHS24R",
      "normalizedModelNumber": "kwsm-12ir454bhs24r",
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
      "id": "model-kanionco-kwsmo-27ir454bhs20",
      "slug": "kanionco-kwsmo-27ir454bhs20",
      "name": "KANIONco KWSMO-27IR454BHS20",
      "seriesId": "series-kanionco-lcac-premium-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-27IR454BHS20",
      "normalizedModelNumber": "kwsmo-27ir454bhs20",
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
      "id": "model-kanionco-kwsm-09ir410ahs24mvl",
      "slug": "kanionco-kwsm-09ir410ahs24mvl",
      "name": "KANIONco KWSM-09IR410AHS24MVL",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR410AHS24MVL",
      "normalizedModelNumber": "kwsm-09ir410ahs24mvl",
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
      "id": "model-kanionco-kwsm-09ir410ahs24mv",
      "slug": "kanionco-kwsm-09ir410ahs24mv",
      "name": "KANIONco KWSM-09IR410AHS24MV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR410AHS24MV",
      "normalizedModelNumber": "kwsm-09ir410ahs24mv",
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
      "id": "model-kanionco-kwsmo-18ir454bhs20",
      "slug": "kanionco-kwsmo-18ir454bhs20",
      "name": "KANIONco KWSMO-18IR454BHS20",
      "seriesId": "series-kanionco-lcac-premium-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-18IR454BHS20",
      "normalizedModelNumber": "kwsmo-18ir454bhs20",
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
      "id": "model-kanionco-kwsm-18ir410ahs235mv",
      "slug": "kanionco-kwsm-18ir410ahs235mv",
      "name": "KANIONco KWSM-18IR410AHS23.5MV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-18IR410AHS23.5MV",
      "normalizedModelNumber": "kwsm-18ir410ahs23.5mv",
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
      "id": "model-kanionco-kwsmo-27r410aihh",
      "slug": "kanionco-kwsmo-27r410aihh",
      "name": "KANIONco KWSMO-27R410AIHH",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-27R410AIHH",
      "normalizedModelNumber": "kwsmo-27r410aihh",
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
      "id": "model-kanionco-kwsm-24ir454bhs225r",
      "slug": "kanionco-kwsm-24ir454bhs225r",
      "name": "KANIONco KWSM-24IR454BHS22.5R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-24IR454BHS22.5R",
      "normalizedModelNumber": "kwsm-24ir454bhs22.5r",
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
      "id": "model-kanionco-kwsm-18ir454bhs235r",
      "slug": "kanionco-kwsm-18ir454bhs235r",
      "name": "KANIONco KWSM-18IR454BHS23.5R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-18IR454BHS23.5R",
      "normalizedModelNumber": "kwsm-18ir454bhs23.5r",
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
      "id": "model-kanionco-kwsmo-30r410aihmv",
      "slug": "kanionco-kwsmo-30r410aihmv",
      "name": "KANIONco KWSMO-30R410AIHMV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-30R410AIHMV",
      "normalizedModelNumber": "kwsmo-30r410aihmv",
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
      "id": "model-kanionco-kwsm-12ir410ahs22mv",
      "slug": "kanionco-kwsm-12ir410ahs22mv",
      "name": "KANIONco KWSM-12IR410AHS22MV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-12IR410AHS22MV",
      "normalizedModelNumber": "kwsm-12ir410ahs22mv",
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
      "id": "model-kanionco-kwsm-18ir454bhs23r",
      "slug": "kanionco-kwsm-18ir454bhs23r",
      "name": "KANIONco KWSM-18IR454BHS23R",
      "seriesId": "series-kanionco-rex-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-18IR454BHS23R",
      "normalizedModelNumber": "kwsm-18ir454bhs23r",
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
      "id": "model-kanionco-kwsm-24ir454bhs23r",
      "slug": "kanionco-kwsm-24ir454bhs23r",
      "name": "KANIONco KWSM-24IR454BHS23R",
      "seriesId": "series-kanionco-rex-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-24IR454BHS23R",
      "normalizedModelNumber": "kwsm-24ir454bhs23r",
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
      "id": "model-kanionco-kwsm-12ir454bhs23lr",
      "slug": "kanionco-kwsm-12ir454bhs23lr",
      "name": "KANIONco KWSM-12IR454BHS23LR",
      "seriesId": "series-kanionco-rex-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-12IR454BHS23LR",
      "normalizedModelNumber": "kwsm-12ir454bhs23lr",
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
      "id": "model-kanionco-kwsm-12ir410ahs215mvl",
      "slug": "kanionco-kwsm-12ir410ahs215mvl",
      "name": "KANIONco KWSM-12IR410AHS21.5MVL",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-12IR410AHS21.5MVL",
      "normalizedModelNumber": "kwsm-12ir410ahs21.5mvl",
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
      "id": "model-kanionco-kwsmo-36ir454bhs19",
      "slug": "kanionco-kwsmo-36ir454bhs19",
      "name": "KANIONco KWSMO-36IR454BHS19",
      "seriesId": "series-kanionco-lcac-premium-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-36IR454BHS19",
      "normalizedModelNumber": "kwsmo-36ir454bhs19",
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
      "id": "model-kanionco-kwsmo-55ir454bhs225r",
      "slug": "kanionco-kwsmo-55ir454bhs225r",
      "name": "KANIONco KWSMO-55IR454BHS22.5R",
      "seriesId": "series-kanionco-super-heated",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-55IR454BHS22.5R",
      "normalizedModelNumber": "kwsmo-55ir454bhs22.5r",
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
      "id": "model-kanionco-kwsmo-42ir454bhs19",
      "slug": "kanionco-kwsmo-42ir454bhs19",
      "name": "KANIONco KWSMO-42IR454BHS19",
      "seriesId": "series-kanionco-lcac-premium-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-42IR454BHS19",
      "normalizedModelNumber": "kwsmo-42ir454bhs19",
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
      "id": "model-kanionco-kwsmo-27ir410ahsp",
      "slug": "kanionco-kwsmo-27ir410ahsp",
      "name": "KANIONco KWSMO-27IR410AHSP",
      "seriesId": "series-kanionco-premium-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-27IR410AHSP",
      "normalizedModelNumber": "kwsmo-27ir410ahsp",
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
      "id": "model-kanionco-kwsm-09ir410ahs215mv",
      "slug": "kanionco-kwsm-09ir410ahs215mv",
      "name": "KANIONco KWSM-09IR410AHS21.5MV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR410AHS21.5MV",
      "normalizedModelNumber": "kwsm-09ir410ahs21.5mv",
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
      "id": "model-kanionco-kwsm-09ir410ahs215mvodu",
      "slug": "kanionco-kwsm-09ir410ahs215mvodu",
      "name": "KANIONco KWSM-09IR410AHS21.5MVODU",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR410AHS21.5MVODU",
      "normalizedModelNumber": "kwsm-09ir410ahs21.5mvodu",
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
      "id": "model-kanionco-kwsm-09ir410ahs205mvl",
      "slug": "kanionco-kwsm-09ir410ahs205mvl",
      "name": "KANIONco KWSM-09IR410AHS20.5MVL",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR410AHS20.5MVL",
      "normalizedModelNumber": "kwsm-09ir410ahs20.5mvl",
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
      "id": "model-kanionco-kwsmo-36ir410ahsp",
      "slug": "kanionco-kwsmo-36ir410ahsp",
      "name": "KANIONco KWSMO-36IR410AHSP",
      "seriesId": "series-kanionco-premium-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-36IR410AHSP",
      "normalizedModelNumber": "kwsmo-36ir410ahsp",
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
      "id": "model-kanionco-kwsm-18ir410ahs215odu",
      "slug": "kanionco-kwsm-18ir410ahs215odu",
      "name": "KANIONco KWSM-18IR410AHS21.5ODU",
      "seriesId": "series-kanionco-kwsm-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-18IR410AHS21.5ODU",
      "normalizedModelNumber": "kwsm-18ir410ahs21.5odu",
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
      "id": "model-kanionco-kwsm-24ir410ahs215odu",
      "slug": "kanionco-kwsm-24ir410ahs215odu",
      "name": "KANIONco KWSM-24IR410AHS21.5ODU",
      "seriesId": "series-kanionco-kwsm-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-24IR410AHS21.5ODU",
      "normalizedModelNumber": "kwsm-24ir410ahs21.5odu",
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
      "id": "model-kanionco-kwsm-09ir410ahs20mvlodu",
      "slug": "kanionco-kwsm-09ir410ahs20mvlodu",
      "name": "KANIONco KWSM-09IR410AHS20MVLODU",
      "seriesId": "series-kanionco-kwsm-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR410AHS20MVLODU",
      "normalizedModelNumber": "kwsm-09ir410ahs20mvlodu",
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
      "id": "model-kanionco-kwsm-24ir410ahs23mv",
      "slug": "kanionco-kwsm-24ir410ahs23mv",
      "name": "KANIONco KWSM-24IR410AHS23MV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-24IR410AHS23MV",
      "normalizedModelNumber": "kwsm-24ir410ahs23mv",
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
      "id": "model-kanionco-kwsmo-18r410aihmv",
      "slug": "kanionco-kwsmo-18r410aihmv",
      "name": "KANIONco KWSMO-18R410AIHMV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-18R410AIHMV",
      "normalizedModelNumber": "kwsmo-18r410aihmv",
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
      "id": "model-kanionco-kwsm-30ir410ahs20mvodu",
      "slug": "kanionco-kwsm-30ir410ahs20mvodu",
      "name": "KANIONco KWSM-30IR410AHS20MVODU",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-30IR410AHS20MVODU",
      "normalizedModelNumber": "kwsm-30ir410ahs20mvodu",
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
      "id": "model-kanionco-kwsm-24ir410ahs21mv",
      "slug": "kanionco-kwsm-24ir410ahs21mv",
      "name": "KANIONco KWSM-24IR410AHS21MV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-24IR410AHS21MV",
      "normalizedModelNumber": "kwsm-24ir410ahs21mv",
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
      "id": "model-kanionco-kwsmo-18r410aihh",
      "slug": "kanionco-kwsmo-18r410aihh",
      "name": "KANIONco KWSMO-18R410AIHH",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSMO-18R410AIHH",
      "normalizedModelNumber": "kwsmo-18r410aihh",
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
      "id": "model-kanionco-kd-09ir410ahsodu",
      "slug": "kanionco-kd-09ir410ahsodu",
      "name": "KANIONco KD-09IR410AHSODU",
      "seriesId": "series-kanionco-kd-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KD-09IR410AHSODU",
      "normalizedModelNumber": "kd-09ir410ahsodu",
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
      "id": "model-kanionco-kwsm-09ir454bhs20p",
      "slug": "kanionco-kwsm-09ir454bhs20p",
      "name": "KANIONco KWSM-09IR454BHS20P",
      "seriesId": "series-kanionco-premium-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR454BHS20P",
      "normalizedModelNumber": "kwsm-09ir454bhs20p",
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
      "id": "model-kanionco-kd-12ir410ahsodu",
      "slug": "kanionco-kd-12ir410ahsodu",
      "name": "KANIONco KD-12IR410AHSODU",
      "seriesId": "series-kanionco-kd-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KD-12IR410AHSODU",
      "normalizedModelNumber": "kd-12ir410ahsodu",
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
      "id": "model-kanionco-kd-24ir410ahsodu",
      "slug": "kanionco-kd-24ir410ahsodu",
      "name": "KANIONco KD-24IR410AHSODU",
      "seriesId": "series-kanionco-kd-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KD-24IR410AHSODU",
      "normalizedModelNumber": "kd-24ir410ahsodu",
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
      "id": "model-kanionco-kwsm-09ir454bhs19lp",
      "slug": "kanionco-kwsm-09ir454bhs19lp",
      "name": "KANIONco KWSM-09IR454BHS19LP",
      "seriesId": "series-kanionco-premium-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR454BHS19LP",
      "normalizedModelNumber": "kwsm-09ir454bhs19lp",
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
      "id": "model-kanionco-kwsm-09ir410ahs16mv",
      "slug": "kanionco-kwsm-09ir410ahs16mv",
      "name": "KANIONco KWSM-09IR410AHS16MV",
      "seriesId": "series-kanionco-k-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KWSM-09IR410AHS16MV",
      "normalizedModelNumber": "kwsm-09ir410ahs16mv",
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
      "id": "model-kanionco-kd-18ir410ahsodu",
      "slug": "kanionco-kd-18ir410ahsodu",
      "name": "KANIONco KD-18IR410AHSODU",
      "seriesId": "series-kanionco-kd-series",
      "brandId": "brand-kanionco",
      "modelNumber": "KD-18IR410AHSODU",
      "normalizedModelNumber": "kd-18ir410ahsodu",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-kanionco-kwsm-09ir410ahs281odu",
      "modelNumber": "KWSM-09IR410AHS28.1ODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsmo-18ir454bhs27r",
      "modelNumber": "KWSMO-18IR454BHS27R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsmo-27ir454bhs265r",
      "modelNumber": "KWSMO-27IR454BHS26.5R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-06ir410ahs265odu",
      "modelNumber": "KWSM-06IR410AHS26.5ODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-12ir410ahs255odu",
      "modelNumber": "KWSM-12IR410AHS25.5ODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-12ir454bhs25r",
      "modelNumber": "KWSM-12IR454BHS25R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-09ir454bhs25r",
      "modelNumber": "KWSM-09IR454BHS25R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsmo-36ir454bhs25r",
      "modelNumber": "KWSMO-36IR454BHS25R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsmo-48ir454bhs24r",
      "modelNumber": "KWSMO-48IR454BHS24R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-12ir454bhs24r",
      "modelNumber": "KWSM-12IR454BHS24R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsmo-27ir454bhs20",
      "modelNumber": "KWSMO-27IR454BHS20",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-09ir410ahs24mvl",
      "modelNumber": "KWSM-09IR410AHS24MVL",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-09ir410ahs24mv",
      "modelNumber": "KWSM-09IR410AHS24MV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsmo-18ir454bhs20",
      "modelNumber": "KWSMO-18IR454BHS20",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-18ir410ahs235mv",
      "modelNumber": "KWSM-18IR410AHS23.5MV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsmo-27r410aihh",
      "modelNumber": "KWSMO-27R410AIHH",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-24ir454bhs225r",
      "modelNumber": "KWSM-24IR454BHS22.5R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-18ir454bhs235r",
      "modelNumber": "KWSM-18IR454BHS23.5R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsmo-30r410aihmv",
      "modelNumber": "KWSMO-30R410AIHMV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-12ir410ahs22mv",
      "modelNumber": "KWSM-12IR410AHS22MV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-18ir454bhs23r",
      "modelNumber": "KWSM-18IR454BHS23R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-24ir454bhs23r",
      "modelNumber": "KWSM-24IR454BHS23R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-12ir454bhs23lr",
      "modelNumber": "KWSM-12IR454BHS23LR",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-12ir410ahs215mvl",
      "modelNumber": "KWSM-12IR410AHS21.5MVL",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsmo-36ir454bhs19",
      "modelNumber": "KWSMO-36IR454BHS19",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsmo-55ir454bhs225r",
      "modelNumber": "KWSMO-55IR454BHS22.5R",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsmo-42ir454bhs19",
      "modelNumber": "KWSMO-42IR454BHS19",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsmo-27ir410ahsp",
      "modelNumber": "KWSMO-27IR410AHSP",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-09ir410ahs215mv",
      "modelNumber": "KWSM-09IR410AHS21.5MV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-09ir410ahs215mvodu",
      "modelNumber": "KWSM-09IR410AHS21.5MVODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-09ir410ahs205mvl",
      "modelNumber": "KWSM-09IR410AHS20.5MVL",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsmo-36ir410ahsp",
      "modelNumber": "KWSMO-36IR410AHSP",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-18ir410ahs215odu",
      "modelNumber": "KWSM-18IR410AHS21.5ODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-24ir410ahs215odu",
      "modelNumber": "KWSM-24IR410AHS21.5ODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-09ir410ahs20mvlodu",
      "modelNumber": "KWSM-09IR410AHS20MVLODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-24ir410ahs23mv",
      "modelNumber": "KWSM-24IR410AHS23MV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsmo-18r410aihmv",
      "modelNumber": "KWSMO-18R410AIHMV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-30ir410ahs20mvodu",
      "modelNumber": "KWSM-30IR410AHS20MVODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-24ir410ahs21mv",
      "modelNumber": "KWSM-24IR410AHS21MV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsmo-18r410aihh",
      "modelNumber": "KWSMO-18R410AIHH",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kd-09ir410ahsodu",
      "modelNumber": "KD-09IR410AHSODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-09ir454bhs20p",
      "modelNumber": "KWSM-09IR454BHS20P",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kd-12ir410ahsodu",
      "modelNumber": "KD-12IR410AHSODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kd-24ir410ahsodu",
      "modelNumber": "KD-24IR410AHSODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kwsm-09ir454bhs19lp",
      "modelNumber": "KWSM-09IR454BHS19LP",
      "brandId": "brand-kanionco",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kanionco-kwsm-09ir410ahs16mv",
      "modelNumber": "KWSM-09IR410AHS16MV",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanionco-kd-18ir410ahsodu",
      "modelNumber": "KD-18IR410AHSODU",
      "brandId": "brand-kanionco",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-kwsm-09ir410ahs281idu",
      "modelNumber": "KWSM-09IR410AHS28.1IDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46320",
      "modelNumber": "IU-46320",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46325",
      "modelNumber": "IU-46325",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-06ir410ahs265idu",
      "modelNumber": "KWSM-06IR410AHS26.5IDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-12ir410ahs255idu",
      "modelNumber": "KWSM-12IR410AHS25.5IDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-12ir454bhs25r",
      "modelNumber": "KWSM-12IR454BHS25R",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir454bhs25r",
      "modelNumber": "KWSM-09IR454BHS25R",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46330",
      "modelNumber": "IU-46330",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46332",
      "modelNumber": "IU-46332",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-12ir454bhs24r",
      "modelNumber": "KWSM-12IR454BHS24R",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46324",
      "modelNumber": "IU-46324",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir410ahs24mvl",
      "modelNumber": "KWSM-09IR410AHS24MVL",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir410ahs24mv",
      "modelNumber": "KWSM-09IR410AHS24MV",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46319",
      "modelNumber": "IU-46319",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-18ir410ahs235mv",
      "modelNumber": "KWSM-18IR410AHS23.5MV",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46326",
      "modelNumber": "IU-46326",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-24ir454bhs225r",
      "modelNumber": "KWSM-24IR454BHS22.5R",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-18ir454bhs235r",
      "modelNumber": "KWSM-18IR454BHS23.5R",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46327",
      "modelNumber": "IU-46327",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-12ir410ahs22mv",
      "modelNumber": "KWSM-12IR410AHS22MV",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-18ir454bhs23r",
      "modelNumber": "KWSM-18IR454BHS23R",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-24ir454bhs23r",
      "modelNumber": "KWSM-24IR454BHS23R",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-12ir454bhs23lr",
      "modelNumber": "KWSM-12IR454BHS23LR",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-12ir410ahs215mvl",
      "modelNumber": "KWSM-12IR410AHS21.5MVL",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46329",
      "modelNumber": "IU-46329",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46333",
      "modelNumber": "IU-46333",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46331",
      "modelNumber": "IU-46331",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46323",
      "modelNumber": "IU-46323",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir410ahs215mv",
      "modelNumber": "KWSM-09IR410AHS21.5MV",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir410ahs215mvidu",
      "modelNumber": "KWSM-09IR410AHS21.5MVIDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir410ahs205mvl",
      "modelNumber": "KWSM-09IR410AHS20.5MVL",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46328",
      "modelNumber": "IU-46328",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-18ir410ahs215idu",
      "modelNumber": "KWSM-18IR410AHS21.5IDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-24ir410ahs215idu",
      "modelNumber": "KWSM-24IR410AHS21.5IDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir410ahs20mvlidu",
      "modelNumber": "KWSM-09IR410AHS20MVLIDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-24ir410ahs22mv",
      "modelNumber": "KWSM-24IR410AHS22MV",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46322",
      "modelNumber": "IU-46322",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-30ir410ahs20mvidu",
      "modelNumber": "KWSM-30IR410AHS20MVIDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-24ir410ahs21mv",
      "modelNumber": "KWSM-24IR410AHS21MV",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46321",
      "modelNumber": "IU-46321",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kd-09ir410ahsidu",
      "modelNumber": "KD-09IR410AHSIDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir454bhs20p",
      "modelNumber": "KWSM-09IR454BHS20P",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kd-12ir410ahsidu",
      "modelNumber": "KD-12IR410AHSIDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kd-24ir410ahsidu",
      "modelNumber": "KD-24IR410AHSIDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir454bhs19lp",
      "modelNumber": "KWSM-09IR454BHS19LP",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kwsm-09ir410ahs16mv",
      "modelNumber": "KWSM-09IR410AHS16MV",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    },
    {
      "id": "iu-kd-18ir410ahsidu",
      "modelNumber": "KD-18IR410AHSIDU",
      "brandId": "brand-kanionco",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-kanionco-kwsm-09ir410ahs281odu-kwsm-09ir410ahs281idu",
      "slug": "kanionco-kwsm-09ir410ahs281odu-kwsm-09ir410ahs281idu",
      "modelId": "model-kanionco-kwsm-09ir410ahs281odu",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir410ahs281odu",
      "indoorUnitId": "iu-kwsm-09ir410ahs281idu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-18ir454bhs27r-iu-46320",
      "slug": "kanionco-kwsmo-18ir454bhs27r-iu-46320",
      "modelId": "model-kanionco-kwsmo-18ir454bhs27r",
      "outdoorUnitId": "ou-kanionco-kwsmo-18ir454bhs27r",
      "indoorUnitId": "iu-iu-46320",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-27ir454bhs265r-iu-46325",
      "slug": "kanionco-kwsmo-27ir454bhs265r-iu-46325",
      "modelId": "model-kanionco-kwsmo-27ir454bhs265r",
      "outdoorUnitId": "ou-kanionco-kwsmo-27ir454bhs265r",
      "indoorUnitId": "iu-iu-46325",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-06ir410ahs265odu-kwsm-06ir410ahs265idu",
      "slug": "kanionco-kwsm-06ir410ahs265odu-kwsm-06ir410ahs265idu",
      "modelId": "model-kanionco-kwsm-06ir410ahs265odu",
      "outdoorUnitId": "ou-kanionco-kwsm-06ir410ahs265odu",
      "indoorUnitId": "iu-kwsm-06ir410ahs265idu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-12ir410ahs255odu-kwsm-12ir410ahs255idu",
      "slug": "kanionco-kwsm-12ir410ahs255odu-kwsm-12ir410ahs255idu",
      "modelId": "model-kanionco-kwsm-12ir410ahs255odu",
      "outdoorUnitId": "ou-kanionco-kwsm-12ir410ahs255odu",
      "indoorUnitId": "iu-kwsm-12ir410ahs255idu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-12ir454bhs25r-kwsm-12ir454bhs25r",
      "slug": "kanionco-kwsm-12ir454bhs25r-kwsm-12ir454bhs25r",
      "modelId": "model-kanionco-kwsm-12ir454bhs25r",
      "outdoorUnitId": "ou-kanionco-kwsm-12ir454bhs25r",
      "indoorUnitId": "iu-kwsm-12ir454bhs25r",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir454bhs25r-kwsm-09ir454bhs25r",
      "slug": "kanionco-kwsm-09ir454bhs25r-kwsm-09ir454bhs25r",
      "modelId": "model-kanionco-kwsm-09ir454bhs25r",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir454bhs25r",
      "indoorUnitId": "iu-kwsm-09ir454bhs25r",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-36ir454bhs25r-iu-46330",
      "slug": "kanionco-kwsmo-36ir454bhs25r-iu-46330",
      "modelId": "model-kanionco-kwsmo-36ir454bhs25r",
      "outdoorUnitId": "ou-kanionco-kwsmo-36ir454bhs25r",
      "indoorUnitId": "iu-iu-46330",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-48ir454bhs24r-iu-46332",
      "slug": "kanionco-kwsmo-48ir454bhs24r-iu-46332",
      "modelId": "model-kanionco-kwsmo-48ir454bhs24r",
      "outdoorUnitId": "ou-kanionco-kwsmo-48ir454bhs24r",
      "indoorUnitId": "iu-iu-46332",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-12ir454bhs24r-kwsm-12ir454bhs24r",
      "slug": "kanionco-kwsm-12ir454bhs24r-kwsm-12ir454bhs24r",
      "modelId": "model-kanionco-kwsm-12ir454bhs24r",
      "outdoorUnitId": "ou-kanionco-kwsm-12ir454bhs24r",
      "indoorUnitId": "iu-kwsm-12ir454bhs24r",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-27ir454bhs20-iu-46324",
      "slug": "kanionco-kwsmo-27ir454bhs20-iu-46324",
      "modelId": "model-kanionco-kwsmo-27ir454bhs20",
      "outdoorUnitId": "ou-kanionco-kwsmo-27ir454bhs20",
      "indoorUnitId": "iu-iu-46324",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir410ahs24mvl-kwsm-09ir410ahs24mvl",
      "slug": "kanionco-kwsm-09ir410ahs24mvl-kwsm-09ir410ahs24mvl",
      "modelId": "model-kanionco-kwsm-09ir410ahs24mvl",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir410ahs24mvl",
      "indoorUnitId": "iu-kwsm-09ir410ahs24mvl",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir410ahs24mv-kwsm-09ir410ahs24mv",
      "slug": "kanionco-kwsm-09ir410ahs24mv-kwsm-09ir410ahs24mv",
      "modelId": "model-kanionco-kwsm-09ir410ahs24mv",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir410ahs24mv",
      "indoorUnitId": "iu-kwsm-09ir410ahs24mv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-18ir454bhs20-iu-46319",
      "slug": "kanionco-kwsmo-18ir454bhs20-iu-46319",
      "modelId": "model-kanionco-kwsmo-18ir454bhs20",
      "outdoorUnitId": "ou-kanionco-kwsmo-18ir454bhs20",
      "indoorUnitId": "iu-iu-46319",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-18ir410ahs235mv-kwsm-18ir410ahs235mv",
      "slug": "kanionco-kwsm-18ir410ahs235mv-kwsm-18ir410ahs235mv",
      "modelId": "model-kanionco-kwsm-18ir410ahs235mv",
      "outdoorUnitId": "ou-kanionco-kwsm-18ir410ahs235mv",
      "indoorUnitId": "iu-kwsm-18ir410ahs235mv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-27r410aihh-iu-46326",
      "slug": "kanionco-kwsmo-27r410aihh-iu-46326",
      "modelId": "model-kanionco-kwsmo-27r410aihh",
      "outdoorUnitId": "ou-kanionco-kwsmo-27r410aihh",
      "indoorUnitId": "iu-iu-46326",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-24ir454bhs225r-kwsm-24ir454bhs225r",
      "slug": "kanionco-kwsm-24ir454bhs225r-kwsm-24ir454bhs225r",
      "modelId": "model-kanionco-kwsm-24ir454bhs225r",
      "outdoorUnitId": "ou-kanionco-kwsm-24ir454bhs225r",
      "indoorUnitId": "iu-kwsm-24ir454bhs225r",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-18ir454bhs235r-kwsm-18ir454bhs235r",
      "slug": "kanionco-kwsm-18ir454bhs235r-kwsm-18ir454bhs235r",
      "modelId": "model-kanionco-kwsm-18ir454bhs235r",
      "outdoorUnitId": "ou-kanionco-kwsm-18ir454bhs235r",
      "indoorUnitId": "iu-kwsm-18ir454bhs235r",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-30r410aihmv-iu-46327",
      "slug": "kanionco-kwsmo-30r410aihmv-iu-46327",
      "modelId": "model-kanionco-kwsmo-30r410aihmv",
      "outdoorUnitId": "ou-kanionco-kwsmo-30r410aihmv",
      "indoorUnitId": "iu-iu-46327",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-12ir410ahs22mv-kwsm-12ir410ahs22mv",
      "slug": "kanionco-kwsm-12ir410ahs22mv-kwsm-12ir410ahs22mv",
      "modelId": "model-kanionco-kwsm-12ir410ahs22mv",
      "outdoorUnitId": "ou-kanionco-kwsm-12ir410ahs22mv",
      "indoorUnitId": "iu-kwsm-12ir410ahs22mv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-18ir454bhs23r-kwsm-18ir454bhs23r",
      "slug": "kanionco-kwsm-18ir454bhs23r-kwsm-18ir454bhs23r",
      "modelId": "model-kanionco-kwsm-18ir454bhs23r",
      "outdoorUnitId": "ou-kanionco-kwsm-18ir454bhs23r",
      "indoorUnitId": "iu-kwsm-18ir454bhs23r",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-24ir454bhs23r-kwsm-24ir454bhs23r",
      "slug": "kanionco-kwsm-24ir454bhs23r-kwsm-24ir454bhs23r",
      "modelId": "model-kanionco-kwsm-24ir454bhs23r",
      "outdoorUnitId": "ou-kanionco-kwsm-24ir454bhs23r",
      "indoorUnitId": "iu-kwsm-24ir454bhs23r",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-12ir454bhs23lr-kwsm-12ir454bhs23lr",
      "slug": "kanionco-kwsm-12ir454bhs23lr-kwsm-12ir454bhs23lr",
      "modelId": "model-kanionco-kwsm-12ir454bhs23lr",
      "outdoorUnitId": "ou-kanionco-kwsm-12ir454bhs23lr",
      "indoorUnitId": "iu-kwsm-12ir454bhs23lr",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-12ir410ahs215mvl-kwsm-12ir410ahs215mvl",
      "slug": "kanionco-kwsm-12ir410ahs215mvl-kwsm-12ir410ahs215mvl",
      "modelId": "model-kanionco-kwsm-12ir410ahs215mvl",
      "outdoorUnitId": "ou-kanionco-kwsm-12ir410ahs215mvl",
      "indoorUnitId": "iu-kwsm-12ir410ahs215mvl",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-24ir454bhs225r-kwsm-24ir454bhs225r",
      "slug": "kanionco-kwsm-24ir454bhs225r-kwsm-24ir454bhs225r",
      "modelId": "model-kanionco-kwsm-24ir454bhs225r",
      "outdoorUnitId": "ou-kanionco-kwsm-24ir454bhs225r",
      "indoorUnitId": "iu-kwsm-24ir454bhs225r",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-36ir454bhs19-iu-46329",
      "slug": "kanionco-kwsmo-36ir454bhs19-iu-46329",
      "modelId": "model-kanionco-kwsmo-36ir454bhs19",
      "outdoorUnitId": "ou-kanionco-kwsmo-36ir454bhs19",
      "indoorUnitId": "iu-iu-46329",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-55ir454bhs225r-iu-46333",
      "slug": "kanionco-kwsmo-55ir454bhs225r-iu-46333",
      "modelId": "model-kanionco-kwsmo-55ir454bhs225r",
      "outdoorUnitId": "ou-kanionco-kwsmo-55ir454bhs225r",
      "indoorUnitId": "iu-iu-46333",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-42ir454bhs19-iu-46331",
      "slug": "kanionco-kwsmo-42ir454bhs19-iu-46331",
      "modelId": "model-kanionco-kwsmo-42ir454bhs19",
      "outdoorUnitId": "ou-kanionco-kwsmo-42ir454bhs19",
      "indoorUnitId": "iu-iu-46331",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-27ir410ahsp-iu-46323",
      "slug": "kanionco-kwsmo-27ir410ahsp-iu-46323",
      "modelId": "model-kanionco-kwsmo-27ir410ahsp",
      "outdoorUnitId": "ou-kanionco-kwsmo-27ir410ahsp",
      "indoorUnitId": "iu-iu-46323",
      "minHeatingTempC": -15,
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir410ahs215mv-kwsm-09ir410ahs215mv",
      "slug": "kanionco-kwsm-09ir410ahs215mv-kwsm-09ir410ahs215mv",
      "modelId": "model-kanionco-kwsm-09ir410ahs215mv",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir410ahs215mv",
      "indoorUnitId": "iu-kwsm-09ir410ahs215mv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir410ahs215mvodu-kwsm-09ir410ahs215mvidu",
      "slug": "kanionco-kwsm-09ir410ahs215mvodu-kwsm-09ir410ahs215mvidu",
      "modelId": "model-kanionco-kwsm-09ir410ahs215mvodu",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir410ahs215mvodu",
      "indoorUnitId": "iu-kwsm-09ir410ahs215mvidu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir410ahs205mvl-kwsm-09ir410ahs205mvl",
      "slug": "kanionco-kwsm-09ir410ahs205mvl-kwsm-09ir410ahs205mvl",
      "modelId": "model-kanionco-kwsm-09ir410ahs205mvl",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir410ahs205mvl",
      "indoorUnitId": "iu-kwsm-09ir410ahs205mvl",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-36ir410ahsp-iu-46328",
      "slug": "kanionco-kwsmo-36ir410ahsp-iu-46328",
      "modelId": "model-kanionco-kwsmo-36ir410ahsp",
      "outdoorUnitId": "ou-kanionco-kwsmo-36ir410ahsp",
      "indoorUnitId": "iu-iu-46328",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-18ir410ahs215odu-kwsm-18ir410ahs215idu",
      "slug": "kanionco-kwsm-18ir410ahs215odu-kwsm-18ir410ahs215idu",
      "modelId": "model-kanionco-kwsm-18ir410ahs215odu",
      "outdoorUnitId": "ou-kanionco-kwsm-18ir410ahs215odu",
      "indoorUnitId": "iu-kwsm-18ir410ahs215idu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-24ir410ahs215odu-kwsm-24ir410ahs215idu",
      "slug": "kanionco-kwsm-24ir410ahs215odu-kwsm-24ir410ahs215idu",
      "modelId": "model-kanionco-kwsm-24ir410ahs215odu",
      "outdoorUnitId": "ou-kanionco-kwsm-24ir410ahs215odu",
      "indoorUnitId": "iu-kwsm-24ir410ahs215idu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir410ahs20mvlodu-kwsm-09ir410ahs20mvlidu",
      "slug": "kanionco-kwsm-09ir410ahs20mvlodu-kwsm-09ir410ahs20mvlidu",
      "modelId": "model-kanionco-kwsm-09ir410ahs20mvlodu",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir410ahs20mvlodu",
      "indoorUnitId": "iu-kwsm-09ir410ahs20mvlidu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-24ir410ahs23mv-kwsm-24ir410ahs22mv",
      "slug": "kanionco-kwsm-24ir410ahs23mv-kwsm-24ir410ahs22mv",
      "modelId": "model-kanionco-kwsm-24ir410ahs23mv",
      "outdoorUnitId": "ou-kanionco-kwsm-24ir410ahs23mv",
      "indoorUnitId": "iu-kwsm-24ir410ahs22mv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-18r410aihmv-iu-46322",
      "slug": "kanionco-kwsmo-18r410aihmv-iu-46322",
      "modelId": "model-kanionco-kwsmo-18r410aihmv",
      "outdoorUnitId": "ou-kanionco-kwsmo-18r410aihmv",
      "indoorUnitId": "iu-iu-46322",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-30ir410ahs20mvodu-kwsm-30ir410ahs20mvidu",
      "slug": "kanionco-kwsm-30ir410ahs20mvodu-kwsm-30ir410ahs20mvidu",
      "modelId": "model-kanionco-kwsm-30ir410ahs20mvodu",
      "outdoorUnitId": "ou-kanionco-kwsm-30ir410ahs20mvodu",
      "indoorUnitId": "iu-kwsm-30ir410ahs20mvidu",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-24ir410ahs21mv-kwsm-24ir410ahs21mv",
      "slug": "kanionco-kwsm-24ir410ahs21mv-kwsm-24ir410ahs21mv",
      "modelId": "model-kanionco-kwsm-24ir410ahs21mv",
      "outdoorUnitId": "ou-kanionco-kwsm-24ir410ahs21mv",
      "indoorUnitId": "iu-kwsm-24ir410ahs21mv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsmo-18r410aihh-iu-46321",
      "slug": "kanionco-kwsmo-18r410aihh-iu-46321",
      "modelId": "model-kanionco-kwsmo-18r410aihh",
      "outdoorUnitId": "ou-kanionco-kwsmo-18r410aihh",
      "indoorUnitId": "iu-iu-46321",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kd-09ir410ahsodu-kd-09ir410ahsidu",
      "slug": "kanionco-kd-09ir410ahsodu-kd-09ir410ahsidu",
      "modelId": "model-kanionco-kd-09ir410ahsodu",
      "outdoorUnitId": "ou-kanionco-kd-09ir410ahsodu",
      "indoorUnitId": "iu-kd-09ir410ahsidu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir454bhs20p-kwsm-09ir454bhs20p",
      "slug": "kanionco-kwsm-09ir454bhs20p-kwsm-09ir454bhs20p",
      "modelId": "model-kanionco-kwsm-09ir454bhs20p",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir454bhs20p",
      "indoorUnitId": "iu-kwsm-09ir454bhs20p",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kd-12ir410ahsodu-kd-12ir410ahsidu",
      "slug": "kanionco-kd-12ir410ahsodu-kd-12ir410ahsidu",
      "modelId": "model-kanionco-kd-12ir410ahsodu",
      "outdoorUnitId": "ou-kanionco-kd-12ir410ahsodu",
      "indoorUnitId": "iu-kd-12ir410ahsidu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kd-24ir410ahsodu-kd-24ir410ahsidu",
      "slug": "kanionco-kd-24ir410ahsodu-kd-24ir410ahsidu",
      "modelId": "model-kanionco-kd-24ir410ahsodu",
      "outdoorUnitId": "ou-kanionco-kd-24ir410ahsodu",
      "indoorUnitId": "iu-kd-24ir410ahsidu",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir454bhs19lp-kwsm-09ir454bhs19lp",
      "slug": "kanionco-kwsm-09ir454bhs19lp-kwsm-09ir454bhs19lp",
      "modelId": "model-kanionco-kwsm-09ir454bhs19lp",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir454bhs19lp",
      "indoorUnitId": "iu-kwsm-09ir454bhs19lp",
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
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kwsm-09ir410ahs16mv-kwsm-09ir410ahs16mv",
      "slug": "kanionco-kwsm-09ir410ahs16mv-kwsm-09ir410ahs16mv",
      "modelId": "model-kanionco-kwsm-09ir410ahs16mv",
      "outdoorUnitId": "ou-kanionco-kwsm-09ir410ahs16mv",
      "indoorUnitId": "iu-kwsm-09ir410ahs16mv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-kanionco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanionco-kd-18ir410ahsodu-kd-18ir410ahsidu",
      "slug": "kanionco-kd-18ir410ahsodu-kd-18ir410ahsidu",
      "modelId": "model-kanionco-kd-18ir410ahsodu",
      "outdoorUnitId": "ou-kanionco-kd-18ir410ahsodu",
      "indoorUnitId": "iu-kd-18ir410ahsidu",
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
          "sourceId": "src-kanionco-epa",
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
