import type { BrandDataset } from "../../types";

export const brand_apoodrDataset: BrandDataset = {
  "brand": {
    "id": "brand-apoodr",
    "slug": "apoodr",
    "name": "ApooDr",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ApooDr",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-apoodr-epa",
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
      "id": "series-apoodr-as-series",
      "slug": "apoodr-as-series",
      "name": "AS Series",
      "brandId": "brand-apoodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AS Series de ApooDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-apoodr-al-series",
      "slug": "apoodr-al-series",
      "name": "AL Series",
      "brandId": "brand-apoodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AL Series de ApooDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-apoodr-ag-series",
      "slug": "apoodr-ag-series",
      "name": "AG Series",
      "brandId": "brand-apoodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AG Series de ApooDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-apoodr-24-seer2",
      "slug": "apoodr-24-seer2",
      "name": "24 SEER2",
      "brandId": "brand-apoodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 24 SEER2 de ApooDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-apoodr-t-pro",
      "slug": "apoodr-t-pro",
      "name": "T-PRO",
      "brandId": "brand-apoodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-PRO de ApooDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-apoodr-am-series",
      "slug": "apoodr-am-series",
      "name": "AM Series",
      "brandId": "brand-apoodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AM Series de ApooDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-apoodr-aa-series",
      "slug": "apoodr-aa-series",
      "name": "AA Series",
      "brandId": "brand-apoodr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AA Series de ApooDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-apoodr-ahu-series",
      "slug": "apoodr-ahu-series",
      "name": "AHU Series",
      "brandId": "brand-apoodr",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AHU Series de ApooDr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-apoodr-asg24-09h1b",
      "slug": "apoodr-asg24-09h1b",
      "name": "ApooDr ASG24-09H1B",
      "seriesId": "series-apoodr-as-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-asg24-09h220v1b",
      "slug": "apoodr-asg24-09h220v1b",
      "name": "ApooDr ASG24-09H220V1B",
      "seriesId": "series-apoodr-as-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-alc24-12h1b",
      "slug": "apoodr-alc24-12h1b",
      "name": "ApooDr ALC24-12H1B",
      "seriesId": "series-apoodr-al-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-agn24-09h220v1b",
      "slug": "apoodr-agn24-09h220v1b",
      "name": "ApooDr AGN24-09H220V1B",
      "seriesId": "series-apoodr-ag-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AGN24-09H220V1B",
      "normalizedModelNumber": "agn24-09h220v1b",
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
      "id": "model-apoodr-agn24-18h1b",
      "slug": "apoodr-agn24-18h1b",
      "name": "ApooDr AGN24-18H1B",
      "seriesId": "series-apoodr-ag-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AGN24-18H1B",
      "normalizedModelNumber": "agn24-18h1b",
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
      "id": "model-apoodr-atpro24-12h220v1b",
      "slug": "apoodr-atpro24-12h220v1b",
      "name": "ApooDr ATPRO24-12H220V1B",
      "seriesId": "series-apoodr-24-seer2",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-asg24-18h1b",
      "slug": "apoodr-asg24-18h1b",
      "name": "ApooDr ASG24-18H1B",
      "seriesId": "series-apoodr-as-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-atpro23-09h220v1b",
      "slug": "apoodr-atpro23-09h220v1b",
      "name": "ApooDr ATPRO23-09H220V1B",
      "seriesId": "series-apoodr-t-pro",
      "brandId": "brand-apoodr",
      "modelNumber": "ATPRO23-09H220V1B",
      "normalizedModelNumber": "atpro23-09h220v1b",
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
      "id": "model-apoodr-asg24-12h1b",
      "slug": "apoodr-asg24-12h1b",
      "name": "ApooDr ASG24-12H1B",
      "seriesId": "series-apoodr-as-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-am3oj-27hfn1",
      "slug": "apoodr-am3oj-27hfn1",
      "name": "ApooDr AM3OJ-27HFN1",
      "seriesId": "series-apoodr-am-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AM3OJ-27HFN1",
      "normalizedModelNumber": "am3oj-27hfn1",
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
      "id": "model-apoodr-asg24-12h220v1b",
      "slug": "apoodr-asg24-12h220v1b",
      "name": "ApooDr ASG24-12H220V1B",
      "seriesId": "series-apoodr-as-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-am5og-36hfn1",
      "slug": "apoodr-am5og-36hfn1",
      "name": "ApooDr AM5OG-36HFN1",
      "seriesId": "series-apoodr-am-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-agn24-12h220v1b",
      "slug": "apoodr-agn24-12h220v1b",
      "name": "ApooDr AGN24-12H220V1B",
      "seriesId": "series-apoodr-ag-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AGN24-12H220V1B",
      "normalizedModelNumber": "agn24-12h220v1b",
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
      "id": "model-apoodr-atpro24-18h1b",
      "slug": "apoodr-atpro24-18h1b",
      "name": "ApooDr ATPRO24-18H1B",
      "seriesId": "series-apoodr-24-seer2",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-agn24-09h1b",
      "slug": "apoodr-agn24-09h1b",
      "name": "ApooDr AGN24-09H1B",
      "seriesId": "series-apoodr-ag-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AGN24-09H1B",
      "normalizedModelNumber": "agn24-09h1b",
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
      "id": "model-apoodr-atpro23-09h1b",
      "slug": "apoodr-atpro23-09h1b",
      "name": "ApooDr ATPRO23-09H1B",
      "seriesId": "series-apoodr-t-pro",
      "brandId": "brand-apoodr",
      "modelNumber": "ATPRO23-09H1B",
      "normalizedModelNumber": "atpro23-09h1b",
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
      "id": "model-apoodr-atpro23-12h220v1b",
      "slug": "apoodr-atpro23-12h220v1b",
      "name": "ApooDr ATPRO23-12H220V1B",
      "seriesId": "series-apoodr-t-pro",
      "brandId": "brand-apoodr",
      "modelNumber": "ATPRO23-12H220V1B",
      "normalizedModelNumber": "atpro23-12h220v1b",
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
      "id": "model-apoodr-atpro24-09h220v1b",
      "slug": "apoodr-atpro24-09h220v1b",
      "name": "ApooDr ATPRO24-09H220V1B",
      "seriesId": "series-apoodr-24-seer2",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-atpro24-24h1b",
      "slug": "apoodr-atpro24-24h1b",
      "name": "ApooDr ATPRO24-24H1B",
      "seriesId": "series-apoodr-24-seer2",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-am3oa-18hfn1",
      "slug": "apoodr-am3oa-18hfn1",
      "name": "ApooDr AM3OA-18HFN1",
      "seriesId": "series-apoodr-am-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-am4oj-27hfn1",
      "slug": "apoodr-am4oj-27hfn1",
      "name": "ApooDr AM4OJ-27HFN1",
      "seriesId": "series-apoodr-am-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-atpro24-09h1b",
      "slug": "apoodr-atpro24-09h1b",
      "name": "ApooDr ATPRO24-09H1B",
      "seriesId": "series-apoodr-24-seer2",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-atpro24-12h1b",
      "slug": "apoodr-atpro24-12h1b",
      "name": "ApooDr ATPRO24-12H1B",
      "seriesId": "series-apoodr-24-seer2",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-agn24-12h1b",
      "slug": "apoodr-agn24-12h1b",
      "name": "ApooDr AGN24-12H1B",
      "seriesId": "series-apoodr-ag-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AGN24-12H1B",
      "normalizedModelNumber": "agn24-12h1b",
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
      "id": "model-apoodr-aag22-30h1b",
      "slug": "apoodr-aag22-30h1b",
      "name": "ApooDr AAG22-30H1B",
      "seriesId": "series-apoodr-aa-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-alc24-24h1b",
      "slug": "apoodr-alc24-24h1b",
      "name": "ApooDr ALC24-24H1B",
      "seriesId": "series-apoodr-al-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-atpro23-18h1b",
      "slug": "apoodr-atpro23-18h1b",
      "name": "ApooDr ATPRO23-18H1B",
      "seriesId": "series-apoodr-t-pro",
      "brandId": "brand-apoodr",
      "modelNumber": "ATPRO23-18H1B",
      "normalizedModelNumber": "atpro23-18h1b",
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
      "id": "model-apoodr-atpro23-12h1b",
      "slug": "apoodr-atpro23-12h1b",
      "name": "ApooDr ATPRO23-12H1B",
      "seriesId": "series-apoodr-t-pro",
      "brandId": "brand-apoodr",
      "modelNumber": "ATPRO23-12H1B",
      "normalizedModelNumber": "atpro23-12h1b",
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
      "id": "model-apoodr-aag21-09h220v1b",
      "slug": "apoodr-aag21-09h220v1b",
      "name": "ApooDr AAG21-09H220V1B",
      "seriesId": "series-apoodr-aa-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AAG21-09H220V1B",
      "normalizedModelNumber": "aag21-09h220v1b",
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
      "id": "model-apoodr-aag22-09h220v1b",
      "slug": "apoodr-aag22-09h220v1b",
      "name": "ApooDr AAG22-09H220V1B",
      "seriesId": "series-apoodr-aa-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-alc24-09h1b",
      "slug": "apoodr-alc24-09h1b",
      "name": "ApooDr ALC24-09H1B",
      "seriesId": "series-apoodr-al-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-aag21-09h1b",
      "slug": "apoodr-aag21-09h1b",
      "name": "ApooDr AAG21-09H1B",
      "seriesId": "series-apoodr-aa-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AAG21-09H1B",
      "normalizedModelNumber": "aag21-09h1b",
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
      "id": "model-apoodr-aag22-09h1b",
      "slug": "apoodr-aag22-09h1b",
      "name": "ApooDr AAG22-09H1B",
      "seriesId": "series-apoodr-aa-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-am6og-48hfn1",
      "slug": "apoodr-am6og-48hfn1",
      "name": "ApooDr AM6OG-48HFN1",
      "seriesId": "series-apoodr-am-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-am5og-48hfn1",
      "slug": "apoodr-am5og-48hfn1",
      "name": "ApooDr AM5OG-48HFN1",
      "seriesId": "series-apoodr-am-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AM5OG-48HFN1",
      "normalizedModelNumber": "am5og-48hfn1",
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
      "id": "model-apoodr-asg24-24h1b",
      "slug": "apoodr-asg24-24h1b",
      "name": "ApooDr ASG24-24H1B",
      "seriesId": "series-apoodr-as-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-agn24-24h1b",
      "slug": "apoodr-agn24-24h1b",
      "name": "ApooDr AGN24-24H1B",
      "seriesId": "series-apoodr-ag-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AGN24-24H1B",
      "normalizedModelNumber": "agn24-24h1b",
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
      "id": "model-apoodr-am2oa-18hfn1",
      "slug": "apoodr-am2oa-18hfn1",
      "name": "ApooDr AM2OA-18HFN1",
      "seriesId": "series-apoodr-am-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AM2OA-18HFN1",
      "normalizedModelNumber": "am2oa-18hfn1",
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
      "id": "model-apoodr-alc24-18h1b",
      "slug": "apoodr-alc24-18h1b",
      "name": "ApooDr ALC24-18H1B",
      "seriesId": "series-apoodr-al-series",
      "brandId": "brand-apoodr",
      "modelNumber": "ALC24-18H1B",
      "normalizedModelNumber": "alc24-18h1b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 16800,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-apoodr-aag22-18h1b",
      "slug": "apoodr-aag22-18h1b",
      "name": "ApooDr AAG22-18H1B",
      "seriesId": "series-apoodr-aa-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-am4og-36hfn1",
      "slug": "apoodr-am4og-36hfn1",
      "name": "ApooDr AM4OG-36HFN1",
      "seriesId": "series-apoodr-am-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AM4OG-36HFN1",
      "normalizedModelNumber": "am4og-36hfn1",
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
      "id": "model-apoodr-alc24-36h1b",
      "slug": "apoodr-alc24-36h1b",
      "name": "ApooDr ALC24-36H1B",
      "seriesId": "series-apoodr-al-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-atpro23-24h1b",
      "slug": "apoodr-atpro23-24h1b",
      "name": "ApooDr ATPRO23-24H1B",
      "seriesId": "series-apoodr-t-pro",
      "brandId": "brand-apoodr",
      "modelNumber": "ATPRO23-24H1B",
      "normalizedModelNumber": "atpro23-24h1b",
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
      "id": "model-apoodr-aag21-18h1b",
      "slug": "apoodr-aag21-18h1b",
      "name": "ApooDr AAG21-18H1B",
      "seriesId": "series-apoodr-aa-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AAG21-18H1B",
      "normalizedModelNumber": "aag21-18h1b",
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
      "id": "model-apoodr-alc24-48h1b",
      "slug": "apoodr-alc24-48h1b",
      "name": "ApooDr ALC24-48H1B",
      "seriesId": "series-apoodr-al-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu19-18hn1-c",
      "slug": "apoodr-ahu19-18hn1-c",
      "name": "ApooDr AHU19-18HN1-C",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu3g-24hfn-b",
      "slug": "apoodr-ahu3g-24hfn-b",
      "name": "ApooDr AHU3G-24HFN-B",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-aag22-24h1b",
      "slug": "apoodr-aag22-24h1b",
      "name": "ApooDr AAG22-24H1B",
      "seriesId": "series-apoodr-aa-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-asf16-09h220v1b",
      "slug": "apoodr-asf16-09h220v1b",
      "name": "ApooDr ASF16-09H220V1B",
      "seriesId": "series-apoodr-as-series",
      "brandId": "brand-apoodr",
      "modelNumber": "ASF16-09H220V1B",
      "normalizedModelNumber": "asf16-09h220v1b",
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
      "id": "model-apoodr-ahu19-24hn1-c",
      "slug": "apoodr-ahu19-24hn1-c",
      "name": "ApooDr AHU19-24HN1-C",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu3g-36hfn-b",
      "slug": "apoodr-ahu3g-36hfn-b",
      "name": "ApooDr AHU3G-36HFN-B",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu3g-60hfn-b",
      "slug": "apoodr-ahu3g-60hfn-b",
      "name": "ApooDr AHU3G-60HFN-B",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu3g-50hfn-b",
      "slug": "apoodr-ahu3g-50hfn-b",
      "name": "ApooDr AHU3G-50HFN-B",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AHU3G-50HFN-B",
      "normalizedModelNumber": "ahu3g-50hfn-b",
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
      "id": "model-apoodr-ahu3g-48hfn-b",
      "slug": "apoodr-ahu3g-48hfn-b",
      "name": "ApooDr AHU3G-48HFN-B",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu3g-30hfn-b",
      "slug": "apoodr-ahu3g-30hfn-b",
      "name": "ApooDr AHU3G-30HFN-B",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu19-24hn1-mr",
      "slug": "apoodr-ahu19-24hn1-mr",
      "name": "ApooDr AHU19-24HN1-MR",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
      "modelNumber": "AHU19-24HN1-MR",
      "normalizedModelNumber": "ahu19-24hn1-mr",
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
      "id": "model-apoodr-ahu19-36hn1-c",
      "slug": "apoodr-ahu19-36hn1-c",
      "name": "ApooDr AHU19-36HN1-C",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu19-48hn1-c",
      "slug": "apoodr-ahu19-48hn1-c",
      "name": "ApooDr AHU19-48HN1-C",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "model-apoodr-ahu19-60hn1-c",
      "slug": "apoodr-ahu19-60hn1-c",
      "name": "ApooDr AHU19-60HN1-C",
      "seriesId": "series-apoodr-ahu-series",
      "brandId": "brand-apoodr",
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
      "id": "ou-apoodr-asg24-09h1b",
      "modelNumber": "ASG24-09H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-asg24-09h220v1b",
      "modelNumber": "ASG24-09H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-alc24-12h1b",
      "modelNumber": "ALC24-12H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-agn24-09h220v1b",
      "modelNumber": "AGN24-09H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-agn24-18h1b",
      "modelNumber": "AGN24-18H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-atpro24-12h220v1b",
      "modelNumber": "ATPRO24-12H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-asg24-18h1b",
      "modelNumber": "ASG24-18H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-atpro23-09h220v1b",
      "modelNumber": "ATPRO23-09H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-asg24-12h1b",
      "modelNumber": "ASG24-12H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-am3oj-27hfn1",
      "modelNumber": "AM3OJ-27HFN1",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-asg24-12h220v1b",
      "modelNumber": "ASG24-12H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-am5og-36hfn1",
      "modelNumber": "AM5OG-36HFN1",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-agn24-12h220v1b",
      "modelNumber": "AGN24-12H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-atpro24-18h1b",
      "modelNumber": "ATPRO24-18H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-agn24-09h1b",
      "modelNumber": "AGN24-09H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-atpro23-09h1b",
      "modelNumber": "ATPRO23-09H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-atpro23-12h220v1b",
      "modelNumber": "ATPRO23-12H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-atpro24-09h220v1b",
      "modelNumber": "ATPRO24-09H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-atpro24-24h1b",
      "modelNumber": "ATPRO24-24H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-am3oa-18hfn1",
      "modelNumber": "AM3OA-18HFN1",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-am4oj-27hfn1",
      "modelNumber": "AM4OJ-27HFN1",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-atpro24-09h1b",
      "modelNumber": "ATPRO24-09H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-atpro24-12h1b",
      "modelNumber": "ATPRO24-12H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-agn24-12h1b",
      "modelNumber": "AGN24-12H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-aag22-30h1b",
      "modelNumber": "AAG22-30H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-alc24-24h1b",
      "modelNumber": "ALC24-24H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-atpro23-18h1b",
      "modelNumber": "ATPRO23-18H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-atpro23-12h1b",
      "modelNumber": "ATPRO23-12H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-aag21-09h220v1b",
      "modelNumber": "AAG21-09H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-aag22-09h220v1b",
      "modelNumber": "AAG22-09H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-alc24-09h1b",
      "modelNumber": "ALC24-09H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-aag21-09h1b",
      "modelNumber": "AAG21-09H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-aag22-09h1b",
      "modelNumber": "AAG22-09H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-am6og-48hfn1",
      "modelNumber": "AM6OG-48HFN1",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-am5og-48hfn1",
      "modelNumber": "AM5OG-48HFN1",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-asg24-24h1b",
      "modelNumber": "ASG24-24H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-agn24-24h1b",
      "modelNumber": "AGN24-24H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-am2oa-18hfn1",
      "modelNumber": "AM2OA-18HFN1",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-alc24-18h1b",
      "modelNumber": "ALC24-18H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-aag22-18h1b",
      "modelNumber": "AAG22-18H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-am4og-36hfn1",
      "modelNumber": "AM4OG-36HFN1",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-alc24-36h1b",
      "modelNumber": "ALC24-36H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-atpro23-24h1b",
      "modelNumber": "ATPRO23-24H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-aag21-18h1b",
      "modelNumber": "AAG21-18H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-alc24-48h1b",
      "modelNumber": "ALC24-48H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu19-18hn1-c",
      "modelNumber": "AHU19-18HN1-C",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu3g-24hfn-b",
      "modelNumber": "AHU3G-24HFN-B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-aag22-24h1b",
      "modelNumber": "AAG22-24H1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-asf16-09h220v1b",
      "modelNumber": "ASF16-09H220V1B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-ahu19-24hn1-c",
      "modelNumber": "AHU19-24HN1-C",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu3g-36hfn-b",
      "modelNumber": "AHU3G-36HFN-B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu3g-60hfn-b",
      "modelNumber": "AHU3G-60HFN-B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu3g-50hfn-b",
      "modelNumber": "AHU3G-50HFN-B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu3g-48hfn-b",
      "modelNumber": "AHU3G-48HFN-B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu3g-30hfn-b",
      "modelNumber": "AHU3G-30HFN-B",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu19-24hn1-mr",
      "modelNumber": "AHU19-24HN1-MR",
      "brandId": "brand-apoodr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-apoodr-ahu19-36hn1-c",
      "modelNumber": "AHU19-36HN1-C",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu19-48hn1-c",
      "modelNumber": "AHU19-48HN1-C",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-apoodr-ahu19-60hn1-c",
      "modelNumber": "AHU19-60HN1-C",
      "brandId": "brand-apoodr",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-asg24-09h1a",
      "modelNumber": "ASG24-09H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-09h220v1a",
      "modelNumber": "ASG24-09H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cid2m-12hrfn10",
      "modelNumber": "CID2M-12HRFN10",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-agn24-09h220v1a",
      "modelNumber": "AGN24-09H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-agn24-18h1a",
      "modelNumber": "AGN24-18H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-12h220v1a",
      "modelNumber": "ATPRO24-12H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-18h1a",
      "modelNumber": "ASG24-18H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro23-09h220v1a",
      "modelNumber": "ATPRO23-09H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-12h1a",
      "modelNumber": "ASG24-12H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41046",
      "modelNumber": "IU-41046",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-12h220v1a",
      "modelNumber": "ASG24-12H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41049",
      "modelNumber": "IU-41049",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-agn24-12h220v1a",
      "modelNumber": "AGN24-12H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-18h1a",
      "modelNumber": "ATPRO24-18H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-agn24-09h1a",
      "modelNumber": "AGN24-09H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro23-09h1a",
      "modelNumber": "ATPRO23-09H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro23-12h220v1a",
      "modelNumber": "ATPRO23-12H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-09h220v1a",
      "modelNumber": "ATPRO24-09H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-24h1a",
      "modelNumber": "ATPRO24-24H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41045",
      "modelNumber": "IU-41045",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41048",
      "modelNumber": "IU-41048",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-09h1a",
      "modelNumber": "ATPRO24-09H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro24-12h1a",
      "modelNumber": "ATPRO24-12H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-agn24-12h1a",
      "modelNumber": "AGN24-12H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag22-30h1a",
      "modelNumber": "AAG22-30H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-24hrfn1",
      "modelNumber": "CCA22-24HRFN1",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro23-18h1a",
      "modelNumber": "ATPRO23-18H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro23-12h1a",
      "modelNumber": "ATPRO23-12H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag21-09h220v1a",
      "modelNumber": "AAG21-09H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag22-09h220v1a",
      "modelNumber": "AAG22-09H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-09hrfn1",
      "modelNumber": "CCA22-09HRFN1",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag21-09h1a",
      "modelNumber": "AAG21-09H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag22-09h1a",
      "modelNumber": "AAG22-09H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41051",
      "modelNumber": "IU-41051",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41050",
      "modelNumber": "IU-41050",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-12hrfn1",
      "modelNumber": "CCA22-12HRFN1",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asg24-24h1a",
      "modelNumber": "ASG24-24H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-agn24-24h1a",
      "modelNumber": "AGN24-24H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41044",
      "modelNumber": "IU-41044",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-18hrfn1",
      "modelNumber": "CCA22-18HRFN1",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag22-18h1a",
      "modelNumber": "AAG22-18H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-diu-18hwfn10",
      "modelNumber": "DIU-18HWFN10",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41047",
      "modelNumber": "IU-41047",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-36hrfn1",
      "modelNumber": "CCA22-36HRFN1",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-atpro23-24h1a",
      "modelNumber": "ATPRO23-24H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-diu-09hwfn10",
      "modelNumber": "DIU-09HWFN10",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-aag21-18h1a",
      "modelNumber": "AAG21-18H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-diu-12hwfn10",
      "modelNumber": "DIU-12HWFN10",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-cca22-48hrfn1",
      "modelNumber": "CCA22-48HRFN1",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-diu-24hwfn10",
      "modelNumber": "DIU-24HWFN10",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-ahu19-18hn1-a",
      "modelNumber": "AHU19-18HN1-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-24hfn-a",
      "modelNumber": "AHU3G-24HFN-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-aag22-24h1a",
      "modelNumber": "AAG22-24H1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-asf16-09h220v1a",
      "modelNumber": "ASF16-09H220V1A",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-ahu19-24hn1-a",
      "modelNumber": "AHU19-24HN1-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-36hfn-a",
      "modelNumber": "AHU3G-36HFN-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-60hfn-a",
      "modelNumber": "AHU3G-60HFN-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-50hfn-a",
      "modelNumber": "AHU3G-50HFN-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-48hfn-a",
      "modelNumber": "AHU3G-48HFN-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu3g-30hfn-a",
      "modelNumber": "AHU3G-30HFN-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-diu-48hwfn10",
      "modelNumber": "DIU-48HWFN10",
      "brandId": "brand-apoodr",
      "type": "wall-single"
    },
    {
      "id": "iu-ahu19-24hn1-m",
      "modelNumber": "AHU19-24HN1-M",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu19-36hn1-a",
      "modelNumber": "AHU19-36HN1-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu19-48hn1-a",
      "modelNumber": "AHU19-48HN1-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahu19-60hn1-a",
      "modelNumber": "AHU19-60HN1-A",
      "brandId": "brand-apoodr",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-apoodr-asg24-09h1b-asg24-09h1a",
      "slug": "apoodr-asg24-09h1b-asg24-09h1a",
      "modelId": "model-apoodr-asg24-09h1b",
      "outdoorUnitId": "ou-apoodr-asg24-09h1b",
      "indoorUnitId": "iu-asg24-09h1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-asg24-09h220v1b-asg24-09h220v1a",
      "slug": "apoodr-asg24-09h220v1b-asg24-09h220v1a",
      "modelId": "model-apoodr-asg24-09h220v1b",
      "outdoorUnitId": "ou-apoodr-asg24-09h220v1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-12h1b-cid2m-12hrfn10",
      "slug": "apoodr-alc24-12h1b-cid2m-12hrfn10",
      "modelId": "model-apoodr-alc24-12h1b",
      "outdoorUnitId": "ou-apoodr-alc24-12h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-agn24-09h220v1b-agn24-09h220v1a",
      "slug": "apoodr-agn24-09h220v1b-agn24-09h220v1a",
      "modelId": "model-apoodr-agn24-09h220v1b",
      "outdoorUnitId": "ou-apoodr-agn24-09h220v1b",
      "indoorUnitId": "iu-agn24-09h220v1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-agn24-18h1b-agn24-18h1a",
      "slug": "apoodr-agn24-18h1b-agn24-18h1a",
      "modelId": "model-apoodr-agn24-18h1b",
      "outdoorUnitId": "ou-apoodr-agn24-18h1b",
      "indoorUnitId": "iu-agn24-18h1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro24-12h220v1b-atpro24-12h220v1a",
      "slug": "apoodr-atpro24-12h220v1b-atpro24-12h220v1a",
      "modelId": "model-apoodr-atpro24-12h220v1b",
      "outdoorUnitId": "ou-apoodr-atpro24-12h220v1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-asg24-18h1b-asg24-18h1a",
      "slug": "apoodr-asg24-18h1b-asg24-18h1a",
      "modelId": "model-apoodr-asg24-18h1b",
      "outdoorUnitId": "ou-apoodr-asg24-18h1b",
      "indoorUnitId": "iu-asg24-18h1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 11.9,
      "sources": [
        {
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro23-09h220v1b-atpro23-09h220v1a",
      "slug": "apoodr-atpro23-09h220v1b-atpro23-09h220v1a",
      "modelId": "model-apoodr-atpro23-09h220v1b",
      "outdoorUnitId": "ou-apoodr-atpro23-09h220v1b",
      "indoorUnitId": "iu-atpro23-09h220v1a",
      "minHeatingTempC": -25,
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-asg24-12h1b-asg24-12h1a",
      "slug": "apoodr-asg24-12h1b-asg24-12h1a",
      "modelId": "model-apoodr-asg24-12h1b",
      "outdoorUnitId": "ou-apoodr-asg24-12h1b",
      "indoorUnitId": "iu-asg24-12h1a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-am3oj-27hfn1-iu-41046",
      "slug": "apoodr-am3oj-27hfn1-iu-41046",
      "modelId": "model-apoodr-am3oj-27hfn1",
      "outdoorUnitId": "ou-apoodr-am3oj-27hfn1",
      "indoorUnitId": "iu-iu-41046",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-asg24-12h220v1b-asg24-12h220v1a",
      "slug": "apoodr-asg24-12h220v1b-asg24-12h220v1a",
      "modelId": "model-apoodr-asg24-12h220v1b",
      "outdoorUnitId": "ou-apoodr-asg24-12h220v1b",
      "indoorUnitId": "iu-asg24-12h220v1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-am5og-36hfn1-iu-41049",
      "slug": "apoodr-am5og-36hfn1-iu-41049",
      "modelId": "model-apoodr-am5og-36hfn1",
      "outdoorUnitId": "ou-apoodr-am5og-36hfn1",
      "indoorUnitId": "iu-iu-41049",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-agn24-12h220v1b-agn24-12h220v1a",
      "slug": "apoodr-agn24-12h220v1b-agn24-12h220v1a",
      "modelId": "model-apoodr-agn24-12h220v1b",
      "outdoorUnitId": "ou-apoodr-agn24-12h220v1b",
      "indoorUnitId": "iu-agn24-12h220v1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro24-18h1b-atpro24-18h1a",
      "slug": "apoodr-atpro24-18h1b-atpro24-18h1a",
      "modelId": "model-apoodr-atpro24-18h1b",
      "outdoorUnitId": "ou-apoodr-atpro24-18h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-agn24-09h1b-agn24-09h1a",
      "slug": "apoodr-agn24-09h1b-agn24-09h1a",
      "modelId": "model-apoodr-agn24-09h1b",
      "outdoorUnitId": "ou-apoodr-agn24-09h1b",
      "indoorUnitId": "iu-agn24-09h1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro23-09h1b-atpro23-09h1a",
      "slug": "apoodr-atpro23-09h1b-atpro23-09h1a",
      "modelId": "model-apoodr-atpro23-09h1b",
      "outdoorUnitId": "ou-apoodr-atpro23-09h1b",
      "indoorUnitId": "iu-atpro23-09h1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro23-12h220v1b-atpro23-12h220v1a",
      "slug": "apoodr-atpro23-12h220v1b-atpro23-12h220v1a",
      "modelId": "model-apoodr-atpro23-12h220v1b",
      "outdoorUnitId": "ou-apoodr-atpro23-12h220v1b",
      "indoorUnitId": "iu-atpro23-12h220v1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro24-09h220v1b-atpro24-09h220v1a",
      "slug": "apoodr-atpro24-09h220v1b-atpro24-09h220v1a",
      "modelId": "model-apoodr-atpro24-09h220v1b",
      "outdoorUnitId": "ou-apoodr-atpro24-09h220v1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro24-24h1b-atpro24-24h1a",
      "slug": "apoodr-atpro24-24h1b-atpro24-24h1a",
      "modelId": "model-apoodr-atpro24-24h1b",
      "outdoorUnitId": "ou-apoodr-atpro24-24h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-am3oa-18hfn1-iu-41045",
      "slug": "apoodr-am3oa-18hfn1-iu-41045",
      "modelId": "model-apoodr-am3oa-18hfn1",
      "outdoorUnitId": "ou-apoodr-am3oa-18hfn1",
      "indoorUnitId": "iu-iu-41045",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-am4oj-27hfn1-iu-41048",
      "slug": "apoodr-am4oj-27hfn1-iu-41048",
      "modelId": "model-apoodr-am4oj-27hfn1",
      "outdoorUnitId": "ou-apoodr-am4oj-27hfn1",
      "indoorUnitId": "iu-iu-41048",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro24-09h1b-atpro24-09h1a",
      "slug": "apoodr-atpro24-09h1b-atpro24-09h1a",
      "modelId": "model-apoodr-atpro24-09h1b",
      "outdoorUnitId": "ou-apoodr-atpro24-09h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro24-12h1b-atpro24-12h1a",
      "slug": "apoodr-atpro24-12h1b-atpro24-12h1a",
      "modelId": "model-apoodr-atpro24-12h1b",
      "outdoorUnitId": "ou-apoodr-atpro24-12h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-agn24-12h1b-agn24-12h1a",
      "slug": "apoodr-agn24-12h1b-agn24-12h1a",
      "modelId": "model-apoodr-agn24-12h1b",
      "outdoorUnitId": "ou-apoodr-agn24-12h1b",
      "indoorUnitId": "iu-agn24-12h1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-aag22-30h1b-aag22-30h1a",
      "slug": "apoodr-aag22-30h1b-aag22-30h1a",
      "modelId": "model-apoodr-aag22-30h1b",
      "outdoorUnitId": "ou-apoodr-aag22-30h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-24h1b-cca22-24hrfn1",
      "slug": "apoodr-alc24-24h1b-cca22-24hrfn1",
      "modelId": "model-apoodr-alc24-24h1b",
      "outdoorUnitId": "ou-apoodr-alc24-24h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro23-18h1b-atpro23-18h1a",
      "slug": "apoodr-atpro23-18h1b-atpro23-18h1a",
      "modelId": "model-apoodr-atpro23-18h1b",
      "outdoorUnitId": "ou-apoodr-atpro23-18h1b",
      "indoorUnitId": "iu-atpro23-18h1a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro23-12h1b-atpro23-12h1a",
      "slug": "apoodr-atpro23-12h1b-atpro23-12h1a",
      "modelId": "model-apoodr-atpro23-12h1b",
      "outdoorUnitId": "ou-apoodr-atpro23-12h1b",
      "indoorUnitId": "iu-atpro23-12h1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-aag21-09h220v1b-aag21-09h220v1a",
      "slug": "apoodr-aag21-09h220v1b-aag21-09h220v1a",
      "modelId": "model-apoodr-aag21-09h220v1b",
      "outdoorUnitId": "ou-apoodr-aag21-09h220v1b",
      "indoorUnitId": "iu-aag21-09h220v1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-aag22-09h220v1b-aag22-09h220v1a",
      "slug": "apoodr-aag22-09h220v1b-aag22-09h220v1a",
      "modelId": "model-apoodr-aag22-09h220v1b",
      "outdoorUnitId": "ou-apoodr-aag22-09h220v1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-09h1b-cca22-09hrfn1",
      "slug": "apoodr-alc24-09h1b-cca22-09hrfn1",
      "modelId": "model-apoodr-alc24-09h1b",
      "outdoorUnitId": "ou-apoodr-alc24-09h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-aag21-09h1b-aag21-09h1a",
      "slug": "apoodr-aag21-09h1b-aag21-09h1a",
      "modelId": "model-apoodr-aag21-09h1b",
      "outdoorUnitId": "ou-apoodr-aag21-09h1b",
      "indoorUnitId": "iu-aag21-09h1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-aag22-09h1b-aag22-09h1a",
      "slug": "apoodr-aag22-09h1b-aag22-09h1a",
      "modelId": "model-apoodr-aag22-09h1b",
      "outdoorUnitId": "ou-apoodr-aag22-09h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-am6og-48hfn1-iu-41051",
      "slug": "apoodr-am6og-48hfn1-iu-41051",
      "modelId": "model-apoodr-am6og-48hfn1",
      "outdoorUnitId": "ou-apoodr-am6og-48hfn1",
      "indoorUnitId": "iu-iu-41051",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-am5og-48hfn1-iu-41050",
      "slug": "apoodr-am5og-48hfn1-iu-41050",
      "modelId": "model-apoodr-am5og-48hfn1",
      "outdoorUnitId": "ou-apoodr-am5og-48hfn1",
      "indoorUnitId": "iu-iu-41050",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-12h1b-cca22-12hrfn1",
      "slug": "apoodr-alc24-12h1b-cca22-12hrfn1",
      "modelId": "model-apoodr-alc24-12h1b",
      "outdoorUnitId": "ou-apoodr-alc24-12h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-asg24-24h1b-asg24-24h1a",
      "slug": "apoodr-asg24-24h1b-asg24-24h1a",
      "modelId": "model-apoodr-asg24-24h1b",
      "outdoorUnitId": "ou-apoodr-asg24-24h1b",
      "indoorUnitId": "iu-asg24-24h1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-agn24-24h1b-agn24-24h1a",
      "slug": "apoodr-agn24-24h1b-agn24-24h1a",
      "modelId": "model-apoodr-agn24-24h1b",
      "outdoorUnitId": "ou-apoodr-agn24-24h1b",
      "indoorUnitId": "iu-agn24-24h1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-am2oa-18hfn1-iu-41044",
      "slug": "apoodr-am2oa-18hfn1-iu-41044",
      "modelId": "model-apoodr-am2oa-18hfn1",
      "outdoorUnitId": "ou-apoodr-am2oa-18hfn1",
      "indoorUnitId": "iu-iu-41044",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-18h1b-cca22-18hrfn1",
      "slug": "apoodr-alc24-18h1b-cca22-18hrfn1",
      "modelId": "model-apoodr-alc24-18h1b",
      "outdoorUnitId": "ou-apoodr-alc24-18h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-aag22-18h1b-aag22-18h1a",
      "slug": "apoodr-aag22-18h1b-aag22-18h1a",
      "modelId": "model-apoodr-aag22-18h1b",
      "outdoorUnitId": "ou-apoodr-aag22-18h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-18h1b-diu-18hwfn10",
      "slug": "apoodr-alc24-18h1b-diu-18hwfn10",
      "modelId": "model-apoodr-alc24-18h1b",
      "outdoorUnitId": "ou-apoodr-alc24-18h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-am4og-36hfn1-iu-41047",
      "slug": "apoodr-am4og-36hfn1-iu-41047",
      "modelId": "model-apoodr-am4og-36hfn1",
      "outdoorUnitId": "ou-apoodr-am4og-36hfn1",
      "indoorUnitId": "iu-iu-41047",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-36h1b-cca22-36hrfn1",
      "slug": "apoodr-alc24-36h1b-cca22-36hrfn1",
      "modelId": "model-apoodr-alc24-36h1b",
      "outdoorUnitId": "ou-apoodr-alc24-36h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-atpro23-24h1b-atpro23-24h1a",
      "slug": "apoodr-atpro23-24h1b-atpro23-24h1a",
      "modelId": "model-apoodr-atpro23-24h1b",
      "outdoorUnitId": "ou-apoodr-atpro23-24h1b",
      "indoorUnitId": "iu-atpro23-24h1a",
      "minHeatingTempC": -15,
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-09h1b-diu-09hwfn10",
      "slug": "apoodr-alc24-09h1b-diu-09hwfn10",
      "modelId": "model-apoodr-alc24-09h1b",
      "outdoorUnitId": "ou-apoodr-alc24-09h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-aag21-18h1b-aag21-18h1a",
      "slug": "apoodr-aag21-18h1b-aag21-18h1a",
      "modelId": "model-apoodr-aag21-18h1b",
      "outdoorUnitId": "ou-apoodr-aag21-18h1b",
      "indoorUnitId": "iu-aag21-18h1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-12h1b-diu-12hwfn10",
      "slug": "apoodr-alc24-12h1b-diu-12hwfn10",
      "modelId": "model-apoodr-alc24-12h1b",
      "outdoorUnitId": "ou-apoodr-alc24-12h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-48h1b-cca22-48hrfn1",
      "slug": "apoodr-alc24-48h1b-cca22-48hrfn1",
      "modelId": "model-apoodr-alc24-48h1b",
      "outdoorUnitId": "ou-apoodr-alc24-48h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-24h1b-diu-24hwfn10",
      "slug": "apoodr-alc24-24h1b-diu-24hwfn10",
      "modelId": "model-apoodr-alc24-24h1b",
      "outdoorUnitId": "ou-apoodr-alc24-24h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu19-18hn1-c-ahu19-18hn1-a",
      "slug": "apoodr-ahu19-18hn1-c-ahu19-18hn1-a",
      "modelId": "model-apoodr-ahu19-18hn1-c",
      "outdoorUnitId": "ou-apoodr-ahu19-18hn1-c",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu3g-24hfn-b-ahu3g-24hfn-a",
      "slug": "apoodr-ahu3g-24hfn-b-ahu3g-24hfn-a",
      "modelId": "model-apoodr-ahu3g-24hfn-b",
      "outdoorUnitId": "ou-apoodr-ahu3g-24hfn-b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-aag22-24h1b-aag22-24h1a",
      "slug": "apoodr-aag22-24h1b-aag22-24h1a",
      "modelId": "model-apoodr-aag22-24h1b",
      "outdoorUnitId": "ou-apoodr-aag22-24h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-asf16-09h220v1b-asf16-09h220v1a",
      "slug": "apoodr-asf16-09h220v1b-asf16-09h220v1a",
      "modelId": "model-apoodr-asf16-09h220v1b",
      "outdoorUnitId": "ou-apoodr-asf16-09h220v1b",
      "indoorUnitId": "iu-asf16-09h220v1a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu19-24hn1-c-ahu19-24hn1-a",
      "slug": "apoodr-ahu19-24hn1-c-ahu19-24hn1-a",
      "modelId": "model-apoodr-ahu19-24hn1-c",
      "outdoorUnitId": "ou-apoodr-ahu19-24hn1-c",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu3g-36hfn-b-ahu3g-36hfn-a",
      "slug": "apoodr-ahu3g-36hfn-b-ahu3g-36hfn-a",
      "modelId": "model-apoodr-ahu3g-36hfn-b",
      "outdoorUnitId": "ou-apoodr-ahu3g-36hfn-b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu3g-60hfn-b-ahu3g-60hfn-a",
      "slug": "apoodr-ahu3g-60hfn-b-ahu3g-60hfn-a",
      "modelId": "model-apoodr-ahu3g-60hfn-b",
      "outdoorUnitId": "ou-apoodr-ahu3g-60hfn-b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu3g-50hfn-b-ahu3g-50hfn-a",
      "slug": "apoodr-ahu3g-50hfn-b-ahu3g-50hfn-a",
      "modelId": "model-apoodr-ahu3g-50hfn-b",
      "outdoorUnitId": "ou-apoodr-ahu3g-50hfn-b",
      "indoorUnitId": "iu-ahu3g-50hfn-a",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu3g-48hfn-b-ahu3g-48hfn-a",
      "slug": "apoodr-ahu3g-48hfn-b-ahu3g-48hfn-a",
      "modelId": "model-apoodr-ahu3g-48hfn-b",
      "outdoorUnitId": "ou-apoodr-ahu3g-48hfn-b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu3g-30hfn-b-ahu3g-30hfn-a",
      "slug": "apoodr-ahu3g-30hfn-b-ahu3g-30hfn-a",
      "modelId": "model-apoodr-ahu3g-30hfn-b",
      "outdoorUnitId": "ou-apoodr-ahu3g-30hfn-b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-alc24-48h1b-diu-48hwfn10",
      "slug": "apoodr-alc24-48h1b-diu-48hwfn10",
      "modelId": "model-apoodr-alc24-48h1b",
      "outdoorUnitId": "ou-apoodr-alc24-48h1b",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu19-24hn1-mr-ahu19-24hn1-m",
      "slug": "apoodr-ahu19-24hn1-mr-ahu19-24hn1-m",
      "modelId": "model-apoodr-ahu19-24hn1-mr",
      "outdoorUnitId": "ou-apoodr-ahu19-24hn1-mr",
      "indoorUnitId": "iu-ahu19-24hn1-m",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu19-36hn1-c-ahu19-36hn1-a",
      "slug": "apoodr-ahu19-36hn1-c-ahu19-36hn1-a",
      "modelId": "model-apoodr-ahu19-36hn1-c",
      "outdoorUnitId": "ou-apoodr-ahu19-36hn1-c",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu19-48hn1-c-ahu19-48hn1-a",
      "slug": "apoodr-ahu19-48hn1-c-ahu19-48hn1-a",
      "modelId": "model-apoodr-ahu19-48hn1-c",
      "outdoorUnitId": "ou-apoodr-ahu19-48hn1-c",
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
          "sourceId": "src-apoodr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-apoodr-ahu19-60hn1-c-ahu19-60hn1-a",
      "slug": "apoodr-ahu19-60hn1-c-ahu19-60hn1-a",
      "modelId": "model-apoodr-ahu19-60hn1-c",
      "outdoorUnitId": "ou-apoodr-ahu19-60hn1-c",
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
          "sourceId": "src-apoodr-epa",
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
