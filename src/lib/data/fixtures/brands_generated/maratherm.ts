import type { BrandDataset } from "../../types";

export const brand_marathermDataset: BrandDataset = {
  "brand": {
    "id": "brand-maratherm",
    "slug": "maratherm",
    "name": "MARATHERM",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour MARATHERM",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-maratherm-epa",
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
      "id": "series-maratherm-2-stage-18-seer-hp",
      "slug": "maratherm-2-stage-18-seer-hp",
      "name": "2-STAGE 18 SEER HP",
      "brandId": "brand-maratherm",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 2-STAGE 18 SEER HP de MARATHERM",
      "imageUrl": "/images/series/maratherm-maratherm-2-stage-18-seer-hp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maratherm-performance-16-seer2-hp",
      "slug": "maratherm-performance-16-seer2-hp",
      "name": "PERFORMANCE 16 SEER2 HP",
      "brandId": "brand-maratherm",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série PERFORMANCE 16 SEER2 HP de MARATHERM",
      "imageUrl": "/images/series/maratherm-maratherm-performance-16-seer2-hp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maratherm-15-seer2-hp",
      "slug": "maratherm-15-seer2-hp",
      "name": "15 SEER2 HP",
      "brandId": "brand-maratherm",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 15 SEER2 HP de MARATHERM",
      "imageUrl": "/images/series/maratherm-maratherm-15-seer2-hp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maratherm-quiet-comfort-hp",
      "slug": "maratherm-quiet-comfort-hp",
      "name": "Quiet Comfort HP",
      "brandId": "brand-maratherm",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série Quiet Comfort HP de MARATHERM",
      "imageUrl": "/images/series/maratherm-maratherm-quiet-comfort-hp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maratherm-performance-15-seer2-hp",
      "slug": "maratherm-performance-15-seer2-hp",
      "name": "PERFORMANCE 15 SEER2 HP",
      "brandId": "brand-maratherm",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série PERFORMANCE 15 SEER2 HP de MARATHERM",
      "imageUrl": "/images/series/maratherm-maratherm-performance-15-seer2-hp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maratherm-15-seer2-r-series-r410a-hp",
      "slug": "maratherm-15-seer2-r-series-r410a-hp",
      "name": "15 SEER2 R SERIES R410A HP",
      "brandId": "brand-maratherm",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 15 SEER2 R SERIES R410A HP de MARATHERM",
      "imageUrl": "/images/series/maratherm-maratherm-15-seer2-r-series-r410a-hp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-maratherm-n5h8t24kaaa",
      "slug": "maratherm-n5h8t24kaaa",
      "name": "MARATHERM N5H8T24*K*AAA*",
      "seriesId": "series-maratherm-2-stage-18-seer-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H8T24*K*AAA*",
      "normalizedModelNumber": "n5h8t24*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 25000,
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
      "id": "model-maratherm-n5h8t48kaaa",
      "slug": "maratherm-n5h8t48kaaa",
      "name": "MARATHERM N5H8T48*K*AAA*",
      "seriesId": "series-maratherm-2-stage-18-seer-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H8T48*K*AAA*",
      "normalizedModelNumber": "n5h8t48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 49500,
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
      "id": "model-maratherm-n5h8t60kaaa",
      "slug": "maratherm-n5h8t60kaaa",
      "name": "MARATHERM N5H8T60*K*AAA*",
      "seriesId": "series-maratherm-2-stage-18-seer-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H8T60*K*AAA*",
      "normalizedModelNumber": "n5h8t60*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57500,
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
      "id": "model-maratherm-n5h8t36kaaa",
      "slug": "maratherm-n5h8t36kaaa",
      "name": "MARATHERM N5H8T36*K*AAA*",
      "seriesId": "series-maratherm-2-stage-18-seer-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H8T36*K*AAA*",
      "normalizedModelNumber": "n5h8t36*k*aaa*",
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
      "id": "model-maratherm-n5h5s24kaaa",
      "slug": "maratherm-n5h5s24kaaa",
      "name": "MARATHERM N5H5S24*K*AAA*",
      "seriesId": "series-maratherm-performance-16-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H5S24*K*AAA*",
      "normalizedModelNumber": "n5h5s24*k*aaa*",
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
      "id": "model-maratherm-r5h5s24kaaa",
      "slug": "maratherm-r5h5s24kaaa",
      "name": "MARATHERM R5H5S24*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S24*K*AAA*",
      "normalizedModelNumber": "r5h5s24*k*aaa*",
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
      "id": "model-maratherm-n5h5s36kaaa",
      "slug": "maratherm-n5h5s36kaaa",
      "name": "MARATHERM N5H5S36*K*AAA*",
      "seriesId": "series-maratherm-performance-16-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H5S36*K*AAA*",
      "normalizedModelNumber": "n5h5s36*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36800,
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
      "id": "model-maratherm-r5h5s19kaaa",
      "slug": "maratherm-r5h5s19kaaa",
      "name": "MARATHERM R5H5S19*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S19*K*AAA*",
      "normalizedModelNumber": "r5h5s19*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 19300,
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
      "id": "model-maratherm-r5h5s31kaaa",
      "slug": "maratherm-r5h5s31kaaa",
      "name": "MARATHERM R5H5S31*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S31*K*AAA*",
      "normalizedModelNumber": "r5h5s31*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28200,
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
      "id": "model-maratherm-r5h5s36kaaa",
      "slug": "maratherm-r5h5s36kaaa",
      "name": "MARATHERM R5H5S36*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S36*K*AAA*",
      "normalizedModelNumber": "r5h5s36*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36800,
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
      "id": "model-maratherm-n5h5s18kaaa",
      "slug": "maratherm-n5h5s18kaaa",
      "name": "MARATHERM N5H5S18*K*AAA*",
      "seriesId": "series-maratherm-performance-16-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H5S18*K*AAA*",
      "normalizedModelNumber": "n5h5s18*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17400,
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
      "id": "model-maratherm-n5h5s42kaaa",
      "slug": "maratherm-n5h5s42kaaa",
      "name": "MARATHERM N5H5S42*K*AAA*",
      "seriesId": "series-maratherm-performance-16-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H5S42*K*AAA*",
      "normalizedModelNumber": "n5h5s42*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41500,
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
      "id": "model-maratherm-phr548000kk1",
      "slug": "maratherm-phr548000kk1",
      "name": "MARATHERM PHR548000K***K1",
      "seriesId": "series-maratherm-quiet-comfort-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "PHR548000K***K1",
      "normalizedModelNumber": "phr548000k***k1",
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
      "id": "model-maratherm-phr536000kk1",
      "slug": "maratherm-phr536000kk1",
      "name": "MARATHERM PHR536000K***K1",
      "seriesId": "series-maratherm-quiet-comfort-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "PHR536000K***K1",
      "normalizedModelNumber": "phr536000k***k1",
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
      "id": "model-maratherm-phb560000k000b",
      "slug": "maratherm-phb560000k000b",
      "name": "MARATHERM PHB560000K000B*",
      "seriesId": "series-maratherm-quiet-comfort-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "PHB560000K000B*",
      "normalizedModelNumber": "phb560000k000b*",
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
      "id": "model-maratherm-r5h5s42kaaa",
      "slug": "maratherm-r5h5s42kaaa",
      "name": "MARATHERM R5H5S42*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S42*K*AAA*",
      "normalizedModelNumber": "r5h5s42*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41500,
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
      "id": "model-maratherm-r5h5s48kaaa",
      "slug": "maratherm-r5h5s48kaaa",
      "name": "MARATHERM R5H5S48*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S48*K*AAA*",
      "normalizedModelNumber": "r5h5s48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47500,
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
      "id": "model-maratherm-r5h5s18kaaa",
      "slug": "maratherm-r5h5s18kaaa",
      "name": "MARATHERM R5H5S18*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S18*K*AAA*",
      "normalizedModelNumber": "r5h5s18*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18900,
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
      "id": "model-maratherm-n5h5s48kaaa",
      "slug": "maratherm-n5h5s48kaaa",
      "name": "MARATHERM N5H5S48*K*AAA*",
      "seriesId": "series-maratherm-performance-16-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H5S48*K*AAA*",
      "normalizedModelNumber": "n5h5s48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47500,
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
      "id": "model-maratherm-n4h5s30kaaa",
      "slug": "maratherm-n4h5s30kaaa",
      "name": "MARATHERM N4H5S30*K*AAA*",
      "seriesId": "series-maratherm-performance-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N4H5S30*K*AAA*",
      "normalizedModelNumber": "n4h5s30*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27800,
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
      "id": "model-maratherm-n5h5s30kaaa",
      "slug": "maratherm-n5h5s30kaaa",
      "name": "MARATHERM N5H5S30*K*AAA*",
      "seriesId": "series-maratherm-performance-16-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H5S30*K*AAA*",
      "normalizedModelNumber": "n5h5s30*k*aaa*",
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
      "id": "model-maratherm-n5h5s60kaaa",
      "slug": "maratherm-n5h5s60kaaa",
      "name": "MARATHERM N5H5S60*K*AAA*",
      "seriesId": "series-maratherm-performance-16-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "N5H5S60*K*AAA*",
      "normalizedModelNumber": "n5h5s60*k*aaa*",
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
      "id": "model-maratherm-r4h5s30kaaa",
      "slug": "maratherm-r4h5s30kaaa",
      "name": "MARATHERM R4H5S30*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-r-series-r410a-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R4H5S30*K*AAA*",
      "normalizedModelNumber": "r4h5s30*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27800,
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
      "id": "model-maratherm-r5h5s30kaaa",
      "slug": "maratherm-r5h5s30kaaa",
      "name": "MARATHERM R5H5S30*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S30*K*AAA*",
      "normalizedModelNumber": "r5h5s30*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30200,
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
      "id": "model-maratherm-r5h5s60kaaa",
      "slug": "maratherm-r5h5s60kaaa",
      "name": "MARATHERM R5H5S60*K*AAA*",
      "seriesId": "series-maratherm-15-seer2-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "R5H5S60*K*AAA*",
      "normalizedModelNumber": "r5h5s60*k*aaa*",
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
      "id": "model-maratherm-phb524000k000b",
      "slug": "maratherm-phb524000k000b",
      "name": "MARATHERM PHB524000K000B*",
      "seriesId": "series-maratherm-quiet-comfort-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "PHB524000K000B*",
      "normalizedModelNumber": "phb524000k000b*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22200,
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
      "id": "model-maratherm-phb548000k000b",
      "slug": "maratherm-phb548000k000b",
      "name": "MARATHERM PHB548000K000B*",
      "seriesId": "series-maratherm-quiet-comfort-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "PHB548000K000B*",
      "normalizedModelNumber": "phb548000k000b*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46500,
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
      "id": "model-maratherm-phb536000k000b",
      "slug": "maratherm-phb536000k000b",
      "name": "MARATHERM PHB536000K000B*",
      "seriesId": "series-maratherm-quiet-comfort-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "PHB536000K000B*",
      "normalizedModelNumber": "phb536000k000b*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35200,
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
      "id": "model-maratherm-phr524000kk1",
      "slug": "maratherm-phr524000kk1",
      "name": "MARATHERM PHR524000K***K1",
      "seriesId": "series-maratherm-quiet-comfort-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "PHR524000K***K1",
      "normalizedModelNumber": "phr524000k***k1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22400,
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
      "id": "model-maratherm-phr560000kk1",
      "slug": "maratherm-phr560000kk1",
      "name": "MARATHERM PHR560000K***K1",
      "seriesId": "series-maratherm-quiet-comfort-hp",
      "brandId": "brand-maratherm",
      "modelNumber": "PHR560000K***K1",
      "normalizedModelNumber": "phr560000k***k1",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-maratherm-n5h8t24kaaa",
      "modelNumber": "N5H8T24*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h8t48kaaa",
      "modelNumber": "N5H8T48*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h8t60kaaa",
      "modelNumber": "N5H8T60*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h8t36kaaa",
      "modelNumber": "N5H8T36*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h5s24kaaa",
      "modelNumber": "N5H5S24*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r5h5s24kaaa",
      "modelNumber": "R5H5S24*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h5s36kaaa",
      "modelNumber": "N5H5S36*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r5h5s19kaaa",
      "modelNumber": "R5H5S19*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r5h5s31kaaa",
      "modelNumber": "R5H5S31*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r5h5s36kaaa",
      "modelNumber": "R5H5S36*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h5s18kaaa",
      "modelNumber": "N5H5S18*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h5s42kaaa",
      "modelNumber": "N5H5S42*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-phr548000kk1",
      "modelNumber": "PHR548000K***K1",
      "brandId": "brand-maratherm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maratherm-phr536000kk1",
      "modelNumber": "PHR536000K***K1",
      "brandId": "brand-maratherm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maratherm-phb560000k000b",
      "modelNumber": "PHB560000K000B*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r5h5s42kaaa",
      "modelNumber": "R5H5S42*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r5h5s48kaaa",
      "modelNumber": "R5H5S48*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r5h5s18kaaa",
      "modelNumber": "R5H5S18*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h5s48kaaa",
      "modelNumber": "N5H5S48*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n4h5s30kaaa",
      "modelNumber": "N4H5S30*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maratherm-n5h5s30kaaa",
      "modelNumber": "N5H5S30*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-n5h5s60kaaa",
      "modelNumber": "N5H5S60*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r4h5s30kaaa",
      "modelNumber": "R4H5S30*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maratherm-r5h5s30kaaa",
      "modelNumber": "R5H5S30*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-r5h5s60kaaa",
      "modelNumber": "R5H5S60*K*AAA*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-phb524000k000b",
      "modelNumber": "PHB524000K000B*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-phb548000k000b",
      "modelNumber": "PHB548000K000B*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-phb536000k000b",
      "modelNumber": "PHB536000K000B*",
      "brandId": "brand-maratherm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maratherm-phr524000kk1",
      "modelNumber": "PHR524000K***K1",
      "brandId": "brand-maratherm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maratherm-phr560000kk1",
      "modelNumber": "PHR560000K***K1",
      "brandId": "brand-maratherm",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-evd5x38m17a",
      "modelNumber": "EVD5X38M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x32m17a",
      "modelNumber": "EVM5X32M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x31m17a",
      "modelNumber": "EVM5X31M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ftma5b36l0c",
      "modelNumber": "FTMA5B36L0C*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x37m21a",
      "modelNumber": "EA*5X37M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x25m17a",
      "modelNumber": "EA*5X25M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x37m21a",
      "modelNumber": "EVD5X37M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x31m17a",
      "modelNumber": "EVD5X31M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d3617x",
      "modelNumber": "QFVA5D3617X*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d6021x",
      "modelNumber": "QFVA5D6021X*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ftma5b60l0d",
      "modelNumber": "FTMA5B60L0D*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x61m24a",
      "modelNumber": "EVD5X61M24A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x36m17a",
      "modelNumber": "EA*5X36M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x30m17a",
      "modelNumber": "EA*5X30M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d2417x",
      "modelNumber": "QFVA5D2417X*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x61m21a",
      "modelNumber": "EVD5X61M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x49m24a",
      "modelNumber": "EVD5X49M24A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d4821x",
      "modelNumber": "QFVA5D4821X*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x60m21a",
      "modelNumber": "EVM5X60M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x49m21a",
      "modelNumber": "EVM5X49M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ftma5x24l0b",
      "modelNumber": "FTMA5X24L0B*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x37m17a",
      "modelNumber": "EA*5X37M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ftma5b48l0c",
      "modelNumber": "FTMA5B48L0C*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x48m21a",
      "modelNumber": "EVD5X48M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x24m17a",
      "modelNumber": "EA*5X24M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x30m14a",
      "modelNumber": "EA*5X30M14A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x36m12a",
      "modelNumber": "ESH5X36M12A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x60m21a",
      "modelNumber": "EVD5X60M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x48m21a",
      "modelNumber": "EVM5X48M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x61m24a",
      "modelNumber": "EA*5X61M24A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x61m21atdr",
      "modelNumber": "EVD5X61M21A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x49m21atdr",
      "modelNumber": "EVM5X49M21A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x60m21atdr",
      "modelNumber": "EVM5X60M21A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x60m24a",
      "modelNumber": "EA*5X60M24A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x61m21a",
      "modelNumber": "EA*5X61M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x30al",
      "modelNumber": "FMA5X30**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x24m14a",
      "modelNumber": "EA*5X24M14A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x60m21atdr",
      "modelNumber": "EVD5X60M21A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x61m24atdr",
      "modelNumber": "EVD5X61M24A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x30m12a",
      "modelNumber": "ESH5X30M12A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x61m24atdr",
      "modelNumber": "EVM5X61M24A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z30al",
      "modelNumber": "FM(C,U)5Z30**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z36al",
      "modelNumber": "FM(C,U)5Z36**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0048nava54801ck",
      "modelNumber": "FEVA0048**+NAVA54801CK",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x48m24atdr",
      "modelNumber": "EVD5X48M24A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x60m12a",
      "modelNumber": "ESH5X60M12A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x48m12a",
      "modelNumber": "ESH5X48M12A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x60m24atdr",
      "modelNumber": "EVM5X60M24A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-f5ma560ld",
      "modelNumber": "F5MA5*60L*D*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x61m24a",
      "modelNumber": "EVM5X61M24A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-f5ma548lc",
      "modelNumber": "F5MA5*48L*C*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x48m21atdr",
      "modelNumber": "EVD5X48M21A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-f5ma524lb",
      "modelNumber": "F5MA5*24L*B*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x48m21a",
      "modelNumber": "EA*5X48M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x19m17a",
      "modelNumber": "EA*5X19M17A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-f5ma542lc",
      "modelNumber": "F5MA5*42L*C*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x36al",
      "modelNumber": "FMA5X36**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhma542lc",
      "modelNumber": "FHMA5*42L*C*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x60m24atdr",
      "modelNumber": "EVD5X60M24A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x49m24atdr",
      "modelNumber": "EVD5X49M24A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x43m21a",
      "modelNumber": "EA*5X43M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x24m12a",
      "modelNumber": "ESH5X24M12A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s36al",
      "modelNumber": "FM(C,U)5S36**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x24al",
      "modelNumber": "FMA5X24**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x42m12a",
      "modelNumber": "ESH5X42M12A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s30al",
      "modelNumber": "FM(C,U)5S30**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhma548lc",
      "modelNumber": "FHMA5*48L*C*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0048nava54801ck",
      "modelNumber": "FEVB0048**+NAVA54801CK",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhma536lb",
      "modelNumber": "FHMA5*36L*B*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z24al",
      "modelNumber": "FM(C,U)5Z24**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x37m21atdr",
      "modelNumber": "EA*5X37M21A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x42m21a",
      "modelNumber": "EA*5X42M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x25m17atdr",
      "modelNumber": "EA*5X25M17A*+TDR",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0036nava53601ck",
      "modelNumber": "FEVB0036**+NAVA53601CK",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0036nava53601ck",
      "modelNumber": "FEVA0036**+NAVA53601CK",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-f5ma536lb",
      "modelNumber": "F5MA5*36L*B*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31630",
      "modelNumber": "IU-31630",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31629",
      "modelNumber": "IU-31629",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-f5ma530lb",
      "modelNumber": "F5MA5*30L*B*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31627",
      "modelNumber": "IU-31627",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhma530lb",
      "modelNumber": "FHMA5*30L*B*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z18al",
      "modelNumber": "FM(C,U)5Z18**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s18al",
      "modelNumber": "FM(C,U)5S18**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s24al",
      "modelNumber": "FM(C,U)5S24**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhma524lb",
      "modelNumber": "FHMA5*24L*B*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x18al",
      "modelNumber": "FMA5X18**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0060nava56001ck",
      "modelNumber": "FEVA0060**+NAVA56001CK",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea4x37l21a",
      "modelNumber": "EA*4X37L21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0060nava56001ck",
      "modelNumber": "FEVB0060**+NAVA56001CK",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x42m24a",
      "modelNumber": "EVD5X42M24A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhma560ld",
      "modelNumber": "FHMA5*60L*D*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l30al",
      "modelNumber": "FMA5L30**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x44m21a",
      "modelNumber": "EVM5X44M21A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhma518la",
      "modelNumber": "FHMA5*18L*A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-f5ma518la",
      "modelNumber": "F5MA5*18L*A*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l18al",
      "modelNumber": "FMA5L18**AL*",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31624",
      "modelNumber": "IU-31624",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31626",
      "modelNumber": "IU-31626",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31625",
      "modelNumber": "IU-31625",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31628",
      "modelNumber": "IU-31628",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-31631",
      "modelNumber": "IU-31631",
      "brandId": "brand-maratherm",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-maratherm-n5h8t24kaaa-evd5x38m17a",
      "slug": "maratherm-n5h8t24kaaa-evd5x38m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-evd5x38m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-evm5x32m17a",
      "slug": "maratherm-n5h8t24kaaa-evm5x32m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-evm5x32m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-evm5x31m17a",
      "slug": "maratherm-n5h8t24kaaa-evm5x31m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-evm5x31m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ftma5b36l0c",
      "slug": "maratherm-n5h8t24kaaa-ftma5b36l0c",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ftma5b36l0c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x37m21a",
      "slug": "maratherm-n5h8t24kaaa-ea5x37m21a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x37m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x25m17a",
      "slug": "maratherm-n5h8t24kaaa-ea5x25m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x25m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-evd5x37m21a",
      "slug": "maratherm-n5h8t24kaaa-evd5x37m21a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-evd5x37m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-evd5x31m17a",
      "slug": "maratherm-n5h8t24kaaa-evd5x31m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-evd5x31m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-qfva5d3617x",
      "slug": "maratherm-n5h8t24kaaa-qfva5d3617x",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-qfva5d3617x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-qfva5d6021x",
      "slug": "maratherm-n5h8t48kaaa-qfva5d6021x",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-qfva5d6021x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-ftma5b60l0d",
      "slug": "maratherm-n5h8t48kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x61m24a",
      "slug": "maratherm-n5h8t48kaaa-evd5x61m24a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x61m24a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x36m17a",
      "slug": "maratherm-n5h8t24kaaa-ea5x36m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x36m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x30m17a",
      "slug": "maratherm-n5h8t24kaaa-ea5x30m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x30m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-qfva5d2417x",
      "slug": "maratherm-n5h8t24kaaa-qfva5d2417x",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-qfva5d2417x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x61m21a",
      "slug": "maratherm-n5h8t48kaaa-evd5x61m21a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x61m21a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x49m24a",
      "slug": "maratherm-n5h8t48kaaa-evd5x49m24a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x49m24a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-ftma5b60l0d",
      "slug": "maratherm-n5h8t60kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-qfva5d6021x",
      "slug": "maratherm-n5h8t60kaaa-qfva5d6021x",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-qfva5d6021x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-qfva5d4821x",
      "slug": "maratherm-n5h8t48kaaa-qfva5d4821x",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-qfva5d4821x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evm5x60m21a",
      "slug": "maratherm-n5h8t48kaaa-evm5x60m21a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evm5x60m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evm5x49m21a",
      "slug": "maratherm-n5h8t48kaaa-evm5x49m21a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evm5x49m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ftma5x24l0b",
      "slug": "maratherm-n5h8t24kaaa-ftma5x24l0b",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ftma5x24l0b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x37m17a",
      "slug": "maratherm-n5h8t24kaaa-ea5x37m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x37m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-ftma5b48l0c",
      "slug": "maratherm-n5h8t48kaaa-ftma5b48l0c",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-ftma5b48l0c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x48m21a",
      "slug": "maratherm-n5h8t48kaaa-evd5x48m21a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x48m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x24m17a",
      "slug": "maratherm-n5h8t24kaaa-ea5x24m17a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x24m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x30m14a",
      "slug": "maratherm-n5h8t24kaaa-ea5x30m14a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x30m14a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-esh5x36m12a",
      "slug": "maratherm-n5h8t24kaaa-esh5x36m12a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-esh5x36m12a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x60m21a",
      "slug": "maratherm-n5h8t48kaaa-evd5x60m21a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x60m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ftma5b60l0d",
      "slug": "maratherm-n5h8t36kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evm5x48m21a",
      "slug": "maratherm-n5h8t48kaaa-evm5x48m21a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evm5x48m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-ea5x61m24a",
      "slug": "maratherm-n5h8t48kaaa-ea5x61m24a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-ea5x61m24a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x61m21atdr",
      "slug": "maratherm-n5h8t48kaaa-evd5x61m21atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x61m21atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evm5x49m21atdr",
      "slug": "maratherm-n5h8t48kaaa-evm5x49m21atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evm5x49m21atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-ea5x61m24a",
      "slug": "maratherm-n5h8t60kaaa-ea5x61m24a",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-ea5x61m24a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evm5x60m21atdr",
      "slug": "maratherm-n5h8t48kaaa-evm5x60m21atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evm5x60m21atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-ea5x60m24a",
      "slug": "maratherm-n5h8t60kaaa-ea5x60m24a",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-ea5x60m24a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-ea5x61m21a",
      "slug": "maratherm-n5h8t60kaaa-ea5x61m21a",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-ea5x61m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fma5x30al",
      "slug": "maratherm-n5h5s24kaaa-fma5x30al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x24m14a",
      "slug": "maratherm-n5h8t24kaaa-ea5x24m14a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x24m14a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-ea5x61m21a",
      "slug": "maratherm-n5h8t48kaaa-ea5x61m21a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-ea5x61m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x60m21atdr",
      "slug": "maratherm-n5h8t48kaaa-evd5x60m21atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x60m21atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-ea5x60m24a",
      "slug": "maratherm-n5h8t48kaaa-ea5x60m24a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-ea5x60m24a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x61m24atdr",
      "slug": "maratherm-n5h8t48kaaa-evd5x61m24atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x61m24atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-esh5x30m12a",
      "slug": "maratherm-n5h8t24kaaa-esh5x30m12a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-esh5x30m12a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ftma5b48l0c",
      "slug": "maratherm-n5h8t36kaaa-ftma5b48l0c",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ftma5b48l0c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-qfva5d4821x",
      "slug": "maratherm-n5h8t36kaaa-qfva5d4821x",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-qfva5d4821x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fma5x30al",
      "slug": "maratherm-r5h5s24kaaa-fma5x30al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evm5x61m24atdr",
      "slug": "maratherm-n5h8t48kaaa-evm5x61m24atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evm5x61m24atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fmcu5z30al",
      "slug": "maratherm-n5h5s24kaaa-fmcu5z30al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-ea5x25m17a",
      "slug": "maratherm-n5h5s24kaaa-ea5x25m17a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-ea5x25m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-evm5x31m17a",
      "slug": "maratherm-n5h5s24kaaa-evm5x31m17a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-evm5x31m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-evd5x38m17a",
      "slug": "maratherm-n5h5s24kaaa-evd5x38m17a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-evd5x38m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-evd5x37m21a",
      "slug": "maratherm-n5h5s24kaaa-evd5x37m21a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-evd5x37m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-ea5x37m21a",
      "slug": "maratherm-n5h5s24kaaa-ea5x37m21a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-ea5x37m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fmcu5z36al",
      "slug": "maratherm-n5h5s24kaaa-fmcu5z36al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-feva0048nava54801ck",
      "slug": "maratherm-n5h5s36kaaa-feva0048nava54801ck",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-feva0048nava54801ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-evd5x31m17a",
      "slug": "maratherm-n5h5s24kaaa-evd5x31m17a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-evd5x31m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x48m24atdr",
      "slug": "maratherm-n5h8t48kaaa-evd5x48m24atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x48m24atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-esh5x60m12a",
      "slug": "maratherm-n5h8t48kaaa-esh5x60m12a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-esh5x60m12a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-esh5x48m12a",
      "slug": "maratherm-n5h8t48kaaa-esh5x48m12a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-esh5x48m12a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-qfva5d3617x",
      "slug": "maratherm-n5h8t36kaaa-qfva5d3617x",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-qfva5d3617x",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-evm5x32m17a",
      "slug": "maratherm-n5h5s24kaaa-evm5x32m17a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-evm5x32m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evm5x60m24atdr",
      "slug": "maratherm-n5h8t48kaaa-evm5x60m24atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evm5x60m24atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-ea5x25m17a",
      "slug": "maratherm-r5h5s19kaaa-ea5x25m17a",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-ea5x25m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fmcu5z30al",
      "slug": "maratherm-r5h5s19kaaa-fmcu5z30al",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-evm5x31m17a",
      "slug": "maratherm-r5h5s24kaaa-evm5x31m17a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-evm5x31m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-ea5x37m21a",
      "slug": "maratherm-r5h5s24kaaa-ea5x37m21a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-ea5x37m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-evd5x31m17a",
      "slug": "maratherm-r5h5s24kaaa-evd5x31m17a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-evd5x31m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-evd5x37m21a",
      "slug": "maratherm-r5h5s24kaaa-evd5x37m21a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-evd5x37m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-ea5x25m17a",
      "slug": "maratherm-r5h5s24kaaa-ea5x25m17a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-ea5x25m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-evm5x32m17a",
      "slug": "maratherm-r5h5s24kaaa-evm5x32m17a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-evm5x32m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-f5ma560ld",
      "slug": "maratherm-n5h8t60kaaa-f5ma560ld",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-f5ma560ld",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-evm5x60m21a",
      "slug": "maratherm-n5h8t60kaaa-evm5x60m21a",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-evm5x60m21a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-evm5x61m24a",
      "slug": "maratherm-n5h8t60kaaa-evm5x61m24a",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-evm5x61m24a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-evd5x61m24a",
      "slug": "maratherm-n5h8t60kaaa-evd5x61m24a",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-evd5x61m24a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-evd5x61m21a",
      "slug": "maratherm-n5h8t60kaaa-evd5x61m21a",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-evd5x61m21a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-f5ma548lc",
      "slug": "maratherm-n5h8t48kaaa-f5ma548lc",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-f5ma548lc",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t60kaaa-evd5x60m21a",
      "slug": "maratherm-n5h8t60kaaa-evd5x60m21a",
      "modelId": "model-maratherm-n5h8t60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t60kaaa",
      "indoorUnitId": "iu-evd5x60m21a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-evm5x49m21a",
      "slug": "maratherm-n5h8t36kaaa-evm5x49m21a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-evm5x49m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-evm5x48m21a",
      "slug": "maratherm-n5h8t36kaaa-evm5x48m21a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-evm5x48m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x48m21atdr",
      "slug": "maratherm-n5h8t48kaaa-evd5x48m21atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x48m21atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-f5ma524lb",
      "slug": "maratherm-n5h8t24kaaa-f5ma524lb",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-f5ma524lb",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ea5x48m21a",
      "slug": "maratherm-n5h8t36kaaa-ea5x48m21a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ea5x48m21a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fmcu5z36al",
      "slug": "maratherm-r5h5s24kaaa-fmcu5z36al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-ea5x19m17a",
      "slug": "maratherm-r5h5s19kaaa-ea5x19m17a",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-ea5x19m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-f5ma542lc",
      "slug": "maratherm-r5h5s31kaaa-f5ma542lc",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-f5ma542lc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fma5x36al",
      "slug": "maratherm-r5h5s31kaaa-fma5x36al",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-feva0048nava54801ck",
      "slug": "maratherm-r5h5s36kaaa-feva0048nava54801ck",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-feva0048nava54801ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fmcu5z30al",
      "slug": "maratherm-r5h5s24kaaa-fmcu5z30al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fma5x30al",
      "slug": "maratherm-r5h5s31kaaa-fma5x30al",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fmcu5z36al",
      "slug": "maratherm-r5h5s31kaaa-fmcu5z36al",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fmcu5z36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fmcu5z30al",
      "slug": "maratherm-r5h5s31kaaa-fmcu5z30al",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fhma542lc",
      "slug": "maratherm-r5h5s31kaaa-fhma542lc",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fhma542lc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-evd5x38m17a",
      "slug": "maratherm-r5h5s24kaaa-evd5x38m17a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-evd5x38m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-ea5x48m21a",
      "slug": "maratherm-n5h8t48kaaa-ea5x48m21a",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-ea5x48m21a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x60m24atdr",
      "slug": "maratherm-n5h8t48kaaa-evd5x60m24atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x60m24atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-evd5x38m17a",
      "slug": "maratherm-n5h8t36kaaa-evd5x38m17a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-evd5x38m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t48kaaa-evd5x49m24atdr",
      "slug": "maratherm-n5h8t48kaaa-evd5x49m24atdr",
      "modelId": "model-maratherm-n5h8t48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t48kaaa",
      "indoorUnitId": "iu-evd5x49m24atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ea5x43m21a",
      "slug": "maratherm-n5h8t36kaaa-ea5x43m21a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ea5x43m21a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-esh5x24m12a",
      "slug": "maratherm-n5h8t24kaaa-esh5x24m12a",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-esh5x24m12a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ea5x37m21a",
      "slug": "maratherm-n5h8t36kaaa-ea5x37m21a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ea5x37m21a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fmcu5s36al",
      "slug": "maratherm-n5h5s24kaaa-fmcu5s36al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-fma5x24al",
      "slug": "maratherm-n5h5s18kaaa-fma5x24al",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-evd5x37m21a",
      "slug": "maratherm-n5h8t36kaaa-evd5x37m21a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-evd5x37m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-esh5x42m12a",
      "slug": "maratherm-n5h8t36kaaa-esh5x42m12a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-esh5x42m12a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fmcu5s30al",
      "slug": "maratherm-n5h5s24kaaa-fmcu5s30al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-fhma548lc",
      "slug": "maratherm-n5h5s36kaaa-fhma548lc",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-fhma548lc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-fevb0048nava54801ck",
      "slug": "maratherm-n5h5s36kaaa-fevb0048nava54801ck",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-fevb0048nava54801ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fhma536lb",
      "slug": "maratherm-n5h5s24kaaa-fhma536lb",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fhma536lb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fmcu5z24al",
      "slug": "maratherm-n5h5s24kaaa-fmcu5z24al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-evd5x48m21a",
      "slug": "maratherm-n5h8t36kaaa-evd5x48m21a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-evd5x48m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x37m21atdr",
      "slug": "maratherm-n5h8t24kaaa-ea5x37m21atdr",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x37m21atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ea5x37m17a",
      "slug": "maratherm-n5h8t36kaaa-ea5x37m17a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ea5x37m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ea5x42m21a",
      "slug": "maratherm-n5h8t36kaaa-ea5x42m21a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ea5x42m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t24kaaa-ea5x25m17atdr",
      "slug": "maratherm-n5h8t24kaaa-ea5x25m17atdr",
      "modelId": "model-maratherm-n5h8t24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t24kaaa",
      "indoorUnitId": "iu-ea5x25m17atdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fevb0036nava53601ck",
      "slug": "maratherm-n5h5s24kaaa-fevb0036nava53601ck",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-f5ma548lc",
      "slug": "maratherm-n5h5s36kaaa-f5ma548lc",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-f5ma548lc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-ftma5x24l0b",
      "slug": "maratherm-n5h5s24kaaa-ftma5x24l0b",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-ftma5x24l0b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-ftma5b48l0c",
      "slug": "maratherm-n5h5s36kaaa-ftma5b48l0c",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-ftma5b48l0c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s42kaaa-ftma5b60l0d",
      "slug": "maratherm-n5h5s42kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-n5h5s42kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s42kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-fma5x36al",
      "slug": "maratherm-n5h5s36kaaa-fma5x36al",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fma5x24al",
      "slug": "maratherm-n5h5s24kaaa-fma5x24al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-ea5x37m17a",
      "slug": "maratherm-n5h5s24kaaa-ea5x37m17a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-ea5x37m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-feva0036nava53601ck",
      "slug": "maratherm-n5h5s24kaaa-feva0036nava53601ck",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-feva0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-evm5x32m17a",
      "slug": "maratherm-n5h5s18kaaa-evm5x32m17a",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-evm5x32m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-f5ma536lb",
      "slug": "maratherm-n5h5s24kaaa-f5ma536lb",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-f5ma536lb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-phr548000kk1-iu-31630",
      "slug": "maratherm-phr548000kk1-iu-31630",
      "modelId": "model-maratherm-phr548000kk1",
      "outdoorUnitId": "ou-maratherm-phr548000kk1",
      "indoorUnitId": "iu-iu-31630",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-phr536000kk1-iu-31629",
      "slug": "maratherm-phr536000kk1-iu-31629",
      "modelId": "model-maratherm-phr536000kk1",
      "outdoorUnitId": "ou-maratherm-phr536000kk1",
      "indoorUnitId": "iu-iu-31629",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-feva0036nava53601ck",
      "slug": "maratherm-r5h5s31kaaa-feva0036nava53601ck",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-feva0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-f5ma530lb",
      "slug": "maratherm-r5h5s31kaaa-f5ma530lb",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-f5ma530lb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fmcu5s30al",
      "slug": "maratherm-r5h5s31kaaa-fmcu5s30al",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fmcu5s36al",
      "slug": "maratherm-r5h5s31kaaa-fmcu5s36al",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-ea5x37m21a",
      "slug": "maratherm-r5h5s31kaaa-ea5x37m21a",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-ea5x37m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-phb560000k000b-iu-31627",
      "slug": "maratherm-phb560000k000b-iu-31627",
      "modelId": "model-maratherm-phb560000k000b",
      "outdoorUnitId": "ou-maratherm-phb560000k000b",
      "indoorUnitId": "iu-iu-31627",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.7,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s42kaaa-ftma5b60l0d",
      "slug": "maratherm-r5h5s42kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-r5h5s42kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s42kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s48kaaa-ftma5b60l0d",
      "slug": "maratherm-r5h5s48kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-r5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s48kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-ftma5b48l0c",
      "slug": "maratherm-r5h5s36kaaa-ftma5b48l0c",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-ftma5b48l0c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-fma5x36al",
      "slug": "maratherm-r5h5s36kaaa-fma5x36al",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-fhma548lc",
      "slug": "maratherm-r5h5s36kaaa-fhma548lc",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-fhma548lc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-fevb0048nava54801ck",
      "slug": "maratherm-r5h5s36kaaa-fevb0048nava54801ck",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-fevb0048nava54801ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-f5ma548lc",
      "slug": "maratherm-r5h5s36kaaa-f5ma548lc",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-f5ma548lc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fmcu5s30al",
      "slug": "maratherm-r5h5s24kaaa-fmcu5s30al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fhma530lb",
      "slug": "maratherm-r5h5s31kaaa-fhma530lb",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fhma530lb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fevb0036nava53601ck",
      "slug": "maratherm-r5h5s31kaaa-fevb0036nava53601ck",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fmcu5s36al",
      "slug": "maratherm-r5h5s24kaaa-fmcu5s36al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fmcu5z24al",
      "slug": "maratherm-r5h5s24kaaa-fmcu5z24al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-ea5x43m21a",
      "slug": "maratherm-r5h5s31kaaa-ea5x43m21a",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-ea5x43m21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-ftma5x24l0b",
      "slug": "maratherm-r5h5s24kaaa-ftma5x24l0b",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-ftma5x24l0b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fmcu5z24al",
      "slug": "maratherm-r5h5s19kaaa-fmcu5z24al",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fma5x24al",
      "slug": "maratherm-r5h5s19kaaa-fma5x24al",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-evm5x32m17a",
      "slug": "maratherm-r5h5s18kaaa-evm5x32m17a",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-evm5x32m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-ea5x37m17a",
      "slug": "maratherm-r5h5s24kaaa-ea5x37m17a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-ea5x37m17a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fmcu5z18al",
      "slug": "maratherm-r5h5s19kaaa-fmcu5z18al",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5z18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-f5ma524lb",
      "slug": "maratherm-r5h5s19kaaa-f5ma524lb",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-f5ma524lb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fmcu5s18al",
      "slug": "maratherm-r5h5s19kaaa-fmcu5s18al",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5s18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fmcu5s24al",
      "slug": "maratherm-r5h5s19kaaa-fmcu5s24al",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5s24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fhma524lb",
      "slug": "maratherm-r5h5s19kaaa-fhma524lb",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fhma524lb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-fma5x24al",
      "slug": "maratherm-r5h5s18kaaa-fma5x24al",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fhma536lb",
      "slug": "maratherm-r5h5s24kaaa-fhma536lb",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fhma536lb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fma5x24al",
      "slug": "maratherm-r5h5s24kaaa-fma5x24al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s48kaaa-ftma5b60l0d",
      "slug": "maratherm-n5h5s48kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-n5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s48kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fevb0036nava53601ck",
      "slug": "maratherm-r5h5s24kaaa-fevb0036nava53601ck",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-feva0036nava53601ck",
      "slug": "maratherm-r5h5s24kaaa-feva0036nava53601ck",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-feva0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fma5x18al",
      "slug": "maratherm-r5h5s19kaaa-fma5x18al",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fma5x18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-ftma5x24l0b",
      "slug": "maratherm-r5h5s19kaaa-ftma5x24l0b",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-ftma5x24l0b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-f5ma536lb",
      "slug": "maratherm-r5h5s24kaaa-f5ma536lb",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-f5ma536lb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s48kaaa-feva0060nava56001ck",
      "slug": "maratherm-n5h5s48kaaa-feva0060nava56001ck",
      "modelId": "model-maratherm-n5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s48kaaa",
      "indoorUnitId": "iu-feva0060nava56001ck",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s48kaaa-f5ma560ld",
      "slug": "maratherm-n5h5s48kaaa-f5ma560ld",
      "modelId": "model-maratherm-n5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s48kaaa",
      "indoorUnitId": "iu-f5ma560ld",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-f5ma530lb",
      "slug": "maratherm-n5h5s24kaaa-f5ma530lb",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-f5ma530lb",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-f5ma530lb",
      "slug": "maratherm-n5h5s18kaaa-f5ma530lb",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-f5ma530lb",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-fma5x18al",
      "slug": "maratherm-n5h5s18kaaa-fma5x18al",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-fma5x18al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n4h5s30kaaa-ea4x37l21a",
      "slug": "maratherm-n4h5s30kaaa-ea4x37l21a",
      "modelId": "model-maratherm-n4h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-n4h5s30kaaa",
      "indoorUnitId": "iu-ea4x37l21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-ea5x19m17a",
      "slug": "maratherm-n5h5s18kaaa-ea5x19m17a",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-ea5x19m17a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s48kaaa-fevb0060nava56001ck",
      "slug": "maratherm-n5h5s48kaaa-fevb0060nava56001ck",
      "modelId": "model-maratherm-n5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s48kaaa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fhma530lb",
      "slug": "maratherm-n5h5s24kaaa-fhma530lb",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fhma530lb",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fmcu5s24al",
      "slug": "maratherm-n5h5s24kaaa-fmcu5s24al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s24al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-evd5x42m24a",
      "slug": "maratherm-n5h5s36kaaa-evd5x42m24a",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-evd5x42m24a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-ea5x48m21a",
      "slug": "maratherm-n5h5s36kaaa-ea5x48m21a",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-ea5x48m21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-ea5x43m21a",
      "slug": "maratherm-n5h5s36kaaa-ea5x43m21a",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-ea5x43m21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-ea5x37m21a",
      "slug": "maratherm-n5h5s36kaaa-ea5x37m21a",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-ea5x37m21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s30kaaa-fma5x36al",
      "slug": "maratherm-n5h5s30kaaa-fma5x36al",
      "modelId": "model-maratherm-n5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s30kaaa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-fhma542lc",
      "slug": "maratherm-n5h5s36kaaa-fhma542lc",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-fhma542lc",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-fmcu5z36al",
      "slug": "maratherm-n5h5s36kaaa-fmcu5z36al",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-fmcu5s36al",
      "slug": "maratherm-n5h5s36kaaa-fmcu5s36al",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s42kaaa-fevb0060nava56001ck",
      "slug": "maratherm-n5h5s42kaaa-fevb0060nava56001ck",
      "modelId": "model-maratherm-n5h5s42kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s42kaaa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s42kaaa-f5ma560ld",
      "slug": "maratherm-n5h5s42kaaa-f5ma560ld",
      "modelId": "model-maratherm-n5h5s42kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s42kaaa",
      "indoorUnitId": "iu-f5ma560ld",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s42kaaa-fhma560ld",
      "slug": "maratherm-n5h5s42kaaa-fhma560ld",
      "modelId": "model-maratherm-n5h5s42kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s42kaaa",
      "indoorUnitId": "iu-fhma560ld",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-ea5x36m17a",
      "slug": "maratherm-n5h5s24kaaa-ea5x36m17a",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-ea5x36m17a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-fmcu5z30al",
      "slug": "maratherm-n5h5s18kaaa-fmcu5z30al",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-fmcu5z24al",
      "slug": "maratherm-n5h5s18kaaa-fmcu5z24al",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-esh5x36m12a",
      "slug": "maratherm-n5h8t36kaaa-esh5x36m12a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-esh5x36m12a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-esh5x48m12a",
      "slug": "maratherm-n5h8t36kaaa-esh5x48m12a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-esh5x48m12a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-f5ma536lb",
      "slug": "maratherm-n5h8t36kaaa-f5ma536lb",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-f5ma536lb",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ftma5b36l0c",
      "slug": "maratherm-n5h8t36kaaa-ftma5b36l0c",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ftma5b36l0c",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s60kaaa-ftma5b60l0d",
      "slug": "maratherm-n5h5s60kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-n5h5s60kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s60kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s48kaaa-fhma560ld",
      "slug": "maratherm-n5h5s48kaaa-fhma560ld",
      "modelId": "model-maratherm-n5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s48kaaa",
      "indoorUnitId": "iu-fhma560ld",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h8t36kaaa-ea5x36m17a",
      "slug": "maratherm-n5h8t36kaaa-ea5x36m17a",
      "modelId": "model-maratherm-n5h8t36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h8t36kaaa",
      "indoorUnitId": "iu-ea5x36m17a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-ea5x25m17a",
      "slug": "maratherm-n5h5s18kaaa-ea5x25m17a",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-ea5x25m17a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-fmcu5z18al",
      "slug": "maratherm-n5h5s18kaaa-fmcu5z18al",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-fmcu5s30al",
      "slug": "maratherm-n5h5s18kaaa-fmcu5s30al",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s18kaaa-fhma530lb",
      "slug": "maratherm-n5h5s18kaaa-fhma530lb",
      "modelId": "model-maratherm-n5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s18kaaa",
      "indoorUnitId": "iu-fhma530lb",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s30kaaa-fma5x30al",
      "slug": "maratherm-n5h5s30kaaa-fma5x30al",
      "modelId": "model-maratherm-n5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s30kaaa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s24kaaa-fma5l30al",
      "slug": "maratherm-n5h5s24kaaa-fma5l30al",
      "modelId": "model-maratherm-n5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s24kaaa",
      "indoorUnitId": "iu-fma5l30al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s30kaaa-evd5x42m24a",
      "slug": "maratherm-n5h5s30kaaa-evd5x42m24a",
      "modelId": "model-maratherm-n5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s30kaaa",
      "indoorUnitId": "iu-evd5x42m24a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s30kaaa-f5ma542lc",
      "slug": "maratherm-n5h5s30kaaa-f5ma542lc",
      "modelId": "model-maratherm-n5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s30kaaa",
      "indoorUnitId": "iu-f5ma542lc",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s30kaaa-fhma542lc",
      "slug": "maratherm-n5h5s30kaaa-fhma542lc",
      "modelId": "model-maratherm-n5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s30kaaa",
      "indoorUnitId": "iu-fhma542lc",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-f5ma542lc",
      "slug": "maratherm-n5h5s36kaaa-f5ma542lc",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-f5ma542lc",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-n5h5s36kaaa-evm5x44m21a",
      "slug": "maratherm-n5h5s36kaaa-evm5x44m21a",
      "modelId": "model-maratherm-n5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-n5h5s36kaaa",
      "indoorUnitId": "iu-evm5x44m21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-ea5x36m17a",
      "slug": "maratherm-r5h5s24kaaa-ea5x36m17a",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-ea5x36m17a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-fmcu5z30al",
      "slug": "maratherm-r5h5s18kaaa-fmcu5z30al",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fhma518la",
      "slug": "maratherm-r5h5s19kaaa-fhma518la",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fhma518la",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-f5ma518la",
      "slug": "maratherm-r5h5s19kaaa-f5ma518la",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-f5ma518la",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-fma5x18al",
      "slug": "maratherm-r5h5s18kaaa-fma5x18al",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-fma5x18al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s19kaaa-fma5l18al",
      "slug": "maratherm-r5h5s19kaaa-fma5l18al",
      "modelId": "model-maratherm-r5h5s19kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s19kaaa",
      "indoorUnitId": "iu-fma5l18al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r4h5s30kaaa-ea4x37l21a",
      "slug": "maratherm-r4h5s30kaaa-ea4x37l21a",
      "modelId": "model-maratherm-r4h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-r4h5s30kaaa",
      "indoorUnitId": "iu-ea4x37l21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-ea5x19m17a",
      "slug": "maratherm-r5h5s18kaaa-ea5x19m17a",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-ea5x19m17a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-ea5x25m17a",
      "slug": "maratherm-r5h5s18kaaa-ea5x25m17a",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-ea5x25m17a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-f5ma530lb",
      "slug": "maratherm-r5h5s18kaaa-f5ma530lb",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-f5ma530lb",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-fhma530lb",
      "slug": "maratherm-r5h5s18kaaa-fhma530lb",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-fhma530lb",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-fmcu5s30al",
      "slug": "maratherm-r5h5s18kaaa-fmcu5s30al",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-fmcu5z18al",
      "slug": "maratherm-r5h5s18kaaa-fmcu5z18al",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s18kaaa-fmcu5z24al",
      "slug": "maratherm-r5h5s18kaaa-fmcu5z24al",
      "modelId": "model-maratherm-r5h5s18kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fhma530lb",
      "slug": "maratherm-r5h5s24kaaa-fhma530lb",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fhma530lb",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-f5ma530lb",
      "slug": "maratherm-r5h5s24kaaa-f5ma530lb",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-f5ma530lb",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-ea5x37m21a",
      "slug": "maratherm-r5h5s36kaaa-ea5x37m21a",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-ea5x37m21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s30kaaa-evd5x42m24a",
      "slug": "maratherm-r5h5s30kaaa-evd5x42m24a",
      "modelId": "model-maratherm-r5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s30kaaa",
      "indoorUnitId": "iu-evd5x42m24a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s30kaaa-f5ma542lc",
      "slug": "maratherm-r5h5s30kaaa-f5ma542lc",
      "modelId": "model-maratherm-r5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s30kaaa",
      "indoorUnitId": "iu-f5ma542lc",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s30kaaa-fhma542lc",
      "slug": "maratherm-r5h5s30kaaa-fhma542lc",
      "modelId": "model-maratherm-r5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s30kaaa",
      "indoorUnitId": "iu-fhma542lc",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s30kaaa-fma5x30al",
      "slug": "maratherm-r5h5s30kaaa-fma5x30al",
      "modelId": "model-maratherm-r5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s30kaaa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s30kaaa-fma5x36al",
      "slug": "maratherm-r5h5s30kaaa-fma5x36al",
      "modelId": "model-maratherm-r5h5s30kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s30kaaa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fmcu5s24al",
      "slug": "maratherm-r5h5s24kaaa-fmcu5s24al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s24al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s31kaaa-fma5l30al",
      "slug": "maratherm-r5h5s31kaaa-fma5l30al",
      "modelId": "model-maratherm-r5h5s31kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s31kaaa",
      "indoorUnitId": "iu-fma5l30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s24kaaa-fma5l30al",
      "slug": "maratherm-r5h5s24kaaa-fma5l30al",
      "modelId": "model-maratherm-r5h5s24kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s24kaaa",
      "indoorUnitId": "iu-fma5l30al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-evd5x42m24a",
      "slug": "maratherm-r5h5s36kaaa-evd5x42m24a",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-evd5x42m24a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-f5ma542lc",
      "slug": "maratherm-r5h5s36kaaa-f5ma542lc",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-f5ma542lc",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-ea5x48m21a",
      "slug": "maratherm-r5h5s36kaaa-ea5x48m21a",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-ea5x48m21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-evm5x44m21a",
      "slug": "maratherm-r5h5s36kaaa-evm5x44m21a",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-evm5x44m21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-ea5x43m21a",
      "slug": "maratherm-r5h5s36kaaa-ea5x43m21a",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-ea5x43m21a",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s42kaaa-fevb0060nava56001ck",
      "slug": "maratherm-r5h5s42kaaa-fevb0060nava56001ck",
      "modelId": "model-maratherm-r5h5s42kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s42kaaa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s42kaaa-f5ma560ld",
      "slug": "maratherm-r5h5s42kaaa-f5ma560ld",
      "modelId": "model-maratherm-r5h5s42kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s42kaaa",
      "indoorUnitId": "iu-f5ma560ld",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-fmcu5s36al",
      "slug": "maratherm-r5h5s36kaaa-fmcu5s36al",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-fmcu5z36al",
      "slug": "maratherm-r5h5s36kaaa-fmcu5z36al",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s36kaaa-fhma542lc",
      "slug": "maratherm-r5h5s36kaaa-fhma542lc",
      "modelId": "model-maratherm-r5h5s36kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s36kaaa",
      "indoorUnitId": "iu-fhma542lc",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s48kaaa-feva0060nava56001ck",
      "slug": "maratherm-r5h5s48kaaa-feva0060nava56001ck",
      "modelId": "model-maratherm-r5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s48kaaa",
      "indoorUnitId": "iu-feva0060nava56001ck",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s48kaaa-f5ma560ld",
      "slug": "maratherm-r5h5s48kaaa-f5ma560ld",
      "modelId": "model-maratherm-r5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s48kaaa",
      "indoorUnitId": "iu-f5ma560ld",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s42kaaa-fhma560ld",
      "slug": "maratherm-r5h5s42kaaa-fhma560ld",
      "modelId": "model-maratherm-r5h5s42kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s42kaaa",
      "indoorUnitId": "iu-fhma560ld",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s60kaaa-ftma5b60l0d",
      "slug": "maratherm-r5h5s60kaaa-ftma5b60l0d",
      "modelId": "model-maratherm-r5h5s60kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s60kaaa",
      "indoorUnitId": "iu-ftma5b60l0d",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s48kaaa-fhma560ld",
      "slug": "maratherm-r5h5s48kaaa-fhma560ld",
      "modelId": "model-maratherm-r5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s48kaaa",
      "indoorUnitId": "iu-fhma560ld",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-r5h5s48kaaa-fevb0060nava56001ck",
      "slug": "maratherm-r5h5s48kaaa-fevb0060nava56001ck",
      "modelId": "model-maratherm-r5h5s48kaaa",
      "outdoorUnitId": "ou-maratherm-r5h5s48kaaa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-phb524000k000b-iu-31624",
      "slug": "maratherm-phb524000k000b-iu-31624",
      "modelId": "model-maratherm-phb524000k000b",
      "outdoorUnitId": "ou-maratherm-phb524000k000b",
      "indoorUnitId": "iu-iu-31624",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-phb548000k000b-iu-31626",
      "slug": "maratherm-phb548000k000b-iu-31626",
      "modelId": "model-maratherm-phb548000k000b",
      "outdoorUnitId": "ou-maratherm-phb548000k000b",
      "indoorUnitId": "iu-iu-31626",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-phb536000k000b-iu-31625",
      "slug": "maratherm-phb536000k000b-iu-31625",
      "modelId": "model-maratherm-phb536000k000b",
      "outdoorUnitId": "ou-maratherm-phb536000k000b",
      "indoorUnitId": "iu-iu-31625",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-phr524000kk1-iu-31628",
      "slug": "maratherm-phr524000kk1-iu-31628",
      "modelId": "model-maratherm-phr524000kk1",
      "outdoorUnitId": "ou-maratherm-phr524000kk1",
      "indoorUnitId": "iu-iu-31628",
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
          "sourceId": "src-maratherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maratherm-phr560000kk1-iu-31631",
      "slug": "maratherm-phr560000kk1-iu-31631",
      "modelId": "model-maratherm-phr560000kk1",
      "outdoorUnitId": "ou-maratherm-phr560000kk1",
      "indoorUnitId": "iu-iu-31631",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.5,
      "sources": [
        {
          "sourceId": "src-maratherm-epa",
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
