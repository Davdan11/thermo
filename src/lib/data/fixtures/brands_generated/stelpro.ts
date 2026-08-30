import type { BrandDataset } from "../../types";

export const brand_stelproDataset: BrandDataset = {
  "brand": {
    "id": "brand-stelpro",
    "slug": "stelpro",
    "name": "Stelpro",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Stelpro",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-stelpro-epa",
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
      "id": "series-stelpro-sepb-series",
      "slug": "stelpro-sepb-series",
      "name": "SEPB Series",
      "brandId": "brand-stelpro",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SEPB Series de Stelpro",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stelpro-elite-b",
      "slug": "stelpro-elite-b",
      "name": "Elite B",
      "brandId": "brand-stelpro",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Elite B de Stelpro",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stelpro-smz-series",
      "slug": "stelpro-smz-series",
      "name": "SMZ Series",
      "brandId": "brand-stelpro",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SMZ Series de Stelpro",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stelpro-sicb1-series",
      "slug": "stelpro-sicb1-series",
      "name": "SICB1 Series",
      "brandId": "brand-stelpro",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SICB1 Series de Stelpro",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stelpro-sinb-series",
      "slug": "stelpro-sinb-series",
      "name": "SINB Series",
      "brandId": "brand-stelpro",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SINB Series de Stelpro",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stelpro-sfcb1-series",
      "slug": "stelpro-sfcb1-series",
      "name": "SFCB1 Series",
      "brandId": "brand-stelpro",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SFCB1 Series de Stelpro",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stelpro-sahb-series",
      "slug": "stelpro-sahb-series",
      "name": "SAHB Series",
      "brandId": "brand-stelpro",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SAHB Series de Stelpro",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stelpro-sdb-series",
      "slug": "stelpro-sdb-series",
      "name": "SDB Series",
      "brandId": "brand-stelpro",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SDB Series de Stelpro",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-stelpro-sepb-h09a-o",
      "slug": "stelpro-sepb-h09a-o",
      "name": "Stelpro SEPB-H09A-O",
      "seriesId": "series-stelpro-sepb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SEPB-H09A-O",
      "normalizedModelNumber": "sepb-h09a-o",
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
      "id": "model-stelpro-sepb-h12a-o",
      "slug": "stelpro-sepb-h12a-o",
      "name": "Stelpro SEPB-H12A-O",
      "seriesId": "series-stelpro-sepb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SEPB-H12A-O",
      "normalizedModelNumber": "sepb-h12a-o",
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
      "id": "model-stelpro-selb-h09a-o",
      "slug": "stelpro-selb-h09a-o",
      "name": "Stelpro SELB-H09A-O",
      "seriesId": "series-stelpro-elite-b",
      "brandId": "brand-stelpro",
      "modelNumber": "SELB-H09A-O",
      "normalizedModelNumber": "selb-h09a-o",
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
      "id": "model-stelpro-smz2b1-h18a-o",
      "slug": "stelpro-smz2b1-h18a-o",
      "name": "Stelpro SMZ2B1-H18A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ2B1-H18A-O",
      "normalizedModelNumber": "smz2b1-h18a-o",
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
      "id": "model-stelpro-smz2b1v-h18a-o",
      "slug": "stelpro-smz2b1v-h18a-o",
      "name": "Stelpro SMZ2B1V-H18A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ2B1V-H18A-O",
      "normalizedModelNumber": "smz2b1v-h18a-o",
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
      "id": "model-stelpro-smz5b1v-h48a-o",
      "slug": "stelpro-smz5b1v-h48a-o",
      "name": "Stelpro SMZ5B1V-H48A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ5B1V-H48A-O",
      "normalizedModelNumber": "smz5b1v-h48a-o",
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
      "id": "model-stelpro-selb-h12a-o",
      "slug": "stelpro-selb-h12a-o",
      "name": "Stelpro SELB-H12A-O",
      "seriesId": "series-stelpro-elite-b",
      "brandId": "brand-stelpro",
      "modelNumber": "SELB-H12A-O",
      "normalizedModelNumber": "selb-h12a-o",
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
      "id": "model-stelpro-smz4b1-h36a-o",
      "slug": "stelpro-smz4b1-h36a-o",
      "name": "Stelpro SMZ4B1-H36A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ4B1-H36A-O",
      "normalizedModelNumber": "smz4b1-h36a-o",
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
      "id": "model-stelpro-smz3b1v-h27a-o",
      "slug": "stelpro-smz3b1v-h27a-o",
      "name": "Stelpro SMZ3B1V-H27A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ3B1V-H27A-O",
      "normalizedModelNumber": "smz3b1v-h27a-o",
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
      "id": "model-stelpro-smz5b1-h48a-o",
      "slug": "stelpro-smz5b1-h48a-o",
      "name": "Stelpro SMZ5B1-H48A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ5B1-H48A-O",
      "normalizedModelNumber": "smz5b1-h48a-o",
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
      "id": "model-stelpro-smz4b1v-h36a-o",
      "slug": "stelpro-smz4b1v-h36a-o",
      "name": "Stelpro SMZ4B1V-H36A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ4B1V-H36A-O",
      "normalizedModelNumber": "smz4b1v-h36a-o",
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
      "id": "model-stelpro-smz3b1-h27a-o",
      "slug": "stelpro-smz3b1-h27a-o",
      "name": "Stelpro SMZ3B1-H27A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ3B1-H27A-O",
      "normalizedModelNumber": "smz3b1-h27a-o",
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
      "id": "model-stelpro-selb-h24a-o",
      "slug": "stelpro-selb-h24a-o",
      "name": "Stelpro SELB-H24A-O",
      "seriesId": "series-stelpro-elite-b",
      "brandId": "brand-stelpro",
      "modelNumber": "SELB-H24A-O",
      "normalizedModelNumber": "selb-h24a-o",
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
      "id": "model-stelpro-smz5b1-h55a-o",
      "slug": "stelpro-smz5b1-h55a-o",
      "name": "Stelpro SMZ5B1-H55A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ5B1-H55A-O",
      "normalizedModelNumber": "smz5b1-h55a-o",
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
      "id": "model-stelpro-smz5b1v-h55a-o",
      "slug": "stelpro-smz5b1v-h55a-o",
      "name": "Stelpro SMZ5B1V-H55A-O",
      "seriesId": "series-stelpro-smz-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SMZ5B1V-H55A-O",
      "normalizedModelNumber": "smz5b1v-h55a-o",
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
      "id": "model-stelpro-sinb-h09a-o",
      "slug": "stelpro-sinb-h09a-o",
      "name": "Stelpro SINB-H09A-O",
      "seriesId": "series-stelpro-sinb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SINB-H09A-O",
      "normalizedModelNumber": "sinb-h09a-o",
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
      "id": "model-stelpro-sepb-h18a-o",
      "slug": "stelpro-sepb-h18a-o",
      "name": "Stelpro SEPB-H18A-O",
      "seriesId": "series-stelpro-sepb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SEPB-H18A-O",
      "normalizedModelNumber": "sepb-h18a-o",
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
      "id": "model-stelpro-selb-h18a-o",
      "slug": "stelpro-selb-h18a-o",
      "name": "Stelpro SELB-H18A-O",
      "seriesId": "series-stelpro-elite-b",
      "brandId": "brand-stelpro",
      "modelNumber": "SELB-H18A-O",
      "normalizedModelNumber": "selb-h18a-o",
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
      "id": "model-stelpro-sepb-h24a-o",
      "slug": "stelpro-sepb-h24a-o",
      "name": "Stelpro SEPB-H24A-O",
      "seriesId": "series-stelpro-sepb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SEPB-H24A-O",
      "normalizedModelNumber": "sepb-h24a-o",
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
      "id": "model-stelpro-sinb-h18a-o",
      "slug": "stelpro-sinb-h18a-o",
      "name": "Stelpro SINB-H18A-O",
      "seriesId": "series-stelpro-sinb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SINB-H18A-O",
      "normalizedModelNumber": "sinb-h18a-o",
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
      "id": "model-stelpro-sinb-h24a-o",
      "slug": "stelpro-sinb-h24a-o",
      "name": "Stelpro SINB-H24A-O",
      "seriesId": "series-stelpro-sinb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SINB-H24A-O",
      "normalizedModelNumber": "sinb-h24a-o",
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
      "id": "model-stelpro-sdb1-h24a-o",
      "slug": "stelpro-sdb1-h24a-o",
      "name": "Stelpro SDB1-H24A-O",
      "seriesId": "series-stelpro-sahb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SDB1-H24A-O",
      "normalizedModelNumber": "sdb1-h24a-o",
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
      "id": "model-stelpro-sdb1-h36a-o",
      "slug": "stelpro-sdb1-h36a-o",
      "name": "Stelpro SDB1-H36A-O",
      "seriesId": "series-stelpro-sahb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SDB1-H36A-O",
      "normalizedModelNumber": "sdb1-h36a-o",
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
      "id": "model-stelpro-sdb1-h30a-o",
      "slug": "stelpro-sdb1-h30a-o",
      "name": "Stelpro SDB1-H30A-O",
      "seriesId": "series-stelpro-sahb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SDB1-H30A-O",
      "normalizedModelNumber": "sdb1-h30a-o",
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
      "id": "model-stelpro-sdb1-h48a-o",
      "slug": "stelpro-sdb1-h48a-o",
      "name": "Stelpro SDB1-H48A-O",
      "seriesId": "series-stelpro-sahb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SDB1-H48A-O",
      "normalizedModelNumber": "sdb1-h48a-o",
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
      "id": "model-stelpro-sdb1-h60a-o",
      "slug": "stelpro-sdb1-h60a-o",
      "name": "Stelpro SDB1-H60A-O",
      "seriesId": "series-stelpro-sahb-series",
      "brandId": "brand-stelpro",
      "modelNumber": "SDB1-H60A-O",
      "normalizedModelNumber": "sdb1-h60a-o",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-stelpro-sepb-h09a-o",
      "modelNumber": "SEPB-H09A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sepb-h12a-o",
      "modelNumber": "SEPB-H12A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-selb-h09a-o",
      "modelNumber": "SELB-H09A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz2b1-h18a-o",
      "modelNumber": "SMZ2B1-H18A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz2b1v-h18a-o",
      "modelNumber": "SMZ2B1V-H18A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz5b1v-h48a-o",
      "modelNumber": "SMZ5B1V-H48A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-selb-h12a-o",
      "modelNumber": "SELB-H12A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz4b1-h36a-o",
      "modelNumber": "SMZ4B1-H36A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz3b1v-h27a-o",
      "modelNumber": "SMZ3B1V-H27A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz5b1-h48a-o",
      "modelNumber": "SMZ5B1-H48A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz4b1v-h36a-o",
      "modelNumber": "SMZ4B1V-H36A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz3b1-h27a-o",
      "modelNumber": "SMZ3B1-H27A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-selb-h24a-o",
      "modelNumber": "SELB-H24A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz5b1-h55a-o",
      "modelNumber": "SMZ5B1-H55A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-smz5b1v-h55a-o",
      "modelNumber": "SMZ5B1V-H55A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sinb-h09a-o",
      "modelNumber": "SINB-H09A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sepb-h18a-o",
      "modelNumber": "SEPB-H18A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-selb-h18a-o",
      "modelNumber": "SELB-H18A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sepb-h24a-o",
      "modelNumber": "SEPB-H24A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sinb-h18a-o",
      "modelNumber": "SINB-H18A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sinb-h24a-o",
      "modelNumber": "SINB-H24A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sdb1-h24a-o",
      "modelNumber": "SDB1-H24A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sdb1-h36a-o",
      "modelNumber": "SDB1-H36A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sdb1-h30a-o",
      "modelNumber": "SDB1-H30A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sdb1-h48a-o",
      "modelNumber": "SDB1-H48A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-stelpro-sdb1-h60a-o",
      "modelNumber": "SDB1-H60A-O",
      "brandId": "brand-stelpro",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-sepb-h09a-i",
      "modelNumber": "SEPB-H09A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sepb-h12a-i",
      "modelNumber": "SEPB-H12A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-selb-h09a-i",
      "modelNumber": "SELB-H09A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-selb-h09b-i",
      "modelNumber": "SELB-H09B-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51161",
      "modelNumber": "IU-51161",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51162",
      "modelNumber": "IU-51162",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51169",
      "modelNumber": "IU-51169",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-selb-h12a-i",
      "modelNumber": "SELB-H12A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-selb-h12b-i",
      "modelNumber": "SELB-H12B-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51165",
      "modelNumber": "IU-51165",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51164",
      "modelNumber": "IU-51164",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51167",
      "modelNumber": "IU-51167",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51166",
      "modelNumber": "IU-51166",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51163",
      "modelNumber": "IU-51163",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sicb1-h09a-i",
      "modelNumber": "SICB1-H09A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-selb-h24b-i",
      "modelNumber": "SELB-H24B-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-selb-h24a-i",
      "modelNumber": "SELB-H24A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51168",
      "modelNumber": "IU-51168",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sicb1-h12a-i",
      "modelNumber": "SICB1-H12A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51170",
      "modelNumber": "IU-51170",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sinb-h09a-i",
      "modelNumber": "SINB-H09A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sepb-h18a-i",
      "modelNumber": "SEPB-H18A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-selb-h18a-i",
      "modelNumber": "SELB-H18A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-selb-h18b-i",
      "modelNumber": "SELB-H18B-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sepb-h24a-i",
      "modelNumber": "SEPB-H24A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sicb1-h24a-i",
      "modelNumber": "SICB1-H24A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sfcb1-h09a-i",
      "modelNumber": "SFCB1-H09A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sinb-h18a-i",
      "modelNumber": "SINB-H18A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sicb1-h18a-i",
      "modelNumber": "SICB1-H18A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sfcb1-h12a-i",
      "modelNumber": "SFCB1-H12A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sfcb1-h24a-i",
      "modelNumber": "SFCB1-H24A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sinb-h24a-i",
      "modelNumber": "SINB-H24A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sfcb1-h18a-i",
      "modelNumber": "SFCB1-H18A-I",
      "brandId": "brand-stelpro",
      "type": "wall-single"
    },
    {
      "id": "iu-sahb1-h24a-i",
      "modelNumber": "SAHB1-H24A-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sahb1-h36a-i",
      "modelNumber": "SAHB1-H36A-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sahb1-h30a-i",
      "modelNumber": "SAHB1-H30A-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sacb1-h24a1418-i",
      "modelNumber": "SACB1-H24A1418-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sahb1-h48a-i",
      "modelNumber": "SAHB1-H48A-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sacb1-h24a1718-i",
      "modelNumber": "SACB1-H24A1718-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sacb1-h36a2124-i",
      "modelNumber": "SACB1-H36A2124-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sahb1-h60a-i",
      "modelNumber": "SAHB1-H60A-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sacb1-h36a1724-i",
      "modelNumber": "SACB1-H36A1724-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-smcb1-h60a2128-i",
      "modelNumber": "SMCB1-H60A2128-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sacb1-h36a1424-i",
      "modelNumber": "SACB1-H36A1424-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    },
    {
      "id": "iu-sacb1-h60a2428-i",
      "modelNumber": "SACB1-H60A2428-I",
      "brandId": "brand-stelpro",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-stelpro-sepb-h09a-o-sepb-h09a-i",
      "slug": "stelpro-sepb-h09a-o-sepb-h09a-i",
      "modelId": "model-stelpro-sepb-h09a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h09a-o",
      "indoorUnitId": "iu-sepb-h09a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h12a-o-sepb-h12a-i",
      "slug": "stelpro-sepb-h12a-o-sepb-h12a-i",
      "modelId": "model-stelpro-sepb-h12a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h12a-o",
      "indoorUnitId": "iu-sepb-h12a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-selb-h09a-o-selb-h09a-i",
      "slug": "stelpro-selb-h09a-o-selb-h09a-i",
      "modelId": "model-stelpro-selb-h09a-o",
      "outdoorUnitId": "ou-stelpro-selb-h09a-o",
      "indoorUnitId": "iu-selb-h09a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-selb-h09a-o-selb-h09b-i",
      "slug": "stelpro-selb-h09a-o-selb-h09b-i",
      "modelId": "model-stelpro-selb-h09a-o",
      "outdoorUnitId": "ou-stelpro-selb-h09a-o",
      "indoorUnitId": "iu-selb-h09b-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz2b1-h18a-o-iu-51161",
      "slug": "stelpro-smz2b1-h18a-o-iu-51161",
      "modelId": "model-stelpro-smz2b1-h18a-o",
      "outdoorUnitId": "ou-stelpro-smz2b1-h18a-o",
      "indoorUnitId": "iu-iu-51161",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz2b1v-h18a-o-iu-51162",
      "slug": "stelpro-smz2b1v-h18a-o-iu-51162",
      "modelId": "model-stelpro-smz2b1v-h18a-o",
      "outdoorUnitId": "ou-stelpro-smz2b1v-h18a-o",
      "indoorUnitId": "iu-iu-51162",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz5b1v-h48a-o-iu-51169",
      "slug": "stelpro-smz5b1v-h48a-o-iu-51169",
      "modelId": "model-stelpro-smz5b1v-h48a-o",
      "outdoorUnitId": "ou-stelpro-smz5b1v-h48a-o",
      "indoorUnitId": "iu-iu-51169",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-selb-h12a-o-selb-h12a-i",
      "slug": "stelpro-selb-h12a-o-selb-h12a-i",
      "modelId": "model-stelpro-selb-h12a-o",
      "outdoorUnitId": "ou-stelpro-selb-h12a-o",
      "indoorUnitId": "iu-selb-h12a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-selb-h12a-o-selb-h12b-i",
      "slug": "stelpro-selb-h12a-o-selb-h12b-i",
      "modelId": "model-stelpro-selb-h12a-o",
      "outdoorUnitId": "ou-stelpro-selb-h12a-o",
      "indoorUnitId": "iu-selb-h12b-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz4b1-h36a-o-iu-51165",
      "slug": "stelpro-smz4b1-h36a-o-iu-51165",
      "modelId": "model-stelpro-smz4b1-h36a-o",
      "outdoorUnitId": "ou-stelpro-smz4b1-h36a-o",
      "indoorUnitId": "iu-iu-51165",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz3b1v-h27a-o-iu-51164",
      "slug": "stelpro-smz3b1v-h27a-o-iu-51164",
      "modelId": "model-stelpro-smz3b1v-h27a-o",
      "outdoorUnitId": "ou-stelpro-smz3b1v-h27a-o",
      "indoorUnitId": "iu-iu-51164",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz5b1-h48a-o-iu-51167",
      "slug": "stelpro-smz5b1-h48a-o-iu-51167",
      "modelId": "model-stelpro-smz5b1-h48a-o",
      "outdoorUnitId": "ou-stelpro-smz5b1-h48a-o",
      "indoorUnitId": "iu-iu-51167",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz4b1v-h36a-o-iu-51166",
      "slug": "stelpro-smz4b1v-h36a-o-iu-51166",
      "modelId": "model-stelpro-smz4b1v-h36a-o",
      "outdoorUnitId": "ou-stelpro-smz4b1v-h36a-o",
      "indoorUnitId": "iu-iu-51166",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz3b1-h27a-o-iu-51163",
      "slug": "stelpro-smz3b1-h27a-o-iu-51163",
      "modelId": "model-stelpro-smz3b1-h27a-o",
      "outdoorUnitId": "ou-stelpro-smz3b1-h27a-o",
      "indoorUnitId": "iu-iu-51163",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h09a-o-sicb1-h09a-i",
      "slug": "stelpro-sepb-h09a-o-sicb1-h09a-i",
      "modelId": "model-stelpro-sepb-h09a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h09a-o",
      "indoorUnitId": "iu-sicb1-h09a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-selb-h24a-o-selb-h24b-i",
      "slug": "stelpro-selb-h24a-o-selb-h24b-i",
      "modelId": "model-stelpro-selb-h24a-o",
      "outdoorUnitId": "ou-stelpro-selb-h24a-o",
      "indoorUnitId": "iu-selb-h24b-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-selb-h24a-o-selb-h24a-i",
      "slug": "stelpro-selb-h24a-o-selb-h24a-i",
      "modelId": "model-stelpro-selb-h24a-o",
      "outdoorUnitId": "ou-stelpro-selb-h24a-o",
      "indoorUnitId": "iu-selb-h24a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz5b1-h55a-o-iu-51168",
      "slug": "stelpro-smz5b1-h55a-o-iu-51168",
      "modelId": "model-stelpro-smz5b1-h55a-o",
      "outdoorUnitId": "ou-stelpro-smz5b1-h55a-o",
      "indoorUnitId": "iu-iu-51168",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h12a-o-sicb1-h12a-i",
      "slug": "stelpro-sepb-h12a-o-sicb1-h12a-i",
      "modelId": "model-stelpro-sepb-h12a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h12a-o",
      "indoorUnitId": "iu-sicb1-h12a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-smz5b1v-h55a-o-iu-51170",
      "slug": "stelpro-smz5b1v-h55a-o-iu-51170",
      "modelId": "model-stelpro-smz5b1v-h55a-o",
      "outdoorUnitId": "ou-stelpro-smz5b1v-h55a-o",
      "indoorUnitId": "iu-iu-51170",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sinb-h09a-o-sinb-h09a-i",
      "slug": "stelpro-sinb-h09a-o-sinb-h09a-i",
      "modelId": "model-stelpro-sinb-h09a-o",
      "outdoorUnitId": "ou-stelpro-sinb-h09a-o",
      "indoorUnitId": "iu-sinb-h09a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h18a-o-sepb-h18a-i",
      "slug": "stelpro-sepb-h18a-o-sepb-h18a-i",
      "modelId": "model-stelpro-sepb-h18a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h18a-o",
      "indoorUnitId": "iu-sepb-h18a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-selb-h18a-o-selb-h18a-i",
      "slug": "stelpro-selb-h18a-o-selb-h18a-i",
      "modelId": "model-stelpro-selb-h18a-o",
      "outdoorUnitId": "ou-stelpro-selb-h18a-o",
      "indoorUnitId": "iu-selb-h18a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-selb-h18a-o-selb-h18b-i",
      "slug": "stelpro-selb-h18a-o-selb-h18b-i",
      "modelId": "model-stelpro-selb-h18a-o",
      "outdoorUnitId": "ou-stelpro-selb-h18a-o",
      "indoorUnitId": "iu-selb-h18b-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h24a-o-sepb-h24a-i",
      "slug": "stelpro-sepb-h24a-o-sepb-h24a-i",
      "modelId": "model-stelpro-sepb-h24a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h24a-o",
      "indoorUnitId": "iu-sepb-h24a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h24a-o-sicb1-h24a-i",
      "slug": "stelpro-sepb-h24a-o-sicb1-h24a-i",
      "modelId": "model-stelpro-sepb-h24a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h24a-o",
      "indoorUnitId": "iu-sicb1-h24a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h09a-o-sfcb1-h09a-i",
      "slug": "stelpro-sepb-h09a-o-sfcb1-h09a-i",
      "modelId": "model-stelpro-sepb-h09a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h09a-o",
      "indoorUnitId": "iu-sfcb1-h09a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sinb-h18a-o-sinb-h18a-i",
      "slug": "stelpro-sinb-h18a-o-sinb-h18a-i",
      "modelId": "model-stelpro-sinb-h18a-o",
      "outdoorUnitId": "ou-stelpro-sinb-h18a-o",
      "indoorUnitId": "iu-sinb-h18a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h18a-o-sicb1-h18a-i",
      "slug": "stelpro-sepb-h18a-o-sicb1-h18a-i",
      "modelId": "model-stelpro-sepb-h18a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h18a-o",
      "indoorUnitId": "iu-sicb1-h18a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h12a-o-sfcb1-h12a-i",
      "slug": "stelpro-sepb-h12a-o-sfcb1-h12a-i",
      "modelId": "model-stelpro-sepb-h12a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h12a-o",
      "indoorUnitId": "iu-sfcb1-h12a-i",
      "minHeatingTempC": -25,
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h24a-o-sfcb1-h24a-i",
      "slug": "stelpro-sepb-h24a-o-sfcb1-h24a-i",
      "modelId": "model-stelpro-sepb-h24a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h24a-o",
      "indoorUnitId": "iu-sfcb1-h24a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sinb-h24a-o-sinb-h24a-i",
      "slug": "stelpro-sinb-h24a-o-sinb-h24a-i",
      "modelId": "model-stelpro-sinb-h24a-o",
      "outdoorUnitId": "ou-stelpro-sinb-h24a-o",
      "indoorUnitId": "iu-sinb-h24a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sepb-h18a-o-sfcb1-h18a-i",
      "slug": "stelpro-sepb-h18a-o-sfcb1-h18a-i",
      "modelId": "model-stelpro-sepb-h18a-o",
      "outdoorUnitId": "ou-stelpro-sepb-h18a-o",
      "indoorUnitId": "iu-sfcb1-h18a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h24a-o-sahb1-h24a-i",
      "slug": "stelpro-sdb1-h24a-o-sahb1-h24a-i",
      "modelId": "model-stelpro-sdb1-h24a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h24a-o",
      "indoorUnitId": "iu-sahb1-h24a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h36a-o-sahb1-h36a-i",
      "slug": "stelpro-sdb1-h36a-o-sahb1-h36a-i",
      "modelId": "model-stelpro-sdb1-h36a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h36a-o",
      "indoorUnitId": "iu-sahb1-h36a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h30a-o-sahb1-h30a-i",
      "slug": "stelpro-sdb1-h30a-o-sahb1-h30a-i",
      "modelId": "model-stelpro-sdb1-h30a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h30a-o",
      "indoorUnitId": "iu-sahb1-h30a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h24a-o-sacb1-h24a1418-i",
      "slug": "stelpro-sdb1-h24a-o-sacb1-h24a1418-i",
      "modelId": "model-stelpro-sdb1-h24a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h24a-o",
      "indoorUnitId": "iu-sacb1-h24a1418-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h48a-o-sahb1-h48a-i",
      "slug": "stelpro-sdb1-h48a-o-sahb1-h48a-i",
      "modelId": "model-stelpro-sdb1-h48a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h48a-o",
      "indoorUnitId": "iu-sahb1-h48a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h24a-o-sacb1-h24a1718-i",
      "slug": "stelpro-sdb1-h24a-o-sacb1-h24a1718-i",
      "modelId": "model-stelpro-sdb1-h24a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h24a-o",
      "indoorUnitId": "iu-sacb1-h24a1718-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h30a-o-sacb1-h36a2124-i",
      "slug": "stelpro-sdb1-h30a-o-sacb1-h36a2124-i",
      "modelId": "model-stelpro-sdb1-h30a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h30a-o",
      "indoorUnitId": "iu-sacb1-h36a2124-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h60a-o-sahb1-h60a-i",
      "slug": "stelpro-sdb1-h60a-o-sahb1-h60a-i",
      "modelId": "model-stelpro-sdb1-h60a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h60a-o",
      "indoorUnitId": "iu-sahb1-h60a-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h30a-o-sacb1-h36a1724-i",
      "slug": "stelpro-sdb1-h30a-o-sacb1-h36a1724-i",
      "modelId": "model-stelpro-sdb1-h30a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h30a-o",
      "indoorUnitId": "iu-sacb1-h36a1724-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h60a-o-smcb1-h60a2128-i",
      "slug": "stelpro-sdb1-h60a-o-smcb1-h60a2128-i",
      "modelId": "model-stelpro-sdb1-h60a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h60a-o",
      "indoorUnitId": "iu-smcb1-h60a2128-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h36a-o-sacb1-h36a1724-i",
      "slug": "stelpro-sdb1-h36a-o-sacb1-h36a1724-i",
      "modelId": "model-stelpro-sdb1-h36a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h36a-o",
      "indoorUnitId": "iu-sacb1-h36a1724-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h36a-o-sacb1-h36a2124-i",
      "slug": "stelpro-sdb1-h36a-o-sacb1-h36a2124-i",
      "modelId": "model-stelpro-sdb1-h36a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h36a-o",
      "indoorUnitId": "iu-sacb1-h36a2124-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h30a-o-sacb1-h36a1424-i",
      "slug": "stelpro-sdb1-h30a-o-sacb1-h36a1424-i",
      "modelId": "model-stelpro-sdb1-h30a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h30a-o",
      "indoorUnitId": "iu-sacb1-h36a1424-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h60a-o-sacb1-h60a2428-i",
      "slug": "stelpro-sdb1-h60a-o-sacb1-h60a2428-i",
      "modelId": "model-stelpro-sdb1-h60a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h60a-o",
      "indoorUnitId": "iu-sacb1-h60a2428-i",
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
          "sourceId": "src-stelpro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stelpro-sdb1-h48a-o-smcb1-h60a2128-i",
      "slug": "stelpro-sdb1-h48a-o-smcb1-h60a2128-i",
      "modelId": "model-stelpro-sdb1-h48a-o",
      "outdoorUnitId": "ou-stelpro-sdb1-h48a-o",
      "indoorUnitId": "iu-smcb1-h60a2128-i",
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
          "sourceId": "src-stelpro-epa",
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
