import type { BrandDataset } from "../../types";

export const brand_colemanDataset: BrandDataset = {
  "brand": {
    "id": "brand-coleman",
    "slug": "coleman",
    "name": "Coleman",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Coleman",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-coleman-epa",
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
      "id": "series-coleman-urac",
      "slug": "coleman-urac",
      "name": "URAC",
      "brandId": "brand-coleman",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série URAC de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-coleman-umulti",
      "slug": "coleman-umulti",
      "name": "UMULTI",
      "brandId": "brand-coleman",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série UMULTI de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-coleman-lx-series",
      "slug": "coleman-lx-series",
      "name": "LX SERIES",
      "brandId": "brand-coleman",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LX SERIES de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-coleman-upac",
      "slug": "coleman-upac",
      "name": "UPAC",
      "brandId": "brand-coleman",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série UPAC de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-coleman-xdv",
      "slug": "coleman-xdv",
      "name": "XDV",
      "brandId": "brand-coleman",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série XDV de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-coleman-ph9",
      "slug": "coleman-ph9",
      "name": "PH9",
      "brandId": "brand-coleman",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série PH9 de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-coleman-hmh7",
      "slug": "coleman-hmh7",
      "name": "HMH7",
      "brandId": "brand-coleman",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HMH7 de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-coleman-xd5",
      "slug": "coleman-xd5",
      "name": "XD5",
      "brandId": "brand-coleman",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série XD5 de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-coleman-echelon",
      "slug": "coleman-echelon",
      "name": "ECHELON",
      "brandId": "brand-coleman",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ECHELON de Coleman",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-coleman-urc09cn23stg1",
      "slug": "coleman-urc09cn23stg1",
      "name": "Coleman URC09CN23STG1",
      "seriesId": "series-coleman-urac",
      "brandId": "brand-coleman",
      "modelNumber": "URC09CN23STG1",
      "normalizedModelNumber": "urc09cn23stg1",
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
      "id": "model-coleman-urc12cn23stg1",
      "slug": "coleman-urc12cn23stg1",
      "name": "Coleman URC12CN23STG1",
      "seriesId": "series-coleman-urac",
      "brandId": "brand-coleman",
      "modelNumber": "URC12CN23STG1",
      "normalizedModelNumber": "urc12cn23stg1",
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
      "id": "model-coleman-urc09cn15stg1",
      "slug": "coleman-urc09cn15stg1",
      "name": "Coleman URC09CN15STG1",
      "seriesId": "series-coleman-urac",
      "brandId": "brand-coleman",
      "modelNumber": "URC09CN15STG1",
      "normalizedModelNumber": "urc09cn15stg1",
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
      "id": "model-coleman-umc24cn23stg1",
      "slug": "coleman-umc24cn23stg1",
      "name": "Coleman UMC24CN23STG1",
      "seriesId": "series-coleman-umulti",
      "brandId": "brand-coleman",
      "modelNumber": "UMC24CN23STG1",
      "normalizedModelNumber": "umc24cn23stg1",
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
      "id": "model-coleman-urc24cn23stg1",
      "slug": "coleman-urc24cn23stg1",
      "name": "Coleman URC24CN23STG1",
      "seriesId": "series-coleman-urac",
      "brandId": "brand-coleman",
      "modelNumber": "URC24CN23STG1",
      "normalizedModelNumber": "urc24cn23stg1",
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
      "id": "model-coleman-xh960e2c11",
      "slug": "coleman-xh960e2c11",
      "name": "Coleman XH960E2C11",
      "seriesId": "series-coleman-lx-series",
      "brandId": "brand-coleman",
      "modelNumber": "XH960E2C11",
      "normalizedModelNumber": "xh960e2c11",
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
      "id": "model-coleman-umc48cn23stg1",
      "slug": "coleman-umc48cn23stg1",
      "name": "Coleman UMC48CN23STG1",
      "seriesId": "series-coleman-umulti",
      "brandId": "brand-coleman",
      "modelNumber": "UMC48CN23STG1",
      "normalizedModelNumber": "umc48cn23stg1",
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
      "id": "model-coleman-urc12cn15stg1",
      "slug": "coleman-urc12cn15stg1",
      "name": "Coleman URC12CN15STG1",
      "seriesId": "series-coleman-urac",
      "brandId": "brand-coleman",
      "modelNumber": "URC12CN15STG1",
      "normalizedModelNumber": "urc12cn15stg1",
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
      "id": "model-coleman-upc12cn23stg1",
      "slug": "coleman-upc12cn23stg1",
      "name": "Coleman UPC12CN23STG1",
      "seriesId": "series-coleman-upac",
      "brandId": "brand-coleman",
      "modelNumber": "UPC12CN23STG1",
      "normalizedModelNumber": "upc12cn23stg1",
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
      "id": "model-coleman-umc36cn23stg1",
      "slug": "coleman-umc36cn23stg1",
      "name": "Coleman UMC36CN23STG1",
      "seriesId": "series-coleman-umulti",
      "brandId": "brand-coleman",
      "modelNumber": "UMC36CN23STG1",
      "normalizedModelNumber": "umc36cn23stg1",
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
      "id": "model-coleman-umc18cn23stg1",
      "slug": "coleman-umc18cn23stg1",
      "name": "Coleman UMC18CN23STG1",
      "seriesId": "series-coleman-umulti",
      "brandId": "brand-coleman",
      "modelNumber": "UMC18CN23STG1",
      "normalizedModelNumber": "umc18cn23stg1",
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
      "id": "model-coleman-upc09cn23stg1",
      "slug": "coleman-upc09cn23stg1",
      "name": "Coleman UPC09CN23STG1",
      "seriesId": "series-coleman-upac",
      "brandId": "brand-coleman",
      "modelNumber": "UPC09CN23STG1",
      "normalizedModelNumber": "upc09cn23stg1",
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
      "id": "model-coleman-upc18cn23stg1",
      "slug": "coleman-upc18cn23stg1",
      "name": "Coleman UPC18CN23STG1",
      "seriesId": "series-coleman-upac",
      "brandId": "brand-coleman",
      "modelNumber": "UPC18CN23STG1",
      "normalizedModelNumber": "upc18cn23stg1",
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
      "id": "model-coleman-urc18cn23stg1",
      "slug": "coleman-urc18cn23stg1",
      "name": "Coleman URC18CN23STG1",
      "seriesId": "series-coleman-urac",
      "brandId": "brand-coleman",
      "modelNumber": "URC18CN23STG1",
      "normalizedModelNumber": "urc18cn23stg1",
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
      "id": "model-coleman-upc24cn23stg1",
      "slug": "coleman-upc24cn23stg1",
      "name": "Coleman UPC24CN23STG1",
      "seriesId": "series-coleman-upac",
      "brandId": "brand-coleman",
      "modelNumber": "UPC24CN23STG1",
      "normalizedModelNumber": "upc24cn23stg1",
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
      "id": "model-coleman-upc48cn23stg1",
      "slug": "coleman-upc48cn23stg1",
      "name": "Coleman UPC48CN23STG1",
      "seriesId": "series-coleman-upac",
      "brandId": "brand-coleman",
      "modelNumber": "UPC48CN23STG1",
      "normalizedModelNumber": "upc48cn23stg1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 44000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-coleman-xdv36e2d11",
      "slug": "coleman-xdv36e2d11",
      "name": "Coleman XDV36E2D11",
      "seriesId": "series-coleman-xdv",
      "brandId": "brand-coleman",
      "modelNumber": "XDV36E2D11",
      "normalizedModelNumber": "xdv36e2d11",
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
      "id": "model-coleman-upc36cn23stg1",
      "slug": "coleman-upc36cn23stg1",
      "name": "Coleman UPC36CN23STG1*",
      "seriesId": "series-coleman-upac",
      "brandId": "brand-coleman",
      "modelNumber": "UPC36CN23STG1*",
      "normalizedModelNumber": "upc36cn23stg1*",
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
      "id": "model-coleman-xh936e2c11",
      "slug": "coleman-xh936e2c11",
      "name": "Coleman XH936E2C11",
      "seriesId": "series-coleman-lx-series",
      "brandId": "brand-coleman",
      "modelNumber": "XH936E2C11",
      "normalizedModelNumber": "xh936e2c11",
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
      "id": "model-coleman-hh824e2s11",
      "slug": "coleman-hh824e2s11",
      "name": "Coleman HH824E2S11",
      "seriesId": "series-coleman-lx-series",
      "brandId": "brand-coleman",
      "modelNumber": "HH824E2S11",
      "normalizedModelNumber": "hh824e2s11",
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
      "id": "model-coleman-hh836e2s11",
      "slug": "coleman-hh836e2s11",
      "name": "Coleman HH836E2S11",
      "seriesId": "series-coleman-lx-series",
      "brandId": "brand-coleman",
      "modelNumber": "HH836E2S11",
      "normalizedModelNumber": "hh836e2s11",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33600,
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
      "id": "model-coleman-hh860e2s11",
      "slug": "coleman-hh860e2s11",
      "name": "Coleman HH860E2S11",
      "seriesId": "series-coleman-lx-series",
      "brandId": "brand-coleman",
      "modelNumber": "HH860E2S11",
      "normalizedModelNumber": "hh860e2s11",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53000,
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
      "id": "model-coleman-ph9e60n00d21",
      "slug": "coleman-ph9e60n00d21",
      "name": "Coleman PH9E60N00D21",
      "seriesId": "series-coleman-ph9",
      "brandId": "brand-coleman",
      "modelNumber": "PH9E60N00D21",
      "normalizedModelNumber": "ph9e60n00d21",
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
      "id": "model-coleman-hmh72b341",
      "slug": "coleman-hmh72b341",
      "name": "Coleman HMH72B341",
      "seriesId": "series-coleman-hmh7",
      "brandId": "brand-coleman",
      "modelNumber": "HMH72B341",
      "normalizedModelNumber": "hmh72b341",
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
      "id": "model-coleman-xdv60e2d11",
      "slug": "coleman-xdv60e2d11",
      "name": "Coleman XDV60E2D11",
      "seriesId": "series-coleman-xdv",
      "brandId": "brand-coleman",
      "modelNumber": "XDV60E2D11",
      "normalizedModelNumber": "xdv60e2d11",
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
      "id": "model-coleman-ph9e36n00d21",
      "slug": "coleman-ph9e36n00d21",
      "name": "Coleman PH9E36N00D21",
      "seriesId": "series-coleman-ph9",
      "brandId": "brand-coleman",
      "modelNumber": "PH9E36N00D21",
      "normalizedModelNumber": "ph9e36n00d21",
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
      "id": "model-coleman-hh860e2s12",
      "slug": "coleman-hh860e2s12",
      "name": "Coleman HH860E2S12",
      "seriesId": "series-coleman-lx-series",
      "brandId": "brand-coleman",
      "modelNumber": "HH860E2S12",
      "normalizedModelNumber": "hh860e2s12",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53500,
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
      "id": "model-coleman-hh836e2s12",
      "slug": "coleman-hh836e2s12",
      "name": "Coleman HH836E2S12",
      "seriesId": "series-coleman-lx-series",
      "brandId": "brand-coleman",
      "modelNumber": "HH836E2S12",
      "normalizedModelNumber": "hh836e2s12",
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
      "id": "model-coleman-xd524e2d11",
      "slug": "coleman-xd524e2d11",
      "name": "Coleman XD524E2D11",
      "seriesId": "series-coleman-xd5",
      "brandId": "brand-coleman",
      "modelNumber": "XD524E2D11",
      "normalizedModelNumber": "xd524e2d11",
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
      "id": "model-coleman-hc19b2421",
      "slug": "coleman-hc19b2421",
      "name": "Coleman HC19B2421",
      "seriesId": "series-coleman-echelon",
      "brandId": "brand-coleman",
      "modelNumber": "HC19B2421",
      "normalizedModelNumber": "hc19b2421",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23200,
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
      "id": "ou-coleman-urc09cn23stg1",
      "modelNumber": "URC09CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-urc12cn23stg1",
      "modelNumber": "URC12CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-urc09cn15stg1",
      "modelNumber": "URC09CN15STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-umc24cn23stg1",
      "modelNumber": "UMC24CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-urc24cn23stg1",
      "modelNumber": "URC24CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-xh960e2c11",
      "modelNumber": "XH960E2C11",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-umc48cn23stg1",
      "modelNumber": "UMC48CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-urc12cn15stg1",
      "modelNumber": "URC12CN15STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-upc12cn23stg1",
      "modelNumber": "UPC12CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-umc36cn23stg1",
      "modelNumber": "UMC36CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-umc18cn23stg1",
      "modelNumber": "UMC18CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-upc09cn23stg1",
      "modelNumber": "UPC09CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-upc18cn23stg1",
      "modelNumber": "UPC18CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-urc18cn23stg1",
      "modelNumber": "URC18CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-upc24cn23stg1",
      "modelNumber": "UPC24CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-upc48cn23stg1",
      "modelNumber": "UPC48CN23STG1",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-xdv36e2d11",
      "modelNumber": "XDV36E2D11",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-upc36cn23stg1",
      "modelNumber": "UPC36CN23STG1*",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-xh936e2c11",
      "modelNumber": "XH936E2C11",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-hh824e2s11",
      "modelNumber": "HH824E2S11",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-hh836e2s11",
      "modelNumber": "HH836E2S11",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-hh860e2s11",
      "modelNumber": "HH860E2S11",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-ph9e60n00d21",
      "modelNumber": "PH9E60N00D21",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-hmh72b341",
      "modelNumber": "HMH72B341",
      "brandId": "brand-coleman",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-coleman-xdv60e2d11",
      "modelNumber": "XDV60E2D11",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-ph9e36n00d21",
      "modelNumber": "PH9E36N00D21",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-hh860e2s12",
      "modelNumber": "HH860E2S12",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-hh836e2s12",
      "modelNumber": "HH836E2S12",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-xd524e2d11",
      "modelNumber": "XD524E2D11",
      "brandId": "brand-coleman",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-coleman-hc19b2421",
      "modelNumber": "HC19B2421",
      "brandId": "brand-coleman",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-uni09hw23stg1",
      "modelNumber": "UNI09HW23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-uni12hw23stg1",
      "modelNumber": "UNI12HW23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-urd09hw15stg1",
      "modelNumber": "URD09HW15STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42595",
      "modelNumber": "IU-42595",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-uni24hw23stg1",
      "modelNumber": "UNI24HW23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctm60c5cgs2jmc17c2sn1cc",
      "modelNumber": "CTM60C5CGS2+JMC17C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-42597",
      "modelNumber": "IU-42597",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-urd12hw15stg1",
      "modelNumber": "URD12HW15STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctm60c5cgs1jmc17c2sn1cc",
      "modelNumber": "CTM60C5CGS1+JMC17C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmc17c2sn1cc",
      "modelNumber": "CTF60C5CGS1+JMC17C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmc17c2sn1cc",
      "modelNumber": "CTF60C5CGS2+JMC17C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-42596",
      "modelNumber": "IU-42596",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42594",
      "modelNumber": "IU-42594",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-jhc48c5cg2ss1cc",
      "modelNumber": "JHC48C5CG2SS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-uni18hw23stg1",
      "modelNumber": "UNI18HW23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctf60c5cgs1cc",
      "modelNumber": "CTF60C5CGS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1cc",
      "modelNumber": "CTM60D5CGS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmc16c2sn1cc",
      "modelNumber": "CTF60C5CGS1+JMC16C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2jmc20d2sn1cc",
      "modelNumber": "CTM60D5CGS2+JMC20D2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jsc48c5cg2ss1cc",
      "modelNumber": "JSC48C5CG2SS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1cc",
      "modelNumber": "CTF60D5CGS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jmc20d2sn1cc",
      "modelNumber": "CTM60D5CGS1+JMC20D2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jmc20d2sn1cc",
      "modelNumber": "CTF60D5CGS1+JMC20D2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2cc",
      "modelNumber": "CTF60C5CGS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1cc",
      "modelNumber": "CTM60C5CGS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc48d5cg2ss1cc",
      "modelNumber": "JHC48D5CG2SS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmc16c2sn1cc",
      "modelNumber": "CTM60C5CGS1+JMC16C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2cc",
      "modelNumber": "CTM60C5CGS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmc16c2sn1cc",
      "modelNumber": "CTM60C5CGS2+JMC16C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmc16c2sn1cc",
      "modelNumber": "CTF60C5CGS2+JMC16C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jmc20d2sn1cc",
      "modelNumber": "CTF60D5CGS2+JMC20D2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-uni24cs23stg1",
      "modelNumber": "UNI24CS23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-uni48cs23stg1",
      "modelNumber": "UNI48CS23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctf60c5chs2jmc17c2sn1cc",
      "modelNumber": "CTF60C5CHS2+JMC17C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jde24e5xx2ds1",
      "modelNumber": "JDE24E5XX2DS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2cc",
      "modelNumber": "CTM60C5CHS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-uni09cs23stg1",
      "modelNumber": "UNI09CS23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctf60c5chs1cc",
      "modelNumber": "CTF60C5CHS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmc17c2sn1cc",
      "modelNumber": "CTF60C5CHS1+JMC17C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2cc",
      "modelNumber": "CTF60C5CHS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2jmc20d2sn1cc",
      "modelNumber": "CTF60D5CHS2+JMC20D2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1cc",
      "modelNumber": "CTF60D5CHS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1cc",
      "modelNumber": "CTM60D5CHS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1cc",
      "modelNumber": "CTM60C5CHS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmc17c2sn1cc",
      "modelNumber": "CTM60C5CHS1+JMC17C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1jmc20d2sn1cc",
      "modelNumber": "CTM60D5CHS1+JMC20D2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2jmc20d2sn1cc",
      "modelNumber": "CTM60D5CHS2+JMC20D2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-uni12cs23stg1",
      "modelNumber": "UNI12CS23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-uni36hw23stg1",
      "modelNumber": "UNI36HW23STG1*",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-uni18cs23stg1",
      "modelNumber": "UNI18CS23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctf60d5chs1jmc20d2sn1cc",
      "modelNumber": "CTF60D5CHS1+JMC20D2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2cc",
      "modelNumber": "CTM60D5CGS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc60d5ch2ss1cc",
      "modelNumber": "JHC60D5CH2SS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jmc17c2sn1cc",
      "modelNumber": "CTM60C5CHS2+JMC17C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2cc",
      "modelNumber": "CTF60D5CGS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-uni48dt23stg1",
      "modelNumber": "UNI48DT23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-uni36cs23stg1",
      "modelNumber": "UNI36CS23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-uni12dt23stg1",
      "modelNumber": "UNI12DT23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-uni09dt23stg1",
      "modelNumber": "UNI09DT23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctm30b5acs2jmc12b2sn1cc",
      "modelNumber": "CTM30B5ACS2+JMC12B2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jmc12b2sn1cc",
      "modelNumber": "CTF30B5ACS1+JMC12B2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2cc",
      "modelNumber": "CTF30B5ACS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2jmc12b2sn1cc",
      "modelNumber": "CTF30B5ACS2+JMC12B2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc36b5ad2ss1cc",
      "modelNumber": "JHC36B5AD2SS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5ad2ss1",
      "modelNumber": "JHE36B5AD2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5ad2ss2",
      "modelNumber": "JHE36B5AD2SS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jmc12b2sn1txv",
      "modelNumber": "CTU36B5XDS2+JMC12B2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jme08b2sn2txv",
      "modelNumber": "CTU36B5XDS2+JME08B2SN2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jme12b2sn2txv",
      "modelNumber": "CTU36B5XDS2+JME12B2SN2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jmvt12bc2n1txv",
      "modelNumber": "CTU36B5XDS2+JMVT12BC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2",
      "modelNumber": "CTF36B5ADS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jmc12b2sn1txv",
      "modelNumber": "CTU36B5XDS1+JMC12B2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jmvt12bc2n1txv",
      "modelNumber": "CTU36B5XDS1+JMVT12BC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1txv",
      "modelNumber": "CTU36B5XDS1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2",
      "modelNumber": "CTF36C5CDS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jmc16c2sn1",
      "modelNumber": "CTF36C5CDS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jmc17c2sn1",
      "modelNumber": "CTF36C5CDS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jme12c2sn2",
      "modelNumber": "CTF36C5CDS2+JME12C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe30b5ad2ss1",
      "modelNumber": "JHE30B5AD2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe30b5ad2ss2",
      "modelNumber": "JHE30B5AD2SS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jmvt16cc2n1",
      "modelNumber": "CTF36C5ADS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jmvt17cc2n1",
      "modelNumber": "CTF36C5ADS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1",
      "modelNumber": "CTF36C5CDS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmet12cs2n1",
      "modelNumber": "CTF36C5CDS1+JMET12CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmet16cs2n1",
      "modelNumber": "CTF36C5CDS1+JMET16CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmvt17cc2n1",
      "modelNumber": "CTF48C5CFS1+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2",
      "modelNumber": "CTF48C5CFS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1jmc12b2sn1",
      "modelNumber": "CTF36B5CDS1+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1jme12b2sn1",
      "modelNumber": "CTF36B5CDS1+JME12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1jmet12bs2n1",
      "modelNumber": "CTF36B5CDS1+JMET12BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmvt16cc2n1",
      "modelNumber": "CTF36C5CDS1+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmvt17cc2n1",
      "modelNumber": "CTF36C5CDS1+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jme16c2sn2",
      "modelNumber": "CTF36C5ADS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1cc",
      "modelNumber": "CTF30B5ACS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmet16cs2n1",
      "modelNumber": "CTF48C5CFS1+JMET16CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmvt16cc2n1",
      "modelNumber": "CTF48C5CFS1+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jme12c2sn1",
      "modelNumber": "CTF36C5CDS1+JME12C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1jmvt12bc2n1",
      "modelNumber": "CTF36B5CDS1+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jmvt16cc2n1",
      "modelNumber": "CTF48C5CFS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jmvt17cc2n1",
      "modelNumber": "CTF48C5CFS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2",
      "modelNumber": "CTF36C5ADS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jmc16c2sn1",
      "modelNumber": "CTF36C5ADS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jmc17c2sn1",
      "modelNumber": "CTF36C5ADS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmet16cs2n1txv",
      "modelNumber": "CTU48C5XFS1+JMET16CS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jme16c2sn2",
      "modelNumber": "CTM48C5AFS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jme12c2sn2",
      "modelNumber": "CTF36C5ADS2+JME12C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jmc12b2sn1",
      "modelNumber": "CTF36B5ADS2+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jme12b2sn2",
      "modelNumber": "CTF36B5ADS2+JME12B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jmvt12bc2n1",
      "modelNumber": "CTF36B5ADS2+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1",
      "modelNumber": "CTF36B5CDS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmc16c2sn1",
      "modelNumber": "CTF36C5CDS1+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmc17c2sn1",
      "modelNumber": "CTF36C5CDS1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jme12c2sn2",
      "modelNumber": "CTF48C5AFS2+JME12C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jme16c2sn1",
      "modelNumber": "CTF36C5CDS1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2",
      "modelNumber": "CTF36B5CDS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2jmc12b2sn1",
      "modelNumber": "CTF36B5CDS2+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2jme12b2sn2",
      "modelNumber": "CTF36B5CDS2+JME12B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2jmvt12bc2n1",
      "modelNumber": "CTF36B5CDS2+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jmc17c2sn1",
      "modelNumber": "CTM48C5AFS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jme12c2sn2",
      "modelNumber": "CTM48C5AFS2+JME12C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jmvt16cc2n1",
      "modelNumber": "CTM48C5AFS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmet16cs2n1",
      "modelNumber": "CTM36C5CDS1+JMET16CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmvt16cc2n1",
      "modelNumber": "CTM36C5CDS1+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmvt17cc2n1",
      "modelNumber": "CTM36C5CDS1+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2",
      "modelNumber": "CTM36C5CDS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jmc16c2sn1",
      "modelNumber": "CTF48C5AFS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jmc17c2sn1",
      "modelNumber": "CTF48C5AFS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jmvt16cc2n1",
      "modelNumber": "CTM36C5CDS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jmvt17cc2n1",
      "modelNumber": "CTM36C5CDS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2",
      "modelNumber": "CTM48C5AFS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jmc16c2sn1",
      "modelNumber": "CTM48C5AFS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmc17c2sn1",
      "modelNumber": "CTF48C5CFS1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jme12c2sn1",
      "modelNumber": "CTF48C5CFS1+JME12C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jme16c2sn1",
      "modelNumber": "CTF48C5CFS1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5cd2ss2",
      "modelNumber": "JHE36C5CD2SS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jme16c2sn2",
      "modelNumber": "CTF36C5CDS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jmvt16cc2n1",
      "modelNumber": "CTF36C5CDS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jmvt17cc2n1",
      "modelNumber": "CTF36C5CDS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2",
      "modelNumber": "CTF48C5AFS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jmc16c2sn1",
      "modelNumber": "CTF48C5CFS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jmc17c2sn1",
      "modelNumber": "CTF48C5CFS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jme12c2sn2",
      "modelNumber": "CTF48C5CFS2+JME12C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jme16c2sn2",
      "modelNumber": "CTF48C5AFS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jmvt16cc2n1",
      "modelNumber": "CTF48C5AFS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jmvt17cc2n1",
      "modelNumber": "CTF48C5AFS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1",
      "modelNumber": "CTF48C5CFS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmc16c2sn1",
      "modelNumber": "CTF48C5CFS1+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jme12c2sn1txv",
      "modelNumber": "CTU48C5XFS1+JME12C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jme16c2sn1txv",
      "modelNumber": "CTU48C5XFS1+JME16C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmet12cs2n1txv",
      "modelNumber": "CTU48C5XFS1+JMET12CS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmet12cs2n1",
      "modelNumber": "CTF48C5CFS1+JMET12CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jmvt17cc2n1",
      "modelNumber": "CTM48C5CFS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jme12b2sn1txv",
      "modelNumber": "CTU36B5XDS1+JME12B2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jmet12bs2n1txv",
      "modelNumber": "CTU36B5XDS1+JMET12BS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jmc16c2sn1",
      "modelNumber": "CTM36C5ADS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jmc17c2sn1",
      "modelNumber": "CTM36C5ADS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jme12c2sn2",
      "modelNumber": "CTM36C5ADS2+JME12C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jme16c2sn2",
      "modelNumber": "CTF48C5CFS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jse60d5cj2ss1",
      "modelNumber": "JSE60D5CJ2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60c5ch2ss2",
      "modelNumber": "JHE60C5CH2SS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5ch2ss1",
      "modelNumber": "JHE60D5CH2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jse48c5cg2ss1",
      "modelNumber": "JSE48C5CG2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48d5cg2ss1",
      "modelNumber": "JHE48D5CG2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2txv",
      "modelNumber": "CTU36B5XDS2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmc16c2sn1txv",
      "modelNumber": "CTU48C5XFS1+JMC16C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmc17c2sn1txv",
      "modelNumber": "CTU48C5XFS1+JMC17C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmc17c2sn1",
      "modelNumber": "CTM36C5CDS1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jme12c2sn1",
      "modelNumber": "CTM36C5CDS1+JME12C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jme16c2sn1",
      "modelNumber": "CTM36C5CDS1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmc16c2sn1",
      "modelNumber": "CTM36C5CDS1+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmet12cs2n1",
      "modelNumber": "CTM36C5CDS1+JMET12CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2",
      "modelNumber": "CTM36C5ADS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jmc16c2sn1",
      "modelNumber": "CTM36C5CDS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jmc17c2sn1",
      "modelNumber": "CTM36C5CDS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jme12c2sn2",
      "modelNumber": "CTM36C5CDS2+JME12C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jme16c2sn2",
      "modelNumber": "CTM36C5ADS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe42c5cf2ss1",
      "modelNumber": "JHE42C5CF2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jme12c2sn1",
      "modelNumber": "CTM48C5CFS1+JME12C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jme16c2sn1",
      "modelNumber": "CTM48C5CFS1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmet12cs2n1",
      "modelNumber": "CTM48C5CFS1+JMET12CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jme16c2sn2",
      "modelNumber": "CTM36C5CDS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jmvt16cc2n1",
      "modelNumber": "CTM36C5ADS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jmvt17cc2n1",
      "modelNumber": "CTM36C5ADS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-uni18dt23stg1",
      "modelNumber": "UNI18DT23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctu60c5xgs1txv",
      "modelNumber": "CTU60C5XGS1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jmc16c2sn1txv",
      "modelNumber": "CTU60C5XGS2+JMC16C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2jme18d2sn2",
      "modelNumber": "CTM60D5CJS2+JME18D2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2jmvt20dc2n1",
      "modelNumber": "CTM60D5CJS2+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1jmvt20dc2n1txv",
      "modelNumber": "CTU60D5XGS1+JMVT20DC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmet16cs2n1",
      "modelNumber": "CTM48C5CFS1+JMET16CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jmc17c2sn1",
      "modelNumber": "CTM48C5CFS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jme12c2sn2",
      "modelNumber": "CTM48C5CFS2+JME12C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jme16c2sn2",
      "modelNumber": "CTM48C5CFS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5ch2ss2",
      "modelNumber": "JHE60D5CH2SS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5cj2ss1",
      "modelNumber": "JHE60D5CJ2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jsc60d5cj2ss1",
      "modelNumber": "JSC60D5CJ2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jmc16c2sn1",
      "modelNumber": "CTM48C5CFS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jmvt16cc2n1",
      "modelNumber": "CTM48C5CFS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jmvt17cc2n1",
      "modelNumber": "CTM48C5AFS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1",
      "modelNumber": "CTM48C5CFS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmc16c2sn1",
      "modelNumber": "CTM48C5CFS1+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmc17c2sn1",
      "modelNumber": "CTM48C5CFS1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60c5ch2ss1",
      "modelNumber": "JHE60C5CH2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jmc17c2sn1txv",
      "modelNumber": "CTU48C5XFS2+JMC17C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jme12c2sn2txv",
      "modelNumber": "CTU48C5XFS2+JME12C2SN2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jme16c2sn2txv",
      "modelNumber": "CTU48C5XFS2+JME16C2SN2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmvt16cc2n1",
      "modelNumber": "CTM48C5CFS1+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmvt17cc2n1",
      "modelNumber": "CTM48C5CFS1+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2",
      "modelNumber": "CTM48C5CFS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc42c5cf2ss1",
      "modelNumber": "JHC42C5CF2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5cd2ss1",
      "modelNumber": "JHE36B5CD2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5ad2ss2",
      "modelNumber": "JHE36C5AD2SS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmc16c2sn1txv",
      "modelNumber": "CTU60C5XGS1+JMC16C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jme16c2sn1txv",
      "modelNumber": "CTU60C5XGS1+JME16C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmet16cs2n1txv",
      "modelNumber": "CTU60C5XGS1+JMET16CS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jme18d2sn1",
      "modelNumber": "CTM60D5CGS1+JME18D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jme16c2sn1",
      "modelNumber": "CTM60C5CHS1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jmvt20dc2n1",
      "modelNumber": "CTF60D5CGS1+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jmc20d2sn1",
      "modelNumber": "CTF60D5CGS2+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5cd2ss1",
      "modelNumber": "JHE36C5CD2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmvt16cc2n1txv",
      "modelNumber": "CTU48C5XFS1+JMVT16CC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmvt17cc2n1txv",
      "modelNumber": "CTU48C5XFS1+JMVT17CC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1txv",
      "modelNumber": "CTU48C5XFS1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jmc16c2sn1txv",
      "modelNumber": "CTU48C5XFS2+JMC16C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jmvt16cc2n1txv",
      "modelNumber": "CTU48C5XFS2+JMVT16CC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmc17c2sn1",
      "modelNumber": "CTF60C5CHS1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jme16c2sn1",
      "modelNumber": "CTF60C5CHS1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmet16cs2n1",
      "modelNumber": "CTF60C5CHS1+JMET16CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmvt17cc2n1",
      "modelNumber": "CTF60C5CHS1+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jmvt17cc2n1txv",
      "modelNumber": "CTU48C5XFS2+JMVT17CC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2txv",
      "modelNumber": "CTU48C5XFS2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc36b5cd2ss1",
      "modelNumber": "JHC36B5CD2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc36c5cd2ss1",
      "modelNumber": "JHC36C5CD2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1jmc20d2sn1txv",
      "modelNumber": "CTU60D5XHS1+JMC20D2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1jme18d2sn1txv",
      "modelNumber": "CTU60D5XHS1+JME18D2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmvt16cc2n1txv",
      "modelNumber": "CTU60C5XGS1+JMVT16CC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jme16c2sn2txv",
      "modelNumber": "CTU60C5XGS2+JME16C2SN2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jmvt16cc2n1txv",
      "modelNumber": "CTU60C5XGS2+JMVT16CC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2",
      "modelNumber": "CTM60D5CJS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2jmc20d2sn1",
      "modelNumber": "CTM60D5CJS2+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jme18d2sn2",
      "modelNumber": "CTF60D5CGS2+JME18D2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jmet18ds2n1",
      "modelNumber": "CTF60D5CGS1+JMET18DS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1jme18d2sn1txv",
      "modelNumber": "CTU60D5XGS1+JME18D2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1jmet18ds2n1txv",
      "modelNumber": "CTU60D5XGS1+JMET18DS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmvt17cc2n1",
      "modelNumber": "CTM60C5CHS1+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2",
      "modelNumber": "CTM60C5CHS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jmc17c2sn1",
      "modelNumber": "CTM60C5CHS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jme16c2sn2",
      "modelNumber": "CTM60C5CHS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1jmet18ds2n1txv",
      "modelNumber": "CTU60D5XHS1+JMET18DS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmc17c2sn1",
      "modelNumber": "CTM60C5CGS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jme16c2sn2",
      "modelNumber": "CTM60C5CGS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmvt16cc2n1",
      "modelNumber": "CTM60C5CGS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmvt17cc2n1",
      "modelNumber": "CTM60C5CGS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2jmc20d2sn1",
      "modelNumber": "CTF60D5CJS2+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2jme18d2sn2",
      "modelNumber": "CTF60D5CJS2+JME18D2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jmc20d2sn1",
      "modelNumber": "CTF60D5CGS1+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jme18d2sn1",
      "modelNumber": "CTF60D5CGS1+JME18D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmc17c2sn1",
      "modelNumber": "CTM60C5CHS1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2jmvt20dc2n1",
      "modelNumber": "CTF60D5CJS2+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1",
      "modelNumber": "CTM60C5CGS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jme16c2sn1",
      "modelNumber": "CTF60C5CGS1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmet16cs2n1",
      "modelNumber": "CTF60C5CGS1+JMET16CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmvt16cc2n1",
      "modelNumber": "CTF60C5CGS1+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmvt16cc2n1",
      "modelNumber": "CTM60C5CGS1+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmvt17cc2n1",
      "modelNumber": "CTM60C5CGS1+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmet16cs2n1",
      "modelNumber": "CTM60C5CHS1+JMET16CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1jme18d2sn1",
      "modelNumber": "CTM60D5CHS1+JME18D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1jmet18ds2n1",
      "modelNumber": "CTM60D5CHS1+JMET18DS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1jmvt20dc2n1",
      "modelNumber": "CTM60D5CHS1+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2",
      "modelNumber": "CTM60D5CHS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jmvt17cc2n1",
      "modelNumber": "CTM60C5CHS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1txv",
      "modelNumber": "CTU60D5XHS1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1",
      "modelNumber": "CTM60C5CHS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1",
      "modelNumber": "CTF60D5CHS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-uni24dt23stg1",
      "modelNumber": "UNI24DT23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctm60d5chs1jmc20d2sn1",
      "modelNumber": "CTM60D5CHS1+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jmet18ds2n1",
      "modelNumber": "CTF60D5CHS1+JMET18DS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jmvt20dc2n1",
      "modelNumber": "CTF60D5CHS1+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2",
      "modelNumber": "CTF60D5CHS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2jmc20d2sn1",
      "modelNumber": "CTF60D5CHS2+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2jmc20d2sn1",
      "modelNumber": "CTM60D5CHS2+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2jmvt20dc2n1",
      "modelNumber": "CTF60D5CHS2+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2jmvt20dc2n1",
      "modelNumber": "CTM60D5CHS2+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1",
      "modelNumber": "CTM60D5CJS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1jme18d2sn1",
      "modelNumber": "CTF60D5CJS1+JME18D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1jmet18ds2n1",
      "modelNumber": "CTF60D5CJS1+JMET18DS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1jmvt20dc2n1",
      "modelNumber": "CTF60D5CJS1+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2",
      "modelNumber": "CTF60D5CJS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jmvt20dc2n1",
      "modelNumber": "CTF60D5CGS2+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1jmc20d2sn1txv",
      "modelNumber": "CTU60D5XGS1+JMC20D2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jmc20d2sn1",
      "modelNumber": "CTF60D5CHS1+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jme18d2sn1",
      "modelNumber": "CTF60D5CHS1+JME18D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmc16c2sn1",
      "modelNumber": "CTM60C5CGS1+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmc17c2sn1",
      "modelNumber": "CTM60C5CGS1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jme16c2sn1",
      "modelNumber": "CTM60C5CGS1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmet16cs2n1",
      "modelNumber": "CTM60C5CGS1+JMET16CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2jme18d2sn2",
      "modelNumber": "CTF60D5CHS2+JME18D2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1jmvt20dc2n1txv",
      "modelNumber": "CTU60D5XHS1+JMVT20DC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1",
      "modelNumber": "CTF60D5CJS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1jmc20d2sn1",
      "modelNumber": "CTF60D5CJS1+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc60d5ch2ss1",
      "modelNumber": "JHC60D5CH2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc60d5cj2ss1",
      "modelNumber": "JHC60D5CJ2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48c5cg2ss1",
      "modelNumber": "JHE48C5CG2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48c5cg2ss2",
      "modelNumber": "JHE48C5CG2SS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2txv",
      "modelNumber": "CTU60C5XGS2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1",
      "modelNumber": "CTM36B5ADS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc36b5ad2ss1",
      "modelNumber": "JHC36B5AD2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe24b5ac2ss1",
      "modelNumber": "JHE24B5AC2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe24b5ac2ss2",
      "modelNumber": "JHE24B5AC2SS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jmet08bs2n1txv",
      "modelNumber": "CTU36B5XDS1+JMET08BS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jmc12b2sn1cc",
      "modelNumber": "CTF36B5ADS2+JMC12B2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2cc",
      "modelNumber": "CTM30B5ACS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmvt12bc2n1",
      "modelNumber": "CTF36B5ADS1+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jme08b2sn1",
      "modelNumber": "CTM36B5ADS1+JME08B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jme08b2sn1",
      "modelNumber": "CTM30B5ACS1+JME08B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2",
      "modelNumber": "CTM36B5ADS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jme12b2sn1",
      "modelNumber": "CTM30B5ACS1+JME12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1",
      "modelNumber": "CTM36C5CDS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1",
      "modelNumber": "CTF60C5CHS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jme12b2sn1",
      "modelNumber": "CTM36B5ADS1+JME12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmc12b2sn1cc",
      "modelNumber": "CTM36B5ADS1+JMC12B2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2cc",
      "modelNumber": "CTM60D5CHS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30a5ads1",
      "modelNumber": "CTF30A5ADS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1cc",
      "modelNumber": "CTM30B5ACS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jmc12b2sn1cc",
      "modelNumber": "CTM30B5ACS1+JMC12B2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2cc",
      "modelNumber": "CTF60D5CHS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30a5ads2",
      "modelNumber": "CTF30A5ADS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jme08b2sn1",
      "modelNumber": "CTF30B5ACS1+JME08B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc36c5ad2ss1cc",
      "modelNumber": "JHC36C5AD2SS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs1jme08b2sn1txv",
      "modelNumber": "CTU30B5XCS1+JME08B2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs1jme12b2sn1txv",
      "modelNumber": "CTU30B5XCS1+JME12B2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jme12b2sn1",
      "modelNumber": "CTF30B5ACS1+JME12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jme08b2sn2",
      "modelNumber": "CTF36B5ADS2+JME08B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc60c5ch2ss1cc",
      "modelNumber": "JHC60C5CH2SS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1",
      "modelNumber": "CTF36B5ADS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmc12b2sn1",
      "modelNumber": "CTF36B5ADS1+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jme08b2sn1",
      "modelNumber": "CTF36B5ADS1+JME08B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmvt16cc2n1",
      "modelNumber": "CTF60C5CGS2+JMVT16CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jme12b2sn1",
      "modelNumber": "CTF36B5ADS1+JME12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmet08bs2n1",
      "modelNumber": "CTF36B5ADS1+JMET08BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmet12bs2n1",
      "modelNumber": "CTF36B5ADS1+JMET12BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jde36e5xx2ds1",
      "modelNumber": "JDE36E5XX2DS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jme08b2sn1txv",
      "modelNumber": "CTU36B5XDS1+JME08B2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-13687",
      "modelNumber": "IU-13687",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2",
      "modelNumber": "CTF60C5CHS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jmc17c2sn1",
      "modelNumber": "CTF60C5CHS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jme16c2sn2",
      "modelNumber": "CTF60C5CHS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jmvt17cc2n1",
      "modelNumber": "CTF60C5CHS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2",
      "modelNumber": "CTF60C5CGS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2",
      "modelNumber": "CTM60C5CGS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmc16c2sn1",
      "modelNumber": "CTM60C5CGS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jme16c2sn2",
      "modelNumber": "CTF60C5CGS2+JME16C2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2jme18d2sn2",
      "modelNumber": "CTM60D5CHS2+JME18D2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmc16c2sn1",
      "modelNumber": "CTF60C5CGS2+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1jmc20d2sn1",
      "modelNumber": "CTM60D5CJS1+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1jme18d2sn1",
      "modelNumber": "CTM60D5CJS1+JME18D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1jmet18ds2n1",
      "modelNumber": "CTM60D5CJS1+JMET18DS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1jmvt20dc2n1",
      "modelNumber": "CTM60D5CJS1+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1",
      "modelNumber": "CTF60C5CGS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmc16c2sn1",
      "modelNumber": "CTF60C5CGS1+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmc12b2sn1cc",
      "modelNumber": "CTF36B5ADS1+JMC12B2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1",
      "modelNumber": "CTM60D5CHS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhetb36dbcs2n1",
      "modelNumber": "JHETB36DBCS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhvtc36dbcc2n1",
      "modelNumber": "JHVTC36DBCC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb30cxxn1jmet12bs2n1txv",
      "modelNumber": "XAFB30CXXN1+JMET12BS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dxxn1jmet12cs2n1txv",
      "modelNumber": "XAFC36DXXN1+JMET12CS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dxxn1txv",
      "modelNumber": "XAFC36DXXN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dbcn1jme16c2sn1",
      "modelNumber": "XAFC36DBCN1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dbcn1jmet12cs2n1",
      "modelNumber": "XAFC36DBCN1+JMET12CS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhvtb36dbcc2n1",
      "modelNumber": "JHVTB36DBCC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dxxn1jmet12bs2n1txv",
      "modelNumber": "XAFB36DXXN1+JMET12BS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dbcn1jmc16c2sn1",
      "modelNumber": "XAHC36DBCN1+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dxxn1jmvt12bc2n1txv",
      "modelNumber": "XAFB36DXXN1+JMVT12BC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dxxn1txv",
      "modelNumber": "XAFB36DXXN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc30cxxn1jmet12cs2n1txv",
      "modelNumber": "XAFC30CXXN1+JMET12CS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc30cxxn1txv",
      "modelNumber": "XAFC30CXXN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dbcn1",
      "modelNumber": "XAFC36DBCN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dbcn1jmc16c2sn1",
      "modelNumber": "XAFC36DBCN1+JMC16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dbcn1jme12c2sn1",
      "modelNumber": "XAFC36DBCN1+JME12C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb30cxxn1jmvt12bc2n1txv",
      "modelNumber": "XAFB30CXXN1+JMVT12BC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb30cxxn1txv",
      "modelNumber": "XAFB30CXXN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dbcn1",
      "modelNumber": "XAFB36DBCN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc30cxxn1txv",
      "modelNumber": "XAHC30CXXN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dbcn1",
      "modelNumber": "XAHC36DBCN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dbcn1jme12b2sn1",
      "modelNumber": "XAFB36DBCN1+JME12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dbcn1jmet12bs2n1",
      "modelNumber": "XAFB36DBCN1+JMET12BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dbcn1jmvt12bc2n1",
      "modelNumber": "XAFB36DBCN1+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc24b5ac2ss1cc",
      "modelNumber": "JHC24B5AC2SS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dbcn1jme12c2sn1",
      "modelNumber": "XAHC36DBCN1+JME12C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dbcn1jme16c2sn1",
      "modelNumber": "XAHC36DBCN1+JME16C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dxxn1txv",
      "modelNumber": "XAHC36DXXN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jde48f5xx2ds1",
      "modelNumber": "JDE48F5XX2DS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-uni36dt23stg1",
      "modelNumber": "UNI36DT23STG1",
      "brandId": "brand-coleman",
      "type": "wall-single"
    },
    {
      "id": "iu-ctu30b5xcs1jmet08bs2n1txv",
      "modelNumber": "CTU30B5XCS1+JMET08BS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs1jmet12bs2n1txv",
      "modelNumber": "CTU30B5XCS1+JMET12BS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs1jmvt12bc2n1txv",
      "modelNumber": "CTU30B5XCS1+JMVT12BC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs1txv",
      "modelNumber": "CTU30B5XCS1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmet08bs2n1",
      "modelNumber": "CTM36B5ADS1+JMET08BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmet12bs2n1",
      "modelNumber": "CTM36B5ADS1+JMET12BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmvt12bc2n1",
      "modelNumber": "CTM36B5ADS1+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jmvt12bc2n1",
      "modelNumber": "CTM36B5ADS2+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs1jmc12b2sn1txv",
      "modelNumber": "CTU30B5XCS1+JMC12B2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jmet08bs2n1",
      "modelNumber": "CTF30B5ACS1+JMET08BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jmet12bs2n1",
      "modelNumber": "CTF30B5ACS1+JMET12BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2",
      "modelNumber": "CTF30B5ACS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2jmc12b2sn1",
      "modelNumber": "CTF30B5ACS2+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2jme08b2sn2",
      "modelNumber": "CTF30B5ACS2+JME08B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2jme12b2sn2",
      "modelNumber": "CTF30B5ACS2+JME12B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2jmvt12bc2n1",
      "modelNumber": "CTF30B5ACS2+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-13686",
      "modelNumber": "IU-13686",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmvt17cc2n1",
      "modelNumber": "CTF60C5CGS2+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmvt17cc2n1",
      "modelNumber": "CTF60C5CGS1+JMVT17CC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2jme18d2sn2",
      "modelNumber": "CTM60D5CGS2+JME18D2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmc17c2sn1",
      "modelNumber": "CTF60C5CGS2+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1",
      "modelNumber": "CTF60D5CGS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2jmvt20dc2n1",
      "modelNumber": "CTM60D5CGS2+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmc17c2sn1",
      "modelNumber": "CTF60C5CGS1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc48d5cg2ss1",
      "modelNumber": "JHC48D5CG2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jmet18ds2n1",
      "modelNumber": "CTM60D5CGS1+JMET18DS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jmvt20dc2n1",
      "modelNumber": "CTM60D5CGS1+JMVT20DC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2",
      "modelNumber": "CTM60D5CGS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2jmc20d2sn1",
      "modelNumber": "CTM60D5CGS2+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1",
      "modelNumber": "CTM60D5CGS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jmc20d2sn1",
      "modelNumber": "CTM60D5CGS1+JMC20D2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jmc17c2sn1txv",
      "modelNumber": "CTU60C5XGS2+JMC17C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jsc48d5cg2ss1",
      "modelNumber": "JSC48D5CG2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafa30dxxn1txv",
      "modelNumber": "XAFA30DXXN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmc17c2sn1txv",
      "modelNumber": "CTU60C5XGS1+JMC17C2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jmvt17cc2n1txv",
      "modelNumber": "CTU60C5XGS2+JMVT17CC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1txv",
      "modelNumber": "CTU60D5XGS1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmvt17cc2n1txv",
      "modelNumber": "CTU60C5XGS1+JMVT17CC2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2",
      "modelNumber": "CTF60D5CGS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1cc",
      "modelNumber": "CTF36B5ADS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5cds1",
      "modelNumber": "CTM36B5CDS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5cds1jmvt12bc2n1",
      "modelNumber": "CTM36B5CDS1+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2jme08b2sn2",
      "modelNumber": "CTM30B5ACS2+JME08B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jme08b2sn2",
      "modelNumber": "CTM36B5ADS2+JME08B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2jmc12b2sn1",
      "modelNumber": "CTM30B5ACS2+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2",
      "modelNumber": "CTM30B5ACS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jme12b2sn2",
      "modelNumber": "CTM36B5ADS2+JME12B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1",
      "modelNumber": "CTM30B5ACS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jmc12b2sn1",
      "modelNumber": "CTM30B5ACS1+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jmc12b2sn1",
      "modelNumber": "CTM36B5ADS2+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2jmvt12bc2n1",
      "modelNumber": "CTM30B5ACS2+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmc12b2sn1",
      "modelNumber": "CTM36B5ADS1+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jmvt12bc2n1",
      "modelNumber": "CTM30B5ACS1+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jmet12bs2n1",
      "modelNumber": "CTM30B5ACS1+JMET12BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jmet08bs2n1",
      "modelNumber": "CTM30B5ACS1+JMET08BS2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads1jmc16c2sn1cc",
      "modelNumber": "CTM36C5ADS1+JMC16C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2cc",
      "modelNumber": "CTM36C5ADS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jmc16c2sn1cc",
      "modelNumber": "CTM36C5ADS2+JMC16C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads1jmc16c2sn1cc",
      "modelNumber": "CTF36C5ADS1+JMC16C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2cc",
      "modelNumber": "CTF36C5ADS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jmc16c2sn1cc",
      "modelNumber": "CTF36C5ADS2+JMC16C2SN1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2cc",
      "modelNumber": "CTM36B5ADS2+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads1cc",
      "modelNumber": "CTM36C5ADS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jmc12b2sn1",
      "modelNumber": "CTF30B5ACS1+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dban1",
      "modelNumber": "XAFB36DBAN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jmvt12bc2n1",
      "modelNumber": "CTF30B5ACS1+JMVT12BC2N1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1",
      "modelNumber": "CTF30B5ACS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2jme12b2sn2",
      "modelNumber": "CTM30B5ACS2+JME12B2SN2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1cc",
      "modelNumber": "CTM36B5ADS1+CC",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs2jmc12b2sn1txv",
      "modelNumber": "CTU30B5XCS2+JMC12B2SN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs2jme08b2sn2txv",
      "modelNumber": "CTU30B5XCS2+JME08B2SN2+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahb30cxxn1txv",
      "modelNumber": "XAHB30CXXN1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dbcn1jmc12b2sn1",
      "modelNumber": "XAFB36DBCN1+JMC12B2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dbcn1jmc17c2sn1",
      "modelNumber": "XAFC36DBCN1+JMC17C2SN1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc60c5ch2ss1",
      "modelNumber": "JHC60C5CH2SS1",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5cds2",
      "modelNumber": "CTM36B5CDS2",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahb30cxxn1jmet12bs2n1txv",
      "modelNumber": "XAHB30CXXN1+JMET12BS2N1+TXV",
      "brandId": "brand-coleman",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-coleman-urc09cn23stg1-uni09hw23stg1",
      "slug": "coleman-urc09cn23stg1-uni09hw23stg1",
      "modelId": "model-coleman-urc09cn23stg1",
      "outdoorUnitId": "ou-coleman-urc09cn23stg1",
      "indoorUnitId": "iu-uni09hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-urc12cn23stg1-uni12hw23stg1",
      "slug": "coleman-urc12cn23stg1-uni12hw23stg1",
      "modelId": "model-coleman-urc12cn23stg1",
      "outdoorUnitId": "ou-coleman-urc12cn23stg1",
      "indoorUnitId": "iu-uni12hw23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-urc09cn15stg1-urd09hw15stg1",
      "slug": "coleman-urc09cn15stg1-urd09hw15stg1",
      "modelId": "model-coleman-urc09cn15stg1",
      "outdoorUnitId": "ou-coleman-urc09cn15stg1",
      "indoorUnitId": "iu-urd09hw15stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-umc24cn23stg1-iu-42595",
      "slug": "coleman-umc24cn23stg1-iu-42595",
      "modelId": "model-coleman-umc24cn23stg1",
      "outdoorUnitId": "ou-coleman-umc24cn23stg1",
      "indoorUnitId": "iu-iu-42595",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-urc24cn23stg1-uni24hw23stg1",
      "slug": "coleman-urc24cn23stg1-uni24hw23stg1",
      "modelId": "model-coleman-urc24cn23stg1",
      "outdoorUnitId": "ou-coleman-urc24cn23stg1",
      "indoorUnitId": "iu-uni24hw23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5cgs2jmc17c2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60c5cgs2jmc17c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5cgs2jmc17c2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-umc48cn23stg1-iu-42597",
      "slug": "coleman-umc48cn23stg1-iu-42597",
      "modelId": "model-coleman-umc48cn23stg1",
      "outdoorUnitId": "ou-coleman-umc48cn23stg1",
      "indoorUnitId": "iu-iu-42597",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-urc12cn15stg1-urd12hw15stg1",
      "slug": "coleman-urc12cn15stg1-urd12hw15stg1",
      "modelId": "model-coleman-urc12cn15stg1",
      "outdoorUnitId": "ou-coleman-urc12cn15stg1",
      "indoorUnitId": "iu-urd12hw15stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5cgs1jmc17c2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60c5cgs1jmc17c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5cgs1jmc17c2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5cgs1jmc17c2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60c5cgs1jmc17c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5cgs1jmc17c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc12cn23stg1-uni12hw23stg1",
      "slug": "coleman-upc12cn23stg1-uni12hw23stg1",
      "modelId": "model-coleman-upc12cn23stg1",
      "outdoorUnitId": "ou-coleman-upc12cn23stg1",
      "indoorUnitId": "iu-uni12hw23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5cgs2jmc17c2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60c5cgs2jmc17c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5cgs2jmc17c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-umc36cn23stg1-iu-42596",
      "slug": "coleman-umc36cn23stg1-iu-42596",
      "modelId": "model-coleman-umc36cn23stg1",
      "outdoorUnitId": "ou-coleman-umc36cn23stg1",
      "indoorUnitId": "iu-iu-42596",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-umc18cn23stg1-iu-42594",
      "slug": "coleman-umc18cn23stg1-iu-42594",
      "modelId": "model-coleman-umc18cn23stg1",
      "outdoorUnitId": "ou-coleman-umc18cn23stg1",
      "indoorUnitId": "iu-iu-42594",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc09cn23stg1-uni09hw23stg1",
      "slug": "coleman-upc09cn23stg1-uni09hw23stg1",
      "modelId": "model-coleman-upc09cn23stg1",
      "outdoorUnitId": "ou-coleman-upc09cn23stg1",
      "indoorUnitId": "iu-uni09hw23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-jhc48c5cg2ss1cc",
      "slug": "coleman-xh960e2c11-jhc48c5cg2ss1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-jhc48c5cg2ss1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc18cn23stg1-uni18hw23stg1",
      "slug": "coleman-upc18cn23stg1-uni18hw23stg1",
      "modelId": "model-coleman-upc18cn23stg1",
      "outdoorUnitId": "ou-coleman-upc18cn23stg1",
      "indoorUnitId": "iu-uni18hw23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5cgs1cc",
      "slug": "coleman-xh960e2c11-ctf60c5cgs1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5cgs1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60d5cgs1cc",
      "slug": "coleman-xh960e2c11-ctm60d5cgs1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60d5cgs1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5cgs1jmc16c2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60c5cgs1jmc16c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5cgs1jmc16c2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60d5cgs2jmc20d2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60d5cgs2jmc20d2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60d5cgs2jmc20d2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-jsc48c5cg2ss1cc",
      "slug": "coleman-xh960e2c11-jsc48c5cg2ss1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-jsc48c5cg2ss1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60d5cgs1cc",
      "slug": "coleman-xh960e2c11-ctf60d5cgs1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60d5cgs1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60d5cgs1jmc20d2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60d5cgs1jmc20d2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60d5cgs1jmc20d2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60d5cgs1jmc20d2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60d5cgs1jmc20d2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60d5cgs1jmc20d2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5cgs2cc",
      "slug": "coleman-xh960e2c11-ctf60c5cgs2cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5cgs2cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5cgs1cc",
      "slug": "coleman-xh960e2c11-ctm60c5cgs1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5cgs1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-urc18cn23stg1-uni18hw23stg1",
      "slug": "coleman-urc18cn23stg1-uni18hw23stg1",
      "modelId": "model-coleman-urc18cn23stg1",
      "outdoorUnitId": "ou-coleman-urc18cn23stg1",
      "indoorUnitId": "iu-uni18hw23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc24cn23stg1-uni24hw23stg1",
      "slug": "coleman-upc24cn23stg1-uni24hw23stg1",
      "modelId": "model-coleman-upc24cn23stg1",
      "outdoorUnitId": "ou-coleman-upc24cn23stg1",
      "indoorUnitId": "iu-uni24hw23stg1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-jhc48d5cg2ss1cc",
      "slug": "coleman-xh960e2c11-jhc48d5cg2ss1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-jhc48d5cg2ss1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5cgs1jmc16c2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60c5cgs1jmc16c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5cgs1jmc16c2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5cgs2cc",
      "slug": "coleman-xh960e2c11-ctm60c5cgs2cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5cgs2cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5cgs2jmc16c2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60c5cgs2jmc16c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5cgs2jmc16c2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5cgs2jmc16c2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60c5cgs2jmc16c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5cgs2jmc16c2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60d5cgs2jmc20d2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60d5cgs2jmc20d2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60d5cgs2jmc20d2sn1cc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc24cn23stg1-uni24cs23stg1",
      "slug": "coleman-upc24cn23stg1-uni24cs23stg1",
      "modelId": "model-coleman-upc24cn23stg1",
      "outdoorUnitId": "ou-coleman-upc24cn23stg1",
      "indoorUnitId": "iu-uni24cs23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc48cn23stg1-uni48cs23stg1",
      "slug": "coleman-upc48cn23stg1-uni48cs23stg1",
      "modelId": "model-coleman-upc48cn23stg1",
      "outdoorUnitId": "ou-coleman-upc48cn23stg1",
      "indoorUnitId": "iu-uni48cs23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5chs2jmc17c2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60c5chs2jmc17c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5chs2jmc17c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xdv36e2d11-jde24e5xx2ds1",
      "slug": "coleman-xdv36e2d11-jde24e5xx2ds1",
      "modelId": "model-coleman-xdv36e2d11",
      "outdoorUnitId": "ou-coleman-xdv36e2d11",
      "indoorUnitId": "iu-jde24e5xx2ds1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5chs2cc",
      "slug": "coleman-xh960e2c11-ctm60c5chs2cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5chs2cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc09cn23stg1-uni09cs23stg1",
      "slug": "coleman-upc09cn23stg1-uni09cs23stg1",
      "modelId": "model-coleman-upc09cn23stg1",
      "outdoorUnitId": "ou-coleman-upc09cn23stg1",
      "indoorUnitId": "iu-uni09cs23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5chs1cc",
      "slug": "coleman-xh960e2c11-ctf60c5chs1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5chs1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5chs1jmc17c2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60c5chs1jmc17c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5chs1jmc17c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60c5chs2cc",
      "slug": "coleman-xh960e2c11-ctf60c5chs2cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60c5chs2cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60d5chs2jmc20d2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60d5chs2jmc20d2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60d5chs2jmc20d2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60d5chs1cc",
      "slug": "coleman-xh960e2c11-ctf60d5chs1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60d5chs1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60d5chs1cc",
      "slug": "coleman-xh960e2c11-ctm60d5chs1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60d5chs1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5chs1cc",
      "slug": "coleman-xh960e2c11-ctm60c5chs1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5chs1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5chs1jmc17c2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60c5chs1jmc17c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5chs1jmc17c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60d5chs1jmc20d2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60d5chs1jmc20d2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60d5chs1jmc20d2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60d5chs2jmc20d2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60d5chs2jmc20d2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60d5chs2jmc20d2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc12cn23stg1-uni12cs23stg1",
      "slug": "coleman-upc12cn23stg1-uni12cs23stg1",
      "modelId": "model-coleman-upc12cn23stg1",
      "outdoorUnitId": "ou-coleman-upc12cn23stg1",
      "indoorUnitId": "iu-uni12cs23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc36cn23stg1-uni36hw23stg1",
      "slug": "coleman-upc36cn23stg1-uni36hw23stg1",
      "modelId": "model-coleman-upc36cn23stg1",
      "outdoorUnitId": "ou-coleman-upc36cn23stg1",
      "indoorUnitId": "iu-uni36hw23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc18cn23stg1-uni18cs23stg1",
      "slug": "coleman-upc18cn23stg1-uni18cs23stg1",
      "modelId": "model-coleman-upc18cn23stg1",
      "outdoorUnitId": "ou-coleman-upc18cn23stg1",
      "indoorUnitId": "iu-uni18cs23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60d5chs1jmc20d2sn1cc",
      "slug": "coleman-xh960e2c11-ctf60d5chs1jmc20d2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60d5chs1jmc20d2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60d5cgs2cc",
      "slug": "coleman-xh960e2c11-ctm60d5cgs2cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60d5cgs2cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-jhc60d5ch2ss1cc",
      "slug": "coleman-xh960e2c11-jhc60d5ch2ss1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-jhc60d5ch2ss1cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60c5chs2jmc17c2sn1cc",
      "slug": "coleman-xh960e2c11-ctm60c5chs2jmc17c2sn1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60c5chs2jmc17c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60d5cgs2cc",
      "slug": "coleman-xh960e2c11-ctf60d5cgs2cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60d5cgs2cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc48cn23stg1-uni48dt23stg1",
      "slug": "coleman-upc48cn23stg1-uni48dt23stg1",
      "modelId": "model-coleman-upc48cn23stg1",
      "outdoorUnitId": "ou-coleman-upc48cn23stg1",
      "indoorUnitId": "iu-uni48dt23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc36cn23stg1-uni36cs23stg1",
      "slug": "coleman-upc36cn23stg1-uni36cs23stg1",
      "modelId": "model-coleman-upc36cn23stg1",
      "outdoorUnitId": "ou-coleman-upc36cn23stg1",
      "indoorUnitId": "iu-uni36cs23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc12cn23stg1-uni12dt23stg1",
      "slug": "coleman-upc12cn23stg1-uni12dt23stg1",
      "modelId": "model-coleman-upc12cn23stg1",
      "outdoorUnitId": "ou-coleman-upc12cn23stg1",
      "indoorUnitId": "iu-uni12dt23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc09cn23stg1-uni09dt23stg1",
      "slug": "coleman-upc09cn23stg1-uni09dt23stg1",
      "modelId": "model-coleman-upc09cn23stg1",
      "outdoorUnitId": "ou-coleman-upc09cn23stg1",
      "indoorUnitId": "iu-uni09dt23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm30b5acs2jmc12b2sn1cc",
      "slug": "coleman-xh936e2c11-ctm30b5acs2jmc12b2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm30b5acs2jmc12b2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf30b5acs1jmc12b2sn1cc",
      "slug": "coleman-xh936e2c11-ctf30b5acs1jmc12b2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf30b5acs1jmc12b2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf30b5acs2cc",
      "slug": "coleman-xh936e2c11-ctf30b5acs2cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf30b5acs2cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf30b5acs2jmc12b2sn1cc",
      "slug": "coleman-xh936e2c11-ctf30b5acs2jmc12b2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf30b5acs2jmc12b2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-jhc36b5ad2ss1cc",
      "slug": "coleman-xh936e2c11-jhc36b5ad2ss1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-jhc36b5ad2ss1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-jhe36b5ad2ss1",
      "slug": "coleman-hh824e2s11-jhe36b5ad2ss1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-jhe36b5ad2ss1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-jhe36b5ad2ss2",
      "slug": "coleman-hh824e2s11-jhe36b5ad2ss2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-jhe36b5ad2ss2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds2jmc12b2sn1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds2jmc12b2sn1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jmc12b2sn1txv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds2jme08b2sn2txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds2jme08b2sn2txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme08b2sn2txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds2jme12b2sn2txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds2jme12b2sn2txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme12b2sn2txv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds2jmvt12bc2n1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds2jmvt12bc2n1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jmvt12bc2n1txv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5ads2",
      "slug": "coleman-hh836e2s11-ctf36b5ads2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5ads2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds1jmc12b2sn1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds1jmc12b2sn1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmc12b2sn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds1jmvt12bc2n1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds1jmvt12bc2n1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmvt12bc2n1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds2",
      "slug": "coleman-hh836e2s11-ctf36c5cds2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds2jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctf36c5cds2jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds2jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctf36c5cds2jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds2jme12c2sn2",
      "slug": "coleman-hh836e2s11-ctf36c5cds2jme12c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jme12c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-jhe30b5ad2ss1",
      "slug": "coleman-hh824e2s11-jhe30b5ad2ss1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-jhe30b5ad2ss1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-jhe30b5ad2ss2",
      "slug": "coleman-hh824e2s11-jhe30b5ad2ss2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-jhe30b5ad2ss2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5ads2jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctf36c5ads2jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5ads2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5ads2jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctf36c5ads2jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5ads2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1jmet12cs2n1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1jmet12cs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmet12cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1jmet16cs2n1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1jmet16cs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmet16cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmvt17cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs2",
      "slug": "coleman-hh836e2s11-ctf48c5cfs2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds1jmc12b2sn1",
      "slug": "coleman-hh836e2s11-ctf36b5cds1jmc12b2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds1jmc12b2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds1jme12b2sn1",
      "slug": "coleman-hh836e2s11-ctf36b5cds1jme12b2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds1jme12b2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds1jmet12bs2n1",
      "slug": "coleman-hh836e2s11-ctf36b5cds1jmet12bs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds1jmet12bs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmvt16cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmvt17cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5ads2jme16c2sn2",
      "slug": "coleman-hh836e2s11-ctf36c5ads2jme16c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5ads2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf30b5acs1cc",
      "slug": "coleman-xh936e2c11-ctf30b5acs1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf30b5acs1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1jmet16cs2n1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1jmet16cs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmet16cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmvt16cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1jme12c2sn1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1jme12c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jme12c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds1jmvt12bc2n1",
      "slug": "coleman-hh836e2s11-ctf36b5cds1jmvt12bc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds1jmvt12bc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs2jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs2jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs2jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs2jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5ads2",
      "slug": "coleman-hh836e2s11-ctf36c5ads2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5ads2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5ads2jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctf36c5ads2jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5ads2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5ads2jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctf36c5ads2jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5ads2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1jmet16cs2n1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1jmet16cs2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmet16cs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5afs2jme16c2sn2",
      "slug": "coleman-hh836e2s11-ctm48c5afs2jme16c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5afs2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5ads2jme12c2sn2",
      "slug": "coleman-hh836e2s11-ctf36c5ads2jme12c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5ads2jme12c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5ads2jmc12b2sn1",
      "slug": "coleman-hh836e2s11-ctf36b5ads2jmc12b2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jmc12b2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5ads2jme12b2sn2",
      "slug": "coleman-hh836e2s11-ctf36b5ads2jme12b2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jme12b2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5ads2jmvt12bc2n1",
      "slug": "coleman-hh836e2s11-ctf36b5ads2jmvt12bc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jmvt12bc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds1",
      "slug": "coleman-hh836e2s11-ctf36b5cds1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmc16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmc17c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5afs2jme12c2sn2",
      "slug": "coleman-hh836e2s11-ctf48c5afs2jme12c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5afs2jme12c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds1jme16c2sn1",
      "slug": "coleman-hh836e2s11-ctf36c5cds1jme16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds2",
      "slug": "coleman-hh836e2s11-ctf36b5cds2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds2jmc12b2sn1",
      "slug": "coleman-hh836e2s11-ctf36b5cds2jmc12b2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds2jmc12b2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds2jme12b2sn2",
      "slug": "coleman-hh836e2s11-ctf36b5cds2jme12b2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds2jme12b2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36b5cds2jmvt12bc2n1",
      "slug": "coleman-hh836e2s11-ctf36b5cds2jmvt12bc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds2jmvt12bc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5afs2jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctm48c5afs2jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5afs2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5afs2jme12c2sn2",
      "slug": "coleman-hh836e2s11-ctm48c5afs2jme12c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5afs2jme12c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5afs2jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctm48c5afs2jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5afs2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1jmet16cs2n1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1jmet16cs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmet16cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmvt16cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmvt17cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds2",
      "slug": "coleman-hh836e2s11-ctm36c5cds2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5afs2jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctf48c5afs2jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5afs2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5afs2jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctf48c5afs2jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5afs2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds2jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctm36c5cds2jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds2jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctm36c5cds2jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5afs2",
      "slug": "coleman-hh836e2s11-ctm48c5afs2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5afs2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5afs2jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctm48c5afs2jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5afs2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmc17c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1jme12c2sn1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1jme12c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jme12c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1jme16c2sn1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1jme16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-jhe36c5cd2ss2",
      "slug": "coleman-hh836e2s11-jhe36c5cd2ss2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-jhe36c5cd2ss2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds2jme16c2sn2",
      "slug": "coleman-hh836e2s11-ctf36c5cds2jme16c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds2jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctf36c5cds2jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf36c5cds2jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctf36c5cds2jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5afs2",
      "slug": "coleman-hh836e2s11-ctf48c5afs2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5afs2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs2jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs2jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs2jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs2jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs2jme12c2sn2",
      "slug": "coleman-hh836e2s11-ctf48c5cfs2jme12c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jme12c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5afs2jme16c2sn2",
      "slug": "coleman-hh836e2s11-ctf48c5afs2jme16c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5afs2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5afs2jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctf48c5afs2jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5afs2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5afs2jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctf48c5afs2jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5afs2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmc16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1jme12c2sn1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1jme12c2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jme12c2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1jme16c2sn1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1jme16c2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jme16c2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1jmet12cs2n1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1jmet12cs2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmet12cs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs1jmet12cs2n1",
      "slug": "coleman-hh836e2s11-ctf48c5cfs1jmet12cs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmet12cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs2jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs2jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds1jmc12b2sn1txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds1jmc12b2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmc12b2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds1jme12b2sn1txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds1jme12b2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme12b2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds1jmet12bs2n1txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds1jmet12bs2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet12bs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5ads2jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctm36c5ads2jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5ads2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5ads2jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctm36c5ads2jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5ads2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5ads2jme12c2sn2",
      "slug": "coleman-hh836e2s11-ctm36c5ads2jme12c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5ads2jme12c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf48c5cfs2jme16c2sn2",
      "slug": "coleman-hh836e2s11-ctf48c5cfs2jme16c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jse60d5cj2ss1",
      "slug": "coleman-hh860e2s11-jse60d5cj2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jse60d5cj2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhe60c5ch2ss2",
      "slug": "coleman-hh860e2s11-jhe60c5ch2ss2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhe60d5ch2ss1",
      "slug": "coleman-hh860e2s11-jhe60d5ch2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jse48c5cg2ss1",
      "slug": "coleman-hh860e2s11-jse48c5cg2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jse48c5cg2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhe48d5cg2ss1",
      "slug": "coleman-hh860e2s11-jhe48d5cg2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhe48d5cg2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds2txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds2txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1jmc16c2sn1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1jmc16c2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmc16c2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1jmc17c2sn1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1jmc17c2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmc17c2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmc17c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1jme12c2sn1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1jme12c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jme12c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1jme16c2sn1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1jme16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmc16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1jmet12cs2n1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1jmet12cs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmet12cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5ads2",
      "slug": "coleman-hh836e2s11-ctm36c5ads2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5ads2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds2jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctm36c5cds2jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds2jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctm36c5cds2jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds2jme12c2sn2",
      "slug": "coleman-hh836e2s11-ctm36c5cds2jme12c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jme12c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5ads2jme16c2sn2",
      "slug": "coleman-hh836e2s11-ctm36c5ads2jme16c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5ads2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds2jmvt12bc2n1txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds2jmvt12bc2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jmvt12bc2n1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-jhe42c5cf2ss1",
      "slug": "coleman-hh836e2s11-jhe42c5cf2ss1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-jhe42c5cf2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1jme12c2sn1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1jme12c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jme12c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1jme16c2sn1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1jme16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1jmet12cs2n1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1jmet12cs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmet12cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds2jme16c2sn2",
      "slug": "coleman-hh836e2s11-ctm36c5cds2jme16c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5ads2jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctm36c5ads2jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5ads2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5ads2jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctm36c5ads2jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5ads2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc18cn23stg1-uni18dt23stg1",
      "slug": "coleman-upc18cn23stg1-uni18dt23stg1",
      "modelId": "model-coleman-upc18cn23stg1",
      "outdoorUnitId": "ou-coleman-upc18cn23stg1",
      "indoorUnitId": "iu-uni18dt23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs2jmc16c2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs2jmc16c2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jmc16c2sn1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs2jme18d2sn2",
      "slug": "coleman-hh860e2s11-ctm60d5cjs2jme18d2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2jme18d2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs2jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctm60d5cjs2jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2jmvt20dc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xgs1jmvt20dc2n1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xgs1jmvt20dc2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1jmvt20dc2n1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds2jmc12b2sn1txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds2jmc12b2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jmc12b2sn1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1jmet16cs2n1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1jmet16cs2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmet16cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs2jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs2jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs2jme12c2sn2",
      "slug": "coleman-hh836e2s11-ctm48c5cfs2jme12c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jme12c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs2jme16c2sn2",
      "slug": "coleman-hh836e2s11-ctm48c5cfs2jme16c2sn2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhe60d5ch2ss2",
      "slug": "coleman-hh860e2s11-jhe60d5ch2ss2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhe60d5cj2ss1",
      "slug": "coleman-hh860e2s11-jhe60d5cj2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhe60d5cj2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jsc60d5cj2ss1",
      "slug": "coleman-hh860e2s11-jsc60d5cj2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jsc60d5cj2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs2jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs2jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs2jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs2jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5afs2jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctm48c5afs2jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5afs2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1jmc16c2sn1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1jmc16c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmc16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1jmc17c2sn1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1jmc17c2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmc17c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds1jmvt12bc2n1txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds1jmvt12bc2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmvt12bc2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds1txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhe60c5ch2ss1",
      "slug": "coleman-hh860e2s11-jhe60c5ch2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs2jmc17c2sn1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs2jmc17c2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jmc17c2sn1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs2jme12c2sn2txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs2jme12c2sn2txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jme12c2sn2txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs2jme16c2sn2txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs2jme16c2sn2txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jme16c2sn2txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu36b5xds2jme12b2sn2txv",
      "slug": "coleman-hh836e2s11-ctu36b5xds2jme12b2sn2txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme12b2sn2txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1jmvt16cc2n1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1jmvt16cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmvt16cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs1jmvt17cc2n1",
      "slug": "coleman-hh836e2s11-ctm48c5cfs1jmvt17cc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmvt17cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm48c5cfs2",
      "slug": "coleman-hh836e2s11-ctm48c5cfs2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-jhc42c5cf2ss1",
      "slug": "coleman-hh836e2s11-jhc42c5cf2ss1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-jhc42c5cf2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-jhe36b5cd2ss1",
      "slug": "coleman-hh836e2s11-jhe36b5cd2ss1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-jhe36b5cd2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-jhe36c5ad2ss2",
      "slug": "coleman-hh836e2s11-jhe36c5ad2ss2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-jhe36c5ad2ss2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs1jmc16c2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs1jmc16c2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmc16c2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs1jme16c2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs1jme16c2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jme16c2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs1jmet16cs2n1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs1jmet16cs2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmet16cs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs1jme18d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5cgs1jme18d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1jme18d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs1jme16c2sn1",
      "slug": "coleman-hh860e2s11-ctm60c5chs1jme16c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs1jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctf60d5cgs1jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1jmvt20dc2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs2jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5cgs2jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs2jmc20d2sn1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-jhe36c5cd2ss1",
      "slug": "coleman-hh836e2s11-jhe36c5cd2ss1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-jhe36c5cd2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1jmvt16cc2n1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1jmvt16cc2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmvt16cc2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1jmvt17cc2n1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1jmvt17cc2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmvt17cc2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs2jmc16c2sn1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs2jmc16c2sn1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jmc16c2sn1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs2jmvt16cc2n1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs2jmvt16cc2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jmvt16cc2n1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs1jmc17c2sn1",
      "slug": "coleman-hh860e2s11-ctf60c5chs1jmc17c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmc17c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs1jme16c2sn1",
      "slug": "coleman-hh860e2s11-ctf60c5chs1jme16c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs1jmet16cs2n1",
      "slug": "coleman-hh860e2s11-ctf60c5chs1jmet16cs2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmet16cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs1jmvt17cc2n1",
      "slug": "coleman-hh860e2s11-ctf60c5chs1jmvt17cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmvt17cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs2jmvt17cc2n1txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs2jmvt17cc2n1txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jmvt17cc2n1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctu48c5xfs2txv",
      "slug": "coleman-hh836e2s11-ctu48c5xfs2txv",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-jhc36b5cd2ss1",
      "slug": "coleman-hh836e2s11-jhc36b5cd2ss1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-jhc36b5cd2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-jhc36c5cd2ss1",
      "slug": "coleman-hh836e2s11-jhc36c5cd2ss1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-jhc36c5cd2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xhs1jmc20d2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xhs1jmc20d2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jmc20d2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xhs1jme18d2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xhs1jme18d2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jme18d2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs1jmvt16cc2n1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs1jmvt16cc2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmvt16cc2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs2jme16c2sn2txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs2jme16c2sn2txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jme16c2sn2txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs2jmvt16cc2n1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs2jmvt16cc2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jmvt16cc2n1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs2",
      "slug": "coleman-hh860e2s11-ctm60d5cjs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs2jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5cjs2jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2jmc20d2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs2jme18d2sn2",
      "slug": "coleman-hh860e2s11-ctf60d5cgs2jme18d2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs2jme18d2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs1jmet18ds2n1",
      "slug": "coleman-hh860e2s11-ctf60d5cgs1jmet18ds2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1jmet18ds2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xgs1jme18d2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xgs1jme18d2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1jme18d2sn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xgs1jmet18ds2n1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xgs1jmet18ds2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1jmet18ds2n1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs1jmvt17cc2n1",
      "slug": "coleman-hh860e2s11-ctm60c5chs1jmvt17cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmvt17cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs2",
      "slug": "coleman-hh860e2s11-ctm60c5chs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs2jmc17c2sn1",
      "slug": "coleman-hh860e2s11-ctm60c5chs2jmc17c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs2jme16c2sn2",
      "slug": "coleman-hh860e2s11-ctm60c5chs2jme16c2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jmet18ds2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs2jmc17c2sn1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs2jmc17c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs2jme16c2sn2",
      "slug": "coleman-hh860e2s11-ctm60c5cgs2jme16c2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jme16c2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs2jmvt16cc2n1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs2jmvt16cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs2jmvt17cc2n1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs2jmvt17cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jmvt17cc2n1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs2jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5cjs2jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2jmc20d2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs2jme18d2sn2",
      "slug": "coleman-hh860e2s11-ctf60d5cjs2jme18d2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2jme18d2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs1jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5cgs1jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1jmc20d2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs1jme18d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5cgs1jme18d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1jme18d2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs1jmc17c2sn1",
      "slug": "coleman-hh860e2s11-ctm60c5chs1jmc17c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmc17c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs2jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctf60d5cjs2jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2jmvt20dc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs1jme16c2sn1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs1jme16c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs1jmet16cs2n1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs1jmet16cs2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmet16cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs1jmvt16cc2n1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs1jmvt16cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmvt16cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs1jmvt16cc2n1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs1jmvt16cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmvt16cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs1jmvt17cc2n1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs1jmvt17cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmvt17cc2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs1jmet16cs2n1",
      "slug": "coleman-hh860e2s11-ctm60c5chs1jmet16cs2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmet16cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs1jme18d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5chs1jme18d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jme18d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs1jmet18ds2n1",
      "slug": "coleman-hh860e2s11-ctm60d5chs1jmet18ds2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jmet18ds2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs1jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctm60d5chs1jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jmvt20dc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs2",
      "slug": "coleman-hh860e2s11-ctm60d5chs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs2jmvt17cc2n1",
      "slug": "coleman-hh860e2s11-ctm60c5chs2jmvt17cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xhs1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xhs1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5chs1",
      "slug": "coleman-hh860e2s11-ctm60c5chs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5chs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs1",
      "slug": "coleman-hh860e2s11-ctf60d5chs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc24cn23stg1-uni24dt23stg1",
      "slug": "coleman-upc24cn23stg1-uni24dt23stg1",
      "modelId": "model-coleman-upc24cn23stg1",
      "outdoorUnitId": "ou-coleman-upc24cn23stg1",
      "indoorUnitId": "iu-uni24dt23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs1jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5chs1jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jmc20d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs1jmet18ds2n1",
      "slug": "coleman-hh860e2s11-ctf60d5chs1jmet18ds2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jmet18ds2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs1jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctf60d5chs1jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jmvt20dc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs2",
      "slug": "coleman-hh860e2s11-ctf60d5chs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs2jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5chs2jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs2jmc20d2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs2jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5chs2jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs2jmc20d2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs2jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctf60d5chs2jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs2jmvt20dc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs2jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctm60d5chs2jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs2jmvt20dc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs1",
      "slug": "coleman-hh860e2s11-ctm60d5cjs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs1jme18d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5cjs1jme18d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1jme18d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs1jmet18ds2n1",
      "slug": "coleman-hh860e2s11-ctf60d5cjs1jmet18ds2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1jmet18ds2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs1jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctf60d5cjs1jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1jmvt20dc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs2",
      "slug": "coleman-hh860e2s11-ctf60d5cjs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs2jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctf60d5cgs2jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs2jmvt20dc2n1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xgs1jmc20d2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xgs1jmc20d2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1jmc20d2sn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs1jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5chs1jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jmc20d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs1jme18d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5chs1jme18d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jme18d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs1jmc16c2sn1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs1jmc16c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmc16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs1jmc17c2sn1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs1jmc17c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmc17c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs1jme16c2sn1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs1jme16c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs1jmet16cs2n1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs1jmet16cs2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmet16cs2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5chs2jme18d2sn2",
      "slug": "coleman-hh860e2s11-ctf60d5chs2jme18d2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5chs2jme18d2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xhs1jmvt20dc2n1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xhs1jmvt20dc2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jmvt20dc2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs1",
      "slug": "coleman-hh860e2s11-ctf60d5cjs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cjs1jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctf60d5cjs1jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1jmc20d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhc60d5ch2ss1",
      "slug": "coleman-hh860e2s11-jhc60d5ch2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhc60d5ch2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhc60d5cj2ss1",
      "slug": "coleman-hh860e2s11-jhc60d5cj2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhc60d5cj2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhe48c5cg2ss1",
      "slug": "coleman-hh860e2s11-jhe48c5cg2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhe48c5cg2ss1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhe48c5cg2ss2",
      "slug": "coleman-hh860e2s11-jhe48c5cg2ss2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhe48c5cg2ss2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs2txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs2txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads1",
      "slug": "coleman-hh824e2s11-ctm36b5ads1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads2jmc12b2sn1",
      "slug": "coleman-hh824e2s11-ctf36b5ads2jmc12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jmc12b2sn1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds2txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds2txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-jhc36b5ad2ss1",
      "slug": "coleman-hh824e2s11-jhc36b5ad2ss1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-jhc36b5ad2ss1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-jhe24b5ac2ss1",
      "slug": "coleman-hh824e2s11-jhe24b5ac2ss1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-jhe24b5ac2ss1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-jhe24b5ac2ss2",
      "slug": "coleman-hh824e2s11-jhe24b5ac2ss2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-jhe24b5ac2ss2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds1jmet08bs2n1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds1jmet08bs2n1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet08bs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf36b5ads2jmc12b2sn1cc",
      "slug": "coleman-xh936e2c11-ctf36b5ads2jmc12b2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf36b5ads2jmc12b2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm30b5acs2cc",
      "slug": "coleman-xh936e2c11-ctm30b5acs2cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm30b5acs2cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds1jmet12bs2n1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds1jmet12bs2n1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet12bs2n1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads1jmvt12bc2n1",
      "slug": "coleman-hh824e2s11-ctf36b5ads1jmvt12bc2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jmvt12bc2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads1jme08b2sn1",
      "slug": "coleman-hh824e2s11-ctm36b5ads1jme08b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jme08b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads2jmvt12bc2n1",
      "slug": "coleman-hh824e2s11-ctf36b5ads2jmvt12bc2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jmvt12bc2n1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs1jme08b2sn1",
      "slug": "coleman-hh824e2s11-ctm30b5acs1jme08b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs1jme08b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads2",
      "slug": "coleman-hh824e2s11-ctm36b5ads2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs1jme12b2sn1",
      "slug": "coleman-hh824e2s11-ctm30b5acs1jme12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs1jme12b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36c5cds1",
      "slug": "coleman-hh836e2s11-ctm36c5cds1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs1",
      "slug": "coleman-hh860e2s11-ctf60c5chs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads1jme12b2sn1",
      "slug": "coleman-hh824e2s11-ctm36b5ads1jme12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jme12b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm36b5ads1jmc12b2sn1cc",
      "slug": "coleman-xh936e2c11-ctm36b5ads1jmc12b2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm36b5ads1jmc12b2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctm60d5chs2cc",
      "slug": "coleman-xh960e2c11-ctm60d5chs2cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctm60d5chs2cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30a5ads1",
      "slug": "coleman-hh824e2s11-ctf30a5ads1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30a5ads1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm30b5acs1cc",
      "slug": "coleman-xh936e2c11-ctm30b5acs1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm30b5acs1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm30b5acs1jmc12b2sn1cc",
      "slug": "coleman-xh936e2c11-ctm30b5acs1jmc12b2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm30b5acs1jmc12b2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-ctf60d5chs2cc",
      "slug": "coleman-xh960e2c11-ctf60d5chs2cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-ctf60d5chs2cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30a5ads2",
      "slug": "coleman-hh824e2s11-ctf30a5ads2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30a5ads2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs1jme08b2sn1",
      "slug": "coleman-hh824e2s11-ctf30b5acs1jme08b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs1jme08b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-jhc36c5ad2ss1cc",
      "slug": "coleman-xh936e2c11-jhc36c5ad2ss1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-jhc36c5ad2ss1cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs1jme08b2sn1txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs1jme08b2sn1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1jme08b2sn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs1jme12b2sn1txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs1jme12b2sn1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1jme12b2sn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads2",
      "slug": "coleman-hh824e2s11-ctf36b5ads2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs1jme12b2sn1",
      "slug": "coleman-hh824e2s11-ctf30b5acs1jme12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs1jme12b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads2jme08b2sn2",
      "slug": "coleman-hh824e2s11-ctf36b5ads2jme08b2sn2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jme08b2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads2jme12b2sn2",
      "slug": "coleman-hh824e2s11-ctf36b5ads2jme12b2sn2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jme12b2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh960e2c11-jhc60c5ch2ss1cc",
      "slug": "coleman-xh960e2c11-jhc60c5ch2ss1cc",
      "modelId": "model-coleman-xh960e2c11",
      "outdoorUnitId": "ou-coleman-xh960e2c11",
      "indoorUnitId": "iu-jhc60c5ch2ss1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads1",
      "slug": "coleman-hh824e2s11-ctf36b5ads1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads1jmc12b2sn1",
      "slug": "coleman-hh824e2s11-ctf36b5ads1jmc12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jmc12b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads1jme08b2sn1",
      "slug": "coleman-hh824e2s11-ctf36b5ads1jme08b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jme08b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs2jmvt16cc2n1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs2jmvt16cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jmvt16cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads1jme12b2sn1",
      "slug": "coleman-hh824e2s11-ctf36b5ads1jme12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jme12b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads1jmet08bs2n1",
      "slug": "coleman-hh824e2s11-ctf36b5ads1jmet08bs2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jmet08bs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf36b5ads1jmet12bs2n1",
      "slug": "coleman-hh824e2s11-ctf36b5ads1jmet12bs2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jmet12bs2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xdv36e2d11-jde36e5xx2ds1",
      "slug": "coleman-xdv36e2d11-jde36e5xx2ds1",
      "modelId": "model-coleman-xdv36e2d11",
      "outdoorUnitId": "ou-coleman-xdv36e2d11",
      "indoorUnitId": "iu-jde36e5xx2ds1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds1jme08b2sn1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds1jme08b2sn1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme08b2sn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-ph9e60n00d21-iu-13687",
      "slug": "coleman-ph9e60n00d21-iu-13687",
      "modelId": "model-coleman-ph9e60n00d21",
      "outdoorUnitId": "ou-coleman-ph9e60n00d21",
      "indoorUnitId": "iu-iu-13687",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu36b5xds1jme12b2sn1txv",
      "slug": "coleman-hh824e2s11-ctu36b5xds1jme12b2sn1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme12b2sn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs2",
      "slug": "coleman-hh860e2s11-ctf60c5chs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs2jmc17c2sn1",
      "slug": "coleman-hh860e2s11-ctf60c5chs2jmc17c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs2jme16c2sn2",
      "slug": "coleman-hh860e2s11-ctf60c5chs2jme16c2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5chs2jmvt17cc2n1",
      "slug": "coleman-hh860e2s11-ctf60c5chs2jmvt17cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs2",
      "slug": "coleman-hh860e2s11-ctf60c5cgs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs2",
      "slug": "coleman-hh860e2s11-ctm60c5cgs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60c5cgs2jmc16c2sn1",
      "slug": "coleman-hh860e2s11-ctm60c5cgs2jmc16c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs2jme16c2sn2",
      "slug": "coleman-hh860e2s11-ctf60c5cgs2jme16c2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jme16c2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs2jme18d2sn2",
      "slug": "coleman-hh860e2s11-ctm60d5chs2jme18d2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs2jme18d2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs2jmc16c2sn1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs2jmc16c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jmc16c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs1jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5cjs1jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1jmc20d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs1jme18d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5cjs1jme18d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1jme18d2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs1jmet18ds2n1",
      "slug": "coleman-hh860e2s11-ctm60d5cjs1jmet18ds2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1jmet18ds2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cjs1jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctm60d5cjs1jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1jmvt20dc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs1jmc16c2sn1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs1jmc16c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmc16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf36b5ads1jmc12b2sn1cc",
      "slug": "coleman-xh936e2c11-ctf36b5ads1jmc12b2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf36b5ads1jmc12b2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5chs1",
      "slug": "coleman-hh860e2s11-ctm60d5chs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5chs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-jhetb36dbcs2n1",
      "slug": "coleman-hmh72b341-jhetb36dbcs2n1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-jhetb36dbcs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-jhvtc36dbcc2n1",
      "slug": "coleman-hmh72b341-jhvtc36dbcc2n1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-jhvtc36dbcc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb30cxxn1jmet12bs2n1txv",
      "slug": "coleman-hmh72b341-xafb30cxxn1jmet12bs2n1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb30cxxn1jmet12bs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc36dxxn1jmet12cs2n1txv",
      "slug": "coleman-hmh72b341-xafc36dxxn1jmet12cs2n1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc36dxxn1jmet12cs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc36dxxn1txv",
      "slug": "coleman-hmh72b341-xafc36dxxn1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc36dxxn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc36dbcn1jme16c2sn1",
      "slug": "coleman-hmh72b341-xafc36dbcn1jme16c2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc36dbcn1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc36dbcn1jmet12cs2n1",
      "slug": "coleman-hmh72b341-xafc36dbcn1jmet12cs2n1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc36dbcn1jmet12cs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-jhvtb36dbcc2n1",
      "slug": "coleman-hmh72b341-jhvtb36dbcc2n1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-jhvtb36dbcc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb36dxxn1jmet12bs2n1txv",
      "slug": "coleman-hmh72b341-xafb36dxxn1jmet12bs2n1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb36dxxn1jmet12bs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xahc36dbcn1jmc16c2sn1",
      "slug": "coleman-hmh72b341-xahc36dbcn1jmc16c2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xahc36dbcn1jmc16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb36dxxn1jmvt12bc2n1txv",
      "slug": "coleman-hmh72b341-xafb36dxxn1jmvt12bc2n1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb36dxxn1jmvt12bc2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb36dxxn1txv",
      "slug": "coleman-hmh72b341-xafb36dxxn1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb36dxxn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc30cxxn1jmet12cs2n1txv",
      "slug": "coleman-hmh72b341-xafc30cxxn1jmet12cs2n1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc30cxxn1jmet12cs2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc30cxxn1txv",
      "slug": "coleman-hmh72b341-xafc30cxxn1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc30cxxn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc36dbcn1",
      "slug": "coleman-hmh72b341-xafc36dbcn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc36dbcn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc36dbcn1jmc16c2sn1",
      "slug": "coleman-hmh72b341-xafc36dbcn1jmc16c2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc36dbcn1jmc16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc36dbcn1jme12c2sn1",
      "slug": "coleman-hmh72b341-xafc36dbcn1jme12c2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc36dbcn1jme12c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb30cxxn1jmvt12bc2n1txv",
      "slug": "coleman-hmh72b341-xafb30cxxn1jmvt12bc2n1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb30cxxn1jmvt12bc2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb30cxxn1txv",
      "slug": "coleman-hmh72b341-xafb30cxxn1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb30cxxn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb36dbcn1",
      "slug": "coleman-hmh72b341-xafb36dbcn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb36dbcn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xahc30cxxn1txv",
      "slug": "coleman-hmh72b341-xahc30cxxn1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xahc30cxxn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xahc36dbcn1",
      "slug": "coleman-hmh72b341-xahc36dbcn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xahc36dbcn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb36dbcn1jme12b2sn1",
      "slug": "coleman-hmh72b341-xafb36dbcn1jme12b2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb36dbcn1jme12b2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb36dbcn1jmet12bs2n1",
      "slug": "coleman-hmh72b341-xafb36dbcn1jmet12bs2n1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb36dbcn1jmet12bs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb36dbcn1jmvt12bc2n1",
      "slug": "coleman-hmh72b341-xafb36dbcn1jmvt12bc2n1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb36dbcn1jmvt12bc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-jhc24b5ac2ss1cc",
      "slug": "coleman-xh936e2c11-jhc24b5ac2ss1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-jhc24b5ac2ss1cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xahc36dbcn1jme12c2sn1",
      "slug": "coleman-hmh72b341-xahc36dbcn1jme12c2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xahc36dbcn1jme12c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xahc36dbcn1jme16c2sn1",
      "slug": "coleman-hmh72b341-xahc36dbcn1jme16c2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xahc36dbcn1jme16c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xahc36dxxn1txv",
      "slug": "coleman-hmh72b341-xahc36dxxn1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xahc36dxxn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xdv60e2d11-jde48f5xx2ds1",
      "slug": "coleman-xdv60e2d11-jde48f5xx2ds1",
      "modelId": "model-coleman-xdv60e2d11",
      "outdoorUnitId": "ou-coleman-xdv60e2d11",
      "indoorUnitId": "iu-jde48f5xx2ds1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-upc36cn23stg1-uni36dt23stg1",
      "slug": "coleman-upc36cn23stg1-uni36dt23stg1",
      "modelId": "model-coleman-upc36cn23stg1",
      "outdoorUnitId": "ou-coleman-upc36cn23stg1",
      "indoorUnitId": "iu-uni36dt23stg1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs1jmet08bs2n1txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs1jmet08bs2n1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1jmet08bs2n1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs1jmet12bs2n1txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs1jmet12bs2n1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1jmet12bs2n1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs1jmvt12bc2n1txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs1jmvt12bc2n1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1jmvt12bc2n1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs1txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads1jmet08bs2n1",
      "slug": "coleman-hh824e2s11-ctm36b5ads1jmet08bs2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jmet08bs2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads1jmet12bs2n1",
      "slug": "coleman-hh824e2s11-ctm36b5ads1jmet12bs2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jmet12bs2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads1jmvt12bc2n1",
      "slug": "coleman-hh824e2s11-ctm36b5ads1jmvt12bc2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jmvt12bc2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads2jmvt12bc2n1",
      "slug": "coleman-hh824e2s11-ctm36b5ads2jmvt12bc2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jmvt12bc2n1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs1jmc12b2sn1txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs1jmc12b2sn1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1jmc12b2sn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs1jmet08bs2n1",
      "slug": "coleman-hh824e2s11-ctf30b5acs1jmet08bs2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs1jmet08bs2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs1jmet12bs2n1",
      "slug": "coleman-hh824e2s11-ctf30b5acs1jmet12bs2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs1jmet12bs2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs2",
      "slug": "coleman-hh824e2s11-ctf30b5acs2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs2jmc12b2sn1",
      "slug": "coleman-hh824e2s11-ctf30b5acs2jmc12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs2jmc12b2sn1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs2jme08b2sn2",
      "slug": "coleman-hh824e2s11-ctf30b5acs2jme08b2sn2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs2jme08b2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs2jme12b2sn2",
      "slug": "coleman-hh824e2s11-ctf30b5acs2jme12b2sn2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs2jme12b2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs2jmvt12bc2n1",
      "slug": "coleman-hh824e2s11-ctf30b5acs2jmvt12bc2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs2jmvt12bc2n1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-ph9e36n00d21-iu-13686",
      "slug": "coleman-ph9e36n00d21-iu-13686",
      "modelId": "model-coleman-ph9e36n00d21",
      "outdoorUnitId": "ou-coleman-ph9e36n00d21",
      "indoorUnitId": "iu-iu-13686",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs2jmvt17cc2n1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs2jmvt17cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jmvt17cc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs1jmvt17cc2n1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs1jmvt17cc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmvt17cc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs2jme18d2sn2",
      "slug": "coleman-hh860e2s11-ctm60d5cgs2jme18d2sn2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs2jme18d2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs2jmc17c2sn1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs2jmc17c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jmc17c2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs1",
      "slug": "coleman-hh860e2s11-ctf60d5cgs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs2jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctm60d5cgs2jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs2jmvt20dc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60c5cgs1jmc17c2sn1",
      "slug": "coleman-hh860e2s11-ctf60c5cgs1jmc17c2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmc17c2sn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jhc48d5cg2ss1",
      "slug": "coleman-hh860e2s11-jhc48d5cg2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jhc48d5cg2ss1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs1jmet18ds2n1",
      "slug": "coleman-hh860e2s11-ctm60d5cgs1jmet18ds2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1jmet18ds2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs1jmvt20dc2n1",
      "slug": "coleman-hh860e2s11-ctm60d5cgs1jmvt20dc2n1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1jmvt20dc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs2",
      "slug": "coleman-hh860e2s11-ctm60d5cgs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs2jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5cgs2jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs2jmc20d2sn1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs1",
      "slug": "coleman-hh860e2s11-ctm60d5cgs1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctm60d5cgs1jmc20d2sn1",
      "slug": "coleman-hh860e2s11-ctm60d5cgs1jmc20d2sn1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1jmc20d2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs2jmc17c2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs2jmc17c2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jmc17c2sn1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s12-jse60d5cj2ss1",
      "slug": "coleman-hh860e2s12-jse60d5cj2ss1",
      "modelId": "model-coleman-hh860e2s12",
      "outdoorUnitId": "ou-coleman-hh860e2s12",
      "indoorUnitId": "iu-jse60d5cj2ss1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s12-jhc36c5cd2ss1",
      "slug": "coleman-hh836e2s12-jhc36c5cd2ss1",
      "modelId": "model-coleman-hh836e2s12",
      "outdoorUnitId": "ou-coleman-hh836e2s12",
      "indoorUnitId": "iu-jhc36c5cd2ss1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s12-jhc42c5cf2ss1",
      "slug": "coleman-hh836e2s12-jhc42c5cf2ss1",
      "modelId": "model-coleman-hh836e2s12",
      "outdoorUnitId": "ou-coleman-hh836e2s12",
      "indoorUnitId": "iu-jhc42c5cf2ss1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-jsc48d5cg2ss1",
      "slug": "coleman-hh860e2s11-jsc48d5cg2ss1",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-jsc48d5cg2ss1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafa30dxxn1txv",
      "slug": "coleman-hmh72b341-xafa30dxxn1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafa30dxxn1txv",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s12-ctf36c5cds2",
      "slug": "coleman-hh836e2s12-ctf36c5cds2",
      "modelId": "model-coleman-hh836e2s12",
      "outdoorUnitId": "ou-coleman-hh836e2s12",
      "indoorUnitId": "iu-ctf36c5cds2",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s12-ctf36c5cds1",
      "slug": "coleman-hh836e2s12-ctf36c5cds1",
      "modelId": "model-coleman-hh836e2s12",
      "outdoorUnitId": "ou-coleman-hh836e2s12",
      "indoorUnitId": "iu-ctf36c5cds1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs1jmc17c2sn1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs1jmc17c2sn1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmc17c2sn1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs2jmvt17cc2n1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs2jmvt17cc2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jmvt17cc2n1txv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60d5xgs1txv",
      "slug": "coleman-hh860e2s11-ctu60d5xgs1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctu60c5xgs1jmvt17cc2n1txv",
      "slug": "coleman-hh860e2s11-ctu60c5xgs1jmvt17cc2n1txv",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmvt17cc2n1txv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s12-jhc60d5cj2ss1",
      "slug": "coleman-hh860e2s12-jhc60d5cj2ss1",
      "modelId": "model-coleman-hh860e2s12",
      "outdoorUnitId": "ou-coleman-hh860e2s12",
      "indoorUnitId": "iu-jhc60d5cj2ss1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s11-ctf60d5cgs2",
      "slug": "coleman-hh860e2s11-ctf60d5cgs2",
      "modelId": "model-coleman-hh860e2s11",
      "outdoorUnitId": "ou-coleman-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cgs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf36b5ads1cc",
      "slug": "coleman-xh936e2c11-ctf36b5ads1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf36b5ads1cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xd524e2d11-jde24e5xx2ds1",
      "slug": "coleman-xd524e2d11-jde24e5xx2ds1",
      "modelId": "model-coleman-xd524e2d11",
      "outdoorUnitId": "ou-coleman-xd524e2d11",
      "indoorUnitId": "iu-jde24e5xx2ds1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36b5cds1",
      "slug": "coleman-hh836e2s11-ctm36b5cds1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36b5cds1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36b5ads2jmvt12bc2n1",
      "slug": "coleman-hh836e2s11-ctm36b5ads2jmvt12bc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jmvt12bc2n1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36b5cds1jmvt12bc2n1",
      "slug": "coleman-hh836e2s11-ctm36b5cds1jmvt12bc2n1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36b5cds1jmvt12bc2n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs2jme08b2sn2",
      "slug": "coleman-hh824e2s11-ctm30b5acs2jme08b2sn2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs2jme08b2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads2jme08b2sn2",
      "slug": "coleman-hh824e2s11-ctm36b5ads2jme08b2sn2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jme08b2sn2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs2jmc12b2sn1",
      "slug": "coleman-hh824e2s11-ctm30b5acs2jmc12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs2jmc12b2sn1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs2",
      "slug": "coleman-hh824e2s11-ctm30b5acs2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads2jme12b2sn2",
      "slug": "coleman-hh824e2s11-ctm36b5ads2jme12b2sn2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jme12b2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs1",
      "slug": "coleman-hh824e2s11-ctm30b5acs1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs1jmc12b2sn1",
      "slug": "coleman-hh824e2s11-ctm30b5acs1jmc12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs1jmc12b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads2jmc12b2sn1",
      "slug": "coleman-hh824e2s11-ctm36b5ads2jmc12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jmc12b2sn1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs2jmvt12bc2n1",
      "slug": "coleman-hh824e2s11-ctm30b5acs2jmvt12bc2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs2jmvt12bc2n1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm36b5ads1jmc12b2sn1",
      "slug": "coleman-hh824e2s11-ctm36b5ads1jmc12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jmc12b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs1jmvt12bc2n1",
      "slug": "coleman-hh824e2s11-ctm30b5acs1jmvt12bc2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs1jmvt12bc2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs1jmet12bs2n1",
      "slug": "coleman-hh824e2s11-ctm30b5acs1jmet12bs2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs1jmet12bs2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs1jmet08bs2n1",
      "slug": "coleman-hh824e2s11-ctm30b5acs1jmet08bs2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs1jmet08bs2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm36c5ads1jmc16c2sn1cc",
      "slug": "coleman-xh936e2c11-ctm36c5ads1jmc16c2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm36c5ads1jmc16c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm36c5ads2cc",
      "slug": "coleman-xh936e2c11-ctm36c5ads2cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm36c5ads2cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm36c5ads2jmc16c2sn1cc",
      "slug": "coleman-xh936e2c11-ctm36c5ads2jmc16c2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm36c5ads2jmc16c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf36c5ads1jmc16c2sn1cc",
      "slug": "coleman-xh936e2c11-ctf36c5ads1jmc16c2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf36c5ads1jmc16c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf36c5ads2cc",
      "slug": "coleman-xh936e2c11-ctf36c5ads2cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf36c5ads2cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctf36c5ads2jmc16c2sn1cc",
      "slug": "coleman-xh936e2c11-ctf36c5ads2jmc16c2sn1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctf36c5ads2jmc16c2sn1cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm36b5ads2cc",
      "slug": "coleman-xh936e2c11-ctm36b5ads2cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm36b5ads2cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm36c5ads1cc",
      "slug": "coleman-xh936e2c11-ctm36c5ads1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm36c5ads1cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs1jmc12b2sn1",
      "slug": "coleman-hh824e2s11-ctf30b5acs1jmc12b2sn1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs1jmc12b2sn1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hc19b2421-xafb36dban1",
      "slug": "coleman-hc19b2421-xafb36dban1",
      "modelId": "model-coleman-hc19b2421",
      "outdoorUnitId": "ou-coleman-hc19b2421",
      "indoorUnitId": "iu-xafb36dban1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs1jmvt12bc2n1",
      "slug": "coleman-hh824e2s11-ctf30b5acs1jmvt12bc2n1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs1jmvt12bc2n1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctf30b5acs1",
      "slug": "coleman-hh824e2s11-ctf30b5acs1",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctf30b5acs1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hc19b2421-xafb36dxxn1txv",
      "slug": "coleman-hc19b2421-xafb36dxxn1txv",
      "modelId": "model-coleman-hc19b2421",
      "outdoorUnitId": "ou-coleman-hc19b2421",
      "indoorUnitId": "iu-xafb36dxxn1txv",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctm30b5acs2jme12b2sn2",
      "slug": "coleman-hh824e2s11-ctm30b5acs2jme12b2sn2",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctm30b5acs2jme12b2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf30a5ads1",
      "slug": "coleman-hh836e2s11-ctf30a5ads1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf30a5ads1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-xh936e2c11-ctm36b5ads1cc",
      "slug": "coleman-xh936e2c11-ctm36b5ads1cc",
      "modelId": "model-coleman-xh936e2c11",
      "outdoorUnitId": "ou-coleman-xh936e2c11",
      "indoorUnitId": "iu-ctm36b5ads1cc",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs2jmc12b2sn1txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs2jmc12b2sn1txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs2jmc12b2sn1txv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh824e2s11-ctu30b5xcs2jme08b2sn2txv",
      "slug": "coleman-hh824e2s11-ctu30b5xcs2jme08b2sn2txv",
      "modelId": "model-coleman-hh824e2s11",
      "outdoorUnitId": "ou-coleman-hh824e2s11",
      "indoorUnitId": "iu-ctu30b5xcs2jme08b2sn2txv",
      "minHeatingTempC": -15,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctf30a5ads2",
      "slug": "coleman-hh836e2s11-ctf30a5ads2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctf30a5ads2",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xahb30cxxn1txv",
      "slug": "coleman-hmh72b341-xahb30cxxn1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xahb30cxxn1txv",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafb36dbcn1jmc12b2sn1",
      "slug": "coleman-hmh72b341-xafb36dbcn1jmc12b2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafb36dbcn1jmc12b2sn1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xafc36dbcn1jmc17c2sn1",
      "slug": "coleman-hmh72b341-xafc36dbcn1jmc17c2sn1",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xafc36dbcn1jmc17c2sn1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s12-jhc60c5ch2ss1",
      "slug": "coleman-hh860e2s12-jhc60c5ch2ss1",
      "modelId": "model-coleman-hh860e2s12",
      "outdoorUnitId": "ou-coleman-hh860e2s12",
      "indoorUnitId": "iu-jhc60c5ch2ss1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh860e2s12-jsc60d5cj2ss1",
      "slug": "coleman-hh860e2s12-jsc60d5cj2ss1",
      "modelId": "model-coleman-hh860e2s12",
      "outdoorUnitId": "ou-coleman-hh860e2s12",
      "indoorUnitId": "iu-jsc60d5cj2ss1",
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
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36b5ads2jmc12b2sn1",
      "slug": "coleman-hh836e2s11-ctm36b5ads2jmc12b2sn1",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jmc12b2sn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hh836e2s11-ctm36b5cds2",
      "slug": "coleman-hh836e2s11-ctm36b5cds2",
      "modelId": "model-coleman-hh836e2s11",
      "outdoorUnitId": "ou-coleman-hh836e2s11",
      "indoorUnitId": "iu-ctm36b5cds2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-coleman-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-coleman-hmh72b341-xahb30cxxn1jmet12bs2n1txv",
      "slug": "coleman-hmh72b341-xahb30cxxn1jmet12bs2n1txv",
      "modelId": "model-coleman-hmh72b341",
      "outdoorUnitId": "ou-coleman-hmh72b341",
      "indoorUnitId": "iu-xahb30cxxn1jmet12bs2n1txv",
      "minHeatingTempC": -25,
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
          "sourceId": "src-coleman-epa",
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
