import type { BrandDataset } from "../../types";

export const brand_kenmoreDataset: BrandDataset = {
  "brand": {
    "id": "brand-kenmore",
    "slug": "kenmore",
    "name": "Kenmore",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Kenmore",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-kenmore-epa",
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
      "id": "series-kenmore-d5f-series",
      "slug": "kenmore-d5f-series",
      "name": "D5F Series",
      "brandId": "brand-kenmore",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série D5F Series de Kenmore",
      "imageUrl": "/images/series/kenmore-kenmore-d5f-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kenmore-dlc-series",
      "slug": "kenmore-dlc-series",
      "name": "DLC-series",
      "brandId": "brand-kenmore",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DLC-series de Kenmore",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kenmore-dlcp-series",
      "slug": "kenmore-dlcp-series",
      "name": "DLCP series",
      "brandId": "brand-kenmore",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DLCP series de Kenmore",
      "imageUrl": "/images/series/kenmore-kenmore-dlcp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kenmore-d5c-series",
      "slug": "kenmore-d5c-series",
      "name": "D5C Series",
      "brandId": "brand-kenmore",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série D5C Series de Kenmore",
      "imageUrl": "/images/series/kenmore-kenmore-d5c-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kenmore-deluxe-23-vs-heat-pump",
      "slug": "kenmore-deluxe-23-vs-heat-pump",
      "name": "Deluxe 23 VS Heat Pump",
      "brandId": "brand-kenmore",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Deluxe 23 VS Heat Pump de Kenmore",
      "imageUrl": "/images/series/kenmore-kenmore-deluxe-23-vs-heat-pump.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kenmore-lx-series",
      "slug": "kenmore-lx-series",
      "name": "LX SERIES",
      "brandId": "brand-kenmore",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LX SERIES de Kenmore",
      "imageUrl": "/images/series/kenmore-kenmore-lx-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kenmore-deluxe-20-vs-heat-pump",
      "slug": "kenmore-deluxe-20-vs-heat-pump",
      "name": "Deluxe 20 VS Heat Pump",
      "brandId": "brand-kenmore",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Deluxe 20 VS Heat Pump de Kenmore",
      "imageUrl": "/images/series/kenmore-kenmore-deluxe-20-vs-heat-pump.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-kenmore-d5cprah06aak",
      "slug": "kenmore-d5cprah06aak",
      "name": "Kenmore D5CPRAH06AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CPRAH06AAK",
      "normalizedModelNumber": "d5cprah06aak",
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
      "id": "model-kenmore-d5cprah09aak",
      "slug": "kenmore-d5cprah09aak",
      "name": "Kenmore D5CPRAH09AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CPRAH09AAK",
      "normalizedModelNumber": "d5cprah09aak",
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
      "id": "model-kenmore-dlcsrbh09aak",
      "slug": "kenmore-dlcsrbh09aak",
      "name": "Kenmore DLCSRBH09AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cprah12aak",
      "slug": "kenmore-d5cprah12aak",
      "name": "Kenmore D5CPRAH12AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CPRAH12AAK",
      "normalizedModelNumber": "d5cprah12aak",
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
      "id": "model-kenmore-d5cshah09aak",
      "slug": "kenmore-d5cshah09aak",
      "name": "Kenmore D5CSHAH09AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcprbh09aak",
      "slug": "kenmore-dlcprbh09aak",
      "name": "Kenmore DLCPRBH09AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcsrbh06aak",
      "slug": "kenmore-dlcsrbh06aak",
      "name": "Kenmore DLCSRBH06AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcprbh18aak",
      "slug": "kenmore-dlcprbh18aak",
      "name": "Kenmore DLCPRBH18AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5csrah09aak",
      "slug": "kenmore-d5csrah09aak",
      "name": "Kenmore D5CSRAH09AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CSRAH09AAK",
      "normalizedModelNumber": "d5csrah09aak",
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
      "id": "model-kenmore-d5cshah06aak",
      "slug": "kenmore-d5cshah06aak",
      "name": "Kenmore D5CSHAH06AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5csrah12aak",
      "slug": "kenmore-d5csrah12aak",
      "name": "Kenmore D5CSRAH12AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CSRAH12AAK",
      "normalizedModelNumber": "d5csrah12aak",
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
      "id": "model-kenmore-d5cshah12aak",
      "slug": "kenmore-d5cshah12aak",
      "name": "Kenmore D5CSHAH12AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcsrbh12aak",
      "slug": "kenmore-dlcsrbh12aak",
      "name": "Kenmore DLCSRBH12AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcprbh12aak",
      "slug": "kenmore-dlcprbh12aak",
      "name": "Kenmore DLCPRBH12AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cmrah18cak",
      "slug": "kenmore-d5cmrah18cak",
      "name": "Kenmore D5CMRAH18CAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CMRAH18CAK",
      "normalizedModelNumber": "d5cmrah18cak",
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
      "id": "model-kenmore-d5cmrah24dak",
      "slug": "kenmore-d5cmrah24dak",
      "name": "Kenmore D5CMRAH24DAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CMRAH24DAK",
      "normalizedModelNumber": "d5cmrah24dak",
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
      "id": "model-kenmore-d5cmhah18cak",
      "slug": "kenmore-d5cmhah18cak",
      "name": "Kenmore D5CMHAH18CAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cmrah30eak",
      "slug": "kenmore-d5cmrah30eak",
      "name": "Kenmore D5CMRAH30EAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CMRAH30EAK",
      "normalizedModelNumber": "d5cmrah30eak",
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
      "id": "model-kenmore-d5cprah18aa",
      "slug": "kenmore-d5cprah18aa",
      "name": "Kenmore D5CPRAH18AA",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CPRAH18AA",
      "normalizedModelNumber": "d5cprah18aa",
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
      "id": "model-kenmore-d5cmrah36eak",
      "slug": "kenmore-d5cmrah36eak",
      "name": "Kenmore D5CMRAH36EAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CMRAH36EAK",
      "normalizedModelNumber": "d5cmrah36eak",
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
      "id": "model-kenmore-d5cmhah30eak",
      "slug": "kenmore-d5cmhah30eak",
      "name": "Kenmore D5CMHAH30EAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cmhah24dak",
      "slug": "kenmore-d5cmhah24dak",
      "name": "Kenmore D5CMHAH24DAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cmrah48fak",
      "slug": "kenmore-d5cmrah48fak",
      "name": "Kenmore D5CMRAH48FAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CMRAH48FAK",
      "normalizedModelNumber": "d5cmrah48fak",
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
      "id": "model-kenmore-d5csrah18aak",
      "slug": "kenmore-d5csrah18aak",
      "name": "Kenmore D5CSRAH18AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CSRAH18AAK",
      "normalizedModelNumber": "d5csrah18aak",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 16000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kenmore-d5csrah12aaj",
      "slug": "kenmore-d5csrah12aaj",
      "name": "Kenmore D5CSRAH12AAJ",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcsrbh12aaj",
      "slug": "kenmore-dlcsrbh12aaj",
      "name": "Kenmore DLCSRBH12AAJ",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cmhah36eak",
      "slug": "kenmore-d5cmhah36eak",
      "name": "Kenmore D5CMHAH36EAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5csrah24aak",
      "slug": "kenmore-d5csrah24aak",
      "name": "Kenmore D5CSRAH24AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CSRAH24AAK",
      "normalizedModelNumber": "d5csrah24aak",
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
      "id": "model-kenmore-b5h3v48kaaa",
      "slug": "kenmore-b5h3v48kaaa",
      "name": "Kenmore B5H3V48*K*AAA*",
      "seriesId": "series-kenmore-deluxe-23-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "B5H3V48*K*AAA*",
      "normalizedModelNumber": "b5h3v48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46500,
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
      "id": "model-kenmore-b5h3v24kaaa",
      "slug": "kenmore-b5h3v24kaaa",
      "name": "Kenmore B5H3V24*K*AAA*",
      "seriesId": "series-kenmore-deluxe-23-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "B5H3V24*K*AAA*",
      "normalizedModelNumber": "b5h3v24*k*aaa*",
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
      "id": "model-kenmore-cht5h3v48kaaa",
      "slug": "kenmore-cht5h3v48kaaa",
      "name": "Kenmore (C,H,T)5H3V48*K*AAA*",
      "seriesId": "series-kenmore-deluxe-23-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "(C,H,T)5H3V48*K*AAA*",
      "normalizedModelNumber": "(c,h,t)5h3v48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46500,
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
      "id": "model-kenmore-d5cmhah48fak",
      "slug": "kenmore-d5cmhah48fak",
      "name": "Kenmore D5CMHAH48FAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-cht5h3v36kaaa",
      "slug": "kenmore-cht5h3v36kaaa",
      "name": "Kenmore (C,H,T)5H3V36*K*AAA*",
      "seriesId": "series-kenmore-deluxe-23-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "(C,H,T)5H3V36*K*AAA*",
      "normalizedModelNumber": "(c,h,t)5h3v36*k*aaa*",
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
      "id": "model-kenmore-b5h3v36kaaa",
      "slug": "kenmore-b5h3v36kaaa",
      "name": "Kenmore B5H3V36*K*AAA*",
      "seriesId": "series-kenmore-deluxe-23-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "B5H3V36*K*AAA*",
      "normalizedModelNumber": "b5h3v36*k*aaa*",
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
      "id": "model-kenmore-d5cerah30aak",
      "slug": "kenmore-d5cerah30aak",
      "name": "Kenmore D5CERAH30AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CERAH30AAK",
      "normalizedModelNumber": "d5cerah30aak",
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
      "id": "model-kenmore-dlcmhbh30dak",
      "slug": "kenmore-dlcmhbh30dak",
      "name": "Kenmore DLCMHBH30DAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcsrbh24aak",
      "slug": "kenmore-dlcsrbh24aak",
      "name": "Kenmore DLCSRBH24AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcmhbh24cak",
      "slug": "kenmore-dlcmhbh24cak",
      "name": "Kenmore DLCMHBH24CAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cmhah55fak",
      "slug": "kenmore-d5cmhah55fak",
      "name": "Kenmore D5CMHAH55FAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-xh960e2c11",
      "slug": "kenmore-xh960e2c11",
      "name": "Kenmore XH960E2C11",
      "seriesId": "series-kenmore-lx-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcsrbh18aak",
      "slug": "kenmore-dlcsrbh18aak",
      "name": "Kenmore DLCSRBH18AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcerbh09aak",
      "slug": "kenmore-dlcerbh09aak",
      "name": "Kenmore DLCERBH09AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cerah09aak",
      "slug": "kenmore-d5cerah09aak",
      "name": "Kenmore D5CERAH09AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CERAH09AAK",
      "normalizedModelNumber": "d5cerah09aak",
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
      "id": "model-kenmore-dlcerbh09aaj",
      "slug": "kenmore-dlcerbh09aaj",
      "name": "Kenmore DLCERBH09AAJ",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cshah18aak",
      "slug": "kenmore-d5cshah18aak",
      "name": "Kenmore D5CSHAH18AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cerah09aaj",
      "slug": "kenmore-d5cerah09aaj",
      "name": "Kenmore D5CERAH09AAJ",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CERAH09AAJ",
      "normalizedModelNumber": "d5cerah09aaj",
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
      "id": "model-kenmore-d5clhah36aak",
      "slug": "kenmore-d5clhah36aak",
      "name": "Kenmore D5CLHAH36AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cshah24aak",
      "slug": "kenmore-d5cshah24aak",
      "name": "Kenmore D5CSHAH24AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcmhbh48eak",
      "slug": "kenmore-dlcmhbh48eak",
      "name": "Kenmore DLCMHBH48EAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcmrbh48eak",
      "slug": "kenmore-dlcmrbh48eak",
      "name": "Kenmore DLCMRBH48EAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcsrbh30aak",
      "slug": "kenmore-dlcsrbh30aak",
      "name": "Kenmore DLCSRBH30AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcsrbh30aak11",
      "slug": "kenmore-dlcsrbh30aak11",
      "name": "Kenmore DLCSRBH30AAK11",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcmrbh18bak",
      "slug": "kenmore-dlcmrbh18bak",
      "name": "Kenmore DLCMRBH18BAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcerbh30aak",
      "slug": "kenmore-dlcerbh30aak",
      "name": "Kenmore DLCERBH30AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5csrah30aak",
      "slug": "kenmore-d5csrah30aak",
      "name": "Kenmore D5CSRAH30AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cerah18aak",
      "slug": "kenmore-d5cerah18aak",
      "name": "Kenmore D5CERAH18AAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CERAH18AAK",
      "normalizedModelNumber": "d5cerah18aak",
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
      "id": "model-kenmore-dlcmrbh36dak",
      "slug": "kenmore-dlcmrbh36dak",
      "name": "Kenmore DLCMRBH36DAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcmtah27cak",
      "slug": "kenmore-dlcmtah27cak",
      "name": "Kenmore DLCMTAH27CAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-dlcmhbh36dak",
      "slug": "kenmore-dlcmhbh36dak",
      "name": "Kenmore DLCMHBH36DAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-b5h3v60kaaa",
      "slug": "kenmore-b5h3v60kaaa",
      "name": "Kenmore B5H3V60*K*AAA*",
      "seriesId": "series-kenmore-deluxe-23-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "B5H3V60*K*AAA*",
      "normalizedModelNumber": "b5h3v60*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 58000,
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
      "id": "model-kenmore-d5clrah36aak",
      "slug": "kenmore-d5clrah36aak",
      "name": "Kenmore D5CLRAH36AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CLRAH36AAK",
      "normalizedModelNumber": "d5clrah36aak",
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
      "id": "model-kenmore-cht5h3v60kaaa",
      "slug": "kenmore-cht5h3v60kaaa",
      "name": "Kenmore (C,H,T)5H3V60*K*AAA*",
      "seriesId": "series-kenmore-deluxe-23-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "(C,H,T)5H3V60*K*AAA*",
      "normalizedModelNumber": "(c,h,t)5h3v60*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 58000,
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
      "id": "model-kenmore-d5clrah48aak",
      "slug": "kenmore-d5clrah48aak",
      "name": "Kenmore D5CLRAH48AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CLRAH48AAK",
      "normalizedModelNumber": "d5clrah48aak",
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
      "id": "model-kenmore-d5cshah33aak",
      "slug": "kenmore-d5cshah33aak",
      "name": "Kenmore D5CSHAH33AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-cht5h0v48kaaa",
      "slug": "kenmore-cht5h0v48kaaa",
      "name": "Kenmore (C,H,T)5H0V48*K*AAA*",
      "seriesId": "series-kenmore-deluxe-20-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "(C,H,T)5H0V48*K*AAA*",
      "normalizedModelNumber": "(c,h,t)5h0v48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 49000,
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
      "id": "model-kenmore-dlcerbh18aak",
      "slug": "kenmore-dlcerbh18aak",
      "name": "Kenmore DLCERBH18AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-b5h0v48kaaa",
      "slug": "kenmore-b5h0v48kaaa",
      "name": "Kenmore B5H0V48*K*AAA*",
      "seriesId": "series-kenmore-deluxe-20-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "B5H0V48*K*AAA*",
      "normalizedModelNumber": "b5h0v48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 49000,
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
      "id": "model-kenmore-b5h0v36kaaa",
      "slug": "kenmore-b5h0v36kaaa",
      "name": "Kenmore B5H0V36*K*AAA*",
      "seriesId": "series-kenmore-deluxe-20-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "B5H0V36*K*AAA*",
      "normalizedModelNumber": "b5h0v36*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35400,
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
      "id": "model-kenmore-cht5h0v36kaaa",
      "slug": "kenmore-cht5h0v36kaaa",
      "name": "Kenmore (C,H,T)5H0V36*K*AAA*",
      "seriesId": "series-kenmore-deluxe-20-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "(C,H,T)5H0V36*K*AAA*",
      "normalizedModelNumber": "(c,h,t)5h0v36*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35400,
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
      "id": "model-kenmore-d5cuhah18aak",
      "slug": "kenmore-d5cuhah18aak",
      "name": "Kenmore D5CUHAH18AAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-hh836e2s11",
      "slug": "kenmore-hh836e2s11",
      "name": "Kenmore HH836E2S11*",
      "seriesId": "series-kenmore-lx-series",
      "brandId": "brand-kenmore",
      "modelNumber": "HH836E2S11*",
      "normalizedModelNumber": "hh836e2s11*",
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
      "id": "model-kenmore-hh824e2s11",
      "slug": "kenmore-hh824e2s11",
      "name": "Kenmore HH824E2S11*",
      "seriesId": "series-kenmore-lx-series",
      "brandId": "brand-kenmore",
      "modelNumber": "HH824E2S11*",
      "normalizedModelNumber": "hh824e2s11*",
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
      "id": "model-kenmore-xh936e2c11",
      "slug": "kenmore-xh936e2c11",
      "name": "Kenmore XH936E2C11",
      "seriesId": "series-kenmore-lx-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-b5h0v60kaaa",
      "slug": "kenmore-b5h0v60kaaa",
      "name": "Kenmore B5H0V60*K*AAA*",
      "seriesId": "series-kenmore-deluxe-20-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "B5H0V60*K*AAA*",
      "normalizedModelNumber": "b5h0v60*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 56500,
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
      "id": "model-kenmore-d5cvrah09aak",
      "slug": "kenmore-d5cvrah09aak",
      "name": "Kenmore D5CVRAH09AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CVRAH09AAK",
      "normalizedModelNumber": "d5cvrah09aak",
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
      "id": "model-kenmore-cht5h0v60kaaa",
      "slug": "kenmore-cht5h0v60kaaa",
      "name": "Kenmore (C,H,T)5H0V60*K*AAA*",
      "seriesId": "series-kenmore-deluxe-20-vs-heat-pump",
      "brandId": "brand-kenmore",
      "modelNumber": "(C,H,T)5H0V60*K*AAA*",
      "normalizedModelNumber": "(c,h,t)5h0v60*k*aaa*",
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
      "id": "model-kenmore-hh860e2s11",
      "slug": "kenmore-hh860e2s11",
      "name": "Kenmore HH860E2S11*",
      "seriesId": "series-kenmore-lx-series",
      "brandId": "brand-kenmore",
      "modelNumber": "HH860E2S11*",
      "normalizedModelNumber": "hh860e2s11*",
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
      "id": "model-kenmore-dlclrch48aak",
      "slug": "kenmore-dlclrch48aak",
      "name": "Kenmore DLCLRCH48AAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cmtah36eak",
      "slug": "kenmore-d5cmtah36eak",
      "name": "Kenmore D5CMTAH36EAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CMTAH36EAK",
      "normalizedModelNumber": "d5cmtah36eak",
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
      "id": "model-kenmore-d5curah18aak",
      "slug": "kenmore-d5curah18aak",
      "name": "Kenmore D5CURAH18AAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5clhah48aak",
      "slug": "kenmore-d5clhah48aak",
      "name": "Kenmore D5CLHAH48AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cmtah48fak",
      "slug": "kenmore-d5cmtah48fak",
      "name": "Kenmore D5CMTAH48FAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
      "modelNumber": "D5CMTAH48FAK",
      "normalizedModelNumber": "d5cmtah48fak",
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
      "id": "model-kenmore-dlcmtah48eak",
      "slug": "kenmore-dlcmtah48eak",
      "name": "Kenmore DLCMTAH48EAK",
      "seriesId": "series-kenmore-dlc-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5cuhah24aak",
      "slug": "kenmore-d5cuhah24aak",
      "name": "Kenmore D5CUHAH24AAK",
      "seriesId": "series-kenmore-d5f-series",
      "brandId": "brand-kenmore",
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
      "id": "model-kenmore-d5curah30aak",
      "slug": "kenmore-d5curah30aak",
      "name": "Kenmore D5CURAH30AAK",
      "seriesId": "series-kenmore-d5c-series",
      "brandId": "brand-kenmore",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-kenmore-d5cprah06aak",
      "modelNumber": "D5CPRAH06AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cprah09aak",
      "modelNumber": "D5CPRAH09AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcsrbh09aak",
      "modelNumber": "DLCSRBH09AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5cprah12aak",
      "modelNumber": "D5CPRAH12AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cshah09aak",
      "modelNumber": "D5CSHAH09AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcprbh09aak",
      "modelNumber": "DLCPRBH09AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcsrbh06aak",
      "modelNumber": "DLCSRBH06AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcprbh18aak",
      "modelNumber": "DLCPRBH18AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5csrah09aak",
      "modelNumber": "D5CSRAH09AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cshah06aak",
      "modelNumber": "D5CSHAH06AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5csrah12aak",
      "modelNumber": "D5CSRAH12AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cshah12aak",
      "modelNumber": "D5CSHAH12AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcsrbh12aak",
      "modelNumber": "DLCSRBH12AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcprbh12aak",
      "modelNumber": "DLCPRBH12AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5cmrah18cak",
      "modelNumber": "D5CMRAH18CAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmrah24dak",
      "modelNumber": "D5CMRAH24DAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmhah18cak",
      "modelNumber": "D5CMHAH18CAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmrah30eak",
      "modelNumber": "D5CMRAH30EAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cprah18aa",
      "modelNumber": "D5CPRAH18AA",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmrah36eak",
      "modelNumber": "D5CMRAH36EAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmhah30eak",
      "modelNumber": "D5CMHAH30EAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmhah24dak",
      "modelNumber": "D5CMHAH24DAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmrah48fak",
      "modelNumber": "D5CMRAH48FAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5csrah18aak",
      "modelNumber": "D5CSRAH18AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5csrah12aaj",
      "modelNumber": "D5CSRAH12AAJ",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcsrbh12aaj",
      "modelNumber": "DLCSRBH12AAJ",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5cmhah36eak",
      "modelNumber": "D5CMHAH36EAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5csrah24aak",
      "modelNumber": "D5CSRAH24AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-b5h3v48kaaa",
      "modelNumber": "B5H3V48*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-b5h3v24kaaa",
      "modelNumber": "B5H3V24*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-cht5h3v48kaaa",
      "modelNumber": "(C,H,T)5H3V48*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmhah48fak",
      "modelNumber": "D5CMHAH48FAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-cht5h3v36kaaa",
      "modelNumber": "(C,H,T)5H3V36*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-b5h3v36kaaa",
      "modelNumber": "B5H3V36*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cerah30aak",
      "modelNumber": "D5CERAH30AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcmhbh30dak",
      "modelNumber": "DLCMHBH30DAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcsrbh24aak",
      "modelNumber": "DLCSRBH24AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcmhbh24cak",
      "modelNumber": "DLCMHBH24CAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5cmhah55fak",
      "modelNumber": "D5CMHAH55FAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-xh960e2c11",
      "modelNumber": "XH960E2C11",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcsrbh18aak",
      "modelNumber": "DLCSRBH18AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcerbh09aak",
      "modelNumber": "DLCERBH09AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5cerah09aak",
      "modelNumber": "D5CERAH09AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcerbh09aaj",
      "modelNumber": "DLCERBH09AAJ",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5cshah18aak",
      "modelNumber": "D5CSHAH18AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cerah09aaj",
      "modelNumber": "D5CERAH09AAJ",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5clhah36aak",
      "modelNumber": "D5CLHAH36AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cshah24aak",
      "modelNumber": "D5CSHAH24AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcmhbh48eak",
      "modelNumber": "DLCMHBH48EAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcmrbh48eak",
      "modelNumber": "DLCMRBH48EAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcsrbh30aak",
      "modelNumber": "DLCSRBH30AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcsrbh30aak11",
      "modelNumber": "DLCSRBH30AAK11",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcmrbh18bak",
      "modelNumber": "DLCMRBH18BAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcerbh30aak",
      "modelNumber": "DLCERBH30AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5csrah30aak",
      "modelNumber": "D5CSRAH30AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cerah18aak",
      "modelNumber": "D5CERAH18AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcmrbh36dak",
      "modelNumber": "DLCMRBH36DAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcmtah27cak",
      "modelNumber": "DLCMTAH27CAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-dlcmhbh36dak",
      "modelNumber": "DLCMHBH36DAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-b5h3v60kaaa",
      "modelNumber": "B5H3V60*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5clrah36aak",
      "modelNumber": "D5CLRAH36AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-cht5h3v60kaaa",
      "modelNumber": "(C,H,T)5H3V60*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5clrah48aak",
      "modelNumber": "D5CLRAH48AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cshah33aak",
      "modelNumber": "D5CSHAH33AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-cht5h0v48kaaa",
      "modelNumber": "(C,H,T)5H0V48*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcerbh18aak",
      "modelNumber": "DLCERBH18AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-b5h0v48kaaa",
      "modelNumber": "B5H0V48*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-b5h0v36kaaa",
      "modelNumber": "B5H0V36*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-cht5h0v36kaaa",
      "modelNumber": "(C,H,T)5H0V36*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cuhah18aak",
      "modelNumber": "D5CUHAH18AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-hh836e2s11",
      "modelNumber": "HH836E2S11*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-hh824e2s11",
      "modelNumber": "HH824E2S11*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-xh936e2c11",
      "modelNumber": "XH936E2C11",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-b5h0v60kaaa",
      "modelNumber": "B5H0V60*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cvrah09aak",
      "modelNumber": "D5CVRAH09AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-cht5h0v60kaaa",
      "modelNumber": "(C,H,T)5H0V60*K*AAA*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-hh860e2s11",
      "modelNumber": "HH860E2S11*",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlclrch48aak",
      "modelNumber": "DLCLRCH48AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5cmtah36eak",
      "modelNumber": "D5CMTAH36EAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5curah18aak",
      "modelNumber": "D5CURAH18AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5clhah48aak",
      "modelNumber": "D5CLHAH48AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5cmtah48fak",
      "modelNumber": "D5CMTAH48FAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-dlcmtah48eak",
      "modelNumber": "DLCMTAH48EAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kenmore-d5cuhah24aak",
      "modelNumber": "D5CUHAH24AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kenmore-d5curah30aak",
      "modelNumber": "D5CURAH30AAK",
      "brandId": "brand-kenmore",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-d5fphah06xak",
      "modelNumber": "D5FPHAH06XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fphah09xak",
      "modelNumber": "D5FPHAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch09xak",
      "modelNumber": "DLFSHCH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fphah12xak",
      "modelNumber": "D5FPHAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah09xak",
      "modelNumber": "D5FSHAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsfah09xak",
      "modelNumber": "D5FSFAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphbh09xak",
      "modelNumber": "DLFPHBH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch06xak",
      "modelNumber": "DLFSHCH06XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh09xak",
      "modelNumber": "DLFSHBH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphbh18xak",
      "modelNumber": "DLFPHBH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah06xak",
      "modelNumber": "D5FSHAH06XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah12xak",
      "modelNumber": "D5FSHAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphah09xak",
      "modelNumber": "DLFPHAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch12xak",
      "modelNumber": "DLFSHCH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphbh12xak",
      "modelNumber": "DLFPHBH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46736",
      "modelNumber": "IU-46736",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsfah12xak",
      "modelNumber": "D5FSFAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46737",
      "modelNumber": "IU-46737",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46730",
      "modelNumber": "IU-46730",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46738",
      "modelNumber": "IU-46738",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fphah18xak",
      "modelNumber": "D5FPHAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsfbh12xak",
      "modelNumber": "DLFSFBH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46739",
      "modelNumber": "IU-46739",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46732",
      "modelNumber": "IU-46732",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfccah09xak",
      "modelNumber": "DLFCCAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsoah12xak",
      "modelNumber": "D5FSOAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46731",
      "modelNumber": "IU-46731",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46740",
      "modelNumber": "IU-46740",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfphah12xak",
      "modelNumber": "DLFPHAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsoah09xak",
      "modelNumber": "DLFSOAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsfah16xak",
      "modelNumber": "D5FSFAH16XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsfah12xak",
      "modelNumber": "DLFSFAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah18xak",
      "modelNumber": "D5FSHAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah12xaj",
      "modelNumber": "D5FSHAH12XAJ",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch12xaj",
      "modelNumber": "DLFSHCH12XAJ",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh06xak",
      "modelNumber": "DLFSHBH06XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh12xak",
      "modelNumber": "DLFSHBH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46733",
      "modelNumber": "IU-46733",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah24xak",
      "modelNumber": "D5FSHAH24XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-fcma5b60l0dwallcon",
      "modelNumber": "FCMA5B60L0D*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfsoah18xak",
      "modelNumber": "DLFSOAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-evm5x32m17awallcon",
      "modelNumber": "EVM5X32M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x44m21awallcon",
      "modelNumber": "EVM5X44M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x38m17awallcon",
      "modelNumber": "EVD5X38M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-46734",
      "modelNumber": "IU-46734",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fscah12xak",
      "modelNumber": "D5FSCAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh12xaj",
      "modelNumber": "DLFSHBH12XAJ",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-evm5x31m17awallcon",
      "modelNumber": "EVM5X31M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x61m24awallcon",
      "modelNumber": "EVD5X61M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x61m24awallcon",
      "modelNumber": "EVM5X61M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x37m21awallcon",
      "modelNumber": "EVD5X37M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x43m21awallcon",
      "modelNumber": "EVM5X43M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x31m17awallcon",
      "modelNumber": "EVD5X31M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fehah30xck",
      "modelNumber": "D5FEHAH30XCK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46812",
      "modelNumber": "IU-46812",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fcfah18xak",
      "modelNumber": "D5FCFAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh24xak",
      "modelNumber": "DLFSHBH24XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46811",
      "modelNumber": "IU-46811",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfscah12xak",
      "modelNumber": "DLFSCAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46735",
      "modelNumber": "IU-46735",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsoah18xak",
      "modelNumber": "D5FSOAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fscah24xak",
      "modelNumber": "D5FSCAH24XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-evm5x49m21awallcon",
      "modelNumber": "EVM5X49M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x49m24awallcon",
      "modelNumber": "EVD5X49M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x60m21awallcon",
      "modelNumber": "EVD5X60M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x42m24awallcon",
      "modelNumber": "EVD5X42M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x60m21awallcon",
      "modelNumber": "EVM5X60M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x60m24awallcon",
      "modelNumber": "EVD5X60M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x61m21awallcon",
      "modelNumber": "EVD5X61M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x30m17awallcon",
      "modelNumber": "EVM5X30M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x60m24awallcon",
      "modelNumber": "EVM5X60M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmc17c2sn1cc",
      "modelNumber": "CTM60C5CGS2+JMC17C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmc17c2sn1cc",
      "modelNumber": "CTM60C5CGS1+JMC17C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmc17c2sn1cc",
      "modelNumber": "CTF60C5CGS1+JMC17C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x30m17awallcon",
      "modelNumber": "EVD5X30M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x25m17awallcon",
      "modelNumber": "EVD5X25M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x25m17awallcon",
      "modelNumber": "EVM5X25M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsoah06xak",
      "modelNumber": "D5FSOAH06XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-fcma5b48l0cwallcon",
      "modelNumber": "FCMA5B48L0C*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfshbh18xak",
      "modelNumber": "DLFSHBH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-evd5x42m17awallcon",
      "modelNumber": "EVD5X42M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x42m21awallcon",
      "modelNumber": "EVM5X42M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x42m21awallcon",
      "modelNumber": "EVD5X42M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x36m17awallcon",
      "modelNumber": "EVD5X36M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x36m17awallcon",
      "modelNumber": "EVM5X36M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmc17c2sn1cc",
      "modelNumber": "CTF60C5CGS2+JMC17C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x36m21awallcon",
      "modelNumber": "EVD5X36M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfehbh09xak",
      "modelNumber": "DLFEHBH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fehah09xck",
      "modelNumber": "D5FEHAH09XCK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfehbh09xaj",
      "modelNumber": "DLFEHBH09XAJ",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch24xak",
      "modelNumber": "DLFSHCH24XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-ea5x61m21awallcon",
      "modelNumber": "EA*5X61M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsdah06xak",
      "modelNumber": "D5FSDAH06XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-ea5x60m24awallcon",
      "modelNumber": "EA*5X60M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsdah12xak",
      "modelNumber": "D5FSDAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-evd5x48m24awallcon",
      "modelNumber": "EVD5X48M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x43m21awallcon",
      "modelNumber": "EA*5X43M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfshch18xak",
      "modelNumber": "DLFSHCH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-ea5x61m24awallcon",
      "modelNumber": "EA*5X61M24A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x37m21awallcon",
      "modelNumber": "EA*5X37M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-fcma5b36l0cwallcon",
      "modelNumber": "FCMA5B36L0C*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-fcma5x24l0bwallcon",
      "modelNumber": "FCMA5X24L0B*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fehah09xcj",
      "modelNumber": "D5FEHAH09XCJ",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5flcah36xak",
      "modelNumber": "D5FLCAH36XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fcfah24xak",
      "modelNumber": "D5FCFAH24XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46814",
      "modelNumber": "IU-46814",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46817",
      "modelNumber": "IU-46817",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshbh30xak",
      "modelNumber": "DLFSHBH30XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-jhc48c5cg2ss1cc",
      "modelNumber": "JHC48C5CG2SS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jmc20d2sn1cc",
      "modelNumber": "CTF60D5CGS1+JMC20D2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmc16c2sn1cc",
      "modelNumber": "CTM60C5CGS2+JMC16C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmc16c2sn1cc",
      "modelNumber": "CTM60C5CGS1+JMC16C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2cc",
      "modelNumber": "CTM60C5CGS2+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1cc",
      "modelNumber": "CTF60C5CGS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2jmc20d2sn1cc",
      "modelNumber": "CTM60D5CGS2+JMC20D2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmc16c2sn1cc",
      "modelNumber": "CTF60C5CGS1+JMC16C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x30m14awallcon",
      "modelNumber": "EVD5X30M14A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1cc",
      "modelNumber": "CTM60C5CGS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmc16c2sn1cc",
      "modelNumber": "CTF60C5CGS2+JMC16C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jmc20d2sn1cc",
      "modelNumber": "CTM60D5CGS1+JMC20D2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2cc",
      "modelNumber": "CTF60C5CGS2+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jmc20d2sn1cc",
      "modelNumber": "CTF60D5CGS2+JMC20D2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x36m17awallcon",
      "modelNumber": "EA*5X36M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x30m17awallcon",
      "modelNumber": "EA*5X30M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jsc48c5cg2ss1cc",
      "modelNumber": "JSC48C5CG2SS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x37m17awallcon",
      "modelNumber": "EA*5X37M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x42m21awallcon",
      "modelNumber": "EA*5X42M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc48d5cg2ss1cc",
      "modelNumber": "JHC48D5CG2SS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x25m14awallcon",
      "modelNumber": "EVD5X25M14A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x24m17awallcon",
      "modelNumber": "EVD5X24M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x48m21awallcon",
      "modelNumber": "EA*5X48M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x25m17awallcon",
      "modelNumber": "EA*5X25M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-46815",
      "modelNumber": "IU-46815",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfehbh30xak",
      "modelNumber": "DLFEHBH30XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-evm5x24m17awallcon",
      "modelNumber": "EVM5X24M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fscah18xak",
      "modelNumber": "D5FSCAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsdah12xhk",
      "modelNumber": "D5FSDAH12XHK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-evd5x48m21awallcon",
      "modelNumber": "EVD5X48M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfsdah09xhk",
      "modelNumber": "DLFSDAH09XHK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfscah09xak",
      "modelNumber": "DLFSCAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fshah30xak",
      "modelNumber": "D5FSHAH30XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsfah18xak",
      "modelNumber": "DLFSFAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-evm5x24m14awallcon",
      "modelNumber": "EVM5X24M14A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evm5x48m21awallcon",
      "modelNumber": "EVM5X48M21A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfsfah24xak",
      "modelNumber": "DLFSFAH24XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfscbh24xak",
      "modelNumber": "DLFSCBH24XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-esh5x60m12awallcon",
      "modelNumber": "ESH5X60M12A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x30m14awallcon",
      "modelNumber": "EA*5X30M14A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd5x24m14awallcon",
      "modelNumber": "EVD5X24M14A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x24m17awallcon",
      "modelNumber": "EA*5X24M17A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x48m12awallcon",
      "modelNumber": "ESH5X48M12A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea5x24m14awallcon",
      "modelNumber": "EA*5X24M14A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fehah18xck",
      "modelNumber": "D5FEHAH18XCK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fcfah36xak",
      "modelNumber": "D5FCFAH36XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah09xak",
      "modelNumber": "DLFSDAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfshch30xak",
      "modelNumber": "DLFSHCH30XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46816",
      "modelNumber": "IU-46816",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46819",
      "modelNumber": "IU-46819",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46813",
      "modelNumber": "IU-46813",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah12xhk",
      "modelNumber": "DLFSDAH12XHK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsdah18xhk",
      "modelNumber": "D5FSDAH18XHK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-esh5x30m12awallcon",
      "modelNumber": "ESH5X30M12A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x42m12awallcon",
      "modelNumber": "ESH5X42M12A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-esh5x36m12awallcon",
      "modelNumber": "ESH5X36M12A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc60d5ch2ss1cc",
      "modelNumber": "JHC60D5CH2SS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fsdah18xak",
      "modelNumber": "D5FSDAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-ctm60d5chs1jmc20d2sn1cc",
      "modelNumber": "CTM60D5CHS1+JMC20D2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1cc",
      "modelNumber": "CTF60C5CHS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmc17c2sn1cc",
      "modelNumber": "CTF60C5CHS1+JMC17C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jmc20d2sn1cc",
      "modelNumber": "CTF60D5CHS1+JMC20D2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmc17c2sn1cc",
      "modelNumber": "CTM60C5CHS1+JMC17C2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1cc",
      "modelNumber": "CTM60C5CHS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfscah18xak",
      "modelNumber": "DLFSCAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fcfah48xak",
      "modelNumber": "D5FCFAH48XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfccah18xak",
      "modelNumber": "DLFCCAH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsaah24xbk",
      "modelNumber": "D5FSAAH24XBK",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fshah33xak",
      "modelNumber": "D5FSHAH33XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah12xak",
      "modelNumber": "DLFSDAH12XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfehbh18xak",
      "modelNumber": "DLFEHBH18XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-esh5x24m12awallcon",
      "modelNumber": "ESH5X24M12A*+WALLCON",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5muwaq18xa3",
      "modelNumber": "D5MUWAQ18XA3",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlfsdah24xak",
      "modelNumber": "DLFSDAH24XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-dlfsdah24xhk",
      "modelNumber": "DLFSDAH24XHK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fsdah24xhk",
      "modelNumber": "D5FSDAH24XHK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5flcah48xak",
      "modelNumber": "D5FLCAH48XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-ctm36c5cds2jme16c2sn2",
      "modelNumber": "CTM36C5CDS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jme12c2sn2",
      "modelNumber": "CTM36C5CDS2+JME12C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jmc17c2sn1",
      "modelNumber": "CTM36C5CDS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jmc16c2sn1",
      "modelNumber": "CTM36C5CDS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2",
      "modelNumber": "CTM36C5CDS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1",
      "modelNumber": "CTM36C5CDS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jme16c2sn2",
      "modelNumber": "CTM36C5ADS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2",
      "modelNumber": "CTF36B5ADS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jmc12b2sn1",
      "modelNumber": "CTF36B5ADS2+JMC12B2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jme08b2sn2txv",
      "modelNumber": "CTU36B5XDS2+JME08B2SN2+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jme12b2sn2txv",
      "modelNumber": "CTU36B5XDS2+JME12B2SN2+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2txv",
      "modelNumber": "CTU36B5XDS2+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe24b5ac2ss1",
      "modelNumber": "JHE24B5AC2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe24b5ac2ss2",
      "modelNumber": "JHE24B5AC2SS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2jme12b2sn2",
      "modelNumber": "CTF36B5CDS2+JME12B2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jme12b2sn2",
      "modelNumber": "CTF36B5ADS2+JME12B2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2",
      "modelNumber": "CTF36B5CDS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jmc16c2sn1",
      "modelNumber": "CTF36C5ADS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2",
      "modelNumber": "CTF36C5ADS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe30b5ad2ss2",
      "modelNumber": "JHE30B5AD2SS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5ad2ss1",
      "modelNumber": "JHE36B5AD2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jmc12b2sn1txv",
      "modelNumber": "CTU36B5XDS2+JMC12B2SN1+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2jmc12b2sn1cc",
      "modelNumber": "CTF30B5ACS2+JMC12B2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5ad2ss2",
      "modelNumber": "JHE36B5AD2SS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1txv",
      "modelNumber": "CTU36B5XDS1+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1cc",
      "modelNumber": "CTF30B5ACS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1cc",
      "modelNumber": "CTM30B5ACS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jmc12b2sn1cc",
      "modelNumber": "CTM30B5ACS1+JMC12B2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2cc",
      "modelNumber": "CTM30B5ACS2+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2",
      "modelNumber": "CTM48C5AFS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2jmc12b2sn1",
      "modelNumber": "CTF36B5CDS2+JMC12B2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jmc17c2sn1",
      "modelNumber": "CTF36C5ADS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jme12c2sn2",
      "modelNumber": "CTF36C5ADS2+JME12C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2jme16c2sn2",
      "modelNumber": "CTF36C5ADS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1",
      "modelNumber": "CTF36C5CDS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2",
      "modelNumber": "CTF36C5CDS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jmc17c2sn1",
      "modelNumber": "CTF48C5AFS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fvhah09xck",
      "modelNumber": "D5FVHAH09XCK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5fvhah09xak",
      "modelNumber": "D5FVHAH09XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-ctf48c5afs2jme12c2sn2",
      "modelNumber": "CTF48C5AFS2+JME12C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1txv",
      "modelNumber": "CTU48C5XFS1+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jmc17c2sn1",
      "modelNumber": "CTM48C5CFS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jmc16c2sn1",
      "modelNumber": "CTM48C5CFS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2",
      "modelNumber": "CTM48C5CFS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1",
      "modelNumber": "CTM48C5CFS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe30b5ad2ss1",
      "modelNumber": "JHE30B5AD2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jmc12b2sn1cc",
      "modelNumber": "CTF30B5ACS1+JMC12B2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc36c5ad2ss1cc",
      "modelNumber": "JHC36C5AD2SS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jmc12b2sn1cc",
      "modelNumber": "CTM36B5ADS2+JMC12B2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc36b5ad2ss1cc",
      "modelNumber": "JHC36B5AD2SS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs2cc",
      "modelNumber": "CTF30B5ACS2+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jmc12b2sn1cc",
      "modelNumber": "CTF36B5ADS2+JMC12B2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmc12b2sn1cc",
      "modelNumber": "CTF36B5ADS1+JMC12B2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmc12b2sn1cc",
      "modelNumber": "CTM36B5ADS1+JMC12B2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2jmc12b2sn1cc",
      "modelNumber": "CTM30B5ACS2+JMC12B2SN1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jme12c2sn2txv",
      "modelNumber": "CTU48C5XFS2+JME12C2SN2+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jmc17c2sn1txv",
      "modelNumber": "CTU48C5XFS2+JMC17C2SN1+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2txv",
      "modelNumber": "CTU48C5XFS2+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jme16c2sn2txv",
      "modelNumber": "CTU48C5XFS2+JME16C2SN2+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jme16c2sn2",
      "modelNumber": "CTM48C5CFS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jme12c2sn2",
      "modelNumber": "CTM48C5CFS2+JME12C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5cd2ss1",
      "modelNumber": "JHE36C5CD2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jmc16c2sn1txv",
      "modelNumber": "CTU48C5XFS2+JMC16C2SN1+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jmc17c2sn1",
      "modelNumber": "CTM48C5AFS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jmc16c2sn1",
      "modelNumber": "CTM48C5AFS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5cd2ss2",
      "modelNumber": "JHE36C5CD2SS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe42c5cf2ss1",
      "modelNumber": "JHE42C5CF2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuaah18xak",
      "modelNumber": "D5FUAAH18XAK",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2",
      "modelNumber": "CTM36B5ADS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc60c5ch2ss1cc",
      "modelNumber": "JHC60C5CH2SS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jme16c2sn2",
      "modelNumber": "CTF60C5CGS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1",
      "modelNumber": "CTF60C5CHS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jmc20d2sn1",
      "modelNumber": "CTF60D5CGS2+JMC20D2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jme18d2sn2",
      "modelNumber": "CTF60D5CGS2+JME18D2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2",
      "modelNumber": "CTF60D5CHS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1",
      "modelNumber": "CTF60C5CGS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-d5fuhah24xak",
      "modelNumber": "D5FUHAH24XAK",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jmc16c2sn1",
      "modelNumber": "CTF60C5CGS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2",
      "modelNumber": "CTF60D5CJS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2",
      "modelNumber": "CTF60C5CGS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2jmc20d2sn1",
      "modelNumber": "CTF60D5CJS2+JMC20D2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2jme18d2sn2",
      "modelNumber": "CTF60D5CJS2+JME18D2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jmc17c2sn1",
      "modelNumber": "CTF60C5CHS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jme16c2sn2",
      "modelNumber": "CTF60C5CHS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30a5ads2",
      "modelNumber": "CTF30A5ADS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jme08b2sn2",
      "modelNumber": "CTF36B5ADS2+JME08B2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1",
      "modelNumber": "CTF36B5ADS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1",
      "modelNumber": "CTM36B5ADS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jme12c2sn2",
      "modelNumber": "CTM48C5AFS2+JME12C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5afs2jme16c2sn2",
      "modelNumber": "CTM48C5AFS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc36c5cd2ss1",
      "modelNumber": "JHC36C5CD2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5cd2ss1",
      "modelNumber": "JHE36B5CD2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5ad2ss2",
      "modelNumber": "JHE36C5AD2SS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2jme18d2sn2",
      "modelNumber": "CTF60D5CHS2+JME18D2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jme16c2sn2",
      "modelNumber": "CTM60C5CHS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2jmc20d2sn1",
      "modelNumber": "CTF60D5CHS2+JMC20D2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jmc17c2sn1",
      "modelNumber": "CTM60C5CHS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2",
      "modelNumber": "CTM60C5CHS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jme16c2sn2",
      "modelNumber": "CTM60C5CGS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1",
      "modelNumber": "CTM60C5CHS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2",
      "modelNumber": "CTF60C5CHS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2",
      "modelNumber": "CTM60C5CGS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2",
      "modelNumber": "CTM60D5CHS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmc17c2sn1",
      "modelNumber": "CTM60C5CGS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5ch2ss2",
      "modelNumber": "JHE60D5CH2SS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2jmc20d2sn1",
      "modelNumber": "CTM60D5CJS2+JMC20D2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2jme18d2sn2",
      "modelNumber": "CTM60D5CJS2+JME18D2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1txv",
      "modelNumber": "CTU60C5XGS1+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jmc16c2sn1txv",
      "modelNumber": "CTU60C5XGS2+JMC16C2SN1+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jme16c2sn2txv",
      "modelNumber": "CTU60C5XGS2+JME16C2SN2+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2txv",
      "modelNumber": "CTU60C5XGS2+TXV",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48c5cg2ss1",
      "modelNumber": "JHE48C5CG2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48c5cg2ss2",
      "modelNumber": "JHE48C5CG2SS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48d5cg2ss1",
      "modelNumber": "JHE48D5CG2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60c5ch2ss1",
      "modelNumber": "JHE60C5CH2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2jmc20d2sn1",
      "modelNumber": "CTM60D5CHS2+JMC20D2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2jme18d2sn2",
      "modelNumber": "CTM60D5CHS2+JME18D2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2",
      "modelNumber": "CTM60D5CJS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jmc16c2sn1",
      "modelNumber": "CTM60C5CGS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jse48c5cg2ss1",
      "modelNumber": "JSE48C5CG2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5cj2ss1",
      "modelNumber": "JHE60D5CJ2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5ch2ss1",
      "modelNumber": "JHE60D5CH2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60c5ch2ss2",
      "modelNumber": "JHE60C5CH2SS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jse60d5cj2ss1",
      "modelNumber": "JSE60D5CJ2SS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jme16c2sn2",
      "modelNumber": "CTF48C5CFS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jmc16c2sn1",
      "modelNumber": "CTF36C5CDS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jmc17c2sn1",
      "modelNumber": "CTF36C5CDS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jmc17c2sn1",
      "modelNumber": "CTM36C5ADS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jme12c2sn2",
      "modelNumber": "CTM36C5ADS2+JME12C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jme16c2sn2",
      "modelNumber": "CTF48C5AFS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1",
      "modelNumber": "CTF48C5CFS1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jme12c2sn2",
      "modelNumber": "CTF36C5CDS2+JME12C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jme16c2sn2",
      "modelNumber": "CTF36C5CDS2+JME16C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2",
      "modelNumber": "CTF48C5AFS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5afs2jmc16c2sn1",
      "modelNumber": "CTF48C5AFS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jme12c2sn2",
      "modelNumber": "CTF48C5CFS2+JME12C2SN2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jmc17c2sn1",
      "modelNumber": "CTF48C5CFS2+JMC17C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jmc16c2sn1",
      "modelNumber": "CTF48C5CFS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2",
      "modelNumber": "CTF48C5CFS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2",
      "modelNumber": "CTM36C5ADS2",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2jmc16c2sn1",
      "modelNumber": "CTM36C5ADS2+JMC16C2SN1",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-dlflfah48xak",
      "modelNumber": "DLFLFAH48XAK",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46743",
      "modelNumber": "IU-46743",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46744",
      "modelNumber": "IU-46744",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46820",
      "modelNumber": "IU-46820",
      "brandId": "brand-kenmore",
      "type": "wall-single"
    },
    {
      "id": "iu-d5muwaq30xa3",
      "modelNumber": "D5MUWAQ30XA3",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhc24b5ac2ss1cc",
      "modelNumber": "JHC24B5AC2SS1+CC",
      "brandId": "brand-kenmore",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-kenmore-d5cprah06aak-d5fphah06xak",
      "slug": "kenmore-d5cprah06aak-d5fphah06xak",
      "modelId": "model-kenmore-d5cprah06aak",
      "outdoorUnitId": "ou-kenmore-d5cprah06aak",
      "indoorUnitId": "iu-d5fphah06xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.1,
      "hspf2": 15.6,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cprah09aak-d5fphah09xak",
      "slug": "kenmore-d5cprah09aak-d5fphah09xak",
      "modelId": "model-kenmore-d5cprah09aak",
      "outdoorUnitId": "ou-kenmore-d5cprah09aak",
      "indoorUnitId": "iu-d5fphah09xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 31.5,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh09aak-dlfshch09xak",
      "slug": "kenmore-dlcsrbh09aak-dlfshch09xak",
      "modelId": "model-kenmore-dlcsrbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cprah12aak-d5fphah12xak",
      "slug": "kenmore-d5cprah12aak-d5fphah12xak",
      "modelId": "model-kenmore-d5cprah12aak",
      "outdoorUnitId": "ou-kenmore-d5cprah12aak",
      "indoorUnitId": "iu-d5fphah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.0,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah09aak-d5fshah09xak",
      "slug": "kenmore-d5cshah09aak-d5fshah09xak",
      "modelId": "model-kenmore-d5cshah09aak",
      "outdoorUnitId": "ou-kenmore-d5cshah09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah09aak-d5fsfah09xak",
      "slug": "kenmore-d5cshah09aak-d5fsfah09xak",
      "modelId": "model-kenmore-d5cshah09aak",
      "outdoorUnitId": "ou-kenmore-d5cshah09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcprbh09aak-dlfphbh09xak",
      "slug": "kenmore-dlcprbh09aak-dlfphbh09xak",
      "modelId": "model-kenmore-dlcprbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcprbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh06aak-dlfshch06xak",
      "slug": "kenmore-dlcsrbh06aak-dlfshch06xak",
      "modelId": "model-kenmore-dlcsrbh06aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh06aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh09aak-dlfshbh09xak",
      "slug": "kenmore-dlcsrbh09aak-dlfshbh09xak",
      "modelId": "model-kenmore-dlcsrbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcprbh18aak-dlfphbh18xak",
      "slug": "kenmore-dlcprbh18aak-dlfphbh18xak",
      "modelId": "model-kenmore-dlcprbh18aak",
      "outdoorUnitId": "ou-kenmore-dlcprbh18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah09aak-d5fsfah09xak",
      "slug": "kenmore-d5csrah09aak-d5fsfah09xak",
      "modelId": "model-kenmore-d5csrah09aak",
      "outdoorUnitId": "ou-kenmore-d5csrah09aak",
      "indoorUnitId": "iu-d5fsfah09xak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah09aak-d5fshah09xak",
      "slug": "kenmore-d5csrah09aak-d5fshah09xak",
      "modelId": "model-kenmore-d5csrah09aak",
      "outdoorUnitId": "ou-kenmore-d5csrah09aak",
      "indoorUnitId": "iu-d5fshah09xak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah06aak-d5fshah06xak",
      "slug": "kenmore-d5cshah06aak-d5fshah06xak",
      "modelId": "model-kenmore-d5cshah06aak",
      "outdoorUnitId": "ou-kenmore-d5cshah06aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah12aak-d5fshah12xak",
      "slug": "kenmore-d5csrah12aak-d5fshah12xak",
      "modelId": "model-kenmore-d5csrah12aak",
      "outdoorUnitId": "ou-kenmore-d5csrah12aak",
      "indoorUnitId": "iu-d5fshah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah12aak-d5fshah12xak",
      "slug": "kenmore-d5cshah12aak-d5fshah12xak",
      "modelId": "model-kenmore-d5cshah12aak",
      "outdoorUnitId": "ou-kenmore-d5cshah12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcprbh09aak-dlfphah09xak",
      "slug": "kenmore-dlcprbh09aak-dlfphah09xak",
      "modelId": "model-kenmore-dlcprbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcprbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aak-dlfshch12xak",
      "slug": "kenmore-dlcsrbh12aak-dlfshch12xak",
      "modelId": "model-kenmore-dlcsrbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcprbh12aak-dlfphbh12xak",
      "slug": "kenmore-dlcprbh12aak-dlfphbh12xak",
      "modelId": "model-kenmore-dlcprbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcprbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmrah18cak-iu-46736",
      "slug": "kenmore-d5cmrah18cak-iu-46736",
      "modelId": "model-kenmore-d5cmrah18cak",
      "outdoorUnitId": "ou-kenmore-d5cmrah18cak",
      "indoorUnitId": "iu-iu-46736",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah12aak-d5fsfah12xak",
      "slug": "kenmore-d5cshah12aak-d5fsfah12xak",
      "modelId": "model-kenmore-d5cshah12aak",
      "outdoorUnitId": "ou-kenmore-d5cshah12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmrah24dak-iu-46737",
      "slug": "kenmore-d5cmrah24dak-iu-46737",
      "modelId": "model-kenmore-d5cmrah24dak",
      "outdoorUnitId": "ou-kenmore-d5cmrah24dak",
      "indoorUnitId": "iu-iu-46737",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmhah18cak-iu-46730",
      "slug": "kenmore-d5cmhah18cak-iu-46730",
      "modelId": "model-kenmore-d5cmhah18cak",
      "outdoorUnitId": "ou-kenmore-d5cmhah18cak",
      "indoorUnitId": "iu-iu-46730",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmrah30eak-iu-46738",
      "slug": "kenmore-d5cmrah30eak-iu-46738",
      "modelId": "model-kenmore-d5cmrah30eak",
      "outdoorUnitId": "ou-kenmore-d5cmrah30eak",
      "indoorUnitId": "iu-iu-46738",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah12aak-d5fsfah12xak",
      "slug": "kenmore-d5csrah12aak-d5fsfah12xak",
      "modelId": "model-kenmore-d5csrah12aak",
      "outdoorUnitId": "ou-kenmore-d5csrah12aak",
      "indoorUnitId": "iu-d5fsfah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.7,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cprah18aa-d5fphah18xak",
      "slug": "kenmore-d5cprah18aa-d5fphah18xak",
      "modelId": "model-kenmore-d5cprah18aa",
      "outdoorUnitId": "ou-kenmore-d5cprah18aa",
      "indoorUnitId": "iu-d5fphah18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 15.2,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aak-dlfsfbh12xak",
      "slug": "kenmore-dlcsrbh12aak-dlfsfbh12xak",
      "modelId": "model-kenmore-dlcsrbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmrah36eak-iu-46739",
      "slug": "kenmore-d5cmrah36eak-iu-46739",
      "modelId": "model-kenmore-d5cmrah36eak",
      "outdoorUnitId": "ou-kenmore-d5cmrah36eak",
      "indoorUnitId": "iu-iu-46739",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmhah30eak-iu-46732",
      "slug": "kenmore-d5cmhah30eak-iu-46732",
      "modelId": "model-kenmore-d5cmhah30eak",
      "outdoorUnitId": "ou-kenmore-d5cmhah30eak",
      "indoorUnitId": "iu-iu-46732",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh09aak-dlfccah09xak",
      "slug": "kenmore-dlcsrbh09aak-dlfccah09xak",
      "modelId": "model-kenmore-dlcsrbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah09aak-d5fsoah12xak",
      "slug": "kenmore-d5cshah09aak-d5fsoah12xak",
      "modelId": "model-kenmore-d5cshah09aak",
      "outdoorUnitId": "ou-kenmore-d5cshah09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmhah24dak-iu-46731",
      "slug": "kenmore-d5cmhah24dak-iu-46731",
      "modelId": "model-kenmore-d5cmhah24dak",
      "outdoorUnitId": "ou-kenmore-d5cmhah24dak",
      "indoorUnitId": "iu-iu-46731",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmrah48fak-iu-46740",
      "slug": "kenmore-d5cmrah48fak-iu-46740",
      "modelId": "model-kenmore-d5cmrah48fak",
      "outdoorUnitId": "ou-kenmore-d5cmrah48fak",
      "indoorUnitId": "iu-iu-46740",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcprbh12aak-dlfphah12xak",
      "slug": "kenmore-dlcprbh12aak-dlfphah12xak",
      "modelId": "model-kenmore-dlcprbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcprbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh09aak-dlfsoah09xak",
      "slug": "kenmore-dlcsrbh09aak-dlfsoah09xak",
      "modelId": "model-kenmore-dlcsrbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah18aak-d5fsfah16xak",
      "slug": "kenmore-d5csrah18aak-d5fsfah16xak",
      "modelId": "model-kenmore-d5csrah18aak",
      "outdoorUnitId": "ou-kenmore-d5csrah18aak",
      "indoorUnitId": "iu-d5fsfah16xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.9,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aak-dlfsfah12xak",
      "slug": "kenmore-dlcsrbh12aak-dlfsfah12xak",
      "modelId": "model-kenmore-dlcsrbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah18aak-d5fshah18xak",
      "slug": "kenmore-d5csrah18aak-d5fshah18xak",
      "modelId": "model-kenmore-d5csrah18aak",
      "outdoorUnitId": "ou-kenmore-d5csrah18aak",
      "indoorUnitId": "iu-d5fshah18xak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah12aaj-d5fshah12xaj",
      "slug": "kenmore-d5csrah12aaj-d5fshah12xaj",
      "modelId": "model-kenmore-d5csrah12aaj",
      "outdoorUnitId": "ou-kenmore-d5csrah12aaj",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aaj-dlfshch12xaj",
      "slug": "kenmore-dlcsrbh12aaj-dlfshch12xaj",
      "modelId": "model-kenmore-dlcsrbh12aaj",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aaj",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh06aak-dlfshbh06xak",
      "slug": "kenmore-dlcsrbh06aak-dlfshbh06xak",
      "modelId": "model-kenmore-dlcsrbh06aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh06aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aak-dlfshbh12xak",
      "slug": "kenmore-dlcsrbh12aak-dlfshbh12xak",
      "modelId": "model-kenmore-dlcsrbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmhah36eak-iu-46733",
      "slug": "kenmore-d5cmhah36eak-iu-46733",
      "modelId": "model-kenmore-d5cmhah36eak",
      "outdoorUnitId": "ou-kenmore-d5cmhah36eak",
      "indoorUnitId": "iu-iu-46733",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah24aak-d5fshah24xak",
      "slug": "kenmore-d5csrah24aak-d5fshah24xak",
      "modelId": "model-kenmore-d5csrah24aak",
      "outdoorUnitId": "ou-kenmore-d5csrah24aak",
      "indoorUnitId": "iu-d5fshah24xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v48kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-b5h3v48kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-b5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v48kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aak-dlfsoah18xak",
      "slug": "kenmore-dlcsrbh12aak-dlfsoah18xak",
      "modelId": "model-kenmore-dlcsrbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x32m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x32m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x32m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x44m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x44m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x44m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x38m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x38m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x38m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah12aak-d5fsoah12xak",
      "slug": "kenmore-d5cshah12aak-d5fsoah12xak",
      "modelId": "model-kenmore-d5cshah12aak",
      "outdoorUnitId": "ou-kenmore-d5cshah12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-cht5h3v48kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmhah48fak-iu-46734",
      "slug": "kenmore-d5cmhah48fak-iu-46734",
      "modelId": "model-kenmore-d5cmhah48fak",
      "outdoorUnitId": "ou-kenmore-d5cmhah48fak",
      "indoorUnitId": "iu-iu-46734",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah09aak-d5fscah12xak",
      "slug": "kenmore-d5cshah09aak-d5fscah12xak",
      "modelId": "model-kenmore-d5cshah09aak",
      "outdoorUnitId": "ou-kenmore-d5cshah09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aaj-dlfshbh12xaj",
      "slug": "kenmore-dlcsrbh12aaj-dlfshbh12xaj",
      "modelId": "model-kenmore-dlcsrbh12aaj",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aaj",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x31m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x31m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x31m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x61m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x61m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x61m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x61m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x61m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x61m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x61m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x61m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x61m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x37m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x37m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x37m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x43m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x43m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x43m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x31m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x31m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x31m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x61m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x61m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x61m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cerah30aak-d5fehah30xck",
      "slug": "kenmore-d5cerah30aak-d5fehah30xck",
      "modelId": "model-kenmore-d5cerah30aak",
      "outdoorUnitId": "ou-kenmore-d5cerah30aak",
      "indoorUnitId": "iu-d5fehah30xck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.4,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmhbh30dak-iu-46812",
      "slug": "kenmore-dlcmhbh30dak-iu-46812",
      "modelId": "model-kenmore-dlcmhbh30dak",
      "outdoorUnitId": "ou-kenmore-dlcmhbh30dak",
      "indoorUnitId": "iu-iu-46812",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah18aak-d5fcfah18xak",
      "slug": "kenmore-d5csrah18aak-d5fcfah18xak",
      "modelId": "model-kenmore-d5csrah18aak",
      "outdoorUnitId": "ou-kenmore-d5csrah18aak",
      "indoorUnitId": "iu-d5fcfah18xak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh24aak-dlfshbh24xak",
      "slug": "kenmore-dlcsrbh24aak-dlfshbh24xak",
      "modelId": "model-kenmore-dlcsrbh24aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmhbh24cak-iu-46811",
      "slug": "kenmore-dlcmhbh24cak-iu-46811",
      "modelId": "model-kenmore-dlcmhbh24cak",
      "outdoorUnitId": "ou-kenmore-dlcmhbh24cak",
      "indoorUnitId": "iu-iu-46811",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aak-dlfscah12xak",
      "slug": "kenmore-dlcsrbh12aak-dlfscah12xak",
      "modelId": "model-kenmore-dlcsrbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah12aak-d5fscah12xak",
      "slug": "kenmore-d5cshah12aak-d5fscah12xak",
      "modelId": "model-kenmore-d5cshah12aak",
      "outdoorUnitId": "ou-kenmore-d5cshah12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmhah55fak-iu-46735",
      "slug": "kenmore-d5cmhah55fak-iu-46735",
      "modelId": "model-kenmore-d5cmhah55fak",
      "outdoorUnitId": "ou-kenmore-d5cmhah55fak",
      "indoorUnitId": "iu-iu-46735",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah18aak-d5fsoah18xak",
      "slug": "kenmore-d5csrah18aak-d5fsoah18xak",
      "modelId": "model-kenmore-d5csrah18aak",
      "outdoorUnitId": "ou-kenmore-d5csrah18aak",
      "indoorUnitId": "iu-d5fsoah18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah12aak-d5fsoah12xak",
      "slug": "kenmore-d5csrah12aak-d5fsoah12xak",
      "modelId": "model-kenmore-d5csrah12aak",
      "outdoorUnitId": "ou-kenmore-d5csrah12aak",
      "indoorUnitId": "iu-d5fsoah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah09aak-d5fsoah12xak",
      "slug": "kenmore-d5csrah09aak-d5fsoah12xak",
      "modelId": "model-kenmore-d5csrah09aak",
      "outdoorUnitId": "ou-kenmore-d5csrah09aak",
      "indoorUnitId": "iu-d5fsoah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah24aak-d5fscah24xak",
      "slug": "kenmore-d5csrah24aak-d5fscah24xak",
      "modelId": "model-kenmore-d5csrah24aak",
      "outdoorUnitId": "ou-kenmore-d5csrah24aak",
      "indoorUnitId": "iu-d5fscah24xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x44m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x44m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x44m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x49m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x49m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x49m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x49m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x49m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x49m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x60m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x60m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x60m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x42m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x42m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x42m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x60m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x60m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x60m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x60m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x60m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x61m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x61m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x61m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x49m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x49m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x49m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x49m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x49m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x49m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x38m17awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x38m17awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x38m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x60m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x60m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x60m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x30m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x30m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x30m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x42m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x42m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x42m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x60m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x60m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x60m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x60m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60c5cgs2jmc17c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctm60c5cgs2jmc17c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60c5cgs1jmc17c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctm60c5cgs1jmc17c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x44m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x44m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x44m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60c5cgs1jmc17c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctf60c5cgs1jmc17c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x30m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x30m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x30m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x25m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x25m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x25m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x25m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x25m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x25m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah06aak-d5fsoah06xak",
      "slug": "kenmore-d5cshah06aak-d5fsoah06xak",
      "modelId": "model-kenmore-d5cshah06aak",
      "outdoorUnitId": "ou-kenmore-d5cshah06aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x38m17awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x38m17awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x38m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v48kaaa-fcma5b48l0cwallcon",
      "slug": "kenmore-b5h3v48kaaa-fcma5b48l0cwallcon",
      "modelId": "model-kenmore-b5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v48kaaa",
      "indoorUnitId": "iu-fcma5b48l0cwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-b5h3v36kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x60m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x60m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh18aak-dlfshbh18xak",
      "slug": "kenmore-dlcsrbh18aak-dlfshbh18xak",
      "modelId": "model-kenmore-dlcsrbh18aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh06aak-dlfsoah09xak",
      "slug": "kenmore-dlcsrbh06aak-dlfsoah09xak",
      "modelId": "model-kenmore-dlcsrbh06aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh06aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x42m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x42m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x42m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x42m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x42m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x42m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x42m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x42m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x42m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-fcma5b48l0cwallcon",
      "slug": "kenmore-cht5h3v48kaaa-fcma5b48l0cwallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-fcma5b48l0cwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x36m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x36m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x36m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x36m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x36m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x36m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-cht5h3v36kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x61m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x61m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x61m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x60m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x60m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x60m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60c5cgs2jmc17c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctf60c5cgs2jmc17c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x36m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x36m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x36m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah09aak-d5fscah12xak",
      "slug": "kenmore-d5csrah09aak-d5fscah12xak",
      "modelId": "model-kenmore-d5csrah09aak",
      "outdoorUnitId": "ou-kenmore-d5csrah09aak",
      "indoorUnitId": "iu-d5fscah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcerbh09aak-dlfehbh09xak",
      "slug": "kenmore-dlcerbh09aak-dlfehbh09xak",
      "modelId": "model-kenmore-dlcerbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcerbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cerah09aak-d5fehah09xck",
      "slug": "kenmore-d5cerah09aak-d5fehah09xck",
      "modelId": "model-kenmore-d5cerah09aak",
      "outdoorUnitId": "ou-kenmore-d5cerah09aak",
      "indoorUnitId": "iu-d5fehah09xck",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcerbh09aaj-dlfehbh09xaj",
      "slug": "kenmore-dlcerbh09aaj-dlfehbh09xaj",
      "modelId": "model-kenmore-dlcerbh09aaj",
      "outdoorUnitId": "ou-kenmore-dlcerbh09aaj",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh24aak-dlfshch24xak",
      "slug": "kenmore-dlcsrbh24aak-dlfshch24xak",
      "modelId": "model-kenmore-dlcsrbh24aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v48kaaa-ea5x61m21awallcon",
      "slug": "kenmore-b5h3v48kaaa-ea5x61m21awallcon",
      "modelId": "model-kenmore-b5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v48kaaa",
      "indoorUnitId": "iu-ea5x61m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah06aak-d5fsdah06xak",
      "slug": "kenmore-d5cshah06aak-d5fsdah06xak",
      "modelId": "model-kenmore-d5cshah06aak",
      "outdoorUnitId": "ou-kenmore-d5cshah06aak",
      "indoorUnitId": "iu-d5fsdah06xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v48kaaa-ea5x60m24awallcon",
      "slug": "kenmore-b5h3v48kaaa-ea5x60m24awallcon",
      "modelId": "model-kenmore-b5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v48kaaa",
      "indoorUnitId": "iu-ea5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-fcma5b48l0cwallcon",
      "slug": "kenmore-b5h3v36kaaa-fcma5b48l0cwallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-fcma5b48l0cwallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah09aak-d5fsdah12xak",
      "slug": "kenmore-d5cshah09aak-d5fsdah12xak",
      "modelId": "model-kenmore-d5cshah09aak",
      "outdoorUnitId": "ou-kenmore-d5cshah09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x48m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x48m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x48m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x43m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x43m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x43m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh18aak-dlfshch18xak",
      "slug": "kenmore-dlcsrbh18aak-dlfshch18xak",
      "modelId": "model-kenmore-dlcsrbh18aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-ea5x60m24awallcon",
      "slug": "kenmore-cht5h3v48kaaa-ea5x60m24awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-ea5x60m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-ea5x61m24awallcon",
      "slug": "kenmore-cht5h3v48kaaa-ea5x61m24awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-ea5x61m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-ea5x61m21awallcon",
      "slug": "kenmore-cht5h3v48kaaa-ea5x61m21awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-ea5x61m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x37m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x37m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x37m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-fcma5b36l0cwallcon",
      "slug": "kenmore-b5h3v24kaaa-fcma5b36l0cwallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-fcma5b36l0cwallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-fcma5x24l0bwallcon",
      "slug": "kenmore-b5h3v24kaaa-fcma5x24l0bwallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-fcma5x24l0bwallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah18aak-d5fshah18xak",
      "slug": "kenmore-d5cshah18aak-d5fshah18xak",
      "modelId": "model-kenmore-d5cshah18aak",
      "outdoorUnitId": "ou-kenmore-d5cshah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cerah09aaj-d5fehah09xcj",
      "slug": "kenmore-d5cerah09aaj-d5fehah09xcj",
      "modelId": "model-kenmore-d5cerah09aaj",
      "outdoorUnitId": "ou-kenmore-d5cerah09aaj",
      "indoorUnitId": "iu-d5fehah09xcj",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v48kaaa-ea5x61m24awallcon",
      "slug": "kenmore-b5h3v48kaaa-ea5x61m24awallcon",
      "modelId": "model-kenmore-b5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v48kaaa",
      "indoorUnitId": "iu-ea5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x48m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x48m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x48m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-fcma5b48l0cwallcon",
      "slug": "kenmore-cht5h3v36kaaa-fcma5b48l0cwallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-fcma5b48l0cwallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5clhah36aak-d5flcah36xak",
      "slug": "kenmore-d5clhah36aak-d5flcah36xak",
      "modelId": "model-kenmore-d5clhah36aak",
      "outdoorUnitId": "ou-kenmore-d5clhah36aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah12aak-d5fscah12xak",
      "slug": "kenmore-d5csrah12aak-d5fscah12xak",
      "modelId": "model-kenmore-d5csrah12aak",
      "outdoorUnitId": "ou-kenmore-d5csrah12aak",
      "indoorUnitId": "iu-d5fscah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah24aak-d5fshah24xak",
      "slug": "kenmore-d5cshah24aak-d5fshah24xak",
      "modelId": "model-kenmore-d5cshah24aak",
      "outdoorUnitId": "ou-kenmore-d5cshah24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah24aak-d5fcfah24xak",
      "slug": "kenmore-d5csrah24aak-d5fcfah24xak",
      "modelId": "model-kenmore-d5csrah24aak",
      "outdoorUnitId": "ou-kenmore-d5csrah24aak",
      "indoorUnitId": "iu-d5fcfah24xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmhbh48eak-iu-46814",
      "slug": "kenmore-dlcmhbh48eak-iu-46814",
      "modelId": "model-kenmore-dlcmhbh48eak",
      "outdoorUnitId": "ou-kenmore-dlcmhbh48eak",
      "indoorUnitId": "iu-iu-46814",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmrbh48eak-iu-46817",
      "slug": "kenmore-dlcmrbh48eak-iu-46817",
      "modelId": "model-kenmore-dlcmrbh48eak",
      "outdoorUnitId": "ou-kenmore-dlcmrbh48eak",
      "indoorUnitId": "iu-iu-46817",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh30aak-dlfshbh30xak",
      "slug": "kenmore-dlcsrbh30aak-dlfshbh30xak",
      "modelId": "model-kenmore-dlcsrbh30aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh30aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-jhc48c5cg2ss1cc",
      "slug": "kenmore-xh960e2c11-jhc48c5cg2ss1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60d5cgs1jmc20d2sn1cc",
      "slug": "kenmore-xh960e2c11-ctf60d5cgs1jmc20d2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60c5cgs2jmc16c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctm60c5cgs2jmc16c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60c5cgs1jmc16c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctm60c5cgs1jmc16c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60c5cgs2cc",
      "slug": "kenmore-xh960e2c11-ctm60c5cgs2cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60c5cgs1cc",
      "slug": "kenmore-xh960e2c11-ctf60c5cgs1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evm5x60m24awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evm5x60m24awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evm5x60m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x42m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x42m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x42m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x36m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x36m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x36m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60d5cgs2jmc20d2sn1cc",
      "slug": "kenmore-xh960e2c11-ctm60d5cgs2jmc20d2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60c5cgs1jmc16c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctf60c5cgs1jmc16c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x30m14awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x30m14awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x30m14awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60c5cgs1cc",
      "slug": "kenmore-xh960e2c11-ctm60c5cgs1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60c5cgs2jmc16c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctf60c5cgs2jmc16c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60d5cgs1jmc20d2sn1cc",
      "slug": "kenmore-xh960e2c11-ctm60d5cgs1jmc20d2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60c5cgs2cc",
      "slug": "kenmore-xh960e2c11-ctf60c5cgs2cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60d5cgs2jmc20d2sn1cc",
      "slug": "kenmore-xh960e2c11-ctf60d5cgs2jmc20d2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x36m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x36m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x36m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x30m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x30m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x30m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-jsc48c5cg2ss1cc",
      "slug": "kenmore-xh960e2c11-jsc48c5cg2ss1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x37m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x37m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x37m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x42m21awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x42m21awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x42m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-jhc48d5cg2ss1cc",
      "slug": "kenmore-xh960e2c11-jhc48d5cg2ss1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x25m14awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x25m14awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x25m14awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x24m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x24m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x24m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evd5x60m24awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evd5x60m24awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evd5x60m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evd5x49m24awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evd5x49m24awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evd5x49m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-ea5x48m21awallcon",
      "slug": "kenmore-cht5h3v48kaaa-ea5x48m21awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-ea5x48m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evd5x61m24awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evd5x61m24awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evd5x61m24awallcon",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evm5x61m24awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evm5x61m24awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evm5x61m24awallcon",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x25m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x25m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x25m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh30aak11-dlfshbh30xak",
      "slug": "kenmore-dlcsrbh30aak11-dlfshbh30xak",
      "modelId": "model-kenmore-dlcsrbh30aak11",
      "outdoorUnitId": "ou-kenmore-dlcsrbh30aak11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x36m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x36m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x36m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmrbh18bak-iu-46815",
      "slug": "kenmore-dlcmrbh18bak-iu-46815",
      "modelId": "model-kenmore-dlcmrbh18bak",
      "outdoorUnitId": "ou-kenmore-dlcmrbh18bak",
      "indoorUnitId": "iu-iu-46815",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcerbh30aak-dlfehbh30xak",
      "slug": "kenmore-dlcerbh30aak-dlfehbh30xak",
      "modelId": "model-kenmore-dlcerbh30aak",
      "outdoorUnitId": "ou-kenmore-dlcerbh30aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x24m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x24m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x24m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v48kaaa-ea5x48m21awallcon",
      "slug": "kenmore-b5h3v48kaaa-ea5x48m21awallcon",
      "modelId": "model-kenmore-b5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v48kaaa",
      "indoorUnitId": "iu-ea5x48m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x42m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x42m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x42m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah18aak-d5fscah18xak",
      "slug": "kenmore-d5csrah18aak-d5fscah18xak",
      "modelId": "model-kenmore-d5csrah18aak",
      "outdoorUnitId": "ou-kenmore-d5csrah18aak",
      "indoorUnitId": "iu-d5fscah18xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.8,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah24aak-d5fscah24xak",
      "slug": "kenmore-d5cshah24aak-d5fscah24xak",
      "modelId": "model-kenmore-d5cshah24aak",
      "outdoorUnitId": "ou-kenmore-d5cshah24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah18aak-d5fsoah18xak",
      "slug": "kenmore-d5cshah18aak-d5fsoah18xak",
      "modelId": "model-kenmore-d5cshah18aak",
      "outdoorUnitId": "ou-kenmore-d5cshah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah09aak-d5fsdah12xhk",
      "slug": "kenmore-d5cshah09aak-d5fsdah12xhk",
      "modelId": "model-kenmore-d5cshah09aak",
      "outdoorUnitId": "ou-kenmore-d5cshah09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x60m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x60m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x60m24awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x48m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x48m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x48m21awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x48m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x48m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x48m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x42m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x42m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x42m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-fcma5b36l0cwallcon",
      "slug": "kenmore-b5h3v36kaaa-fcma5b36l0cwallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-fcma5b36l0cwallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh09aak-dlfsdah09xhk",
      "slug": "kenmore-dlcsrbh09aak-dlfsdah09xhk",
      "modelId": "model-kenmore-dlcsrbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh09aak-dlfscah09xak",
      "slug": "kenmore-dlcsrbh09aak-dlfscah09xak",
      "modelId": "model-kenmore-dlcsrbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah30aak-d5fshah30xak",
      "slug": "kenmore-d5csrah30aak-d5fshah30xak",
      "modelId": "model-kenmore-d5csrah30aak",
      "outdoorUnitId": "ou-kenmore-d5csrah30aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh18aak-dlfsfah18xak",
      "slug": "kenmore-dlcsrbh18aak-dlfsfah18xak",
      "modelId": "model-kenmore-dlcsrbh18aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x37m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x37m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x37m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah18aak-d5fcfah18xak",
      "slug": "kenmore-d5cshah18aak-d5fcfah18xak",
      "modelId": "model-kenmore-d5cshah18aak",
      "outdoorUnitId": "ou-kenmore-d5cshah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evm5x24m14awallcon",
      "slug": "kenmore-b5h3v24kaaa-evm5x24m14awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evm5x24m14awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x48m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x48m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x48m21awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x61m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x61m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x61m21awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x61m24awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x61m24awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x61m24awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x43m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x43m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x43m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x48m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x48m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x48m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x42m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x42m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x42m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x43m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x43m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x43m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x48m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x48m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x48m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x48m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x48m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x48m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-fcma5b36l0cwallcon",
      "slug": "kenmore-cht5h3v36kaaa-fcma5b36l0cwallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-fcma5b36l0cwallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh24aak-dlfsfah24xak",
      "slug": "kenmore-dlcsrbh24aak-dlfsfah24xak",
      "modelId": "model-kenmore-dlcsrbh24aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh24aak-dlfscbh24xak",
      "slug": "kenmore-dlcsrbh24aak-dlfscbh24xak",
      "modelId": "model-kenmore-dlcsrbh24aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x42m17awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x42m17awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x42m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x61m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x61m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x61m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x60m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x60m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x60m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x61m24awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x61m24awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x61m24awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-esh5x60m12awallcon",
      "slug": "kenmore-cht5h3v48kaaa-esh5x60m12awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-esh5x60m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x30m14awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x30m14awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x30m14awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-evd5x24m14awallcon",
      "slug": "kenmore-b5h3v24kaaa-evd5x24m14awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-evd5x24m14awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x24m17awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x24m17awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x24m17awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x42m17awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x42m17awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x42m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evd5x60m21awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evd5x60m21awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evd5x60m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evd5x61m21awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evd5x61m21awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evd5x61m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-esh5x48m12awallcon",
      "slug": "kenmore-cht5h3v48kaaa-esh5x48m12awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-esh5x48m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah24aak-d5fcfah24xak",
      "slug": "kenmore-d5cshah24aak-d5fcfah24xak",
      "modelId": "model-kenmore-d5cshah24aak",
      "outdoorUnitId": "ou-kenmore-d5cshah24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evm5x49m21awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evm5x49m21awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evm5x49m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evm5x60m21awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evm5x60m21awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evm5x60m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evd5x48m24awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evd5x48m24awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evd5x48m24awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-ea5x24m14awallcon",
      "slug": "kenmore-b5h3v24kaaa-ea5x24m14awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-ea5x24m14awallcon",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v48kaaa-esh5x60m12awallcon",
      "slug": "kenmore-b5h3v48kaaa-esh5x60m12awallcon",
      "modelId": "model-kenmore-b5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v48kaaa",
      "indoorUnitId": "iu-esh5x60m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v48kaaa-esh5x48m12awallcon",
      "slug": "kenmore-b5h3v48kaaa-esh5x48m12awallcon",
      "modelId": "model-kenmore-b5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v48kaaa",
      "indoorUnitId": "iu-esh5x48m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x37m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x37m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x37m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cerah18aak-d5fehah18xck",
      "slug": "kenmore-d5cerah18aak-d5fehah18xck",
      "modelId": "model-kenmore-d5cerah18aak",
      "outdoorUnitId": "ou-kenmore-d5cerah18aak",
      "indoorUnitId": "iu-d5fehah18xck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.3,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah12aak-d5fsdah12xhk",
      "slug": "kenmore-d5cshah12aak-d5fsdah12xhk",
      "modelId": "model-kenmore-d5cshah12aak",
      "outdoorUnitId": "ou-kenmore-d5cshah12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah18aak-d5fsfah16xak",
      "slug": "kenmore-d5cshah18aak-d5fsfah16xak",
      "modelId": "model-kenmore-d5cshah18aak",
      "outdoorUnitId": "ou-kenmore-d5cshah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5clhah36aak-d5fcfah36xak",
      "slug": "kenmore-d5clhah36aak-d5fcfah36xak",
      "modelId": "model-kenmore-d5clhah36aak",
      "outdoorUnitId": "ou-kenmore-d5clhah36aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh09aak-dlfsdah09xak",
      "slug": "kenmore-dlcsrbh09aak-dlfsdah09xak",
      "modelId": "model-kenmore-dlcsrbh09aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh09aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh30aak-dlfshch30xak",
      "slug": "kenmore-dlcsrbh30aak-dlfshch30xak",
      "modelId": "model-kenmore-dlcsrbh30aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh30aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmrbh36dak-iu-46816",
      "slug": "kenmore-dlcmrbh36dak-iu-46816",
      "modelId": "model-kenmore-dlcmrbh36dak",
      "outdoorUnitId": "ou-kenmore-dlcmrbh36dak",
      "indoorUnitId": "iu-iu-46816",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmtah27cak-iu-46819",
      "slug": "kenmore-dlcmtah27cak-iu-46819",
      "modelId": "model-kenmore-dlcmtah27cak",
      "outdoorUnitId": "ou-kenmore-dlcmtah27cak",
      "indoorUnitId": "iu-iu-46819",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmhbh36dak-iu-46813",
      "slug": "kenmore-dlcmhbh36dak-iu-46813",
      "modelId": "model-kenmore-dlcmhbh36dak",
      "outdoorUnitId": "ou-kenmore-dlcmhbh36dak",
      "indoorUnitId": "iu-iu-46813",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evm5x36m17awallcon",
      "slug": "kenmore-b5h3v36kaaa-evm5x36m17awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evm5x36m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v60kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-b5h3v60kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-b5h3v60kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v60kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aak-dlfsdah12xhk",
      "slug": "kenmore-dlcsrbh12aak-dlfsdah12xhk",
      "modelId": "model-kenmore-dlcsrbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah18aak-d5fsdah18xhk",
      "slug": "kenmore-d5csrah18aak-d5fsdah18xhk",
      "modelId": "model-kenmore-d5csrah18aak",
      "outdoorUnitId": "ou-kenmore-d5csrah18aak",
      "indoorUnitId": "iu-d5fsdah18xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah18aak-d5fscah18xak",
      "slug": "kenmore-d5cshah18aak-d5fscah18xak",
      "modelId": "model-kenmore-d5cshah18aak",
      "outdoorUnitId": "ou-kenmore-d5cshah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5clrah36aak-d5flcah36xak",
      "slug": "kenmore-d5clrah36aak-d5flcah36xak",
      "modelId": "model-kenmore-d5clrah36aak",
      "outdoorUnitId": "ou-kenmore-d5clrah36aak",
      "indoorUnitId": "iu-d5flcah36xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-esh5x30m12awallcon",
      "slug": "kenmore-b5h3v24kaaa-esh5x30m12awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-esh5x30m12awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-esh5x42m12awallcon",
      "slug": "kenmore-b5h3v24kaaa-esh5x42m12awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-esh5x42m12awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-esh5x36m12awallcon",
      "slug": "kenmore-b5h3v24kaaa-esh5x36m12awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-esh5x36m12awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-jhc60d5ch2ss1cc",
      "slug": "kenmore-xh960e2c11-jhc60d5ch2ss1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-evd5x36m17awallcon",
      "slug": "kenmore-b5h3v36kaaa-evd5x36m17awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-evd5x36m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x42m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x42m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x42m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah18aak-d5fsdah18xak",
      "slug": "kenmore-d5csrah18aak-d5fsdah18xak",
      "modelId": "model-kenmore-d5csrah18aak",
      "outdoorUnitId": "ou-kenmore-d5csrah18aak",
      "indoorUnitId": "iu-d5fsdah18xak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evd5x36m17awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evd5x36m17awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evd5x36m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-esh5x60m12awallcon",
      "slug": "kenmore-cht5h3v36kaaa-esh5x60m12awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-esh5x60m12awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v60kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-cht5h3v60kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-cht5h3v60kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v60kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evm5x48m21awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evm5x48m21awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evm5x48m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v48kaaa-evd5x48m21awallcon",
      "slug": "kenmore-cht5h3v48kaaa-evd5x48m21awallcon",
      "modelId": "model-kenmore-cht5h3v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v48kaaa",
      "indoorUnitId": "iu-evd5x48m21awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah12aak-d5fsdah12xak",
      "slug": "kenmore-d5cshah12aak-d5fsdah12xak",
      "modelId": "model-kenmore-d5cshah12aak",
      "outdoorUnitId": "ou-kenmore-d5cshah12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-evm5x36m17awallcon",
      "slug": "kenmore-cht5h3v36kaaa-evm5x36m17awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-evm5x36m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60d5chs1jmc20d2sn1cc",
      "slug": "kenmore-xh960e2c11-ctm60d5chs1jmc20d2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60c5chs1cc",
      "slug": "kenmore-xh960e2c11-ctf60c5chs1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60c5chs1jmc17c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctf60c5chs1jmc17c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctf60d5chs1jmc20d2sn1cc",
      "slug": "kenmore-xh960e2c11-ctf60d5chs1jmc20d2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60c5chs1jmc17c2sn1cc",
      "slug": "kenmore-xh960e2c11-ctm60c5chs1jmc17c2sn1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-ctm60c5chs1cc",
      "slug": "kenmore-xh960e2c11-ctm60c5chs1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x42m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x42m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x42m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh18aak-dlfscah18xak",
      "slug": "kenmore-dlcsrbh18aak-dlfscah18xak",
      "modelId": "model-kenmore-dlcsrbh18aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5clrah48aak-d5fcfah48xak",
      "slug": "kenmore-d5clrah48aak-d5fcfah48xak",
      "modelId": "model-kenmore-d5clrah48aak",
      "outdoorUnitId": "ou-kenmore-d5clrah48aak",
      "indoorUnitId": "iu-d5fcfah48xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.9,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh18aak-dlfsoah18xak",
      "slug": "kenmore-dlcsrbh18aak-dlfsoah18xak",
      "modelId": "model-kenmore-dlcsrbh18aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh18aak-dlfccah18xak",
      "slug": "kenmore-dlcsrbh18aak-dlfccah18xak",
      "modelId": "model-kenmore-dlcsrbh18aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah24aak-d5fsaah24xbk",
      "slug": "kenmore-d5csrah24aak-d5fsaah24xbk",
      "modelId": "model-kenmore-d5csrah24aak",
      "outdoorUnitId": "ou-kenmore-d5csrah24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah09aak-d5fsdah12xhk",
      "slug": "kenmore-d5csrah09aak-d5fsdah12xhk",
      "modelId": "model-kenmore-d5csrah09aak",
      "outdoorUnitId": "ou-kenmore-d5csrah09aak",
      "indoorUnitId": "iu-d5fsdah12xhk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah09aak-d5fsdah12xak",
      "slug": "kenmore-d5csrah09aak-d5fsdah12xak",
      "modelId": "model-kenmore-d5csrah09aak",
      "outdoorUnitId": "ou-kenmore-d5csrah09aak",
      "indoorUnitId": "iu-d5fsdah12xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.6,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah33aak-d5fshah33xak",
      "slug": "kenmore-d5cshah33aak-d5fshah33xak",
      "modelId": "model-kenmore-d5cshah33aak",
      "outdoorUnitId": "ou-kenmore-d5cshah33aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh12aak-dlfsdah12xak",
      "slug": "kenmore-dlcsrbh12aak-dlfsdah12xak",
      "modelId": "model-kenmore-dlcsrbh12aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh12aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evm5x61m24awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evm5x61m24awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evm5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x43m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x43m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x43m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcerbh18aak-dlfehbh18xak",
      "slug": "kenmore-dlcerbh18aak-dlfehbh18xak",
      "modelId": "model-kenmore-dlcerbh18aak",
      "outdoorUnitId": "ou-kenmore-dlcerbh18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evd5x61m24awallcon",
      "slug": "kenmore-b5h0v48kaaa-evd5x61m24awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evd5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evm5x61m24awallcon",
      "slug": "kenmore-b5h0v48kaaa-evm5x61m24awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evm5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v36kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-b5h0v36kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-b5h0v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v36kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v24kaaa-esh5x24m12awallcon",
      "slug": "kenmore-b5h3v24kaaa-esh5x24m12awallcon",
      "modelId": "model-kenmore-b5h3v24kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v24kaaa",
      "indoorUnitId": "iu-esh5x24m12awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah12aak-d5fsdah12xhk",
      "slug": "kenmore-d5csrah12aak-d5fsdah12xhk",
      "modelId": "model-kenmore-d5csrah12aak",
      "outdoorUnitId": "ou-kenmore-d5csrah12aak",
      "indoorUnitId": "iu-d5fsdah12xhk",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evd5x61m24awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evd5x61m24awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evd5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v36kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-cht5h0v36kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-cht5h0v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v36kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-cht5h0v48kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-esh5x48m12awallcon",
      "slug": "kenmore-b5h3v36kaaa-esh5x48m12awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-esh5x48m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x37m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x37m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x37m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-esh5x48m12awallcon",
      "slug": "kenmore-cht5h3v36kaaa-esh5x48m12awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-esh5x48m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-esh5x42m12awallcon",
      "slug": "kenmore-cht5h3v36kaaa-esh5x42m12awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-esh5x42m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x37m21awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x37m21awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x37m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x36m17awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x36m17awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x36m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-fcma5b60l0dwallcon",
      "slug": "kenmore-b5h0v48kaaa-fcma5b60l0dwallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-fcma5b60l0dwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evd5x61m21awallcon",
      "slug": "kenmore-b5h0v48kaaa-evd5x61m21awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evd5x61m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-esh5x42m12awallcon",
      "slug": "kenmore-b5h3v36kaaa-esh5x42m12awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-esh5x42m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-esh5x60m12awallcon",
      "slug": "kenmore-b5h3v36kaaa-esh5x60m12awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-esh5x60m12awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x43m21awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x43m21awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x43m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x36m17awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x36m17awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x36m17awallcon",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evd5x61m21awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evd5x61m21awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evd5x61m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cuhah18aak-d5muwaq18xa3",
      "slug": "kenmore-d5cuhah18aak-d5muwaq18xa3",
      "modelId": "model-kenmore-d5cuhah18aak",
      "outdoorUnitId": "ou-kenmore-d5cuhah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh24aak-dlfsdah24xak",
      "slug": "kenmore-dlcsrbh24aak-dlfsdah24xak",
      "modelId": "model-kenmore-dlcsrbh24aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcsrbh24aak-dlfsdah24xhk",
      "slug": "kenmore-dlcsrbh24aak-dlfsdah24xhk",
      "modelId": "model-kenmore-dlcsrbh24aak",
      "outdoorUnitId": "ou-kenmore-dlcsrbh24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah24aak-d5fsdah24xhk",
      "slug": "kenmore-d5cshah24aak-d5fsdah24xhk",
      "modelId": "model-kenmore-d5cshah24aak",
      "outdoorUnitId": "ou-kenmore-d5cshah24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5clrah48aak-d5flcah48xak",
      "slug": "kenmore-d5clrah48aak-d5flcah48xak",
      "modelId": "model-kenmore-d5clrah48aak",
      "outdoorUnitId": "ou-kenmore-d5clrah48aak",
      "indoorUnitId": "iu-d5flcah48xak",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.1,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evd5x49m24awallcon",
      "slug": "kenmore-b5h0v48kaaa-evd5x49m24awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evd5x49m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evm5x60m21awallcon",
      "slug": "kenmore-b5h0v48kaaa-evm5x60m21awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evm5x60m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evd5x60m24awallcon",
      "slug": "kenmore-b5h0v48kaaa-evd5x60m24awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evd5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evd5x60m21awallcon",
      "slug": "kenmore-b5h0v48kaaa-evd5x60m21awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evd5x60m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evd5x48m24awallcon",
      "slug": "kenmore-b5h0v48kaaa-evd5x48m24awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evd5x48m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5cds2jme16c2sn2",
      "slug": "kenmore-hh836e2s11-ctm36c5cds2jme16c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5cds2jme12c2sn2",
      "slug": "kenmore-hh836e2s11-ctm36c5cds2jme12c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5cds2jmc17c2sn1",
      "slug": "kenmore-hh836e2s11-ctm36c5cds2jmc17c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5cds2jmc16c2sn1",
      "slug": "kenmore-hh836e2s11-ctm36c5cds2jmc16c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5cds2",
      "slug": "kenmore-hh836e2s11-ctm36c5cds2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctm36c5cds2",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5cds1",
      "slug": "kenmore-hh836e2s11-ctm36c5cds1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5ads2jme16c2sn2",
      "slug": "kenmore-hh836e2s11-ctm36c5ads2jme16c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36b5ads2",
      "slug": "kenmore-hh836e2s11-ctf36b5ads2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36b5ads2jmc12b2sn1",
      "slug": "kenmore-hh836e2s11-ctf36b5ads2jmc12b2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctu36b5xds2jme08b2sn2txv",
      "slug": "kenmore-hh824e2s11-ctu36b5xds2jme08b2sn2txv",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctu36b5xds2jme12b2sn2txv",
      "slug": "kenmore-hh824e2s11-ctu36b5xds2jme12b2sn2txv",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctu36b5xds2txv",
      "slug": "kenmore-hh824e2s11-ctu36b5xds2txv",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-jhe24b5ac2ss1",
      "slug": "kenmore-hh824e2s11-jhe24b5ac2ss1",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-jhe24b5ac2ss2",
      "slug": "kenmore-hh824e2s11-jhe24b5ac2ss2",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36b5cds2jme12b2sn2",
      "slug": "kenmore-hh836e2s11-ctf36b5cds2jme12b2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36b5ads2jme12b2sn2",
      "slug": "kenmore-hh836e2s11-ctf36b5ads2jme12b2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36b5cds2",
      "slug": "kenmore-hh836e2s11-ctf36b5cds2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctf36b5cds2",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5ads2jmc16c2sn1",
      "slug": "kenmore-hh836e2s11-ctf36c5ads2jmc16c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5ads2",
      "slug": "kenmore-hh836e2s11-ctf36c5ads2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-jhe30b5ad2ss2",
      "slug": "kenmore-hh824e2s11-jhe30b5ad2ss2",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-jhe36b5ad2ss1",
      "slug": "kenmore-hh824e2s11-jhe36b5ad2ss1",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctu36b5xds2jmc12b2sn1txv",
      "slug": "kenmore-hh824e2s11-ctu36b5xds2jmc12b2sn1txv",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctf30b5acs2jmc12b2sn1cc",
      "slug": "kenmore-xh936e2c11-ctf30b5acs2jmc12b2sn1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-jhe36b5ad2ss2",
      "slug": "kenmore-hh824e2s11-jhe36b5ad2ss2",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctu36b5xds1txv",
      "slug": "kenmore-hh824e2s11-ctu36b5xds1txv",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctf30b5acs1cc",
      "slug": "kenmore-xh936e2c11-ctf30b5acs1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctm30b5acs1cc",
      "slug": "kenmore-xh936e2c11-ctm30b5acs1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctm30b5acs1jmc12b2sn1cc",
      "slug": "kenmore-xh936e2c11-ctm30b5acs1jmc12b2sn1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctm30b5acs2cc",
      "slug": "kenmore-xh936e2c11-ctm30b5acs2cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evm5x60m24awallcon",
      "slug": "kenmore-b5h0v48kaaa-evm5x60m24awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evm5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-fcma5b48l0cwallcon",
      "slug": "kenmore-b5h0v48kaaa-fcma5b48l0cwallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-fcma5b48l0cwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v60kaaa-ea5x61m24awallcon",
      "slug": "kenmore-b5h0v60kaaa-ea5x61m24awallcon",
      "modelId": "model-kenmore-b5h0v60kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v60kaaa",
      "indoorUnitId": "iu-ea5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5afs2",
      "slug": "kenmore-hh836e2s11-ctm48c5afs2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36b5cds2jmc12b2sn1",
      "slug": "kenmore-hh836e2s11-ctf36b5cds2jmc12b2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5ads2jmc17c2sn1",
      "slug": "kenmore-hh836e2s11-ctf36c5ads2jmc17c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5ads2jme12c2sn2",
      "slug": "kenmore-hh836e2s11-ctf36c5ads2jme12c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5ads2jme16c2sn2",
      "slug": "kenmore-hh836e2s11-ctf36c5ads2jme16c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5cds1",
      "slug": "kenmore-hh836e2s11-ctf36c5cds1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5cds2",
      "slug": "kenmore-hh836e2s11-ctf36c5cds2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctf36c5cds2",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5afs2jmc17c2sn1",
      "slug": "kenmore-hh836e2s11-ctf48c5afs2jmc17c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cvrah09aak-d5fvhah09xck",
      "slug": "kenmore-d5cvrah09aak-d5fvhah09xck",
      "modelId": "model-kenmore-d5cvrah09aak",
      "outdoorUnitId": "ou-kenmore-d5cvrah09aak",
      "indoorUnitId": "iu-d5fvhah09xck",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-esh5x36m12awallcon",
      "slug": "kenmore-cht5h3v36kaaa-esh5x36m12awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-esh5x36m12awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v60kaaa-evd5x61m21awallcon",
      "slug": "kenmore-cht5h0v60kaaa-evd5x61m21awallcon",
      "modelId": "model-kenmore-cht5h0v60kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v60kaaa",
      "indoorUnitId": "iu-evd5x61m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cvrah09aak-d5fvhah09xak",
      "slug": "kenmore-d5cvrah09aak-d5fvhah09xak",
      "modelId": "model-kenmore-d5cvrah09aak",
      "outdoorUnitId": "ou-kenmore-d5cvrah09aak",
      "indoorUnitId": "iu-d5fvhah09xak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah24aak-d5fsdah24xhk",
      "slug": "kenmore-d5csrah24aak-d5fsdah24xhk",
      "modelId": "model-kenmore-d5csrah24aak",
      "outdoorUnitId": "ou-kenmore-d5csrah24aak",
      "indoorUnitId": "iu-d5fsdah24xhk",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5afs2jme12c2sn2",
      "slug": "kenmore-hh836e2s11-ctf48c5afs2jme12c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v36kaaa-ea5x37m17awallcon",
      "slug": "kenmore-cht5h3v36kaaa-ea5x37m17awallcon",
      "modelId": "model-kenmore-cht5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v36kaaa",
      "indoorUnitId": "iu-ea5x37m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v60kaaa-evd5x61m24awallcon",
      "slug": "kenmore-cht5h0v60kaaa-evd5x61m24awallcon",
      "modelId": "model-kenmore-cht5h0v60kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v60kaaa",
      "indoorUnitId": "iu-evd5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v60kaaa-evm5x61m24awallcon",
      "slug": "kenmore-cht5h0v60kaaa-evm5x61m24awallcon",
      "modelId": "model-kenmore-cht5h0v60kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v60kaaa",
      "indoorUnitId": "iu-evm5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu48c5xfs1txv",
      "slug": "kenmore-hh836e2s11-ctu48c5xfs1txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1txv",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu36b5xds2txv",
      "slug": "kenmore-hh836e2s11-ctu36b5xds2txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu36b5xds2jme12b2sn2txv",
      "slug": "kenmore-hh836e2s11-ctu36b5xds2jme12b2sn2txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5cfs2jmc17c2sn1",
      "slug": "kenmore-hh836e2s11-ctm48c5cfs2jmc17c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5cfs2jmc16c2sn1",
      "slug": "kenmore-hh836e2s11-ctm48c5cfs2jmc16c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5cfs2",
      "slug": "kenmore-hh836e2s11-ctm48c5cfs2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5cfs1",
      "slug": "kenmore-hh836e2s11-ctm48c5cfs1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-jhe30b5ad2ss1",
      "slug": "kenmore-hh824e2s11-jhe30b5ad2ss1",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctf30b5acs1jmc12b2sn1cc",
      "slug": "kenmore-xh936e2c11-ctf30b5acs1jmc12b2sn1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-jhc36c5ad2ss1cc",
      "slug": "kenmore-xh936e2c11-jhc36c5ad2ss1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctm36b5ads2jmc12b2sn1cc",
      "slug": "kenmore-xh936e2c11-ctm36b5ads2jmc12b2sn1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
      "indoorUnitId": "iu-ctm36b5ads2jmc12b2sn1cc",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v60kaaa-evd5x61m21awallcon",
      "slug": "kenmore-b5h0v60kaaa-evd5x61m21awallcon",
      "modelId": "model-kenmore-b5h0v60kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v60kaaa",
      "indoorUnitId": "iu-evd5x61m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-jhc36b5ad2ss1cc",
      "slug": "kenmore-xh936e2c11-jhc36b5ad2ss1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evm5x49m21awallcon",
      "slug": "kenmore-b5h0v48kaaa-evm5x49m21awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evm5x49m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctf30b5acs2cc",
      "slug": "kenmore-xh936e2c11-ctf30b5acs2cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v36kaaa-fcma5b48l0cwallcon",
      "slug": "kenmore-b5h0v36kaaa-fcma5b48l0cwallcon",
      "modelId": "model-kenmore-b5h0v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v36kaaa",
      "indoorUnitId": "iu-fcma5b48l0cwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctf36b5ads2jmc12b2sn1cc",
      "slug": "kenmore-xh936e2c11-ctf36b5ads2jmc12b2sn1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctf36b5ads1jmc12b2sn1cc",
      "slug": "kenmore-xh936e2c11-ctf36b5ads1jmc12b2sn1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctm36b5ads1jmc12b2sn1cc",
      "slug": "kenmore-xh936e2c11-ctm36b5ads1jmc12b2sn1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-ctm30b5acs2jmc12b2sn1cc",
      "slug": "kenmore-xh936e2c11-ctm30b5acs2jmc12b2sn1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu36b5xds2jmc12b2sn1txv",
      "slug": "kenmore-hh836e2s11-ctu36b5xds2jmc12b2sn1txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctf36b5ads2",
      "slug": "kenmore-hh824e2s11-ctf36b5ads2",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu48c5xfs2jme12c2sn2txv",
      "slug": "kenmore-hh836e2s11-ctu48c5xfs2jme12c2sn2txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu48c5xfs2jmc17c2sn1txv",
      "slug": "kenmore-hh836e2s11-ctu48c5xfs2jmc17c2sn1txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu48c5xfs2txv",
      "slug": "kenmore-hh836e2s11-ctu48c5xfs2txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2txv",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu48c5xfs2jme16c2sn2txv",
      "slug": "kenmore-hh836e2s11-ctu48c5xfs2jme16c2sn2txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5cfs2jme16c2sn2",
      "slug": "kenmore-hh836e2s11-ctm48c5cfs2jme16c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5cfs2jme12c2sn2",
      "slug": "kenmore-hh836e2s11-ctm48c5cfs2jme12c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-jhe36c5cd2ss1",
      "slug": "kenmore-hh836e2s11-jhe36c5cd2ss1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctu48c5xfs2jmc16c2sn1txv",
      "slug": "kenmore-hh836e2s11-ctu48c5xfs2jmc16c2sn1txv",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5afs2jmc17c2sn1",
      "slug": "kenmore-hh836e2s11-ctm48c5afs2jmc17c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5afs2jmc16c2sn1",
      "slug": "kenmore-hh836e2s11-ctm48c5afs2jmc16c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v60kaaa-evd5x61m24awallcon",
      "slug": "kenmore-b5h0v60kaaa-evd5x61m24awallcon",
      "modelId": "model-kenmore-b5h0v60kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v60kaaa",
      "indoorUnitId": "iu-evd5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctf36b5ads2jme12b2sn2",
      "slug": "kenmore-hh824e2s11-ctf36b5ads2jme12b2sn2",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v60kaaa-evm5x61m24awallcon",
      "slug": "kenmore-b5h0v60kaaa-evm5x61m24awallcon",
      "modelId": "model-kenmore-b5h0v60kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v60kaaa",
      "indoorUnitId": "iu-evm5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-jhe36c5cd2ss2",
      "slug": "kenmore-hh836e2s11-jhe36c5cd2ss2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-jhe42c5cf2ss1",
      "slug": "kenmore-hh836e2s11-jhe42c5cf2ss1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cuhah18aak-d5fuaah18xak",
      "slug": "kenmore-d5cuhah18aak-d5fuaah18xak",
      "modelId": "model-kenmore-d5cuhah18aak",
      "outdoorUnitId": "ou-kenmore-d5cuhah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctm36b5ads2",
      "slug": "kenmore-hh824e2s11-ctm36b5ads2",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh960e2c11-jhc60c5ch2ss1cc",
      "slug": "kenmore-xh960e2c11-jhc60c5ch2ss1cc",
      "modelId": "model-kenmore-xh960e2c11",
      "outdoorUnitId": "ou-kenmore-xh960e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60c5cgs2jme16c2sn2",
      "slug": "kenmore-hh860e2s11-ctf60c5cgs2jme16c2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60c5chs1",
      "slug": "kenmore-hh860e2s11-ctf60c5chs1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60d5cgs2jmc20d2sn1",
      "slug": "kenmore-hh860e2s11-ctf60d5cgs2jmc20d2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60d5cgs2jme18d2sn2",
      "slug": "kenmore-hh860e2s11-ctf60d5cgs2jme18d2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60d5chs2",
      "slug": "kenmore-hh860e2s11-ctf60d5chs2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60c5cgs1",
      "slug": "kenmore-hh860e2s11-ctf60c5cgs1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cuhah18aak-d5fuhah24xak",
      "slug": "kenmore-d5cuhah18aak-d5fuhah24xak",
      "modelId": "model-kenmore-d5cuhah18aak",
      "outdoorUnitId": "ou-kenmore-d5cuhah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60c5cgs2jmc16c2sn1",
      "slug": "kenmore-hh860e2s11-ctf60c5cgs2jmc16c2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60d5cjs2",
      "slug": "kenmore-hh860e2s11-ctf60d5cjs2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60c5cgs2",
      "slug": "kenmore-hh860e2s11-ctf60c5cgs2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60d5cjs2jmc20d2sn1",
      "slug": "kenmore-hh860e2s11-ctf60d5cjs2jmc20d2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60d5cjs2jme18d2sn2",
      "slug": "kenmore-hh860e2s11-ctf60d5cjs2jme18d2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60c5chs2jmc17c2sn1",
      "slug": "kenmore-hh860e2s11-ctf60c5chs2jmc17c2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60c5chs2jme16c2sn2",
      "slug": "kenmore-hh860e2s11-ctf60c5chs2jme16c2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctf30a5ads2",
      "slug": "kenmore-hh824e2s11-ctf30a5ads2",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctf36b5ads2jmc12b2sn1",
      "slug": "kenmore-hh824e2s11-ctf36b5ads2jmc12b2sn1",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctf36b5ads2jme08b2sn2",
      "slug": "kenmore-hh824e2s11-ctf36b5ads2jme08b2sn2",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctf36b5ads1",
      "slug": "kenmore-hh824e2s11-ctf36b5ads1",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh824e2s11-ctm36b5ads1",
      "slug": "kenmore-hh824e2s11-ctm36b5ads1",
      "modelId": "model-kenmore-hh824e2s11",
      "outdoorUnitId": "ou-kenmore-hh824e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5afs2jme12c2sn2",
      "slug": "kenmore-hh836e2s11-ctm48c5afs2jme12c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm48c5afs2jme16c2sn2",
      "slug": "kenmore-hh836e2s11-ctm48c5afs2jme16c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-jhc36c5cd2ss1",
      "slug": "kenmore-hh836e2s11-jhc36c5cd2ss1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-jhe36b5cd2ss1",
      "slug": "kenmore-hh836e2s11-jhe36b5cd2ss1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-jhe36c5ad2ss2",
      "slug": "kenmore-hh836e2s11-jhe36c5ad2ss2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60d5chs2jme18d2sn2",
      "slug": "kenmore-hh860e2s11-ctf60d5chs2jme18d2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v60kaaa-ea5x61m24awallcon",
      "slug": "kenmore-b5h3v60kaaa-ea5x61m24awallcon",
      "modelId": "model-kenmore-b5h3v60kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v60kaaa",
      "indoorUnitId": "iu-ea5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60c5chs2jme16c2sn2",
      "slug": "kenmore-hh860e2s11-ctm60c5chs2jme16c2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60d5chs2jmc20d2sn1",
      "slug": "kenmore-hh860e2s11-ctf60d5chs2jmc20d2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60c5chs2jmc17c2sn1",
      "slug": "kenmore-hh860e2s11-ctm60c5chs2jmc17c2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60c5chs2",
      "slug": "kenmore-hh860e2s11-ctm60c5chs2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60c5cgs2jme16c2sn2",
      "slug": "kenmore-hh860e2s11-ctm60c5cgs2jme16c2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60c5chs1",
      "slug": "kenmore-hh860e2s11-ctm60c5chs1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctf60c5chs2",
      "slug": "kenmore-hh860e2s11-ctf60c5chs2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60c5cgs2",
      "slug": "kenmore-hh860e2s11-ctm60c5cgs2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-esh5x36m12awallcon",
      "slug": "kenmore-b5h3v36kaaa-esh5x36m12awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-esh5x36m12awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60d5chs2",
      "slug": "kenmore-hh860e2s11-ctm60d5chs2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5csrah12aak-d5fsdah12xak",
      "slug": "kenmore-d5csrah12aak-d5fsdah12xak",
      "modelId": "model-kenmore-d5csrah12aak",
      "outdoorUnitId": "ou-kenmore-d5csrah12aak",
      "indoorUnitId": "iu-d5fsdah12xak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h3v36kaaa-ea5x37m17awallcon",
      "slug": "kenmore-b5h3v36kaaa-ea5x37m17awallcon",
      "modelId": "model-kenmore-b5h3v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h3v36kaaa",
      "indoorUnitId": "iu-ea5x37m17awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v60kaaa-ea5x61m24awallcon",
      "slug": "kenmore-cht5h3v60kaaa-ea5x61m24awallcon",
      "modelId": "model-kenmore-cht5h3v60kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v60kaaa",
      "indoorUnitId": "iu-ea5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h3v60kaaa-ea5x60m24awallcon",
      "slug": "kenmore-cht5h3v60kaaa-ea5x60m24awallcon",
      "modelId": "model-kenmore-cht5h3v60kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h3v60kaaa",
      "indoorUnitId": "iu-ea5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60c5cgs2jmc17c2sn1",
      "slug": "kenmore-hh860e2s11-ctm60c5cgs2jmc17c2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jhe60d5ch2ss2",
      "slug": "kenmore-hh860e2s11-jhe60d5ch2ss2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60d5cjs2jmc20d2sn1",
      "slug": "kenmore-hh860e2s11-ctm60d5cjs2jmc20d2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60d5cjs2jme18d2sn2",
      "slug": "kenmore-hh860e2s11-ctm60d5cjs2jme18d2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctu60c5xgs1txv",
      "slug": "kenmore-hh860e2s11-ctu60c5xgs1txv",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctu60c5xgs2jmc16c2sn1txv",
      "slug": "kenmore-hh860e2s11-ctu60c5xgs2jmc16c2sn1txv",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctu60c5xgs2jme16c2sn2txv",
      "slug": "kenmore-hh860e2s11-ctu60c5xgs2jme16c2sn2txv",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctu60c5xgs2txv",
      "slug": "kenmore-hh860e2s11-ctu60c5xgs2txv",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jhe48c5cg2ss1",
      "slug": "kenmore-hh860e2s11-jhe48c5cg2ss1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jhe48c5cg2ss2",
      "slug": "kenmore-hh860e2s11-jhe48c5cg2ss2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jhe48d5cg2ss1",
      "slug": "kenmore-hh860e2s11-jhe48d5cg2ss1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jhe60c5ch2ss1",
      "slug": "kenmore-hh860e2s11-jhe60c5ch2ss1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60d5chs2jmc20d2sn1",
      "slug": "kenmore-hh860e2s11-ctm60d5chs2jmc20d2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60d5chs2jme18d2sn2",
      "slug": "kenmore-hh860e2s11-ctm60d5chs2jme18d2sn2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60d5cjs2",
      "slug": "kenmore-hh860e2s11-ctm60d5cjs2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-ctm60c5cgs2jmc16c2sn1",
      "slug": "kenmore-hh860e2s11-ctm60c5cgs2jmc16c2sn1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jse48c5cg2ss1",
      "slug": "kenmore-hh860e2s11-jse48c5cg2ss1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jhe60d5cj2ss1",
      "slug": "kenmore-hh860e2s11-jhe60d5cj2ss1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jhe60d5ch2ss1",
      "slug": "kenmore-hh860e2s11-jhe60d5ch2ss1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jhe60c5ch2ss2",
      "slug": "kenmore-hh860e2s11-jhe60c5ch2ss2",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh860e2s11-jse60d5cj2ss1",
      "slug": "kenmore-hh860e2s11-jse60d5cj2ss1",
      "modelId": "model-kenmore-hh860e2s11",
      "outdoorUnitId": "ou-kenmore-hh860e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5cfs2jme16c2sn2",
      "slug": "kenmore-hh836e2s11-ctf48c5cfs2jme16c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5cds2jmc16c2sn1",
      "slug": "kenmore-hh836e2s11-ctf36c5cds2jmc16c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5cds2jmc17c2sn1",
      "slug": "kenmore-hh836e2s11-ctf36c5cds2jmc17c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5ads2jmc17c2sn1",
      "slug": "kenmore-hh836e2s11-ctm36c5ads2jmc17c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5ads2jme12c2sn2",
      "slug": "kenmore-hh836e2s11-ctm36c5ads2jme12c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5afs2jme16c2sn2",
      "slug": "kenmore-hh836e2s11-ctf48c5afs2jme16c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5cfs1",
      "slug": "kenmore-hh836e2s11-ctf48c5cfs1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5cds2jme12c2sn2",
      "slug": "kenmore-hh836e2s11-ctf36c5cds2jme12c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf36c5cds2jme16c2sn2",
      "slug": "kenmore-hh836e2s11-ctf36c5cds2jme16c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5afs2",
      "slug": "kenmore-hh836e2s11-ctf48c5afs2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5afs2jmc16c2sn1",
      "slug": "kenmore-hh836e2s11-ctf48c5afs2jmc16c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5cfs2jme12c2sn2",
      "slug": "kenmore-hh836e2s11-ctf48c5cfs2jme12c2sn2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5cfs2jmc17c2sn1",
      "slug": "kenmore-hh836e2s11-ctf48c5cfs2jmc17c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5cfs2jmc16c2sn1",
      "slug": "kenmore-hh836e2s11-ctf48c5cfs2jmc16c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctf48c5cfs2",
      "slug": "kenmore-hh836e2s11-ctf48c5cfs2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evm5x60m24awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evm5x60m24awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evm5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5ads2",
      "slug": "kenmore-hh836e2s11-ctm36c5ads2",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evm5x49m21awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evm5x49m21awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evm5x49m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evm5x60m21awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evm5x60m21awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evm5x60m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-fcma5b48l0cwallcon",
      "slug": "kenmore-cht5h0v48kaaa-fcma5b48l0cwallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-fcma5b48l0cwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-hh836e2s11-ctm36c5ads2jmc16c2sn1",
      "slug": "kenmore-hh836e2s11-ctm36c5ads2jmc16c2sn1",
      "modelId": "model-kenmore-hh836e2s11",
      "outdoorUnitId": "ou-kenmore-hh836e2s11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evd5x60m21awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evd5x60m21awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evd5x60m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v60kaaa-ea5x61m24awallcon",
      "slug": "kenmore-cht5h0v60kaaa-ea5x61m24awallcon",
      "modelId": "model-kenmore-cht5h0v60kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v60kaaa",
      "indoorUnitId": "iu-ea5x61m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evd5x60m24awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evd5x60m24awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evd5x60m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evd5x48m24awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evd5x48m24awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evd5x48m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v48kaaa-evd5x49m24awallcon",
      "slug": "kenmore-cht5h0v48kaaa-evd5x49m24awallcon",
      "modelId": "model-kenmore-cht5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v48kaaa",
      "indoorUnitId": "iu-evd5x49m24awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v36kaaa-fcma5b48l0cwallcon",
      "slug": "kenmore-cht5h0v36kaaa-fcma5b48l0cwallcon",
      "modelId": "model-kenmore-cht5h0v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v36kaaa",
      "indoorUnitId": "iu-fcma5b48l0cwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlclrch48aak-dlflfah48xak",
      "slug": "kenmore-dlclrch48aak-dlflfah48xak",
      "modelId": "model-kenmore-dlclrch48aak",
      "outdoorUnitId": "ou-kenmore-dlclrch48aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cshah24aak-d5fsaah24xbk",
      "slug": "kenmore-d5cshah24aak-d5fsaah24xbk",
      "modelId": "model-kenmore-d5cshah24aak",
      "outdoorUnitId": "ou-kenmore-d5cshah24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmtah36eak-iu-46743",
      "slug": "kenmore-d5cmtah36eak-iu-46743",
      "modelId": "model-kenmore-d5cmtah36eak",
      "outdoorUnitId": "ou-kenmore-d5cmtah36eak",
      "indoorUnitId": "iu-iu-46743",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.8,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5curah18aak-d5fuaah18xak",
      "slug": "kenmore-d5curah18aak-d5fuaah18xak",
      "modelId": "model-kenmore-d5curah18aak",
      "outdoorUnitId": "ou-kenmore-d5curah18aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5clhah48aak-d5fcfah48xak",
      "slug": "kenmore-d5clhah48aak-d5fcfah48xak",
      "modelId": "model-kenmore-d5clhah48aak",
      "outdoorUnitId": "ou-kenmore-d5clhah48aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cmtah48fak-iu-46744",
      "slug": "kenmore-d5cmtah48fak-iu-46744",
      "modelId": "model-kenmore-d5cmtah48fak",
      "outdoorUnitId": "ou-kenmore-d5cmtah48fak",
      "indoorUnitId": "iu-iu-46744",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.7,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-dlcmtah48eak-iu-46820",
      "slug": "kenmore-dlcmtah48eak-iu-46820",
      "modelId": "model-kenmore-dlcmtah48eak",
      "outdoorUnitId": "ou-kenmore-dlcmtah48eak",
      "indoorUnitId": "iu-iu-46820",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5cuhah24aak-d5fuhah24xak",
      "slug": "kenmore-d5cuhah24aak-d5fuhah24xak",
      "modelId": "model-kenmore-d5cuhah24aak",
      "outdoorUnitId": "ou-kenmore-d5cuhah24aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-d5curah30aak-d5muwaq30xa3",
      "slug": "kenmore-d5curah30aak-d5muwaq30xa3",
      "modelId": "model-kenmore-d5curah30aak",
      "outdoorUnitId": "ou-kenmore-d5curah30aak",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-xh936e2c11-jhc24b5ac2ss1cc",
      "slug": "kenmore-xh936e2c11-jhc24b5ac2ss1cc",
      "modelId": "model-kenmore-xh936e2c11",
      "outdoorUnitId": "ou-kenmore-xh936e2c11",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v36kaaa-fcma5b36l0cwallcon",
      "slug": "kenmore-b5h0v36kaaa-fcma5b36l0cwallcon",
      "modelId": "model-kenmore-b5h0v36kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v36kaaa",
      "indoorUnitId": "iu-fcma5b36l0cwallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-cht5h0v36kaaa-ea5x61m21awallcon",
      "slug": "kenmore-cht5h0v36kaaa-ea5x61m21awallcon",
      "modelId": "model-kenmore-cht5h0v36kaaa",
      "outdoorUnitId": "ou-kenmore-cht5h0v36kaaa",
      "indoorUnitId": "iu-ea5x61m21awallcon",
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
          "sourceId": "src-kenmore-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kenmore-b5h0v48kaaa-evd5x48m21awallcon",
      "slug": "kenmore-b5h0v48kaaa-evd5x48m21awallcon",
      "modelId": "model-kenmore-b5h0v48kaaa",
      "outdoorUnitId": "ou-kenmore-b5h0v48kaaa",
      "indoorUnitId": "iu-evd5x48m21awallcon",
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
          "sourceId": "src-kenmore-epa",
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
