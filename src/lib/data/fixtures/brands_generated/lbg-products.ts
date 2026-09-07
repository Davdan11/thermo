import type { BrandDataset } from "../../types";

export const brand_lbg_productsDataset: BrandDataset = {
  "brand": {
    "id": "brand-lbg-products",
    "slug": "lbg-products",
    "name": "LBG Products",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour LBG Products",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-lbg-products-epa",
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
      "id": "series-lbg-products-lbh-series",
      "slug": "lbg-products-lbh-series",
      "name": "LBH series",
      "brandId": "brand-lbg-products",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LBH series de LBG Products",
      "imageUrl": "/images/series/lbg-products-lbg-products-lbh-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-lbg-products-lmhb18do",
      "slug": "lbg-products-lmhb18do",
      "name": "LMHB18DO",
      "brandId": "brand-lbg-products",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série LMHB18DO de LBG Products",
      "imageUrl": "/images/series/lbg-products-lbg-products-lmhb18do.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-lbg-products-lmh-series",
      "slug": "lbg-products-lmh-series",
      "name": "LMH Series",
      "brandId": "brand-lbg-products",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série LMH Series de LBG Products",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-lbg-products-luh-series",
      "slug": "lbg-products-luh-series",
      "name": "LUH series",
      "brandId": "brand-lbg-products",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LUH series de LBG Products",
      "imageUrl": "/images/series/lbg-products-lbg-products-luh-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-lbg-products-lcuh-series",
      "slug": "lbg-products-lcuh-series",
      "name": "LCUH series",
      "brandId": "brand-lbg-products",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LCUH series de LBG Products",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-lbg-products-lchb-series",
      "slug": "lbg-products-lchb-series",
      "name": "LCHB series",
      "brandId": "brand-lbg-products",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LCHB series de LBG Products",
      "imageUrl": "/images/series/lbg-products-lbg-products-lchb-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-lbg-products-lbhb09dywo",
      "slug": "lbg-products-lbhb09dywo",
      "name": "LBG Products LBHB09DYWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB09DYWO",
      "normalizedModelNumber": "lbhb09dywo",
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
      "id": "model-lbg-products-lbhb12dywo",
      "slug": "lbg-products-lbhb12dywo",
      "name": "LBG Products LBHB12DYWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB12DYWO",
      "normalizedModelNumber": "lbhb12dywo",
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
      "id": "model-lbg-products-lbhb09dvwo",
      "slug": "lbg-products-lbhb09dvwo",
      "name": "LBG Products LBHB09DVWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB09DVWO",
      "normalizedModelNumber": "lbhb09dvwo",
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
      "id": "model-lbg-products-lbhb09duwo",
      "slug": "lbg-products-lbhb09duwo",
      "name": "LBG Products LBHB09DUWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB09DUWO",
      "normalizedModelNumber": "lbhb09duwo",
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
      "id": "model-lbg-products-lbhb18duwo",
      "slug": "lbg-products-lbhb18duwo",
      "name": "LBG Products LBHB18DUWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB18DUWO",
      "normalizedModelNumber": "lbhb18duwo",
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
      "id": "model-lbg-products-lbhb12dvwo",
      "slug": "lbg-products-lbhb12dvwo",
      "name": "LBG Products LBHB12DVWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB12DVWO",
      "normalizedModelNumber": "lbhb12dvwo",
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
      "id": "model-lbg-products-lbhb06dvwo",
      "slug": "lbg-products-lbhb06dvwo",
      "name": "LBG Products LBHB06DVWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB06DVWO",
      "normalizedModelNumber": "lbhb06dvwo",
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
      "id": "model-lbg-products-lmhb27do",
      "slug": "lbg-products-lmhb27do",
      "name": "LBG Products LMHB27DO",
      "seriesId": "series-lbg-products-lmhb18do",
      "brandId": "brand-lbg-products",
      "modelNumber": "LMHB27DO",
      "normalizedModelNumber": "lmhb27do",
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
      "id": "model-lbg-products-lbhb12duwo",
      "slug": "lbg-products-lbhb12duwo",
      "name": "LBG Products LBHB12DUWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB12DUWO",
      "normalizedModelNumber": "lbhb12duwo",
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
      "id": "model-lbg-products-lmuhb27do",
      "slug": "lbg-products-lmuhb27do",
      "name": "LBG Products LMUHB27DO",
      "seriesId": "series-lbg-products-lmhb18do",
      "brandId": "brand-lbg-products",
      "modelNumber": "LMUHB27DO",
      "normalizedModelNumber": "lmuhb27do",
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
      "id": "model-lbg-products-lbhb24dvwo",
      "slug": "lbg-products-lbhb24dvwo",
      "name": "LBG Products LBHB24DVWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB24DVWO",
      "normalizedModelNumber": "lbhb24dvwo",
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
      "id": "model-lbg-products-lbhb18dvwo",
      "slug": "lbg-products-lbhb18dvwo",
      "name": "LBG Products LBHB18DVWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB18DVWO",
      "normalizedModelNumber": "lbhb18dvwo",
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
      "id": "model-lbg-products-lbh09dto",
      "slug": "lbg-products-lbh09dto",
      "name": "LBG Products LBH09DTO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBH09DTO",
      "normalizedModelNumber": "lbh09dto",
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
      "id": "model-lbg-products-lbhb18dywo",
      "slug": "lbg-products-lbhb18dywo",
      "name": "LBG Products LBHB18DYWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB18DYWO",
      "normalizedModelNumber": "lbhb18dywo",
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
      "id": "model-lbg-products-lbh09ato",
      "slug": "lbg-products-lbh09ato",
      "name": "LBG Products LBH09ATO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBH09ATO",
      "normalizedModelNumber": "lbh09ato",
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
      "id": "model-lbg-products-lbhb24duwo",
      "slug": "lbg-products-lbhb24duwo",
      "name": "LBG Products LBHB24DUWO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB24DUWO",
      "normalizedModelNumber": "lbhb24duwo",
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
      "id": "model-lbg-products-lmuhb48do",
      "slug": "lbg-products-lmuhb48do",
      "name": "LBG Products LMUHB48DO",
      "seriesId": "series-lbg-products-lmhb18do",
      "brandId": "brand-lbg-products",
      "modelNumber": "LMUHB48DO",
      "normalizedModelNumber": "lmuhb48do",
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
      "id": "model-lbg-products-lmhb48do",
      "slug": "lbg-products-lmhb48do",
      "name": "LBG Products LMHB48DO",
      "seriesId": "series-lbg-products-lmh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LMHB48DO",
      "normalizedModelNumber": "lmhb48do",
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
      "id": "model-lbg-products-lmhb18do",
      "slug": "lbg-products-lmhb18do",
      "name": "LBG Products LMHB18DO",
      "seriesId": "series-lbg-products-lmhb18do",
      "brandId": "brand-lbg-products",
      "modelNumber": "LMHB18DO",
      "normalizedModelNumber": "lmhb18do",
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
      "id": "model-lbg-products-lmuhb18do",
      "slug": "lbg-products-lmuhb18do",
      "name": "LBG Products LMUHB18DO",
      "seriesId": "series-lbg-products-lmhb18do",
      "brandId": "brand-lbg-products",
      "modelNumber": "LMUHB18DO",
      "normalizedModelNumber": "lmuhb18do",
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
      "id": "model-lbg-products-lmhb36do",
      "slug": "lbg-products-lmhb36do",
      "name": "LBG Products LMHB36DO",
      "seriesId": "series-lbg-products-lmh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LMHB36DO",
      "normalizedModelNumber": "lmhb36do",
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
      "id": "model-lbg-products-lmuhb36do",
      "slug": "lbg-products-lmuhb36do",
      "name": "LBG Products LMUHB36DO",
      "seriesId": "series-lbg-products-lmhb18do",
      "brandId": "brand-lbg-products",
      "modelNumber": "LMUHB36DO",
      "normalizedModelNumber": "lmuhb36do",
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
      "id": "model-lbg-products-lbh18dto",
      "slug": "lbg-products-lbh18dto",
      "name": "LBG Products LBH18DTO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBH18DTO",
      "normalizedModelNumber": "lbh18dto",
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
      "id": "model-lbg-products-luuhb36do",
      "slug": "lbg-products-luuhb36do",
      "name": "LBG Products LUUHB36DO",
      "seriesId": "series-lbg-products-luh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LUUHB36DO",
      "normalizedModelNumber": "luuhb36do",
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
      "id": "model-lbg-products-luhb48do",
      "slug": "lbg-products-luhb48do",
      "name": "LBG Products LUHB48DO",
      "seriesId": "series-lbg-products-luh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LUHB48DO",
      "normalizedModelNumber": "luhb48do",
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
      "id": "model-lbg-products-lbhb09dro",
      "slug": "lbg-products-lbhb09dro",
      "name": "LBG Products LBHB09DRO",
      "seriesId": "series-lbg-products-lbh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LBHB09DRO",
      "normalizedModelNumber": "lbhb09dro",
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
      "id": "model-lbg-products-lcuhb18do",
      "slug": "lbg-products-lcuhb18do",
      "name": "LBG Products LCUHB18DO",
      "seriesId": "series-lbg-products-lcuh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LCUHB18DO",
      "normalizedModelNumber": "lcuhb18do",
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
      "id": "model-lbg-products-lcuhb24do",
      "slug": "lbg-products-lcuhb24do",
      "name": "LBG Products LCUHB24DO",
      "seriesId": "series-lbg-products-lcuh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LCUHB24DO",
      "normalizedModelNumber": "lcuhb24do",
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
      "id": "model-lbg-products-lchb24do",
      "slug": "lbg-products-lchb24do",
      "name": "LBG Products LCHB24DO",
      "seriesId": "series-lbg-products-lchb-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LCHB24DO",
      "normalizedModelNumber": "lchb24do",
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
      "id": "model-lbg-products-luuhb48do",
      "slug": "lbg-products-luuhb48do",
      "name": "LBG Products LUUHB48DO",
      "seriesId": "series-lbg-products-luh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LUUHB48DO",
      "normalizedModelNumber": "luuhb48do",
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
      "id": "model-lbg-products-lcuhb30do",
      "slug": "lbg-products-lcuhb30do",
      "name": "LBG Products LCUHB30DO",
      "seriesId": "series-lbg-products-lcuh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LCUHB30DO",
      "normalizedModelNumber": "lcuhb30do",
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
      "id": "model-lbg-products-lcuhb36do",
      "slug": "lbg-products-lcuhb36do",
      "name": "LBG Products LCUHB36DO",
      "seriesId": "series-lbg-products-lcuh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LCUHB36DO",
      "normalizedModelNumber": "lcuhb36do",
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
      "id": "model-lbg-products-lcuhb48do",
      "slug": "lbg-products-lcuhb48do",
      "name": "LBG Products LCUHB48DO",
      "seriesId": "series-lbg-products-lcuh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LCUHB48DO",
      "normalizedModelNumber": "lcuhb48do",
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
      "id": "model-lbg-products-lcuhb60do",
      "slug": "lbg-products-lcuhb60do",
      "name": "LBG Products LCUHB60DO",
      "seriesId": "series-lbg-products-lcuh-series",
      "brandId": "brand-lbg-products",
      "modelNumber": "LCUHB60DO",
      "normalizedModelNumber": "lcuhb60do",
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
      "id": "ou-lbg-products-lbhb09dywo",
      "modelNumber": "LBHB09DYWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb12dywo",
      "modelNumber": "LBHB12DYWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb09dvwo",
      "modelNumber": "LBHB09DVWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb09duwo",
      "modelNumber": "LBHB09DUWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb18duwo",
      "modelNumber": "LBHB18DUWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb12dvwo",
      "modelNumber": "LBHB12DVWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb06dvwo",
      "modelNumber": "LBHB06DVWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lmhb27do",
      "modelNumber": "LMHB27DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb12duwo",
      "modelNumber": "LBHB12DUWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lmuhb27do",
      "modelNumber": "LMUHB27DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb24dvwo",
      "modelNumber": "LBHB24DVWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb18dvwo",
      "modelNumber": "LBHB18DVWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbh09dto",
      "modelNumber": "LBH09DTO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb18dywo",
      "modelNumber": "LBHB18DYWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbh09ato",
      "modelNumber": "LBH09ATO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb24duwo",
      "modelNumber": "LBHB24DUWO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lmuhb48do",
      "modelNumber": "LMUHB48DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lmhb48do",
      "modelNumber": "LMHB48DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lmhb18do",
      "modelNumber": "LMHB18DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lmuhb18do",
      "modelNumber": "LMUHB18DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lmhb36do",
      "modelNumber": "LMHB36DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lmuhb36do",
      "modelNumber": "LMUHB36DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbh18dto",
      "modelNumber": "LBH18DTO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-luuhb36do",
      "modelNumber": "LUUHB36DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-luhb48do",
      "modelNumber": "LUHB48DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lbhb09dro",
      "modelNumber": "LBHB09DRO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lcuhb18do",
      "modelNumber": "LCUHB18DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lcuhb24do",
      "modelNumber": "LCUHB24DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lchb24do",
      "modelNumber": "LCHB24DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-luuhb48do",
      "modelNumber": "LUUHB48DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lcuhb30do",
      "modelNumber": "LCUHB30DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lcuhb36do",
      "modelNumber": "LCUHB36DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lcuhb48do",
      "modelNumber": "LCUHB48DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-lbg-products-lcuhb60do",
      "modelNumber": "LCUHB60DO",
      "brandId": "brand-lbg-products",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-lbhb09dywi",
      "modelNumber": "LBHB09DYWI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbhb12dywi",
      "modelNumber": "LBHB12DYWI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbhb09duwi",
      "modelNumber": "LBHB09DUWI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbhb18duwi",
      "modelNumber": "LBHB18DUWI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb12dzgi",
      "modelNumber": "LMHB12DZGI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbhb06dvwi",
      "modelNumber": "LBHB06DVWI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47084",
      "modelNumber": "IU-47084",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbhb12duwi",
      "modelNumber": "LBHB12DUWI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb18dzdi",
      "modelNumber": "LMHB18DZDI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb12dsi",
      "modelNumber": "LMHB12DSI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47088",
      "modelNumber": "IU-47088",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbhb24duwi",
      "modelNumber": "LBHB24DUWI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbh09dti",
      "modelNumber": "LBH09DTI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbhb18dywi",
      "modelNumber": "LBHB18DYWI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbh09ati",
      "modelNumber": "LBH09ATI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb24dsi",
      "modelNumber": "LMHB24DSI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47090",
      "modelNumber": "IU-47090",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb24dzdi",
      "modelNumber": "LMHB24DZDI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47086",
      "modelNumber": "IU-47086",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47083",
      "modelNumber": "IU-47083",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb18dsi",
      "modelNumber": "LMHB18DSI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb09dsi",
      "modelNumber": "LMHB09DSI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47087",
      "modelNumber": "IU-47087",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb09dfi",
      "modelNumber": "LMHB09DFI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb18dfi",
      "modelNumber": "LMHB18DFI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47085",
      "modelNumber": "IU-47085",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47089",
      "modelNumber": "IU-47089",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbh18dti",
      "modelNumber": "LBH18DTI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb12dfi",
      "modelNumber": "LMHB12DFI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-luhb36dsi",
      "modelNumber": "LUHB36DSI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lmhb24dfi",
      "modelNumber": "LMHB24DFI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-luhb48dzdi",
      "modelNumber": "LUHB48DZDI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lbhb09dri",
      "modelNumber": "LBHB09DRI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lchb18dhni",
      "modelNumber": "LCHB18DHNI",
      "brandId": "brand-lbg-products",
      "type": "central-ducted"
    },
    {
      "id": "iu-luhb36dzdi",
      "modelNumber": "LUHB36DZDI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lchb24dhni",
      "modelNumber": "LCHB24DHNI",
      "brandId": "brand-lbg-products",
      "type": "central-ducted"
    },
    {
      "id": "iu-luhb48dsi",
      "modelNumber": "LUHB48DSI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lchb24da",
      "modelNumber": "LCHB24DA",
      "brandId": "brand-lbg-products",
      "type": "central-ducted"
    },
    {
      "id": "iu-luhb36dfi",
      "modelNumber": "LUHB36DFI",
      "brandId": "brand-lbg-products",
      "type": "wall-single"
    },
    {
      "id": "iu-lchb30dhni",
      "modelNumber": "LCHB30DHNI",
      "brandId": "brand-lbg-products",
      "type": "central-ducted"
    },
    {
      "id": "iu-lchb36dhni",
      "modelNumber": "LCHB36DHNI",
      "brandId": "brand-lbg-products",
      "type": "central-ducted"
    },
    {
      "id": "iu-lchb48dhni",
      "modelNumber": "LCHB48DHNI",
      "brandId": "brand-lbg-products",
      "type": "central-ducted"
    },
    {
      "id": "iu-lchb36da",
      "modelNumber": "LCHB36DA",
      "brandId": "brand-lbg-products",
      "type": "central-ducted"
    },
    {
      "id": "iu-lchb60dhni",
      "modelNumber": "LCHB60DHNI",
      "brandId": "brand-lbg-products",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-lbg-products-lbhb09dywo-lbhb09dywi",
      "slug": "lbg-products-lbhb09dywo-lbhb09dywi",
      "modelId": "model-lbg-products-lbhb09dywo",
      "outdoorUnitId": "ou-lbg-products-lbhb09dywo",
      "indoorUnitId": "iu-lbhb09dywi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.0,
      "hspf2": 14.0,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12dywo-lbhb12dywi",
      "slug": "lbg-products-lbhb12dywo-lbhb12dywi",
      "modelId": "model-lbg-products-lbhb12dywo",
      "outdoorUnitId": "ou-lbg-products-lbhb12dywo",
      "indoorUnitId": "iu-lbhb12dywi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 14.5,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb09dvwo-lbhb09duwi",
      "slug": "lbg-products-lbhb09dvwo-lbhb09duwi",
      "modelId": "model-lbg-products-lbhb09dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb09dvwo",
      "indoorUnitId": "iu-lbhb09duwi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb09duwo-lbhb09duwi",
      "slug": "lbg-products-lbhb09duwo-lbhb09duwi",
      "modelId": "model-lbg-products-lbhb09duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb09duwo",
      "indoorUnitId": "iu-lbhb09duwi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18duwo-lbhb18duwi",
      "slug": "lbg-products-lbhb18duwo-lbhb18duwi",
      "modelId": "model-lbg-products-lbhb18duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb18duwo",
      "indoorUnitId": "iu-lbhb18duwi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12dvwo-lmhb12dzgi",
      "slug": "lbg-products-lbhb12dvwo-lmhb12dzgi",
      "modelId": "model-lbg-products-lbhb12dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb12dvwo",
      "indoorUnitId": "iu-lmhb12dzgi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb06dvwo-lbhb06dvwi",
      "slug": "lbg-products-lbhb06dvwo-lbhb06dvwi",
      "modelId": "model-lbg-products-lbhb06dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb06dvwo",
      "indoorUnitId": "iu-lbhb06dvwi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lmhb27do-iu-47084",
      "slug": "lbg-products-lmhb27do-iu-47084",
      "modelId": "model-lbg-products-lmhb27do",
      "outdoorUnitId": "ou-lbg-products-lmhb27do",
      "indoorUnitId": "iu-iu-47084",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12dvwo-lbhb12duwi",
      "slug": "lbg-products-lbhb12dvwo-lbhb12duwi",
      "modelId": "model-lbg-products-lbhb12dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb12dvwo",
      "indoorUnitId": "iu-lbhb12duwi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12duwo-lbhb12duwi",
      "slug": "lbg-products-lbhb12duwo-lbhb12duwi",
      "modelId": "model-lbg-products-lbhb12duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb12duwo",
      "indoorUnitId": "iu-lbhb12duwi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18duwo-lmhb18dzdi",
      "slug": "lbg-products-lbhb18duwo-lmhb18dzdi",
      "modelId": "model-lbg-products-lbhb18duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb18duwo",
      "indoorUnitId": "iu-lmhb18dzdi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12duwo-lmhb12dsi",
      "slug": "lbg-products-lbhb12duwo-lmhb12dsi",
      "modelId": "model-lbg-products-lbhb12duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb12duwo",
      "indoorUnitId": "iu-lmhb12dsi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12duwo-lmhb12dzgi",
      "slug": "lbg-products-lbhb12duwo-lmhb12dzgi",
      "modelId": "model-lbg-products-lbhb12duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb12duwo",
      "indoorUnitId": "iu-lmhb12dzgi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lmuhb27do-iu-47088",
      "slug": "lbg-products-lmuhb27do-iu-47088",
      "modelId": "model-lbg-products-lmuhb27do",
      "outdoorUnitId": "ou-lbg-products-lmuhb27do",
      "indoorUnitId": "iu-iu-47088",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb24dvwo-lbhb24duwi",
      "slug": "lbg-products-lbhb24dvwo-lbhb24duwi",
      "modelId": "model-lbg-products-lbhb24dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb24dvwo",
      "indoorUnitId": "iu-lbhb24duwi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12dvwo-lmhb12dsi",
      "slug": "lbg-products-lbhb12dvwo-lmhb12dsi",
      "modelId": "model-lbg-products-lbhb12dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb12dvwo",
      "indoorUnitId": "iu-lmhb12dsi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18dvwo-lbhb18duwi",
      "slug": "lbg-products-lbhb18dvwo-lbhb18duwi",
      "modelId": "model-lbg-products-lbhb18dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb18dvwo",
      "indoorUnitId": "iu-lbhb18duwi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbh09dto-lbh09dti",
      "slug": "lbg-products-lbh09dto-lbh09dti",
      "modelId": "model-lbg-products-lbh09dto",
      "outdoorUnitId": "ou-lbg-products-lbh09dto",
      "indoorUnitId": "iu-lbh09dti",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18dywo-lbhb18dywi",
      "slug": "lbg-products-lbhb18dywo-lbhb18dywi",
      "modelId": "model-lbg-products-lbhb18dywo",
      "outdoorUnitId": "ou-lbg-products-lbhb18dywo",
      "indoorUnitId": "iu-lbhb18dywi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbh09ato-lbh09ati",
      "slug": "lbg-products-lbh09ato-lbh09ati",
      "modelId": "model-lbg-products-lbh09ato",
      "outdoorUnitId": "ou-lbg-products-lbh09ato",
      "indoorUnitId": "iu-lbh09ati",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb24duwo-lmhb24dsi",
      "slug": "lbg-products-lbhb24duwo-lmhb24dsi",
      "modelId": "model-lbg-products-lbhb24duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb24duwo",
      "indoorUnitId": "iu-lmhb24dsi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lmuhb48do-iu-47090",
      "slug": "lbg-products-lmuhb48do-iu-47090",
      "modelId": "model-lbg-products-lmuhb48do",
      "outdoorUnitId": "ou-lbg-products-lmuhb48do",
      "indoorUnitId": "iu-iu-47090",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb24duwo-lmhb24dzdi",
      "slug": "lbg-products-lbhb24duwo-lmhb24dzdi",
      "modelId": "model-lbg-products-lbhb24duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb24duwo",
      "indoorUnitId": "iu-lmhb24dzdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lmhb48do-iu-47086",
      "slug": "lbg-products-lmhb48do-iu-47086",
      "modelId": "model-lbg-products-lmhb48do",
      "outdoorUnitId": "ou-lbg-products-lmhb48do",
      "indoorUnitId": "iu-iu-47086",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lmhb18do-iu-47083",
      "slug": "lbg-products-lmhb18do-iu-47083",
      "modelId": "model-lbg-products-lmhb18do",
      "outdoorUnitId": "ou-lbg-products-lmhb18do",
      "indoorUnitId": "iu-iu-47083",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb24duwo-lbhb24duwi",
      "slug": "lbg-products-lbhb24duwo-lbhb24duwi",
      "modelId": "model-lbg-products-lbhb24duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb24duwo",
      "indoorUnitId": "iu-lbhb24duwi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18dvwo-lmhb18dzdi",
      "slug": "lbg-products-lbhb18dvwo-lmhb18dzdi",
      "modelId": "model-lbg-products-lbhb18dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb18dvwo",
      "indoorUnitId": "iu-lmhb18dzdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18duwo-lmhb18dsi",
      "slug": "lbg-products-lbhb18duwo-lmhb18dsi",
      "modelId": "model-lbg-products-lbhb18duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb18duwo",
      "indoorUnitId": "iu-lmhb18dsi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb09dvwo-lmhb09dsi",
      "slug": "lbg-products-lbhb09dvwo-lmhb09dsi",
      "modelId": "model-lbg-products-lbhb09dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb09dvwo",
      "indoorUnitId": "iu-lmhb09dsi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb24dvwo-lmhb24dzdi",
      "slug": "lbg-products-lbhb24dvwo-lmhb24dzdi",
      "modelId": "model-lbg-products-lbhb24dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb24dvwo",
      "indoorUnitId": "iu-lmhb24dzdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb24dvwo-lmhb24dsi",
      "slug": "lbg-products-lbhb24dvwo-lmhb24dsi",
      "modelId": "model-lbg-products-lbhb24dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb24dvwo",
      "indoorUnitId": "iu-lmhb24dsi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lmuhb18do-iu-47087",
      "slug": "lbg-products-lmuhb18do-iu-47087",
      "modelId": "model-lbg-products-lmuhb18do",
      "outdoorUnitId": "ou-lbg-products-lmuhb18do",
      "indoorUnitId": "iu-iu-47087",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb09dvwo-lmhb09dfi",
      "slug": "lbg-products-lbhb09dvwo-lmhb09dfi",
      "modelId": "model-lbg-products-lbhb09dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb09dvwo",
      "indoorUnitId": "iu-lmhb09dfi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb09duwo-lmhb09dsi",
      "slug": "lbg-products-lbhb09duwo-lmhb09dsi",
      "modelId": "model-lbg-products-lbhb09duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb09duwo",
      "indoorUnitId": "iu-lmhb09dsi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18duwo-lmhb18dfi",
      "slug": "lbg-products-lbhb18duwo-lmhb18dfi",
      "modelId": "model-lbg-products-lbhb18duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb18duwo",
      "indoorUnitId": "iu-lmhb18dfi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lmhb36do-iu-47085",
      "slug": "lbg-products-lmhb36do-iu-47085",
      "modelId": "model-lbg-products-lmhb36do",
      "outdoorUnitId": "ou-lbg-products-lmhb36do",
      "indoorUnitId": "iu-iu-47085",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18dvwo-lmhb18dsi",
      "slug": "lbg-products-lbhb18dvwo-lmhb18dsi",
      "modelId": "model-lbg-products-lbhb18dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb18dvwo",
      "indoorUnitId": "iu-lmhb18dsi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lmuhb36do-iu-47089",
      "slug": "lbg-products-lmuhb36do-iu-47089",
      "modelId": "model-lbg-products-lmuhb36do",
      "outdoorUnitId": "ou-lbg-products-lmuhb36do",
      "indoorUnitId": "iu-iu-47089",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbh18dto-lbh18dti",
      "slug": "lbg-products-lbh18dto-lbh18dti",
      "modelId": "model-lbg-products-lbh18dto",
      "outdoorUnitId": "ou-lbg-products-lbh18dto",
      "indoorUnitId": "iu-lbh18dti",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12dvwo-lmhb12dfi",
      "slug": "lbg-products-lbhb12dvwo-lmhb12dfi",
      "modelId": "model-lbg-products-lbhb12dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb12dvwo",
      "indoorUnitId": "iu-lmhb12dfi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-luuhb36do-luhb36dsi",
      "slug": "lbg-products-luuhb36do-luhb36dsi",
      "modelId": "model-lbg-products-luuhb36do",
      "outdoorUnitId": "ou-lbg-products-luuhb36do",
      "indoorUnitId": "iu-luhb36dsi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb24dvwo-lmhb24dfi",
      "slug": "lbg-products-lbhb24dvwo-lmhb24dfi",
      "modelId": "model-lbg-products-lbhb24dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb24dvwo",
      "indoorUnitId": "iu-lmhb24dfi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb09duwo-lmhb09dfi",
      "slug": "lbg-products-lbhb09duwo-lmhb09dfi",
      "modelId": "model-lbg-products-lbhb09duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb09duwo",
      "indoorUnitId": "iu-lmhb09dfi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb24duwo-lmhb24dfi",
      "slug": "lbg-products-lbhb24duwo-lmhb24dfi",
      "modelId": "model-lbg-products-lbhb24duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb24duwo",
      "indoorUnitId": "iu-lmhb24dfi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb12duwo-lmhb12dfi",
      "slug": "lbg-products-lbhb12duwo-lmhb12dfi",
      "modelId": "model-lbg-products-lbhb12duwo",
      "outdoorUnitId": "ou-lbg-products-lbhb12duwo",
      "indoorUnitId": "iu-lmhb12dfi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-luhb48do-luhb48dzdi",
      "slug": "lbg-products-luhb48do-luhb48dzdi",
      "modelId": "model-lbg-products-luhb48do",
      "outdoorUnitId": "ou-lbg-products-luhb48do",
      "indoorUnitId": "iu-luhb48dzdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb09dro-lbhb09dri",
      "slug": "lbg-products-lbhb09dro-lbhb09dri",
      "modelId": "model-lbg-products-lbhb09dro",
      "outdoorUnitId": "ou-lbg-products-lbhb09dro",
      "indoorUnitId": "iu-lbhb09dri",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb18do-lchb18dhni",
      "slug": "lbg-products-lcuhb18do-lchb18dhni",
      "modelId": "model-lbg-products-lcuhb18do",
      "outdoorUnitId": "ou-lbg-products-lcuhb18do",
      "indoorUnitId": "iu-lchb18dhni",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lbhb18dvwo-lmhb18dfi",
      "slug": "lbg-products-lbhb18dvwo-lmhb18dfi",
      "modelId": "model-lbg-products-lbhb18dvwo",
      "outdoorUnitId": "ou-lbg-products-lbhb18dvwo",
      "indoorUnitId": "iu-lmhb18dfi",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-luuhb36do-luhb36dzdi",
      "slug": "lbg-products-luuhb36do-luhb36dzdi",
      "modelId": "model-lbg-products-luuhb36do",
      "outdoorUnitId": "ou-lbg-products-luuhb36do",
      "indoorUnitId": "iu-luhb36dzdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb24do-lchb24dhni",
      "slug": "lbg-products-lcuhb24do-lchb24dhni",
      "modelId": "model-lbg-products-lcuhb24do",
      "outdoorUnitId": "ou-lbg-products-lcuhb24do",
      "indoorUnitId": "iu-lchb24dhni",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lchb24do-lchb24dhni",
      "slug": "lbg-products-lchb24do-lchb24dhni",
      "modelId": "model-lbg-products-lchb24do",
      "outdoorUnitId": "ou-lbg-products-lchb24do",
      "indoorUnitId": "iu-lchb24dhni",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-luuhb48do-luhb48dzdi",
      "slug": "lbg-products-luuhb48do-luhb48dzdi",
      "modelId": "model-lbg-products-luuhb48do",
      "outdoorUnitId": "ou-lbg-products-luuhb48do",
      "indoorUnitId": "iu-luhb48dzdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-luuhb48do-luhb48dsi",
      "slug": "lbg-products-luuhb48do-luhb48dsi",
      "modelId": "model-lbg-products-luuhb48do",
      "outdoorUnitId": "ou-lbg-products-luuhb48do",
      "indoorUnitId": "iu-luhb48dsi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb24do-lchb24da",
      "slug": "lbg-products-lcuhb24do-lchb24da",
      "modelId": "model-lbg-products-lcuhb24do",
      "outdoorUnitId": "ou-lbg-products-lcuhb24do",
      "indoorUnitId": "iu-lchb24da",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-luuhb36do-luhb36dfi",
      "slug": "lbg-products-luuhb36do-luhb36dfi",
      "modelId": "model-lbg-products-luuhb36do",
      "outdoorUnitId": "ou-lbg-products-luuhb36do",
      "indoorUnitId": "iu-luhb36dfi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb30do-lchb30dhni",
      "slug": "lbg-products-lcuhb30do-lchb30dhni",
      "modelId": "model-lbg-products-lcuhb30do",
      "outdoorUnitId": "ou-lbg-products-lcuhb30do",
      "indoorUnitId": "iu-lchb30dhni",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb18do-lchb24da",
      "slug": "lbg-products-lcuhb18do-lchb24da",
      "modelId": "model-lbg-products-lcuhb18do",
      "outdoorUnitId": "ou-lbg-products-lcuhb18do",
      "indoorUnitId": "iu-lchb24da",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb36do-lchb36dhni",
      "slug": "lbg-products-lcuhb36do-lchb36dhni",
      "modelId": "model-lbg-products-lcuhb36do",
      "outdoorUnitId": "ou-lbg-products-lcuhb36do",
      "indoorUnitId": "iu-lchb36dhni",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lchb24do-lchb24da",
      "slug": "lbg-products-lchb24do-lchb24da",
      "modelId": "model-lbg-products-lchb24do",
      "outdoorUnitId": "ou-lbg-products-lchb24do",
      "indoorUnitId": "iu-lchb24da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.7,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb48do-lchb48dhni",
      "slug": "lbg-products-lcuhb48do-lchb48dhni",
      "modelId": "model-lbg-products-lcuhb48do",
      "outdoorUnitId": "ou-lbg-products-lcuhb48do",
      "indoorUnitId": "iu-lchb48dhni",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb30do-lchb36da",
      "slug": "lbg-products-lcuhb30do-lchb36da",
      "modelId": "model-lbg-products-lcuhb30do",
      "outdoorUnitId": "ou-lbg-products-lcuhb30do",
      "indoorUnitId": "iu-lchb36da",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb60do-lchb60dhni",
      "slug": "lbg-products-lcuhb60do-lchb60dhni",
      "modelId": "model-lbg-products-lcuhb60do",
      "outdoorUnitId": "ou-lbg-products-lcuhb60do",
      "indoorUnitId": "iu-lchb60dhni",
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
          "sourceId": "src-lbg-products-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-lbg-products-lcuhb36do-lchb36da",
      "slug": "lbg-products-lcuhb36do-lchb36da",
      "modelId": "model-lbg-products-lcuhb36do",
      "outdoorUnitId": "ou-lbg-products-lcuhb36do",
      "indoorUnitId": "iu-lchb36da",
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
          "sourceId": "src-lbg-products-epa",
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
