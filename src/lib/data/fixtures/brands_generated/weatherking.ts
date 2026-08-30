import type { BrandDataset } from "../../types";

export const brand_weatherkingDataset: BrandDataset = {
  "brand": {
    "id": "brand-weatherking",
    "slug": "weatherking",
    "name": "WeatherKing",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour WeatherKing",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-weatherking-epa",
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
      "id": "series-weatherking-versus",
      "slug": "weatherking-versus",
      "name": "VERSUS",
      "brandId": "brand-weatherking",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série VERSUS de WeatherKing",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-weatherking-classic-series",
      "slug": "weatherking-classic-series",
      "name": "CLASSIC SERIES",
      "brandId": "brand-weatherking",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série CLASSIC SERIES de WeatherKing",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-weatherking-rhpxzs",
      "slug": "weatherking-rhpxzs",
      "name": "RHPXZS",
      "brandId": "brand-weatherking",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHPXZS de WeatherKing",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-weatherking-wp15ay36aj2n",
      "slug": "weatherking-wp15ay36aj2n",
      "name": "WeatherKing WP15AY36AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AY36AJ2N",
      "normalizedModelNumber": "wp15ay36aj2n",
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
      "id": "model-weatherking-wp15az24aj2n",
      "slug": "weatherking-wp15az24aj2n",
      "name": "WeatherKing WP15AZ24AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AZ24AJ2N",
      "normalizedModelNumber": "wp15az24aj2n",
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
      "id": "model-weatherking-wp15az18aj2n",
      "slug": "weatherking-wp15az18aj2n",
      "name": "WeatherKing WP15AZ18AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AZ18AJ2N",
      "normalizedModelNumber": "wp15az18aj2n",
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
      "id": "model-weatherking-wp15az30aj2n",
      "slug": "weatherking-wp15az30aj2n",
      "name": "WeatherKing WP15AZ30AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AZ30AJ2N",
      "normalizedModelNumber": "wp15az30aj2n",
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
      "id": "model-weatherking-wp15az60aj2n",
      "slug": "weatherking-wp15az60aj2n",
      "name": "WeatherKing WP15AZ60AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AZ60AJ2N",
      "normalizedModelNumber": "wp15az60aj2n",
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
      "id": "model-weatherking-wp15ay30aj2n",
      "slug": "weatherking-wp15ay30aj2n",
      "name": "WeatherKing WP15AY30AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AY30AJ2N",
      "normalizedModelNumber": "wp15ay30aj2n",
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
      "id": "model-weatherking-wp15ay18aj2n",
      "slug": "weatherking-wp15ay18aj2n",
      "name": "WeatherKing WP15AY18AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AY18AJ2N",
      "normalizedModelNumber": "wp15ay18aj2n",
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
      "id": "model-weatherking-wp14ay60aj2n",
      "slug": "weatherking-wp14ay60aj2n",
      "name": "WeatherKing WP14AY60AJ2N",
      "seriesId": "series-weatherking-classic-series",
      "brandId": "brand-weatherking",
      "modelNumber": "WP14AY60AJ2N",
      "normalizedModelNumber": "wp14ay60aj2n",
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
      "id": "model-weatherking-wp15ay24aj2n",
      "slug": "weatherking-wp15ay24aj2n",
      "name": "WeatherKing WP15AY24AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AY24AJ2N",
      "normalizedModelNumber": "wp15ay24aj2n",
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
      "id": "model-weatherking-wp14ay42aj2n",
      "slug": "weatherking-wp14ay42aj2n",
      "name": "WeatherKing WP14AY42AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP14AY42AJ2N",
      "normalizedModelNumber": "wp14ay42aj2n",
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
      "id": "model-weatherking-wp15ay48aj2n",
      "slug": "weatherking-wp15ay48aj2n",
      "name": "WeatherKing WP15AY48AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AY48AJ2N",
      "normalizedModelNumber": "wp15ay48aj2n",
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
      "id": "model-weatherking-wp15ay42aj2n",
      "slug": "weatherking-wp15ay42aj2n",
      "name": "WeatherKing WP15AY42AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AY42AJ2N",
      "normalizedModelNumber": "wp15ay42aj2n",
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
      "id": "model-weatherking-wp15ay60aj2n",
      "slug": "weatherking-wp15ay60aj2n",
      "name": "WeatherKing WP15AY60AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AY60AJ2N",
      "normalizedModelNumber": "wp15ay60aj2n",
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
      "id": "model-weatherking-wp15az36aj2n",
      "slug": "weatherking-wp15az36aj2n",
      "name": "WeatherKing WP15AZ36AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AZ36AJ2N",
      "normalizedModelNumber": "wp15az36aj2n",
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
      "id": "model-weatherking-wp15az42aj2n",
      "slug": "weatherking-wp15az42aj2n",
      "name": "WeatherKing WP15AZ42AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AZ42AJ2N",
      "normalizedModelNumber": "wp15az42aj2n",
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
      "id": "model-weatherking-wp15az48aj2n",
      "slug": "weatherking-wp15az48aj2n",
      "name": "WeatherKing WP15AZ48AJ2N",
      "seriesId": "series-weatherking-versus",
      "brandId": "brand-weatherking",
      "modelNumber": "WP15AZ48AJ2N",
      "normalizedModelNumber": "wp15az48aj2n",
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
      "id": "model-weatherking-rhpxzs024ajt",
      "slug": "weatherking-rhpxzs024ajt",
      "name": "WeatherKing RHPXZS024AJT",
      "seriesId": "series-weatherking-rhpxzs",
      "brandId": "brand-weatherking",
      "modelNumber": "RHPXZS024AJT",
      "normalizedModelNumber": "rhpxzs024ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23600,
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
      "id": "model-weatherking-rhpxzs036ajt",
      "slug": "weatherking-rhpxzs036ajt",
      "name": "WeatherKing RHPXZS036AJT",
      "seriesId": "series-weatherking-rhpxzs",
      "brandId": "brand-weatherking",
      "modelNumber": "RHPXZS036AJT",
      "normalizedModelNumber": "rhpxzs036ajt",
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
      "id": "model-weatherking-rhpxzs048ajt",
      "slug": "weatherking-rhpxzs048ajt",
      "name": "WeatherKing RHPXZS048AJT",
      "seriesId": "series-weatherking-rhpxzs",
      "brandId": "brand-weatherking",
      "modelNumber": "RHPXZS048AJT",
      "normalizedModelNumber": "rhpxzs048ajt",
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
      "id": "model-weatherking-rhpxzs060ajt",
      "slug": "weatherking-rhpxzs060ajt",
      "name": "WeatherKing RHPXZS060AJT",
      "seriesId": "series-weatherking-rhpxzs",
      "brandId": "brand-weatherking",
      "modelNumber": "RHPXZS060AJT",
      "normalizedModelNumber": "rhpxzs060ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 58000,
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
      "id": "ou-weatherking-wp15ay36aj2n",
      "modelNumber": "WP15AY36AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp15az24aj2n",
      "modelNumber": "WP15AZ24AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-wp15az18aj2n",
      "modelNumber": "WP15AZ18AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-wp15az30aj2n",
      "modelNumber": "WP15AZ30AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-wp15az60aj2n",
      "modelNumber": "WP15AZ60AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-wp15ay30aj2n",
      "modelNumber": "WP15AY30AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp15ay18aj2n",
      "modelNumber": "WP15AY18AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp14ay60aj2n",
      "modelNumber": "WP14AY60AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp15ay24aj2n",
      "modelNumber": "WP15AY24AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp14ay42aj2n",
      "modelNumber": "WP14AY42AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp15ay48aj2n",
      "modelNumber": "WP15AY48AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp15ay42aj2n",
      "modelNumber": "WP15AY42AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp15ay60aj2n",
      "modelNumber": "WP15AY60AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-weatherking-wp15az36aj2n",
      "modelNumber": "WP15AZ36AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-wp15az42aj2n",
      "modelNumber": "WP15AZ42AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-wp15az48aj2n",
      "modelNumber": "WP15AZ48AJ2N",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-rhpxzs024ajt",
      "modelNumber": "RHPXZS024AJT",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-rhpxzs036ajt",
      "modelNumber": "RHPXZS036AJT",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-rhpxzs048ajt",
      "modelNumber": "RHPXZS048AJT",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-weatherking-rhpxzs060ajt",
      "modelNumber": "RHPXZS060AJT",
      "brandId": "brand-weatherking",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-tcfy3621stanm",
      "modelNumber": "TCFY3621STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2ty3624stans",
      "modelNumber": "RF2TY3624STANS",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh3vz2417stann",
      "modelNumber": "WH3VZ2417STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfz2417stanm",
      "modelNumber": "RCFZ2417STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfz2417mtanm",
      "modelNumber": "RCFZ2417MTANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfz2421mtanm",
      "modelNumber": "RCFZ2421MTANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz2417mtanm",
      "modelNumber": "TCFZ2417MTANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz2417stanm",
      "modelNumber": "TCFZ2417STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz2421mtanm",
      "modelNumber": "TCFZ2421MTANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh3vz3617stann",
      "modelNumber": "WH3VZ3617STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh2tz6024stann",
      "modelNumber": "WH2TZ6024STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh2ty3617stann",
      "modelNumber": "WH2TY3617STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfy3617stanm",
      "modelNumber": "RCFY3617STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2ty2421stans",
      "modelNumber": "RF2TY2421STANS",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh2ty6024stann",
      "modelNumber": "WH2TY6024STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh2ty2417stann",
      "modelNumber": "WH2TY2417STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfy6021staam",
      "modelNumber": "RCFY6021STAAM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy6021staam",
      "modelNumber": "TCFY6021STAAM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfy4824stanm",
      "modelNumber": "RCFY4824STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4824stanm",
      "modelNumber": "TCFY4824STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh2ty4821stann",
      "modelNumber": "WH2TY4821STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4821stanm",
      "modelNumber": "TCFY4821STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfy4821stanm",
      "modelNumber": "RCFY4821STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3617stanm",
      "modelNumber": "TCFY3617STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfy3621stanm",
      "modelNumber": "RCFY3621STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh2tz2417stann",
      "modelNumber": "WH2TZ2417STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2tz2421stans",
      "modelNumber": "RF2TZ2421STANS",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfz3621stanm",
      "modelNumber": "RCFZ3621STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rcfz3617stanm",
      "modelNumber": "RCFZ3617STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3621stanm",
      "modelNumber": "TCFZ3621STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2tz3624stans",
      "modelNumber": "RF2TZ3624STANS",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh2tz3617stann",
      "modelNumber": "WH2TZ3617STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3617stanm",
      "modelNumber": "TCFZ3617STANM",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh2tz4821stann",
      "modelNumber": "WH2TZ4821STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-wh3vz4821stann",
      "modelNumber": "WH3VZ4821STANN",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38044",
      "modelNumber": "IU-38044",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38045",
      "modelNumber": "IU-38045",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38046",
      "modelNumber": "IU-38046",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38047",
      "modelNumber": "IU-38047",
      "brandId": "brand-weatherking",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-weatherking-wp15ay36aj2n-tcfy3621stanm",
      "slug": "weatherking-wp15ay36aj2n-tcfy3621stanm",
      "modelId": "model-weatherking-wp15ay36aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay36aj2n",
      "indoorUnitId": "iu-tcfy3621stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay36aj2n-rf2ty3624stans",
      "slug": "weatherking-wp15ay36aj2n-rf2ty3624stans",
      "modelId": "model-weatherking-wp15ay36aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay36aj2n",
      "indoorUnitId": "iu-rf2ty3624stans",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az24aj2n-wh3vz2417stann",
      "slug": "weatherking-wp15az24aj2n-wh3vz2417stann",
      "modelId": "model-weatherking-wp15az24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az24aj2n",
      "indoorUnitId": "iu-wh3vz2417stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az18aj2n-wh3vz2417stann",
      "slug": "weatherking-wp15az18aj2n-wh3vz2417stann",
      "modelId": "model-weatherking-wp15az18aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az18aj2n",
      "indoorUnitId": "iu-wh3vz2417stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az24aj2n-rcfz2417stanm",
      "slug": "weatherking-wp15az24aj2n-rcfz2417stanm",
      "modelId": "model-weatherking-wp15az24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az24aj2n",
      "indoorUnitId": "iu-rcfz2417stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az24aj2n-rcfz2417mtanm",
      "slug": "weatherking-wp15az24aj2n-rcfz2417mtanm",
      "modelId": "model-weatherking-wp15az24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az24aj2n",
      "indoorUnitId": "iu-rcfz2417mtanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az24aj2n-rcfz2421mtanm",
      "slug": "weatherking-wp15az24aj2n-rcfz2421mtanm",
      "modelId": "model-weatherking-wp15az24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az24aj2n",
      "indoorUnitId": "iu-rcfz2421mtanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az24aj2n-tcfz2417mtanm",
      "slug": "weatherking-wp15az24aj2n-tcfz2417mtanm",
      "modelId": "model-weatherking-wp15az24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az24aj2n",
      "indoorUnitId": "iu-tcfz2417mtanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az24aj2n-tcfz2417stanm",
      "slug": "weatherking-wp15az24aj2n-tcfz2417stanm",
      "modelId": "model-weatherking-wp15az24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az24aj2n",
      "indoorUnitId": "iu-tcfz2417stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az24aj2n-tcfz2421mtanm",
      "slug": "weatherking-wp15az24aj2n-tcfz2421mtanm",
      "modelId": "model-weatherking-wp15az24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az24aj2n",
      "indoorUnitId": "iu-tcfz2421mtanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az30aj2n-wh3vz3617stann",
      "slug": "weatherking-wp15az30aj2n-wh3vz3617stann",
      "modelId": "model-weatherking-wp15az30aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az30aj2n",
      "indoorUnitId": "iu-wh3vz3617stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az60aj2n-wh2tz6024stann",
      "slug": "weatherking-wp15az60aj2n-wh2tz6024stann",
      "modelId": "model-weatherking-wp15az60aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az60aj2n",
      "indoorUnitId": "iu-wh2tz6024stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay30aj2n-wh2ty3617stann",
      "slug": "weatherking-wp15ay30aj2n-wh2ty3617stann",
      "modelId": "model-weatherking-wp15ay30aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay30aj2n",
      "indoorUnitId": "iu-wh2ty3617stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay36aj2n-rcfy3617stanm",
      "slug": "weatherking-wp15ay36aj2n-rcfy3617stanm",
      "modelId": "model-weatherking-wp15ay36aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay36aj2n",
      "indoorUnitId": "iu-rcfy3617stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay18aj2n-rf2ty2421stans",
      "slug": "weatherking-wp15ay18aj2n-rf2ty2421stans",
      "modelId": "model-weatherking-wp15ay18aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay18aj2n",
      "indoorUnitId": "iu-rf2ty2421stans",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp14ay60aj2n-wh2ty6024stann",
      "slug": "weatherking-wp14ay60aj2n-wh2ty6024stann",
      "modelId": "model-weatherking-wp14ay60aj2n",
      "outdoorUnitId": "ou-weatherking-wp14ay60aj2n",
      "indoorUnitId": "iu-wh2ty6024stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay24aj2n-wh2ty2417stann",
      "slug": "weatherking-wp15ay24aj2n-wh2ty2417stann",
      "modelId": "model-weatherking-wp15ay24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay24aj2n",
      "indoorUnitId": "iu-wh2ty2417stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay18aj2n-wh2ty2417stann",
      "slug": "weatherking-wp15ay18aj2n-wh2ty2417stann",
      "modelId": "model-weatherking-wp15ay18aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay18aj2n",
      "indoorUnitId": "iu-wh2ty2417stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp14ay60aj2n-rcfy6021staam",
      "slug": "weatherking-wp14ay60aj2n-rcfy6021staam",
      "modelId": "model-weatherking-wp14ay60aj2n",
      "outdoorUnitId": "ou-weatherking-wp14ay60aj2n",
      "indoorUnitId": "iu-rcfy6021staam",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp14ay60aj2n-tcfy6021staam",
      "slug": "weatherking-wp14ay60aj2n-tcfy6021staam",
      "modelId": "model-weatherking-wp14ay60aj2n",
      "outdoorUnitId": "ou-weatherking-wp14ay60aj2n",
      "indoorUnitId": "iu-tcfy6021staam",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp14ay42aj2n-rcfy4824stanm",
      "slug": "weatherking-wp14ay42aj2n-rcfy4824stanm",
      "modelId": "model-weatherking-wp14ay42aj2n",
      "outdoorUnitId": "ou-weatherking-wp14ay42aj2n",
      "indoorUnitId": "iu-rcfy4824stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp14ay42aj2n-tcfy4824stanm",
      "slug": "weatherking-wp14ay42aj2n-tcfy4824stanm",
      "modelId": "model-weatherking-wp14ay42aj2n",
      "outdoorUnitId": "ou-weatherking-wp14ay42aj2n",
      "indoorUnitId": "iu-tcfy4824stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay48aj2n-wh2ty4821stann",
      "slug": "weatherking-wp15ay48aj2n-wh2ty4821stann",
      "modelId": "model-weatherking-wp15ay48aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay48aj2n",
      "indoorUnitId": "iu-wh2ty4821stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay42aj2n-wh2ty4821stann",
      "slug": "weatherking-wp15ay42aj2n-wh2ty4821stann",
      "modelId": "model-weatherking-wp15ay42aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay42aj2n",
      "indoorUnitId": "iu-wh2ty4821stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay42aj2n-tcfy4824stanm",
      "slug": "weatherking-wp15ay42aj2n-tcfy4824stanm",
      "modelId": "model-weatherking-wp15ay42aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay42aj2n",
      "indoorUnitId": "iu-tcfy4824stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay42aj2n-tcfy4821stanm",
      "slug": "weatherking-wp15ay42aj2n-tcfy4821stanm",
      "modelId": "model-weatherking-wp15ay42aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay42aj2n",
      "indoorUnitId": "iu-tcfy4821stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay42aj2n-rcfy4824stanm",
      "slug": "weatherking-wp15ay42aj2n-rcfy4824stanm",
      "modelId": "model-weatherking-wp15ay42aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay42aj2n",
      "indoorUnitId": "iu-rcfy4824stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay42aj2n-rcfy4821stanm",
      "slug": "weatherking-wp15ay42aj2n-rcfy4821stanm",
      "modelId": "model-weatherking-wp15ay42aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay42aj2n",
      "indoorUnitId": "iu-rcfy4821stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay36aj2n-wh2ty3617stann",
      "slug": "weatherking-wp15ay36aj2n-wh2ty3617stann",
      "modelId": "model-weatherking-wp15ay36aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay36aj2n",
      "indoorUnitId": "iu-wh2ty3617stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay36aj2n-tcfy3617stanm",
      "slug": "weatherking-wp15ay36aj2n-tcfy3617stanm",
      "modelId": "model-weatherking-wp15ay36aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay36aj2n",
      "indoorUnitId": "iu-tcfy3617stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay24aj2n-rf2ty2421stans",
      "slug": "weatherking-wp15ay24aj2n-rf2ty2421stans",
      "modelId": "model-weatherking-wp15ay24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay24aj2n",
      "indoorUnitId": "iu-rf2ty2421stans",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay36aj2n-rcfy3621stanm",
      "slug": "weatherking-wp15ay36aj2n-rcfy3621stanm",
      "modelId": "model-weatherking-wp15ay36aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay36aj2n",
      "indoorUnitId": "iu-rcfy3621stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az18aj2n-wh2tz2417stann",
      "slug": "weatherking-wp15az18aj2n-wh2tz2417stann",
      "modelId": "model-weatherking-wp15az18aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az18aj2n",
      "indoorUnitId": "iu-wh2tz2417stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az18aj2n-rcfz2417stanm",
      "slug": "weatherking-wp15az18aj2n-rcfz2417stanm",
      "modelId": "model-weatherking-wp15az18aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az18aj2n",
      "indoorUnitId": "iu-rcfz2417stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15ay60aj2n-wh2ty6024stann",
      "slug": "weatherking-wp15ay60aj2n-wh2ty6024stann",
      "modelId": "model-weatherking-wp15ay60aj2n",
      "outdoorUnitId": "ou-weatherking-wp15ay60aj2n",
      "indoorUnitId": "iu-wh2ty6024stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az24aj2n-rf2tz2421stans",
      "slug": "weatherking-wp15az24aj2n-rf2tz2421stans",
      "modelId": "model-weatherking-wp15az24aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az24aj2n",
      "indoorUnitId": "iu-rf2tz2421stans",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az18aj2n-rf2tz2421stans",
      "slug": "weatherking-wp15az18aj2n-rf2tz2421stans",
      "modelId": "model-weatherking-wp15az18aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az18aj2n",
      "indoorUnitId": "iu-rf2tz2421stans",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az18aj2n-tcfz2417stanm",
      "slug": "weatherking-wp15az18aj2n-tcfz2417stanm",
      "modelId": "model-weatherking-wp15az18aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az18aj2n",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az30aj2n-rcfz3621stanm",
      "slug": "weatherking-wp15az30aj2n-rcfz3621stanm",
      "modelId": "model-weatherking-wp15az30aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az30aj2n",
      "indoorUnitId": "iu-rcfz3621stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az30aj2n-rcfz3617stanm",
      "slug": "weatherking-wp15az30aj2n-rcfz3617stanm",
      "modelId": "model-weatherking-wp15az30aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az30aj2n",
      "indoorUnitId": "iu-rcfz3617stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az30aj2n-tcfz3621stanm",
      "slug": "weatherking-wp15az30aj2n-tcfz3621stanm",
      "modelId": "model-weatherking-wp15az30aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az30aj2n",
      "indoorUnitId": "iu-tcfz3621stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az30aj2n-rf2tz3624stans",
      "slug": "weatherking-wp15az30aj2n-rf2tz3624stans",
      "modelId": "model-weatherking-wp15az30aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az30aj2n",
      "indoorUnitId": "iu-rf2tz3624stans",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az30aj2n-wh2tz3617stann",
      "slug": "weatherking-wp15az30aj2n-wh2tz3617stann",
      "modelId": "model-weatherking-wp15az30aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az30aj2n",
      "indoorUnitId": "iu-wh2tz3617stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az36aj2n-rf2tz3624stans",
      "slug": "weatherking-wp15az36aj2n-rf2tz3624stans",
      "modelId": "model-weatherking-wp15az36aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az36aj2n",
      "indoorUnitId": "iu-rf2tz3624stans",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az36aj2n-wh3vz3617stann",
      "slug": "weatherking-wp15az36aj2n-wh3vz3617stann",
      "modelId": "model-weatherking-wp15az36aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az36aj2n",
      "indoorUnitId": "iu-wh3vz3617stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az30aj2n-tcfz3617stanm",
      "slug": "weatherking-wp15az30aj2n-tcfz3617stanm",
      "modelId": "model-weatherking-wp15az30aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az30aj2n",
      "indoorUnitId": "iu-tcfz3617stanm",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az42aj2n-wh2tz4821stann",
      "slug": "weatherking-wp15az42aj2n-wh2tz4821stann",
      "modelId": "model-weatherking-wp15az42aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az42aj2n",
      "indoorUnitId": "iu-wh2tz4821stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az42aj2n-wh3vz4821stann",
      "slug": "weatherking-wp15az42aj2n-wh3vz4821stann",
      "modelId": "model-weatherking-wp15az42aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az42aj2n",
      "indoorUnitId": "iu-wh3vz4821stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az48aj2n-wh2tz4821stann",
      "slug": "weatherking-wp15az48aj2n-wh2tz4821stann",
      "modelId": "model-weatherking-wp15az48aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az48aj2n",
      "indoorUnitId": "iu-wh2tz4821stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-wp15az48aj2n-wh3vz4821stann",
      "slug": "weatherking-wp15az48aj2n-wh3vz4821stann",
      "modelId": "model-weatherking-wp15az48aj2n",
      "outdoorUnitId": "ou-weatherking-wp15az48aj2n",
      "indoorUnitId": "iu-wh3vz4821stann",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-rhpxzs024ajt-iu-38044",
      "slug": "weatherking-rhpxzs024ajt-iu-38044",
      "modelId": "model-weatherking-rhpxzs024ajt",
      "outdoorUnitId": "ou-weatherking-rhpxzs024ajt",
      "indoorUnitId": "iu-iu-38044",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-rhpxzs036ajt-iu-38045",
      "slug": "weatherking-rhpxzs036ajt-iu-38045",
      "modelId": "model-weatherking-rhpxzs036ajt",
      "outdoorUnitId": "ou-weatherking-rhpxzs036ajt",
      "indoorUnitId": "iu-iu-38045",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-rhpxzs048ajt-iu-38046",
      "slug": "weatherking-rhpxzs048ajt-iu-38046",
      "modelId": "model-weatherking-rhpxzs048ajt",
      "outdoorUnitId": "ou-weatherking-rhpxzs048ajt",
      "indoorUnitId": "iu-iu-38046",
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
          "sourceId": "src-weatherking-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-weatherking-rhpxzs060ajt-iu-38047",
      "slug": "weatherking-rhpxzs060ajt-iu-38047",
      "modelId": "model-weatherking-rhpxzs060ajt",
      "outdoorUnitId": "ou-weatherking-rhpxzs060ajt",
      "indoorUnitId": "iu-iu-38047",
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
          "sourceId": "src-weatherking-epa",
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
