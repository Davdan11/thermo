import type { BrandDataset } from "../../types";

export const brand_confortoDataset: BrandDataset = {
  "brand": {
    "id": "brand-conforto",
    "slug": "conforto",
    "name": "CONFORTO",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour CONFORTO",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-conforto-epa",
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
      "id": "series-conforto-mh-series",
      "slug": "conforto-mh-series",
      "name": "MH series",
      "brandId": "brand-conforto",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MH series de CONFORTO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-conforto-ads-series",
      "slug": "conforto-ads-series",
      "name": "ADS series",
      "brandId": "brand-conforto",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ADS series de CONFORTO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-conforto-mhah-series",
      "slug": "conforto-mhah-series",
      "name": "MHAH Series",
      "brandId": "brand-conforto",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MHAH Series de CONFORTO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-conforto-mhs-series",
      "slug": "conforto-mhs-series",
      "name": "MHS Series",
      "brandId": "brand-conforto",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MHS Series de CONFORTO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-conforto-mhsz109da",
      "slug": "conforto-mhsz109da",
      "name": "CONFORTO MHSZ109DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsz106da",
      "slug": "conforto-mhsz106da",
      "name": "CONFORTO MHSZ106DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsz112da",
      "slug": "conforto-mhsz112da",
      "name": "CONFORTO MHSZ112DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhmz327da",
      "slug": "conforto-mhmz327da",
      "name": "CONFORTO MHMZ327DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhmz436da",
      "slug": "conforto-mhmz436da",
      "name": "CONFORTO MHMZ436DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhmz218da",
      "slug": "conforto-mhmz218da",
      "name": "CONFORTO MHMZ218DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhmz548da",
      "slug": "conforto-mhmz548da",
      "name": "CONFORTO MHMZ548DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsz118da",
      "slug": "conforto-mhsz118da",
      "name": "CONFORTO MHSZ118DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsz124da",
      "slug": "conforto-mhsz124da",
      "name": "CONFORTO MHSZ124DA",
      "seriesId": "series-conforto-mh-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-adsz130da",
      "slug": "conforto-adsz130da",
      "name": "CONFORTO ADSZ130DA",
      "seriesId": "series-conforto-ads-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-adsz109da",
      "slug": "conforto-adsz109da",
      "name": "CONFORTO ADSZ109DA",
      "seriesId": "series-conforto-ads-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsd118dacfc",
      "slug": "conforto-mhsd118dacfc",
      "name": "CONFORTO MHSD118DACFC",
      "seriesId": "series-conforto-mhah-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsd124dacfc",
      "slug": "conforto-mhsd124dacfc",
      "name": "CONFORTO MHSD124DACFC",
      "seriesId": "series-conforto-mhah-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsd130dacfc",
      "slug": "conforto-mhsd130dacfc",
      "name": "CONFORTO MHSD130DACFC",
      "seriesId": "series-conforto-mhah-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsd136dacfc",
      "slug": "conforto-mhsd136dacfc",
      "name": "CONFORTO MHSD136DACFC",
      "seriesId": "series-conforto-mhah-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsd148dacfc",
      "slug": "conforto-mhsd148dacfc",
      "name": "CONFORTO MHSD148DACFC",
      "seriesId": "series-conforto-mhah-series",
      "brandId": "brand-conforto",
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
      "id": "model-conforto-mhsd160dacfc",
      "slug": "conforto-mhsd160dacfc",
      "name": "CONFORTO MHSD160DACFC",
      "seriesId": "series-conforto-mhah-series",
      "brandId": "brand-conforto",
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
      "id": "ou-conforto-mhsz109da",
      "modelNumber": "MHSZ109DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsz106da",
      "modelNumber": "MHSZ106DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsz112da",
      "modelNumber": "MHSZ112DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhmz327da",
      "modelNumber": "MHMZ327DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhmz436da",
      "modelNumber": "MHMZ436DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhmz218da",
      "modelNumber": "MHMZ218DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhmz548da",
      "modelNumber": "MHMZ548DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsz118da",
      "modelNumber": "MHSZ118DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsz124da",
      "modelNumber": "MHSZ124DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-adsz130da",
      "modelNumber": "ADSZ130DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-adsz109da",
      "modelNumber": "ADSZ109DA",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsd118dacfc",
      "modelNumber": "MHSD118DACFC",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsd124dacfc",
      "modelNumber": "MHSD124DACFC",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsd130dacfc",
      "modelNumber": "MHSD130DACFC",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsd136dacfc",
      "modelNumber": "MHSD136DACFC",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsd148dacfc",
      "modelNumber": "MHSD148DACFC",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-conforto-mhsd160dacfc",
      "modelNumber": "MHSD160DACFC",
      "brandId": "brand-conforto",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-mhwal09da",
      "modelNumber": "MHWAL09DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhwal06da",
      "modelNumber": "MHWAL06DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhwal12da",
      "modelNumber": "MHWAL12DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42151",
      "modelNumber": "IU-42151",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhcas12da",
      "modelNumber": "MHCAS12DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42152",
      "modelNumber": "IU-42152",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42150",
      "modelNumber": "IU-42150",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42153",
      "modelNumber": "IU-42153",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhwal18da",
      "modelNumber": "MHWAL18DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhwal24da",
      "modelNumber": "MHWAL24DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-adwal30da",
      "modelNumber": "ADWAL30DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhcas09da",
      "modelNumber": "MHCAS09DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhcas24da",
      "modelNumber": "MHCAS24DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhcas18da",
      "modelNumber": "MHCAS18DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-adwal09da",
      "modelNumber": "ADWAL09DA",
      "brandId": "brand-conforto",
      "type": "wall-single"
    },
    {
      "id": "iu-mhah118dacfc",
      "modelNumber": "MHAH118DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah124dacfc",
      "modelNumber": "MHAH124DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhco24dacfc",
      "modelNumber": "MHCO24DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah130dacfc",
      "modelNumber": "MHAH130DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah136dacfc",
      "modelNumber": "MHAH136DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah148dacfc",
      "modelNumber": "MHAH148DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhco36dacfc",
      "modelNumber": "MHCO36DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhah160dacfc",
      "modelNumber": "MHAH160DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhco37dacfc",
      "modelNumber": "MHCO37DACFC",
      "brandId": "brand-conforto",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-conforto-mhsz109da-mhwal09da",
      "slug": "conforto-mhsz109da-mhwal09da",
      "modelId": "model-conforto-mhsz109da",
      "outdoorUnitId": "ou-conforto-mhsz109da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsz106da-mhwal06da",
      "slug": "conforto-mhsz106da-mhwal06da",
      "modelId": "model-conforto-mhsz106da",
      "outdoorUnitId": "ou-conforto-mhsz106da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsz112da-mhwal12da",
      "slug": "conforto-mhsz112da-mhwal12da",
      "modelId": "model-conforto-mhsz112da",
      "outdoorUnitId": "ou-conforto-mhsz112da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhmz327da-iu-42151",
      "slug": "conforto-mhmz327da-iu-42151",
      "modelId": "model-conforto-mhmz327da",
      "outdoorUnitId": "ou-conforto-mhmz327da",
      "indoorUnitId": "iu-iu-42151",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsz112da-mhcas12da",
      "slug": "conforto-mhsz112da-mhcas12da",
      "modelId": "model-conforto-mhsz112da",
      "outdoorUnitId": "ou-conforto-mhsz112da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhmz436da-iu-42152",
      "slug": "conforto-mhmz436da-iu-42152",
      "modelId": "model-conforto-mhmz436da",
      "outdoorUnitId": "ou-conforto-mhmz436da",
      "indoorUnitId": "iu-iu-42152",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhmz218da-iu-42150",
      "slug": "conforto-mhmz218da-iu-42150",
      "modelId": "model-conforto-mhmz218da",
      "outdoorUnitId": "ou-conforto-mhmz218da",
      "indoorUnitId": "iu-iu-42150",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhmz548da-iu-42153",
      "slug": "conforto-mhmz548da-iu-42153",
      "modelId": "model-conforto-mhmz548da",
      "outdoorUnitId": "ou-conforto-mhmz548da",
      "indoorUnitId": "iu-iu-42153",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsz118da-mhwal18da",
      "slug": "conforto-mhsz118da-mhwal18da",
      "modelId": "model-conforto-mhsz118da",
      "outdoorUnitId": "ou-conforto-mhsz118da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsz124da-mhwal24da",
      "slug": "conforto-mhsz124da-mhwal24da",
      "modelId": "model-conforto-mhsz124da",
      "outdoorUnitId": "ou-conforto-mhsz124da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-adsz130da-adwal30da",
      "slug": "conforto-adsz130da-adwal30da",
      "modelId": "model-conforto-adsz130da",
      "outdoorUnitId": "ou-conforto-adsz130da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsz109da-mhcas09da",
      "slug": "conforto-mhsz109da-mhcas09da",
      "modelId": "model-conforto-mhsz109da",
      "outdoorUnitId": "ou-conforto-mhsz109da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsz124da-mhcas24da",
      "slug": "conforto-mhsz124da-mhcas24da",
      "modelId": "model-conforto-mhsz124da",
      "outdoorUnitId": "ou-conforto-mhsz124da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsz118da-mhcas18da",
      "slug": "conforto-mhsz118da-mhcas18da",
      "modelId": "model-conforto-mhsz118da",
      "outdoorUnitId": "ou-conforto-mhsz118da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-adsz109da-adwal09da",
      "slug": "conforto-adsz109da-adwal09da",
      "modelId": "model-conforto-adsz109da",
      "outdoorUnitId": "ou-conforto-adsz109da",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd118dacfc-mhah118dacfc",
      "slug": "conforto-mhsd118dacfc-mhah118dacfc",
      "modelId": "model-conforto-mhsd118dacfc",
      "outdoorUnitId": "ou-conforto-mhsd118dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd124dacfc-mhah124dacfc",
      "slug": "conforto-mhsd124dacfc-mhah124dacfc",
      "modelId": "model-conforto-mhsd124dacfc",
      "outdoorUnitId": "ou-conforto-mhsd124dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd124dacfc-mhco24dacfc",
      "slug": "conforto-mhsd124dacfc-mhco24dacfc",
      "modelId": "model-conforto-mhsd124dacfc",
      "outdoorUnitId": "ou-conforto-mhsd124dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd130dacfc-mhah130dacfc",
      "slug": "conforto-mhsd130dacfc-mhah130dacfc",
      "modelId": "model-conforto-mhsd130dacfc",
      "outdoorUnitId": "ou-conforto-mhsd130dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd118dacfc-mhco24dacfc",
      "slug": "conforto-mhsd118dacfc-mhco24dacfc",
      "modelId": "model-conforto-mhsd118dacfc",
      "outdoorUnitId": "ou-conforto-mhsd118dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd136dacfc-mhah136dacfc",
      "slug": "conforto-mhsd136dacfc-mhah136dacfc",
      "modelId": "model-conforto-mhsd136dacfc",
      "outdoorUnitId": "ou-conforto-mhsd136dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd148dacfc-mhah148dacfc",
      "slug": "conforto-mhsd148dacfc-mhah148dacfc",
      "modelId": "model-conforto-mhsd148dacfc",
      "outdoorUnitId": "ou-conforto-mhsd148dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd130dacfc-mhco36dacfc",
      "slug": "conforto-mhsd130dacfc-mhco36dacfc",
      "modelId": "model-conforto-mhsd130dacfc",
      "outdoorUnitId": "ou-conforto-mhsd130dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd160dacfc-mhah160dacfc",
      "slug": "conforto-mhsd160dacfc-mhah160dacfc",
      "modelId": "model-conforto-mhsd160dacfc",
      "outdoorUnitId": "ou-conforto-mhsd160dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd136dacfc-mhco37dacfc",
      "slug": "conforto-mhsd136dacfc-mhco37dacfc",
      "modelId": "model-conforto-mhsd136dacfc",
      "outdoorUnitId": "ou-conforto-mhsd136dacfc",
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
          "sourceId": "src-conforto-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-conforto-mhsd136dacfc-mhco36dacfc",
      "slug": "conforto-mhsd136dacfc-mhco36dacfc",
      "modelId": "model-conforto-mhsd136dacfc",
      "outdoorUnitId": "ou-conforto-mhsd136dacfc",
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
          "sourceId": "src-conforto-epa",
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
