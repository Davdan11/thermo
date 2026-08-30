import type { BrandDataset } from "../../types";

export const brand_fujitsuDataset: BrandDataset = {
  "brand": {
    "id": "brand-fujitsu",
    "slug": "fujitsu",
    "name": "Fujitsu",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Fujitsu",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-fujitsu-epa",
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
      "id": "series-fujitsu-airstage-h-series",
      "slug": "fujitsu-airstage-h-series",
      "name": "AIRSTAGE H-Series",
      "brandId": "brand-fujitsu",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIRSTAGE H-Series de Fujitsu",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-fujitsu-h-series",
      "slug": "fujitsu-h-series",
      "name": "H-Series",
      "brandId": "brand-fujitsu",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série H-Series de Fujitsu",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-fujitsu-j-7",
      "slug": "fujitsu-j-7",
      "name": "J-7",
      "brandId": "brand-fujitsu",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série J-7 de Fujitsu",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-fujitsu-j-7s",
      "slug": "fujitsu-j-7s",
      "name": "J-7S",
      "brandId": "brand-fujitsu",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série J-7S de Fujitsu",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-fujitsu-f-series",
      "slug": "fujitsu-f-series",
      "name": "F Series",
      "brandId": "brand-fujitsu",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série F Series de Fujitsu",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-fujitsu-w-series",
      "slug": "fujitsu-w-series",
      "name": "W Series",
      "brandId": "brand-fujitsu",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série W Series de Fujitsu",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-fujitsu-rdfxyc",
      "slug": "fujitsu-rdfxyc",
      "name": "RDFXYC",
      "brandId": "brand-fujitsu",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RDFXYC de Fujitsu",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-fujitsu-rhpxyc",
      "slug": "fujitsu-rhpxyc",
      "name": "RHPXYC",
      "brandId": "brand-fujitsu",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHPXYC de Fujitsu",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-fujitsu-aouh09ktap1",
      "slug": "fujitsu-aouh09ktap1",
      "name": "Fujitsu AOUH09KTAP1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09KTAP1",
      "normalizedModelNumber": "aouh09ktap1",
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
      "id": "model-fujitsu-aoug09lzas1",
      "slug": "fujitsu-aoug09lzas1",
      "name": "Fujitsu AOUG09LZAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUG09LZAS1",
      "normalizedModelNumber": "aoug09lzas1",
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
      "id": "model-fujitsu-aoug09lzah1",
      "slug": "fujitsu-aoug09lzah1",
      "name": "Fujitsu AOUG09LZAH1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUG09LZAH1",
      "normalizedModelNumber": "aoug09lzah1",
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
      "id": "model-fujitsu-aouh09kzah1",
      "slug": "fujitsu-aouh09kzah1",
      "name": "Fujitsu AOUH09KZAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09KZAH1",
      "normalizedModelNumber": "aouh09kzah1",
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
      "id": "model-fujitsu-aouh12ktap1",
      "slug": "fujitsu-aouh12ktap1",
      "name": "Fujitsu AOUH12KTAP1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12KTAP1",
      "normalizedModelNumber": "aouh12ktap1",
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
      "id": "model-fujitsu-aouh12kzah1",
      "slug": "fujitsu-aouh12kzah1",
      "name": "Fujitsu AOUH12KZAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12KZAH1",
      "normalizedModelNumber": "aouh12kzah1",
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
      "id": "model-fujitsu-aouh09kmas1",
      "slug": "fujitsu-aouh09kmas1",
      "name": "Fujitsu AOUH09KMAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09KMAS1",
      "normalizedModelNumber": "aouh09kmas1",
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
      "id": "model-fujitsu-aoug12lzah1",
      "slug": "fujitsu-aoug12lzah1",
      "name": "Fujitsu AOUG12LZAH1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUG12LZAH1",
      "normalizedModelNumber": "aoug12lzah1",
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
      "id": "model-fujitsu-aoug12lzas1",
      "slug": "fujitsu-aoug12lzas1",
      "name": "Fujitsu AOUG12LZAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUG12LZAS1",
      "normalizedModelNumber": "aoug12lzas1",
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
      "id": "model-fujitsu-aouh15ktap1",
      "slug": "fujitsu-aouh15ktap1",
      "name": "Fujitsu AOUH15KTAP1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH15KTAP1",
      "normalizedModelNumber": "aouh15ktap1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 14500,
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
      "id": "model-fujitsu-aouh15kzah1",
      "slug": "fujitsu-aouh15kzah1",
      "name": "Fujitsu AOUH15KZAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH15KZAH1",
      "normalizedModelNumber": "aouh15kzah1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 14500,
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
      "id": "model-fujitsu-aouh12kmas1",
      "slug": "fujitsu-aouh12kmas1",
      "name": "Fujitsu AOUH12KMAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12KMAS1",
      "normalizedModelNumber": "aouh12kmas1",
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
      "id": "model-fujitsu-aouh09lmas1",
      "slug": "fujitsu-aouh09lmas1",
      "name": "Fujitsu AOUH09LMAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09LMAS1",
      "normalizedModelNumber": "aouh09lmas1",
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
      "id": "model-fujitsu-aouh09lmah1",
      "slug": "fujitsu-aouh09lmah1",
      "name": "Fujitsu AOUH09LMAH1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09LMAH1",
      "normalizedModelNumber": "aouh09lmah1",
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
      "id": "model-fujitsu-aouh18kuas1",
      "slug": "fujitsu-aouh18kuas1",
      "name": "Fujitsu AOUH18KUAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH18KUAS1",
      "normalizedModelNumber": "aouh18kuas1",
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
      "id": "model-fujitsu-aouh09kpas1",
      "slug": "fujitsu-aouh09kpas1",
      "name": "Fujitsu AOUH09KPAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09KPAS1",
      "normalizedModelNumber": "aouh09kpas1",
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
      "id": "model-fujitsu-aouh09kubs1",
      "slug": "fujitsu-aouh09kubs1",
      "name": "Fujitsu AOUH09KUBS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09KUBS1",
      "normalizedModelNumber": "aouh09kubs1",
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
      "id": "model-fujitsu-aou9rlff",
      "slug": "fujitsu-aou9rlff",
      "name": "Fujitsu AOU9RLFF",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU9RLFF",
      "normalizedModelNumber": "aou9rlff",
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
      "id": "model-fujitsu-aou9rlffh",
      "slug": "fujitsu-aou9rlffh",
      "name": "Fujitsu AOU9RLFFH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU9RLFFH",
      "normalizedModelNumber": "aou9rlffh",
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
      "id": "model-fujitsu-aouh18kzah1",
      "slug": "fujitsu-aouh18kzah1",
      "name": "Fujitsu AOUH18KZAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH18KZAH1",
      "normalizedModelNumber": "aouh18kzah1",
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
      "id": "model-fujitsu-aoug15lzas1",
      "slug": "fujitsu-aoug15lzas1",
      "name": "Fujitsu AOUG15LZAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUG15LZAS1",
      "normalizedModelNumber": "aoug15lzas1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 14500,
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
      "id": "model-fujitsu-aoug15lzah1",
      "slug": "fujitsu-aoug15lzah1",
      "name": "Fujitsu AOUG15LZAH1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUG15LZAH1",
      "normalizedModelNumber": "aoug15lzah1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 14500,
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
      "id": "model-fujitsu-aouh12kubs1",
      "slug": "fujitsu-aouh12kubs1",
      "name": "Fujitsu AOUH12KUBS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12KUBS1",
      "normalizedModelNumber": "aouh12kubs1",
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
      "id": "model-fujitsu-aouh09kuas1",
      "slug": "fujitsu-aouh09kuas1",
      "name": "Fujitsu AOUH09KUAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09KUAS1",
      "normalizedModelNumber": "aouh09kuas1",
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
      "id": "model-fujitsu-aouh24kzah1",
      "slug": "fujitsu-aouh24kzah1",
      "name": "Fujitsu AOUH24KZAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH24KZAH1",
      "normalizedModelNumber": "aouh24kzah1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-fujitsu-aouh12kpas1",
      "slug": "fujitsu-aouh12kpas1",
      "name": "Fujitsu AOUH12KPAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12KPAS1",
      "normalizedModelNumber": "aouh12kpas1",
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
      "id": "model-fujitsu-aouh12kuas1",
      "slug": "fujitsu-aouh12kuas1",
      "name": "Fujitsu AOUH12KUAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12KUAS1",
      "normalizedModelNumber": "aouh12kuas1",
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
      "id": "model-fujitsu-aouh09luas1",
      "slug": "fujitsu-aouh09luas1",
      "name": "Fujitsu AOUH09LUAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09LUAS1",
      "normalizedModelNumber": "aouh09luas1",
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
      "id": "model-fujitsu-aouh18luas1",
      "slug": "fujitsu-aouh18luas1",
      "name": "Fujitsu AOUH18LUAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH18LUAS1",
      "normalizedModelNumber": "aouh18luas1",
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
      "id": "model-fujitsu-aouh24kwah3",
      "slug": "fujitsu-aouh24kwah3",
      "name": "Fujitsu AOUH24KWAH3",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH24KWAH3",
      "normalizedModelNumber": "aouh24kwah3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-fujitsu-aouh24kuas1",
      "slug": "fujitsu-aouh24kuas1",
      "name": "Fujitsu AOUH24KUAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH24KUAS1",
      "normalizedModelNumber": "aouh24kuas1",
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
      "id": "model-fujitsu-aouk036msan7",
      "slug": "fujitsu-aouk036msan7",
      "name": "Fujitsu AOUK036MSAN7",
      "seriesId": "series-fujitsu-j-7",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUK036MSAN7",
      "normalizedModelNumber": "aouk036msan7",
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
      "id": "model-fujitsu-aouh24kwas3",
      "slug": "fujitsu-aouh24kwas3",
      "name": "Fujitsu AOUH24KWAS3",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH24KWAS3",
      "normalizedModelNumber": "aouh24kwas3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-fujitsu-aouh12luas1",
      "slug": "fujitsu-aouh12luas1",
      "name": "Fujitsu AOUH12LUAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12LUAS1",
      "normalizedModelNumber": "aouh12luas1",
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
      "id": "model-fujitsu-aouh30kuah1",
      "slug": "fujitsu-aouh30kuah1",
      "name": "Fujitsu AOUH30KUAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH30KUAH1",
      "normalizedModelNumber": "aouh30kuah1",
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
      "id": "model-fujitsu-aouh12lmas1",
      "slug": "fujitsu-aouh12lmas1",
      "name": "Fujitsu AOUH12LMAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12LMAS1",
      "normalizedModelNumber": "aouh12lmas1",
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
      "id": "model-fujitsu-aouh12lmbh1",
      "slug": "fujitsu-aouh12lmbh1",
      "name": "Fujitsu AOUH12LMBH1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12LMBH1",
      "normalizedModelNumber": "aouh12lmbh1",
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
      "id": "model-fujitsu-aouh12lmbs1",
      "slug": "fujitsu-aouh12lmbs1",
      "name": "Fujitsu AOUH12LMBS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12LMBS1",
      "normalizedModelNumber": "aouh12lmbs1",
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
      "id": "model-fujitsu-aouh12lmah1",
      "slug": "fujitsu-aouh12lmah1",
      "name": "Fujitsu AOUH12LMAH1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH12LMAH1",
      "normalizedModelNumber": "aouh12lmah1",
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
      "id": "model-fujitsu-aouh24luas1",
      "slug": "fujitsu-aouh24luas1",
      "name": "Fujitsu AOUH24LUAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH24LUAS1",
      "normalizedModelNumber": "aouh24luas1",
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
      "id": "model-fujitsu-aouk048msan7",
      "slug": "fujitsu-aouk048msan7",
      "name": "Fujitsu AOUK048MSAN7",
      "seriesId": "series-fujitsu-j-7",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUK048MSAN7",
      "normalizedModelNumber": "aouk048msan7",
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
      "id": "model-fujitsu-aou12rlffh",
      "slug": "fujitsu-aou12rlffh",
      "name": "Fujitsu AOU12RLFFH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU12RLFFH",
      "normalizedModelNumber": "aou12rlffh",
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
      "id": "model-fujitsu-aou12rlff",
      "slug": "fujitsu-aou12rlff",
      "name": "Fujitsu AOU12RLFF",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU12RLFF",
      "normalizedModelNumber": "aou12rlff",
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
      "id": "model-fujitsu-aouh24lmas1",
      "slug": "fujitsu-aouh24lmas1",
      "name": "Fujitsu AOUH24LMAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH24LMAS1",
      "normalizedModelNumber": "aouh24lmas1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-fujitsu-aouh30kuas1",
      "slug": "fujitsu-aouh30kuas1",
      "name": "Fujitsu AOUH30KUAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH30KUAS1",
      "normalizedModelNumber": "aouh30kuas1",
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
      "id": "model-fujitsu-aouk060msan7",
      "slug": "fujitsu-aouk060msan7",
      "name": "Fujitsu AOUK060MSAN7",
      "seriesId": "series-fujitsu-j-7",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUK060MSAN7",
      "normalizedModelNumber": "aouk060msan7",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 60000,
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
      "id": "model-fujitsu-aouk024ssan7",
      "slug": "fujitsu-aouk024ssan7",
      "name": "Fujitsu AOUK024SSAN7",
      "seriesId": "series-fujitsu-j-7s",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUK024SSAN7",
      "normalizedModelNumber": "aouk024ssan7",
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
      "id": "model-fujitsu-aou18rglx",
      "slug": "fujitsu-aou18rglx",
      "name": "Fujitsu AOU18RGLX",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU18RGLX",
      "normalizedModelNumber": "aou18rglx",
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
      "id": "model-fujitsu-aouh36kwah4",
      "slug": "fujitsu-aouh36kwah4",
      "name": "Fujitsu AOUH36KWAH4",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH36KWAH4",
      "normalizedModelNumber": "aouh36kwah4",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35200,
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
      "id": "model-fujitsu-aouh42kuah1",
      "slug": "fujitsu-aouh42kuah1",
      "name": "Fujitsu AOUH42KUAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH42KUAH1",
      "normalizedModelNumber": "aouh42kuah1",
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
      "id": "model-fujitsu-aouh36kwbh4",
      "slug": "fujitsu-aouh36kwbh4",
      "name": "Fujitsu AOUH36KWBH4",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH36KWBH4",
      "normalizedModelNumber": "aouh36kwbh4",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35200,
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
      "id": "model-fujitsu-aouh36kuah1",
      "slug": "fujitsu-aouh36kuah1",
      "name": "Fujitsu AOUH36KUAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH36KUAH1",
      "normalizedModelNumber": "aouh36kuah1",
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
      "id": "model-fujitsu-aouh30luah1",
      "slug": "fujitsu-aouh30luah1",
      "name": "Fujitsu AOUH30LUAH1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH30LUAH1",
      "normalizedModelNumber": "aouh30luah1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28600,
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
      "id": "model-fujitsu-aouh45kwas5",
      "slug": "fujitsu-aouh45kwas5",
      "name": "Fujitsu AOUH45KWAS5",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH45KWAS5",
      "normalizedModelNumber": "aouh45kwas5",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 43000,
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
      "id": "model-fujitsu-aouh45kwbs5",
      "slug": "fujitsu-aouh45kwbs5",
      "name": "Fujitsu AOUH45KWBS5",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH45KWBS5",
      "normalizedModelNumber": "aouh45kwbs5",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 43000,
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
      "id": "model-fujitsu-aouh36kwas4",
      "slug": "fujitsu-aouh36kwas4",
      "name": "Fujitsu AOUH36KWAS4",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH36KWAS4",
      "normalizedModelNumber": "aouh36kwas4",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34400,
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
      "id": "model-fujitsu-aouh30kpas1",
      "slug": "fujitsu-aouh30kpas1",
      "name": "Fujitsu AOUH30KPAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH30KPAS1",
      "normalizedModelNumber": "aouh30kpas1",
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
      "id": "model-fujitsu-aouh18kpas1",
      "slug": "fujitsu-aouh18kpas1",
      "name": "Fujitsu AOUH18KPAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH18KPAS1",
      "normalizedModelNumber": "aouh18kpas1",
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
      "id": "model-fujitsu-aouh18kwah2",
      "slug": "fujitsu-aouh18kwah2",
      "name": "Fujitsu AOUH18KWAH2",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH18KWAH2",
      "normalizedModelNumber": "aouh18kwah2",
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
      "id": "model-fujitsu-aouh18kwas2",
      "slug": "fujitsu-aouh18kwas2",
      "name": "Fujitsu AOUH18KWAS2",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH18KWAS2",
      "normalizedModelNumber": "aouh18kwas2",
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
      "id": "model-fujitsu-aouk036ssan7",
      "slug": "fujitsu-aouk036ssan7",
      "name": "Fujitsu AOUK036SSAN7",
      "seriesId": "series-fujitsu-j-7s",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUK036SSAN7",
      "normalizedModelNumber": "aouk036ssan7",
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
      "id": "model-fujitsu-aouh24kpas1",
      "slug": "fujitsu-aouh24kpas1",
      "name": "Fujitsu AOUH24KPAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH24KPAS1",
      "normalizedModelNumber": "aouh24kpas1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-fujitsu-aouh30luas1",
      "slug": "fujitsu-aouh30luas1",
      "name": "Fujitsu AOUH30LUAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH30LUAS1",
      "normalizedModelNumber": "aouh30luas1",
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
      "id": "model-fujitsu-aou18rlxfzh",
      "slug": "fujitsu-aou18rlxfzh",
      "name": "Fujitsu AOU18RLXFZH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU18RLXFZH",
      "normalizedModelNumber": "aou18rlxfzh",
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
      "id": "model-fujitsu-aouh48kuah1",
      "slug": "fujitsu-aouh48kuah1",
      "name": "Fujitsu AOUH48KUAH1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH48KUAH1",
      "normalizedModelNumber": "aouh48kuah1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46000,
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
      "id": "model-fujitsu-aouh36kuas1",
      "slug": "fujitsu-aouh36kuas1",
      "name": "Fujitsu AOUH36KUAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH36KUAS1",
      "normalizedModelNumber": "aouh36kuas1",
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
      "id": "model-fujitsu-aouh09leas1",
      "slug": "fujitsu-aouh09leas1",
      "name": "Fujitsu AOUH09LEAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09LEAS1",
      "normalizedModelNumber": "aouh09leas1",
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
      "id": "model-fujitsu-aouh18lmas1",
      "slug": "fujitsu-aouh18lmas1",
      "name": "Fujitsu AOUH18LMAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH18LMAS1",
      "normalizedModelNumber": "aouh18lmas1",
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
      "id": "model-fujitsu-aouh36kpas1",
      "slug": "fujitsu-aouh36kpas1",
      "name": "Fujitsu AOUH36KPAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH36KPAS1",
      "normalizedModelNumber": "aouh36kpas1",
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
      "id": "model-fujitsu-aou24rglx",
      "slug": "fujitsu-aou24rglx",
      "name": "Fujitsu AOU24RGLX",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU24RGLX",
      "normalizedModelNumber": "aou24rglx",
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
      "id": "model-fujitsu-aou36rlxfzh",
      "slug": "fujitsu-aou36rlxfzh",
      "name": "Fujitsu AOU36RLXFZH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU36RLXFZH",
      "normalizedModelNumber": "aou36rlxfzh",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35200,
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
      "id": "model-fujitsu-aou15rlffh",
      "slug": "fujitsu-aou15rlffh",
      "name": "Fujitsu AOU15RLFFH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU15RLFFH",
      "normalizedModelNumber": "aou15rlffh",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 14200,
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
      "id": "model-fujitsu-aou15rlff",
      "slug": "fujitsu-aou15rlff",
      "name": "Fujitsu AOU15RLFF",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU15RLFF",
      "normalizedModelNumber": "aou15rlff",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 14200,
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
      "id": "model-fujitsu-aouk048ssan7",
      "slug": "fujitsu-aouk048ssan7",
      "name": "Fujitsu AOUK048SSAN7",
      "seriesId": "series-fujitsu-j-7s",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUK048SSAN7",
      "normalizedModelNumber": "aouk048ssan7",
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
      "id": "model-fujitsu-aouh09lpas1",
      "slug": "fujitsu-aouh09lpas1",
      "name": "Fujitsu AOUH09LPAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH09LPAS1",
      "normalizedModelNumber": "aouh09lpas1",
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
      "id": "model-fujitsu-aou24rlxfzh",
      "slug": "fujitsu-aou24rlxfzh",
      "name": "Fujitsu AOU24RLXFZH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU24RLXFZH",
      "normalizedModelNumber": "aou24rlxfzh",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-fujitsu-aou18rlxfwh",
      "slug": "fujitsu-aou18rlxfwh",
      "name": "Fujitsu AOU18RLXFWH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU18RLXFWH",
      "normalizedModelNumber": "aou18rlxfwh",
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
      "id": "model-fujitsu-aouh18knas1",
      "slug": "fujitsu-aouh18knas1",
      "name": "Fujitsu AOUH18KNAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH18KNAS1",
      "normalizedModelNumber": "aouh18knas1",
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
      "id": "model-fujitsu-aou24rlxfwh",
      "slug": "fujitsu-aou24rlxfwh",
      "name": "Fujitsu AOU24RLXFWH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU24RLXFWH",
      "normalizedModelNumber": "aou24rlxfwh",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-fujitsu-aouh42kuas1",
      "slug": "fujitsu-aouh42kuas1",
      "name": "Fujitsu AOUH42KUAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH42KUAS1",
      "normalizedModelNumber": "aouh42kuas1",
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
      "id": "model-fujitsu-aou30rlxeh",
      "slug": "fujitsu-aou30rlxeh",
      "name": "Fujitsu AOU30RLXEH",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU30RLXEH",
      "normalizedModelNumber": "aou30rlxeh",
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
      "id": "model-fujitsu-aou24rlxfz",
      "slug": "fujitsu-aou24rlxfz",
      "name": "Fujitsu AOU24RLXFZ",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU24RLXFZ",
      "normalizedModelNumber": "aou24rlxfz",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-fujitsu-aouh48kuas1",
      "slug": "fujitsu-aouh48kuas1",
      "name": "Fujitsu AOUH48KUAS1",
      "seriesId": "series-fujitsu-airstage-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUH48KUAS1",
      "normalizedModelNumber": "aouh48kuas1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46000,
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
      "id": "model-fujitsu-aou18rlxfz",
      "slug": "fujitsu-aou18rlxfz",
      "name": "Fujitsu AOU18RLXFZ",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOU18RLXFZ",
      "normalizedModelNumber": "aou18rlxfz",
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
      "id": "model-fujitsu-aoug36lmas1",
      "slug": "fujitsu-aoug36lmas1",
      "name": "Fujitsu AOUG36LMAS1",
      "seriesId": "series-fujitsu-h-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "AOUG36LMAS1",
      "normalizedModelNumber": "aoug36lmas1",
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
      "id": "model-fujitsu-fop1518tjazna",
      "slug": "fujitsu-fop1518tjazna",
      "name": "Fujitsu FOP1518TJAZNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1518TJAZNA",
      "normalizedModelNumber": "fop1518tjazna",
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
      "id": "model-fujitsu-fop1530tjazna",
      "slug": "fujitsu-fop1530tjazna",
      "name": "Fujitsu FOP1530TJAZNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1530TJAZNA",
      "normalizedModelNumber": "fop1530tjazna",
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
      "id": "model-fujitsu-fop1524tjazna",
      "slug": "fujitsu-fop1524tjazna",
      "name": "Fujitsu FOP1524TJAZNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1524TJAZNA",
      "normalizedModelNumber": "fop1524tjazna",
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
      "id": "model-fujitsu-wp15az60aj2n",
      "slug": "fujitsu-wp15az60aj2n",
      "name": "Fujitsu WP15AZ60AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-fop1560tjazna",
      "slug": "fujitsu-fop1560tjazna",
      "name": "Fujitsu FOP1560TJAZNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1560TJAZNA",
      "normalizedModelNumber": "fop1560tjazna",
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
      "id": "model-fujitsu-rdfxyc036ajv",
      "slug": "fujitsu-rdfxyc036ajv",
      "name": "Fujitsu RDFXYC036AJV",
      "seriesId": "series-fujitsu-rdfxyc",
      "brandId": "brand-fujitsu",
      "modelNumber": "RDFXYC036AJV",
      "normalizedModelNumber": "rdfxyc036ajv",
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
      "id": "model-fujitsu-rdfxyc048ajv",
      "slug": "fujitsu-rdfxyc048ajv",
      "name": "Fujitsu RDFXYC048AJV",
      "seriesId": "series-fujitsu-rdfxyc",
      "brandId": "brand-fujitsu",
      "modelNumber": "RDFXYC048AJV",
      "normalizedModelNumber": "rdfxyc048ajv",
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
      "id": "model-fujitsu-rdfxyc060ajv",
      "slug": "fujitsu-rdfxyc060ajv",
      "name": "Fujitsu RDFXYC060AJV",
      "seriesId": "series-fujitsu-rdfxyc",
      "brandId": "brand-fujitsu",
      "modelNumber": "RDFXYC060AJV",
      "normalizedModelNumber": "rdfxyc060ajv",
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
      "id": "model-fujitsu-rhpxyc024ajt",
      "slug": "fujitsu-rhpxyc024ajt",
      "name": "Fujitsu RHPXYC024AJT",
      "seriesId": "series-fujitsu-rhpxyc",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-fop1536tjazna",
      "slug": "fujitsu-fop1536tjazna",
      "name": "Fujitsu FOP1536TJAZNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1536TJAZNA",
      "normalizedModelNumber": "fop1536tjazna",
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
      "id": "model-fujitsu-wp14ay60aj2n",
      "slug": "fujitsu-wp14ay60aj2n",
      "name": "Fujitsu WP14AY60AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "WP14AY60AJ2N",
      "normalizedModelNumber": "wp14ay60aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55500,
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
      "id": "model-fujitsu-wp15az18aj2n",
      "slug": "fujitsu-wp15az18aj2n",
      "name": "Fujitsu WP15AZ18AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-wp14ay42aj2n",
      "slug": "fujitsu-wp14ay42aj2n",
      "name": "Fujitsu WP14AY42AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-fop1548tjazna",
      "slug": "fujitsu-fop1548tjazna",
      "name": "Fujitsu FOP1548TJAZNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1548TJAZNA",
      "normalizedModelNumber": "fop1548tjazna",
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
      "id": "model-fujitsu-fop1542tjazna",
      "slug": "fujitsu-fop1542tjazna",
      "name": "Fujitsu FOP1542TJAZNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1542TJAZNA",
      "normalizedModelNumber": "fop1542tjazna",
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
      "id": "model-fujitsu-wp15az36aj2n",
      "slug": "fujitsu-wp15az36aj2n",
      "name": "Fujitsu WP15AZ36AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-wp15az42aj2n",
      "slug": "fujitsu-wp15az42aj2n",
      "name": "Fujitsu WP15AZ42AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-wp15az48aj2n",
      "slug": "fujitsu-wp15az48aj2n",
      "name": "Fujitsu WP15AZ48AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-rdfxyc024ajv",
      "slug": "fujitsu-rdfxyc024ajv",
      "name": "Fujitsu RDFXYC024AJV",
      "seriesId": "series-fujitsu-rdfxyc",
      "brandId": "brand-fujitsu",
      "modelNumber": "RDFXYC024AJV",
      "normalizedModelNumber": "rdfxyc024ajv",
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
      "id": "model-fujitsu-wp15az24aj2n",
      "slug": "fujitsu-wp15az24aj2n",
      "name": "Fujitsu WP15AZ24AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-wp15az30aj2n",
      "slug": "fujitsu-wp15az30aj2n",
      "name": "Fujitsu WP15AZ30AJ2N",
      "seriesId": "series-fujitsu-w-series",
      "brandId": "brand-fujitsu",
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
      "id": "model-fujitsu-fop1442tjayna",
      "slug": "fujitsu-fop1442tjayna",
      "name": "Fujitsu FOP1442TJAYNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1442TJAYNA",
      "normalizedModelNumber": "fop1442tjayna",
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
      "id": "model-fujitsu-fop1460tjayna",
      "slug": "fujitsu-fop1460tjayna",
      "name": "Fujitsu FOP1460TJAYNA",
      "seriesId": "series-fujitsu-f-series",
      "brandId": "brand-fujitsu",
      "modelNumber": "FOP1460TJAYNA",
      "normalizedModelNumber": "fop1460tjayna",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55500,
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
      "id": "ou-fujitsu-aouh09ktap1",
      "modelNumber": "AOUH09KTAP1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aoug09lzas1",
      "modelNumber": "AOUG09LZAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aoug09lzah1",
      "modelNumber": "AOUG09LZAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh09kzah1",
      "modelNumber": "AOUH09KZAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh12ktap1",
      "modelNumber": "AOUH12KTAP1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh12kzah1",
      "modelNumber": "AOUH12KZAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh09kmas1",
      "modelNumber": "AOUH09KMAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aoug12lzah1",
      "modelNumber": "AOUG12LZAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aoug12lzas1",
      "modelNumber": "AOUG12LZAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh15ktap1",
      "modelNumber": "AOUH15KTAP1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh15kzah1",
      "modelNumber": "AOUH15KZAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh12kmas1",
      "modelNumber": "AOUH12KMAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh09lmas1",
      "modelNumber": "AOUH09LMAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh09lmah1",
      "modelNumber": "AOUH09LMAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh18kuas1",
      "modelNumber": "AOUH18KUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh09kpas1",
      "modelNumber": "AOUH09KPAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh09kubs1",
      "modelNumber": "AOUH09KUBS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aou9rlff",
      "modelNumber": "AOU9RLFF",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou9rlffh",
      "modelNumber": "AOU9RLFFH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh18kzah1",
      "modelNumber": "AOUH18KZAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aoug15lzas1",
      "modelNumber": "AOUG15LZAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aoug15lzah1",
      "modelNumber": "AOUG15LZAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh12kubs1",
      "modelNumber": "AOUH12KUBS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh09kuas1",
      "modelNumber": "AOUH09KUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh24kzah1",
      "modelNumber": "AOUH24KZAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh12kpas1",
      "modelNumber": "AOUH12KPAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh12kuas1",
      "modelNumber": "AOUH12KUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh09luas1",
      "modelNumber": "AOUH09LUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh18luas1",
      "modelNumber": "AOUH18LUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh24kwah3",
      "modelNumber": "AOUH24KWAH3",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh24kuas1",
      "modelNumber": "AOUH24KUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouk036msan7",
      "modelNumber": "AOUK036MSAN7",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh24kwas3",
      "modelNumber": "AOUH24KWAS3",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh12luas1",
      "modelNumber": "AOUH12LUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh30kuah1",
      "modelNumber": "AOUH30KUAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh12lmas1",
      "modelNumber": "AOUH12LMAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh12lmbh1",
      "modelNumber": "AOUH12LMBH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh12lmbs1",
      "modelNumber": "AOUH12LMBS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh12lmah1",
      "modelNumber": "AOUH12LMAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh24luas1",
      "modelNumber": "AOUH24LUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouk048msan7",
      "modelNumber": "AOUK048MSAN7",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aou12rlffh",
      "modelNumber": "AOU12RLFFH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou12rlff",
      "modelNumber": "AOU12RLFF",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh24lmas1",
      "modelNumber": "AOUH24LMAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh30kuas1",
      "modelNumber": "AOUH30KUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouk060msan7",
      "modelNumber": "AOUK060MSAN7",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouk024ssan7",
      "modelNumber": "AOUK024SSAN7",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aou18rglx",
      "modelNumber": "AOU18RGLX",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh36kwah4",
      "modelNumber": "AOUH36KWAH4",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh42kuah1",
      "modelNumber": "AOUH42KUAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh36kwbh4",
      "modelNumber": "AOUH36KWBH4",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh36kuah1",
      "modelNumber": "AOUH36KUAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh30luah1",
      "modelNumber": "AOUH30LUAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh45kwas5",
      "modelNumber": "AOUH45KWAS5",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh45kwbs5",
      "modelNumber": "AOUH45KWBS5",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh36kwas4",
      "modelNumber": "AOUH36KWAS4",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh30kpas1",
      "modelNumber": "AOUH30KPAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh18kpas1",
      "modelNumber": "AOUH18KPAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh18kwah2",
      "modelNumber": "AOUH18KWAH2",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh18kwas2",
      "modelNumber": "AOUH18KWAS2",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouk036ssan7",
      "modelNumber": "AOUK036SSAN7",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh24kpas1",
      "modelNumber": "AOUH24KPAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh30luas1",
      "modelNumber": "AOUH30LUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou18rlxfzh",
      "modelNumber": "AOU18RLXFZH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh48kuah1",
      "modelNumber": "AOUH48KUAH1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh36kuas1",
      "modelNumber": "AOUH36KUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh09leas1",
      "modelNumber": "AOUH09LEAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh18lmas1",
      "modelNumber": "AOUH18LMAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh36kpas1",
      "modelNumber": "AOUH36KPAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aou24rglx",
      "modelNumber": "AOU24RGLX",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou36rlxfzh",
      "modelNumber": "AOU36RLXFZH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou15rlffh",
      "modelNumber": "AOU15RLFFH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou15rlff",
      "modelNumber": "AOU15RLFF",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouk048ssan7",
      "modelNumber": "AOUK048SSAN7",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aouh09lpas1",
      "modelNumber": "AOUH09LPAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou24rlxfzh",
      "modelNumber": "AOU24RLXFZH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou18rlxfwh",
      "modelNumber": "AOU18RLXFWH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh18knas1",
      "modelNumber": "AOUH18KNAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aou24rlxfwh",
      "modelNumber": "AOU24RLXFWH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh42kuas1",
      "modelNumber": "AOUH42KUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aou30rlxeh",
      "modelNumber": "AOU30RLXEH",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aou24rlxfz",
      "modelNumber": "AOU24RLXFZ",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aouh48kuas1",
      "modelNumber": "AOUH48KUAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-fujitsu-aou18rlxfz",
      "modelNumber": "AOU18RLXFZ",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-aoug36lmas1",
      "modelNumber": "AOUG36LMAS1",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-fop1518tjazna",
      "modelNumber": "FOP1518TJAZNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-fop1530tjazna",
      "modelNumber": "FOP1530TJAZNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-fop1524tjazna",
      "modelNumber": "FOP1524TJAZNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-wp15az60aj2n",
      "modelNumber": "WP15AZ60AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-fop1560tjazna",
      "modelNumber": "FOP1560TJAZNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-rdfxyc036ajv",
      "modelNumber": "RDFXYC036AJV",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-fujitsu-rdfxyc048ajv",
      "modelNumber": "RDFXYC048AJV",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-fujitsu-rdfxyc060ajv",
      "modelNumber": "RDFXYC060AJV",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-fujitsu-rhpxyc024ajt",
      "modelNumber": "RHPXYC024AJT",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-fujitsu-fop1536tjazna",
      "modelNumber": "FOP1536TJAZNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-wp14ay60aj2n",
      "modelNumber": "WP14AY60AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-fujitsu-wp15az18aj2n",
      "modelNumber": "WP15AZ18AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-wp14ay42aj2n",
      "modelNumber": "WP14AY42AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-fujitsu-fop1548tjazna",
      "modelNumber": "FOP1548TJAZNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-fop1542tjazna",
      "modelNumber": "FOP1542TJAZNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-wp15az36aj2n",
      "modelNumber": "WP15AZ36AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-wp15az42aj2n",
      "modelNumber": "WP15AZ42AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-wp15az48aj2n",
      "modelNumber": "WP15AZ48AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-rdfxyc024ajv",
      "modelNumber": "RDFXYC024AJV",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-fujitsu-wp15az24aj2n",
      "modelNumber": "WP15AZ24AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-wp15az30aj2n",
      "modelNumber": "WP15AZ30AJ2N",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujitsu-fop1442tjayna",
      "modelNumber": "FOP1442TJAYNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-fujitsu-fop1460tjayna",
      "modelNumber": "FOP1460TJAYNA",
      "brandId": "brand-fujitsu",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-asuh09ktab",
      "modelNumber": "ASUH09KTAB",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09ktas",
      "modelNumber": "ASUH09KTAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09ktbb",
      "modelNumber": "ASUH09KTBB",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09ktbs",
      "modelNumber": "ASUH09KTBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asug09lzas",
      "modelNumber": "ASUG09LZAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asug09lzbs",
      "modelNumber": "ASUG09LZBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09kzas",
      "modelNumber": "ASUH09KZAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09kzbs",
      "modelNumber": "ASUH09KZBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12ktbb",
      "modelNumber": "ASUH12KTBB",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12ktbs",
      "modelNumber": "ASUH12KTBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12ktab",
      "modelNumber": "ASUH12KTAB",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12ktas",
      "modelNumber": "ASUH12KTAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12kzas",
      "modelNumber": "ASUH12KZAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12kzbs",
      "modelNumber": "ASUH12KZBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09kmbs",
      "modelNumber": "ASUH09KMBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09kmas",
      "modelNumber": "ASUH09KMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asug12lzas",
      "modelNumber": "ASUG12LZAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asug12lzbs",
      "modelNumber": "ASUG12LZBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh15ktas",
      "modelNumber": "ASUH15KTAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh15ktbb",
      "modelNumber": "ASUH15KTBB",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh15ktbs",
      "modelNumber": "ASUH15KTBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh15ktab",
      "modelNumber": "ASUH15KTAB",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh15kzbs",
      "modelNumber": "ASUH15KZBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh15kzas",
      "modelNumber": "ASUH15KZAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12kmas",
      "modelNumber": "ASUH12KMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12kmbs",
      "modelNumber": "ASUH12KMBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09lmas",
      "modelNumber": "ASUH09LMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh18kuas",
      "modelNumber": "AUUH18KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09kpbs",
      "modelNumber": "ASUH09KPBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09kpas",
      "modelNumber": "ASUH09KPAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aguh09kuas",
      "modelNumber": "AGUH09KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-agu9rlf",
      "modelNumber": "AGU9RLF",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh18kzas",
      "modelNumber": "ASUH18KZAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh18kzbs",
      "modelNumber": "ASUH18KZBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asug15lzbs",
      "modelNumber": "ASUG15LZBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asug15lzas",
      "modelNumber": "ASUG15LZAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aguh12kuas",
      "modelNumber": "AGUH12KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-acuh09kuas",
      "modelNumber": "ACUH09KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh24kzas",
      "modelNumber": "ASUH24KZAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aguh15kuas",
      "modelNumber": "AGUH15KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12kpbs",
      "modelNumber": "ASUH12KPBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh24kzbs",
      "modelNumber": "ASUH24KZBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12kpas",
      "modelNumber": "ASUH12KPAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-acuh12kuas",
      "modelNumber": "ACUH12KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-acuh09luas1",
      "modelNumber": "ACUH09LUAS1",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh18luas",
      "modelNumber": "AUUH18LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44777",
      "modelNumber": "IU-44777",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-abuh18kuas",
      "modelNumber": "ABUH18KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh24kuas",
      "modelNumber": "AUUH24KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44826",
      "modelNumber": "IU-44826",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44778",
      "modelNumber": "IU-44778",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-acuh12luas1",
      "modelNumber": "ACUH12LUAS1",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh30kuas",
      "modelNumber": "AUUH30KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh12lmas",
      "modelNumber": "ASUH12LMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh24luas",
      "modelNumber": "AUUH24LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44828",
      "modelNumber": "IU-44828",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-agu12rlf",
      "modelNumber": "AGU12RLF",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-abuh18luas",
      "modelNumber": "ABUH18LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh24lmas",
      "modelNumber": "ASUH24LMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44830",
      "modelNumber": "IU-44830",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44825",
      "modelNumber": "IU-44825",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auu18rglx",
      "modelNumber": "AUU18RGLX",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44810",
      "modelNumber": "IU-44810",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh42kuas",
      "modelNumber": "AUUH42KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44812",
      "modelNumber": "IU-44812",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh36kuas",
      "modelNumber": "AUUH36KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh30luas",
      "modelNumber": "AUUH30LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44817",
      "modelNumber": "IU-44817",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44818",
      "modelNumber": "IU-44818",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44811",
      "modelNumber": "IU-44811",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh30kpbs",
      "modelNumber": "ASUH30KPBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh18kpbs",
      "modelNumber": "ASUH18KPBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44762",
      "modelNumber": "IU-44762",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh30kpas",
      "modelNumber": "ASUH30KPAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh18kpas",
      "modelNumber": "ASUH18KPAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44763",
      "modelNumber": "IU-44763",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-acuh18kuas",
      "modelNumber": "ACUH18KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44827",
      "modelNumber": "IU-44827",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-abuh24kuas",
      "modelNumber": "ABUH24KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh24kpas",
      "modelNumber": "ASUH24KPAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-acuh18luas1",
      "modelNumber": "ACUH18LUAS1",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh24kpbs",
      "modelNumber": "ASUH24KPBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44683",
      "modelNumber": "IU-44683",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-abuh24luas",
      "modelNumber": "ABUH24LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auuh48kuas",
      "modelNumber": "AUUH48KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-abuh36kuas",
      "modelNumber": "ABUH36KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh18lmas",
      "modelNumber": "ASUH18LMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh36kpas",
      "modelNumber": "ASUH36KPAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh36kpbs",
      "modelNumber": "ASUH36KPBS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-auu24rglx",
      "modelNumber": "AUU24RGLX",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-abuh30kuas",
      "modelNumber": "ABUH30KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44690",
      "modelNumber": "IU-44690",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-agu15rlf",
      "modelNumber": "AGU15RLF",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44829",
      "modelNumber": "IU-44829",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh09lpas",
      "modelNumber": "ASUH09LPAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44688",
      "modelNumber": "IU-44688",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asu18rlf",
      "modelNumber": "ASU18RLF",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asuh18knas",
      "modelNumber": "ASUH18KNAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amuh12kuas",
      "modelNumber": "AMUH12KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asu24rlf",
      "modelNumber": "ASU24RLF",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh42kuas",
      "modelNumber": "ARUH42KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amuh18kuas",
      "modelNumber": "AMUH18KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh12kuas",
      "modelNumber": "ARUH12KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh12luas",
      "modelNumber": "ARUH12LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amuh48kuas",
      "modelNumber": "AMUH48KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh48kuas",
      "modelNumber": "ARUH48KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amuh30kuas",
      "modelNumber": "AMUH30KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amug24lmas",
      "modelNumber": "AMUG24LMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amug30lmas",
      "modelNumber": "AMUG30LMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-asu30rle",
      "modelNumber": "ASU30RLE",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh18luas",
      "modelNumber": "ARUH18LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh18kuas",
      "modelNumber": "ARUH18KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44687",
      "modelNumber": "IU-44687",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh24luas",
      "modelNumber": "ARUH24LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh24kuas",
      "modelNumber": "ARUH24KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh30kuas",
      "modelNumber": "ARUH30KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh30luas",
      "modelNumber": "ARUH30LUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amuh36kuas",
      "modelNumber": "AMUH36KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44682",
      "modelNumber": "IU-44682",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aruh36kuas",
      "modelNumber": "ARUH36KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amuh24kuas",
      "modelNumber": "AMUH24KUAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-amug36lmas",
      "modelNumber": "AMUG36LMAS",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-aru18rglx",
      "modelNumber": "ARU18RGLX",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-fhrnvt2417sztna",
      "modelNumber": "FHRNVT2417S*ZTNA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhrnvt3617sztna",
      "modelNumber": "FHRNVT3617S*ZTNA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-aru24rglx",
      "modelNumber": "ARU24RGLX",
      "brandId": "brand-fujitsu",
      "type": "wall-single"
    },
    {
      "id": "iu-fhrntt6024sztna",
      "modelNumber": "FHRNTT6024S*ZTNA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-21029",
      "modelNumber": "IU-21029",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-21030",
      "modelNumber": "IU-21030",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-21031",
      "modelNumber": "IU-21031",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-21032",
      "modelNumber": "IU-21032",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhrntt2417sztna",
      "modelNumber": "FHRNTT2417S*ZTNA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhrntt3617sztna",
      "modelNumber": "FHRNTT3617S*ZTNA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fcca6021syta",
      "modelNumber": "FCCA6021SYTA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fccn2417szta",
      "modelNumber": "FCCN2417SZTA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fccn4824syta",
      "modelNumber": "FCCN4824SYTA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhrntt4821sztna",
      "modelNumber": "FHRNTT4821S*ZTNA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhrnvt4821sztna",
      "modelNumber": "FHRNVT4821S*ZTNA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fhrnvt6024sztna",
      "modelNumber": "FHRNVT6024S*ZTNA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-21028",
      "modelNumber": "IU-21028",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    },
    {
      "id": "iu-fccn3617szta",
      "modelNumber": "FCCN3617SZTA",
      "brandId": "brand-fujitsu",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-fujitsu-aouh09ktap1-asuh09ktab",
      "slug": "fujitsu-aouh09ktap1-asuh09ktab",
      "modelId": "model-fujitsu-aouh09ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh09ktap1",
      "indoorUnitId": "iu-asuh09ktab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.5,
      "hspf2": 14.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09ktap1-asuh09ktas",
      "slug": "fujitsu-aouh09ktap1-asuh09ktas",
      "modelId": "model-fujitsu-aouh09ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh09ktap1",
      "indoorUnitId": "iu-asuh09ktas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.5,
      "hspf2": 14.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09ktap1-asuh09ktbb",
      "slug": "fujitsu-aouh09ktap1-asuh09ktbb",
      "modelId": "model-fujitsu-aouh09ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh09ktap1",
      "indoorUnitId": "iu-asuh09ktbb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.5,
      "hspf2": 14.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09ktap1-asuh09ktbs",
      "slug": "fujitsu-aouh09ktap1-asuh09ktbs",
      "modelId": "model-fujitsu-aouh09ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh09ktap1",
      "indoorUnitId": "iu-asuh09ktbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.5,
      "hspf2": 14.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug09lzas1-asug09lzas",
      "slug": "fujitsu-aoug09lzas1-asug09lzas",
      "modelId": "model-fujitsu-aoug09lzas1",
      "outdoorUnitId": "ou-fujitsu-aoug09lzas1",
      "indoorUnitId": "iu-asug09lzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.1,
      "hspf2": 13.4,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug09lzah1-asug09lzas",
      "slug": "fujitsu-aoug09lzah1-asug09lzas",
      "modelId": "model-fujitsu-aoug09lzah1",
      "outdoorUnitId": "ou-fujitsu-aoug09lzah1",
      "indoorUnitId": "iu-asug09lzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.1,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug09lzah1-asug09lzbs",
      "slug": "fujitsu-aoug09lzah1-asug09lzbs",
      "modelId": "model-fujitsu-aoug09lzah1",
      "outdoorUnitId": "ou-fujitsu-aoug09lzah1",
      "indoorUnitId": "iu-asug09lzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.1,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kzah1-asuh09kzas",
      "slug": "fujitsu-aouh09kzah1-asuh09kzas",
      "modelId": "model-fujitsu-aouh09kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh09kzah1",
      "indoorUnitId": "iu-asuh09kzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.1,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kzah1-asuh09kzbs",
      "slug": "fujitsu-aouh09kzah1-asuh09kzbs",
      "modelId": "model-fujitsu-aouh09kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh09kzah1",
      "indoorUnitId": "iu-asuh09kzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.1,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug09lzas1-asug09lzbs",
      "slug": "fujitsu-aoug09lzas1-asug09lzbs",
      "modelId": "model-fujitsu-aoug09lzas1",
      "outdoorUnitId": "ou-fujitsu-aoug09lzas1",
      "indoorUnitId": "iu-asug09lzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.1,
      "hspf2": 13.4,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12ktap1-asuh12ktbb",
      "slug": "fujitsu-aouh12ktap1-asuh12ktbb",
      "modelId": "model-fujitsu-aouh12ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh12ktap1",
      "indoorUnitId": "iu-asuh12ktbb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 31.5,
      "hspf2": 13.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12ktap1-asuh12ktbs",
      "slug": "fujitsu-aouh12ktap1-asuh12ktbs",
      "modelId": "model-fujitsu-aouh12ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh12ktap1",
      "indoorUnitId": "iu-asuh12ktbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 31.5,
      "hspf2": 13.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12ktap1-asuh12ktab",
      "slug": "fujitsu-aouh12ktap1-asuh12ktab",
      "modelId": "model-fujitsu-aouh12ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh12ktap1",
      "indoorUnitId": "iu-asuh12ktab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 31.5,
      "hspf2": 13.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12ktap1-asuh12ktas",
      "slug": "fujitsu-aouh12ktap1-asuh12ktas",
      "modelId": "model-fujitsu-aouh12ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh12ktap1",
      "indoorUnitId": "iu-asuh12ktas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 31.5,
      "hspf2": 13.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kzah1-asuh12kzas",
      "slug": "fujitsu-aouh12kzah1-asuh12kzas",
      "modelId": "model-fujitsu-aouh12kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh12kzah1",
      "indoorUnitId": "iu-asuh12kzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 30.5,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kzah1-asuh12kzbs",
      "slug": "fujitsu-aouh12kzah1-asuh12kzbs",
      "modelId": "model-fujitsu-aouh12kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh12kzah1",
      "indoorUnitId": "iu-asuh12kzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 30.5,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kmas1-asuh09kmbs",
      "slug": "fujitsu-aouh09kmas1-asuh09kmbs",
      "modelId": "model-fujitsu-aouh09kmas1",
      "outdoorUnitId": "ou-fujitsu-aouh09kmas1",
      "indoorUnitId": "iu-asuh09kmbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 30.0,
      "hspf2": 12.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kmas1-asuh09kmas",
      "slug": "fujitsu-aouh09kmas1-asuh09kmas",
      "modelId": "model-fujitsu-aouh09kmas1",
      "outdoorUnitId": "ou-fujitsu-aouh09kmas1",
      "indoorUnitId": "iu-asuh09kmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 30.0,
      "hspf2": 12.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug12lzah1-asug12lzas",
      "slug": "fujitsu-aoug12lzah1-asug12lzas",
      "modelId": "model-fujitsu-aoug12lzah1",
      "outdoorUnitId": "ou-fujitsu-aoug12lzah1",
      "indoorUnitId": "iu-asug12lzas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug12lzah1-asug12lzbs",
      "slug": "fujitsu-aoug12lzah1-asug12lzbs",
      "modelId": "model-fujitsu-aoug12lzah1",
      "outdoorUnitId": "ou-fujitsu-aoug12lzah1",
      "indoorUnitId": "iu-asug12lzbs",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug12lzas1-asug12lzas",
      "slug": "fujitsu-aoug12lzas1-asug12lzas",
      "modelId": "model-fujitsu-aoug12lzas1",
      "outdoorUnitId": "ou-fujitsu-aoug12lzas1",
      "indoorUnitId": "iu-asug12lzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.4,
      "hspf2": 12.9,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug12lzas1-asug12lzbs",
      "slug": "fujitsu-aoug12lzas1-asug12lzbs",
      "modelId": "model-fujitsu-aoug12lzas1",
      "outdoorUnitId": "ou-fujitsu-aoug12lzas1",
      "indoorUnitId": "iu-asug12lzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.4,
      "hspf2": 12.9,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh15ktap1-asuh15ktas",
      "slug": "fujitsu-aouh15ktap1-asuh15ktas",
      "modelId": "model-fujitsu-aouh15ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh15ktap1",
      "indoorUnitId": "iu-asuh15ktas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.7,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh15ktap1-asuh15ktbb",
      "slug": "fujitsu-aouh15ktap1-asuh15ktbb",
      "modelId": "model-fujitsu-aouh15ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh15ktap1",
      "indoorUnitId": "iu-asuh15ktbb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.7,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh15ktap1-asuh15ktbs",
      "slug": "fujitsu-aouh15ktap1-asuh15ktbs",
      "modelId": "model-fujitsu-aouh15ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh15ktap1",
      "indoorUnitId": "iu-asuh15ktbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.7,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh15ktap1-asuh15ktab",
      "slug": "fujitsu-aouh15ktap1-asuh15ktab",
      "modelId": "model-fujitsu-aouh15ktap1",
      "outdoorUnitId": "ou-fujitsu-aouh15ktap1",
      "indoorUnitId": "iu-asuh15ktab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.7,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh15kzah1-asuh15kzbs",
      "slug": "fujitsu-aouh15kzah1-asuh15kzbs",
      "modelId": "model-fujitsu-aouh15kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh15kzah1",
      "indoorUnitId": "iu-asuh15kzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh15kzah1-asuh15kzas",
      "slug": "fujitsu-aouh15kzah1-asuh15kzas",
      "modelId": "model-fujitsu-aouh15kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh15kzah1",
      "indoorUnitId": "iu-asuh15kzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kmas1-asuh12kmas",
      "slug": "fujitsu-aouh12kmas1-asuh12kmas",
      "modelId": "model-fujitsu-aouh12kmas1",
      "outdoorUnitId": "ou-fujitsu-aouh12kmas1",
      "indoorUnitId": "iu-asuh12kmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kmas1-asuh12kmbs",
      "slug": "fujitsu-aouh12kmas1-asuh12kmbs",
      "modelId": "model-fujitsu-aouh12kmas1",
      "outdoorUnitId": "ou-fujitsu-aouh12kmas1",
      "indoorUnitId": "iu-asuh12kmbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09lmas1-asuh09lmas",
      "slug": "fujitsu-aouh09lmas1-asuh09lmas",
      "modelId": "model-fujitsu-aouh09lmas1",
      "outdoorUnitId": "ou-fujitsu-aouh09lmas1",
      "indoorUnitId": "iu-asuh09lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 12.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09lmah1-asuh09lmas",
      "slug": "fujitsu-aouh09lmah1-asuh09lmas",
      "modelId": "model-fujitsu-aouh09lmah1",
      "outdoorUnitId": "ou-fujitsu-aouh09lmah1",
      "indoorUnitId": "iu-asuh09lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kuas1-auuh18kuas",
      "slug": "fujitsu-aouh18kuas1-auuh18kuas",
      "modelId": "model-fujitsu-aouh18kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh18kuas1",
      "indoorUnitId": "iu-auuh18kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.3,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kpas1-asuh09kpbs",
      "slug": "fujitsu-aouh09kpas1-asuh09kpbs",
      "modelId": "model-fujitsu-aouh09kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh09kpas1",
      "indoorUnitId": "iu-asuh09kpbs",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kpas1-asuh09kpas",
      "slug": "fujitsu-aouh09kpas1-asuh09kpas",
      "modelId": "model-fujitsu-aouh09kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh09kpas1",
      "indoorUnitId": "iu-asuh09kpas",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kubs1-aguh09kuas",
      "slug": "fujitsu-aouh09kubs1-aguh09kuas",
      "modelId": "model-fujitsu-aouh09kubs1",
      "outdoorUnitId": "ou-fujitsu-aouh09kubs1",
      "indoorUnitId": "iu-aguh09kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou9rlff-agu9rlf",
      "slug": "fujitsu-aou9rlff-agu9rlf",
      "modelId": "model-fujitsu-aou9rlff",
      "outdoorUnitId": "ou-fujitsu-aou9rlff",
      "indoorUnitId": "iu-agu9rlf",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou9rlffh-agu9rlf",
      "slug": "fujitsu-aou9rlffh-agu9rlf",
      "modelId": "model-fujitsu-aou9rlffh",
      "outdoorUnitId": "ou-fujitsu-aou9rlffh",
      "indoorUnitId": "iu-agu9rlf",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kzah1-asuh18kzas",
      "slug": "fujitsu-aouh18kzah1-asuh18kzas",
      "modelId": "model-fujitsu-aouh18kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh18kzah1",
      "indoorUnitId": "iu-asuh18kzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kzah1-asuh18kzbs",
      "slug": "fujitsu-aouh18kzah1-asuh18kzbs",
      "modelId": "model-fujitsu-aouh18kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh18kzah1",
      "indoorUnitId": "iu-asuh18kzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug15lzas1-asug15lzbs",
      "slug": "fujitsu-aoug15lzas1-asug15lzbs",
      "modelId": "model-fujitsu-aoug15lzas1",
      "outdoorUnitId": "ou-fujitsu-aoug15lzas1",
      "indoorUnitId": "iu-asug15lzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 12.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug15lzas1-asug15lzas",
      "slug": "fujitsu-aoug15lzas1-asug15lzas",
      "modelId": "model-fujitsu-aoug15lzas1",
      "outdoorUnitId": "ou-fujitsu-aoug15lzas1",
      "indoorUnitId": "iu-asug15lzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 12.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug15lzah1-asug15lzbs",
      "slug": "fujitsu-aoug15lzah1-asug15lzbs",
      "modelId": "model-fujitsu-aoug15lzah1",
      "outdoorUnitId": "ou-fujitsu-aoug15lzah1",
      "indoorUnitId": "iu-asug15lzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug15lzah1-asug15lzas",
      "slug": "fujitsu-aoug15lzah1-asug15lzas",
      "modelId": "model-fujitsu-aoug15lzah1",
      "outdoorUnitId": "ou-fujitsu-aoug15lzah1",
      "indoorUnitId": "iu-asug15lzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kubs1-aguh12kuas",
      "slug": "fujitsu-aouh12kubs1-aguh12kuas",
      "modelId": "model-fujitsu-aouh12kubs1",
      "outdoorUnitId": "ou-fujitsu-aouh12kubs1",
      "indoorUnitId": "iu-aguh12kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kuas1-acuh09kuas",
      "slug": "fujitsu-aouh09kuas1-acuh09kuas",
      "modelId": "model-fujitsu-aouh09kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh09kuas1",
      "indoorUnitId": "iu-acuh09kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.4,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09kubs1-acuh09kuas",
      "slug": "fujitsu-aouh09kubs1-acuh09kuas",
      "modelId": "model-fujitsu-aouh09kubs1",
      "outdoorUnitId": "ou-fujitsu-aouh09kubs1",
      "indoorUnitId": "iu-acuh09kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.4,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kzah1-asuh24kzas",
      "slug": "fujitsu-aouh24kzah1-asuh24kzas",
      "modelId": "model-fujitsu-aouh24kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh24kzah1",
      "indoorUnitId": "iu-asuh24kzas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.9,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kubs1-aguh15kuas",
      "slug": "fujitsu-aouh12kubs1-aguh15kuas",
      "modelId": "model-fujitsu-aouh12kubs1",
      "outdoorUnitId": "ou-fujitsu-aouh12kubs1",
      "indoorUnitId": "iu-aguh15kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.95,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kpas1-asuh12kpbs",
      "slug": "fujitsu-aouh12kpas1-asuh12kpbs",
      "modelId": "model-fujitsu-aouh12kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh12kpas1",
      "indoorUnitId": "iu-asuh12kpbs",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kzah1-asuh24kzbs",
      "slug": "fujitsu-aouh24kzah1-asuh24kzbs",
      "modelId": "model-fujitsu-aouh24kzah1",
      "outdoorUnitId": "ou-fujitsu-aouh24kzah1",
      "indoorUnitId": "iu-asuh24kzbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.9,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kpas1-asuh12kpas",
      "slug": "fujitsu-aouh12kpas1-asuh12kpas",
      "modelId": "model-fujitsu-aouh12kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh12kpas1",
      "indoorUnitId": "iu-asuh12kpas",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kuas1-acuh12kuas",
      "slug": "fujitsu-aouh12kuas1-acuh12kuas",
      "modelId": "model-fujitsu-aouh12kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh12kuas1",
      "indoorUnitId": "iu-acuh12kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kubs1-acuh12kuas",
      "slug": "fujitsu-aouh12kubs1-acuh12kuas",
      "modelId": "model-fujitsu-aouh12kubs1",
      "outdoorUnitId": "ou-fujitsu-aouh12kubs1",
      "indoorUnitId": "iu-acuh12kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09luas1-acuh09luas1",
      "slug": "fujitsu-aouh09luas1-acuh09luas1",
      "modelId": "model-fujitsu-aouh09luas1",
      "outdoorUnitId": "ou-fujitsu-aouh09luas1",
      "indoorUnitId": "iu-acuh09luas1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18luas1-auuh18luas",
      "slug": "fujitsu-aouh18luas1-auuh18luas",
      "modelId": "model-fujitsu-aouh18luas1",
      "outdoorUnitId": "ou-fujitsu-aouh18luas1",
      "indoorUnitId": "iu-auuh18luas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kwah3-iu-44777",
      "slug": "fujitsu-aouh24kwah3-iu-44777",
      "modelId": "model-fujitsu-aouh24kwah3",
      "outdoorUnitId": "ou-fujitsu-aouh24kwah3",
      "indoorUnitId": "iu-iu-44777",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kuas1-abuh18kuas",
      "slug": "fujitsu-aouh18kuas1-abuh18kuas",
      "modelId": "model-fujitsu-aouh18kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh18kuas1",
      "indoorUnitId": "iu-abuh18kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.4,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kuas1-auuh24kuas",
      "slug": "fujitsu-aouh24kuas1-auuh24kuas",
      "modelId": "model-fujitsu-aouh24kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh24kuas1",
      "indoorUnitId": "iu-auuh24kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.2,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouk036msan7-iu-44826",
      "slug": "fujitsu-aouk036msan7-iu-44826",
      "modelId": "model-fujitsu-aouk036msan7",
      "outdoorUnitId": "ou-fujitsu-aouk036msan7",
      "indoorUnitId": "iu-iu-44826",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kwas3-iu-44778",
      "slug": "fujitsu-aouh24kwas3-iu-44778",
      "modelId": "model-fujitsu-aouh24kwas3",
      "outdoorUnitId": "ou-fujitsu-aouh24kwas3",
      "indoorUnitId": "iu-iu-44778",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12luas1-acuh12luas1",
      "slug": "fujitsu-aouh12luas1-acuh12luas1",
      "modelId": "model-fujitsu-aouh12luas1",
      "outdoorUnitId": "ou-fujitsu-aouh12luas1",
      "indoorUnitId": "iu-acuh12luas1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kuah1-auuh30kuas",
      "slug": "fujitsu-aouh30kuah1-auuh30kuas",
      "modelId": "model-fujitsu-aouh30kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh30kuah1",
      "indoorUnitId": "iu-auuh30kuas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12lmas1-asuh12lmas",
      "slug": "fujitsu-aouh12lmas1-asuh12lmas",
      "modelId": "model-fujitsu-aouh12lmas1",
      "outdoorUnitId": "ou-fujitsu-aouh12lmas1",
      "indoorUnitId": "iu-asuh12lmas",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12lmbh1-asuh12lmas",
      "slug": "fujitsu-aouh12lmbh1-asuh12lmas",
      "modelId": "model-fujitsu-aouh12lmbh1",
      "outdoorUnitId": "ou-fujitsu-aouh12lmbh1",
      "indoorUnitId": "iu-asuh12lmas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12lmbs1-asuh12lmas",
      "slug": "fujitsu-aouh12lmbs1-asuh12lmas",
      "modelId": "model-fujitsu-aouh12lmbs1",
      "outdoorUnitId": "ou-fujitsu-aouh12lmbs1",
      "indoorUnitId": "iu-asuh12lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12lmah1-asuh12lmas",
      "slug": "fujitsu-aouh12lmah1-asuh12lmas",
      "modelId": "model-fujitsu-aouh12lmah1",
      "outdoorUnitId": "ou-fujitsu-aouh12lmah1",
      "indoorUnitId": "iu-asuh12lmas",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24luas1-auuh24luas",
      "slug": "fujitsu-aouh24luas1-auuh24luas",
      "modelId": "model-fujitsu-aouh24luas1",
      "outdoorUnitId": "ou-fujitsu-aouh24luas1",
      "indoorUnitId": "iu-auuh24luas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouk048msan7-iu-44828",
      "slug": "fujitsu-aouk048msan7-iu-44828",
      "modelId": "model-fujitsu-aouk048msan7",
      "outdoorUnitId": "ou-fujitsu-aouk048msan7",
      "indoorUnitId": "iu-iu-44828",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou12rlffh-agu12rlf",
      "slug": "fujitsu-aou12rlffh-agu12rlf",
      "modelId": "model-fujitsu-aou12rlffh",
      "outdoorUnitId": "ou-fujitsu-aou12rlffh",
      "indoorUnitId": "iu-agu12rlf",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou12rlff-agu12rlf",
      "slug": "fujitsu-aou12rlff-agu12rlf",
      "modelId": "model-fujitsu-aou12rlff",
      "outdoorUnitId": "ou-fujitsu-aou12rlff",
      "indoorUnitId": "iu-agu12rlf",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18luas1-abuh18luas",
      "slug": "fujitsu-aouh18luas1-abuh18luas",
      "modelId": "model-fujitsu-aouh18luas1",
      "outdoorUnitId": "ou-fujitsu-aouh18luas1",
      "indoorUnitId": "iu-abuh18luas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24lmas1-asuh24lmas",
      "slug": "fujitsu-aouh24lmas1-asuh24lmas",
      "modelId": "model-fujitsu-aouh24lmas1",
      "outdoorUnitId": "ou-fujitsu-aouh24lmas1",
      "indoorUnitId": "iu-asuh24lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kuas1-auuh30kuas",
      "slug": "fujitsu-aouh30kuas1-auuh30kuas",
      "modelId": "model-fujitsu-aouh30kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh30kuas1",
      "indoorUnitId": "iu-auuh30kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.4,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouk060msan7-iu-44830",
      "slug": "fujitsu-aouk060msan7-iu-44830",
      "modelId": "model-fujitsu-aouk060msan7",
      "outdoorUnitId": "ou-fujitsu-aouk060msan7",
      "indoorUnitId": "iu-iu-44830",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouk024ssan7-iu-44825",
      "slug": "fujitsu-aouk024ssan7-iu-44825",
      "modelId": "model-fujitsu-aouk024ssan7",
      "outdoorUnitId": "ou-fujitsu-aouk024ssan7",
      "indoorUnitId": "iu-iu-44825",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou18rglx-auu18rglx",
      "slug": "fujitsu-aou18rglx-auu18rglx",
      "modelId": "model-fujitsu-aou18rglx",
      "outdoorUnitId": "ou-fujitsu-aou18rglx",
      "indoorUnitId": "iu-auu18rglx",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kwah4-iu-44810",
      "slug": "fujitsu-aouh36kwah4-iu-44810",
      "modelId": "model-fujitsu-aouh36kwah4",
      "outdoorUnitId": "ou-fujitsu-aouh36kwah4",
      "indoorUnitId": "iu-iu-44810",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh42kuah1-auuh42kuas",
      "slug": "fujitsu-aouh42kuah1-auuh42kuas",
      "modelId": "model-fujitsu-aouh42kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh42kuah1",
      "indoorUnitId": "iu-auuh42kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kwbh4-iu-44812",
      "slug": "fujitsu-aouh36kwbh4-iu-44812",
      "modelId": "model-fujitsu-aouh36kwbh4",
      "outdoorUnitId": "ou-fujitsu-aouh36kwbh4",
      "indoorUnitId": "iu-iu-44812",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kuah1-auuh36kuas",
      "slug": "fujitsu-aouh36kuah1-auuh36kuas",
      "modelId": "model-fujitsu-aouh36kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh36kuah1",
      "indoorUnitId": "iu-auuh36kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30luah1-auuh30luas",
      "slug": "fujitsu-aouh30luah1-auuh30luas",
      "modelId": "model-fujitsu-aouh30luah1",
      "outdoorUnitId": "ou-fujitsu-aouh30luah1",
      "indoorUnitId": "iu-auuh30luas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh45kwas5-iu-44817",
      "slug": "fujitsu-aouh45kwas5-iu-44817",
      "modelId": "model-fujitsu-aouh45kwas5",
      "outdoorUnitId": "ou-fujitsu-aouh45kwas5",
      "indoorUnitId": "iu-iu-44817",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh45kwbs5-iu-44818",
      "slug": "fujitsu-aouh45kwbs5-iu-44818",
      "modelId": "model-fujitsu-aouh45kwbs5",
      "outdoorUnitId": "ou-fujitsu-aouh45kwbs5",
      "indoorUnitId": "iu-iu-44818",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kwas4-iu-44811",
      "slug": "fujitsu-aouh36kwas4-iu-44811",
      "modelId": "model-fujitsu-aouh36kwas4",
      "outdoorUnitId": "ou-fujitsu-aouh36kwas4",
      "indoorUnitId": "iu-iu-44811",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kpas1-asuh30kpbs",
      "slug": "fujitsu-aouh30kpas1-asuh30kpbs",
      "modelId": "model-fujitsu-aouh30kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh30kpas1",
      "indoorUnitId": "iu-asuh30kpbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kpas1-asuh18kpbs",
      "slug": "fujitsu-aouh18kpas1-asuh18kpbs",
      "modelId": "model-fujitsu-aouh18kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh18kpas1",
      "indoorUnitId": "iu-asuh18kpbs",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kwah2-iu-44762",
      "slug": "fujitsu-aouh18kwah2-iu-44762",
      "modelId": "model-fujitsu-aouh18kwah2",
      "outdoorUnitId": "ou-fujitsu-aouh18kwah2",
      "indoorUnitId": "iu-iu-44762",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kpas1-asuh30kpas",
      "slug": "fujitsu-aouh30kpas1-asuh30kpas",
      "modelId": "model-fujitsu-aouh30kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh30kpas1",
      "indoorUnitId": "iu-asuh30kpas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kpas1-asuh18kpas",
      "slug": "fujitsu-aouh18kpas1-asuh18kpas",
      "modelId": "model-fujitsu-aouh18kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh18kpas1",
      "indoorUnitId": "iu-asuh18kpas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kwas2-iu-44763",
      "slug": "fujitsu-aouh18kwas2-iu-44763",
      "modelId": "model-fujitsu-aouh18kwas2",
      "outdoorUnitId": "ou-fujitsu-aouh18kwas2",
      "indoorUnitId": "iu-iu-44763",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kuas1-acuh18kuas",
      "slug": "fujitsu-aouh18kuas1-acuh18kuas",
      "modelId": "model-fujitsu-aouh18kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh18kuas1",
      "indoorUnitId": "iu-acuh18kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.9,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouk036ssan7-iu-44827",
      "slug": "fujitsu-aouk036ssan7-iu-44827",
      "modelId": "model-fujitsu-aouk036ssan7",
      "outdoorUnitId": "ou-fujitsu-aouk036ssan7",
      "indoorUnitId": "iu-iu-44827",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kuas1-abuh24kuas",
      "slug": "fujitsu-aouh24kuas1-abuh24kuas",
      "modelId": "model-fujitsu-aouh24kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh24kuas1",
      "indoorUnitId": "iu-abuh24kuas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kpas1-asuh24kpas",
      "slug": "fujitsu-aouh24kpas1-asuh24kpas",
      "modelId": "model-fujitsu-aouh24kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh24kpas1",
      "indoorUnitId": "iu-asuh24kpas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30luas1-auuh30luas",
      "slug": "fujitsu-aouh30luas1-auuh30luas",
      "modelId": "model-fujitsu-aouh30luas1",
      "outdoorUnitId": "ou-fujitsu-aouh30luas1",
      "indoorUnitId": "iu-auuh30luas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18luas1-acuh18luas1",
      "slug": "fujitsu-aouh18luas1-acuh18luas1",
      "modelId": "model-fujitsu-aouh18luas1",
      "outdoorUnitId": "ou-fujitsu-aouh18luas1",
      "indoorUnitId": "iu-acuh18luas1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kpas1-asuh24kpbs",
      "slug": "fujitsu-aouh24kpas1-asuh24kpbs",
      "modelId": "model-fujitsu-aouh24kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh24kpas1",
      "indoorUnitId": "iu-asuh24kpbs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou18rlxfzh-iu-44683",
      "slug": "fujitsu-aou18rlxfzh-iu-44683",
      "modelId": "model-fujitsu-aou18rlxfzh",
      "outdoorUnitId": "ou-fujitsu-aou18rlxfzh",
      "indoorUnitId": "iu-iu-44683",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24luas1-abuh24luas",
      "slug": "fujitsu-aouh24luas1-abuh24luas",
      "modelId": "model-fujitsu-aouh24luas1",
      "outdoorUnitId": "ou-fujitsu-aouh24luas1",
      "indoorUnitId": "iu-abuh24luas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh48kuah1-auuh48kuas",
      "slug": "fujitsu-aouh48kuah1-auuh48kuas",
      "modelId": "model-fujitsu-aouh48kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh48kuah1",
      "indoorUnitId": "iu-auuh48kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kuas1-auuh36kuas",
      "slug": "fujitsu-aouh36kuas1-auuh36kuas",
      "modelId": "model-fujitsu-aouh36kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh36kuas1",
      "indoorUnitId": "iu-auuh36kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kuas1-abuh36kuas",
      "slug": "fujitsu-aouh36kuas1-abuh36kuas",
      "modelId": "model-fujitsu-aouh36kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh36kuas1",
      "indoorUnitId": "iu-abuh36kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09leas1-asuh09lmas",
      "slug": "fujitsu-aouh09leas1-asuh09lmas",
      "modelId": "model-fujitsu-aouh09leas1",
      "outdoorUnitId": "ou-fujitsu-aouh09leas1",
      "indoorUnitId": "iu-asuh09lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18lmas1-asuh18lmas",
      "slug": "fujitsu-aouh18lmas1-asuh18lmas",
      "modelId": "model-fujitsu-aouh18lmas1",
      "outdoorUnitId": "ou-fujitsu-aouh18lmas1",
      "indoorUnitId": "iu-asuh18lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kpas1-asuh36kpas",
      "slug": "fujitsu-aouh36kpas1-asuh36kpas",
      "modelId": "model-fujitsu-aouh36kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh36kpas1",
      "indoorUnitId": "iu-asuh36kpas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kpas1-asuh36kpbs",
      "slug": "fujitsu-aouh36kpas1-asuh36kpbs",
      "modelId": "model-fujitsu-aouh36kpas1",
      "outdoorUnitId": "ou-fujitsu-aouh36kpas1",
      "indoorUnitId": "iu-asuh36kpbs",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou24rglx-auu24rglx",
      "slug": "fujitsu-aou24rglx-auu24rglx",
      "modelId": "model-fujitsu-aou24rglx",
      "outdoorUnitId": "ou-fujitsu-aou24rglx",
      "indoorUnitId": "iu-auu24rglx",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.8,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kuas1-abuh30kuas",
      "slug": "fujitsu-aouh30kuas1-abuh30kuas",
      "modelId": "model-fujitsu-aouh30kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh30kuas1",
      "indoorUnitId": "iu-abuh30kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.8,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kuah1-abuh36kuas",
      "slug": "fujitsu-aouh36kuah1-abuh36kuas",
      "modelId": "model-fujitsu-aouh36kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh36kuah1",
      "indoorUnitId": "iu-abuh36kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.8,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kuah1-abuh30kuas",
      "slug": "fujitsu-aouh30kuah1-abuh30kuas",
      "modelId": "model-fujitsu-aouh30kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh30kuah1",
      "indoorUnitId": "iu-abuh30kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou36rlxfzh-iu-44690",
      "slug": "fujitsu-aou36rlxfzh-iu-44690",
      "modelId": "model-fujitsu-aou36rlxfzh",
      "outdoorUnitId": "ou-fujitsu-aou36rlxfzh",
      "indoorUnitId": "iu-iu-44690",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou15rlffh-agu15rlf",
      "slug": "fujitsu-aou15rlffh-agu15rlf",
      "modelId": "model-fujitsu-aou15rlffh",
      "outdoorUnitId": "ou-fujitsu-aou15rlffh",
      "indoorUnitId": "iu-agu15rlf",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.3,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou15rlff-agu15rlf",
      "slug": "fujitsu-aou15rlff-agu15rlf",
      "modelId": "model-fujitsu-aou15rlff",
      "outdoorUnitId": "ou-fujitsu-aou15rlff",
      "indoorUnitId": "iu-agu15rlf",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.3,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouk048ssan7-iu-44829",
      "slug": "fujitsu-aouk048ssan7-iu-44829",
      "modelId": "model-fujitsu-aouk048ssan7",
      "outdoorUnitId": "ou-fujitsu-aouk048ssan7",
      "indoorUnitId": "iu-iu-44829",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh09lpas1-asuh09lpas",
      "slug": "fujitsu-aouh09lpas1-asuh09lpas",
      "modelId": "model-fujitsu-aouh09lpas1",
      "outdoorUnitId": "ou-fujitsu-aouh09lpas1",
      "indoorUnitId": "iu-asuh09lpas",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou24rlxfzh-iu-44688",
      "slug": "fujitsu-aou24rlxfzh-iu-44688",
      "modelId": "model-fujitsu-aou24rlxfzh",
      "outdoorUnitId": "ou-fujitsu-aou24rlxfzh",
      "indoorUnitId": "iu-iu-44688",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou18rlxfwh-asu18rlf",
      "slug": "fujitsu-aou18rlxfwh-asu18rlf",
      "modelId": "model-fujitsu-aou18rlxfwh",
      "outdoorUnitId": "ou-fujitsu-aou18rlxfwh",
      "indoorUnitId": "iu-asu18rlf",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18knas1-asuh18knas",
      "slug": "fujitsu-aouh18knas1-asuh18knas",
      "modelId": "model-fujitsu-aouh18knas1",
      "outdoorUnitId": "ou-fujitsu-aouh18knas1",
      "indoorUnitId": "iu-asuh18knas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kubs1-amuh12kuas",
      "slug": "fujitsu-aouh12kubs1-amuh12kuas",
      "modelId": "model-fujitsu-aouh12kubs1",
      "outdoorUnitId": "ou-fujitsu-aouh12kubs1",
      "indoorUnitId": "iu-amuh12kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.9,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kuas1-amuh12kuas",
      "slug": "fujitsu-aouh12kuas1-amuh12kuas",
      "modelId": "model-fujitsu-aouh12kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh12kuas1",
      "indoorUnitId": "iu-amuh12kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.9,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou24rlxfwh-asu24rlf",
      "slug": "fujitsu-aou24rlxfwh-asu24rlf",
      "modelId": "model-fujitsu-aou24rlxfwh",
      "outdoorUnitId": "ou-fujitsu-aou24rlxfwh",
      "indoorUnitId": "iu-asu24rlf",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh42kuah1-aruh42kuas",
      "slug": "fujitsu-aouh42kuah1-aruh42kuas",
      "modelId": "model-fujitsu-aouh42kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh42kuah1",
      "indoorUnitId": "iu-aruh42kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kuas1-amuh18kuas",
      "slug": "fujitsu-aouh18kuas1-amuh18kuas",
      "modelId": "model-fujitsu-aouh18kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh18kuas1",
      "indoorUnitId": "iu-amuh18kuas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kuas1-aruh12kuas",
      "slug": "fujitsu-aouh12kuas1-aruh12kuas",
      "modelId": "model-fujitsu-aouh12kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh12kuas1",
      "indoorUnitId": "iu-aruh12kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12kubs1-aruh12kuas",
      "slug": "fujitsu-aouh12kubs1-aruh12kuas",
      "modelId": "model-fujitsu-aouh12kubs1",
      "outdoorUnitId": "ou-fujitsu-aouh12kubs1",
      "indoorUnitId": "iu-aruh12kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh12luas1-aruh12luas",
      "slug": "fujitsu-aouh12luas1-aruh12luas",
      "modelId": "model-fujitsu-aouh12luas1",
      "outdoorUnitId": "ou-fujitsu-aouh12luas1",
      "indoorUnitId": "iu-aruh12luas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh48kuah1-amuh48kuas",
      "slug": "fujitsu-aouh48kuah1-amuh48kuas",
      "modelId": "model-fujitsu-aouh48kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh48kuah1",
      "indoorUnitId": "iu-amuh48kuas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh48kuah1-aruh48kuas",
      "slug": "fujitsu-aouh48kuah1-aruh48kuas",
      "modelId": "model-fujitsu-aouh48kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh48kuah1",
      "indoorUnitId": "iu-aruh48kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kuas1-amuh30kuas",
      "slug": "fujitsu-aouh30kuas1-amuh30kuas",
      "modelId": "model-fujitsu-aouh30kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh30kuas1",
      "indoorUnitId": "iu-amuh30kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh42kuas1-auuh42kuas",
      "slug": "fujitsu-aouh42kuas1-auuh42kuas",
      "modelId": "model-fujitsu-aouh42kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh42kuas1",
      "indoorUnitId": "iu-auuh42kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kuah1-amuh30kuas",
      "slug": "fujitsu-aouh30kuah1-amuh30kuas",
      "modelId": "model-fujitsu-aouh30kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh30kuah1",
      "indoorUnitId": "iu-amuh30kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24luas1-amug24lmas",
      "slug": "fujitsu-aouh24luas1-amug24lmas",
      "modelId": "model-fujitsu-aouh24luas1",
      "outdoorUnitId": "ou-fujitsu-aouh24luas1",
      "indoorUnitId": "iu-amug24lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30luah1-amug30lmas",
      "slug": "fujitsu-aouh30luah1-amug30lmas",
      "modelId": "model-fujitsu-aouh30luah1",
      "outdoorUnitId": "ou-fujitsu-aouh30luah1",
      "indoorUnitId": "iu-amug30lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.8,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou30rlxeh-asu30rle",
      "slug": "fujitsu-aou30rlxeh-asu30rle",
      "modelId": "model-fujitsu-aou30rlxeh",
      "outdoorUnitId": "ou-fujitsu-aou30rlxeh",
      "indoorUnitId": "iu-asu30rle",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18luas1-aruh18luas",
      "slug": "fujitsu-aouh18luas1-aruh18luas",
      "modelId": "model-fujitsu-aouh18luas1",
      "outdoorUnitId": "ou-fujitsu-aouh18luas1",
      "indoorUnitId": "iu-aruh18luas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh18kuas1-aruh18kuas",
      "slug": "fujitsu-aouh18kuas1-aruh18kuas",
      "modelId": "model-fujitsu-aouh18kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh18kuas1",
      "indoorUnitId": "iu-aruh18kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou24rlxfz-iu-44687",
      "slug": "fujitsu-aou24rlxfz-iu-44687",
      "modelId": "model-fujitsu-aou24rlxfz",
      "outdoorUnitId": "ou-fujitsu-aou24rlxfz",
      "indoorUnitId": "iu-iu-44687",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24luas1-aruh24luas",
      "slug": "fujitsu-aouh24luas1-aruh24luas",
      "modelId": "model-fujitsu-aouh24luas1",
      "outdoorUnitId": "ou-fujitsu-aouh24luas1",
      "indoorUnitId": "iu-aruh24luas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kuas1-aruh24kuas",
      "slug": "fujitsu-aouh24kuas1-aruh24kuas",
      "modelId": "model-fujitsu-aouh24kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh24kuas1",
      "indoorUnitId": "iu-aruh24kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kuas1-aruh30kuas",
      "slug": "fujitsu-aouh30kuas1-aruh30kuas",
      "modelId": "model-fujitsu-aouh30kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh30kuas1",
      "indoorUnitId": "iu-aruh30kuas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30luah1-aruh30luas",
      "slug": "fujitsu-aouh30luah1-aruh30luas",
      "modelId": "model-fujitsu-aouh30luah1",
      "outdoorUnitId": "ou-fujitsu-aouh30luah1",
      "indoorUnitId": "iu-aruh30luas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kuah1-amuh36kuas",
      "slug": "fujitsu-aouh36kuah1-amuh36kuas",
      "modelId": "model-fujitsu-aouh36kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh36kuah1",
      "indoorUnitId": "iu-amuh36kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh48kuas1-auuh48kuas",
      "slug": "fujitsu-aouh48kuas1-auuh48kuas",
      "modelId": "model-fujitsu-aouh48kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh48kuas1",
      "indoorUnitId": "iu-auuh48kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou18rlxfz-iu-44682",
      "slug": "fujitsu-aou18rlxfz-iu-44682",
      "modelId": "model-fujitsu-aou18rlxfz",
      "outdoorUnitId": "ou-fujitsu-aou18rlxfz",
      "indoorUnitId": "iu-iu-44682",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kuas1-aruh36kuas",
      "slug": "fujitsu-aouh36kuas1-aruh36kuas",
      "modelId": "model-fujitsu-aouh36kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh36kuas1",
      "indoorUnitId": "iu-aruh36kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh30kuah1-aruh30kuas",
      "slug": "fujitsu-aouh30kuah1-aruh30kuas",
      "modelId": "model-fujitsu-aouh30kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh30kuah1",
      "indoorUnitId": "iu-aruh30kuas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kuah1-aruh36kuas",
      "slug": "fujitsu-aouh36kuah1-aruh36kuas",
      "modelId": "model-fujitsu-aouh36kuah1",
      "outdoorUnitId": "ou-fujitsu-aouh36kuah1",
      "indoorUnitId": "iu-aruh36kuas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh24kuas1-amuh24kuas",
      "slug": "fujitsu-aouh24kuas1-amuh24kuas",
      "modelId": "model-fujitsu-aouh24kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh24kuas1",
      "indoorUnitId": "iu-amuh24kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.7,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh36kuas1-amuh36kuas",
      "slug": "fujitsu-aouh36kuas1-amuh36kuas",
      "modelId": "model-fujitsu-aouh36kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh36kuas1",
      "indoorUnitId": "iu-amuh36kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh42kuas1-aruh42kuas",
      "slug": "fujitsu-aouh42kuas1-aruh42kuas",
      "modelId": "model-fujitsu-aouh42kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh42kuas1",
      "indoorUnitId": "iu-aruh42kuas",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aoug36lmas1-amug36lmas",
      "slug": "fujitsu-aoug36lmas1-amug36lmas",
      "modelId": "model-fujitsu-aoug36lmas1",
      "outdoorUnitId": "ou-fujitsu-aoug36lmas1",
      "indoorUnitId": "iu-amug36lmas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh48kuas1-amuh48kuas",
      "slug": "fujitsu-aouh48kuas1-amuh48kuas",
      "modelId": "model-fujitsu-aouh48kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh48kuas1",
      "indoorUnitId": "iu-amuh48kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou18rglx-aru18rglx",
      "slug": "fujitsu-aou18rglx-aru18rglx",
      "modelId": "model-fujitsu-aou18rglx",
      "outdoorUnitId": "ou-fujitsu-aou18rglx",
      "indoorUnitId": "iu-aru18rglx",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aouh48kuas1-aruh48kuas",
      "slug": "fujitsu-aouh48kuas1-aruh48kuas",
      "modelId": "model-fujitsu-aouh48kuas1",
      "outdoorUnitId": "ou-fujitsu-aouh48kuas1",
      "indoorUnitId": "iu-aruh48kuas",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1518tjazna-fhrnvt2417sztna",
      "slug": "fujitsu-fop1518tjazna-fhrnvt2417sztna",
      "modelId": "model-fujitsu-fop1518tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1518tjazna",
      "indoorUnitId": "iu-fhrnvt2417sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1530tjazna-fhrnvt3617sztna",
      "slug": "fujitsu-fop1530tjazna-fhrnvt3617sztna",
      "modelId": "model-fujitsu-fop1530tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1530tjazna",
      "indoorUnitId": "iu-fhrnvt3617sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-aou24rglx-aru24rglx",
      "slug": "fujitsu-aou24rglx-aru24rglx",
      "modelId": "model-fujitsu-aou24rglx",
      "outdoorUnitId": "ou-fujitsu-aou24rglx",
      "indoorUnitId": "iu-aru24rglx",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1524tjazna-fhrnvt2417sztna",
      "slug": "fujitsu-fop1524tjazna-fhrnvt2417sztna",
      "modelId": "model-fujitsu-fop1524tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1524tjazna",
      "indoorUnitId": "iu-fhrnvt2417sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az60aj2n-fhrntt6024sztna",
      "slug": "fujitsu-wp15az60aj2n-fhrntt6024sztna",
      "modelId": "model-fujitsu-wp15az60aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az60aj2n",
      "indoorUnitId": "iu-fhrntt6024sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1560tjazna-fhrntt6024sztna",
      "slug": "fujitsu-fop1560tjazna-fhrntt6024sztna",
      "modelId": "model-fujitsu-fop1560tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1560tjazna",
      "indoorUnitId": "iu-fhrntt6024sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-rdfxyc036ajv-iu-21029",
      "slug": "fujitsu-rdfxyc036ajv-iu-21029",
      "modelId": "model-fujitsu-rdfxyc036ajv",
      "outdoorUnitId": "ou-fujitsu-rdfxyc036ajv",
      "indoorUnitId": "iu-iu-21029",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-rdfxyc048ajv-iu-21030",
      "slug": "fujitsu-rdfxyc048ajv-iu-21030",
      "modelId": "model-fujitsu-rdfxyc048ajv",
      "outdoorUnitId": "ou-fujitsu-rdfxyc048ajv",
      "indoorUnitId": "iu-iu-21030",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-rdfxyc060ajv-iu-21031",
      "slug": "fujitsu-rdfxyc060ajv-iu-21031",
      "modelId": "model-fujitsu-rdfxyc060ajv",
      "outdoorUnitId": "ou-fujitsu-rdfxyc060ajv",
      "indoorUnitId": "iu-iu-21031",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-rhpxyc024ajt-iu-21032",
      "slug": "fujitsu-rhpxyc024ajt-iu-21032",
      "modelId": "model-fujitsu-rhpxyc024ajt",
      "outdoorUnitId": "ou-fujitsu-rhpxyc024ajt",
      "indoorUnitId": "iu-iu-21032",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1524tjazna-fhrntt2417sztna",
      "slug": "fujitsu-fop1524tjazna-fhrntt2417sztna",
      "modelId": "model-fujitsu-fop1524tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1524tjazna",
      "indoorUnitId": "iu-fhrntt2417sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1518tjazna-fhrntt2417sztna",
      "slug": "fujitsu-fop1518tjazna-fhrntt2417sztna",
      "modelId": "model-fujitsu-fop1518tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1518tjazna",
      "indoorUnitId": "iu-fhrntt2417sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1530tjazna-fhrntt3617sztna",
      "slug": "fujitsu-fop1530tjazna-fhrntt3617sztna",
      "modelId": "model-fujitsu-fop1530tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1530tjazna",
      "indoorUnitId": "iu-fhrntt3617sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1536tjazna-fhrntt3617sztna",
      "slug": "fujitsu-fop1536tjazna-fhrntt3617sztna",
      "modelId": "model-fujitsu-fop1536tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1536tjazna",
      "indoorUnitId": "iu-fhrntt3617sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp14ay60aj2n-fcca6021syta",
      "slug": "fujitsu-wp14ay60aj2n-fcca6021syta",
      "modelId": "model-fujitsu-wp14ay60aj2n",
      "outdoorUnitId": "ou-fujitsu-wp14ay60aj2n",
      "indoorUnitId": "iu-fcca6021syta",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az18aj2n-fccn2417szta",
      "slug": "fujitsu-wp15az18aj2n-fccn2417szta",
      "modelId": "model-fujitsu-wp15az18aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az18aj2n",
      "indoorUnitId": "iu-fccn2417szta",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az18aj2n-fhrntt2417sztna",
      "slug": "fujitsu-wp15az18aj2n-fhrntt2417sztna",
      "modelId": "model-fujitsu-wp15az18aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az18aj2n",
      "indoorUnitId": "iu-fhrntt2417sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp14ay42aj2n-fccn4824syta",
      "slug": "fujitsu-wp14ay42aj2n-fccn4824syta",
      "modelId": "model-fujitsu-wp14ay42aj2n",
      "outdoorUnitId": "ou-fujitsu-wp14ay42aj2n",
      "indoorUnitId": "iu-fccn4824syta",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1548tjazna-fhrntt4821sztna",
      "slug": "fujitsu-fop1548tjazna-fhrntt4821sztna",
      "modelId": "model-fujitsu-fop1548tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1548tjazna",
      "indoorUnitId": "iu-fhrntt4821sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1542tjazna-fhrnvt4821sztna",
      "slug": "fujitsu-fop1542tjazna-fhrnvt4821sztna",
      "modelId": "model-fujitsu-fop1542tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1542tjazna",
      "indoorUnitId": "iu-fhrnvt4821sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1560tjazna-fhrnvt6024sztna",
      "slug": "fujitsu-fop1560tjazna-fhrnvt6024sztna",
      "modelId": "model-fujitsu-fop1560tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1560tjazna",
      "indoorUnitId": "iu-fhrnvt6024sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1548tjazna-fhrnvt4821sztna",
      "slug": "fujitsu-fop1548tjazna-fhrnvt4821sztna",
      "modelId": "model-fujitsu-fop1548tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1548tjazna",
      "indoorUnitId": "iu-fhrnvt4821sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az36aj2n-fhrntt3617sztna",
      "slug": "fujitsu-wp15az36aj2n-fhrntt3617sztna",
      "modelId": "model-fujitsu-wp15az36aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az36aj2n",
      "indoorUnitId": "iu-fhrntt3617sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az42aj2n-fhrntt4821sztna",
      "slug": "fujitsu-wp15az42aj2n-fhrntt4821sztna",
      "modelId": "model-fujitsu-wp15az42aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az42aj2n",
      "indoorUnitId": "iu-fhrntt4821sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az48aj2n-fhrntt4821sztna",
      "slug": "fujitsu-wp15az48aj2n-fhrntt4821sztna",
      "modelId": "model-fujitsu-wp15az48aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az48aj2n",
      "indoorUnitId": "iu-fhrntt4821sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-rdfxyc024ajv-iu-21028",
      "slug": "fujitsu-rdfxyc024ajv-iu-21028",
      "modelId": "model-fujitsu-rdfxyc024ajv",
      "outdoorUnitId": "ou-fujitsu-rdfxyc024ajv",
      "indoorUnitId": "iu-iu-21028",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az24aj2n-fccn2417szta",
      "slug": "fujitsu-wp15az24aj2n-fccn2417szta",
      "modelId": "model-fujitsu-wp15az24aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az24aj2n",
      "indoorUnitId": "iu-fccn2417szta",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az24aj2n-fhrntt2417sztna",
      "slug": "fujitsu-wp15az24aj2n-fhrntt2417sztna",
      "modelId": "model-fujitsu-wp15az24aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az24aj2n",
      "indoorUnitId": "iu-fhrntt2417sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az30aj2n-fhrntt3617sztna",
      "slug": "fujitsu-wp15az30aj2n-fhrntt3617sztna",
      "modelId": "model-fujitsu-wp15az30aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az30aj2n",
      "indoorUnitId": "iu-fhrntt3617sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-wp15az30aj2n-fccn3617szta",
      "slug": "fujitsu-wp15az30aj2n-fccn3617szta",
      "modelId": "model-fujitsu-wp15az30aj2n",
      "outdoorUnitId": "ou-fujitsu-wp15az30aj2n",
      "indoorUnitId": "iu-fccn3617szta",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1536tjazna-fhrnvt3617sztna",
      "slug": "fujitsu-fop1536tjazna-fhrnvt3617sztna",
      "modelId": "model-fujitsu-fop1536tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1536tjazna",
      "indoorUnitId": "iu-fhrnvt3617sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1542tjazna-fhrntt4821sztna",
      "slug": "fujitsu-fop1542tjazna-fhrntt4821sztna",
      "modelId": "model-fujitsu-fop1542tjazna",
      "outdoorUnitId": "ou-fujitsu-fop1542tjazna",
      "indoorUnitId": "iu-fhrntt4821sztna",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1442tjayna-fccn4824syta",
      "slug": "fujitsu-fop1442tjayna-fccn4824syta",
      "modelId": "model-fujitsu-fop1442tjayna",
      "outdoorUnitId": "ou-fujitsu-fop1442tjayna",
      "indoorUnitId": "iu-fccn4824syta",
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
          "sourceId": "src-fujitsu-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujitsu-fop1460tjayna-fcca6021syta",
      "slug": "fujitsu-fop1460tjayna-fcca6021syta",
      "modelId": "model-fujitsu-fop1460tjayna",
      "outdoorUnitId": "ou-fujitsu-fop1460tjayna",
      "indoorUnitId": "iu-fcca6021syta",
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
          "sourceId": "src-fujitsu-epa",
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
