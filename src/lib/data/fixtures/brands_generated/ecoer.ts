import type { BrandDataset } from "../../types";

export const brand_ecoerDataset: BrandDataset = {
  "brand": {
    "id": "brand-ecoer",
    "slug": "ecoer",
    "name": "ECOER",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ECOER",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ecoer-epa",
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
      "id": "series-ecoer-tdi-pro",
      "slug": "ecoer-tdi-pro",
      "name": "TDi Pro",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TDi Pro de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecoer-tdi-pro-2",
      "slug": "ecoer-tdi-pro-2",
      "name": "TDi Pro 2",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TDi Pro 2 de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecoer-rti-2",
      "slug": "ecoer-rti-2",
      "name": "RTi 2",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série RTi 2 de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecoer-esi-decades-extreme",
      "slug": "ecoer-esi-decades-extreme",
      "name": "ESi Decades Extreme",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ESi Decades Extreme de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecoer-tdi-select-2",
      "slug": "ecoer-tdi-select-2",
      "name": "TDi Select 2",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TDi Select 2 de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecoer-rti",
      "slug": "ecoer-rti",
      "name": "RTi",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série RTi de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecoer-sdi-extreme-2",
      "slug": "ecoer-sdi-extreme-2",
      "name": "SDi Extreme 2",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SDi Extreme 2 de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecoer-sdi-pro-2",
      "slug": "ecoer-sdi-pro-2",
      "name": "SDi Pro 2",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SDi Pro 2 de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecoer-sdi-decades-extreme",
      "slug": "ecoer-sdi-decades-extreme",
      "name": "SDi Decades Extreme",
      "brandId": "brand-ecoer",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SDi Decades Extreme de ECOER",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ecoer-eoda19h-2436aa",
      "slug": "ecoer-eoda19h-2436aa",
      "name": "ECOER EODA19H-2436AA*",
      "seriesId": "series-ecoer-tdi-pro",
      "brandId": "brand-ecoer",
      "modelNumber": "EODA19H-2436AA*",
      "normalizedModelNumber": "eoda19h-2436aa*",
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
      "id": "model-ecoer-eoda19h-2436ab",
      "slug": "ecoer-eoda19h-2436ab",
      "name": "ECOER EODA19H-2436AB*",
      "seriesId": "series-ecoer-tdi-pro-2",
      "brandId": "brand-ecoer",
      "modelNumber": "EODA19H-2436AB*",
      "normalizedModelNumber": "eoda19h-2436ab*",
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
      "id": "model-ecoer-eoda19h-4860aa",
      "slug": "ecoer-eoda19h-4860aa",
      "name": "ECOER EODA19H-4860AA*",
      "seriesId": "series-ecoer-tdi-pro",
      "brandId": "brand-ecoer",
      "modelNumber": "EODA19H-4860AA*",
      "normalizedModelNumber": "eoda19h-4860aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35200,
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
      "id": "model-ecoer-eoda19h-4860ab",
      "slug": "ecoer-eoda19h-4860ab",
      "name": "ECOER EODA19H-4860AB*",
      "seriesId": "series-ecoer-tdi-pro-2",
      "brandId": "brand-ecoer",
      "modelNumber": "EODA19H-4860AB*",
      "normalizedModelNumber": "eoda19h-4860ab*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35200,
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
      "id": "model-ecoer-erda19h-60bb",
      "slug": "ecoer-erda19h-60bb",
      "name": "ECOER ERDA19H-60BB*",
      "seriesId": "series-ecoer-rti-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ERDA19H-60BB*",
      "normalizedModelNumber": "erda19h-60bb*",
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
      "id": "model-ecoer-erda19h-60ab",
      "slug": "ecoer-erda19h-60ab",
      "name": "ECOER ERDA19H-60AB*",
      "seriesId": "series-ecoer-rti-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ERDA19H-60AB*",
      "normalizedModelNumber": "erda19h-60ab*",
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
      "id": "model-ecoer-eoda18h-2436baa",
      "slug": "ecoer-eoda18h-2436baa",
      "name": "ECOER EODA18H-2436BAA",
      "seriesId": "series-ecoer-esi-decades-extreme",
      "brandId": "brand-ecoer",
      "modelNumber": "EODA18H-2436BAA",
      "normalizedModelNumber": "eoda18h-2436baa",
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
      "id": "model-ecoer-eoda17h-2436ad",
      "slug": "ecoer-eoda17h-2436ad",
      "name": "ECOER EODA17H-2436AD*",
      "seriesId": "series-ecoer-tdi-select-2",
      "brandId": "brand-ecoer",
      "modelNumber": "EODA17H-2436AD*",
      "normalizedModelNumber": "eoda17h-2436ad*",
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
      "id": "model-ecoer-erda19h-60aa",
      "slug": "ecoer-erda19h-60aa",
      "name": "ECOER ERDA19H-60AA*",
      "seriesId": "series-ecoer-rti",
      "brandId": "brand-ecoer",
      "modelNumber": "ERDA19H-60AA*",
      "normalizedModelNumber": "erda19h-60aa*",
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
      "id": "model-ecoer-erda19h-36ad",
      "slug": "ecoer-erda19h-36ad",
      "name": "ECOER ERDA19H-36AD*",
      "seriesId": "series-ecoer-rti-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ERDA19H-36AD*",
      "normalizedModelNumber": "erda19h-36ad*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-ecoer-esca17h-24aba",
      "slug": "ecoer-esca17h-24aba",
      "name": "ECOER ESCA17H-24ABA",
      "seriesId": "series-ecoer-sdi-extreme-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA17H-24ABA",
      "normalizedModelNumber": "esca17h-24aba",
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
      "id": "model-ecoer-esca16h-24bba",
      "slug": "ecoer-esca16h-24bba",
      "name": "ECOER ESCA16H-24BBA",
      "seriesId": "series-ecoer-sdi-pro-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA16H-24BBA",
      "normalizedModelNumber": "esca16h-24bba",
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
      "id": "model-ecoer-eoda17h-4860ad",
      "slug": "ecoer-eoda17h-4860ad",
      "name": "ECOER EODA17H-4860AD*",
      "seriesId": "series-ecoer-tdi-select-2",
      "brandId": "brand-ecoer",
      "modelNumber": "EODA17H-4860AD*",
      "normalizedModelNumber": "eoda17h-4860ad*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46000,
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
      "id": "model-ecoer-esca17h-36aba",
      "slug": "ecoer-esca17h-36aba",
      "name": "ECOER ESCA17H-36ABA",
      "seriesId": "series-ecoer-sdi-extreme-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA17H-36ABA",
      "normalizedModelNumber": "esca17h-36aba",
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
      "id": "model-ecoer-esca17h-48aba",
      "slug": "ecoer-esca17h-48aba",
      "name": "ECOER ESCA17H-48ABA",
      "seriesId": "series-ecoer-sdi-extreme-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA17H-48ABA",
      "normalizedModelNumber": "esca17h-48aba",
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
      "id": "model-ecoer-esca16h-36bba",
      "slug": "ecoer-esca16h-36bba",
      "name": "ECOER ESCA16H-36BBA",
      "seriesId": "series-ecoer-sdi-pro-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA16H-36BBA",
      "normalizedModelNumber": "esca16h-36bba",
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
      "id": "model-ecoer-esca16h-48bba",
      "slug": "ecoer-esca16h-48bba",
      "name": "ECOER ESCA16H-48BBA",
      "seriesId": "series-ecoer-sdi-pro-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA16H-48BBA",
      "normalizedModelNumber": "esca16h-48bba",
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
      "id": "model-ecoer-esca17h-60aba",
      "slug": "ecoer-esca17h-60aba",
      "name": "ECOER ESCA17H-60ABA",
      "seriesId": "series-ecoer-sdi-extreme-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA17H-60ABA",
      "normalizedModelNumber": "esca17h-60aba",
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
      "id": "model-ecoer-esca16h-36",
      "slug": "ecoer-esca16h-36",
      "name": "ECOER ESCA16H-36",
      "seriesId": "series-ecoer-sdi-decades-extreme",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA16H-36",
      "normalizedModelNumber": "esca16h-36",
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
      "id": "model-ecoer-esca16h-60",
      "slug": "ecoer-esca16h-60",
      "name": "ECOER ESCA16H-60",
      "seriesId": "series-ecoer-sdi-decades-extreme",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA16H-60",
      "normalizedModelNumber": "esca16h-60",
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
      "id": "model-ecoer-esca16h-60bba",
      "slug": "ecoer-esca16h-60bba",
      "name": "ECOER ESCA16H-60BBA",
      "seriesId": "series-ecoer-sdi-pro-2",
      "brandId": "brand-ecoer",
      "modelNumber": "ESCA16H-60BBA",
      "normalizedModelNumber": "esca16h-60bba",
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
      "id": "ou-ecoer-eoda19h-2436aa",
      "modelNumber": "EODA19H-2436AA*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecoer-eoda19h-2436ab",
      "modelNumber": "EODA19H-2436AB*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-eoda19h-4860aa",
      "modelNumber": "EODA19H-4860AA*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecoer-eoda19h-4860ab",
      "modelNumber": "EODA19H-4860AB*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-erda19h-60bb",
      "modelNumber": "ERDA19H-60BB*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-erda19h-60ab",
      "modelNumber": "ERDA19H-60AB*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-eoda18h-2436baa",
      "modelNumber": "EODA18H-2436BAA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecoer-eoda17h-2436ad",
      "modelNumber": "EODA17H-2436AD*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ecoer-erda19h-60aa",
      "modelNumber": "ERDA19H-60AA*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecoer-erda19h-36ad",
      "modelNumber": "ERDA19H-36AD*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ecoer-esca17h-24aba",
      "modelNumber": "ESCA17H-24ABA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-esca16h-24bba",
      "modelNumber": "ESCA16H-24BBA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-eoda17h-4860ad",
      "modelNumber": "EODA17H-4860AD*",
      "brandId": "brand-ecoer",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ecoer-esca17h-36aba",
      "modelNumber": "ESCA17H-36ABA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-esca17h-48aba",
      "modelNumber": "ESCA17H-48ABA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-esca16h-36bba",
      "modelNumber": "ESCA16H-36BBA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-esca16h-48bba",
      "modelNumber": "ESCA16H-48BBA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-esca17h-60aba",
      "modelNumber": "ESCA17H-60ABA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecoer-esca16h-36",
      "modelNumber": "ESCA16H-36",
      "brandId": "brand-ecoer",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecoer-esca16h-60",
      "modelNumber": "ESCA16H-60",
      "brandId": "brand-ecoer",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecoer-esca16h-60bba",
      "modelNumber": "ESCA16H-60BBA",
      "brandId": "brand-ecoer",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-eahden-24ab",
      "modelNumber": "EAHDEN-24AB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahatn-24ba",
      "modelNumber": "EAHATN-24BA*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahatn-36ba",
      "modelNumber": "EAHATN-36BA*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-36ab",
      "modelNumber": "EAHDEN-36AB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahaec-24",
      "modelNumber": "EAHAEC-24",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-48ab",
      "modelNumber": "EAHDEN-48AB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahatn-48ba",
      "modelNumber": "EAHATN-48BA*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-24be",
      "modelNumber": "EAHDEN-24BE*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-48aba",
      "modelNumber": "EAHDEN-48ABA",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18177",
      "modelNumber": "IU-18177",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18176",
      "modelNumber": "IU-18176",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-60ab",
      "modelNumber": "EAHDEN-60AB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahatn-60ba",
      "modelNumber": "EAHATN-60BA*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-36be",
      "modelNumber": "EAHDEN-36BE*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc2430bpt",
      "modelNumber": "GNC2430BPT",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc2430apt",
      "modelNumber": "GNC2430APT",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc4248cpt",
      "modelNumber": "GNC4248CPT",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18175",
      "modelNumber": "IU-18175",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-48be",
      "modelNumber": "EAHDEN-48BE*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-60aba",
      "modelNumber": "EAHDEN-60ABA",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18174",
      "modelNumber": "IU-18174",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahdec-24aba",
      "modelNumber": "EAHDEC-24ABA",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahaec-36",
      "modelNumber": "EAHAEC-36",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc3036bpt",
      "modelNumber": "GNC3036BPT",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-ebct2430ab",
      "modelNumber": "EBCT2430AB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-ebct4248cb",
      "modelNumber": "EBCT4248CB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-ebct3036bb",
      "modelNumber": "EBCT3036BB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-ebct2430bb",
      "modelNumber": "EBCT2430BB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-snc36cpt",
      "modelNumber": "SNC36CPT",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahden-60be",
      "modelNumber": "EAHDEN-60BE*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-ebct4860db",
      "modelNumber": "EBCT4860DB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-ebct4860cb",
      "modelNumber": "EBCT4860CB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc4860cpt",
      "modelNumber": "GNC4860CPT",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eact4860dbb",
      "modelNumber": "EACT4860DBB",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eact4860dba",
      "modelNumber": "EACT4860DBA",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc4860dpt",
      "modelNumber": "GNC4860DPT",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eact4860cb",
      "modelNumber": "EACT4860CB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eact3036bba",
      "modelNumber": "EACT3036BBA",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eace2430be",
      "modelNumber": "EACE2430BE*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eace3036be",
      "modelNumber": "EACE3036BE*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eace4248ce",
      "modelNumber": "EACE4248CE*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eace4860ce",
      "modelNumber": "EACE4860CE*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahdec-36ab",
      "modelNumber": "EAHDEC-36AB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahaec-60",
      "modelNumber": "EAHAEC-60",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahdec-48aba",
      "modelNumber": "EAHDEC-48ABA",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahdec-60ab",
      "modelNumber": "EAHDEC-60AB*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-esct4860cba",
      "modelNumber": "ESCT4860CBA",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-esct3036bba",
      "modelNumber": "ESCT3036BBA",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc2430aptdk",
      "modelNumber": "GNC2430APT+DK",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc3036bptdk",
      "modelNumber": "GNC3036BPT+DK",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc2430bptdk",
      "modelNumber": "GNC2430BPT+DK",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc4248cptdk",
      "modelNumber": "GNC4248CPT+DK",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc4860dptdk",
      "modelNumber": "GNC4860DPT+DK",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-gnc4860cptdk",
      "modelNumber": "GNC4860CPT+DK",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    },
    {
      "id": "iu-snc48dpt",
      "modelNumber": "SNC48DPT*",
      "brandId": "brand-ecoer",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-ecoer-eoda19h-2436aa-eahden-24ab",
      "slug": "ecoer-eoda19h-2436aa-eahden-24ab",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-eahden-24ab",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-eahatn-24ba",
      "slug": "ecoer-eoda19h-2436aa-eahatn-24ba",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-eahatn-24ba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eahden-24ab",
      "slug": "ecoer-eoda19h-2436ab-eahden-24ab",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eahden-24ab",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-eahatn-36ba",
      "slug": "ecoer-eoda19h-2436aa-eahatn-36ba",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-eahatn-36ba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-eahden-36ab",
      "slug": "ecoer-eoda19h-4860aa-eahden-36ab",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-eahden-36ab",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-eahatn-36ba",
      "slug": "ecoer-eoda19h-4860aa-eahatn-36ba",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-eahatn-36ba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-eahden-36ab",
      "slug": "ecoer-eoda19h-2436aa-eahden-36ab",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-eahden-36ab",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-eahaec-24",
      "slug": "ecoer-eoda19h-2436aa-eahaec-24",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-eahaec-24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eahden-36ab",
      "slug": "ecoer-eoda19h-2436ab-eahden-36ab",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eahden-36ab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-eahden-48ab",
      "slug": "ecoer-eoda19h-4860aa-eahden-48ab",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-eahden-48ab",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-eahatn-48ba",
      "slug": "ecoer-eoda19h-4860aa-eahatn-48ba",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-eahatn-48ba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eahden-36ab",
      "slug": "ecoer-eoda19h-4860ab-eahden-36ab",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eahden-36ab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eahden-24be",
      "slug": "ecoer-eoda19h-2436ab-eahden-24be",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eahden-24be",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eahden-48aba",
      "slug": "ecoer-eoda19h-4860ab-eahden-48aba",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eahden-48aba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-erda19h-60bb-iu-18177",
      "slug": "ecoer-erda19h-60bb-iu-18177",
      "modelId": "model-ecoer-erda19h-60bb",
      "outdoorUnitId": "ou-ecoer-erda19h-60bb",
      "indoorUnitId": "iu-iu-18177",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-erda19h-60ab-iu-18176",
      "slug": "ecoer-erda19h-60ab-iu-18176",
      "modelId": "model-ecoer-erda19h-60ab",
      "outdoorUnitId": "ou-ecoer-erda19h-60ab",
      "indoorUnitId": "iu-iu-18176",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eahden-48ab",
      "slug": "ecoer-eoda19h-4860ab-eahden-48ab",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eahden-48ab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-eahden-60ab",
      "slug": "ecoer-eoda19h-4860aa-eahden-60ab",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-eahden-60ab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-eahatn-60ba",
      "slug": "ecoer-eoda19h-4860aa-eahatn-60ba",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-eahatn-60ba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eahden-36be",
      "slug": "ecoer-eoda19h-2436ab-eahden-36be",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eahden-36be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eahden-60ab",
      "slug": "ecoer-eoda19h-4860ab-eahden-60ab",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eahden-60ab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda18h-2436baa-eahaec-24",
      "slug": "ecoer-eoda18h-2436baa-eahaec-24",
      "modelId": "model-ecoer-eoda18h-2436baa",
      "outdoorUnitId": "ou-ecoer-eoda18h-2436baa",
      "indoorUnitId": "iu-eahaec-24",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-gnc2430bpt",
      "slug": "ecoer-eoda19h-2436aa-gnc2430bpt",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-gnc2430bpt",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-gnc2430apt",
      "slug": "ecoer-eoda19h-2436aa-gnc2430apt",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-gnc2430apt",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-2436ad-eahden-24be",
      "slug": "ecoer-eoda17h-2436ad-eahden-24be",
      "modelId": "model-ecoer-eoda17h-2436ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-2436ad",
      "indoorUnitId": "iu-eahden-24be",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-gnc4248cpt",
      "slug": "ecoer-eoda19h-2436aa-gnc4248cpt",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-gnc4248cpt",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eahden-36be",
      "slug": "ecoer-eoda19h-4860ab-eahden-36be",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eahden-36be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-erda19h-60aa-iu-18175",
      "slug": "ecoer-erda19h-60aa-iu-18175",
      "modelId": "model-ecoer-erda19h-60aa",
      "outdoorUnitId": "ou-ecoer-erda19h-60aa",
      "indoorUnitId": "iu-iu-18175",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eahden-48be",
      "slug": "ecoer-eoda19h-4860ab-eahden-48be",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eahden-48be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eahden-60aba",
      "slug": "ecoer-eoda19h-4860ab-eahden-60aba",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eahden-60aba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-erda19h-36ad-iu-18174",
      "slug": "ecoer-erda19h-36ad-iu-18174",
      "modelId": "model-ecoer-erda19h-36ad",
      "outdoorUnitId": "ou-ecoer-erda19h-36ad",
      "indoorUnitId": "iu-iu-18174",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca17h-24aba-eahdec-24aba",
      "slug": "ecoer-esca17h-24aba-eahdec-24aba",
      "modelId": "model-ecoer-esca17h-24aba",
      "outdoorUnitId": "ou-ecoer-esca17h-24aba",
      "indoorUnitId": "iu-eahdec-24aba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-eahaec-36",
      "slug": "ecoer-eoda19h-2436aa-eahaec-36",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-eahaec-36",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-eahaec-36",
      "slug": "ecoer-eoda19h-4860aa-eahaec-36",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-eahaec-36",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca16h-24bba-eahdec-24aba",
      "slug": "ecoer-esca16h-24bba-eahdec-24aba",
      "modelId": "model-ecoer-esca16h-24bba",
      "outdoorUnitId": "ou-ecoer-esca16h-24bba",
      "indoorUnitId": "iu-eahdec-24aba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-gnc3036bpt",
      "slug": "ecoer-eoda19h-4860aa-gnc3036bpt",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-gnc3036bpt",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-ebct2430ab",
      "slug": "ecoer-eoda19h-2436ab-ebct2430ab",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-ebct2430ab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-gnc4248cpt",
      "slug": "ecoer-eoda19h-4860aa-gnc4248cpt",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-gnc4248cpt",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-ebct4248cb",
      "slug": "ecoer-eoda19h-2436ab-ebct4248cb",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-ebct4248cb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-ebct3036bb",
      "slug": "ecoer-eoda19h-2436ab-ebct3036bb",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-ebct3036bb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-ebct2430bb",
      "slug": "ecoer-eoda19h-2436ab-ebct2430bb",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-ebct2430bb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-gnc3036bpt",
      "slug": "ecoer-eoda19h-2436aa-gnc3036bpt",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-gnc3036bpt",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-snc36cpt",
      "slug": "ecoer-eoda19h-2436aa-snc36cpt",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-snc36cpt",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eahden-60be",
      "slug": "ecoer-eoda19h-4860ab-eahden-60be",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eahden-60be",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-ebct4860db",
      "slug": "ecoer-eoda19h-4860ab-ebct4860db",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-ebct4860db",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-ebct4860cb",
      "slug": "ecoer-eoda19h-4860ab-ebct4860cb",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-ebct4860cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-ebct4248cb",
      "slug": "ecoer-eoda19h-4860ab-ebct4248cb",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-ebct4248cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-gnc4860cpt",
      "slug": "ecoer-eoda19h-4860aa-gnc4860cpt",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-gnc4860cpt",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eact4860dbb",
      "slug": "ecoer-eoda19h-4860ab-eact4860dbb",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eact4860dbb",
      "minHeatingTempC": -15,
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-ebct3036bb",
      "slug": "ecoer-eoda19h-4860ab-ebct3036bb",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-ebct3036bb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eact4860dba",
      "slug": "ecoer-eoda19h-4860ab-eact4860dba",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eact4860dba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-snc36cpt",
      "slug": "ecoer-eoda19h-4860aa-snc36cpt",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-snc36cpt",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-gnc4860dpt",
      "slug": "ecoer-eoda19h-4860aa-gnc4860dpt",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-gnc4860dpt",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eact4860cb",
      "slug": "ecoer-eoda19h-2436ab-eact4860cb",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eact4860cb",
      "minHeatingTempC": -15,
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eact3036bba",
      "slug": "ecoer-eoda19h-2436ab-eact3036bba",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eact3036bba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-2436ad-eahden-36be",
      "slug": "ecoer-eoda17h-2436ad-eahden-36be",
      "modelId": "model-ecoer-eoda17h-2436ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-2436ad",
      "indoorUnitId": "iu-eahden-36be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-2436ad-eace2430be",
      "slug": "ecoer-eoda17h-2436ad-eace2430be",
      "modelId": "model-ecoer-eoda17h-2436ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-2436ad",
      "indoorUnitId": "iu-eace2430be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eace3036be",
      "slug": "ecoer-eoda19h-2436ab-eace3036be",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eace3036be",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-4860ad-eahden-48be",
      "slug": "ecoer-eoda17h-4860ad-eahden-48be",
      "modelId": "model-ecoer-eoda17h-4860ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-4860ad",
      "indoorUnitId": "iu-eahden-48be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eace3036be",
      "slug": "ecoer-eoda19h-4860ab-eace3036be",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eace3036be",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eace4248ce",
      "slug": "ecoer-eoda19h-4860ab-eace4248ce",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eace4248ce",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eace4248ce",
      "slug": "ecoer-eoda19h-2436ab-eace4248ce",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eace4248ce",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436ab-eace2430be",
      "slug": "ecoer-eoda19h-2436ab-eace2430be",
      "modelId": "model-ecoer-eoda19h-2436ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436ab",
      "indoorUnitId": "iu-eace2430be",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860ab-eace4860ce",
      "slug": "ecoer-eoda19h-4860ab-eace4860ce",
      "modelId": "model-ecoer-eoda19h-4860ab",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860ab",
      "indoorUnitId": "iu-eace4860ce",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca17h-36aba-eahdec-36ab",
      "slug": "ecoer-esca17h-36aba-eahdec-36ab",
      "modelId": "model-ecoer-esca17h-36aba",
      "outdoorUnitId": "ou-ecoer-esca17h-36aba",
      "indoorUnitId": "iu-eahdec-36ab",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda18h-2436baa-eahaec-36",
      "slug": "ecoer-eoda18h-2436baa-eahaec-36",
      "modelId": "model-ecoer-eoda18h-2436baa",
      "outdoorUnitId": "ou-ecoer-eoda18h-2436baa",
      "indoorUnitId": "iu-eahaec-36",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-eahaec-60",
      "slug": "ecoer-eoda19h-4860aa-eahaec-60",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-eahaec-60",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-4860ad-eahden-60be",
      "slug": "ecoer-eoda17h-4860ad-eahden-60be",
      "modelId": "model-ecoer-eoda17h-4860ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-4860ad",
      "indoorUnitId": "iu-eahden-60be",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-4860ad-eahden-36be",
      "slug": "ecoer-eoda17h-4860ad-eahden-36be",
      "modelId": "model-ecoer-eoda17h-4860ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-4860ad",
      "indoorUnitId": "iu-eahden-36be",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca17h-48aba-eahdec-48aba",
      "slug": "ecoer-esca17h-48aba-eahdec-48aba",
      "modelId": "model-ecoer-esca17h-48aba",
      "outdoorUnitId": "ou-ecoer-esca17h-48aba",
      "indoorUnitId": "iu-eahdec-48aba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-2436ad-eace3036be",
      "slug": "ecoer-eoda17h-2436ad-eace3036be",
      "modelId": "model-ecoer-eoda17h-2436ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-2436ad",
      "indoorUnitId": "iu-eace3036be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-2436ad-eace4248ce",
      "slug": "ecoer-eoda17h-2436ad-eace4248ce",
      "modelId": "model-ecoer-eoda17h-2436ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-2436ad",
      "indoorUnitId": "iu-eace4248ce",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-4860ad-eace3036be",
      "slug": "ecoer-eoda17h-4860ad-eace3036be",
      "modelId": "model-ecoer-eoda17h-4860ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-4860ad",
      "indoorUnitId": "iu-eace3036be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-4860ad-eace4248ce",
      "slug": "ecoer-eoda17h-4860ad-eace4248ce",
      "modelId": "model-ecoer-eoda17h-4860ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-4860ad",
      "indoorUnitId": "iu-eace4248ce",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca16h-36bba-eahdec-36ab",
      "slug": "ecoer-esca16h-36bba-eahdec-36ab",
      "modelId": "model-ecoer-esca16h-36bba",
      "outdoorUnitId": "ou-ecoer-esca16h-36bba",
      "indoorUnitId": "iu-eahdec-36ab",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca16h-48bba-eahdec-48aba",
      "slug": "ecoer-esca16h-48bba-eahdec-48aba",
      "modelId": "model-ecoer-esca16h-48bba",
      "outdoorUnitId": "ou-ecoer-esca16h-48bba",
      "indoorUnitId": "iu-eahdec-48aba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca17h-60aba-eahdec-60ab",
      "slug": "ecoer-esca17h-60aba-eahdec-60ab",
      "modelId": "model-ecoer-esca17h-60aba",
      "outdoorUnitId": "ou-ecoer-esca17h-60aba",
      "indoorUnitId": "iu-eahdec-60ab",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca17h-60aba-esct4860cba",
      "slug": "ecoer-esca17h-60aba-esct4860cba",
      "modelId": "model-ecoer-esca17h-60aba",
      "outdoorUnitId": "ou-ecoer-esca17h-60aba",
      "indoorUnitId": "iu-esct4860cba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda17h-4860ad-eace4860ce",
      "slug": "ecoer-eoda17h-4860ad-eace4860ce",
      "modelId": "model-ecoer-eoda17h-4860ad",
      "outdoorUnitId": "ou-ecoer-eoda17h-4860ad",
      "indoorUnitId": "iu-eace4860ce",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca16h-36-eahaec-36",
      "slug": "ecoer-esca16h-36-eahaec-36",
      "modelId": "model-ecoer-esca16h-36",
      "outdoorUnitId": "ou-ecoer-esca16h-36",
      "indoorUnitId": "iu-eahaec-36",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca17h-36aba-esct3036bba",
      "slug": "ecoer-esca17h-36aba-esct3036bba",
      "modelId": "model-ecoer-esca17h-36aba",
      "outdoorUnitId": "ou-ecoer-esca17h-36aba",
      "indoorUnitId": "iu-esct3036bba",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca16h-60-eahaec-60",
      "slug": "ecoer-esca16h-60-eahaec-60",
      "modelId": "model-ecoer-esca16h-60",
      "outdoorUnitId": "ou-ecoer-esca16h-60",
      "indoorUnitId": "iu-eahaec-60",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-gnc2430aptdk",
      "slug": "ecoer-eoda19h-2436aa-gnc2430aptdk",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-gnc2430aptdk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-gnc3036bptdk",
      "slug": "ecoer-eoda19h-2436aa-gnc3036bptdk",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-gnc3036bptdk",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-2436aa-gnc2430bptdk",
      "slug": "ecoer-eoda19h-2436aa-gnc2430bptdk",
      "modelId": "model-ecoer-eoda19h-2436aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-2436aa",
      "indoorUnitId": "iu-gnc2430bptdk",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-gnc4248cptdk",
      "slug": "ecoer-eoda19h-4860aa-gnc4248cptdk",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-gnc4248cptdk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-gnc4860dptdk",
      "slug": "ecoer-eoda19h-4860aa-gnc4860dptdk",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-gnc4860dptdk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-eoda19h-4860aa-gnc4860cptdk",
      "slug": "ecoer-eoda19h-4860aa-gnc4860cptdk",
      "modelId": "model-ecoer-eoda19h-4860aa",
      "outdoorUnitId": "ou-ecoer-eoda19h-4860aa",
      "indoorUnitId": "iu-gnc4860cptdk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca16h-60-snc48dpt",
      "slug": "ecoer-esca16h-60-snc48dpt",
      "modelId": "model-ecoer-esca16h-60",
      "outdoorUnitId": "ou-ecoer-esca16h-60",
      "indoorUnitId": "iu-snc48dpt",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca16h-36-snc36cpt",
      "slug": "ecoer-esca16h-36-snc36cpt",
      "modelId": "model-ecoer-esca16h-36",
      "outdoorUnitId": "ou-ecoer-esca16h-36",
      "indoorUnitId": "iu-snc36cpt",
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
          "sourceId": "src-ecoer-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecoer-esca16h-60bba-eahdec-60ab",
      "slug": "ecoer-esca16h-60bba-eahdec-60ab",
      "modelId": "model-ecoer-esca16h-60bba",
      "outdoorUnitId": "ou-ecoer-esca16h-60bba",
      "indoorUnitId": "iu-eahdec-60ab",
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
          "sourceId": "src-ecoer-epa",
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
