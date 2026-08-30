import type { BrandDataset } from "../../types";

export const brand_aireforceDataset: BrandDataset = {
  "brand": {
    "id": "brand-aireforce",
    "slug": "aireforce",
    "name": "AireForce",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AireForce",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-aireforce-epa",
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
      "id": "series-aireforce-24-26-seer2-minisplits",
      "slug": "aireforce-24-26-seer2-minisplits",
      "name": "(24-26 SEER2) Minisplits",
      "brandId": "brand-aireforce",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série (24-26 SEER2) Minisplits de AireForce",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aireforce-lomo",
      "slug": "aireforce-lomo",
      "name": "Lomo",
      "brandId": "brand-aireforce",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Lomo de AireForce",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aireforce-multizone-indoors-eight-way-compact-cassettes",
      "slug": "aireforce-multizone-indoors-eight-way-compact-cassettes",
      "name": "Multizone Indoors Eight-way Compact Cassettes",
      "brandId": "brand-aireforce",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multizone Indoors Eight-way Compact Cassettes de AireForce",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aireforce-multizone-outdoors",
      "slug": "aireforce-multizone-outdoors",
      "name": "Multizone Outdoors",
      "brandId": "brand-aireforce",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multizone Outdoors de AireForce",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aireforce-flex-match",
      "slug": "aireforce-flex-match",
      "name": "Flex Match",
      "brandId": "brand-aireforce",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Flex Match de AireForce",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aireforce-19-205-seer2-minisplits",
      "slug": "aireforce-19-205-seer2-minisplits",
      "name": "(19-20.5 SEER2) Minisplits",
      "brandId": "brand-aireforce",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série (19-20.5 SEER2) Minisplits de AireForce",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aireforce-e-series",
      "slug": "aireforce-e-series",
      "name": "E Series",
      "brandId": "brand-aireforce",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E Series de AireForce",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aireforce-ultra-side-discharge",
      "slug": "aireforce-ultra-side-discharge",
      "name": "Ultra Side Discharge",
      "brandId": "brand-aireforce",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra Side Discharge de AireForce",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-aireforce-dxh09psk3ih",
      "slug": "aireforce-dxh09psk3ih",
      "name": "AireForce DXH09PSK3IH",
      "seriesId": "series-aireforce-24-26-seer2-minisplits",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh24psk3ih",
      "slug": "aireforce-dxh24psk3ih",
      "name": "AireForce DXH24PSK3IH",
      "seriesId": "series-aireforce-24-26-seer2-minisplits",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh12psk3ih",
      "slug": "aireforce-dxh12psk3ih",
      "name": "AireForce DXH12PSK3IH",
      "seriesId": "series-aireforce-24-26-seer2-minisplits",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh18psk3ih",
      "slug": "aireforce-dxh18psk3ih",
      "name": "AireForce DXH18PSK3IH",
      "seriesId": "series-aireforce-24-26-seer2-minisplits",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-gxh1235lsk4dh2",
      "slug": "aireforce-gxh1235lsk4dh2",
      "name": "AireForce GXH12(3.5)LSK4DH2",
      "seriesId": "series-aireforce-lomo",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh24fmk3ih",
      "slug": "aireforce-dxh24fmk3ih",
      "name": "AireForce DXH24FMK3IH",
      "seriesId": "series-aireforce-multizone-outdoors",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh18fmk3ih",
      "slug": "aireforce-dxh18fmk3ih",
      "name": "AireForce DXH18FMK3IH",
      "seriesId": "series-aireforce-multizone-outdoors",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh30fmk3ih",
      "slug": "aireforce-dxh30fmk3ih",
      "name": "AireForce DXH30FMK3IH",
      "seriesId": "series-aireforce-multizone-outdoors",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-gxh1853fmk4dh-1",
      "slug": "aireforce-gxh1853fmk4dh-1",
      "name": "AireForce GXH18(5.3)FMK4DH-1",
      "seriesId": "series-aireforce-flex-match",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh42fmk3ih",
      "slug": "aireforce-dxh42fmk3ih",
      "name": "AireForce DXH42FMK3IH",
      "seriesId": "series-aireforce-multizone-outdoors",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh36fmk3ih",
      "slug": "aireforce-dxh36fmk3ih",
      "name": "AireForce DXH36FMK3IH",
      "seriesId": "series-aireforce-multizone-outdoors",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-dxh36esk3il",
      "slug": "aireforce-dxh36esk3il",
      "name": "AireForce DXH36ESK3IL",
      "seriesId": "series-aireforce-19-205-seer2-minisplits",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-gxh2470fmk4dh-1",
      "slug": "aireforce-gxh2470fmk4dh-1",
      "name": "AireForce GXH24(7.0)FMK4DH-1",
      "seriesId": "series-aireforce-flex-match",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-gxh3088fmk4dh-1",
      "slug": "aireforce-gxh3088fmk4dh-1",
      "name": "AireForce GXH30(8.8)FMK4DH-1",
      "seriesId": "series-aireforce-flex-match",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-gxh36106fmk4dh-1",
      "slug": "aireforce-gxh36106fmk4dh-1",
      "name": "AireForce GXH36(10.6)FMK4DH-1",
      "seriesId": "series-aireforce-flex-match",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-gxh42123fmk4dh-1",
      "slug": "aireforce-gxh42123fmk4dh-1",
      "name": "AireForce GXH42(12.3)FMK4DH-1",
      "seriesId": "series-aireforce-flex-match",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-uxh48-60msk3ih",
      "slug": "aireforce-uxh48-60msk3ih",
      "name": "AireForce UXH48-60MSK3IH",
      "seriesId": "series-aireforce-e-series",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-uxh24-36msk3ih",
      "slug": "aireforce-uxh24-36msk3ih",
      "name": "AireForce UXH24-36MSK3IH",
      "seriesId": "series-aireforce-e-series",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-gxh24-36msk4dh",
      "slug": "aireforce-gxh24-36msk4dh",
      "name": "AireForce GXH24-36MSK4DH",
      "seriesId": "series-aireforce-ultra-side-discharge",
      "brandId": "brand-aireforce",
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
      "id": "model-aireforce-gxh48-60msk4dh",
      "slug": "aireforce-gxh48-60msk4dh",
      "name": "AireForce GXH48-60MSK4DH",
      "seriesId": "series-aireforce-ultra-side-discharge",
      "brandId": "brand-aireforce",
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
      "id": "ou-aireforce-dxh09psk3ih",
      "modelNumber": "DXH09PSK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-dxh24psk3ih",
      "modelNumber": "DXH24PSK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-dxh12psk3ih",
      "modelNumber": "DXH12PSK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-dxh18psk3ih",
      "modelNumber": "DXH18PSK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-gxh1235lsk4dh2",
      "modelNumber": "GXH12(3.5)LSK4DH2",
      "brandId": "brand-aireforce",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-aireforce-dxh24fmk3ih",
      "modelNumber": "DXH24FMK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-dxh18fmk3ih",
      "modelNumber": "DXH18FMK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-dxh30fmk3ih",
      "modelNumber": "DXH30FMK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-gxh1853fmk4dh-1",
      "modelNumber": "GXH18(5.3)FMK4DH-1",
      "brandId": "brand-aireforce",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-aireforce-dxh42fmk3ih",
      "modelNumber": "DXH42FMK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-dxh36fmk3ih",
      "modelNumber": "DXH36FMK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-dxh36esk3il",
      "modelNumber": "DXH36ESK3IL",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-gxh2470fmk4dh-1",
      "modelNumber": "GXH24(7.0)FMK4DH-1",
      "brandId": "brand-aireforce",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-aireforce-gxh3088fmk4dh-1",
      "modelNumber": "GXH30(8.8)FMK4DH-1",
      "brandId": "brand-aireforce",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-aireforce-gxh36106fmk4dh-1",
      "modelNumber": "GXH36(10.6)FMK4DH-1",
      "brandId": "brand-aireforce",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-aireforce-gxh42123fmk4dh-1",
      "modelNumber": "GXH42(12.3)FMK4DH-1",
      "brandId": "brand-aireforce",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-aireforce-uxh48-60msk3ih",
      "modelNumber": "UXH48-60MSK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-uxh24-36msk3ih",
      "modelNumber": "UXH24-36MSK3IH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aireforce-gxh24-36msk4dh",
      "modelNumber": "GXH24-36MSK4DH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-aireforce-gxh48-60msk4dh",
      "modelNumber": "GXH48-60MSK4DH",
      "brandId": "brand-aireforce",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dhh09puk3ih",
      "modelNumber": "DHH09PUK3IH",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh24puk3ih",
      "modelNumber": "DHH24PUK3IH",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh12puk3ih",
      "modelNumber": "DHH12PUK3IH",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh18puk3ih",
      "modelNumber": "DHH18PUK3IH",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-ghh1235luk4dh2",
      "modelNumber": "GHH12(3.5)LUK4DH2",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-dkh09fmk3ih",
      "modelNumber": "DKH09FMK3IH",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-dkh12fmk3ih",
      "modelNumber": "DKH12FMK3IH",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40739",
      "modelNumber": "IU-40739",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40737",
      "modelNumber": "IU-40737",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40741",
      "modelNumber": "IU-40741",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40746",
      "modelNumber": "IU-40746",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40744",
      "modelNumber": "IU-40744",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40743",
      "modelNumber": "IU-40743",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh36esk3il",
      "modelNumber": "DHH36ESK3IL",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40747",
      "modelNumber": "IU-40747",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40748",
      "modelNumber": "IU-40748",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40749",
      "modelNumber": "IU-40749",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40750",
      "modelNumber": "IU-40750",
      "brandId": "brand-aireforce",
      "type": "wall-single"
    },
    {
      "id": "iu-umd48msk3ih",
      "modelNumber": "UMD48MSK3IH",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd36msk3ih",
      "modelNumber": "UMD36MSK3IH",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd60msk3ih",
      "modelNumber": "UMD60MSK3IH",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd24msk3ih",
      "modelNumber": "UMD24MSK3IH",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh24-msk4dh1",
      "modelNumber": "GMH24-**MSK4DH1",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh48-msk4dh1",
      "modelNumber": "GMH48-**MSK4DH1",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue48x5ad",
      "modelNumber": "UE48X5AD",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue60x5ad",
      "modelNumber": "UE60X5AD",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-36msk4dh1",
      "modelNumber": "GMH**-36MSK4DH1",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-60msk4dh1",
      "modelNumber": "GMH**-60MSK4DH1",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue24x5ab",
      "modelNumber": "UE24X5AB",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue36x5ab",
      "modelNumber": "UE36X5AB",
      "brandId": "brand-aireforce",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-aireforce-dxh09psk3ih-dhh09puk3ih",
      "slug": "aireforce-dxh09psk3ih-dhh09puk3ih",
      "modelId": "model-aireforce-dxh09psk3ih",
      "outdoorUnitId": "ou-aireforce-dxh09psk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh24psk3ih-dhh24puk3ih",
      "slug": "aireforce-dxh24psk3ih-dhh24puk3ih",
      "modelId": "model-aireforce-dxh24psk3ih",
      "outdoorUnitId": "ou-aireforce-dxh24psk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh12psk3ih-dhh12puk3ih",
      "slug": "aireforce-dxh12psk3ih-dhh12puk3ih",
      "modelId": "model-aireforce-dxh12psk3ih",
      "outdoorUnitId": "ou-aireforce-dxh12psk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh18psk3ih-dhh18puk3ih",
      "slug": "aireforce-dxh18psk3ih-dhh18puk3ih",
      "modelId": "model-aireforce-dxh18psk3ih",
      "outdoorUnitId": "ou-aireforce-dxh18psk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh1235lsk4dh2-ghh1235luk4dh2",
      "slug": "aireforce-gxh1235lsk4dh2-ghh1235luk4dh2",
      "modelId": "model-aireforce-gxh1235lsk4dh2",
      "outdoorUnitId": "ou-aireforce-gxh1235lsk4dh2",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh09psk3ih-dkh09fmk3ih",
      "slug": "aireforce-dxh09psk3ih-dkh09fmk3ih",
      "modelId": "model-aireforce-dxh09psk3ih",
      "outdoorUnitId": "ou-aireforce-dxh09psk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh12psk3ih-dkh12fmk3ih",
      "slug": "aireforce-dxh12psk3ih-dkh12fmk3ih",
      "modelId": "model-aireforce-dxh12psk3ih",
      "outdoorUnitId": "ou-aireforce-dxh12psk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh24fmk3ih-iu-40739",
      "slug": "aireforce-dxh24fmk3ih-iu-40739",
      "modelId": "model-aireforce-dxh24fmk3ih",
      "outdoorUnitId": "ou-aireforce-dxh24fmk3ih",
      "indoorUnitId": "iu-iu-40739",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh18fmk3ih-iu-40737",
      "slug": "aireforce-dxh18fmk3ih-iu-40737",
      "modelId": "model-aireforce-dxh18fmk3ih",
      "outdoorUnitId": "ou-aireforce-dxh18fmk3ih",
      "indoorUnitId": "iu-iu-40737",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh30fmk3ih-iu-40741",
      "slug": "aireforce-dxh30fmk3ih-iu-40741",
      "modelId": "model-aireforce-dxh30fmk3ih",
      "outdoorUnitId": "ou-aireforce-dxh30fmk3ih",
      "indoorUnitId": "iu-iu-40741",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh1853fmk4dh-1-iu-40746",
      "slug": "aireforce-gxh1853fmk4dh-1-iu-40746",
      "modelId": "model-aireforce-gxh1853fmk4dh-1",
      "outdoorUnitId": "ou-aireforce-gxh1853fmk4dh-1",
      "indoorUnitId": "iu-iu-40746",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh42fmk3ih-iu-40744",
      "slug": "aireforce-dxh42fmk3ih-iu-40744",
      "modelId": "model-aireforce-dxh42fmk3ih",
      "outdoorUnitId": "ou-aireforce-dxh42fmk3ih",
      "indoorUnitId": "iu-iu-40744",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh36fmk3ih-iu-40743",
      "slug": "aireforce-dxh36fmk3ih-iu-40743",
      "modelId": "model-aireforce-dxh36fmk3ih",
      "outdoorUnitId": "ou-aireforce-dxh36fmk3ih",
      "indoorUnitId": "iu-iu-40743",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-dxh36esk3il-dhh36esk3il",
      "slug": "aireforce-dxh36esk3il-dhh36esk3il",
      "modelId": "model-aireforce-dxh36esk3il",
      "outdoorUnitId": "ou-aireforce-dxh36esk3il",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh2470fmk4dh-1-iu-40747",
      "slug": "aireforce-gxh2470fmk4dh-1-iu-40747",
      "modelId": "model-aireforce-gxh2470fmk4dh-1",
      "outdoorUnitId": "ou-aireforce-gxh2470fmk4dh-1",
      "indoorUnitId": "iu-iu-40747",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh3088fmk4dh-1-iu-40748",
      "slug": "aireforce-gxh3088fmk4dh-1-iu-40748",
      "modelId": "model-aireforce-gxh3088fmk4dh-1",
      "outdoorUnitId": "ou-aireforce-gxh3088fmk4dh-1",
      "indoorUnitId": "iu-iu-40748",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh36106fmk4dh-1-iu-40749",
      "slug": "aireforce-gxh36106fmk4dh-1-iu-40749",
      "modelId": "model-aireforce-gxh36106fmk4dh-1",
      "outdoorUnitId": "ou-aireforce-gxh36106fmk4dh-1",
      "indoorUnitId": "iu-iu-40749",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh42123fmk4dh-1-iu-40750",
      "slug": "aireforce-gxh42123fmk4dh-1-iu-40750",
      "modelId": "model-aireforce-gxh42123fmk4dh-1",
      "outdoorUnitId": "ou-aireforce-gxh42123fmk4dh-1",
      "indoorUnitId": "iu-iu-40750",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-uxh48-60msk3ih-umd48msk3ih",
      "slug": "aireforce-uxh48-60msk3ih-umd48msk3ih",
      "modelId": "model-aireforce-uxh48-60msk3ih",
      "outdoorUnitId": "ou-aireforce-uxh48-60msk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-uxh24-36msk3ih-umd36msk3ih",
      "slug": "aireforce-uxh24-36msk3ih-umd36msk3ih",
      "modelId": "model-aireforce-uxh24-36msk3ih",
      "outdoorUnitId": "ou-aireforce-uxh24-36msk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-uxh48-60msk3ih-umd60msk3ih",
      "slug": "aireforce-uxh48-60msk3ih-umd60msk3ih",
      "modelId": "model-aireforce-uxh48-60msk3ih",
      "outdoorUnitId": "ou-aireforce-uxh48-60msk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-uxh24-36msk3ih-umd24msk3ih",
      "slug": "aireforce-uxh24-36msk3ih-umd24msk3ih",
      "modelId": "model-aireforce-uxh24-36msk3ih",
      "outdoorUnitId": "ou-aireforce-uxh24-36msk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh24-36msk4dh-gmh24-msk4dh1",
      "slug": "aireforce-gxh24-36msk4dh-gmh24-msk4dh1",
      "modelId": "model-aireforce-gxh24-36msk4dh",
      "outdoorUnitId": "ou-aireforce-gxh24-36msk4dh",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh48-60msk4dh-gmh48-msk4dh1",
      "slug": "aireforce-gxh48-60msk4dh-gmh48-msk4dh1",
      "modelId": "model-aireforce-gxh48-60msk4dh",
      "outdoorUnitId": "ou-aireforce-gxh48-60msk4dh",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-uxh48-60msk3ih-ue48x5ad",
      "slug": "aireforce-uxh48-60msk3ih-ue48x5ad",
      "modelId": "model-aireforce-uxh48-60msk3ih",
      "outdoorUnitId": "ou-aireforce-uxh48-60msk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-uxh48-60msk3ih-ue60x5ad",
      "slug": "aireforce-uxh48-60msk3ih-ue60x5ad",
      "modelId": "model-aireforce-uxh48-60msk3ih",
      "outdoorUnitId": "ou-aireforce-uxh48-60msk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh24-36msk4dh-gmh-36msk4dh1",
      "slug": "aireforce-gxh24-36msk4dh-gmh-36msk4dh1",
      "modelId": "model-aireforce-gxh24-36msk4dh",
      "outdoorUnitId": "ou-aireforce-gxh24-36msk4dh",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-gxh48-60msk4dh-gmh-60msk4dh1",
      "slug": "aireforce-gxh48-60msk4dh-gmh-60msk4dh1",
      "modelId": "model-aireforce-gxh48-60msk4dh",
      "outdoorUnitId": "ou-aireforce-gxh48-60msk4dh",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-uxh24-36msk3ih-ue24x5ab",
      "slug": "aireforce-uxh24-36msk3ih-ue24x5ab",
      "modelId": "model-aireforce-uxh24-36msk3ih",
      "outdoorUnitId": "ou-aireforce-uxh24-36msk3ih",
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
          "sourceId": "src-aireforce-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aireforce-uxh24-36msk3ih-ue36x5ab",
      "slug": "aireforce-uxh24-36msk3ih-ue36x5ab",
      "modelId": "model-aireforce-uxh24-36msk3ih",
      "outdoorUnitId": "ou-aireforce-uxh24-36msk3ih",
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
          "sourceId": "src-aireforce-epa",
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
