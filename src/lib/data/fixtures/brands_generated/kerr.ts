import type { BrandDataset } from "../../types";

export const brand_kerrDataset: BrandDataset = {
  "brand": {
    "id": "brand-kerr",
    "slug": "kerr",
    "name": "KERR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour KERR",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-kerr-epa",
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
      "id": "series-kerr-a-zkp-series",
      "slug": "kerr-a-zkp-series",
      "name": "A-ZKP Series",
      "brandId": "brand-kerr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-ZKP Series de KERR",
      "imageUrl": "/images/series/kerr-kerr-a-zkp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kerr-a-kzp-series",
      "slug": "kerr-a-kzp-series",
      "name": "A-KZP Series",
      "brandId": "brand-kerr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-KZP Series de KERR",
      "imageUrl": "/images/series/kerr-kerr-a-kzp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kerr-a-series",
      "slug": "kerr-a-series",
      "name": "A series",
      "brandId": "brand-kerr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A series de KERR",
      "imageUrl": "/images/series/kerr-kerr-a-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kerr-a-khp-series",
      "slug": "kerr-a-khp-series",
      "name": "A-KHP Series",
      "brandId": "brand-kerr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-KHP Series de KERR",
      "imageUrl": "/images/series/kerr-kerr-a-khp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kerr-a-kmh-series",
      "slug": "kerr-a-kmh-series",
      "name": "A-KMH Series",
      "brandId": "brand-kerr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-KMH Series de KERR",
      "imageUrl": "/images/series/kerr-kerr-a-kmh-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kerr-a-ksp-series",
      "slug": "kerr-a-ksp-series",
      "name": "A-KSP Series",
      "brandId": "brand-kerr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-KSP Series de KERR",
      "imageUrl": "/images/series/kerr-kerr-a-ksp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kerr-a-kcd-series",
      "slug": "kerr-a-kcd-series",
      "name": "A-KCD series",
      "brandId": "brand-kerr",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-KCD series de KERR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kerr-kxp-series",
      "slug": "kerr-kxp-series",
      "name": "KXP Series",
      "brandId": "brand-kerr",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série KXP Series de KERR",
      "imageUrl": "/images/series/kerr-kerr-kxp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-kerr-a-zkp06sa-1",
      "slug": "kerr-a-zkp06sa-1",
      "name": "KERR A-ZKP06SA-1",
      "seriesId": "series-kerr-a-zkp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-ZKP06SA-1",
      "normalizedModelNumber": "a-zkp06sa-1",
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
      "id": "model-kerr-a-kzp06sa-1",
      "slug": "kerr-a-kzp06sa-1",
      "name": "KERR A-KZP06SA-1",
      "seriesId": "series-kerr-a-kzp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KZP06SA-1",
      "normalizedModelNumber": "a-kzp06sa-1",
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
      "id": "model-kerr-a-zkp09sa-1",
      "slug": "kerr-a-zkp09sa-1",
      "name": "KERR A-ZKP09SA-1",
      "seriesId": "series-kerr-a-zkp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-ZKP09SA-1",
      "normalizedModelNumber": "a-zkp09sa-1",
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
      "id": "model-kerr-a-kzpo9sa-1",
      "slug": "kerr-a-kzpo9sa-1",
      "name": "KERR A-KZPO9SA-1",
      "seriesId": "series-kerr-a-kzp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KZPO9SA-1",
      "normalizedModelNumber": "a-kzpo9sa-1",
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
      "id": "model-kerr-a-kzp12sa-1",
      "slug": "kerr-a-kzp12sa-1",
      "name": "KERR A-KZP12SA-1",
      "seriesId": "series-kerr-a-kzp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KZP12SA-1",
      "normalizedModelNumber": "a-kzp12sa-1",
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
      "id": "model-kerr-a-zkp12sa-1",
      "slug": "kerr-a-zkp12sa-1",
      "name": "KERR A-ZKP12SA-1",
      "seriesId": "series-kerr-a-zkp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-ZKP12SA-1",
      "normalizedModelNumber": "a-zkp12sa-1",
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
      "id": "model-kerr-a-kmh09sv-1",
      "slug": "kerr-a-kmh09sv-1",
      "name": "KERR A-KMH09SV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH09SV-1",
      "normalizedModelNumber": "a-kmh09sv-1",
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
      "id": "model-kerr-a-khp09sa-1",
      "slug": "kerr-a-khp09sa-1",
      "name": "KERR A-KHP09SA-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP09SA-1",
      "normalizedModelNumber": "a-khp09sa-1",
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
      "id": "model-kerr-a-zkp15sa-1",
      "slug": "kerr-a-zkp15sa-1",
      "name": "KERR A-ZKP15SA-1",
      "seriesId": "series-kerr-a-zkp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-ZKP15SA-1",
      "normalizedModelNumber": "a-zkp15sa-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 15000,
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
      "id": "model-kerr-a-kmh06sv-1",
      "slug": "kerr-a-kmh06sv-1",
      "name": "KERR A-KMH06SV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH06SV-1",
      "normalizedModelNumber": "a-kmh06sv-1",
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
      "id": "model-kerr-a-kzp18sa-1",
      "slug": "kerr-a-kzp18sa-1",
      "name": "KERR A-KZP18SA-1",
      "seriesId": "series-kerr-a-kzp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KZP18SA-1",
      "normalizedModelNumber": "a-kzp18sa-1",
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
      "id": "model-kerr-a-zkp18sa-1",
      "slug": "kerr-a-zkp18sa-1",
      "name": "KERR A-ZKP18SA-1",
      "seriesId": "series-kerr-a-zkp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-ZKP18SA-1",
      "normalizedModelNumber": "a-zkp18sa-1",
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
      "id": "model-kerr-a-kmh12sv-1",
      "slug": "kerr-a-kmh12sv-1",
      "name": "KERR A-KMH12SV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH12SV-1",
      "normalizedModelNumber": "a-kmh12sv-1",
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
      "id": "model-kerr-a-khp06sa-1",
      "slug": "kerr-a-khp06sa-1",
      "name": "KERR A-KHP06SA-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP06SA-1",
      "normalizedModelNumber": "a-khp06sa-1",
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
      "id": "model-kerr-a-khp12sa-1",
      "slug": "kerr-a-khp12sa-1",
      "name": "KERR A-KHP12SA-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP12SA-1",
      "normalizedModelNumber": "a-khp12sa-1",
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
      "id": "model-kerr-a-khp183a-1",
      "slug": "kerr-a-khp183a-1",
      "name": "KERR A-KHP183A-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP183A-1",
      "normalizedModelNumber": "a-khp183a-1",
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
      "id": "model-kerr-a-khp284a-1",
      "slug": "kerr-a-khp284a-1",
      "name": "KERR A-KHP284A-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP284A-1",
      "normalizedModelNumber": "a-khp284a-1",
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
      "id": "model-kerr-a-kmh28tv-1",
      "slug": "kerr-a-kmh28tv-1",
      "name": "KERR A-KMH28TV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH28TV-1",
      "normalizedModelNumber": "a-kmh28tv-1",
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
      "id": "model-kerr-a-khp365a-1",
      "slug": "kerr-a-khp365a-1",
      "name": "KERR A-KHP365A-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP365A-1",
      "normalizedModelNumber": "a-khp365a-1",
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
      "id": "model-kerr-a-khp486a-1",
      "slug": "kerr-a-khp486a-1",
      "name": "KERR A-KHP486A-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP486A-1",
      "normalizedModelNumber": "a-khp486a-1",
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
      "id": "model-kerr-a-kmh36qv-1a",
      "slug": "kerr-a-kmh36qv-1a",
      "name": "KERR A-KMH36QV-1A",
      "seriesId": "series-kerr-a-kmh-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH36QV-1A",
      "normalizedModelNumber": "a-kmh36qv-1a",
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
      "id": "model-kerr-a-khp556a-1",
      "slug": "kerr-a-khp556a-1",
      "name": "KERR A-KHP556A-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP556A-1",
      "normalizedModelNumber": "a-khp556a-1",
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
      "id": "model-kerr-a-kmh36qv-1",
      "slug": "kerr-a-kmh36qv-1",
      "name": "KERR A-KMH36QV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH36QV-1",
      "normalizedModelNumber": "a-kmh36qv-1",
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
      "id": "model-kerr-a-kmh55pv-1",
      "slug": "kerr-a-kmh55pv-1",
      "name": "KERR A-KMH55PV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH55PV-1",
      "normalizedModelNumber": "a-kmh55pv-1",
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
      "id": "model-kerr-a-kmh18dv-1",
      "slug": "kerr-a-kmh18dv-1",
      "name": "KERR A-KMH18DV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH18DV-1",
      "normalizedModelNumber": "a-kmh18dv-1",
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
      "id": "model-kerr-a-kmh48pv-1",
      "slug": "kerr-a-kmh48pv-1",
      "name": "KERR A-KMH48PV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH48PV-1",
      "normalizedModelNumber": "a-kmh48pv-1",
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
      "id": "model-kerr-a-kmh18su-1",
      "slug": "kerr-a-kmh18su-1",
      "name": "KERR A-KMH18SU-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH18SU-1",
      "normalizedModelNumber": "a-kmh18su-1",
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
      "id": "model-kerr-a-kmh24sv-1",
      "slug": "kerr-a-kmh24sv-1",
      "name": "KERR A-KMH24SV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH24SV-1",
      "normalizedModelNumber": "a-kmh24sv-1",
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
      "id": "model-kerr-a-kmh24su-1",
      "slug": "kerr-a-kmh24su-1",
      "name": "KERR A-KMH24SU-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH24SU-1",
      "normalizedModelNumber": "a-kmh24su-1",
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
      "id": "model-kerr-a-kmh18sv-1",
      "slug": "kerr-a-kmh18sv-1",
      "name": "KERR A-KMH18SV-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH18SV-1",
      "normalizedModelNumber": "a-kmh18sv-1",
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
      "id": "model-kerr-a-khp18sa-1",
      "slug": "kerr-a-khp18sa-1",
      "name": "KERR A-KHP18SA-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP18SA-1",
      "normalizedModelNumber": "a-khp18sa-1",
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
      "id": "model-kerr-a-khp24sa-1",
      "slug": "kerr-a-khp24sa-1",
      "name": "KERR A-KHP24SA-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP24SA-1",
      "normalizedModelNumber": "a-khp24sa-1",
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
      "id": "model-kerr-a-zkp24sa-1",
      "slug": "kerr-a-zkp24sa-1",
      "name": "KERR A-ZKP24SA-1",
      "seriesId": "series-kerr-a-zkp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-ZKP24SA-1",
      "normalizedModelNumber": "a-zkp24sa-1",
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
      "id": "model-kerr-a-kmh18su-1a",
      "slug": "kerr-a-kmh18su-1a",
      "name": "KERR A-KMH18SU-1A",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH18SU-1A",
      "normalizedModelNumber": "a-kmh18su-1a",
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
      "id": "model-kerr-a-kmh24su-1a",
      "slug": "kerr-a-kmh24su-1a",
      "name": "KERR A-KMH24SU-1A",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH24SU-1A",
      "normalizedModelNumber": "a-kmh24su-1a",
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
      "id": "model-kerr-a-kmh30sg-1",
      "slug": "kerr-a-kmh30sg-1",
      "name": "KERR A-KMH30SG-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KMH30SG-1",
      "normalizedModelNumber": "a-kmh30sg-1",
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
      "id": "model-kerr-a-khp33sa-1",
      "slug": "kerr-a-khp33sa-1",
      "name": "KERR A-KHP33SA-1",
      "seriesId": "series-kerr-a-khp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KHP33SA-1",
      "normalizedModelNumber": "a-khp33sa-1",
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
      "id": "model-kerr-a-ksp09sa-1",
      "slug": "kerr-a-ksp09sa-1",
      "name": "KERR A-KSP09SA-1",
      "seriesId": "series-kerr-a-ksp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KSP09SA-1",
      "normalizedModelNumber": "a-ksp09sa-1",
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
      "id": "model-kerr-a-kxp18sa-1",
      "slug": "kerr-a-kxp18sa-1",
      "name": "KERR A-KXP18SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP18SA-1",
      "normalizedModelNumber": "a-kxp18sa-1",
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
      "id": "model-kerr-a-kxp24sa-1",
      "slug": "kerr-a-kxp24sa-1",
      "name": "KERR A-KXP24SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP24SA-1",
      "normalizedModelNumber": "a-kxp24sa-1",
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
      "id": "model-kerr-a-kcd18sa-1",
      "slug": "kerr-a-kcd18sa-1",
      "name": "KERR A-KCD18SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KCD18SA-1",
      "normalizedModelNumber": "a-kcd18sa-1",
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
      "id": "model-kerr-a-kxp36sa-1",
      "slug": "kerr-a-kxp36sa-1",
      "name": "KERR A-KXP36SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP36SA-1",
      "normalizedModelNumber": "a-kxp36sa-1",
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
      "id": "model-kerr-a-kcd24sa-1",
      "slug": "kerr-a-kcd24sa-1",
      "name": "KERR A-KCD24SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KCD24SA-1",
      "normalizedModelNumber": "a-kcd24sa-1",
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
      "id": "model-kerr-a-ksp24sa-1",
      "slug": "kerr-a-ksp24sa-1",
      "name": "KERR A-KSP24SA-1",
      "seriesId": "series-kerr-a-ksp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KSP24SA-1",
      "normalizedModelNumber": "a-ksp24sa-1",
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
      "id": "model-kerr-a-kxp30sa-1",
      "slug": "kerr-a-kxp30sa-1",
      "name": "KERR A-KXP30SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP30SA-1",
      "normalizedModelNumber": "a-kxp30sa-1",
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
      "id": "model-kerr-a-kxp48sa-1",
      "slug": "kerr-a-kxp48sa-1",
      "name": "KERR A-KXP48SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP48SA-1",
      "normalizedModelNumber": "a-kxp48sa-1",
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
      "id": "model-kerr-a-kcd30sa-1",
      "slug": "kerr-a-kcd30sa-1",
      "name": "KERR A-KCD30SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KCD30SA-1",
      "normalizedModelNumber": "a-kcd30sa-1",
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
      "id": "model-kerr-a-kxp18ta-1",
      "slug": "kerr-a-kxp18ta-1",
      "name": "KERR A-KXP18TA-1",
      "seriesId": "series-kerr-kxp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP18TA-1",
      "normalizedModelNumber": "a-kxp18ta-1",
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
      "id": "model-kerr-a-kcd36sa-1",
      "slug": "kerr-a-kcd36sa-1",
      "name": "KERR A-KCD36SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KCD36SA-1",
      "normalizedModelNumber": "a-kcd36sa-1",
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
      "id": "model-kerr-a-kxp24ta-1",
      "slug": "kerr-a-kxp24ta-1",
      "name": "KERR A-KXP24TA-1",
      "seriesId": "series-kerr-kxp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP24TA-1",
      "normalizedModelNumber": "a-kxp24ta-1",
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
      "id": "model-kerr-a-kxp60sa-1",
      "slug": "kerr-a-kxp60sa-1",
      "name": "KERR A-KXP60SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP60SA-1",
      "normalizedModelNumber": "a-kxp60sa-1",
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
      "id": "model-kerr-a-kxp30ta-1",
      "slug": "kerr-a-kxp30ta-1",
      "name": "KERR A-KXP30TA-1",
      "seriesId": "series-kerr-kxp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP30TA-1",
      "normalizedModelNumber": "a-kxp30ta-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 29000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-kerr-a-kxp36ta-1",
      "slug": "kerr-a-kxp36ta-1",
      "name": "KERR A-KXP36TA-1",
      "seriesId": "series-kerr-kxp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP36TA-1",
      "normalizedModelNumber": "a-kxp36ta-1",
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
      "id": "model-kerr-a-kcd48sa-1",
      "slug": "kerr-a-kcd48sa-1",
      "name": "KERR A-KCD48SA-1",
      "seriesId": "series-kerr-a-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KCD48SA-1",
      "normalizedModelNumber": "a-kcd48sa-1",
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
      "id": "model-kerr-a-kcd60sa-1",
      "slug": "kerr-a-kcd60sa-1",
      "name": "KERR A-KCD60SA-1",
      "seriesId": "series-kerr-a-kcd-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KCD60SA-1",
      "normalizedModelNumber": "a-kcd60sa-1",
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
      "id": "model-kerr-a-kxp48ta-1",
      "slug": "kerr-a-kxp48ta-1",
      "name": "KERR A-KXP48TA-1",
      "seriesId": "series-kerr-kxp-series",
      "brandId": "brand-kerr",
      "modelNumber": "A-KXP48TA-1",
      "normalizedModelNumber": "a-kxp48ta-1",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-kerr-a-zkp06sa-1",
      "modelNumber": "A-ZKP06SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kzp06sa-1",
      "modelNumber": "A-KZP06SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-zkp09sa-1",
      "modelNumber": "A-ZKP09SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kzpo9sa-1",
      "modelNumber": "A-KZPO9SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kzp12sa-1",
      "modelNumber": "A-KZP12SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-zkp12sa-1",
      "modelNumber": "A-ZKP12SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kmh09sv-1",
      "modelNumber": "A-KMH09SV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-khp09sa-1",
      "modelNumber": "A-KHP09SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-zkp15sa-1",
      "modelNumber": "A-ZKP15SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kmh06sv-1",
      "modelNumber": "A-KMH06SV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kzp18sa-1",
      "modelNumber": "A-KZP18SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-zkp18sa-1",
      "modelNumber": "A-ZKP18SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kmh12sv-1",
      "modelNumber": "A-KMH12SV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-khp06sa-1",
      "modelNumber": "A-KHP06SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-khp12sa-1",
      "modelNumber": "A-KHP12SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-khp183a-1",
      "modelNumber": "A-KHP183A-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-khp284a-1",
      "modelNumber": "A-KHP284A-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kmh28tv-1",
      "modelNumber": "A-KMH28TV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-khp365a-1",
      "modelNumber": "A-KHP365A-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-khp486a-1",
      "modelNumber": "A-KHP486A-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kmh36qv-1a",
      "modelNumber": "A-KMH36QV-1A",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-khp556a-1",
      "modelNumber": "A-KHP556A-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kmh36qv-1",
      "modelNumber": "A-KMH36QV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh55pv-1",
      "modelNumber": "A-KMH55PV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh18dv-1",
      "modelNumber": "A-KMH18DV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh48pv-1",
      "modelNumber": "A-KMH48PV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh18su-1",
      "modelNumber": "A-KMH18SU-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh24sv-1",
      "modelNumber": "A-KMH24SV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh24su-1",
      "modelNumber": "A-KMH24SU-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh18sv-1",
      "modelNumber": "A-KMH18SV-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-khp18sa-1",
      "modelNumber": "A-KHP18SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-khp24sa-1",
      "modelNumber": "A-KHP24SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-zkp24sa-1",
      "modelNumber": "A-ZKP24SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kmh18su-1a",
      "modelNumber": "A-KMH18SU-1A",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh24su-1a",
      "modelNumber": "A-KMH24SU-1A",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kmh30sg-1",
      "modelNumber": "A-KMH30SG-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-khp33sa-1",
      "modelNumber": "A-KHP33SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-ksp09sa-1",
      "modelNumber": "A-KSP09SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kxp18sa-1",
      "modelNumber": "A-KXP18SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kxp24sa-1",
      "modelNumber": "A-KXP24SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kcd18sa-1",
      "modelNumber": "A-KCD18SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kxp36sa-1",
      "modelNumber": "A-KXP36SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kcd24sa-1",
      "modelNumber": "A-KCD24SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-ksp24sa-1",
      "modelNumber": "A-KSP24SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kxp30sa-1",
      "modelNumber": "A-KXP30SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kxp48sa-1",
      "modelNumber": "A-KXP48SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kcd30sa-1",
      "modelNumber": "A-KCD30SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kxp18ta-1",
      "modelNumber": "A-KXP18TA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kcd36sa-1",
      "modelNumber": "A-KCD36SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kxp24ta-1",
      "modelNumber": "A-KXP24TA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kxp60sa-1",
      "modelNumber": "A-KXP60SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kxp30ta-1",
      "modelNumber": "A-KXP30TA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kxp36ta-1",
      "modelNumber": "A-KXP36TA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-a-kcd48sa-1",
      "modelNumber": "A-KCD48SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kcd60sa-1",
      "modelNumber": "A-KCD60SA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kerr-a-kxp48ta-1",
      "modelNumber": "A-KXP48TA-1",
      "brandId": "brand-kerr",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-b-zkp06sa-1",
      "modelNumber": "B-ZKP06SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-zkp09sa-1",
      "modelNumber": "B-ZKP09SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-zkpo9sa-1",
      "modelNumber": "B-ZKPO9SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-zkp12sa-1",
      "modelNumber": "B-ZKP12SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh09sv-1",
      "modelNumber": "B-KMH09SV-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp09sa-1",
      "modelNumber": "B-KHP09SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp09wa-1",
      "modelNumber": "B-KHP09WA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-zkp15sa-1",
      "modelNumber": "B-ZKP15SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh06sv-1",
      "modelNumber": "B-KMH06SV-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-zkp18sa-1",
      "modelNumber": "B-ZKP18SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh12sv-1",
      "modelNumber": "B-KMH12SV-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp06sa-1",
      "modelNumber": "B-KHP06SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp12sa-1",
      "modelNumber": "B-KHP12SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh09su-1",
      "modelNumber": "B-KMH09SU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp12wa-1",
      "modelNumber": "B-KHP12WA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46400",
      "modelNumber": "IU-46400",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh12fv-1",
      "modelNumber": "B-KMH12FV-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp091a-1",
      "modelNumber": "B-KHP091A-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp121a-1",
      "modelNumber": "B-KHP121A-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh12su-1",
      "modelNumber": "B-KMH12SU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh12fu-1",
      "modelNumber": "B-KMH12FU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46411",
      "modelNumber": "IU-46411",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46452",
      "modelNumber": "IU-46452",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46413",
      "modelNumber": "IU-46413",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46414",
      "modelNumber": "IU-46414",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp09ca-1",
      "modelNumber": "B-KHP09CA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp12ca-1",
      "modelNumber": "B-KHP12CA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46455",
      "modelNumber": "IU-46455",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh12cu-1",
      "modelNumber": "B-KMH12CU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46415",
      "modelNumber": "IU-46415",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46454",
      "modelNumber": "IU-46454",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp061a-1",
      "modelNumber": "B-KHP061A-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46457",
      "modelNumber": "IU-46457",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46427",
      "modelNumber": "IU-46427",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46456",
      "modelNumber": "IU-46456",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh18sv-1",
      "modelNumber": "B-KMH18SV-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh24sv-1",
      "modelNumber": "B-KMH24SV-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp18sa-1",
      "modelNumber": "B-KHP18SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp24sa-1",
      "modelNumber": "B-KHP24SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-zkp24sa-1",
      "modelNumber": "B-ZKP24SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp24ca-1",
      "modelNumber": "B-KHP24CA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp181a-1",
      "modelNumber": "B-KHP181A-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp12da-1",
      "modelNumber": "B-KHP12DA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh18uu-1",
      "modelNumber": "B-KMH18UU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-c-vmh24cv-1",
      "modelNumber": "C-VMH24CV-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh09cu-1",
      "modelNumber": "B-KMH09CU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp09da-1",
      "modelNumber": "B-KHP09DA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh24cv-1",
      "modelNumber": "B-KMH24CV-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh24uu-1",
      "modelNumber": "B-KMH24UU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp24ua-1",
      "modelNumber": "B-KHP24UA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp18ua-1",
      "modelNumber": "B-KHP18UA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh09du-1",
      "modelNumber": "B-KMH09DU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh30sg-1",
      "modelNumber": "B-KMH30SG-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh18cu-1",
      "modelNumber": "B-KMH18CU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp18wa-1",
      "modelNumber": "B-KHP18WA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp18ca-1",
      "modelNumber": "B-KHP18CA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh12du-1",
      "modelNumber": "B-KMH12DU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp33sa-1",
      "modelNumber": "B-KHP33SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh18su-1",
      "modelNumber": "B-KMH18SU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh18su-1a",
      "modelNumber": "B-KMH18SU-1A",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh24du-1",
      "modelNumber": "B-KMH24DU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-ksp09sa-1",
      "modelNumber": "B-KSP09SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kxp18sa-1",
      "modelNumber": "B-KXP18SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-khp24da-1",
      "modelNumber": "B-KHP24DA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh24su-1",
      "modelNumber": "B-KMH24SU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kmh24su-1a",
      "modelNumber": "B-KMH24SU-1A",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-khp24aa-1",
      "modelNumber": "B-KHP24AA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-khp18da-1",
      "modelNumber": "B-KHP18DA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kxp24sa-1",
      "modelNumber": "B-KXP24SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kcd18sa-1",
      "modelNumber": "B-KCD18SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-khp18aa-1",
      "modelNumber": "B-KHP18AA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd18sa-1",
      "modelNumber": "B-VCD18SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kmh18du-1",
      "modelNumber": "B-KMH18DU-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kxp36sa-1",
      "modelNumber": "B-KXP36SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd24sa-1",
      "modelNumber": "B-VCD24SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kcd24sa-1",
      "modelNumber": "B-KCD24SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-ksp24sa-1",
      "modelNumber": "B-KSP24SA-1",
      "brandId": "brand-kerr",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kxp30sa-1",
      "modelNumber": "B-KXP30SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mcd1824b1a",
      "modelNumber": "MCD18/24B1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-khp30aa-1",
      "modelNumber": "B-KHP30AA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kxp48sa-1",
      "modelNumber": "B-KXP48SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd30sa-1",
      "modelNumber": "B-VCD30SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kcd30sa-1",
      "modelNumber": "B-KCD30SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp1824a1a",
      "modelNumber": "KXP18/24A1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp1824b1a",
      "modelNumber": "KXP18/24B1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp1824b1a",
      "modelNumber": "MXP18/24B1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp1824a1a",
      "modelNumber": "MXP18/24A1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd36sa-1",
      "modelNumber": "B-VCD36SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kcd36sa-1",
      "modelNumber": "B-KCD36SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp3036c1a",
      "modelNumber": "MXP30/36C1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp2436c1a",
      "modelNumber": "KXP24/36C1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp2436b1a",
      "modelNumber": "KXP24/36B1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp4860c1a",
      "modelNumber": "MXP48/60C1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp4860c1a",
      "modelNumber": "KXP48/60C1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp3036c1a",
      "modelNumber": "KXP30/36C1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp3036b1a",
      "modelNumber": "KXP30/36B1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp3036b1a",
      "modelNumber": "MXP30/36B1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kxp60sa-1",
      "modelNumber": "B-KXP60SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kcd48sa-1",
      "modelNumber": "B-KCD48SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd48sa-1",
      "modelNumber": "B-VCD48SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mcd3036c1a",
      "modelNumber": "MCD30/36C1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mcd3036b1a",
      "modelNumber": "MCD30/36B1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp2436a1a",
      "modelNumber": "KXP24/36A1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp3036a1a",
      "modelNumber": "KXP30/36A1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kcd60sa-1",
      "modelNumber": "B-KCD60SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd60sa-1",
      "modelNumber": "B-VCD60SA-1",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp3036a1a",
      "modelNumber": "MXP30/36A1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-kxp4860d1a",
      "modelNumber": "KXP48/60D1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp4860d1a",
      "modelNumber": "MXP48/60D1A",
      "brandId": "brand-kerr",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-kerr-a-zkp06sa-1-b-zkp06sa-1",
      "slug": "kerr-a-zkp06sa-1-b-zkp06sa-1",
      "modelId": "model-kerr-a-zkp06sa-1",
      "outdoorUnitId": "ou-kerr-a-zkp06sa-1",
      "indoorUnitId": "iu-b-zkp06sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 35.0,
      "hspf2": 15.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kzp06sa-1-b-zkp06sa-1",
      "slug": "kerr-a-kzp06sa-1-b-zkp06sa-1",
      "modelId": "model-kerr-a-kzp06sa-1",
      "outdoorUnitId": "ou-kerr-a-kzp06sa-1",
      "indoorUnitId": "iu-b-zkp06sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 35.0,
      "hspf2": 15.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-zkp09sa-1-b-zkp09sa-1",
      "slug": "kerr-a-zkp09sa-1-b-zkp09sa-1",
      "modelId": "model-kerr-a-zkp09sa-1",
      "outdoorUnitId": "ou-kerr-a-zkp09sa-1",
      "indoorUnitId": "iu-b-zkp09sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kzpo9sa-1-b-zkpo9sa-1",
      "slug": "kerr-a-kzpo9sa-1-b-zkpo9sa-1",
      "modelId": "model-kerr-a-kzpo9sa-1",
      "outdoorUnitId": "ou-kerr-a-kzpo9sa-1",
      "indoorUnitId": "iu-b-zkpo9sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kzp12sa-1-b-zkp12sa-1",
      "slug": "kerr-a-kzp12sa-1-b-zkp12sa-1",
      "modelId": "model-kerr-a-kzp12sa-1",
      "outdoorUnitId": "ou-kerr-a-kzp12sa-1",
      "indoorUnitId": "iu-b-zkp12sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.4,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-zkp12sa-1-b-zkp12sa-1",
      "slug": "kerr-a-zkp12sa-1-b-zkp12sa-1",
      "modelId": "model-kerr-a-zkp12sa-1",
      "outdoorUnitId": "ou-kerr-a-zkp12sa-1",
      "indoorUnitId": "iu-b-zkp12sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.4,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh09sv-1-b-kmh09sv-1",
      "slug": "kerr-a-kmh09sv-1-b-kmh09sv-1",
      "modelId": "model-kerr-a-kmh09sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh09sv-1",
      "indoorUnitId": "iu-b-kmh09sv-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp09sa-1-b-khp09sa-1",
      "slug": "kerr-a-khp09sa-1-b-khp09sa-1",
      "modelId": "model-kerr-a-khp09sa-1",
      "outdoorUnitId": "ou-kerr-a-khp09sa-1",
      "indoorUnitId": "iu-b-khp09sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.4,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp09sa-1-b-khp09wa-1",
      "slug": "kerr-a-khp09sa-1-b-khp09wa-1",
      "modelId": "model-kerr-a-khp09sa-1",
      "outdoorUnitId": "ou-kerr-a-khp09sa-1",
      "indoorUnitId": "iu-b-khp09wa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.2,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-zkp15sa-1-b-zkp15sa-1",
      "slug": "kerr-a-zkp15sa-1-b-zkp15sa-1",
      "modelId": "model-kerr-a-zkp15sa-1",
      "outdoorUnitId": "ou-kerr-a-zkp15sa-1",
      "indoorUnitId": "iu-b-zkp15sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh06sv-1-b-kmh06sv-1",
      "slug": "kerr-a-kmh06sv-1-b-kmh06sv-1",
      "modelId": "model-kerr-a-kmh06sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh06sv-1",
      "indoorUnitId": "iu-b-kmh06sv-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 13.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kzp18sa-1-b-zkp18sa-1",
      "slug": "kerr-a-kzp18sa-1-b-zkp18sa-1",
      "modelId": "model-kerr-a-kzp18sa-1",
      "outdoorUnitId": "ou-kerr-a-kzp18sa-1",
      "indoorUnitId": "iu-b-zkp18sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 16.2,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-zkp18sa-1-b-zkp18sa-1",
      "slug": "kerr-a-zkp18sa-1-b-zkp18sa-1",
      "modelId": "model-kerr-a-zkp18sa-1",
      "outdoorUnitId": "ou-kerr-a-zkp18sa-1",
      "indoorUnitId": "iu-b-zkp18sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 16.2,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh12sv-1-b-kmh12sv-1",
      "slug": "kerr-a-kmh12sv-1-b-kmh12sv-1",
      "modelId": "model-kerr-a-kmh12sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh12sv-1",
      "indoorUnitId": "iu-b-kmh12sv-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp06sa-1-b-khp06sa-1",
      "slug": "kerr-a-khp06sa-1-b-khp06sa-1",
      "modelId": "model-kerr-a-khp06sa-1",
      "outdoorUnitId": "ou-kerr-a-khp06sa-1",
      "indoorUnitId": "iu-b-khp06sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 14.8,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp12sa-1-b-khp12sa-1",
      "slug": "kerr-a-khp12sa-1-b-khp12sa-1",
      "modelId": "model-kerr-a-khp12sa-1",
      "outdoorUnitId": "ou-kerr-a-khp12sa-1",
      "indoorUnitId": "iu-b-khp12sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.4,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh09sv-1-b-kmh09su-1",
      "slug": "kerr-a-kmh09sv-1-b-kmh09su-1",
      "modelId": "model-kerr-a-kmh09sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh09sv-1",
      "indoorUnitId": "iu-b-kmh09su-1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp12sa-1-b-khp12wa-1",
      "slug": "kerr-a-khp12sa-1-b-khp12wa-1",
      "modelId": "model-kerr-a-khp12sa-1",
      "outdoorUnitId": "ou-kerr-a-khp12sa-1",
      "indoorUnitId": "iu-b-khp12wa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp183a-1-iu-46400",
      "slug": "kerr-a-khp183a-1-iu-46400",
      "modelId": "model-kerr-a-khp183a-1",
      "outdoorUnitId": "ou-kerr-a-khp183a-1",
      "indoorUnitId": "iu-iu-46400",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh12sv-1-b-kmh12fv-1",
      "slug": "kerr-a-kmh12sv-1-b-kmh12fv-1",
      "modelId": "model-kerr-a-kmh12sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh12sv-1",
      "indoorUnitId": "iu-b-kmh12fv-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp09sa-1-b-khp091a-1",
      "slug": "kerr-a-khp09sa-1-b-khp091a-1",
      "modelId": "model-kerr-a-khp09sa-1",
      "outdoorUnitId": "ou-kerr-a-khp09sa-1",
      "indoorUnitId": "iu-b-khp091a-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp09sa-1-b-khp121a-1",
      "slug": "kerr-a-khp09sa-1-b-khp121a-1",
      "modelId": "model-kerr-a-khp09sa-1",
      "outdoorUnitId": "ou-kerr-a-khp09sa-1",
      "indoorUnitId": "iu-b-khp121a-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh12sv-1-b-kmh12su-1",
      "slug": "kerr-a-kmh12sv-1-b-kmh12su-1",
      "modelId": "model-kerr-a-kmh12sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh12sv-1",
      "indoorUnitId": "iu-b-kmh12su-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh12sv-1-b-kmh12fu-1",
      "slug": "kerr-a-kmh12sv-1-b-kmh12fu-1",
      "modelId": "model-kerr-a-kmh12sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh12sv-1",
      "indoorUnitId": "iu-b-kmh12fu-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp12sa-1-b-khp121a-1",
      "slug": "kerr-a-khp12sa-1-b-khp121a-1",
      "modelId": "model-kerr-a-khp12sa-1",
      "outdoorUnitId": "ou-kerr-a-khp12sa-1",
      "indoorUnitId": "iu-b-khp121a-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp284a-1-iu-46411",
      "slug": "kerr-a-khp284a-1-iu-46411",
      "modelId": "model-kerr-a-khp284a-1",
      "outdoorUnitId": "ou-kerr-a-khp284a-1",
      "indoorUnitId": "iu-iu-46411",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh28tv-1-iu-46452",
      "slug": "kerr-a-kmh28tv-1-iu-46452",
      "modelId": "model-kerr-a-kmh28tv-1",
      "outdoorUnitId": "ou-kerr-a-kmh28tv-1",
      "indoorUnitId": "iu-iu-46452",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp365a-1-iu-46413",
      "slug": "kerr-a-khp365a-1-iu-46413",
      "modelId": "model-kerr-a-khp365a-1",
      "outdoorUnitId": "ou-kerr-a-khp365a-1",
      "indoorUnitId": "iu-iu-46413",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp486a-1-iu-46414",
      "slug": "kerr-a-khp486a-1-iu-46414",
      "modelId": "model-kerr-a-khp486a-1",
      "outdoorUnitId": "ou-kerr-a-khp486a-1",
      "indoorUnitId": "iu-iu-46414",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp09sa-1-b-khp09ca-1",
      "slug": "kerr-a-khp09sa-1-b-khp09ca-1",
      "modelId": "model-kerr-a-khp09sa-1",
      "outdoorUnitId": "ou-kerr-a-khp09sa-1",
      "indoorUnitId": "iu-b-khp09ca-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp09sa-1-b-khp12ca-1",
      "slug": "kerr-a-khp09sa-1-b-khp12ca-1",
      "modelId": "model-kerr-a-khp09sa-1",
      "outdoorUnitId": "ou-kerr-a-khp09sa-1",
      "indoorUnitId": "iu-b-khp12ca-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh36qv-1a-iu-46455",
      "slug": "kerr-a-kmh36qv-1a-iu-46455",
      "modelId": "model-kerr-a-kmh36qv-1a",
      "outdoorUnitId": "ou-kerr-a-kmh36qv-1a",
      "indoorUnitId": "iu-iu-46455",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.4,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh12sv-1-b-kmh12cu-1",
      "slug": "kerr-a-kmh12sv-1-b-kmh12cu-1",
      "modelId": "model-kerr-a-kmh12sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh12sv-1",
      "indoorUnitId": "iu-b-kmh12cu-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp556a-1-iu-46415",
      "slug": "kerr-a-khp556a-1-iu-46415",
      "modelId": "model-kerr-a-khp556a-1",
      "outdoorUnitId": "ou-kerr-a-khp556a-1",
      "indoorUnitId": "iu-iu-46415",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh36qv-1-iu-46454",
      "slug": "kerr-a-kmh36qv-1-iu-46454",
      "modelId": "model-kerr-a-kmh36qv-1",
      "outdoorUnitId": "ou-kerr-a-kmh36qv-1",
      "indoorUnitId": "iu-iu-46454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp12sa-1-b-khp12ca-1",
      "slug": "kerr-a-khp12sa-1-b-khp12ca-1",
      "modelId": "model-kerr-a-khp12sa-1",
      "outdoorUnitId": "ou-kerr-a-khp12sa-1",
      "indoorUnitId": "iu-b-khp12ca-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp06sa-1-b-khp061a-1",
      "slug": "kerr-a-khp06sa-1-b-khp061a-1",
      "modelId": "model-kerr-a-khp06sa-1",
      "outdoorUnitId": "ou-kerr-a-khp06sa-1",
      "indoorUnitId": "iu-b-khp061a-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh55pv-1-iu-46457",
      "slug": "kerr-a-kmh55pv-1-iu-46457",
      "modelId": "model-kerr-a-kmh55pv-1",
      "outdoorUnitId": "ou-kerr-a-kmh55pv-1",
      "indoorUnitId": "iu-iu-46457",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp06sa-1-b-khp121a-1",
      "slug": "kerr-a-khp06sa-1-b-khp121a-1",
      "modelId": "model-kerr-a-khp06sa-1",
      "outdoorUnitId": "ou-kerr-a-khp06sa-1",
      "indoorUnitId": "iu-b-khp121a-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18dv-1-iu-46427",
      "slug": "kerr-a-kmh18dv-1-iu-46427",
      "modelId": "model-kerr-a-kmh18dv-1",
      "outdoorUnitId": "ou-kerr-a-kmh18dv-1",
      "indoorUnitId": "iu-iu-46427",
      "minHeatingTempC": -25,
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh48pv-1-iu-46456",
      "slug": "kerr-a-kmh48pv-1-iu-46456",
      "modelId": "model-kerr-a-kmh48pv-1",
      "outdoorUnitId": "ou-kerr-a-kmh48pv-1",
      "indoorUnitId": "iu-iu-46456",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18su-1-b-kmh18sv-1",
      "slug": "kerr-a-kmh18su-1-b-kmh18sv-1",
      "modelId": "model-kerr-a-kmh18su-1",
      "outdoorUnitId": "ou-kerr-a-kmh18su-1",
      "indoorUnitId": "iu-b-kmh18sv-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24sv-1-b-kmh24sv-1",
      "slug": "kerr-a-kmh24sv-1-b-kmh24sv-1",
      "modelId": "model-kerr-a-kmh24sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh24sv-1",
      "indoorUnitId": "iu-b-kmh24sv-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24su-1-b-kmh24sv-1",
      "slug": "kerr-a-kmh24su-1-b-kmh24sv-1",
      "modelId": "model-kerr-a-kmh24su-1",
      "outdoorUnitId": "ou-kerr-a-kmh24su-1",
      "indoorUnitId": "iu-b-kmh24sv-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18sv-1-b-kmh18sv-1",
      "slug": "kerr-a-kmh18sv-1-b-kmh18sv-1",
      "modelId": "model-kerr-a-kmh18sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh18sv-1",
      "indoorUnitId": "iu-b-kmh18sv-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp18sa-1-b-khp18sa-1",
      "slug": "kerr-a-khp18sa-1-b-khp18sa-1",
      "modelId": "model-kerr-a-khp18sa-1",
      "outdoorUnitId": "ou-kerr-a-khp18sa-1",
      "indoorUnitId": "iu-b-khp18sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp24sa-1-b-khp24sa-1",
      "slug": "kerr-a-khp24sa-1-b-khp24sa-1",
      "modelId": "model-kerr-a-khp24sa-1",
      "outdoorUnitId": "ou-kerr-a-khp24sa-1",
      "indoorUnitId": "iu-b-khp24sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-zkp24sa-1-b-zkp24sa-1",
      "slug": "kerr-a-zkp24sa-1-b-zkp24sa-1",
      "modelId": "model-kerr-a-zkp24sa-1",
      "outdoorUnitId": "ou-kerr-a-zkp24sa-1",
      "indoorUnitId": "iu-b-zkp24sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp24sa-1-b-khp24ca-1",
      "slug": "kerr-a-khp24sa-1-b-khp24ca-1",
      "modelId": "model-kerr-a-khp24sa-1",
      "outdoorUnitId": "ou-kerr-a-khp24sa-1",
      "indoorUnitId": "iu-b-khp24ca-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp18sa-1-b-khp181a-1",
      "slug": "kerr-a-khp18sa-1-b-khp181a-1",
      "modelId": "model-kerr-a-khp18sa-1",
      "outdoorUnitId": "ou-kerr-a-khp18sa-1",
      "indoorUnitId": "iu-b-khp181a-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.6,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp09sa-1-b-khp12da-1",
      "slug": "kerr-a-khp09sa-1-b-khp12da-1",
      "modelId": "model-kerr-a-khp09sa-1",
      "outdoorUnitId": "ou-kerr-a-khp09sa-1",
      "indoorUnitId": "iu-b-khp12da-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18su-1a-b-kmh18uu-1",
      "slug": "kerr-a-kmh18su-1a-b-kmh18uu-1",
      "modelId": "model-kerr-a-kmh18su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh18su-1a",
      "indoorUnitId": "iu-b-kmh18uu-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24sv-1-c-vmh24cv-1",
      "slug": "kerr-a-kmh24sv-1-c-vmh24cv-1",
      "modelId": "model-kerr-a-kmh24sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh24sv-1",
      "indoorUnitId": "iu-c-vmh24cv-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh09sv-1-b-kmh09cu-1",
      "slug": "kerr-a-kmh09sv-1-b-kmh09cu-1",
      "modelId": "model-kerr-a-kmh09sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh09sv-1",
      "indoorUnitId": "iu-b-kmh09cu-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp09sa-1-b-khp09da-1",
      "slug": "kerr-a-khp09sa-1-b-khp09da-1",
      "modelId": "model-kerr-a-khp09sa-1",
      "outdoorUnitId": "ou-kerr-a-khp09sa-1",
      "indoorUnitId": "iu-b-khp09da-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24sv-1-b-kmh24cv-1",
      "slug": "kerr-a-kmh24sv-1-b-kmh24cv-1",
      "modelId": "model-kerr-a-kmh24sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh24sv-1",
      "indoorUnitId": "iu-b-kmh24cv-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24sv-1-b-kmh24uu-1",
      "slug": "kerr-a-kmh24sv-1-b-kmh24uu-1",
      "modelId": "model-kerr-a-kmh24sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh24sv-1",
      "indoorUnitId": "iu-b-kmh24uu-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18sv-1-b-kmh18uu-1",
      "slug": "kerr-a-kmh18sv-1-b-kmh18uu-1",
      "modelId": "model-kerr-a-kmh18sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh18sv-1",
      "indoorUnitId": "iu-b-kmh18uu-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24su-1a-b-kmh24uu-1",
      "slug": "kerr-a-kmh24su-1a-b-kmh24uu-1",
      "modelId": "model-kerr-a-kmh24su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh24su-1a",
      "indoorUnitId": "iu-b-kmh24uu-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp24sa-1-b-khp24ua-1",
      "slug": "kerr-a-khp24sa-1-b-khp24ua-1",
      "modelId": "model-kerr-a-khp24sa-1",
      "outdoorUnitId": "ou-kerr-a-khp24sa-1",
      "indoorUnitId": "iu-b-khp24ua-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp18sa-1-b-khp18ua-1",
      "slug": "kerr-a-khp18sa-1-b-khp18ua-1",
      "modelId": "model-kerr-a-khp18sa-1",
      "outdoorUnitId": "ou-kerr-a-khp18sa-1",
      "indoorUnitId": "iu-b-khp18ua-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh09sv-1-b-kmh09du-1",
      "slug": "kerr-a-kmh09sv-1-b-kmh09du-1",
      "modelId": "model-kerr-a-kmh09sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh09sv-1",
      "indoorUnitId": "iu-b-kmh09du-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh30sg-1-b-kmh30sg-1",
      "slug": "kerr-a-kmh30sg-1-b-kmh30sg-1",
      "modelId": "model-kerr-a-kmh30sg-1",
      "outdoorUnitId": "ou-kerr-a-kmh30sg-1",
      "indoorUnitId": "iu-b-kmh30sg-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18su-1a-b-kmh18cu-1",
      "slug": "kerr-a-kmh18su-1a-b-kmh18cu-1",
      "modelId": "model-kerr-a-kmh18su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh18su-1a",
      "indoorUnitId": "iu-b-kmh18cu-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp18sa-1-b-khp18wa-1",
      "slug": "kerr-a-khp18sa-1-b-khp18wa-1",
      "modelId": "model-kerr-a-khp18sa-1",
      "outdoorUnitId": "ou-kerr-a-khp18sa-1",
      "indoorUnitId": "iu-b-khp18wa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp18sa-1-b-khp18ca-1",
      "slug": "kerr-a-khp18sa-1-b-khp18ca-1",
      "modelId": "model-kerr-a-khp18sa-1",
      "outdoorUnitId": "ou-kerr-a-khp18sa-1",
      "indoorUnitId": "iu-b-khp18ca-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp12sa-1-b-khp12da-1",
      "slug": "kerr-a-khp12sa-1-b-khp12da-1",
      "modelId": "model-kerr-a-khp12sa-1",
      "outdoorUnitId": "ou-kerr-a-khp12sa-1",
      "indoorUnitId": "iu-b-khp12da-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18sv-1-b-kmh18cu-1",
      "slug": "kerr-a-kmh18sv-1-b-kmh18cu-1",
      "modelId": "model-kerr-a-kmh18sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh18sv-1",
      "indoorUnitId": "iu-b-kmh18cu-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh12sv-1-b-kmh12du-1",
      "slug": "kerr-a-kmh12sv-1-b-kmh12du-1",
      "modelId": "model-kerr-a-kmh12sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh12sv-1",
      "indoorUnitId": "iu-b-kmh12du-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp33sa-1-b-khp33sa-1",
      "slug": "kerr-a-khp33sa-1-b-khp33sa-1",
      "modelId": "model-kerr-a-khp33sa-1",
      "outdoorUnitId": "ou-kerr-a-khp33sa-1",
      "indoorUnitId": "iu-b-khp33sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18sv-1-b-kmh18su-1",
      "slug": "kerr-a-kmh18sv-1-b-kmh18su-1",
      "modelId": "model-kerr-a-kmh18sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh18sv-1",
      "indoorUnitId": "iu-b-kmh18su-1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18su-1a-b-kmh18su-1a",
      "slug": "kerr-a-kmh18su-1a-b-kmh18su-1a",
      "modelId": "model-kerr-a-kmh18su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh18su-1a",
      "indoorUnitId": "iu-b-kmh18su-1a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18su-1-b-kmh18su-1a",
      "slug": "kerr-a-kmh18su-1-b-kmh18su-1a",
      "modelId": "model-kerr-a-kmh18su-1",
      "outdoorUnitId": "ou-kerr-a-kmh18su-1",
      "indoorUnitId": "iu-b-kmh18su-1a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18su-1a-b-kmh18su-1",
      "slug": "kerr-a-kmh18su-1a-b-kmh18su-1",
      "modelId": "model-kerr-a-kmh18su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh18su-1a",
      "indoorUnitId": "iu-b-kmh18su-1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24sv-1-b-kmh24du-1",
      "slug": "kerr-a-kmh24sv-1-b-kmh24du-1",
      "modelId": "model-kerr-a-kmh24sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh24sv-1",
      "indoorUnitId": "iu-b-kmh24du-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24su-1a-b-kmh24du-1",
      "slug": "kerr-a-kmh24su-1a-b-kmh24du-1",
      "modelId": "model-kerr-a-kmh24su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh24su-1a",
      "indoorUnitId": "iu-b-kmh24du-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-ksp09sa-1-b-ksp09sa-1",
      "slug": "kerr-a-ksp09sa-1-b-ksp09sa-1",
      "modelId": "model-kerr-a-ksp09sa-1",
      "outdoorUnitId": "ou-kerr-a-ksp09sa-1",
      "indoorUnitId": "iu-b-ksp09sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp18sa-1-b-kxp18sa-1",
      "slug": "kerr-a-kxp18sa-1-b-kxp18sa-1",
      "modelId": "model-kerr-a-kxp18sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp18sa-1",
      "indoorUnitId": "iu-b-kxp18sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp24sa-1-b-khp24da-1",
      "slug": "kerr-a-khp24sa-1-b-khp24da-1",
      "modelId": "model-kerr-a-khp24sa-1",
      "outdoorUnitId": "ou-kerr-a-khp24sa-1",
      "indoorUnitId": "iu-b-khp24da-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24su-1a-b-kmh24su-1",
      "slug": "kerr-a-kmh24su-1a-b-kmh24su-1",
      "modelId": "model-kerr-a-kmh24su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh24su-1a",
      "indoorUnitId": "iu-b-kmh24su-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24su-1a-b-kmh24su-1a",
      "slug": "kerr-a-kmh24su-1a-b-kmh24su-1a",
      "modelId": "model-kerr-a-kmh24su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh24su-1a",
      "indoorUnitId": "iu-b-kmh24su-1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24sv-1-b-kmh24su-1",
      "slug": "kerr-a-kmh24sv-1-b-kmh24su-1",
      "modelId": "model-kerr-a-kmh24sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh24sv-1",
      "indoorUnitId": "iu-b-kmh24su-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh24su-1-b-kmh24su-1a",
      "slug": "kerr-a-kmh24su-1-b-kmh24su-1a",
      "modelId": "model-kerr-a-kmh24su-1",
      "outdoorUnitId": "ou-kerr-a-kmh24su-1",
      "indoorUnitId": "iu-b-kmh24su-1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp24sa-1-b-khp24aa-1",
      "slug": "kerr-a-khp24sa-1-b-khp24aa-1",
      "modelId": "model-kerr-a-khp24sa-1",
      "outdoorUnitId": "ou-kerr-a-khp24sa-1",
      "indoorUnitId": "iu-b-khp24aa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp18sa-1-b-khp18da-1",
      "slug": "kerr-a-khp18sa-1-b-khp18da-1",
      "modelId": "model-kerr-a-khp18sa-1",
      "outdoorUnitId": "ou-kerr-a-khp18sa-1",
      "indoorUnitId": "iu-b-khp18da-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp24sa-1-b-kxp24sa-1",
      "slug": "kerr-a-kxp24sa-1-b-kxp24sa-1",
      "modelId": "model-kerr-a-kxp24sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp24sa-1",
      "indoorUnitId": "iu-b-kxp24sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd18sa-1-b-kcd18sa-1",
      "slug": "kerr-a-kcd18sa-1-b-kcd18sa-1",
      "modelId": "model-kerr-a-kcd18sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd18sa-1",
      "indoorUnitId": "iu-b-kcd18sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp18sa-1-b-khp18aa-1",
      "slug": "kerr-a-khp18sa-1-b-khp18aa-1",
      "modelId": "model-kerr-a-khp18sa-1",
      "outdoorUnitId": "ou-kerr-a-khp18sa-1",
      "indoorUnitId": "iu-b-khp18aa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd18sa-1-b-vcd18sa-1",
      "slug": "kerr-a-kcd18sa-1-b-vcd18sa-1",
      "modelId": "model-kerr-a-kcd18sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd18sa-1",
      "indoorUnitId": "iu-b-vcd18sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18sv-1-b-kmh18du-1",
      "slug": "kerr-a-kmh18sv-1-b-kmh18du-1",
      "modelId": "model-kerr-a-kmh18sv-1",
      "outdoorUnitId": "ou-kerr-a-kmh18sv-1",
      "indoorUnitId": "iu-b-kmh18du-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kmh18su-1a-b-kmh18du-1",
      "slug": "kerr-a-kmh18su-1a-b-kmh18du-1",
      "modelId": "model-kerr-a-kmh18su-1a",
      "outdoorUnitId": "ou-kerr-a-kmh18su-1a",
      "indoorUnitId": "iu-b-kmh18du-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp36sa-1-b-kxp36sa-1",
      "slug": "kerr-a-kxp36sa-1-b-kxp36sa-1",
      "modelId": "model-kerr-a-kxp36sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp36sa-1",
      "indoorUnitId": "iu-b-kxp36sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd24sa-1-b-vcd24sa-1",
      "slug": "kerr-a-kcd24sa-1-b-vcd24sa-1",
      "modelId": "model-kerr-a-kcd24sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd24sa-1",
      "indoorUnitId": "iu-b-vcd24sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd24sa-1-b-kcd24sa-1",
      "slug": "kerr-a-kcd24sa-1-b-kcd24sa-1",
      "modelId": "model-kerr-a-kcd24sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd24sa-1",
      "indoorUnitId": "iu-b-kcd24sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-ksp24sa-1-b-ksp24sa-1",
      "slug": "kerr-a-ksp24sa-1-b-ksp24sa-1",
      "modelId": "model-kerr-a-ksp24sa-1",
      "outdoorUnitId": "ou-kerr-a-ksp24sa-1",
      "indoorUnitId": "iu-b-ksp24sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30sa-1-b-kxp30sa-1",
      "slug": "kerr-a-kxp30sa-1-b-kxp30sa-1",
      "modelId": "model-kerr-a-kxp30sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp30sa-1",
      "indoorUnitId": "iu-b-kxp30sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd24sa-1-mcd1824b1a",
      "slug": "kerr-a-kcd24sa-1-mcd1824b1a",
      "modelId": "model-kerr-a-kcd24sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd24sa-1",
      "indoorUnitId": "iu-mcd1824b1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-khp33sa-1-b-khp30aa-1",
      "slug": "kerr-a-khp33sa-1-b-khp30aa-1",
      "modelId": "model-kerr-a-khp33sa-1",
      "outdoorUnitId": "ou-kerr-a-khp33sa-1",
      "indoorUnitId": "iu-b-khp30aa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp48sa-1-b-kxp48sa-1",
      "slug": "kerr-a-kxp48sa-1-b-kxp48sa-1",
      "modelId": "model-kerr-a-kxp48sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp48sa-1",
      "indoorUnitId": "iu-b-kxp48sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd30sa-1-b-vcd30sa-1",
      "slug": "kerr-a-kcd30sa-1-b-vcd30sa-1",
      "modelId": "model-kerr-a-kcd30sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd30sa-1",
      "indoorUnitId": "iu-b-vcd30sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd30sa-1-b-kcd30sa-1",
      "slug": "kerr-a-kcd30sa-1-b-kcd30sa-1",
      "modelId": "model-kerr-a-kcd30sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd30sa-1",
      "indoorUnitId": "iu-b-kcd30sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp18sa-1-kxp1824a1a",
      "slug": "kerr-a-kxp18sa-1-kxp1824a1a",
      "modelId": "model-kerr-a-kxp18sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp18sa-1",
      "indoorUnitId": "iu-kxp1824a1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp18ta-1-kxp1824b1a",
      "slug": "kerr-a-kxp18ta-1-kxp1824b1a",
      "modelId": "model-kerr-a-kxp18ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp18ta-1",
      "indoorUnitId": "iu-kxp1824b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp18sa-1-mxp1824b1a",
      "slug": "kerr-a-kxp18sa-1-mxp1824b1a",
      "modelId": "model-kerr-a-kxp18sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp18sa-1",
      "indoorUnitId": "iu-mxp1824b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp18sa-1-mxp1824a1a",
      "slug": "kerr-a-kxp18sa-1-mxp1824a1a",
      "modelId": "model-kerr-a-kxp18sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp18sa-1",
      "indoorUnitId": "iu-mxp1824a1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp18ta-1-kxp1824a1a",
      "slug": "kerr-a-kxp18ta-1-kxp1824a1a",
      "modelId": "model-kerr-a-kxp18ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp18ta-1",
      "indoorUnitId": "iu-kxp1824a1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp18sa-1-kxp1824b1a",
      "slug": "kerr-a-kxp18sa-1-kxp1824b1a",
      "modelId": "model-kerr-a-kxp18sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp18sa-1",
      "indoorUnitId": "iu-kxp1824b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd18sa-1-mcd1824b1a",
      "slug": "kerr-a-kcd18sa-1-mcd1824b1a",
      "modelId": "model-kerr-a-kcd18sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd18sa-1",
      "indoorUnitId": "iu-mcd1824b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd36sa-1-b-vcd36sa-1",
      "slug": "kerr-a-kcd36sa-1-b-vcd36sa-1",
      "modelId": "model-kerr-a-kcd36sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd36sa-1",
      "indoorUnitId": "iu-b-vcd36sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd36sa-1-b-kcd36sa-1",
      "slug": "kerr-a-kcd36sa-1-b-kcd36sa-1",
      "modelId": "model-kerr-a-kcd36sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd36sa-1",
      "indoorUnitId": "iu-b-kcd36sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp24ta-1-kxp1824b1a",
      "slug": "kerr-a-kxp24ta-1-kxp1824b1a",
      "modelId": "model-kerr-a-kxp24ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp24ta-1",
      "indoorUnitId": "iu-kxp1824b1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30sa-1-mxp3036c1a",
      "slug": "kerr-a-kxp30sa-1-mxp3036c1a",
      "modelId": "model-kerr-a-kxp30sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp30sa-1",
      "indoorUnitId": "iu-mxp3036c1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp24ta-1-kxp1824a1a",
      "slug": "kerr-a-kxp24ta-1-kxp1824a1a",
      "modelId": "model-kerr-a-kxp24ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp24ta-1",
      "indoorUnitId": "iu-kxp1824a1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30sa-1-kxp2436c1a",
      "slug": "kerr-a-kxp30sa-1-kxp2436c1a",
      "modelId": "model-kerr-a-kxp30sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp30sa-1",
      "indoorUnitId": "iu-kxp2436c1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30sa-1-kxp2436b1a",
      "slug": "kerr-a-kxp30sa-1-kxp2436b1a",
      "modelId": "model-kerr-a-kxp30sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp30sa-1",
      "indoorUnitId": "iu-kxp2436b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp60sa-1-mxp4860c1a",
      "slug": "kerr-a-kxp60sa-1-mxp4860c1a",
      "modelId": "model-kerr-a-kxp60sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp60sa-1",
      "indoorUnitId": "iu-mxp4860c1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp60sa-1-kxp4860c1a",
      "slug": "kerr-a-kxp60sa-1-kxp4860c1a",
      "modelId": "model-kerr-a-kxp60sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp60sa-1",
      "indoorUnitId": "iu-kxp4860c1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp24sa-1-kxp1824a1a",
      "slug": "kerr-a-kxp24sa-1-kxp1824a1a",
      "modelId": "model-kerr-a-kxp24sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp24sa-1",
      "indoorUnitId": "iu-kxp1824a1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp24sa-1-kxp1824b1a",
      "slug": "kerr-a-kxp24sa-1-kxp1824b1a",
      "modelId": "model-kerr-a-kxp24sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp24sa-1",
      "indoorUnitId": "iu-kxp1824b1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp24sa-1-mxp1824a1a",
      "slug": "kerr-a-kxp24sa-1-mxp1824a1a",
      "modelId": "model-kerr-a-kxp24sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp24sa-1",
      "indoorUnitId": "iu-mxp1824a1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30ta-1-kxp3036c1a",
      "slug": "kerr-a-kxp30ta-1-kxp3036c1a",
      "modelId": "model-kerr-a-kxp30ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp30ta-1",
      "indoorUnitId": "iu-kxp3036c1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30ta-1-kxp3036b1a",
      "slug": "kerr-a-kxp30ta-1-kxp3036b1a",
      "modelId": "model-kerr-a-kxp30ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp30ta-1",
      "indoorUnitId": "iu-kxp3036b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30sa-1-mxp3036b1a",
      "slug": "kerr-a-kxp30sa-1-mxp3036b1a",
      "modelId": "model-kerr-a-kxp30sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp30sa-1",
      "indoorUnitId": "iu-mxp3036b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp60sa-1-b-kxp60sa-1",
      "slug": "kerr-a-kxp60sa-1-b-kxp60sa-1",
      "modelId": "model-kerr-a-kxp60sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp60sa-1",
      "indoorUnitId": "iu-b-kxp60sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp24sa-1-mxp1824b1a",
      "slug": "kerr-a-kxp24sa-1-mxp1824b1a",
      "modelId": "model-kerr-a-kxp24sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp24sa-1",
      "indoorUnitId": "iu-mxp1824b1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp36sa-1-kxp2436c1a",
      "slug": "kerr-a-kxp36sa-1-kxp2436c1a",
      "modelId": "model-kerr-a-kxp36sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp36sa-1",
      "indoorUnitId": "iu-kxp2436c1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp36sa-1-mxp3036b1a",
      "slug": "kerr-a-kxp36sa-1-mxp3036b1a",
      "modelId": "model-kerr-a-kxp36sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp36sa-1",
      "indoorUnitId": "iu-mxp3036b1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp36ta-1-kxp3036b1a",
      "slug": "kerr-a-kxp36ta-1-kxp3036b1a",
      "modelId": "model-kerr-a-kxp36ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp36ta-1",
      "indoorUnitId": "iu-kxp3036b1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp36ta-1-kxp3036c1a",
      "slug": "kerr-a-kxp36ta-1-kxp3036c1a",
      "modelId": "model-kerr-a-kxp36ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp36ta-1",
      "indoorUnitId": "iu-kxp3036c1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp36sa-1-mxp3036c1a",
      "slug": "kerr-a-kxp36sa-1-mxp3036c1a",
      "modelId": "model-kerr-a-kxp36sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp36sa-1",
      "indoorUnitId": "iu-mxp3036c1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp36sa-1-kxp2436b1a",
      "slug": "kerr-a-kxp36sa-1-kxp2436b1a",
      "modelId": "model-kerr-a-kxp36sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp36sa-1",
      "indoorUnitId": "iu-kxp2436b1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd48sa-1-b-kcd48sa-1",
      "slug": "kerr-a-kcd48sa-1-b-kcd48sa-1",
      "modelId": "model-kerr-a-kcd48sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd48sa-1",
      "indoorUnitId": "iu-b-kcd48sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd48sa-1-b-vcd48sa-1",
      "slug": "kerr-a-kcd48sa-1-b-vcd48sa-1",
      "modelId": "model-kerr-a-kcd48sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd48sa-1",
      "indoorUnitId": "iu-b-vcd48sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd30sa-1-mcd3036c1a",
      "slug": "kerr-a-kcd30sa-1-mcd3036c1a",
      "modelId": "model-kerr-a-kcd30sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd30sa-1",
      "indoorUnitId": "iu-mcd3036c1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd36sa-1-mcd3036b1a",
      "slug": "kerr-a-kcd36sa-1-mcd3036b1a",
      "modelId": "model-kerr-a-kcd36sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd36sa-1",
      "indoorUnitId": "iu-mcd3036b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30sa-1-kxp2436a1a",
      "slug": "kerr-a-kxp30sa-1-kxp2436a1a",
      "modelId": "model-kerr-a-kxp30sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp30sa-1",
      "indoorUnitId": "iu-kxp2436a1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30ta-1-kxp3036a1a",
      "slug": "kerr-a-kxp30ta-1-kxp3036a1a",
      "modelId": "model-kerr-a-kxp30ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp30ta-1",
      "indoorUnitId": "iu-kxp3036a1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd60sa-1-b-kcd60sa-1",
      "slug": "kerr-a-kcd60sa-1-b-kcd60sa-1",
      "modelId": "model-kerr-a-kcd60sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd60sa-1",
      "indoorUnitId": "iu-b-kcd60sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd60sa-1-b-vcd60sa-1",
      "slug": "kerr-a-kcd60sa-1-b-vcd60sa-1",
      "modelId": "model-kerr-a-kcd60sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd60sa-1",
      "indoorUnitId": "iu-b-vcd60sa-1",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp30sa-1-mxp3036a1a",
      "slug": "kerr-a-kxp30sa-1-mxp3036a1a",
      "modelId": "model-kerr-a-kxp30sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp30sa-1",
      "indoorUnitId": "iu-mxp3036a1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd30sa-1-mcd3036b1a",
      "slug": "kerr-a-kcd30sa-1-mcd3036b1a",
      "modelId": "model-kerr-a-kcd30sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd30sa-1",
      "indoorUnitId": "iu-mcd3036b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kcd36sa-1-mcd3036c1a",
      "slug": "kerr-a-kcd36sa-1-mcd3036c1a",
      "modelId": "model-kerr-a-kcd36sa-1",
      "outdoorUnitId": "ou-kerr-a-kcd36sa-1",
      "indoorUnitId": "iu-mcd3036c1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp60sa-1-kxp4860d1a",
      "slug": "kerr-a-kxp60sa-1-kxp4860d1a",
      "modelId": "model-kerr-a-kxp60sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp60sa-1",
      "indoorUnitId": "iu-kxp4860d1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp60sa-1-mxp4860d1a",
      "slug": "kerr-a-kxp60sa-1-mxp4860d1a",
      "modelId": "model-kerr-a-kxp60sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp60sa-1",
      "indoorUnitId": "iu-mxp4860d1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp48ta-1-kxp4860c1a",
      "slug": "kerr-a-kxp48ta-1-kxp4860c1a",
      "modelId": "model-kerr-a-kxp48ta-1",
      "outdoorUnitId": "ou-kerr-a-kxp48ta-1",
      "indoorUnitId": "iu-kxp4860c1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp48sa-1-kxp4860c1a",
      "slug": "kerr-a-kxp48sa-1-kxp4860c1a",
      "modelId": "model-kerr-a-kxp48sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp48sa-1",
      "indoorUnitId": "iu-kxp4860c1a",
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
          "sourceId": "src-kerr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-a-kxp48sa-1-mxp4860c1a",
      "slug": "kerr-a-kxp48sa-1-mxp4860c1a",
      "modelId": "model-kerr-a-kxp48sa-1",
      "outdoorUnitId": "ou-kerr-a-kxp48sa-1",
      "indoorUnitId": "iu-mxp4860c1a",
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
          "sourceId": "src-kerr-epa",
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
