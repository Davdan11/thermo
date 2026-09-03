import type { BrandDataset } from "../../types";

export const brand_sureDataset: BrandDataset = {
  "brand": {
    "id": "brand-sure",
    "slug": "sure",
    "name": "Sure",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Sure",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-sure-epa",
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
      "id": "series-sure-vantix",
      "slug": "sure-vantix",
      "name": "VANTIX",
      "brandId": "brand-sure",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série VANTIX de Sure",
      "imageUrl": "/images/series/sure-sure-vantix.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sure-vantix-vantix",
      "slug": "sure-vantix-vantix",
      "name": "VANTIX | Vantix",
      "brandId": "brand-sure",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série VANTIX | Vantix de Sure",
      "imageUrl": "/images/series/sure-sure-vantix-vantix.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sure-k-series",
      "slug": "sure-k-series",
      "name": "K-SERIES",
      "brandId": "brand-sure",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série K-SERIES de Sure",
      "imageUrl": "/images/series/sure-sure-k-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sure-none",
      "slug": "sure-none",
      "name": "NONE",
      "brandId": "brand-sure",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NONE de Sure",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sure-none-vantix",
      "slug": "sure-none-vantix",
      "name": "NONE | VANTIX",
      "brandId": "brand-sure",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NONE | VANTIX de Sure",
      "imageUrl": "/images/series/sure-sure-none-vantix.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sure-rdfxyc",
      "slug": "sure-rdfxyc",
      "name": "RDFXYC",
      "brandId": "brand-sure",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RDFXYC de Sure",
      "imageUrl": "/images/series/sure-sure-rdfxyc.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sure-rhpxyc",
      "slug": "sure-rhpxyc",
      "name": "RHPXYC",
      "brandId": "brand-sure",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHPXYC de Sure",
      "imageUrl": "/images/series/sure-sure-rhpxyc.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sure-rhpxzs",
      "slug": "sure-rhpxzs",
      "name": "RHPXZS",
      "brandId": "brand-sure",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série RHPXZS de Sure",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-sure-sp19ay36ajvc",
      "slug": "sure-sp19ay36ajvc",
      "name": "Sure SP19AY36AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp19ay24ajvc",
      "slug": "sure-sp19ay24ajvc",
      "name": "Sure SP19AY24AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rd18ay36ajvc",
      "slug": "sure-rd18ay36ajvc",
      "name": "Sure RD18AY36AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp18az24ajvc",
      "slug": "sure-sp18az24ajvc",
      "name": "Sure SP18AZ24AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rd18ay24ajvc",
      "slug": "sure-rd18ay24ajvc",
      "name": "Sure RD18AY24AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
      "modelNumber": "RD18AY24AJVC",
      "normalizedModelNumber": "rd18ay24ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 21400,
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
      "id": "model-sure-rd17az36aj3n",
      "slug": "sure-rd17az36aj3n",
      "name": "Sure RD17AZ36AJ3N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp19ay48ajvc",
      "slug": "sure-sp19ay48ajvc",
      "name": "Sure SP19AY48AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp18az36ajvc",
      "slug": "sure-sp18az36ajvc",
      "name": "Sure SP18AZ36AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rd18ay48ajvc",
      "slug": "sure-rd18ay48ajvc",
      "name": "Sure RD18AY48AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rd18ay60ajvc",
      "slug": "sure-rd18ay60ajvc",
      "name": "Sure RD18AY60AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp18az48ajvc",
      "slug": "sure-sp18az48ajvc",
      "name": "Sure SP18AZ48AJVC",
      "seriesId": "series-sure-k-series",
      "brandId": "brand-sure",
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
      "id": "model-sure-rd17az60aj3n",
      "slug": "sure-rd17az60aj3n",
      "name": "Sure RD17AZ60AJ3N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rd17az24aj3n",
      "slug": "sure-rd17az24aj3n",
      "name": "Sure RD17AZ24AJ3N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp17ay60ajvc",
      "slug": "sure-sp17ay60ajvc",
      "name": "Sure SP17AY60AJVC",
      "seriesId": "series-sure-none",
      "brandId": "brand-sure",
      "modelNumber": "SP17AY60AJVC",
      "normalizedModelNumber": "sp17ay60ajvc",
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
      "id": "model-sure-sp17ay24ajvc",
      "slug": "sure-sp17ay24ajvc",
      "name": "Sure SP17AY24AJVC",
      "seriesId": "series-sure-none",
      "brandId": "brand-sure",
      "modelNumber": "SP17AY24AJVC",
      "normalizedModelNumber": "sp17ay24ajvc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22600,
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
      "id": "model-sure-rd17az48aj3n",
      "slug": "sure-rd17az48aj3n",
      "name": "Sure RD17AZ48AJ3N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp17ay36ajvc",
      "slug": "sure-sp17ay36ajvc",
      "name": "Sure SP17AY36AJVC",
      "seriesId": "series-sure-none-vantix",
      "brandId": "brand-sure",
      "modelNumber": "SP17AY36AJVC",
      "normalizedModelNumber": "sp17ay36ajvc",
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
      "id": "model-sure-rd16ay48ajvc",
      "slug": "sure-rd16ay48ajvc",
      "name": "Sure RD16AY48AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rd16ay60ajvc",
      "slug": "sure-rd16ay60ajvc",
      "name": "Sure RD16AY60AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rd16ay24ajvc",
      "slug": "sure-rd16ay24ajvc",
      "name": "Sure RD16AY24AJVC",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15ay36aj2n",
      "slug": "sure-sp15ay36aj2n",
      "name": "Sure SP15AY36AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15ay18aj2n",
      "slug": "sure-sp15ay18aj2n",
      "name": "Sure SP15AY18AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp17ay48ajvc",
      "slug": "sure-sp17ay48ajvc",
      "name": "Sure SP17AY48AJVC",
      "seriesId": "series-sure-none-vantix",
      "brandId": "brand-sure",
      "modelNumber": "SP17AY48AJVC",
      "normalizedModelNumber": "sp17ay48ajvc",
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
      "id": "model-sure-sp15ay42aj2n",
      "slug": "sure-sp15ay42aj2n",
      "name": "Sure SP15AY42AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15ay48aj2n",
      "slug": "sure-sp15ay48aj2n",
      "name": "Sure SP15AY48AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15az60aj2n",
      "slug": "sure-sp15az60aj2n",
      "name": "Sure SP15AZ60AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15az30aj2n",
      "slug": "sure-sp15az30aj2n",
      "name": "Sure SP15AZ30AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15az24aj2n",
      "slug": "sure-sp15az24aj2n",
      "name": "Sure SP15AZ24AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15az18aj2n",
      "slug": "sure-sp15az18aj2n",
      "name": "Sure SP15AZ18AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15ay30aj2n",
      "slug": "sure-sp15ay30aj2n",
      "name": "Sure SP15AY30AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15ay24aj2n",
      "slug": "sure-sp15ay24aj2n",
      "name": "Sure SP15AY24AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp14ay60aj2n",
      "slug": "sure-sp14ay60aj2n",
      "name": "Sure SP14AY60AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
      "modelNumber": "SP14AY60AJ2N",
      "normalizedModelNumber": "sp14ay60aj2n",
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
      "id": "model-sure-sp14ay42aj2n",
      "slug": "sure-sp14ay42aj2n",
      "name": "Sure SP14AY42AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15az48aj2n",
      "slug": "sure-sp15az48aj2n",
      "name": "Sure SP15AZ48AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15az36aj2n",
      "slug": "sure-sp15az36aj2n",
      "name": "Sure SP15AZ36AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15az42aj2n",
      "slug": "sure-sp15az42aj2n",
      "name": "Sure SP15AZ42AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-sp15ay60aj2n",
      "slug": "sure-sp15ay60aj2n",
      "name": "Sure SP15AY60AJ2N",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rdfxyc024ajv",
      "slug": "sure-rdfxyc024ajv",
      "name": "Sure RDFXYC024AJV",
      "seriesId": "series-sure-rdfxyc",
      "brandId": "brand-sure",
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
      "id": "model-sure-rdfxyc036ajv",
      "slug": "sure-rdfxyc036ajv",
      "name": "Sure RDFXYC036AJV",
      "seriesId": "series-sure-rdfxyc",
      "brandId": "brand-sure",
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
      "id": "model-sure-rdfxyc048ajv",
      "slug": "sure-rdfxyc048ajv",
      "name": "Sure RDFXYC048AJV",
      "seriesId": "series-sure-rdfxyc",
      "brandId": "brand-sure",
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
      "id": "model-sure-rdfxyc060ajv",
      "slug": "sure-rdfxyc060ajv",
      "name": "Sure RDFXYC060AJV",
      "seriesId": "series-sure-rdfxyc",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpbyc036ajt",
      "slug": "sure-rhpbyc036ajt",
      "name": "Sure RHPBYC036AJT",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpbyc048ajt",
      "slug": "sure-rhpbyc048ajt",
      "name": "Sure RHPBYC048AJT",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpbyc060ajt",
      "slug": "sure-rhpbyc060ajt",
      "name": "Sure RHPBYC060AJT",
      "seriesId": "series-sure-vantix",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpxyc024ajt",
      "slug": "sure-rhpxyc024ajt",
      "name": "Sure RHPXYC024AJT",
      "seriesId": "series-sure-rhpxyc",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpxyc036ajt",
      "slug": "sure-rhpxyc036ajt",
      "name": "Sure RHPXYC036AJT",
      "seriesId": "series-sure-rhpxyc",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpxyc048ajt",
      "slug": "sure-rhpxyc048ajt",
      "name": "Sure RHPXYC048AJT",
      "seriesId": "series-sure-rhpxyc",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpxyc060ajt",
      "slug": "sure-rhpxyc060ajt",
      "name": "Sure RHPXYC060AJT",
      "seriesId": "series-sure-rhpxyc",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpxzs024ajt",
      "slug": "sure-rhpxzs024ajt",
      "name": "Sure RHPXZS024AJT",
      "seriesId": "series-sure-rhpxzs",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpxzs036ajt",
      "slug": "sure-rhpxzs036ajt",
      "name": "Sure RHPXZS036AJT",
      "seriesId": "series-sure-rhpxzs",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpxzs048ajt",
      "slug": "sure-rhpxzs048ajt",
      "name": "Sure RHPXZS048AJT",
      "seriesId": "series-sure-rhpxzs",
      "brandId": "brand-sure",
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
      "id": "model-sure-rhpxzs060ajt",
      "slug": "sure-rhpxzs060ajt",
      "name": "Sure RHPXZS060AJT",
      "seriesId": "series-sure-rhpxzs",
      "brandId": "brand-sure",
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
      "id": "ou-sure-sp19ay36ajvc",
      "modelNumber": "SP19AY36AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp19ay24ajvc",
      "modelNumber": "SP19AY24AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rd18ay36ajvc",
      "modelNumber": "RD18AY36AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp18az24ajvc",
      "modelNumber": "SP18AZ24AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-rd18ay24ajvc",
      "modelNumber": "RD18AY24AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rd17az36aj3n",
      "modelNumber": "RD17AZ36AJ3N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp19ay48ajvc",
      "modelNumber": "SP19AY48AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp18az36ajvc",
      "modelNumber": "SP18AZ36AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-rd18ay48ajvc",
      "modelNumber": "RD18AY48AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rd18ay60ajvc",
      "modelNumber": "RD18AY60AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp18az48ajvc",
      "modelNumber": "SP18AZ48AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-rd17az60aj3n",
      "modelNumber": "RD17AZ60AJ3N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-rd17az24aj3n",
      "modelNumber": "RD17AZ24AJ3N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp17ay60ajvc",
      "modelNumber": "SP17AY60AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp17ay24ajvc",
      "modelNumber": "SP17AY24AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rd17az48aj3n",
      "modelNumber": "RD17AZ48AJ3N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp17ay36ajvc",
      "modelNumber": "SP17AY36AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rd16ay48ajvc",
      "modelNumber": "RD16AY48AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rd16ay60ajvc",
      "modelNumber": "RD16AY60AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rd16ay24ajvc",
      "modelNumber": "RD16AY24AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp15ay36aj2n",
      "modelNumber": "SP15AY36AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp15ay18aj2n",
      "modelNumber": "SP15AY18AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp17ay48ajvc",
      "modelNumber": "SP17AY48AJVC",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp15ay42aj2n",
      "modelNumber": "SP15AY42AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp15ay48aj2n",
      "modelNumber": "SP15AY48AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp15az60aj2n",
      "modelNumber": "SP15AZ60AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp15az30aj2n",
      "modelNumber": "SP15AZ30AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp15az24aj2n",
      "modelNumber": "SP15AZ24AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp15az18aj2n",
      "modelNumber": "SP15AZ18AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp15ay30aj2n",
      "modelNumber": "SP15AY30AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp15ay24aj2n",
      "modelNumber": "SP15AY24AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp14ay60aj2n",
      "modelNumber": "SP14AY60AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp14ay42aj2n",
      "modelNumber": "SP14AY42AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-sp15az48aj2n",
      "modelNumber": "SP15AZ48AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp15az36aj2n",
      "modelNumber": "SP15AZ36AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp15az42aj2n",
      "modelNumber": "SP15AZ42AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-sp15ay60aj2n",
      "modelNumber": "SP15AY60AJ2N",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rdfxyc024ajv",
      "modelNumber": "RDFXYC024AJV",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rdfxyc036ajv",
      "modelNumber": "RDFXYC036AJV",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rdfxyc048ajv",
      "modelNumber": "RDFXYC048AJV",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rdfxyc060ajv",
      "modelNumber": "RDFXYC060AJV",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rhpbyc036ajt",
      "modelNumber": "RHPBYC036AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rhpbyc048ajt",
      "modelNumber": "RHPBYC048AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rhpbyc060ajt",
      "modelNumber": "RHPBYC060AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rhpxyc024ajt",
      "modelNumber": "RHPXYC024AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rhpxyc036ajt",
      "modelNumber": "RHPXYC036AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rhpxyc048ajt",
      "modelNumber": "RHPXYC048AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rhpxyc060ajt",
      "modelNumber": "RHPXYC060AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sure-rhpxzs024ajt",
      "modelNumber": "RHPXZS024AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-rhpxzs036ajt",
      "modelNumber": "RHPXZS036AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-rhpxzs048ajt",
      "modelNumber": "RHPXZS048AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sure-rhpxzs060ajt",
      "modelNumber": "RHPXZS060AJT",
      "brandId": "brand-sure",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-tcfy3621meaam",
      "modelNumber": "TCFY3621MEAAM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy2421heaam",
      "modelNumber": "TCFY2421HEAAM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy3621meaca",
      "modelNumber": "SHMVY3621MEACA",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy3621stacn",
      "modelNumber": "SH2VY3621STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz2421heaam",
      "modelNumber": "TCFZ2421HEAAM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy2417seacn",
      "modelNumber": "SHMVY2417SEACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy2417stacn",
      "modelNumber": "SH2VY2417STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz3621mtana",
      "modelNumber": "SH2VZ3621MTANA",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz3621mtann",
      "modelNumber": "SH2VZ3621MTANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3617stanm",
      "modelNumber": "TCFY3617STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3621mtanm",
      "modelNumber": "TCFY3621MTANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy4821seaca",
      "modelNumber": "SHMVY4821SEACA",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz6021seaam",
      "modelNumber": "TCFZ6021SEAAM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4821seaam",
      "modelNumber": "TCFY4821SEAAM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3624mtanm",
      "modelNumber": "TCFY3624MTANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-rh2vy3621mtacn",
      "modelNumber": "RH2VY3621MTACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy3621stann",
      "modelNumber": "SH2CY3621STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy6024seacn",
      "modelNumber": "SHMVY6024SEACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy4824stacn",
      "modelNumber": "SH2VY4824STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy3617stann",
      "modelNumber": "SH2CY3617STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy4824stann",
      "modelNumber": "SH2CY4824STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy3621mtacn",
      "modelNumber": "SH2VY3621MTACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvy2421meacn",
      "modelNumber": "SHMVY2421MEACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3621stanm",
      "modelNumber": "TCFY3621STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy3617stacn",
      "modelNumber": "SH2VY3617STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz3621mtana",
      "modelNumber": "SH2CZ3621MTANA",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz3621mtann",
      "modelNumber": "SH2CZ3621MTANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy6024stann",
      "modelNumber": "SH2CY6024STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy6024stacn",
      "modelNumber": "SH2VY6024STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-rh2vy6024stacn",
      "modelNumber": "RH2VY6024STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4824stanm",
      "modelNumber": "TCFY4824STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh3vz3617stacn",
      "modelNumber": "SH3VZ3617STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz3621stann",
      "modelNumber": "SH2CZ3621STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz3617stann",
      "modelNumber": "SH2VZ3617STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3624mtanm",
      "modelNumber": "TCFZ3624MTANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3621mtanm",
      "modelNumber": "TCFZ3621MTANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3621mtaam",
      "modelNumber": "TCFZ3621MTAAM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy2421mtanm",
      "modelNumber": "TCFY2421MTANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-rh2vy3617stacn",
      "modelNumber": "RH2VY3617STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy2417stanm",
      "modelNumber": "TCFY2417STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy2417mtanm",
      "modelNumber": "TCFY2417MTANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvz6021seaca",
      "modelNumber": "SHMVZ6021SEACA",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy4821stann",
      "modelNumber": "SH2CY4821STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4821stanm",
      "modelNumber": "TCFY4821STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy4824mtanm",
      "modelNumber": "TCFY4824MTANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-shmvz2421heaca",
      "modelNumber": "SHMVZ2421HEACA",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy4824mtann",
      "modelNumber": "SH2CY4824MTANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy4821stacn",
      "modelNumber": "SH2VY4821STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz6024stanm",
      "modelNumber": "TCFZ6024STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh3vz4821stacn",
      "modelNumber": "SH3VZ4821STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cy2417stann",
      "modelNumber": "SH2CY2417STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy6024stanm",
      "modelNumber": "TCFY6024STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy6021staam",
      "modelNumber": "TCFY6021STAAM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh3vz6024stacn",
      "modelNumber": "SH3VZ6024STACN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vy6021staca",
      "modelNumber": "SH2VY6021STACA",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2ty2421stans",
      "modelNumber": "RF2TY2421STANS",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz6024seanm",
      "modelNumber": "TCFZ6024SEANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sb2cy3621stanm",
      "modelNumber": "SB2CY3621STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz6024stann",
      "modelNumber": "SH2CZ6024STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz2417stann",
      "modelNumber": "SH2VZ2417STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2ty3624stans",
      "modelNumber": "RF2TY3624STANS",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3621stanmrxmd-c04",
      "modelNumber": "TCFY3621STANM+RXMD-C04",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfy3617stanmrxmd-c04",
      "modelNumber": "TCFY3617STANM+RXMD-C04",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz4821stann",
      "modelNumber": "SH2VZ4821STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2vz6024stann",
      "modelNumber": "SH2VZ6024STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2tz3624stans",
      "modelNumber": "RF2TZ3624STANS",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz3617stann",
      "modelNumber": "SH2CZ3617STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz4821stann",
      "modelNumber": "SH2CZ4821STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-tcfz3621stanm",
      "modelNumber": "TCFZ3621STANM",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-rf2tz2421stans",
      "modelNumber": "RF2TZ2421STANS",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-sh2cz2417stann",
      "modelNumber": "SH2CZ2417STANN",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34884",
      "modelNumber": "IU-34884",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34885",
      "modelNumber": "IU-34885",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34886",
      "modelNumber": "IU-34886",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34887",
      "modelNumber": "IU-34887",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34888",
      "modelNumber": "IU-34888",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34889",
      "modelNumber": "IU-34889",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34890",
      "modelNumber": "IU-34890",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34891",
      "modelNumber": "IU-34891",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34892",
      "modelNumber": "IU-34892",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34893",
      "modelNumber": "IU-34893",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34894",
      "modelNumber": "IU-34894",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34895",
      "modelNumber": "IU-34895",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34896",
      "modelNumber": "IU-34896",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34897",
      "modelNumber": "IU-34897",
      "brandId": "brand-sure",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34898",
      "modelNumber": "IU-34898",
      "brandId": "brand-sure",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-sure-sp19ay36ajvc-tcfy3621meaam",
      "slug": "sure-sp19ay36ajvc-tcfy3621meaam",
      "modelId": "model-sure-sp19ay36ajvc",
      "outdoorUnitId": "ou-sure-sp19ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp19ay24ajvc-tcfy2421heaam",
      "slug": "sure-sp19ay24ajvc-tcfy2421heaam",
      "modelId": "model-sure-sp19ay24ajvc",
      "outdoorUnitId": "ou-sure-sp19ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp19ay24ajvc-shmvy3621meaca",
      "slug": "sure-sp19ay24ajvc-shmvy3621meaca",
      "modelId": "model-sure-sp19ay24ajvc",
      "outdoorUnitId": "ou-sure-sp19ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-sh2vy3621stacn",
      "slug": "sure-rd18ay36ajvc-sh2vy3621stacn",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp19ay36ajvc-shmvy3621meaca",
      "slug": "sure-sp19ay36ajvc-shmvy3621meaca",
      "modelId": "model-sure-sp19ay36ajvc",
      "outdoorUnitId": "ou-sure-sp19ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp18az24ajvc-tcfz2421heaam",
      "slug": "sure-sp18az24ajvc-tcfz2421heaam",
      "modelId": "model-sure-sp18az24ajvc",
      "outdoorUnitId": "ou-sure-sp18az24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-shmvy2417seacn",
      "slug": "sure-rd18ay24ajvc-shmvy2417seacn",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-sh2vy2417stacn",
      "slug": "sure-rd18ay24ajvc-sh2vy2417stacn",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-sh2vz3621mtana",
      "slug": "sure-rd17az36aj3n-sh2vz3621mtana",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-sh2vz3621mtann",
      "slug": "sure-rd17az36aj3n-sh2vz3621mtann",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-tcfy3617stanm",
      "slug": "sure-rd18ay36ajvc-tcfy3617stanm",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-tcfy3621mtanm",
      "slug": "sure-rd18ay36ajvc-tcfy3621mtanm",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp19ay48ajvc-shmvy4821seaca",
      "slug": "sure-sp19ay48ajvc-shmvy4821seaca",
      "modelId": "model-sure-sp19ay48ajvc",
      "outdoorUnitId": "ou-sure-sp19ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp18az36ajvc-tcfz6021seaam",
      "slug": "sure-sp18az36ajvc-tcfz6021seaam",
      "modelId": "model-sure-sp18az36ajvc",
      "outdoorUnitId": "ou-sure-sp18az36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp19ay48ajvc-tcfy4821seaam",
      "slug": "sure-sp19ay48ajvc-tcfy4821seaam",
      "modelId": "model-sure-sp19ay48ajvc",
      "outdoorUnitId": "ou-sure-sp19ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-tcfy3624mtanm",
      "slug": "sure-rd18ay36ajvc-tcfy3624mtanm",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-rh2vy3621mtacn",
      "slug": "sure-rd18ay36ajvc-rh2vy3621mtacn",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-sh2cy3621stann",
      "slug": "sure-rd18ay36ajvc-sh2cy3621stann",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-shmvy6024seacn",
      "slug": "sure-rd18ay48ajvc-shmvy6024seacn",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-sh2vy4824stacn",
      "slug": "sure-rd18ay48ajvc-sh2vy4824stacn",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-sh2cy3617stann",
      "slug": "sure-rd18ay36ajvc-sh2cy3617stann",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-sh2cy4824stann",
      "slug": "sure-rd18ay48ajvc-sh2cy4824stann",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-sh2vy3621mtacn",
      "slug": "sure-rd18ay36ajvc-sh2vy3621mtacn",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-shmvy2421meacn",
      "slug": "sure-rd18ay24ajvc-shmvy2421meacn",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-tcfy3621stanm",
      "slug": "sure-rd18ay36ajvc-tcfy3621stanm",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-sh2vy3617stacn",
      "slug": "sure-rd18ay36ajvc-sh2vy3617stacn",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-sh2cz3621mtana",
      "slug": "sure-rd17az36aj3n-sh2cz3621mtana",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-sh2cz3621mtann",
      "slug": "sure-rd17az36aj3n-sh2cz3621mtann",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay60ajvc-sh2cy6024stann",
      "slug": "sure-rd18ay60ajvc-sh2cy6024stann",
      "modelId": "model-sure-rd18ay60ajvc",
      "outdoorUnitId": "ou-sure-rd18ay60ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay60ajvc-sh2vy6024stacn",
      "slug": "sure-rd18ay60ajvc-sh2vy6024stacn",
      "modelId": "model-sure-rd18ay60ajvc",
      "outdoorUnitId": "ou-sure-rd18ay60ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay60ajvc-shmvy6024seacn",
      "slug": "sure-rd18ay60ajvc-shmvy6024seacn",
      "modelId": "model-sure-rd18ay60ajvc",
      "outdoorUnitId": "ou-sure-rd18ay60ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay60ajvc-rh2vy6024stacn",
      "slug": "sure-rd18ay60ajvc-rh2vy6024stacn",
      "modelId": "model-sure-rd18ay60ajvc",
      "outdoorUnitId": "ou-sure-rd18ay60ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-tcfy4824stanm",
      "slug": "sure-rd18ay48ajvc-tcfy4824stanm",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-sh3vz3617stacn",
      "slug": "sure-rd17az36aj3n-sh3vz3617stacn",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-sh2cz3621stann",
      "slug": "sure-rd17az36aj3n-sh2cz3621stann",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-sh2vz3617stann",
      "slug": "sure-rd17az36aj3n-sh2vz3617stann",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-tcfz3624mtanm",
      "slug": "sure-rd17az36aj3n-tcfz3624mtanm",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
      "indoorUnitId": "iu-tcfz3624mtanm",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-tcfz3621mtanm",
      "slug": "sure-rd17az36aj3n-tcfz3621mtanm",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-tcfz3621mtaam",
      "slug": "sure-rd17az36aj3n-tcfz3621mtaam",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-tcfy2421mtanm",
      "slug": "sure-rd18ay24ajvc-tcfy2421mtanm",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-rh2vy3617stacn",
      "slug": "sure-rd18ay24ajvc-rh2vy3617stacn",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-tcfy2417stanm",
      "slug": "sure-rd18ay24ajvc-tcfy2417stanm",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-tcfy2417mtanm",
      "slug": "sure-rd18ay24ajvc-tcfy2417mtanm",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-sh2vy3617stacn",
      "slug": "sure-rd18ay24ajvc-sh2vy3617stacn",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp18az48ajvc-shmvz6021seaca",
      "slug": "sure-sp18az48ajvc-shmvz6021seaca",
      "modelId": "model-sure-sp18az48ajvc",
      "outdoorUnitId": "ou-sure-sp18az48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-rh2vy6024stacn",
      "slug": "sure-rd18ay48ajvc-rh2vy6024stacn",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-sh2cy4821stann",
      "slug": "sure-rd18ay48ajvc-sh2cy4821stann",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-tcfy4821stanm",
      "slug": "sure-rd18ay48ajvc-tcfy4821stanm",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-sh2vy6024stacn",
      "slug": "sure-rd18ay48ajvc-sh2vy6024stacn",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-tcfy4824mtanm",
      "slug": "sure-rd18ay48ajvc-tcfy4824mtanm",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp18az24ajvc-shmvz2421heaca",
      "slug": "sure-sp18az24ajvc-shmvz2421heaca",
      "modelId": "model-sure-sp18az24ajvc",
      "outdoorUnitId": "ou-sure-sp18az24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp18az36ajvc-shmvz6021seaca",
      "slug": "sure-sp18az36ajvc-shmvz6021seaca",
      "modelId": "model-sure-sp18az36ajvc",
      "outdoorUnitId": "ou-sure-sp18az36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-sh2cy4824mtann",
      "slug": "sure-rd18ay48ajvc-sh2cy4824mtann",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay48ajvc-sh2vy4821stacn",
      "slug": "sure-rd18ay48ajvc-sh2vy4821stacn",
      "modelId": "model-sure-rd18ay48ajvc",
      "outdoorUnitId": "ou-sure-rd18ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az60aj3n-tcfz6024stanm",
      "slug": "sure-rd17az60aj3n-tcfz6024stanm",
      "modelId": "model-sure-rd17az60aj3n",
      "outdoorUnitId": "ou-sure-rd17az60aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az36aj3n-sh3vz4821stacn",
      "slug": "sure-rd17az36aj3n-sh3vz4821stacn",
      "modelId": "model-sure-rd17az36aj3n",
      "outdoorUnitId": "ou-sure-rd17az36aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az24aj3n-sh2vz3617stann",
      "slug": "sure-rd17az24aj3n-sh2vz3617stann",
      "modelId": "model-sure-rd17az24aj3n",
      "outdoorUnitId": "ou-sure-rd17az24aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay60ajvc-sh2vy6024stacn",
      "slug": "sure-sp17ay60ajvc-sh2vy6024stacn",
      "modelId": "model-sure-sp17ay60ajvc",
      "outdoorUnitId": "ou-sure-sp17ay60ajvc",
      "indoorUnitId": "iu-sh2vy6024stacn",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay24ajvc-sh2cy2417stann",
      "slug": "sure-sp17ay24ajvc-sh2cy2417stann",
      "modelId": "model-sure-sp17ay24ajvc",
      "outdoorUnitId": "ou-sure-sp17ay24ajvc",
      "indoorUnitId": "iu-sh2cy2417stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay60ajvc-tcfy6024stanm",
      "slug": "sure-sp17ay60ajvc-tcfy6024stanm",
      "modelId": "model-sure-sp17ay60ajvc",
      "outdoorUnitId": "ou-sure-sp17ay60ajvc",
      "indoorUnitId": "iu-tcfy6024stanm",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay60ajvc-tcfy6021staam",
      "slug": "sure-rd18ay60ajvc-tcfy6021staam",
      "modelId": "model-sure-rd18ay60ajvc",
      "outdoorUnitId": "ou-sure-rd18ay60ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay60ajvc-tcfy6024stanm",
      "slug": "sure-rd18ay60ajvc-tcfy6024stanm",
      "modelId": "model-sure-rd18ay60ajvc",
      "outdoorUnitId": "ou-sure-rd18ay60ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az48aj3n-sh3vz6024stacn",
      "slug": "sure-rd17az48aj3n-sh3vz6024stacn",
      "modelId": "model-sure-rd17az48aj3n",
      "outdoorUnitId": "ou-sure-rd17az48aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay60ajvc-sh2vy6021staca",
      "slug": "sure-rd18ay60ajvc-sh2vy6021staca",
      "modelId": "model-sure-rd18ay60ajvc",
      "outdoorUnitId": "ou-sure-rd18ay60ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay36ajvc-tcfy3617stanm",
      "slug": "sure-sp17ay36ajvc-tcfy3617stanm",
      "modelId": "model-sure-sp17ay36ajvc",
      "outdoorUnitId": "ou-sure-sp17ay36ajvc",
      "indoorUnitId": "iu-tcfy3617stanm",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay24ajvc-tcfy2417stanm",
      "slug": "sure-sp17ay24ajvc-tcfy2417stanm",
      "modelId": "model-sure-sp17ay24ajvc",
      "outdoorUnitId": "ou-sure-sp17ay24ajvc",
      "indoorUnitId": "iu-tcfy2417stanm",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay24ajvc-rf2ty2421stans",
      "slug": "sure-rd18ay24ajvc-rf2ty2421stans",
      "modelId": "model-sure-rd18ay24ajvc",
      "outdoorUnitId": "ou-sure-rd18ay24ajvc",
      "indoorUnitId": "iu-rf2ty2421stans",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd17az48aj3n-tcfz6024seanm",
      "slug": "sure-rd17az48aj3n-tcfz6024seanm",
      "modelId": "model-sure-rd17az48aj3n",
      "outdoorUnitId": "ou-sure-rd17az48aj3n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay36ajvc-tcfy3621stanm",
      "slug": "sure-sp17ay36ajvc-tcfy3621stanm",
      "modelId": "model-sure-sp17ay36ajvc",
      "outdoorUnitId": "ou-sure-sp17ay36ajvc",
      "indoorUnitId": "iu-tcfy3621stanm",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay36ajvc-sh2vy3617stacn",
      "slug": "sure-sp17ay36ajvc-sh2vy3617stacn",
      "modelId": "model-sure-sp17ay36ajvc",
      "outdoorUnitId": "ou-sure-sp17ay36ajvc",
      "indoorUnitId": "iu-sh2vy3617stacn",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd16ay48ajvc-shmvy4821seaca",
      "slug": "sure-rd16ay48ajvc-shmvy4821seaca",
      "modelId": "model-sure-rd16ay48ajvc",
      "outdoorUnitId": "ou-sure-rd16ay48ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd16ay60ajvc-shmvy6024seacn",
      "slug": "sure-rd16ay60ajvc-shmvy6024seacn",
      "modelId": "model-sure-rd16ay60ajvc",
      "outdoorUnitId": "ou-sure-rd16ay60ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd16ay24ajvc-shmvy2417seacn",
      "slug": "sure-rd16ay24ajvc-shmvy2417seacn",
      "modelId": "model-sure-rd16ay24ajvc",
      "outdoorUnitId": "ou-sure-rd16ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd16ay24ajvc-shmvy2421meacn",
      "slug": "sure-rd16ay24ajvc-shmvy2421meacn",
      "modelId": "model-sure-rd16ay24ajvc",
      "outdoorUnitId": "ou-sure-rd16ay24ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay36aj2n-sh2vy3617stacn",
      "slug": "sure-sp15ay36aj2n-sh2vy3617stacn",
      "modelId": "model-sure-sp15ay36aj2n",
      "outdoorUnitId": "ou-sure-sp15ay36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay36aj2n-sb2cy3621stanm",
      "slug": "sure-sp15ay36aj2n-sb2cy3621stanm",
      "modelId": "model-sure-sp15ay36aj2n",
      "outdoorUnitId": "ou-sure-sp15ay36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay18aj2n-tcfy2417stanm",
      "slug": "sure-sp15ay18aj2n-tcfy2417stanm",
      "modelId": "model-sure-sp15ay18aj2n",
      "outdoorUnitId": "ou-sure-sp15ay18aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay36aj2n-sh2vy3621stacn",
      "slug": "sure-sp15ay36aj2n-sh2vy3621stacn",
      "modelId": "model-sure-sp15ay36aj2n",
      "outdoorUnitId": "ou-sure-sp15ay36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay48ajvc-tcfy4821stanm",
      "slug": "sure-sp17ay48ajvc-tcfy4821stanm",
      "modelId": "model-sure-sp17ay48ajvc",
      "outdoorUnitId": "ou-sure-sp17ay48ajvc",
      "indoorUnitId": "iu-tcfy4821stanm",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay48ajvc-tcfy4824stanm",
      "slug": "sure-sp17ay48ajvc-tcfy4824stanm",
      "modelId": "model-sure-sp17ay48ajvc",
      "outdoorUnitId": "ou-sure-sp17ay48ajvc",
      "indoorUnitId": "iu-tcfy4824stanm",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay36aj2n-tcfy3621stanm",
      "slug": "sure-sp15ay36aj2n-tcfy3621stanm",
      "modelId": "model-sure-sp15ay36aj2n",
      "outdoorUnitId": "ou-sure-sp15ay36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay42aj2n-sh2vy4821stacn",
      "slug": "sure-sp15ay42aj2n-sh2vy4821stacn",
      "modelId": "model-sure-sp15ay42aj2n",
      "outdoorUnitId": "ou-sure-sp15ay42aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay42aj2n-sh2vy4824stacn",
      "slug": "sure-sp15ay42aj2n-sh2vy4824stacn",
      "modelId": "model-sure-sp15ay42aj2n",
      "outdoorUnitId": "ou-sure-sp15ay42aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay42aj2n-tcfy4821stanm",
      "slug": "sure-sp15ay42aj2n-tcfy4821stanm",
      "modelId": "model-sure-sp15ay42aj2n",
      "outdoorUnitId": "ou-sure-sp15ay42aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay48aj2n-sh2vy4824stacn",
      "slug": "sure-sp15ay48aj2n-sh2vy4824stacn",
      "modelId": "model-sure-sp15ay48aj2n",
      "outdoorUnitId": "ou-sure-sp15ay48aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay24ajvc-sh2vy2417stacn",
      "slug": "sure-sp17ay24ajvc-sh2vy2417stacn",
      "modelId": "model-sure-sp17ay24ajvc",
      "outdoorUnitId": "ou-sure-sp17ay24ajvc",
      "indoorUnitId": "iu-sh2vy2417stacn",
      "minHeatingTempC": -15,
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az60aj2n-sh2cz6024stann",
      "slug": "sure-sp15az60aj2n-sh2cz6024stann",
      "modelId": "model-sure-sp15az60aj2n",
      "outdoorUnitId": "ou-sure-sp15az60aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az30aj2n-sh2vz3617stann",
      "slug": "sure-sp15az30aj2n-sh2vz3617stann",
      "modelId": "model-sure-sp15az30aj2n",
      "outdoorUnitId": "ou-sure-sp15az30aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az24aj2n-sh2vz2417stann",
      "slug": "sure-sp15az24aj2n-sh2vz2417stann",
      "modelId": "model-sure-sp15az24aj2n",
      "outdoorUnitId": "ou-sure-sp15az24aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay42aj2n-tcfy4824stanm",
      "slug": "sure-sp15ay42aj2n-tcfy4824stanm",
      "modelId": "model-sure-sp15ay42aj2n",
      "outdoorUnitId": "ou-sure-sp15ay42aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az18aj2n-sh2vz2417stann",
      "slug": "sure-sp15az18aj2n-sh2vz2417stann",
      "modelId": "model-sure-sp15az18aj2n",
      "outdoorUnitId": "ou-sure-sp15az18aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay36aj2n-rf2ty3624stans",
      "slug": "sure-sp15ay36aj2n-rf2ty3624stans",
      "modelId": "model-sure-sp15ay36aj2n",
      "outdoorUnitId": "ou-sure-sp15ay36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp17ay48ajvc-sh2vy4821stacn",
      "slug": "sure-sp17ay48ajvc-sh2vy4821stacn",
      "modelId": "model-sure-sp17ay48ajvc",
      "outdoorUnitId": "ou-sure-sp17ay48ajvc",
      "indoorUnitId": "iu-sh2vy4821stacn",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay36aj2n-tcfy3617stanm",
      "slug": "sure-sp15ay36aj2n-tcfy3617stanm",
      "modelId": "model-sure-sp15ay36aj2n",
      "outdoorUnitId": "ou-sure-sp15ay36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay30aj2n-sh2vy3621stacn",
      "slug": "sure-sp15ay30aj2n-sh2vy3621stacn",
      "modelId": "model-sure-sp15ay30aj2n",
      "outdoorUnitId": "ou-sure-sp15ay30aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay36aj2n-sh2cy3617stann",
      "slug": "sure-sp15ay36aj2n-sh2cy3617stann",
      "modelId": "model-sure-sp15ay36aj2n",
      "outdoorUnitId": "ou-sure-sp15ay36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay24aj2n-rf2ty2421stans",
      "slug": "sure-sp15ay24aj2n-rf2ty2421stans",
      "modelId": "model-sure-sp15ay24aj2n",
      "outdoorUnitId": "ou-sure-sp15ay24aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay24aj2n-sh2cy2417stann",
      "slug": "sure-sp15ay24aj2n-sh2cy2417stann",
      "modelId": "model-sure-sp15ay24aj2n",
      "outdoorUnitId": "ou-sure-sp15ay24aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay24aj2n-tcfy2417stanm",
      "slug": "sure-sp15ay24aj2n-tcfy2417stanm",
      "modelId": "model-sure-sp15ay24aj2n",
      "outdoorUnitId": "ou-sure-sp15ay24aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay30aj2n-sh2vy3617stacn",
      "slug": "sure-sp15ay30aj2n-sh2vy3617stacn",
      "modelId": "model-sure-sp15ay30aj2n",
      "outdoorUnitId": "ou-sure-sp15ay30aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay18aj2n-sh2cy2417stann",
      "slug": "sure-sp15ay18aj2n-sh2cy2417stann",
      "modelId": "model-sure-sp15ay18aj2n",
      "outdoorUnitId": "ou-sure-sp15ay18aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay18aj2n-rf2ty2421stans",
      "slug": "sure-sp15ay18aj2n-rf2ty2421stans",
      "modelId": "model-sure-sp15ay18aj2n",
      "outdoorUnitId": "ou-sure-sp15ay18aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp14ay60aj2n-tcfy6021staam",
      "slug": "sure-sp14ay60aj2n-tcfy6021staam",
      "modelId": "model-sure-sp14ay60aj2n",
      "outdoorUnitId": "ou-sure-sp14ay60aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp14ay60aj2n-sh2vy6024stacn",
      "slug": "sure-sp14ay60aj2n-sh2vy6024stacn",
      "modelId": "model-sure-sp14ay60aj2n",
      "outdoorUnitId": "ou-sure-sp14ay60aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp14ay42aj2n-tcfy4824stanm",
      "slug": "sure-sp14ay42aj2n-tcfy4824stanm",
      "modelId": "model-sure-sp14ay42aj2n",
      "outdoorUnitId": "ou-sure-sp14ay42aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-tcfy3621stanmrxmd-c04",
      "slug": "sure-rd18ay36ajvc-tcfy3621stanmrxmd-c04",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rd18ay36ajvc-tcfy3617stanmrxmd-c04",
      "slug": "sure-rd18ay36ajvc-tcfy3617stanmrxmd-c04",
      "modelId": "model-sure-rd18ay36ajvc",
      "outdoorUnitId": "ou-sure-rd18ay36ajvc",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay30aj2n-sh2cy3617stann",
      "slug": "sure-sp15ay30aj2n-sh2cy3617stann",
      "modelId": "model-sure-sp15ay30aj2n",
      "outdoorUnitId": "ou-sure-sp15ay30aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az48aj2n-sh2vz4821stann",
      "slug": "sure-sp15az48aj2n-sh2vz4821stann",
      "modelId": "model-sure-sp15az48aj2n",
      "outdoorUnitId": "ou-sure-sp15az48aj2n",
      "indoorUnitId": "iu-sh2vz4821stann",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az60aj2n-sh2vz6024stann",
      "slug": "sure-sp15az60aj2n-sh2vz6024stann",
      "modelId": "model-sure-sp15az60aj2n",
      "outdoorUnitId": "ou-sure-sp15az60aj2n",
      "indoorUnitId": "iu-sh2vz6024stann",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az36aj2n-rf2tz3624stans",
      "slug": "sure-sp15az36aj2n-rf2tz3624stans",
      "modelId": "model-sure-sp15az36aj2n",
      "outdoorUnitId": "ou-sure-sp15az36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az36aj2n-sh2cz3617stann",
      "slug": "sure-sp15az36aj2n-sh2cz3617stann",
      "modelId": "model-sure-sp15az36aj2n",
      "outdoorUnitId": "ou-sure-sp15az36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az36aj2n-sh2vz3617stann",
      "slug": "sure-sp15az36aj2n-sh2vz3617stann",
      "modelId": "model-sure-sp15az36aj2n",
      "outdoorUnitId": "ou-sure-sp15az36aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az42aj2n-sh2cz4821stann",
      "slug": "sure-sp15az42aj2n-sh2cz4821stann",
      "modelId": "model-sure-sp15az42aj2n",
      "outdoorUnitId": "ou-sure-sp15az42aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az42aj2n-sh2vz4821stann",
      "slug": "sure-sp15az42aj2n-sh2vz4821stann",
      "modelId": "model-sure-sp15az42aj2n",
      "outdoorUnitId": "ou-sure-sp15az42aj2n",
      "indoorUnitId": "iu-sh2vz4821stann",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az48aj2n-sh2cz4821stann",
      "slug": "sure-sp15az48aj2n-sh2cz4821stann",
      "modelId": "model-sure-sp15az48aj2n",
      "outdoorUnitId": "ou-sure-sp15az48aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az30aj2n-tcfz3621stanm",
      "slug": "sure-sp15az30aj2n-tcfz3621stanm",
      "modelId": "model-sure-sp15az30aj2n",
      "outdoorUnitId": "ou-sure-sp15az30aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay42aj2n-sh2cy4821stann",
      "slug": "sure-sp15ay42aj2n-sh2cy4821stann",
      "modelId": "model-sure-sp15ay42aj2n",
      "outdoorUnitId": "ou-sure-sp15ay42aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az18aj2n-rf2tz2421stans",
      "slug": "sure-sp15az18aj2n-rf2tz2421stans",
      "modelId": "model-sure-sp15az18aj2n",
      "outdoorUnitId": "ou-sure-sp15az18aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay60aj2n-sh2cy6024stann",
      "slug": "sure-sp15ay60aj2n-sh2cy6024stann",
      "modelId": "model-sure-sp15ay60aj2n",
      "outdoorUnitId": "ou-sure-sp15ay60aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az18aj2n-sh2cz2417stann",
      "slug": "sure-sp15az18aj2n-sh2cz2417stann",
      "modelId": "model-sure-sp15az18aj2n",
      "outdoorUnitId": "ou-sure-sp15az18aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az24aj2n-rf2tz2421stans",
      "slug": "sure-sp15az24aj2n-rf2tz2421stans",
      "modelId": "model-sure-sp15az24aj2n",
      "outdoorUnitId": "ou-sure-sp15az24aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az30aj2n-rf2tz3624stans",
      "slug": "sure-sp15az30aj2n-rf2tz3624stans",
      "modelId": "model-sure-sp15az30aj2n",
      "outdoorUnitId": "ou-sure-sp15az30aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15az30aj2n-sh2cz3617stann",
      "slug": "sure-sp15az30aj2n-sh2cz3617stann",
      "modelId": "model-sure-sp15az30aj2n",
      "outdoorUnitId": "ou-sure-sp15az30aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-sp15ay48aj2n-sh2cy4821stann",
      "slug": "sure-sp15ay48aj2n-sh2cy4821stann",
      "modelId": "model-sure-sp15ay48aj2n",
      "outdoorUnitId": "ou-sure-sp15ay48aj2n",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rdfxyc024ajv-iu-34884",
      "slug": "sure-rdfxyc024ajv-iu-34884",
      "modelId": "model-sure-rdfxyc024ajv",
      "outdoorUnitId": "ou-sure-rdfxyc024ajv",
      "indoorUnitId": "iu-iu-34884",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rdfxyc036ajv-iu-34885",
      "slug": "sure-rdfxyc036ajv-iu-34885",
      "modelId": "model-sure-rdfxyc036ajv",
      "outdoorUnitId": "ou-sure-rdfxyc036ajv",
      "indoorUnitId": "iu-iu-34885",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rdfxyc048ajv-iu-34886",
      "slug": "sure-rdfxyc048ajv-iu-34886",
      "modelId": "model-sure-rdfxyc048ajv",
      "outdoorUnitId": "ou-sure-rdfxyc048ajv",
      "indoorUnitId": "iu-iu-34886",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rdfxyc060ajv-iu-34887",
      "slug": "sure-rdfxyc060ajv-iu-34887",
      "modelId": "model-sure-rdfxyc060ajv",
      "outdoorUnitId": "ou-sure-rdfxyc060ajv",
      "indoorUnitId": "iu-iu-34887",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpbyc036ajt-iu-34888",
      "slug": "sure-rhpbyc036ajt-iu-34888",
      "modelId": "model-sure-rhpbyc036ajt",
      "outdoorUnitId": "ou-sure-rhpbyc036ajt",
      "indoorUnitId": "iu-iu-34888",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpbyc048ajt-iu-34889",
      "slug": "sure-rhpbyc048ajt-iu-34889",
      "modelId": "model-sure-rhpbyc048ajt",
      "outdoorUnitId": "ou-sure-rhpbyc048ajt",
      "indoorUnitId": "iu-iu-34889",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpbyc060ajt-iu-34890",
      "slug": "sure-rhpbyc060ajt-iu-34890",
      "modelId": "model-sure-rhpbyc060ajt",
      "outdoorUnitId": "ou-sure-rhpbyc060ajt",
      "indoorUnitId": "iu-iu-34890",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpxyc024ajt-iu-34891",
      "slug": "sure-rhpxyc024ajt-iu-34891",
      "modelId": "model-sure-rhpxyc024ajt",
      "outdoorUnitId": "ou-sure-rhpxyc024ajt",
      "indoorUnitId": "iu-iu-34891",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpxyc036ajt-iu-34892",
      "slug": "sure-rhpxyc036ajt-iu-34892",
      "modelId": "model-sure-rhpxyc036ajt",
      "outdoorUnitId": "ou-sure-rhpxyc036ajt",
      "indoorUnitId": "iu-iu-34892",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpxyc048ajt-iu-34893",
      "slug": "sure-rhpxyc048ajt-iu-34893",
      "modelId": "model-sure-rhpxyc048ajt",
      "outdoorUnitId": "ou-sure-rhpxyc048ajt",
      "indoorUnitId": "iu-iu-34893",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpxyc060ajt-iu-34894",
      "slug": "sure-rhpxyc060ajt-iu-34894",
      "modelId": "model-sure-rhpxyc060ajt",
      "outdoorUnitId": "ou-sure-rhpxyc060ajt",
      "indoorUnitId": "iu-iu-34894",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpxzs024ajt-iu-34895",
      "slug": "sure-rhpxzs024ajt-iu-34895",
      "modelId": "model-sure-rhpxzs024ajt",
      "outdoorUnitId": "ou-sure-rhpxzs024ajt",
      "indoorUnitId": "iu-iu-34895",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpxzs036ajt-iu-34896",
      "slug": "sure-rhpxzs036ajt-iu-34896",
      "modelId": "model-sure-rhpxzs036ajt",
      "outdoorUnitId": "ou-sure-rhpxzs036ajt",
      "indoorUnitId": "iu-iu-34896",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpxzs048ajt-iu-34897",
      "slug": "sure-rhpxzs048ajt-iu-34897",
      "modelId": "model-sure-rhpxzs048ajt",
      "outdoorUnitId": "ou-sure-rhpxzs048ajt",
      "indoorUnitId": "iu-iu-34897",
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
          "sourceId": "src-sure-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sure-rhpxzs060ajt-iu-34898",
      "slug": "sure-rhpxzs060ajt-iu-34898",
      "modelId": "model-sure-rhpxzs060ajt",
      "outdoorUnitId": "ou-sure-rhpxzs060ajt",
      "indoorUnitId": "iu-iu-34898",
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
          "sourceId": "src-sure-epa",
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
