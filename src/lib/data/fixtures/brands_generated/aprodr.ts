import type { BrandDataset } from "../../types";

export const brand_aprodrDataset: BrandDataset = {
  "brand": {
    "id": "brand-aprodr",
    "slug": "aprodr",
    "name": "AproDr",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AproDr",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-aprodr-epa",
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
      "id": "series-aprodr-asg-series",
      "slug": "aprodr-asg-series",
      "name": "ASG Series",
      "brandId": "brand-aprodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ASG Series de AproDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aprodr-alc-series",
      "slug": "aprodr-alc-series",
      "name": "ALC Series",
      "brandId": "brand-aprodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ALC Series de AproDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aprodr-24-seer2",
      "slug": "aprodr-24-seer2",
      "name": "24 SEER2",
      "brandId": "brand-aprodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 24 SEER2 de AproDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aprodr-am-series",
      "slug": "aprodr-am-series",
      "name": "AM Series",
      "brandId": "brand-aprodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AM Series de AproDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aprodr-aa-series",
      "slug": "aprodr-aa-series",
      "name": "AA Series",
      "brandId": "brand-aprodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AA Series de AproDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aprodr-ahu3g-series",
      "slug": "aprodr-ahu3g-series",
      "name": "AHU3G Series",
      "brandId": "brand-aprodr",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AHU3G Series de AproDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aprodr-ahu-series",
      "slug": "aprodr-ahu-series",
      "name": "AHU Series",
      "brandId": "brand-aprodr",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AHU Series de AproDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-aprodr-asg24-09h220v1b",
      "slug": "aprodr-asg24-09h220v1b",
      "name": "AproDr ASG24-09H220V1B",
      "seriesId": "series-aprodr-asg-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ASG24-09H220V1B",
      "normalizedModelNumber": "asg24-09h220v1b",
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
      "id": "model-aprodr-alc24-12h1b",
      "slug": "aprodr-alc24-12h1b",
      "name": "AproDr ALC24-12H1B",
      "seriesId": "series-aprodr-alc-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ALC24-12H1B",
      "normalizedModelNumber": "alc24-12h1b",
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
      "id": "model-aprodr-asg24-09h1b",
      "slug": "aprodr-asg24-09h1b",
      "name": "AproDr ASG24-09H1B",
      "seriesId": "series-aprodr-asg-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ASG24-09H1B",
      "normalizedModelNumber": "asg24-09h1b",
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
      "id": "model-aprodr-atpro24-12h220v1b",
      "slug": "aprodr-atpro24-12h220v1b",
      "name": "AproDr ATPRO24-12H220V1B",
      "seriesId": "series-aprodr-24-seer2",
      "brandId": "brand-aprodr",
      "modelNumber": "ATPRO24-12H220V1B",
      "normalizedModelNumber": "atpro24-12h220v1b",
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
      "id": "model-aprodr-asg24-18h1b",
      "slug": "aprodr-asg24-18h1b",
      "name": "AproDr ASG24-18H1B",
      "seriesId": "series-aprodr-asg-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ASG24-18H1B",
      "normalizedModelNumber": "asg24-18h1b",
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
      "id": "model-aprodr-asg24-24h1b",
      "slug": "aprodr-asg24-24h1b",
      "name": "AproDr ASG24-24H1B",
      "seriesId": "series-aprodr-asg-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ASG24-24H1B",
      "normalizedModelNumber": "asg24-24h1b",
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
      "id": "model-aprodr-asg24-12h1b",
      "slug": "aprodr-asg24-12h1b",
      "name": "AproDr ASG24-12H1B",
      "seriesId": "series-aprodr-asg-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ASG24-12H1B",
      "normalizedModelNumber": "asg24-12h1b",
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
      "id": "model-aprodr-asg24-12h220v1b",
      "slug": "aprodr-asg24-12h220v1b",
      "name": "AproDr ASG24-12H220V1B",
      "seriesId": "series-aprodr-asg-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ASG24-12H220V1B",
      "normalizedModelNumber": "asg24-12h220v1b",
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
      "id": "model-aprodr-am5og-36hfn1",
      "slug": "aprodr-am5og-36hfn1",
      "name": "AproDr AM5OG-36HFN1",
      "seriesId": "series-aprodr-am-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AM5OG-36HFN1",
      "normalizedModelNumber": "am5og-36hfn1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-aprodr-atpro24-24h1b",
      "slug": "aprodr-atpro24-24h1b",
      "name": "AproDr ATPRO24-24H1B",
      "seriesId": "series-aprodr-24-seer2",
      "brandId": "brand-aprodr",
      "modelNumber": "ATPRO24-24H1B",
      "normalizedModelNumber": "atpro24-24h1b",
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
      "id": "model-aprodr-atpro24-09h220v1b",
      "slug": "aprodr-atpro24-09h220v1b",
      "name": "AproDr ATPRO24-09H220V1B",
      "seriesId": "series-aprodr-24-seer2",
      "brandId": "brand-aprodr",
      "modelNumber": "ATPRO24-09H220V1B",
      "normalizedModelNumber": "atpro24-09h220v1b",
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
      "id": "model-aprodr-am4oj-27hfn1",
      "slug": "aprodr-am4oj-27hfn1",
      "name": "AproDr AM4OJ-27HFN1",
      "seriesId": "series-aprodr-am-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AM4OJ-27HFN1",
      "normalizedModelNumber": "am4oj-27hfn1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 26600,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-aprodr-am3oa-18hfn1",
      "slug": "aprodr-am3oa-18hfn1",
      "name": "AproDr AM3OA-18HFN1",
      "seriesId": "series-aprodr-am-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AM3OA-18HFN1",
      "normalizedModelNumber": "am3oa-18hfn1",
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
      "id": "model-aprodr-atpro24-09h1b",
      "slug": "aprodr-atpro24-09h1b",
      "name": "AproDr ATPRO24-09H1B",
      "seriesId": "series-aprodr-24-seer2",
      "brandId": "brand-aprodr",
      "modelNumber": "ATPRO24-09H1B",
      "normalizedModelNumber": "atpro24-09h1b",
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
      "id": "model-aprodr-atpro24-18h1b",
      "slug": "aprodr-atpro24-18h1b",
      "name": "AproDr ATPRO24-18H1B",
      "seriesId": "series-aprodr-24-seer2",
      "brandId": "brand-aprodr",
      "modelNumber": "ATPRO24-18H1B",
      "normalizedModelNumber": "atpro24-18h1b",
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
      "id": "model-aprodr-atpro24-12h1b",
      "slug": "aprodr-atpro24-12h1b",
      "name": "AproDr ATPRO24-12H1B",
      "seriesId": "series-aprodr-24-seer2",
      "brandId": "brand-aprodr",
      "modelNumber": "ATPRO24-12H1B",
      "normalizedModelNumber": "atpro24-12h1b",
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
      "id": "model-aprodr-aag22-30h1b",
      "slug": "aprodr-aag22-30h1b",
      "name": "AproDr AAG22-30H1B",
      "seriesId": "series-aprodr-aa-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AAG22-30H1B",
      "normalizedModelNumber": "aag22-30h1b",
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
      "id": "model-aprodr-alc24-18h1b",
      "slug": "aprodr-alc24-18h1b",
      "name": "AproDr ALC24-18H1B",
      "seriesId": "series-aprodr-alc-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ALC24-18H1B",
      "normalizedModelNumber": "alc24-18h1b",
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
      "id": "model-aprodr-alc24-09h1b",
      "slug": "aprodr-alc24-09h1b",
      "name": "AproDr ALC24-09H1B",
      "seriesId": "series-aprodr-alc-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ALC24-09H1B",
      "normalizedModelNumber": "alc24-09h1b",
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
      "id": "model-aprodr-alc24-24h1b",
      "slug": "aprodr-alc24-24h1b",
      "name": "AproDr ALC24-24H1B",
      "seriesId": "series-aprodr-alc-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ALC24-24H1B",
      "normalizedModelNumber": "alc24-24h1b",
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
      "id": "model-aprodr-aag22-09h220v1b",
      "slug": "aprodr-aag22-09h220v1b",
      "name": "AproDr AAG22-09H220V1B",
      "seriesId": "series-aprodr-aa-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AAG22-09H220V1B",
      "normalizedModelNumber": "aag22-09h220v1b",
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
      "id": "model-aprodr-aag22-09h1b",
      "slug": "aprodr-aag22-09h1b",
      "name": "AproDr AAG22-09H1B",
      "seriesId": "series-aprodr-aa-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AAG22-09H1B",
      "normalizedModelNumber": "aag22-09h1b",
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
      "id": "model-aprodr-am6og-48hfn1",
      "slug": "aprodr-am6og-48hfn1",
      "name": "AproDr AM6OG-48HFN1",
      "seriesId": "series-aprodr-am-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AM6OG-48HFN1",
      "normalizedModelNumber": "am6og-48hfn1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-aprodr-aag22-18h1b",
      "slug": "aprodr-aag22-18h1b",
      "name": "AproDr AAG22-18H1B",
      "seriesId": "series-aprodr-aa-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AAG22-18H1B",
      "normalizedModelNumber": "aag22-18h1b",
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
      "id": "model-aprodr-alc24-36h1b",
      "slug": "aprodr-alc24-36h1b",
      "name": "AproDr ALC24-36H1B",
      "seriesId": "series-aprodr-alc-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ALC24-36H1B",
      "normalizedModelNumber": "alc24-36h1b",
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
      "id": "model-aprodr-ahu3g-18hfn-b",
      "slug": "aprodr-ahu3g-18hfn-b",
      "name": "AproDr AHU3G-18HFN-B",
      "seriesId": "series-aprodr-ahu3g-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU3G-18HFN-B",
      "normalizedModelNumber": "ahu3g-18hfn-b",
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
      "id": "model-aprodr-alc24-48h1b",
      "slug": "aprodr-alc24-48h1b",
      "name": "AproDr ALC24-48H1B",
      "seriesId": "series-aprodr-alc-series",
      "brandId": "brand-aprodr",
      "modelNumber": "ALC24-48H1B",
      "normalizedModelNumber": "alc24-48h1b",
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
      "id": "model-aprodr-ahu19-18hn1-c",
      "slug": "aprodr-ahu19-18hn1-c",
      "name": "AproDr AHU19-18HN1-C",
      "seriesId": "series-aprodr-ahu-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU19-18HN1-C",
      "normalizedModelNumber": "ahu19-18hn1-c",
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
      "id": "model-aprodr-ahu3g-24hfn-b",
      "slug": "aprodr-ahu3g-24hfn-b",
      "name": "AproDr AHU3G-24HFN-B",
      "seriesId": "series-aprodr-ahu3g-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU3G-24HFN-B",
      "normalizedModelNumber": "ahu3g-24hfn-b",
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
      "id": "model-aprodr-aag22-24h1b",
      "slug": "aprodr-aag22-24h1b",
      "name": "AproDr AAG22-24H1B",
      "seriesId": "series-aprodr-aa-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AAG22-24H1B",
      "normalizedModelNumber": "aag22-24h1b",
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
      "id": "model-aprodr-ahu19-24hn1-c",
      "slug": "aprodr-ahu19-24hn1-c",
      "name": "AproDr AHU19-24HN1-C",
      "seriesId": "series-aprodr-ahu-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU19-24HN1-C",
      "normalizedModelNumber": "ahu19-24hn1-c",
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
      "id": "model-aprodr-ahu3g-36hfn-b",
      "slug": "aprodr-ahu3g-36hfn-b",
      "name": "AproDr AHU3G-36HFN-B",
      "seriesId": "series-aprodr-ahu3g-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU3G-36HFN-B",
      "normalizedModelNumber": "ahu3g-36hfn-b",
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
      "id": "model-aprodr-ahu3g-60hfn-b",
      "slug": "aprodr-ahu3g-60hfn-b",
      "name": "AproDr AHU3G-60HFN-B",
      "seriesId": "series-aprodr-ahu3g-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU3G-60HFN-B",
      "normalizedModelNumber": "ahu3g-60hfn-b",
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
      "id": "model-aprodr-ahu3g-48hfn-b",
      "slug": "aprodr-ahu3g-48hfn-b",
      "name": "AproDr AHU3G-48HFN-B",
      "seriesId": "series-aprodr-ahu3g-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU3G-48HFN-B",
      "normalizedModelNumber": "ahu3g-48hfn-b",
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
      "id": "model-aprodr-ahu3g-30hfn-b",
      "slug": "aprodr-ahu3g-30hfn-b",
      "name": "AproDr AHU3G-30HFN-B",
      "seriesId": "series-aprodr-ahu3g-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU3G-30HFN-B",
      "normalizedModelNumber": "ahu3g-30hfn-b",
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
      "id": "model-aprodr-ahu19-36hn1-c",
      "slug": "aprodr-ahu19-36hn1-c",
      "name": "AproDr AHU19-36HN1-C",
      "seriesId": "series-aprodr-ahu-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU19-36HN1-C",
      "normalizedModelNumber": "ahu19-36hn1-c",
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
      "id": "model-aprodr-ahu19-48hn1-c",
      "slug": "aprodr-ahu19-48hn1-c",
      "name": "AproDr AHU19-48HN1-C",
      "seriesId": "series-aprodr-ahu-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU19-48HN1-C",
      "normalizedModelNumber": "ahu19-48hn1-c",
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
      "id": "model-aprodr-ahu19-60hn1-c",
      "slug": "aprodr-ahu19-60hn1-c",
      "name": "AproDr AHU19-60HN1-C",
      "seriesId": "series-aprodr-ahu-series",
      "brandId": "brand-aprodr",
      "modelNumber": "AHU19-60HN1-C",
      "normalizedModelNumber": "ahu19-60hn1-c",
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
      "id": "ou-aprodr-asg24-09h220v1b",
      "modelNumber": "ASG24-09H220V1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-alc24-12h1b",
      "modelNumber": "ALC24-12H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-asg24-09h1b",
      "modelNumber": "ASG24-09H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-atpro24-12h220v1b",
      "modelNumber": "ATPRO24-12H220V1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-asg24-18h1b",
      "modelNumber": "ASG24-18H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-asg24-24h1b",
      "modelNumber": "ASG24-24H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-asg24-12h1b",
      "modelNumber": "ASG24-12H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-asg24-12h220v1b",
      "modelNumber": "ASG24-12H220V1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-am5og-36hfn1",
      "modelNumber": "AM5OG-36HFN1",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-atpro24-24h1b",
      "modelNumber": "ATPRO24-24H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-atpro24-09h220v1b",
      "modelNumber": "ATPRO24-09H220V1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-am4oj-27hfn1",
      "modelNumber": "AM4OJ-27HFN1",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-am3oa-18hfn1",
      "modelNumber": "AM3OA-18HFN1",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-atpro24-09h1b",
      "modelNumber": "ATPRO24-09H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-atpro24-18h1b",
      "modelNumber": "ATPRO24-18H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-atpro24-12h1b",
      "modelNumber": "ATPRO24-12H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-aag22-30h1b",
      "modelNumber": "AAG22-30H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-alc24-18h1b",
      "modelNumber": "ALC24-18H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-alc24-09h1b",
      "modelNumber": "ALC24-09H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-alc24-24h1b",
      "modelNumber": "ALC24-24H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-aag22-09h220v1b",
      "modelNumber": "AAG22-09H220V1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-aag22-09h1b",
      "modelNumber": "AAG22-09H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-am6og-48hfn1",
      "modelNumber": "AM6OG-48HFN1",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-aag22-18h1b",
      "modelNumber": "AAG22-18H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-alc24-36h1b",
      "modelNumber": "ALC24-36H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu3g-18hfn-b",
      "modelNumber": "AHU3G-18HFN-B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-alc24-48h1b",
      "modelNumber": "ALC24-48H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu19-18hn1-c",
      "modelNumber": "AHU19-18HN1-C",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu3g-24hfn-b",
      "modelNumber": "AHU3G-24HFN-B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-aag22-24h1b",
      "modelNumber": "AAG22-24H1B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu19-24hn1-c",
      "modelNumber": "AHU19-24HN1-C",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu3g-36hfn-b",
      "modelNumber": "AHU3G-36HFN-B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu3g-60hfn-b",
      "modelNumber": "AHU3G-60HFN-B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu3g-48hfn-b",
      "modelNumber": "AHU3G-48HFN-B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu3g-30hfn-b",
      "modelNumber": "AHU3G-30HFN-B",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu19-36hn1-c",
      "modelNumber": "AHU19-36HN1-C",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu19-48hn1-c",
      "modelNumber": "AHU19-48HN1-C",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aprodr-ahu19-60hn1-c",
      "modelNumber": "AHU19-60HN1-C",
      "brandId": "brand-aprodr",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-asg24-09h220v1a",
      "modelNumber": "ASG24-09H220V1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cid2m-12hrfn10",
      "modelNumber": "CID2M-12HRFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-09h1a",
      "modelNumber": "ASG24-09H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-12h220v1a",
      "modelNumber": "ATPRO24-12H220V1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-18h1a",
      "modelNumber": "ASG24-18H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-24h1a",
      "modelNumber": "ASG24-24H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-12h1a",
      "modelNumber": "ASG24-12H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-12h220v1a",
      "modelNumber": "ASG24-12H220V1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41093",
      "modelNumber": "IU-41093",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-24h1a",
      "modelNumber": "ATPRO24-24H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-09h220v1a",
      "modelNumber": "ATPRO24-09H220V1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41092",
      "modelNumber": "IU-41092",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41091",
      "modelNumber": "IU-41091",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-09h1a",
      "modelNumber": "ATPRO24-09H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-18h1a",
      "modelNumber": "ATPRO24-18H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-12h1a",
      "modelNumber": "ATPRO24-12H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag22-30h1a",
      "modelNumber": "AAG22-30H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-owc-18hrfn10",
      "modelNumber": "OWC-18HRFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-owc-12hrfn10",
      "modelNumber": "OWC-12HRFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-owc-09hrfn10",
      "modelNumber": "OWC-09HRFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-24hrfn1",
      "modelNumber": "CCA22-24HRFN1",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag22-09h220v1a",
      "modelNumber": "AAG22-09H220V1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-09hrfn1",
      "modelNumber": "CCA22-09HRFN1",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag22-09h1a",
      "modelNumber": "AAG22-09H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41094",
      "modelNumber": "IU-41094",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-12hrfn1",
      "modelNumber": "CCA22-12HRFN1",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-18hrfn1",
      "modelNumber": "CCA22-18HRFN1",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag22-18h1a",
      "modelNumber": "AAG22-18H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-36hrfn1",
      "modelNumber": "CCA22-36HRFN1",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-diu-18hwfn10",
      "modelNumber": "DIU-18HWFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-diu-09hwfn10",
      "modelNumber": "DIU-09HWFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-diu-12hwfn10",
      "modelNumber": "DIU-12HWFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-ahu3g-18hfn-a",
      "modelNumber": "AHU3G-18HFN-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-diu-24hwfn10",
      "modelNumber": "DIU-24HWFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-48hrfn1",
      "modelNumber": "CCA22-48HRFN1",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-ahu19-18hn1-a",
      "modelNumber": "AHU19-18HN1-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-24hfn-a",
      "modelNumber": "AHU3G-24HFN-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-aag22-24h1a",
      "modelNumber": "AAG22-24H1A",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-ahu19-24hn1-a",
      "modelNumber": "AHU19-24HN1-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-36hfn-a",
      "modelNumber": "AHU3G-36HFN-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-apc-24hwfn",
      "modelNumber": "APC-24HWFN",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-60hfn-a",
      "modelNumber": "AHU3G-60HFN-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-48hfn-a",
      "modelNumber": "AHU3G-48HFN-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-30hfn-a",
      "modelNumber": "AHU3G-30HFN-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-diu-48hwfn10",
      "modelNumber": "DIU-48HWFN10",
      "brandId": "brand-aprodr",
      "type": "wall-single"
    },
    {
      "id": "iu-apc-18hwfn",
      "modelNumber": "APC-18HWFN",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-apc-30hwfn",
      "modelNumber": "APC-30HWFN",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu19-36hn1-a",
      "modelNumber": "AHU19-36HN1-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu19-48hn1-a",
      "modelNumber": "AHU19-48HN1-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu19-60hn1-a",
      "modelNumber": "AHU19-60HN1-A",
      "brandId": "brand-aprodr",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-aprodr-asg24-09h220v1b-asg24-09h220v1a",
      "slug": "aprodr-asg24-09h220v1b-asg24-09h220v1a",
      "modelId": "model-aprodr-asg24-09h220v1b",
      "outdoorUnitId": "ou-aprodr-asg24-09h220v1b",
      "indoorUnitId": "iu-asg24-09h220v1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-12h1b-cid2m-12hrfn10",
      "slug": "aprodr-alc24-12h1b-cid2m-12hrfn10",
      "modelId": "model-aprodr-alc24-12h1b",
      "outdoorUnitId": "ou-aprodr-alc24-12h1b",
      "indoorUnitId": "iu-cid2m-12hrfn10",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-asg24-09h1b-asg24-09h1a",
      "slug": "aprodr-asg24-09h1b-asg24-09h1a",
      "modelId": "model-aprodr-asg24-09h1b",
      "outdoorUnitId": "ou-aprodr-asg24-09h1b",
      "indoorUnitId": "iu-asg24-09h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-atpro24-12h220v1b-atpro24-12h220v1a",
      "slug": "aprodr-atpro24-12h220v1b-atpro24-12h220v1a",
      "modelId": "model-aprodr-atpro24-12h220v1b",
      "outdoorUnitId": "ou-aprodr-atpro24-12h220v1b",
      "indoorUnitId": "iu-atpro24-12h220v1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-asg24-18h1b-asg24-18h1a",
      "slug": "aprodr-asg24-18h1b-asg24-18h1a",
      "modelId": "model-aprodr-asg24-18h1b",
      "outdoorUnitId": "ou-aprodr-asg24-18h1b",
      "indoorUnitId": "iu-asg24-18h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-asg24-24h1b-asg24-24h1a",
      "slug": "aprodr-asg24-24h1b-asg24-24h1a",
      "modelId": "model-aprodr-asg24-24h1b",
      "outdoorUnitId": "ou-aprodr-asg24-24h1b",
      "indoorUnitId": "iu-asg24-24h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-asg24-12h1b-asg24-12h1a",
      "slug": "aprodr-asg24-12h1b-asg24-12h1a",
      "modelId": "model-aprodr-asg24-12h1b",
      "outdoorUnitId": "ou-aprodr-asg24-12h1b",
      "indoorUnitId": "iu-asg24-12h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-asg24-12h220v1b-asg24-12h220v1a",
      "slug": "aprodr-asg24-12h220v1b-asg24-12h220v1a",
      "modelId": "model-aprodr-asg24-12h220v1b",
      "outdoorUnitId": "ou-aprodr-asg24-12h220v1b",
      "indoorUnitId": "iu-asg24-12h220v1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-am5og-36hfn1-iu-41093",
      "slug": "aprodr-am5og-36hfn1-iu-41093",
      "modelId": "model-aprodr-am5og-36hfn1",
      "outdoorUnitId": "ou-aprodr-am5og-36hfn1",
      "indoorUnitId": "iu-iu-41093",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-atpro24-24h1b-atpro24-24h1a",
      "slug": "aprodr-atpro24-24h1b-atpro24-24h1a",
      "modelId": "model-aprodr-atpro24-24h1b",
      "outdoorUnitId": "ou-aprodr-atpro24-24h1b",
      "indoorUnitId": "iu-atpro24-24h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-atpro24-09h220v1b-atpro24-09h220v1a",
      "slug": "aprodr-atpro24-09h220v1b-atpro24-09h220v1a",
      "modelId": "model-aprodr-atpro24-09h220v1b",
      "outdoorUnitId": "ou-aprodr-atpro24-09h220v1b",
      "indoorUnitId": "iu-atpro24-09h220v1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-am4oj-27hfn1-iu-41092",
      "slug": "aprodr-am4oj-27hfn1-iu-41092",
      "modelId": "model-aprodr-am4oj-27hfn1",
      "outdoorUnitId": "ou-aprodr-am4oj-27hfn1",
      "indoorUnitId": "iu-iu-41092",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-am3oa-18hfn1-iu-41091",
      "slug": "aprodr-am3oa-18hfn1-iu-41091",
      "modelId": "model-aprodr-am3oa-18hfn1",
      "outdoorUnitId": "ou-aprodr-am3oa-18hfn1",
      "indoorUnitId": "iu-iu-41091",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-atpro24-09h1b-atpro24-09h1a",
      "slug": "aprodr-atpro24-09h1b-atpro24-09h1a",
      "modelId": "model-aprodr-atpro24-09h1b",
      "outdoorUnitId": "ou-aprodr-atpro24-09h1b",
      "indoorUnitId": "iu-atpro24-09h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-atpro24-18h1b-atpro24-18h1a",
      "slug": "aprodr-atpro24-18h1b-atpro24-18h1a",
      "modelId": "model-aprodr-atpro24-18h1b",
      "outdoorUnitId": "ou-aprodr-atpro24-18h1b",
      "indoorUnitId": "iu-atpro24-18h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-atpro24-12h1b-atpro24-12h1a",
      "slug": "aprodr-atpro24-12h1b-atpro24-12h1a",
      "modelId": "model-aprodr-atpro24-12h1b",
      "outdoorUnitId": "ou-aprodr-atpro24-12h1b",
      "indoorUnitId": "iu-atpro24-12h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-aag22-30h1b-aag22-30h1a",
      "slug": "aprodr-aag22-30h1b-aag22-30h1a",
      "modelId": "model-aprodr-aag22-30h1b",
      "outdoorUnitId": "ou-aprodr-aag22-30h1b",
      "indoorUnitId": "iu-aag22-30h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-18h1b-owc-18hrfn10",
      "slug": "aprodr-alc24-18h1b-owc-18hrfn10",
      "modelId": "model-aprodr-alc24-18h1b",
      "outdoorUnitId": "ou-aprodr-alc24-18h1b",
      "indoorUnitId": "iu-owc-18hrfn10",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-12h1b-owc-12hrfn10",
      "slug": "aprodr-alc24-12h1b-owc-12hrfn10",
      "modelId": "model-aprodr-alc24-12h1b",
      "outdoorUnitId": "ou-aprodr-alc24-12h1b",
      "indoorUnitId": "iu-owc-12hrfn10",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-09h1b-owc-09hrfn10",
      "slug": "aprodr-alc24-09h1b-owc-09hrfn10",
      "modelId": "model-aprodr-alc24-09h1b",
      "outdoorUnitId": "ou-aprodr-alc24-09h1b",
      "indoorUnitId": "iu-owc-09hrfn10",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-24h1b-cca22-24hrfn1",
      "slug": "aprodr-alc24-24h1b-cca22-24hrfn1",
      "modelId": "model-aprodr-alc24-24h1b",
      "outdoorUnitId": "ou-aprodr-alc24-24h1b",
      "indoorUnitId": "iu-cca22-24hrfn1",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-aag22-09h220v1b-aag22-09h220v1a",
      "slug": "aprodr-aag22-09h220v1b-aag22-09h220v1a",
      "modelId": "model-aprodr-aag22-09h220v1b",
      "outdoorUnitId": "ou-aprodr-aag22-09h220v1b",
      "indoorUnitId": "iu-aag22-09h220v1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-09h1b-cca22-09hrfn1",
      "slug": "aprodr-alc24-09h1b-cca22-09hrfn1",
      "modelId": "model-aprodr-alc24-09h1b",
      "outdoorUnitId": "ou-aprodr-alc24-09h1b",
      "indoorUnitId": "iu-cca22-09hrfn1",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-aag22-09h1b-aag22-09h1a",
      "slug": "aprodr-aag22-09h1b-aag22-09h1a",
      "modelId": "model-aprodr-aag22-09h1b",
      "outdoorUnitId": "ou-aprodr-aag22-09h1b",
      "indoorUnitId": "iu-aag22-09h1a",
      "minHeatingTempC": -25,
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-am6og-48hfn1-iu-41094",
      "slug": "aprodr-am6og-48hfn1-iu-41094",
      "modelId": "model-aprodr-am6og-48hfn1",
      "outdoorUnitId": "ou-aprodr-am6og-48hfn1",
      "indoorUnitId": "iu-iu-41094",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-12h1b-cca22-12hrfn1",
      "slug": "aprodr-alc24-12h1b-cca22-12hrfn1",
      "modelId": "model-aprodr-alc24-12h1b",
      "outdoorUnitId": "ou-aprodr-alc24-12h1b",
      "indoorUnitId": "iu-cca22-12hrfn1",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-18h1b-cca22-18hrfn1",
      "slug": "aprodr-alc24-18h1b-cca22-18hrfn1",
      "modelId": "model-aprodr-alc24-18h1b",
      "outdoorUnitId": "ou-aprodr-alc24-18h1b",
      "indoorUnitId": "iu-cca22-18hrfn1",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-aag22-18h1b-aag22-18h1a",
      "slug": "aprodr-aag22-18h1b-aag22-18h1a",
      "modelId": "model-aprodr-aag22-18h1b",
      "outdoorUnitId": "ou-aprodr-aag22-18h1b",
      "indoorUnitId": "iu-aag22-18h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-36h1b-cca22-36hrfn1",
      "slug": "aprodr-alc24-36h1b-cca22-36hrfn1",
      "modelId": "model-aprodr-alc24-36h1b",
      "outdoorUnitId": "ou-aprodr-alc24-36h1b",
      "indoorUnitId": "iu-cca22-36hrfn1",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-18h1b-diu-18hwfn10",
      "slug": "aprodr-alc24-18h1b-diu-18hwfn10",
      "modelId": "model-aprodr-alc24-18h1b",
      "outdoorUnitId": "ou-aprodr-alc24-18h1b",
      "indoorUnitId": "iu-diu-18hwfn10",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-09h1b-diu-09hwfn10",
      "slug": "aprodr-alc24-09h1b-diu-09hwfn10",
      "modelId": "model-aprodr-alc24-09h1b",
      "outdoorUnitId": "ou-aprodr-alc24-09h1b",
      "indoorUnitId": "iu-diu-09hwfn10",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.7,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-12h1b-diu-12hwfn10",
      "slug": "aprodr-alc24-12h1b-diu-12hwfn10",
      "modelId": "model-aprodr-alc24-12h1b",
      "outdoorUnitId": "ou-aprodr-alc24-12h1b",
      "indoorUnitId": "iu-diu-12hwfn10",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-18hfn-b-ahu3g-18hfn-a",
      "slug": "aprodr-ahu3g-18hfn-b-ahu3g-18hfn-a",
      "modelId": "model-aprodr-ahu3g-18hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-18hfn-b",
      "indoorUnitId": "iu-ahu3g-18hfn-a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-24h1b-diu-24hwfn10",
      "slug": "aprodr-alc24-24h1b-diu-24hwfn10",
      "modelId": "model-aprodr-alc24-24h1b",
      "outdoorUnitId": "ou-aprodr-alc24-24h1b",
      "indoorUnitId": "iu-diu-24hwfn10",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-48h1b-cca22-48hrfn1",
      "slug": "aprodr-alc24-48h1b-cca22-48hrfn1",
      "modelId": "model-aprodr-alc24-48h1b",
      "outdoorUnitId": "ou-aprodr-alc24-48h1b",
      "indoorUnitId": "iu-cca22-48hrfn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu19-18hn1-c-ahu19-18hn1-a",
      "slug": "aprodr-ahu19-18hn1-c-ahu19-18hn1-a",
      "modelId": "model-aprodr-ahu19-18hn1-c",
      "outdoorUnitId": "ou-aprodr-ahu19-18hn1-c",
      "indoorUnitId": "iu-ahu19-18hn1-a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.8,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-24hfn-b-ahu3g-24hfn-a",
      "slug": "aprodr-ahu3g-24hfn-b-ahu3g-24hfn-a",
      "modelId": "model-aprodr-ahu3g-24hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-24hfn-b",
      "indoorUnitId": "iu-ahu3g-24hfn-a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-aag22-24h1b-aag22-24h1a",
      "slug": "aprodr-aag22-24h1b-aag22-24h1a",
      "modelId": "model-aprodr-aag22-24h1b",
      "outdoorUnitId": "ou-aprodr-aag22-24h1b",
      "indoorUnitId": "iu-aag22-24h1a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu19-24hn1-c-ahu19-24hn1-a",
      "slug": "aprodr-ahu19-24hn1-c-ahu19-24hn1-a",
      "modelId": "model-aprodr-ahu19-24hn1-c",
      "outdoorUnitId": "ou-aprodr-ahu19-24hn1-c",
      "indoorUnitId": "iu-ahu19-24hn1-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.1,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-36hfn-b-ahu3g-36hfn-a",
      "slug": "aprodr-ahu3g-36hfn-b-ahu3g-36hfn-a",
      "modelId": "model-aprodr-ahu3g-36hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-36hfn-b",
      "indoorUnitId": "iu-ahu3g-36hfn-a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-24hfn-b-apc-24hwfn",
      "slug": "aprodr-ahu3g-24hfn-b-apc-24hwfn",
      "modelId": "model-aprodr-ahu3g-24hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-24hfn-b",
      "indoorUnitId": "iu-apc-24hwfn",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-60hfn-b-ahu3g-60hfn-a",
      "slug": "aprodr-ahu3g-60hfn-b-ahu3g-60hfn-a",
      "modelId": "model-aprodr-ahu3g-60hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-60hfn-b",
      "indoorUnitId": "iu-ahu3g-60hfn-a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-48hfn-b-ahu3g-48hfn-a",
      "slug": "aprodr-ahu3g-48hfn-b-ahu3g-48hfn-a",
      "modelId": "model-aprodr-ahu3g-48hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-48hfn-b",
      "indoorUnitId": "iu-ahu3g-48hfn-a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-30hfn-b-ahu3g-30hfn-a",
      "slug": "aprodr-ahu3g-30hfn-b-ahu3g-30hfn-a",
      "modelId": "model-aprodr-ahu3g-30hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-30hfn-b",
      "indoorUnitId": "iu-ahu3g-30hfn-a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-alc24-48h1b-diu-48hwfn10",
      "slug": "aprodr-alc24-48h1b-diu-48hwfn10",
      "modelId": "model-aprodr-alc24-48h1b",
      "outdoorUnitId": "ou-aprodr-alc24-48h1b",
      "indoorUnitId": "iu-diu-48hwfn10",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-18hfn-b-apc-18hwfn",
      "slug": "aprodr-ahu3g-18hfn-b-apc-18hwfn",
      "modelId": "model-aprodr-ahu3g-18hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-18hfn-b",
      "indoorUnitId": "iu-apc-18hwfn",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu3g-30hfn-b-apc-30hwfn",
      "slug": "aprodr-ahu3g-30hfn-b-apc-30hwfn",
      "modelId": "model-aprodr-ahu3g-30hfn-b",
      "outdoorUnitId": "ou-aprodr-ahu3g-30hfn-b",
      "indoorUnitId": "iu-apc-30hwfn",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu19-36hn1-c-ahu19-36hn1-a",
      "slug": "aprodr-ahu19-36hn1-c-ahu19-36hn1-a",
      "modelId": "model-aprodr-ahu19-36hn1-c",
      "outdoorUnitId": "ou-aprodr-ahu19-36hn1-c",
      "indoorUnitId": "iu-ahu19-36hn1-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu19-48hn1-c-ahu19-48hn1-a",
      "slug": "aprodr-ahu19-48hn1-c-ahu19-48hn1-a",
      "modelId": "model-aprodr-ahu19-48hn1-c",
      "outdoorUnitId": "ou-aprodr-ahu19-48hn1-c",
      "indoorUnitId": "iu-ahu19-48hn1-a",
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
          "sourceId": "src-aprodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aprodr-ahu19-60hn1-c-ahu19-60hn1-a",
      "slug": "aprodr-ahu19-60hn1-c-ahu19-60hn1-a",
      "modelId": "model-aprodr-ahu19-60hn1-c",
      "outdoorUnitId": "ou-aprodr-ahu19-60hn1-c",
      "indoorUnitId": "iu-ahu19-60hn1-a",
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
          "sourceId": "src-aprodr-epa",
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
