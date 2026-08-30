import type { BrandDataset } from "../../types";

export const brand_airtempDataset: BrandDataset = {
  "brand": {
    "id": "brand-airtemp",
    "slug": "airtemp",
    "name": "Airtemp",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Airtemp",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-airtemp-epa",
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
      "id": "series-airtemp-24-26-seer2-minisplits",
      "slug": "airtemp-24-26-seer2-minisplits",
      "name": "(24-26 SEER2) Minisplits",
      "brandId": "brand-airtemp",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série (24-26 SEER2) Minisplits de Airtemp",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-airtemp-lomo",
      "slug": "airtemp-lomo",
      "name": "Lomo",
      "brandId": "brand-airtemp",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Lomo de Airtemp",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-airtemp-multizone-indoors-eight-way-compact-cassettes",
      "slug": "airtemp-multizone-indoors-eight-way-compact-cassettes",
      "name": "Multizone Indoors Eight-way Compact Cassettes",
      "brandId": "brand-airtemp",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multizone Indoors Eight-way Compact Cassettes de Airtemp",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-airtemp-multizone-outdoors",
      "slug": "airtemp-multizone-outdoors",
      "name": "Multizone Outdoors",
      "brandId": "brand-airtemp",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multizone Outdoors de Airtemp",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-airtemp-flex-match",
      "slug": "airtemp-flex-match",
      "name": "Flex Match",
      "brandId": "brand-airtemp",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Flex Match de Airtemp",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-airtemp-19-205-seer2-minisplits",
      "slug": "airtemp-19-205-seer2-minisplits",
      "name": "(19-20.5 SEER2) Minisplits",
      "brandId": "brand-airtemp",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série (19-20.5 SEER2) Minisplits de Airtemp",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-airtemp-e-series",
      "slug": "airtemp-e-series",
      "name": "E Series",
      "brandId": "brand-airtemp",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E Series de Airtemp",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-airtemp-ultra-side-discharge",
      "slug": "airtemp-ultra-side-discharge",
      "name": "Ultra Side Discharge",
      "brandId": "brand-airtemp",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra Side Discharge de Airtemp",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-airtemp-dxh09psk3ih",
      "slug": "airtemp-dxh09psk3ih",
      "name": "Airtemp DXH09PSK3IH",
      "seriesId": "series-airtemp-24-26-seer2-minisplits",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh24psk3ih",
      "slug": "airtemp-dxh24psk3ih",
      "name": "Airtemp DXH24PSK3IH",
      "seriesId": "series-airtemp-24-26-seer2-minisplits",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh12psk3ih",
      "slug": "airtemp-dxh12psk3ih",
      "name": "Airtemp DXH12PSK3IH",
      "seriesId": "series-airtemp-24-26-seer2-minisplits",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh18psk3ih",
      "slug": "airtemp-dxh18psk3ih",
      "name": "Airtemp DXH18PSK3IH",
      "seriesId": "series-airtemp-24-26-seer2-minisplits",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-gxh1235lsk4dh2",
      "slug": "airtemp-gxh1235lsk4dh2",
      "name": "Airtemp GXH12(3.5)LSK4DH2",
      "seriesId": "series-airtemp-lomo",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh24fmk3ih",
      "slug": "airtemp-dxh24fmk3ih",
      "name": "Airtemp DXH24FMK3IH",
      "seriesId": "series-airtemp-multizone-outdoors",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh18fmk3ih",
      "slug": "airtemp-dxh18fmk3ih",
      "name": "Airtemp DXH18FMK3IH",
      "seriesId": "series-airtemp-multizone-outdoors",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh30fmk3ih",
      "slug": "airtemp-dxh30fmk3ih",
      "name": "Airtemp DXH30FMK3IH",
      "seriesId": "series-airtemp-multizone-outdoors",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-gxh1853fmk4dh-1",
      "slug": "airtemp-gxh1853fmk4dh-1",
      "name": "Airtemp GXH18(5.3)FMK4DH-1",
      "seriesId": "series-airtemp-flex-match",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh42fmk3ih",
      "slug": "airtemp-dxh42fmk3ih",
      "name": "Airtemp DXH42FMK3IH",
      "seriesId": "series-airtemp-multizone-outdoors",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh36fmk3ih",
      "slug": "airtemp-dxh36fmk3ih",
      "name": "Airtemp DXH36FMK3IH",
      "seriesId": "series-airtemp-multizone-outdoors",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-dxh36esk3il",
      "slug": "airtemp-dxh36esk3il",
      "name": "Airtemp DXH36ESK3IL",
      "seriesId": "series-airtemp-19-205-seer2-minisplits",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-gxh2470fmk4dh-1",
      "slug": "airtemp-gxh2470fmk4dh-1",
      "name": "Airtemp GXH24(7.0)FMK4DH-1",
      "seriesId": "series-airtemp-flex-match",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-gxh3088fmk4dh-1",
      "slug": "airtemp-gxh3088fmk4dh-1",
      "name": "Airtemp GXH30(8.8)FMK4DH-1",
      "seriesId": "series-airtemp-flex-match",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-gxh36106fmk4dh-1",
      "slug": "airtemp-gxh36106fmk4dh-1",
      "name": "Airtemp GXH36(10.6)FMK4DH-1",
      "seriesId": "series-airtemp-flex-match",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-gxh42123fmk4dh-1",
      "slug": "airtemp-gxh42123fmk4dh-1",
      "name": "Airtemp GXH42(12.3)FMK4DH-1",
      "seriesId": "series-airtemp-flex-match",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-uxh48-60msk3ih",
      "slug": "airtemp-uxh48-60msk3ih",
      "name": "Airtemp UXH48-60MSK3IH",
      "seriesId": "series-airtemp-e-series",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-uxh24-36msk3ih",
      "slug": "airtemp-uxh24-36msk3ih",
      "name": "Airtemp UXH24-36MSK3IH",
      "seriesId": "series-airtemp-e-series",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-gxh24-36msk4dh",
      "slug": "airtemp-gxh24-36msk4dh",
      "name": "Airtemp GXH24-36MSK4DH",
      "seriesId": "series-airtemp-ultra-side-discharge",
      "brandId": "brand-airtemp",
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
      "id": "model-airtemp-gxh48-60msk4dh",
      "slug": "airtemp-gxh48-60msk4dh",
      "name": "Airtemp GXH48-60MSK4DH",
      "seriesId": "series-airtemp-ultra-side-discharge",
      "brandId": "brand-airtemp",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-airtemp-dxh09psk3ih",
      "modelNumber": "DXH09PSK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-dxh24psk3ih",
      "modelNumber": "DXH24PSK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-dxh12psk3ih",
      "modelNumber": "DXH12PSK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-dxh18psk3ih",
      "modelNumber": "DXH18PSK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-gxh1235lsk4dh2",
      "modelNumber": "GXH12(3.5)LSK4DH2",
      "brandId": "brand-airtemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-airtemp-dxh24fmk3ih",
      "modelNumber": "DXH24FMK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-dxh18fmk3ih",
      "modelNumber": "DXH18FMK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-dxh30fmk3ih",
      "modelNumber": "DXH30FMK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-gxh1853fmk4dh-1",
      "modelNumber": "GXH18(5.3)FMK4DH-1",
      "brandId": "brand-airtemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-airtemp-dxh42fmk3ih",
      "modelNumber": "DXH42FMK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-dxh36fmk3ih",
      "modelNumber": "DXH36FMK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-dxh36esk3il",
      "modelNumber": "DXH36ESK3IL",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-gxh2470fmk4dh-1",
      "modelNumber": "GXH24(7.0)FMK4DH-1",
      "brandId": "brand-airtemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-airtemp-gxh3088fmk4dh-1",
      "modelNumber": "GXH30(8.8)FMK4DH-1",
      "brandId": "brand-airtemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-airtemp-gxh36106fmk4dh-1",
      "modelNumber": "GXH36(10.6)FMK4DH-1",
      "brandId": "brand-airtemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-airtemp-gxh42123fmk4dh-1",
      "modelNumber": "GXH42(12.3)FMK4DH-1",
      "brandId": "brand-airtemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-airtemp-uxh48-60msk3ih",
      "modelNumber": "UXH48-60MSK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-uxh24-36msk3ih",
      "modelNumber": "UXH24-36MSK3IH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-airtemp-gxh24-36msk4dh",
      "modelNumber": "GXH24-36MSK4DH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-airtemp-gxh48-60msk4dh",
      "modelNumber": "GXH48-60MSK4DH",
      "brandId": "brand-airtemp",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dhh09puk3ih",
      "modelNumber": "DHH09PUK3IH",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh24puk3ih",
      "modelNumber": "DHH24PUK3IH",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh12puk3ih",
      "modelNumber": "DHH12PUK3IH",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh18puk3ih",
      "modelNumber": "DHH18PUK3IH",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-ghh1235luk4dh2",
      "modelNumber": "GHH12(3.5)LUK4DH2",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-dkh09fmk3ih",
      "modelNumber": "DKH09FMK3IH",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-dkh12fmk3ih",
      "modelNumber": "DKH12FMK3IH",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40925",
      "modelNumber": "IU-40925",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40923",
      "modelNumber": "IU-40923",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40927",
      "modelNumber": "IU-40927",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40932",
      "modelNumber": "IU-40932",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40930",
      "modelNumber": "IU-40930",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40929",
      "modelNumber": "IU-40929",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh36esk3il",
      "modelNumber": "DHH36ESK3IL",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40933",
      "modelNumber": "IU-40933",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40934",
      "modelNumber": "IU-40934",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40935",
      "modelNumber": "IU-40935",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40936",
      "modelNumber": "IU-40936",
      "brandId": "brand-airtemp",
      "type": "wall-single"
    },
    {
      "id": "iu-umd48msk3ih",
      "modelNumber": "UMD48MSK3IH",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd36msk3ih",
      "modelNumber": "UMD36MSK3IH",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd60msk3ih",
      "modelNumber": "UMD60MSK3IH",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd24msk3ih",
      "modelNumber": "UMD24MSK3IH",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh24-msk4dh1",
      "modelNumber": "GMH24-**MSK4DH1",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh48-msk4dh1",
      "modelNumber": "GMH48-**MSK4DH1",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue48x5ad",
      "modelNumber": "UE48X5AD",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue60x5ad",
      "modelNumber": "UE60X5AD",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-36msk4dh1",
      "modelNumber": "GMH**-36MSK4DH1",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-60msk4dh1",
      "modelNumber": "GMH**-60MSK4DH1",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue24x5ab",
      "modelNumber": "UE24X5AB",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue36x5ab",
      "modelNumber": "UE36X5AB",
      "brandId": "brand-airtemp",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-airtemp-dxh09psk3ih-dhh09puk3ih",
      "slug": "airtemp-dxh09psk3ih-dhh09puk3ih",
      "modelId": "model-airtemp-dxh09psk3ih",
      "outdoorUnitId": "ou-airtemp-dxh09psk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh24psk3ih-dhh24puk3ih",
      "slug": "airtemp-dxh24psk3ih-dhh24puk3ih",
      "modelId": "model-airtemp-dxh24psk3ih",
      "outdoorUnitId": "ou-airtemp-dxh24psk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh12psk3ih-dhh12puk3ih",
      "slug": "airtemp-dxh12psk3ih-dhh12puk3ih",
      "modelId": "model-airtemp-dxh12psk3ih",
      "outdoorUnitId": "ou-airtemp-dxh12psk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh18psk3ih-dhh18puk3ih",
      "slug": "airtemp-dxh18psk3ih-dhh18puk3ih",
      "modelId": "model-airtemp-dxh18psk3ih",
      "outdoorUnitId": "ou-airtemp-dxh18psk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh1235lsk4dh2-ghh1235luk4dh2",
      "slug": "airtemp-gxh1235lsk4dh2-ghh1235luk4dh2",
      "modelId": "model-airtemp-gxh1235lsk4dh2",
      "outdoorUnitId": "ou-airtemp-gxh1235lsk4dh2",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh09psk3ih-dkh09fmk3ih",
      "slug": "airtemp-dxh09psk3ih-dkh09fmk3ih",
      "modelId": "model-airtemp-dxh09psk3ih",
      "outdoorUnitId": "ou-airtemp-dxh09psk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh12psk3ih-dkh12fmk3ih",
      "slug": "airtemp-dxh12psk3ih-dkh12fmk3ih",
      "modelId": "model-airtemp-dxh12psk3ih",
      "outdoorUnitId": "ou-airtemp-dxh12psk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh24fmk3ih-iu-40925",
      "slug": "airtemp-dxh24fmk3ih-iu-40925",
      "modelId": "model-airtemp-dxh24fmk3ih",
      "outdoorUnitId": "ou-airtemp-dxh24fmk3ih",
      "indoorUnitId": "iu-iu-40925",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh18fmk3ih-iu-40923",
      "slug": "airtemp-dxh18fmk3ih-iu-40923",
      "modelId": "model-airtemp-dxh18fmk3ih",
      "outdoorUnitId": "ou-airtemp-dxh18fmk3ih",
      "indoorUnitId": "iu-iu-40923",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh30fmk3ih-iu-40927",
      "slug": "airtemp-dxh30fmk3ih-iu-40927",
      "modelId": "model-airtemp-dxh30fmk3ih",
      "outdoorUnitId": "ou-airtemp-dxh30fmk3ih",
      "indoorUnitId": "iu-iu-40927",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh1853fmk4dh-1-iu-40932",
      "slug": "airtemp-gxh1853fmk4dh-1-iu-40932",
      "modelId": "model-airtemp-gxh1853fmk4dh-1",
      "outdoorUnitId": "ou-airtemp-gxh1853fmk4dh-1",
      "indoorUnitId": "iu-iu-40932",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh42fmk3ih-iu-40930",
      "slug": "airtemp-dxh42fmk3ih-iu-40930",
      "modelId": "model-airtemp-dxh42fmk3ih",
      "outdoorUnitId": "ou-airtemp-dxh42fmk3ih",
      "indoorUnitId": "iu-iu-40930",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh36fmk3ih-iu-40929",
      "slug": "airtemp-dxh36fmk3ih-iu-40929",
      "modelId": "model-airtemp-dxh36fmk3ih",
      "outdoorUnitId": "ou-airtemp-dxh36fmk3ih",
      "indoorUnitId": "iu-iu-40929",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-dxh36esk3il-dhh36esk3il",
      "slug": "airtemp-dxh36esk3il-dhh36esk3il",
      "modelId": "model-airtemp-dxh36esk3il",
      "outdoorUnitId": "ou-airtemp-dxh36esk3il",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh2470fmk4dh-1-iu-40933",
      "slug": "airtemp-gxh2470fmk4dh-1-iu-40933",
      "modelId": "model-airtemp-gxh2470fmk4dh-1",
      "outdoorUnitId": "ou-airtemp-gxh2470fmk4dh-1",
      "indoorUnitId": "iu-iu-40933",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh3088fmk4dh-1-iu-40934",
      "slug": "airtemp-gxh3088fmk4dh-1-iu-40934",
      "modelId": "model-airtemp-gxh3088fmk4dh-1",
      "outdoorUnitId": "ou-airtemp-gxh3088fmk4dh-1",
      "indoorUnitId": "iu-iu-40934",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh36106fmk4dh-1-iu-40935",
      "slug": "airtemp-gxh36106fmk4dh-1-iu-40935",
      "modelId": "model-airtemp-gxh36106fmk4dh-1",
      "outdoorUnitId": "ou-airtemp-gxh36106fmk4dh-1",
      "indoorUnitId": "iu-iu-40935",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh42123fmk4dh-1-iu-40936",
      "slug": "airtemp-gxh42123fmk4dh-1-iu-40936",
      "modelId": "model-airtemp-gxh42123fmk4dh-1",
      "outdoorUnitId": "ou-airtemp-gxh42123fmk4dh-1",
      "indoorUnitId": "iu-iu-40936",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-uxh48-60msk3ih-umd48msk3ih",
      "slug": "airtemp-uxh48-60msk3ih-umd48msk3ih",
      "modelId": "model-airtemp-uxh48-60msk3ih",
      "outdoorUnitId": "ou-airtemp-uxh48-60msk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-uxh24-36msk3ih-umd36msk3ih",
      "slug": "airtemp-uxh24-36msk3ih-umd36msk3ih",
      "modelId": "model-airtemp-uxh24-36msk3ih",
      "outdoorUnitId": "ou-airtemp-uxh24-36msk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-uxh48-60msk3ih-umd60msk3ih",
      "slug": "airtemp-uxh48-60msk3ih-umd60msk3ih",
      "modelId": "model-airtemp-uxh48-60msk3ih",
      "outdoorUnitId": "ou-airtemp-uxh48-60msk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-uxh24-36msk3ih-umd24msk3ih",
      "slug": "airtemp-uxh24-36msk3ih-umd24msk3ih",
      "modelId": "model-airtemp-uxh24-36msk3ih",
      "outdoorUnitId": "ou-airtemp-uxh24-36msk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh24-36msk4dh-gmh24-msk4dh1",
      "slug": "airtemp-gxh24-36msk4dh-gmh24-msk4dh1",
      "modelId": "model-airtemp-gxh24-36msk4dh",
      "outdoorUnitId": "ou-airtemp-gxh24-36msk4dh",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh48-60msk4dh-gmh48-msk4dh1",
      "slug": "airtemp-gxh48-60msk4dh-gmh48-msk4dh1",
      "modelId": "model-airtemp-gxh48-60msk4dh",
      "outdoorUnitId": "ou-airtemp-gxh48-60msk4dh",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-uxh48-60msk3ih-ue48x5ad",
      "slug": "airtemp-uxh48-60msk3ih-ue48x5ad",
      "modelId": "model-airtemp-uxh48-60msk3ih",
      "outdoorUnitId": "ou-airtemp-uxh48-60msk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-uxh48-60msk3ih-ue60x5ad",
      "slug": "airtemp-uxh48-60msk3ih-ue60x5ad",
      "modelId": "model-airtemp-uxh48-60msk3ih",
      "outdoorUnitId": "ou-airtemp-uxh48-60msk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh24-36msk4dh-gmh-36msk4dh1",
      "slug": "airtemp-gxh24-36msk4dh-gmh-36msk4dh1",
      "modelId": "model-airtemp-gxh24-36msk4dh",
      "outdoorUnitId": "ou-airtemp-gxh24-36msk4dh",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-gxh48-60msk4dh-gmh-60msk4dh1",
      "slug": "airtemp-gxh48-60msk4dh-gmh-60msk4dh1",
      "modelId": "model-airtemp-gxh48-60msk4dh",
      "outdoorUnitId": "ou-airtemp-gxh48-60msk4dh",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-uxh24-36msk3ih-ue24x5ab",
      "slug": "airtemp-uxh24-36msk3ih-ue24x5ab",
      "modelId": "model-airtemp-uxh24-36msk3ih",
      "outdoorUnitId": "ou-airtemp-uxh24-36msk3ih",
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
          "sourceId": "src-airtemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-airtemp-uxh24-36msk3ih-ue36x5ab",
      "slug": "airtemp-uxh24-36msk3ih-ue36x5ab",
      "modelId": "model-airtemp-uxh24-36msk3ih",
      "outdoorUnitId": "ou-airtemp-uxh24-36msk3ih",
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
          "sourceId": "src-airtemp-epa",
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
