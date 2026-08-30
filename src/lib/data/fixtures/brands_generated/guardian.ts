import type { BrandDataset } from "../../types";

export const brand_guardianDataset: BrandDataset = {
  "brand": {
    "id": "brand-guardian",
    "slug": "guardian",
    "name": "Guardian",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Guardian",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-guardian-epa",
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
      "id": "series-guardian-urac",
      "slug": "guardian-urac",
      "name": "URAC",
      "brandId": "brand-guardian",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série URAC de Guardian",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-guardian-umulti",
      "slug": "guardian-umulti",
      "name": "UMULTI",
      "brandId": "brand-guardian",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série UMULTI de Guardian",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-guardian-upac",
      "slug": "guardian-upac",
      "name": "UPAC",
      "brandId": "brand-guardian",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série UPAC de Guardian",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-guardian-m-series",
      "slug": "guardian-m-series",
      "name": "M series",
      "brandId": "brand-guardian",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M series de Guardian",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-guardian-eco",
      "slug": "guardian-eco",
      "name": "ECO",
      "brandId": "brand-guardian",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ECO de Guardian",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-guardian-lx-series",
      "slug": "guardian-lx-series",
      "name": "LX SERIES",
      "brandId": "brand-guardian",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série LX SERIES de Guardian",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-guardian-urc09cn23stg1",
      "slug": "guardian-urc09cn23stg1",
      "name": "Guardian URC09CN23STG1",
      "seriesId": "series-guardian-urac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-urc09cn15stg1",
      "slug": "guardian-urc09cn15stg1",
      "name": "Guardian URC09CN15STG1",
      "seriesId": "series-guardian-urac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-umc24cn23stg1",
      "slug": "guardian-umc24cn23stg1",
      "name": "Guardian UMC24CN23STG1",
      "seriesId": "series-guardian-umulti",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-urc12cn23stg1",
      "slug": "guardian-urc12cn23stg1",
      "name": "Guardian URC12CN23STG1",
      "seriesId": "series-guardian-urac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-urc24cn23stg1",
      "slug": "guardian-urc24cn23stg1",
      "name": "Guardian URC24CN23STG1",
      "seriesId": "series-guardian-urac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-urc12cn15stg1",
      "slug": "guardian-urc12cn15stg1",
      "name": "Guardian URC12CN15STG1",
      "seriesId": "series-guardian-urac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-upc09cn23stg1",
      "slug": "guardian-upc09cn23stg1",
      "name": "Guardian UPC09CN23STG1",
      "seriesId": "series-guardian-upac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-umc18cn23stg1",
      "slug": "guardian-umc18cn23stg1",
      "name": "Guardian UMC18CN23STG1",
      "seriesId": "series-guardian-umulti",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-umc48cn23stg1",
      "slug": "guardian-umc48cn23stg1",
      "name": "Guardian UMC48CN23STG1",
      "seriesId": "series-guardian-umulti",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-umc36cn23stg1",
      "slug": "guardian-umc36cn23stg1",
      "name": "Guardian UMC36CN23STG1",
      "seriesId": "series-guardian-umulti",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-upc12cn23stg1",
      "slug": "guardian-upc12cn23stg1",
      "name": "Guardian UPC12CN23STG1",
      "seriesId": "series-guardian-upac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-urc18cn23stg1",
      "slug": "guardian-urc18cn23stg1",
      "name": "Guardian URC18CN23STG1",
      "seriesId": "series-guardian-urac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-upc24cn23stg1",
      "slug": "guardian-upc24cn23stg1",
      "name": "Guardian UPC24CN23STG1",
      "seriesId": "series-guardian-upac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-upc18cn23stg1",
      "slug": "guardian-upc18cn23stg1",
      "name": "Guardian UPC18CN23STG1",
      "seriesId": "series-guardian-upac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-upc36cn23stg1",
      "slug": "guardian-upc36cn23stg1",
      "name": "Guardian UPC36CN23STG1*",
      "seriesId": "series-guardian-upac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-upc48cn23stg1",
      "slug": "guardian-upc48cn23stg1",
      "name": "Guardian UPC48CN23STG1",
      "seriesId": "series-guardian-upac",
      "brandId": "brand-guardian",
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
      "id": "model-guardian-grd09cn15stg1",
      "slug": "guardian-grd09cn15stg1",
      "name": "Guardian GRD09CN15STG1",
      "seriesId": "series-guardian-m-series",
      "brandId": "brand-guardian",
      "modelNumber": "GRD09CN15STG1",
      "normalizedModelNumber": "grd09cn15stg1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9100,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-guardian-grd12cn15stg1",
      "slug": "guardian-grd12cn15stg1",
      "name": "Guardian GRD12CN15STG1",
      "seriesId": "series-guardian-eco",
      "brandId": "brand-guardian",
      "modelNumber": "GRD12CN15STG1",
      "normalizedModelNumber": "grd12cn15stg1",
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
      "id": "model-guardian-grc18cn23stg1",
      "slug": "guardian-grc18cn23stg1",
      "name": "Guardian GRC18CN23STG1",
      "seriesId": "series-guardian-eco",
      "brandId": "brand-guardian",
      "modelNumber": "GRC18CN23STG1",
      "normalizedModelNumber": "grc18cn23stg1",
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
      "id": "model-guardian-grc09cn23stg1",
      "slug": "guardian-grc09cn23stg1",
      "name": "Guardian GRC09CN23STG1",
      "seriesId": "series-guardian-m-series",
      "brandId": "brand-guardian",
      "modelNumber": "GRC09CN23STG1",
      "normalizedModelNumber": "grc09cn23stg1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9100,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-guardian-grc12cn23stg1",
      "slug": "guardian-grc12cn23stg1",
      "name": "Guardian GRC12CN23STG1",
      "seriesId": "series-guardian-eco",
      "brandId": "brand-guardian",
      "modelNumber": "GRC12CN23STG1",
      "normalizedModelNumber": "grc12cn23stg1",
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
      "id": "model-guardian-grc24cn23stg1",
      "slug": "guardian-grc24cn23stg1",
      "name": "Guardian GRC24CN23STG1",
      "seriesId": "series-guardian-eco",
      "brandId": "brand-guardian",
      "modelNumber": "GRC24CN23STG1",
      "normalizedModelNumber": "grc24cn23stg1",
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
      "id": "model-guardian-grc36cn23stg1",
      "slug": "guardian-grc36cn23stg1",
      "name": "Guardian GRC36CN23STG1",
      "seriesId": "series-guardian-eco",
      "brandId": "brand-guardian",
      "modelNumber": "GRC36CN23STG1",
      "normalizedModelNumber": "grc36cn23stg1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33600,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-guardian-rh630e2s11",
      "slug": "guardian-rh630e2s11",
      "name": "Guardian RH630E2S11",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "RH630E2S11",
      "normalizedModelNumber": "rh630e2s11",
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
      "id": "model-guardian-xh636e2s11",
      "slug": "guardian-xh636e2s11",
      "name": "Guardian XH636E2S11",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "XH636E2S11",
      "normalizedModelNumber": "xh636e2s11",
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
      "id": "model-guardian-xh624e2s11",
      "slug": "guardian-xh624e2s11",
      "name": "Guardian XH624E2S11",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "XH624E2S11",
      "normalizedModelNumber": "xh624e2s11",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24200,
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
      "id": "model-guardian-xh648e2s11",
      "slug": "guardian-xh648e2s11",
      "name": "Guardian XH648E2S11",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "XH648E2S11",
      "normalizedModelNumber": "xh648e2s11",
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
      "id": "model-guardian-rhp15048b21",
      "slug": "guardian-rhp15048b21",
      "name": "Guardian RHP15048B21",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "RHP15048B21",
      "normalizedModelNumber": "rhp15048b21",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46000,
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
      "id": "model-guardian-xh660e2s11",
      "slug": "guardian-xh660e2s11",
      "name": "Guardian XH660E2S11",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "XH660E2S11",
      "normalizedModelNumber": "xh660e2s11",
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
      "id": "model-guardian-rhp15060b21",
      "slug": "guardian-rhp15060b21",
      "name": "Guardian RHP15060B21",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "RHP15060B21",
      "normalizedModelNumber": "rhp15060b21",
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
      "id": "model-guardian-rhp15042b21",
      "slug": "guardian-rhp15042b21",
      "name": "Guardian RHP15042B21",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "RHP15042B21",
      "normalizedModelNumber": "rhp15042b21",
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
      "id": "model-guardian-rhp15024b21",
      "slug": "guardian-rhp15024b21",
      "name": "Guardian RHP15024B21",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "RHP15024B21",
      "normalizedModelNumber": "rhp15024b21",
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
      "id": "model-guardian-rhp15030b21",
      "slug": "guardian-rhp15030b21",
      "name": "Guardian RHP15030B21",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "RHP15030B21",
      "normalizedModelNumber": "rhp15030b21",
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
      "id": "model-guardian-rhp15036b21",
      "slug": "guardian-rhp15036b21",
      "name": "Guardian RHP15036B21",
      "seriesId": "series-guardian-lx-series",
      "brandId": "brand-guardian",
      "modelNumber": "RHP15036B21",
      "normalizedModelNumber": "rhp15036b21",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-guardian-urc09cn23stg1",
      "modelNumber": "URC09CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-urc09cn15stg1",
      "modelNumber": "URC09CN15STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-umc24cn23stg1",
      "modelNumber": "UMC24CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-urc12cn23stg1",
      "modelNumber": "URC12CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-urc24cn23stg1",
      "modelNumber": "URC24CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-urc12cn15stg1",
      "modelNumber": "URC12CN15STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-upc09cn23stg1",
      "modelNumber": "UPC09CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-umc18cn23stg1",
      "modelNumber": "UMC18CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-umc48cn23stg1",
      "modelNumber": "UMC48CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-umc36cn23stg1",
      "modelNumber": "UMC36CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-upc12cn23stg1",
      "modelNumber": "UPC12CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-urc18cn23stg1",
      "modelNumber": "URC18CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-upc24cn23stg1",
      "modelNumber": "UPC24CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-upc18cn23stg1",
      "modelNumber": "UPC18CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-upc36cn23stg1",
      "modelNumber": "UPC36CN23STG1*",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-upc48cn23stg1",
      "modelNumber": "UPC48CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-grd09cn15stg1",
      "modelNumber": "GRD09CN15STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-guardian-grd12cn15stg1",
      "modelNumber": "GRD12CN15STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-guardian-grc18cn23stg1",
      "modelNumber": "GRC18CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-guardian-grc09cn23stg1",
      "modelNumber": "GRC09CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-guardian-grc12cn23stg1",
      "modelNumber": "GRC12CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-guardian-grc24cn23stg1",
      "modelNumber": "GRC24CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-guardian-grc36cn23stg1",
      "modelNumber": "GRC36CN23STG1",
      "brandId": "brand-guardian",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-guardian-rh630e2s11",
      "modelNumber": "RH630E2S11",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-xh636e2s11",
      "modelNumber": "XH636E2S11",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-xh624e2s11",
      "modelNumber": "XH624E2S11",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-xh648e2s11",
      "modelNumber": "XH648E2S11",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-rhp15048b21",
      "modelNumber": "RHP15048B21",
      "brandId": "brand-guardian",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-guardian-xh660e2s11",
      "modelNumber": "XH660E2S11",
      "brandId": "brand-guardian",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-guardian-rhp15060b21",
      "modelNumber": "RHP15060B21",
      "brandId": "brand-guardian",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-guardian-rhp15042b21",
      "modelNumber": "RHP15042B21",
      "brandId": "brand-guardian",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-guardian-rhp15024b21",
      "modelNumber": "RHP15024B21",
      "brandId": "brand-guardian",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-guardian-rhp15030b21",
      "modelNumber": "RHP15030B21",
      "brandId": "brand-guardian",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-guardian-rhp15036b21",
      "modelNumber": "RHP15036B21",
      "brandId": "brand-guardian",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-uni09hw23stg1",
      "modelNumber": "UNI09HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-urd09hw15stg1",
      "modelNumber": "URD09HW15STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45442",
      "modelNumber": "IU-45442",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni12hw23stg1",
      "modelNumber": "UNI12HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni24hw23stg1",
      "modelNumber": "UNI24HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-urd12hw15stg1",
      "modelNumber": "URD12HW15STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45441",
      "modelNumber": "IU-45441",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45444",
      "modelNumber": "IU-45444",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45443",
      "modelNumber": "IU-45443",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni18hw23stg1",
      "modelNumber": "UNI18HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni36hw23stg1",
      "modelNumber": "UNI36HW23STG1*",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni09cs23stg1",
      "modelNumber": "UNI09CS23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni48cs23stg1",
      "modelNumber": "UNI48CS23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni12cs23stg1",
      "modelNumber": "UNI12CS23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni24cs23stg1",
      "modelNumber": "UNI24CS23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni18cs23stg1",
      "modelNumber": "UNI18CS23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni48dt23stg1",
      "modelNumber": "UNI48DT23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni12dt23stg1",
      "modelNumber": "UNI12DT23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni09dt23stg1",
      "modelNumber": "UNI09DT23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni36cs23stg1",
      "modelNumber": "UNI36CS23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-grd09hw15stg1",
      "modelNumber": "GRD09HW15STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni24dt23stg1",
      "modelNumber": "UNI24DT23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni18dt23stg1",
      "modelNumber": "UNI18DT23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-grd12hw15stg1",
      "modelNumber": "GRD12HW15STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-grc18hw23stg1",
      "modelNumber": "GRC18HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-grc09hw23stg1",
      "modelNumber": "GRC09HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-grc12hw23stg1",
      "modelNumber": "GRC12HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-uni36dt23stg1",
      "modelNumber": "UNI36DT23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-grc24hw23stg1",
      "modelNumber": "GRC24HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-grc36hw23stg1",
      "modelNumber": "GRC36HW23STG1",
      "brandId": "brand-guardian",
      "type": "wall-single"
    },
    {
      "id": "iu-ctu36b5xds2txv",
      "modelNumber": "CTU36B5XDS2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2",
      "modelNumber": "CTF36B5ADS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2",
      "modelNumber": "CTF36C5ADS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jme16c2sn1txv",
      "modelNumber": "CTU48C5XFS1+JME16C2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2",
      "modelNumber": "CTM36C5ADS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jme12c2sn2",
      "modelNumber": "CTF48C5CFS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmet12cs2n1",
      "modelNumber": "CTF48C5CFS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmet16cs2n1",
      "modelNumber": "CTF48C5CFS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jme12c2sn1",
      "modelNumber": "CTF48C5CFS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jme16c2sn1",
      "modelNumber": "CTF48C5CFS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2",
      "modelNumber": "CTF48C5CFS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1",
      "modelNumber": "CTF48C5CFS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1txv",
      "modelNumber": "CTU48C5XFS1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmet12cs2n1txv",
      "modelNumber": "CTU48C5XFS1+JMET12CS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmet16cs2n1txv",
      "modelNumber": "CTU48C5XFS1+JMET16CS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jme16c2sn2",
      "modelNumber": "CTF48C5CFS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48d5cfs1jme18d2sn1",
      "modelNumber": "CTF48D5CFS1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jme12c2sn1txv",
      "modelNumber": "CTU48C5XFS1+JME12C2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2txv",
      "modelNumber": "CTU48C5XFS2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jme12c2sn2txv",
      "modelNumber": "CTU48C5XFS2+JME12C2SN2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jme16c2sn2txv",
      "modelNumber": "CTU48C5XFS2+JME16C2SN2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs1jme12b2sn1txv",
      "modelNumber": "CTU30B5XCS1+JME12B2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2",
      "modelNumber": "CTM36B5ADS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jme12b2sn2",
      "modelNumber": "CTF36B5ADS2+JME12B2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1",
      "modelNumber": "CTM30B5ACS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jme08b2sn1txv",
      "modelNumber": "CTU36B5XDS1+JME08B2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jme12b2sn1",
      "modelNumber": "CTM36B5ADS1+JME12B2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1txv",
      "modelNumber": "CTU60D5XGS1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1jme18d2sn1txv",
      "modelNumber": "CTU60D5XHS1+JME18D2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1jmet18ds2n1txv",
      "modelNumber": "CTU60D5XHS1+JMET18DS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1txv",
      "modelNumber": "CTU60D5XHS1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48c5cg2ss1",
      "modelNumber": "JHE48C5CG2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48c5cg2ss2",
      "modelNumber": "JHE48C5CG2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48d5cg2ss1",
      "modelNumber": "JHE48D5CG2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jse48d5cg2ss1",
      "modelNumber": "JSE48D5CG2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5ch2ss2",
      "modelNumber": "JHE60D5CH2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5ch2ss1",
      "modelNumber": "JHE60D5CH2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60c5ch2ss2",
      "modelNumber": "JHE60C5CH2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60c5ch2ss1",
      "modelNumber": "JHE60C5CH2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48d5cg2ss2",
      "modelNumber": "JHE48D5CG2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60hxxn1txv",
      "modelNumber": "XAHC60HXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1jmet18ds2n1txv",
      "modelNumber": "CTU60D5XGS1+JMET18DS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jme16c2sn1txv",
      "modelNumber": "CTU60C5XGS1+JME16C2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jse60d5cj2ss1",
      "modelNumber": "JSE60D5CJ2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe30b5ad2ss1",
      "modelNumber": "JHE30B5AD2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5cj2ss1",
      "modelNumber": "JHE60D5CJ2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1jme18d2sn1",
      "modelNumber": "CTF60D5CJS1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1jmet18ds2n1",
      "modelNumber": "CTF60D5CJS1+JMET18DS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2",
      "modelNumber": "CTF60D5CJS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2jme18d2sn2",
      "modelNumber": "CTF60D5CJS2+JME18D2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhvtd60hbcc2n1",
      "modelNumber": "JHVTD60HBCC2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhvtd60jbcc2n1",
      "modelNumber": "JHVTD60JBCC2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhetd60hbcs2n1",
      "modelNumber": "JHETD60HBCS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhetd60jbcs2n1",
      "modelNumber": "JHETD60JBCS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60hbcn1",
      "modelNumber": "XAHC60HBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5cj2ss2",
      "modelNumber": "JHE60D5CJ2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1jme18d2sn1",
      "modelNumber": "CTM60D5CJS1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2",
      "modelNumber": "CTM60D5CJS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1jme18d2sn1",
      "modelNumber": "CTM60D5CHS1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1",
      "modelNumber": "CTM60D5CJS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1",
      "modelNumber": "CTF60D5CJS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jmet12bs2n1txv",
      "modelNumber": "CTU36B5XDS1+JMET12BS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jme12b2sn1txv",
      "modelNumber": "CTU36B5XDS1+JME12B2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2",
      "modelNumber": "CTF36B5CDS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1jmet12bs2n1",
      "modelNumber": "CTF36B5CDS1+JMET12BS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1jme12b2sn1",
      "modelNumber": "CTF36B5CDS1+JME12B2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1",
      "modelNumber": "CTF36B5CDS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5ad2ss1",
      "modelNumber": "JHE36B5AD2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe30b5ad2ss2",
      "modelNumber": "JHE30B5AD2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe24b5ac2ss2",
      "modelNumber": "JHE24B5AC2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jme12c2sn2",
      "modelNumber": "CTF36C5CDS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2",
      "modelNumber": "CTF36C5CDS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmet16cs2n1",
      "modelNumber": "CTF36C5CDS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmet12cs2n1",
      "modelNumber": "CTF36C5CDS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jme16c2sn1",
      "modelNumber": "CTF36C5CDS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jme12c2sn1",
      "modelNumber": "CTF36C5CDS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1",
      "modelNumber": "CTF36C5CDS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2jme12b2sn2",
      "modelNumber": "CTF36B5CDS2+JME12B2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jme12b2sn1",
      "modelNumber": "CTF30B5ACS1+JME12B2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmet12bs2n1",
      "modelNumber": "CTF36B5ADS1+JMET12BS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs1jme12c2sn1",
      "modelNumber": "CTF30C5ACS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs1jme16c2sn1",
      "modelNumber": "CTF30C5ACS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs1jmet12cs2n1",
      "modelNumber": "CTF30C5ACS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jme16c2sn2",
      "modelNumber": "CTF36C5CDS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jme12b2sn1",
      "modelNumber": "CTF36B5ADS1+JME12B2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1",
      "modelNumber": "CTM36B5ADS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jme08b2sn1",
      "modelNumber": "CTM36B5ADS1+JME08B2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs1jmet16cs2n1",
      "modelNumber": "CTF30C5ACS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs2jme12c2sn2",
      "modelNumber": "CTF30C5ACS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs2jme16c2sn2",
      "modelNumber": "CTF30C5ACS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1",
      "modelNumber": "CTF36B5ADS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jme08b2sn1",
      "modelNumber": "CTF36B5ADS1+JME08B2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1jme18d2sn1txv",
      "modelNumber": "CTU60D5XGS1+JME18D2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2txv",
      "modelNumber": "CTU60C5XGS2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jme16c2sn2txv",
      "modelNumber": "CTU60C5XGS2+JME16C2SN2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jme12c2sn2txv",
      "modelNumber": "CTU60C5XGS2+JME12C2SN2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1txv",
      "modelNumber": "CTU60C5XGS1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmet16cs2n1txv",
      "modelNumber": "CTU60C5XGS1+JMET16CS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmet12cs2n1txv",
      "modelNumber": "CTU60C5XGS1+JMET12CS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2",
      "modelNumber": "CTM30B5ACS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jme12b2sn1",
      "modelNumber": "CTM30B5ACS1+JME12B2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jme12b2sn2txv",
      "modelNumber": "CTU36B5XDS2+JME12B2SN2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1txv",
      "modelNumber": "CTU36B5XDS1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jme12c2sn2",
      "modelNumber": "CTM48C5CFS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2",
      "modelNumber": "CTM48C5CFS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jme16c2sn2",
      "modelNumber": "CTM48C5CFS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48d5cfs1jme18d2sn1",
      "modelNumber": "CTM48D5CFS1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmet16cs2n1",
      "modelNumber": "CTM36C5CDS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2",
      "modelNumber": "CTM36C5CDS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jme16c2sn1",
      "modelNumber": "CTM36C5CDS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmet12cs2n1",
      "modelNumber": "CTM36C5CDS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jme16c2sn2",
      "modelNumber": "CTM36C5CDS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jme12c2sn2",
      "modelNumber": "CTM36C5CDS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jme12c2sn1",
      "modelNumber": "CTM48C5CFS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jme16c2sn1",
      "modelNumber": "CTM48C5CFS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmet12cs2n1",
      "modelNumber": "CTM48C5CFS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmet16cs2n1",
      "modelNumber": "CTM48C5CFS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe24b5ac2ss1",
      "modelNumber": "JHE24B5AC2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jme12c2sn2",
      "modelNumber": "CTF60C5CHS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2",
      "modelNumber": "CTF60C5CHS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jme16c2sn1",
      "modelNumber": "CTM60C5CGS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jme12c2sn1",
      "modelNumber": "CTM60C5CGS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1",
      "modelNumber": "CTM60C5CGS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2jme18d2sn2",
      "modelNumber": "CTF60D5CHS2+JME18D2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2",
      "modelNumber": "CTF60D5CHS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jmet18ds2n1",
      "modelNumber": "CTF60D5CHS1+JMET18DS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jme18d2sn1",
      "modelNumber": "CTF60D5CHS1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1",
      "modelNumber": "CTF60D5CHS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jme16c2sn1",
      "modelNumber": "CTM60C5CHS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jme12c2sn1",
      "modelNumber": "CTM60C5CHS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1",
      "modelNumber": "CTM60C5CHS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jme16c2sn2",
      "modelNumber": "CTM60C5CGS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jme12c2sn2",
      "modelNumber": "CTM60C5CGS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2",
      "modelNumber": "CTM60C5CGS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmet16cs2n1",
      "modelNumber": "CTM60C5CGS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmet12cs2n1",
      "modelNumber": "CTM60C5CGS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jmet18ds2n1",
      "modelNumber": "CTM60D5CGS1+JMET18DS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jme18d2sn1",
      "modelNumber": "CTM60D5CGS1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1",
      "modelNumber": "CTM60D5CGS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jme16c2sn2",
      "modelNumber": "CTM60C5CHS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jme12c2sn2",
      "modelNumber": "CTM60C5CHS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2",
      "modelNumber": "CTM60C5CHS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmet16cs2n1",
      "modelNumber": "CTM60C5CHS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmet12cs2n1",
      "modelNumber": "CTM60C5CHS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jme12c2sn1txv",
      "modelNumber": "CTU60C5XGS1+JME12C2SN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2jme18d2sn2",
      "modelNumber": "CTM60D5CHS2+JME18D2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2",
      "modelNumber": "CTM60D5CHS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1jmet18ds2n1",
      "modelNumber": "CTM60D5CHS1+JMET18DS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1",
      "modelNumber": "CTM60D5CHS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2jme18d2sn2",
      "modelNumber": "CTM60D5CGS2+JME18D2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2",
      "modelNumber": "CTM60D5CGS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jme12c2sn1",
      "modelNumber": "CTM36C5CDS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1",
      "modelNumber": "CTM36C5CDS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1",
      "modelNumber": "CTM48C5CFS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jme12c2sn1",
      "modelNumber": "CTF60C5CGS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmet16cs2n1",
      "modelNumber": "CTF60C5CGS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmet12cs2n1",
      "modelNumber": "CTF60C5CGS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5cd2ss1",
      "modelNumber": "JHE36B5CD2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5cd2ss2",
      "modelNumber": "JHE36B5CD2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe42c5cf2ss1",
      "modelNumber": "JHE42C5CF2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1",
      "modelNumber": "CTF60C5CGS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jme16c2sn1",
      "modelNumber": "CTF60C5CGS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmet16cs2n1",
      "modelNumber": "CTF60C5CHS1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5cd2ss1",
      "modelNumber": "JHE36C5CD2SS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5cd2ss2",
      "modelNumber": "JHE36C5CD2SS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jme12c2sn2",
      "modelNumber": "CTF60C5CGS2+JME12C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2",
      "modelNumber": "CTF60C5CGS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jme18d2sn2",
      "modelNumber": "CTF60D5CGS2+JME18D2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2",
      "modelNumber": "CTF60D5CGS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jmet18ds2n1",
      "modelNumber": "CTF60D5CGS1+JMET18DS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jme18d2sn1",
      "modelNumber": "CTF60D5CGS1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1",
      "modelNumber": "CTF60D5CGS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jme16c2sn2",
      "modelNumber": "CTF60C5CHS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jme16c2sn2",
      "modelNumber": "CTF60C5CGS2+JME16C2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1",
      "modelNumber": "CTF60C5CHS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jme12c2sn1",
      "modelNumber": "CTF60C5CHS1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jme16c2sn1",
      "modelNumber": "CTF60C5CHS1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmet12cs2n1",
      "modelNumber": "CTF60C5CHS1+JMET12CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fbcn1",
      "modelNumber": "XAHC48FBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fbcn1jmet16cs2n1",
      "modelNumber": "XAHC48FBCN1+JMET16CS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fxxn1jmet16cs2n1txv",
      "modelNumber": "XAHC48FXXN1+JMET16CS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dban1",
      "modelNumber": "XAHC36DBAN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dban1",
      "modelNumber": "XAFB36DBAN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dban1jme12b2sn1",
      "modelNumber": "XAFB36DBAN1+JME12B2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dban1",
      "modelNumber": "XAFC36DBAN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dban1jme12c2sn1",
      "modelNumber": "XAFC36DBAN1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dban1jme16c2sn1",
      "modelNumber": "XAFC36DBAN1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fban1",
      "modelNumber": "XAFC48FBAN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fban1jme12c2sn1",
      "modelNumber": "XAFC48FBAN1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fban1jme16c2sn1",
      "modelNumber": "XAFC48FBAN1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd48fban1jme18d2sn1",
      "modelNumber": "XAFD48FBAN1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fbcn1jme12c2sn1",
      "modelNumber": "XAFC48FBCN1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd48fbcn1jme18d2sn1",
      "modelNumber": "XAFD48FBCN1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dbcn1jme12c2sn1",
      "modelNumber": "XAHC36DBCN1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dbcn1jme16c2sn1",
      "modelNumber": "XAHC36DBCN1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fbcn1jme16c2sn1",
      "modelNumber": "XAHC48FBCN1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd48fbcn1jme18d2sn1",
      "modelNumber": "XAHD48FBCN1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fbcn1",
      "modelNumber": "XAFC48FBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fbcn1jme16c2sn1",
      "modelNumber": "XAFC48FBCN1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fxxn1txv",
      "modelNumber": "XAFC48FXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60gbcn1jme12c2sn1",
      "modelNumber": "XAFC60GBCN1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60gbcn1jme16c2sn1",
      "modelNumber": "XAFC60GBCN1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd48fbcn1",
      "modelNumber": "XAFD48FBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60gbcn1jme18d2sn1",
      "modelNumber": "XAFD60GBCN1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fbcn1jme12c2sn1",
      "modelNumber": "XAHC48FBCN1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fxxn1txv",
      "modelNumber": "XAHC48FXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb30cban1",
      "modelNumber": "XAFB30CBAN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48d5cfs1",
      "modelNumber": "CTF48D5CFS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48d5cfs2",
      "modelNumber": "CTF48D5CFS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5cds1",
      "modelNumber": "CTM36B5CDS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5cds2",
      "modelNumber": "CTM36B5CDS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48d5cfs1",
      "modelNumber": "CTM48D5CFS1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48d5cfs2",
      "modelNumber": "CTM48D5CFS2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jmet08bs2n1txv",
      "modelNumber": "CTU36B5XDS1+JMET08BS2N1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jme08b2sn2txv",
      "modelNumber": "CTU36B5XDS2+JME08B2SN2+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60hbcn1",
      "modelNumber": "XAHD60HBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60jbcn1",
      "modelNumber": "XAHD60JBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60jbcn1jme18d2sn1",
      "modelNumber": "XAHD60JBCN1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmet08bs2n1",
      "modelNumber": "CTF36B5ADS1+JMET08BS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jme08b2sn2",
      "modelNumber": "CTF36B5ADS2+JME08B2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmet08bs2n1",
      "modelNumber": "CTM36B5ADS1+JMET08BS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmet12bs2n1",
      "modelNumber": "CTM36B5ADS1+JMET12BS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jme08b2sn2",
      "modelNumber": "CTM36B5ADS2+JME08B2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jme12b2sn2",
      "modelNumber": "CTM36B5ADS2+JME12B2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60gbcn1jme12c2sn1",
      "modelNumber": "XAHC60GBCN1+JME12C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60gbcn1jme16c2sn1",
      "modelNumber": "XAHC60GBCN1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd48fbcn1",
      "modelNumber": "XAHD48FBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd48fxxn1txv",
      "modelNumber": "XAHD48FXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60gbcn1jme18d2sn1",
      "modelNumber": "XAHD60GBCN1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xauc48fxxn1txv",
      "modelNumber": "XAUC48FXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60hbcn1",
      "modelNumber": "XAFC60HBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60hxxn1txv",
      "modelNumber": "XAFC60HXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60hbcn1",
      "modelNumber": "XAFD60HBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60hxxn1txv",
      "modelNumber": "XAFD60HXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60gbcn1",
      "modelNumber": "XAHC60GBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60gxxn1txv",
      "modelNumber": "XAHC60GXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60gbcn1",
      "modelNumber": "XAHD60GBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60gxxn1txv",
      "modelNumber": "XAHD60GXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60hxxn1txv",
      "modelNumber": "XAHD60HXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xaud60hxxn1txv",
      "modelNumber": "XAUD60HXXN1+TXV",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhetc60hbcs2n1",
      "modelNumber": "JHETC60HBCS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhvtc60hbcc2n1",
      "modelNumber": "JHVTC60HBCC2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60hbcn1jme16c2sn1",
      "modelNumber": "XAFC60HBCN1+JME16C2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60hbcn1jme18d2sn1",
      "modelNumber": "XAFD60HBCN1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60jbcn1",
      "modelNumber": "XAFD60JBCN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60jbcn1jme18d2sn1",
      "modelNumber": "XAFD60JBCN1+JME18D2SN1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1jmet18ds2n1",
      "modelNumber": "CTM60D5CJS1+JMET18DS2N1",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2jme18d2sn2",
      "modelNumber": "CTM60D5CJS2+JME18D2SN2",
      "brandId": "brand-guardian",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-guardian-urc09cn23stg1-uni09hw23stg1",
      "slug": "guardian-urc09cn23stg1-uni09hw23stg1",
      "modelId": "model-guardian-urc09cn23stg1",
      "outdoorUnitId": "ou-guardian-urc09cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-urc09cn15stg1-urd09hw15stg1",
      "slug": "guardian-urc09cn15stg1-urd09hw15stg1",
      "modelId": "model-guardian-urc09cn15stg1",
      "outdoorUnitId": "ou-guardian-urc09cn15stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-umc24cn23stg1-iu-45442",
      "slug": "guardian-umc24cn23stg1-iu-45442",
      "modelId": "model-guardian-umc24cn23stg1",
      "outdoorUnitId": "ou-guardian-umc24cn23stg1",
      "indoorUnitId": "iu-iu-45442",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-urc12cn23stg1-uni12hw23stg1",
      "slug": "guardian-urc12cn23stg1-uni12hw23stg1",
      "modelId": "model-guardian-urc12cn23stg1",
      "outdoorUnitId": "ou-guardian-urc12cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-urc24cn23stg1-uni24hw23stg1",
      "slug": "guardian-urc24cn23stg1-uni24hw23stg1",
      "modelId": "model-guardian-urc24cn23stg1",
      "outdoorUnitId": "ou-guardian-urc24cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-urc12cn15stg1-urd12hw15stg1",
      "slug": "guardian-urc12cn15stg1-urd12hw15stg1",
      "modelId": "model-guardian-urc12cn15stg1",
      "outdoorUnitId": "ou-guardian-urc12cn15stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc09cn23stg1-uni09hw23stg1",
      "slug": "guardian-upc09cn23stg1-uni09hw23stg1",
      "modelId": "model-guardian-upc09cn23stg1",
      "outdoorUnitId": "ou-guardian-upc09cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-umc18cn23stg1-iu-45441",
      "slug": "guardian-umc18cn23stg1-iu-45441",
      "modelId": "model-guardian-umc18cn23stg1",
      "outdoorUnitId": "ou-guardian-umc18cn23stg1",
      "indoorUnitId": "iu-iu-45441",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-umc48cn23stg1-iu-45444",
      "slug": "guardian-umc48cn23stg1-iu-45444",
      "modelId": "model-guardian-umc48cn23stg1",
      "outdoorUnitId": "ou-guardian-umc48cn23stg1",
      "indoorUnitId": "iu-iu-45444",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-umc36cn23stg1-iu-45443",
      "slug": "guardian-umc36cn23stg1-iu-45443",
      "modelId": "model-guardian-umc36cn23stg1",
      "outdoorUnitId": "ou-guardian-umc36cn23stg1",
      "indoorUnitId": "iu-iu-45443",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc12cn23stg1-uni12hw23stg1",
      "slug": "guardian-upc12cn23stg1-uni12hw23stg1",
      "modelId": "model-guardian-upc12cn23stg1",
      "outdoorUnitId": "ou-guardian-upc12cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-urc18cn23stg1-uni18hw23stg1",
      "slug": "guardian-urc18cn23stg1-uni18hw23stg1",
      "modelId": "model-guardian-urc18cn23stg1",
      "outdoorUnitId": "ou-guardian-urc18cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc24cn23stg1-uni24hw23stg1",
      "slug": "guardian-upc24cn23stg1-uni24hw23stg1",
      "modelId": "model-guardian-upc24cn23stg1",
      "outdoorUnitId": "ou-guardian-upc24cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc18cn23stg1-uni18hw23stg1",
      "slug": "guardian-upc18cn23stg1-uni18hw23stg1",
      "modelId": "model-guardian-upc18cn23stg1",
      "outdoorUnitId": "ou-guardian-upc18cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc36cn23stg1-uni36hw23stg1",
      "slug": "guardian-upc36cn23stg1-uni36hw23stg1",
      "modelId": "model-guardian-upc36cn23stg1",
      "outdoorUnitId": "ou-guardian-upc36cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc09cn23stg1-uni09cs23stg1",
      "slug": "guardian-upc09cn23stg1-uni09cs23stg1",
      "modelId": "model-guardian-upc09cn23stg1",
      "outdoorUnitId": "ou-guardian-upc09cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc48cn23stg1-uni48cs23stg1",
      "slug": "guardian-upc48cn23stg1-uni48cs23stg1",
      "modelId": "model-guardian-upc48cn23stg1",
      "outdoorUnitId": "ou-guardian-upc48cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc12cn23stg1-uni12cs23stg1",
      "slug": "guardian-upc12cn23stg1-uni12cs23stg1",
      "modelId": "model-guardian-upc12cn23stg1",
      "outdoorUnitId": "ou-guardian-upc12cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc24cn23stg1-uni24cs23stg1",
      "slug": "guardian-upc24cn23stg1-uni24cs23stg1",
      "modelId": "model-guardian-upc24cn23stg1",
      "outdoorUnitId": "ou-guardian-upc24cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc18cn23stg1-uni18cs23stg1",
      "slug": "guardian-upc18cn23stg1-uni18cs23stg1",
      "modelId": "model-guardian-upc18cn23stg1",
      "outdoorUnitId": "ou-guardian-upc18cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc48cn23stg1-uni48dt23stg1",
      "slug": "guardian-upc48cn23stg1-uni48dt23stg1",
      "modelId": "model-guardian-upc48cn23stg1",
      "outdoorUnitId": "ou-guardian-upc48cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc12cn23stg1-uni12dt23stg1",
      "slug": "guardian-upc12cn23stg1-uni12dt23stg1",
      "modelId": "model-guardian-upc12cn23stg1",
      "outdoorUnitId": "ou-guardian-upc12cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc09cn23stg1-uni09dt23stg1",
      "slug": "guardian-upc09cn23stg1-uni09dt23stg1",
      "modelId": "model-guardian-upc09cn23stg1",
      "outdoorUnitId": "ou-guardian-upc09cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc36cn23stg1-uni36cs23stg1",
      "slug": "guardian-upc36cn23stg1-uni36cs23stg1",
      "modelId": "model-guardian-upc36cn23stg1",
      "outdoorUnitId": "ou-guardian-upc36cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-grd09cn15stg1-grd09hw15stg1",
      "slug": "guardian-grd09cn15stg1-grd09hw15stg1",
      "modelId": "model-guardian-grd09cn15stg1",
      "outdoorUnitId": "ou-guardian-grd09cn15stg1",
      "indoorUnitId": "iu-grd09hw15stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc24cn23stg1-uni24dt23stg1",
      "slug": "guardian-upc24cn23stg1-uni24dt23stg1",
      "modelId": "model-guardian-upc24cn23stg1",
      "outdoorUnitId": "ou-guardian-upc24cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc18cn23stg1-uni18dt23stg1",
      "slug": "guardian-upc18cn23stg1-uni18dt23stg1",
      "modelId": "model-guardian-upc18cn23stg1",
      "outdoorUnitId": "ou-guardian-upc18cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-grd12cn15stg1-grd12hw15stg1",
      "slug": "guardian-grd12cn15stg1-grd12hw15stg1",
      "modelId": "model-guardian-grd12cn15stg1",
      "outdoorUnitId": "ou-guardian-grd12cn15stg1",
      "indoorUnitId": "iu-grd12hw15stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-grc18cn23stg1-grc18hw23stg1",
      "slug": "guardian-grc18cn23stg1-grc18hw23stg1",
      "modelId": "model-guardian-grc18cn23stg1",
      "outdoorUnitId": "ou-guardian-grc18cn23stg1",
      "indoorUnitId": "iu-grc18hw23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-grc09cn23stg1-grc09hw23stg1",
      "slug": "guardian-grc09cn23stg1-grc09hw23stg1",
      "modelId": "model-guardian-grc09cn23stg1",
      "outdoorUnitId": "ou-guardian-grc09cn23stg1",
      "indoorUnitId": "iu-grc09hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-grc12cn23stg1-grc12hw23stg1",
      "slug": "guardian-grc12cn23stg1-grc12hw23stg1",
      "modelId": "model-guardian-grc12cn23stg1",
      "outdoorUnitId": "ou-guardian-grc12cn23stg1",
      "indoorUnitId": "iu-grc12hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-upc36cn23stg1-uni36dt23stg1",
      "slug": "guardian-upc36cn23stg1-uni36dt23stg1",
      "modelId": "model-guardian-upc36cn23stg1",
      "outdoorUnitId": "ou-guardian-upc36cn23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-grc24cn23stg1-grc24hw23stg1",
      "slug": "guardian-grc24cn23stg1-grc24hw23stg1",
      "modelId": "model-guardian-grc24cn23stg1",
      "outdoorUnitId": "ou-guardian-grc24cn23stg1",
      "indoorUnitId": "iu-grc24hw23stg1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-grc36cn23stg1-grc36hw23stg1",
      "slug": "guardian-grc36cn23stg1-grc36hw23stg1",
      "modelId": "model-guardian-grc36cn23stg1",
      "outdoorUnitId": "ou-guardian-grc36cn23stg1",
      "indoorUnitId": "iu-grc36hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rh630e2s11-ctu36b5xds2txv",
      "slug": "guardian-rh630e2s11-ctu36b5xds2txv",
      "modelId": "model-guardian-rh630e2s11",
      "outdoorUnitId": "ou-guardian-rh630e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rh630e2s11-ctf36b5ads2",
      "slug": "guardian-rh630e2s11-ctf36b5ads2",
      "modelId": "model-guardian-rh630e2s11",
      "outdoorUnitId": "ou-guardian-rh630e2s11",
      "indoorUnitId": "iu-ctf36b5ads2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rh630e2s11-ctf36c5ads2",
      "slug": "guardian-rh630e2s11-ctf36c5ads2",
      "modelId": "model-guardian-rh630e2s11",
      "outdoorUnitId": "ou-guardian-rh630e2s11",
      "indoorUnitId": "iu-ctf36c5ads2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu48c5xfs1jme16c2sn1txv",
      "slug": "guardian-xh636e2s11-ctu48c5xfs1jme16c2sn1txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jme16c2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rh630e2s11-ctm36c5ads2",
      "slug": "guardian-rh630e2s11-ctm36c5ads2",
      "modelId": "model-guardian-rh630e2s11",
      "outdoorUnitId": "ou-guardian-rh630e2s11",
      "indoorUnitId": "iu-ctm36c5ads2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48c5cfs2jme12c2sn2",
      "slug": "guardian-xh636e2s11-ctf48c5cfs2jme12c2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48c5cfs1jmet12cs2n1",
      "slug": "guardian-xh636e2s11-ctf48c5cfs1jmet12cs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48c5cfs1jmet16cs2n1",
      "slug": "guardian-xh636e2s11-ctf48c5cfs1jmet16cs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48c5cfs1jme12c2sn1",
      "slug": "guardian-xh636e2s11-ctf48c5cfs1jme12c2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48c5cfs1jme16c2sn1",
      "slug": "guardian-xh636e2s11-ctf48c5cfs1jme16c2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48c5cfs2",
      "slug": "guardian-xh636e2s11-ctf48c5cfs2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48c5cfs1",
      "slug": "guardian-xh636e2s11-ctf48c5cfs1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu48c5xfs1txv",
      "slug": "guardian-xh636e2s11-ctu48c5xfs1txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu48c5xfs1jmet12cs2n1txv",
      "slug": "guardian-xh636e2s11-ctu48c5xfs1jmet12cs2n1txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmet12cs2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu48c5xfs1jmet16cs2n1txv",
      "slug": "guardian-xh636e2s11-ctu48c5xfs1jmet16cs2n1txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmet16cs2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48c5cfs2jme16c2sn2",
      "slug": "guardian-xh636e2s11-ctf48c5cfs2jme16c2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48d5cfs1jme18d2sn1",
      "slug": "guardian-xh636e2s11-ctf48d5cfs1jme18d2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48d5cfs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu48c5xfs1jme12c2sn1txv",
      "slug": "guardian-xh636e2s11-ctu48c5xfs1jme12c2sn1txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jme12c2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu48c5xfs2txv",
      "slug": "guardian-xh636e2s11-ctu48c5xfs2txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu48c5xfs2jme12c2sn2txv",
      "slug": "guardian-xh636e2s11-ctu48c5xfs2jme12c2sn2txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jme12c2sn2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu48c5xfs2jme16c2sn2txv",
      "slug": "guardian-xh636e2s11-ctu48c5xfs2jme16c2sn2txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jme16c2sn2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu30b5xcs1jme12b2sn1txv",
      "slug": "guardian-xh624e2s11-ctu30b5xcs1jme12b2sn1txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1jme12b2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm36b5ads2",
      "slug": "guardian-xh624e2s11-ctm36b5ads2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf36b5ads2",
      "slug": "guardian-xh624e2s11-ctf36b5ads2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf36b5ads2jme12b2sn2",
      "slug": "guardian-xh624e2s11-ctf36b5ads2jme12b2sn2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jme12b2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm30b5acs1",
      "slug": "guardian-xh624e2s11-ctm30b5acs1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm30b5acs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu36b5xds1jme08b2sn1txv",
      "slug": "guardian-xh624e2s11-ctu36b5xds1jme08b2sn1txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme08b2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm36b5ads1jme12b2sn1",
      "slug": "guardian-xh624e2s11-ctm36b5ads1jme12b2sn1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jme12b2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60d5xgs1txv",
      "slug": "guardian-xh648e2s11-ctu60d5xgs1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60d5xhs1jme18d2sn1txv",
      "slug": "guardian-xh648e2s11-ctu60d5xhs1jme18d2sn1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jme18d2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "slug": "guardian-xh648e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jmet18ds2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60d5xhs1txv",
      "slug": "guardian-xh648e2s11-ctu60d5xhs1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jhe48c5cg2ss1",
      "slug": "guardian-xh648e2s11-jhe48c5cg2ss1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jhe48c5cg2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jhe48c5cg2ss2",
      "slug": "guardian-xh648e2s11-jhe48c5cg2ss2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jhe48c5cg2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jhe48d5cg2ss1",
      "slug": "guardian-xh648e2s11-jhe48d5cg2ss1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jhe48d5cg2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jse48d5cg2ss1",
      "slug": "guardian-xh648e2s11-jse48d5cg2ss1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jse48d5cg2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jhe60d5ch2ss2",
      "slug": "guardian-xh648e2s11-jhe60d5ch2ss2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jhe60d5ch2ss1",
      "slug": "guardian-xh648e2s11-jhe60d5ch2ss1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jhe60c5ch2ss2",
      "slug": "guardian-xh648e2s11-jhe60c5ch2ss2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jhe60c5ch2ss1",
      "slug": "guardian-xh648e2s11-jhe60c5ch2ss1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-jhe48d5cg2ss2",
      "slug": "guardian-xh648e2s11-jhe48d5cg2ss2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-jhe48d5cg2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xahc60hxxn1txv",
      "slug": "guardian-rhp15048b21-xahc60hxxn1txv",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xahc60hxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60d5xgs1jmet18ds2n1txv",
      "slug": "guardian-xh648e2s11-ctu60d5xgs1jmet18ds2n1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1jmet18ds2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60c5xgs1jme16c2sn1txv",
      "slug": "guardian-xh648e2s11-ctu60c5xgs1jme16c2sn1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jme16c2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-jse60d5cj2ss1",
      "slug": "guardian-xh660e2s11-jse60d5cj2ss1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-jse60d5cj2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rh630e2s11-ctm36b5ads2",
      "slug": "guardian-rh630e2s11-ctm36b5ads2",
      "modelId": "model-guardian-rh630e2s11",
      "outdoorUnitId": "ou-guardian-rh630e2s11",
      "indoorUnitId": "iu-ctm36b5ads2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rh630e2s11-jhe30b5ad2ss1",
      "slug": "guardian-rh630e2s11-jhe30b5ad2ss1",
      "modelId": "model-guardian-rh630e2s11",
      "outdoorUnitId": "ou-guardian-rh630e2s11",
      "indoorUnitId": "iu-jhe30b5ad2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-jhe60d5ch2ss2",
      "slug": "guardian-xh660e2s11-jhe60d5ch2ss2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-jhe60d5cj2ss1",
      "slug": "guardian-xh660e2s11-jhe60d5cj2ss1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-jhe60d5cj2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-jhe60c5ch2ss2",
      "slug": "guardian-xh660e2s11-jhe60c5ch2ss2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-jhe60d5ch2ss1",
      "slug": "guardian-xh660e2s11-jhe60d5ch2ss1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5cjs1jme18d2sn1",
      "slug": "guardian-xh660e2s11-ctf60d5cjs1jme18d2sn1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5cjs1jmet18ds2n1",
      "slug": "guardian-xh660e2s11-ctf60d5cjs1jmet18ds2n1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1jmet18ds2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5cjs2",
      "slug": "guardian-xh660e2s11-ctf60d5cjs2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5cjs2jme18d2sn2",
      "slug": "guardian-xh660e2s11-ctf60d5cjs2jme18d2sn2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2jme18d2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-jhvtd60hbcc2n1",
      "slug": "guardian-rhp15060b21-jhvtd60hbcc2n1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-jhvtd60hbcc2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-jhvtd60jbcc2n1",
      "slug": "guardian-rhp15060b21-jhvtd60jbcc2n1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-jhvtd60jbcc2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-jhetd60hbcs2n1",
      "slug": "guardian-rhp15060b21-jhetd60hbcs2n1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-jhetd60hbcs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-jhetd60jbcs2n1",
      "slug": "guardian-rhp15060b21-jhetd60jbcs2n1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-jhetd60jbcs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xahc60hbcn1",
      "slug": "guardian-rhp15048b21-xahc60hbcn1",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xahc60hbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-jhe60d5cj2ss2",
      "slug": "guardian-xh660e2s11-jhe60d5cj2ss2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-jhe60d5cj2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5cjs1jme18d2sn1",
      "slug": "guardian-xh660e2s11-ctm60d5cjs1jme18d2sn1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5cjs2",
      "slug": "guardian-xh660e2s11-ctm60d5cjs2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-jhe60c5ch2ss1",
      "slug": "guardian-xh660e2s11-jhe60c5ch2ss1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5chs1jme18d2sn1",
      "slug": "guardian-xh660e2s11-ctm60d5chs1jme18d2sn1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5cjs1",
      "slug": "guardian-xh660e2s11-ctm60d5cjs1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5cjs1",
      "slug": "guardian-xh660e2s11-ctf60d5cjs1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu36b5xds1jmet12bs2n1txv",
      "slug": "guardian-xh624e2s11-ctu36b5xds1jmet12bs2n1txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet12bs2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu36b5xds1jme12b2sn1txv",
      "slug": "guardian-xh624e2s11-ctu36b5xds1jme12b2sn1txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme12b2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36b5cds2",
      "slug": "guardian-xh636e2s11-ctf36b5cds2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36b5cds1jmet12bs2n1",
      "slug": "guardian-xh636e2s11-ctf36b5cds1jmet12bs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds1jmet12bs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36b5cds1jme12b2sn1",
      "slug": "guardian-xh636e2s11-ctf36b5cds1jme12b2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds1jme12b2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36b5cds1",
      "slug": "guardian-xh636e2s11-ctf36b5cds1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-jhe36b5ad2ss1",
      "slug": "guardian-xh624e2s11-jhe36b5ad2ss1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-jhe36b5ad2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-jhe30b5ad2ss2",
      "slug": "guardian-xh624e2s11-jhe30b5ad2ss2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-jhe30b5ad2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-jhe30b5ad2ss1",
      "slug": "guardian-xh624e2s11-jhe30b5ad2ss1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-jhe30b5ad2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-jhe24b5ac2ss2",
      "slug": "guardian-xh624e2s11-jhe24b5ac2ss2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-jhe24b5ac2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36c5cds2jme12c2sn2",
      "slug": "guardian-xh636e2s11-ctf36c5cds2jme12c2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36c5cds2",
      "slug": "guardian-xh636e2s11-ctf36c5cds2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36c5cds1jmet16cs2n1",
      "slug": "guardian-xh636e2s11-ctf36c5cds1jmet16cs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36c5cds1jmet12cs2n1",
      "slug": "guardian-xh636e2s11-ctf36c5cds1jmet12cs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36c5cds1jme16c2sn1",
      "slug": "guardian-xh636e2s11-ctf36c5cds1jme16c2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36c5cds1jme12c2sn1",
      "slug": "guardian-xh636e2s11-ctf36c5cds1jme12c2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36c5cds1",
      "slug": "guardian-xh636e2s11-ctf36c5cds1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36b5cds2jme12b2sn2",
      "slug": "guardian-xh636e2s11-ctf36b5cds2jme12b2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds2jme12b2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf30b5acs1jme12b2sn1",
      "slug": "guardian-xh624e2s11-ctf30b5acs1jme12b2sn1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf30b5acs1jme12b2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf36b5ads1jmet12bs2n1",
      "slug": "guardian-xh624e2s11-ctf36b5ads1jmet12bs2n1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jmet12bs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf30c5acs1jme12c2sn1",
      "slug": "guardian-xh624e2s11-ctf30c5acs1jme12c2sn1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf30c5acs1jme16c2sn1",
      "slug": "guardian-xh624e2s11-ctf30c5acs1jme16c2sn1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf30c5acs1jmet12cs2n1",
      "slug": "guardian-xh624e2s11-ctf30c5acs1jmet12cs2n1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf36c5cds2jme16c2sn2",
      "slug": "guardian-xh636e2s11-ctf36c5cds2jme16c2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf36b5ads1jme12b2sn1",
      "slug": "guardian-xh624e2s11-ctf36b5ads1jme12b2sn1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jme12b2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm36b5ads1",
      "slug": "guardian-xh624e2s11-ctm36b5ads1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm36b5ads1jme08b2sn1",
      "slug": "guardian-xh624e2s11-ctm36b5ads1jme08b2sn1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jme08b2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf30c5acs1jmet16cs2n1",
      "slug": "guardian-xh624e2s11-ctf30c5acs1jmet16cs2n1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf30c5acs2jme12c2sn2",
      "slug": "guardian-xh624e2s11-ctf30c5acs2jme12c2sn2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf30c5acs2jme16c2sn2",
      "slug": "guardian-xh624e2s11-ctf30c5acs2jme16c2sn2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf36b5ads1",
      "slug": "guardian-xh624e2s11-ctf36b5ads1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf36b5ads1jme08b2sn1",
      "slug": "guardian-xh624e2s11-ctf36b5ads1jme08b2sn1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jme08b2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60d5xgs1jme18d2sn1txv",
      "slug": "guardian-xh648e2s11-ctu60d5xgs1jme18d2sn1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1jme18d2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60c5xgs2txv",
      "slug": "guardian-xh648e2s11-ctu60c5xgs2txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60c5xgs2jme16c2sn2txv",
      "slug": "guardian-xh648e2s11-ctu60c5xgs2jme16c2sn2txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jme16c2sn2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60c5xgs2jme12c2sn2txv",
      "slug": "guardian-xh648e2s11-ctu60c5xgs2jme12c2sn2txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jme12c2sn2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60c5xgs1txv",
      "slug": "guardian-xh648e2s11-ctu60c5xgs1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60c5xgs1jmet16cs2n1txv",
      "slug": "guardian-xh648e2s11-ctu60c5xgs1jmet16cs2n1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmet16cs2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60c5xgs1jmet12cs2n1txv",
      "slug": "guardian-xh648e2s11-ctu60c5xgs1jmet12cs2n1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmet12cs2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm30b5acs2",
      "slug": "guardian-xh624e2s11-ctm30b5acs2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm30b5acs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm30b5acs1jme12b2sn1",
      "slug": "guardian-xh624e2s11-ctm30b5acs1jme12b2sn1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm30b5acs1jme12b2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu36b5xds2jme12b2sn2txv",
      "slug": "guardian-xh636e2s11-ctu36b5xds2jme12b2sn2txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme12b2sn2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu36b5xds2txv",
      "slug": "guardian-xh636e2s11-ctu36b5xds2txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu36b5xds1txv",
      "slug": "guardian-xh636e2s11-ctu36b5xds1txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu36b5xds1jme12b2sn1txv",
      "slug": "guardian-xh636e2s11-ctu36b5xds1jme12b2sn1txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme12b2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctu36b5xds1jmet12bs2n1txv",
      "slug": "guardian-xh636e2s11-ctu36b5xds1jmet12bs2n1txv",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet12bs2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu36b5xds1txv",
      "slug": "guardian-xh624e2s11-ctu36b5xds1txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu36b5xds2jme12b2sn2txv",
      "slug": "guardian-xh624e2s11-ctu36b5xds2jme12b2sn2txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme12b2sn2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48c5cfs2jme12c2sn2",
      "slug": "guardian-xh636e2s11-ctm48c5cfs2jme12c2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48c5cfs2",
      "slug": "guardian-xh636e2s11-ctm48c5cfs2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48c5cfs2jme16c2sn2",
      "slug": "guardian-xh636e2s11-ctm48c5cfs2jme16c2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48d5cfs1jme18d2sn1",
      "slug": "guardian-xh636e2s11-ctm48d5cfs1jme18d2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48d5cfs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36c5cds1jmet16cs2n1",
      "slug": "guardian-xh636e2s11-ctm36c5cds1jmet16cs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36c5cds2",
      "slug": "guardian-xh636e2s11-ctm36c5cds2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36c5cds1jme16c2sn1",
      "slug": "guardian-xh636e2s11-ctm36c5cds1jme16c2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36c5cds1jmet12cs2n1",
      "slug": "guardian-xh636e2s11-ctm36c5cds1jmet12cs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36c5cds2jme16c2sn2",
      "slug": "guardian-xh636e2s11-ctm36c5cds2jme16c2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36c5cds2jme12c2sn2",
      "slug": "guardian-xh636e2s11-ctm36c5cds2jme12c2sn2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48c5cfs1jme12c2sn1",
      "slug": "guardian-xh636e2s11-ctm48c5cfs1jme12c2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48c5cfs1jme16c2sn1",
      "slug": "guardian-xh636e2s11-ctm48c5cfs1jme16c2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48c5cfs1jmet12cs2n1",
      "slug": "guardian-xh636e2s11-ctm48c5cfs1jmet12cs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48c5cfs1jmet16cs2n1",
      "slug": "guardian-xh636e2s11-ctm48c5cfs1jmet16cs2n1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu36b5xds2txv",
      "slug": "guardian-xh624e2s11-ctu36b5xds2txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-jhe24b5ac2ss1",
      "slug": "guardian-xh624e2s11-jhe24b5ac2ss1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-jhe24b5ac2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5chs2jme12c2sn2",
      "slug": "guardian-xh648e2s11-ctf60c5chs2jme12c2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5chs2",
      "slug": "guardian-xh648e2s11-ctf60c5chs2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5cgs1jme16c2sn1",
      "slug": "guardian-xh648e2s11-ctm60c5cgs1jme16c2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5cgs1jme12c2sn1",
      "slug": "guardian-xh648e2s11-ctm60c5cgs1jme12c2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5cgs1",
      "slug": "guardian-xh648e2s11-ctm60c5cgs1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5chs2jme18d2sn2",
      "slug": "guardian-xh648e2s11-ctf60d5chs2jme18d2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs2jme18d2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5chs2",
      "slug": "guardian-xh648e2s11-ctf60d5chs2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5chs1jmet18ds2n1",
      "slug": "guardian-xh648e2s11-ctf60d5chs1jmet18ds2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jmet18ds2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5chs1jme18d2sn1",
      "slug": "guardian-xh648e2s11-ctf60d5chs1jme18d2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5chs1",
      "slug": "guardian-xh648e2s11-ctf60d5chs1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5chs1jme16c2sn1",
      "slug": "guardian-xh648e2s11-ctm60c5chs1jme16c2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5chs1jme12c2sn1",
      "slug": "guardian-xh648e2s11-ctm60c5chs1jme12c2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5chs1",
      "slug": "guardian-xh648e2s11-ctm60c5chs1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5cgs2jme16c2sn2",
      "slug": "guardian-xh648e2s11-ctm60c5cgs2jme16c2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5cgs2jme12c2sn2",
      "slug": "guardian-xh648e2s11-ctm60c5cgs2jme12c2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5cgs2",
      "slug": "guardian-xh648e2s11-ctm60c5cgs2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5cgs1jmet16cs2n1",
      "slug": "guardian-xh648e2s11-ctm60c5cgs1jmet16cs2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5cgs1jmet12cs2n1",
      "slug": "guardian-xh648e2s11-ctm60c5cgs1jmet12cs2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5cgs1jmet18ds2n1",
      "slug": "guardian-xh648e2s11-ctm60d5cgs1jmet18ds2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1jmet18ds2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5cgs1jme18d2sn1",
      "slug": "guardian-xh648e2s11-ctm60d5cgs1jme18d2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5cgs1",
      "slug": "guardian-xh648e2s11-ctm60d5cgs1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5chs2jme16c2sn2",
      "slug": "guardian-xh648e2s11-ctm60c5chs2jme16c2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5chs2jme12c2sn2",
      "slug": "guardian-xh648e2s11-ctm60c5chs2jme12c2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5chs2",
      "slug": "guardian-xh648e2s11-ctm60c5chs2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5chs1jmet16cs2n1",
      "slug": "guardian-xh648e2s11-ctm60c5chs1jmet16cs2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60c5chs1jmet12cs2n1",
      "slug": "guardian-xh648e2s11-ctm60c5chs1jmet12cs2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctu60c5xgs1jme12c2sn1txv",
      "slug": "guardian-xh648e2s11-ctu60c5xgs1jme12c2sn1txv",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jme12c2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5chs2jme18d2sn2",
      "slug": "guardian-xh648e2s11-ctm60d5chs2jme18d2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs2jme18d2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5chs2",
      "slug": "guardian-xh648e2s11-ctm60d5chs2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5chs1jmet18ds2n1",
      "slug": "guardian-xh648e2s11-ctm60d5chs1jmet18ds2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jmet18ds2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5chs1jme18d2sn1",
      "slug": "guardian-xh648e2s11-ctm60d5chs1jme18d2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5chs1",
      "slug": "guardian-xh648e2s11-ctm60d5chs1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5cgs2jme18d2sn2",
      "slug": "guardian-xh648e2s11-ctm60d5cgs2jme18d2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs2jme18d2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctm60d5cgs2",
      "slug": "guardian-xh648e2s11-ctm60d5cgs2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36c5cds1jme12c2sn1",
      "slug": "guardian-xh636e2s11-ctm36c5cds1jme12c2sn1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36c5cds1",
      "slug": "guardian-xh636e2s11-ctm36c5cds1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48c5cfs1",
      "slug": "guardian-xh636e2s11-ctm48c5cfs1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5cgs1jme12c2sn1",
      "slug": "guardian-xh648e2s11-ctf60c5cgs1jme12c2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5cgs1jmet16cs2n1",
      "slug": "guardian-xh648e2s11-ctf60c5cgs1jmet16cs2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5cgs1jmet12cs2n1",
      "slug": "guardian-xh648e2s11-ctf60c5cgs1jmet12cs2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-jhe36b5cd2ss1",
      "slug": "guardian-xh636e2s11-jhe36b5cd2ss1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-jhe36b5cd2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-jhe36b5cd2ss2",
      "slug": "guardian-xh636e2s11-jhe36b5cd2ss2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-jhe36b5cd2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-jhe42c5cf2ss1",
      "slug": "guardian-xh636e2s11-jhe42c5cf2ss1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-jhe42c5cf2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5cgs1",
      "slug": "guardian-xh648e2s11-ctf60c5cgs1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5cgs1jme16c2sn1",
      "slug": "guardian-xh648e2s11-ctf60c5cgs1jme16c2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5chs1jmet16cs2n1",
      "slug": "guardian-xh648e2s11-ctf60c5chs1jmet16cs2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-jhe36c5cd2ss1",
      "slug": "guardian-xh636e2s11-jhe36c5cd2ss1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-jhe36c5cd2ss1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-jhe36c5cd2ss2",
      "slug": "guardian-xh636e2s11-jhe36c5cd2ss2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-jhe36c5cd2ss2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5cgs2jme12c2sn2",
      "slug": "guardian-xh648e2s11-ctf60c5cgs2jme12c2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jme12c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5cgs2",
      "slug": "guardian-xh648e2s11-ctf60c5cgs2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5cgs2jme18d2sn2",
      "slug": "guardian-xh648e2s11-ctf60d5cgs2jme18d2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs2jme18d2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5cgs2",
      "slug": "guardian-xh648e2s11-ctf60d5cgs2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5cgs1jmet18ds2n1",
      "slug": "guardian-xh648e2s11-ctf60d5cgs1jmet18ds2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1jmet18ds2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5cgs1jme18d2sn1",
      "slug": "guardian-xh648e2s11-ctf60d5cgs1jme18d2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60d5cgs1",
      "slug": "guardian-xh648e2s11-ctf60d5cgs1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5chs2jme16c2sn2",
      "slug": "guardian-xh648e2s11-ctf60c5chs2jme16c2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5cgs2jme16c2sn2",
      "slug": "guardian-xh648e2s11-ctf60c5cgs2jme16c2sn2",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5chs1",
      "slug": "guardian-xh648e2s11-ctf60c5chs1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5chs1jme12c2sn1",
      "slug": "guardian-xh648e2s11-ctf60c5chs1jme12c2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5chs1jme16c2sn1",
      "slug": "guardian-xh648e2s11-ctf60c5chs1jme16c2sn1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh648e2s11-ctf60c5chs1jmet12cs2n1",
      "slug": "guardian-xh648e2s11-ctf60c5chs1jmet12cs2n1",
      "modelId": "model-guardian-xh648e2s11",
      "outdoorUnitId": "ou-guardian-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmet12cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahc48fbcn1",
      "slug": "guardian-rhp15042b21-xahc48fbcn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahc48fbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahc48fbcn1jmet16cs2n1",
      "slug": "guardian-rhp15042b21-xahc48fbcn1jmet16cs2n1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahc48fbcn1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahc48fxxn1jmet16cs2n1txv",
      "slug": "guardian-rhp15042b21-xahc48fxxn1jmet16cs2n1txv",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahc48fxxn1jmet16cs2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15024b21-xahc36dban1",
      "slug": "guardian-rhp15024b21-xahc36dban1",
      "modelId": "model-guardian-rhp15024b21",
      "outdoorUnitId": "ou-guardian-rhp15024b21",
      "indoorUnitId": "iu-xahc36dban1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafb36dban1",
      "slug": "guardian-rhp15030b21-xafb36dban1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafb36dban1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafb36dban1jme12b2sn1",
      "slug": "guardian-rhp15030b21-xafb36dban1jme12b2sn1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafb36dban1jme12b2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafc36dban1",
      "slug": "guardian-rhp15030b21-xafc36dban1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafc36dban1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafc36dban1jme12c2sn1",
      "slug": "guardian-rhp15030b21-xafc36dban1jme12c2sn1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafc36dban1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafc36dban1jme16c2sn1",
      "slug": "guardian-rhp15030b21-xafc36dban1jme16c2sn1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafc36dban1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafc48fban1",
      "slug": "guardian-rhp15030b21-xafc48fban1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafc48fban1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafc48fban1jme12c2sn1",
      "slug": "guardian-rhp15030b21-xafc48fban1jme12c2sn1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafc48fban1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafc48fban1jme16c2sn1",
      "slug": "guardian-rhp15030b21-xafc48fban1jme16c2sn1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafc48fban1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15030b21-xafd48fban1jme18d2sn1",
      "slug": "guardian-rhp15030b21-xafd48fban1jme18d2sn1",
      "modelId": "model-guardian-rhp15030b21",
      "outdoorUnitId": "ou-guardian-rhp15030b21",
      "indoorUnitId": "iu-xafd48fban1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15036b21-xafc48fbcn1jme12c2sn1",
      "slug": "guardian-rhp15036b21-xafc48fbcn1jme12c2sn1",
      "modelId": "model-guardian-rhp15036b21",
      "outdoorUnitId": "ou-guardian-rhp15036b21",
      "indoorUnitId": "iu-xafc48fbcn1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15036b21-xafd48fbcn1jme18d2sn1",
      "slug": "guardian-rhp15036b21-xafd48fbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15036b21",
      "outdoorUnitId": "ou-guardian-rhp15036b21",
      "indoorUnitId": "iu-xafd48fbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15036b21-xahc36dbcn1jme12c2sn1",
      "slug": "guardian-rhp15036b21-xahc36dbcn1jme12c2sn1",
      "modelId": "model-guardian-rhp15036b21",
      "outdoorUnitId": "ou-guardian-rhp15036b21",
      "indoorUnitId": "iu-xahc36dbcn1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15036b21-xahc36dbcn1jme16c2sn1",
      "slug": "guardian-rhp15036b21-xahc36dbcn1jme16c2sn1",
      "modelId": "model-guardian-rhp15036b21",
      "outdoorUnitId": "ou-guardian-rhp15036b21",
      "indoorUnitId": "iu-xahc36dbcn1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15036b21-xahc48fbcn1",
      "slug": "guardian-rhp15036b21-xahc48fbcn1",
      "modelId": "model-guardian-rhp15036b21",
      "outdoorUnitId": "ou-guardian-rhp15036b21",
      "indoorUnitId": "iu-xahc48fbcn1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15036b21-xahc48fbcn1jme16c2sn1",
      "slug": "guardian-rhp15036b21-xahc48fbcn1jme16c2sn1",
      "modelId": "model-guardian-rhp15036b21",
      "outdoorUnitId": "ou-guardian-rhp15036b21",
      "indoorUnitId": "iu-xahc48fbcn1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15036b21-xahd48fbcn1jme18d2sn1",
      "slug": "guardian-rhp15036b21-xahd48fbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15036b21",
      "outdoorUnitId": "ou-guardian-rhp15036b21",
      "indoorUnitId": "iu-xahd48fbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafc48fbcn1",
      "slug": "guardian-rhp15042b21-xafc48fbcn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafc48fbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafc48fbcn1jme12c2sn1",
      "slug": "guardian-rhp15042b21-xafc48fbcn1jme12c2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafc48fbcn1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafc48fbcn1jme16c2sn1",
      "slug": "guardian-rhp15042b21-xafc48fbcn1jme16c2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafc48fbcn1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafc48fxxn1txv",
      "slug": "guardian-rhp15042b21-xafc48fxxn1txv",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafc48fxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafc60gbcn1jme12c2sn1",
      "slug": "guardian-rhp15042b21-xafc60gbcn1jme12c2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafc60gbcn1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafc60gbcn1jme16c2sn1",
      "slug": "guardian-rhp15042b21-xafc60gbcn1jme16c2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafc60gbcn1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafd48fbcn1",
      "slug": "guardian-rhp15042b21-xafd48fbcn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafd48fbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafd48fbcn1jme18d2sn1",
      "slug": "guardian-rhp15042b21-xafd48fbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafd48fbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xafd60gbcn1jme18d2sn1",
      "slug": "guardian-rhp15042b21-xafd60gbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xafd60gbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahc48fbcn1jme12c2sn1",
      "slug": "guardian-rhp15042b21-xahc48fbcn1jme12c2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahc48fbcn1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahc48fbcn1jme16c2sn1",
      "slug": "guardian-rhp15042b21-xahc48fbcn1jme16c2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahc48fbcn1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahc48fxxn1txv",
      "slug": "guardian-rhp15042b21-xahc48fxxn1txv",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahc48fxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15024b21-xafb30cban1",
      "slug": "guardian-rhp15024b21-xafb30cban1",
      "modelId": "model-guardian-rhp15024b21",
      "outdoorUnitId": "ou-guardian-rhp15024b21",
      "indoorUnitId": "iu-xafb30cban1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48d5cfs1",
      "slug": "guardian-xh636e2s11-ctf48d5cfs1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48d5cfs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctf48d5cfs2",
      "slug": "guardian-xh636e2s11-ctf48d5cfs2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctf48d5cfs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36b5cds1",
      "slug": "guardian-xh636e2s11-ctm36b5cds1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36b5cds1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm36b5cds2",
      "slug": "guardian-xh636e2s11-ctm36b5cds2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm36b5cds2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48d5cfs1",
      "slug": "guardian-xh636e2s11-ctm48d5cfs1",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48d5cfs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh636e2s11-ctm48d5cfs2",
      "slug": "guardian-xh636e2s11-ctm48d5cfs2",
      "modelId": "model-guardian-xh636e2s11",
      "outdoorUnitId": "ou-guardian-xh636e2s11",
      "indoorUnitId": "iu-ctm48d5cfs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu36b5xds1jmet08bs2n1txv",
      "slug": "guardian-xh624e2s11-ctu36b5xds1jmet08bs2n1txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet08bs2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctu36b5xds2jme08b2sn2txv",
      "slug": "guardian-xh624e2s11-ctu36b5xds2jme08b2sn2txv",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme08b2sn2txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xahc60hbcn1",
      "slug": "guardian-rhp15060b21-xahc60hbcn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xahc60hbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xahd60hbcn1",
      "slug": "guardian-rhp15060b21-xahd60hbcn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xahd60hbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xahd60jbcn1",
      "slug": "guardian-rhp15060b21-xahd60jbcn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xahd60jbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xahd60jbcn1jme18d2sn1",
      "slug": "guardian-rhp15060b21-xahd60jbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xahd60jbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf36b5ads1jmet08bs2n1",
      "slug": "guardian-xh624e2s11-ctf36b5ads1jmet08bs2n1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jmet08bs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctf36b5ads2jme08b2sn2",
      "slug": "guardian-xh624e2s11-ctf36b5ads2jme08b2sn2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jme08b2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm36b5ads1jmet08bs2n1",
      "slug": "guardian-xh624e2s11-ctm36b5ads1jmet08bs2n1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jmet08bs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm36b5ads1jmet12bs2n1",
      "slug": "guardian-xh624e2s11-ctm36b5ads1jmet12bs2n1",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jmet12bs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm36b5ads2jme08b2sn2",
      "slug": "guardian-xh624e2s11-ctm36b5ads2jme08b2sn2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jme08b2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh624e2s11-ctm36b5ads2jme12b2sn2",
      "slug": "guardian-xh624e2s11-ctm36b5ads2jme12b2sn2",
      "modelId": "model-guardian-xh624e2s11",
      "outdoorUnitId": "ou-guardian-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jme12b2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60c5chs1",
      "slug": "guardian-xh660e2s11-ctf60c5chs1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60c5chs1jme16c2sn1",
      "slug": "guardian-xh660e2s11-ctf60c5chs1jme16c2sn1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60c5chs1jmet16cs2n1",
      "slug": "guardian-xh660e2s11-ctf60c5chs1jmet16cs2n1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60c5chs2",
      "slug": "guardian-xh660e2s11-ctf60c5chs2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60c5chs2jme16c2sn2",
      "slug": "guardian-xh660e2s11-ctf60c5chs2jme16c2sn2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5chs1",
      "slug": "guardian-xh660e2s11-ctf60d5chs1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5chs1jme18d2sn1",
      "slug": "guardian-xh660e2s11-ctf60d5chs1jme18d2sn1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5chs1jmet18ds2n1",
      "slug": "guardian-xh660e2s11-ctf60d5chs1jmet18ds2n1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jmet18ds2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5chs2",
      "slug": "guardian-xh660e2s11-ctf60d5chs2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctf60d5chs2jme18d2sn2",
      "slug": "guardian-xh660e2s11-ctf60d5chs2jme18d2sn2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs2jme18d2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahc60gbcn1jme12c2sn1",
      "slug": "guardian-rhp15042b21-xahc60gbcn1jme12c2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahc60gbcn1jme12c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahc60gbcn1jme16c2sn1",
      "slug": "guardian-rhp15042b21-xahc60gbcn1jme16c2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahc60gbcn1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahd48fbcn1",
      "slug": "guardian-rhp15042b21-xahd48fbcn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahd48fbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahd48fbcn1jme18d2sn1",
      "slug": "guardian-rhp15042b21-xahd48fbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahd48fbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahd48fxxn1txv",
      "slug": "guardian-rhp15042b21-xahd48fxxn1txv",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahd48fxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xahd60gbcn1jme18d2sn1",
      "slug": "guardian-rhp15042b21-xahd60gbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xahd60gbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15042b21-xauc48fxxn1txv",
      "slug": "guardian-rhp15042b21-xauc48fxxn1txv",
      "modelId": "model-guardian-rhp15042b21",
      "outdoorUnitId": "ou-guardian-rhp15042b21",
      "indoorUnitId": "iu-xauc48fxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xafc60hbcn1",
      "slug": "guardian-rhp15048b21-xafc60hbcn1",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xafc60hbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xafc60hxxn1txv",
      "slug": "guardian-rhp15048b21-xafc60hxxn1txv",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xafc60hxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xafd60hbcn1",
      "slug": "guardian-rhp15048b21-xafd60hbcn1",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xafd60hbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xafd60hxxn1txv",
      "slug": "guardian-rhp15048b21-xafd60hxxn1txv",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xafd60hxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xahc60gbcn1",
      "slug": "guardian-rhp15048b21-xahc60gbcn1",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xahc60gbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xahc60gxxn1txv",
      "slug": "guardian-rhp15048b21-xahc60gxxn1txv",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xahc60gxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xahd60gbcn1",
      "slug": "guardian-rhp15048b21-xahd60gbcn1",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xahd60gbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xahd60gxxn1txv",
      "slug": "guardian-rhp15048b21-xahd60gxxn1txv",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xahd60gxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xahd60hbcn1",
      "slug": "guardian-rhp15048b21-xahd60hbcn1",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xahd60hbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xahd60hxxn1txv",
      "slug": "guardian-rhp15048b21-xahd60hxxn1txv",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xahd60hxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15048b21-xaud60hxxn1txv",
      "slug": "guardian-rhp15048b21-xaud60hxxn1txv",
      "modelId": "model-guardian-rhp15048b21",
      "outdoorUnitId": "ou-guardian-rhp15048b21",
      "indoorUnitId": "iu-xaud60hxxn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-jhetc60hbcs2n1",
      "slug": "guardian-rhp15060b21-jhetc60hbcs2n1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-jhetc60hbcs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-jhvtc60hbcc2n1",
      "slug": "guardian-rhp15060b21-jhvtc60hbcc2n1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-jhvtc60hbcc2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xafc60hbcn1",
      "slug": "guardian-rhp15060b21-xafc60hbcn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xafc60hbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xafc60hbcn1jme16c2sn1",
      "slug": "guardian-rhp15060b21-xafc60hbcn1jme16c2sn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xafc60hbcn1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xafd60hbcn1",
      "slug": "guardian-rhp15060b21-xafd60hbcn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xafd60hbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xafd60hbcn1jme18d2sn1",
      "slug": "guardian-rhp15060b21-xafd60hbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xafd60hbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xafd60jbcn1",
      "slug": "guardian-rhp15060b21-xafd60jbcn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xafd60jbcn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-rhp15060b21-xafd60jbcn1jme18d2sn1",
      "slug": "guardian-rhp15060b21-xafd60jbcn1jme18d2sn1",
      "modelId": "model-guardian-rhp15060b21",
      "outdoorUnitId": "ou-guardian-rhp15060b21",
      "indoorUnitId": "iu-xafd60jbcn1jme18d2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60c5chs1",
      "slug": "guardian-xh660e2s11-ctm60c5chs1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60c5chs1jme16c2sn1",
      "slug": "guardian-xh660e2s11-ctm60c5chs1jme16c2sn1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jme16c2sn1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60c5chs1jmet16cs2n1",
      "slug": "guardian-xh660e2s11-ctm60c5chs1jmet16cs2n1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmet16cs2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60c5chs2",
      "slug": "guardian-xh660e2s11-ctm60c5chs2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60c5chs2jme16c2sn2",
      "slug": "guardian-xh660e2s11-ctm60c5chs2jme16c2sn2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jme16c2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5chs1",
      "slug": "guardian-xh660e2s11-ctm60d5chs1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5chs1jmet18ds2n1",
      "slug": "guardian-xh660e2s11-ctm60d5chs1jmet18ds2n1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jmet18ds2n1",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5chs2",
      "slug": "guardian-xh660e2s11-ctm60d5chs2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5chs2jme18d2sn2",
      "slug": "guardian-xh660e2s11-ctm60d5chs2jme18d2sn2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs2jme18d2sn2",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5cjs1jmet18ds2n1",
      "slug": "guardian-xh660e2s11-ctm60d5cjs1jmet18ds2n1",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1jmet18ds2n1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctm60d5cjs2jme18d2sn2",
      "slug": "guardian-xh660e2s11-ctm60d5cjs2jme18d2sn2",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2jme18d2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctu60d5xhs1jme18d2sn1txv",
      "slug": "guardian-xh660e2s11-ctu60d5xhs1jme18d2sn1txv",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jme18d2sn1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "slug": "guardian-xh660e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jmet18ds2n1txv",
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
          "sourceId": "src-guardian-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-guardian-xh660e2s11-ctu60d5xhs1txv",
      "slug": "guardian-xh660e2s11-ctu60d5xhs1txv",
      "modelId": "model-guardian-xh660e2s11",
      "outdoorUnitId": "ou-guardian-xh660e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1txv",
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
          "sourceId": "src-guardian-epa",
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
