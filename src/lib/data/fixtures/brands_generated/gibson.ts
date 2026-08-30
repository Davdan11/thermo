import type { BrandDataset } from "../../types";

export const brand_gibsonDataset: BrandDataset = {
  "brand": {
    "id": "brand-gibson",
    "slug": "gibson",
    "name": "Gibson",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Gibson",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-gibson-epa",
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
      "id": "series-gibson-24-26-seer2-minisplits",
      "slug": "gibson-24-26-seer2-minisplits",
      "name": "(24-26 SEER2) Minisplits",
      "brandId": "brand-gibson",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série (24-26 SEER2) Minisplits de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gibson-lomo",
      "slug": "gibson-lomo",
      "name": "Lomo",
      "brandId": "brand-gibson",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Lomo de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gibson-multizone-indoors-eight-way-compact-cassettes",
      "slug": "gibson-multizone-indoors-eight-way-compact-cassettes",
      "name": "Multizone Indoors Eight-way Compact Cassettes",
      "brandId": "brand-gibson",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multizone Indoors Eight-way Compact Cassettes de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gibson-flex-match",
      "slug": "gibson-flex-match",
      "name": "Flex Match",
      "brandId": "brand-gibson",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Flex Match de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gibson-multizone-outdoors",
      "slug": "gibson-multizone-outdoors",
      "name": "Multizone Outdoors",
      "brandId": "brand-gibson",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multizone Outdoors de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gibson-19-205-seer2-minisplits",
      "slug": "gibson-19-205-seer2-minisplits",
      "name": "(19-20.5 SEER2) Minisplits",
      "brandId": "brand-gibson",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série (19-20.5 SEER2) Minisplits de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gibson-e-series",
      "slug": "gibson-e-series",
      "name": "E Series",
      "brandId": "brand-gibson",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E Series de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gibson-ultra-side-discharge",
      "slug": "gibson-ultra-side-discharge",
      "name": "Ultra Side Discharge",
      "brandId": "brand-gibson",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra Side Discharge de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gibson-gibson-fsh4bf-series",
      "slug": "gibson-gibson-fsh4bf-series",
      "name": "GIBSON FSH4BF SERIES",
      "brandId": "brand-gibson",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série GIBSON FSH4BF SERIES de Gibson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-gibson-dxh24psk3ih",
      "slug": "gibson-dxh24psk3ih",
      "name": "Gibson DXH24PSK3IH",
      "seriesId": "series-gibson-24-26-seer2-minisplits",
      "brandId": "brand-gibson",
      "modelNumber": "DXH24PSK3IH",
      "normalizedModelNumber": "dxh24psk3ih",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gibson-dxh09psk3ih",
      "slug": "gibson-dxh09psk3ih",
      "name": "Gibson DXH09PSK3IH",
      "seriesId": "series-gibson-24-26-seer2-minisplits",
      "brandId": "brand-gibson",
      "modelNumber": "DXH09PSK3IH",
      "normalizedModelNumber": "dxh09psk3ih",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9100,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gibson-dxh18psk3ih",
      "slug": "gibson-dxh18psk3ih",
      "name": "Gibson DXH18PSK3IH",
      "seriesId": "series-gibson-24-26-seer2-minisplits",
      "brandId": "brand-gibson",
      "modelNumber": "DXH18PSK3IH",
      "normalizedModelNumber": "dxh18psk3ih",
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
      "id": "model-gibson-dxh12psk3ih",
      "slug": "gibson-dxh12psk3ih",
      "name": "Gibson DXH12PSK3IH",
      "seriesId": "series-gibson-24-26-seer2-minisplits",
      "brandId": "brand-gibson",
      "modelNumber": "DXH12PSK3IH",
      "normalizedModelNumber": "dxh12psk3ih",
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
      "id": "model-gibson-gxh1235lsk4dh2",
      "slug": "gibson-gxh1235lsk4dh2",
      "name": "Gibson GXH12(3.5)LSK4DH2",
      "seriesId": "series-gibson-lomo",
      "brandId": "brand-gibson",
      "modelNumber": "GXH12(3.5)LSK4DH2",
      "normalizedModelNumber": "gxh12(3.5)lsk4dh2",
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
      "id": "model-gibson-gxh2470fmk4dh-1",
      "slug": "gibson-gxh2470fmk4dh-1",
      "name": "Gibson GXH24(7.0)FMK4DH-1",
      "seriesId": "series-gibson-flex-match",
      "brandId": "brand-gibson",
      "modelNumber": "GXH24(7.0)FMK4DH-1",
      "normalizedModelNumber": "gxh24(7.0)fmk4dh-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23200,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gibson-gxh36106fmk4dh-1",
      "slug": "gibson-gxh36106fmk4dh-1",
      "name": "Gibson GXH36(10.6)FMK4DH-1",
      "seriesId": "series-gibson-flex-match",
      "brandId": "brand-gibson",
      "modelNumber": "GXH36(10.6)FMK4DH-1",
      "normalizedModelNumber": "gxh36(10.6)fmk4dh-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gibson-gxh42123fmk4dh-1",
      "slug": "gibson-gxh42123fmk4dh-1",
      "name": "Gibson GXH42(12.3)FMK4DH-1",
      "seriesId": "series-gibson-flex-match",
      "brandId": "brand-gibson",
      "modelNumber": "GXH42(12.3)FMK4DH-1",
      "normalizedModelNumber": "gxh42(12.3)fmk4dh-1",
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
      "id": "model-gibson-dxh18fmk3ih",
      "slug": "gibson-dxh18fmk3ih",
      "name": "Gibson DXH18FMK3IH",
      "seriesId": "series-gibson-multizone-outdoors",
      "brandId": "brand-gibson",
      "modelNumber": "DXH18FMK3IH",
      "normalizedModelNumber": "dxh18fmk3ih",
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
      "id": "model-gibson-gxh3088fmk4dh-1",
      "slug": "gibson-gxh3088fmk4dh-1",
      "name": "Gibson GXH30(8.8)FMK4DH-1",
      "seriesId": "series-gibson-flex-match",
      "brandId": "brand-gibson",
      "modelNumber": "GXH30(8.8)FMK4DH-1",
      "normalizedModelNumber": "gxh30(8.8)fmk4dh-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gibson-dxh24fmk3ih",
      "slug": "gibson-dxh24fmk3ih",
      "name": "Gibson DXH24FMK3IH",
      "seriesId": "series-gibson-multizone-outdoors",
      "brandId": "brand-gibson",
      "modelNumber": "DXH24FMK3IH",
      "normalizedModelNumber": "dxh24fmk3ih",
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
      "id": "model-gibson-dxh30fmk3ih",
      "slug": "gibson-dxh30fmk3ih",
      "name": "Gibson DXH30FMK3IH",
      "seriesId": "series-gibson-multizone-outdoors",
      "brandId": "brand-gibson",
      "modelNumber": "DXH30FMK3IH",
      "normalizedModelNumber": "dxh30fmk3ih",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gibson-dxh36fmk3ih",
      "slug": "gibson-dxh36fmk3ih",
      "name": "Gibson DXH36FMK3IH",
      "seriesId": "series-gibson-multizone-outdoors",
      "brandId": "brand-gibson",
      "modelNumber": "DXH36FMK3IH",
      "normalizedModelNumber": "dxh36fmk3ih",
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
      "id": "model-gibson-dxh36esk3il",
      "slug": "gibson-dxh36esk3il",
      "name": "Gibson DXH36ESK3IL",
      "seriesId": "series-gibson-19-205-seer2-minisplits",
      "brandId": "brand-gibson",
      "modelNumber": "DXH36ESK3IL",
      "normalizedModelNumber": "dxh36esk3il",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33600,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gibson-gxh1853fmk4dh-1",
      "slug": "gibson-gxh1853fmk4dh-1",
      "name": "Gibson GXH18(5.3)FMK4DH-1",
      "seriesId": "series-gibson-flex-match",
      "brandId": "brand-gibson",
      "modelNumber": "GXH18(5.3)FMK4DH-1",
      "normalizedModelNumber": "gxh18(5.3)fmk4dh-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gibson-dxh42fmk3ih",
      "slug": "gibson-dxh42fmk3ih",
      "name": "Gibson DXH42FMK3IH",
      "seriesId": "series-gibson-multizone-outdoors",
      "brandId": "brand-gibson",
      "modelNumber": "DXH42FMK3IH",
      "normalizedModelNumber": "dxh42fmk3ih",
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
      "id": "model-gibson-uxh48-60msk3ih",
      "slug": "gibson-uxh48-60msk3ih",
      "name": "Gibson UXH48-60MSK3IH",
      "seriesId": "series-gibson-e-series",
      "brandId": "brand-gibson",
      "modelNumber": "UXH48-60MSK3IH",
      "normalizedModelNumber": "uxh48-60msk3ih",
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
      "id": "model-gibson-uxh24-36msk3ih",
      "slug": "gibson-uxh24-36msk3ih",
      "name": "Gibson UXH24-36MSK3IH",
      "seriesId": "series-gibson-e-series",
      "brandId": "brand-gibson",
      "modelNumber": "UXH24-36MSK3IH",
      "normalizedModelNumber": "uxh24-36msk3ih",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
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
      "id": "model-gibson-gxh48-60msk4dh",
      "slug": "gibson-gxh48-60msk4dh",
      "name": "Gibson GXH48-60MSK4DH",
      "seriesId": "series-gibson-ultra-side-discharge",
      "brandId": "brand-gibson",
      "modelNumber": "GXH48-60MSK4DH",
      "normalizedModelNumber": "gxh48-60msk4dh",
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
      "id": "model-gibson-gxh24-36msk4dh",
      "slug": "gibson-gxh24-36msk4dh",
      "name": "Gibson GXH24-36MSK4DH",
      "seriesId": "series-gibson-ultra-side-discharge",
      "brandId": "brand-gibson",
      "modelNumber": "GXH24-36MSK4DH",
      "normalizedModelNumber": "gxh24-36msk4dh",
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
      "id": "model-gibson-fsh4bf5m2sx48k",
      "slug": "gibson-fsh4bf5m2sx48k",
      "name": "Gibson FSH4BF5M2SX48K",
      "seriesId": "series-gibson-gibson-fsh4bf-series",
      "brandId": "brand-gibson",
      "modelNumber": "FSH4BF5M2SX48K",
      "normalizedModelNumber": "fsh4bf5m2sx48k",
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
      "id": "model-gibson-fsh4bf5m2sx36k",
      "slug": "gibson-fsh4bf5m2sx36k",
      "name": "Gibson FSH4BF5M2SX36K",
      "seriesId": "series-gibson-gibson-fsh4bf-series",
      "brandId": "brand-gibson",
      "modelNumber": "FSH4BF5M2SX36K",
      "normalizedModelNumber": "fsh4bf5m2sx36k",
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
      "id": "model-gibson-fsh4bf5m2sx24k",
      "slug": "gibson-fsh4bf5m2sx24k",
      "name": "Gibson FSH4BF5M2SX24K",
      "seriesId": "series-gibson-gibson-fsh4bf-series",
      "brandId": "brand-gibson",
      "modelNumber": "FSH4BF5M2SX24K",
      "normalizedModelNumber": "fsh4bf5m2sx24k",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-gibson-dxh24psk3ih",
      "modelNumber": "DXH24PSK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-dxh09psk3ih",
      "modelNumber": "DXH09PSK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-dxh18psk3ih",
      "modelNumber": "DXH18PSK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-dxh12psk3ih",
      "modelNumber": "DXH12PSK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-gxh1235lsk4dh2",
      "modelNumber": "GXH12(3.5)LSK4DH2",
      "brandId": "brand-gibson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gibson-gxh2470fmk4dh-1",
      "modelNumber": "GXH24(7.0)FMK4DH-1",
      "brandId": "brand-gibson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gibson-gxh36106fmk4dh-1",
      "modelNumber": "GXH36(10.6)FMK4DH-1",
      "brandId": "brand-gibson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gibson-gxh42123fmk4dh-1",
      "modelNumber": "GXH42(12.3)FMK4DH-1",
      "brandId": "brand-gibson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gibson-dxh18fmk3ih",
      "modelNumber": "DXH18FMK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-gxh3088fmk4dh-1",
      "modelNumber": "GXH30(8.8)FMK4DH-1",
      "brandId": "brand-gibson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gibson-dxh24fmk3ih",
      "modelNumber": "DXH24FMK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-dxh30fmk3ih",
      "modelNumber": "DXH30FMK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-dxh36fmk3ih",
      "modelNumber": "DXH36FMK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-dxh36esk3il",
      "modelNumber": "DXH36ESK3IL",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-gxh1853fmk4dh-1",
      "modelNumber": "GXH18(5.3)FMK4DH-1",
      "brandId": "brand-gibson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gibson-dxh42fmk3ih",
      "modelNumber": "DXH42FMK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-uxh48-60msk3ih",
      "modelNumber": "UXH48-60MSK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-uxh24-36msk3ih",
      "modelNumber": "UXH24-36MSK3IH",
      "brandId": "brand-gibson",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-gibson-gxh48-60msk4dh",
      "modelNumber": "GXH48-60MSK4DH",
      "brandId": "brand-gibson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gibson-gxh24-36msk4dh",
      "modelNumber": "GXH24-36MSK4DH",
      "brandId": "brand-gibson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gibson-fsh4bf5m2sx48k",
      "modelNumber": "FSH4BF5M2SX48K",
      "brandId": "brand-gibson",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gibson-fsh4bf5m2sx36k",
      "modelNumber": "FSH4BF5M2SX36K",
      "brandId": "brand-gibson",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gibson-fsh4bf5m2sx24k",
      "modelNumber": "FSH4BF5M2SX24K",
      "brandId": "brand-gibson",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dhh24puk3ih",
      "modelNumber": "DHH24PUK3IH",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh09puk3ih",
      "modelNumber": "DHH09PUK3IH",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh18puk3ih",
      "modelNumber": "DHH18PUK3IH",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh12puk3ih",
      "modelNumber": "DHH12PUK3IH",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-ghh1235luk4dh2",
      "modelNumber": "GHH12(3.5)LUK4DH2",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-dkh09fmk3ih",
      "modelNumber": "DKH09FMK3IH",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-dkh12fmk3ih",
      "modelNumber": "DKH12FMK3IH",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45372",
      "modelNumber": "IU-45372",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45374",
      "modelNumber": "IU-45374",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45375",
      "modelNumber": "IU-45375",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45362",
      "modelNumber": "IU-45362",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45373",
      "modelNumber": "IU-45373",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45364",
      "modelNumber": "IU-45364",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45366",
      "modelNumber": "IU-45366",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45368",
      "modelNumber": "IU-45368",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh36esk3il",
      "modelNumber": "DHH36ESK3IL",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45371",
      "modelNumber": "IU-45371",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45369",
      "modelNumber": "IU-45369",
      "brandId": "brand-gibson",
      "type": "wall-single"
    },
    {
      "id": "iu-umd48msk3ih",
      "modelNumber": "UMD48MSK3IH",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd36msk3ih",
      "modelNumber": "UMD36MSK3IH",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd60msk3ih",
      "modelNumber": "UMD60MSK3IH",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd24msk3ih",
      "modelNumber": "UMD24MSK3IH",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh48-msk4dh1",
      "modelNumber": "GMH48-**MSK4DH1",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh24-msk4dh1",
      "modelNumber": "GMH24-**MSK4DH1",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-b65vmmx3648kc",
      "modelNumber": "B65VMMX3648K*C",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx36cb",
      "modelNumber": "C75B(A,H)MX36C*B",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-b65vmmx24kb",
      "modelNumber": "B65VMMX24K*B",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue48x5ad",
      "modelNumber": "UE48X5AD",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue60x5ad",
      "modelNumber": "UE60X5AD",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860cd",
      "modelNumber": "C75B(A,H)MX4860C*D",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860cc",
      "modelNumber": "C75B(A,H)MX4860C*C",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-36msk4dh1",
      "modelNumber": "GMH**-36MSK4DH1",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-60msk4dh1",
      "modelNumber": "GMH**-60MSK4DH1",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue24x5ab",
      "modelNumber": "UE24X5AB",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue36x5ab",
      "modelNumber": "UE36X5AB",
      "brandId": "brand-gibson",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-gibson-dxh24psk3ih-dhh24puk3ih",
      "slug": "gibson-dxh24psk3ih-dhh24puk3ih",
      "modelId": "model-gibson-dxh24psk3ih",
      "outdoorUnitId": "ou-gibson-dxh24psk3ih",
      "indoorUnitId": "iu-dhh24puk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh09psk3ih-dhh09puk3ih",
      "slug": "gibson-dxh09psk3ih-dhh09puk3ih",
      "modelId": "model-gibson-dxh09psk3ih",
      "outdoorUnitId": "ou-gibson-dxh09psk3ih",
      "indoorUnitId": "iu-dhh09puk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh18psk3ih-dhh18puk3ih",
      "slug": "gibson-dxh18psk3ih-dhh18puk3ih",
      "modelId": "model-gibson-dxh18psk3ih",
      "outdoorUnitId": "ou-gibson-dxh18psk3ih",
      "indoorUnitId": "iu-dhh18puk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh12psk3ih-dhh12puk3ih",
      "slug": "gibson-dxh12psk3ih-dhh12puk3ih",
      "modelId": "model-gibson-dxh12psk3ih",
      "outdoorUnitId": "ou-gibson-dxh12psk3ih",
      "indoorUnitId": "iu-dhh12puk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh1235lsk4dh2-ghh1235luk4dh2",
      "slug": "gibson-gxh1235lsk4dh2-ghh1235luk4dh2",
      "modelId": "model-gibson-gxh1235lsk4dh2",
      "outdoorUnitId": "ou-gibson-gxh1235lsk4dh2",
      "indoorUnitId": "iu-ghh1235luk4dh2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh09psk3ih-dkh09fmk3ih",
      "slug": "gibson-dxh09psk3ih-dkh09fmk3ih",
      "modelId": "model-gibson-dxh09psk3ih",
      "outdoorUnitId": "ou-gibson-dxh09psk3ih",
      "indoorUnitId": "iu-dkh09fmk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh12psk3ih-dkh12fmk3ih",
      "slug": "gibson-dxh12psk3ih-dkh12fmk3ih",
      "modelId": "model-gibson-dxh12psk3ih",
      "outdoorUnitId": "ou-gibson-dxh12psk3ih",
      "indoorUnitId": "iu-dkh12fmk3ih",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh2470fmk4dh-1-iu-45372",
      "slug": "gibson-gxh2470fmk4dh-1-iu-45372",
      "modelId": "model-gibson-gxh2470fmk4dh-1",
      "outdoorUnitId": "ou-gibson-gxh2470fmk4dh-1",
      "indoorUnitId": "iu-iu-45372",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh36106fmk4dh-1-iu-45374",
      "slug": "gibson-gxh36106fmk4dh-1-iu-45374",
      "modelId": "model-gibson-gxh36106fmk4dh-1",
      "outdoorUnitId": "ou-gibson-gxh36106fmk4dh-1",
      "indoorUnitId": "iu-iu-45374",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh42123fmk4dh-1-iu-45375",
      "slug": "gibson-gxh42123fmk4dh-1-iu-45375",
      "modelId": "model-gibson-gxh42123fmk4dh-1",
      "outdoorUnitId": "ou-gibson-gxh42123fmk4dh-1",
      "indoorUnitId": "iu-iu-45375",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh18fmk3ih-iu-45362",
      "slug": "gibson-dxh18fmk3ih-iu-45362",
      "modelId": "model-gibson-dxh18fmk3ih",
      "outdoorUnitId": "ou-gibson-dxh18fmk3ih",
      "indoorUnitId": "iu-iu-45362",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh3088fmk4dh-1-iu-45373",
      "slug": "gibson-gxh3088fmk4dh-1-iu-45373",
      "modelId": "model-gibson-gxh3088fmk4dh-1",
      "outdoorUnitId": "ou-gibson-gxh3088fmk4dh-1",
      "indoorUnitId": "iu-iu-45373",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh24fmk3ih-iu-45364",
      "slug": "gibson-dxh24fmk3ih-iu-45364",
      "modelId": "model-gibson-dxh24fmk3ih",
      "outdoorUnitId": "ou-gibson-dxh24fmk3ih",
      "indoorUnitId": "iu-iu-45364",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh30fmk3ih-iu-45366",
      "slug": "gibson-dxh30fmk3ih-iu-45366",
      "modelId": "model-gibson-dxh30fmk3ih",
      "outdoorUnitId": "ou-gibson-dxh30fmk3ih",
      "indoorUnitId": "iu-iu-45366",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh36fmk3ih-iu-45368",
      "slug": "gibson-dxh36fmk3ih-iu-45368",
      "modelId": "model-gibson-dxh36fmk3ih",
      "outdoorUnitId": "ou-gibson-dxh36fmk3ih",
      "indoorUnitId": "iu-iu-45368",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh36esk3il-dhh36esk3il",
      "slug": "gibson-dxh36esk3il-dhh36esk3il",
      "modelId": "model-gibson-dxh36esk3il",
      "outdoorUnitId": "ou-gibson-dxh36esk3il",
      "indoorUnitId": "iu-dhh36esk3il",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh1853fmk4dh-1-iu-45371",
      "slug": "gibson-gxh1853fmk4dh-1-iu-45371",
      "modelId": "model-gibson-gxh1853fmk4dh-1",
      "outdoorUnitId": "ou-gibson-gxh1853fmk4dh-1",
      "indoorUnitId": "iu-iu-45371",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-dxh42fmk3ih-iu-45369",
      "slug": "gibson-dxh42fmk3ih-iu-45369",
      "modelId": "model-gibson-dxh42fmk3ih",
      "outdoorUnitId": "ou-gibson-dxh42fmk3ih",
      "indoorUnitId": "iu-iu-45369",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-uxh48-60msk3ih-umd48msk3ih",
      "slug": "gibson-uxh48-60msk3ih-umd48msk3ih",
      "modelId": "model-gibson-uxh48-60msk3ih",
      "outdoorUnitId": "ou-gibson-uxh48-60msk3ih",
      "indoorUnitId": "iu-umd48msk3ih",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-uxh24-36msk3ih-umd36msk3ih",
      "slug": "gibson-uxh24-36msk3ih-umd36msk3ih",
      "modelId": "model-gibson-uxh24-36msk3ih",
      "outdoorUnitId": "ou-gibson-uxh24-36msk3ih",
      "indoorUnitId": "iu-umd36msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-uxh48-60msk3ih-umd60msk3ih",
      "slug": "gibson-uxh48-60msk3ih-umd60msk3ih",
      "modelId": "model-gibson-uxh48-60msk3ih",
      "outdoorUnitId": "ou-gibson-uxh48-60msk3ih",
      "indoorUnitId": "iu-umd60msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-uxh24-36msk3ih-umd24msk3ih",
      "slug": "gibson-uxh24-36msk3ih-umd24msk3ih",
      "modelId": "model-gibson-uxh24-36msk3ih",
      "outdoorUnitId": "ou-gibson-uxh24-36msk3ih",
      "indoorUnitId": "iu-umd24msk3ih",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh48-60msk4dh-gmh48-msk4dh1",
      "slug": "gibson-gxh48-60msk4dh-gmh48-msk4dh1",
      "modelId": "model-gibson-gxh48-60msk4dh",
      "outdoorUnitId": "ou-gibson-gxh48-60msk4dh",
      "indoorUnitId": "iu-gmh48-msk4dh1",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh24-36msk4dh-gmh24-msk4dh1",
      "slug": "gibson-gxh24-36msk4dh-gmh24-msk4dh1",
      "modelId": "model-gibson-gxh24-36msk4dh",
      "outdoorUnitId": "ou-gibson-gxh24-36msk4dh",
      "indoorUnitId": "iu-gmh24-msk4dh1",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-fsh4bf5m2sx48k-b65vmmx3648kc",
      "slug": "gibson-fsh4bf5m2sx48k-b65vmmx3648kc",
      "modelId": "model-gibson-fsh4bf5m2sx48k",
      "outdoorUnitId": "ou-gibson-fsh4bf5m2sx48k",
      "indoorUnitId": "iu-b65vmmx3648kc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-fsh4bf5m2sx36k-b65vmmx3648kc",
      "slug": "gibson-fsh4bf5m2sx36k-b65vmmx3648kc",
      "modelId": "model-gibson-fsh4bf5m2sx36k",
      "outdoorUnitId": "ou-gibson-fsh4bf5m2sx36k",
      "indoorUnitId": "iu-b65vmmx3648kc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-fsh4bf5m2sx24k-c75bahmx36cb",
      "slug": "gibson-fsh4bf5m2sx24k-c75bahmx36cb",
      "modelId": "model-gibson-fsh4bf5m2sx24k",
      "outdoorUnitId": "ou-gibson-fsh4bf5m2sx24k",
      "indoorUnitId": "iu-c75bahmx36cb",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-fsh4bf5m2sx24k-b65vmmx24kb",
      "slug": "gibson-fsh4bf5m2sx24k-b65vmmx24kb",
      "modelId": "model-gibson-fsh4bf5m2sx24k",
      "outdoorUnitId": "ou-gibson-fsh4bf5m2sx24k",
      "indoorUnitId": "iu-b65vmmx24kb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-uxh48-60msk3ih-ue48x5ad",
      "slug": "gibson-uxh48-60msk3ih-ue48x5ad",
      "modelId": "model-gibson-uxh48-60msk3ih",
      "outdoorUnitId": "ou-gibson-uxh48-60msk3ih",
      "indoorUnitId": "iu-ue48x5ad",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-uxh48-60msk3ih-ue60x5ad",
      "slug": "gibson-uxh48-60msk3ih-ue60x5ad",
      "modelId": "model-gibson-uxh48-60msk3ih",
      "outdoorUnitId": "ou-gibson-uxh48-60msk3ih",
      "indoorUnitId": "iu-ue60x5ad",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-fsh4bf5m2sx48k-c75bahmx4860cd",
      "slug": "gibson-fsh4bf5m2sx48k-c75bahmx4860cd",
      "modelId": "model-gibson-fsh4bf5m2sx48k",
      "outdoorUnitId": "ou-gibson-fsh4bf5m2sx48k",
      "indoorUnitId": "iu-c75bahmx4860cd",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-fsh4bf5m2sx48k-c75bahmx4860cc",
      "slug": "gibson-fsh4bf5m2sx48k-c75bahmx4860cc",
      "modelId": "model-gibson-fsh4bf5m2sx48k",
      "outdoorUnitId": "ou-gibson-fsh4bf5m2sx48k",
      "indoorUnitId": "iu-c75bahmx4860cc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh24-36msk4dh-gmh-36msk4dh1",
      "slug": "gibson-gxh24-36msk4dh-gmh-36msk4dh1",
      "modelId": "model-gibson-gxh24-36msk4dh",
      "outdoorUnitId": "ou-gibson-gxh24-36msk4dh",
      "indoorUnitId": "iu-gmh-36msk4dh1",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-gxh48-60msk4dh-gmh-60msk4dh1",
      "slug": "gibson-gxh48-60msk4dh-gmh-60msk4dh1",
      "modelId": "model-gibson-gxh48-60msk4dh",
      "outdoorUnitId": "ou-gibson-gxh48-60msk4dh",
      "indoorUnitId": "iu-gmh-60msk4dh1",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-uxh24-36msk3ih-ue24x5ab",
      "slug": "gibson-uxh24-36msk3ih-ue24x5ab",
      "modelId": "model-gibson-uxh24-36msk3ih",
      "outdoorUnitId": "ou-gibson-uxh24-36msk3ih",
      "indoorUnitId": "iu-ue24x5ab",
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
          "sourceId": "src-gibson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gibson-uxh24-36msk3ih-ue36x5ab",
      "slug": "gibson-uxh24-36msk3ih-ue36x5ab",
      "modelId": "model-gibson-uxh24-36msk3ih",
      "outdoorUnitId": "ou-gibson-uxh24-36msk3ih",
      "indoorUnitId": "iu-ue36x5ab",
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
          "sourceId": "src-gibson-epa",
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
