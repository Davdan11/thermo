import type { BrandDataset } from "../../types";

export const brand_senvilleDataset: BrandDataset = {
  "brand": {
    "id": "brand-senville",
    "slug": "senville",
    "name": "Senville",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Senville",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-senville-epa",
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
      "id": "series-senville-sene-series",
      "slug": "senville-sene-series",
      "name": "SENE Series",
      "brandId": "brand-senville",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SENE Series de Senville",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-senville-sen-series",
      "slug": "senville-sen-series",
      "name": "SEN series",
      "brandId": "brand-senville",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SEN series de Senville",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-senville-sena-series",
      "slug": "senville-sena-series",
      "name": "SENA Series",
      "brandId": "brand-senville",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SENA Series de Senville",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-senville-senl-series",
      "slug": "senville-senl-series",
      "name": "SENL Series",
      "brandId": "brand-senville",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série SENL Series de Senville",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-senville-sendc-series",
      "slug": "senville-sendc-series",
      "name": "SENDC Series",
      "brandId": "brand-senville",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SENDC Series de Senville",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-senville-sendc",
      "slug": "senville-sendc",
      "name": "SENDC",
      "brandId": "brand-senville",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SENDC de Senville",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-senville-sene-09el-oh",
      "slug": "senville-sene-09el-oh",
      "name": "Senville SENE-09EL-OH",
      "seriesId": "series-senville-sene-series",
      "brandId": "brand-senville",
      "modelNumber": "SENE-09EL-OH",
      "normalizedModelNumber": "sene-09el-oh",
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
      "id": "model-senville-sene-12el-oh",
      "slug": "senville-sene-12el-oh",
      "name": "Senville SENE-12EL-OH",
      "seriesId": "series-senville-sene-series",
      "brandId": "brand-senville",
      "modelNumber": "SENE-12EL-OH",
      "normalizedModelNumber": "sene-12el-oh",
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
      "id": "model-senville-sena09hfoq",
      "slug": "senville-sena09hfoq",
      "name": "Senville SENA/09HF/OQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA/09HF/OQ",
      "normalizedModelNumber": "sena/09hf/oq",
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
      "id": "model-senville-sena-09hf-og",
      "slug": "senville-sena-09hf-og",
      "name": "Senville SENA-09HF-OG",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-09HF-OG",
      "normalizedModelNumber": "sena-09hf-og",
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
      "id": "model-senville-sene-18el-ihh",
      "slug": "senville-sene-18el-ihh",
      "name": "Senville SENE-18EL-IHH",
      "seriesId": "series-senville-sene-series",
      "brandId": "brand-senville",
      "modelNumber": "SENE-18EL-IHH",
      "normalizedModelNumber": "sene-18el-ihh",
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
      "id": "model-senville-sene-18el-oh",
      "slug": "senville-sene-18el-oh",
      "name": "Senville SENE-18EL-OH",
      "seriesId": "series-senville-sene-series",
      "brandId": "brand-senville",
      "modelNumber": "SENE-18EL-OH",
      "normalizedModelNumber": "sene-18el-oh",
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
      "id": "model-senville-sena12hfoq",
      "slug": "senville-sena12hfoq",
      "name": "Senville SENA/12HF/OQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA/12HF/OQ",
      "normalizedModelNumber": "sena/12hf/oq",
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
      "id": "model-senville-sena-06hf-og",
      "slug": "senville-sena-06hf-og",
      "name": "Senville SENA-06HF-OG",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-06HF-OG",
      "normalizedModelNumber": "sena-06hf-og",
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
      "id": "model-senville-sena-12hf-og",
      "slug": "senville-sena-12hf-og",
      "name": "Senville SENA-12HF-OG",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-12HF-OG",
      "normalizedModelNumber": "sena-12hf-og",
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
      "id": "model-senville-sena-18hf-moa",
      "slug": "senville-sena-18hf-moa",
      "name": "Senville SENA-18HF-MOA",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-18HF-MOA",
      "normalizedModelNumber": "sena-18hf-moa",
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
      "id": "model-senville-sene-24el-oh",
      "slug": "senville-sene-24el-oh",
      "name": "Senville SENE-24EL-OH",
      "seriesId": "series-senville-sene-series",
      "brandId": "brand-senville",
      "modelNumber": "SENE-24EL-OH",
      "normalizedModelNumber": "sene-24el-oh",
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
      "id": "model-senville-sena30hfmoq",
      "slug": "senville-sena30hfmoq",
      "name": "Senville SENA/30HF/MOQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA/30HF/MOQ",
      "normalizedModelNumber": "sena/30hf/moq",
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
      "id": "model-senville-sena36hfmoq",
      "slug": "senville-sena36hfmoq",
      "name": "Senville SENA/36HF/MOQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA/36HF/MOQ",
      "normalizedModelNumber": "sena/36hf/moq",
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
      "id": "model-senville-sena-15hf-og",
      "slug": "senville-sena-15hf-og",
      "name": "Senville SENA-15HF-OG",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-15HF-OG",
      "normalizedModelNumber": "sena-15hf-og",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 15000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-senville-sena48hfmoq",
      "slug": "senville-sena48hfmoq",
      "name": "Senville SENA/48HF/MOQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA/48HF/MOQ",
      "normalizedModelNumber": "sena/48hf/moq",
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
      "id": "model-senville-sena-28hf-moa",
      "slug": "senville-sena-28hf-moa",
      "name": "Senville SENA-28HF-MOA",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-28HF-MOA",
      "normalizedModelNumber": "sena-28hf-moa",
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
      "id": "model-senville-sena-36hf-moa",
      "slug": "senville-sena-36hf-moa",
      "name": "Senville SENA-36HF-MOA",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-36HF-MOA",
      "normalizedModelNumber": "sena-36hf-moa",
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
      "id": "model-senville-sena-48hf-moa",
      "slug": "senville-sena-48hf-moa",
      "name": "Senville SENA-48HF-MOA",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-48HF-MOA",
      "normalizedModelNumber": "sena-48hf-moa",
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
      "id": "model-senville-sena-28hf-mob",
      "slug": "senville-sena-28hf-mob",
      "name": "Senville SENA-28HF-MOB",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-28HF-MOB",
      "normalizedModelNumber": "sena-28hf-mob",
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
      "id": "model-senville-sena18hfmoq",
      "slug": "senville-sena18hfmoq",
      "name": "Senville SENA/18HF/MOQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA/18HF/MOQ",
      "normalizedModelNumber": "sena/18hf/moq",
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
      "id": "model-senville-sena-36hf-mob",
      "slug": "senville-sena-36hf-mob",
      "name": "Senville SENA-36HF-MOB",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-36HF-MOB",
      "normalizedModelNumber": "sena-36hf-mob",
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
      "id": "model-senville-sena-55hf-moa",
      "slug": "senville-sena-55hf-moa",
      "name": "Senville SENA-55HF-MOA",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-55HF-MOA",
      "normalizedModelNumber": "sena-55hf-moa",
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
      "id": "model-senville-sena-18hf-mob",
      "slug": "senville-sena-18hf-mob",
      "name": "Senville SENA-18HF-MOB",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-18HF-MOB",
      "normalizedModelNumber": "sena-18hf-mob",
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
      "id": "model-senville-sena-48hf-mob",
      "slug": "senville-sena-48hf-mob",
      "name": "Senville SENA-48HF-MOB",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-48HF-MOB",
      "normalizedModelNumber": "sena-48hf-mob",
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
      "id": "model-senville-senl09cd220oy",
      "slug": "senville-senl09cd220oy",
      "name": "Senville SENL/09CD220/OY",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENL/09CD220/OY",
      "normalizedModelNumber": "senl/09cd220/oy",
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
      "id": "model-senville-senl09cdoy",
      "slug": "senville-senl09cdoy",
      "name": "Senville SENL/09CD/OY",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENL/09CD/OY",
      "normalizedModelNumber": "senl/09cd/oy",
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
      "id": "model-senville-sena18hfoq",
      "slug": "senville-sena18hfoq",
      "name": "Senville SENA/18HF/OQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA/18HF/OQ",
      "normalizedModelNumber": "sena/18hf/oq",
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
      "id": "model-senville-sena24hfoq",
      "slug": "senville-sena24hfoq",
      "name": "Senville SENA/24HF/OQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA/24HF/OQ",
      "normalizedModelNumber": "sena/24hf/oq",
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
      "id": "model-senville-senl-09cd-ol",
      "slug": "senville-senl-09cd-ol",
      "name": "Senville SENL-09CD-OL",
      "seriesId": "series-senville-senl-series",
      "brandId": "brand-senville",
      "modelNumber": "SENL-09CD-OL",
      "normalizedModelNumber": "senl-09cd-ol",
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
      "id": "model-senville-sena-18hf-og",
      "slug": "senville-sena-18hf-og",
      "name": "Senville SENA-18HF-OG",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-18HF-OG",
      "normalizedModelNumber": "sena-18hf-og",
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
      "id": "model-senville-senl-09cd220-ol",
      "slug": "senville-senl-09cd220-ol",
      "name": "Senville SENL-09CD220-OL",
      "seriesId": "series-senville-senl-series",
      "brandId": "brand-senville",
      "modelNumber": "SENL-09CD220-OL",
      "normalizedModelNumber": "senl-09cd220-ol",
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
      "id": "model-senville-sena-24hf-og",
      "slug": "senville-sena-24hf-og",
      "name": "Senville SENA-24HF-OG",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-24HF-OG",
      "normalizedModelNumber": "sena-24hf-og",
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
      "id": "model-senville-senl-30cd-ol",
      "slug": "senville-senl-30cd-ol",
      "name": "Senville SENL-30CD-OL",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENL-30CD-OL",
      "normalizedModelNumber": "senl-30cd-ol",
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
      "id": "model-senville-sena-33hf-oq",
      "slug": "senville-sena-33hf-oq",
      "name": "Senville SENA-33HF-OQ",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-33HF-OQ",
      "normalizedModelNumber": "sena-33hf-oq",
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
      "id": "model-senville-sena-33hf-og",
      "slug": "senville-sena-33hf-og",
      "name": "Senville SENA-33HF-OG",
      "seriesId": "series-senville-sena-series",
      "brandId": "brand-senville",
      "modelNumber": "SENA-33HF-OG",
      "normalizedModelNumber": "sena-33hf-og",
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
      "id": "model-senville-senl-24cd-ol",
      "slug": "senville-senl-24cd-ol",
      "name": "Senville SENL-24CD-OL",
      "seriesId": "series-senville-senl-series",
      "brandId": "brand-senville",
      "modelNumber": "SENL-24CD-OL",
      "normalizedModelNumber": "senl-24cd-ol",
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
      "id": "model-senville-sendc-24hf-og",
      "slug": "senville-sendc-24hf-og",
      "name": "Senville SENDC-24HF-OG",
      "seriesId": "series-senville-sendc-series",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-24HF-OG",
      "normalizedModelNumber": "sendc-24hf-og",
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
      "id": "model-senville-sendc-24hf-om",
      "slug": "senville-sendc-24hf-om",
      "name": "Senville SENDC-24HF-OM",
      "seriesId": "series-senville-sendc",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-24HF-OM",
      "normalizedModelNumber": "sendc-24hf-om",
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
      "id": "model-senville-sendc-36hf-og",
      "slug": "senville-sendc-36hf-og",
      "name": "Senville SENDC-36HF-OG",
      "seriesId": "series-senville-sendc-series",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-36HF-OG",
      "normalizedModelNumber": "sendc-36hf-og",
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
      "id": "model-senville-sendc-30hf-og",
      "slug": "senville-sendc-30hf-og",
      "name": "Senville SENDC-30HF-OG",
      "seriesId": "series-senville-sendc-series",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-30HF-OG",
      "normalizedModelNumber": "sendc-30hf-og",
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
      "id": "model-senville-sendc-48hf-og",
      "slug": "senville-sendc-48hf-og",
      "name": "Senville SENDC-48HF-OG",
      "seriesId": "series-senville-sendc-series",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-48HF-OG",
      "normalizedModelNumber": "sendc-48hf-og",
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
      "id": "model-senville-sendc-60hf-og",
      "slug": "senville-sendc-60hf-og",
      "name": "Senville SENDC-60HF-OG",
      "seriesId": "series-senville-sen-series",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-60HF-OG",
      "normalizedModelNumber": "sendc-60hf-og",
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
      "id": "model-senville-sendc-36hf-om",
      "slug": "senville-sendc-36hf-om",
      "name": "Senville SENDC-36HF-OM",
      "seriesId": "series-senville-sendc",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-36HF-OM",
      "normalizedModelNumber": "sendc-36hf-om",
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
      "id": "model-senville-sendc-48hf-om",
      "slug": "senville-sendc-48hf-om",
      "name": "Senville SENDC-48HF-OM",
      "seriesId": "series-senville-sendc",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-48HF-OM",
      "normalizedModelNumber": "sendc-48hf-om",
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
      "id": "model-senville-sendc-60hf-om",
      "slug": "senville-sendc-60hf-om",
      "name": "Senville SENDC-60HF-OM",
      "seriesId": "series-senville-sendc",
      "brandId": "brand-senville",
      "modelNumber": "SENDC-60HF-OM",
      "normalizedModelNumber": "sendc-60hf-om",
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
      "id": "ou-senville-sene-09el-oh",
      "modelNumber": "SENE-09EL-OH",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sene-12el-oh",
      "modelNumber": "SENE-12EL-OH",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena09hfoq",
      "modelNumber": "SENA/09HF/OQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena-09hf-og",
      "modelNumber": "SENA-09HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sene-18el-ihh",
      "modelNumber": "SENE-18EL-IHH",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sene-18el-oh",
      "modelNumber": "SENE-18EL-OH",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena12hfoq",
      "modelNumber": "SENA/12HF/OQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena-06hf-og",
      "modelNumber": "SENA-06HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-12hf-og",
      "modelNumber": "SENA-12HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-18hf-moa",
      "modelNumber": "SENA-18HF-MOA",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sene-24el-oh",
      "modelNumber": "SENE-24EL-OH",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena30hfmoq",
      "modelNumber": "SENA/30HF/MOQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena36hfmoq",
      "modelNumber": "SENA/36HF/MOQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena-15hf-og",
      "modelNumber": "SENA-15HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena48hfmoq",
      "modelNumber": "SENA/48HF/MOQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena-28hf-moa",
      "modelNumber": "SENA-28HF-MOA",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-36hf-moa",
      "modelNumber": "SENA-36HF-MOA",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-48hf-moa",
      "modelNumber": "SENA-48HF-MOA",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-28hf-mob",
      "modelNumber": "SENA-28HF-MOB",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena18hfmoq",
      "modelNumber": "SENA/18HF/MOQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena-36hf-mob",
      "modelNumber": "SENA-36HF-MOB",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena-55hf-moa",
      "modelNumber": "SENA-55HF-MOA",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-18hf-mob",
      "modelNumber": "SENA-18HF-MOB",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena-48hf-mob",
      "modelNumber": "SENA-48HF-MOB",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-senl09cd220oy",
      "modelNumber": "SENL/09CD220/OY",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-senl09cdoy",
      "modelNumber": "SENL/09CD/OY",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena18hfoq",
      "modelNumber": "SENA/18HF/OQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena24hfoq",
      "modelNumber": "SENA/24HF/OQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-senl-09cd-ol",
      "modelNumber": "SENL-09CD-OL",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-18hf-og",
      "modelNumber": "SENA-18HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-senl-09cd220-ol",
      "modelNumber": "SENL-09CD220-OL",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-24hf-og",
      "modelNumber": "SENA-24HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-senl-30cd-ol",
      "modelNumber": "SENL-30CD-OL",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sena-33hf-oq",
      "modelNumber": "SENA-33HF-OQ",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sena-33hf-og",
      "modelNumber": "SENA-33HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-senl-24cd-ol",
      "modelNumber": "SENL-24CD-OL",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sendc-24hf-og",
      "modelNumber": "SENDC-24HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sendc-24hf-om",
      "modelNumber": "SENDC-24HF-OM",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sendc-36hf-og",
      "modelNumber": "SENDC-36HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sendc-30hf-og",
      "modelNumber": "SENDC-30HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sendc-48hf-og",
      "modelNumber": "SENDC-48HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sendc-60hf-og",
      "modelNumber": "SENDC-60HF-OG",
      "brandId": "brand-senville",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-senville-sendc-36hf-om",
      "modelNumber": "SENDC-36HF-OM",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sendc-48hf-om",
      "modelNumber": "SENDC-48HF-OM",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-senville-sendc-60hf-om",
      "modelNumber": "SENDC-60HF-OM",
      "brandId": "brand-senville",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-sene-09el-ihh",
      "modelNumber": "SENE-09EL-IHH",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sene-12el-ihh",
      "modelNumber": "SENE-12EL-IHH",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena09hfiq",
      "modelNumber": "SENA/09HF/IQ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-09hf-igg",
      "modelNumber": "SENA-09HF-IGG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sene-18el-oh",
      "modelNumber": "SENE-18EL-OH",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sene-18el-ihh",
      "modelNumber": "SENE-18EL-IHH",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena12hfiq",
      "modelNumber": "SENA/12HF/IQ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-06hf-igg",
      "modelNumber": "SENA-06HF-IGG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-12hf-igg",
      "modelNumber": "SENA-12HF-IGG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-12hf-ifg",
      "modelNumber": "SENA-12HF-IFG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51020",
      "modelNumber": "IU-51020",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sene-24el-ihh",
      "modelNumber": "SENE-24EL-IHH",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51057",
      "modelNumber": "IU-51057",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-12hf-ifu",
      "modelNumber": "SENA-12HF-IFU",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-09hf-1wcg",
      "modelNumber": "SENA-09HF-1WCG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51058",
      "modelNumber": "IU-51058",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena12hfifq",
      "modelNumber": "SENA/12HF/IFQ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-15hf-igg",
      "modelNumber": "SENA-15HF-IGG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51059",
      "modelNumber": "IU-51059",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51031",
      "modelNumber": "IU-51031",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51035",
      "modelNumber": "IU-51035",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51037",
      "modelNumber": "IU-51037",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51032",
      "modelNumber": "IU-51032",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-12hf-1wcg",
      "modelNumber": "SENA-12HF-1WCG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51048",
      "modelNumber": "IU-51048",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-09hf-icg",
      "modelNumber": "SENA-09HF-ICG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51036",
      "modelNumber": "IU-51036",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena12hficz",
      "modelNumber": "SENA/12HF/ICZ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-12hf-icg",
      "modelNumber": "SENA-12HF-ICG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51039",
      "modelNumber": "IU-51039",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51021",
      "modelNumber": "IU-51021",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-06hf-1wcg",
      "modelNumber": "SENA-06HF-1WCG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51038",
      "modelNumber": "IU-51038",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-senl09cd220iy",
      "modelNumber": "SENL/09CD220/IY",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-senl09cdiy",
      "modelNumber": "SENL/09CD/IY",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena18hfiq",
      "modelNumber": "SENA/18HF/IQ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena24hfiq",
      "modelNumber": "SENA/24HF/IQ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-senl-09cd-ill",
      "modelNumber": "SENL-09CD-ILL",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-09hf-idg",
      "modelNumber": "SENA-09HF-IDG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-18hf-igg",
      "modelNumber": "SENA-18HF-IGG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-senl-09cd220-ill",
      "modelNumber": "SENL-09CD220-ILL",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-24hf-igg",
      "modelNumber": "SENA-24HF-IGG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-24hf-icg",
      "modelNumber": "SENA-24HF-ICG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-18hf-1wcg",
      "modelNumber": "SENA-18HF-1WCG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena24hfif",
      "modelNumber": "SENA/24HF/IF",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena18hfif",
      "modelNumber": "SENA/18HF/IF",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena09hficz",
      "modelNumber": "SENA/09HF/ICZ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena24hficq",
      "modelNumber": "SENA/24HF/ICQ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-18hf-ifg",
      "modelNumber": "SENA-18HF-IFG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-24hf-ifg",
      "modelNumber": "SENA-24HF-IFG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena09hfid",
      "modelNumber": "SENA/09HF/ID",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-12hf-idg",
      "modelNumber": "SENA-12HF-IDG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-senl-30cd-ill",
      "modelNumber": "SENL-30CD-ILL",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena18hficz",
      "modelNumber": "SENA/18HF/ICZ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-18hf-icg",
      "modelNumber": "SENA-18HF-ICG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena12hfid",
      "modelNumber": "SENA/12HF/ID",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-33hf-iq",
      "modelNumber": "SENA-33HF-IQ",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-33hf-igg",
      "modelNumber": "SENA-33HF-IGG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena24hfid",
      "modelNumber": "SENA/24HF/ID",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena-24hf-idg",
      "modelNumber": "SENA-24HF-IDG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-senl-24cd-ill",
      "modelNumber": "SENL-24CD-ILL",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sendc-24hf-ig",
      "modelNumber": "SENDC-24HF-IG",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sena-18hf-idg",
      "modelNumber": "SENA-18HF-IDG",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sena18hfid",
      "modelNumber": "SENA/18HF/ID",
      "brandId": "brand-senville",
      "type": "wall-single"
    },
    {
      "id": "iu-sendc-24hf-im",
      "modelNumber": "SENDC-24HF-IM",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-36hf-ig",
      "modelNumber": "SENDC-36HF-IG",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-30hf-ig",
      "modelNumber": "SENDC-30HF-IG",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-48hf-ig",
      "modelNumber": "SENDC-48HF-IG",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-60co-c",
      "modelNumber": "SENDC-60CO-C",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-60hf-ig",
      "modelNumber": "SENDC-60HF-IG",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-36hf-im",
      "modelNumber": "SENDC-36HF-IM",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-24co-b",
      "modelNumber": "SENDC-24CO-B",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-36co-b",
      "modelNumber": "SENDC-36CO-B",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-36co-c",
      "modelNumber": "SENDC-36CO-C",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-48hf-im",
      "modelNumber": "SENDC-48HF-IM",
      "brandId": "brand-senville",
      "type": "central-ducted"
    },
    {
      "id": "iu-sendc-60hf-im",
      "modelNumber": "SENDC-60HF-IM",
      "brandId": "brand-senville",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-senville-sene-09el-oh-sene-09el-ihh",
      "slug": "senville-sene-09el-oh-sene-09el-ihh",
      "modelId": "model-senville-sene-09el-oh",
      "outdoorUnitId": "ou-senville-sene-09el-oh",
      "indoorUnitId": "iu-sene-09el-ihh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sene-12el-oh-sene-12el-ihh",
      "slug": "senville-sene-12el-oh-sene-12el-ihh",
      "modelId": "model-senville-sene-12el-oh",
      "outdoorUnitId": "ou-senville-sene-12el-oh",
      "indoorUnitId": "iu-sene-12el-ihh",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena09hfoq-sena09hfiq",
      "slug": "senville-sena09hfoq-sena09hfiq",
      "modelId": "model-senville-sena09hfoq",
      "outdoorUnitId": "ou-senville-sena09hfoq",
      "indoorUnitId": "iu-sena09hfiq",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-09hf-og-sena-09hf-igg",
      "slug": "senville-sena-09hf-og-sena-09hf-igg",
      "modelId": "model-senville-sena-09hf-og",
      "outdoorUnitId": "ou-senville-sena-09hf-og",
      "indoorUnitId": "iu-sena-09hf-igg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sene-18el-ihh-sene-18el-oh",
      "slug": "senville-sene-18el-ihh-sene-18el-oh",
      "modelId": "model-senville-sene-18el-ihh",
      "outdoorUnitId": "ou-senville-sene-18el-ihh",
      "indoorUnitId": "iu-sene-18el-oh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 16.2,
      "sources": [
        {
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sene-18el-oh-sene-18el-ihh",
      "slug": "senville-sene-18el-oh-sene-18el-ihh",
      "modelId": "model-senville-sene-18el-oh",
      "outdoorUnitId": "ou-senville-sene-18el-oh",
      "indoorUnitId": "iu-sene-18el-ihh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 16.2,
      "sources": [
        {
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena12hfoq-sena12hfiq",
      "slug": "senville-sena12hfoq-sena12hfiq",
      "modelId": "model-senville-sena12hfoq",
      "outdoorUnitId": "ou-senville-sena12hfoq",
      "indoorUnitId": "iu-sena12hfiq",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-06hf-og-sena-06hf-igg",
      "slug": "senville-sena-06hf-og-sena-06hf-igg",
      "modelId": "model-senville-sena-06hf-og",
      "outdoorUnitId": "ou-senville-sena-06hf-og",
      "indoorUnitId": "iu-sena-06hf-igg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-12hf-og-sena-12hf-igg",
      "slug": "senville-sena-12hf-og-sena-12hf-igg",
      "modelId": "model-senville-sena-12hf-og",
      "outdoorUnitId": "ou-senville-sena-12hf-og",
      "indoorUnitId": "iu-sena-12hf-igg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-12hf-og-sena-12hf-ifg",
      "slug": "senville-sena-12hf-og-sena-12hf-ifg",
      "modelId": "model-senville-sena-12hf-og",
      "outdoorUnitId": "ou-senville-sena-12hf-og",
      "indoorUnitId": "iu-sena-12hf-ifg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-18hf-moa-iu-51020",
      "slug": "senville-sena-18hf-moa-iu-51020",
      "modelId": "model-senville-sena-18hf-moa",
      "outdoorUnitId": "ou-senville-sena-18hf-moa",
      "indoorUnitId": "iu-iu-51020",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sene-24el-oh-sene-24el-ihh",
      "slug": "senville-sene-24el-oh-sene-24el-ihh",
      "modelId": "model-senville-sene-24el-oh",
      "outdoorUnitId": "ou-senville-sene-24el-oh",
      "indoorUnitId": "iu-sene-24el-ihh",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena30hfmoq-iu-51057",
      "slug": "senville-sena30hfmoq-iu-51057",
      "modelId": "model-senville-sena30hfmoq",
      "outdoorUnitId": "ou-senville-sena30hfmoq",
      "indoorUnitId": "iu-iu-51057",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena12hfoq-sena-12hf-ifu",
      "slug": "senville-sena12hfoq-sena-12hf-ifu",
      "modelId": "model-senville-sena12hfoq",
      "outdoorUnitId": "ou-senville-sena12hfoq",
      "indoorUnitId": "iu-sena-12hf-ifu",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-09hf-og-sena-09hf-1wcg",
      "slug": "senville-sena-09hf-og-sena-09hf-1wcg",
      "modelId": "model-senville-sena-09hf-og",
      "outdoorUnitId": "ou-senville-sena-09hf-og",
      "indoorUnitId": "iu-sena-09hf-1wcg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena36hfmoq-iu-51058",
      "slug": "senville-sena36hfmoq-iu-51058",
      "modelId": "model-senville-sena36hfmoq",
      "outdoorUnitId": "ou-senville-sena36hfmoq",
      "indoorUnitId": "iu-iu-51058",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena12hfoq-sena12hfifq",
      "slug": "senville-sena12hfoq-sena12hfifq",
      "modelId": "model-senville-sena12hfoq",
      "outdoorUnitId": "ou-senville-sena12hfoq",
      "indoorUnitId": "iu-sena12hfifq",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-15hf-og-sena-15hf-igg",
      "slug": "senville-sena-15hf-og-sena-15hf-igg",
      "modelId": "model-senville-sena-15hf-og",
      "outdoorUnitId": "ou-senville-sena-15hf-og",
      "indoorUnitId": "iu-sena-15hf-igg",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena48hfmoq-iu-51059",
      "slug": "senville-sena48hfmoq-iu-51059",
      "modelId": "model-senville-sena48hfmoq",
      "outdoorUnitId": "ou-senville-sena48hfmoq",
      "indoorUnitId": "iu-iu-51059",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-28hf-moa-iu-51031",
      "slug": "senville-sena-28hf-moa-iu-51031",
      "modelId": "model-senville-sena-28hf-moa",
      "outdoorUnitId": "ou-senville-sena-28hf-moa",
      "indoorUnitId": "iu-iu-51031",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-36hf-moa-iu-51035",
      "slug": "senville-sena-36hf-moa-iu-51035",
      "modelId": "model-senville-sena-36hf-moa",
      "outdoorUnitId": "ou-senville-sena-36hf-moa",
      "indoorUnitId": "iu-iu-51035",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-48hf-moa-iu-51037",
      "slug": "senville-sena-48hf-moa-iu-51037",
      "modelId": "model-senville-sena-48hf-moa",
      "outdoorUnitId": "ou-senville-sena-48hf-moa",
      "indoorUnitId": "iu-iu-51037",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-28hf-mob-iu-51032",
      "slug": "senville-sena-28hf-mob-iu-51032",
      "modelId": "model-senville-sena-28hf-mob",
      "outdoorUnitId": "ou-senville-sena-28hf-mob",
      "indoorUnitId": "iu-iu-51032",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-12hf-og-sena-12hf-1wcg",
      "slug": "senville-sena-12hf-og-sena-12hf-1wcg",
      "modelId": "model-senville-sena-12hf-og",
      "outdoorUnitId": "ou-senville-sena-12hf-og",
      "indoorUnitId": "iu-sena-12hf-1wcg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena18hfmoq-iu-51048",
      "slug": "senville-sena18hfmoq-iu-51048",
      "modelId": "model-senville-sena18hfmoq",
      "outdoorUnitId": "ou-senville-sena18hfmoq",
      "indoorUnitId": "iu-iu-51048",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-09hf-og-sena-09hf-icg",
      "slug": "senville-sena-09hf-og-sena-09hf-icg",
      "modelId": "model-senville-sena-09hf-og",
      "outdoorUnitId": "ou-senville-sena-09hf-og",
      "indoorUnitId": "iu-sena-09hf-icg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-36hf-mob-iu-51036",
      "slug": "senville-sena-36hf-mob-iu-51036",
      "modelId": "model-senville-sena-36hf-mob",
      "outdoorUnitId": "ou-senville-sena-36hf-mob",
      "indoorUnitId": "iu-iu-51036",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.4,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena12hfoq-sena12hficz",
      "slug": "senville-sena12hfoq-sena12hficz",
      "modelId": "model-senville-sena12hfoq",
      "outdoorUnitId": "ou-senville-sena12hfoq",
      "indoorUnitId": "iu-sena12hficz",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-12hf-og-sena-12hf-icg",
      "slug": "senville-sena-12hf-og-sena-12hf-icg",
      "modelId": "model-senville-sena-12hf-og",
      "outdoorUnitId": "ou-senville-sena-12hf-og",
      "indoorUnitId": "iu-sena-12hf-icg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-55hf-moa-iu-51039",
      "slug": "senville-sena-55hf-moa-iu-51039",
      "modelId": "model-senville-sena-55hf-moa",
      "outdoorUnitId": "ou-senville-sena-55hf-moa",
      "indoorUnitId": "iu-iu-51039",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-18hf-mob-iu-51021",
      "slug": "senville-sena-18hf-mob-iu-51021",
      "modelId": "model-senville-sena-18hf-mob",
      "outdoorUnitId": "ou-senville-sena-18hf-mob",
      "indoorUnitId": "iu-iu-51021",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-06hf-og-sena-06hf-1wcg",
      "slug": "senville-sena-06hf-og-sena-06hf-1wcg",
      "modelId": "model-senville-sena-06hf-og",
      "outdoorUnitId": "ou-senville-sena-06hf-og",
      "indoorUnitId": "iu-sena-06hf-1wcg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-48hf-mob-iu-51038",
      "slug": "senville-sena-48hf-mob-iu-51038",
      "modelId": "model-senville-sena-48hf-mob",
      "outdoorUnitId": "ou-senville-sena-48hf-mob",
      "indoorUnitId": "iu-iu-51038",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-senl09cd220oy-senl09cd220iy",
      "slug": "senville-senl09cd220oy-senl09cd220iy",
      "modelId": "model-senville-senl09cd220oy",
      "outdoorUnitId": "ou-senville-senl09cd220oy",
      "indoorUnitId": "iu-senl09cd220iy",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-senl09cdoy-senl09cdiy",
      "slug": "senville-senl09cdoy-senl09cdiy",
      "modelId": "model-senville-senl09cdoy",
      "outdoorUnitId": "ou-senville-senl09cdoy",
      "indoorUnitId": "iu-senl09cdiy",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena18hfoq-sena18hfiq",
      "slug": "senville-sena18hfoq-sena18hfiq",
      "modelId": "model-senville-sena18hfoq",
      "outdoorUnitId": "ou-senville-sena18hfoq",
      "indoorUnitId": "iu-sena18hfiq",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena24hfoq-sena24hfiq",
      "slug": "senville-sena24hfoq-sena24hfiq",
      "modelId": "model-senville-sena24hfoq",
      "outdoorUnitId": "ou-senville-sena24hfoq",
      "indoorUnitId": "iu-sena24hfiq",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-senl-09cd-ol-senl-09cd-ill",
      "slug": "senville-senl-09cd-ol-senl-09cd-ill",
      "modelId": "model-senville-senl-09cd-ol",
      "outdoorUnitId": "ou-senville-senl-09cd-ol",
      "indoorUnitId": "iu-senl-09cd-ill",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-09hf-og-sena-09hf-idg",
      "slug": "senville-sena-09hf-og-sena-09hf-idg",
      "modelId": "model-senville-sena-09hf-og",
      "outdoorUnitId": "ou-senville-sena-09hf-og",
      "indoorUnitId": "iu-sena-09hf-idg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-18hf-og-sena-18hf-igg",
      "slug": "senville-sena-18hf-og-sena-18hf-igg",
      "modelId": "model-senville-sena-18hf-og",
      "outdoorUnitId": "ou-senville-sena-18hf-og",
      "indoorUnitId": "iu-sena-18hf-igg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-senl-09cd220-ol-senl-09cd220-ill",
      "slug": "senville-senl-09cd220-ol-senl-09cd220-ill",
      "modelId": "model-senville-senl-09cd220-ol",
      "outdoorUnitId": "ou-senville-senl-09cd220-ol",
      "indoorUnitId": "iu-senl-09cd220-ill",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-24hf-og-sena-24hf-igg",
      "slug": "senville-sena-24hf-og-sena-24hf-igg",
      "modelId": "model-senville-sena-24hf-og",
      "outdoorUnitId": "ou-senville-sena-24hf-og",
      "indoorUnitId": "iu-sena-24hf-igg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-24hf-og-sena-24hf-icg",
      "slug": "senville-sena-24hf-og-sena-24hf-icg",
      "modelId": "model-senville-sena-24hf-og",
      "outdoorUnitId": "ou-senville-sena-24hf-og",
      "indoorUnitId": "iu-sena-24hf-icg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-18hf-og-sena-18hf-1wcg",
      "slug": "senville-sena-18hf-og-sena-18hf-1wcg",
      "modelId": "model-senville-sena-18hf-og",
      "outdoorUnitId": "ou-senville-sena-18hf-og",
      "indoorUnitId": "iu-sena-18hf-1wcg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena24hfoq-sena24hfif",
      "slug": "senville-sena24hfoq-sena24hfif",
      "modelId": "model-senville-sena24hfoq",
      "outdoorUnitId": "ou-senville-sena24hfoq",
      "indoorUnitId": "iu-sena24hfif",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena18hfoq-sena18hfif",
      "slug": "senville-sena18hfoq-sena18hfif",
      "modelId": "model-senville-sena18hfoq",
      "outdoorUnitId": "ou-senville-sena18hfoq",
      "indoorUnitId": "iu-sena18hfif",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena09hfoq-sena09hficz",
      "slug": "senville-sena09hfoq-sena09hficz",
      "modelId": "model-senville-sena09hfoq",
      "outdoorUnitId": "ou-senville-sena09hfoq",
      "indoorUnitId": "iu-sena09hficz",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena24hfoq-sena24hficq",
      "slug": "senville-sena24hfoq-sena24hficq",
      "modelId": "model-senville-sena24hfoq",
      "outdoorUnitId": "ou-senville-sena24hfoq",
      "indoorUnitId": "iu-sena24hficq",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-18hf-og-sena-18hf-ifg",
      "slug": "senville-sena-18hf-og-sena-18hf-ifg",
      "modelId": "model-senville-sena-18hf-og",
      "outdoorUnitId": "ou-senville-sena-18hf-og",
      "indoorUnitId": "iu-sena-18hf-ifg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-24hf-og-sena-24hf-ifg",
      "slug": "senville-sena-24hf-og-sena-24hf-ifg",
      "modelId": "model-senville-sena-24hf-og",
      "outdoorUnitId": "ou-senville-sena-24hf-og",
      "indoorUnitId": "iu-sena-24hf-ifg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena09hfoq-sena09hfid",
      "slug": "senville-sena09hfoq-sena09hfid",
      "modelId": "model-senville-sena09hfoq",
      "outdoorUnitId": "ou-senville-sena09hfoq",
      "indoorUnitId": "iu-sena09hfid",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-12hf-og-sena-12hf-idg",
      "slug": "senville-sena-12hf-og-sena-12hf-idg",
      "modelId": "model-senville-sena-12hf-og",
      "outdoorUnitId": "ou-senville-sena-12hf-og",
      "indoorUnitId": "iu-sena-12hf-idg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-senl-30cd-ol-senl-30cd-ill",
      "slug": "senville-senl-30cd-ol-senl-30cd-ill",
      "modelId": "model-senville-senl-30cd-ol",
      "outdoorUnitId": "ou-senville-senl-30cd-ol",
      "indoorUnitId": "iu-senl-30cd-ill",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena18hfoq-sena18hficz",
      "slug": "senville-sena18hfoq-sena18hficz",
      "modelId": "model-senville-sena18hfoq",
      "outdoorUnitId": "ou-senville-sena18hfoq",
      "indoorUnitId": "iu-sena18hficz",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-18hf-og-sena-18hf-icg",
      "slug": "senville-sena-18hf-og-sena-18hf-icg",
      "modelId": "model-senville-sena-18hf-og",
      "outdoorUnitId": "ou-senville-sena-18hf-og",
      "indoorUnitId": "iu-sena-18hf-icg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena12hfoq-sena12hfid",
      "slug": "senville-sena12hfoq-sena12hfid",
      "modelId": "model-senville-sena12hfoq",
      "outdoorUnitId": "ou-senville-sena12hfoq",
      "indoorUnitId": "iu-sena12hfid",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-33hf-oq-sena-33hf-iq",
      "slug": "senville-sena-33hf-oq-sena-33hf-iq",
      "modelId": "model-senville-sena-33hf-oq",
      "outdoorUnitId": "ou-senville-sena-33hf-oq",
      "indoorUnitId": "iu-sena-33hf-iq",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-33hf-og-sena-33hf-igg",
      "slug": "senville-sena-33hf-og-sena-33hf-igg",
      "modelId": "model-senville-sena-33hf-og",
      "outdoorUnitId": "ou-senville-sena-33hf-og",
      "indoorUnitId": "iu-sena-33hf-igg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena24hfoq-sena24hfid",
      "slug": "senville-sena24hfoq-sena24hfid",
      "modelId": "model-senville-sena24hfoq",
      "outdoorUnitId": "ou-senville-sena24hfoq",
      "indoorUnitId": "iu-sena24hfid",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-24hf-og-sena-24hf-idg",
      "slug": "senville-sena-24hf-og-sena-24hf-idg",
      "modelId": "model-senville-sena-24hf-og",
      "outdoorUnitId": "ou-senville-sena-24hf-og",
      "indoorUnitId": "iu-sena-24hf-idg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-senl-24cd-ol-senl-24cd-ill",
      "slug": "senville-senl-24cd-ol-senl-24cd-ill",
      "modelId": "model-senville-senl-24cd-ol",
      "outdoorUnitId": "ou-senville-senl-24cd-ol",
      "indoorUnitId": "iu-senl-24cd-ill",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-24hf-og-sendc-24hf-ig",
      "slug": "senville-sendc-24hf-og-sendc-24hf-ig",
      "modelId": "model-senville-sendc-24hf-og",
      "outdoorUnitId": "ou-senville-sendc-24hf-og",
      "indoorUnitId": "iu-sendc-24hf-ig",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena-18hf-og-sena-18hf-idg",
      "slug": "senville-sena-18hf-og-sena-18hf-idg",
      "modelId": "model-senville-sena-18hf-og",
      "outdoorUnitId": "ou-senville-sena-18hf-og",
      "indoorUnitId": "iu-sena-18hf-idg",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sena18hfoq-sena18hfid",
      "slug": "senville-sena18hfoq-sena18hfid",
      "modelId": "model-senville-sena18hfoq",
      "outdoorUnitId": "ou-senville-sena18hfoq",
      "indoorUnitId": "iu-sena18hfid",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-24hf-om-sendc-24hf-im",
      "slug": "senville-sendc-24hf-om-sendc-24hf-im",
      "modelId": "model-senville-sendc-24hf-om",
      "outdoorUnitId": "ou-senville-sendc-24hf-om",
      "indoorUnitId": "iu-sendc-24hf-im",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-36hf-og-sendc-36hf-ig",
      "slug": "senville-sendc-36hf-og-sendc-36hf-ig",
      "modelId": "model-senville-sendc-36hf-og",
      "outdoorUnitId": "ou-senville-sendc-36hf-og",
      "indoorUnitId": "iu-sendc-36hf-ig",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-30hf-og-sendc-30hf-ig",
      "slug": "senville-sendc-30hf-og-sendc-30hf-ig",
      "modelId": "model-senville-sendc-30hf-og",
      "outdoorUnitId": "ou-senville-sendc-30hf-og",
      "indoorUnitId": "iu-sendc-30hf-ig",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-48hf-og-sendc-48hf-ig",
      "slug": "senville-sendc-48hf-og-sendc-48hf-ig",
      "modelId": "model-senville-sendc-48hf-og",
      "outdoorUnitId": "ou-senville-sendc-48hf-og",
      "indoorUnitId": "iu-sendc-48hf-ig",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-60hf-og-sendc-60co-c",
      "slug": "senville-sendc-60hf-og-sendc-60co-c",
      "modelId": "model-senville-sendc-60hf-og",
      "outdoorUnitId": "ou-senville-sendc-60hf-og",
      "indoorUnitId": "iu-sendc-60co-c",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-60hf-og-sendc-60hf-ig",
      "slug": "senville-sendc-60hf-og-sendc-60hf-ig",
      "modelId": "model-senville-sendc-60hf-og",
      "outdoorUnitId": "ou-senville-sendc-60hf-og",
      "indoorUnitId": "iu-sendc-60hf-ig",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-36hf-om-sendc-36hf-im",
      "slug": "senville-sendc-36hf-om-sendc-36hf-im",
      "modelId": "model-senville-sendc-36hf-om",
      "outdoorUnitId": "ou-senville-sendc-36hf-om",
      "indoorUnitId": "iu-sendc-36hf-im",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-24hf-og-sendc-24co-b",
      "slug": "senville-sendc-24hf-og-sendc-24co-b",
      "modelId": "model-senville-sendc-24hf-og",
      "outdoorUnitId": "ou-senville-sendc-24hf-og",
      "indoorUnitId": "iu-sendc-24co-b",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-36hf-og-sendc-36co-b",
      "slug": "senville-sendc-36hf-og-sendc-36co-b",
      "modelId": "model-senville-sendc-36hf-og",
      "outdoorUnitId": "ou-senville-sendc-36hf-og",
      "indoorUnitId": "iu-sendc-36co-b",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-36hf-og-sendc-36co-c",
      "slug": "senville-sendc-36hf-og-sendc-36co-c",
      "modelId": "model-senville-sendc-36hf-og",
      "outdoorUnitId": "ou-senville-sendc-36hf-og",
      "indoorUnitId": "iu-sendc-36co-c",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-48hf-om-sendc-48hf-im",
      "slug": "senville-sendc-48hf-om-sendc-48hf-im",
      "modelId": "model-senville-sendc-48hf-om",
      "outdoorUnitId": "ou-senville-sendc-48hf-om",
      "indoorUnitId": "iu-sendc-48hf-im",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-60hf-om-sendc-60hf-im",
      "slug": "senville-sendc-60hf-om-sendc-60hf-im",
      "modelId": "model-senville-sendc-60hf-om",
      "outdoorUnitId": "ou-senville-sendc-60hf-om",
      "indoorUnitId": "iu-sendc-60hf-im",
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
          "sourceId": "src-senville-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-senville-sendc-48hf-og-sendc-60co-c",
      "slug": "senville-sendc-48hf-og-sendc-60co-c",
      "modelId": "model-senville-sendc-48hf-og",
      "outdoorUnitId": "ou-senville-sendc-48hf-og",
      "indoorUnitId": "iu-sendc-60co-c",
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
          "sourceId": "src-senville-epa",
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
