import type { BrandDataset } from "../../types";

export const brand_emiDataset: BrandDataset = {
  "brand": {
    "id": "brand-emi",
    "slug": "emi",
    "name": "EMI",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour EMI",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-emi-epa",
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
      "id": "series-emi-mh-series",
      "slug": "emi-mh-series",
      "name": "MH series",
      "brandId": "brand-emi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MH series de EMI",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-emi-emx-series",
      "slug": "emi-emx-series",
      "name": "EMX Series",
      "brandId": "brand-emi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EMX Series de EMI",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-emi-eco-series",
      "slug": "emi-eco-series",
      "name": "ECO Series",
      "brandId": "brand-emi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ECO Series de EMI",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-emi-ads-series",
      "slug": "emi-ads-series",
      "name": "ADS series",
      "brandId": "brand-emi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ADS series de EMI",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-emi-mhah-series",
      "slug": "emi-mhah-series",
      "name": "MHAH Series",
      "brandId": "brand-emi",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MHAH Series de EMI",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-emi-mhs-series",
      "slug": "emi-mhs-series",
      "name": "MHS Series",
      "brandId": "brand-emi",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MHS Series de EMI",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-emi-mhsz109da",
      "slug": "emi-mhsz109da",
      "name": "EMI MHSZ109DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSZ109DA",
      "normalizedModelNumber": "mhsz109da",
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
      "id": "model-emi-emxsz109da",
      "slug": "emi-emxsz109da",
      "name": "EMI EMXSZ109DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXSZ109DA",
      "normalizedModelNumber": "emxsz109da",
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
      "id": "model-emi-mhsz106da",
      "slug": "emi-mhsz106da",
      "name": "EMI MHSZ106DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSZ106DA",
      "normalizedModelNumber": "mhsz106da",
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
      "id": "model-emi-emxsz106da",
      "slug": "emi-emxsz106da",
      "name": "EMI EMXSZ106DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXSZ106DA",
      "normalizedModelNumber": "emxsz106da",
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
      "id": "model-emi-mhsz112da",
      "slug": "emi-mhsz112da",
      "name": "EMI MHSZ112DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSZ112DA",
      "normalizedModelNumber": "mhsz112da",
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
      "id": "model-emi-emxsz112da",
      "slug": "emi-emxsz112da",
      "name": "EMI EMXSZ112DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXSZ112DA",
      "normalizedModelNumber": "emxsz112da",
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
      "id": "model-emi-emxmz218da",
      "slug": "emi-emxmz218da",
      "name": "EMI EMXMZ218DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXMZ218DA",
      "normalizedModelNumber": "emxmz218da",
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
      "id": "model-emi-emxmz436da",
      "slug": "emi-emxmz436da",
      "name": "EMI EMXMZ436DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXMZ436DA",
      "normalizedModelNumber": "emxmz436da",
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
      "id": "model-emi-emxmz548da",
      "slug": "emi-emxmz548da",
      "name": "EMI EMXMZ548DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXMZ548DA",
      "normalizedModelNumber": "emxmz548da",
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
      "id": "model-emi-mhmz327da",
      "slug": "emi-mhmz327da",
      "name": "EMI MHMZ327DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHMZ327DA",
      "normalizedModelNumber": "mhmz327da",
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
      "id": "model-emi-emxmz327da",
      "slug": "emi-emxmz327da",
      "name": "EMI EMXMZ327DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXMZ327DA",
      "normalizedModelNumber": "emxmz327da",
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
      "id": "model-emi-mhmz436da",
      "slug": "emi-mhmz436da",
      "name": "EMI MHMZ436DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHMZ436DA",
      "normalizedModelNumber": "mhmz436da",
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
      "id": "model-emi-mhmz218da",
      "slug": "emi-mhmz218da",
      "name": "EMI MHMZ218DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHMZ218DA",
      "normalizedModelNumber": "mhmz218da",
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
      "id": "model-emi-mhmz548da",
      "slug": "emi-mhmz548da",
      "name": "EMI MHMZ548DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHMZ548DA",
      "normalizedModelNumber": "mhmz548da",
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
      "id": "model-emi-ecosz109da",
      "slug": "emi-ecosz109da",
      "name": "EMI ECOSZ109DA",
      "seriesId": "series-emi-eco-series",
      "brandId": "brand-emi",
      "modelNumber": "ECOSZ109DA",
      "normalizedModelNumber": "ecosz109da",
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
      "id": "model-emi-mhsz124da",
      "slug": "emi-mhsz124da",
      "name": "EMI MHSZ124DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSZ124DA",
      "normalizedModelNumber": "mhsz124da",
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
      "id": "model-emi-mhsz118da",
      "slug": "emi-mhsz118da",
      "name": "EMI MHSZ118DA",
      "seriesId": "series-emi-mh-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSZ118DA",
      "normalizedModelNumber": "mhsz118da",
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
      "id": "model-emi-emxsz118da",
      "slug": "emi-emxsz118da",
      "name": "EMI EMXSZ118DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXSZ118DA",
      "normalizedModelNumber": "emxsz118da",
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
      "id": "model-emi-emxsz124da",
      "slug": "emi-emxsz124da",
      "name": "EMI EMXSZ124DA",
      "seriesId": "series-emi-emx-series",
      "brandId": "brand-emi",
      "modelNumber": "EMXSZ124DA",
      "normalizedModelNumber": "emxsz124da",
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
      "id": "model-emi-adsz130da",
      "slug": "emi-adsz130da",
      "name": "EMI ADSZ130DA",
      "seriesId": "series-emi-ads-series",
      "brandId": "brand-emi",
      "modelNumber": "ADSZ130DA",
      "normalizedModelNumber": "adsz130da",
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
      "id": "model-emi-ecosz118da",
      "slug": "emi-ecosz118da",
      "name": "EMI ECOSZ118DA",
      "seriesId": "series-emi-eco-series",
      "brandId": "brand-emi",
      "modelNumber": "ECOSZ118DA",
      "normalizedModelNumber": "ecosz118da",
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
      "id": "model-emi-ecosz130da",
      "slug": "emi-ecosz130da",
      "name": "EMI ECOSZ130DA",
      "seriesId": "series-emi-eco-series",
      "brandId": "brand-emi",
      "modelNumber": "ECOSZ130DA",
      "normalizedModelNumber": "ecosz130da",
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
      "id": "model-emi-ecosz124da",
      "slug": "emi-ecosz124da",
      "name": "EMI ECOSZ124DA",
      "seriesId": "series-emi-eco-series",
      "brandId": "brand-emi",
      "modelNumber": "ECOSZ124DA",
      "normalizedModelNumber": "ecosz124da",
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
      "id": "model-emi-adsz109da",
      "slug": "emi-adsz109da",
      "name": "EMI ADSZ109DA",
      "seriesId": "series-emi-ads-series",
      "brandId": "brand-emi",
      "modelNumber": "ADSZ109DA",
      "normalizedModelNumber": "adsz109da",
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
      "id": "model-emi-mhsd118dacfc",
      "slug": "emi-mhsd118dacfc",
      "name": "EMI MHSD118DACFC",
      "seriesId": "series-emi-mhah-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSD118DACFC",
      "normalizedModelNumber": "mhsd118dacfc",
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
      "id": "model-emi-mhsd124dacfc",
      "slug": "emi-mhsd124dacfc",
      "name": "EMI MHSD124DACFC",
      "seriesId": "series-emi-mhah-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSD124DACFC",
      "normalizedModelNumber": "mhsd124dacfc",
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
      "id": "model-emi-mhsd130dacfc",
      "slug": "emi-mhsd130dacfc",
      "name": "EMI MHSD130DACFC",
      "seriesId": "series-emi-mhah-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSD130DACFC",
      "normalizedModelNumber": "mhsd130dacfc",
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
      "id": "model-emi-mhsd136dacfc",
      "slug": "emi-mhsd136dacfc",
      "name": "EMI MHSD136DACFC",
      "seriesId": "series-emi-mhah-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSD136DACFC",
      "normalizedModelNumber": "mhsd136dacfc",
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
      "id": "model-emi-mhsd148dacfc",
      "slug": "emi-mhsd148dacfc",
      "name": "EMI MHSD148DACFC",
      "seriesId": "series-emi-mhah-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSD148DACFC",
      "normalizedModelNumber": "mhsd148dacfc",
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
      "id": "model-emi-mhsd160dacfc",
      "slug": "emi-mhsd160dacfc",
      "name": "EMI MHSD160DACFC",
      "seriesId": "series-emi-mhah-series",
      "brandId": "brand-emi",
      "modelNumber": "MHSD160DACFC",
      "normalizedModelNumber": "mhsd160dacfc",
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
      "id": "ou-emi-mhsz109da",
      "modelNumber": "MHSZ109DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-emxsz109da",
      "modelNumber": "EMXSZ109DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-mhsz106da",
      "modelNumber": "MHSZ106DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-emxsz106da",
      "modelNumber": "EMXSZ106DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-mhsz112da",
      "modelNumber": "MHSZ112DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-emxsz112da",
      "modelNumber": "EMXSZ112DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-emxmz218da",
      "modelNumber": "EMXMZ218DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-emxmz436da",
      "modelNumber": "EMXMZ436DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-emxmz548da",
      "modelNumber": "EMXMZ548DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-mhmz327da",
      "modelNumber": "MHMZ327DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-emxmz327da",
      "modelNumber": "EMXMZ327DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-mhmz436da",
      "modelNumber": "MHMZ436DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhmz218da",
      "modelNumber": "MHMZ218DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhmz548da",
      "modelNumber": "MHMZ548DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-ecosz109da",
      "modelNumber": "ECOSZ109DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-mhsz124da",
      "modelNumber": "MHSZ124DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhsz118da",
      "modelNumber": "MHSZ118DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-emxsz118da",
      "modelNumber": "EMXSZ118DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-emxsz124da",
      "modelNumber": "EMXSZ124DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-adsz130da",
      "modelNumber": "ADSZ130DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-ecosz118da",
      "modelNumber": "ECOSZ118DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-ecosz130da",
      "modelNumber": "ECOSZ130DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-ecosz124da",
      "modelNumber": "ECOSZ124DA",
      "brandId": "brand-emi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-emi-adsz109da",
      "modelNumber": "ADSZ109DA",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhsd118dacfc",
      "modelNumber": "MHSD118DACFC",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhsd124dacfc",
      "modelNumber": "MHSD124DACFC",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhsd130dacfc",
      "modelNumber": "MHSD130DACFC",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhsd136dacfc",
      "modelNumber": "MHSD136DACFC",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhsd148dacfc",
      "modelNumber": "MHSD148DACFC",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-emi-mhsd160dacfc",
      "modelNumber": "MHSD160DACFC",
      "brandId": "brand-emi",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-mhwal09da",
      "modelNumber": "MHWAL09DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-emxwal09da",
      "modelNumber": "EMXWAL09DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhwal06da",
      "modelNumber": "MHWAL06DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-emxwal06da",
      "modelNumber": "EMXWAL06DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhwal12da",
      "modelNumber": "MHWAL12DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-emxwal12da",
      "modelNumber": "EMXWAL12DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44418",
      "modelNumber": "IU-44418",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44420",
      "modelNumber": "IU-44420",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44421",
      "modelNumber": "IU-44421",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44428",
      "modelNumber": "IU-44428",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44419",
      "modelNumber": "IU-44419",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhcas12da",
      "modelNumber": "MHCAS12DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44429",
      "modelNumber": "IU-44429",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44427",
      "modelNumber": "IU-44427",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44430",
      "modelNumber": "IU-44430",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-ecowal09da",
      "modelNumber": "ECOWAL09DA*",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhwal24da",
      "modelNumber": "MHWAL24DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhwal18da",
      "modelNumber": "MHWAL18DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-emxwal18da",
      "modelNumber": "EMXWAL18DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-emxwal24da",
      "modelNumber": "EMXWAL24DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-adwal30da",
      "modelNumber": "ADWAL30DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhcas24da",
      "modelNumber": "MHCAS24DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhcas09da",
      "modelNumber": "MHCAS09DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-ecowal18da",
      "modelNumber": "ECOWAL18DA*",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-ecowal30da",
      "modelNumber": "ECOWAL30DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhcas18da",
      "modelNumber": "MHCAS18DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-ecowal24da",
      "modelNumber": "ECOWAL24DA*",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-adwal09da",
      "modelNumber": "ADWAL09DA",
      "brandId": "brand-emi",
      "type": "wall-single"
    },
    {
      "id": "iu-mhah118dacfc",
      "modelNumber": "MHAH118DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah124dacfc",
      "modelNumber": "MHAH124DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhco24dacfc",
      "modelNumber": "MHCO24DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah130dacfc",
      "modelNumber": "MHAH130DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah136dacfc",
      "modelNumber": "MHAH136DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah148dacfc",
      "modelNumber": "MHAH148DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhco36dacfc",
      "modelNumber": "MHCO36DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah160dacfc",
      "modelNumber": "MHAH160DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhco37dacfc",
      "modelNumber": "MHCO37DACFC",
      "brandId": "brand-emi",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-emi-mhsz109da-mhwal09da",
      "slug": "emi-mhsz109da-mhwal09da",
      "modelId": "model-emi-mhsz109da",
      "outdoorUnitId": "ou-emi-mhsz109da",
      "indoorUnitId": "iu-mhwal09da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxsz109da-emxwal09da",
      "slug": "emi-emxsz109da-emxwal09da",
      "modelId": "model-emi-emxsz109da",
      "outdoorUnitId": "ou-emi-emxsz109da",
      "indoorUnitId": "iu-emxwal09da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsz106da-mhwal06da",
      "slug": "emi-mhsz106da-mhwal06da",
      "modelId": "model-emi-mhsz106da",
      "outdoorUnitId": "ou-emi-mhsz106da",
      "indoorUnitId": "iu-mhwal06da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxsz106da-emxwal06da",
      "slug": "emi-emxsz106da-emxwal06da",
      "modelId": "model-emi-emxsz106da",
      "outdoorUnitId": "ou-emi-emxsz106da",
      "indoorUnitId": "iu-emxwal06da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsz112da-mhwal12da",
      "slug": "emi-mhsz112da-mhwal12da",
      "modelId": "model-emi-mhsz112da",
      "outdoorUnitId": "ou-emi-mhsz112da",
      "indoorUnitId": "iu-mhwal12da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxsz112da-emxwal12da",
      "slug": "emi-emxsz112da-emxwal12da",
      "modelId": "model-emi-emxsz112da",
      "outdoorUnitId": "ou-emi-emxsz112da",
      "indoorUnitId": "iu-emxwal12da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxmz218da-iu-44418",
      "slug": "emi-emxmz218da-iu-44418",
      "modelId": "model-emi-emxmz218da",
      "outdoorUnitId": "ou-emi-emxmz218da",
      "indoorUnitId": "iu-iu-44418",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxmz436da-iu-44420",
      "slug": "emi-emxmz436da-iu-44420",
      "modelId": "model-emi-emxmz436da",
      "outdoorUnitId": "ou-emi-emxmz436da",
      "indoorUnitId": "iu-iu-44420",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxmz548da-iu-44421",
      "slug": "emi-emxmz548da-iu-44421",
      "modelId": "model-emi-emxmz548da",
      "outdoorUnitId": "ou-emi-emxmz548da",
      "indoorUnitId": "iu-iu-44421",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhmz327da-iu-44428",
      "slug": "emi-mhmz327da-iu-44428",
      "modelId": "model-emi-mhmz327da",
      "outdoorUnitId": "ou-emi-mhmz327da",
      "indoorUnitId": "iu-iu-44428",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxmz327da-iu-44419",
      "slug": "emi-emxmz327da-iu-44419",
      "modelId": "model-emi-emxmz327da",
      "outdoorUnitId": "ou-emi-emxmz327da",
      "indoorUnitId": "iu-iu-44419",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsz112da-mhcas12da",
      "slug": "emi-mhsz112da-mhcas12da",
      "modelId": "model-emi-mhsz112da",
      "outdoorUnitId": "ou-emi-mhsz112da",
      "indoorUnitId": "iu-mhcas12da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhmz436da-iu-44429",
      "slug": "emi-mhmz436da-iu-44429",
      "modelId": "model-emi-mhmz436da",
      "outdoorUnitId": "ou-emi-mhmz436da",
      "indoorUnitId": "iu-iu-44429",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhmz218da-iu-44427",
      "slug": "emi-mhmz218da-iu-44427",
      "modelId": "model-emi-mhmz218da",
      "outdoorUnitId": "ou-emi-mhmz218da",
      "indoorUnitId": "iu-iu-44427",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhmz548da-iu-44430",
      "slug": "emi-mhmz548da-iu-44430",
      "modelId": "model-emi-mhmz548da",
      "outdoorUnitId": "ou-emi-mhmz548da",
      "indoorUnitId": "iu-iu-44430",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-ecosz109da-ecowal09da",
      "slug": "emi-ecosz109da-ecowal09da",
      "modelId": "model-emi-ecosz109da",
      "outdoorUnitId": "ou-emi-ecosz109da",
      "indoorUnitId": "iu-ecowal09da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsz124da-mhwal24da",
      "slug": "emi-mhsz124da-mhwal24da",
      "modelId": "model-emi-mhsz124da",
      "outdoorUnitId": "ou-emi-mhsz124da",
      "indoorUnitId": "iu-mhwal24da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsz118da-mhwal18da",
      "slug": "emi-mhsz118da-mhwal18da",
      "modelId": "model-emi-mhsz118da",
      "outdoorUnitId": "ou-emi-mhsz118da",
      "indoorUnitId": "iu-mhwal18da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxsz118da-emxwal18da",
      "slug": "emi-emxsz118da-emxwal18da",
      "modelId": "model-emi-emxsz118da",
      "outdoorUnitId": "ou-emi-emxsz118da",
      "indoorUnitId": "iu-emxwal18da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-emxsz124da-emxwal24da",
      "slug": "emi-emxsz124da-emxwal24da",
      "modelId": "model-emi-emxsz124da",
      "outdoorUnitId": "ou-emi-emxsz124da",
      "indoorUnitId": "iu-emxwal24da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-adsz130da-adwal30da",
      "slug": "emi-adsz130da-adwal30da",
      "modelId": "model-emi-adsz130da",
      "outdoorUnitId": "ou-emi-adsz130da",
      "indoorUnitId": "iu-adwal30da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsz124da-mhcas24da",
      "slug": "emi-mhsz124da-mhcas24da",
      "modelId": "model-emi-mhsz124da",
      "outdoorUnitId": "ou-emi-mhsz124da",
      "indoorUnitId": "iu-mhcas24da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsz109da-mhcas09da",
      "slug": "emi-mhsz109da-mhcas09da",
      "modelId": "model-emi-mhsz109da",
      "outdoorUnitId": "ou-emi-mhsz109da",
      "indoorUnitId": "iu-mhcas09da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-ecosz118da-ecowal18da",
      "slug": "emi-ecosz118da-ecowal18da",
      "modelId": "model-emi-ecosz118da",
      "outdoorUnitId": "ou-emi-ecosz118da",
      "indoorUnitId": "iu-ecowal18da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-ecosz130da-ecowal30da",
      "slug": "emi-ecosz130da-ecowal30da",
      "modelId": "model-emi-ecosz130da",
      "outdoorUnitId": "ou-emi-ecosz130da",
      "indoorUnitId": "iu-ecowal30da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsz118da-mhcas18da",
      "slug": "emi-mhsz118da-mhcas18da",
      "modelId": "model-emi-mhsz118da",
      "outdoorUnitId": "ou-emi-mhsz118da",
      "indoorUnitId": "iu-mhcas18da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-ecosz124da-ecowal24da",
      "slug": "emi-ecosz124da-ecowal24da",
      "modelId": "model-emi-ecosz124da",
      "outdoorUnitId": "ou-emi-ecosz124da",
      "indoorUnitId": "iu-ecowal24da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-adsz109da-adwal09da",
      "slug": "emi-adsz109da-adwal09da",
      "modelId": "model-emi-adsz109da",
      "outdoorUnitId": "ou-emi-adsz109da",
      "indoorUnitId": "iu-adwal09da",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd118dacfc-mhah118dacfc",
      "slug": "emi-mhsd118dacfc-mhah118dacfc",
      "modelId": "model-emi-mhsd118dacfc",
      "outdoorUnitId": "ou-emi-mhsd118dacfc",
      "indoorUnitId": "iu-mhah118dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd124dacfc-mhah124dacfc",
      "slug": "emi-mhsd124dacfc-mhah124dacfc",
      "modelId": "model-emi-mhsd124dacfc",
      "outdoorUnitId": "ou-emi-mhsd124dacfc",
      "indoorUnitId": "iu-mhah124dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd124dacfc-mhco24dacfc",
      "slug": "emi-mhsd124dacfc-mhco24dacfc",
      "modelId": "model-emi-mhsd124dacfc",
      "outdoorUnitId": "ou-emi-mhsd124dacfc",
      "indoorUnitId": "iu-mhco24dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd130dacfc-mhah130dacfc",
      "slug": "emi-mhsd130dacfc-mhah130dacfc",
      "modelId": "model-emi-mhsd130dacfc",
      "outdoorUnitId": "ou-emi-mhsd130dacfc",
      "indoorUnitId": "iu-mhah130dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd118dacfc-mhco24dacfc",
      "slug": "emi-mhsd118dacfc-mhco24dacfc",
      "modelId": "model-emi-mhsd118dacfc",
      "outdoorUnitId": "ou-emi-mhsd118dacfc",
      "indoorUnitId": "iu-mhco24dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd136dacfc-mhah136dacfc",
      "slug": "emi-mhsd136dacfc-mhah136dacfc",
      "modelId": "model-emi-mhsd136dacfc",
      "outdoorUnitId": "ou-emi-mhsd136dacfc",
      "indoorUnitId": "iu-mhah136dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd148dacfc-mhah148dacfc",
      "slug": "emi-mhsd148dacfc-mhah148dacfc",
      "modelId": "model-emi-mhsd148dacfc",
      "outdoorUnitId": "ou-emi-mhsd148dacfc",
      "indoorUnitId": "iu-mhah148dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd130dacfc-mhco36dacfc",
      "slug": "emi-mhsd130dacfc-mhco36dacfc",
      "modelId": "model-emi-mhsd130dacfc",
      "outdoorUnitId": "ou-emi-mhsd130dacfc",
      "indoorUnitId": "iu-mhco36dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd160dacfc-mhah160dacfc",
      "slug": "emi-mhsd160dacfc-mhah160dacfc",
      "modelId": "model-emi-mhsd160dacfc",
      "outdoorUnitId": "ou-emi-mhsd160dacfc",
      "indoorUnitId": "iu-mhah160dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd136dacfc-mhco36dacfc",
      "slug": "emi-mhsd136dacfc-mhco36dacfc",
      "modelId": "model-emi-mhsd136dacfc",
      "outdoorUnitId": "ou-emi-mhsd136dacfc",
      "indoorUnitId": "iu-mhco36dacfc",
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
          "sourceId": "src-emi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emi-mhsd136dacfc-mhco37dacfc",
      "slug": "emi-mhsd136dacfc-mhco37dacfc",
      "modelId": "model-emi-mhsd136dacfc",
      "outdoorUnitId": "ou-emi-mhsd136dacfc",
      "indoorUnitId": "iu-mhco37dacfc",
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
          "sourceId": "src-emi-epa",
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
