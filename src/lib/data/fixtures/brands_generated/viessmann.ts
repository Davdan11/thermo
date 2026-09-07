import type { BrandDataset } from "../../types";

export const brand_viessmannDataset: BrandDataset = {
  "brand": {
    "id": "brand-viessmann",
    "slug": "viessmann",
    "name": "Viessmann",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Viessmann",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-viessmann-epa",
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
      "id": "series-viessmann-dlc-series",
      "slug": "viessmann-dlc-series",
      "name": "DLC-series",
      "brandId": "brand-viessmann",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DLC-series de Viessmann",
      "imageUrl": "/images/series/viessmann-viessmann-dlc-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-viessmann-d5c-series",
      "slug": "viessmann-d5c-series",
      "name": "D5C Series",
      "brandId": "brand-viessmann",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série D5C Series de Viessmann",
      "imageUrl": "/images/series/viessmann-viessmann-d5c-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-viessmann-dlcp-series",
      "slug": "viessmann-dlcp-series",
      "name": "DLCP series",
      "brandId": "brand-viessmann",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DLCP series de Viessmann",
      "imageUrl": "/images/series/viessmann-viessmann-dlcp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-viessmann-dlseries",
      "slug": "viessmann-dlseries",
      "name": "Dlseries",
      "brandId": "brand-viessmann",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Dlseries de Viessmann",
      "imageUrl": "/images/series/viessmann-viessmann-dlseries.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-viessmann-crossover-heat-pump",
      "slug": "viessmann-crossover-heat-pump",
      "name": "Crossover Heat Pump",
      "brandId": "brand-viessmann",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Crossover Heat Pump de Viessmann",
      "imageUrl": "/images/series/viessmann-viessmann-crossover-heat-pump.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-viessmann-dl-series",
      "slug": "viessmann-dl-series",
      "name": "DL series",
      "brandId": "brand-viessmann",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DL series de Viessmann",
      "imageUrl": "/images/series/viessmann-viessmann-dl-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-viessmann-dlcsrbh09aak",
      "slug": "viessmann-dlcsrbh09aak",
      "name": "Viessmann DLCSRBH09AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCSRBH09AAK",
      "normalizedModelNumber": "dlcsrbh09aak",
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
      "id": "model-viessmann-d5cshah09aak",
      "slug": "viessmann-d5cshah09aak",
      "name": "Viessmann D5CSHAH09AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CSHAH09AAK",
      "normalizedModelNumber": "d5cshah09aak",
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
      "id": "model-viessmann-dlcprbh09aak",
      "slug": "viessmann-dlcprbh09aak",
      "name": "Viessmann DLCPRBH09AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCPRBH09AAK",
      "normalizedModelNumber": "dlcprbh09aak",
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
      "id": "model-viessmann-dlcsrbh06aak",
      "slug": "viessmann-dlcsrbh06aak",
      "name": "Viessmann DLCSRBH06AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCSRBH06AAK",
      "normalizedModelNumber": "dlcsrbh06aak",
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
      "id": "model-viessmann-dlcprbh18aak",
      "slug": "viessmann-dlcprbh18aak",
      "name": "Viessmann DLCPRBH18AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCPRBH18AAK",
      "normalizedModelNumber": "dlcprbh18aak",
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
      "id": "model-viessmann-d5cshah06aak",
      "slug": "viessmann-d5cshah06aak",
      "name": "Viessmann D5CSHAH06AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CSHAH06AAK",
      "normalizedModelNumber": "d5cshah06aak",
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
      "id": "model-viessmann-dlcsrbh12aak",
      "slug": "viessmann-dlcsrbh12aak",
      "name": "Viessmann DLCSRBH12AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCSRBH12AAK",
      "normalizedModelNumber": "dlcsrbh12aak",
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
      "id": "model-viessmann-d5cshah12aak",
      "slug": "viessmann-d5cshah12aak",
      "name": "Viessmann D5CSHAH12AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CSHAH12AAK",
      "normalizedModelNumber": "d5cshah12aak",
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
      "id": "model-viessmann-dlcprbh12aak",
      "slug": "viessmann-dlcprbh12aak",
      "name": "Viessmann DLCPRBH12AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCPRBH12AAK",
      "normalizedModelNumber": "dlcprbh12aak",
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
      "id": "model-viessmann-d5cmhah18cak",
      "slug": "viessmann-d5cmhah18cak",
      "name": "Viessmann D5CMHAH18CAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CMHAH18CAK",
      "normalizedModelNumber": "d5cmhah18cak",
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
      "id": "model-viessmann-d5cmhah24dak",
      "slug": "viessmann-d5cmhah24dak",
      "name": "Viessmann D5CMHAH24DAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CMHAH24DAK",
      "normalizedModelNumber": "d5cmhah24dak",
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
      "id": "model-viessmann-d5cmhah30eak",
      "slug": "viessmann-d5cmhah30eak",
      "name": "Viessmann D5CMHAH30EAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CMHAH30EAK",
      "normalizedModelNumber": "d5cmhah30eak",
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
      "id": "model-viessmann-dlcsrbh12aaj",
      "slug": "viessmann-dlcsrbh12aaj",
      "name": "Viessmann DLCSRBH12AAJ",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCSRBH12AAJ",
      "normalizedModelNumber": "dlcsrbh12aaj",
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
      "id": "model-viessmann-d5cmhah36eak",
      "slug": "viessmann-d5cmhah36eak",
      "name": "Viessmann D5CMHAH36EAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CMHAH36EAK",
      "normalizedModelNumber": "d5cmhah36eak",
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
      "id": "model-viessmann-d5cmhah48fak",
      "slug": "viessmann-d5cmhah48fak",
      "name": "Viessmann D5CMHAH48FAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CMHAH48FAK",
      "normalizedModelNumber": "d5cmhah48fak",
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
      "id": "model-viessmann-dlcmhbh30dak",
      "slug": "viessmann-dlcmhbh30dak",
      "name": "Viessmann DLCMHBH30DAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMHBH30DAK",
      "normalizedModelNumber": "dlcmhbh30dak",
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
      "id": "model-viessmann-d5cmhah55fak",
      "slug": "viessmann-d5cmhah55fak",
      "name": "Viessmann D5CMHAH55FAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CMHAH55FAK",
      "normalizedModelNumber": "d5cmhah55fak",
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
      "id": "model-viessmann-dlcmhbh24cak",
      "slug": "viessmann-dlcmhbh24cak",
      "name": "Viessmann DLCMHBH24CAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMHBH24CAK",
      "normalizedModelNumber": "dlcmhbh24cak",
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
      "id": "model-viessmann-dlcsrbh24aak",
      "slug": "viessmann-dlcsrbh24aak",
      "name": "Viessmann DLCSRBH24AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCSRBH24AAK",
      "normalizedModelNumber": "dlcsrbh24aak",
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
      "id": "model-viessmann-dlcsrbh18aak",
      "slug": "viessmann-dlcsrbh18aak",
      "name": "Viessmann DLCSRBH18AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCSRBH18AAK",
      "normalizedModelNumber": "dlcsrbh18aak",
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
      "id": "model-viessmann-dlcerbh09aak",
      "slug": "viessmann-dlcerbh09aak",
      "name": "Viessmann DLCERBH09AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCERBH09AAK",
      "normalizedModelNumber": "dlcerbh09aak",
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
      "id": "model-viessmann-d5cshah18aak",
      "slug": "viessmann-d5cshah18aak",
      "name": "Viessmann D5CSHAH18AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CSHAH18AAK",
      "normalizedModelNumber": "d5cshah18aak",
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
      "id": "model-viessmann-dlcerbh09aaj",
      "slug": "viessmann-dlcerbh09aaj",
      "name": "Viessmann DLCERBH09AAJ",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCERBH09AAJ",
      "normalizedModelNumber": "dlcerbh09aaj",
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
      "id": "model-viessmann-d5clhah36aak",
      "slug": "viessmann-d5clhah36aak",
      "name": "Viessmann D5CLHAH36AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CLHAH36AAK",
      "normalizedModelNumber": "d5clhah36aak",
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
      "id": "model-viessmann-dlcmhbh48eak",
      "slug": "viessmann-dlcmhbh48eak",
      "name": "Viessmann DLCMHBH48EAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMHBH48EAK",
      "normalizedModelNumber": "dlcmhbh48eak",
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
      "id": "model-viessmann-d5cshah24aak",
      "slug": "viessmann-d5cshah24aak",
      "name": "Viessmann D5CSHAH24AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CSHAH24AAK",
      "normalizedModelNumber": "d5cshah24aak",
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
      "id": "model-viessmann-dlcmrbh48eak",
      "slug": "viessmann-dlcmrbh48eak",
      "name": "Viessmann DLCMRBH48EAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMRBH48EAK",
      "normalizedModelNumber": "dlcmrbh48eak",
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
      "id": "model-viessmann-dlcsrbh30aak",
      "slug": "viessmann-dlcsrbh30aak",
      "name": "Viessmann DLCSRBH30AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCSRBH30AAK",
      "normalizedModelNumber": "dlcsrbh30aak",
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
      "id": "model-viessmann-dlcmrbh18bak",
      "slug": "viessmann-dlcmrbh18bak",
      "name": "Viessmann DLCMRBH18BAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMRBH18BAK",
      "normalizedModelNumber": "dlcmrbh18bak",
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
      "id": "model-viessmann-dlcerbh30aak",
      "slug": "viessmann-dlcerbh30aak",
      "name": "Viessmann DLCERBH30AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCERBH30AAK",
      "normalizedModelNumber": "dlcerbh30aak",
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
      "id": "model-viessmann-dlcsrbh30aak11",
      "slug": "viessmann-dlcsrbh30aak11",
      "name": "Viessmann DLCSRBH30AAK11",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCSRBH30AAK11",
      "normalizedModelNumber": "dlcsrbh30aak11",
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
      "id": "model-viessmann-d5csrah30aak",
      "slug": "viessmann-d5csrah30aak",
      "name": "Viessmann D5CSRAH30AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CSRAH30AAK",
      "normalizedModelNumber": "d5csrah30aak",
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
      "id": "model-viessmann-dlcmrbh36dak",
      "slug": "viessmann-dlcmrbh36dak",
      "name": "Viessmann DLCMRBH36DAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMRBH36DAK",
      "normalizedModelNumber": "dlcmrbh36dak",
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
      "id": "model-viessmann-dlcmtah27cak",
      "slug": "viessmann-dlcmtah27cak",
      "name": "Viessmann DLCMTAH27CAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMTAH27CAK",
      "normalizedModelNumber": "dlcmtah27cak",
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
      "id": "model-viessmann-dlcmhbh36dak",
      "slug": "viessmann-dlcmhbh36dak",
      "name": "Viessmann DLCMHBH36DAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMHBH36DAK",
      "normalizedModelNumber": "dlcmhbh36dak",
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
      "id": "model-viessmann-d5cshah33aak",
      "slug": "viessmann-d5cshah33aak",
      "name": "Viessmann D5CSHAH33AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CSHAH33AAK",
      "normalizedModelNumber": "d5cshah33aak",
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
      "id": "model-viessmann-dlcerbh18aak",
      "slug": "viessmann-dlcerbh18aak",
      "name": "Viessmann DLCERBH18AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCERBH18AAK",
      "normalizedModelNumber": "dlcerbh18aak",
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
      "id": "model-viessmann-d5cuhah18aak",
      "slug": "viessmann-d5cuhah18aak",
      "name": "Viessmann D5CUHAH18AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-dlclrch48aak",
      "slug": "viessmann-dlclrch48aak",
      "name": "Viessmann DLCLRCH48AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCLRCH48AAK",
      "normalizedModelNumber": "dlclrch48aak",
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
      "id": "model-viessmann-d5curah18aak",
      "slug": "viessmann-d5curah18aak",
      "name": "Viessmann D5CURAH18AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-d5cuhah24aak",
      "slug": "viessmann-d5cuhah24aak",
      "name": "Viessmann D5CUHAH24AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-d5clhah48aak",
      "slug": "viessmann-d5clhah48aak",
      "name": "Viessmann D5CLHAH48AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CLHAH48AAK",
      "normalizedModelNumber": "d5clhah48aak",
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
      "id": "model-viessmann-dlcmtah48eak",
      "slug": "viessmann-dlcmtah48eak",
      "name": "Viessmann DLCMTAH48EAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMTAH48EAK",
      "normalizedModelNumber": "dlcmtah48eak",
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
      "id": "model-viessmann-d5curah30aak",
      "slug": "viessmann-d5curah30aak",
      "name": "Viessmann D5CURAH30AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-dlcvrah09aak",
      "slug": "viessmann-dlcvrah09aak",
      "name": "Viessmann DLCVRAH09AAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCVRAH09AAK",
      "normalizedModelNumber": "dlcvrah09aak",
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
      "id": "model-viessmann-d5curah24aak",
      "slug": "viessmann-d5curah24aak",
      "name": "Viessmann D5CURAH24AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-d5clhah58aak",
      "slug": "viessmann-d5clhah58aak",
      "name": "Viessmann D5CLHAH58AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CLHAH58AAK",
      "normalizedModelNumber": "d5clhah58aak",
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
      "id": "model-viessmann-d5cuhah36aak",
      "slug": "viessmann-d5cuhah36aak",
      "name": "Viessmann D5CUHAH36AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-dlcurah18abk",
      "slug": "viessmann-dlcurah18abk",
      "name": "Viessmann DLCURAH18ABK",
      "seriesId": "series-viessmann-dlseries",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCURAH18ABK",
      "normalizedModelNumber": "dlcurah18abk",
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
      "id": "model-viessmann-dlcmtah18bak",
      "slug": "viessmann-dlcmtah18bak",
      "name": "Viessmann DLCMTAH18BAK",
      "seriesId": "series-viessmann-dlc-series",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCMTAH18BAK",
      "normalizedModelNumber": "dlcmtah18bak",
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
      "id": "model-viessmann-d5cuhah30aak",
      "slug": "viessmann-d5cuhah30aak",
      "name": "Viessmann D5CUHAH30AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-d5cuhah24aakksaic0701230",
      "slug": "viessmann-d5cuhah24aakksaic0701230",
      "name": "Viessmann D5CUHAH24AAK+KSAIC0701230",
      "seriesId": "series-viessmann-crossover-heat-pump",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CUHAH24AAK+KSAIC0701230",
      "normalizedModelNumber": "d5cuhah24aak+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23400,
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
      "id": "model-viessmann-d5cuhah48aak",
      "slug": "viessmann-d5cuhah48aak",
      "name": "Viessmann D5CUHAH48AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-d5cuhah60aak",
      "slug": "viessmann-d5cuhah60aak",
      "name": "Viessmann D5CUHAH60AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-dlcurah24abk",
      "slug": "viessmann-dlcurah24abk",
      "name": "Viessmann DLCURAH24ABK",
      "seriesId": "series-viessmann-dlseries",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-dlcurah24aak",
      "slug": "viessmann-dlcurah24aak",
      "name": "Viessmann DLCURAH24AAK",
      "seriesId": "series-viessmann-dlseries",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-d5curah36aak",
      "slug": "viessmann-d5curah36aak",
      "name": "Viessmann D5CURAH36AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-d5cuhah18aakksaic0701230",
      "slug": "viessmann-d5cuhah18aakksaic0701230",
      "name": "Viessmann D5CUHAH18AAK+KSAIC0701230",
      "seriesId": "series-viessmann-crossover-heat-pump",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CUHAH18AAK+KSAIC0701230",
      "normalizedModelNumber": "d5cuhah18aak+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17700,
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
      "id": "model-viessmann-d5cuhah36aakksaic0701230",
      "slug": "viessmann-d5cuhah36aakksaic0701230",
      "name": "Viessmann D5CUHAH36AAK+KSAIC0701230",
      "seriesId": "series-viessmann-crossover-heat-pump",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CUHAH36AAK+KSAIC0701230",
      "normalizedModelNumber": "d5cuhah36aak+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36200,
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
      "id": "model-viessmann-d5cuhah30aakksaic0701230",
      "slug": "viessmann-d5cuhah30aakksaic0701230",
      "name": "Viessmann D5CUHAH30AAK+KSAIC0701230",
      "seriesId": "series-viessmann-crossover-heat-pump",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CUHAH30AAK+KSAIC0701230",
      "normalizedModelNumber": "d5cuhah30aak+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 31200,
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
      "id": "model-viessmann-dlcurah30abk",
      "slug": "viessmann-dlcurah30abk",
      "name": "Viessmann DLCURAH30ABK",
      "seriesId": "series-viessmann-dlseries",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCURAH30ABK",
      "normalizedModelNumber": "dlcurah30abk",
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
      "id": "model-viessmann-dlcurah36abk",
      "slug": "viessmann-dlcurah36abk",
      "name": "Viessmann DLCURAH36ABK",
      "seriesId": "series-viessmann-dlseries",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCURAH36ABK",
      "normalizedModelNumber": "dlcurah36abk",
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
      "id": "model-viessmann-d5curah24aakksaic0701230",
      "slug": "viessmann-d5curah24aakksaic0701230",
      "name": "Viessmann D5CURAH24AAK+KSAIC0701230",
      "seriesId": "series-viessmann-crossover-heat-pump",
      "brandId": "brand-viessmann",
      "modelNumber": "D5CURAH24AAK+KSAIC0701230",
      "normalizedModelNumber": "d5curah24aak+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23800,
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
      "id": "model-viessmann-d5curah48aak",
      "slug": "viessmann-d5curah48aak",
      "name": "Viessmann D5CURAH48AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
      "id": "model-viessmann-dlcurah48abk",
      "slug": "viessmann-dlcurah48abk",
      "name": "Viessmann DLCURAH48ABK",
      "seriesId": "series-viessmann-dlseries",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCURAH48ABK",
      "normalizedModelNumber": "dlcurah48abk",
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
      "id": "model-viessmann-dlcurah60abk",
      "slug": "viessmann-dlcurah60abk",
      "name": "Viessmann DLCURAH60ABK",
      "seriesId": "series-viessmann-dlseries",
      "brandId": "brand-viessmann",
      "modelNumber": "DLCURAH60ABK",
      "normalizedModelNumber": "dlcurah60abk",
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
      "id": "model-viessmann-d5curah60aak",
      "slug": "viessmann-d5curah60aak",
      "name": "Viessmann D5CURAH60AAK",
      "seriesId": "series-viessmann-d5c-series",
      "brandId": "brand-viessmann",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-viessmann-dlcsrbh09aak",
      "modelNumber": "DLCSRBH09AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cshah09aak",
      "modelNumber": "D5CSHAH09AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcprbh09aak",
      "modelNumber": "DLCPRBH09AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcsrbh06aak",
      "modelNumber": "DLCSRBH06AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcprbh18aak",
      "modelNumber": "DLCPRBH18AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cshah06aak",
      "modelNumber": "D5CSHAH06AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcsrbh12aak",
      "modelNumber": "DLCSRBH12AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cshah12aak",
      "modelNumber": "D5CSHAH12AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcprbh12aak",
      "modelNumber": "DLCPRBH12AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cmhah18cak",
      "modelNumber": "D5CMHAH18CAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cmhah24dak",
      "modelNumber": "D5CMHAH24DAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cmhah30eak",
      "modelNumber": "D5CMHAH30EAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcsrbh12aaj",
      "modelNumber": "DLCSRBH12AAJ",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cmhah36eak",
      "modelNumber": "D5CMHAH36EAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cmhah48fak",
      "modelNumber": "D5CMHAH48FAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcmhbh30dak",
      "modelNumber": "DLCMHBH30DAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cmhah55fak",
      "modelNumber": "D5CMHAH55FAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcmhbh24cak",
      "modelNumber": "DLCMHBH24CAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcsrbh24aak",
      "modelNumber": "DLCSRBH24AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcsrbh18aak",
      "modelNumber": "DLCSRBH18AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcerbh09aak",
      "modelNumber": "DLCERBH09AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cshah18aak",
      "modelNumber": "D5CSHAH18AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcerbh09aaj",
      "modelNumber": "DLCERBH09AAJ",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5clhah36aak",
      "modelNumber": "D5CLHAH36AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcmhbh48eak",
      "modelNumber": "DLCMHBH48EAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cshah24aak",
      "modelNumber": "D5CSHAH24AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcmrbh48eak",
      "modelNumber": "DLCMRBH48EAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcsrbh30aak",
      "modelNumber": "DLCSRBH30AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcmrbh18bak",
      "modelNumber": "DLCMRBH18BAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcerbh30aak",
      "modelNumber": "DLCERBH30AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcsrbh30aak11",
      "modelNumber": "DLCSRBH30AAK11",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5csrah30aak",
      "modelNumber": "D5CSRAH30AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcmrbh36dak",
      "modelNumber": "DLCMRBH36DAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcmtah27cak",
      "modelNumber": "DLCMTAH27CAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcmhbh36dak",
      "modelNumber": "DLCMHBH36DAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cshah33aak",
      "modelNumber": "D5CSHAH33AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcerbh18aak",
      "modelNumber": "DLCERBH18AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cuhah18aak",
      "modelNumber": "D5CUHAH18AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlclrch48aak",
      "modelNumber": "DLCLRCH48AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5curah18aak",
      "modelNumber": "D5CURAH18AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cuhah24aak",
      "modelNumber": "D5CUHAH24AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5clhah48aak",
      "modelNumber": "D5CLHAH48AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcmtah48eak",
      "modelNumber": "DLCMTAH48EAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5curah30aak",
      "modelNumber": "D5CURAH30AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcvrah09aak",
      "modelNumber": "DLCVRAH09AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5curah24aak",
      "modelNumber": "D5CURAH24AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5clhah58aak",
      "modelNumber": "D5CLHAH58AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cuhah36aak",
      "modelNumber": "D5CUHAH36AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcurah18abk",
      "modelNumber": "DLCURAH18ABK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcmtah18bak",
      "modelNumber": "DLCMTAH18BAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5cuhah30aak",
      "modelNumber": "D5CUHAH30AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cuhah24aakksaic0701230",
      "modelNumber": "D5CUHAH24AAK+KSAIC0701230",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cuhah48aak",
      "modelNumber": "D5CUHAH48AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cuhah60aak",
      "modelNumber": "D5CUHAH60AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcurah24abk",
      "modelNumber": "DLCURAH24ABK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcurah24aak",
      "modelNumber": "DLCURAH24AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5curah36aak",
      "modelNumber": "D5CURAH36AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cuhah18aakksaic0701230",
      "modelNumber": "D5CUHAH18AAK+KSAIC0701230",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cuhah36aakksaic0701230",
      "modelNumber": "D5CUHAH36AAK+KSAIC0701230",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5cuhah30aakksaic0701230",
      "modelNumber": "D5CUHAH30AAK+KSAIC0701230",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcurah30abk",
      "modelNumber": "DLCURAH30ABK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcurah36abk",
      "modelNumber": "DLCURAH36ABK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5curah24aakksaic0701230",
      "modelNumber": "D5CURAH24AAK+KSAIC0701230",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-d5curah48aak",
      "modelNumber": "D5CURAH48AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-viessmann-dlcurah48abk",
      "modelNumber": "DLCURAH48ABK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-dlcurah60abk",
      "modelNumber": "DLCURAH60ABK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-viessmann-d5curah60aak",
      "modelNumber": "D5CURAH60AAK",
      "brandId": "brand-viessmann",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dlfshch09xak",
      "modelNumber": "DLFSHCH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah09xak",
      "modelNumber": "D5FSHAH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsfah09xak",
      "modelNumber": "D5FSFAH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphbh09xak",
      "modelNumber": "DLFPHBH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch06xak",
      "modelNumber": "DLFSHCH06XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh09xak",
      "modelNumber": "DLFSHBH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphbh18xak",
      "modelNumber": "DLFPHBH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah06xak",
      "modelNumber": "D5FSHAH06XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphah09xak",
      "modelNumber": "DLFPHAH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch12xak",
      "modelNumber": "DLFSHCH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah12xak",
      "modelNumber": "D5FSHAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphbh12xak",
      "modelNumber": "DLFPHBH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsfah12xak",
      "modelNumber": "D5FSFAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52191",
      "modelNumber": "IU-52191",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsfbh12xak",
      "modelNumber": "DLFSFBH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52192",
      "modelNumber": "IU-52192",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphah12xak",
      "modelNumber": "DLFPHAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsoah12xak",
      "modelNumber": "D5FSOAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52193",
      "modelNumber": "IU-52193",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfccah09xak",
      "modelNumber": "DLFCCAH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsoah09xak",
      "modelNumber": "DLFSOAH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsfah12xak",
      "modelNumber": "DLFSFAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh06xak",
      "modelNumber": "DLFSHBH06XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch12xaj",
      "modelNumber": "DLFSHCH12XAJ",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52194",
      "modelNumber": "IU-52194",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh12xak",
      "modelNumber": "DLFSHBH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52195",
      "modelNumber": "IU-52195",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsoah18xak",
      "modelNumber": "DLFSOAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fscah12xak",
      "modelNumber": "D5FSCAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh12xaj",
      "modelNumber": "DLFSHBH12XAJ",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52231",
      "modelNumber": "IU-52231",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52196",
      "modelNumber": "IU-52196",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52230",
      "modelNumber": "IU-52230",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh24xak",
      "modelNumber": "DLFSHBH24XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfscah12xak",
      "modelNumber": "DLFSCAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsoah06xak",
      "modelNumber": "D5FSOAH06XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh18xak",
      "modelNumber": "DLFSHBH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfehbh09xak",
      "modelNumber": "DLFEHBH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah18xak",
      "modelNumber": "D5FSHAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch18xak",
      "modelNumber": "DLFSHCH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch24xak",
      "modelNumber": "DLFSHCH24XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfehbh09xaj",
      "modelNumber": "DLFEHBH09XAJ",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsdah12xak",
      "modelNumber": "D5FSDAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5flcah36xak",
      "modelNumber": "D5FLCAH36XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52233",
      "modelNumber": "IU-52233",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah24xak",
      "modelNumber": "D5FSHAH24XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52236",
      "modelNumber": "IU-52236",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh30xak",
      "modelNumber": "DLFSHBH30XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52234",
      "modelNumber": "IU-52234",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfehbh30xak",
      "modelNumber": "DLFEHBH30XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fscah24xak",
      "modelNumber": "D5FSCAH24XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsoah18xak",
      "modelNumber": "D5FSOAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsdah12xhk",
      "modelNumber": "D5FSDAH12XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsfah18xak",
      "modelNumber": "DLFSFAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah30xak",
      "modelNumber": "D5FSHAH30XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfscbh24xak",
      "modelNumber": "DLFSCBH24XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah09xhk",
      "modelNumber": "DLFSDAH09XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfscah09xak",
      "modelNumber": "DLFSCAH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsfah24xak",
      "modelNumber": "DLFSFAH24XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fcfah24xak",
      "modelNumber": "D5FCFAH24XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fcfah18xak",
      "modelNumber": "D5FCFAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah09xak",
      "modelNumber": "DLFSDAH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsfah16xak",
      "modelNumber": "D5FSFAH16XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fcfah36xak",
      "modelNumber": "D5FCFAH36XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch30xak",
      "modelNumber": "DLFSHCH30XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52235",
      "modelNumber": "IU-52235",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah12xhk",
      "modelNumber": "DLFSDAH12XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fscah18xak",
      "modelNumber": "D5FSCAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52238",
      "modelNumber": "IU-52238",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52232",
      "modelNumber": "IU-52232",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfscah18xak",
      "modelNumber": "DLFSCAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfccah18xak",
      "modelNumber": "DLFCCAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah33xak",
      "modelNumber": "D5FSHAH33XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfehbh18xak",
      "modelNumber": "DLFEHBH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah12xak",
      "modelNumber": "DLFSDAH12XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5muwaq18xa3",
      "modelNumber": "D5MUWAQ18XA3",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfsdah24xak",
      "modelNumber": "DLFSDAH24XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah24xhk",
      "modelNumber": "DLFSDAH24XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsdah24xhk",
      "modelNumber": "D5FSDAH24XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fuaah18xak",
      "modelNumber": "D5FUAAH18XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuhah24xak",
      "modelNumber": "D5FUHAH24XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlflfah48xak",
      "modelNumber": "DLFLFAH48XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsaah24xbk",
      "modelNumber": "D5FSAAH24XBK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fcfah48xak",
      "modelNumber": "D5FCFAH48XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52239",
      "modelNumber": "IU-52239",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5muwaq30xa3",
      "modelNumber": "D5MUWAQ30XA3",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfvhah09xak",
      "modelNumber": "DLFVHAH09XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsdah18xhk",
      "modelNumber": "D5FSDAH18XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsabh24xbk",
      "modelNumber": "DLFSABH24XBK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah24xak",
      "modelNumber": "D5FUAAH24XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsaah18xbk",
      "modelNumber": "D5FSAAH18XBK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5flcah48xak",
      "modelNumber": "D5FLCAH48XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fcfah58xak",
      "modelNumber": "D5FCFAH58XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fuhah36xak",
      "modelNumber": "D5FUHAH36XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfsdah18xhk",
      "modelNumber": "DLFSDAH18XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfuaah18xak",
      "modelNumber": "DLFUAAH18XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsdah18xak",
      "modelNumber": "D5FSDAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52237",
      "modelNumber": "IU-52237",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah18xak",
      "modelNumber": "DLFSDAH18XAK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fldah36xhk",
      "modelNumber": "D5FLDAH36XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsabh18xbk",
      "modelNumber": "DLFSABH18XBK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5muwaq24xa3",
      "modelNumber": "D5MUWAQ24XA3",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x24al",
      "modelNumber": "FMA5X24**AL*",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuhah60xak",
      "modelNumber": "D5FUHAH60XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfuaah24xak",
      "modelNumber": "DLFUAAH24XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah36xak",
      "modelNumber": "D5FUAAH36XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5flaah36xak",
      "modelNumber": "D5FLAAH36XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5flaah48xak",
      "modelNumber": "D5FLAAH48XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsaah30xbk",
      "modelNumber": "D5FSAAH30XBK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah30xak",
      "modelNumber": "D5FUAAH30XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5muwaq36xa3",
      "modelNumber": "D5MUWAQ36XA3",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fldah48xhk",
      "modelNumber": "D5FLDAH48XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsaah36xbk",
      "modelNumber": "D5FSAAH36XBK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x18al",
      "modelNumber": "FMA5X18**AL*",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah48xak",
      "modelNumber": "D5FUAAH48XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x36al",
      "modelNumber": "FMA5X36**AL*",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfulah24xbx-ci",
      "modelNumber": "DLFULAH24XBX + CI",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x30al",
      "modelNumber": "FMA5X30**AL*",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfuaah30xak",
      "modelNumber": "DLFUAAH30XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfulah24xax-ci",
      "modelNumber": "DLFULAH24XAX + CI",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah24xax",
      "modelNumber": "D5FULAH24XAX",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah24xbx",
      "modelNumber": "D5FULAH24XBX",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfuaah36xak",
      "modelNumber": "DLFUAAH36XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah36xbx",
      "modelNumber": "D5FULAH36XBX",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah60xmx",
      "modelNumber": "D5FULAH60XMX",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah36xcx",
      "modelNumber": "D5FULAH36XCX",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah60xak",
      "modelNumber": "D5FUAAH60XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fldah58xhk",
      "modelNumber": "D5FLDAH58XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfuaah48xak",
      "modelNumber": "DLFUAAH48XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfulah36xcx-ci",
      "modelNumber": "DLFULAH36XCX + CI",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfulah36xbx-ci",
      "modelNumber": "DLFULAH36XBX + CI",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5flaah60xak",
      "modelNumber": "D5FLAAH60XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah36xax",
      "modelNumber": "D5FULAH36XAX",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfuaah60xak",
      "modelNumber": "DLFUAAH60XAK",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fulah60xdx",
      "modelNumber": "D5FULAH60XDX",
      "brandId": "brand-viessmann",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfldah48xhk",
      "modelNumber": "DLFLDAH48XHK",
      "brandId": "brand-viessmann",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-viessmann-dlcsrbh09aak-dlfshch09xak",
      "slug": "viessmann-dlcsrbh09aak-dlfshch09xak",
      "modelId": "model-viessmann-dlcsrbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh09aak",
      "indoorUnitId": "iu-dlfshch09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah09aak-d5fshah09xak",
      "slug": "viessmann-d5cshah09aak-d5fshah09xak",
      "modelId": "model-viessmann-d5cshah09aak",
      "outdoorUnitId": "ou-viessmann-d5cshah09aak",
      "indoorUnitId": "iu-d5fshah09xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah09aak-d5fsfah09xak",
      "slug": "viessmann-d5cshah09aak-d5fsfah09xak",
      "modelId": "model-viessmann-d5cshah09aak",
      "outdoorUnitId": "ou-viessmann-d5cshah09aak",
      "indoorUnitId": "iu-d5fsfah09xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.3,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcprbh09aak-dlfphbh09xak",
      "slug": "viessmann-dlcprbh09aak-dlfphbh09xak",
      "modelId": "model-viessmann-dlcprbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcprbh09aak",
      "indoorUnitId": "iu-dlfphbh09xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.0,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh06aak-dlfshch06xak",
      "slug": "viessmann-dlcsrbh06aak-dlfshch06xak",
      "modelId": "model-viessmann-dlcsrbh06aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh06aak",
      "indoorUnitId": "iu-dlfshch06xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh09aak-dlfshbh09xak",
      "slug": "viessmann-dlcsrbh09aak-dlfshbh09xak",
      "modelId": "model-viessmann-dlcsrbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh09aak",
      "indoorUnitId": "iu-dlfshbh09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcprbh18aak-dlfphbh18xak",
      "slug": "viessmann-dlcprbh18aak-dlfphbh18xak",
      "modelId": "model-viessmann-dlcprbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcprbh18aak",
      "indoorUnitId": "iu-dlfphbh18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.3,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah06aak-d5fshah06xak",
      "slug": "viessmann-d5cshah06aak-d5fshah06xak",
      "modelId": "model-viessmann-d5cshah06aak",
      "outdoorUnitId": "ou-viessmann-d5cshah06aak",
      "indoorUnitId": "iu-d5fshah06xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.7,
      "hspf2": 14.8,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcprbh09aak-dlfphah09xak",
      "slug": "viessmann-dlcprbh09aak-dlfphah09xak",
      "modelId": "model-viessmann-dlcprbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcprbh09aak",
      "indoorUnitId": "iu-dlfphah09xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 15.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aak-dlfshch12xak",
      "slug": "viessmann-dlcsrbh12aak-dlfshch12xak",
      "modelId": "model-viessmann-dlcsrbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aak",
      "indoorUnitId": "iu-dlfshch12xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah12aak-d5fshah12xak",
      "slug": "viessmann-d5cshah12aak-d5fshah12xak",
      "modelId": "model-viessmann-d5cshah12aak",
      "outdoorUnitId": "ou-viessmann-d5cshah12aak",
      "indoorUnitId": "iu-d5fshah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcprbh12aak-dlfphbh12xak",
      "slug": "viessmann-dlcprbh12aak-dlfphbh12xak",
      "modelId": "model-viessmann-dlcprbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcprbh12aak",
      "indoorUnitId": "iu-dlfphbh12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah12aak-d5fsfah12xak",
      "slug": "viessmann-d5cshah12aak-d5fsfah12xak",
      "modelId": "model-viessmann-d5cshah12aak",
      "outdoorUnitId": "ou-viessmann-d5cshah12aak",
      "indoorUnitId": "iu-d5fsfah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cmhah18cak-iu-52191",
      "slug": "viessmann-d5cmhah18cak-iu-52191",
      "modelId": "model-viessmann-d5cmhah18cak",
      "outdoorUnitId": "ou-viessmann-d5cmhah18cak",
      "indoorUnitId": "iu-iu-52191",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aak-dlfsfbh12xak",
      "slug": "viessmann-dlcsrbh12aak-dlfsfbh12xak",
      "modelId": "model-viessmann-dlcsrbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aak",
      "indoorUnitId": "iu-dlfsfbh12xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cmhah24dak-iu-52192",
      "slug": "viessmann-d5cmhah24dak-iu-52192",
      "modelId": "model-viessmann-d5cmhah24dak",
      "outdoorUnitId": "ou-viessmann-d5cmhah24dak",
      "indoorUnitId": "iu-iu-52192",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcprbh12aak-dlfphah12xak",
      "slug": "viessmann-dlcprbh12aak-dlfphah12xak",
      "modelId": "model-viessmann-dlcprbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcprbh12aak",
      "indoorUnitId": "iu-dlfphah12xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah09aak-d5fsoah12xak",
      "slug": "viessmann-d5cshah09aak-d5fsoah12xak",
      "modelId": "model-viessmann-d5cshah09aak",
      "outdoorUnitId": "ou-viessmann-d5cshah09aak",
      "indoorUnitId": "iu-d5fsoah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cmhah30eak-iu-52193",
      "slug": "viessmann-d5cmhah30eak-iu-52193",
      "modelId": "model-viessmann-d5cmhah30eak",
      "outdoorUnitId": "ou-viessmann-d5cmhah30eak",
      "indoorUnitId": "iu-iu-52193",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh09aak-dlfccah09xak",
      "slug": "viessmann-dlcsrbh09aak-dlfccah09xak",
      "modelId": "model-viessmann-dlcsrbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh09aak",
      "indoorUnitId": "iu-dlfccah09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh09aak-dlfsoah09xak",
      "slug": "viessmann-dlcsrbh09aak-dlfsoah09xak",
      "modelId": "model-viessmann-dlcsrbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh09aak",
      "indoorUnitId": "iu-dlfsoah09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aak-dlfsfah12xak",
      "slug": "viessmann-dlcsrbh12aak-dlfsfah12xak",
      "modelId": "model-viessmann-dlcsrbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aak",
      "indoorUnitId": "iu-dlfsfah12xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh06aak-dlfshbh06xak",
      "slug": "viessmann-dlcsrbh06aak-dlfshbh06xak",
      "modelId": "model-viessmann-dlcsrbh06aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh06aak",
      "indoorUnitId": "iu-dlfshbh06xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aaj-dlfshch12xaj",
      "slug": "viessmann-dlcsrbh12aaj-dlfshch12xaj",
      "modelId": "model-viessmann-dlcsrbh12aaj",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aaj",
      "indoorUnitId": "iu-dlfshch12xaj",
      "minHeatingTempC": -15,
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cmhah36eak-iu-52194",
      "slug": "viessmann-d5cmhah36eak-iu-52194",
      "modelId": "model-viessmann-d5cmhah36eak",
      "outdoorUnitId": "ou-viessmann-d5cmhah36eak",
      "indoorUnitId": "iu-iu-52194",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aak-dlfshbh12xak",
      "slug": "viessmann-dlcsrbh12aak-dlfshbh12xak",
      "modelId": "model-viessmann-dlcsrbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aak",
      "indoorUnitId": "iu-dlfshbh12xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah12aak-d5fsoah12xak",
      "slug": "viessmann-d5cshah12aak-d5fsoah12xak",
      "modelId": "model-viessmann-d5cshah12aak",
      "outdoorUnitId": "ou-viessmann-d5cshah12aak",
      "indoorUnitId": "iu-d5fsoah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cmhah48fak-iu-52195",
      "slug": "viessmann-d5cmhah48fak-iu-52195",
      "modelId": "model-viessmann-d5cmhah48fak",
      "outdoorUnitId": "ou-viessmann-d5cmhah48fak",
      "indoorUnitId": "iu-iu-52195",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aak-dlfsoah18xak",
      "slug": "viessmann-dlcsrbh12aak-dlfsoah18xak",
      "modelId": "model-viessmann-dlcsrbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aak",
      "indoorUnitId": "iu-dlfsoah18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah09aak-d5fscah12xak",
      "slug": "viessmann-d5cshah09aak-d5fscah12xak",
      "modelId": "model-viessmann-d5cshah09aak",
      "outdoorUnitId": "ou-viessmann-d5cshah09aak",
      "indoorUnitId": "iu-d5fscah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aaj-dlfshbh12xaj",
      "slug": "viessmann-dlcsrbh12aaj-dlfshbh12xaj",
      "modelId": "model-viessmann-dlcsrbh12aaj",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aaj",
      "indoorUnitId": "iu-dlfshbh12xaj",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmhbh30dak-iu-52231",
      "slug": "viessmann-dlcmhbh30dak-iu-52231",
      "modelId": "model-viessmann-dlcmhbh30dak",
      "outdoorUnitId": "ou-viessmann-dlcmhbh30dak",
      "indoorUnitId": "iu-iu-52231",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.4,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cmhah55fak-iu-52196",
      "slug": "viessmann-d5cmhah55fak-iu-52196",
      "modelId": "model-viessmann-d5cmhah55fak",
      "outdoorUnitId": "ou-viessmann-d5cmhah55fak",
      "indoorUnitId": "iu-iu-52196",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmhbh24cak-iu-52230",
      "slug": "viessmann-dlcmhbh24cak-iu-52230",
      "modelId": "model-viessmann-dlcmhbh24cak",
      "outdoorUnitId": "ou-viessmann-dlcmhbh24cak",
      "indoorUnitId": "iu-iu-52230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh24aak-dlfshbh24xak",
      "slug": "viessmann-dlcsrbh24aak-dlfshbh24xak",
      "modelId": "model-viessmann-dlcsrbh24aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh24aak",
      "indoorUnitId": "iu-dlfshbh24xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aak-dlfscah12xak",
      "slug": "viessmann-dlcsrbh12aak-dlfscah12xak",
      "modelId": "model-viessmann-dlcsrbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aak",
      "indoorUnitId": "iu-dlfscah12xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah12aak-d5fscah12xak",
      "slug": "viessmann-d5cshah12aak-d5fscah12xak",
      "modelId": "model-viessmann-d5cshah12aak",
      "outdoorUnitId": "ou-viessmann-d5cshah12aak",
      "indoorUnitId": "iu-d5fscah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh06aak-dlfsoah09xak",
      "slug": "viessmann-dlcsrbh06aak-dlfsoah09xak",
      "modelId": "model-viessmann-dlcsrbh06aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh06aak",
      "indoorUnitId": "iu-dlfsoah09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah06aak-d5fsoah06xak",
      "slug": "viessmann-d5cshah06aak-d5fsoah06xak",
      "modelId": "model-viessmann-d5cshah06aak",
      "outdoorUnitId": "ou-viessmann-d5cshah06aak",
      "indoorUnitId": "iu-d5fsoah06xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfshbh18xak",
      "slug": "viessmann-dlcsrbh18aak-dlfshbh18xak",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfshbh18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcerbh09aak-dlfehbh09xak",
      "slug": "viessmann-dlcerbh09aak-dlfehbh09xak",
      "modelId": "model-viessmann-dlcerbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcerbh09aak",
      "indoorUnitId": "iu-dlfehbh09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah18aak-d5fshah18xak",
      "slug": "viessmann-d5cshah18aak-d5fshah18xak",
      "modelId": "model-viessmann-d5cshah18aak",
      "outdoorUnitId": "ou-viessmann-d5cshah18aak",
      "indoorUnitId": "iu-d5fshah18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfshch18xak",
      "slug": "viessmann-dlcsrbh18aak-dlfshch18xak",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfshch18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh24aak-dlfshch24xak",
      "slug": "viessmann-dlcsrbh24aak-dlfshch24xak",
      "modelId": "model-viessmann-dlcsrbh24aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh24aak",
      "indoorUnitId": "iu-dlfshch24xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcerbh09aaj-dlfehbh09xaj",
      "slug": "viessmann-dlcerbh09aaj-dlfehbh09xaj",
      "modelId": "model-viessmann-dlcerbh09aaj",
      "outdoorUnitId": "ou-viessmann-dlcerbh09aaj",
      "indoorUnitId": "iu-dlfehbh09xaj",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah09aak-d5fsdah12xak",
      "slug": "viessmann-d5cshah09aak-d5fsdah12xak",
      "modelId": "model-viessmann-d5cshah09aak",
      "outdoorUnitId": "ou-viessmann-d5cshah09aak",
      "indoorUnitId": "iu-d5fsdah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah36aak-d5flcah36xak",
      "slug": "viessmann-d5clhah36aak-d5flcah36xak",
      "modelId": "model-viessmann-d5clhah36aak",
      "outdoorUnitId": "ou-viessmann-d5clhah36aak",
      "indoorUnitId": "iu-d5flcah36xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmhbh48eak-iu-52233",
      "slug": "viessmann-dlcmhbh48eak-iu-52233",
      "modelId": "model-viessmann-dlcmhbh48eak",
      "outdoorUnitId": "ou-viessmann-dlcmhbh48eak",
      "indoorUnitId": "iu-iu-52233",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah24aak-d5fshah24xak",
      "slug": "viessmann-d5cshah24aak-d5fshah24xak",
      "modelId": "model-viessmann-d5cshah24aak",
      "outdoorUnitId": "ou-viessmann-d5cshah24aak",
      "indoorUnitId": "iu-d5fshah24xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmrbh48eak-iu-52236",
      "slug": "viessmann-dlcmrbh48eak-iu-52236",
      "modelId": "model-viessmann-dlcmrbh48eak",
      "outdoorUnitId": "ou-viessmann-dlcmrbh48eak",
      "indoorUnitId": "iu-iu-52236",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh30aak-dlfshbh30xak",
      "slug": "viessmann-dlcsrbh30aak-dlfshbh30xak",
      "modelId": "model-viessmann-dlcsrbh30aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh30aak",
      "indoorUnitId": "iu-dlfshbh30xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmrbh18bak-iu-52234",
      "slug": "viessmann-dlcmrbh18bak-iu-52234",
      "modelId": "model-viessmann-dlcmrbh18bak",
      "outdoorUnitId": "ou-viessmann-dlcmrbh18bak",
      "indoorUnitId": "iu-iu-52234",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcerbh30aak-dlfehbh30xak",
      "slug": "viessmann-dlcerbh30aak-dlfehbh30xak",
      "modelId": "model-viessmann-dlcerbh30aak",
      "outdoorUnitId": "ou-viessmann-dlcerbh30aak",
      "indoorUnitId": "iu-dlfehbh30xak",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh30aak11-dlfshbh30xak",
      "slug": "viessmann-dlcsrbh30aak11-dlfshbh30xak",
      "modelId": "model-viessmann-dlcsrbh30aak11",
      "outdoorUnitId": "ou-viessmann-dlcsrbh30aak11",
      "indoorUnitId": "iu-dlfshbh30xak",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah24aak-d5fscah24xak",
      "slug": "viessmann-d5cshah24aak-d5fscah24xak",
      "modelId": "model-viessmann-d5cshah24aak",
      "outdoorUnitId": "ou-viessmann-d5cshah24aak",
      "indoorUnitId": "iu-d5fscah24xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.8,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah18aak-d5fsoah18xak",
      "slug": "viessmann-d5cshah18aak-d5fsoah18xak",
      "modelId": "model-viessmann-d5cshah18aak",
      "outdoorUnitId": "ou-viessmann-d5cshah18aak",
      "indoorUnitId": "iu-d5fsoah18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah09aak-d5fsdah12xhk",
      "slug": "viessmann-d5cshah09aak-d5fsdah12xhk",
      "modelId": "model-viessmann-d5cshah09aak",
      "outdoorUnitId": "ou-viessmann-d5cshah09aak",
      "indoorUnitId": "iu-d5fsdah12xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.6,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfsfah18xak",
      "slug": "viessmann-dlcsrbh18aak-dlfsfah18xak",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfsfah18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5csrah30aak-d5fshah30xak",
      "slug": "viessmann-d5csrah30aak-d5fshah30xak",
      "modelId": "model-viessmann-d5csrah30aak",
      "outdoorUnitId": "ou-viessmann-d5csrah30aak",
      "indoorUnitId": "iu-d5fshah30xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh24aak-dlfscbh24xak",
      "slug": "viessmann-dlcsrbh24aak-dlfscbh24xak",
      "modelId": "model-viessmann-dlcsrbh24aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh24aak",
      "indoorUnitId": "iu-dlfscbh24xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh09aak-dlfsdah09xhk",
      "slug": "viessmann-dlcsrbh09aak-dlfsdah09xhk",
      "modelId": "model-viessmann-dlcsrbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh09aak",
      "indoorUnitId": "iu-dlfsdah09xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh09aak-dlfscah09xak",
      "slug": "viessmann-dlcsrbh09aak-dlfscah09xak",
      "modelId": "model-viessmann-dlcsrbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh09aak",
      "indoorUnitId": "iu-dlfscah09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh24aak-dlfsfah24xak",
      "slug": "viessmann-dlcsrbh24aak-dlfsfah24xak",
      "modelId": "model-viessmann-dlcsrbh24aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh24aak",
      "indoorUnitId": "iu-dlfsfah24xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah24aak-d5fcfah24xak",
      "slug": "viessmann-d5cshah24aak-d5fcfah24xak",
      "modelId": "model-viessmann-d5cshah24aak",
      "outdoorUnitId": "ou-viessmann-d5cshah24aak",
      "indoorUnitId": "iu-d5fcfah24xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah18aak-d5fcfah18xak",
      "slug": "viessmann-d5cshah18aak-d5fcfah18xak",
      "modelId": "model-viessmann-d5cshah18aak",
      "outdoorUnitId": "ou-viessmann-d5cshah18aak",
      "indoorUnitId": "iu-d5fcfah18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh09aak-dlfsdah09xak",
      "slug": "viessmann-dlcsrbh09aak-dlfsdah09xak",
      "modelId": "model-viessmann-dlcsrbh09aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh09aak",
      "indoorUnitId": "iu-dlfsdah09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah12aak-d5fsdah12xhk",
      "slug": "viessmann-d5cshah12aak-d5fsdah12xhk",
      "modelId": "model-viessmann-d5cshah12aak",
      "outdoorUnitId": "ou-viessmann-d5cshah12aak",
      "indoorUnitId": "iu-d5fsdah12xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah18aak-d5fsfah16xak",
      "slug": "viessmann-d5cshah18aak-d5fsfah16xak",
      "modelId": "model-viessmann-d5cshah18aak",
      "outdoorUnitId": "ou-viessmann-d5cshah18aak",
      "indoorUnitId": "iu-d5fsfah16xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah36aak-d5fcfah36xak",
      "slug": "viessmann-d5clhah36aak-d5fcfah36xak",
      "modelId": "model-viessmann-d5clhah36aak",
      "outdoorUnitId": "ou-viessmann-d5clhah36aak",
      "indoorUnitId": "iu-d5fcfah36xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh30aak-dlfshch30xak",
      "slug": "viessmann-dlcsrbh30aak-dlfshch30xak",
      "modelId": "model-viessmann-dlcsrbh30aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh30aak",
      "indoorUnitId": "iu-dlfshch30xak",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.1,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmrbh36dak-iu-52235",
      "slug": "viessmann-dlcmrbh36dak-iu-52235",
      "modelId": "model-viessmann-dlcmrbh36dak",
      "outdoorUnitId": "ou-viessmann-dlcmrbh36dak",
      "indoorUnitId": "iu-iu-52235",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aak-dlfsdah12xhk",
      "slug": "viessmann-dlcsrbh12aak-dlfsdah12xhk",
      "modelId": "model-viessmann-dlcsrbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aak",
      "indoorUnitId": "iu-dlfsdah12xhk",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah12aak-d5fsdah12xak",
      "slug": "viessmann-d5cshah12aak-d5fsdah12xak",
      "modelId": "model-viessmann-d5cshah12aak",
      "outdoorUnitId": "ou-viessmann-d5cshah12aak",
      "indoorUnitId": "iu-d5fsdah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah18aak-d5fscah18xak",
      "slug": "viessmann-d5cshah18aak-d5fscah18xak",
      "modelId": "model-viessmann-d5cshah18aak",
      "outdoorUnitId": "ou-viessmann-d5cshah18aak",
      "indoorUnitId": "iu-d5fscah18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 12.4,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmtah27cak-iu-52238",
      "slug": "viessmann-dlcmtah27cak-iu-52238",
      "modelId": "model-viessmann-dlcmtah27cak",
      "outdoorUnitId": "ou-viessmann-dlcmtah27cak",
      "indoorUnitId": "iu-iu-52238",
      "minHeatingTempC": -15,
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmhbh36dak-iu-52232",
      "slug": "viessmann-dlcmhbh36dak-iu-52232",
      "modelId": "model-viessmann-dlcmhbh36dak",
      "outdoorUnitId": "ou-viessmann-dlcmhbh36dak",
      "indoorUnitId": "iu-iu-52232",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfscah18xak",
      "slug": "viessmann-dlcsrbh18aak-dlfscah18xak",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfscah18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfsoah18xak",
      "slug": "viessmann-dlcsrbh18aak-dlfsoah18xak",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfsoah18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfccah18xak",
      "slug": "viessmann-dlcsrbh18aak-dlfccah18xak",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfccah18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah33aak-d5fshah33xak",
      "slug": "viessmann-d5cshah33aak-d5fshah33xak",
      "modelId": "model-viessmann-d5cshah33aak",
      "outdoorUnitId": "ou-viessmann-d5cshah33aak",
      "indoorUnitId": "iu-d5fshah33xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.6,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcerbh18aak-dlfehbh18xak",
      "slug": "viessmann-dlcerbh18aak-dlfehbh18xak",
      "modelId": "model-viessmann-dlcerbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcerbh18aak",
      "indoorUnitId": "iu-dlfehbh18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh12aak-dlfsdah12xak",
      "slug": "viessmann-dlcsrbh12aak-dlfsdah12xak",
      "modelId": "model-viessmann-dlcsrbh12aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh12aak",
      "indoorUnitId": "iu-dlfsdah12xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah18aak-d5muwaq18xa3",
      "slug": "viessmann-d5cuhah18aak-d5muwaq18xa3",
      "modelId": "model-viessmann-d5cuhah18aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah18aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh24aak-dlfsdah24xak",
      "slug": "viessmann-dlcsrbh24aak-dlfsdah24xak",
      "modelId": "model-viessmann-dlcsrbh24aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh24aak",
      "indoorUnitId": "iu-dlfsdah24xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh24aak-dlfsdah24xhk",
      "slug": "viessmann-dlcsrbh24aak-dlfsdah24xhk",
      "modelId": "model-viessmann-dlcsrbh24aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh24aak",
      "indoorUnitId": "iu-dlfsdah24xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah24aak-d5fsdah24xhk",
      "slug": "viessmann-d5cshah24aak-d5fsdah24xhk",
      "modelId": "model-viessmann-d5cshah24aak",
      "outdoorUnitId": "ou-viessmann-d5cshah24aak",
      "indoorUnitId": "iu-d5fsdah24xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah18aak-d5fuaah18xak",
      "slug": "viessmann-d5cuhah18aak-d5fuaah18xak",
      "modelId": "model-viessmann-d5cuhah18aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah18aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah18aak-d5fuhah24xak",
      "slug": "viessmann-d5cuhah18aak-d5fuhah24xak",
      "modelId": "model-viessmann-d5cuhah18aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah18aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlclrch48aak-dlflfah48xak",
      "slug": "viessmann-dlclrch48aak-dlflfah48xak",
      "modelId": "model-viessmann-dlclrch48aak",
      "outdoorUnitId": "ou-viessmann-dlclrch48aak",
      "indoorUnitId": "iu-dlflfah48xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah24aak-d5fsaah24xbk",
      "slug": "viessmann-d5cshah24aak-d5fsaah24xbk",
      "modelId": "model-viessmann-d5cshah24aak",
      "outdoorUnitId": "ou-viessmann-d5cshah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah18aak-d5fuaah18xak",
      "slug": "viessmann-d5curah18aak-d5fuaah18xak",
      "modelId": "model-viessmann-d5curah18aak",
      "outdoorUnitId": "ou-viessmann-d5curah18aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah24aak-d5fuhah24xak",
      "slug": "viessmann-d5cuhah24aak-d5fuhah24xak",
      "modelId": "model-viessmann-d5cuhah24aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah48aak-d5fcfah48xak",
      "slug": "viessmann-d5clhah48aak-d5fcfah48xak",
      "modelId": "model-viessmann-d5clhah48aak",
      "outdoorUnitId": "ou-viessmann-d5clhah48aak",
      "indoorUnitId": "iu-d5fcfah48xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.7,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmtah48eak-iu-52239",
      "slug": "viessmann-dlcmtah48eak-iu-52239",
      "modelId": "model-viessmann-dlcmtah48eak",
      "outdoorUnitId": "ou-viessmann-dlcmtah48eak",
      "indoorUnitId": "iu-iu-52239",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.7,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah30aak-d5muwaq30xa3",
      "slug": "viessmann-d5curah30aak-d5muwaq30xa3",
      "modelId": "model-viessmann-d5curah30aak",
      "outdoorUnitId": "ou-viessmann-d5curah30aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah18aak-d5muwaq18xa3",
      "slug": "viessmann-d5curah18aak-d5muwaq18xa3",
      "modelId": "model-viessmann-d5curah18aak",
      "outdoorUnitId": "ou-viessmann-d5curah18aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcvrah09aak-dlfvhah09xak",
      "slug": "viessmann-dlcvrah09aak-dlfvhah09xak",
      "modelId": "model-viessmann-dlcvrah09aak",
      "outdoorUnitId": "ou-viessmann-dlcvrah09aak",
      "indoorUnitId": "iu-dlfvhah09xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah18aak-d5fsdah18xhk",
      "slug": "viessmann-d5cshah18aak-d5fsdah18xhk",
      "modelId": "model-viessmann-d5cshah18aak",
      "outdoorUnitId": "ou-viessmann-d5cshah18aak",
      "indoorUnitId": "iu-d5fsdah18xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh24aak-dlfsabh24xbk",
      "slug": "viessmann-dlcsrbh24aak-dlfsabh24xbk",
      "modelId": "model-viessmann-dlcsrbh24aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh24aak",
      "indoorUnitId": "iu-dlfsabh24xbk",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah24aak-d5fuaah24xak",
      "slug": "viessmann-d5cuhah24aak-d5fuaah24xak",
      "modelId": "model-viessmann-d5cuhah24aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah18aak-d5fsaah18xbk",
      "slug": "viessmann-d5cshah18aak-d5fsaah18xbk",
      "modelId": "model-viessmann-d5cshah18aak",
      "outdoorUnitId": "ou-viessmann-d5cshah18aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah24aak-d5fuaah24xak",
      "slug": "viessmann-d5curah24aak-d5fuaah24xak",
      "modelId": "model-viessmann-d5curah24aak",
      "outdoorUnitId": "ou-viessmann-d5curah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah48aak-d5flcah48xak",
      "slug": "viessmann-d5clhah48aak-d5flcah48xak",
      "modelId": "model-viessmann-d5clhah48aak",
      "outdoorUnitId": "ou-viessmann-d5clhah48aak",
      "indoorUnitId": "iu-d5flcah48xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah58aak-d5fcfah58xak",
      "slug": "viessmann-d5clhah58aak-d5fcfah58xak",
      "modelId": "model-viessmann-d5clhah58aak",
      "outdoorUnitId": "ou-viessmann-d5clhah58aak",
      "indoorUnitId": "iu-d5fcfah58xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.1,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfsdah24xak",
      "slug": "viessmann-dlcsrbh18aak-dlfsdah24xak",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfsdah24xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah36aak-d5fuhah36xak",
      "slug": "viessmann-d5cuhah36aak-d5fuhah36xak",
      "modelId": "model-viessmann-d5cuhah36aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah36aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfsdah18xhk",
      "slug": "viessmann-dlcsrbh18aak-dlfsdah18xhk",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfsdah18xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah18abk-dlfuaah18xak",
      "slug": "viessmann-dlcurah18abk-dlfuaah18xak",
      "modelId": "model-viessmann-dlcurah18abk",
      "outdoorUnitId": "ou-viessmann-dlcurah18abk",
      "indoorUnitId": "iu-dlfuaah18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah18aak-d5fsdah18xak",
      "slug": "viessmann-d5cshah18aak-d5fsdah18xak",
      "modelId": "model-viessmann-d5cshah18aak",
      "outdoorUnitId": "ou-viessmann-d5cshah18aak",
      "indoorUnitId": "iu-d5fsdah18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcmtah18bak-iu-52237",
      "slug": "viessmann-dlcmtah18bak-iu-52237",
      "modelId": "model-viessmann-dlcmtah18bak",
      "outdoorUnitId": "ou-viessmann-dlcmtah18bak",
      "indoorUnitId": "iu-iu-52237",
      "minHeatingTempC": -25,
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfsdah18xak",
      "slug": "viessmann-dlcsrbh18aak-dlfsdah18xak",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfsdah18xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah36aak-d5fldah36xhk",
      "slug": "viessmann-d5clhah36aak-d5fldah36xhk",
      "modelId": "model-viessmann-d5clhah36aak",
      "outdoorUnitId": "ou-viessmann-d5clhah36aak",
      "indoorUnitId": "iu-d5fldah36xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcsrbh18aak-dlfsabh18xbk",
      "slug": "viessmann-dlcsrbh18aak-dlfsabh18xbk",
      "modelId": "model-viessmann-dlcsrbh18aak",
      "outdoorUnitId": "ou-viessmann-dlcsrbh18aak",
      "indoorUnitId": "iu-dlfsabh18xbk",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah30aak-d5muwaq30xa3",
      "slug": "viessmann-d5cuhah30aak-d5muwaq30xa3",
      "modelId": "model-viessmann-d5cuhah30aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah30aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah24aak-d5muwaq24xa3",
      "slug": "viessmann-d5cuhah24aak-d5muwaq24xa3",
      "modelId": "model-viessmann-d5cuhah24aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah24aakksaic0701230-fma5x24al",
      "slug": "viessmann-d5cuhah24aakksaic0701230-fma5x24al",
      "modelId": "model-viessmann-d5cuhah24aakksaic0701230",
      "outdoorUnitId": "ou-viessmann-d5cuhah24aakksaic0701230",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah48aak-d5fuhah60xak",
      "slug": "viessmann-d5cuhah48aak-d5fuhah60xak",
      "modelId": "model-viessmann-d5cuhah48aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah48aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah60aak-d5fuhah60xak",
      "slug": "viessmann-d5cuhah60aak-d5fuhah60xak",
      "modelId": "model-viessmann-d5cuhah60aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah60aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah24abk-dlfuaah24xak",
      "slug": "viessmann-dlcurah24abk-dlfuaah24xak",
      "modelId": "model-viessmann-dlcurah24abk",
      "outdoorUnitId": "ou-viessmann-dlcurah24abk",
      "indoorUnitId": "iu-dlfuaah24xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah24aak-d5muwaq24xa3",
      "slug": "viessmann-d5curah24aak-d5muwaq24xa3",
      "modelId": "model-viessmann-d5curah24aak",
      "outdoorUnitId": "ou-viessmann-d5curah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah36aak-d5fuaah36xak",
      "slug": "viessmann-d5cuhah36aak-d5fuaah36xak",
      "modelId": "model-viessmann-d5cuhah36aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah36aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah36aak-d5flaah36xak",
      "slug": "viessmann-d5clhah36aak-d5flaah36xak",
      "modelId": "model-viessmann-d5clhah36aak",
      "outdoorUnitId": "ou-viessmann-d5clhah36aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah30aak-d5fuhah36xak",
      "slug": "viessmann-d5cuhah30aak-d5fuhah36xak",
      "modelId": "model-viessmann-d5cuhah30aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah30aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah48aak-d5flaah48xak",
      "slug": "viessmann-d5clhah48aak-d5flaah48xak",
      "modelId": "model-viessmann-d5clhah48aak",
      "outdoorUnitId": "ou-viessmann-d5clhah48aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah24aak-dlfuaah24xak",
      "slug": "viessmann-dlcurah24aak-dlfuaah24xak",
      "modelId": "model-viessmann-dlcurah24aak",
      "outdoorUnitId": "ou-viessmann-dlcurah24aak",
      "indoorUnitId": "iu-dlfuaah24xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5csrah30aak-d5fsaah30xbk",
      "slug": "viessmann-d5csrah30aak-d5fsaah30xbk",
      "modelId": "model-viessmann-d5csrah30aak",
      "outdoorUnitId": "ou-viessmann-d5csrah30aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah30aak-d5fuaah30xak",
      "slug": "viessmann-d5cuhah30aak-d5fuaah30xak",
      "modelId": "model-viessmann-d5cuhah30aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah30aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah36aak-d5muwaq36xa3",
      "slug": "viessmann-d5cuhah36aak-d5muwaq36xa3",
      "modelId": "model-viessmann-d5cuhah36aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah36aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah48aak-d5fldah48xhk",
      "slug": "viessmann-d5clhah48aak-d5fldah48xhk",
      "modelId": "model-viessmann-d5clhah48aak",
      "outdoorUnitId": "ou-viessmann-d5clhah48aak",
      "indoorUnitId": "iu-d5fldah48xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cshah33aak-d5fsaah36xbk",
      "slug": "viessmann-d5cshah33aak-d5fsaah36xbk",
      "modelId": "model-viessmann-d5cshah33aak",
      "outdoorUnitId": "ou-viessmann-d5cshah33aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah36aak-d5muwaq36xa3",
      "slug": "viessmann-d5curah36aak-d5muwaq36xa3",
      "modelId": "model-viessmann-d5curah36aak",
      "outdoorUnitId": "ou-viessmann-d5curah36aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah18aakksaic0701230-fma5x18al",
      "slug": "viessmann-d5cuhah18aakksaic0701230-fma5x18al",
      "modelId": "model-viessmann-d5cuhah18aakksaic0701230",
      "outdoorUnitId": "ou-viessmann-d5cuhah18aakksaic0701230",
      "indoorUnitId": "iu-fma5x18al",
      "minHeatingTempC": -25,
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah48aak-d5fuaah48xak",
      "slug": "viessmann-d5cuhah48aak-d5fuaah48xak",
      "modelId": "model-viessmann-d5cuhah48aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah48aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah36aakksaic0701230-fma5x36al",
      "slug": "viessmann-d5cuhah36aakksaic0701230-fma5x36al",
      "modelId": "model-viessmann-d5cuhah36aakksaic0701230",
      "outdoorUnitId": "ou-viessmann-d5cuhah36aakksaic0701230",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah18aakksaic0701230-fma5x24al",
      "slug": "viessmann-d5cuhah18aakksaic0701230-fma5x24al",
      "modelId": "model-viessmann-d5cuhah18aakksaic0701230",
      "outdoorUnitId": "ou-viessmann-d5cuhah18aakksaic0701230",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -25,
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah24abk-dlfulah24xbx-ci",
      "slug": "viessmann-dlcurah24abk-dlfulah24xbx-ci",
      "modelId": "model-viessmann-dlcurah24abk",
      "outdoorUnitId": "ou-viessmann-dlcurah24abk",
      "indoorUnitId": "iu-dlfulah24xbx-ci",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah30aakksaic0701230-fma5x36al",
      "slug": "viessmann-d5cuhah30aakksaic0701230-fma5x36al",
      "modelId": "model-viessmann-d5cuhah30aakksaic0701230",
      "outdoorUnitId": "ou-viessmann-d5cuhah30aakksaic0701230",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah30aakksaic0701230-fma5x30al",
      "slug": "viessmann-d5cuhah30aakksaic0701230-fma5x30al",
      "modelId": "model-viessmann-d5cuhah30aakksaic0701230",
      "outdoorUnitId": "ou-viessmann-d5cuhah30aakksaic0701230",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah30abk-dlfuaah30xak",
      "slug": "viessmann-dlcurah30abk-dlfuaah30xak",
      "modelId": "model-viessmann-dlcurah30abk",
      "outdoorUnitId": "ou-viessmann-dlcurah30abk",
      "indoorUnitId": "iu-dlfuaah30xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah36aak-d5fuaah36xak",
      "slug": "viessmann-d5curah36aak-d5fuaah36xak",
      "modelId": "model-viessmann-d5curah36aak",
      "outdoorUnitId": "ou-viessmann-d5curah36aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah18abk-dlfulah24xbx-ci",
      "slug": "viessmann-dlcurah18abk-dlfulah24xbx-ci",
      "modelId": "model-viessmann-dlcurah18abk",
      "outdoorUnitId": "ou-viessmann-dlcurah18abk",
      "indoorUnitId": "iu-dlfulah24xbx-ci",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah24abk-dlfulah24xax-ci",
      "slug": "viessmann-dlcurah24abk-dlfulah24xax-ci",
      "modelId": "model-viessmann-dlcurah24abk",
      "outdoorUnitId": "ou-viessmann-dlcurah24abk",
      "indoorUnitId": "iu-dlfulah24xax-ci",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah18aak-d5fulah24xax",
      "slug": "viessmann-d5cuhah18aak-d5fulah24xax",
      "modelId": "model-viessmann-d5cuhah18aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah18aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah18aak-d5fulah24xbx",
      "slug": "viessmann-d5cuhah18aak-d5fulah24xbx",
      "modelId": "model-viessmann-d5cuhah18aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah18aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah36abk-dlfuaah36xak",
      "slug": "viessmann-dlcurah36abk-dlfuaah36xak",
      "modelId": "model-viessmann-dlcurah36abk",
      "outdoorUnitId": "ou-viessmann-dlcurah36abk",
      "indoorUnitId": "iu-dlfuaah36xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah24aakksaic0701230-fma5x24al",
      "slug": "viessmann-d5curah24aakksaic0701230-fma5x24al",
      "modelId": "model-viessmann-d5curah24aakksaic0701230",
      "outdoorUnitId": "ou-viessmann-d5curah24aakksaic0701230",
      "indoorUnitId": "iu-fma5x24al",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah24aak-d5fulah24xbx",
      "slug": "viessmann-d5cuhah24aak-d5fulah24xbx",
      "modelId": "model-viessmann-d5cuhah24aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah30aak-d5fulah36xbx",
      "slug": "viessmann-d5cuhah30aak-d5fulah36xbx",
      "modelId": "model-viessmann-d5cuhah30aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah30aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah24aak-d5fulah24xax",
      "slug": "viessmann-d5cuhah24aak-d5fulah24xax",
      "modelId": "model-viessmann-d5cuhah24aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah60aak-d5fulah60xmx",
      "slug": "viessmann-d5cuhah60aak-d5fulah60xmx",
      "modelId": "model-viessmann-d5cuhah60aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah60aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah24aak-d5fulah24xbx",
      "slug": "viessmann-d5curah24aak-d5fulah24xbx",
      "modelId": "model-viessmann-d5curah24aak",
      "outdoorUnitId": "ou-viessmann-d5curah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah24aak-d5fulah24xax",
      "slug": "viessmann-d5curah24aak-d5fulah24xax",
      "modelId": "model-viessmann-d5curah24aak",
      "outdoorUnitId": "ou-viessmann-d5curah24aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah30aak-d5fulah36xcx",
      "slug": "viessmann-d5cuhah30aak-d5fulah36xcx",
      "modelId": "model-viessmann-d5cuhah30aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah30aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah60aak-d5fuaah60xak",
      "slug": "viessmann-d5cuhah60aak-d5fuaah60xak",
      "modelId": "model-viessmann-d5cuhah60aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah60aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah48aak-d5fuaah48xak",
      "slug": "viessmann-d5curah48aak-d5fuaah48xak",
      "modelId": "model-viessmann-d5curah48aak",
      "outdoorUnitId": "ou-viessmann-d5curah48aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah58aak-d5fldah58xhk",
      "slug": "viessmann-d5clhah58aak-d5fldah58xhk",
      "modelId": "model-viessmann-d5clhah58aak",
      "outdoorUnitId": "ou-viessmann-d5clhah58aak",
      "indoorUnitId": "iu-d5fldah58xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah36aak-d5fulah36xbx",
      "slug": "viessmann-d5cuhah36aak-d5fulah36xbx",
      "modelId": "model-viessmann-d5cuhah36aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah36aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah36aak-d5fulah36xcx",
      "slug": "viessmann-d5cuhah36aak-d5fulah36xcx",
      "modelId": "model-viessmann-d5cuhah36aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah36aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah48abk-dlfuaah48xak",
      "slug": "viessmann-dlcurah48abk-dlfuaah48xak",
      "modelId": "model-viessmann-dlcurah48abk",
      "outdoorUnitId": "ou-viessmann-dlcurah48abk",
      "indoorUnitId": "iu-dlfuaah48xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah30abk-dlfulah36xcx-ci",
      "slug": "viessmann-dlcurah30abk-dlfulah36xcx-ci",
      "modelId": "model-viessmann-dlcurah30abk",
      "outdoorUnitId": "ou-viessmann-dlcurah30abk",
      "indoorUnitId": "iu-dlfulah36xcx-ci",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah36abk-dlfulah36xbx-ci",
      "slug": "viessmann-dlcurah36abk-dlfulah36xbx-ci",
      "modelId": "model-viessmann-dlcurah36abk",
      "outdoorUnitId": "ou-viessmann-dlcurah36abk",
      "indoorUnitId": "iu-dlfulah36xbx-ci",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5clhah58aak-d5flaah60xak",
      "slug": "viessmann-d5clhah58aak-d5flaah60xak",
      "modelId": "model-viessmann-d5clhah58aak",
      "outdoorUnitId": "ou-viessmann-d5clhah58aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah30aak-d5fulah36xax",
      "slug": "viessmann-d5cuhah30aak-d5fulah36xax",
      "modelId": "model-viessmann-d5cuhah30aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah30aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah60abk-dlfuaah60xak",
      "slug": "viessmann-dlcurah60abk-dlfuaah60xak",
      "modelId": "model-viessmann-dlcurah60abk",
      "outdoorUnitId": "ou-viessmann-dlcurah60abk",
      "indoorUnitId": "iu-dlfuaah60xak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah60aak-d5fulah60xdx",
      "slug": "viessmann-d5cuhah60aak-d5fulah60xdx",
      "modelId": "model-viessmann-d5cuhah60aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah60aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5cuhah48aak-d5fulah60xmx",
      "slug": "viessmann-d5cuhah48aak-d5fulah60xmx",
      "modelId": "model-viessmann-d5cuhah48aak",
      "outdoorUnitId": "ou-viessmann-d5cuhah48aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah48aak-d5fulah60xmx",
      "slug": "viessmann-d5curah48aak-d5fulah60xmx",
      "modelId": "model-viessmann-d5curah48aak",
      "outdoorUnitId": "ou-viessmann-d5curah48aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-d5curah60aak-d5fuaah60xak",
      "slug": "viessmann-d5curah60aak-d5fuaah60xak",
      "modelId": "model-viessmann-d5curah60aak",
      "outdoorUnitId": "ou-viessmann-d5curah60aak",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlcurah36abk-dlfulah36xcx-ci",
      "slug": "viessmann-dlcurah36abk-dlfulah36xcx-ci",
      "modelId": "model-viessmann-dlcurah36abk",
      "outdoorUnitId": "ou-viessmann-dlcurah36abk",
      "indoorUnitId": "iu-dlfulah36xcx-ci",
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
          "sourceId": "src-viessmann-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-viessmann-dlclrch48aak-dlfldah48xhk",
      "slug": "viessmann-dlclrch48aak-dlfldah48xhk",
      "modelId": "model-viessmann-dlclrch48aak",
      "outdoorUnitId": "ou-viessmann-dlclrch48aak",
      "indoorUnitId": "iu-dlfldah48xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-viessmann-epa",
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
