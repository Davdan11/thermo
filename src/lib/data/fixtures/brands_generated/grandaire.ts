import type { BrandDataset } from "../../types";

export const brand_grandaireDataset: BrandDataset = {
  "brand": {
    "id": "brand-grandaire",
    "slug": "grandaire",
    "name": "Grandaire",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Grandaire",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-grandaire-epa",
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
      "id": "series-grandaire-d5f-series",
      "slug": "grandaire-d5f-series",
      "name": "D5F Series",
      "brandId": "brand-grandaire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série D5F Series de Grandaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-grandaire-d5c-series",
      "slug": "grandaire-d5c-series",
      "name": "D5C Series",
      "brandId": "brand-grandaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série D5C Series de Grandaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-grandaire-w5h-series",
      "slug": "grandaire-w5h-series",
      "name": "W5H Series",
      "brandId": "brand-grandaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série W5H Series de Grandaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-grandaire-2-stage-18-seer-hp",
      "slug": "grandaire-2-stage-18-seer-hp",
      "name": "2-STAGE 18 SEER HP",
      "brandId": "brand-grandaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 2-STAGE 18 SEER HP de Grandaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-grandaire-wdlseries",
      "slug": "grandaire-wdlseries",
      "name": "WDlseries",
      "brandId": "brand-grandaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WDlseries de Grandaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-grandaire-38m-series",
      "slug": "grandaire-38m-series",
      "name": "38M Series",
      "brandId": "brand-grandaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 38M Series de Grandaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-grandaire-2-stage-17-seer-hp",
      "slug": "grandaire-2-stage-17-seer-hp",
      "name": "2-STAGE 17 SEER HP",
      "brandId": "brand-grandaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 2-STAGE 17 SEER HP de Grandaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-grandaire-15-seer2-hp",
      "slug": "grandaire-15-seer2-hp",
      "name": "15 SEER2 HP",
      "brandId": "brand-grandaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 15 SEER2 HP de Grandaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-grandaire-d5csrah12aaj",
      "slug": "grandaire-d5csrah12aaj",
      "name": "Grandaire D5CSRAH12AAJ",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CSRAH12AAJ",
      "normalizedModelNumber": "d5csrah12aaj",
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
      "id": "model-grandaire-d5csrah24aak",
      "slug": "grandaire-d5csrah24aak",
      "name": "Grandaire D5CSRAH24AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CSRAH24AAK",
      "normalizedModelNumber": "d5csrah24aak",
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
      "id": "model-grandaire-d5cuhah18aak",
      "slug": "grandaire-d5cuhah18aak",
      "name": "Grandaire D5CUHAH18AAK",
      "seriesId": "series-grandaire-d5c-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CUHAH18AAK",
      "normalizedModelNumber": "d5cuhah18aak",
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
      "id": "model-grandaire-w5h9v18akaaa",
      "slug": "grandaire-w5h9v18akaaa",
      "name": "Grandaire W5H9V18AKAAA",
      "seriesId": "series-grandaire-w5h-series",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H9V18AKAAA",
      "normalizedModelNumber": "w5h9v18akaaa",
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
      "id": "model-grandaire-d5cshah24aak",
      "slug": "grandaire-d5cshah24aak",
      "name": "Grandaire D5CSHAH24AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CSHAH24AAK",
      "normalizedModelNumber": "d5cshah24aak",
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
      "id": "model-grandaire-d5curah18aak",
      "slug": "grandaire-d5curah18aak",
      "name": "Grandaire D5CURAH18AAK",
      "seriesId": "series-grandaire-d5c-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CURAH18AAK",
      "normalizedModelNumber": "d5curah18aak",
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
      "id": "model-grandaire-d5cuhah24aak",
      "slug": "grandaire-d5cuhah24aak",
      "name": "Grandaire D5CUHAH24AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CUHAH24AAK",
      "normalizedModelNumber": "d5cuhah24aak",
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
      "id": "model-grandaire-d5curah30aak",
      "slug": "grandaire-d5curah30aak",
      "name": "Grandaire D5CURAH30AAK",
      "seriesId": "series-grandaire-d5c-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CURAH30AAK",
      "normalizedModelNumber": "d5curah30aak",
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
      "id": "model-grandaire-d5csrah18aak",
      "slug": "grandaire-d5csrah18aak",
      "name": "Grandaire D5CSRAH18AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CSRAH18AAK",
      "normalizedModelNumber": "d5csrah18aak",
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
      "id": "model-grandaire-w5h8t24kaaa",
      "slug": "grandaire-w5h8t24kaaa",
      "name": "Grandaire W5H8T24*K*AAA*",
      "seriesId": "series-grandaire-2-stage-18-seer-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H8T24*K*AAA*",
      "normalizedModelNumber": "w5h8t24*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24600,
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
      "id": "model-grandaire-w5h9v24akaaa",
      "slug": "grandaire-w5h9v24akaaa",
      "name": "Grandaire W5H9V24AKAAA",
      "seriesId": "series-grandaire-w5h-series",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H9V24AKAAA",
      "normalizedModelNumber": "w5h9v24akaaa",
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
      "id": "model-grandaire-d5curah24aak",
      "slug": "grandaire-d5curah24aak",
      "name": "Grandaire D5CURAH24AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CURAH24AAK",
      "normalizedModelNumber": "d5curah24aak",
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
      "id": "model-grandaire-d5cshah18aak",
      "slug": "grandaire-d5cshah18aak",
      "name": "Grandaire D5CSHAH18AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CSHAH18AAK",
      "normalizedModelNumber": "d5cshah18aak",
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
      "id": "model-grandaire-w5h8t48kaaa",
      "slug": "grandaire-w5h8t48kaaa",
      "name": "Grandaire W5H8T48*K*AAA*",
      "seriesId": "series-grandaire-2-stage-18-seer-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H8T48*K*AAA*",
      "normalizedModelNumber": "w5h8t48*k*aaa*",
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
      "id": "model-grandaire-wdlcurah18abk",
      "slug": "grandaire-wdlcurah18abk",
      "name": "Grandaire WDLCURAH18ABK",
      "seriesId": "series-grandaire-wdlseries",
      "brandId": "brand-grandaire",
      "modelNumber": "WDLCURAH18ABK",
      "normalizedModelNumber": "wdlcurah18abk",
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
      "id": "model-grandaire-d5cuhah36aak",
      "slug": "grandaire-d5cuhah36aak",
      "name": "Grandaire D5CUHAH36AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CUHAH36AAK",
      "normalizedModelNumber": "d5cuhah36aak",
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
      "id": "model-grandaire-dlcurah24abk",
      "slug": "grandaire-dlcurah24abk",
      "name": "Grandaire DLCURAH24ABK",
      "seriesId": "series-grandaire-38m-series",
      "brandId": "brand-grandaire",
      "modelNumber": "DLCURAH24ABK",
      "normalizedModelNumber": "dlcurah24abk",
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
      "id": "model-grandaire-d5clrah48aak",
      "slug": "grandaire-d5clrah48aak",
      "name": "Grandaire D5CLRAH48AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CLRAH48AAK",
      "normalizedModelNumber": "d5clrah48aak",
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
      "id": "model-grandaire-d5cuhah30aak",
      "slug": "grandaire-d5cuhah30aak",
      "name": "Grandaire D5CUHAH30AAK",
      "seriesId": "series-grandaire-d5c-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CUHAH30AAK",
      "normalizedModelNumber": "d5cuhah30aak",
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
      "id": "model-grandaire-d5cuhah48aak",
      "slug": "grandaire-d5cuhah48aak",
      "name": "Grandaire D5CUHAH48AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CUHAH48AAK",
      "normalizedModelNumber": "d5cuhah48aak",
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
      "id": "model-grandaire-d5cuhah60aak",
      "slug": "grandaire-d5cuhah60aak",
      "name": "Grandaire D5CUHAH60AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CUHAH60AAK",
      "normalizedModelNumber": "d5cuhah60aak",
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
      "id": "model-grandaire-w5h8t60kaaa",
      "slug": "grandaire-w5h8t60kaaa",
      "name": "Grandaire W5H8T60*K*AAA*",
      "seriesId": "series-grandaire-2-stage-18-seer-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H8T60*K*AAA*",
      "normalizedModelNumber": "w5h8t60*k*aaa*",
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
      "id": "model-grandaire-w5h9v36akaaa",
      "slug": "grandaire-w5h9v36akaaa",
      "name": "Grandaire W5H9V36AKAAA",
      "seriesId": "series-grandaire-w5h-series",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H9V36AKAAA",
      "normalizedModelNumber": "w5h9v36akaaa",
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
      "id": "model-grandaire-wdlcurah24abk",
      "slug": "grandaire-wdlcurah24abk",
      "name": "Grandaire WDLCURAH24ABK",
      "seriesId": "series-grandaire-wdlseries",
      "brandId": "brand-grandaire",
      "modelNumber": "WDLCURAH24ABK",
      "normalizedModelNumber": "wdlcurah24abk",
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
      "id": "model-grandaire-d5clhah36aak",
      "slug": "grandaire-d5clhah36aak",
      "name": "Grandaire D5CLHAH36AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CLHAH36AAK",
      "normalizedModelNumber": "d5clhah36aak",
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
      "id": "model-grandaire-d5csrah30aak",
      "slug": "grandaire-d5csrah30aak",
      "name": "Grandaire D5CSRAH30AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CSRAH30AAK",
      "normalizedModelNumber": "d5csrah30aak",
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
      "id": "model-grandaire-d5clhah48aak",
      "slug": "grandaire-d5clhah48aak",
      "name": "Grandaire D5CLHAH48AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CLHAH48AAK",
      "normalizedModelNumber": "d5clhah48aak",
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
      "id": "model-grandaire-w5h8t36kaaa",
      "slug": "grandaire-w5h8t36kaaa",
      "name": "Grandaire W5H8T36*K*AAA*",
      "seriesId": "series-grandaire-2-stage-18-seer-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H8T36*K*AAA*",
      "normalizedModelNumber": "w5h8t36*k*aaa*",
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
      "id": "model-grandaire-wdlcurah24aak",
      "slug": "grandaire-wdlcurah24aak",
      "name": "Grandaire WDLCURAH24AAK",
      "seriesId": "series-grandaire-wdlseries",
      "brandId": "brand-grandaire",
      "modelNumber": "WDLCURAH24AAK",
      "normalizedModelNumber": "wdlcurah24aak",
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
      "id": "model-grandaire-w5h9v30akaaa",
      "slug": "grandaire-w5h9v30akaaa",
      "name": "Grandaire W5H9V30AKAAA",
      "seriesId": "series-grandaire-w5h-series",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H9V30AKAAA",
      "normalizedModelNumber": "w5h9v30akaaa",
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
      "id": "model-grandaire-d5curah36aak",
      "slug": "grandaire-d5curah36aak",
      "name": "Grandaire D5CURAH36AAK",
      "seriesId": "series-grandaire-d5c-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CURAH36AAK",
      "normalizedModelNumber": "d5curah36aak",
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
      "id": "model-grandaire-d5cshah33aak",
      "slug": "grandaire-d5cshah33aak",
      "name": "Grandaire D5CSHAH33AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CSHAH33AAK",
      "normalizedModelNumber": "d5cshah33aak",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33000,
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
      "id": "model-grandaire-w4h7t24kaaa",
      "slug": "grandaire-w4h7t24kaaa",
      "name": "Grandaire W4H7T24*K*AAA*",
      "seriesId": "series-grandaire-2-stage-17-seer-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W4H7T24*K*AAA*",
      "normalizedModelNumber": "w4h7t24*k*aaa*",
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
    },
    {
      "id": "model-grandaire-w4h7t48kaaa",
      "slug": "grandaire-w4h7t48kaaa",
      "name": "Grandaire W4H7T48*K*AAA*",
      "seriesId": "series-grandaire-2-stage-17-seer-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W4H7T48*K*AAA*",
      "normalizedModelNumber": "w4h7t48*k*aaa*",
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
      "id": "model-grandaire-w4h7t60kaaa",
      "slug": "grandaire-w4h7t60kaaa",
      "name": "Grandaire W4H7T60*K*AAA*",
      "seriesId": "series-grandaire-2-stage-17-seer-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W4H7T60*K*AAA*",
      "normalizedModelNumber": "w4h7t60*k*aaa*",
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
      "id": "model-grandaire-w5h5s24kaaa",
      "slug": "grandaire-w5h5s24kaaa",
      "name": "Grandaire W5H5S24*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S24*K*AAA*",
      "normalizedModelNumber": "w5h5s24*k*aaa*",
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
      "id": "model-grandaire-w5h9v48akaaa",
      "slug": "grandaire-w5h9v48akaaa",
      "name": "Grandaire W5H9V48AKAAA",
      "seriesId": "series-grandaire-w5h-series",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H9V48AKAAA",
      "normalizedModelNumber": "w5h9v48akaaa",
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
      "id": "model-grandaire-dlcurah24aak",
      "slug": "grandaire-dlcurah24aak",
      "name": "Grandaire DLCURAH24AAK",
      "seriesId": "series-grandaire-38m-series",
      "brandId": "brand-grandaire",
      "modelNumber": "DLCURAH24AAK",
      "normalizedModelNumber": "dlcurah24aak",
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
      "id": "model-grandaire-wdlcurah30abk",
      "slug": "grandaire-wdlcurah30abk",
      "name": "Grandaire WDLCURAH30ABK",
      "seriesId": "series-grandaire-wdlseries",
      "brandId": "brand-grandaire",
      "modelNumber": "WDLCURAH30ABK",
      "normalizedModelNumber": "wdlcurah30abk",
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
      "id": "model-grandaire-w5h5s31kaaa",
      "slug": "grandaire-w5h5s31kaaa",
      "name": "Grandaire W5H5S31*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S31*K*AAA*",
      "normalizedModelNumber": "w5h5s31*k*aaa*",
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
      "id": "model-grandaire-w5h5s36kaaa",
      "slug": "grandaire-w5h5s36kaaa",
      "name": "Grandaire W5H5S36*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S36*K*AAA*",
      "normalizedModelNumber": "w5h5s36*k*aaa*",
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
      "id": "model-grandaire-w5h9v60akaaa",
      "slug": "grandaire-w5h9v60akaaa",
      "name": "Grandaire W5H9V60AKAAA",
      "seriesId": "series-grandaire-w5h-series",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H9V60AKAAA",
      "normalizedModelNumber": "w5h9v60akaaa",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 52000,
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
      "id": "model-grandaire-wdlcurah36abk",
      "slug": "grandaire-wdlcurah36abk",
      "name": "Grandaire WDLCURAH36ABK",
      "seriesId": "series-grandaire-wdlseries",
      "brandId": "brand-grandaire",
      "modelNumber": "WDLCURAH36ABK",
      "normalizedModelNumber": "wdlcurah36abk",
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
      "id": "model-grandaire-w5h5s19kaaa",
      "slug": "grandaire-w5h5s19kaaa",
      "name": "Grandaire W5H5S19*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S19*K*AAA*",
      "normalizedModelNumber": "w5h5s19*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18400,
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
      "id": "model-grandaire-d5curah48aak",
      "slug": "grandaire-d5curah48aak",
      "name": "Grandaire D5CURAH48AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CURAH48AAK",
      "normalizedModelNumber": "d5curah48aak",
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
      "id": "model-grandaire-dlcurah48abk",
      "slug": "grandaire-dlcurah48abk",
      "name": "Grandaire DLCURAH48ABK",
      "seriesId": "series-grandaire-38m-series",
      "brandId": "brand-grandaire",
      "modelNumber": "DLCURAH48ABK",
      "normalizedModelNumber": "dlcurah48abk",
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
      "id": "model-grandaire-wdlcurah48abk",
      "slug": "grandaire-wdlcurah48abk",
      "name": "Grandaire WDLCURAH48ABK",
      "seriesId": "series-grandaire-wdlseries",
      "brandId": "brand-grandaire",
      "modelNumber": "WDLCURAH48ABK",
      "normalizedModelNumber": "wdlcurah48abk",
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
      "id": "model-grandaire-w5h5s18kaaa",
      "slug": "grandaire-w5h5s18kaaa",
      "name": "Grandaire W5H5S18*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S18*K*AAA*",
      "normalizedModelNumber": "w5h5s18*k*aaa*",
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
      "id": "model-grandaire-w5h5s48kaaa",
      "slug": "grandaire-w5h5s48kaaa",
      "name": "Grandaire W5H5S48*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S48*K*AAA*",
      "normalizedModelNumber": "w5h5s48*k*aaa*",
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
      "id": "model-grandaire-w5h5s42kaaa",
      "slug": "grandaire-w5h5s42kaaa",
      "name": "Grandaire W5H5S42*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S42*K*AAA*",
      "normalizedModelNumber": "w5h5s42*k*aaa*",
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
      "id": "model-grandaire-d5clhah58aak",
      "slug": "grandaire-d5clhah58aak",
      "name": "Grandaire D5CLHAH58AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CLHAH58AAK",
      "normalizedModelNumber": "d5clhah58aak",
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
      "id": "model-grandaire-wdlcurah60abk",
      "slug": "grandaire-wdlcurah60abk",
      "name": "Grandaire WDLCURAH60ABK",
      "seriesId": "series-grandaire-wdlseries",
      "brandId": "brand-grandaire",
      "modelNumber": "WDLCURAH60ABK",
      "normalizedModelNumber": "wdlcurah60abk",
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
    },
    {
      "id": "model-grandaire-w4h5s30kaaa",
      "slug": "grandaire-w4h5s30kaaa",
      "name": "Grandaire W4H5S30*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W4H5S30*K*AAA*",
      "normalizedModelNumber": "w4h5s30*k*aaa*",
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
      "id": "model-grandaire-w4h5s60kaaa",
      "slug": "grandaire-w4h5s60kaaa",
      "name": "Grandaire W4H5S60*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W4H5S60*K*AAA*",
      "normalizedModelNumber": "w4h5s60*k*aaa*",
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
      "id": "model-grandaire-w4h7t36kaaa",
      "slug": "grandaire-w4h7t36kaaa",
      "name": "Grandaire W4H7T36*K*AAA*",
      "seriesId": "series-grandaire-2-stage-17-seer-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W4H7T36*K*AAA*",
      "normalizedModelNumber": "w4h7t36*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33200,
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
      "id": "model-grandaire-w5h5s30kaaa",
      "slug": "grandaire-w5h5s30kaaa",
      "name": "Grandaire W5H5S30*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S30*K*AAA*",
      "normalizedModelNumber": "w5h5s30*k*aaa*",
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
      "id": "model-grandaire-d5curah60aak",
      "slug": "grandaire-d5curah60aak",
      "name": "Grandaire D5CURAH60AAK",
      "seriesId": "series-grandaire-d5f-series",
      "brandId": "brand-grandaire",
      "modelNumber": "D5CURAH60AAK",
      "normalizedModelNumber": "d5curah60aak",
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
      "id": "model-grandaire-w5h5s60kaaa",
      "slug": "grandaire-w5h5s60kaaa",
      "name": "Grandaire W5H5S60*K*AAA*",
      "seriesId": "series-grandaire-15-seer2-hp",
      "brandId": "brand-grandaire",
      "modelNumber": "W5H5S60*K*AAA*",
      "normalizedModelNumber": "w5h5s60*k*aaa*",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-grandaire-d5csrah12aaj",
      "modelNumber": "D5CSRAH12AAJ",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5csrah24aak",
      "modelNumber": "D5CSRAH24AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5cuhah18aak",
      "modelNumber": "D5CUHAH18AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h9v18akaaa",
      "modelNumber": "W5H9V18AKAAA",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5cshah24aak",
      "modelNumber": "D5CSHAH24AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5curah18aak",
      "modelNumber": "D5CURAH18AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5cuhah24aak",
      "modelNumber": "D5CUHAH24AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5curah30aak",
      "modelNumber": "D5CURAH30AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5csrah18aak",
      "modelNumber": "D5CSRAH18AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h8t24kaaa",
      "modelNumber": "W5H8T24*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h9v24akaaa",
      "modelNumber": "W5H9V24AKAAA",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5curah24aak",
      "modelNumber": "D5CURAH24AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5cshah18aak",
      "modelNumber": "D5CSHAH18AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h8t48kaaa",
      "modelNumber": "W5H8T48*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-wdlcurah18abk",
      "modelNumber": "WDLCURAH18ABK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-d5cuhah36aak",
      "modelNumber": "D5CUHAH36AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-dlcurah24abk",
      "modelNumber": "DLCURAH24ABK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-d5clrah48aak",
      "modelNumber": "D5CLRAH48AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5cuhah30aak",
      "modelNumber": "D5CUHAH30AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5cuhah48aak",
      "modelNumber": "D5CUHAH48AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5cuhah60aak",
      "modelNumber": "D5CUHAH60AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h8t60kaaa",
      "modelNumber": "W5H8T60*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h9v36akaaa",
      "modelNumber": "W5H9V36AKAAA",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-wdlcurah24abk",
      "modelNumber": "WDLCURAH24ABK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-d5clhah36aak",
      "modelNumber": "D5CLHAH36AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5csrah30aak",
      "modelNumber": "D5CSRAH30AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5clhah48aak",
      "modelNumber": "D5CLHAH48AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h8t36kaaa",
      "modelNumber": "W5H8T36*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-wdlcurah24aak",
      "modelNumber": "WDLCURAH24AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w5h9v30akaaa",
      "modelNumber": "W5H9V30AKAAA",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5curah36aak",
      "modelNumber": "D5CURAH36AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5cshah33aak",
      "modelNumber": "D5CSHAH33AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w4h7t24kaaa",
      "modelNumber": "W4H7T24*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w4h7t48kaaa",
      "modelNumber": "W4H7T48*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w4h7t60kaaa",
      "modelNumber": "W4H7T60*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w5h5s24kaaa",
      "modelNumber": "W5H5S24*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h9v48akaaa",
      "modelNumber": "W5H9V48AKAAA",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-dlcurah24aak",
      "modelNumber": "DLCURAH24AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-wdlcurah30abk",
      "modelNumber": "WDLCURAH30ABK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w5h5s31kaaa",
      "modelNumber": "W5H5S31*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h5s36kaaa",
      "modelNumber": "W5H5S36*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h9v60akaaa",
      "modelNumber": "W5H9V60AKAAA",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-wdlcurah36abk",
      "modelNumber": "WDLCURAH36ABK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w5h5s19kaaa",
      "modelNumber": "W5H5S19*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5curah48aak",
      "modelNumber": "D5CURAH48AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-dlcurah48abk",
      "modelNumber": "DLCURAH48ABK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-wdlcurah48abk",
      "modelNumber": "WDLCURAH48ABK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w5h5s18kaaa",
      "modelNumber": "W5H5S18*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h5s48kaaa",
      "modelNumber": "W5H5S48*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h5s42kaaa",
      "modelNumber": "W5H5S42*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5clhah58aak",
      "modelNumber": "D5CLHAH58AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-wdlcurah60abk",
      "modelNumber": "WDLCURAH60ABK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w4h5s30kaaa",
      "modelNumber": "W4H5S30*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w4h5s60kaaa",
      "modelNumber": "W4H5S60*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w4h7t36kaaa",
      "modelNumber": "W4H7T36*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-grandaire-w5h5s30kaaa",
      "modelNumber": "W5H5S30*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-d5curah60aak",
      "modelNumber": "D5CURAH60AAK",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-grandaire-w5h5s60kaaa",
      "modelNumber": "W5H5S60*K*AAA*",
      "brandId": "brand-grandaire",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-d5fshah12xaj",
      "modelNumber": "D5FSHAH12XAJ",
      "brandId": "brand-grandaire",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsaah24xbk",
      "modelNumber": "D5FSAAH24XBK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5muwaq18xa3",
      "modelNumber": "D5MUWAQ18XA3",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah18xak",
      "modelNumber": "D5FUAAH18XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuhah24xak",
      "modelNumber": "D5FUHAH24XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcvl185cb",
      "modelNumber": "WCVL185CB",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5muwaq30xa3",
      "modelNumber": "D5MUWAQ30XA3",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsaah18xbk",
      "modelNumber": "D5FSAAH18XBK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm32m17xa",
      "modelNumber": "W5VM32M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah24xak",
      "modelNumber": "D5FUAAH24XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcvl245cb",
      "modelNumber": "WCVL245CB",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc31m17xa",
      "modelNumber": "W5VC31M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d6021x",
      "modelNumber": "QFVA5D6021X*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d3617x",
      "modelNumber": "QFVA5D3617X*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc36m21xa",
      "modelNumber": "W5VC36M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm31m17xa",
      "modelNumber": "W5VM31M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc38m17xa",
      "modelNumber": "W5VC38M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdlfuaah18xak",
      "modelNumber": "WDLFUAAH18XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc37m21xa",
      "modelNumber": "W5VC37M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a25m17xa",
      "modelNumber": "W5A*25M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcgl365c",
      "modelNumber": "WCGL365*C*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuhah36xak",
      "modelNumber": "D5FUHAH36XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcgl605d",
      "modelNumber": "WCGL605*D*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfuaah30xak",
      "modelNumber": "DLFUAAH30XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5flaah48xak",
      "modelNumber": "D5FLAAH48XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a36m17xa",
      "modelNumber": "W5A*36M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuhah60xak",
      "modelNumber": "D5FUHAH60XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5muwaq24xa3",
      "modelNumber": "D5MUWAQ24XA3",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d2417x",
      "modelNumber": "QFVA5D2417X*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcgl245b",
      "modelNumber": "WCGL245*B*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a37m17xa",
      "modelNumber": "W5A*37M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc61m24xa",
      "modelNumber": "W5VC61M24XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm49m21xa",
      "modelNumber": "W5VM49M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc61m21xa",
      "modelNumber": "W5VC61M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm60m21xa",
      "modelNumber": "W5VM60M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc49m24xa",
      "modelNumber": "W5VC49M24XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d4821x",
      "modelNumber": "QFVA5D4821X*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a30m17xa",
      "modelNumber": "W5A*30M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah36xak",
      "modelNumber": "D5FUAAH36XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcvl365cc",
      "modelNumber": "WCVL365CC",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdlfuaah24xak",
      "modelNumber": "WDLFUAAH24XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5flaah36xak",
      "modelNumber": "D5FLAAH36XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a30m14xa",
      "modelNumber": "W5A*30M14XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a24m17xa",
      "modelNumber": "W5A*24M17XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsaah30xbk",
      "modelNumber": "D5FSAAH30XBK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc48m21xa",
      "modelNumber": "W5VC48M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcgl485c",
      "modelNumber": "WCGL485*C*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh36m12xa",
      "modelNumber": "W5SH36M12XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc60m21xa",
      "modelNumber": "W5VC60M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm48m21xa",
      "modelNumber": "W5VM48M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah30xak",
      "modelNumber": "D5FUAAH30XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcvl305cb",
      "modelNumber": "WCVL305CB",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5muwaq36xa3",
      "modelNumber": "D5MUWAQ36XA3",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsaah36xbk",
      "modelNumber": "D5FSAAH36XBK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm60m21xatdr",
      "modelNumber": "W5VM60M21XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc61m24xatdr",
      "modelNumber": "W5VC61M24XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc61m21xatdr",
      "modelNumber": "W5VC61M21XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc60m21xatdr",
      "modelNumber": "W5VC60M21XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm49m21xatdr",
      "modelNumber": "W5VM49M21XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm61m24xatdr",
      "modelNumber": "W5VM61M24XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a60m24xa",
      "modelNumber": "W5A*60M24XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a61m21xa",
      "modelNumber": "W5A*61M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wbgl604bd",
      "modelNumber": "WBGL604BD",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wbgl364bc",
      "modelNumber": "WBGL364BC",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wbgl484bc",
      "modelNumber": "WBGL484BC",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x30al",
      "modelNumber": "FMA5X30**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh30m12xa",
      "modelNumber": "W5SH30M12XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a61m24xa",
      "modelNumber": "W5A*61M24XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcvl485cd",
      "modelNumber": "WCVL485CD",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcvl605cd",
      "modelNumber": "WCVL605CD",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a24m14xa",
      "modelNumber": "W5A*24M14XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah48xak",
      "modelNumber": "D5FUAAH48XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdlfuaah30xak",
      "modelNumber": "WDLFUAAH30XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah24xax",
      "modelNumber": "D5FULAH24XAX",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah24xbx",
      "modelNumber": "D5FULAH24XBX",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z30al",
      "modelNumber": "FM(C,U)5Z30**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah60xmx",
      "modelNumber": "D5FULAH60XMX",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah60xak",
      "modelNumber": "D5FUAAH60XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah36xbx",
      "modelNumber": "D5FULAH36XBX",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah36xcx",
      "modelNumber": "D5FULAH36XCX",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a48m21xa",
      "modelNumber": "W5A*48M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a43m21xa",
      "modelNumber": "W5A*43M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0048nava54801ck",
      "modelNumber": "FEVA0048**+NAVA54801CK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5hm60x21ea",
      "modelNumber": "W5HM60X21EA",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vx60m24xatdr",
      "modelNumber": "W5VX60M24XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh60m12xa",
      "modelNumber": "W5SH60M12XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm60m24xatdr",
      "modelNumber": "W5VM60M24XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc48m24xatdr",
      "modelNumber": "W5VC48M24XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc48m21xatdr",
      "modelNumber": "W5VC48M21XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc49m24xatdr",
      "modelNumber": "W5VC49M24XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh48m12xa",
      "modelNumber": "W5SH48M12XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5hm24x17ea",
      "modelNumber": "W5HM24X17EA",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm61m24xa",
      "modelNumber": "W5VM61M24XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5hm24x14ea",
      "modelNumber": "W5HM24X14EA",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdlfuaah36xak",
      "modelNumber": "WDLFUAAH36XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z36al",
      "modelNumber": "FM(C,U)5Z36**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl425c",
      "modelNumber": "WCHL425*C*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh24m12xa",
      "modelNumber": "W5SH24M12XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x36al",
      "modelNumber": "FMA5X36**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfuaah60xak",
      "modelNumber": "DLFUAAH60XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5hm36x21ea",
      "modelNumber": "W5HM36X21EA",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5hm36x17ea",
      "modelNumber": "W5HM36X17EA",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdlfuaah48xak",
      "modelNumber": "WDLFUAAH48XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x24al",
      "modelNumber": "FMA5X24**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0036nava53601ck",
      "modelNumber": "FEVB0036**+NAVA53601CK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s30al",
      "modelNumber": "FM(C,U)5S30**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s36al",
      "modelNumber": "FM(C,U)5S36**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x18al",
      "modelNumber": "FMA5X18**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z18al",
      "modelNumber": "FM(C,U)5Z18**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s18al",
      "modelNumber": "FM(C,U)5S18**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s24al",
      "modelNumber": "FM(C,U)5S24**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z24al",
      "modelNumber": "FM(C,U)5Z24**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl245b",
      "modelNumber": "WCHL245*B*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl365b",
      "modelNumber": "WCHL365*B*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0036nava53601ck",
      "modelNumber": "FEVA0036**+NAVA53601CK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a42m21xa",
      "modelNumber": "W5A*42M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a25m17xatdr",
      "modelNumber": "W5A*25M17XA*+TDR",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl485c",
      "modelNumber": "WCHL485*C*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh42m12xa",
      "modelNumber": "W5SH42M12XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl305b",
      "modelNumber": "WCHL305*B*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0048nava54801ck",
      "modelNumber": "FEVB0048**+NAVA54801CK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5flaah60xak",
      "modelNumber": "D5FLAAH60XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah36xax",
      "modelNumber": "D5FULAH36XAX",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdlfuaah60xak",
      "modelNumber": "WDLFUAAH60XAK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wla374ca",
      "modelNumber": "WLA*374CA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah60xdx",
      "modelNumber": "D5FULAH60XDX",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wbgl244ab",
      "modelNumber": "WBGL244AB",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l18al",
      "modelNumber": "FMA5L18**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl185a",
      "modelNumber": "WCHL185*A*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc42m24xa",
      "modelNumber": "W5VC42M24XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l30al",
      "modelNumber": "FMA5L30**AL*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc42m21xa",
      "modelNumber": "W5VC42M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0060nava56001ck",
      "modelNumber": "FEVA0060**+NAVA56001CK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl605d",
      "modelNumber": "WCHL605*D*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm44m21xa",
      "modelNumber": "W5VM44M21XA*",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0060nava56001ck",
      "modelNumber": "FEVB0060**+NAVA56001CK",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5hm60x24ea",
      "modelNumber": "W5HM60X24EA",
      "brandId": "brand-grandaire",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-grandaire-d5csrah12aaj-d5fshah12xaj",
      "slug": "grandaire-d5csrah12aaj-d5fshah12xaj",
      "modelId": "model-grandaire-d5csrah12aaj",
      "outdoorUnitId": "ou-grandaire-d5csrah12aaj",
      "indoorUnitId": "iu-d5fshah12xaj",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5csrah24aak-d5fsaah24xbk",
      "slug": "grandaire-d5csrah24aak-d5fsaah24xbk",
      "modelId": "model-grandaire-d5csrah24aak",
      "outdoorUnitId": "ou-grandaire-d5csrah24aak",
      "indoorUnitId": "iu-d5fsaah24xbk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah18aak-d5muwaq18xa3",
      "slug": "grandaire-d5cuhah18aak-d5muwaq18xa3",
      "modelId": "model-grandaire-d5cuhah18aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah18aak",
      "indoorUnitId": "iu-d5muwaq18xa3",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah18aak-d5fuaah18xak",
      "slug": "grandaire-d5cuhah18aak-d5fuaah18xak",
      "modelId": "model-grandaire-d5cuhah18aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah18aak",
      "indoorUnitId": "iu-d5fuaah18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah18aak-d5fuhah24xak",
      "slug": "grandaire-d5cuhah18aak-d5fuhah24xak",
      "modelId": "model-grandaire-d5cuhah18aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah18aak",
      "indoorUnitId": "iu-d5fuhah24xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v18akaaa-wcvl185cb",
      "slug": "grandaire-w5h9v18akaaa-wcvl185cb",
      "modelId": "model-grandaire-w5h9v18akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v18akaaa",
      "indoorUnitId": "iu-wcvl185cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cshah24aak-d5fsaah24xbk",
      "slug": "grandaire-d5cshah24aak-d5fsaah24xbk",
      "modelId": "model-grandaire-d5cshah24aak",
      "outdoorUnitId": "ou-grandaire-d5cshah24aak",
      "indoorUnitId": "iu-d5fsaah24xbk",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah18aak-d5fuaah18xak",
      "slug": "grandaire-d5curah18aak-d5fuaah18xak",
      "modelId": "model-grandaire-d5curah18aak",
      "outdoorUnitId": "ou-grandaire-d5curah18aak",
      "indoorUnitId": "iu-d5fuaah18xak",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.8,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah24aak-d5fuhah24xak",
      "slug": "grandaire-d5cuhah24aak-d5fuhah24xak",
      "modelId": "model-grandaire-d5cuhah24aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah24aak",
      "indoorUnitId": "iu-d5fuhah24xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah30aak-d5muwaq30xa3",
      "slug": "grandaire-d5curah30aak-d5muwaq30xa3",
      "modelId": "model-grandaire-d5curah30aak",
      "outdoorUnitId": "ou-grandaire-d5curah30aak",
      "indoorUnitId": "iu-d5muwaq30xa3",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah18aak-d5muwaq18xa3",
      "slug": "grandaire-d5curah18aak-d5muwaq18xa3",
      "modelId": "model-grandaire-d5curah18aak",
      "outdoorUnitId": "ou-grandaire-d5curah18aak",
      "indoorUnitId": "iu-d5muwaq18xa3",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5csrah18aak-d5fsaah18xbk",
      "slug": "grandaire-d5csrah18aak-d5fsaah18xbk",
      "modelId": "model-grandaire-d5csrah18aak",
      "outdoorUnitId": "ou-grandaire-d5csrah18aak",
      "indoorUnitId": "iu-d5fsaah18xbk",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5vm32m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5vm32m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vm32m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah24aak-d5fuaah24xak",
      "slug": "grandaire-d5cuhah24aak-d5fuaah24xak",
      "modelId": "model-grandaire-d5cuhah24aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah24aak",
      "indoorUnitId": "iu-d5fuaah24xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v24akaaa-wcvl245cb",
      "slug": "grandaire-w5h9v24akaaa-wcvl245cb",
      "modelId": "model-grandaire-w5h9v24akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v24akaaa",
      "indoorUnitId": "iu-wcvl245cb",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah24aak-d5fuaah24xak",
      "slug": "grandaire-d5curah24aak-d5fuaah24xak",
      "modelId": "model-grandaire-d5curah24aak",
      "outdoorUnitId": "ou-grandaire-d5curah24aak",
      "indoorUnitId": "iu-d5fuaah24xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cshah18aak-d5fsaah18xbk",
      "slug": "grandaire-d5cshah18aak-d5fsaah18xbk",
      "modelId": "model-grandaire-d5cshah18aak",
      "outdoorUnitId": "ou-grandaire-d5cshah18aak",
      "indoorUnitId": "iu-d5fsaah18xbk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5vc31m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5vc31m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vc31m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-qfva5d6021x",
      "slug": "grandaire-w5h8t48kaaa-qfva5d6021x",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-qfva5d3617x",
      "slug": "grandaire-w5h8t24kaaa-qfva5d3617x",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5vc36m21xa",
      "slug": "grandaire-w5h8t24kaaa-w5vc36m21xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vc36m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5vm31m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5vm31m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vm31m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5vc38m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5vc38m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vc38m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-wdlcurah18abk-wdlfuaah18xak",
      "slug": "grandaire-wdlcurah18abk-wdlfuaah18xak",
      "modelId": "model-grandaire-wdlcurah18abk",
      "outdoorUnitId": "ou-grandaire-wdlcurah18abk",
      "indoorUnitId": "iu-wdlfuaah18xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5vc37m21xa",
      "slug": "grandaire-w5h8t24kaaa-w5vc37m21xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vc37m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5a25m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5a25m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a25m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-wcgl365c",
      "slug": "grandaire-w5h8t24kaaa-wcgl365c",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-wcgl365c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah36aak-d5fuhah36xak",
      "slug": "grandaire-d5cuhah36aak-d5fuhah36xak",
      "modelId": "model-grandaire-d5cuhah36aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah36aak",
      "indoorUnitId": "iu-d5fuhah36xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-wcgl605d",
      "slug": "grandaire-w5h8t48kaaa-wcgl605d",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-dlcurah24abk-dlfuaah30xak",
      "slug": "grandaire-dlcurah24abk-dlfuaah30xak",
      "modelId": "model-grandaire-dlcurah24abk",
      "outdoorUnitId": "ou-grandaire-dlcurah24abk",
      "indoorUnitId": "iu-dlfuaah30xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5clrah48aak-d5flaah48xak",
      "slug": "grandaire-d5clrah48aak-d5flaah48xak",
      "modelId": "model-grandaire-d5clrah48aak",
      "outdoorUnitId": "ou-grandaire-d5clrah48aak",
      "indoorUnitId": "iu-d5flaah48xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5a36m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5a36m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a36m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah30aak-d5muwaq30xa3",
      "slug": "grandaire-d5cuhah30aak-d5muwaq30xa3",
      "modelId": "model-grandaire-d5cuhah30aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah30aak",
      "indoorUnitId": "iu-d5muwaq30xa3",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah48aak-d5fuhah60xak",
      "slug": "grandaire-d5cuhah48aak-d5fuhah60xak",
      "modelId": "model-grandaire-d5cuhah48aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah48aak",
      "indoorUnitId": "iu-d5fuhah60xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah60aak-d5fuhah60xak",
      "slug": "grandaire-d5cuhah60aak-d5fuhah60xak",
      "modelId": "model-grandaire-d5cuhah60aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah60aak",
      "indoorUnitId": "iu-d5fuhah60xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah24aak-d5muwaq24xa3",
      "slug": "grandaire-d5cuhah24aak-d5muwaq24xa3",
      "modelId": "model-grandaire-d5cuhah24aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah24aak",
      "indoorUnitId": "iu-d5muwaq24xa3",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-qfva5d2417x",
      "slug": "grandaire-w5h8t24kaaa-qfva5d2417x",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-wcgl245b",
      "slug": "grandaire-w5h8t24kaaa-wcgl245b",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-wcgl245b",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5a37m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5a37m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a37m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc61m24xa",
      "slug": "grandaire-w5h8t48kaaa-w5vc61m24xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc61m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vm49m21xa",
      "slug": "grandaire-w5h8t48kaaa-w5vm49m21xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm49m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-wcgl605d",
      "slug": "grandaire-w5h8t60kaaa-wcgl605d",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-qfva5d6021x",
      "slug": "grandaire-w5h8t60kaaa-qfva5d6021x",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc61m21xa",
      "slug": "grandaire-w5h8t48kaaa-w5vc61m21xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc61m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vm60m21xa",
      "slug": "grandaire-w5h8t48kaaa-w5vm60m21xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm60m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc49m24xa",
      "slug": "grandaire-w5h8t48kaaa-w5vc49m24xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc49m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-qfva5d4821x",
      "slug": "grandaire-w5h8t48kaaa-qfva5d4821x",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5a30m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5a30m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a30m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah36aak-d5fuaah36xak",
      "slug": "grandaire-d5cuhah36aak-d5fuaah36xak",
      "modelId": "model-grandaire-d5cuhah36aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah36aak",
      "indoorUnitId": "iu-d5fuaah36xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v36akaaa-wcvl365cc",
      "slug": "grandaire-w5h9v36akaaa-wcvl365cc",
      "modelId": "model-grandaire-w5h9v36akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v36akaaa",
      "indoorUnitId": "iu-wcvl365cc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-wdlcurah24abk-wdlfuaah24xak",
      "slug": "grandaire-wdlcurah24abk-wdlfuaah24xak",
      "modelId": "model-grandaire-wdlcurah24abk",
      "outdoorUnitId": "ou-grandaire-wdlcurah24abk",
      "indoorUnitId": "iu-wdlfuaah24xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah24aak-d5muwaq24xa3",
      "slug": "grandaire-d5curah24aak-d5muwaq24xa3",
      "modelId": "model-grandaire-d5curah24aak",
      "outdoorUnitId": "ou-grandaire-d5curah24aak",
      "indoorUnitId": "iu-d5muwaq24xa3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5clhah36aak-d5flaah36xak",
      "slug": "grandaire-d5clhah36aak-d5flaah36xak",
      "modelId": "model-grandaire-d5clhah36aak",
      "outdoorUnitId": "ou-grandaire-d5clhah36aak",
      "indoorUnitId": "iu-d5flaah36xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.3,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah30aak-d5fuhah36xak",
      "slug": "grandaire-d5cuhah30aak-d5fuhah36xak",
      "modelId": "model-grandaire-d5cuhah30aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah30aak",
      "indoorUnitId": "iu-d5fuhah36xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5a30m14xa",
      "slug": "grandaire-w5h8t24kaaa-w5a30m14xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a30m14xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5a24m17xa",
      "slug": "grandaire-w5h8t24kaaa-w5a24m17xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a24m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5csrah30aak-d5fsaah30xbk",
      "slug": "grandaire-d5csrah30aak-d5fsaah30xbk",
      "modelId": "model-grandaire-d5csrah30aak",
      "outdoorUnitId": "ou-grandaire-d5csrah30aak",
      "indoorUnitId": "iu-d5fsaah30xbk",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5clhah48aak-d5flaah48xak",
      "slug": "grandaire-d5clhah48aak-d5flaah48xak",
      "modelId": "model-grandaire-d5clhah48aak",
      "outdoorUnitId": "ou-grandaire-d5clhah48aak",
      "indoorUnitId": "iu-d5flaah48xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-wcgl605d",
      "slug": "grandaire-w5h8t36kaaa-wcgl605d",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc48m21xa",
      "slug": "grandaire-w5h8t48kaaa-w5vc48m21xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc48m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-wdlcurah24aak-wdlfuaah24xak",
      "slug": "grandaire-wdlcurah24aak-wdlfuaah24xak",
      "modelId": "model-grandaire-wdlcurah24aak",
      "outdoorUnitId": "ou-grandaire-wdlcurah24aak",
      "indoorUnitId": "iu-wdlfuaah24xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-wcgl485c",
      "slug": "grandaire-w5h8t48kaaa-wcgl485c",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-wcgl485c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5sh36m12xa",
      "slug": "grandaire-w5h8t24kaaa-w5sh36m12xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5sh36m12xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc60m21xa",
      "slug": "grandaire-w5h8t48kaaa-w5vc60m21xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc60m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vm48m21xa",
      "slug": "grandaire-w5h8t48kaaa-w5vm48m21xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm48m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah30aak-d5fuaah30xak",
      "slug": "grandaire-d5cuhah30aak-d5fuaah30xak",
      "modelId": "model-grandaire-d5cuhah30aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah30aak",
      "indoorUnitId": "iu-d5fuaah30xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.9,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v30akaaa-wcvl305cb",
      "slug": "grandaire-w5h9v30akaaa-wcvl305cb",
      "modelId": "model-grandaire-w5h9v30akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v30akaaa",
      "indoorUnitId": "iu-wcvl305cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah36aak-d5muwaq36xa3",
      "slug": "grandaire-d5cuhah36aak-d5muwaq36xa3",
      "modelId": "model-grandaire-d5cuhah36aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah36aak",
      "indoorUnitId": "iu-d5muwaq36xa3",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah36aak-d5muwaq36xa3",
      "slug": "grandaire-d5curah36aak-d5muwaq36xa3",
      "modelId": "model-grandaire-d5curah36aak",
      "outdoorUnitId": "ou-grandaire-d5curah36aak",
      "indoorUnitId": "iu-d5muwaq36xa3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cshah33aak-d5fsaah36xbk",
      "slug": "grandaire-d5cshah33aak-d5fsaah36xbk",
      "modelId": "model-grandaire-d5cshah33aak",
      "outdoorUnitId": "ou-grandaire-d5cshah33aak",
      "indoorUnitId": "iu-d5fsaah36xbk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vm60m21xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vm60m21xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm60m21xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc61m24xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vc61m24xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc61m24xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc61m21xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vc61m21xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc61m21xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc60m21xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vc60m21xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc60m21xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vm49m21xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vm49m21xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm49m21xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vm61m24xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vm61m24xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm61m24xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5a60m24xa",
      "slug": "grandaire-w5h8t48kaaa-w5a60m24xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5a60m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5a61m21xa",
      "slug": "grandaire-w5h8t48kaaa-w5a61m21xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5a61m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-wcgl485c",
      "slug": "grandaire-w5h8t36kaaa-wcgl485c",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-wcgl485c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w4h7t24kaaa-wbgl604bd",
      "slug": "grandaire-w4h7t24kaaa-wbgl604bd",
      "modelId": "model-grandaire-w4h7t24kaaa",
      "outdoorUnitId": "ou-grandaire-w4h7t24kaaa",
      "indoorUnitId": "iu-wbgl604bd",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w4h7t48kaaa-wbgl364bc",
      "slug": "grandaire-w4h7t48kaaa-wbgl364bc",
      "modelId": "model-grandaire-w4h7t48kaaa",
      "outdoorUnitId": "ou-grandaire-w4h7t48kaaa",
      "indoorUnitId": "iu-wbgl364bc",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w4h7t60kaaa-wbgl484bc",
      "slug": "grandaire-w4h7t60kaaa-wbgl484bc",
      "modelId": "model-grandaire-w4h7t60kaaa",
      "outdoorUnitId": "ou-grandaire-w4h7t60kaaa",
      "indoorUnitId": "iu-wbgl484bc",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fma5x30al",
      "slug": "grandaire-w5h5s24kaaa-fma5x30al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-qfva5d4821x",
      "slug": "grandaire-w5h8t36kaaa-qfva5d4821x",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5sh30m12xa",
      "slug": "grandaire-w5h8t24kaaa-w5sh30m12xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5sh30m12xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-w5a61m24xa",
      "slug": "grandaire-w5h8t60kaaa-w5a61m24xa",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-w5a61m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-w5a60m24xa",
      "slug": "grandaire-w5h8t60kaaa-w5a60m24xa",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-w5a60m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-w5a61m21xa",
      "slug": "grandaire-w5h8t60kaaa-w5a61m21xa",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-w5a61m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5a61m24xa",
      "slug": "grandaire-w5h8t48kaaa-w5a61m24xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5a61m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v48akaaa-wcvl485cd",
      "slug": "grandaire-w5h9v48akaaa-wcvl485cd",
      "modelId": "model-grandaire-w5h9v48akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v48akaaa",
      "indoorUnitId": "iu-wcvl485cd",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v48akaaa-wcvl605cd",
      "slug": "grandaire-w5h9v48akaaa-wcvl605cd",
      "modelId": "model-grandaire-w5h9v48akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v48akaaa",
      "indoorUnitId": "iu-wcvl605cd",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5a24m14xa",
      "slug": "grandaire-w5h8t24kaaa-w5a24m14xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a24m14xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah48aak-d5fuaah48xak",
      "slug": "grandaire-d5cuhah48aak-d5fuaah48xak",
      "modelId": "model-grandaire-d5cuhah48aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah48aak",
      "indoorUnitId": "iu-d5fuaah48xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-dlcurah24aak-dlfuaah30xak",
      "slug": "grandaire-dlcurah24aak-dlfuaah30xak",
      "modelId": "model-grandaire-dlcurah24aak",
      "outdoorUnitId": "ou-grandaire-dlcurah24aak",
      "indoorUnitId": "iu-dlfuaah30xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-wdlcurah30abk-wdlfuaah30xak",
      "slug": "grandaire-wdlcurah30abk-wdlfuaah30xak",
      "modelId": "model-grandaire-wdlcurah30abk",
      "outdoorUnitId": "ou-grandaire-wdlcurah30abk",
      "indoorUnitId": "iu-wdlfuaah30xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah36aak-d5fuaah36xak",
      "slug": "grandaire-d5curah36aak-d5fuaah36xak",
      "modelId": "model-grandaire-d5curah36aak",
      "outdoorUnitId": "ou-grandaire-d5curah36aak",
      "indoorUnitId": "iu-d5fuaah36xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah18aak-d5fulah24xax",
      "slug": "grandaire-d5cuhah18aak-d5fulah24xax",
      "modelId": "model-grandaire-d5cuhah18aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah18aak",
      "indoorUnitId": "iu-d5fulah24xax",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah18aak-d5fulah24xbx",
      "slug": "grandaire-d5cuhah18aak-d5fulah24xbx",
      "modelId": "model-grandaire-d5cuhah18aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah18aak",
      "indoorUnitId": "iu-d5fulah24xbx",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-fmcu5z30al",
      "slug": "grandaire-w5h5s31kaaa-fmcu5z30al",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-w5vc31m17xa",
      "slug": "grandaire-w5h5s24kaaa-w5vc31m17xa",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vc31m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-w5vm32m17xa",
      "slug": "grandaire-w5h5s24kaaa-w5vm32m17xa",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vm32m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-w5vm31m17xa",
      "slug": "grandaire-w5h5s24kaaa-w5vm31m17xa",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vm31m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-w5a25m17xa",
      "slug": "grandaire-w5h5s24kaaa-w5a25m17xa",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-w5a25m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah60aak-d5fulah60xmx",
      "slug": "grandaire-d5cuhah60aak-d5fulah60xmx",
      "modelId": "model-grandaire-d5cuhah60aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah60aak",
      "indoorUnitId": "iu-d5fulah60xmx",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah24aak-d5fulah24xax",
      "slug": "grandaire-d5curah24aak-d5fulah24xax",
      "modelId": "model-grandaire-d5curah24aak",
      "outdoorUnitId": "ou-grandaire-d5curah24aak",
      "indoorUnitId": "iu-d5fulah24xax",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah24aak-d5fulah24xbx",
      "slug": "grandaire-d5curah24aak-d5fulah24xbx",
      "modelId": "model-grandaire-d5curah24aak",
      "outdoorUnitId": "ou-grandaire-d5curah24aak",
      "indoorUnitId": "iu-d5fulah24xbx",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah60aak-d5fuaah60xak",
      "slug": "grandaire-d5cuhah60aak-d5fuaah60xak",
      "modelId": "model-grandaire-d5cuhah60aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah60aak",
      "indoorUnitId": "iu-d5fuaah60xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah24aak-d5fulah24xbx",
      "slug": "grandaire-d5cuhah24aak-d5fulah24xbx",
      "modelId": "model-grandaire-d5cuhah24aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah24aak",
      "indoorUnitId": "iu-d5fulah24xbx",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah24aak-d5fulah24xax",
      "slug": "grandaire-d5cuhah24aak-d5fulah24xax",
      "modelId": "model-grandaire-d5cuhah24aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah24aak",
      "indoorUnitId": "iu-d5fulah24xax",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah30aak-d5fulah36xbx",
      "slug": "grandaire-d5cuhah30aak-d5fulah36xbx",
      "modelId": "model-grandaire-d5cuhah30aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah30aak",
      "indoorUnitId": "iu-d5fulah36xbx",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah30aak-d5fulah36xcx",
      "slug": "grandaire-d5cuhah30aak-d5fulah36xcx",
      "modelId": "model-grandaire-d5cuhah30aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah30aak",
      "indoorUnitId": "iu-d5fulah36xcx",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5vm49m21xa",
      "slug": "grandaire-w5h8t36kaaa-w5vm49m21xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vm49m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-qfva5d3617x",
      "slug": "grandaire-w5h8t36kaaa-qfva5d3617x",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5a48m21xa",
      "slug": "grandaire-w5h8t36kaaa-w5a48m21xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a48m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5a43m21xa",
      "slug": "grandaire-w5h8t36kaaa-w5a43m21xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a43m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5vc38m17xa",
      "slug": "grandaire-w5h8t36kaaa-w5vc38m17xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vc38m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5vm48m21xa",
      "slug": "grandaire-w5h8t36kaaa-w5vm48m21xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vm48m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-feva0048nava54801ck",
      "slug": "grandaire-w5h5s36kaaa-feva0048nava54801ck",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v60akaaa-w5hm60x21ea",
      "slug": "grandaire-w5h9v60akaaa-w5hm60x21ea",
      "modelId": "model-grandaire-w5h9v60akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v60akaaa",
      "indoorUnitId": "iu-w5hm60x21ea",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5a48m21xa",
      "slug": "grandaire-w5h8t48kaaa-w5a48m21xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5a48m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vx60m24xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vx60m24xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vx60m24xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5sh60m12xa",
      "slug": "grandaire-w5h8t48kaaa-w5sh60m12xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5sh60m12xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vm60m24xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vm60m24xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm60m24xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc48m24xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vc48m24xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc48m24xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc48m21xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vc48m21xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc48m21xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5vc49m24xatdr",
      "slug": "grandaire-w5h8t48kaaa-w5vc49m24xatdr",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc49m24xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t48kaaa-w5sh48m12xa",
      "slug": "grandaire-w5h8t48kaaa-w5sh48m12xa",
      "modelId": "model-grandaire-w5h8t48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t48kaaa",
      "indoorUnitId": "iu-w5sh48m12xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v60akaaa-wcvl605cd",
      "slug": "grandaire-w5h9v60akaaa-wcvl605cd",
      "modelId": "model-grandaire-w5h9v60akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v60akaaa",
      "indoorUnitId": "iu-wcvl605cd",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v24akaaa-w5hm24x17ea",
      "slug": "grandaire-w5h9v24akaaa-w5hm24x17ea",
      "modelId": "model-grandaire-w5h9v24akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v24akaaa",
      "indoorUnitId": "iu-w5hm24x17ea",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-w5vm61m24xa",
      "slug": "grandaire-w5h8t60kaaa-w5vm61m24xa",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vm61m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v24akaaa-w5hm24x14ea",
      "slug": "grandaire-w5h9v24akaaa-w5hm24x14ea",
      "modelId": "model-grandaire-w5h9v24akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v24akaaa",
      "indoorUnitId": "iu-w5hm24x14ea",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-w5vc60m21xa",
      "slug": "grandaire-w5h8t60kaaa-w5vc60m21xa",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vc60m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-w5vc61m21xa",
      "slug": "grandaire-w5h8t60kaaa-w5vc61m21xa",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vc61m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-w5vc61m24xa",
      "slug": "grandaire-w5h8t60kaaa-w5vc61m24xa",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vc61m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t60kaaa-w5vm60m21xa",
      "slug": "grandaire-w5h8t60kaaa-w5vm60m21xa",
      "modelId": "model-grandaire-w5h8t60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vm60m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-wdlcurah36abk-wdlfuaah36xak",
      "slug": "grandaire-wdlcurah36abk-wdlfuaah36xak",
      "modelId": "model-grandaire-wdlcurah36abk",
      "outdoorUnitId": "ou-grandaire-wdlcurah36abk",
      "indoorUnitId": "iu-wdlfuaah36xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-fmcu5z30al",
      "slug": "grandaire-w5h5s19kaaa-fmcu5z30al",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fmcu5z36al",
      "slug": "grandaire-w5h5s24kaaa-fmcu5z36al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-wchl425c",
      "slug": "grandaire-w5h5s31kaaa-wchl425c",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
      "indoorUnitId": "iu-wchl425c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5sh24m12xa",
      "slug": "grandaire-w5h8t24kaaa-w5sh24m12xa",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5sh24m12xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-fmcu5z36al",
      "slug": "grandaire-w5h5s31kaaa-fmcu5z36al",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-fma5x36al",
      "slug": "grandaire-w5h5s31kaaa-fma5x36al",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-fma5x30al",
      "slug": "grandaire-w5h5s31kaaa-fma5x30al",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah48aak-d5fuaah48xak",
      "slug": "grandaire-d5curah48aak-d5fuaah48xak",
      "modelId": "model-grandaire-d5curah48aak",
      "outdoorUnitId": "ou-grandaire-d5curah48aak",
      "indoorUnitId": "iu-d5fuaah48xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fmcu5z30al",
      "slug": "grandaire-w5h5s24kaaa-fmcu5z30al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-w5vc38m17xa",
      "slug": "grandaire-w5h5s24kaaa-w5vc38m17xa",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vc38m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-w5vc37m21xa",
      "slug": "grandaire-w5h5s24kaaa-w5vc37m21xa",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vc37m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-w5a25m17xa",
      "slug": "grandaire-w5h5s19kaaa-w5a25m17xa",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
      "indoorUnitId": "iu-w5a25m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-dlcurah48abk-dlfuaah60xak",
      "slug": "grandaire-dlcurah48abk-dlfuaah60xak",
      "modelId": "model-grandaire-dlcurah48abk",
      "outdoorUnitId": "ou-grandaire-dlcurah48abk",
      "indoorUnitId": "iu-dlfuaah60xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.9,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah36aak-d5fulah36xcx",
      "slug": "grandaire-d5cuhah36aak-d5fulah36xcx",
      "modelId": "model-grandaire-d5cuhah36aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah36aak",
      "indoorUnitId": "iu-d5fulah36xcx",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah36aak-d5fulah36xbx",
      "slug": "grandaire-d5cuhah36aak-d5fulah36xbx",
      "modelId": "model-grandaire-d5cuhah36aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah36aak",
      "indoorUnitId": "iu-d5fulah36xbx",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v36akaaa-w5hm36x21ea",
      "slug": "grandaire-w5h9v36akaaa-w5hm36x21ea",
      "modelId": "model-grandaire-w5h9v36akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v36akaaa",
      "indoorUnitId": "iu-w5hm36x21ea",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v36akaaa-w5hm36x17ea",
      "slug": "grandaire-w5h9v36akaaa-w5hm36x17ea",
      "modelId": "model-grandaire-w5h9v36akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v36akaaa",
      "indoorUnitId": "iu-w5hm36x17ea",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-wdlcurah48abk-wdlfuaah48xak",
      "slug": "grandaire-wdlcurah48abk-wdlfuaah48xak",
      "modelId": "model-grandaire-wdlcurah48abk",
      "outdoorUnitId": "ou-grandaire-wdlcurah48abk",
      "indoorUnitId": "iu-wdlfuaah48xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-wcgl245b",
      "slug": "grandaire-w5h5s19kaaa-wcgl245b",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
      "indoorUnitId": "iu-wcgl245b",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-fma5x24al",
      "slug": "grandaire-w5h5s19kaaa-fma5x24al",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-fevb0036nava53601ck",
      "slug": "grandaire-w5h5s31kaaa-fevb0036nava53601ck",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-fmcu5s30al",
      "slug": "grandaire-w5h5s31kaaa-fmcu5s30al",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-fmcu5s36al",
      "slug": "grandaire-w5h5s31kaaa-fmcu5s36al",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fma5x24al",
      "slug": "grandaire-w5h5s24kaaa-fma5x24al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-fma5x18al",
      "slug": "grandaire-w5h5s19kaaa-fma5x18al",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-fma5x24al",
      "slug": "grandaire-w5h5s18kaaa-fma5x24al",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-w5vm32m17xa",
      "slug": "grandaire-w5h5s18kaaa-w5vm32m17xa",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
      "indoorUnitId": "iu-w5vm32m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-fmcu5z18al",
      "slug": "grandaire-w5h5s19kaaa-fmcu5z18al",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-fmcu5s18al",
      "slug": "grandaire-w5h5s19kaaa-fmcu5s18al",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-fmcu5s24al",
      "slug": "grandaire-w5h5s19kaaa-fmcu5s24al",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-fmcu5z24al",
      "slug": "grandaire-w5h5s19kaaa-fmcu5z24al",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-w5a37m17xa",
      "slug": "grandaire-w5h5s24kaaa-w5a37m17xa",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-w5a37m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-wchl245b",
      "slug": "grandaire-w5h5s19kaaa-wchl245b",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
      "indoorUnitId": "iu-wchl245b",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fmcu5s30al",
      "slug": "grandaire-w5h5s24kaaa-fmcu5s30al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fmcu5z24al",
      "slug": "grandaire-w5h5s24kaaa-fmcu5z24al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-wchl365b",
      "slug": "grandaire-w5h5s24kaaa-wchl365b",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-wchl365b",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-feva0036nava53601ck",
      "slug": "grandaire-w5h5s31kaaa-feva0036nava53601ck",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-feva0036nava53601ck",
      "slug": "grandaire-w5h5s24kaaa-feva0036nava53601ck",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fevb0036nava53601ck",
      "slug": "grandaire-w5h5s24kaaa-fevb0036nava53601ck",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5a42m21xa",
      "slug": "grandaire-w5h8t36kaaa-w5a42m21xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a42m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t24kaaa-w5a25m17xatdr",
      "slug": "grandaire-w5h8t24kaaa-w5a25m17xatdr",
      "modelId": "model-grandaire-w5h8t24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a25m17xatdr",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s48kaaa-wcgl605d",
      "slug": "grandaire-w5h5s48kaaa-wcgl605d",
      "modelId": "model-grandaire-w5h5s48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s48kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-wchl485c",
      "slug": "grandaire-w5h5s36kaaa-wchl485c",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
      "indoorUnitId": "iu-wchl485c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5sh42m12xa",
      "slug": "grandaire-w5h8t36kaaa-w5sh42m12xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5sh42m12xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5a37m17xa",
      "slug": "grandaire-w5h8t36kaaa-w5a37m17xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a37m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5vc37m21xa",
      "slug": "grandaire-w5h8t36kaaa-w5vc37m21xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vc37m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5vc48m21xa",
      "slug": "grandaire-w5h8t36kaaa-w5vc48m21xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vc48m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-wcgl485c",
      "slug": "grandaire-w5h5s36kaaa-wcgl485c",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
      "indoorUnitId": "iu-wcgl485c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s42kaaa-wcgl605d",
      "slug": "grandaire-w5h5s42kaaa-wcgl605d",
      "modelId": "model-grandaire-w5h5s42kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s42kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-wcgl245b",
      "slug": "grandaire-w5h5s24kaaa-wcgl245b",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-wcgl245b",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fmcu5s36al",
      "slug": "grandaire-w5h5s24kaaa-fmcu5s36al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-fma5x36al",
      "slug": "grandaire-w5h5s36kaaa-fma5x36al",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-wchl305b",
      "slug": "grandaire-w5h5s31kaaa-wchl305b",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
      "indoorUnitId": "iu-wchl305b",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-w5a43m21xa",
      "slug": "grandaire-w5h5s31kaaa-w5a43m21xa",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
      "indoorUnitId": "iu-w5a43m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-fevb0048nava54801ck",
      "slug": "grandaire-w5h5s36kaaa-fevb0048nava54801ck",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5clhah58aak-d5flaah60xak",
      "slug": "grandaire-d5clhah58aak-d5flaah60xak",
      "modelId": "model-grandaire-d5clhah58aak",
      "outdoorUnitId": "ou-grandaire-d5clhah58aak",
      "indoorUnitId": "iu-d5flaah60xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah30aak-d5fulah36xax",
      "slug": "grandaire-d5cuhah30aak-d5fulah36xax",
      "modelId": "model-grandaire-d5cuhah30aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah30aak",
      "indoorUnitId": "iu-d5fulah36xax",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-wdlcurah60abk-wdlfuaah60xak",
      "slug": "grandaire-wdlcurah60abk-wdlfuaah60xak",
      "modelId": "model-grandaire-wdlcurah60abk",
      "outdoorUnitId": "ou-grandaire-wdlcurah60abk",
      "indoorUnitId": "iu-wdlfuaah60xak",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-fmcu5s30al",
      "slug": "grandaire-w5h5s18kaaa-fmcu5s30al",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w4h5s30kaaa-wla374ca",
      "slug": "grandaire-w4h5s30kaaa-wla374ca",
      "modelId": "model-grandaire-w4h5s30kaaa",
      "outdoorUnitId": "ou-grandaire-w4h5s30kaaa",
      "indoorUnitId": "iu-wla374ca",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w4h5s60kaaa-wbgl484bc",
      "slug": "grandaire-w4h5s60kaaa-wbgl484bc",
      "modelId": "model-grandaire-w4h5s60kaaa",
      "outdoorUnitId": "ou-grandaire-w4h5s60kaaa",
      "indoorUnitId": "iu-wbgl484bc",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah60aak-d5fulah60xdx",
      "slug": "grandaire-d5cuhah60aak-d5fulah60xdx",
      "modelId": "model-grandaire-d5cuhah60aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah60aak",
      "indoorUnitId": "iu-d5fulah60xdx",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5cuhah48aak-d5fulah60xmx",
      "slug": "grandaire-d5cuhah48aak-d5fulah60xmx",
      "modelId": "model-grandaire-d5cuhah48aak",
      "outdoorUnitId": "ou-grandaire-d5cuhah48aak",
      "indoorUnitId": "iu-d5fulah60xmx",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w4h7t36kaaa-wbgl244ab",
      "slug": "grandaire-w4h7t36kaaa-wbgl244ab",
      "modelId": "model-grandaire-w4h7t36kaaa",
      "outdoorUnitId": "ou-grandaire-w4h7t36kaaa",
      "indoorUnitId": "iu-wbgl244ab",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah48aak-d5fulah60xmx",
      "slug": "grandaire-d5curah48aak-d5fulah60xmx",
      "modelId": "model-grandaire-d5curah48aak",
      "outdoorUnitId": "ou-grandaire-d5curah48aak",
      "indoorUnitId": "iu-d5fulah60xmx",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-fmcu5z30al",
      "slug": "grandaire-w5h5s18kaaa-fmcu5z30al",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-fma5x18al",
      "slug": "grandaire-w5h5s18kaaa-fma5x18al",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-wchl305b",
      "slug": "grandaire-w5h5s18kaaa-wchl305b",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
      "indoorUnitId": "iu-wchl305b",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-w5a25m17xa",
      "slug": "grandaire-w5h5s18kaaa-w5a25m17xa",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
      "indoorUnitId": "iu-w5a25m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-fma5l18al",
      "slug": "grandaire-w5h5s19kaaa-fma5l18al",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s19kaaa-wchl185a",
      "slug": "grandaire-w5h5s19kaaa-wchl185a",
      "modelId": "model-grandaire-w5h5s19kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s19kaaa",
      "indoorUnitId": "iu-wchl185a",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s30kaaa-w5vc42m24xa",
      "slug": "grandaire-w5h5s30kaaa-w5vc42m24xa",
      "modelId": "model-grandaire-w5h5s30kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s30kaaa",
      "indoorUnitId": "iu-w5vc42m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s30kaaa-fma5x36al",
      "slug": "grandaire-w5h5s30kaaa-fma5x36al",
      "modelId": "model-grandaire-w5h5s30kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s30kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s30kaaa-wchl425c",
      "slug": "grandaire-w5h5s30kaaa-wchl425c",
      "modelId": "model-grandaire-w5h5s30kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s30kaaa",
      "indoorUnitId": "iu-wchl425c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s30kaaa-fma5x30al",
      "slug": "grandaire-w5h5s30kaaa-fma5x30al",
      "modelId": "model-grandaire-w5h5s30kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s30kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-wchl305b",
      "slug": "grandaire-w5h5s24kaaa-wchl305b",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-wchl305b",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fmcu5s24al",
      "slug": "grandaire-w5h5s24kaaa-fmcu5s24al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-fma5l30al",
      "slug": "grandaire-w5h5s24kaaa-fma5l30al",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s24kaaa-w5a36m17xa",
      "slug": "grandaire-w5h5s24kaaa-w5a36m17xa",
      "modelId": "model-grandaire-w5h5s24kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s24kaaa",
      "indoorUnitId": "iu-w5a36m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-d5curah60aak-d5fuaah60xak",
      "slug": "grandaire-d5curah60aak-d5fuaah60xak",
      "modelId": "model-grandaire-d5curah60aak",
      "outdoorUnitId": "ou-grandaire-d5curah60aak",
      "indoorUnitId": "iu-d5fuaah60xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-fmcu5z24al",
      "slug": "grandaire-w5h5s18kaaa-fmcu5z24al",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s18kaaa-fmcu5z18al",
      "slug": "grandaire-w5h5s18kaaa-fmcu5z18al",
      "modelId": "model-grandaire-w5h5s18kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s18kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5sh48m12xa",
      "slug": "grandaire-w5h8t36kaaa-w5sh48m12xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5sh48m12xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5vc42m21xa",
      "slug": "grandaire-w5h8t36kaaa-w5vc42m21xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vc42m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s48kaaa-feva0060nava56001ck",
      "slug": "grandaire-w5h5s48kaaa-feva0060nava56001ck",
      "modelId": "model-grandaire-w5h5s48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s48kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s60kaaa-wcgl605d",
      "slug": "grandaire-w5h5s60kaaa-wcgl605d",
      "modelId": "model-grandaire-w5h5s60kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s60kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s48kaaa-wchl605d",
      "slug": "grandaire-w5h5s48kaaa-wchl605d",
      "modelId": "model-grandaire-w5h5s48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s48kaaa",
      "indoorUnitId": "iu-wchl605d",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-w5a48m21xa",
      "slug": "grandaire-w5h5s36kaaa-w5a48m21xa",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
      "indoorUnitId": "iu-w5a48m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-w5vc42m24xa",
      "slug": "grandaire-w5h5s36kaaa-w5vc42m24xa",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
      "indoorUnitId": "iu-w5vc42m24xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5a36m17xa",
      "slug": "grandaire-w5h8t36kaaa-w5a36m17xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a36m17xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-w5sh36m12xa",
      "slug": "grandaire-w5h8t36kaaa-w5sh36m12xa",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-w5sh36m12xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-fmcu5z36al",
      "slug": "grandaire-w5h5s36kaaa-fmcu5z36al",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-fmcu5s36al",
      "slug": "grandaire-w5h5s36kaaa-fmcu5s36al",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s31kaaa-fma5l30al",
      "slug": "grandaire-w5h5s31kaaa-fma5l30al",
      "modelId": "model-grandaire-w5h5s31kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s31kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-w5a43m21xa",
      "slug": "grandaire-w5h5s36kaaa-w5a43m21xa",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
      "indoorUnitId": "iu-w5a43m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-w5vm44m21xa",
      "slug": "grandaire-w5h5s36kaaa-w5vm44m21xa",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
      "indoorUnitId": "iu-w5vm44m21xa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s48kaaa-fevb0060nava56001ck",
      "slug": "grandaire-w5h5s48kaaa-fevb0060nava56001ck",
      "modelId": "model-grandaire-w5h5s48kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s48kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s42kaaa-wchl605d",
      "slug": "grandaire-w5h5s42kaaa-wchl605d",
      "modelId": "model-grandaire-w5h5s42kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s42kaaa",
      "indoorUnitId": "iu-wchl605d",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s42kaaa-fevb0060nava56001ck",
      "slug": "grandaire-w5h5s42kaaa-fevb0060nava56001ck",
      "modelId": "model-grandaire-w5h5s42kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s42kaaa",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h5s36kaaa-wchl425c",
      "slug": "grandaire-w5h5s36kaaa-wchl425c",
      "modelId": "model-grandaire-w5h5s36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h5s36kaaa",
      "indoorUnitId": "iu-wchl425c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h8t36kaaa-wcgl365c",
      "slug": "grandaire-w5h8t36kaaa-wcgl365c",
      "modelId": "model-grandaire-w5h8t36kaaa",
      "outdoorUnitId": "ou-grandaire-w5h8t36kaaa",
      "indoorUnitId": "iu-wcgl365c",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v60akaaa-w5hm60x24ea",
      "slug": "grandaire-w5h9v60akaaa-w5hm60x24ea",
      "modelId": "model-grandaire-w5h9v60akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v60akaaa",
      "indoorUnitId": "iu-w5hm60x24ea",
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
          "sourceId": "src-grandaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-grandaire-w5h9v48akaaa-w5hm60x21ea",
      "slug": "grandaire-w5h9v48akaaa-w5hm60x21ea",
      "modelId": "model-grandaire-w5h9v48akaaa",
      "outdoorUnitId": "ou-grandaire-w5h9v48akaaa",
      "indoorUnitId": "iu-w5hm60x21ea",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-grandaire-epa",
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
