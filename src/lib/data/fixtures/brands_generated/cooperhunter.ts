import type { BrandDataset } from "../../types";

export const brand_cooperhunterDataset: BrandDataset = {
  "brand": {
    "id": "brand-cooperhunter",
    "slug": "cooperhunter",
    "name": "Cooper&Hunter",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Cooper&Hunter",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-cooperhunter-epa",
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
      "id": "series-cooperhunter-ch-series",
      "slug": "cooperhunter-ch-series",
      "name": "CH series",
      "brandId": "brand-cooperhunter",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CH series de Cooper&Hunter",
      "imageUrl": "/images/series/cooperhunter-cooperhunter-ch-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-cooperhunter-os-series",
      "slug": "cooperhunter-os-series",
      "name": "OS series",
      "brandId": "brand-cooperhunter",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série OS series de Cooper&Hunter",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-cooperhunter-ch-hpr09-230vo",
      "slug": "cooperhunter-ch-hpr09-230vo",
      "name": "Cooper&Hunter CH-HPR09-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR09-230VO",
      "normalizedModelNumber": "ch-hpr09-230vo",
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
      "id": "model-cooperhunter-ch-rhp09-230vo",
      "slug": "cooperhunter-ch-rhp09-230vo",
      "name": "Cooper&Hunter CH-RHP09-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP09-230VO",
      "normalizedModelNumber": "ch-rhp09-230vo",
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
      "id": "model-cooperhunter-ch-hpr06f9-230vo",
      "slug": "cooperhunter-ch-hpr06f9-230vo",
      "name": "Cooper&Hunter CH-HPR06F9-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR06F9-230VO",
      "normalizedModelNumber": "ch-hpr06f9-230vo",
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
      "id": "model-cooperhunter-ch-res09-230vo",
      "slug": "cooperhunter-ch-res09-230vo",
      "name": "Cooper&Hunter CH-RES09-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RES09-230VO",
      "normalizedModelNumber": "ch-res09-230vo",
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
      "id": "model-cooperhunter-ch-res12-230vo",
      "slug": "cooperhunter-ch-res12-230vo",
      "name": "Cooper&Hunter CH-RES12-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RES12-230VO",
      "normalizedModelNumber": "ch-res12-230vo",
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
      "id": "model-cooperhunter-ch-es09-230vo",
      "slug": "cooperhunter-ch-es09-230vo",
      "name": "Cooper&Hunter CH-ES09-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ES09-230VO",
      "normalizedModelNumber": "ch-es09-230vo",
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
      "id": "model-cooperhunter-ch-rhp06f9-230vo",
      "slug": "cooperhunter-ch-rhp06f9-230vo",
      "name": "Cooper&Hunter CH-RHP06F9-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP06F9-230VO",
      "normalizedModelNumber": "ch-rhp06f9-230vo",
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
      "id": "model-cooperhunter-ch-hpr12-230vo",
      "slug": "cooperhunter-ch-hpr12-230vo",
      "name": "Cooper&Hunter CH-HPR12-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR12-230VO",
      "normalizedModelNumber": "ch-hpr12-230vo",
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
      "id": "model-cooperhunter-ch-rhp12-230vo",
      "slug": "cooperhunter-ch-rhp12-230vo",
      "name": "Cooper&Hunter CH-RHP12-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP12-230VO",
      "normalizedModelNumber": "ch-rhp12-230vo",
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
      "id": "model-cooperhunter-ch-r18mes-230vo",
      "slug": "cooperhunter-ch-r18mes-230vo",
      "name": "Cooper&Hunter CH-R18MES-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-R18MES-230VO",
      "normalizedModelNumber": "ch-r18mes-230vo",
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
      "id": "model-cooperhunter-ch-rvhp19m-230vo",
      "slug": "cooperhunter-ch-rvhp19m-230vo",
      "name": "Cooper&Hunter CH-RVHP19M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RVHP19M-230VO",
      "normalizedModelNumber": "ch-rvhp19m-230vo",
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
      "id": "model-cooperhunter-ch-r28mes-230vo",
      "slug": "cooperhunter-ch-r28mes-230vo",
      "name": "Cooper&Hunter CH-R28MES-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-R28MES-230VO",
      "normalizedModelNumber": "ch-r28mes-230vo",
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
      "id": "model-cooperhunter-ch-es12-230vo",
      "slug": "cooperhunter-ch-es12-230vo",
      "name": "Cooper&Hunter CH-ES12-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ES12-230VO",
      "normalizedModelNumber": "ch-es12-230vo",
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
      "id": "model-cooperhunter-ch-28mes-230vo",
      "slug": "cooperhunter-ch-28mes-230vo",
      "name": "Cooper&Hunter CH-28MES-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-28MES-230VO",
      "normalizedModelNumber": "ch-28mes-230vo",
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
      "id": "model-cooperhunter-ch-res09-115vo",
      "slug": "cooperhunter-ch-res09-115vo",
      "name": "Cooper&Hunter CH-RES09-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RES09-115VO",
      "normalizedModelNumber": "ch-res09-115vo",
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
      "id": "model-cooperhunter-ch-res06-115vo",
      "slug": "cooperhunter-ch-res06-115vo",
      "name": "Cooper&Hunter CH-RES06-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RES06-115VO",
      "normalizedModelNumber": "ch-res06-115vo",
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
      "id": "model-cooperhunter-ch-es18-230vo",
      "slug": "cooperhunter-ch-es18-230vo",
      "name": "Cooper&Hunter CH-ES18-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ES18-230VO",
      "normalizedModelNumber": "ch-es18-230vo",
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
      "id": "model-cooperhunter-ch-r36mes-230vo",
      "slug": "cooperhunter-ch-r36mes-230vo",
      "name": "Cooper&Hunter CH-R36MES-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-R36MES-230VO",
      "normalizedModelNumber": "ch-r36mes-230vo",
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
      "id": "model-cooperhunter-ch-res18-230vo",
      "slug": "cooperhunter-ch-res18-230vo",
      "name": "Cooper&Hunter CH-RES18-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RES18-230VO",
      "normalizedModelNumber": "ch-res18-230vo",
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
      "id": "model-cooperhunter-ch-r48mes-230vo",
      "slug": "cooperhunter-ch-r48mes-230vo",
      "name": "Cooper&Hunter CH-R48MES-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-R48MES-230VO",
      "normalizedModelNumber": "ch-r48mes-230vo",
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
      "id": "model-cooperhunter-ch-36mes-230vo",
      "slug": "cooperhunter-ch-36mes-230vo",
      "name": "Cooper&Hunter CH-36MES-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-36MES-230VO",
      "normalizedModelNumber": "ch-36mes-230vo",
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
      "id": "model-cooperhunter-ch-res24-230vo",
      "slug": "cooperhunter-ch-res24-230vo",
      "name": "Cooper&Hunter CH-RES24-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RES24-230VO",
      "normalizedModelNumber": "ch-res24-230vo",
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
      "id": "model-cooperhunter-ch-48mes-230vo",
      "slug": "cooperhunter-ch-48mes-230vo",
      "name": "Cooper&Hunter CH-48MES-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-48MES-230VO",
      "normalizedModelNumber": "ch-48mes-230vo",
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
      "id": "model-cooperhunter-ch-res12-115vo",
      "slug": "cooperhunter-ch-res12-115vo",
      "name": "Cooper&Hunter CH-RES12-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RES12-115VO",
      "normalizedModelNumber": "ch-res12-115vo",
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
      "id": "model-cooperhunter-ch-es09-115vo",
      "slug": "cooperhunter-ch-es09-115vo",
      "name": "Cooper&Hunter CH-ES09-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ES09-115VO",
      "normalizedModelNumber": "ch-es09-115vo",
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
      "id": "model-cooperhunter-ch-rvhp28m-230vo",
      "slug": "cooperhunter-ch-rvhp28m-230vo",
      "name": "Cooper&Hunter CH-RVHP28M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RVHP28M-230VO",
      "normalizedModelNumber": "ch-rvhp28m-230vo",
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
      "id": "model-cooperhunter-ch-hpr28m-230vo",
      "slug": "cooperhunter-ch-hpr28m-230vo",
      "name": "Cooper&Hunter CH-HPR28M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR28M-230VO",
      "normalizedModelNumber": "ch-hpr28m-230vo",
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
      "id": "model-cooperhunter-ch-es06-115vo",
      "slug": "cooperhunter-ch-es06-115vo",
      "name": "Cooper&Hunter CH-ES06-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ES06-115VO",
      "normalizedModelNumber": "ch-es06-115vo",
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
      "id": "model-cooperhunter-ch-06olvwm-115vo",
      "slug": "cooperhunter-ch-06olvwm-115vo",
      "name": "Cooper&Hunter CH-06OLVWM-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-06OLVWM-115VO",
      "normalizedModelNumber": "ch-06olvwm-115vo",
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
      "id": "model-cooperhunter-ch-rvhp48m-230vo",
      "slug": "cooperhunter-ch-rvhp48m-230vo",
      "name": "Cooper&Hunter CH-RVHP48M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RVHP48M-230VO",
      "normalizedModelNumber": "ch-rvhp48m-230vo",
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
      "id": "model-cooperhunter-ch-rvhp36m-230vo",
      "slug": "cooperhunter-ch-rvhp36m-230vo",
      "name": "Cooper&Hunter CH-RVHP36M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RVHP36M-230VO",
      "normalizedModelNumber": "ch-rvhp36m-230vo",
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
      "id": "model-cooperhunter-ch-18mes-230vo",
      "slug": "cooperhunter-ch-18mes-230vo",
      "name": "Cooper&Hunter CH-18MES-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-18MES-230VO",
      "normalizedModelNumber": "ch-18mes-230vo",
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
      "id": "model-cooperhunter-ch-es12-115vo",
      "slug": "cooperhunter-ch-es12-115vo",
      "name": "Cooper&Hunter CH-ES12-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ES12-115VO",
      "normalizedModelNumber": "ch-es12-115vo",
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
      "id": "model-cooperhunter-ch-rel30-230vo",
      "slug": "cooperhunter-ch-rel30-230vo",
      "name": "Cooper&Hunter CH-REL30-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-REL30-230VO",
      "normalizedModelNumber": "ch-rel30-230vo",
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
      "id": "model-cooperhunter-ch-rhp24-230vo",
      "slug": "cooperhunter-ch-rhp24-230vo",
      "name": "Cooper&Hunter CH-RHP24-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP24-230VO",
      "normalizedModelNumber": "ch-rhp24-230vo",
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
      "id": "model-cooperhunter-ch-hpr24-230vo",
      "slug": "cooperhunter-ch-hpr24-230vo",
      "name": "Cooper&Hunter CH-HPR24-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR24-230VO",
      "normalizedModelNumber": "ch-hpr24-230vo",
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
      "id": "model-cooperhunter-ch-rvhp55m-230vo",
      "slug": "cooperhunter-ch-rvhp55m-230vo",
      "name": "Cooper&Hunter CH-RVHP55M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RVHP55M-230VO",
      "normalizedModelNumber": "ch-rvhp55m-230vo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-cooperhunter-ch-hpr36m-230vo",
      "slug": "cooperhunter-ch-hpr36m-230vo",
      "name": "Cooper&Hunter CH-HPR36M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR36M-230VO",
      "normalizedModelNumber": "ch-hpr36m-230vo",
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
      "id": "model-cooperhunter-ch-es24-230vo",
      "slug": "cooperhunter-ch-es24-230vo",
      "name": "Cooper&Hunter CH-ES24-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ES24-230VO",
      "normalizedModelNumber": "ch-es24-230vo",
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
      "id": "model-cooperhunter-ch-hpr18-230vo",
      "slug": "cooperhunter-ch-hpr18-230vo",
      "name": "Cooper&Hunter CH-HPR18-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR18-230VO",
      "normalizedModelNumber": "ch-hpr18-230vo",
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
      "id": "model-cooperhunter-ch-hpr55m-230vo",
      "slug": "cooperhunter-ch-hpr55m-230vo",
      "name": "Cooper&Hunter CH-HPR55M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR55M-230VO",
      "normalizedModelNumber": "ch-hpr55m-230vo",
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
      "id": "model-cooperhunter-ch-hpr19m-230vo",
      "slug": "cooperhunter-ch-hpr19m-230vo",
      "name": "Cooper&Hunter CH-HPR19M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR19M-230VO",
      "normalizedModelNumber": "ch-hpr19m-230vo",
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
      "id": "model-cooperhunter-ch-hpr48m-230vo",
      "slug": "cooperhunter-ch-hpr48m-230vo",
      "name": "Cooper&Hunter CH-HPR48M-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR48M-230VO",
      "normalizedModelNumber": "ch-hpr48m-230vo",
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
      "id": "model-cooperhunter-ch-rhp18-230vo",
      "slug": "cooperhunter-ch-rhp18-230vo",
      "name": "Cooper&Hunter CH-RHP18-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP18-230VO",
      "normalizedModelNumber": "ch-rhp18-230vo",
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
      "id": "model-cooperhunter-ch-ny09mia-230vo",
      "slug": "cooperhunter-ch-ny09mia-230vo",
      "name": "Cooper&Hunter CH-NY09MIA-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-NY09MIA-230VO",
      "normalizedModelNumber": "ch-ny09mia-230vo",
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
      "id": "model-cooperhunter-ch-ny09mia-115vo",
      "slug": "cooperhunter-ch-ny09mia-115vo",
      "name": "Cooper&Hunter CH-NY09MIA-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-NY09MIA-115VO",
      "normalizedModelNumber": "ch-ny09mia-115vo",
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
      "id": "model-cooperhunter-ch-rls06mia-115vo",
      "slug": "cooperhunter-ch-rls06mia-115vo",
      "name": "Cooper&Hunter CH-RLS06MIA-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RLS06MIA-115VO",
      "normalizedModelNumber": "ch-rls06mia-115vo",
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
      "id": "model-cooperhunter-ch-rls09mia-115vo",
      "slug": "cooperhunter-ch-rls09mia-115vo",
      "name": "Cooper&Hunter CH-RLS09MIA-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RLS09MIA-115VO",
      "normalizedModelNumber": "ch-rls09mia-115vo",
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
      "id": "model-cooperhunter-ch-ny06mia-115vo",
      "slug": "cooperhunter-ch-ny06mia-115vo",
      "name": "Cooper&Hunter CH-NY06MIA-115VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-NY06MIA-115VO",
      "normalizedModelNumber": "ch-ny06mia-115vo",
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
      "id": "model-cooperhunter-ch-rhp15-230vo",
      "slug": "cooperhunter-ch-rhp15-230vo",
      "name": "Cooper&Hunter CH-RHP15-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP15-230VO",
      "normalizedModelNumber": "ch-rhp15-230vo",
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
      "id": "model-cooperhunter-ch-rls09mia-230vo",
      "slug": "cooperhunter-ch-rls09mia-230vo",
      "name": "Cooper&Hunter CH-RLS09MIA-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RLS09MIA-230VO",
      "normalizedModelNumber": "ch-rls09mia-230vo",
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
      "id": "model-cooperhunter-ch-rhp36lcu-230vo",
      "slug": "cooperhunter-ch-rhp36lcu-230vo",
      "name": "Cooper&Hunter CH-RHP36LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP36LCU-230VO",
      "normalizedModelNumber": "ch-rhp36lcu-230vo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36600,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-cooperhunter-ch-el30-230vo",
      "slug": "cooperhunter-ch-el30-230vo",
      "name": "Cooper&Hunter CH-EL30-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-EL30-230VO",
      "normalizedModelNumber": "ch-el30-230vo",
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
      "id": "model-cooperhunter-ch-rhp33-230vo",
      "slug": "cooperhunter-ch-rhp33-230vo",
      "name": "Cooper&Hunter CH-RHP33-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP33-230VO",
      "normalizedModelNumber": "ch-rhp33-230vo",
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
      "id": "model-cooperhunter-ch-r36lcu-230vo",
      "slug": "cooperhunter-ch-r36lcu-230vo",
      "name": "Cooper&Hunter CH-R36LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-R36LCU-230VO",
      "normalizedModelNumber": "ch-r36lcu-230vo",
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
      "id": "model-cooperhunter-ch-r48lcu-230vo",
      "slug": "cooperhunter-ch-r48lcu-230vo",
      "name": "Cooper&Hunter CH-R48LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-R48LCU-230VO",
      "normalizedModelNumber": "ch-r48lcu-230vo",
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
      "id": "model-cooperhunter-ch-ny18mia-230vo",
      "slug": "cooperhunter-ch-ny18mia-230vo",
      "name": "Cooper&Hunter CH-NY18MIA-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-NY18MIA-230VO",
      "normalizedModelNumber": "ch-ny18mia-230vo",
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
      "id": "model-cooperhunter-ch-hpr35-230vo",
      "slug": "cooperhunter-ch-hpr35-230vo",
      "name": "Cooper&Hunter CH-HPR35-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HPR35-230VO",
      "normalizedModelNumber": "ch-hpr35-230vo",
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
      "id": "model-cooperhunter-ch-nhpr36lcu-230vo",
      "slug": "cooperhunter-ch-nhpr36lcu-230vo",
      "name": "Cooper&Hunter CH-NHPR36LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-NHPR36LCU-230VO",
      "normalizedModelNumber": "ch-nhpr36lcu-230vo",
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
      "id": "model-cooperhunter-ch-pq18-230vo",
      "slug": "cooperhunter-ch-pq18-230vo",
      "name": "Cooper&Hunter CH-PQ18-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-PQ18-230VO",
      "normalizedModelNumber": "ch-pq18-230vo",
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
      "id": "model-cooperhunter-ch-n48lcu-230vo",
      "slug": "cooperhunter-ch-n48lcu-230vo",
      "name": "Cooper&Hunter CH-N48LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-N48LCU-230VO",
      "normalizedModelNumber": "ch-n48lcu-230vo",
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
      "id": "model-cooperhunter-ch-rls24mia-230vo",
      "slug": "cooperhunter-ch-rls24mia-230vo",
      "name": "Cooper&Hunter CH-RLS24MIA-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RLS24MIA-230VO",
      "normalizedModelNumber": "ch-rls24mia-230vo",
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
      "id": "model-cooperhunter-ch-pq24-230vo",
      "slug": "cooperhunter-ch-pq24-230vo",
      "name": "Cooper&Hunter CH-PQ24-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-PQ24-230VO",
      "normalizedModelNumber": "ch-pq24-230vo",
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
      "id": "model-cooperhunter-ch-rhp48lcu-230vo",
      "slug": "cooperhunter-ch-rhp48lcu-230vo",
      "name": "Cooper&Hunter CH-RHP48LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP48LCU-230VO",
      "normalizedModelNumber": "ch-rhp48lcu-230vo",
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
      "id": "model-cooperhunter-os-el09alp230vo",
      "slug": "cooperhunter-os-el09alp230vo",
      "name": "Cooper&Hunter OS-EL09ALP230VO",
      "seriesId": "series-cooperhunter-os-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "OS-EL09ALP230VO",
      "normalizedModelNumber": "os-el09alp230vo",
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
      "id": "model-cooperhunter-ch-pq36x-230vo",
      "slug": "cooperhunter-ch-pq36x-230vo",
      "name": "Cooper&Hunter CH-PQ36X-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-PQ36X-230VO",
      "normalizedModelNumber": "ch-pq36x-230vo",
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
      "id": "model-cooperhunter-ch-rhp60lcu-230vo",
      "slug": "cooperhunter-ch-rhp60lcu-230vo",
      "name": "Cooper&Hunter CH-RHP60LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-RHP60LCU-230VO",
      "normalizedModelNumber": "ch-rhp60lcu-230vo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-cooperhunter-ch-pq36-230vo",
      "slug": "cooperhunter-ch-pq36-230vo",
      "name": "Cooper&Hunter CH-PQ36-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-PQ36-230VO",
      "normalizedModelNumber": "ch-pq36-230vo",
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
      "id": "model-cooperhunter-ch-alt30hp24v-230vo",
      "slug": "cooperhunter-ch-alt30hp24v-230vo",
      "name": "Cooper&Hunter CH-ALT30HP24V-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ALT30HP24V-230VO",
      "normalizedModelNumber": "ch-alt30hp24v-230vo",
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
      "id": "model-cooperhunter-ch-pq33-230vo",
      "slug": "cooperhunter-ch-pq33-230vo",
      "name": "Cooper&Hunter CH-PQ33-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-PQ33-230VO",
      "normalizedModelNumber": "ch-pq33-230vo",
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
      "id": "model-cooperhunter-ch-pq55-230vo",
      "slug": "cooperhunter-ch-pq55-230vo",
      "name": "Cooper&Hunter CH-PQ55-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-PQ55-230VO",
      "normalizedModelNumber": "ch-pq55-230vo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54000,
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
      "id": "model-cooperhunter-ch-pq48-230vo",
      "slug": "cooperhunter-ch-pq48-230vo",
      "name": "Cooper&Hunter CH-PQ48-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-PQ48-230VO",
      "normalizedModelNumber": "ch-pq48-230vo",
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
      "id": "model-cooperhunter-ch-nhpr60lcu-230vo",
      "slug": "cooperhunter-ch-nhpr60lcu-230vo",
      "name": "Cooper&Hunter CH-NHPR60LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-NHPR60LCU-230VO",
      "normalizedModelNumber": "ch-nhpr60lcu-230vo",
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
      "id": "model-cooperhunter-ch-nhpr48lcu-230vo",
      "slug": "cooperhunter-ch-nhpr48lcu-230vo",
      "name": "Cooper&Hunter CH-NHPR48LCU-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-NHPR48LCU-230VO",
      "normalizedModelNumber": "ch-nhpr48lcu-230vo",
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
      "id": "model-cooperhunter-ch-hyp36lcuo",
      "slug": "cooperhunter-ch-hyp36lcuo",
      "name": "Cooper&Hunter CH-HYP36LCUO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-HYP36LCUO",
      "normalizedModelNumber": "ch-hyp36lcuo",
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
      "id": "model-cooperhunter-ch-alt24hp24v-230vo",
      "slug": "cooperhunter-ch-alt24hp24v-230vo",
      "name": "Cooper&Hunter CH-ALT24HP24V-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ALT24HP24V-230VO",
      "normalizedModelNumber": "ch-alt24hp24v-230vo",
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
      "id": "model-cooperhunter-ch-alt60hp24v-230vo",
      "slug": "cooperhunter-ch-alt60hp24v-230vo",
      "name": "Cooper&Hunter CH-ALT60HP24V-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ALT60HP24V-230VO",
      "normalizedModelNumber": "ch-alt60hp24v-230vo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54000,
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
      "id": "model-cooperhunter-ch-alt48hp24v-230vo",
      "slug": "cooperhunter-ch-alt48hp24v-230vo",
      "name": "Cooper&Hunter CH-ALT48HP24V-230VO",
      "seriesId": "series-cooperhunter-ch-series",
      "brandId": "brand-cooperhunter",
      "modelNumber": "CH-ALT48HP24V-230VO",
      "normalizedModelNumber": "ch-alt48hp24v-230vo",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-cooperhunter-ch-hpr09-230vo",
      "modelNumber": "CH-HPR09-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rhp09-230vo",
      "modelNumber": "CH-RHP09-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-hpr06f9-230vo",
      "modelNumber": "CH-HPR06F9-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-res09-230vo",
      "modelNumber": "CH-RES09-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-res12-230vo",
      "modelNumber": "CH-RES12-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-es09-230vo",
      "modelNumber": "CH-ES09-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rhp06f9-230vo",
      "modelNumber": "CH-RHP06F9-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-hpr12-230vo",
      "modelNumber": "CH-HPR12-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rhp12-230vo",
      "modelNumber": "CH-RHP12-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-r18mes-230vo",
      "modelNumber": "CH-R18MES-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-rvhp19m-230vo",
      "modelNumber": "CH-RVHP19M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-r28mes-230vo",
      "modelNumber": "CH-R28MES-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-es12-230vo",
      "modelNumber": "CH-ES12-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-28mes-230vo",
      "modelNumber": "CH-28MES-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-res09-115vo",
      "modelNumber": "CH-RES09-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-res06-115vo",
      "modelNumber": "CH-RES06-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-es18-230vo",
      "modelNumber": "CH-ES18-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-r36mes-230vo",
      "modelNumber": "CH-R36MES-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-res18-230vo",
      "modelNumber": "CH-RES18-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-r48mes-230vo",
      "modelNumber": "CH-R48MES-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-36mes-230vo",
      "modelNumber": "CH-36MES-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-res24-230vo",
      "modelNumber": "CH-RES24-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-48mes-230vo",
      "modelNumber": "CH-48MES-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-res12-115vo",
      "modelNumber": "CH-RES12-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-es09-115vo",
      "modelNumber": "CH-ES09-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rvhp28m-230vo",
      "modelNumber": "CH-RVHP28M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-hpr28m-230vo",
      "modelNumber": "CH-HPR28M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-es06-115vo",
      "modelNumber": "CH-ES06-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-06olvwm-115vo",
      "modelNumber": "CH-06OLVWM-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rvhp48m-230vo",
      "modelNumber": "CH-RVHP48M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-rvhp36m-230vo",
      "modelNumber": "CH-RVHP36M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-18mes-230vo",
      "modelNumber": "CH-18MES-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-es12-115vo",
      "modelNumber": "CH-ES12-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rel30-230vo",
      "modelNumber": "CH-REL30-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-rhp24-230vo",
      "modelNumber": "CH-RHP24-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-hpr24-230vo",
      "modelNumber": "CH-HPR24-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rvhp55m-230vo",
      "modelNumber": "CH-RVHP55M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-hpr36m-230vo",
      "modelNumber": "CH-HPR36M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-es24-230vo",
      "modelNumber": "CH-ES24-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-hpr18-230vo",
      "modelNumber": "CH-HPR18-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-hpr55m-230vo",
      "modelNumber": "CH-HPR55M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-hpr19m-230vo",
      "modelNumber": "CH-HPR19M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-hpr48m-230vo",
      "modelNumber": "CH-HPR48M-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rhp18-230vo",
      "modelNumber": "CH-RHP18-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-ny09mia-230vo",
      "modelNumber": "CH-NY09MIA-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-ny09mia-115vo",
      "modelNumber": "CH-NY09MIA-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rls06mia-115vo",
      "modelNumber": "CH-RLS06MIA-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-rls09mia-115vo",
      "modelNumber": "CH-RLS09MIA-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-ny06mia-115vo",
      "modelNumber": "CH-NY06MIA-115VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rhp15-230vo",
      "modelNumber": "CH-RHP15-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-rls09mia-230vo",
      "modelNumber": "CH-RLS09MIA-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-rhp36lcu-230vo",
      "modelNumber": "CH-RHP36LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-el30-230vo",
      "modelNumber": "CH-EL30-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rhp33-230vo",
      "modelNumber": "CH-RHP33-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-r36lcu-230vo",
      "modelNumber": "CH-R36LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-r48lcu-230vo",
      "modelNumber": "CH-R48LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-ny18mia-230vo",
      "modelNumber": "CH-NY18MIA-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-hpr35-230vo",
      "modelNumber": "CH-HPR35-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-nhpr36lcu-230vo",
      "modelNumber": "CH-NHPR36LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-pq18-230vo",
      "modelNumber": "CH-PQ18-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-n48lcu-230vo",
      "modelNumber": "CH-N48LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-rls24mia-230vo",
      "modelNumber": "CH-RLS24MIA-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-pq24-230vo",
      "modelNumber": "CH-PQ24-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-rhp48lcu-230vo",
      "modelNumber": "CH-RHP48LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-os-el09alp230vo",
      "modelNumber": "OS-EL09ALP230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-pq36x-230vo",
      "modelNumber": "CH-PQ36X-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-rhp60lcu-230vo",
      "modelNumber": "CH-RHP60LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-pq36-230vo",
      "modelNumber": "CH-PQ36-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-alt30hp24v-230vo",
      "modelNumber": "CH-ALT30HP24V-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-pq33-230vo",
      "modelNumber": "CH-PQ33-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-pq55-230vo",
      "modelNumber": "CH-PQ55-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-pq48-230vo",
      "modelNumber": "CH-PQ48-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-nhpr60lcu-230vo",
      "modelNumber": "CH-NHPR60LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-nhpr48lcu-230vo",
      "modelNumber": "CH-NHPR48LCU-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-hyp36lcuo",
      "modelNumber": "CH-HYP36LCUO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-cooperhunter-ch-alt24hp24v-230vo",
      "modelNumber": "CH-ALT24HP24V-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-alt60hp24v-230vo",
      "modelNumber": "CH-ALT60HP24V-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-cooperhunter-ch-alt48hp24v-230vo",
      "modelNumber": "CH-ALT48HP24V-230VO",
      "brandId": "brand-cooperhunter",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ch-09mastwm-230vi",
      "modelNumber": "CH-09MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pro09mastwm-230vi",
      "modelNumber": "CH-PRO09MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh09mastwm-230vi",
      "modelNumber": "CH-RH09MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh09mmc",
      "modelNumber": "CH-RSH09MMC",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-06mastwm-230vi",
      "modelNumber": "CH-06MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b09molvwm-230vi",
      "modelNumber": "CH-B09MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09molvwm-230vi",
      "modelNumber": "CH-09MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rb09molvwm-230vi",
      "modelNumber": "CH-RB09MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r09molvwm-230vi",
      "modelNumber": "CH-R09MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pro12mastwm-230vi",
      "modelNumber": "CH-PRO12MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh12mastwm-230vi",
      "modelNumber": "CH-RH12MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh06mastwm-230vi",
      "modelNumber": "CH-RH06MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pro06mastwm-230vi",
      "modelNumber": "CH-PRO06MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12mastwm-230vi",
      "modelNumber": "CH-12MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r06molvwm-230vi",
      "modelNumber": "CH-R06MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rb06molvwm-230vi",
      "modelNumber": "CH-RB06MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43324",
      "modelNumber": "IU-43324",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43444",
      "modelNumber": "IU-43444",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43325",
      "modelNumber": "IU-43325",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12mmc-230vi",
      "modelNumber": "CH-12MMC-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh12mmc",
      "modelNumber": "CH-RSH12MMC",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09dkt230vi",
      "modelNumber": "CH-09DKT230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-d09msphwm-230vi",
      "modelNumber": "CH-D09MSPHWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43186",
      "modelNumber": "IU-43186",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rb09olvwm-115vi",
      "modelNumber": "CH-RB09OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r06olvwm-115vi",
      "modelNumber": "CH-R06OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r09olvwm-115vi",
      "modelNumber": "CH-R09OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r12molvwm-230vi",
      "modelNumber": "CH-R12MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b18molvwm-230vi",
      "modelNumber": "CH-B18MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43328",
      "modelNumber": "IU-43328",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09mct1w-230vi",
      "modelNumber": "CH-09MCT1W-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18molvwm-230vi",
      "modelNumber": "CH-18MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09mct1w-w",
      "modelNumber": "CH-09MCT1W-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r18molvwm-230vi",
      "modelNumber": "CH-R18MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rb18molvwm-230vi",
      "modelNumber": "CH-RB18MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43333",
      "modelNumber": "IU-43333",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh06-12mct1w",
      "modelNumber": "CH-RSH06-12MCT1W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rb12molvwm-230vi",
      "modelNumber": "CH-RB12MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43187",
      "modelNumber": "IU-43187",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh16mmc",
      "modelNumber": "CH-RSH16MMC",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12msphmc-230vi",
      "modelNumber": "CH-12MSPHMC-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12dkt230vi",
      "modelNumber": "CH-12DKT230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-d12msphwm-230vi",
      "modelNumber": "CH-D12MSPHWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh18mastwm-230vi",
      "modelNumber": "CH-RH18MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pro18mastwm-230vi",
      "modelNumber": "CH-PRO18MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rb24molvwm-230vi",
      "modelNumber": "CH-RB24MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r24molvwm-230vi",
      "modelNumber": "CH-R24MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18mastwm-230vi",
      "modelNumber": "CH-18MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-06molvwm-230vi",
      "modelNumber": "CH-06MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b06molvwm-230vi",
      "modelNumber": "CH-B06MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43188",
      "modelNumber": "IU-43188",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rb12olvwm-115vi",
      "modelNumber": "CH-RB12OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r12olvwm-115vi",
      "modelNumber": "CH-R12OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12molvwm-230vi",
      "modelNumber": "CH-12MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b12molvwm-230vi",
      "modelNumber": "CH-B12MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09olvwm-115vi",
      "modelNumber": "CH-09OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh24mastwm-230vi",
      "modelNumber": "CH-RH24MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43445",
      "modelNumber": "IU-43445",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43293",
      "modelNumber": "IU-43293",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12mct1w-w",
      "modelNumber": "CH-12MCT1W-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12mct1w-230vi",
      "modelNumber": "CH-12MCT1W-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pro24mastwm-230vi",
      "modelNumber": "CH-PRO24MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18msphfc-230vi",
      "modelNumber": "CH-18MSPHFC-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18mfc-w",
      "modelNumber": "CH-18MFC-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b09olvwm-115vi",
      "modelNumber": "CH-B09OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-06olvwm-115vi",
      "modelNumber": "CH-06OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43447",
      "modelNumber": "IU-43447",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43446",
      "modelNumber": "IU-43446",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43185",
      "modelNumber": "IU-43185",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b12olvwm-115vi",
      "modelNumber": "CH-B12OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12olvwm-115vi",
      "modelNumber": "CH-12OLVWM-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12msphct-230vi",
      "modelNumber": "CH-12MSPHCT-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12mct-w",
      "modelNumber": "CH-12MCT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh09mct",
      "modelNumber": "CH-RH09MCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh09-12mct",
      "modelNumber": "CH-RSH09-12MCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-16mmc-230vi",
      "modelNumber": "CH-16MMC-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r30melvwm-230vi",
      "modelNumber": "CH-R30MELVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24molvwm-230vi",
      "modelNumber": "CH-24MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b24molvwm-230vi",
      "modelNumber": "CH-B24MOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh18mfc",
      "modelNumber": "CH-RSH18MFC",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43448",
      "modelNumber": "IU-43448",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh18mct1w",
      "modelNumber": "CH-RSH18MCT1W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh12mct",
      "modelNumber": "CH-RH12MCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43295",
      "modelNumber": "IU-43295",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh24mct",
      "modelNumber": "CH-RSH24MCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24mastwm-230vi",
      "modelNumber": "CH-24MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-06mct1w-230vi",
      "modelNumber": "CH-06MCT1W-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh24mct",
      "modelNumber": "CH-RH24MCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-06mct1w-w",
      "modelNumber": "CH-06MCT1W-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43297",
      "modelNumber": "IU-43297",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43281",
      "modelNumber": "IU-43281",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18mct1w-230vi",
      "modelNumber": "CH-18MCT1W-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18mct1w-w",
      "modelNumber": "CH-18MCT1W-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43296",
      "modelNumber": "IU-43296",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny09mia-sk230v",
      "modelNumber": "CH-NY09MIA-SK230V",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09molv-230vi",
      "modelNumber": "CH-09MOLV-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny09mia-230vi",
      "modelNumber": "CH-NY09MIA-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny09mia-sk115v",
      "modelNumber": "CH-NY09MIA-SK115V",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-n24msphct-230vi",
      "modelNumber": "CH-N24MSPHCT-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny09mia-115vi",
      "modelNumber": "CH-NY09MIA-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rls06mia-115vi",
      "modelNumber": "CH-RLS06MIA-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rls09mia-115vi",
      "modelNumber": "CH-RLS09MIA-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny06mia-sk115v",
      "modelNumber": "CH-NY06MIA-SK115V",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09olv-115vi",
      "modelNumber": "CH-09OLV-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny06mia-115vi",
      "modelNumber": "CH-NY06MIA-115VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24mct-w",
      "modelNumber": "CH-24MCT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh15mastwm-230vi",
      "modelNumber": "CH-RH15MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pro15mastwm-230vi",
      "modelNumber": "CH-PRO15MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs06mdt-ms",
      "modelNumber": "CH-RS06MDT-MS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs06-12mdt-ms",
      "modelNumber": "CH-RS06-12MDT- MS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs09mdt-ms",
      "modelNumber": "CH-RS09MDT-MS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24mfc-w",
      "modelNumber": "CH-24MFC-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24msphfc-230vi",
      "modelNumber": "CH-24MSPHFC-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rls09mia-230vi",
      "modelNumber": "CH-RLS09MIA-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh36lcct",
      "modelNumber": "CH-RSH36LCCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh36lcct",
      "modelNumber": "CH-RH36LCCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh24mfc",
      "modelNumber": "CH-RSH24MFC",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-30elvwm-230vi",
      "modelNumber": "CH-30ELVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh18mct",
      "modelNumber": "CH-RH18MCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh18mct",
      "modelNumber": "CH-RSH18MCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18mct-w",
      "modelNumber": "CH-18MCT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09mct-w",
      "modelNumber": "CH-09MCT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh30mastwm-230vi",
      "modelNumber": "CH-RH30MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09msphct-230vi",
      "modelNumber": "CH-09MSPHCT-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18msphct-230vi",
      "modelNumber": "CH-18MSPHCT-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pro30mastwm-230vi",
      "modelNumber": "CH-PRO30MASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m09dtui",
      "modelNumber": "CH-M09DTUI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09mdt-w",
      "modelNumber": "CH-09MDT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs18mdt-ms",
      "modelNumber": "CH-RS18MDT-MS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs12mdt-ms",
      "modelNumber": "CH-RS12MDT-MS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18mdt-w",
      "modelNumber": "CH-18MDT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-r33holvwm-230vi",
      "modelNumber": "CH-R33HOLVWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-30astwm-230vi",
      "modelNumber": "CH-30ASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh36lcfc",
      "modelNumber": "CH-RSH36LCFC",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m18dtui",
      "modelNumber": "CH-M18DTUI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh48lcfc",
      "modelNumber": "CH-RSH48LCFC",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs24mahu",
      "modelNumber": "CH-RS24MAHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-rh33hastwm-230vi",
      "modelNumber": "CH-RH33HASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18molv-230vi",
      "modelNumber": "CH-18MOLV-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12mdt-w",
      "modelNumber": "CH-12MDT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-35hastwm-230vi",
      "modelNumber": "CH-35HASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pro33hastwm-230vi",
      "modelNumber": "CH-PRO33HASTWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m12dtui",
      "modelNumber": "CH-M12DTUI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18dkt230vi",
      "modelNumber": "CH-18DKT230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-n36lcct-230vi",
      "modelNumber": "CH-N36LCCT-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-36lcct-w",
      "modelNumber": "CH-36LCCT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-d18msphwm-230vi",
      "modelNumber": "CH-D18MSPHWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-stm18ahu24v",
      "modelNumber": "CH-STM18AHU24V",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-24mdt-w",
      "modelNumber": "CH-24MDT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m24dtui",
      "modelNumber": "CH-M24DTUI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pq18ahu",
      "modelNumber": "CH-PQ18AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-rs24mdt-hs",
      "modelNumber": "CH-RS24MDT-HS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-48lcfci",
      "modelNumber": "CH-48LCFC/I",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-48lcfc-w",
      "modelNumber": "CH-48LCFC-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-d24msphwm-230vi",
      "modelNumber": "CH-D24MSPHWM-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24dkt230vi",
      "modelNumber": "CH-24DKT230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rls24mia-230vi",
      "modelNumber": "CH-RLS24MIA-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pq24ahu",
      "modelNumber": "CH-PQ24AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-os-el09alp230vi",
      "modelNumber": "OS -EL09ALP230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs18mahu",
      "modelNumber": "CH-RS18MAHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-m24ahu",
      "modelNumber": "CH-M24AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-m24ahu-w",
      "modelNumber": "CH-M24AHU-W",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-pq36ahu",
      "modelNumber": "CH-PQ36AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-rsh60lcfc",
      "modelNumber": "CH-RSH60LCFC",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m18ahu",
      "modelNumber": "CH-M18AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-m18ahu-w",
      "modelNumber": "CH-M18AHU-W",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-rs48lcahu",
      "modelNumber": "CH-RS48LCAHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-rs36lcdt-hs",
      "modelNumber": "CH-RS36LCDT-HS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-mp30ahu24v",
      "modelNumber": "CH-MP30AHU24V",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-36lcfc-w",
      "modelNumber": "CH-36LCFC-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-36lcfci",
      "modelNumber": "CH-36LCFC/I",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-stm24ahu24v",
      "modelNumber": "CH-STM24AHU24V",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-stm30ahu24v",
      "modelNumber": "CH-STM30AHU24V",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-pq55ahu",
      "modelNumber": "CH-PQ55AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-pq48ahu",
      "modelNumber": "CH-PQ48AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-60lcfci",
      "modelNumber": "CH-60LCFC/I",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-60lcfc-w",
      "modelNumber": "CH-60LCFC-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-pq33ahu",
      "modelNumber": "CH-PQ33AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-rs36lcahu",
      "modelNumber": "CH-RS36LCAHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-acl18-24b",
      "modelNumber": "CH-ACL18-24B",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-rs48lcdt-hs",
      "modelNumber": "CH-RS48LCDT-HS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rh48lcct",
      "modelNumber": "CH-RH48LCCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rsh48lcct",
      "modelNumber": "CH-RSH48LCCT",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs30mahu",
      "modelNumber": "CH-RS30MAHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-stm36ahu24v",
      "modelNumber": "CH-STM36AHU24V",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-n48lcct-230vi",
      "modelNumber": "CH-N48LCCT-230VI",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-48lcct-w",
      "modelNumber": "CH-48LCCT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-mcl48-60c",
      "modelNumber": "CH-MCL48-60C",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-36lcdtui",
      "modelNumber": "CH-36LCDTU/I",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-36lcdt-w",
      "modelNumber": "CH-36LCDT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-mp24ahu24v",
      "modelNumber": "CH-MP24AHU24V",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-acl30-36b",
      "modelNumber": "CH-ACL30-36B",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-acl18-24a",
      "modelNumber": "CH-ACL18-24A",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-mp60ahu24v",
      "modelNumber": "CH-MP60AHU24V",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-acl30-36c",
      "modelNumber": "CH-ACL30-36C",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-60lcdt-w",
      "modelNumber": "CH-60LCDT-W",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-rs60lcdt-hs",
      "modelNumber": "CH-RS60LCDT-HS",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-60lcdtui",
      "modelNumber": "CH-60LCDTU/I",
      "brandId": "brand-cooperhunter",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-60ahu",
      "modelNumber": "CH-60AHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-60ahu-w",
      "modelNumber": "CH-60AHU-W",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-acl48-60d",
      "modelNumber": "CH-ACL48-60D",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-rs60lcahu",
      "modelNumber": "CH-RS60LCAHU",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    },
    {
      "id": "iu-ch-mp48ahu24v",
      "modelNumber": "CH-MP48AHU24V",
      "brandId": "brand-cooperhunter",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-09mastwm-230vi",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-09mastwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-pro09mastwm-230vi",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-pro09mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-pro09mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-rh09mastwm-230vi",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-rh09mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-rh09mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-rsh09mmc",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-rsh09mmc",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-rsh09mmc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.2,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr06f9-230vo-ch-06mastwm-230vi",
      "slug": "cooperhunter-ch-hpr06f9-230vo-ch-06mastwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr06f9-230vo",
      "indoorUnitId": "iu-ch-06mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-b09molvwm-230vi",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-b09molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-b09molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-09molvwm-230vi",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-09molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-rsh09mmc",
      "slug": "cooperhunter-ch-res09-230vo-ch-rsh09mmc",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-rsh09mmc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 13.9,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-rb09molvwm-230vi",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-rb09molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-rb09molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-r09molvwm-230vi",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-r09molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-r09molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-rh09mastwm-230vi",
      "slug": "cooperhunter-ch-res09-230vo-ch-rh09mastwm-230vi",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-rh09mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.8,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-pro09mastwm-230vi",
      "slug": "cooperhunter-ch-res09-230vo-ch-pro09mastwm-230vi",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-pro09mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.8,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-pro12mastwm-230vi",
      "slug": "cooperhunter-ch-res12-230vo-ch-pro12mastwm-230vi",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-pro12mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-09mastwm-230vi",
      "slug": "cooperhunter-ch-es09-230vo-ch-09mastwm-230vi",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-rh12mastwm-230vi",
      "slug": "cooperhunter-ch-res12-230vo-ch-rh12mastwm-230vi",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-rh12mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp06f9-230vo-ch-rh06mastwm-230vi",
      "slug": "cooperhunter-ch-rhp06f9-230vo-ch-rh06mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp06f9-230vo",
      "indoorUnitId": "iu-ch-rh06mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp06f9-230vo-ch-pro06mastwm-230vi",
      "slug": "cooperhunter-ch-rhp06f9-230vo-ch-pro06mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp06f9-230vo",
      "indoorUnitId": "iu-ch-pro06mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12mastwm-230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12mastwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-rh12mastwm-230vi",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-rh12mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-rh12mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-pro12mastwm-230vi",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-pro12mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-pro12mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp06f9-230vo-ch-r06molvwm-230vi",
      "slug": "cooperhunter-ch-rhp06f9-230vo-ch-r06molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp06f9-230vo",
      "indoorUnitId": "iu-ch-r06molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp06f9-230vo-ch-rb06molvwm-230vi",
      "slug": "cooperhunter-ch-rhp06f9-230vo-ch-rb06molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp06f9-230vo",
      "indoorUnitId": "iu-ch-rb06molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r18mes-230vo-iu-43324",
      "slug": "cooperhunter-ch-r18mes-230vo-iu-43324",
      "modelId": "model-cooperhunter-ch-r18mes-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r18mes-230vo",
      "indoorUnitId": "iu-iu-43324",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rvhp19m-230vo-iu-43444",
      "slug": "cooperhunter-ch-rvhp19m-230vo-iu-43444",
      "modelId": "model-cooperhunter-ch-rvhp19m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rvhp19m-230vo",
      "indoorUnitId": "iu-iu-43444",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r28mes-230vo-iu-43325",
      "slug": "cooperhunter-ch-r28mes-230vo-iu-43325",
      "modelId": "model-cooperhunter-ch-r28mes-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r28mes-230vo",
      "indoorUnitId": "iu-iu-43325",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12mmc-230vi",
      "slug": "cooperhunter-ch-es12-230vo-ch-12mmc-230vi",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12mmc-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-rsh12mmc",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-rsh12mmc",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-rsh12mmc",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-09dkt230vi",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-09dkt230vi",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09dkt230vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-d09msphwm-230vi",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-d09msphwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-d09msphwm-230vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-rsh12mmc",
      "slug": "cooperhunter-ch-res12-230vo-ch-rsh12mmc",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-rsh12mmc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-rb09molvwm-230vi",
      "slug": "cooperhunter-ch-res09-230vo-ch-rb09molvwm-230vi",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-rb09molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-28mes-230vo-iu-43186",
      "slug": "cooperhunter-ch-28mes-230vo-iu-43186",
      "modelId": "model-cooperhunter-ch-28mes-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-28mes-230vo",
      "indoorUnitId": "iu-iu-43186",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12mastwm-230vi",
      "slug": "cooperhunter-ch-es12-230vo-ch-12mastwm-230vi",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12mastwm-230vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-r09molvwm-230vi",
      "slug": "cooperhunter-ch-res09-230vo-ch-r09molvwm-230vi",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-r09molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-115vo-ch-rb09olvwm-115vi",
      "slug": "cooperhunter-ch-res09-115vo-ch-rb09olvwm-115vi",
      "modelId": "model-cooperhunter-ch-res09-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-115vo",
      "indoorUnitId": "iu-ch-rb09olvwm-115vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res06-115vo-ch-r06olvwm-115vi",
      "slug": "cooperhunter-ch-res06-115vo-ch-r06olvwm-115vi",
      "modelId": "model-cooperhunter-ch-res06-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res06-115vo",
      "indoorUnitId": "iu-ch-r06olvwm-115vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-115vo-ch-r09olvwm-115vi",
      "slug": "cooperhunter-ch-res09-115vo-ch-r09olvwm-115vi",
      "modelId": "model-cooperhunter-ch-res09-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-115vo",
      "indoorUnitId": "iu-ch-r09olvwm-115vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12mmc-230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12mmc-230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12mmc-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-b09molvwm-230vi",
      "slug": "cooperhunter-ch-es09-230vo-ch-b09molvwm-230vi",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-b09molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-r12molvwm-230vi",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-r12molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-r12molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-b18molvwm-230vi",
      "slug": "cooperhunter-ch-es18-230vo-ch-b18molvwm-230vi",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-b18molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r36mes-230vo-iu-43328",
      "slug": "cooperhunter-ch-r36mes-230vo-iu-43328",
      "modelId": "model-cooperhunter-ch-r36mes-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r36mes-230vo",
      "indoorUnitId": "iu-iu-43328",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-09mct1w-230vi",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-09mct1w-230vi",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09mct1w-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18molvwm-230vi",
      "slug": "cooperhunter-ch-es18-230vo-ch-18molvwm-230vi",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-09molvwm-230vi",
      "slug": "cooperhunter-ch-es09-230vo-ch-09molvwm-230vi",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-09mct1w-w",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-09mct1w-w",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09mct1w-w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-r18molvwm-230vi",
      "slug": "cooperhunter-ch-res18-230vo-ch-r18molvwm-230vi",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-r18molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rb18molvwm-230vi",
      "slug": "cooperhunter-ch-res18-230vo-ch-rb18molvwm-230vi",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rb18molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r48mes-230vo-iu-43333",
      "slug": "cooperhunter-ch-r48mes-230vo-iu-43333",
      "modelId": "model-cooperhunter-ch-r48mes-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r48mes-230vo",
      "indoorUnitId": "iu-iu-43333",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-rsh06-12mct1w",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-rsh06-12mct1w",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-rsh06-12mct1w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-rb12molvwm-230vi",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-rb12molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-rb12molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-36mes-230vo-iu-43187",
      "slug": "cooperhunter-ch-36mes-230vo-iu-43187",
      "modelId": "model-cooperhunter-ch-36mes-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-36mes-230vo",
      "indoorUnitId": "iu-iu-43187",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.9,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rsh16mmc",
      "slug": "cooperhunter-ch-res18-230vo-ch-rsh16mmc",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rsh16mmc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.8,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12msphmc-230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12msphmc-230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12msphmc-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12dkt230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12dkt230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12dkt230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-d12msphwm-230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-d12msphwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-d12msphwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rh18mastwm-230vi",
      "slug": "cooperhunter-ch-res18-230vo-ch-rh18mastwm-230vi",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rh18mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-pro18mastwm-230vi",
      "slug": "cooperhunter-ch-res18-230vo-ch-pro18mastwm-230vi",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-pro18mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-rb24molvwm-230vi",
      "slug": "cooperhunter-ch-res24-230vo-ch-rb24molvwm-230vi",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-rb24molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-r24molvwm-230vi",
      "slug": "cooperhunter-ch-res24-230vo-ch-r24molvwm-230vi",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-r24molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18mastwm-230vi",
      "slug": "cooperhunter-ch-es18-230vo-ch-18mastwm-230vi",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18mastwm-230vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr06f9-230vo-ch-06molvwm-230vi",
      "slug": "cooperhunter-ch-hpr06f9-230vo-ch-06molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr06f9-230vo",
      "indoorUnitId": "iu-ch-06molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr06f9-230vo-ch-b06molvwm-230vi",
      "slug": "cooperhunter-ch-hpr06f9-230vo-ch-b06molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr06f9-230vo",
      "indoorUnitId": "iu-ch-b06molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-48mes-230vo-iu-43188",
      "slug": "cooperhunter-ch-48mes-230vo-iu-43188",
      "modelId": "model-cooperhunter-ch-48mes-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-48mes-230vo",
      "indoorUnitId": "iu-iu-43188",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-115vo-ch-rb12olvwm-115vi",
      "slug": "cooperhunter-ch-res12-115vo-ch-rb12olvwm-115vi",
      "modelId": "model-cooperhunter-ch-res12-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-115vo",
      "indoorUnitId": "iu-ch-rb12olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.2,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-115vo-ch-r12olvwm-115vi",
      "slug": "cooperhunter-ch-res12-115vo-ch-r12olvwm-115vi",
      "modelId": "model-cooperhunter-ch-res12-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-115vo",
      "indoorUnitId": "iu-ch-r12olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.2,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12molvwm-230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12molvwm-230vi",
      "slug": "cooperhunter-ch-es12-230vo-ch-12molvwm-230vi",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-b12molvwm-230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-b12molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-b12molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-b12molvwm-230vi",
      "slug": "cooperhunter-ch-es12-230vo-ch-b12molvwm-230vi",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-b12molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-r12molvwm-230vi",
      "slug": "cooperhunter-ch-res12-230vo-ch-r12molvwm-230vi",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-r12molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-rb12molvwm-230vi",
      "slug": "cooperhunter-ch-res12-230vo-ch-rb12molvwm-230vi",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-rb12molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-115vo-ch-09olvwm-115vi",
      "slug": "cooperhunter-ch-es09-115vo-ch-09olvwm-115vi",
      "modelId": "model-cooperhunter-ch-es09-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-115vo",
      "indoorUnitId": "iu-ch-09olvwm-115vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-rh24mastwm-230vi",
      "slug": "cooperhunter-ch-res24-230vo-ch-rh24mastwm-230vi",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-rh24mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rvhp28m-230vo-iu-43445",
      "slug": "cooperhunter-ch-rvhp28m-230vo-iu-43445",
      "modelId": "model-cooperhunter-ch-rvhp28m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rvhp28m-230vo",
      "indoorUnitId": "iu-iu-43445",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-rsh06-12mct1w",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-rsh06-12mct1w",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-rsh06-12mct1w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr28m-230vo-iu-43293",
      "slug": "cooperhunter-ch-hpr28m-230vo-iu-43293",
      "modelId": "model-cooperhunter-ch-hpr28m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr28m-230vo",
      "indoorUnitId": "iu-iu-43293",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12mct1w-w",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12mct1w-w",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12mct1w-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12mct1w-230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12mct1w-230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12mct1w-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-pro24mastwm-230vi",
      "slug": "cooperhunter-ch-res24-230vo-ch-pro24mastwm-230vi",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-pro24mastwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18msphfc-230vi",
      "slug": "cooperhunter-ch-es18-230vo-ch-18msphfc-230vi",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18msphfc-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18mfc-w",
      "slug": "cooperhunter-ch-es18-230vo-ch-18mfc-w",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18mfc-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-115vo-ch-b09olvwm-115vi",
      "slug": "cooperhunter-ch-es09-115vo-ch-b09olvwm-115vi",
      "modelId": "model-cooperhunter-ch-es09-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-115vo",
      "indoorUnitId": "iu-ch-b09olvwm-115vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es06-115vo-ch-06olvwm-115vi",
      "slug": "cooperhunter-ch-es06-115vo-ch-06olvwm-115vi",
      "modelId": "model-cooperhunter-ch-es06-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es06-115vo",
      "indoorUnitId": "iu-ch-06olvwm-115vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-06olvwm-115vo-ch-06olvwm-115vi",
      "slug": "cooperhunter-ch-06olvwm-115vo-ch-06olvwm-115vi",
      "modelId": "model-cooperhunter-ch-06olvwm-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-06olvwm-115vo",
      "indoorUnitId": "iu-ch-06olvwm-115vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rvhp48m-230vo-iu-43447",
      "slug": "cooperhunter-ch-rvhp48m-230vo-iu-43447",
      "modelId": "model-cooperhunter-ch-rvhp48m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rvhp48m-230vo",
      "indoorUnitId": "iu-iu-43447",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rvhp36m-230vo-iu-43446",
      "slug": "cooperhunter-ch-rvhp36m-230vo-iu-43446",
      "modelId": "model-cooperhunter-ch-rvhp36m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rvhp36m-230vo",
      "indoorUnitId": "iu-iu-43446",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-18mes-230vo-iu-43185",
      "slug": "cooperhunter-ch-18mes-230vo-iu-43185",
      "modelId": "model-cooperhunter-ch-18mes-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-18mes-230vo",
      "indoorUnitId": "iu-iu-43185",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.9,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-115vo-ch-b12olvwm-115vi",
      "slug": "cooperhunter-ch-es12-115vo-ch-b12olvwm-115vi",
      "modelId": "model-cooperhunter-ch-es12-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-115vo",
      "indoorUnitId": "iu-ch-b12olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12msphmc-230vi",
      "slug": "cooperhunter-ch-es12-230vo-ch-12msphmc-230vi",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12msphmc-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-115vo-ch-12olvwm-115vi",
      "slug": "cooperhunter-ch-es12-115vo-ch-12olvwm-115vi",
      "modelId": "model-cooperhunter-ch-es12-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-115vo",
      "indoorUnitId": "iu-ch-12olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12msphct-230vi",
      "slug": "cooperhunter-ch-es12-230vo-ch-12msphct-230vi",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12msphct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12mct-w",
      "slug": "cooperhunter-ch-es12-230vo-ch-12mct-w",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12mct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-rh09mct",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-rh09mct",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-rh09mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.6,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-rsh09-12mct",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-rsh09-12mct",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-rsh09-12mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.6,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-09mct1w-w",
      "slug": "cooperhunter-ch-es09-230vo-ch-09mct1w-w",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09mct1w-w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-09mct1w-230vi",
      "slug": "cooperhunter-ch-es09-230vo-ch-09mct1w-230vi",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09mct1w-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-16mmc-230vi",
      "slug": "cooperhunter-ch-es18-230vo-ch-16mmc-230vi",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-16mmc-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.4,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rel30-230vo-ch-r30melvwm-230vi",
      "slug": "cooperhunter-ch-rel30-230vo-ch-r30melvwm-230vi",
      "modelId": "model-cooperhunter-ch-rel30-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rel30-230vo",
      "indoorUnitId": "iu-ch-r30melvwm-230vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-rb24molvwm-230vi",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-rb24molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-rb24molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-24molvwm-230vi",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-24molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-b24molvwm-230vi",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-b24molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-b24molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-r24molvwm-230vi",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-r24molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-r24molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12msphct-230vi",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12msphct-230vi",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12msphct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12mct-w",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12mct-w",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12mct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rsh18mfc",
      "slug": "cooperhunter-ch-res18-230vo-ch-rsh18mfc",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rsh18mfc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rvhp55m-230vo-iu-43448",
      "slug": "cooperhunter-ch-rvhp55m-230vo-iu-43448",
      "modelId": "model-cooperhunter-ch-rvhp55m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rvhp55m-230vo",
      "indoorUnitId": "iu-iu-43448",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rsh18mct1w",
      "slug": "cooperhunter-ch-res18-230vo-ch-rsh18mct1w",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rsh18mct1w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-rh12mct",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-rh12mct",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-rh12mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-rsh09-12mct",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-rsh09-12mct",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-rsh09-12mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr36m-230vo-iu-43295",
      "slug": "cooperhunter-ch-hpr36m-230vo-iu-43295",
      "modelId": "model-cooperhunter-ch-hpr36m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr36m-230vo",
      "indoorUnitId": "iu-iu-43295",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-rsh06-12mct1w",
      "slug": "cooperhunter-ch-res09-230vo-ch-rsh06-12mct1w",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-rsh06-12mct1w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.1,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-rsh06-12mct1w",
      "slug": "cooperhunter-ch-res12-230vo-ch-rsh06-12mct1w",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-rsh06-12mct1w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-rsh24mct",
      "slug": "cooperhunter-ch-res24-230vo-ch-rsh24mct",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-rsh24mct",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp06f9-230vo-ch-rsh06-12mct1w",
      "slug": "cooperhunter-ch-rhp06f9-230vo-ch-rsh06-12mct1w",
      "modelId": "model-cooperhunter-ch-rhp06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp06f9-230vo",
      "indoorUnitId": "iu-ch-rsh06-12mct1w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12mct1w-230vi",
      "slug": "cooperhunter-ch-es12-230vo-ch-12mct1w-230vi",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12mct1w-230vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12mct1w-w",
      "slug": "cooperhunter-ch-es12-230vo-ch-12mct1w-w",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12mct1w-w",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-24mastwm-230vi",
      "slug": "cooperhunter-ch-es24-230vo-ch-24mastwm-230vi",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr06f9-230vo-ch-06mct1w-230vi",
      "slug": "cooperhunter-ch-hpr06f9-230vo-ch-06mct1w-230vi",
      "modelId": "model-cooperhunter-ch-hpr06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr06f9-230vo",
      "indoorUnitId": "iu-ch-06mct1w-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-06mct1w-230vi",
      "slug": "cooperhunter-ch-es09-230vo-ch-06mct1w-230vi",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-06mct1w-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-rh24mct",
      "slug": "cooperhunter-ch-res24-230vo-ch-rh24mct",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-rh24mct",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-b18molvwm-230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-b18molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-b18molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18molvwm-230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18molvwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr06f9-230vo-ch-06mct1w-w",
      "slug": "cooperhunter-ch-hpr06f9-230vo-ch-06mct1w-w",
      "modelId": "model-cooperhunter-ch-hpr06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr06f9-230vo",
      "indoorUnitId": "iu-ch-06mct1w-w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr55m-230vo-iu-43297",
      "slug": "cooperhunter-ch-hpr55m-230vo-iu-43297",
      "modelId": "model-cooperhunter-ch-hpr55m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr55m-230vo",
      "indoorUnitId": "iu-iu-43297",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr19m-230vo-iu-43281",
      "slug": "cooperhunter-ch-hpr19m-230vo-iu-43281",
      "modelId": "model-cooperhunter-ch-hpr19m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr19m-230vo",
      "indoorUnitId": "iu-iu-43281",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18mct1w-230vi",
      "slug": "cooperhunter-ch-es18-230vo-ch-18mct1w-230vi",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18mct1w-230vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18mct1w-w",
      "slug": "cooperhunter-ch-es18-230vo-ch-18mct1w-w",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18mct1w-w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr48m-230vo-iu-43296",
      "slug": "cooperhunter-ch-hpr48m-230vo-iu-43296",
      "modelId": "model-cooperhunter-ch-hpr48m-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr48m-230vo",
      "indoorUnitId": "iu-iu-43296",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rb18molvwm-230vi",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rb18molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rb18molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-r18molvwm-230vi",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-r18molvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-r18molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny09mia-230vo-ch-ny09mia-sk230v",
      "slug": "cooperhunter-ch-ny09mia-230vo-ch-ny09mia-sk230v",
      "modelId": "model-cooperhunter-ch-ny09mia-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny09mia-230vo",
      "indoorUnitId": "iu-ch-ny09mia-sk230v",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny09mia-230vo-ch-09molv-230vi",
      "slug": "cooperhunter-ch-ny09mia-230vo-ch-09molv-230vi",
      "modelId": "model-cooperhunter-ch-ny09mia-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny09mia-230vo",
      "indoorUnitId": "iu-ch-09molv-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny09mia-230vo-ch-ny09mia-230vi",
      "slug": "cooperhunter-ch-ny09mia-230vo-ch-ny09mia-230vi",
      "modelId": "model-cooperhunter-ch-ny09mia-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny09mia-230vo",
      "indoorUnitId": "iu-ch-ny09mia-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-rh09mct",
      "slug": "cooperhunter-ch-res09-230vo-ch-rh09mct",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-rh09mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.6,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-rsh09-12mct",
      "slug": "cooperhunter-ch-res09-230vo-ch-rsh09-12mct",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-rsh09-12mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.6,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny09mia-115vo-ch-ny09mia-sk115v",
      "slug": "cooperhunter-ch-ny09mia-115vo-ch-ny09mia-sk115v",
      "modelId": "model-cooperhunter-ch-ny09mia-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny09mia-115vo",
      "indoorUnitId": "iu-ch-ny09mia-sk115v",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-n24msphct-230vi",
      "slug": "cooperhunter-ch-es24-230vo-ch-n24msphct-230vi",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-n24msphct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny09mia-115vo-ch-ny09mia-115vi",
      "slug": "cooperhunter-ch-ny09mia-115vo-ch-ny09mia-115vi",
      "modelId": "model-cooperhunter-ch-ny09mia-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny09mia-115vo",
      "indoorUnitId": "iu-ch-ny09mia-115vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rls06mia-115vo-ch-rls06mia-115vi",
      "slug": "cooperhunter-ch-rls06mia-115vo-ch-rls06mia-115vi",
      "modelId": "model-cooperhunter-ch-rls06mia-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rls06mia-115vo",
      "indoorUnitId": "iu-ch-rls06mia-115vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rls09mia-115vo-ch-rls09mia-115vi",
      "slug": "cooperhunter-ch-rls09mia-115vo-ch-rls09mia-115vi",
      "modelId": "model-cooperhunter-ch-rls09mia-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rls09mia-115vo",
      "indoorUnitId": "iu-ch-rls09mia-115vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-24mastwm-230vi",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-24mastwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18mastwm-230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18mastwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny06mia-115vo-ch-ny06mia-sk115v",
      "slug": "cooperhunter-ch-ny06mia-115vo-ch-ny06mia-sk115v",
      "modelId": "model-cooperhunter-ch-ny06mia-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny06mia-115vo",
      "indoorUnitId": "iu-ch-ny06mia-sk115v",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny09mia-115vo-ch-09olv-115vi",
      "slug": "cooperhunter-ch-ny09mia-115vo-ch-09olv-115vi",
      "modelId": "model-cooperhunter-ch-ny09mia-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny09mia-115vo",
      "indoorUnitId": "iu-ch-09olv-115vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny06mia-115vo-ch-ny06mia-115vi",
      "slug": "cooperhunter-ch-ny06mia-115vo-ch-ny06mia-115vi",
      "modelId": "model-cooperhunter-ch-ny06mia-115vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny06mia-115vo",
      "indoorUnitId": "iu-ch-ny06mia-115vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-24mct-w",
      "slug": "cooperhunter-ch-es24-230vo-ch-24mct-w",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24mct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp15-230vo-ch-rh15mastwm-230vi",
      "slug": "cooperhunter-ch-rhp15-230vo-ch-rh15mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp15-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp15-230vo",
      "indoorUnitId": "iu-ch-rh15mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-pro18mastwm-230vi",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-pro18mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-pro18mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp15-230vo-ch-pro15mastwm-230vi",
      "slug": "cooperhunter-ch-rhp15-230vo-ch-pro15mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp15-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp15-230vo",
      "indoorUnitId": "iu-ch-pro15mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rh18mastwm-230vi",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rh18mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rh18mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp06f9-230vo-ch-rs06mdt-ms",
      "slug": "cooperhunter-ch-rhp06f9-230vo-ch-rs06mdt-ms",
      "modelId": "model-cooperhunter-ch-rhp06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp06f9-230vo",
      "indoorUnitId": "iu-ch-rs06mdt-ms",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp06f9-230vo-ch-rs06-12mdt-ms",
      "slug": "cooperhunter-ch-rhp06f9-230vo-ch-rs06-12mdt-ms",
      "modelId": "model-cooperhunter-ch-rhp06f9-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp06f9-230vo",
      "indoorUnitId": "iu-ch-rs06-12mdt-ms",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-rs09mdt-ms",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-rs09mdt-ms",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-rs09mdt-ms",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp09-230vo-ch-rs06-12mdt-ms",
      "slug": "cooperhunter-ch-rhp09-230vo-ch-rs06-12mdt-ms",
      "modelId": "model-cooperhunter-ch-rhp09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp09-230vo",
      "indoorUnitId": "iu-ch-rs06-12mdt-ms",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-24mfc-w",
      "slug": "cooperhunter-ch-es24-230vo-ch-24mfc-w",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24mfc-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-24msphfc-230vi",
      "slug": "cooperhunter-ch-es24-230vo-ch-24msphfc-230vi",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24msphfc-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rls09mia-230vo-ch-rls09mia-230vi",
      "slug": "cooperhunter-ch-rls09mia-230vo-ch-rls09mia-230vi",
      "modelId": "model-cooperhunter-ch-rls09mia-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rls09mia-230vo",
      "indoorUnitId": "iu-ch-rls09mia-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp36lcu-230vo-ch-rsh36lcct",
      "slug": "cooperhunter-ch-rhp36lcu-230vo-ch-rsh36lcct",
      "modelId": "model-cooperhunter-ch-rhp36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp36lcu-230vo",
      "indoorUnitId": "iu-ch-rsh36lcct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp36lcu-230vo-ch-rh36lcct",
      "slug": "cooperhunter-ch-rhp36lcu-230vo-ch-rh36lcct",
      "modelId": "model-cooperhunter-ch-rhp36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp36lcu-230vo",
      "indoorUnitId": "iu-ch-rh36lcct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-rsh24mfc",
      "slug": "cooperhunter-ch-res24-230vo-ch-rsh24mfc",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-rsh24mfc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-rh12mct",
      "slug": "cooperhunter-ch-res12-230vo-ch-rh12mct",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-rh12mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-rsh09-12mct",
      "slug": "cooperhunter-ch-res12-230vo-ch-rsh09-12mct",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-rsh09-12mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-rh24mastwm-230vi",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-rh24mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-rh24mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-24molvwm-230vi",
      "slug": "cooperhunter-ch-es24-230vo-ch-24molvwm-230vi",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-el30-230vo-ch-30elvwm-230vi",
      "slug": "cooperhunter-ch-el30-230vo-ch-30elvwm-230vi",
      "modelId": "model-cooperhunter-ch-el30-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-el30-230vo",
      "indoorUnitId": "iu-ch-30elvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-b24molvwm-230vi",
      "slug": "cooperhunter-ch-es24-230vo-ch-b24molvwm-230vi",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-b24molvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-pro24mastwm-230vi",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-pro24mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-pro24mastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rh18mct",
      "slug": "cooperhunter-ch-res18-230vo-ch-rh18mct",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rh18mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-rsh24mct",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-rsh24mct",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-rsh24mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-rh24mct",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-rh24mct",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-rh24mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rsh18mct",
      "slug": "cooperhunter-ch-res18-230vo-ch-rsh18mct",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rsh18mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rsh18mct1w",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rsh18mct1w",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rsh18mct1w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.6,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18mct-w",
      "slug": "cooperhunter-ch-es18-230vo-ch-18mct-w",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18mct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-09mct-w",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-09mct-w",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09mct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rel30-230vo-ch-rh30mastwm-230vi",
      "slug": "cooperhunter-ch-rel30-230vo-ch-rh30mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rel30-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rel30-230vo",
      "indoorUnitId": "iu-ch-rh30mastwm-230vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-n24msphct-230vi",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-n24msphct-230vi",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-n24msphct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-24mct-w",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-24mct-w",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24mct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18mfc-w",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18mfc-w",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18mfc-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-09msphct-230vi",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-09msphct-230vi",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09msphct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18msphfc-230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18msphfc-230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18msphfc-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-24mfc-w",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-24mfc-w",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24mfc-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18msphct-230vi",
      "slug": "cooperhunter-ch-es18-230vo-ch-18msphct-230vi",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18msphct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-24msphfc-230vi",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-24msphfc-230vi",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24msphfc-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rel30-230vo-ch-pro30mastwm-230vi",
      "slug": "cooperhunter-ch-rel30-230vo-ch-pro30mastwm-230vi",
      "modelId": "model-cooperhunter-ch-rel30-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rel30-230vo",
      "indoorUnitId": "iu-ch-pro30mastwm-230vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rsh18mfc",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rsh18mfc",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rsh18mfc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.4,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-rsh24mfc",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-rsh24mfc",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-rsh24mfc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.4,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-16mmc-230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-16mmc-230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-16mmc-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-m09dtui",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-m09dtui",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-m09dtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr09-230vo-ch-09mdt-w",
      "slug": "cooperhunter-ch-hpr09-230vo-ch-09mdt-w",
      "modelId": "model-cooperhunter-ch-hpr09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09mdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rs18mdt-ms",
      "slug": "cooperhunter-ch-res18-230vo-ch-rs18mdt-ms",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rs18mdt-ms",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-rs12mdt-ms",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-rs12mdt-ms",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-rs12mdt-ms",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-18mdt-w",
      "slug": "cooperhunter-ch-es18-230vo-ch-18mdt-w",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18mdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-09msphct-230vi",
      "slug": "cooperhunter-ch-es09-230vo-ch-09msphct-230vi",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09msphct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rh18mct",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rh18mct",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rh18mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp33-230vo-ch-r33holvwm-230vi",
      "slug": "cooperhunter-ch-rhp33-230vo-ch-r33holvwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp33-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp33-230vo",
      "indoorUnitId": "iu-ch-r33holvwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rsh18mct",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rsh18mct",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rsh18mct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rsh16mmc",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rsh16mmc",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rsh16mmc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp12-230vo-ch-rs06-12mdt-ms",
      "slug": "cooperhunter-ch-rhp12-230vo-ch-rs06-12mdt-ms",
      "modelId": "model-cooperhunter-ch-rhp12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp12-230vo",
      "indoorUnitId": "iu-ch-rs06-12mdt-ms",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r36lcu-230vo-ch-rh36lcct",
      "slug": "cooperhunter-ch-r36lcu-230vo-ch-rh36lcct",
      "modelId": "model-cooperhunter-ch-r36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r36lcu-230vo",
      "indoorUnitId": "iu-ch-rh36lcct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18msphct-230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18msphct-230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18msphct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r36lcu-230vo-ch-rsh36lcct",
      "slug": "cooperhunter-ch-r36lcu-230vo-ch-rsh36lcct",
      "modelId": "model-cooperhunter-ch-r36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r36lcu-230vo",
      "indoorUnitId": "iu-ch-rsh36lcct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-el30-230vo-ch-30astwm-230vi",
      "slug": "cooperhunter-ch-el30-230vo-ch-30astwm-230vi",
      "modelId": "model-cooperhunter-ch-el30-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-el30-230vo",
      "indoorUnitId": "iu-ch-30astwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp36lcu-230vo-ch-rsh36lcfc",
      "slug": "cooperhunter-ch-rhp36lcu-230vo-ch-rsh36lcfc",
      "modelId": "model-cooperhunter-ch-rhp36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp36lcu-230vo",
      "indoorUnitId": "iu-ch-rsh36lcfc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-09mct-w",
      "slug": "cooperhunter-ch-es09-230vo-ch-09mct-w",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09mct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-m18dtui",
      "slug": "cooperhunter-ch-es18-230vo-ch-m18dtui",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-m18dtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18mct-w",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18mct-w",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18mct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r48lcu-230vo-ch-rsh48lcfc",
      "slug": "cooperhunter-ch-r48lcu-230vo-ch-rsh48lcfc",
      "modelId": "model-cooperhunter-ch-r48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r48lcu-230vo",
      "indoorUnitId": "iu-ch-rsh48lcfc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18mct1w-w",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18mct1w-w",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18mct1w-w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18mct1w-230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18mct1w-230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18mct1w-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-rs24mahu",
      "slug": "cooperhunter-ch-res24-230vo-ch-rs24mahu",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-rs24mahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.7,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp33-230vo-ch-rh33hastwm-230vi",
      "slug": "cooperhunter-ch-rhp33-230vo-ch-rh33hastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp33-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp33-230vo",
      "indoorUnitId": "iu-ch-rh33hastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-rs09mdt-ms",
      "slug": "cooperhunter-ch-res09-230vo-ch-rs09mdt-ms",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-rs09mdt-ms",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res09-230vo-ch-rs06-12mdt-ms",
      "slug": "cooperhunter-ch-res09-230vo-ch-rs06-12mdt-ms",
      "modelId": "model-cooperhunter-ch-res09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res09-230vo",
      "indoorUnitId": "iu-ch-rs06-12mdt-ms",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-ny18mia-230vo-ch-18molv-230vi",
      "slug": "cooperhunter-ch-ny18mia-230vo-ch-18molv-230vi",
      "modelId": "model-cooperhunter-ch-ny18mia-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-ny18mia-230vo",
      "indoorUnitId": "iu-ch-18molv-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-12mdt-w",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-12mdt-w",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12mdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr35-230vo-ch-35hastwm-230vi",
      "slug": "cooperhunter-ch-hpr35-230vo-ch-35hastwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr35-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr35-230vo",
      "indoorUnitId": "iu-ch-35hastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp33-230vo-ch-pro33hastwm-230vi",
      "slug": "cooperhunter-ch-rhp33-230vo-ch-pro33hastwm-230vi",
      "modelId": "model-cooperhunter-ch-rhp33-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp33-230vo",
      "indoorUnitId": "iu-ch-pro33hastwm-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr12-230vo-ch-m12dtui",
      "slug": "cooperhunter-ch-hpr12-230vo-ch-m12dtui",
      "modelId": "model-cooperhunter-ch-hpr12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-m12dtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18dkt230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18dkt230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18dkt230vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr36lcu-230vo-ch-n36lcct-230vi",
      "slug": "cooperhunter-ch-nhpr36lcu-230vo-ch-n36lcct-230vi",
      "modelId": "model-cooperhunter-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-n36lcct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr36lcu-230vo-ch-36lcct-w",
      "slug": "cooperhunter-ch-nhpr36lcu-230vo-ch-36lcct-w",
      "modelId": "model-cooperhunter-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-36lcct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-d18msphwm-230vi",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-d18msphwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-d18msphwm-230vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq18-230vo-ch-stm18ahu24v",
      "slug": "cooperhunter-ch-pq18-230vo-ch-stm18ahu24v",
      "modelId": "model-cooperhunter-ch-pq18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq18-230vo",
      "indoorUnitId": "iu-ch-stm18ahu24v",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.3,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-m09dtui",
      "slug": "cooperhunter-ch-es09-230vo-ch-m09dtui",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-m09dtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-24mdt-w",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-24mdt-w",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24mdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es09-230vo-ch-09mdt-w",
      "slug": "cooperhunter-ch-es09-230vo-ch-09mdt-w",
      "modelId": "model-cooperhunter-ch-es09-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09mdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-m24dtui",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-m24dtui",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-m24dtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq18-230vo-ch-pq18ahu",
      "slug": "cooperhunter-ch-pq18-230vo-ch-pq18ahu",
      "modelId": "model-cooperhunter-ch-pq18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq18-230vo",
      "indoorUnitId": "iu-ch-pq18ahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-12mdt-w",
      "slug": "cooperhunter-ch-es12-230vo-ch-12mdt-w",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12mdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res24-230vo-ch-rs24mdt-hs",
      "slug": "cooperhunter-ch-res24-230vo-ch-rs24mdt-hs",
      "modelId": "model-cooperhunter-ch-res24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res24-230vo",
      "indoorUnitId": "iu-ch-rs24mdt-hs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-rs12mdt-ms",
      "slug": "cooperhunter-ch-res12-230vo-ch-rs12mdt-ms",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-rs12mdt-ms",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res12-230vo-ch-rs06-12mdt-ms",
      "slug": "cooperhunter-ch-res12-230vo-ch-rs06-12mdt-ms",
      "modelId": "model-cooperhunter-ch-res12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res12-230vo",
      "indoorUnitId": "iu-ch-rs06-12mdt-ms",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-24mdt-w",
      "slug": "cooperhunter-ch-es24-230vo-ch-24mdt-w",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24mdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-m24dtui",
      "slug": "cooperhunter-ch-es24-230vo-ch-m24dtui",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-m24dtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es12-230vo-ch-m12dtui",
      "slug": "cooperhunter-ch-es12-230vo-ch-m12dtui",
      "modelId": "model-cooperhunter-ch-es12-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es12-230vo",
      "indoorUnitId": "iu-ch-m12dtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-rs24mdt-hs",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-rs24mdt-hs",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-rs24mdt-hs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-n48lcu-230vo-ch-48lcfci",
      "slug": "cooperhunter-ch-n48lcu-230vo-ch-48lcfci",
      "modelId": "model-cooperhunter-ch-n48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-n48lcu-230vo",
      "indoorUnitId": "iu-ch-48lcfci",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-n48lcu-230vo-ch-48lcfc-w",
      "slug": "cooperhunter-ch-n48lcu-230vo-ch-48lcfc-w",
      "modelId": "model-cooperhunter-ch-n48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-n48lcu-230vo",
      "indoorUnitId": "iu-ch-48lcfc-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-d24msphwm-230vi",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-d24msphwm-230vi",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-d24msphwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-24dkt230vi",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-24dkt230vi",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24dkt230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp24-230vo-ch-rs24mahu",
      "slug": "cooperhunter-ch-rhp24-230vo-ch-rs24mahu",
      "modelId": "model-cooperhunter-ch-rhp24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp24-230vo",
      "indoorUnitId": "iu-ch-rs24mahu",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rls24mia-230vo-ch-rls24mia-230vi",
      "slug": "cooperhunter-ch-rls24mia-230vo-ch-rls24mia-230vi",
      "modelId": "model-cooperhunter-ch-rls24mia-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rls24mia-230vo",
      "indoorUnitId": "iu-ch-rls24mia-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.7,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq24-230vo-ch-pq24ahu",
      "slug": "cooperhunter-ch-pq24-230vo-ch-pq24ahu",
      "modelId": "model-cooperhunter-ch-pq24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq24-230vo",
      "indoorUnitId": "iu-ch-pq24ahu",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp48lcu-230vo-ch-rsh48lcfc",
      "slug": "cooperhunter-ch-rhp48lcu-230vo-ch-rsh48lcfc",
      "modelId": "model-cooperhunter-ch-rhp48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp48lcu-230vo",
      "indoorUnitId": "iu-ch-rsh48lcfc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-os-el09alp230vo-os-el09alp230vi",
      "slug": "cooperhunter-os-el09alp230vo-os-el09alp230vi",
      "modelId": "model-cooperhunter-os-el09alp230vo",
      "outdoorUnitId": "ou-cooperhunter-os-el09alp230vo",
      "indoorUnitId": "iu-os-el09alp230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-res18-230vo-ch-rs18mahu",
      "slug": "cooperhunter-ch-res18-230vo-ch-rs18mahu",
      "modelId": "model-cooperhunter-ch-res18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-res18-230vo",
      "indoorUnitId": "iu-ch-rs18mahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-m24ahu",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-m24ahu",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-m24ahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr24-230vo-ch-m24ahu-w",
      "slug": "cooperhunter-ch-hpr24-230vo-ch-m24ahu-w",
      "modelId": "model-cooperhunter-ch-hpr24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-m24ahu-w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq36x-230vo-ch-pq36ahu",
      "slug": "cooperhunter-ch-pq36x-230vo-ch-pq36ahu",
      "modelId": "model-cooperhunter-ch-pq36x-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq36x-230vo",
      "indoorUnitId": "iu-ch-pq36ahu",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-m24ahu",
      "slug": "cooperhunter-ch-es24-230vo-ch-m24ahu",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-m24ahu",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rs18mahu",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rs18mahu",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rs18mahu",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp60lcu-230vo-ch-rsh60lcfc",
      "slug": "cooperhunter-ch-rhp60lcu-230vo-ch-rsh60lcfc",
      "modelId": "model-cooperhunter-ch-rhp60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp60lcu-230vo",
      "indoorUnitId": "iu-ch-rsh60lcfc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-m18dtui",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-m18dtui",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-m18dtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-18mdt-w",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-18mdt-w",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18mdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es24-230vo-ch-m24ahu-w",
      "slug": "cooperhunter-ch-es24-230vo-ch-m24ahu-w",
      "modelId": "model-cooperhunter-ch-es24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es24-230vo",
      "indoorUnitId": "iu-ch-m24ahu-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp18-230vo-ch-rs18mdt-ms",
      "slug": "cooperhunter-ch-rhp18-230vo-ch-rs18mdt-ms",
      "modelId": "model-cooperhunter-ch-rhp18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp18-230vo",
      "indoorUnitId": "iu-ch-rs18mdt-ms",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-m18ahu",
      "slug": "cooperhunter-ch-es18-230vo-ch-m18ahu",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-m18ahu",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-es18-230vo-ch-m18ahu-w",
      "slug": "cooperhunter-ch-es18-230vo-ch-m18ahu-w",
      "modelId": "model-cooperhunter-ch-es18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-es18-230vo",
      "indoorUnitId": "iu-ch-m18ahu-w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq36-230vo-ch-pq36ahu",
      "slug": "cooperhunter-ch-pq36-230vo-ch-pq36ahu",
      "modelId": "model-cooperhunter-ch-pq36-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq36-230vo",
      "indoorUnitId": "iu-ch-pq36ahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r48lcu-230vo-ch-rs48lcahu",
      "slug": "cooperhunter-ch-r48lcu-230vo-ch-rs48lcahu",
      "modelId": "model-cooperhunter-ch-r48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r48lcu-230vo",
      "indoorUnitId": "iu-ch-rs48lcahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp36lcu-230vo-ch-rs36lcdt-hs",
      "slug": "cooperhunter-ch-rhp36lcu-230vo-ch-rs36lcdt-hs",
      "modelId": "model-cooperhunter-ch-rhp36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp36lcu-230vo",
      "indoorUnitId": "iu-ch-rs36lcdt-hs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.7,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-alt30hp24v-230vo-ch-mp30ahu24v",
      "slug": "cooperhunter-ch-alt30hp24v-230vo-ch-mp30ahu24v",
      "modelId": "model-cooperhunter-ch-alt30hp24v-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-alt30hp24v-230vo",
      "indoorUnitId": "iu-ch-mp30ahu24v",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-m18ahu",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-m18ahu",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-m18ahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr36lcu-230vo-ch-36lcfc-w",
      "slug": "cooperhunter-ch-nhpr36lcu-230vo-ch-36lcfc-w",
      "modelId": "model-cooperhunter-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-36lcfc-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr36lcu-230vo-ch-36lcfci",
      "slug": "cooperhunter-ch-nhpr36lcu-230vo-ch-36lcfci",
      "modelId": "model-cooperhunter-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-36lcfci",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hpr18-230vo-ch-m18ahu-w",
      "slug": "cooperhunter-ch-hpr18-230vo-ch-m18ahu-w",
      "modelId": "model-cooperhunter-ch-hpr18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-m18ahu-w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq24-230vo-ch-stm24ahu24v",
      "slug": "cooperhunter-ch-pq24-230vo-ch-stm24ahu24v",
      "modelId": "model-cooperhunter-ch-pq24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq24-230vo",
      "indoorUnitId": "iu-ch-stm24ahu24v",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq33-230vo-ch-stm30ahu24v",
      "slug": "cooperhunter-ch-pq33-230vo-ch-stm30ahu24v",
      "modelId": "model-cooperhunter-ch-pq33-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq33-230vo",
      "indoorUnitId": "iu-ch-stm30ahu24v",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq55-230vo-ch-pq55ahu",
      "slug": "cooperhunter-ch-pq55-230vo-ch-pq55ahu",
      "modelId": "model-cooperhunter-ch-pq55-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq55-230vo",
      "indoorUnitId": "iu-ch-pq55ahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq48-230vo-ch-pq48ahu",
      "slug": "cooperhunter-ch-pq48-230vo-ch-pq48ahu",
      "modelId": "model-cooperhunter-ch-pq48-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq48-230vo",
      "indoorUnitId": "iu-ch-pq48ahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr60lcu-230vo-ch-60lcfci",
      "slug": "cooperhunter-ch-nhpr60lcu-230vo-ch-60lcfci",
      "modelId": "model-cooperhunter-ch-nhpr60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr60lcu-230vo",
      "indoorUnitId": "iu-ch-60lcfci",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr60lcu-230vo-ch-60lcfc-w",
      "slug": "cooperhunter-ch-nhpr60lcu-230vo-ch-60lcfc-w",
      "modelId": "model-cooperhunter-ch-nhpr60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr60lcu-230vo",
      "indoorUnitId": "iu-ch-60lcfc-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq33-230vo-ch-pq33ahu",
      "slug": "cooperhunter-ch-pq33-230vo-ch-pq33ahu",
      "modelId": "model-cooperhunter-ch-pq33-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq33-230vo",
      "indoorUnitId": "iu-ch-pq33ahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp36lcu-230vo-ch-rs36lcahu",
      "slug": "cooperhunter-ch-rhp36lcu-230vo-ch-rs36lcahu",
      "modelId": "model-cooperhunter-ch-rhp36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp36lcu-230vo",
      "indoorUnitId": "iu-ch-rs36lcahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq24-230vo-ch-acl18-24b",
      "slug": "cooperhunter-ch-pq24-230vo-ch-acl18-24b",
      "modelId": "model-cooperhunter-ch-pq24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq24-230vo",
      "indoorUnitId": "iu-ch-acl18-24b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r48lcu-230vo-ch-rs48lcdt-hs",
      "slug": "cooperhunter-ch-r48lcu-230vo-ch-rs48lcdt-hs",
      "modelId": "model-cooperhunter-ch-r48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r48lcu-230vo",
      "indoorUnitId": "iu-ch-rs48lcdt-hs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r48lcu-230vo-ch-rh48lcct",
      "slug": "cooperhunter-ch-r48lcu-230vo-ch-rh48lcct",
      "modelId": "model-cooperhunter-ch-r48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r48lcu-230vo",
      "indoorUnitId": "iu-ch-rh48lcct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-r48lcu-230vo-ch-rsh48lcct",
      "slug": "cooperhunter-ch-r48lcu-230vo-ch-rsh48lcct",
      "modelId": "model-cooperhunter-ch-r48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-r48lcu-230vo",
      "indoorUnitId": "iu-ch-rsh48lcct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rel30-230vo-ch-rs30mahu",
      "slug": "cooperhunter-ch-rel30-230vo-ch-rs30mahu",
      "modelId": "model-cooperhunter-ch-rel30-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rel30-230vo",
      "indoorUnitId": "iu-ch-rs30mahu",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr48lcu-230vo-ch-48lcfc-w",
      "slug": "cooperhunter-ch-nhpr48lcu-230vo-ch-48lcfc-w",
      "modelId": "model-cooperhunter-ch-nhpr48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr48lcu-230vo",
      "indoorUnitId": "iu-ch-48lcfc-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp48lcu-230vo-ch-rs48lcahu",
      "slug": "cooperhunter-ch-rhp48lcu-230vo-ch-rs48lcahu",
      "modelId": "model-cooperhunter-ch-rhp48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp48lcu-230vo",
      "indoorUnitId": "iu-ch-rs48lcahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr48lcu-230vo-ch-48lcfci",
      "slug": "cooperhunter-ch-nhpr48lcu-230vo-ch-48lcfci",
      "modelId": "model-cooperhunter-ch-nhpr48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr48lcu-230vo",
      "indoorUnitId": "iu-ch-48lcfci",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq36x-230vo-ch-stm36ahu24v",
      "slug": "cooperhunter-ch-pq36x-230vo-ch-stm36ahu24v",
      "modelId": "model-cooperhunter-ch-pq36x-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq36x-230vo",
      "indoorUnitId": "iu-ch-stm36ahu24v",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr48lcu-230vo-ch-n48lcct-230vi",
      "slug": "cooperhunter-ch-nhpr48lcu-230vo-ch-n48lcct-230vi",
      "modelId": "model-cooperhunter-ch-nhpr48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr48lcu-230vo",
      "indoorUnitId": "iu-ch-n48lcct-230vi",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr48lcu-230vo-ch-48lcct-w",
      "slug": "cooperhunter-ch-nhpr48lcu-230vo-ch-48lcct-w",
      "modelId": "model-cooperhunter-ch-nhpr48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr48lcu-230vo",
      "indoorUnitId": "iu-ch-48lcct-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp48lcu-230vo-ch-rs48lcdt-hs",
      "slug": "cooperhunter-ch-rhp48lcu-230vo-ch-rs48lcdt-hs",
      "modelId": "model-cooperhunter-ch-rhp48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp48lcu-230vo",
      "indoorUnitId": "iu-ch-rs48lcdt-hs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp48lcu-230vo-ch-rsh48lcct",
      "slug": "cooperhunter-ch-rhp48lcu-230vo-ch-rsh48lcct",
      "modelId": "model-cooperhunter-ch-rhp48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp48lcu-230vo",
      "indoorUnitId": "iu-ch-rsh48lcct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp48lcu-230vo-ch-rh48lcct",
      "slug": "cooperhunter-ch-rhp48lcu-230vo-ch-rh48lcct",
      "modelId": "model-cooperhunter-ch-rhp48lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp48lcu-230vo",
      "indoorUnitId": "iu-ch-rh48lcct",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq48-230vo-ch-mcl48-60c",
      "slug": "cooperhunter-ch-pq48-230vo-ch-mcl48-60c",
      "modelId": "model-cooperhunter-ch-pq48-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq48-230vo",
      "indoorUnitId": "iu-ch-mcl48-60c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-hyp36lcuo-ch-36lcdtui",
      "slug": "cooperhunter-ch-hyp36lcuo-ch-36lcdtui",
      "modelId": "model-cooperhunter-ch-hyp36lcuo",
      "outdoorUnitId": "ou-cooperhunter-ch-hyp36lcuo",
      "indoorUnitId": "iu-ch-36lcdtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr36lcu-230vo-ch-36lcdt-w",
      "slug": "cooperhunter-ch-nhpr36lcu-230vo-ch-36lcdt-w",
      "modelId": "model-cooperhunter-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-36lcdt-w",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr36lcu-230vo-ch-36lcdtui",
      "slug": "cooperhunter-ch-nhpr36lcu-230vo-ch-36lcdtui",
      "modelId": "model-cooperhunter-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-36lcdtui",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-alt24hp24v-230vo-ch-mp24ahu24v",
      "slug": "cooperhunter-ch-alt24hp24v-230vo-ch-mp24ahu24v",
      "modelId": "model-cooperhunter-ch-alt24hp24v-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-alt24hp24v-230vo",
      "indoorUnitId": "iu-ch-mp24ahu24v",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq33-230vo-ch-acl30-36b",
      "slug": "cooperhunter-ch-pq33-230vo-ch-acl30-36b",
      "modelId": "model-cooperhunter-ch-pq33-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq33-230vo",
      "indoorUnitId": "iu-ch-acl30-36b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq18-230vo-ch-acl18-24a",
      "slug": "cooperhunter-ch-pq18-230vo-ch-acl18-24a",
      "modelId": "model-cooperhunter-ch-pq18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq18-230vo",
      "indoorUnitId": "iu-ch-acl18-24a",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq18-230vo-ch-acl18-24b",
      "slug": "cooperhunter-ch-pq18-230vo-ch-acl18-24b",
      "modelId": "model-cooperhunter-ch-pq18-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq18-230vo",
      "indoorUnitId": "iu-ch-acl18-24b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-alt60hp24v-230vo-ch-mp60ahu24v",
      "slug": "cooperhunter-ch-alt60hp24v-230vo-ch-mp60ahu24v",
      "modelId": "model-cooperhunter-ch-alt60hp24v-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-alt60hp24v-230vo",
      "indoorUnitId": "iu-ch-mp60ahu24v",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq55-230vo-ch-mcl48-60c",
      "slug": "cooperhunter-ch-pq55-230vo-ch-mcl48-60c",
      "modelId": "model-cooperhunter-ch-pq55-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq55-230vo",
      "indoorUnitId": "iu-ch-mcl48-60c",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq24-230vo-ch-acl18-24a",
      "slug": "cooperhunter-ch-pq24-230vo-ch-acl18-24a",
      "modelId": "model-cooperhunter-ch-pq24-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq24-230vo",
      "indoorUnitId": "iu-ch-acl18-24a",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq33-230vo-ch-acl30-36c",
      "slug": "cooperhunter-ch-pq33-230vo-ch-acl30-36c",
      "modelId": "model-cooperhunter-ch-pq33-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq33-230vo",
      "indoorUnitId": "iu-ch-acl30-36c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq36x-230vo-ch-acl30-36c",
      "slug": "cooperhunter-ch-pq36x-230vo-ch-acl30-36c",
      "modelId": "model-cooperhunter-ch-pq36x-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq36x-230vo",
      "indoorUnitId": "iu-ch-acl30-36c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq36x-230vo-ch-acl30-36b",
      "slug": "cooperhunter-ch-pq36x-230vo-ch-acl30-36b",
      "modelId": "model-cooperhunter-ch-pq36x-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq36x-230vo",
      "indoorUnitId": "iu-ch-acl30-36b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr60lcu-230vo-ch-60lcdt-w",
      "slug": "cooperhunter-ch-nhpr60lcu-230vo-ch-60lcdt-w",
      "modelId": "model-cooperhunter-ch-nhpr60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr60lcu-230vo",
      "indoorUnitId": "iu-ch-60lcdt-w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp60lcu-230vo-ch-rs60lcdt-hs",
      "slug": "cooperhunter-ch-rhp60lcu-230vo-ch-rs60lcdt-hs",
      "modelId": "model-cooperhunter-ch-rhp60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp60lcu-230vo",
      "indoorUnitId": "iu-ch-rs60lcdt-hs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr60lcu-230vo-ch-60lcdtui",
      "slug": "cooperhunter-ch-nhpr60lcu-230vo-ch-60lcdtui",
      "modelId": "model-cooperhunter-ch-nhpr60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr60lcu-230vo",
      "indoorUnitId": "iu-ch-60lcdtui",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr60lcu-230vo-ch-60ahu",
      "slug": "cooperhunter-ch-nhpr60lcu-230vo-ch-60ahu",
      "modelId": "model-cooperhunter-ch-nhpr60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr60lcu-230vo",
      "indoorUnitId": "iu-ch-60ahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-nhpr60lcu-230vo-ch-60ahu-w",
      "slug": "cooperhunter-ch-nhpr60lcu-230vo-ch-60ahu-w",
      "modelId": "model-cooperhunter-ch-nhpr60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-nhpr60lcu-230vo",
      "indoorUnitId": "iu-ch-60ahu-w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-pq55-230vo-ch-acl48-60d",
      "slug": "cooperhunter-ch-pq55-230vo-ch-acl48-60d",
      "modelId": "model-cooperhunter-ch-pq55-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-pq55-230vo",
      "indoorUnitId": "iu-ch-acl48-60d",
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
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-rhp60lcu-230vo-ch-rs60lcahu",
      "slug": "cooperhunter-ch-rhp60lcu-230vo-ch-rs60lcahu",
      "modelId": "model-cooperhunter-ch-rhp60lcu-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-rhp60lcu-230vo",
      "indoorUnitId": "iu-ch-rs60lcahu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-cooperhunter-ch-alt48hp24v-230vo-ch-mp48ahu24v",
      "slug": "cooperhunter-ch-alt48hp24v-230vo-ch-mp48ahu24v",
      "modelId": "model-cooperhunter-ch-alt48hp24v-230vo",
      "outdoorUnitId": "ou-cooperhunter-ch-alt48hp24v-230vo",
      "indoorUnitId": "iu-ch-mp48ahu24v",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-cooperhunter-epa",
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
