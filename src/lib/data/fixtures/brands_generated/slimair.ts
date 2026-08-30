import type { BrandDataset } from "../../types";

export const brand_slimairDataset: BrandDataset = {
  "brand": {
    "id": "brand-slimair",
    "slug": "slimair",
    "name": "SLIMAIR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour SLIMAIR",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-slimair-epa",
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
      "id": "series-slimair-shc-series",
      "slug": "slimair-shc-series",
      "name": "SHC series",
      "brandId": "brand-slimair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SHC series de SLIMAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-slimair-shd-series",
      "slug": "slimair-shd-series",
      "name": "SHD Series",
      "brandId": "brand-slimair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SHD Series de SLIMAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-slimair-shcd09vc2ag",
      "slug": "slimair-shcd09vc2ag",
      "name": "SLIMAIR SHCD09VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHCD09VC2AG",
      "normalizedModelNumber": "shcd09vc2ag",
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
      "id": "model-slimair-shc09vh2ag",
      "slug": "slimair-shc09vh2ag",
      "name": "SLIMAIR SHC09VH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09VH2AG",
      "normalizedModelNumber": "shc09vh2ag",
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
      "id": "model-slimair-shc09ah2ag",
      "slug": "slimair-shc09ah2ag",
      "name": "SLIMAIR SHC09AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09AH2AG",
      "normalizedModelNumber": "shc09ah2ag",
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
      "id": "model-slimair-shc06ah2ag",
      "slug": "slimair-shc06ah2ag",
      "name": "SLIMAIR SHC06AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC06AH2AG",
      "normalizedModelNumber": "shc06ah2ag",
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
      "id": "model-slimair-shc09ae2ag",
      "slug": "slimair-shc09ae2ag",
      "name": "SLIMAIR SHC09AE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09AE2AG",
      "normalizedModelNumber": "shc09ae2ag",
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
      "id": "model-slimair-shc09ae1ag",
      "slug": "slimair-shc09ae1ag",
      "name": "SLIMAIR SHC09AE1AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09AE1AG",
      "normalizedModelNumber": "shc09ae1ag",
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
      "id": "model-slimair-shc12ah2ag",
      "slug": "slimair-shc12ah2ag",
      "name": "SLIMAIR SHC12AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC12AH2AG",
      "normalizedModelNumber": "shc12ah2ag",
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
      "id": "model-slimair-shc18ae2ag",
      "slug": "slimair-shc18ae2ag",
      "name": "SLIMAIR SHC18AE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC18AE2AG",
      "normalizedModelNumber": "shc18ae2ag",
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
      "id": "model-slimair-shc18ve2ag",
      "slug": "slimair-shc18ve2ag",
      "name": "SLIMAIR SHC18VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC18VE2AG",
      "normalizedModelNumber": "shc18ve2ag",
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
      "id": "model-slimair-shc09ve2ag",
      "slug": "slimair-shc09ve2ag",
      "name": "SLIMAIR SHC09VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09VE2AG",
      "normalizedModelNumber": "shc09ve2ag",
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
      "id": "model-slimair-shc24ae2ag",
      "slug": "slimair-shc24ae2ag",
      "name": "SLIMAIR SHC24AE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC24AE2AG",
      "normalizedModelNumber": "shc24ae2ag",
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
      "id": "model-slimair-shc3z27vc2ag",
      "slug": "slimair-shc3z27vc2ag",
      "name": "SLIMAIR SHC3Z27VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC3Z27VC2AG",
      "normalizedModelNumber": "shc3z27vc2ag",
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
      "id": "model-slimair-shc12ae1ag",
      "slug": "slimair-shc12ae1ag",
      "name": "SLIMAIR SHC12AE1AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC12AE1AG",
      "normalizedModelNumber": "shc12ae1ag",
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
      "id": "model-slimair-shc12ve2ag",
      "slug": "slimair-shc12ve2ag",
      "name": "SLIMAIR SHC12VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC12VE2AG",
      "normalizedModelNumber": "shc12ve2ag",
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
      "id": "model-slimair-shc12ae2ag",
      "slug": "slimair-shc12ae2ag",
      "name": "SLIMAIR SHC12AE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC12AE2AG",
      "normalizedModelNumber": "shc12ae2ag",
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
      "id": "model-slimair-shc12vh2ag",
      "slug": "slimair-shc12vh2ag",
      "name": "SLIMAIR SHC12VH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC12VH2AG",
      "normalizedModelNumber": "shc12vh2ag",
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
      "id": "model-slimair-shc5z36ac2ag",
      "slug": "slimair-shc5z36ac2ag",
      "name": "SLIMAIR SHC5Z36AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC5Z36AC2AG",
      "normalizedModelNumber": "shc5z36ac2ag",
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
      "id": "model-slimair-shcd12vc2ag",
      "slug": "slimair-shcd12vc2ag",
      "name": "SLIMAIR SHCD12VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHCD12VC2AG",
      "normalizedModelNumber": "shcd12vc2ag",
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
      "id": "model-slimair-shc4z27ac2ag",
      "slug": "slimair-shc4z27ac2ag",
      "name": "SLIMAIR SHC4Z27AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC4Z27AC2AG",
      "normalizedModelNumber": "shc4z27ac2ag",
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
      "id": "model-slimair-shc3z18ac2ag",
      "slug": "slimair-shc3z18ac2ag",
      "name": "SLIMAIR SHC3Z18AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC3Z18AC2AG",
      "normalizedModelNumber": "shc3z18ac2ag",
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
      "id": "model-slimair-shc09ve1ag",
      "slug": "slimair-shc09ve1ag",
      "name": "SLIMAIR SHC09VE1AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09VE1AG",
      "normalizedModelNumber": "shc09ve1ag",
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
      "id": "model-slimair-shc12ve1ag",
      "slug": "slimair-shc12ve1ag",
      "name": "SLIMAIR SHC12VE1AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC12VE1AG",
      "normalizedModelNumber": "shc12ve1ag",
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
      "id": "model-slimair-shc3z27ve2ag",
      "slug": "slimair-shc3z27ve2ag",
      "name": "SLIMAIR SHC3Z27VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC3Z27VE2AG",
      "normalizedModelNumber": "shc3z27ve2ag",
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
      "id": "model-slimair-shc24ah2ag",
      "slug": "slimair-shc24ah2ag",
      "name": "SLIMAIR SHC24AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC24AH2AG",
      "normalizedModelNumber": "shc24ah2ag",
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
      "id": "model-slimair-shc24vh2ag",
      "slug": "slimair-shc24vh2ag",
      "name": "SLIMAIR SHC24VH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC24VH2AG",
      "normalizedModelNumber": "shc24vh2ag",
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
      "id": "model-slimair-shc30ab2ab",
      "slug": "slimair-shc30ab2ab",
      "name": "SLIMAIR SHC30AB2AB",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC30AB2AB",
      "normalizedModelNumber": "shc30ab2ab",
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
      "id": "model-slimair-shcd24vc2ag",
      "slug": "slimair-shcd24vc2ag",
      "name": "SLIMAIR SHCD24VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHCD24VC2AG",
      "normalizedModelNumber": "shcd24vc2ag",
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
      "id": "model-slimair-shc18vh2ag",
      "slug": "slimair-shc18vh2ag",
      "name": "SLIMAIR SHC18VH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC18VH2AG",
      "normalizedModelNumber": "shc18vh2ag",
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
      "id": "model-slimair-shcd18vc2ag",
      "slug": "slimair-shcd18vc2ag",
      "name": "SLIMAIR SHCD18VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHCD18VC2AG",
      "normalizedModelNumber": "shcd18vc2ag",
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
      "id": "model-slimair-shc18ah2ag",
      "slug": "slimair-shc18ah2ag",
      "name": "SLIMAIR SHC18AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC18AH2AG",
      "normalizedModelNumber": "shc18ah2ag",
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
      "id": "model-slimair-shc09vc2ag",
      "slug": "slimair-shc09vc2ag",
      "name": "SLIMAIR SHC09VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09VC2AG",
      "normalizedModelNumber": "shc09vc2ag",
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
      "id": "model-slimair-shc09ac2ag",
      "slug": "slimair-shc09ac2ag",
      "name": "SLIMAIR SHC09AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09AC2AG",
      "normalizedModelNumber": "shc09ac2ag",
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
      "id": "model-slimair-shc5z36ah2ag",
      "slug": "slimair-shc5z36ah2ag",
      "name": "SLIMAIR SHC5Z36AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC5Z36AH2AG",
      "normalizedModelNumber": "shc5z36ah2ag",
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
      "id": "model-slimair-shc24ve2ag",
      "slug": "slimair-shc24ve2ag",
      "name": "SLIMAIR SHC24VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC24VE2AG",
      "normalizedModelNumber": "shc24ve2ag",
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
      "id": "model-slimair-shc09vc1ag",
      "slug": "slimair-shc09vc1ag",
      "name": "SLIMAIR SHC09VC1AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09VC1AG",
      "normalizedModelNumber": "shc09vc1ag",
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
      "id": "model-slimair-shc09ac1ag",
      "slug": "slimair-shc09ac1ag",
      "name": "SLIMAIR SHC09AC1AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC09AC1AG",
      "normalizedModelNumber": "shc09ac1ag",
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
      "id": "model-slimair-shc6z55ah2ag",
      "slug": "slimair-shc6z55ah2ag",
      "name": "SLIMAIR SHC6Z55AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC6Z55AH2AG",
      "normalizedModelNumber": "shc6z55ah2ag",
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
      "id": "model-slimair-shc6z48ac2ag",
      "slug": "slimair-shc6z48ac2ag",
      "name": "SLIMAIR SHC6Z48AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC6Z48AC2AG",
      "normalizedModelNumber": "shc6z48ac2ag",
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
      "id": "model-slimair-shc5z48ve2ag",
      "slug": "slimair-shc5z48ve2ag",
      "name": "SLIMAIR SHC5Z48VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC5Z48VE2AG",
      "normalizedModelNumber": "shc5z48ve2ag",
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
      "id": "model-slimair-shc36ah2ag",
      "slug": "slimair-shc36ah2ag",
      "name": "SLIMAIR SHC36AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC36AH2AG",
      "normalizedModelNumber": "shc36ah2ag",
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
      "id": "model-slimair-shc6z48ah2ag",
      "slug": "slimair-shc6z48ah2ag",
      "name": "SLIMAIR SHC6Z48AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC6Z48AH2AG",
      "normalizedModelNumber": "shc6z48ah2ag",
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
      "id": "model-slimair-shc5z48vc2ag",
      "slug": "slimair-shc5z48vc2ag",
      "name": "SLIMAIR SHC5Z48VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC5Z48VC2AG",
      "normalizedModelNumber": "shc5z48vc2ag",
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
      "id": "model-slimair-shc4z27ah2ag",
      "slug": "slimair-shc4z27ah2ag",
      "name": "SLIMAIR SHC4Z27AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC4Z27AH2AG",
      "normalizedModelNumber": "shc4z27ah2ag",
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
      "id": "model-slimair-shc3z18ah2ag",
      "slug": "slimair-shc3z18ah2ag",
      "name": "SLIMAIR SHC3Z18AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC3Z18AH2AG",
      "normalizedModelNumber": "shc3z18ah2ag",
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
      "id": "model-slimair-shc2z18vc2ag",
      "slug": "slimair-shc2z18vc2ag",
      "name": "SLIMAIR SHC2Z18VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC2Z18VC2AG",
      "normalizedModelNumber": "shc2z18vc2ag",
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
      "id": "model-slimair-shc2z18ve2ag",
      "slug": "slimair-shc2z18ve2ag",
      "name": "SLIMAIR SHC2Z18VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC2Z18VE2AG",
      "normalizedModelNumber": "shc2z18ve2ag",
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
      "id": "model-slimair-shc18ac2ag",
      "slug": "slimair-shc18ac2ag",
      "name": "SLIMAIR SHC18AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC18AC2AG",
      "normalizedModelNumber": "shc18ac2ag",
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
      "id": "model-slimair-shc30ah2ag",
      "slug": "slimair-shc30ah2ag",
      "name": "SLIMAIR SHC30AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC30AH2AG",
      "normalizedModelNumber": "shc30ah2ag",
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
      "id": "model-slimair-shc4z36vc2ag",
      "slug": "slimair-shc4z36vc2ag",
      "name": "SLIMAIR SHC4Z36VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC4Z36VC2AG",
      "normalizedModelNumber": "shc4z36vc2ag",
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
      "id": "model-slimair-shc4z36ve2ag",
      "slug": "slimair-shc4z36ve2ag",
      "name": "SLIMAIR SHC4Z36VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC4Z36VE2AG",
      "normalizedModelNumber": "shc4z36ve2ag",
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
      "id": "model-slimair-shc5z55ve2ag",
      "slug": "slimair-shc5z55ve2ag",
      "name": "SLIMAIR SHC5Z55VE2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC5Z55VE2AG",
      "normalizedModelNumber": "shc5z55ve2ag",
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
      "id": "model-slimair-shc30vh2ag",
      "slug": "slimair-shc30vh2ag",
      "name": "SLIMAIR SHC30VH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC30VH2AG",
      "normalizedModelNumber": "shc30vh2ag",
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
      "id": "model-slimair-shc36ac2ag",
      "slug": "slimair-shc36ac2ag",
      "name": "SLIMAIR SHC36AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC36AC2AG",
      "normalizedModelNumber": "shc36ac2ag",
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
      "id": "model-slimair-shc48ac2ag",
      "slug": "slimair-shc48ac2ag",
      "name": "SLIMAIR SHC48AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC48AC2AG",
      "normalizedModelNumber": "shc48ac2ag",
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
      "id": "model-slimair-shc18vc2ag",
      "slug": "slimair-shc18vc2ag",
      "name": "SLIMAIR SHC18VC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC18VC2AG",
      "normalizedModelNumber": "shc18vc2ag",
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
      "id": "model-slimair-shc18ah224v",
      "slug": "slimair-shc18ah224v",
      "name": "SLIMAIR SHC18AH224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC18AH224V",
      "normalizedModelNumber": "shc18ah224v",
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
      "id": "model-slimair-shc18ae224v",
      "slug": "slimair-shc18ae224v",
      "name": "SLIMAIR SHC18AE224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC18AE224V",
      "normalizedModelNumber": "shc18ae224v",
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
      "id": "model-slimair-shc24ac2ag",
      "slug": "slimair-shc24ac2ag",
      "name": "SLIMAIR SHC24AC2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC24AC2AG",
      "normalizedModelNumber": "shc24ac2ag",
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
      "id": "model-slimair-shc48ah2ag",
      "slug": "slimair-shc48ah2ag",
      "name": "SLIMAIR SHC48AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC48AH2AG",
      "normalizedModelNumber": "shc48ah2ag",
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
      "id": "model-slimair-shc24ah224v",
      "slug": "slimair-shc24ah224v",
      "name": "SLIMAIR SHC24AH224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC24AH224V",
      "normalizedModelNumber": "shc24ah224v",
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
      "id": "model-slimair-shc24ae224v",
      "slug": "slimair-shc24ae224v",
      "name": "SLIMAIR SHC24AE224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC24AE224V",
      "normalizedModelNumber": "shc24ae224v",
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
      "id": "model-slimair-shc55ah2ag",
      "slug": "slimair-shc55ah2ag",
      "name": "SLIMAIR SHC55AH2AG",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC55AH2AG",
      "normalizedModelNumber": "shc55ah2ag",
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
      "id": "model-slimair-shc36ah224v",
      "slug": "slimair-shc36ah224v",
      "name": "SLIMAIR SHC36AH224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC36AH224V",
      "normalizedModelNumber": "shc36ah224v",
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
      "id": "model-slimair-shc48vh2ag",
      "slug": "slimair-shc48vh2ag",
      "name": "SLIMAIR SHC48VH2AG",
      "seriesId": "series-slimair-shd-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC48VH2AG",
      "normalizedModelNumber": "shc48vh2ag",
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
      "id": "model-slimair-shc30ah224v",
      "slug": "slimair-shc30ah224v",
      "name": "SLIMAIR SHC30AH224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC30AH224V",
      "normalizedModelNumber": "shc30ah224v",
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
      "id": "model-slimair-shc48ah224v",
      "slug": "slimair-shc48ah224v",
      "name": "SLIMAIR SHC48AH224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC48AH224V",
      "normalizedModelNumber": "shc48ah224v",
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
      "id": "model-slimair-shc36vh2ag",
      "slug": "slimair-shc36vh2ag",
      "name": "SLIMAIR SHC36VH2AG",
      "seriesId": "series-slimair-shd-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC36VH2AG",
      "normalizedModelNumber": "shc36vh2ag",
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
      "id": "model-slimair-shc36ae224v",
      "slug": "slimair-shc36ae224v",
      "name": "SLIMAIR SHC36AE224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC36AE224V",
      "normalizedModelNumber": "shc36ae224v",
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
      "id": "model-slimair-shc48ae224v",
      "slug": "slimair-shc48ae224v",
      "name": "SLIMAIR SHC48AE224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC48AE224V",
      "normalizedModelNumber": "shc48ae224v",
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
      "id": "model-slimair-shc60ah224v",
      "slug": "slimair-shc60ah224v",
      "name": "SLIMAIR SHC60AH224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC60AH224V",
      "normalizedModelNumber": "shc60ah224v",
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
      "id": "model-slimair-shc55vh2ag",
      "slug": "slimair-shc55vh2ag",
      "name": "SLIMAIR SHC55VH2AG",
      "seriesId": "series-slimair-shd-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC55VH2AG",
      "normalizedModelNumber": "shc55vh2ag",
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
      "id": "model-slimair-shc60ae224v",
      "slug": "slimair-shc60ae224v",
      "name": "SLIMAIR SHC60AE224V",
      "seriesId": "series-slimair-shc-series",
      "brandId": "brand-slimair",
      "modelNumber": "SHC60AE224V",
      "normalizedModelNumber": "shc60ae224v",
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
      "id": "ou-slimair-shcd09vc2ag",
      "modelNumber": "SHCD09VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc09vh2ag",
      "modelNumber": "SHC09VH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc09ah2ag",
      "modelNumber": "SHC09AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc06ah2ag",
      "modelNumber": "SHC06AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc09ae2ag",
      "modelNumber": "SHC09AE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc09ae1ag",
      "modelNumber": "SHC09AE1AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc12ah2ag",
      "modelNumber": "SHC12AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc18ae2ag",
      "modelNumber": "SHC18AE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc18ve2ag",
      "modelNumber": "SHC18VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc09ve2ag",
      "modelNumber": "SHC09VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc24ae2ag",
      "modelNumber": "SHC24AE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc3z27vc2ag",
      "modelNumber": "SHC3Z27VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc12ae1ag",
      "modelNumber": "SHC12AE1AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc12ve2ag",
      "modelNumber": "SHC12VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc12ae2ag",
      "modelNumber": "SHC12AE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc12vh2ag",
      "modelNumber": "SHC12VH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc5z36ac2ag",
      "modelNumber": "SHC5Z36AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shcd12vc2ag",
      "modelNumber": "SHCD12VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc4z27ac2ag",
      "modelNumber": "SHC4Z27AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc3z18ac2ag",
      "modelNumber": "SHC3Z18AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc09ve1ag",
      "modelNumber": "SHC09VE1AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc12ve1ag",
      "modelNumber": "SHC12VE1AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc3z27ve2ag",
      "modelNumber": "SHC3Z27VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc24ah2ag",
      "modelNumber": "SHC24AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc24vh2ag",
      "modelNumber": "SHC24VH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc30ab2ab",
      "modelNumber": "SHC30AB2AB",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shcd24vc2ag",
      "modelNumber": "SHCD24VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc18vh2ag",
      "modelNumber": "SHC18VH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shcd18vc2ag",
      "modelNumber": "SHCD18VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc18ah2ag",
      "modelNumber": "SHC18AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc09vc2ag",
      "modelNumber": "SHC09VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc09ac2ag",
      "modelNumber": "SHC09AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc5z36ah2ag",
      "modelNumber": "SHC5Z36AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc24ve2ag",
      "modelNumber": "SHC24VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc09vc1ag",
      "modelNumber": "SHC09VC1AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc09ac1ag",
      "modelNumber": "SHC09AC1AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc6z55ah2ag",
      "modelNumber": "SHC6Z55AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc6z48ac2ag",
      "modelNumber": "SHC6Z48AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc5z48ve2ag",
      "modelNumber": "SHC5Z48VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc36ah2ag",
      "modelNumber": "SHC36AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc6z48ah2ag",
      "modelNumber": "SHC6Z48AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc5z48vc2ag",
      "modelNumber": "SHC5Z48VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc4z27ah2ag",
      "modelNumber": "SHC4Z27AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc3z18ah2ag",
      "modelNumber": "SHC3Z18AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc2z18vc2ag",
      "modelNumber": "SHC2Z18VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc2z18ve2ag",
      "modelNumber": "SHC2Z18VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc18ac2ag",
      "modelNumber": "SHC18AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc30ah2ag",
      "modelNumber": "SHC30AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc4z36vc2ag",
      "modelNumber": "SHC4Z36VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc4z36ve2ag",
      "modelNumber": "SHC4Z36VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc5z55ve2ag",
      "modelNumber": "SHC5Z55VE2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc30vh2ag",
      "modelNumber": "SHC30VH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc36ac2ag",
      "modelNumber": "SHC36AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc48ac2ag",
      "modelNumber": "SHC48AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc18vc2ag",
      "modelNumber": "SHC18VC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc18ah224v",
      "modelNumber": "SHC18AH224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc18ae224v",
      "modelNumber": "SHC18AE224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc24ac2ag",
      "modelNumber": "SHC24AC2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc48ah2ag",
      "modelNumber": "SHC48AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc24ah224v",
      "modelNumber": "SHC24AH224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc24ae224v",
      "modelNumber": "SHC24AE224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc55ah2ag",
      "modelNumber": "SHC55AH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc36ah224v",
      "modelNumber": "SHC36AH224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc48vh2ag",
      "modelNumber": "SHC48VH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc30ah224v",
      "modelNumber": "SHC30AH224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc48ah224v",
      "modelNumber": "SHC48AH224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc36vh2ag",
      "modelNumber": "SHC36VH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc36ae224v",
      "modelNumber": "SHC36AE224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc48ae224v",
      "modelNumber": "SHC48AE224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc60ah224v",
      "modelNumber": "SHC60AH224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-slimair-shc55vh2ag",
      "modelNumber": "SHC55VH2AG",
      "brandId": "brand-slimair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-slimair-shc60ae224v",
      "modelNumber": "SHC60AE224V",
      "brandId": "brand-slimair",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-shmz09vc2ag",
      "modelNumber": "SHMZ09VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm09ve2ag",
      "modelNumber": "SHM09VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm09ae2ag",
      "modelNumber": "SHM09AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmws09ae2ag",
      "modelNumber": "SHMWS09AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm06ae2ag",
      "modelNumber": "SHM06AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmws06ae2ag",
      "modelNumber": "SHMWS06AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm09ae1ag",
      "modelNumber": "SHM09AE1AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmws09ae1ag",
      "modelNumber": "SHMWS09AE1AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmws12ae2ag",
      "modelNumber": "SHMWS12AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm18ae2ag",
      "modelNumber": "SHM18AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmz18vc2ag",
      "modelNumber": "SHMZ18VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm18ve2ag",
      "modelNumber": "SHM18VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmws18ae2ag",
      "modelNumber": "SHMWS18AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm12ae2ag",
      "modelNumber": "SHM12AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmws24ae2ag",
      "modelNumber": "SHMWS24AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50653",
      "modelNumber": "IU-50653",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm24ae2ag",
      "modelNumber": "SHM24AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm12ae1ag",
      "modelNumber": "SHM12AE1AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmws12ae1ag",
      "modelNumber": "SHMWS12AE1AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm12ve2ag",
      "modelNumber": "SHM12VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50669",
      "modelNumber": "IU-50669",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmz12vc2ag",
      "modelNumber": "SHMZ12VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50662",
      "modelNumber": "IU-50662",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50651",
      "modelNumber": "IU-50651",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm09ve1ag",
      "modelNumber": "SHM09VE1AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm12ve1ag",
      "modelNumber": "SHM12VE1AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shlz12vc2ag",
      "modelNumber": "SHLZ12VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shl09ac2ag",
      "modelNumber": "SHL09AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50654",
      "modelNumber": "IU-50654",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-sho09ve2ag",
      "modelNumber": "SHO09VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shs18ac2ag",
      "modelNumber": "SHS18AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm24ve2ag",
      "modelNumber": "SHM24VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm30ab2ab",
      "modelNumber": "SHM30AB2AB",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmz24vc2ag",
      "modelNumber": "SHMZ24VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shl12ac2ag",
      "modelNumber": "SHL12AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shl24ac2ag",
      "modelNumber": "SHL24AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-sho12ve2ag",
      "modelNumber": "SHO12VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-sho06ve2ag",
      "modelNumber": "SHO06VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-sho18ve2ag",
      "modelNumber": "SHO18VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm09vc2ag",
      "modelNumber": "SHM09VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm09ac2ag",
      "modelNumber": "SHM09AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50670",
      "modelNumber": "IU-50670",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shlz24vc2ag",
      "modelNumber": "SHLZ24VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm09vc1ag",
      "modelNumber": "SHM09VC1AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm09ac1ag",
      "modelNumber": "SHM09AC1AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50676",
      "modelNumber": "IU-50676",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shdl09ac2ag",
      "modelNumber": "SHDL09AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shdl06ac2ag",
      "modelNumber": "SHDL06AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50674",
      "modelNumber": "IU-50674",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50672",
      "modelNumber": "IU-50672",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shl36ac2ag",
      "modelNumber": "SHL36AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50675",
      "modelNumber": "IU-50675",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shs24ac2ag",
      "modelNumber": "SHS24AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50671",
      "modelNumber": "IU-50671",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50663",
      "modelNumber": "IU-50663",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50652",
      "modelNumber": "IU-50652",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50640",
      "modelNumber": "IU-50640",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shl18ac2ag",
      "modelNumber": "SHL18AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shs24vc2ag",
      "modelNumber": "SHS24VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shs18vc2ag",
      "modelNumber": "SHS18VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shlz18vc2ag",
      "modelNumber": "SHLZ18VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd09ac2ag",
      "modelNumber": "SHD09AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shlz09vc2ag",
      "modelNumber": "SHLZ09VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50641",
      "modelNumber": "IU-50641",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm18ac2ag",
      "modelNumber": "SHM18AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd09vc2ag",
      "modelNumber": "SHD09VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm30ae2ag",
      "modelNumber": "SHM30AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd12ac2ag",
      "modelNumber": "SHD12AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shmws30ae2ag",
      "modelNumber": "SHMWS30AE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shs36ac2ag",
      "modelNumber": "SHS36AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50664",
      "modelNumber": "IU-50664",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50665",
      "modelNumber": "IU-50665",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50673",
      "modelNumber": "IU-50673",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm30ve2ag",
      "modelNumber": "SHM30VE2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shdl18ac2ag",
      "modelNumber": "SHDL18AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd18ac2ag",
      "modelNumber": "SHD18AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd18vc2ag",
      "modelNumber": "SHD18VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shdl12ac2ag",
      "modelNumber": "SHDL12AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shs48ac2ag",
      "modelNumber": "SHS48AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd12vc2ag",
      "modelNumber": "SHD12VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm18vc2ag",
      "modelNumber": "SHM18VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd24vc2ag",
      "modelNumber": "SHD24VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shl48ac2ag",
      "modelNumber": "SHL48AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shv18ae2ag",
      "modelNumber": "SHV18AE2AG",
      "brandId": "brand-slimair",
      "type": "central-ducted"
    },
    {
      "id": "iu-shd24ac2ag",
      "modelNumber": "SHD24AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shm24ac2ag",
      "modelNumber": "SHM24AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shv24ae2ag",
      "modelNumber": "SHV24AE2AG",
      "brandId": "brand-slimair",
      "type": "central-ducted"
    },
    {
      "id": "iu-shs60ac2ag",
      "modelNumber": "SHS60AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd36ac2ag",
      "modelNumber": "SHD36AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shv36ae2ag",
      "modelNumber": "SHV36AE2AG",
      "brandId": "brand-slimair",
      "type": "central-ducted"
    },
    {
      "id": "iu-shd48ac2ag",
      "modelNumber": "SHD48AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd48vc2ag",
      "modelNumber": "SHD48VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shv30ae2ag",
      "modelNumber": "SHV30AE2AG",
      "brandId": "brand-slimair",
      "type": "central-ducted"
    },
    {
      "id": "iu-shv48ae2ag",
      "modelNumber": "SHV48AE2AG",
      "brandId": "brand-slimair",
      "type": "central-ducted"
    },
    {
      "id": "iu-shd36vc2ag",
      "modelNumber": "SHD36VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shv60ae2ag",
      "modelNumber": "SHV60AE2AG",
      "brandId": "brand-slimair",
      "type": "central-ducted"
    },
    {
      "id": "iu-shd60ac2ag",
      "modelNumber": "SHD60AC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    },
    {
      "id": "iu-shd60vc2ag",
      "modelNumber": "SHD60VC2AG",
      "brandId": "brand-slimair",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-slimair-shcd09vc2ag-shmz09vc2ag",
      "slug": "slimair-shcd09vc2ag-shmz09vc2ag",
      "modelId": "model-slimair-shcd09vc2ag",
      "outdoorUnitId": "ou-slimair-shcd09vc2ag",
      "indoorUnitId": "iu-shmz09vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09vh2ag-shm09ve2ag",
      "slug": "slimair-shc09vh2ag-shm09ve2ag",
      "modelId": "model-slimair-shc09vh2ag",
      "outdoorUnitId": "ou-slimair-shc09vh2ag",
      "indoorUnitId": "iu-shm09ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ah2ag-shm09ae2ag",
      "slug": "slimair-shc09ah2ag-shm09ae2ag",
      "modelId": "model-slimair-shc09ah2ag",
      "outdoorUnitId": "ou-slimair-shc09ah2ag",
      "indoorUnitId": "iu-shm09ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ah2ag-shmws09ae2ag",
      "slug": "slimair-shc09ah2ag-shmws09ae2ag",
      "modelId": "model-slimair-shc09ah2ag",
      "outdoorUnitId": "ou-slimair-shc09ah2ag",
      "indoorUnitId": "iu-shmws09ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc06ah2ag-shm06ae2ag",
      "slug": "slimair-shc06ah2ag-shm06ae2ag",
      "modelId": "model-slimair-shc06ah2ag",
      "outdoorUnitId": "ou-slimair-shc06ah2ag",
      "indoorUnitId": "iu-shm06ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc06ah2ag-shmws06ae2ag",
      "slug": "slimair-shc06ah2ag-shmws06ae2ag",
      "modelId": "model-slimair-shc06ah2ag",
      "outdoorUnitId": "ou-slimair-shc06ah2ag",
      "indoorUnitId": "iu-shmws06ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ae2ag-shmws09ae2ag",
      "slug": "slimair-shc09ae2ag-shmws09ae2ag",
      "modelId": "model-slimair-shc09ae2ag",
      "outdoorUnitId": "ou-slimair-shc09ae2ag",
      "indoorUnitId": "iu-shmws09ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ae2ag-shm09ae2ag",
      "slug": "slimair-shc09ae2ag-shm09ae2ag",
      "modelId": "model-slimair-shc09ae2ag",
      "outdoorUnitId": "ou-slimair-shc09ae2ag",
      "indoorUnitId": "iu-shm09ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ae1ag-shm09ae1ag",
      "slug": "slimair-shc09ae1ag-shm09ae1ag",
      "modelId": "model-slimair-shc09ae1ag",
      "outdoorUnitId": "ou-slimair-shc09ae1ag",
      "indoorUnitId": "iu-shm09ae1ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ae1ag-shmws09ae1ag",
      "slug": "slimair-shc09ae1ag-shmws09ae1ag",
      "modelId": "model-slimair-shc09ae1ag",
      "outdoorUnitId": "ou-slimair-shc09ae1ag",
      "indoorUnitId": "iu-shmws09ae1ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ah2ag-shmws12ae2ag",
      "slug": "slimair-shc12ah2ag-shmws12ae2ag",
      "modelId": "model-slimair-shc12ah2ag",
      "outdoorUnitId": "ou-slimair-shc12ah2ag",
      "indoorUnitId": "iu-shmws12ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ae2ag-shm18ae2ag",
      "slug": "slimair-shc18ae2ag-shm18ae2ag",
      "modelId": "model-slimair-shc18ae2ag",
      "outdoorUnitId": "ou-slimair-shc18ae2ag",
      "indoorUnitId": "iu-shm18ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ve2ag-shmz18vc2ag",
      "slug": "slimair-shc18ve2ag-shmz18vc2ag",
      "modelId": "model-slimair-shc18ve2ag",
      "outdoorUnitId": "ou-slimair-shc18ve2ag",
      "indoorUnitId": "iu-shmz18vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ve2ag-shm18ve2ag",
      "slug": "slimair-shc18ve2ag-shm18ve2ag",
      "modelId": "model-slimair-shc18ve2ag",
      "outdoorUnitId": "ou-slimair-shc18ve2ag",
      "indoorUnitId": "iu-shm18ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ae2ag-shmws18ae2ag",
      "slug": "slimair-shc18ae2ag-shmws18ae2ag",
      "modelId": "model-slimair-shc18ae2ag",
      "outdoorUnitId": "ou-slimair-shc18ae2ag",
      "indoorUnitId": "iu-shmws18ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ve2ag-shmz09vc2ag",
      "slug": "slimair-shc09ve2ag-shmz09vc2ag",
      "modelId": "model-slimair-shc09ve2ag",
      "outdoorUnitId": "ou-slimair-shc09ve2ag",
      "indoorUnitId": "iu-shmz09vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ah2ag-shm12ae2ag",
      "slug": "slimair-shc12ah2ag-shm12ae2ag",
      "modelId": "model-slimair-shc12ah2ag",
      "outdoorUnitId": "ou-slimair-shc12ah2ag",
      "indoorUnitId": "iu-shm12ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ve2ag-shm09ve2ag",
      "slug": "slimair-shc09ve2ag-shm09ve2ag",
      "modelId": "model-slimair-shc09ve2ag",
      "outdoorUnitId": "ou-slimair-shc09ve2ag",
      "indoorUnitId": "iu-shm09ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ae2ag-shmws24ae2ag",
      "slug": "slimair-shc24ae2ag-shmws24ae2ag",
      "modelId": "model-slimair-shc24ae2ag",
      "outdoorUnitId": "ou-slimair-shc24ae2ag",
      "indoorUnitId": "iu-shmws24ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc3z27vc2ag-iu-50653",
      "slug": "slimair-shc3z27vc2ag-iu-50653",
      "modelId": "model-slimair-shc3z27vc2ag",
      "outdoorUnitId": "ou-slimair-shc3z27vc2ag",
      "indoorUnitId": "iu-iu-50653",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ae2ag-shm24ae2ag",
      "slug": "slimair-shc24ae2ag-shm24ae2ag",
      "modelId": "model-slimair-shc24ae2ag",
      "outdoorUnitId": "ou-slimair-shc24ae2ag",
      "indoorUnitId": "iu-shm24ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ae1ag-shm12ae1ag",
      "slug": "slimair-shc12ae1ag-shm12ae1ag",
      "modelId": "model-slimair-shc12ae1ag",
      "outdoorUnitId": "ou-slimair-shc12ae1ag",
      "indoorUnitId": "iu-shm12ae1ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ae1ag-shmws12ae1ag",
      "slug": "slimair-shc12ae1ag-shmws12ae1ag",
      "modelId": "model-slimair-shc12ae1ag",
      "outdoorUnitId": "ou-slimair-shc12ae1ag",
      "indoorUnitId": "iu-shmws12ae1ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ve2ag-shm12ve2ag",
      "slug": "slimair-shc12ve2ag-shm12ve2ag",
      "modelId": "model-slimair-shc12ve2ag",
      "outdoorUnitId": "ou-slimair-shc12ve2ag",
      "indoorUnitId": "iu-shm12ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ae2ag-shm12ae2ag",
      "slug": "slimair-shc12ae2ag-shm12ae2ag",
      "modelId": "model-slimair-shc12ae2ag",
      "outdoorUnitId": "ou-slimair-shc12ae2ag",
      "indoorUnitId": "iu-shm12ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12vh2ag-shm12ve2ag",
      "slug": "slimair-shc12vh2ag-shm12ve2ag",
      "modelId": "model-slimair-shc12vh2ag",
      "outdoorUnitId": "ou-slimair-shc12vh2ag",
      "indoorUnitId": "iu-shm12ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc5z36ac2ag-iu-50669",
      "slug": "slimair-shc5z36ac2ag-iu-50669",
      "modelId": "model-slimair-shc5z36ac2ag",
      "outdoorUnitId": "ou-slimair-shc5z36ac2ag",
      "indoorUnitId": "iu-iu-50669",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shcd12vc2ag-shmz12vc2ag",
      "slug": "slimair-shcd12vc2ag-shmz12vc2ag",
      "modelId": "model-slimair-shcd12vc2ag",
      "outdoorUnitId": "ou-slimair-shcd12vc2ag",
      "indoorUnitId": "iu-shmz12vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ve2ag-shmz12vc2ag",
      "slug": "slimair-shc12ve2ag-shmz12vc2ag",
      "modelId": "model-slimair-shc12ve2ag",
      "outdoorUnitId": "ou-slimair-shc12ve2ag",
      "indoorUnitId": "iu-shmz12vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ae2ag-shmws12ae2ag",
      "slug": "slimair-shc12ae2ag-shmws12ae2ag",
      "modelId": "model-slimair-shc12ae2ag",
      "outdoorUnitId": "ou-slimair-shc12ae2ag",
      "indoorUnitId": "iu-shmws12ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc4z27ac2ag-iu-50662",
      "slug": "slimair-shc4z27ac2ag-iu-50662",
      "modelId": "model-slimair-shc4z27ac2ag",
      "outdoorUnitId": "ou-slimair-shc4z27ac2ag",
      "indoorUnitId": "iu-iu-50662",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc3z18ac2ag-iu-50651",
      "slug": "slimair-shc3z18ac2ag-iu-50651",
      "modelId": "model-slimair-shc3z18ac2ag",
      "outdoorUnitId": "ou-slimair-shc3z18ac2ag",
      "indoorUnitId": "iu-iu-50651",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ve1ag-shm09ve1ag",
      "slug": "slimair-shc09ve1ag-shm09ve1ag",
      "modelId": "model-slimair-shc09ve1ag",
      "outdoorUnitId": "ou-slimair-shc09ve1ag",
      "indoorUnitId": "iu-shm09ve1ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ve1ag-shm12ve1ag",
      "slug": "slimair-shc12ve1ag-shm12ve1ag",
      "modelId": "model-slimair-shc12ve1ag",
      "outdoorUnitId": "ou-slimair-shc12ve1ag",
      "indoorUnitId": "iu-shm12ve1ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ve2ag-shlz12vc2ag",
      "slug": "slimair-shc12ve2ag-shlz12vc2ag",
      "modelId": "model-slimair-shc12ve2ag",
      "outdoorUnitId": "ou-slimair-shc12ve2ag",
      "indoorUnitId": "iu-shlz12vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ah2ag-shl09ac2ag",
      "slug": "slimair-shc09ah2ag-shl09ac2ag",
      "modelId": "model-slimair-shc09ah2ag",
      "outdoorUnitId": "ou-slimair-shc09ah2ag",
      "indoorUnitId": "iu-shl09ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc3z27ve2ag-iu-50654",
      "slug": "slimair-shc3z27ve2ag-iu-50654",
      "modelId": "model-slimair-shc3z27ve2ag",
      "outdoorUnitId": "ou-slimair-shc3z27ve2ag",
      "indoorUnitId": "iu-iu-50654",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ve2ag-sho09ve2ag",
      "slug": "slimair-shc09ve2ag-sho09ve2ag",
      "modelId": "model-slimair-shc09ve2ag",
      "outdoorUnitId": "ou-slimair-shc09ve2ag",
      "indoorUnitId": "iu-sho09ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ah2ag-shmws24ae2ag",
      "slug": "slimair-shc24ah2ag-shmws24ae2ag",
      "modelId": "model-slimair-shc24ah2ag",
      "outdoorUnitId": "ou-slimair-shc24ah2ag",
      "indoorUnitId": "iu-shmws24ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ah2ag-shm24ae2ag",
      "slug": "slimair-shc24ah2ag-shm24ae2ag",
      "modelId": "model-slimair-shc24ah2ag",
      "outdoorUnitId": "ou-slimair-shc24ah2ag",
      "indoorUnitId": "iu-shm24ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12vh2ag-shlz12vc2ag",
      "slug": "slimair-shc12vh2ag-shlz12vc2ag",
      "modelId": "model-slimair-shc12vh2ag",
      "outdoorUnitId": "ou-slimair-shc12vh2ag",
      "indoorUnitId": "iu-shlz12vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ae2ag-shs18ac2ag",
      "slug": "slimair-shc18ae2ag-shs18ac2ag",
      "modelId": "model-slimair-shc18ae2ag",
      "outdoorUnitId": "ou-slimair-shc18ae2ag",
      "indoorUnitId": "iu-shs18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24vh2ag-shm24ve2ag",
      "slug": "slimair-shc24vh2ag-shm24ve2ag",
      "modelId": "model-slimair-shc24vh2ag",
      "outdoorUnitId": "ou-slimair-shc24vh2ag",
      "indoorUnitId": "iu-shm24ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc30ab2ab-shm30ab2ab",
      "slug": "slimair-shc30ab2ab-shm30ab2ab",
      "modelId": "model-slimair-shc30ab2ab",
      "outdoorUnitId": "ou-slimair-shc30ab2ab",
      "indoorUnitId": "iu-shm30ab2ab",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shcd24vc2ag-shmz24vc2ag",
      "slug": "slimair-shcd24vc2ag-shmz24vc2ag",
      "modelId": "model-slimair-shcd24vc2ag",
      "outdoorUnitId": "ou-slimair-shcd24vc2ag",
      "indoorUnitId": "iu-shmz24vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ah2ag-shl12ac2ag",
      "slug": "slimair-shc12ah2ag-shl12ac2ag",
      "modelId": "model-slimair-shc12ah2ag",
      "outdoorUnitId": "ou-slimair-shc12ah2ag",
      "indoorUnitId": "iu-shl12ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18vh2ag-shm18ve2ag",
      "slug": "slimair-shc18vh2ag-shm18ve2ag",
      "modelId": "model-slimair-shc18vh2ag",
      "outdoorUnitId": "ou-slimair-shc18vh2ag",
      "indoorUnitId": "iu-shm18ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ae2ag-shl24ac2ag",
      "slug": "slimair-shc24ae2ag-shl24ac2ag",
      "modelId": "model-slimair-shc24ae2ag",
      "outdoorUnitId": "ou-slimair-shc24ae2ag",
      "indoorUnitId": "iu-shl24ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ve2ag-sho12ve2ag",
      "slug": "slimair-shc12ve2ag-sho12ve2ag",
      "modelId": "model-slimair-shc12ve2ag",
      "outdoorUnitId": "ou-slimair-shc12ve2ag",
      "indoorUnitId": "iu-sho12ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shcd18vc2ag-shmz18vc2ag",
      "slug": "slimair-shcd18vc2ag-shmz18vc2ag",
      "modelId": "model-slimair-shcd18vc2ag",
      "outdoorUnitId": "ou-slimair-shcd18vc2ag",
      "indoorUnitId": "iu-shmz18vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ve2ag-sho06ve2ag",
      "slug": "slimair-shc09ve2ag-sho06ve2ag",
      "modelId": "model-slimair-shc09ve2ag",
      "outdoorUnitId": "ou-slimair-shc09ve2ag",
      "indoorUnitId": "iu-sho06ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ve2ag-sho18ve2ag",
      "slug": "slimair-shc18ve2ag-sho18ve2ag",
      "modelId": "model-slimair-shc18ve2ag",
      "outdoorUnitId": "ou-slimair-shc18ve2ag",
      "indoorUnitId": "iu-sho18ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ah2ag-shm18ae2ag",
      "slug": "slimair-shc18ah2ag-shm18ae2ag",
      "modelId": "model-slimair-shc18ah2ag",
      "outdoorUnitId": "ou-slimair-shc18ah2ag",
      "indoorUnitId": "iu-shm18ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ah2ag-shmws18ae2ag",
      "slug": "slimair-shc18ah2ag-shmws18ae2ag",
      "modelId": "model-slimair-shc18ah2ag",
      "outdoorUnitId": "ou-slimair-shc18ah2ag",
      "indoorUnitId": "iu-shmws18ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09vc2ag-shm09vc2ag",
      "slug": "slimair-shc09vc2ag-shm09vc2ag",
      "modelId": "model-slimair-shc09vc2ag",
      "outdoorUnitId": "ou-slimair-shc09vc2ag",
      "indoorUnitId": "iu-shm09vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ae2ag-shl09ac2ag",
      "slug": "slimair-shc09ae2ag-shl09ac2ag",
      "modelId": "model-slimair-shc09ae2ag",
      "outdoorUnitId": "ou-slimair-shc09ae2ag",
      "indoorUnitId": "iu-shl09ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ac2ag-shm09ac2ag",
      "slug": "slimair-shc09ac2ag-shm09ac2ag",
      "modelId": "model-slimair-shc09ac2ag",
      "outdoorUnitId": "ou-slimair-shc09ac2ag",
      "indoorUnitId": "iu-shm09ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc5z36ah2ag-iu-50670",
      "slug": "slimair-shc5z36ah2ag-iu-50670",
      "modelId": "model-slimair-shc5z36ah2ag",
      "outdoorUnitId": "ou-slimair-shc5z36ah2ag",
      "indoorUnitId": "iu-iu-50670",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ve2ag-shlz24vc2ag",
      "slug": "slimair-shc24ve2ag-shlz24vc2ag",
      "modelId": "model-slimair-shc24ve2ag",
      "outdoorUnitId": "ou-slimair-shc24ve2ag",
      "indoorUnitId": "iu-shlz24vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09vc1ag-shm09vc1ag",
      "slug": "slimair-shc09vc1ag-shm09vc1ag",
      "modelId": "model-slimair-shc09vc1ag",
      "outdoorUnitId": "ou-slimair-shc09vc1ag",
      "indoorUnitId": "iu-shm09vc1ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ac1ag-shm09ac1ag",
      "slug": "slimair-shc09ac1ag-shm09ac1ag",
      "modelId": "model-slimair-shc09ac1ag",
      "outdoorUnitId": "ou-slimair-shc09ac1ag",
      "indoorUnitId": "iu-shm09ac1ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc6z55ah2ag-iu-50676",
      "slug": "slimair-shc6z55ah2ag-iu-50676",
      "modelId": "model-slimair-shc6z55ah2ag",
      "outdoorUnitId": "ou-slimair-shc6z55ah2ag",
      "indoorUnitId": "iu-iu-50676",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ah2ag-shdl09ac2ag",
      "slug": "slimair-shc09ah2ag-shdl09ac2ag",
      "modelId": "model-slimair-shc09ah2ag",
      "outdoorUnitId": "ou-slimair-shc09ah2ag",
      "indoorUnitId": "iu-shdl09ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc06ah2ag-shdl06ac2ag",
      "slug": "slimair-shc06ah2ag-shdl06ac2ag",
      "modelId": "model-slimair-shc06ah2ag",
      "outdoorUnitId": "ou-slimair-shc06ah2ag",
      "indoorUnitId": "iu-shdl06ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc6z48ac2ag-iu-50674",
      "slug": "slimair-shc6z48ac2ag-iu-50674",
      "modelId": "model-slimair-shc6z48ac2ag",
      "outdoorUnitId": "ou-slimair-shc6z48ac2ag",
      "indoorUnitId": "iu-iu-50674",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc5z48ve2ag-iu-50672",
      "slug": "slimair-shc5z48ve2ag-iu-50672",
      "modelId": "model-slimair-shc5z48ve2ag",
      "outdoorUnitId": "ou-slimair-shc5z48ve2ag",
      "indoorUnitId": "iu-iu-50672",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc36ah2ag-shl36ac2ag",
      "slug": "slimair-shc36ah2ag-shl36ac2ag",
      "modelId": "model-slimair-shc36ah2ag",
      "outdoorUnitId": "ou-slimair-shc36ah2ag",
      "indoorUnitId": "iu-shl36ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc6z48ah2ag-iu-50675",
      "slug": "slimair-shc6z48ah2ag-iu-50675",
      "modelId": "model-slimair-shc6z48ah2ag",
      "outdoorUnitId": "ou-slimair-shc6z48ah2ag",
      "indoorUnitId": "iu-iu-50675",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ae2ag-shs24ac2ag",
      "slug": "slimair-shc24ae2ag-shs24ac2ag",
      "modelId": "model-slimair-shc24ae2ag",
      "outdoorUnitId": "ou-slimair-shc24ae2ag",
      "indoorUnitId": "iu-shs24ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc5z48vc2ag-iu-50671",
      "slug": "slimair-shc5z48vc2ag-iu-50671",
      "modelId": "model-slimair-shc5z48vc2ag",
      "outdoorUnitId": "ou-slimair-shc5z48vc2ag",
      "indoorUnitId": "iu-iu-50671",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ae2ag-shl12ac2ag",
      "slug": "slimair-shc12ae2ag-shl12ac2ag",
      "modelId": "model-slimair-shc12ae2ag",
      "outdoorUnitId": "ou-slimair-shc12ae2ag",
      "indoorUnitId": "iu-shl12ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc4z27ah2ag-iu-50663",
      "slug": "slimair-shc4z27ah2ag-iu-50663",
      "modelId": "model-slimair-shc4z27ah2ag",
      "outdoorUnitId": "ou-slimair-shc4z27ah2ag",
      "indoorUnitId": "iu-iu-50663",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ve2ag-shm24ve2ag",
      "slug": "slimair-shc24ve2ag-shm24ve2ag",
      "modelId": "model-slimair-shc24ve2ag",
      "outdoorUnitId": "ou-slimair-shc24ve2ag",
      "indoorUnitId": "iu-shm24ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ve2ag-shmz24vc2ag",
      "slug": "slimair-shc24ve2ag-shmz24vc2ag",
      "modelId": "model-slimair-shc24ve2ag",
      "outdoorUnitId": "ou-slimair-shc24ve2ag",
      "indoorUnitId": "iu-shmz24vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc3z18ah2ag-iu-50652",
      "slug": "slimair-shc3z18ah2ag-iu-50652",
      "modelId": "model-slimair-shc3z18ah2ag",
      "outdoorUnitId": "ou-slimair-shc3z18ah2ag",
      "indoorUnitId": "iu-iu-50652",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc2z18vc2ag-iu-50640",
      "slug": "slimair-shc2z18vc2ag-iu-50640",
      "modelId": "model-slimair-shc2z18vc2ag",
      "outdoorUnitId": "ou-slimair-shc2z18vc2ag",
      "indoorUnitId": "iu-iu-50640",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ah2ag-shl24ac2ag",
      "slug": "slimair-shc24ah2ag-shl24ac2ag",
      "modelId": "model-slimair-shc24ah2ag",
      "outdoorUnitId": "ou-slimair-shc24ah2ag",
      "indoorUnitId": "iu-shl24ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ae2ag-shl18ac2ag",
      "slug": "slimair-shc18ae2ag-shl18ac2ag",
      "modelId": "model-slimair-shc18ae2ag",
      "outdoorUnitId": "ou-slimair-shc18ae2ag",
      "indoorUnitId": "iu-shl18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24vh2ag-shs24vc2ag",
      "slug": "slimair-shc24vh2ag-shs24vc2ag",
      "modelId": "model-slimair-shc24vh2ag",
      "outdoorUnitId": "ou-slimair-shc24vh2ag",
      "indoorUnitId": "iu-shs24vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18vh2ag-shs18vc2ag",
      "slug": "slimair-shc18vh2ag-shs18vc2ag",
      "modelId": "model-slimair-shc18vh2ag",
      "outdoorUnitId": "ou-slimair-shc18vh2ag",
      "indoorUnitId": "iu-shs18vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ve2ag-shlz18vc2ag",
      "slug": "slimair-shc18ve2ag-shlz18vc2ag",
      "modelId": "model-slimair-shc18ve2ag",
      "outdoorUnitId": "ou-slimair-shc18ve2ag",
      "indoorUnitId": "iu-shlz18vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ah2ag-shd09ac2ag",
      "slug": "slimair-shc09ah2ag-shd09ac2ag",
      "modelId": "model-slimair-shc09ah2ag",
      "outdoorUnitId": "ou-slimair-shc09ah2ag",
      "indoorUnitId": "iu-shd09ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09vh2ag-shlz09vc2ag",
      "slug": "slimair-shc09vh2ag-shlz09vc2ag",
      "modelId": "model-slimair-shc09vh2ag",
      "outdoorUnitId": "ou-slimair-shc09vh2ag",
      "indoorUnitId": "iu-shlz09vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24vh2ag-shlz24vc2ag",
      "slug": "slimair-shc24vh2ag-shlz24vc2ag",
      "modelId": "model-slimair-shc24vh2ag",
      "outdoorUnitId": "ou-slimair-shc24vh2ag",
      "indoorUnitId": "iu-shlz24vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc2z18ve2ag-iu-50641",
      "slug": "slimair-shc2z18ve2ag-iu-50641",
      "modelId": "model-slimair-shc2z18ve2ag",
      "outdoorUnitId": "ou-slimair-shc2z18ve2ag",
      "indoorUnitId": "iu-iu-50641",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ah2ag-shs24ac2ag",
      "slug": "slimair-shc24ah2ag-shs24ac2ag",
      "modelId": "model-slimair-shc24ah2ag",
      "outdoorUnitId": "ou-slimair-shc24ah2ag",
      "indoorUnitId": "iu-shs24ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ah2ag-shs18ac2ag",
      "slug": "slimair-shc18ah2ag-shs18ac2ag",
      "modelId": "model-slimair-shc18ah2ag",
      "outdoorUnitId": "ou-slimair-shc18ah2ag",
      "indoorUnitId": "iu-shs18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ac2ag-shm18ac2ag",
      "slug": "slimair-shc18ac2ag-shm18ac2ag",
      "modelId": "model-slimair-shc18ac2ag",
      "outdoorUnitId": "ou-slimair-shc18ac2ag",
      "indoorUnitId": "iu-shm18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09vh2ag-shd09vc2ag",
      "slug": "slimair-shc09vh2ag-shd09vc2ag",
      "modelId": "model-slimair-shc09vh2ag",
      "outdoorUnitId": "ou-slimair-shc09vh2ag",
      "indoorUnitId": "iu-shd09vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc30ah2ag-shm30ae2ag",
      "slug": "slimair-shc30ah2ag-shm30ae2ag",
      "modelId": "model-slimair-shc30ah2ag",
      "outdoorUnitId": "ou-slimair-shc30ah2ag",
      "indoorUnitId": "iu-shm30ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ah2ag-shd12ac2ag",
      "slug": "slimair-shc12ah2ag-shd12ac2ag",
      "modelId": "model-slimair-shc12ah2ag",
      "outdoorUnitId": "ou-slimair-shc12ah2ag",
      "indoorUnitId": "iu-shd12ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc30ah2ag-shmws30ae2ag",
      "slug": "slimair-shc30ah2ag-shmws30ae2ag",
      "modelId": "model-slimair-shc30ah2ag",
      "outdoorUnitId": "ou-slimair-shc30ah2ag",
      "indoorUnitId": "iu-shmws30ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ve2ag-shlz09vc2ag",
      "slug": "slimair-shc09ve2ag-shlz09vc2ag",
      "modelId": "model-slimair-shc09ve2ag",
      "outdoorUnitId": "ou-slimair-shc09ve2ag",
      "indoorUnitId": "iu-shlz09vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc36ah2ag-shs36ac2ag",
      "slug": "slimair-shc36ah2ag-shs36ac2ag",
      "modelId": "model-slimair-shc36ah2ag",
      "outdoorUnitId": "ou-slimair-shc36ah2ag",
      "indoorUnitId": "iu-shs36ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc4z36vc2ag-iu-50664",
      "slug": "slimair-shc4z36vc2ag-iu-50664",
      "modelId": "model-slimair-shc4z36vc2ag",
      "outdoorUnitId": "ou-slimair-shc4z36vc2ag",
      "indoorUnitId": "iu-iu-50664",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc4z36ve2ag-iu-50665",
      "slug": "slimair-shc4z36ve2ag-iu-50665",
      "modelId": "model-slimair-shc4z36ve2ag",
      "outdoorUnitId": "ou-slimair-shc4z36ve2ag",
      "indoorUnitId": "iu-iu-50665",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc5z55ve2ag-iu-50673",
      "slug": "slimair-shc5z55ve2ag-iu-50673",
      "modelId": "model-slimair-shc5z55ve2ag",
      "outdoorUnitId": "ou-slimair-shc5z55ve2ag",
      "indoorUnitId": "iu-iu-50673",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc30vh2ag-shm30ve2ag",
      "slug": "slimair-shc30vh2ag-shm30ve2ag",
      "modelId": "model-slimair-shc30vh2ag",
      "outdoorUnitId": "ou-slimair-shc30vh2ag",
      "indoorUnitId": "iu-shm30ve2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18vh2ag-shlz18vc2ag",
      "slug": "slimair-shc18vh2ag-shlz18vc2ag",
      "modelId": "model-slimair-shc18vh2ag",
      "outdoorUnitId": "ou-slimair-shc18vh2ag",
      "indoorUnitId": "iu-shlz18vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc36ac2ag-shl36ac2ag",
      "slug": "slimair-shc36ac2ag-shl36ac2ag",
      "modelId": "model-slimair-shc36ac2ag",
      "outdoorUnitId": "ou-slimair-shc36ac2ag",
      "indoorUnitId": "iu-shl36ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ae2ag-shdl18ac2ag",
      "slug": "slimair-shc18ae2ag-shdl18ac2ag",
      "modelId": "model-slimair-shc18ae2ag",
      "outdoorUnitId": "ou-slimair-shc18ae2ag",
      "indoorUnitId": "iu-shdl18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ae2ag-shd18ac2ag",
      "slug": "slimair-shc18ae2ag-shd18ac2ag",
      "modelId": "model-slimair-shc18ae2ag",
      "outdoorUnitId": "ou-slimair-shc18ae2ag",
      "indoorUnitId": "iu-shd18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ah2ag-shl18ac2ag",
      "slug": "slimair-shc18ah2ag-shl18ac2ag",
      "modelId": "model-slimair-shc18ah2ag",
      "outdoorUnitId": "ou-slimair-shc18ah2ag",
      "indoorUnitId": "iu-shl18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ve2ag-shd18vc2ag",
      "slug": "slimair-shc18ve2ag-shd18vc2ag",
      "modelId": "model-slimair-shc18ve2ag",
      "outdoorUnitId": "ou-slimair-shc18ve2ag",
      "indoorUnitId": "iu-shd18vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ah2ag-shdl12ac2ag",
      "slug": "slimair-shc12ah2ag-shdl12ac2ag",
      "modelId": "model-slimair-shc12ah2ag",
      "outdoorUnitId": "ou-slimair-shc12ah2ag",
      "indoorUnitId": "iu-shdl12ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48ac2ag-shs48ac2ag",
      "slug": "slimair-shc48ac2ag-shs48ac2ag",
      "modelId": "model-slimair-shc48ac2ag",
      "outdoorUnitId": "ou-slimair-shc48ac2ag",
      "indoorUnitId": "iu-shs48ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ae2ag-shd09ac2ag",
      "slug": "slimair-shc09ae2ag-shd09ac2ag",
      "modelId": "model-slimair-shc09ae2ag",
      "outdoorUnitId": "ou-slimair-shc09ae2ag",
      "indoorUnitId": "iu-shd09ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ae2ag-shd12ac2ag",
      "slug": "slimair-shc12ae2ag-shd12ac2ag",
      "modelId": "model-slimair-shc12ae2ag",
      "outdoorUnitId": "ou-slimair-shc12ae2ag",
      "indoorUnitId": "iu-shd12ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12vh2ag-shd12vc2ag",
      "slug": "slimair-shc12vh2ag-shd12vc2ag",
      "modelId": "model-slimair-shc12vh2ag",
      "outdoorUnitId": "ou-slimair-shc12vh2ag",
      "indoorUnitId": "iu-shd12vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ae2ag-shdl09ac2ag",
      "slug": "slimair-shc09ae2ag-shdl09ac2ag",
      "modelId": "model-slimair-shc09ae2ag",
      "outdoorUnitId": "ou-slimair-shc09ae2ag",
      "indoorUnitId": "iu-shdl09ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18vc2ag-shm18vc2ag",
      "slug": "slimair-shc18vc2ag-shm18vc2ag",
      "modelId": "model-slimair-shc18vc2ag",
      "outdoorUnitId": "ou-slimair-shc18vc2ag",
      "indoorUnitId": "iu-shm18vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc09ve2ag-shd09vc2ag",
      "slug": "slimair-shc09ve2ag-shd09vc2ag",
      "modelId": "model-slimair-shc09ve2ag",
      "outdoorUnitId": "ou-slimair-shc09ve2ag",
      "indoorUnitId": "iu-shd09vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24vh2ag-shd24vc2ag",
      "slug": "slimair-shc24vh2ag-shd24vc2ag",
      "modelId": "model-slimair-shc24vh2ag",
      "outdoorUnitId": "ou-slimair-shc24vh2ag",
      "indoorUnitId": "iu-shd24vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48ac2ag-shl48ac2ag",
      "slug": "slimair-shc48ac2ag-shl48ac2ag",
      "modelId": "model-slimair-shc48ac2ag",
      "outdoorUnitId": "ou-slimair-shc48ac2ag",
      "indoorUnitId": "iu-shl48ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ah224v-shv18ae2ag",
      "slug": "slimair-shc18ah224v-shv18ae2ag",
      "modelId": "model-slimair-shc18ah224v",
      "outdoorUnitId": "ou-slimair-shc18ah224v",
      "indoorUnitId": "iu-shv18ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ve2ag-shd24vc2ag",
      "slug": "slimair-shc24ve2ag-shd24vc2ag",
      "modelId": "model-slimair-shc24ve2ag",
      "outdoorUnitId": "ou-slimair-shc24ve2ag",
      "indoorUnitId": "iu-shd24vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ah2ag-shd24ac2ag",
      "slug": "slimair-shc24ah2ag-shd24ac2ag",
      "modelId": "model-slimair-shc24ah2ag",
      "outdoorUnitId": "ou-slimair-shc24ah2ag",
      "indoorUnitId": "iu-shd24ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ae2ag-shd24ac2ag",
      "slug": "slimair-shc24ae2ag-shd24ac2ag",
      "modelId": "model-slimair-shc24ae2ag",
      "outdoorUnitId": "ou-slimair-shc24ae2ag",
      "indoorUnitId": "iu-shd24ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ve2ag-shd12vc2ag",
      "slug": "slimair-shc12ve2ag-shd12vc2ag",
      "modelId": "model-slimair-shc12ve2ag",
      "outdoorUnitId": "ou-slimair-shc12ve2ag",
      "indoorUnitId": "iu-shd12vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc12ae2ag-shdl12ac2ag",
      "slug": "slimair-shc12ae2ag-shdl12ac2ag",
      "modelId": "model-slimair-shc12ae2ag",
      "outdoorUnitId": "ou-slimair-shc12ae2ag",
      "indoorUnitId": "iu-shdl12ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ae224v-shv18ae2ag",
      "slug": "slimair-shc18ae224v-shv18ae2ag",
      "modelId": "model-slimair-shc18ae224v",
      "outdoorUnitId": "ou-slimair-shc18ae224v",
      "indoorUnitId": "iu-shv18ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ac2ag-shm24ac2ag",
      "slug": "slimair-shc24ac2ag-shm24ac2ag",
      "modelId": "model-slimair-shc24ac2ag",
      "outdoorUnitId": "ou-slimair-shc24ac2ag",
      "indoorUnitId": "iu-shm24ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48ah2ag-shs48ac2ag",
      "slug": "slimair-shc48ah2ag-shs48ac2ag",
      "modelId": "model-slimair-shc48ah2ag",
      "outdoorUnitId": "ou-slimair-shc48ah2ag",
      "indoorUnitId": "iu-shs48ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ah2ag-shd18ac2ag",
      "slug": "slimair-shc18ah2ag-shd18ac2ag",
      "modelId": "model-slimair-shc18ah2ag",
      "outdoorUnitId": "ou-slimair-shc18ah2ag",
      "indoorUnitId": "iu-shd18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ah224v-shv24ae2ag",
      "slug": "slimair-shc24ah224v-shv24ae2ag",
      "modelId": "model-slimair-shc24ah224v",
      "outdoorUnitId": "ou-slimair-shc24ah224v",
      "indoorUnitId": "iu-shv24ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc24ae224v-shv24ae2ag",
      "slug": "slimair-shc24ae224v-shv24ae2ag",
      "modelId": "model-slimair-shc24ae224v",
      "outdoorUnitId": "ou-slimair-shc24ae224v",
      "indoorUnitId": "iu-shv24ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48ah2ag-shl48ac2ag",
      "slug": "slimair-shc48ah2ag-shl48ac2ag",
      "modelId": "model-slimair-shc48ah2ag",
      "outdoorUnitId": "ou-slimair-shc48ah2ag",
      "indoorUnitId": "iu-shl48ac2ag",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18ah2ag-shdl18ac2ag",
      "slug": "slimair-shc18ah2ag-shdl18ac2ag",
      "modelId": "model-slimair-shc18ah2ag",
      "outdoorUnitId": "ou-slimair-shc18ah2ag",
      "indoorUnitId": "iu-shdl18ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc55ah2ag-shs60ac2ag",
      "slug": "slimair-shc55ah2ag-shs60ac2ag",
      "modelId": "model-slimair-shc55ah2ag",
      "outdoorUnitId": "ou-slimair-shc55ah2ag",
      "indoorUnitId": "iu-shs60ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc18vh2ag-shd18vc2ag",
      "slug": "slimair-shc18vh2ag-shd18vc2ag",
      "modelId": "model-slimair-shc18vh2ag",
      "outdoorUnitId": "ou-slimair-shc18vh2ag",
      "indoorUnitId": "iu-shd18vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc36ah2ag-shd36ac2ag",
      "slug": "slimair-shc36ah2ag-shd36ac2ag",
      "modelId": "model-slimair-shc36ah2ag",
      "outdoorUnitId": "ou-slimair-shc36ah2ag",
      "indoorUnitId": "iu-shd36ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc36ah224v-shv36ae2ag",
      "slug": "slimair-shc36ah224v-shv36ae2ag",
      "modelId": "model-slimair-shc36ah224v",
      "outdoorUnitId": "ou-slimair-shc36ah224v",
      "indoorUnitId": "iu-shv36ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48ac2ag-shd48ac2ag",
      "slug": "slimair-shc48ac2ag-shd48ac2ag",
      "modelId": "model-slimair-shc48ac2ag",
      "outdoorUnitId": "ou-slimair-shc48ac2ag",
      "indoorUnitId": "iu-shd48ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48vh2ag-shd48vc2ag",
      "slug": "slimair-shc48vh2ag-shd48vc2ag",
      "modelId": "model-slimair-shc48vh2ag",
      "outdoorUnitId": "ou-slimair-shc48vh2ag",
      "indoorUnitId": "iu-shd48vc2ag",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc30ah224v-shv30ae2ag",
      "slug": "slimair-shc30ah224v-shv30ae2ag",
      "modelId": "model-slimair-shc30ah224v",
      "outdoorUnitId": "ou-slimair-shc30ah224v",
      "indoorUnitId": "iu-shv30ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48ah2ag-shd48ac2ag",
      "slug": "slimair-shc48ah2ag-shd48ac2ag",
      "modelId": "model-slimair-shc48ah2ag",
      "outdoorUnitId": "ou-slimair-shc48ah2ag",
      "indoorUnitId": "iu-shd48ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48ah224v-shv48ae2ag",
      "slug": "slimair-shc48ah224v-shv48ae2ag",
      "modelId": "model-slimair-shc48ah224v",
      "outdoorUnitId": "ou-slimair-shc48ah224v",
      "indoorUnitId": "iu-shv48ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc36vh2ag-shd36vc2ag",
      "slug": "slimair-shc36vh2ag-shd36vc2ag",
      "modelId": "model-slimair-shc36vh2ag",
      "outdoorUnitId": "ou-slimair-shc36vh2ag",
      "indoorUnitId": "iu-shd36vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc36ae224v-shv36ae2ag",
      "slug": "slimair-shc36ae224v-shv36ae2ag",
      "modelId": "model-slimair-shc36ae224v",
      "outdoorUnitId": "ou-slimair-shc36ae224v",
      "indoorUnitId": "iu-shv36ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc48ae224v-shv48ae2ag",
      "slug": "slimair-shc48ae224v-shv48ae2ag",
      "modelId": "model-slimair-shc48ae224v",
      "outdoorUnitId": "ou-slimair-shc48ae224v",
      "indoorUnitId": "iu-shv48ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc60ah224v-shv60ae2ag",
      "slug": "slimair-shc60ah224v-shv60ae2ag",
      "modelId": "model-slimair-shc60ah224v",
      "outdoorUnitId": "ou-slimair-shc60ah224v",
      "indoorUnitId": "iu-shv60ae2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc55ah2ag-shd60ac2ag",
      "slug": "slimair-shc55ah2ag-shd60ac2ag",
      "modelId": "model-slimair-shc55ah2ag",
      "outdoorUnitId": "ou-slimair-shc55ah2ag",
      "indoorUnitId": "iu-shd60ac2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc55vh2ag-shd60vc2ag",
      "slug": "slimair-shc55vh2ag-shd60vc2ag",
      "modelId": "model-slimair-shc55vh2ag",
      "outdoorUnitId": "ou-slimair-shc55vh2ag",
      "indoorUnitId": "iu-shd60vc2ag",
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
          "sourceId": "src-slimair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-slimair-shc60ae224v-shv60ae2ag",
      "slug": "slimair-shc60ae224v-shv60ae2ag",
      "modelId": "model-slimair-shc60ae224v",
      "outdoorUnitId": "ou-slimair-shc60ae224v",
      "indoorUnitId": "iu-shv60ae2ag",
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
          "sourceId": "src-slimair-epa",
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
