import type { BrandDataset } from "../../types";

export const brand_vkinDataset: BrandDataset = {
  "brand": {
    "id": "brand-vkin",
    "slug": "vkin",
    "name": "VKIN",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour VKIN",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-vkin-epa",
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
      "id": "series-vkin-hiultra",
      "slug": "vkin-hiultra",
      "name": "HiULTRA",
      "brandId": "brand-vkin",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HiULTRA de VKIN",
      "imageUrl": "/images/series/vkin-vkin-hiultra.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-vkin-t-pro",
      "slug": "vkin-t-pro",
      "name": "T-pro",
      "brandId": "brand-vkin",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-pro de VKIN",
      "imageUrl": "/images/series/vkin-vkin-t-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-vkin-ahu",
      "slug": "vkin-ahu",
      "name": "AHU",
      "brandId": "brand-vkin",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AHU de VKIN",
      "imageUrl": "/images/series/vkin-vkin-ahu.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-vkin-side-discharge",
      "slug": "vkin-side-discharge",
      "name": "SIDE-DISCHARGE",
      "brandId": "brand-vkin",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SIDE-DISCHARGE de VKIN",
      "imageUrl": "/images/series/vkin-vkin-side-discharge.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-vkin-urha-09wdcn4o",
      "slug": "vkin-urha-09wdcn4o",
      "name": "VKIN URHA-09WDCN4(O)",
      "seriesId": "series-vkin-hiultra",
      "brandId": "brand-vkin",
      "modelNumber": "URHA-09WDCN4(O)",
      "normalizedModelNumber": "urha-09wdcn4(o)",
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
      "id": "model-vkin-urht-12wdcn4",
      "slug": "vkin-urht-12wdcn4",
      "name": "VKIN URHT-12WDCN4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-12WDCN4",
      "normalizedModelNumber": "urht-12wdcn4",
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
      "id": "model-vkin-urht-27fm3n4",
      "slug": "vkin-urht-27fm3n4",
      "name": "VKIN URHT-27FM3N4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-27FM3N4",
      "normalizedModelNumber": "urht-27fm3n4",
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
      "id": "model-vkin-urht-18fm2n4",
      "slug": "vkin-urht-18fm2n4",
      "name": "VKIN URHT-18FM2N4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-18FM2N4",
      "normalizedModelNumber": "urht-18fm2n4",
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
      "id": "model-vkin-urht-12wdc1n4",
      "slug": "vkin-urht-12wdc1n4",
      "name": "VKIN URHT-12WDC1N4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-12WDC1N4",
      "normalizedModelNumber": "urht-12wdc1n4",
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
      "id": "model-vkin-urha-12wdcn4o",
      "slug": "vkin-urha-12wdcn4o",
      "name": "VKIN URHA-12WDCN4(O)",
      "seriesId": "series-vkin-hiultra",
      "brandId": "brand-vkin",
      "modelNumber": "URHA-12WDCN4(O)",
      "normalizedModelNumber": "urha-12wdcn4(o)",
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
      "id": "model-vkin-urha-09wdc1n4o",
      "slug": "vkin-urha-09wdc1n4o",
      "name": "VKIN URHA-09WDC1N4(O)",
      "seriesId": "series-vkin-hiultra",
      "brandId": "brand-vkin",
      "modelNumber": "URHA-09WDC1N4(O)",
      "normalizedModelNumber": "urha-09wdc1n4(o)",
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
      "id": "model-vkin-urht-18wdcn4",
      "slug": "vkin-urht-18wdcn4",
      "name": "VKIN URHT-18WDCN4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-18WDCN4",
      "normalizedModelNumber": "urht-18wdcn4",
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
      "id": "model-vkin-urht-24wdcn4",
      "slug": "vkin-urht-24wdcn4",
      "name": "VKIN URHT-24WDCN4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-24WDCN4",
      "normalizedModelNumber": "urht-24wdcn4",
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
      "id": "model-vkin-urha-24wdcn4o",
      "slug": "vkin-urha-24wdcn4o",
      "name": "VKIN URHA-24WDCN4(O)",
      "seriesId": "series-vkin-hiultra",
      "brandId": "brand-vkin",
      "modelNumber": "URHA-24WDCN4(O)",
      "normalizedModelNumber": "urha-24wdcn4(o)",
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
      "id": "model-vkin-urht-36fm4n4",
      "slug": "vkin-urht-36fm4n4",
      "name": "VKIN URHT-36FM4N4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-36FM4N4",
      "normalizedModelNumber": "urht-36fm4n4",
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
      "id": "model-vkin-urht-55fm6n4",
      "slug": "vkin-urht-55fm6n4",
      "name": "VKIN URHT-55FM6N4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-55FM6N4",
      "normalizedModelNumber": "urht-55fm6n4",
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
      "id": "model-vkin-urha-12wdc1n4o",
      "slug": "vkin-urha-12wdc1n4o",
      "name": "VKIN URHA-12WDC1N4(O)",
      "seriesId": "series-vkin-hiultra",
      "brandId": "brand-vkin",
      "modelNumber": "URHA-12WDC1N4(O)",
      "normalizedModelNumber": "urha-12wdc1n4(o)",
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
      "id": "model-vkin-urht-42fm5n4",
      "slug": "vkin-urht-42fm5n4",
      "name": "VKIN URHT-42FM5N4",
      "seriesId": "series-vkin-t-pro",
      "brandId": "brand-vkin",
      "modelNumber": "URHT-42FM5N4",
      "normalizedModelNumber": "urht-42fm5n4",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-vkin-urha-18wdcn4o",
      "slug": "vkin-urha-18wdcn4o",
      "name": "VKIN URHA-18WDCN4(O)",
      "seriesId": "series-vkin-hiultra",
      "brandId": "brand-vkin",
      "modelNumber": "URHA-18WDCN4(O)",
      "normalizedModelNumber": "urha-18wdcn4(o)",
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
      "id": "model-vkin-urha-18wdcnx-o",
      "slug": "vkin-urha-18wdcnx-o",
      "name": "VKIN URHA-18WDCNX-O",
      "seriesId": "series-vkin-hiultra",
      "brandId": "brand-vkin",
      "modelNumber": "URHA-18WDCNX-O",
      "normalizedModelNumber": "urha-18wdcnx-o",
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
      "id": "model-vkin-ucha-24hdct",
      "slug": "vkin-ucha-24hdct",
      "name": "VKIN UCHA-24HDCT",
      "seriesId": "series-vkin-ahu",
      "brandId": "brand-vkin",
      "modelNumber": "UCHA-24HDCT",
      "normalizedModelNumber": "ucha-24hdct",
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
      "id": "model-vkin-ucha-36hdct",
      "slug": "vkin-ucha-36hdct",
      "name": "VKIN UCHA-36HDCT",
      "seriesId": "series-vkin-ahu",
      "brandId": "brand-vkin",
      "modelNumber": "UCHA-36HDCT",
      "normalizedModelNumber": "ucha-36hdct",
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
      "id": "model-vkin-ucha-24hdcsn4",
      "slug": "vkin-ucha-24hdcsn4",
      "name": "VKIN UCHA-24HDCSN4",
      "seriesId": "series-vkin-side-discharge",
      "brandId": "brand-vkin",
      "modelNumber": "UCHA-24HDCSN4",
      "normalizedModelNumber": "ucha-24hdcsn4",
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
      "id": "model-vkin-ucha-48hdct",
      "slug": "vkin-ucha-48hdct",
      "name": "VKIN UCHA-48HDCT",
      "seriesId": "series-vkin-ahu",
      "brandId": "brand-vkin",
      "modelNumber": "UCHA-48HDCT",
      "normalizedModelNumber": "ucha-48hdct",
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
      "id": "model-vkin-ucha-36hdcsn4",
      "slug": "vkin-ucha-36hdcsn4",
      "name": "VKIN UCHA-36HDCSN4",
      "seriesId": "series-vkin-side-discharge",
      "brandId": "brand-vkin",
      "modelNumber": "UCHA-36HDCSN4",
      "normalizedModelNumber": "ucha-36hdcsn4",
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
      "id": "model-vkin-ucha-48hdcsn4",
      "slug": "vkin-ucha-48hdcsn4",
      "name": "VKIN UCHA-48HDCSN4",
      "seriesId": "series-vkin-side-discharge",
      "brandId": "brand-vkin",
      "modelNumber": "UCHA-48HDCSN4",
      "normalizedModelNumber": "ucha-48hdcsn4",
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
      "id": "model-vkin-ucha-60hdct",
      "slug": "vkin-ucha-60hdct",
      "name": "VKIN UCHA-60HDCT",
      "seriesId": "series-vkin-ahu",
      "brandId": "brand-vkin",
      "modelNumber": "UCHA-60HDCT",
      "normalizedModelNumber": "ucha-60hdct",
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
      "id": "model-vkin-ucha-60hdcsn4",
      "slug": "vkin-ucha-60hdcsn4",
      "name": "VKIN UCHA-60HDCSN4",
      "seriesId": "series-vkin-side-discharge",
      "brandId": "brand-vkin",
      "modelNumber": "UCHA-60HDCSN4",
      "normalizedModelNumber": "ucha-60hdcsn4",
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
      "id": "ou-vkin-urha-09wdcn4o",
      "modelNumber": "URHA-09WDCN4(O)",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-12wdcn4",
      "modelNumber": "URHT-12WDCN4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-27fm3n4",
      "modelNumber": "URHT-27FM3N4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-18fm2n4",
      "modelNumber": "URHT-18FM2N4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-12wdc1n4",
      "modelNumber": "URHT-12WDC1N4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urha-12wdcn4o",
      "modelNumber": "URHA-12WDCN4(O)",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urha-09wdc1n4o",
      "modelNumber": "URHA-09WDC1N4(O)",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-18wdcn4",
      "modelNumber": "URHT-18WDCN4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-24wdcn4",
      "modelNumber": "URHT-24WDCN4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urha-24wdcn4o",
      "modelNumber": "URHA-24WDCN4(O)",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-36fm4n4",
      "modelNumber": "URHT-36FM4N4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-55fm6n4",
      "modelNumber": "URHT-55FM6N4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urha-12wdc1n4o",
      "modelNumber": "URHA-12WDC1N4(O)",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urht-42fm5n4",
      "modelNumber": "URHT-42FM5N4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urha-18wdcn4o",
      "modelNumber": "URHA-18WDCN4(O)",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-urha-18wdcnx-o",
      "modelNumber": "URHA-18WDCNX-O",
      "brandId": "brand-vkin",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-vkin-ucha-24hdct",
      "modelNumber": "UCHA-24HDCT",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-ucha-36hdct",
      "modelNumber": "UCHA-36HDCT",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-ucha-24hdcsn4",
      "modelNumber": "UCHA-24HDCSN4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-ucha-48hdct",
      "modelNumber": "UCHA-48HDCT",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-ucha-36hdcsn4",
      "modelNumber": "UCHA-36HDCSN4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-ucha-48hdcsn4",
      "modelNumber": "UCHA-48HDCSN4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-ucha-60hdct",
      "modelNumber": "UCHA-60HDCT",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-vkin-ucha-60hdcsn4",
      "modelNumber": "UCHA-60HDCSN4",
      "brandId": "brand-vkin",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-urha-09wdcn4i",
      "modelNumber": "URHA-09WDCN4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urht-12wdcn4i",
      "modelNumber": "URHT-12WDCN4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52179",
      "modelNumber": "IU-52179",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52176",
      "modelNumber": "IU-52176",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urht-12wdc1n4i",
      "modelNumber": "URHT-12WDC1N4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urha-12wdcn4i",
      "modelNumber": "URHA-12WDCN4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urha-09wdc1n4i",
      "modelNumber": "URHA-09WDC1N4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urht-18wdcn4i",
      "modelNumber": "URHT-18WDCN4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urht-24wdcn4i",
      "modelNumber": "URHT-24WDCN4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urha-24wdcn4i",
      "modelNumber": "URHA-24WDCN4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52180",
      "modelNumber": "IU-52180",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52182",
      "modelNumber": "IU-52182",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urha-12wdc1n4i",
      "modelNumber": "URHA-12WDC1N4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52181",
      "modelNumber": "IU-52181",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urha-18wdcn4i",
      "modelNumber": "URHA-18WDCN4(I)",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-urha-18wdcnx-i",
      "modelNumber": "URHA-18WDCNX-I",
      "brandId": "brand-vkin",
      "type": "wall-single"
    },
    {
      "id": "iu-ucha-24hdc",
      "modelNumber": "UCHA-24HDC",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36hdc",
      "modelNumber": "UCHA-36HDC",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-24hdcn4",
      "modelNumber": "UCHA-24HDCN4",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-24shdcn4",
      "modelNumber": "UCHA-24SHDCN4",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-48hdc",
      "modelNumber": "UCHA-48HDC",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36hdcn4",
      "modelNumber": "UCHA-36HDCN4",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36shdcn4",
      "modelNumber": "UCHA-36SHDCN4",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-48hdcn4",
      "modelNumber": "UCHA-48HDCN4",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-48shdcn4",
      "modelNumber": "UCHA-48SHDCN4",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60hdc",
      "modelNumber": "UCHA-60HDC",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60shdcn4",
      "modelNumber": "UCHA-60SHDCN4",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60hdcn4",
      "modelNumber": "UCHA-60HDCN4",
      "brandId": "brand-vkin",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-vkin-urha-09wdcn4o-urha-09wdcn4i",
      "slug": "vkin-urha-09wdcn4o-urha-09wdcn4i",
      "modelId": "model-vkin-urha-09wdcn4o",
      "outdoorUnitId": "ou-vkin-urha-09wdcn4o",
      "indoorUnitId": "iu-urha-09wdcn4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-12wdcn4-urht-12wdcn4i",
      "slug": "vkin-urht-12wdcn4-urht-12wdcn4i",
      "modelId": "model-vkin-urht-12wdcn4",
      "outdoorUnitId": "ou-vkin-urht-12wdcn4",
      "indoorUnitId": "iu-urht-12wdcn4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-27fm3n4-iu-52179",
      "slug": "vkin-urht-27fm3n4-iu-52179",
      "modelId": "model-vkin-urht-27fm3n4",
      "outdoorUnitId": "ou-vkin-urht-27fm3n4",
      "indoorUnitId": "iu-iu-52179",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-18fm2n4-iu-52176",
      "slug": "vkin-urht-18fm2n4-iu-52176",
      "modelId": "model-vkin-urht-18fm2n4",
      "outdoorUnitId": "ou-vkin-urht-18fm2n4",
      "indoorUnitId": "iu-iu-52176",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-12wdc1n4-urht-12wdc1n4i",
      "slug": "vkin-urht-12wdc1n4-urht-12wdc1n4i",
      "modelId": "model-vkin-urht-12wdc1n4",
      "outdoorUnitId": "ou-vkin-urht-12wdc1n4",
      "indoorUnitId": "iu-urht-12wdc1n4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urha-12wdcn4o-urha-12wdcn4i",
      "slug": "vkin-urha-12wdcn4o-urha-12wdcn4i",
      "modelId": "model-vkin-urha-12wdcn4o",
      "outdoorUnitId": "ou-vkin-urha-12wdcn4o",
      "indoorUnitId": "iu-urha-12wdcn4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urha-09wdc1n4o-urha-09wdc1n4i",
      "slug": "vkin-urha-09wdc1n4o-urha-09wdc1n4i",
      "modelId": "model-vkin-urha-09wdc1n4o",
      "outdoorUnitId": "ou-vkin-urha-09wdc1n4o",
      "indoorUnitId": "iu-urha-09wdc1n4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-18wdcn4-urht-18wdcn4i",
      "slug": "vkin-urht-18wdcn4-urht-18wdcn4i",
      "modelId": "model-vkin-urht-18wdcn4",
      "outdoorUnitId": "ou-vkin-urht-18wdcn4",
      "indoorUnitId": "iu-urht-18wdcn4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-24wdcn4-urht-24wdcn4i",
      "slug": "vkin-urht-24wdcn4-urht-24wdcn4i",
      "modelId": "model-vkin-urht-24wdcn4",
      "outdoorUnitId": "ou-vkin-urht-24wdcn4",
      "indoorUnitId": "iu-urht-24wdcn4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urha-24wdcn4o-urha-24wdcn4i",
      "slug": "vkin-urha-24wdcn4o-urha-24wdcn4i",
      "modelId": "model-vkin-urha-24wdcn4o",
      "outdoorUnitId": "ou-vkin-urha-24wdcn4o",
      "indoorUnitId": "iu-urha-24wdcn4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-36fm4n4-iu-52180",
      "slug": "vkin-urht-36fm4n4-iu-52180",
      "modelId": "model-vkin-urht-36fm4n4",
      "outdoorUnitId": "ou-vkin-urht-36fm4n4",
      "indoorUnitId": "iu-iu-52180",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-55fm6n4-iu-52182",
      "slug": "vkin-urht-55fm6n4-iu-52182",
      "modelId": "model-vkin-urht-55fm6n4",
      "outdoorUnitId": "ou-vkin-urht-55fm6n4",
      "indoorUnitId": "iu-iu-52182",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urha-12wdc1n4o-urha-12wdc1n4i",
      "slug": "vkin-urha-12wdc1n4o-urha-12wdc1n4i",
      "modelId": "model-vkin-urha-12wdc1n4o",
      "outdoorUnitId": "ou-vkin-urha-12wdc1n4o",
      "indoorUnitId": "iu-urha-12wdc1n4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urht-42fm5n4-iu-52181",
      "slug": "vkin-urht-42fm5n4-iu-52181",
      "modelId": "model-vkin-urht-42fm5n4",
      "outdoorUnitId": "ou-vkin-urht-42fm5n4",
      "indoorUnitId": "iu-iu-52181",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urha-18wdcn4o-urha-18wdcn4i",
      "slug": "vkin-urha-18wdcn4o-urha-18wdcn4i",
      "modelId": "model-vkin-urha-18wdcn4o",
      "outdoorUnitId": "ou-vkin-urha-18wdcn4o",
      "indoorUnitId": "iu-urha-18wdcn4i",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-urha-18wdcnx-o-urha-18wdcnx-i",
      "slug": "vkin-urha-18wdcnx-o-urha-18wdcnx-i",
      "modelId": "model-vkin-urha-18wdcnx-o",
      "outdoorUnitId": "ou-vkin-urha-18wdcnx-o",
      "indoorUnitId": "iu-urha-18wdcnx-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-24hdct-ucha-24hdc",
      "slug": "vkin-ucha-24hdct-ucha-24hdc",
      "modelId": "model-vkin-ucha-24hdct",
      "outdoorUnitId": "ou-vkin-ucha-24hdct",
      "indoorUnitId": "iu-ucha-24hdc",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-36hdct-ucha-36hdc",
      "slug": "vkin-ucha-36hdct-ucha-36hdc",
      "modelId": "model-vkin-ucha-36hdct",
      "outdoorUnitId": "ou-vkin-ucha-36hdct",
      "indoorUnitId": "iu-ucha-36hdc",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-24hdcsn4-ucha-24hdcn4",
      "slug": "vkin-ucha-24hdcsn4-ucha-24hdcn4",
      "modelId": "model-vkin-ucha-24hdcsn4",
      "outdoorUnitId": "ou-vkin-ucha-24hdcsn4",
      "indoorUnitId": "iu-ucha-24hdcn4",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-24hdcsn4-ucha-24shdcn4",
      "slug": "vkin-ucha-24hdcsn4-ucha-24shdcn4",
      "modelId": "model-vkin-ucha-24hdcsn4",
      "outdoorUnitId": "ou-vkin-ucha-24hdcsn4",
      "indoorUnitId": "iu-ucha-24shdcn4",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-48hdct-ucha-48hdc",
      "slug": "vkin-ucha-48hdct-ucha-48hdc",
      "modelId": "model-vkin-ucha-48hdct",
      "outdoorUnitId": "ou-vkin-ucha-48hdct",
      "indoorUnitId": "iu-ucha-48hdc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-36hdcsn4-ucha-36hdcn4",
      "slug": "vkin-ucha-36hdcsn4-ucha-36hdcn4",
      "modelId": "model-vkin-ucha-36hdcsn4",
      "outdoorUnitId": "ou-vkin-ucha-36hdcsn4",
      "indoorUnitId": "iu-ucha-36hdcn4",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-36hdcsn4-ucha-36shdcn4",
      "slug": "vkin-ucha-36hdcsn4-ucha-36shdcn4",
      "modelId": "model-vkin-ucha-36hdcsn4",
      "outdoorUnitId": "ou-vkin-ucha-36hdcsn4",
      "indoorUnitId": "iu-ucha-36shdcn4",
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-48hdcsn4-ucha-48hdcn4",
      "slug": "vkin-ucha-48hdcsn4-ucha-48hdcn4",
      "modelId": "model-vkin-ucha-48hdcsn4",
      "outdoorUnitId": "ou-vkin-ucha-48hdcsn4",
      "indoorUnitId": "iu-ucha-48hdcn4",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-48hdcsn4-ucha-48shdcn4",
      "slug": "vkin-ucha-48hdcsn4-ucha-48shdcn4",
      "modelId": "model-vkin-ucha-48hdcsn4",
      "outdoorUnitId": "ou-vkin-ucha-48hdcsn4",
      "indoorUnitId": "iu-ucha-48shdcn4",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-60hdct-ucha-60hdc",
      "slug": "vkin-ucha-60hdct-ucha-60hdc",
      "modelId": "model-vkin-ucha-60hdct",
      "outdoorUnitId": "ou-vkin-ucha-60hdct",
      "indoorUnitId": "iu-ucha-60hdc",
      "minHeatingTempC": -25,
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
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-60hdcsn4-ucha-60shdcn4",
      "slug": "vkin-ucha-60hdcsn4-ucha-60shdcn4",
      "modelId": "model-vkin-ucha-60hdcsn4",
      "outdoorUnitId": "ou-vkin-ucha-60hdcsn4",
      "indoorUnitId": "iu-ucha-60shdcn4",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-vkin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vkin-ucha-60hdcsn4-ucha-60hdcn4",
      "slug": "vkin-ucha-60hdcsn4-ucha-60hdcn4",
      "modelId": "model-vkin-ucha-60hdcsn4",
      "outdoorUnitId": "ou-vkin-ucha-60hdcsn4",
      "indoorUnitId": "iu-ucha-60hdcn4",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-vkin-epa",
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
