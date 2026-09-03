import type { BrandDataset } from "../../types";

export const brand_russellDataset: BrandDataset = {
  "brand": {
    "id": "brand-russell",
    "slug": "russell",
    "name": "RUSSELL",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour RUSSELL",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-russell-epa",
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
      "id": "series-russell-vantix",
      "slug": "russell-vantix",
      "name": "VANTIX",
      "brandId": "brand-russell",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série VANTIX de RUSSELL",
      "imageUrl": "/images/series/russell-russell-vantix.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-russell-vantix-vantix",
      "slug": "russell-vantix-vantix",
      "name": "VANTIX | Vantix",
      "brandId": "brand-russell",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série VANTIX | Vantix de RUSSELL",
      "imageUrl": "/images/series/russell-russell-vantix-vantix.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-russell-k-series",
      "slug": "russell-k-series",
      "name": "K-SERIES",
      "brandId": "brand-russell",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série K-SERIES de RUSSELL",
      "imageUrl": "/images/series/russell-russell-k-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-russell-f-series",
      "slug": "russell-f-series",
      "name": "F Series",
      "brandId": "brand-russell",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série F Series de RUSSELL",
      "imageUrl": "/images/series/russell-russell-f-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-russell-rdfxyc",
      "slug": "russell-rdfxyc",
      "name": "RDFXYC",
      "brandId": "brand-russell",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RDFXYC de RUSSELL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-russell-rhpxyc",
      "slug": "russell-rhpxyc",
      "name": "RHPXYC",
      "brandId": "brand-russell",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHPXYC de RUSSELL",
      "imageUrl": "/images/series/russell-russell-rhpxyc.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-russell-rhpxzs",
      "slug": "russell-rhpxzs",
      "name": "RHPXZS",
      "brandId": "brand-russell",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHPXZS de RUSSELL",
      "imageUrl": "/images/series/russell-russell-rhpxzs.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-russell-sp19ay24ajvc",
      "slug": "russell-sp19ay24ajvc",
      "name": "RUSSELL SP19AY24AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP19AY24AJVC",
      "normalizedModelNumber": "sp19ay24ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-russell-sp19ay36ajvc",
      "slug": "russell-sp19ay36ajvc",
      "name": "RUSSELL SP19AY36AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP19AY36AJVC",
      "normalizedModelNumber": "sp19ay36ajvc",
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
      "id": "model-russell-sp18az24ajvc",
      "slug": "russell-sp18az24ajvc",
      "name": "RUSSELL SP18AZ24AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP18AZ24AJVC",
      "normalizedModelNumber": "sp18az24ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-russell-rd18ay36ajvc",
      "slug": "russell-rd18ay36ajvc",
      "name": "RUSSELL RD18AY36AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD18AY36AJVC",
      "normalizedModelNumber": "rd18ay36ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 31800,
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
      "id": "model-russell-rd18ay24ajvc",
      "slug": "russell-rd18ay24ajvc",
      "name": "RUSSELL RD18AY24AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD18AY24AJVC",
      "normalizedModelNumber": "rd18ay24ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 21200,
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
      "id": "model-russell-rd17az36aj3n",
      "slug": "russell-rd17az36aj3n",
      "name": "RUSSELL RD17AZ36AJ3N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD17AZ36AJ3N",
      "normalizedModelNumber": "rd17az36aj3n",
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
      "id": "model-russell-rd18ay48ajvc",
      "slug": "russell-rd18ay48ajvc",
      "name": "RUSSELL RD18AY48AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD18AY48AJVC",
      "normalizedModelNumber": "rd18ay48ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 43500,
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
      "id": "model-russell-sp19ay48ajvc",
      "slug": "russell-sp19ay48ajvc",
      "name": "RUSSELL SP19AY48AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP19AY48AJVC",
      "normalizedModelNumber": "sp19ay48ajvc",
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
      "id": "model-russell-sp18az36ajvc",
      "slug": "russell-sp18az36ajvc",
      "name": "RUSSELL SP18AZ36AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP18AZ36AJVC",
      "normalizedModelNumber": "sp18az36ajvc",
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
      "id": "model-russell-rd18ay60ajvc",
      "slug": "russell-rd18ay60ajvc",
      "name": "RUSSELL RD18AY60AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD18AY60AJVC",
      "normalizedModelNumber": "rd18ay60ajvc",
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
      "id": "model-russell-rd17az60aj3n",
      "slug": "russell-rd17az60aj3n",
      "name": "RUSSELL RD17AZ60AJ3N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD17AZ60AJ3N",
      "normalizedModelNumber": "rd17az60aj3n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55500,
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
      "id": "model-russell-sp18az48ajvc",
      "slug": "russell-sp18az48ajvc",
      "name": "RUSSELL SP18AZ48AJVC",
      "seriesId": "series-russell-k-series",
      "brandId": "brand-russell",
      "modelNumber": "SP18AZ48AJVC",
      "normalizedModelNumber": "sp18az48ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
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
      "id": "model-russell-rd17az48aj3n",
      "slug": "russell-rd17az48aj3n",
      "name": "RUSSELL RD17AZ48AJ3N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD17AZ48AJ3N",
      "normalizedModelNumber": "rd17az48aj3n",
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
      "id": "model-russell-rd17az24aj3n",
      "slug": "russell-rd17az24aj3n",
      "name": "RUSSELL RD17AZ24AJ3N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD17AZ24AJ3N",
      "normalizedModelNumber": "rd17az24aj3n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-russell-sp15ay48aj2n",
      "slug": "russell-sp15ay48aj2n",
      "name": "RUSSELL SP15AY48AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AY48AJ2N",
      "normalizedModelNumber": "sp15ay48aj2n",
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
      "id": "model-russell-rd16ay60ajvc",
      "slug": "russell-rd16ay60ajvc",
      "name": "RUSSELL RD16AY60AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD16AY60AJVC",
      "normalizedModelNumber": "rd16ay60ajvc",
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
      "id": "model-russell-rd16ay48ajvc",
      "slug": "russell-rd16ay48ajvc",
      "name": "RUSSELL RD16AY48AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD16AY48AJVC",
      "normalizedModelNumber": "rd16ay48ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 40500,
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
      "id": "model-russell-rd16ay24ajvc",
      "slug": "russell-rd16ay24ajvc",
      "name": "RUSSELL RD16AY24AJVC",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RD16AY24AJVC",
      "normalizedModelNumber": "rd16ay24ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-russell-sp15az24aj2n",
      "slug": "russell-sp15az24aj2n",
      "name": "RUSSELL SP15AZ24AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AZ24AJ2N",
      "normalizedModelNumber": "sp15az24aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-russell-sp15az30aj2n",
      "slug": "russell-sp15az30aj2n",
      "name": "RUSSELL SP15AZ30AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AZ30AJ2N",
      "normalizedModelNumber": "sp15az30aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
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
      "id": "model-russell-sp15ay42aj2n",
      "slug": "russell-sp15ay42aj2n",
      "name": "RUSSELL SP15AY42AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AY42AJ2N",
      "normalizedModelNumber": "sp15ay42aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 40000,
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
      "id": "model-russell-sp15ay18aj2n",
      "slug": "russell-sp15ay18aj2n",
      "name": "RUSSELL SP15AY18AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AY18AJ2N",
      "normalizedModelNumber": "sp15ay18aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17100,
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
      "id": "model-russell-sp15ay36aj2n",
      "slug": "russell-sp15ay36aj2n",
      "name": "RUSSELL SP15AY36AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AY36AJ2N",
      "normalizedModelNumber": "sp15ay36aj2n",
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
      "id": "model-russell-sp15az60aj2n",
      "slug": "russell-sp15az60aj2n",
      "name": "RUSSELL SP15AZ60AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AZ60AJ2N",
      "normalizedModelNumber": "sp15az60aj2n",
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
      "id": "model-russell-sp14ay42aj2n",
      "slug": "russell-sp14ay42aj2n",
      "name": "RUSSELL SP14AY42AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP14AY42AJ2N",
      "normalizedModelNumber": "sp14ay42aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 40000,
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
      "id": "model-russell-sp14ay60aj2n",
      "slug": "russell-sp14ay60aj2n",
      "name": "RUSSELL SP14AY60AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP14AY60AJ2N",
      "normalizedModelNumber": "sp14ay60aj2n",
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
      "id": "model-russell-sp15ay30aj2n",
      "slug": "russell-sp15ay30aj2n",
      "name": "RUSSELL SP15AY30AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AY30AJ2N",
      "normalizedModelNumber": "sp15ay30aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
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
      "id": "model-russell-sp15ay60aj2n",
      "slug": "russell-sp15ay60aj2n",
      "name": "RUSSELL SP15AY60AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AY60AJ2N",
      "normalizedModelNumber": "sp15ay60aj2n",
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
      "id": "model-russell-sp15az18aj2n",
      "slug": "russell-sp15az18aj2n",
      "name": "RUSSELL SP15AZ18AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AZ18AJ2N",
      "normalizedModelNumber": "sp15az18aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17100,
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
      "id": "model-russell-sp15ay24aj2n",
      "slug": "russell-sp15ay24aj2n",
      "name": "RUSSELL SP15AY24AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AY24AJ2N",
      "normalizedModelNumber": "sp15ay24aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-russell-sp15az36aj2n",
      "slug": "russell-sp15az36aj2n",
      "name": "RUSSELL SP15AZ36AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AZ36AJ2N",
      "normalizedModelNumber": "sp15az36aj2n",
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
      "id": "model-russell-sp15az48aj2n",
      "slug": "russell-sp15az48aj2n",
      "name": "RUSSELL SP15AZ48AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AZ48AJ2N",
      "normalizedModelNumber": "sp15az48aj2n",
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
      "id": "model-russell-sp15az42aj2n",
      "slug": "russell-sp15az42aj2n",
      "name": "RUSSELL SP15AZ42AJ2N",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "SP15AZ42AJ2N",
      "normalizedModelNumber": "sp15az42aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 40000,
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
      "id": "model-russell-rdfxyc024ajv",
      "slug": "russell-rdfxyc024ajv",
      "name": "RUSSELL RDFXYC024AJV",
      "seriesId": "series-russell-rdfxyc",
      "brandId": "brand-russell",
      "modelNumber": "RDFXYC024AJV",
      "normalizedModelNumber": "rdfxyc024ajv",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-russell-rdfxyc036ajv",
      "slug": "russell-rdfxyc036ajv",
      "name": "RUSSELL RDFXYC036AJV",
      "seriesId": "series-russell-rdfxyc",
      "brandId": "brand-russell",
      "modelNumber": "RDFXYC036AJV",
      "normalizedModelNumber": "rdfxyc036ajv",
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
      "id": "model-russell-rdfxyc048ajv",
      "slug": "russell-rdfxyc048ajv",
      "name": "RUSSELL RDFXYC048AJV",
      "seriesId": "series-russell-rdfxyc",
      "brandId": "brand-russell",
      "modelNumber": "RDFXYC048AJV",
      "normalizedModelNumber": "rdfxyc048ajv",
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
      "id": "model-russell-rdfxyc060ajv",
      "slug": "russell-rdfxyc060ajv",
      "name": "RUSSELL RDFXYC060AJV",
      "seriesId": "series-russell-rdfxyc",
      "brandId": "brand-russell",
      "modelNumber": "RDFXYC060AJV",
      "normalizedModelNumber": "rdfxyc060ajv",
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
      "id": "model-russell-rhpbyc036ajt",
      "slug": "russell-rhpbyc036ajt",
      "name": "RUSSELL RHPBYC036AJT",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RHPBYC036AJT",
      "normalizedModelNumber": "rhpbyc036ajt",
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
      "id": "model-russell-rhpbyc048ajt",
      "slug": "russell-rhpbyc048ajt",
      "name": "RUSSELL RHPBYC048AJT",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RHPBYC048AJT",
      "normalizedModelNumber": "rhpbyc048ajt",
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
      "id": "model-russell-rhpbyc060ajt",
      "slug": "russell-rhpbyc060ajt",
      "name": "RUSSELL RHPBYC060AJT",
      "seriesId": "series-russell-vantix",
      "brandId": "brand-russell",
      "modelNumber": "RHPBYC060AJT",
      "normalizedModelNumber": "rhpbyc060ajt",
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
      "id": "model-russell-rhpxyc024ajt",
      "slug": "russell-rhpxyc024ajt",
      "name": "RUSSELL RHPXYC024AJT",
      "seriesId": "series-russell-rhpxyc",
      "brandId": "brand-russell",
      "modelNumber": "RHPXYC024AJT",
      "normalizedModelNumber": "rhpxyc024ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-russell-rhpxyc036ajt",
      "slug": "russell-rhpxyc036ajt",
      "name": "RUSSELL RHPXYC036AJT",
      "seriesId": "series-russell-rhpxyc",
      "brandId": "brand-russell",
      "modelNumber": "RHPXYC036AJT",
      "normalizedModelNumber": "rhpxyc036ajt",
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
      "id": "model-russell-rhpxyc048ajt",
      "slug": "russell-rhpxyc048ajt",
      "name": "RUSSELL RHPXYC048AJT",
      "seriesId": "series-russell-rhpxyc",
      "brandId": "brand-russell",
      "modelNumber": "RHPXYC048AJT",
      "normalizedModelNumber": "rhpxyc048ajt",
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
      "id": "model-russell-rhpxyc060ajt",
      "slug": "russell-rhpxyc060ajt",
      "name": "RUSSELL RHPXYC060AJT",
      "seriesId": "series-russell-rhpxyc",
      "brandId": "brand-russell",
      "modelNumber": "RHPXYC060AJT",
      "normalizedModelNumber": "rhpxyc060ajt",
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
      "id": "model-russell-rhpxzs024ajt",
      "slug": "russell-rhpxzs024ajt",
      "name": "RUSSELL RHPXZS024AJT",
      "seriesId": "series-russell-rhpxzs",
      "brandId": "brand-russell",
      "modelNumber": "RHPXZS024AJT",
      "normalizedModelNumber": "rhpxzs024ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23600,
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
      "id": "model-russell-rhpxzs036ajt",
      "slug": "russell-rhpxzs036ajt",
      "name": "RUSSELL RHPXZS036AJT",
      "seriesId": "series-russell-rhpxzs",
      "brandId": "brand-russell",
      "modelNumber": "RHPXZS036AJT",
      "normalizedModelNumber": "rhpxzs036ajt",
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
      "id": "model-russell-rhpxzs048ajt",
      "slug": "russell-rhpxzs048ajt",
      "name": "RUSSELL RHPXZS048AJT",
      "seriesId": "series-russell-rhpxzs",
      "brandId": "brand-russell",
      "modelNumber": "RHPXZS048AJT",
      "normalizedModelNumber": "rhpxzs048ajt",
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
      "id": "model-russell-rhpxzs060ajt",
      "slug": "russell-rhpxzs060ajt",
      "name": "RUSSELL RHPXZS060AJT",
      "seriesId": "series-russell-rhpxzs",
      "brandId": "brand-russell",
      "modelNumber": "RHPXZS060AJT",
      "normalizedModelNumber": "rhpxzs060ajt",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-russell-sp19ay24ajvc",
      "modelNumber": "SP19AY24AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp19ay36ajvc",
      "modelNumber": "SP19AY36AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp18az24ajvc",
      "modelNumber": "SP18AZ24AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rd18ay36ajvc",
      "modelNumber": "RD18AY36AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rd18ay24ajvc",
      "modelNumber": "RD18AY24AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rd17az36aj3n",
      "modelNumber": "RD17AZ36AJ3N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rd18ay48ajvc",
      "modelNumber": "RD18AY48AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp19ay48ajvc",
      "modelNumber": "SP19AY48AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp18az36ajvc",
      "modelNumber": "SP18AZ36AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rd18ay60ajvc",
      "modelNumber": "RD18AY60AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rd17az60aj3n",
      "modelNumber": "RD17AZ60AJ3N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-sp18az48ajvc",
      "modelNumber": "SP18AZ48AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rd17az48aj3n",
      "modelNumber": "RD17AZ48AJ3N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rd17az24aj3n",
      "modelNumber": "RD17AZ24AJ3N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-sp15ay48aj2n",
      "modelNumber": "SP15AY48AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rd16ay60ajvc",
      "modelNumber": "RD16AY60AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rd16ay48ajvc",
      "modelNumber": "RD16AY48AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rd16ay24ajvc",
      "modelNumber": "RD16AY24AJVC",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp15az24aj2n",
      "modelNumber": "SP15AZ24AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-sp15az30aj2n",
      "modelNumber": "SP15AZ30AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-sp15ay42aj2n",
      "modelNumber": "SP15AY42AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp15ay18aj2n",
      "modelNumber": "SP15AY18AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp15ay36aj2n",
      "modelNumber": "SP15AY36AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp15az60aj2n",
      "modelNumber": "SP15AZ60AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-sp14ay42aj2n",
      "modelNumber": "SP14AY42AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp14ay60aj2n",
      "modelNumber": "SP14AY60AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp15ay30aj2n",
      "modelNumber": "SP15AY30AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp15ay60aj2n",
      "modelNumber": "SP15AY60AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp15az18aj2n",
      "modelNumber": "SP15AZ18AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-sp15ay24aj2n",
      "modelNumber": "SP15AY24AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-sp15az36aj2n",
      "modelNumber": "SP15AZ36AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-sp15az48aj2n",
      "modelNumber": "SP15AZ48AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-sp15az42aj2n",
      "modelNumber": "SP15AZ42AJ2N",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rdfxyc024ajv",
      "modelNumber": "RDFXYC024AJV",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rdfxyc036ajv",
      "modelNumber": "RDFXYC036AJV",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rdfxyc048ajv",
      "modelNumber": "RDFXYC048AJV",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rdfxyc060ajv",
      "modelNumber": "RDFXYC060AJV",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rhpbyc036ajt",
      "modelNumber": "RHPBYC036AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rhpbyc048ajt",
      "modelNumber": "RHPBYC048AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rhpbyc060ajt",
      "modelNumber": "RHPBYC060AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rhpxyc024ajt",
      "modelNumber": "RHPXYC024AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rhpxyc036ajt",
      "modelNumber": "RHPXYC036AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rhpxyc048ajt",
      "modelNumber": "RHPXYC048AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rhpxyc060ajt",
      "modelNumber": "RHPXYC060AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-russell-rhpxzs024ajt",
      "modelNumber": "RHPXZS024AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rhpxzs036ajt",
      "modelNumber": "RHPXZS036AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rhpxzs048ajt",
      "modelNumber": "RHPXZS048AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-russell-rhpxzs060ajt",
      "modelNumber": "RHPXZS060AJT",
      "brandId": "brand-russell",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-tcfy2421heaam",
      "modelNumber": "TCFY2421HEAAM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3621meaam",
      "modelNumber": "TCFY3621MEAAM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz2421heaam",
      "modelNumber": "TCFZ2421HEAAM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy3621meaca",
      "modelNumber": "SHMVY3621MEACA",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy3621stacn",
      "modelNumber": "SH2VY3621STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy2417stacn",
      "modelNumber": "SH2VY2417STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy2417seacn",
      "modelNumber": "SHMVY2417SEACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy2421meacn",
      "modelNumber": "SHMVY2421MEACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz3621mtana",
      "modelNumber": "SH2VZ3621MTANA",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3621mtanm",
      "modelNumber": "TCFY3621MTANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3617stanm",
      "modelNumber": "TCFY3617STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy3621mtacn",
      "modelNumber": "SH2VY3621MTACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy6024seacn",
      "modelNumber": "SHMVY6024SEACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy4824stacn",
      "modelNumber": "SH2VY4824STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy4824stann",
      "modelNumber": "SH2CY4824STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3621stanm",
      "modelNumber": "TCFY3621STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3624mtanm",
      "modelNumber": "TCFY3624MTANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy4821seaca",
      "modelNumber": "SHMVY4821SEACA",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz6021seaam",
      "modelNumber": "TCFZ6021SEAAM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4821seaam",
      "modelNumber": "TCFY4821SEAAM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy3617stacn",
      "modelNumber": "SH2VY3617STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy3617stann",
      "modelNumber": "SH2CY3617STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy3621stann",
      "modelNumber": "SH2CY3621STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-rh2vy3621mtacn",
      "modelNumber": "RH2VY3621MTACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz3621mtann",
      "modelNumber": "SH2VZ3621MTANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy6024stann",
      "modelNumber": "SH2CY6024STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy6024stacn",
      "modelNumber": "SH2VY6024STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy4821stacn",
      "modelNumber": "SH2VY4821STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4821stanm",
      "modelNumber": "TCFY4821STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4824mtanm",
      "modelNumber": "TCFY4824MTANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4824stanm",
      "modelNumber": "TCFY4824STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy2421mtanm",
      "modelNumber": "TCFY2421MTANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3621mtaam",
      "modelNumber": "TCFZ3621MTAAM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh3vz4821stacn",
      "modelNumber": "SH3VZ4821STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh3vz3617stacn",
      "modelNumber": "SH3VZ3617STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy2417stanm",
      "modelNumber": "TCFY2417STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-rh2vy3617stacn",
      "modelNumber": "RH2VY3617STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-rh2vy6024stacn",
      "modelNumber": "RH2VY6024STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy4824mtann",
      "modelNumber": "SH2CY4824MTANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy4821stann",
      "modelNumber": "SH2CY4821STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz6024stanm",
      "modelNumber": "TCFZ6024STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3621mtanm",
      "modelNumber": "TCFZ3621MTANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz3617stann",
      "modelNumber": "SH2VZ3617STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvz6021seaca",
      "modelNumber": "SHMVZ6021SEACA",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvz2421heaca",
      "modelNumber": "SHMVZ2421HEACA",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy2417mtanm",
      "modelNumber": "TCFY2417MTANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz3621mtann",
      "modelNumber": "SH2CZ3621MTANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz3621mtana",
      "modelNumber": "SH2CZ3621MTANA",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz3621stann",
      "modelNumber": "SH2CZ3621STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh3vz6024stacn",
      "modelNumber": "SH3VZ6024STACN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy6021staam",
      "modelNumber": "TCFY6021STAAM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy6024stanm",
      "modelNumber": "TCFY6024STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy6021staca",
      "modelNumber": "SH2VY6021STACA",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz6024seanm",
      "modelNumber": "TCFZ6024SEANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz2417stann",
      "modelNumber": "SH2VZ2417STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2ty3624stans",
      "modelNumber": "RF2TY3624STANS",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sb2cy3621stanm",
      "modelNumber": "SB2CY3621STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz6024stann",
      "modelNumber": "SH2CZ6024STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3617stanmrxmd-c04",
      "modelNumber": "TCFY3617STANM+RXMD-C04",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3621stanmrxmd-c04",
      "modelNumber": "TCFY3621STANM+RXMD-C04",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2ty2421stans",
      "modelNumber": "RF2TY2421STANS",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy2417stann",
      "modelNumber": "SH2CY2417STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3621stanm",
      "modelNumber": "TCFZ3621STANM",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz3617stann",
      "modelNumber": "SH2CZ3617STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2tz3624stans",
      "modelNumber": "RF2TZ3624STANS",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2tz2421stans",
      "modelNumber": "RF2TZ2421STANS",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz2417stann",
      "modelNumber": "SH2CZ2417STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz4821stann",
      "modelNumber": "SH2CZ4821STANN",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33609",
      "modelNumber": "IU-33609",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33610",
      "modelNumber": "IU-33610",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33611",
      "modelNumber": "IU-33611",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33612",
      "modelNumber": "IU-33612",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33613",
      "modelNumber": "IU-33613",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33614",
      "modelNumber": "IU-33614",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33615",
      "modelNumber": "IU-33615",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33616",
      "modelNumber": "IU-33616",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33617",
      "modelNumber": "IU-33617",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33618",
      "modelNumber": "IU-33618",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33619",
      "modelNumber": "IU-33619",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33620",
      "modelNumber": "IU-33620",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33621",
      "modelNumber": "IU-33621",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33622",
      "modelNumber": "IU-33622",
      "brandId": "brand-russell",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-33623",
      "modelNumber": "IU-33623",
      "brandId": "brand-russell",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-russell-sp19ay24ajvc-tcfy2421heaam",
      "slug": "russell-sp19ay24ajvc-tcfy2421heaam",
      "modelId": "model-russell-sp19ay24ajvc",
      "outdoorUnitId": "ou-russell-sp19ay24ajvc",
      "indoorUnitId": "iu-tcfy2421heaam",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp19ay36ajvc-tcfy3621meaam",
      "slug": "russell-sp19ay36ajvc-tcfy3621meaam",
      "modelId": "model-russell-sp19ay36ajvc",
      "outdoorUnitId": "ou-russell-sp19ay36ajvc",
      "indoorUnitId": "iu-tcfy3621meaam",
      "minHeatingTempC": -15,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp18az24ajvc-tcfz2421heaam",
      "slug": "russell-sp18az24ajvc-tcfz2421heaam",
      "modelId": "model-russell-sp18az24ajvc",
      "outdoorUnitId": "ou-russell-sp18az24ajvc",
      "indoorUnitId": "iu-tcfz2421heaam",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp19ay24ajvc-shmvy3621meaca",
      "slug": "russell-sp19ay24ajvc-shmvy3621meaca",
      "modelId": "model-russell-sp19ay24ajvc",
      "outdoorUnitId": "ou-russell-sp19ay24ajvc",
      "indoorUnitId": "iu-shmvy3621meaca",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-sh2vy3621stacn",
      "slug": "russell-rd18ay36ajvc-sh2vy3621stacn",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-sh2vy3621stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp19ay36ajvc-shmvy3621meaca",
      "slug": "russell-sp19ay36ajvc-shmvy3621meaca",
      "modelId": "model-russell-sp19ay36ajvc",
      "outdoorUnitId": "ou-russell-sp19ay36ajvc",
      "indoorUnitId": "iu-shmvy3621meaca",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay24ajvc-sh2vy2417stacn",
      "slug": "russell-rd18ay24ajvc-sh2vy2417stacn",
      "modelId": "model-russell-rd18ay24ajvc",
      "outdoorUnitId": "ou-russell-rd18ay24ajvc",
      "indoorUnitId": "iu-sh2vy2417stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay24ajvc-shmvy2417seacn",
      "slug": "russell-rd18ay24ajvc-shmvy2417seacn",
      "modelId": "model-russell-rd18ay24ajvc",
      "outdoorUnitId": "ou-russell-rd18ay24ajvc",
      "indoorUnitId": "iu-shmvy2417seacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay24ajvc-shmvy2421meacn",
      "slug": "russell-rd18ay24ajvc-shmvy2421meacn",
      "modelId": "model-russell-rd18ay24ajvc",
      "outdoorUnitId": "ou-russell-rd18ay24ajvc",
      "indoorUnitId": "iu-shmvy2421meacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-sh2vz3621mtana",
      "slug": "russell-rd17az36aj3n-sh2vz3621mtana",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-sh2vz3621mtana",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-tcfy3621mtanm",
      "slug": "russell-rd18ay36ajvc-tcfy3621mtanm",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-tcfy3621mtanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-tcfy3617stanm",
      "slug": "russell-rd18ay36ajvc-tcfy3617stanm",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-tcfy3617stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-sh2vy3621mtacn",
      "slug": "russell-rd18ay36ajvc-sh2vy3621mtacn",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-sh2vy3621mtacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-shmvy6024seacn",
      "slug": "russell-rd18ay48ajvc-shmvy6024seacn",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-shmvy6024seacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-sh2vy4824stacn",
      "slug": "russell-rd18ay48ajvc-sh2vy4824stacn",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-sh2vy4824stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-sh2cy4824stann",
      "slug": "russell-rd18ay48ajvc-sh2cy4824stann",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-sh2cy4824stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-tcfy3621stanm",
      "slug": "russell-rd18ay36ajvc-tcfy3621stanm",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-tcfy3621stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-tcfy3624mtanm",
      "slug": "russell-rd18ay36ajvc-tcfy3624mtanm",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-tcfy3624mtanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp19ay48ajvc-shmvy4821seaca",
      "slug": "russell-sp19ay48ajvc-shmvy4821seaca",
      "modelId": "model-russell-sp19ay48ajvc",
      "outdoorUnitId": "ou-russell-sp19ay48ajvc",
      "indoorUnitId": "iu-shmvy4821seaca",
      "minHeatingTempC": -15,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp18az36ajvc-tcfz6021seaam",
      "slug": "russell-sp18az36ajvc-tcfz6021seaam",
      "modelId": "model-russell-sp18az36ajvc",
      "outdoorUnitId": "ou-russell-sp18az36ajvc",
      "indoorUnitId": "iu-tcfz6021seaam",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp19ay48ajvc-tcfy4821seaam",
      "slug": "russell-sp19ay48ajvc-tcfy4821seaam",
      "modelId": "model-russell-sp19ay48ajvc",
      "outdoorUnitId": "ou-russell-sp19ay48ajvc",
      "indoorUnitId": "iu-tcfy4821seaam",
      "minHeatingTempC": -15,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-sh2vy3617stacn",
      "slug": "russell-rd18ay36ajvc-sh2vy3617stacn",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-sh2vy3617stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-sh2cy3617stann",
      "slug": "russell-rd18ay36ajvc-sh2cy3617stann",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-sh2cy3617stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-sh2cy3621stann",
      "slug": "russell-rd18ay36ajvc-sh2cy3621stann",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-sh2cy3621stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-rh2vy3621mtacn",
      "slug": "russell-rd18ay36ajvc-rh2vy3621mtacn",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-rh2vy3621mtacn",
      "minHeatingTempC": -15,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-sh2vz3621mtann",
      "slug": "russell-rd17az36aj3n-sh2vz3621mtann",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-sh2vz3621mtann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay60ajvc-sh2cy6024stann",
      "slug": "russell-rd18ay60ajvc-sh2cy6024stann",
      "modelId": "model-russell-rd18ay60ajvc",
      "outdoorUnitId": "ou-russell-rd18ay60ajvc",
      "indoorUnitId": "iu-sh2cy6024stann",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay60ajvc-sh2vy6024stacn",
      "slug": "russell-rd18ay60ajvc-sh2vy6024stacn",
      "modelId": "model-russell-rd18ay60ajvc",
      "outdoorUnitId": "ou-russell-rd18ay60ajvc",
      "indoorUnitId": "iu-sh2vy6024stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-sh2vy4821stacn",
      "slug": "russell-rd18ay48ajvc-sh2vy4821stacn",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-sh2vy4821stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-sh2vy6024stacn",
      "slug": "russell-rd18ay48ajvc-sh2vy6024stacn",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-sh2vy6024stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-tcfy4821stanm",
      "slug": "russell-rd18ay48ajvc-tcfy4821stanm",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-tcfy4821stanm",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-tcfy4824mtanm",
      "slug": "russell-rd18ay48ajvc-tcfy4824mtanm",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-tcfy4824mtanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-tcfy4824stanm",
      "slug": "russell-rd18ay48ajvc-tcfy4824stanm",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-tcfy4824stanm",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay24ajvc-tcfy2421mtanm",
      "slug": "russell-rd18ay24ajvc-tcfy2421mtanm",
      "modelId": "model-russell-rd18ay24ajvc",
      "outdoorUnitId": "ou-russell-rd18ay24ajvc",
      "indoorUnitId": "iu-tcfy2421mtanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-tcfz3621mtaam",
      "slug": "russell-rd17az36aj3n-tcfz3621mtaam",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-tcfz3621mtaam",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-sh3vz4821stacn",
      "slug": "russell-rd17az36aj3n-sh3vz4821stacn",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-sh3vz4821stacn",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-sh3vz3617stacn",
      "slug": "russell-rd17az36aj3n-sh3vz3617stacn",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-sh3vz3617stacn",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay24ajvc-tcfy2417stanm",
      "slug": "russell-rd18ay24ajvc-tcfy2417stanm",
      "modelId": "model-russell-rd18ay24ajvc",
      "outdoorUnitId": "ou-russell-rd18ay24ajvc",
      "indoorUnitId": "iu-tcfy2417stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay24ajvc-rh2vy3617stacn",
      "slug": "russell-rd18ay24ajvc-rh2vy3617stacn",
      "modelId": "model-russell-rd18ay24ajvc",
      "outdoorUnitId": "ou-russell-rd18ay24ajvc",
      "indoorUnitId": "iu-rh2vy3617stacn",
      "minHeatingTempC": -15,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-rh2vy6024stacn",
      "slug": "russell-rd18ay48ajvc-rh2vy6024stacn",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-rh2vy6024stacn",
      "minHeatingTempC": -15,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-sh2cy4824mtann",
      "slug": "russell-rd18ay48ajvc-sh2cy4824mtann",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-sh2cy4824mtann",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay48ajvc-sh2cy4821stann",
      "slug": "russell-rd18ay48ajvc-sh2cy4821stann",
      "modelId": "model-russell-rd18ay48ajvc",
      "outdoorUnitId": "ou-russell-rd18ay48ajvc",
      "indoorUnitId": "iu-sh2cy4821stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay60ajvc-shmvy6024seacn",
      "slug": "russell-rd18ay60ajvc-shmvy6024seacn",
      "modelId": "model-russell-rd18ay60ajvc",
      "outdoorUnitId": "ou-russell-rd18ay60ajvc",
      "indoorUnitId": "iu-shmvy6024seacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay60ajvc-rh2vy6024stacn",
      "slug": "russell-rd18ay60ajvc-rh2vy6024stacn",
      "modelId": "model-russell-rd18ay60ajvc",
      "outdoorUnitId": "ou-russell-rd18ay60ajvc",
      "indoorUnitId": "iu-rh2vy6024stacn",
      "minHeatingTempC": -15,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az60aj3n-tcfz6024stanm",
      "slug": "russell-rd17az60aj3n-tcfz6024stanm",
      "modelId": "model-russell-rd17az60aj3n",
      "outdoorUnitId": "ou-russell-rd17az60aj3n",
      "indoorUnitId": "iu-tcfz6024stanm",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-tcfz3621mtanm",
      "slug": "russell-rd17az36aj3n-tcfz3621mtanm",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-tcfz3621mtanm",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-sh2vz3617stann",
      "slug": "russell-rd17az36aj3n-sh2vz3617stann",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-sh2vz3617stann",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp18az48ajvc-shmvz6021seaca",
      "slug": "russell-sp18az48ajvc-shmvz6021seaca",
      "modelId": "model-russell-sp18az48ajvc",
      "outdoorUnitId": "ou-russell-sp18az48ajvc",
      "indoorUnitId": "iu-shmvz6021seaca",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp18az24ajvc-shmvz2421heaca",
      "slug": "russell-sp18az24ajvc-shmvz2421heaca",
      "modelId": "model-russell-sp18az24ajvc",
      "outdoorUnitId": "ou-russell-sp18az24ajvc",
      "indoorUnitId": "iu-shmvz2421heaca",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp18az36ajvc-shmvz6021seaca",
      "slug": "russell-sp18az36ajvc-shmvz6021seaca",
      "modelId": "model-russell-sp18az36ajvc",
      "outdoorUnitId": "ou-russell-sp18az36ajvc",
      "indoorUnitId": "iu-shmvz6021seaca",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay24ajvc-sh2vy3617stacn",
      "slug": "russell-rd18ay24ajvc-sh2vy3617stacn",
      "modelId": "model-russell-rd18ay24ajvc",
      "outdoorUnitId": "ou-russell-rd18ay24ajvc",
      "indoorUnitId": "iu-sh2vy3617stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay24ajvc-tcfy2417mtanm",
      "slug": "russell-rd18ay24ajvc-tcfy2417mtanm",
      "modelId": "model-russell-rd18ay24ajvc",
      "outdoorUnitId": "ou-russell-rd18ay24ajvc",
      "indoorUnitId": "iu-tcfy2417mtanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-sh2cz3621mtann",
      "slug": "russell-rd17az36aj3n-sh2cz3621mtann",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-sh2cz3621mtann",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-sh2cz3621mtana",
      "slug": "russell-rd17az36aj3n-sh2cz3621mtana",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-sh2cz3621mtana",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az36aj3n-sh2cz3621stann",
      "slug": "russell-rd17az36aj3n-sh2cz3621stann",
      "modelId": "model-russell-rd17az36aj3n",
      "outdoorUnitId": "ou-russell-rd17az36aj3n",
      "indoorUnitId": "iu-sh2cz3621stann",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az48aj3n-sh3vz6024stacn",
      "slug": "russell-rd17az48aj3n-sh3vz6024stacn",
      "modelId": "model-russell-rd17az48aj3n",
      "outdoorUnitId": "ou-russell-rd17az48aj3n",
      "indoorUnitId": "iu-sh3vz6024stacn",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay60ajvc-tcfy6021staam",
      "slug": "russell-rd18ay60ajvc-tcfy6021staam",
      "modelId": "model-russell-rd18ay60ajvc",
      "outdoorUnitId": "ou-russell-rd18ay60ajvc",
      "indoorUnitId": "iu-tcfy6021staam",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay60ajvc-tcfy6024stanm",
      "slug": "russell-rd18ay60ajvc-tcfy6024stanm",
      "modelId": "model-russell-rd18ay60ajvc",
      "outdoorUnitId": "ou-russell-rd18ay60ajvc",
      "indoorUnitId": "iu-tcfy6024stanm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay60ajvc-sh2vy6021staca",
      "slug": "russell-rd18ay60ajvc-sh2vy6021staca",
      "modelId": "model-russell-rd18ay60ajvc",
      "outdoorUnitId": "ou-russell-rd18ay60ajvc",
      "indoorUnitId": "iu-sh2vy6021staca",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az24aj3n-sh2vz3617stann",
      "slug": "russell-rd17az24aj3n-sh2vz3617stann",
      "modelId": "model-russell-rd17az24aj3n",
      "outdoorUnitId": "ou-russell-rd17az24aj3n",
      "indoorUnitId": "iu-sh2vz3617stann",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd17az48aj3n-tcfz6024seanm",
      "slug": "russell-rd17az48aj3n-tcfz6024seanm",
      "modelId": "model-russell-rd17az48aj3n",
      "outdoorUnitId": "ou-russell-rd17az48aj3n",
      "indoorUnitId": "iu-tcfz6024seanm",
      "minHeatingTempC": -25,
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay48aj2n-sh2vy4824stacn",
      "slug": "russell-sp15ay48aj2n-sh2vy4824stacn",
      "modelId": "model-russell-sp15ay48aj2n",
      "outdoorUnitId": "ou-russell-sp15ay48aj2n",
      "indoorUnitId": "iu-sh2vy4824stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd16ay60ajvc-shmvy6024seacn",
      "slug": "russell-rd16ay60ajvc-shmvy6024seacn",
      "modelId": "model-russell-rd16ay60ajvc",
      "outdoorUnitId": "ou-russell-rd16ay60ajvc",
      "indoorUnitId": "iu-shmvy6024seacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd16ay48ajvc-shmvy4821seaca",
      "slug": "russell-rd16ay48ajvc-shmvy4821seaca",
      "modelId": "model-russell-rd16ay48ajvc",
      "outdoorUnitId": "ou-russell-rd16ay48ajvc",
      "indoorUnitId": "iu-shmvy4821seaca",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd16ay24ajvc-shmvy2417seacn",
      "slug": "russell-rd16ay24ajvc-shmvy2417seacn",
      "modelId": "model-russell-rd16ay24ajvc",
      "outdoorUnitId": "ou-russell-rd16ay24ajvc",
      "indoorUnitId": "iu-shmvy2417seacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd16ay24ajvc-shmvy2421meacn",
      "slug": "russell-rd16ay24ajvc-shmvy2421meacn",
      "modelId": "model-russell-rd16ay24ajvc",
      "outdoorUnitId": "ou-russell-rd16ay24ajvc",
      "indoorUnitId": "iu-shmvy2421meacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az24aj2n-sh2vz2417stann",
      "slug": "russell-sp15az24aj2n-sh2vz2417stann",
      "modelId": "model-russell-sp15az24aj2n",
      "outdoorUnitId": "ou-russell-sp15az24aj2n",
      "indoorUnitId": "iu-sh2vz2417stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az30aj2n-sh2vz3617stann",
      "slug": "russell-sp15az30aj2n-sh2vz3617stann",
      "modelId": "model-russell-sp15az30aj2n",
      "outdoorUnitId": "ou-russell-sp15az30aj2n",
      "indoorUnitId": "iu-sh2vz3617stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay42aj2n-tcfy4824stanm",
      "slug": "russell-sp15ay42aj2n-tcfy4824stanm",
      "modelId": "model-russell-sp15ay42aj2n",
      "outdoorUnitId": "ou-russell-sp15ay42aj2n",
      "indoorUnitId": "iu-tcfy4824stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay18aj2n-tcfy2417stanm",
      "slug": "russell-sp15ay18aj2n-tcfy2417stanm",
      "modelId": "model-russell-sp15ay18aj2n",
      "outdoorUnitId": "ou-russell-sp15ay18aj2n",
      "indoorUnitId": "iu-tcfy2417stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay36aj2n-sh2vy3617stacn",
      "slug": "russell-sp15ay36aj2n-sh2vy3617stacn",
      "modelId": "model-russell-sp15ay36aj2n",
      "outdoorUnitId": "ou-russell-sp15ay36aj2n",
      "indoorUnitId": "iu-sh2vy3617stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay36aj2n-sh2vy3621stacn",
      "slug": "russell-sp15ay36aj2n-sh2vy3621stacn",
      "modelId": "model-russell-sp15ay36aj2n",
      "outdoorUnitId": "ou-russell-sp15ay36aj2n",
      "indoorUnitId": "iu-sh2vy3621stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay36aj2n-rf2ty3624stans",
      "slug": "russell-sp15ay36aj2n-rf2ty3624stans",
      "modelId": "model-russell-sp15ay36aj2n",
      "outdoorUnitId": "ou-russell-sp15ay36aj2n",
      "indoorUnitId": "iu-rf2ty3624stans",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay36aj2n-sb2cy3621stanm",
      "slug": "russell-sp15ay36aj2n-sb2cy3621stanm",
      "modelId": "model-russell-sp15ay36aj2n",
      "outdoorUnitId": "ou-russell-sp15ay36aj2n",
      "indoorUnitId": "iu-sb2cy3621stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay42aj2n-tcfy4821stanm",
      "slug": "russell-sp15ay42aj2n-tcfy4821stanm",
      "modelId": "model-russell-sp15ay42aj2n",
      "outdoorUnitId": "ou-russell-sp15ay42aj2n",
      "indoorUnitId": "iu-tcfy4821stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay42aj2n-sh2vy4824stacn",
      "slug": "russell-sp15ay42aj2n-sh2vy4824stacn",
      "modelId": "model-russell-sp15ay42aj2n",
      "outdoorUnitId": "ou-russell-sp15ay42aj2n",
      "indoorUnitId": "iu-sh2vy4824stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay42aj2n-sh2vy4821stacn",
      "slug": "russell-sp15ay42aj2n-sh2vy4821stacn",
      "modelId": "model-russell-sp15ay42aj2n",
      "outdoorUnitId": "ou-russell-sp15ay42aj2n",
      "indoorUnitId": "iu-sh2vy4821stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay36aj2n-tcfy3621stanm",
      "slug": "russell-sp15ay36aj2n-tcfy3621stanm",
      "modelId": "model-russell-sp15ay36aj2n",
      "outdoorUnitId": "ou-russell-sp15ay36aj2n",
      "indoorUnitId": "iu-tcfy3621stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az60aj2n-sh2cz6024stann",
      "slug": "russell-sp15az60aj2n-sh2cz6024stann",
      "modelId": "model-russell-sp15az60aj2n",
      "outdoorUnitId": "ou-russell-sp15az60aj2n",
      "indoorUnitId": "iu-sh2cz6024stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp14ay42aj2n-tcfy4824stanm",
      "slug": "russell-sp14ay42aj2n-tcfy4824stanm",
      "modelId": "model-russell-sp14ay42aj2n",
      "outdoorUnitId": "ou-russell-sp14ay42aj2n",
      "indoorUnitId": "iu-tcfy4824stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-tcfy3617stanmrxmd-c04",
      "slug": "russell-rd18ay36ajvc-tcfy3617stanmrxmd-c04",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-tcfy3617stanmrxmd-c04",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rd18ay36ajvc-tcfy3621stanmrxmd-c04",
      "slug": "russell-rd18ay36ajvc-tcfy3621stanmrxmd-c04",
      "modelId": "model-russell-rd18ay36ajvc",
      "outdoorUnitId": "ou-russell-rd18ay36ajvc",
      "indoorUnitId": "iu-tcfy3621stanmrxmd-c04",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp14ay60aj2n-sh2vy6024stacn",
      "slug": "russell-sp14ay60aj2n-sh2vy6024stacn",
      "modelId": "model-russell-sp14ay60aj2n",
      "outdoorUnitId": "ou-russell-sp14ay60aj2n",
      "indoorUnitId": "iu-sh2vy6024stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay36aj2n-sh2cy3617stann",
      "slug": "russell-sp15ay36aj2n-sh2cy3617stann",
      "modelId": "model-russell-sp15ay36aj2n",
      "outdoorUnitId": "ou-russell-sp15ay36aj2n",
      "indoorUnitId": "iu-sh2cy3617stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay30aj2n-sh2vy3621stacn",
      "slug": "russell-sp15ay30aj2n-sh2vy3621stacn",
      "modelId": "model-russell-sp15ay30aj2n",
      "outdoorUnitId": "ou-russell-sp15ay30aj2n",
      "indoorUnitId": "iu-sh2vy3621stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay30aj2n-sh2vy3617stacn",
      "slug": "russell-sp15ay30aj2n-sh2vy3617stacn",
      "modelId": "model-russell-sp15ay30aj2n",
      "outdoorUnitId": "ou-russell-sp15ay30aj2n",
      "indoorUnitId": "iu-sh2vy3617stacn",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay36aj2n-tcfy3617stanm",
      "slug": "russell-sp15ay36aj2n-tcfy3617stanm",
      "modelId": "model-russell-sp15ay36aj2n",
      "outdoorUnitId": "ou-russell-sp15ay36aj2n",
      "indoorUnitId": "iu-tcfy3617stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp14ay60aj2n-tcfy6021staam",
      "slug": "russell-sp14ay60aj2n-tcfy6021staam",
      "modelId": "model-russell-sp14ay60aj2n",
      "outdoorUnitId": "ou-russell-sp14ay60aj2n",
      "indoorUnitId": "iu-tcfy6021staam",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay18aj2n-rf2ty2421stans",
      "slug": "russell-sp15ay18aj2n-rf2ty2421stans",
      "modelId": "model-russell-sp15ay18aj2n",
      "outdoorUnitId": "ou-russell-sp15ay18aj2n",
      "indoorUnitId": "iu-rf2ty2421stans",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay18aj2n-sh2cy2417stann",
      "slug": "russell-sp15ay18aj2n-sh2cy2417stann",
      "modelId": "model-russell-sp15ay18aj2n",
      "outdoorUnitId": "ou-russell-sp15ay18aj2n",
      "indoorUnitId": "iu-sh2cy2417stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az30aj2n-tcfz3621stanm",
      "slug": "russell-sp15az30aj2n-tcfz3621stanm",
      "modelId": "model-russell-sp15az30aj2n",
      "outdoorUnitId": "ou-russell-sp15az30aj2n",
      "indoorUnitId": "iu-tcfz3621stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az30aj2n-sh2cz3617stann",
      "slug": "russell-sp15az30aj2n-sh2cz3617stann",
      "modelId": "model-russell-sp15az30aj2n",
      "outdoorUnitId": "ou-russell-sp15az30aj2n",
      "indoorUnitId": "iu-sh2cz3617stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az30aj2n-rf2tz3624stans",
      "slug": "russell-sp15az30aj2n-rf2tz3624stans",
      "modelId": "model-russell-sp15az30aj2n",
      "outdoorUnitId": "ou-russell-sp15az30aj2n",
      "indoorUnitId": "iu-rf2tz3624stans",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az24aj2n-rf2tz2421stans",
      "slug": "russell-sp15az24aj2n-rf2tz2421stans",
      "modelId": "model-russell-sp15az24aj2n",
      "outdoorUnitId": "ou-russell-sp15az24aj2n",
      "indoorUnitId": "iu-rf2tz2421stans",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay60aj2n-sh2cy6024stann",
      "slug": "russell-sp15ay60aj2n-sh2cy6024stann",
      "modelId": "model-russell-sp15ay60aj2n",
      "outdoorUnitId": "ou-russell-sp15ay60aj2n",
      "indoorUnitId": "iu-sh2cy6024stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az18aj2n-sh2cz2417stann",
      "slug": "russell-sp15az18aj2n-sh2cz2417stann",
      "modelId": "model-russell-sp15az18aj2n",
      "outdoorUnitId": "ou-russell-sp15az18aj2n",
      "indoorUnitId": "iu-sh2cz2417stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay42aj2n-sh2cy4821stann",
      "slug": "russell-sp15ay42aj2n-sh2cy4821stann",
      "modelId": "model-russell-sp15ay42aj2n",
      "outdoorUnitId": "ou-russell-sp15ay42aj2n",
      "indoorUnitId": "iu-sh2cy4821stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay48aj2n-sh2cy4821stann",
      "slug": "russell-sp15ay48aj2n-sh2cy4821stann",
      "modelId": "model-russell-sp15ay48aj2n",
      "outdoorUnitId": "ou-russell-sp15ay48aj2n",
      "indoorUnitId": "iu-sh2cy4821stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay30aj2n-sh2cy3617stann",
      "slug": "russell-sp15ay30aj2n-sh2cy3617stann",
      "modelId": "model-russell-sp15ay30aj2n",
      "outdoorUnitId": "ou-russell-sp15ay30aj2n",
      "indoorUnitId": "iu-sh2cy3617stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay24aj2n-tcfy2417stanm",
      "slug": "russell-sp15ay24aj2n-tcfy2417stanm",
      "modelId": "model-russell-sp15ay24aj2n",
      "outdoorUnitId": "ou-russell-sp15ay24aj2n",
      "indoorUnitId": "iu-tcfy2417stanm",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay24aj2n-sh2cy2417stann",
      "slug": "russell-sp15ay24aj2n-sh2cy2417stann",
      "modelId": "model-russell-sp15ay24aj2n",
      "outdoorUnitId": "ou-russell-sp15ay24aj2n",
      "indoorUnitId": "iu-sh2cy2417stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15ay24aj2n-rf2ty2421stans",
      "slug": "russell-sp15ay24aj2n-rf2ty2421stans",
      "modelId": "model-russell-sp15ay24aj2n",
      "outdoorUnitId": "ou-russell-sp15ay24aj2n",
      "indoorUnitId": "iu-rf2ty2421stans",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az36aj2n-rf2tz3624stans",
      "slug": "russell-sp15az36aj2n-rf2tz3624stans",
      "modelId": "model-russell-sp15az36aj2n",
      "outdoorUnitId": "ou-russell-sp15az36aj2n",
      "indoorUnitId": "iu-rf2tz3624stans",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az36aj2n-sh2cz3617stann",
      "slug": "russell-sp15az36aj2n-sh2cz3617stann",
      "modelId": "model-russell-sp15az36aj2n",
      "outdoorUnitId": "ou-russell-sp15az36aj2n",
      "indoorUnitId": "iu-sh2cz3617stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az36aj2n-sh2vz3617stann",
      "slug": "russell-sp15az36aj2n-sh2vz3617stann",
      "modelId": "model-russell-sp15az36aj2n",
      "outdoorUnitId": "ou-russell-sp15az36aj2n",
      "indoorUnitId": "iu-sh2vz3617stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az48aj2n-sh2cz4821stann",
      "slug": "russell-sp15az48aj2n-sh2cz4821stann",
      "modelId": "model-russell-sp15az48aj2n",
      "outdoorUnitId": "ou-russell-sp15az48aj2n",
      "indoorUnitId": "iu-sh2cz4821stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-sp15az42aj2n-sh2cz4821stann",
      "slug": "russell-sp15az42aj2n-sh2cz4821stann",
      "modelId": "model-russell-sp15az42aj2n",
      "outdoorUnitId": "ou-russell-sp15az42aj2n",
      "indoorUnitId": "iu-sh2cz4821stann",
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
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rdfxyc024ajv-iu-33609",
      "slug": "russell-rdfxyc024ajv-iu-33609",
      "modelId": "model-russell-rdfxyc024ajv",
      "outdoorUnitId": "ou-russell-rdfxyc024ajv",
      "indoorUnitId": "iu-iu-33609",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rdfxyc036ajv-iu-33610",
      "slug": "russell-rdfxyc036ajv-iu-33610",
      "modelId": "model-russell-rdfxyc036ajv",
      "outdoorUnitId": "ou-russell-rdfxyc036ajv",
      "indoorUnitId": "iu-iu-33610",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rdfxyc048ajv-iu-33611",
      "slug": "russell-rdfxyc048ajv-iu-33611",
      "modelId": "model-russell-rdfxyc048ajv",
      "outdoorUnitId": "ou-russell-rdfxyc048ajv",
      "indoorUnitId": "iu-iu-33611",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rdfxyc060ajv-iu-33612",
      "slug": "russell-rdfxyc060ajv-iu-33612",
      "modelId": "model-russell-rdfxyc060ajv",
      "outdoorUnitId": "ou-russell-rdfxyc060ajv",
      "indoorUnitId": "iu-iu-33612",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpbyc036ajt-iu-33613",
      "slug": "russell-rhpbyc036ajt-iu-33613",
      "modelId": "model-russell-rhpbyc036ajt",
      "outdoorUnitId": "ou-russell-rhpbyc036ajt",
      "indoorUnitId": "iu-iu-33613",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpbyc048ajt-iu-33614",
      "slug": "russell-rhpbyc048ajt-iu-33614",
      "modelId": "model-russell-rhpbyc048ajt",
      "outdoorUnitId": "ou-russell-rhpbyc048ajt",
      "indoorUnitId": "iu-iu-33614",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpbyc060ajt-iu-33615",
      "slug": "russell-rhpbyc060ajt-iu-33615",
      "modelId": "model-russell-rhpbyc060ajt",
      "outdoorUnitId": "ou-russell-rhpbyc060ajt",
      "indoorUnitId": "iu-iu-33615",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpxyc024ajt-iu-33616",
      "slug": "russell-rhpxyc024ajt-iu-33616",
      "modelId": "model-russell-rhpxyc024ajt",
      "outdoorUnitId": "ou-russell-rhpxyc024ajt",
      "indoorUnitId": "iu-iu-33616",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpxyc036ajt-iu-33617",
      "slug": "russell-rhpxyc036ajt-iu-33617",
      "modelId": "model-russell-rhpxyc036ajt",
      "outdoorUnitId": "ou-russell-rhpxyc036ajt",
      "indoorUnitId": "iu-iu-33617",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpxyc048ajt-iu-33618",
      "slug": "russell-rhpxyc048ajt-iu-33618",
      "modelId": "model-russell-rhpxyc048ajt",
      "outdoorUnitId": "ou-russell-rhpxyc048ajt",
      "indoorUnitId": "iu-iu-33618",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpxyc060ajt-iu-33619",
      "slug": "russell-rhpxyc060ajt-iu-33619",
      "modelId": "model-russell-rhpxyc060ajt",
      "outdoorUnitId": "ou-russell-rhpxyc060ajt",
      "indoorUnitId": "iu-iu-33619",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpxzs024ajt-iu-33620",
      "slug": "russell-rhpxzs024ajt-iu-33620",
      "modelId": "model-russell-rhpxzs024ajt",
      "outdoorUnitId": "ou-russell-rhpxzs024ajt",
      "indoorUnitId": "iu-iu-33620",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpxzs036ajt-iu-33621",
      "slug": "russell-rhpxzs036ajt-iu-33621",
      "modelId": "model-russell-rhpxzs036ajt",
      "outdoorUnitId": "ou-russell-rhpxzs036ajt",
      "indoorUnitId": "iu-iu-33621",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpxzs048ajt-iu-33622",
      "slug": "russell-rhpxzs048ajt-iu-33622",
      "modelId": "model-russell-rhpxzs048ajt",
      "outdoorUnitId": "ou-russell-rhpxzs048ajt",
      "indoorUnitId": "iu-iu-33622",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-russell-rhpxzs060ajt-iu-33623",
      "slug": "russell-rhpxzs060ajt-iu-33623",
      "modelId": "model-russell-rhpxzs060ajt",
      "outdoorUnitId": "ou-russell-rhpxzs060ajt",
      "indoorUnitId": "iu-iu-33623",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-russell-epa",
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
