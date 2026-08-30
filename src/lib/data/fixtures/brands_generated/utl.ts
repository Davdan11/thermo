import type { BrandDataset } from "../../types";

export const brand_utlDataset: BrandDataset = {
  "brand": {
    "id": "brand-utl",
    "slug": "utl",
    "name": "UTL",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour UTL",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-utl-epa",
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
      "id": "series-utl-t-series",
      "slug": "utl-t-series",
      "name": "T* Series",
      "brandId": "brand-utl",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T* Series de UTL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-utl-ahu",
      "slug": "utl-ahu",
      "name": "AHU",
      "brandId": "brand-utl",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AHU de UTL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-utl-top-discharge",
      "slug": "utl-top-discharge",
      "name": "TOP-DISCHARGE",
      "brandId": "brand-utl",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TOP-DISCHARGE de UTL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-utl-wall-mount-ahu",
      "slug": "utl-wall-mount-ahu",
      "name": "Wall-Mount AHU",
      "brandId": "brand-utl",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Wall-Mount AHU de UTL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-utl-side-discharge",
      "slug": "utl-side-discharge",
      "name": "SIDE-DISCHARGE",
      "brandId": "brand-utl",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SIDE-DISCHARGE de UTL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-utl-ucha-24hdct",
      "slug": "utl-ucha-24hdct",
      "name": "UTL UCHA-24HDCT*",
      "seriesId": "series-utl-t-series",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-24HDCT*",
      "normalizedModelNumber": "ucha-24hdct*",
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
      "id": "model-utl-ucha-24hdctrn2",
      "slug": "utl-ucha-24hdctrn2",
      "name": "UTL UCHA-24HDCTRN2",
      "seriesId": "series-utl-top-discharge",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-24HDCTRN2",
      "normalizedModelNumber": "ucha-24hdctrn2",
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
      "id": "model-utl-ucha-30hfdcsn4",
      "slug": "utl-ucha-30hfdcsn4",
      "name": "UTL UCHA-30HFDCSN4",
      "seriesId": "series-utl-wall-mount-ahu",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-30HFDCSN4",
      "normalizedModelNumber": "ucha-30hfdcsn4",
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
      "id": "model-utl-ucha-24hdcsn2",
      "slug": "utl-ucha-24hdcsn2",
      "name": "UTL UCHA-24HDCSN2",
      "seriesId": "series-utl-side-discharge",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-24HDCSN2",
      "normalizedModelNumber": "ucha-24hdcsn2",
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
      "id": "model-utl-ucha-18hfdcsn4",
      "slug": "utl-ucha-18hfdcsn4",
      "name": "UTL UCHA-18HFDCSN4",
      "seriesId": "series-utl-wall-mount-ahu",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-18HFDCSN4",
      "normalizedModelNumber": "ucha-18hfdcsn4",
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
      "id": "model-utl-ucha-24hdcsn4",
      "slug": "utl-ucha-24hdcsn4",
      "name": "UTL UCHA-24HDCSN4",
      "seriesId": "series-utl-side-discharge",
      "brandId": "brand-utl",
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
      "id": "model-utl-ucha-36hdcto",
      "slug": "utl-ucha-36hdcto",
      "name": "UTL UCHA-36HDCT(O)",
      "seriesId": "series-utl-ahu",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-36HDCT(O)",
      "normalizedModelNumber": "ucha-36hdct(o)",
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
      "id": "model-utl-ucha-36hdct",
      "slug": "utl-ucha-36hdct",
      "name": "UTL UCHA-36HDCT",
      "seriesId": "series-utl-ahu",
      "brandId": "brand-utl",
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
      "id": "model-utl-ucha-48hdct",
      "slug": "utl-ucha-48hdct",
      "name": "UTL UCHA-48HDCT",
      "seriesId": "series-utl-ahu",
      "brandId": "brand-utl",
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
      "id": "model-utl-ucha-36hdcsn2",
      "slug": "utl-ucha-36hdcsn2",
      "name": "UTL UCHA-36HDCSN2",
      "seriesId": "series-utl-side-discharge",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-36HDCSN2",
      "normalizedModelNumber": "ucha-36hdcsn2",
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
      "id": "model-utl-ucha-36hdcsn4",
      "slug": "utl-ucha-36hdcsn4",
      "name": "UTL UCHA-36HDCSN4",
      "seriesId": "series-utl-side-discharge",
      "brandId": "brand-utl",
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
      "id": "model-utl-ucha-36hdctrn2",
      "slug": "utl-ucha-36hdctrn2",
      "name": "UTL UCHA-36HDCTRN2",
      "seriesId": "series-utl-top-discharge",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-36HDCTRN2",
      "normalizedModelNumber": "ucha-36hdctrn2",
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
      "id": "model-utl-ucha-24hfdcsn4",
      "slug": "utl-ucha-24hfdcsn4",
      "name": "UTL UCHA-24HFDCSN4",
      "seriesId": "series-utl-wall-mount-ahu",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-24HFDCSN4",
      "normalizedModelNumber": "ucha-24hfdcsn4",
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
      "id": "model-utl-ucha-48hdcsn2",
      "slug": "utl-ucha-48hdcsn2",
      "name": "UTL UCHA-48HDCSN2",
      "seriesId": "series-utl-side-discharge",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-48HDCSN2",
      "normalizedModelNumber": "ucha-48hdcsn2",
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
      "id": "model-utl-ucha-48hdcsn4",
      "slug": "utl-ucha-48hdcsn4",
      "name": "UTL UCHA-48HDCSN4",
      "seriesId": "series-utl-side-discharge",
      "brandId": "brand-utl",
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
      "id": "model-utl-ucha-60hdct",
      "slug": "utl-ucha-60hdct",
      "name": "UTL UCHA-60HDCT",
      "seriesId": "series-utl-ahu",
      "brandId": "brand-utl",
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
      "id": "model-utl-ucha-36hfdcsn4",
      "slug": "utl-ucha-36hfdcsn4",
      "name": "UTL UCHA-36HFDCSN4",
      "seriesId": "series-utl-wall-mount-ahu",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-36HFDCSN4",
      "normalizedModelNumber": "ucha-36hfdcsn4",
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
      "id": "model-utl-ucha-60hdcsn4",
      "slug": "utl-ucha-60hdcsn4",
      "name": "UTL UCHA-60HDCSN4",
      "seriesId": "series-utl-side-discharge",
      "brandId": "brand-utl",
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
    },
    {
      "id": "model-utl-ucha-60hdcsn2",
      "slug": "utl-ucha-60hdcsn2",
      "name": "UTL UCHA-60HDCSN2",
      "seriesId": "series-utl-side-discharge",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-60HDCSN2",
      "normalizedModelNumber": "ucha-60hdcsn2",
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
      "id": "model-utl-ucha-48hdctrn2",
      "slug": "utl-ucha-48hdctrn2",
      "name": "UTL UCHA-48HDCTRN2",
      "seriesId": "series-utl-top-discharge",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-48HDCTRN2",
      "normalizedModelNumber": "ucha-48hdctrn2",
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
      "id": "model-utl-ucha-60hdctrn2",
      "slug": "utl-ucha-60hdctrn2",
      "name": "UTL UCHA-60HDCTRN2",
      "seriesId": "series-utl-top-discharge",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-60HDCTRN2",
      "normalizedModelNumber": "ucha-60hdctrn2",
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
      "id": "model-utl-ucha-60hdco",
      "slug": "utl-ucha-60hdco",
      "name": "UTL UCHA-60HDC(O)",
      "seriesId": "series-utl-ahu",
      "brandId": "brand-utl",
      "modelNumber": "UCHA-60HDC(O)",
      "normalizedModelNumber": "ucha-60hdc(o)",
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
      "id": "ou-utl-ucha-24hdct",
      "modelNumber": "UCHA-24HDCT*",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-24hdctrn2",
      "modelNumber": "UCHA-24HDCTRN2",
      "brandId": "brand-utl",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-utl-ucha-30hfdcsn4",
      "modelNumber": "UCHA-30HFDCSN4",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-24hdcsn2",
      "modelNumber": "UCHA-24HDCSN2",
      "brandId": "brand-utl",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-utl-ucha-18hfdcsn4",
      "modelNumber": "UCHA-18HFDCSN4",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-24hdcsn4",
      "modelNumber": "UCHA-24HDCSN4",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-36hdcto",
      "modelNumber": "UCHA-36HDCT(O)",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-36hdct",
      "modelNumber": "UCHA-36HDCT",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-48hdct",
      "modelNumber": "UCHA-48HDCT",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-36hdcsn2",
      "modelNumber": "UCHA-36HDCSN2",
      "brandId": "brand-utl",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-utl-ucha-36hdcsn4",
      "modelNumber": "UCHA-36HDCSN4",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-36hdctrn2",
      "modelNumber": "UCHA-36HDCTRN2",
      "brandId": "brand-utl",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-utl-ucha-24hfdcsn4",
      "modelNumber": "UCHA-24HFDCSN4",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-48hdcsn2",
      "modelNumber": "UCHA-48HDCSN2",
      "brandId": "brand-utl",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-utl-ucha-48hdcsn4",
      "modelNumber": "UCHA-48HDCSN4",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-60hdct",
      "modelNumber": "UCHA-60HDCT",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-36hfdcsn4",
      "modelNumber": "UCHA-36HFDCSN4",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-60hdcsn4",
      "modelNumber": "UCHA-60HDCSN4",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-utl-ucha-60hdcsn2",
      "modelNumber": "UCHA-60HDCSN2",
      "brandId": "brand-utl",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-utl-ucha-48hdctrn2",
      "modelNumber": "UCHA-48HDCTRN2",
      "brandId": "brand-utl",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-utl-ucha-60hdctrn2",
      "modelNumber": "UCHA-60HDCTRN2",
      "brandId": "brand-utl",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-utl-ucha-60hdco",
      "modelNumber": "UCHA-60HDC(O)",
      "brandId": "brand-utl",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ucha-24hdc",
      "modelNumber": "UCHA-24HDC",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-24hdcaln2",
      "modelNumber": "UCHA-24HDCALN2",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-30hfdcan4",
      "modelNumber": "UCHA-30HFDCAN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-18hfdcan4",
      "modelNumber": "UCHA-18HFDCAN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-24shdcn4",
      "modelNumber": "UCHA-24SHDCN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-24hdcn4",
      "modelNumber": "UCHA-24HDCN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-24shdcaln2",
      "modelNumber": "UCHA-24SHDCALN2",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36hdcti",
      "modelNumber": "UCHA-36HDCT(I)",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36hdc",
      "modelNumber": "UCHA-36HDC",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-48hdc",
      "modelNumber": "UCHA-48HDC",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36shdcaln2",
      "modelNumber": "UCHA-36SHDCALN2",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36hdcn4",
      "modelNumber": "UCHA-36HDCN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36shdcn4",
      "modelNumber": "UCHA-36SHDCN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36hdcaln2",
      "modelNumber": "UCHA-36HDCALN2",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-24hfdcan4",
      "modelNumber": "UCHA-24HFDCAN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-48hdcaln2",
      "modelNumber": "UCHA-48HDCALN2",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-48shdcaln2",
      "modelNumber": "UCHA-48SHDCALN2",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-48shdcn4",
      "modelNumber": "UCHA-48SHDCN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-48hdcn4",
      "modelNumber": "UCHA-48HDCN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60hdc",
      "modelNumber": "UCHA-60HDC",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-36hfdcan4",
      "modelNumber": "UCHA-36HFDCAN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60shdcn4",
      "modelNumber": "UCHA-60SHDCN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60hdcaln2",
      "modelNumber": "UCHA-60HDCALN2",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60shdcaln2",
      "modelNumber": "UCHA-60SHDCALN2",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60hdcn4",
      "modelNumber": "UCHA-60HDCN4",
      "brandId": "brand-utl",
      "type": "central-ducted"
    },
    {
      "id": "iu-ucha-60hdci",
      "modelNumber": "UCHA-60HDC(I)",
      "brandId": "brand-utl",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-utl-ucha-24hdct-ucha-24hdc",
      "slug": "utl-ucha-24hdct-ucha-24hdc",
      "modelId": "model-utl-ucha-24hdct",
      "outdoorUnitId": "ou-utl-ucha-24hdct",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-24hdct-ucha-24hdc",
      "slug": "utl-ucha-24hdct-ucha-24hdc",
      "modelId": "model-utl-ucha-24hdct",
      "outdoorUnitId": "ou-utl-ucha-24hdct",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-24hdctrn2-ucha-24hdcaln2",
      "slug": "utl-ucha-24hdctrn2-ucha-24hdcaln2",
      "modelId": "model-utl-ucha-24hdctrn2",
      "outdoorUnitId": "ou-utl-ucha-24hdctrn2",
      "indoorUnitId": "iu-ucha-24hdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-30hfdcsn4-ucha-30hfdcan4",
      "slug": "utl-ucha-30hfdcsn4-ucha-30hfdcan4",
      "modelId": "model-utl-ucha-30hfdcsn4",
      "outdoorUnitId": "ou-utl-ucha-30hfdcsn4",
      "indoorUnitId": "iu-ucha-30hfdcan4",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-24hdcsn2-ucha-24hdcaln2",
      "slug": "utl-ucha-24hdcsn2-ucha-24hdcaln2",
      "modelId": "model-utl-ucha-24hdcsn2",
      "outdoorUnitId": "ou-utl-ucha-24hdcsn2",
      "indoorUnitId": "iu-ucha-24hdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-18hfdcsn4-ucha-18hfdcan4",
      "slug": "utl-ucha-18hfdcsn4-ucha-18hfdcan4",
      "modelId": "model-utl-ucha-18hfdcsn4",
      "outdoorUnitId": "ou-utl-ucha-18hfdcsn4",
      "indoorUnitId": "iu-ucha-18hfdcan4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-24hdcsn4-ucha-24shdcn4",
      "slug": "utl-ucha-24hdcsn4-ucha-24shdcn4",
      "modelId": "model-utl-ucha-24hdcsn4",
      "outdoorUnitId": "ou-utl-ucha-24hdcsn4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-24hdcsn4-ucha-24hdcn4",
      "slug": "utl-ucha-24hdcsn4-ucha-24hdcn4",
      "modelId": "model-utl-ucha-24hdcsn4",
      "outdoorUnitId": "ou-utl-ucha-24hdcsn4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-24hdcsn2-ucha-24shdcaln2",
      "slug": "utl-ucha-24hdcsn2-ucha-24shdcaln2",
      "modelId": "model-utl-ucha-24hdcsn2",
      "outdoorUnitId": "ou-utl-ucha-24hdcsn2",
      "indoorUnitId": "iu-ucha-24shdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hdcto-ucha-36hdcti",
      "slug": "utl-ucha-36hdcto-ucha-36hdcti",
      "modelId": "model-utl-ucha-36hdcto",
      "outdoorUnitId": "ou-utl-ucha-36hdcto",
      "indoorUnitId": "iu-ucha-36hdcti",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hdct-ucha-36hdc",
      "slug": "utl-ucha-36hdct-ucha-36hdc",
      "modelId": "model-utl-ucha-36hdct",
      "outdoorUnitId": "ou-utl-ucha-36hdct",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hdct-ucha-36hdc",
      "slug": "utl-ucha-36hdct-ucha-36hdc",
      "modelId": "model-utl-ucha-36hdct",
      "outdoorUnitId": "ou-utl-ucha-36hdct",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-48hdct-ucha-48hdc",
      "slug": "utl-ucha-48hdct-ucha-48hdc",
      "modelId": "model-utl-ucha-48hdct",
      "outdoorUnitId": "ou-utl-ucha-48hdct",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-48hdct-ucha-48hdc",
      "slug": "utl-ucha-48hdct-ucha-48hdc",
      "modelId": "model-utl-ucha-48hdct",
      "outdoorUnitId": "ou-utl-ucha-48hdct",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hdcsn2-ucha-36shdcaln2",
      "slug": "utl-ucha-36hdcsn2-ucha-36shdcaln2",
      "modelId": "model-utl-ucha-36hdcsn2",
      "outdoorUnitId": "ou-utl-ucha-36hdcsn2",
      "indoorUnitId": "iu-ucha-36shdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hdcsn4-ucha-36hdcn4",
      "slug": "utl-ucha-36hdcsn4-ucha-36hdcn4",
      "modelId": "model-utl-ucha-36hdcsn4",
      "outdoorUnitId": "ou-utl-ucha-36hdcsn4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hdcsn4-ucha-36shdcn4",
      "slug": "utl-ucha-36hdcsn4-ucha-36shdcn4",
      "modelId": "model-utl-ucha-36hdcsn4",
      "outdoorUnitId": "ou-utl-ucha-36hdcsn4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hdcsn2-ucha-36hdcaln2",
      "slug": "utl-ucha-36hdcsn2-ucha-36hdcaln2",
      "modelId": "model-utl-ucha-36hdcsn2",
      "outdoorUnitId": "ou-utl-ucha-36hdcsn2",
      "indoorUnitId": "iu-ucha-36hdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hdctrn2-ucha-36hdcaln2",
      "slug": "utl-ucha-36hdctrn2-ucha-36hdcaln2",
      "modelId": "model-utl-ucha-36hdctrn2",
      "outdoorUnitId": "ou-utl-ucha-36hdctrn2",
      "indoorUnitId": "iu-ucha-36hdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-24hfdcsn4-ucha-24hfdcan4",
      "slug": "utl-ucha-24hfdcsn4-ucha-24hfdcan4",
      "modelId": "model-utl-ucha-24hfdcsn4",
      "outdoorUnitId": "ou-utl-ucha-24hfdcsn4",
      "indoorUnitId": "iu-ucha-24hfdcan4",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-48hdcsn2-ucha-48hdcaln2",
      "slug": "utl-ucha-48hdcsn2-ucha-48hdcaln2",
      "modelId": "model-utl-ucha-48hdcsn2",
      "outdoorUnitId": "ou-utl-ucha-48hdcsn2",
      "indoorUnitId": "iu-ucha-48hdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-48hdcsn2-ucha-48shdcaln2",
      "slug": "utl-ucha-48hdcsn2-ucha-48shdcaln2",
      "modelId": "model-utl-ucha-48hdcsn2",
      "outdoorUnitId": "ou-utl-ucha-48hdcsn2",
      "indoorUnitId": "iu-ucha-48shdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-48hdcsn4-ucha-48shdcn4",
      "slug": "utl-ucha-48hdcsn4-ucha-48shdcn4",
      "modelId": "model-utl-ucha-48hdcsn4",
      "outdoorUnitId": "ou-utl-ucha-48hdcsn4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-48hdcsn4-ucha-48hdcn4",
      "slug": "utl-ucha-48hdcsn4-ucha-48hdcn4",
      "modelId": "model-utl-ucha-48hdcsn4",
      "outdoorUnitId": "ou-utl-ucha-48hdcsn4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-60hdct-ucha-60hdc",
      "slug": "utl-ucha-60hdct-ucha-60hdc",
      "modelId": "model-utl-ucha-60hdct",
      "outdoorUnitId": "ou-utl-ucha-60hdct",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-60hdct-ucha-60hdc",
      "slug": "utl-ucha-60hdct-ucha-60hdc",
      "modelId": "model-utl-ucha-60hdct",
      "outdoorUnitId": "ou-utl-ucha-60hdct",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-36hfdcsn4-ucha-36hfdcan4",
      "slug": "utl-ucha-36hfdcsn4-ucha-36hfdcan4",
      "modelId": "model-utl-ucha-36hfdcsn4",
      "outdoorUnitId": "ou-utl-ucha-36hfdcsn4",
      "indoorUnitId": "iu-ucha-36hfdcan4",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-60hdcsn4-ucha-60shdcn4",
      "slug": "utl-ucha-60hdcsn4-ucha-60shdcn4",
      "modelId": "model-utl-ucha-60hdcsn4",
      "outdoorUnitId": "ou-utl-ucha-60hdcsn4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-60hdcsn2-ucha-60hdcaln2",
      "slug": "utl-ucha-60hdcsn2-ucha-60hdcaln2",
      "modelId": "model-utl-ucha-60hdcsn2",
      "outdoorUnitId": "ou-utl-ucha-60hdcsn2",
      "indoorUnitId": "iu-ucha-60hdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-60hdcsn2-ucha-60shdcaln2",
      "slug": "utl-ucha-60hdcsn2-ucha-60shdcaln2",
      "modelId": "model-utl-ucha-60hdcsn2",
      "outdoorUnitId": "ou-utl-ucha-60hdcsn2",
      "indoorUnitId": "iu-ucha-60shdcaln2",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-60hdcsn4-ucha-60hdcn4",
      "slug": "utl-ucha-60hdcsn4-ucha-60hdcn4",
      "modelId": "model-utl-ucha-60hdcsn4",
      "outdoorUnitId": "ou-utl-ucha-60hdcsn4",
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
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-48hdctrn2-ucha-48hdcaln2",
      "slug": "utl-ucha-48hdctrn2-ucha-48hdcaln2",
      "modelId": "model-utl-ucha-48hdctrn2",
      "outdoorUnitId": "ou-utl-ucha-48hdctrn2",
      "indoorUnitId": "iu-ucha-48hdcaln2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-60hdctrn2-ucha-60hdcaln2",
      "slug": "utl-ucha-60hdctrn2-ucha-60hdcaln2",
      "modelId": "model-utl-ucha-60hdctrn2",
      "outdoorUnitId": "ou-utl-ucha-60hdctrn2",
      "indoorUnitId": "iu-ucha-60hdcaln2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-utl-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-utl-ucha-60hdco-ucha-60hdci",
      "slug": "utl-ucha-60hdco-ucha-60hdci",
      "modelId": "model-utl-ucha-60hdco",
      "outdoorUnitId": "ou-utl-ucha-60hdco",
      "indoorUnitId": "iu-ucha-60hdci",
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
          "sourceId": "src-utl-epa",
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
