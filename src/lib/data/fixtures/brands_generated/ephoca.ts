import type { BrandDataset } from "../../types";

export const brand_ephocaDataset: BrandDataset = {
  "brand": {
    "id": "brand-ephoca",
    "slug": "ephoca",
    "name": "Ephoca",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Ephoca",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ephoca-epa",
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
      "id": "series-ephoca-aio-p-series",
      "slug": "ephoca-aio-p-series",
      "name": "AIO P Series",
      "brandId": "brand-ephoca",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIO P Series de Ephoca",
      "imageUrl": "/images/series/ephoca-ephoca-aio-p-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ephoca-aio-v-series",
      "slug": "ephoca-aio-v-series",
      "name": "AIO V Series",
      "brandId": "brand-ephoca",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIO V Series de Ephoca",
      "imageUrl": "/images/series/ephoca-ephoca-aio-v-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ephoca-aio-x-series",
      "slug": "ephoca-aio-x-series",
      "name": "AIO X Series",
      "brandId": "brand-ephoca",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIO X Series de Ephoca",
      "imageUrl": "/images/series/ephoca-ephoca-aio-x-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ephoca-aio-d-series",
      "slug": "ephoca-aio-d-series",
      "name": "AIO D Series",
      "brandId": "brand-ephoca",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIO D Series de Ephoca",
      "imageUrl": "/images/series/ephoca-ephoca-aio-d-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ephoca-aio-c-series",
      "slug": "ephoca-aio-c-series",
      "name": "AIO C Series",
      "brandId": "brand-ephoca",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIO C Series de Ephoca",
      "imageUrl": "/images/series/ephoca-ephoca-aio-c-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ephoca-aio-s-series",
      "slug": "ephoca-aio-s-series",
      "name": "AIO S Series",
      "brandId": "brand-ephoca",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIO S Series de Ephoca",
      "imageUrl": "/images/series/ephoca-ephoca-aio-s-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ephoca-aio-f-series",
      "slug": "ephoca-aio-f-series",
      "name": "AIO F Series",
      "brandId": "brand-ephoca",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIO F Series de Ephoca",
      "imageUrl": "/images/series/ephoca-ephoca-aio-f-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ephoca-aio-w-series",
      "slug": "ephoca-aio-w-series",
      "name": "AIO W Series",
      "brandId": "brand-ephoca",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIO W Series de Ephoca",
      "imageUrl": "/images/series/ephoca-ephoca-aio-w-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ephoca-ape10n3h1-3",
      "slug": "ephoca-ape10n3h1-3",
      "name": "Ephoca APE10N3H1-3",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APE10N3H1-3",
      "normalizedModelNumber": "ape10n3h1-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-ape10n3h2",
      "slug": "ephoca-ape10n3h2",
      "name": "Ephoca APE10N3H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APE10N3H2",
      "normalizedModelNumber": "ape10n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-ape1032",
      "slug": "ephoca-ape1032",
      "name": "Ephoca APE10*3*2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APE10*3*2",
      "normalizedModelNumber": "ape10*3*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-ape1042",
      "slug": "ephoca-ape1042",
      "name": "Ephoca APE10*4*2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APE10*4*2",
      "normalizedModelNumber": "ape10*4*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-ape10n4h2",
      "slug": "ephoca-ape10n4h2",
      "name": "Ephoca APE10N4H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APE10N4H2",
      "normalizedModelNumber": "ape10n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-ape10n3h2-3",
      "slug": "ephoca-ape10n3h2-3",
      "name": "Ephoca APE10N3H2-3",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APE10N3H2-3",
      "normalizedModelNumber": "ape10n3h2-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10r4h2",
      "slug": "ephoca-app10r4h2",
      "name": "Ephoca APP10R4H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10R4H2",
      "normalizedModelNumber": "app10r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10r4h1",
      "slug": "ephoca-app10r4h1",
      "name": "Ephoca APP10R4H1",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10R4H1",
      "normalizedModelNumber": "app10r4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10r3h2",
      "slug": "ephoca-app10r3h2",
      "name": "Ephoca APP10R3H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10R3H2",
      "normalizedModelNumber": "app10r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10r3h1",
      "slug": "ephoca-app10r3h1",
      "name": "Ephoca APP10R3H1",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10R3H1",
      "normalizedModelNumber": "app10r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10n4h2",
      "slug": "ephoca-app10n4h2",
      "name": "Ephoca APP10N4H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10N4H2",
      "normalizedModelNumber": "app10n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10n4h1",
      "slug": "ephoca-app10n4h1",
      "name": "Ephoca APP10N4H1",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10N4H1",
      "normalizedModelNumber": "app10n4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10n3h2-3",
      "slug": "ephoca-app10n3h2-3",
      "name": "Ephoca APP10N3H2-3",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10N3H2-3",
      "normalizedModelNumber": "app10n3h2-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10n3h2",
      "slug": "ephoca-app10n3h2",
      "name": "Ephoca APP10N3H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10N3H2",
      "normalizedModelNumber": "app10n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10n3h1-3",
      "slug": "ephoca-app10n3h1-3",
      "name": "Ephoca APP10N3H1-3",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10N3H1-3",
      "normalizedModelNumber": "app10n3h1-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app10n3h1",
      "slug": "ephoca-app10n3h1",
      "name": "Ephoca APP10N3H1",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10N3H1",
      "normalizedModelNumber": "app10n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app1042",
      "slug": "ephoca-app1042",
      "name": "Ephoca APP10*4*2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10*4*2",
      "normalizedModelNumber": "app10*4*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app1041",
      "slug": "ephoca-app1041",
      "name": "Ephoca APP10*4*1",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10*4*1",
      "normalizedModelNumber": "app10*4*1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app1032",
      "slug": "ephoca-app1032",
      "name": "Ephoca APP10*3*2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10*3*2",
      "normalizedModelNumber": "app10*3*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-app1031",
      "slug": "ephoca-app1031",
      "name": "Ephoca APP10*3*1",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APP10*3*1",
      "normalizedModelNumber": "app10*3*1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-apk10r4h2",
      "slug": "ephoca-apk10r4h2",
      "name": "Ephoca APK10R4H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APK10R4H2",
      "normalizedModelNumber": "apk10r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-apk10r3h2",
      "slug": "ephoca-apk10r3h2",
      "name": "Ephoca APK10R3H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APK10R3H2",
      "normalizedModelNumber": "apk10r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-apk10n4h2",
      "slug": "ephoca-apk10n4h2",
      "name": "Ephoca APK10N4H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APK10N4H2",
      "normalizedModelNumber": "apk10n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-apk10n3h2-3",
      "slug": "ephoca-apk10n3h2-3",
      "name": "Ephoca APK10N3H2-3",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APK10N3H2-3",
      "normalizedModelNumber": "apk10n3h2-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-apk10n3h2",
      "slug": "ephoca-apk10n3h2",
      "name": "Ephoca APK10N3H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APK10N3H2",
      "normalizedModelNumber": "apk10n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-apk10n3h1-3",
      "slug": "ephoca-apk10n3h1-3",
      "name": "Ephoca APK10N3H1-3",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APK10N3H1-3",
      "normalizedModelNumber": "apk10n3h1-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-apk1042",
      "slug": "ephoca-apk1042",
      "name": "Ephoca APK10*4*2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APK10*4*2",
      "normalizedModelNumber": "apk10*4*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-apk1032",
      "slug": "ephoca-apk1032",
      "name": "Ephoca APK10*3*2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APK10*3*2",
      "normalizedModelNumber": "apk10*3*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-ape10r4h2",
      "slug": "ephoca-ape10r4h2",
      "name": "Ephoca APE10R4H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APE10R4H2",
      "normalizedModelNumber": "ape10r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-ape10r3h2",
      "slug": "ephoca-ape10r3h2",
      "name": "Ephoca APE10R3H2",
      "seriesId": "series-ephoca-aio-p-series",
      "brandId": "brand-ephoca",
      "modelNumber": "APE10R3H2",
      "normalizedModelNumber": "ape10r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-ephoca-avm19r3h2",
      "slug": "ephoca-avm19r3h2",
      "name": "Ephoca AVM19R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVM19R3H2",
      "normalizedModelNumber": "avm19r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avm19r4h2",
      "slug": "ephoca-avm19r4h2",
      "name": "Ephoca AVM19R4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVM19R4H2",
      "normalizedModelNumber": "avm19r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avk19r3h2",
      "slug": "ephoca-avk19r3h2",
      "name": "Ephoca AVK19R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK19R3H2",
      "normalizedModelNumber": "avk19r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avk19r4h2",
      "slug": "ephoca-avk19r4h2",
      "name": "Ephoca AVK19R4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK19R4H2",
      "normalizedModelNumber": "avk19r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avk19n4h2",
      "slug": "ephoca-avk19n4h2",
      "name": "Ephoca AVK19N4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK19N4H2",
      "normalizedModelNumber": "avk19n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avk19n3h2",
      "slug": "ephoca-avk19n3h2",
      "name": "Ephoca AVK19N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK19N3H2",
      "normalizedModelNumber": "avk19n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avm19n3h2",
      "slug": "ephoca-avm19n3h2",
      "name": "Ephoca AVM19N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVM19N3H2",
      "normalizedModelNumber": "avm19n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avm19n4h2",
      "slug": "ephoca-avm19n4h2",
      "name": "Ephoca AVM19N4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVM19N4H2",
      "normalizedModelNumber": "avm19n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avp19r4h2",
      "slug": "ephoca-avp19r4h2",
      "name": "Ephoca AVP19R4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP19R4H2",
      "normalizedModelNumber": "avp19r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avp19r4h1",
      "slug": "ephoca-avp19r4h1",
      "name": "Ephoca AVP19R4H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP19R4H1",
      "normalizedModelNumber": "avp19r4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axw19r3h2",
      "slug": "ephoca-axw19r3h2",
      "name": "Ephoca AXW19R3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXW19R3H2",
      "normalizedModelNumber": "axw19r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axw19n3h2",
      "slug": "ephoca-axw19n3h2",
      "name": "Ephoca AXW19N3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXW19N3H2",
      "normalizedModelNumber": "axw19n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axt19r3h2",
      "slug": "ephoca-axt19r3h2",
      "name": "Ephoca AXT19R3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXT19R3H2",
      "normalizedModelNumber": "axt19r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axt19n3h2",
      "slug": "ephoca-axt19n3h2",
      "name": "Ephoca AXT19N3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXT19N3H2",
      "normalizedModelNumber": "axt19n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avp19r3h2",
      "slug": "ephoca-avp19r3h2",
      "name": "Ephoca AVP19R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP19R3H2",
      "normalizedModelNumber": "avp19r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avp19r3h1",
      "slug": "ephoca-avp19r3h1",
      "name": "Ephoca AVP19R3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP19R3H1",
      "normalizedModelNumber": "avp19r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axy19n3h2",
      "slug": "ephoca-axy19n3h2",
      "name": "Ephoca AXY19N3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXY19N3H2",
      "normalizedModelNumber": "axy19n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axy19r3h2",
      "slug": "ephoca-axy19r3h2",
      "name": "Ephoca AXY19R3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXY19R3H2",
      "normalizedModelNumber": "axy19r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axm19n3h2",
      "slug": "ephoca-axm19n3h2",
      "name": "Ephoca AXM19N3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXM19N3H2",
      "normalizedModelNumber": "axm19n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axm19r3h2",
      "slug": "ephoca-axm19r3h2",
      "name": "Ephoca AXM19R3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXM19R3H2",
      "normalizedModelNumber": "axm19r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avp19n4h1",
      "slug": "ephoca-avp19n4h1",
      "name": "Ephoca AVP19N4H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP19N4H1",
      "normalizedModelNumber": "avp19n4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avp19n4h2",
      "slug": "ephoca-avp19n4h2",
      "name": "Ephoca AVP19N4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP19N4H2",
      "normalizedModelNumber": "avp19n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avp19n3h1",
      "slug": "ephoca-avp19n3h1",
      "name": "Ephoca AVP19N3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP19N3H1",
      "normalizedModelNumber": "avp19n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avp19n3h2",
      "slug": "ephoca-avp19n3h2",
      "name": "Ephoca AVP19N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP19N3H2",
      "normalizedModelNumber": "avp19n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axp19r3h2",
      "slug": "ephoca-axp19r3h2",
      "name": "Ephoca AXP19R3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXP19R3H2",
      "normalizedModelNumber": "axp19r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-axp19n3h2",
      "slug": "ephoca-axp19n3h2",
      "name": "Ephoca AXP19N3H2",
      "seriesId": "series-ephoca-aio-x-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AXP19N3H2",
      "normalizedModelNumber": "axp19n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11600,
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
      "id": "model-ephoca-avk09r3h2",
      "slug": "ephoca-avk09r3h2",
      "name": "Ephoca AVK09R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK09R3H2",
      "normalizedModelNumber": "avk09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avk09r4h2",
      "slug": "ephoca-avk09r4h2",
      "name": "Ephoca AVK09R4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK09R4H2",
      "normalizedModelNumber": "avk09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avk09r3h1",
      "slug": "ephoca-avk09r3h1",
      "name": "Ephoca AVK09R3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK09R3H1",
      "normalizedModelNumber": "avk09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avk09n4h2",
      "slug": "ephoca-avk09n4h2",
      "name": "Ephoca AVK09N4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK09N4H2",
      "normalizedModelNumber": "avk09n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avl09n3h1",
      "slug": "ephoca-avl09n3h1",
      "name": "Ephoca AVL09N3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVL09N3H1",
      "normalizedModelNumber": "avl09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avl09n3h2",
      "slug": "ephoca-avl09n3h2",
      "name": "Ephoca AVL09N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVL09N3H2",
      "normalizedModelNumber": "avl09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avv09n3h2",
      "slug": "ephoca-avv09n3h2",
      "name": "Ephoca AVV09N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVV09N3H2",
      "normalizedModelNumber": "avv09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avv09n3h1",
      "slug": "ephoca-avv09n3h1",
      "name": "Ephoca AVV09N3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVV09N3H1",
      "normalizedModelNumber": "avv09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avv09r3h2",
      "slug": "ephoca-avv09r3h2",
      "name": "Ephoca AVV09R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVV09R3H2",
      "normalizedModelNumber": "avv09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avv09r3h1",
      "slug": "ephoca-avv09r3h1",
      "name": "Ephoca AVV09R3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVV09R3H1",
      "normalizedModelNumber": "avv09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avu09r3h1",
      "slug": "ephoca-avu09r3h1",
      "name": "Ephoca AVU09R3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVU09R3H1",
      "normalizedModelNumber": "avu09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avu09r3h2",
      "slug": "ephoca-avu09r3h2",
      "name": "Ephoca AVU09R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVU09R3H2",
      "normalizedModelNumber": "avu09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avu09n3h1",
      "slug": "ephoca-avu09n3h1",
      "name": "Ephoca AVU09N3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVU09N3H1",
      "normalizedModelNumber": "avu09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avu09n3h2",
      "slug": "ephoca-avu09n3h2",
      "name": "Ephoca AVU09N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVU09N3H2",
      "normalizedModelNumber": "avu09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avp09r4h2",
      "slug": "ephoca-avp09r4h2",
      "name": "Ephoca AVP09R4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP09R4H2",
      "normalizedModelNumber": "avp09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avp09r4h1",
      "slug": "ephoca-avp09r4h1",
      "name": "Ephoca AVP09R4H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP09R4H1",
      "normalizedModelNumber": "avp09r4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avp09r3h2",
      "slug": "ephoca-avp09r3h2",
      "name": "Ephoca AVP09R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP09R3H2",
      "normalizedModelNumber": "avp09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avp09r3h1",
      "slug": "ephoca-avp09r3h1",
      "name": "Ephoca AVP09R3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP09R3H1",
      "normalizedModelNumber": "avp09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avp09n3h2",
      "slug": "ephoca-avp09n3h2",
      "name": "Ephoca AVP09N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP09N3H2",
      "normalizedModelNumber": "avp09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avp09n3h1",
      "slug": "ephoca-avp09n3h1",
      "name": "Ephoca AVP09N3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP09N3H1",
      "normalizedModelNumber": "avp09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avp09n4h2",
      "slug": "ephoca-avp09n4h2",
      "name": "Ephoca AVP09N4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP09N4H2",
      "normalizedModelNumber": "avp09n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avp09n4h1",
      "slug": "ephoca-avp09n4h1",
      "name": "Ephoca AVP09N4H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVP09N4H1",
      "normalizedModelNumber": "avp09n4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-ave09n3h2",
      "slug": "ephoca-ave09n3h2",
      "name": "Ephoca AVE09N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVE09N3H2",
      "normalizedModelNumber": "ave09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-ave09n3h1",
      "slug": "ephoca-ave09n3h1",
      "name": "Ephoca AVE09N3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVE09N3H1",
      "normalizedModelNumber": "ave09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-ave09r4h2",
      "slug": "ephoca-ave09r4h2",
      "name": "Ephoca AVE09R4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVE09R4H2",
      "normalizedModelNumber": "ave09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-ave09r3h2",
      "slug": "ephoca-ave09r3h2",
      "name": "Ephoca AVE09R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVE09R3H2",
      "normalizedModelNumber": "ave09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avl09r3h2",
      "slug": "ephoca-avl09r3h2",
      "name": "Ephoca AVL09R3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVL09R3H2",
      "normalizedModelNumber": "avl09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avl09r3h1",
      "slug": "ephoca-avl09r3h1",
      "name": "Ephoca AVL09R3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVL09R3H1",
      "normalizedModelNumber": "avl09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-ave09r3h1",
      "slug": "ephoca-ave09r3h1",
      "name": "Ephoca AVE09R3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVE09R3H1",
      "normalizedModelNumber": "ave09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-ave09n4h2",
      "slug": "ephoca-ave09n4h2",
      "name": "Ephoca AVE09N4H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVE09N4H2",
      "normalizedModelNumber": "ave09n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avk09n3h2",
      "slug": "ephoca-avk09n3h2",
      "name": "Ephoca AVK09N3H2",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK09N3H2",
      "normalizedModelNumber": "avk09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-avk09n3h1",
      "slug": "ephoca-avk09n3h1",
      "name": "Ephoca AVK09N3H1",
      "seriesId": "series-ephoca-aio-v-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AVK09N3H1",
      "normalizedModelNumber": "avk09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 7500,
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
      "id": "model-ephoca-adp09r4h2",
      "slug": "ephoca-adp09r4h2",
      "name": "Ephoca ADP09R4H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADP09R4H2",
      "normalizedModelNumber": "adp09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adp09r4h1",
      "slug": "ephoca-adp09r4h1",
      "name": "Ephoca ADP09R4H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADP09R4H1",
      "normalizedModelNumber": "adp09r4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adp09r3h2",
      "slug": "ephoca-adp09r3h2",
      "name": "Ephoca ADP09R3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADP09R3H2",
      "normalizedModelNumber": "adp09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adp09r3h1",
      "slug": "ephoca-adp09r3h1",
      "name": "Ephoca ADP09R3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADP09R3H1",
      "normalizedModelNumber": "adp09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adu09r3h2",
      "slug": "ephoca-adu09r3h2",
      "name": "Ephoca ADU09R3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADU09R3H2",
      "normalizedModelNumber": "adu09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adu09r3h1",
      "slug": "ephoca-adu09r3h1",
      "name": "Ephoca ADU09R3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADU09R3H1",
      "normalizedModelNumber": "adu09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ade09n3h2",
      "slug": "ephoca-ade09n3h2",
      "name": "Ephoca ADE09N3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADE09N3H2",
      "normalizedModelNumber": "ade09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ade09n3h1",
      "slug": "ephoca-ade09n3h1",
      "name": "Ephoca ADE09N3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADE09N3H1",
      "normalizedModelNumber": "ade09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-acv09r3h2",
      "slug": "ephoca-acv09r3h2",
      "name": "Ephoca ACV09R3H2",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACV09R3H2",
      "normalizedModelNumber": "acv09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-acv09r3h1",
      "slug": "ephoca-acv09r3h1",
      "name": "Ephoca ACV09R3H1",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACV09R3H1",
      "normalizedModelNumber": "acv09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-acv09n3h2",
      "slug": "ephoca-acv09n3h2",
      "name": "Ephoca ACV09N3H2",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACV09N3H2",
      "normalizedModelNumber": "acv09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-acv09n3h1",
      "slug": "ephoca-acv09n3h1",
      "name": "Ephoca ACV09N3H1",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACV09N3H1",
      "normalizedModelNumber": "acv09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adk09r4h2",
      "slug": "ephoca-adk09r4h2",
      "name": "Ephoca ADK09R4H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADK09R4H2",
      "normalizedModelNumber": "adk09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adk09r3h2",
      "slug": "ephoca-adk09r3h2",
      "name": "Ephoca ADK09R3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADK09R3H2",
      "normalizedModelNumber": "adk09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adk09r3h1",
      "slug": "ephoca-adk09r3h1",
      "name": "Ephoca ADK09R3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADK09R3H1",
      "normalizedModelNumber": "adk09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adk09n4h2",
      "slug": "ephoca-adk09n4h2",
      "name": "Ephoca ADK09N4H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADK09N4H2",
      "normalizedModelNumber": "adk09n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adk09n3h2",
      "slug": "ephoca-adk09n3h2",
      "name": "Ephoca ADK09N3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADK09N3H2",
      "normalizedModelNumber": "adk09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adk09n3h1",
      "slug": "ephoca-adk09n3h1",
      "name": "Ephoca ADK09N3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADK09N3H1",
      "normalizedModelNumber": "adk09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ade09r4h2",
      "slug": "ephoca-ade09r4h2",
      "name": "Ephoca ADE09R4H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADE09R4H2",
      "normalizedModelNumber": "ade09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ade09r3h2",
      "slug": "ephoca-ade09r3h2",
      "name": "Ephoca ADE09R3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADE09R3H2",
      "normalizedModelNumber": "ade09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ade09r3h1",
      "slug": "ephoca-ade09r3h1",
      "name": "Ephoca ADE09R3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADE09R3H1",
      "normalizedModelNumber": "ade09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ade09n4h2",
      "slug": "ephoca-ade09n4h2",
      "name": "Ephoca ADE09N4H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADE09N4H2",
      "normalizedModelNumber": "ade09n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-acu09n3h2",
      "slug": "ephoca-acu09n3h2",
      "name": "Ephoca ACU09N3H2",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACU09N3H2",
      "normalizedModelNumber": "acu09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-acu09n3h1",
      "slug": "ephoca-acu09n3h1",
      "name": "Ephoca ACU09N3H1",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACU09N3H1",
      "normalizedModelNumber": "acu09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ack09r3h2",
      "slug": "ephoca-ack09r3h2",
      "name": "Ephoca ACK09R3H2",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACK09R3H2",
      "normalizedModelNumber": "ack09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ack09r3h1",
      "slug": "ephoca-ack09r3h1",
      "name": "Ephoca ACK09R3H1",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACK09R3H1",
      "normalizedModelNumber": "ack09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ack09n3h2",
      "slug": "ephoca-ack09n3h2",
      "name": "Ephoca ACK09N3H2",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACK09N3H2",
      "normalizedModelNumber": "ack09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ack09n3h1",
      "slug": "ephoca-ack09n3h1",
      "name": "Ephoca ACK09N3H1",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACK09N3H1",
      "normalizedModelNumber": "ack09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-acu09r3h2",
      "slug": "ephoca-acu09r3h2",
      "name": "Ephoca ACU09R3H2",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACU09R3H2",
      "normalizedModelNumber": "acu09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-acu09r3h1",
      "slug": "ephoca-acu09r3h1",
      "name": "Ephoca ACU09R3H1",
      "seriesId": "series-ephoca-aio-c-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ACU09R3H1",
      "normalizedModelNumber": "acu09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adp09n4h2",
      "slug": "ephoca-adp09n4h2",
      "name": "Ephoca ADP09N4H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADP09N4H2",
      "normalizedModelNumber": "adp09n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adp09n4h1",
      "slug": "ephoca-adp09n4h1",
      "name": "Ephoca ADP09N4H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADP09N4H1",
      "normalizedModelNumber": "adp09n4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adl09n3h1",
      "slug": "ephoca-adl09n3h1",
      "name": "Ephoca ADL09N3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADL09N3H1",
      "normalizedModelNumber": "adl09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adl09n3h2",
      "slug": "ephoca-adl09n3h2",
      "name": "Ephoca ADL09N3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADL09N3H2",
      "normalizedModelNumber": "adl09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adl09r3h1",
      "slug": "ephoca-adl09r3h1",
      "name": "Ephoca ADL09R3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADL09R3H1",
      "normalizedModelNumber": "adl09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adl09r3h2",
      "slug": "ephoca-adl09r3h2",
      "name": "Ephoca ADL09R3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADL09R3H2",
      "normalizedModelNumber": "adl09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adp09n3h1",
      "slug": "ephoca-adp09n3h1",
      "name": "Ephoca ADP09N3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADP09N3H1",
      "normalizedModelNumber": "adp09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adp09n3h2",
      "slug": "ephoca-adp09n3h2",
      "name": "Ephoca ADP09N3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADP09N3H2",
      "normalizedModelNumber": "adp09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-asp09r3h2",
      "slug": "ephoca-asp09r3h2",
      "name": "Ephoca ASP09R3H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASP09R3H2",
      "normalizedModelNumber": "asp09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-asp09r3h1",
      "slug": "ephoca-asp09r3h1",
      "name": "Ephoca ASP09R3H1",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASP09R3H1",
      "normalizedModelNumber": "asp09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-asp09n4h2",
      "slug": "ephoca-asp09n4h2",
      "name": "Ephoca ASP09N4H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASP09N4H2",
      "normalizedModelNumber": "asp09n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-asp09n4h1",
      "slug": "ephoca-asp09n4h1",
      "name": "Ephoca ASP09N4H1",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASP09N4H1",
      "normalizedModelNumber": "asp09n4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-asp09n3h2",
      "slug": "ephoca-asp09n3h2",
      "name": "Ephoca ASP09N3H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASP09N3H2",
      "normalizedModelNumber": "asp09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-asp09n3h1",
      "slug": "ephoca-asp09n3h1",
      "name": "Ephoca ASP09N3H1",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASP09N3H1",
      "normalizedModelNumber": "asp09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ask09r3h2",
      "slug": "ephoca-ask09r3h2",
      "name": "Ephoca ASK09R3H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASK09R3H2",
      "normalizedModelNumber": "ask09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ask09r4h2",
      "slug": "ephoca-ask09r4h2",
      "name": "Ephoca ASK09R4H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASK09R4H2",
      "normalizedModelNumber": "ask09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-asp09r4h1",
      "slug": "ephoca-asp09r4h1",
      "name": "Ephoca ASP09R4H1",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASP09R4H1",
      "normalizedModelNumber": "asp09r4h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-asp09r4h2",
      "slug": "ephoca-asp09r4h2",
      "name": "Ephoca ASP09R4H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASP09R4H2",
      "normalizedModelNumber": "asp09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ase09n4h2",
      "slug": "ephoca-ase09n4h2",
      "name": "Ephoca ASE09N4H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASE09N4H2",
      "normalizedModelNumber": "ase09n4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ase09r3h2",
      "slug": "ephoca-ase09r3h2",
      "name": "Ephoca ASE09R3H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASE09R3H2",
      "normalizedModelNumber": "ase09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adv09r3h1",
      "slug": "ephoca-adv09r3h1",
      "name": "Ephoca ADV09R3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADV09R3H1",
      "normalizedModelNumber": "adv09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adv09r3h2",
      "slug": "ephoca-adv09r3h2",
      "name": "Ephoca ADV09R3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADV09R3H2",
      "normalizedModelNumber": "adv09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adv09n3h1",
      "slug": "ephoca-adv09n3h1",
      "name": "Ephoca ADV09N3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADV09N3H1",
      "normalizedModelNumber": "adv09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adv09n3h2",
      "slug": "ephoca-adv09n3h2",
      "name": "Ephoca ADV09N3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADV09N3H2",
      "normalizedModelNumber": "adv09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adu09n3h2",
      "slug": "ephoca-adu09n3h2",
      "name": "Ephoca ADU09N3H2",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADU09N3H2",
      "normalizedModelNumber": "adu09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-adu09n3h1",
      "slug": "ephoca-adu09n3h1",
      "name": "Ephoca ADU09N3H1",
      "seriesId": "series-ephoca-aio-d-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ADU09N3H1",
      "normalizedModelNumber": "adu09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ase09n3h1",
      "slug": "ephoca-ase09n3h1",
      "name": "Ephoca ASE09N3H1",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASE09N3H1",
      "normalizedModelNumber": "ase09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ase09n3h2",
      "slug": "ephoca-ase09n3h2",
      "name": "Ephoca ASE09N3H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASE09N3H2",
      "normalizedModelNumber": "ase09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ase09r4h2",
      "slug": "ephoca-ase09r4h2",
      "name": "Ephoca ASE09R4H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASE09R4H2",
      "normalizedModelNumber": "ase09r4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ask09h4h2",
      "slug": "ephoca-ask09h4h2",
      "name": "Ephoca ASK09H4H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASK09H4H2",
      "normalizedModelNumber": "ask09h4h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ask09n3h1",
      "slug": "ephoca-ask09n3h1",
      "name": "Ephoca ASK09N3H1",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASK09N3H1",
      "normalizedModelNumber": "ask09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-ask09n3h2",
      "slug": "ephoca-ask09n3h2",
      "name": "Ephoca ASK09N3H2",
      "seriesId": "series-ephoca-aio-s-series",
      "brandId": "brand-ephoca",
      "modelNumber": "ASK09N3H2",
      "normalizedModelNumber": "ask09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6100,
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
      "id": "model-ephoca-afe09r3h2",
      "slug": "ephoca-afe09r3h2",
      "name": "Ephoca AFE09R3H2",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFE09R3H2",
      "normalizedModelNumber": "afe09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afe09r3h1",
      "slug": "ephoca-afe09r3h1",
      "name": "Ephoca AFE09R3H1",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFE09R3H1",
      "normalizedModelNumber": "afe09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afe09n3h1",
      "slug": "ephoca-afe09n3h1",
      "name": "Ephoca AFE09N3H1",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFE09N3H1",
      "normalizedModelNumber": "afe09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afe09n3h2",
      "slug": "ephoca-afe09n3h2",
      "name": "Ephoca AFE09N3H2",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFE09N3H2",
      "normalizedModelNumber": "afe09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afk09r3h1",
      "slug": "ephoca-afk09r3h1",
      "name": "Ephoca AFK09R3H1",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFK09R3H1",
      "normalizedModelNumber": "afk09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afk09r3h2",
      "slug": "ephoca-afk09r3h2",
      "name": "Ephoca AFK09R3H2",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFK09R3H2",
      "normalizedModelNumber": "afk09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afp09n3h1",
      "slug": "ephoca-afp09n3h1",
      "name": "Ephoca AFP09N3H1",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFP09N3H1",
      "normalizedModelNumber": "afp09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afp09n3h2",
      "slug": "ephoca-afp09n3h2",
      "name": "Ephoca AFP09N3H2",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFP09N3H2",
      "normalizedModelNumber": "afp09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afp09r3h2",
      "slug": "ephoca-afp09r3h2",
      "name": "Ephoca AFP09R3H2",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFP09R3H2",
      "normalizedModelNumber": "afp09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afp09r3h1",
      "slug": "ephoca-afp09r3h1",
      "name": "Ephoca AFP09R3H1",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFP09R3H1",
      "normalizedModelNumber": "afp09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afk09n3h1",
      "slug": "ephoca-afk09n3h1",
      "name": "Ephoca AFK09N3H1",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFK09N3H1",
      "normalizedModelNumber": "afk09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-afk09n3h2",
      "slug": "ephoca-afk09n3h2",
      "name": "Ephoca AFK09N3H2",
      "seriesId": "series-ephoca-aio-f-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AFK09N3H2",
      "normalizedModelNumber": "afk09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awe0942",
      "slug": "ephoca-awe0942",
      "name": "Ephoca AWE09*4*2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWE09*4*2",
      "normalizedModelNumber": "awe09*4*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awe0932",
      "slug": "ephoca-awe0932",
      "name": "Ephoca AWE09*3*2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWE09*3*2",
      "normalizedModelNumber": "awe09*3*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awe09n3h1-3sp",
      "slug": "ephoca-awe09n3h1-3sp",
      "name": "Ephoca AWE09N3H1-3SP",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWE09N3H1-3SP",
      "normalizedModelNumber": "awe09n3h1-3sp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awe09n3h1-3",
      "slug": "ephoca-awe09n3h1-3",
      "name": "Ephoca AWE09N3H1-3",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWE09N3H1-3",
      "normalizedModelNumber": "awe09n3h1-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awe09n3h2-3",
      "slug": "ephoca-awe09n3h2-3",
      "name": "Ephoca AWE09N3H2-3",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWE09N3H2-3",
      "normalizedModelNumber": "awe09n3h2-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awe09n3h2",
      "slug": "ephoca-awe09n3h2",
      "name": "Ephoca AWE09N3H2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWE09N3H2",
      "normalizedModelNumber": "awe09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awe09n3h2-3sp",
      "slug": "ephoca-awe09n3h2-3sp",
      "name": "Ephoca AWE09N3H2-3SP",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWE09N3H2-3SP",
      "normalizedModelNumber": "awe09n3h2-3sp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awe09r3h2",
      "slug": "ephoca-awe09r3h2",
      "name": "Ephoca AWE09R3H2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWE09R3H2",
      "normalizedModelNumber": "awe09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awk09n3h1-3",
      "slug": "ephoca-awk09n3h1-3",
      "name": "Ephoca AWK09N3H1-3",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWK09N3H1-3",
      "normalizedModelNumber": "awk09n3h1-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awk09n3h1-3sp",
      "slug": "ephoca-awk09n3h1-3sp",
      "name": "Ephoca AWK09N3H1-3SP",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWK09N3H1-3SP",
      "normalizedModelNumber": "awk09n3h1-3sp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awk0932",
      "slug": "ephoca-awk0932",
      "name": "Ephoca AWK09*3*2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWK09*3*2",
      "normalizedModelNumber": "awk09*3*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awk0942",
      "slug": "ephoca-awk0942",
      "name": "Ephoca AWK09*4*2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWK09*4*2",
      "normalizedModelNumber": "awk09*4*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp09n3h1-3",
      "slug": "ephoca-awp09n3h1-3",
      "name": "Ephoca AWP09N3H1-3",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09N3H1-3",
      "normalizedModelNumber": "awp09n3h1-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp09n3h1",
      "slug": "ephoca-awp09n3h1",
      "name": "Ephoca AWP09N3H1",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09N3H1",
      "normalizedModelNumber": "awp09n3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp0942",
      "slug": "ephoca-awp0942",
      "name": "Ephoca AWP09*4*2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09*4*2",
      "normalizedModelNumber": "awp09*4*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp0941",
      "slug": "ephoca-awp0941",
      "name": "Ephoca AWP09*4*1",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09*4*1",
      "normalizedModelNumber": "awp09*4*1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp0932",
      "slug": "ephoca-awp0932",
      "name": "Ephoca AWP09*3*2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09*3*2",
      "normalizedModelNumber": "awp09*3*2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp0931",
      "slug": "ephoca-awp0931",
      "name": "Ephoca AWP09*3*1",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09*3*1",
      "normalizedModelNumber": "awp09*3*1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awk09r3h2",
      "slug": "ephoca-awk09r3h2",
      "name": "Ephoca AWK09R3H2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWK09R3H2",
      "normalizedModelNumber": "awk09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awk09n3h2-3sp",
      "slug": "ephoca-awk09n3h2-3sp",
      "name": "Ephoca AWK09N3H2-3SP",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWK09N3H2-3SP",
      "normalizedModelNumber": "awk09n3h2-3sp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awk09n3h2-3",
      "slug": "ephoca-awk09n3h2-3",
      "name": "Ephoca AWK09N3H2-3",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWK09N3H2-3",
      "normalizedModelNumber": "awk09n3h2-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awk09n3h2",
      "slug": "ephoca-awk09n3h2",
      "name": "Ephoca AWK09N3H2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWK09N3H2",
      "normalizedModelNumber": "awk09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp09r3h1",
      "slug": "ephoca-awp09r3h1",
      "name": "Ephoca AWP09R3H1",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09R3H1",
      "normalizedModelNumber": "awp09r3h1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp09r3h2",
      "slug": "ephoca-awp09r3h2",
      "name": "Ephoca AWP09R3H2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09R3H2",
      "normalizedModelNumber": "awp09r3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp09n3h2",
      "slug": "ephoca-awp09n3h2",
      "name": "Ephoca AWP09N3H2",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09N3H2",
      "normalizedModelNumber": "awp09n3h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp09n3h1-3sp",
      "slug": "ephoca-awp09n3h1-3sp",
      "name": "Ephoca AWP09N3H1-3SP",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09N3H1-3SP",
      "normalizedModelNumber": "awp09n3h1-3sp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp09n3h2-3",
      "slug": "ephoca-awp09n3h2-3",
      "name": "Ephoca AWP09N3H2-3",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09N3H2-3",
      "normalizedModelNumber": "awp09n3h2-3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "model-ephoca-awp09n3h2-3sp",
      "slug": "ephoca-awp09n3h2-3sp",
      "name": "Ephoca AWP09N3H2-3SP",
      "seriesId": "series-ephoca-aio-w-series",
      "brandId": "brand-ephoca",
      "modelNumber": "AWP09N3H2-3SP",
      "normalizedModelNumber": "awp09n3h2-3sp",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6700,
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
      "id": "ou-ephoca-ape10n3h1-3",
      "modelNumber": "APE10N3H1-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ape10n3h2",
      "modelNumber": "APE10N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ape1032",
      "modelNumber": "APE10*3*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ape1042",
      "modelNumber": "APE10*4*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ephoca-ape10n4h2",
      "modelNumber": "APE10N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ape10n3h2-3",
      "modelNumber": "APE10N3H2-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10r4h2",
      "modelNumber": "APP10R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10r4h1",
      "modelNumber": "APP10R4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10r3h2",
      "modelNumber": "APP10R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10r3h1",
      "modelNumber": "APP10R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10n4h2",
      "modelNumber": "APP10N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10n4h1",
      "modelNumber": "APP10N4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10n3h2-3",
      "modelNumber": "APP10N3H2-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10n3h2",
      "modelNumber": "APP10N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10n3h1-3",
      "modelNumber": "APP10N3H1-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app10n3h1",
      "modelNumber": "APP10N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app1042",
      "modelNumber": "APP10*4*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ephoca-app1041",
      "modelNumber": "APP10*4*1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ephoca-app1032",
      "modelNumber": "APP10*3*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-app1031",
      "modelNumber": "APP10*3*1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-apk10r4h2",
      "modelNumber": "APK10R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-apk10r3h2",
      "modelNumber": "APK10R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-apk10n4h2",
      "modelNumber": "APK10N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-apk10n3h2-3",
      "modelNumber": "APK10N3H2-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-apk10n3h2",
      "modelNumber": "APK10N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-apk10n3h1-3",
      "modelNumber": "APK10N3H1-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-apk1042",
      "modelNumber": "APK10*4*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ephoca-apk1032",
      "modelNumber": "APK10*3*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ape10r4h2",
      "modelNumber": "APE10R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ape10r3h2",
      "modelNumber": "APE10R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avm19r3h2",
      "modelNumber": "AVM19R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avm19r4h2",
      "modelNumber": "AVM19R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk19r3h2",
      "modelNumber": "AVK19R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk19r4h2",
      "modelNumber": "AVK19R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk19n4h2",
      "modelNumber": "AVK19N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk19n3h2",
      "modelNumber": "AVK19N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avm19n3h2",
      "modelNumber": "AVM19N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avm19n4h2",
      "modelNumber": "AVM19N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp19r4h2",
      "modelNumber": "AVP19R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp19r4h1",
      "modelNumber": "AVP19R4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axw19r3h2",
      "modelNumber": "AXW19R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axw19n3h2",
      "modelNumber": "AXW19N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axt19r3h2",
      "modelNumber": "AXT19R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axt19n3h2",
      "modelNumber": "AXT19N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp19r3h2",
      "modelNumber": "AVP19R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp19r3h1",
      "modelNumber": "AVP19R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axy19n3h2",
      "modelNumber": "AXY19N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axy19r3h2",
      "modelNumber": "AXY19R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axm19n3h2",
      "modelNumber": "AXM19N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axm19r3h2",
      "modelNumber": "AXM19R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp19n4h1",
      "modelNumber": "AVP19N4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp19n4h2",
      "modelNumber": "AVP19N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp19n3h1",
      "modelNumber": "AVP19N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp19n3h2",
      "modelNumber": "AVP19N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axp19r3h2",
      "modelNumber": "AXP19R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-axp19n3h2",
      "modelNumber": "AXP19N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk09r3h2",
      "modelNumber": "AVK09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk09r4h2",
      "modelNumber": "AVK09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk09r3h1",
      "modelNumber": "AVK09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk09n4h2",
      "modelNumber": "AVK09N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avl09n3h1",
      "modelNumber": "AVL09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avl09n3h2",
      "modelNumber": "AVL09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avv09n3h2",
      "modelNumber": "AVV09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avv09n3h1",
      "modelNumber": "AVV09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avv09r3h2",
      "modelNumber": "AVV09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avv09r3h1",
      "modelNumber": "AVV09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avu09r3h1",
      "modelNumber": "AVU09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avu09r3h2",
      "modelNumber": "AVU09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avu09n3h1",
      "modelNumber": "AVU09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avu09n3h2",
      "modelNumber": "AVU09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp09r4h2",
      "modelNumber": "AVP09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp09r4h1",
      "modelNumber": "AVP09R4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp09r3h2",
      "modelNumber": "AVP09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp09r3h1",
      "modelNumber": "AVP09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp09n3h2",
      "modelNumber": "AVP09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp09n3h1",
      "modelNumber": "AVP09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp09n4h2",
      "modelNumber": "AVP09N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avp09n4h1",
      "modelNumber": "AVP09N4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ave09n3h2",
      "modelNumber": "AVE09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ave09n3h1",
      "modelNumber": "AVE09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ave09r4h2",
      "modelNumber": "AVE09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ave09r3h2",
      "modelNumber": "AVE09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avl09r3h2",
      "modelNumber": "AVL09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avl09r3h1",
      "modelNumber": "AVL09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ave09r3h1",
      "modelNumber": "AVE09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ave09n4h2",
      "modelNumber": "AVE09N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk09n3h2",
      "modelNumber": "AVK09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-avk09n3h1",
      "modelNumber": "AVK09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adp09r4h2",
      "modelNumber": "ADP09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adp09r4h1",
      "modelNumber": "ADP09R4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adp09r3h2",
      "modelNumber": "ADP09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adp09r3h1",
      "modelNumber": "ADP09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adu09r3h2",
      "modelNumber": "ADU09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adu09r3h1",
      "modelNumber": "ADU09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ade09n3h2",
      "modelNumber": "ADE09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ade09n3h1",
      "modelNumber": "ADE09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-acv09r3h2",
      "modelNumber": "ACV09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-acv09r3h1",
      "modelNumber": "ACV09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-acv09n3h2",
      "modelNumber": "ACV09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-acv09n3h1",
      "modelNumber": "ACV09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adk09r4h2",
      "modelNumber": "ADK09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adk09r3h2",
      "modelNumber": "ADK09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adk09r3h1",
      "modelNumber": "ADK09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adk09n4h2",
      "modelNumber": "ADK09N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adk09n3h2",
      "modelNumber": "ADK09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adk09n3h1",
      "modelNumber": "ADK09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ade09r4h2",
      "modelNumber": "ADE09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ade09r3h2",
      "modelNumber": "ADE09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ade09r3h1",
      "modelNumber": "ADE09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ade09n4h2",
      "modelNumber": "ADE09N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-acu09n3h2",
      "modelNumber": "ACU09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-acu09n3h1",
      "modelNumber": "ACU09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ack09r3h2",
      "modelNumber": "ACK09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ack09r3h1",
      "modelNumber": "ACK09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ack09n3h2",
      "modelNumber": "ACK09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ack09n3h1",
      "modelNumber": "ACK09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-acu09r3h2",
      "modelNumber": "ACU09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-acu09r3h1",
      "modelNumber": "ACU09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adp09n4h2",
      "modelNumber": "ADP09N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adp09n4h1",
      "modelNumber": "ADP09N4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adl09n3h1",
      "modelNumber": "ADL09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adl09n3h2",
      "modelNumber": "ADL09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adl09r3h1",
      "modelNumber": "ADL09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adl09r3h2",
      "modelNumber": "ADL09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adp09n3h1",
      "modelNumber": "ADP09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adp09n3h2",
      "modelNumber": "ADP09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-asp09r3h2",
      "modelNumber": "ASP09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-asp09r3h1",
      "modelNumber": "ASP09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-asp09n4h2",
      "modelNumber": "ASP09N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-asp09n4h1",
      "modelNumber": "ASP09N4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-asp09n3h2",
      "modelNumber": "ASP09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-asp09n3h1",
      "modelNumber": "ASP09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ask09r3h2",
      "modelNumber": "ASK09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ask09r4h2",
      "modelNumber": "ASK09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-asp09r4h1",
      "modelNumber": "ASP09R4H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-asp09r4h2",
      "modelNumber": "ASP09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ase09n4h2",
      "modelNumber": "ASE09N4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ase09r3h2",
      "modelNumber": "ASE09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adv09r3h1",
      "modelNumber": "ADV09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adv09r3h2",
      "modelNumber": "ADV09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adv09n3h1",
      "modelNumber": "ADV09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adv09n3h2",
      "modelNumber": "ADV09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adu09n3h2",
      "modelNumber": "ADU09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-adu09n3h1",
      "modelNumber": "ADU09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ase09n3h1",
      "modelNumber": "ASE09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ase09n3h2",
      "modelNumber": "ASE09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ase09r4h2",
      "modelNumber": "ASE09R4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ask09h4h2",
      "modelNumber": "ASK09H4H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ask09n3h1",
      "modelNumber": "ASK09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-ask09n3h2",
      "modelNumber": "ASK09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afe09r3h2",
      "modelNumber": "AFE09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afe09r3h1",
      "modelNumber": "AFE09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afe09n3h1",
      "modelNumber": "AFE09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afe09n3h2",
      "modelNumber": "AFE09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afk09r3h1",
      "modelNumber": "AFK09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afk09r3h2",
      "modelNumber": "AFK09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afp09n3h1",
      "modelNumber": "AFP09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afp09n3h2",
      "modelNumber": "AFP09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afp09r3h2",
      "modelNumber": "AFP09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afp09r3h1",
      "modelNumber": "AFP09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afk09n3h1",
      "modelNumber": "AFK09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-afk09n3h2",
      "modelNumber": "AFK09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awe0942",
      "modelNumber": "AWE09*4*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awe0932",
      "modelNumber": "AWE09*3*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awe09n3h1-3sp",
      "modelNumber": "AWE09N3H1-3SP",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awe09n3h1-3",
      "modelNumber": "AWE09N3H1-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awe09n3h2-3",
      "modelNumber": "AWE09N3H2-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awe09n3h2",
      "modelNumber": "AWE09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awe09n3h2-3sp",
      "modelNumber": "AWE09N3H2-3SP",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awe09r3h2",
      "modelNumber": "AWE09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awk09n3h1-3",
      "modelNumber": "AWK09N3H1-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awk09n3h1-3sp",
      "modelNumber": "AWK09N3H1-3SP",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awk0932",
      "modelNumber": "AWK09*3*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awk0942",
      "modelNumber": "AWK09*4*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp09n3h1-3",
      "modelNumber": "AWP09N3H1-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp09n3h1",
      "modelNumber": "AWP09N3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp0942",
      "modelNumber": "AWP09*4*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp0941",
      "modelNumber": "AWP09*4*1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp0932",
      "modelNumber": "AWP09*3*2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp0931",
      "modelNumber": "AWP09*3*1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awk09r3h2",
      "modelNumber": "AWK09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awk09n3h2-3sp",
      "modelNumber": "AWK09N3H2-3SP",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awk09n3h2-3",
      "modelNumber": "AWK09N3H2-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awk09n3h2",
      "modelNumber": "AWK09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp09r3h1",
      "modelNumber": "AWP09R3H1",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp09r3h2",
      "modelNumber": "AWP09R3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp09n3h2",
      "modelNumber": "AWP09N3H2",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp09n3h1-3sp",
      "modelNumber": "AWP09N3H1-3SP",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp09n3h2-3",
      "modelNumber": "AWP09N3H2-3",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ephoca-awp09n3h2-3sp",
      "modelNumber": "AWP09N3H2-3SP",
      "brandId": "brand-ephoca",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-18760",
      "modelNumber": "IU-18760",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18761",
      "modelNumber": "IU-18761",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18758",
      "modelNumber": "IU-18758",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18759",
      "modelNumber": "IU-18759",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18763",
      "modelNumber": "IU-18763",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18762",
      "modelNumber": "IU-18762",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18787",
      "modelNumber": "IU-18787",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18786",
      "modelNumber": "IU-18786",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18785",
      "modelNumber": "IU-18785",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18784",
      "modelNumber": "IU-18784",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18783",
      "modelNumber": "IU-18783",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18782",
      "modelNumber": "IU-18782",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18781",
      "modelNumber": "IU-18781",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18780",
      "modelNumber": "IU-18780",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18779",
      "modelNumber": "IU-18779",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18778",
      "modelNumber": "IU-18778",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18777",
      "modelNumber": "IU-18777",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18776",
      "modelNumber": "IU-18776",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18775",
      "modelNumber": "IU-18775",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18774",
      "modelNumber": "IU-18774",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18773",
      "modelNumber": "IU-18773",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18772",
      "modelNumber": "IU-18772",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18771",
      "modelNumber": "IU-18771",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18770",
      "modelNumber": "IU-18770",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18769",
      "modelNumber": "IU-18769",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18768",
      "modelNumber": "IU-18768",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18767",
      "modelNumber": "IU-18767",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18766",
      "modelNumber": "IU-18766",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18765",
      "modelNumber": "IU-18765",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18764",
      "modelNumber": "IU-18764",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18828",
      "modelNumber": "IU-18828",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18829",
      "modelNumber": "IU-18829",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18820",
      "modelNumber": "IU-18820",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18821",
      "modelNumber": "IU-18821",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18819",
      "modelNumber": "IU-18819",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18818",
      "modelNumber": "IU-18818",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18826",
      "modelNumber": "IU-18826",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18827",
      "modelNumber": "IU-18827",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18845",
      "modelNumber": "IU-18845",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18844",
      "modelNumber": "IU-18844",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18889",
      "modelNumber": "IU-18889",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18888",
      "modelNumber": "IU-18888",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18887",
      "modelNumber": "IU-18887",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18886",
      "modelNumber": "IU-18886",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18843",
      "modelNumber": "IU-18843",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18842",
      "modelNumber": "IU-18842",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18890",
      "modelNumber": "IU-18890",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18891",
      "modelNumber": "IU-18891",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18882",
      "modelNumber": "IU-18882",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18883",
      "modelNumber": "IU-18883",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18840",
      "modelNumber": "IU-18840",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18841",
      "modelNumber": "IU-18841",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18838",
      "modelNumber": "IU-18838",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18839",
      "modelNumber": "IU-18839",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18885",
      "modelNumber": "IU-18885",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18884",
      "modelNumber": "IU-18884",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18816",
      "modelNumber": "IU-18816",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18817",
      "modelNumber": "IU-18817",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18815",
      "modelNumber": "IU-18815",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18814",
      "modelNumber": "IU-18814",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18822",
      "modelNumber": "IU-18822",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18823",
      "modelNumber": "IU-18823",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18851",
      "modelNumber": "IU-18851",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18850",
      "modelNumber": "IU-18850",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18853",
      "modelNumber": "IU-18853",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18852",
      "modelNumber": "IU-18852",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18848",
      "modelNumber": "IU-18848",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18849",
      "modelNumber": "IU-18849",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18846",
      "modelNumber": "IU-18846",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18847",
      "modelNumber": "IU-18847",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18837",
      "modelNumber": "IU-18837",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18836",
      "modelNumber": "IU-18836",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18835",
      "modelNumber": "IU-18835",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18834",
      "modelNumber": "IU-18834",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18831",
      "modelNumber": "IU-18831",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18830",
      "modelNumber": "IU-18830",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18833",
      "modelNumber": "IU-18833",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18832",
      "modelNumber": "IU-18832",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18807",
      "modelNumber": "IU-18807",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18806",
      "modelNumber": "IU-18806",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18811",
      "modelNumber": "IU-18811",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18810",
      "modelNumber": "IU-18810",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18825",
      "modelNumber": "IU-18825",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18824",
      "modelNumber": "IU-18824",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18809",
      "modelNumber": "IU-18809",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18808",
      "modelNumber": "IU-18808",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18813",
      "modelNumber": "IU-18813",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18812",
      "modelNumber": "IU-18812",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18737",
      "modelNumber": "IU-18737",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18736",
      "modelNumber": "IU-18736",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18735",
      "modelNumber": "IU-18735",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18734",
      "modelNumber": "IU-18734",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18741",
      "modelNumber": "IU-18741",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18740",
      "modelNumber": "IU-18740",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18715",
      "modelNumber": "IU-18715",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18714",
      "modelNumber": "IU-18714",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18713",
      "modelNumber": "IU-18713",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18712",
      "modelNumber": "IU-18712",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18711",
      "modelNumber": "IU-18711",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18710",
      "modelNumber": "IU-18710",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18725",
      "modelNumber": "IU-18725",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18724",
      "modelNumber": "IU-18724",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18723",
      "modelNumber": "IU-18723",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18722",
      "modelNumber": "IU-18722",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18721",
      "modelNumber": "IU-18721",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18720",
      "modelNumber": "IU-18720",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18719",
      "modelNumber": "IU-18719",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18718",
      "modelNumber": "IU-18718",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18717",
      "modelNumber": "IU-18717",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18716",
      "modelNumber": "IU-18716",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18707",
      "modelNumber": "IU-18707",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18706",
      "modelNumber": "IU-18706",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18705",
      "modelNumber": "IU-18705",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18704",
      "modelNumber": "IU-18704",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18703",
      "modelNumber": "IU-18703",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18702",
      "modelNumber": "IU-18702",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18709",
      "modelNumber": "IU-18709",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18708",
      "modelNumber": "IU-18708",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18733",
      "modelNumber": "IU-18733",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18732",
      "modelNumber": "IU-18732",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18726",
      "modelNumber": "IU-18726",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18727",
      "modelNumber": "IU-18727",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18728",
      "modelNumber": "IU-18728",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18729",
      "modelNumber": "IU-18729",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18730",
      "modelNumber": "IU-18730",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18731",
      "modelNumber": "IU-18731",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18803",
      "modelNumber": "IU-18803",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18802",
      "modelNumber": "IU-18802",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18801",
      "modelNumber": "IU-18801",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18800",
      "modelNumber": "IU-18800",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18799",
      "modelNumber": "IU-18799",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18798",
      "modelNumber": "IU-18798",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18796",
      "modelNumber": "IU-18796",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18797",
      "modelNumber": "IU-18797",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18804",
      "modelNumber": "IU-18804",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18805",
      "modelNumber": "IU-18805",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18790",
      "modelNumber": "IU-18790",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18791",
      "modelNumber": "IU-18791",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18744",
      "modelNumber": "IU-18744",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18745",
      "modelNumber": "IU-18745",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18742",
      "modelNumber": "IU-18742",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18743",
      "modelNumber": "IU-18743",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18739",
      "modelNumber": "IU-18739",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18738",
      "modelNumber": "IU-18738",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18788",
      "modelNumber": "IU-18788",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18789",
      "modelNumber": "IU-18789",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18792",
      "modelNumber": "IU-18792",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18793",
      "modelNumber": "IU-18793",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18794",
      "modelNumber": "IU-18794",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18795",
      "modelNumber": "IU-18795",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18749",
      "modelNumber": "IU-18749",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18748",
      "modelNumber": "IU-18748",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18746",
      "modelNumber": "IU-18746",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18747",
      "modelNumber": "IU-18747",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18752",
      "modelNumber": "IU-18752",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18753",
      "modelNumber": "IU-18753",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18754",
      "modelNumber": "IU-18754",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18755",
      "modelNumber": "IU-18755",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18757",
      "modelNumber": "IU-18757",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18756",
      "modelNumber": "IU-18756",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18750",
      "modelNumber": "IU-18750",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18751",
      "modelNumber": "IU-18751",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18855",
      "modelNumber": "IU-18855",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18854",
      "modelNumber": "IU-18854",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18857",
      "modelNumber": "IU-18857",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18856",
      "modelNumber": "IU-18856",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18859",
      "modelNumber": "IU-18859",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18858",
      "modelNumber": "IU-18858",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18860",
      "modelNumber": "IU-18860",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18861",
      "modelNumber": "IU-18861",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18864",
      "modelNumber": "IU-18864",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18865",
      "modelNumber": "IU-18865",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18862",
      "modelNumber": "IU-18862",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18863",
      "modelNumber": "IU-18863",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18875",
      "modelNumber": "IU-18875",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18874",
      "modelNumber": "IU-18874",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18873",
      "modelNumber": "IU-18873",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18872",
      "modelNumber": "IU-18872",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18871",
      "modelNumber": "IU-18871",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18870",
      "modelNumber": "IU-18870",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18869",
      "modelNumber": "IU-18869",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18868",
      "modelNumber": "IU-18868",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18867",
      "modelNumber": "IU-18867",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18866",
      "modelNumber": "IU-18866",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18880",
      "modelNumber": "IU-18880",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18881",
      "modelNumber": "IU-18881",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18877",
      "modelNumber": "IU-18877",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18876",
      "modelNumber": "IU-18876",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18878",
      "modelNumber": "IU-18878",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18879",
      "modelNumber": "IU-18879",
      "brandId": "brand-ephoca",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-ephoca-ape10n3h1-3-iu-18760",
      "slug": "ephoca-ape10n3h1-3-iu-18760",
      "modelId": "model-ephoca-ape10n3h1-3",
      "outdoorUnitId": "ou-ephoca-ape10n3h1-3",
      "indoorUnitId": "iu-iu-18760",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ape10n3h2-iu-18761",
      "slug": "ephoca-ape10n3h2-iu-18761",
      "modelId": "model-ephoca-ape10n3h2",
      "outdoorUnitId": "ou-ephoca-ape10n3h2",
      "indoorUnitId": "iu-iu-18761",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ape1032-iu-18758",
      "slug": "ephoca-ape1032-iu-18758",
      "modelId": "model-ephoca-ape1032",
      "outdoorUnitId": "ou-ephoca-ape1032",
      "indoorUnitId": "iu-iu-18758",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ape1042-iu-18759",
      "slug": "ephoca-ape1042-iu-18759",
      "modelId": "model-ephoca-ape1042",
      "outdoorUnitId": "ou-ephoca-ape1042",
      "indoorUnitId": "iu-iu-18759",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ape10n4h2-iu-18763",
      "slug": "ephoca-ape10n4h2-iu-18763",
      "modelId": "model-ephoca-ape10n4h2",
      "outdoorUnitId": "ou-ephoca-ape10n4h2",
      "indoorUnitId": "iu-iu-18763",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ape10n3h2-3-iu-18762",
      "slug": "ephoca-ape10n3h2-3-iu-18762",
      "modelId": "model-ephoca-ape10n3h2-3",
      "outdoorUnitId": "ou-ephoca-ape10n3h2-3",
      "indoorUnitId": "iu-iu-18762",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10r4h2-iu-18787",
      "slug": "ephoca-app10r4h2-iu-18787",
      "modelId": "model-ephoca-app10r4h2",
      "outdoorUnitId": "ou-ephoca-app10r4h2",
      "indoorUnitId": "iu-iu-18787",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10r4h1-iu-18786",
      "slug": "ephoca-app10r4h1-iu-18786",
      "modelId": "model-ephoca-app10r4h1",
      "outdoorUnitId": "ou-ephoca-app10r4h1",
      "indoorUnitId": "iu-iu-18786",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10r3h2-iu-18785",
      "slug": "ephoca-app10r3h2-iu-18785",
      "modelId": "model-ephoca-app10r3h2",
      "outdoorUnitId": "ou-ephoca-app10r3h2",
      "indoorUnitId": "iu-iu-18785",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10r3h1-iu-18784",
      "slug": "ephoca-app10r3h1-iu-18784",
      "modelId": "model-ephoca-app10r3h1",
      "outdoorUnitId": "ou-ephoca-app10r3h1",
      "indoorUnitId": "iu-iu-18784",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10n4h2-iu-18783",
      "slug": "ephoca-app10n4h2-iu-18783",
      "modelId": "model-ephoca-app10n4h2",
      "outdoorUnitId": "ou-ephoca-app10n4h2",
      "indoorUnitId": "iu-iu-18783",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10n4h1-iu-18782",
      "slug": "ephoca-app10n4h1-iu-18782",
      "modelId": "model-ephoca-app10n4h1",
      "outdoorUnitId": "ou-ephoca-app10n4h1",
      "indoorUnitId": "iu-iu-18782",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10n3h2-3-iu-18781",
      "slug": "ephoca-app10n3h2-3-iu-18781",
      "modelId": "model-ephoca-app10n3h2-3",
      "outdoorUnitId": "ou-ephoca-app10n3h2-3",
      "indoorUnitId": "iu-iu-18781",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10n3h2-iu-18780",
      "slug": "ephoca-app10n3h2-iu-18780",
      "modelId": "model-ephoca-app10n3h2",
      "outdoorUnitId": "ou-ephoca-app10n3h2",
      "indoorUnitId": "iu-iu-18780",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10n3h1-3-iu-18779",
      "slug": "ephoca-app10n3h1-3-iu-18779",
      "modelId": "model-ephoca-app10n3h1-3",
      "outdoorUnitId": "ou-ephoca-app10n3h1-3",
      "indoorUnitId": "iu-iu-18779",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app10n3h1-iu-18778",
      "slug": "ephoca-app10n3h1-iu-18778",
      "modelId": "model-ephoca-app10n3h1",
      "outdoorUnitId": "ou-ephoca-app10n3h1",
      "indoorUnitId": "iu-iu-18778",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app1042-iu-18777",
      "slug": "ephoca-app1042-iu-18777",
      "modelId": "model-ephoca-app1042",
      "outdoorUnitId": "ou-ephoca-app1042",
      "indoorUnitId": "iu-iu-18777",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app1041-iu-18776",
      "slug": "ephoca-app1041-iu-18776",
      "modelId": "model-ephoca-app1041",
      "outdoorUnitId": "ou-ephoca-app1041",
      "indoorUnitId": "iu-iu-18776",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app1032-iu-18775",
      "slug": "ephoca-app1032-iu-18775",
      "modelId": "model-ephoca-app1032",
      "outdoorUnitId": "ou-ephoca-app1032",
      "indoorUnitId": "iu-iu-18775",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-app1031-iu-18774",
      "slug": "ephoca-app1031-iu-18774",
      "modelId": "model-ephoca-app1031",
      "outdoorUnitId": "ou-ephoca-app1031",
      "indoorUnitId": "iu-iu-18774",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-apk10r4h2-iu-18773",
      "slug": "ephoca-apk10r4h2-iu-18773",
      "modelId": "model-ephoca-apk10r4h2",
      "outdoorUnitId": "ou-ephoca-apk10r4h2",
      "indoorUnitId": "iu-iu-18773",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-apk10r3h2-iu-18772",
      "slug": "ephoca-apk10r3h2-iu-18772",
      "modelId": "model-ephoca-apk10r3h2",
      "outdoorUnitId": "ou-ephoca-apk10r3h2",
      "indoorUnitId": "iu-iu-18772",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-apk10n4h2-iu-18771",
      "slug": "ephoca-apk10n4h2-iu-18771",
      "modelId": "model-ephoca-apk10n4h2",
      "outdoorUnitId": "ou-ephoca-apk10n4h2",
      "indoorUnitId": "iu-iu-18771",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-apk10n3h2-3-iu-18770",
      "slug": "ephoca-apk10n3h2-3-iu-18770",
      "modelId": "model-ephoca-apk10n3h2-3",
      "outdoorUnitId": "ou-ephoca-apk10n3h2-3",
      "indoorUnitId": "iu-iu-18770",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-apk10n3h2-iu-18769",
      "slug": "ephoca-apk10n3h2-iu-18769",
      "modelId": "model-ephoca-apk10n3h2",
      "outdoorUnitId": "ou-ephoca-apk10n3h2",
      "indoorUnitId": "iu-iu-18769",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-apk10n3h1-3-iu-18768",
      "slug": "ephoca-apk10n3h1-3-iu-18768",
      "modelId": "model-ephoca-apk10n3h1-3",
      "outdoorUnitId": "ou-ephoca-apk10n3h1-3",
      "indoorUnitId": "iu-iu-18768",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-apk1042-iu-18767",
      "slug": "ephoca-apk1042-iu-18767",
      "modelId": "model-ephoca-apk1042",
      "outdoorUnitId": "ou-ephoca-apk1042",
      "indoorUnitId": "iu-iu-18767",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-apk1032-iu-18766",
      "slug": "ephoca-apk1032-iu-18766",
      "modelId": "model-ephoca-apk1032",
      "outdoorUnitId": "ou-ephoca-apk1032",
      "indoorUnitId": "iu-iu-18766",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ape10r4h2-iu-18765",
      "slug": "ephoca-ape10r4h2-iu-18765",
      "modelId": "model-ephoca-ape10r4h2",
      "outdoorUnitId": "ou-ephoca-ape10r4h2",
      "indoorUnitId": "iu-iu-18765",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ape10r3h2-iu-18764",
      "slug": "ephoca-ape10r3h2-iu-18764",
      "modelId": "model-ephoca-ape10r3h2",
      "outdoorUnitId": "ou-ephoca-ape10r3h2",
      "indoorUnitId": "iu-iu-18764",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.75,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avm19r3h2-iu-18828",
      "slug": "ephoca-avm19r3h2-iu-18828",
      "modelId": "model-ephoca-avm19r3h2",
      "outdoorUnitId": "ou-ephoca-avm19r3h2",
      "indoorUnitId": "iu-iu-18828",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avm19r4h2-iu-18829",
      "slug": "ephoca-avm19r4h2-iu-18829",
      "modelId": "model-ephoca-avm19r4h2",
      "outdoorUnitId": "ou-ephoca-avm19r4h2",
      "indoorUnitId": "iu-iu-18829",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk19r3h2-iu-18820",
      "slug": "ephoca-avk19r3h2-iu-18820",
      "modelId": "model-ephoca-avk19r3h2",
      "outdoorUnitId": "ou-ephoca-avk19r3h2",
      "indoorUnitId": "iu-iu-18820",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk19r4h2-iu-18821",
      "slug": "ephoca-avk19r4h2-iu-18821",
      "modelId": "model-ephoca-avk19r4h2",
      "outdoorUnitId": "ou-ephoca-avk19r4h2",
      "indoorUnitId": "iu-iu-18821",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk19n4h2-iu-18819",
      "slug": "ephoca-avk19n4h2-iu-18819",
      "modelId": "model-ephoca-avk19n4h2",
      "outdoorUnitId": "ou-ephoca-avk19n4h2",
      "indoorUnitId": "iu-iu-18819",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk19n3h2-iu-18818",
      "slug": "ephoca-avk19n3h2-iu-18818",
      "modelId": "model-ephoca-avk19n3h2",
      "outdoorUnitId": "ou-ephoca-avk19n3h2",
      "indoorUnitId": "iu-iu-18818",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avm19n3h2-iu-18826",
      "slug": "ephoca-avm19n3h2-iu-18826",
      "modelId": "model-ephoca-avm19n3h2",
      "outdoorUnitId": "ou-ephoca-avm19n3h2",
      "indoorUnitId": "iu-iu-18826",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avm19n4h2-iu-18827",
      "slug": "ephoca-avm19n4h2-iu-18827",
      "modelId": "model-ephoca-avm19n4h2",
      "outdoorUnitId": "ou-ephoca-avm19n4h2",
      "indoorUnitId": "iu-iu-18827",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp19r4h2-iu-18845",
      "slug": "ephoca-avp19r4h2-iu-18845",
      "modelId": "model-ephoca-avp19r4h2",
      "outdoorUnitId": "ou-ephoca-avp19r4h2",
      "indoorUnitId": "iu-iu-18845",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp19r4h1-iu-18844",
      "slug": "ephoca-avp19r4h1-iu-18844",
      "modelId": "model-ephoca-avp19r4h1",
      "outdoorUnitId": "ou-ephoca-avp19r4h1",
      "indoorUnitId": "iu-iu-18844",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axw19r3h2-iu-18889",
      "slug": "ephoca-axw19r3h2-iu-18889",
      "modelId": "model-ephoca-axw19r3h2",
      "outdoorUnitId": "ou-ephoca-axw19r3h2",
      "indoorUnitId": "iu-iu-18889",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axw19n3h2-iu-18888",
      "slug": "ephoca-axw19n3h2-iu-18888",
      "modelId": "model-ephoca-axw19n3h2",
      "outdoorUnitId": "ou-ephoca-axw19n3h2",
      "indoorUnitId": "iu-iu-18888",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axt19r3h2-iu-18887",
      "slug": "ephoca-axt19r3h2-iu-18887",
      "modelId": "model-ephoca-axt19r3h2",
      "outdoorUnitId": "ou-ephoca-axt19r3h2",
      "indoorUnitId": "iu-iu-18887",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axt19n3h2-iu-18886",
      "slug": "ephoca-axt19n3h2-iu-18886",
      "modelId": "model-ephoca-axt19n3h2",
      "outdoorUnitId": "ou-ephoca-axt19n3h2",
      "indoorUnitId": "iu-iu-18886",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp19r3h2-iu-18843",
      "slug": "ephoca-avp19r3h2-iu-18843",
      "modelId": "model-ephoca-avp19r3h2",
      "outdoorUnitId": "ou-ephoca-avp19r3h2",
      "indoorUnitId": "iu-iu-18843",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp19r3h1-iu-18842",
      "slug": "ephoca-avp19r3h1-iu-18842",
      "modelId": "model-ephoca-avp19r3h1",
      "outdoorUnitId": "ou-ephoca-avp19r3h1",
      "indoorUnitId": "iu-iu-18842",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axy19n3h2-iu-18890",
      "slug": "ephoca-axy19n3h2-iu-18890",
      "modelId": "model-ephoca-axy19n3h2",
      "outdoorUnitId": "ou-ephoca-axy19n3h2",
      "indoorUnitId": "iu-iu-18890",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axy19r3h2-iu-18891",
      "slug": "ephoca-axy19r3h2-iu-18891",
      "modelId": "model-ephoca-axy19r3h2",
      "outdoorUnitId": "ou-ephoca-axy19r3h2",
      "indoorUnitId": "iu-iu-18891",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axm19n3h2-iu-18882",
      "slug": "ephoca-axm19n3h2-iu-18882",
      "modelId": "model-ephoca-axm19n3h2",
      "outdoorUnitId": "ou-ephoca-axm19n3h2",
      "indoorUnitId": "iu-iu-18882",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axm19r3h2-iu-18883",
      "slug": "ephoca-axm19r3h2-iu-18883",
      "modelId": "model-ephoca-axm19r3h2",
      "outdoorUnitId": "ou-ephoca-axm19r3h2",
      "indoorUnitId": "iu-iu-18883",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp19n4h1-iu-18840",
      "slug": "ephoca-avp19n4h1-iu-18840",
      "modelId": "model-ephoca-avp19n4h1",
      "outdoorUnitId": "ou-ephoca-avp19n4h1",
      "indoorUnitId": "iu-iu-18840",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp19n4h2-iu-18841",
      "slug": "ephoca-avp19n4h2-iu-18841",
      "modelId": "model-ephoca-avp19n4h2",
      "outdoorUnitId": "ou-ephoca-avp19n4h2",
      "indoorUnitId": "iu-iu-18841",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp19n3h1-iu-18838",
      "slug": "ephoca-avp19n3h1-iu-18838",
      "modelId": "model-ephoca-avp19n3h1",
      "outdoorUnitId": "ou-ephoca-avp19n3h1",
      "indoorUnitId": "iu-iu-18838",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp19n3h2-iu-18839",
      "slug": "ephoca-avp19n3h2-iu-18839",
      "modelId": "model-ephoca-avp19n3h2",
      "outdoorUnitId": "ou-ephoca-avp19n3h2",
      "indoorUnitId": "iu-iu-18839",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axp19r3h2-iu-18885",
      "slug": "ephoca-axp19r3h2-iu-18885",
      "modelId": "model-ephoca-axp19r3h2",
      "outdoorUnitId": "ou-ephoca-axp19r3h2",
      "indoorUnitId": "iu-iu-18885",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-axp19n3h2-iu-18884",
      "slug": "ephoca-axp19n3h2-iu-18884",
      "modelId": "model-ephoca-axp19n3h2",
      "outdoorUnitId": "ou-ephoca-axp19n3h2",
      "indoorUnitId": "iu-iu-18884",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk09r3h2-iu-18816",
      "slug": "ephoca-avk09r3h2-iu-18816",
      "modelId": "model-ephoca-avk09r3h2",
      "outdoorUnitId": "ou-ephoca-avk09r3h2",
      "indoorUnitId": "iu-iu-18816",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk09r4h2-iu-18817",
      "slug": "ephoca-avk09r4h2-iu-18817",
      "modelId": "model-ephoca-avk09r4h2",
      "outdoorUnitId": "ou-ephoca-avk09r4h2",
      "indoorUnitId": "iu-iu-18817",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk09r3h1-iu-18815",
      "slug": "ephoca-avk09r3h1-iu-18815",
      "modelId": "model-ephoca-avk09r3h1",
      "outdoorUnitId": "ou-ephoca-avk09r3h1",
      "indoorUnitId": "iu-iu-18815",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk09n4h2-iu-18814",
      "slug": "ephoca-avk09n4h2-iu-18814",
      "modelId": "model-ephoca-avk09n4h2",
      "outdoorUnitId": "ou-ephoca-avk09n4h2",
      "indoorUnitId": "iu-iu-18814",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avl09n3h1-iu-18822",
      "slug": "ephoca-avl09n3h1-iu-18822",
      "modelId": "model-ephoca-avl09n3h1",
      "outdoorUnitId": "ou-ephoca-avl09n3h1",
      "indoorUnitId": "iu-iu-18822",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avl09n3h2-iu-18823",
      "slug": "ephoca-avl09n3h2-iu-18823",
      "modelId": "model-ephoca-avl09n3h2",
      "outdoorUnitId": "ou-ephoca-avl09n3h2",
      "indoorUnitId": "iu-iu-18823",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avv09n3h2-iu-18851",
      "slug": "ephoca-avv09n3h2-iu-18851",
      "modelId": "model-ephoca-avv09n3h2",
      "outdoorUnitId": "ou-ephoca-avv09n3h2",
      "indoorUnitId": "iu-iu-18851",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avv09n3h1-iu-18850",
      "slug": "ephoca-avv09n3h1-iu-18850",
      "modelId": "model-ephoca-avv09n3h1",
      "outdoorUnitId": "ou-ephoca-avv09n3h1",
      "indoorUnitId": "iu-iu-18850",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avv09r3h2-iu-18853",
      "slug": "ephoca-avv09r3h2-iu-18853",
      "modelId": "model-ephoca-avv09r3h2",
      "outdoorUnitId": "ou-ephoca-avv09r3h2",
      "indoorUnitId": "iu-iu-18853",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avv09r3h1-iu-18852",
      "slug": "ephoca-avv09r3h1-iu-18852",
      "modelId": "model-ephoca-avv09r3h1",
      "outdoorUnitId": "ou-ephoca-avv09r3h1",
      "indoorUnitId": "iu-iu-18852",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avu09r3h1-iu-18848",
      "slug": "ephoca-avu09r3h1-iu-18848",
      "modelId": "model-ephoca-avu09r3h1",
      "outdoorUnitId": "ou-ephoca-avu09r3h1",
      "indoorUnitId": "iu-iu-18848",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avu09r3h2-iu-18849",
      "slug": "ephoca-avu09r3h2-iu-18849",
      "modelId": "model-ephoca-avu09r3h2",
      "outdoorUnitId": "ou-ephoca-avu09r3h2",
      "indoorUnitId": "iu-iu-18849",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avu09n3h1-iu-18846",
      "slug": "ephoca-avu09n3h1-iu-18846",
      "modelId": "model-ephoca-avu09n3h1",
      "outdoorUnitId": "ou-ephoca-avu09n3h1",
      "indoorUnitId": "iu-iu-18846",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avu09n3h2-iu-18847",
      "slug": "ephoca-avu09n3h2-iu-18847",
      "modelId": "model-ephoca-avu09n3h2",
      "outdoorUnitId": "ou-ephoca-avu09n3h2",
      "indoorUnitId": "iu-iu-18847",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp09r4h2-iu-18837",
      "slug": "ephoca-avp09r4h2-iu-18837",
      "modelId": "model-ephoca-avp09r4h2",
      "outdoorUnitId": "ou-ephoca-avp09r4h2",
      "indoorUnitId": "iu-iu-18837",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp09r4h1-iu-18836",
      "slug": "ephoca-avp09r4h1-iu-18836",
      "modelId": "model-ephoca-avp09r4h1",
      "outdoorUnitId": "ou-ephoca-avp09r4h1",
      "indoorUnitId": "iu-iu-18836",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp09r3h2-iu-18835",
      "slug": "ephoca-avp09r3h2-iu-18835",
      "modelId": "model-ephoca-avp09r3h2",
      "outdoorUnitId": "ou-ephoca-avp09r3h2",
      "indoorUnitId": "iu-iu-18835",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp09r3h1-iu-18834",
      "slug": "ephoca-avp09r3h1-iu-18834",
      "modelId": "model-ephoca-avp09r3h1",
      "outdoorUnitId": "ou-ephoca-avp09r3h1",
      "indoorUnitId": "iu-iu-18834",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp09n3h2-iu-18831",
      "slug": "ephoca-avp09n3h2-iu-18831",
      "modelId": "model-ephoca-avp09n3h2",
      "outdoorUnitId": "ou-ephoca-avp09n3h2",
      "indoorUnitId": "iu-iu-18831",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp09n3h1-iu-18830",
      "slug": "ephoca-avp09n3h1-iu-18830",
      "modelId": "model-ephoca-avp09n3h1",
      "outdoorUnitId": "ou-ephoca-avp09n3h1",
      "indoorUnitId": "iu-iu-18830",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp09n4h2-iu-18833",
      "slug": "ephoca-avp09n4h2-iu-18833",
      "modelId": "model-ephoca-avp09n4h2",
      "outdoorUnitId": "ou-ephoca-avp09n4h2",
      "indoorUnitId": "iu-iu-18833",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avp09n4h1-iu-18832",
      "slug": "ephoca-avp09n4h1-iu-18832",
      "modelId": "model-ephoca-avp09n4h1",
      "outdoorUnitId": "ou-ephoca-avp09n4h1",
      "indoorUnitId": "iu-iu-18832",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ave09n3h2-iu-18807",
      "slug": "ephoca-ave09n3h2-iu-18807",
      "modelId": "model-ephoca-ave09n3h2",
      "outdoorUnitId": "ou-ephoca-ave09n3h2",
      "indoorUnitId": "iu-iu-18807",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ave09n3h1-iu-18806",
      "slug": "ephoca-ave09n3h1-iu-18806",
      "modelId": "model-ephoca-ave09n3h1",
      "outdoorUnitId": "ou-ephoca-ave09n3h1",
      "indoorUnitId": "iu-iu-18806",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ave09r4h2-iu-18811",
      "slug": "ephoca-ave09r4h2-iu-18811",
      "modelId": "model-ephoca-ave09r4h2",
      "outdoorUnitId": "ou-ephoca-ave09r4h2",
      "indoorUnitId": "iu-iu-18811",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ave09r3h2-iu-18810",
      "slug": "ephoca-ave09r3h2-iu-18810",
      "modelId": "model-ephoca-ave09r3h2",
      "outdoorUnitId": "ou-ephoca-ave09r3h2",
      "indoorUnitId": "iu-iu-18810",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avl09r3h2-iu-18825",
      "slug": "ephoca-avl09r3h2-iu-18825",
      "modelId": "model-ephoca-avl09r3h2",
      "outdoorUnitId": "ou-ephoca-avl09r3h2",
      "indoorUnitId": "iu-iu-18825",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avl09r3h1-iu-18824",
      "slug": "ephoca-avl09r3h1-iu-18824",
      "modelId": "model-ephoca-avl09r3h1",
      "outdoorUnitId": "ou-ephoca-avl09r3h1",
      "indoorUnitId": "iu-iu-18824",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ave09r3h1-iu-18809",
      "slug": "ephoca-ave09r3h1-iu-18809",
      "modelId": "model-ephoca-ave09r3h1",
      "outdoorUnitId": "ou-ephoca-ave09r3h1",
      "indoorUnitId": "iu-iu-18809",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ave09n4h2-iu-18808",
      "slug": "ephoca-ave09n4h2-iu-18808",
      "modelId": "model-ephoca-ave09n4h2",
      "outdoorUnitId": "ou-ephoca-ave09n4h2",
      "indoorUnitId": "iu-iu-18808",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk09n3h2-iu-18813",
      "slug": "ephoca-avk09n3h2-iu-18813",
      "modelId": "model-ephoca-avk09n3h2",
      "outdoorUnitId": "ou-ephoca-avk09n3h2",
      "indoorUnitId": "iu-iu-18813",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-avk09n3h1-iu-18812",
      "slug": "ephoca-avk09n3h1-iu-18812",
      "modelId": "model-ephoca-avk09n3h1",
      "outdoorUnitId": "ou-ephoca-avk09n3h1",
      "indoorUnitId": "iu-iu-18812",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.35,
      "hspf2": 9.85,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adp09r4h2-iu-18737",
      "slug": "ephoca-adp09r4h2-iu-18737",
      "modelId": "model-ephoca-adp09r4h2",
      "outdoorUnitId": "ou-ephoca-adp09r4h2",
      "indoorUnitId": "iu-iu-18737",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adp09r4h1-iu-18736",
      "slug": "ephoca-adp09r4h1-iu-18736",
      "modelId": "model-ephoca-adp09r4h1",
      "outdoorUnitId": "ou-ephoca-adp09r4h1",
      "indoorUnitId": "iu-iu-18736",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adp09r3h2-iu-18735",
      "slug": "ephoca-adp09r3h2-iu-18735",
      "modelId": "model-ephoca-adp09r3h2",
      "outdoorUnitId": "ou-ephoca-adp09r3h2",
      "indoorUnitId": "iu-iu-18735",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adp09r3h1-iu-18734",
      "slug": "ephoca-adp09r3h1-iu-18734",
      "modelId": "model-ephoca-adp09r3h1",
      "outdoorUnitId": "ou-ephoca-adp09r3h1",
      "indoorUnitId": "iu-iu-18734",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adu09r3h2-iu-18741",
      "slug": "ephoca-adu09r3h2-iu-18741",
      "modelId": "model-ephoca-adu09r3h2",
      "outdoorUnitId": "ou-ephoca-adu09r3h2",
      "indoorUnitId": "iu-iu-18741",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adu09r3h1-iu-18740",
      "slug": "ephoca-adu09r3h1-iu-18740",
      "modelId": "model-ephoca-adu09r3h1",
      "outdoorUnitId": "ou-ephoca-adu09r3h1",
      "indoorUnitId": "iu-iu-18740",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ade09n3h2-iu-18715",
      "slug": "ephoca-ade09n3h2-iu-18715",
      "modelId": "model-ephoca-ade09n3h2",
      "outdoorUnitId": "ou-ephoca-ade09n3h2",
      "indoorUnitId": "iu-iu-18715",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ade09n3h1-iu-18714",
      "slug": "ephoca-ade09n3h1-iu-18714",
      "modelId": "model-ephoca-ade09n3h1",
      "outdoorUnitId": "ou-ephoca-ade09n3h1",
      "indoorUnitId": "iu-iu-18714",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-acv09r3h2-iu-18713",
      "slug": "ephoca-acv09r3h2-iu-18713",
      "modelId": "model-ephoca-acv09r3h2",
      "outdoorUnitId": "ou-ephoca-acv09r3h2",
      "indoorUnitId": "iu-iu-18713",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-acv09r3h1-iu-18712",
      "slug": "ephoca-acv09r3h1-iu-18712",
      "modelId": "model-ephoca-acv09r3h1",
      "outdoorUnitId": "ou-ephoca-acv09r3h1",
      "indoorUnitId": "iu-iu-18712",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-acv09n3h2-iu-18711",
      "slug": "ephoca-acv09n3h2-iu-18711",
      "modelId": "model-ephoca-acv09n3h2",
      "outdoorUnitId": "ou-ephoca-acv09n3h2",
      "indoorUnitId": "iu-iu-18711",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-acv09n3h1-iu-18710",
      "slug": "ephoca-acv09n3h1-iu-18710",
      "modelId": "model-ephoca-acv09n3h1",
      "outdoorUnitId": "ou-ephoca-acv09n3h1",
      "indoorUnitId": "iu-iu-18710",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adk09r4h2-iu-18725",
      "slug": "ephoca-adk09r4h2-iu-18725",
      "modelId": "model-ephoca-adk09r4h2",
      "outdoorUnitId": "ou-ephoca-adk09r4h2",
      "indoorUnitId": "iu-iu-18725",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adk09r3h2-iu-18724",
      "slug": "ephoca-adk09r3h2-iu-18724",
      "modelId": "model-ephoca-adk09r3h2",
      "outdoorUnitId": "ou-ephoca-adk09r3h2",
      "indoorUnitId": "iu-iu-18724",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adk09r3h1-iu-18723",
      "slug": "ephoca-adk09r3h1-iu-18723",
      "modelId": "model-ephoca-adk09r3h1",
      "outdoorUnitId": "ou-ephoca-adk09r3h1",
      "indoorUnitId": "iu-iu-18723",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adk09n4h2-iu-18722",
      "slug": "ephoca-adk09n4h2-iu-18722",
      "modelId": "model-ephoca-adk09n4h2",
      "outdoorUnitId": "ou-ephoca-adk09n4h2",
      "indoorUnitId": "iu-iu-18722",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adk09n3h2-iu-18721",
      "slug": "ephoca-adk09n3h2-iu-18721",
      "modelId": "model-ephoca-adk09n3h2",
      "outdoorUnitId": "ou-ephoca-adk09n3h2",
      "indoorUnitId": "iu-iu-18721",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adk09n3h1-iu-18720",
      "slug": "ephoca-adk09n3h1-iu-18720",
      "modelId": "model-ephoca-adk09n3h1",
      "outdoorUnitId": "ou-ephoca-adk09n3h1",
      "indoorUnitId": "iu-iu-18720",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ade09r4h2-iu-18719",
      "slug": "ephoca-ade09r4h2-iu-18719",
      "modelId": "model-ephoca-ade09r4h2",
      "outdoorUnitId": "ou-ephoca-ade09r4h2",
      "indoorUnitId": "iu-iu-18719",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ade09r3h2-iu-18718",
      "slug": "ephoca-ade09r3h2-iu-18718",
      "modelId": "model-ephoca-ade09r3h2",
      "outdoorUnitId": "ou-ephoca-ade09r3h2",
      "indoorUnitId": "iu-iu-18718",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ade09r3h1-iu-18717",
      "slug": "ephoca-ade09r3h1-iu-18717",
      "modelId": "model-ephoca-ade09r3h1",
      "outdoorUnitId": "ou-ephoca-ade09r3h1",
      "indoorUnitId": "iu-iu-18717",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ade09n4h2-iu-18716",
      "slug": "ephoca-ade09n4h2-iu-18716",
      "modelId": "model-ephoca-ade09n4h2",
      "outdoorUnitId": "ou-ephoca-ade09n4h2",
      "indoorUnitId": "iu-iu-18716",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-acu09n3h2-iu-18707",
      "slug": "ephoca-acu09n3h2-iu-18707",
      "modelId": "model-ephoca-acu09n3h2",
      "outdoorUnitId": "ou-ephoca-acu09n3h2",
      "indoorUnitId": "iu-iu-18707",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-acu09n3h1-iu-18706",
      "slug": "ephoca-acu09n3h1-iu-18706",
      "modelId": "model-ephoca-acu09n3h1",
      "outdoorUnitId": "ou-ephoca-acu09n3h1",
      "indoorUnitId": "iu-iu-18706",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ack09r3h2-iu-18705",
      "slug": "ephoca-ack09r3h2-iu-18705",
      "modelId": "model-ephoca-ack09r3h2",
      "outdoorUnitId": "ou-ephoca-ack09r3h2",
      "indoorUnitId": "iu-iu-18705",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ack09r3h1-iu-18704",
      "slug": "ephoca-ack09r3h1-iu-18704",
      "modelId": "model-ephoca-ack09r3h1",
      "outdoorUnitId": "ou-ephoca-ack09r3h1",
      "indoorUnitId": "iu-iu-18704",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ack09n3h2-iu-18703",
      "slug": "ephoca-ack09n3h2-iu-18703",
      "modelId": "model-ephoca-ack09n3h2",
      "outdoorUnitId": "ou-ephoca-ack09n3h2",
      "indoorUnitId": "iu-iu-18703",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ack09n3h1-iu-18702",
      "slug": "ephoca-ack09n3h1-iu-18702",
      "modelId": "model-ephoca-ack09n3h1",
      "outdoorUnitId": "ou-ephoca-ack09n3h1",
      "indoorUnitId": "iu-iu-18702",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-acu09r3h2-iu-18709",
      "slug": "ephoca-acu09r3h2-iu-18709",
      "modelId": "model-ephoca-acu09r3h2",
      "outdoorUnitId": "ou-ephoca-acu09r3h2",
      "indoorUnitId": "iu-iu-18709",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-acu09r3h1-iu-18708",
      "slug": "ephoca-acu09r3h1-iu-18708",
      "modelId": "model-ephoca-acu09r3h1",
      "outdoorUnitId": "ou-ephoca-acu09r3h1",
      "indoorUnitId": "iu-iu-18708",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adp09n4h2-iu-18733",
      "slug": "ephoca-adp09n4h2-iu-18733",
      "modelId": "model-ephoca-adp09n4h2",
      "outdoorUnitId": "ou-ephoca-adp09n4h2",
      "indoorUnitId": "iu-iu-18733",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adp09n4h1-iu-18732",
      "slug": "ephoca-adp09n4h1-iu-18732",
      "modelId": "model-ephoca-adp09n4h1",
      "outdoorUnitId": "ou-ephoca-adp09n4h1",
      "indoorUnitId": "iu-iu-18732",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adl09n3h1-iu-18726",
      "slug": "ephoca-adl09n3h1-iu-18726",
      "modelId": "model-ephoca-adl09n3h1",
      "outdoorUnitId": "ou-ephoca-adl09n3h1",
      "indoorUnitId": "iu-iu-18726",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adl09n3h2-iu-18727",
      "slug": "ephoca-adl09n3h2-iu-18727",
      "modelId": "model-ephoca-adl09n3h2",
      "outdoorUnitId": "ou-ephoca-adl09n3h2",
      "indoorUnitId": "iu-iu-18727",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adl09r3h1-iu-18728",
      "slug": "ephoca-adl09r3h1-iu-18728",
      "modelId": "model-ephoca-adl09r3h1",
      "outdoorUnitId": "ou-ephoca-adl09r3h1",
      "indoorUnitId": "iu-iu-18728",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adl09r3h2-iu-18729",
      "slug": "ephoca-adl09r3h2-iu-18729",
      "modelId": "model-ephoca-adl09r3h2",
      "outdoorUnitId": "ou-ephoca-adl09r3h2",
      "indoorUnitId": "iu-iu-18729",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adp09n3h1-iu-18730",
      "slug": "ephoca-adp09n3h1-iu-18730",
      "modelId": "model-ephoca-adp09n3h1",
      "outdoorUnitId": "ou-ephoca-adp09n3h1",
      "indoorUnitId": "iu-iu-18730",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adp09n3h2-iu-18731",
      "slug": "ephoca-adp09n3h2-iu-18731",
      "modelId": "model-ephoca-adp09n3h2",
      "outdoorUnitId": "ou-ephoca-adp09n3h2",
      "indoorUnitId": "iu-iu-18731",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-asp09r3h2-iu-18803",
      "slug": "ephoca-asp09r3h2-iu-18803",
      "modelId": "model-ephoca-asp09r3h2",
      "outdoorUnitId": "ou-ephoca-asp09r3h2",
      "indoorUnitId": "iu-iu-18803",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-asp09r3h1-iu-18802",
      "slug": "ephoca-asp09r3h1-iu-18802",
      "modelId": "model-ephoca-asp09r3h1",
      "outdoorUnitId": "ou-ephoca-asp09r3h1",
      "indoorUnitId": "iu-iu-18802",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-asp09n4h2-iu-18801",
      "slug": "ephoca-asp09n4h2-iu-18801",
      "modelId": "model-ephoca-asp09n4h2",
      "outdoorUnitId": "ou-ephoca-asp09n4h2",
      "indoorUnitId": "iu-iu-18801",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-asp09n4h1-iu-18800",
      "slug": "ephoca-asp09n4h1-iu-18800",
      "modelId": "model-ephoca-asp09n4h1",
      "outdoorUnitId": "ou-ephoca-asp09n4h1",
      "indoorUnitId": "iu-iu-18800",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-asp09n3h2-iu-18799",
      "slug": "ephoca-asp09n3h2-iu-18799",
      "modelId": "model-ephoca-asp09n3h2",
      "outdoorUnitId": "ou-ephoca-asp09n3h2",
      "indoorUnitId": "iu-iu-18799",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-asp09n3h1-iu-18798",
      "slug": "ephoca-asp09n3h1-iu-18798",
      "modelId": "model-ephoca-asp09n3h1",
      "outdoorUnitId": "ou-ephoca-asp09n3h1",
      "indoorUnitId": "iu-iu-18798",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ask09r3h2-iu-18796",
      "slug": "ephoca-ask09r3h2-iu-18796",
      "modelId": "model-ephoca-ask09r3h2",
      "outdoorUnitId": "ou-ephoca-ask09r3h2",
      "indoorUnitId": "iu-iu-18796",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ask09r4h2-iu-18797",
      "slug": "ephoca-ask09r4h2-iu-18797",
      "modelId": "model-ephoca-ask09r4h2",
      "outdoorUnitId": "ou-ephoca-ask09r4h2",
      "indoorUnitId": "iu-iu-18797",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-asp09r4h1-iu-18804",
      "slug": "ephoca-asp09r4h1-iu-18804",
      "modelId": "model-ephoca-asp09r4h1",
      "outdoorUnitId": "ou-ephoca-asp09r4h1",
      "indoorUnitId": "iu-iu-18804",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-asp09r4h2-iu-18805",
      "slug": "ephoca-asp09r4h2-iu-18805",
      "modelId": "model-ephoca-asp09r4h2",
      "outdoorUnitId": "ou-ephoca-asp09r4h2",
      "indoorUnitId": "iu-iu-18805",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ase09n4h2-iu-18790",
      "slug": "ephoca-ase09n4h2-iu-18790",
      "modelId": "model-ephoca-ase09n4h2",
      "outdoorUnitId": "ou-ephoca-ase09n4h2",
      "indoorUnitId": "iu-iu-18790",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ase09r3h2-iu-18791",
      "slug": "ephoca-ase09r3h2-iu-18791",
      "modelId": "model-ephoca-ase09r3h2",
      "outdoorUnitId": "ou-ephoca-ase09r3h2",
      "indoorUnitId": "iu-iu-18791",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adv09r3h1-iu-18744",
      "slug": "ephoca-adv09r3h1-iu-18744",
      "modelId": "model-ephoca-adv09r3h1",
      "outdoorUnitId": "ou-ephoca-adv09r3h1",
      "indoorUnitId": "iu-iu-18744",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adv09r3h2-iu-18745",
      "slug": "ephoca-adv09r3h2-iu-18745",
      "modelId": "model-ephoca-adv09r3h2",
      "outdoorUnitId": "ou-ephoca-adv09r3h2",
      "indoorUnitId": "iu-iu-18745",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adv09n3h1-iu-18742",
      "slug": "ephoca-adv09n3h1-iu-18742",
      "modelId": "model-ephoca-adv09n3h1",
      "outdoorUnitId": "ou-ephoca-adv09n3h1",
      "indoorUnitId": "iu-iu-18742",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adv09n3h2-iu-18743",
      "slug": "ephoca-adv09n3h2-iu-18743",
      "modelId": "model-ephoca-adv09n3h2",
      "outdoorUnitId": "ou-ephoca-adv09n3h2",
      "indoorUnitId": "iu-iu-18743",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adu09n3h2-iu-18739",
      "slug": "ephoca-adu09n3h2-iu-18739",
      "modelId": "model-ephoca-adu09n3h2",
      "outdoorUnitId": "ou-ephoca-adu09n3h2",
      "indoorUnitId": "iu-iu-18739",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-adu09n3h1-iu-18738",
      "slug": "ephoca-adu09n3h1-iu-18738",
      "modelId": "model-ephoca-adu09n3h1",
      "outdoorUnitId": "ou-ephoca-adu09n3h1",
      "indoorUnitId": "iu-iu-18738",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ase09n3h1-iu-18788",
      "slug": "ephoca-ase09n3h1-iu-18788",
      "modelId": "model-ephoca-ase09n3h1",
      "outdoorUnitId": "ou-ephoca-ase09n3h1",
      "indoorUnitId": "iu-iu-18788",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ase09n3h2-iu-18789",
      "slug": "ephoca-ase09n3h2-iu-18789",
      "modelId": "model-ephoca-ase09n3h2",
      "outdoorUnitId": "ou-ephoca-ase09n3h2",
      "indoorUnitId": "iu-iu-18789",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ase09r4h2-iu-18792",
      "slug": "ephoca-ase09r4h2-iu-18792",
      "modelId": "model-ephoca-ase09r4h2",
      "outdoorUnitId": "ou-ephoca-ase09r4h2",
      "indoorUnitId": "iu-iu-18792",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ask09h4h2-iu-18793",
      "slug": "ephoca-ask09h4h2-iu-18793",
      "modelId": "model-ephoca-ask09h4h2",
      "outdoorUnitId": "ou-ephoca-ask09h4h2",
      "indoorUnitId": "iu-iu-18793",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ask09n3h1-iu-18794",
      "slug": "ephoca-ask09n3h1-iu-18794",
      "modelId": "model-ephoca-ask09n3h1",
      "outdoorUnitId": "ou-ephoca-ask09n3h1",
      "indoorUnitId": "iu-iu-18794",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-ask09n3h2-iu-18795",
      "slug": "ephoca-ask09n3h2-iu-18795",
      "modelId": "model-ephoca-ask09n3h2",
      "outdoorUnitId": "ou-ephoca-ask09n3h2",
      "indoorUnitId": "iu-iu-18795",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afe09r3h2-iu-18749",
      "slug": "ephoca-afe09r3h2-iu-18749",
      "modelId": "model-ephoca-afe09r3h2",
      "outdoorUnitId": "ou-ephoca-afe09r3h2",
      "indoorUnitId": "iu-iu-18749",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afe09r3h1-iu-18748",
      "slug": "ephoca-afe09r3h1-iu-18748",
      "modelId": "model-ephoca-afe09r3h1",
      "outdoorUnitId": "ou-ephoca-afe09r3h1",
      "indoorUnitId": "iu-iu-18748",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afe09n3h1-iu-18746",
      "slug": "ephoca-afe09n3h1-iu-18746",
      "modelId": "model-ephoca-afe09n3h1",
      "outdoorUnitId": "ou-ephoca-afe09n3h1",
      "indoorUnitId": "iu-iu-18746",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afe09n3h2-iu-18747",
      "slug": "ephoca-afe09n3h2-iu-18747",
      "modelId": "model-ephoca-afe09n3h2",
      "outdoorUnitId": "ou-ephoca-afe09n3h2",
      "indoorUnitId": "iu-iu-18747",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afk09r3h1-iu-18752",
      "slug": "ephoca-afk09r3h1-iu-18752",
      "modelId": "model-ephoca-afk09r3h1",
      "outdoorUnitId": "ou-ephoca-afk09r3h1",
      "indoorUnitId": "iu-iu-18752",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afk09r3h2-iu-18753",
      "slug": "ephoca-afk09r3h2-iu-18753",
      "modelId": "model-ephoca-afk09r3h2",
      "outdoorUnitId": "ou-ephoca-afk09r3h2",
      "indoorUnitId": "iu-iu-18753",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afp09n3h1-iu-18754",
      "slug": "ephoca-afp09n3h1-iu-18754",
      "modelId": "model-ephoca-afp09n3h1",
      "outdoorUnitId": "ou-ephoca-afp09n3h1",
      "indoorUnitId": "iu-iu-18754",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afp09n3h2-iu-18755",
      "slug": "ephoca-afp09n3h2-iu-18755",
      "modelId": "model-ephoca-afp09n3h2",
      "outdoorUnitId": "ou-ephoca-afp09n3h2",
      "indoorUnitId": "iu-iu-18755",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afp09r3h2-iu-18757",
      "slug": "ephoca-afp09r3h2-iu-18757",
      "modelId": "model-ephoca-afp09r3h2",
      "outdoorUnitId": "ou-ephoca-afp09r3h2",
      "indoorUnitId": "iu-iu-18757",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afp09r3h1-iu-18756",
      "slug": "ephoca-afp09r3h1-iu-18756",
      "modelId": "model-ephoca-afp09r3h1",
      "outdoorUnitId": "ou-ephoca-afp09r3h1",
      "indoorUnitId": "iu-iu-18756",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afk09n3h1-iu-18750",
      "slug": "ephoca-afk09n3h1-iu-18750",
      "modelId": "model-ephoca-afk09n3h1",
      "outdoorUnitId": "ou-ephoca-afk09n3h1",
      "indoorUnitId": "iu-iu-18750",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-afk09n3h2-iu-18751",
      "slug": "ephoca-afk09n3h2-iu-18751",
      "modelId": "model-ephoca-afk09n3h2",
      "outdoorUnitId": "ou-ephoca-afk09n3h2",
      "indoorUnitId": "iu-iu-18751",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awe0942-iu-18855",
      "slug": "ephoca-awe0942-iu-18855",
      "modelId": "model-ephoca-awe0942",
      "outdoorUnitId": "ou-ephoca-awe0942",
      "indoorUnitId": "iu-iu-18855",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awe0932-iu-18854",
      "slug": "ephoca-awe0932-iu-18854",
      "modelId": "model-ephoca-awe0932",
      "outdoorUnitId": "ou-ephoca-awe0932",
      "indoorUnitId": "iu-iu-18854",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awe09n3h1-3sp-iu-18857",
      "slug": "ephoca-awe09n3h1-3sp-iu-18857",
      "modelId": "model-ephoca-awe09n3h1-3sp",
      "outdoorUnitId": "ou-ephoca-awe09n3h1-3sp",
      "indoorUnitId": "iu-iu-18857",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awe09n3h1-3-iu-18856",
      "slug": "ephoca-awe09n3h1-3-iu-18856",
      "modelId": "model-ephoca-awe09n3h1-3",
      "outdoorUnitId": "ou-ephoca-awe09n3h1-3",
      "indoorUnitId": "iu-iu-18856",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awe09n3h2-3-iu-18859",
      "slug": "ephoca-awe09n3h2-3-iu-18859",
      "modelId": "model-ephoca-awe09n3h2-3",
      "outdoorUnitId": "ou-ephoca-awe09n3h2-3",
      "indoorUnitId": "iu-iu-18859",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awe09n3h2-iu-18858",
      "slug": "ephoca-awe09n3h2-iu-18858",
      "modelId": "model-ephoca-awe09n3h2",
      "outdoorUnitId": "ou-ephoca-awe09n3h2",
      "indoorUnitId": "iu-iu-18858",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awe09n3h2-3sp-iu-18860",
      "slug": "ephoca-awe09n3h2-3sp-iu-18860",
      "modelId": "model-ephoca-awe09n3h2-3sp",
      "outdoorUnitId": "ou-ephoca-awe09n3h2-3sp",
      "indoorUnitId": "iu-iu-18860",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awe09r3h2-iu-18861",
      "slug": "ephoca-awe09r3h2-iu-18861",
      "modelId": "model-ephoca-awe09r3h2",
      "outdoorUnitId": "ou-ephoca-awe09r3h2",
      "indoorUnitId": "iu-iu-18861",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awk09n3h1-3-iu-18864",
      "slug": "ephoca-awk09n3h1-3-iu-18864",
      "modelId": "model-ephoca-awk09n3h1-3",
      "outdoorUnitId": "ou-ephoca-awk09n3h1-3",
      "indoorUnitId": "iu-iu-18864",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awk09n3h1-3sp-iu-18865",
      "slug": "ephoca-awk09n3h1-3sp-iu-18865",
      "modelId": "model-ephoca-awk09n3h1-3sp",
      "outdoorUnitId": "ou-ephoca-awk09n3h1-3sp",
      "indoorUnitId": "iu-iu-18865",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awk0932-iu-18862",
      "slug": "ephoca-awk0932-iu-18862",
      "modelId": "model-ephoca-awk0932",
      "outdoorUnitId": "ou-ephoca-awk0932",
      "indoorUnitId": "iu-iu-18862",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awk0942-iu-18863",
      "slug": "ephoca-awk0942-iu-18863",
      "modelId": "model-ephoca-awk0942",
      "outdoorUnitId": "ou-ephoca-awk0942",
      "indoorUnitId": "iu-iu-18863",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp09n3h1-3-iu-18875",
      "slug": "ephoca-awp09n3h1-3-iu-18875",
      "modelId": "model-ephoca-awp09n3h1-3",
      "outdoorUnitId": "ou-ephoca-awp09n3h1-3",
      "indoorUnitId": "iu-iu-18875",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp09n3h1-iu-18874",
      "slug": "ephoca-awp09n3h1-iu-18874",
      "modelId": "model-ephoca-awp09n3h1",
      "outdoorUnitId": "ou-ephoca-awp09n3h1",
      "indoorUnitId": "iu-iu-18874",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp0942-iu-18873",
      "slug": "ephoca-awp0942-iu-18873",
      "modelId": "model-ephoca-awp0942",
      "outdoorUnitId": "ou-ephoca-awp0942",
      "indoorUnitId": "iu-iu-18873",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp0941-iu-18872",
      "slug": "ephoca-awp0941-iu-18872",
      "modelId": "model-ephoca-awp0941",
      "outdoorUnitId": "ou-ephoca-awp0941",
      "indoorUnitId": "iu-iu-18872",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp0932-iu-18871",
      "slug": "ephoca-awp0932-iu-18871",
      "modelId": "model-ephoca-awp0932",
      "outdoorUnitId": "ou-ephoca-awp0932",
      "indoorUnitId": "iu-iu-18871",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp0931-iu-18870",
      "slug": "ephoca-awp0931-iu-18870",
      "modelId": "model-ephoca-awp0931",
      "outdoorUnitId": "ou-ephoca-awp0931",
      "indoorUnitId": "iu-iu-18870",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awk09r3h2-iu-18869",
      "slug": "ephoca-awk09r3h2-iu-18869",
      "modelId": "model-ephoca-awk09r3h2",
      "outdoorUnitId": "ou-ephoca-awk09r3h2",
      "indoorUnitId": "iu-iu-18869",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awk09n3h2-3sp-iu-18868",
      "slug": "ephoca-awk09n3h2-3sp-iu-18868",
      "modelId": "model-ephoca-awk09n3h2-3sp",
      "outdoorUnitId": "ou-ephoca-awk09n3h2-3sp",
      "indoorUnitId": "iu-iu-18868",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awk09n3h2-3-iu-18867",
      "slug": "ephoca-awk09n3h2-3-iu-18867",
      "modelId": "model-ephoca-awk09n3h2-3",
      "outdoorUnitId": "ou-ephoca-awk09n3h2-3",
      "indoorUnitId": "iu-iu-18867",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awk09n3h2-iu-18866",
      "slug": "ephoca-awk09n3h2-iu-18866",
      "modelId": "model-ephoca-awk09n3h2",
      "outdoorUnitId": "ou-ephoca-awk09n3h2",
      "indoorUnitId": "iu-iu-18866",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp09r3h1-iu-18880",
      "slug": "ephoca-awp09r3h1-iu-18880",
      "modelId": "model-ephoca-awp09r3h1",
      "outdoorUnitId": "ou-ephoca-awp09r3h1",
      "indoorUnitId": "iu-iu-18880",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp09r3h2-iu-18881",
      "slug": "ephoca-awp09r3h2-iu-18881",
      "modelId": "model-ephoca-awp09r3h2",
      "outdoorUnitId": "ou-ephoca-awp09r3h2",
      "indoorUnitId": "iu-iu-18881",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp09n3h2-iu-18877",
      "slug": "ephoca-awp09n3h2-iu-18877",
      "modelId": "model-ephoca-awp09n3h2",
      "outdoorUnitId": "ou-ephoca-awp09n3h2",
      "indoorUnitId": "iu-iu-18877",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp09n3h1-3sp-iu-18876",
      "slug": "ephoca-awp09n3h1-3sp-iu-18876",
      "modelId": "model-ephoca-awp09n3h1-3sp",
      "outdoorUnitId": "ou-ephoca-awp09n3h1-3sp",
      "indoorUnitId": "iu-iu-18876",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp09n3h2-3-iu-18878",
      "slug": "ephoca-awp09n3h2-3-iu-18878",
      "modelId": "model-ephoca-awp09n3h2-3",
      "outdoorUnitId": "ou-ephoca-awp09n3h2-3",
      "indoorUnitId": "iu-iu-18878",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ephoca-awp09n3h2-3sp-iu-18879",
      "slug": "ephoca-awp09n3h2-3sp-iu-18879",
      "modelId": "model-ephoca-awp09n3h2-3sp",
      "outdoorUnitId": "ou-ephoca-awp09n3h2-3sp",
      "indoorUnitId": "iu-iu-18879",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-ephoca-epa",
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
